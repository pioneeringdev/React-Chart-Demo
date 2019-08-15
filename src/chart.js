import React from 'react';
import { subscribeToTimer, disconnect } from './socket';
import Chart from "react-apexcharts";
import './index.css';
export default class CustomChart extends React.Component {
    state = {
        value: [],
        timestamp: [],
        frequency: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }

    barChartOptions = {
        chart: {
            id: "line"
        },
        title: { 
            text: "Bar-Chart for Random Numbers",
            align: "center",
            style: {
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'red'
            }
        },
        xaxis: {
            categories: [
                "-100 ~ -90",
                "-90 ~ -80",
                "-80 ~ -70",
                "-70 ~ -60",
                "-60 ~ -50",
                "-50 ~ -40",
                "-40 ~ -30",
                "-30 ~ -20",
                "-20 ~ -10",
                "-10 ~ 0",
                "0 ~ 10",
                "10 ~ 20",
                "20 ~ 30",
                "30 ~ 40",
                "40 ~ 50",
                "50 ~ 60",
                "60 ~ 70",
                "70 ~ 80",
                "80 ~ 90",
                "90 ~ 100",
            ]
        }
    };

    lineChartOptions = {
        chart: {
            id: "line"
        },
        title: { 
            text: "Line-Chart for Random Numbers",
            align: "center",
            style: {
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'red'
            }
        },
    };
    
    componentDidMount() {
        subscribeToTimer(this.subscriber)
    };

    componentWillUnmount() {
        disconnect();
    }

    subscriber = ({ value, timestamp}) => {
        const index = Math.floor(value/10) + 10;
        const frequency = [...this.state.frequency];
        frequency[index] = frequency[index] + 1;
        this.setState({ 
            value: [...this.state.value, value.toFixed(2)], 
            timestamp: [...this.state.timestamp, timestamp],
            frequency: [...frequency]
        });
    };

    render() {
        const lineChartOptions = {
            ...this.lineChartOptions,
            xaxis: {
                categories: this.state.timestamp
            }
        };
        const lineChartSeries = [{
            name: 'Random-Number',
            data: this.state.value
        }];
        const barChartSeries = [{
            name: 'Frequency',
            data: this.state.frequency
        }];

        return (<div>
            <h1> Testing Project Chart Application</h1>
            <Chart 
                options={lineChartOptions}
                series={lineChartSeries}
                type="line"
                className="line-chart"
                height="300"
            />
            <Chart 
                options={this.barChartOptions}
                series={barChartSeries}
                type="bar"
                height="300"
                className="bar-chart"
            />
        </div>);
    }
}