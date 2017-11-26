import * as echarts from 'echarts';

let myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    series: {
        type: 'pie',
        data: [
            { name: 'A', value: 1212 },
            { name: 'B', value: 2323 },
            { name: 'C', value: 1919 }
        ]
    }
});