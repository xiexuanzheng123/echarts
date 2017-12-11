import * as echarts from 'echarts';

let myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    title: {
        text: 'Echarts入门实例',
        //show: false
        // link: 'www.baidu.com',
        // target: 'www.baidu.com'
        // textStyle: {
        //     color: 'green',
        //     fontStyle: 'italic',
        //     fontWeight: 'bolder',
        //     fontFamily: 'monospace',
        //     textBorderColor: 'yellow',
        //     textShadowColor: 'black',
        // },
        // padding: [5, 10],
        subtext: '实例',
        // subtextStyle: {
        //     color: 'white'
        // },
        // itemGap: 120,
        // zlevel: 2,
        // left: 40
        //backgroundColor: 'lightblue',
        borderColor: 'red',
        //borderWidth: '4px',
        borderRadius: 10,
        fontStyle: 'italic',
        //fontFamily: 'monospace',
    },
    legend: {
        //type: 'scroll',
        //left: 'right',
        //orient: 'vertical',
        // right: 10,
        top: 30,
        align: 'right',
        data: ['衬衫', '羊毛衫'],
        padding: 10,
        // width: 20,
        // height: 20,
        zlevel: 1,
        itemGap: 10,
        formatter: function (name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');;
        },
        selectedMode: 'multiple',
        tooltip: {
            show: true
        }
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '衬衫',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },{
        name: '羊毛衫',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});