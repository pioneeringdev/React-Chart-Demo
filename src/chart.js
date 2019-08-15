import React from 'react';
import { subscribeToTimer, disconnect } from './socket';
import Chart from "react-apexcharts";

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
            chart: {
                id: "line"
            },
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

        return <div>
            <Chart 
                options={lineChartOptions}
                series={lineChartSeries}
                type="line"
                />

            <Chart 
                options={this.barChartOptions}
                series={barChartSeries}
                type="bar"
                />
        </div>
    }
}