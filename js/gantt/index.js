import * as echarts from 'echarts';

let myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    title: {
        text: '工作流条形图'
    },
    legend: {
        data: [
            '计划完成时间',
            '实际完成时间'
        ]
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {
        data: ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七']
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            console.log(params);
            let res = params[0].name + '<br />';
            let date0 = params[0].data;
            let date1 = params[1].data;
            let date2 = params[2].data;
            date0 = date0.getFullYear() + '-' + (date0.getMonth() + 1) + '-' + date0.getDate();
            date1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();
            date2 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
            res += params[0].seriesName + ":" + date0 + "</br>";
            res += params[1].seriesName + ":" + date1 + "</br>";
            res += params[2].seriesName + ":" + date2 + "</br>";
            return res;
        }
    },
    series: [
        {
            name: '开始时间',
            type: 'bar',
            stack: '总量',
            itemStyle : { normal: {color: 'rgba(0, 0, 0, 0)'}},
            data: [
                    new Date("2015/09/2"),
                    new Date("2015/09/15"),
                    new Date("2015/09/15"),
                    new Date("2015/10/03"),
                    new Date("2015/10/04"),
                    new Date("2015/10/05"),
                    new Date("2015/10/06")
                ]
        },{
            name: '计划完成时间',
            type: 'bar',
            stack: '总量',
            data: [
                    new Date("2015/09/12"),
                    new Date("2015/09/20"),
                    new Date("2015/09/25"),
                    new Date("2015/10/05"),
                    new Date("2015/10/07"),
                    new Date("2015/10/09"),
                    new Date("2015/10/12")
             ]
        },{
            name: '实际完成时间',
            type: 'bar',
            stack: '总量',
            data: [
                    new Date("2015/09/5"),
                    new Date("2015/09/21"),
                    new Date("2015/09/26"),
                    new Date("2015/10/10"),
                    new Date("2015/10/15"),
                    new Date("2015/10/19"),
                    new Date("2015/10/16")
                ]
        }
    ]
})