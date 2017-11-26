import * as echarts from 'echarts';

let myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    backgroundColor: '#2c343c', 
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '60%',
        roseType: 'angle',
        data: [
            {value: 235, name: '视频广告'},
            {value: 274, name: '联盟广告'},
            {value: 310, name: '邮件营销'},
            {value: 335, name: '直接访问'},
            {value: 400, name: '搜索引擎'}
        ],
        textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
        },
        label: {
            normal: {
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        },
        // itemStyle: {
        //     // normal: {
        //     //     shadowBlur: 200,
        //     //     shadowOffsetX: 0,
        //     //     shadowOffsetY: 0,
        //     //     shadowColor: 'rgba(0, 0, 0, 0.5)'
        //     // }
        //     emphasis: {
        //         shadowBlur: 200,
        //         shadowColor: 'rgba(0, 0, 0, 0.5)'
        //     }
        // },
        
    }]
})