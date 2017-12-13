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
        type: 'scroll',
        //left: 'right',
        //orient: 'vertical',
        // right: 10,
        top: 10,
        left: 'right',
        data: ['衬衫', '羊毛衫'],
        padding: 10,
        //width: 40,
        // height: 20,
        // zlevel: 1,
        itemGap: 10,
        formatter: function (name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei');;
        },
        selectedMode: 'multiple',
        tooltip: {
            show: true
        },
        data: [
            {
                name: '衬衫',
                icon: 'circle',
                textStyle: {
                    color: 'red'
                }
            },
            {
                name: '羊毛衫',
                icon: 'circle',
                textStyle: {
                    color: 'blue'
                }
            }
        ],
        backgroundColor: 'rgb(128, 128, 128)',
        borderColor: 'yellow',
        borderWidth: 2,
        borderRadius: 10,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, .5)',
        pageButtonItemGap: 100,
        pageButtonPosition: 'start'
    },
    grid: {
        show: true,
        z: 3,
        left: '10%',
        top: 60,
        // width: 400,
        // height: 300
        containLabel: false,
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        //borderColor: 'green',
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                axis: 'y',
                snap: false,
                z: 4,
                label: {
                    show: true,
                    formatter: function(params) {
                        //console.log(params.seriesData.axisValue);
                        return params.value;
                    },
                    padding: [5, 10, 5, 10],
                    backgroundColor: '#000'
                },
                lineStyle: {
                    color: 'pink'
                }
            },
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        }
    },
    tooltip: {},
    xAxis: {
        //show: true,
        position: 'bottom',
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        type: 'category',
        name: 'item',
        nameLocation: 'end',
        nameTextStyle: {
            color: 'green',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            align: 'right',
            lineHeight: 30,
            backgroundColor: 'lightblue',
            //padding: 10,
            rich: {
                a: {
                    color: 'red',
                    lineHeight: 10
                },
                b: {
                    backgroundColor: '#ccc',
                    height: 40
                },
                x: {
                    fontSize: 18,
                    fontFamily: 'Microsoft YaHei',
                    borderColor: '#449933',
                    borderRadius: 4
                }
            }
        },
        axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            lineStyle: {
                color: 'green',
                width: 1
            }
        },
        axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 0,
            inside: true,
            length: 280
        },
        nameGap: 10,
        boundaryGap: true,
        // min: function(value) {
        //     console.log(value);
        //     return value;
        // }
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        name: '衬衫',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});