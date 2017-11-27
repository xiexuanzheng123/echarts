import * as echarts from 'echarts';

let myChart = echarts.init(document.getElementById('main'));

myChart.setOption({
    title: {
        text: '项目周期图'
    },
    legend: {
        data: [
            '计划完成时间',
            '实际完成时间'
        ]
    },
    xAxis: {
        type: 'time',
    },
    yAxis: {
        type: 'category',
        data: ['项目周期', '阶段一', '阶段二', '阶段三'].reverse()
    },
    tooltip: {
        position: ['50%', '50%'],
        trigger: 'item',
        formatter: function () {
            return '123';
        }
    },
    series: [
        {
            type: 'bar',
            barWidth: '40',
            barGap: '-100%',
            stack: '计划',
            name: '123',
            babel: '123',
            makePoint: 'circle',
            animation: false,
            itemStyle: {
                normal: {//正常样式
                    opacity: 0
                },
                emphasis: {//高亮状态
                    opacity: 0
                }
            },
            data: [
                [new Date(2016,3,1), "项目总周期"],
                [new Date(2016,3,1), "阶段一"],
                [new Date(2016,3,29), "阶段二"],
                [new Date(2016,5,10), "阶段三"]
            ]
        },
        {
            type: 'bar',
            barWidth: '40',
            stack: "计划",
            barMaxWidth: '40',
            barCategoryGap: '3%',
            itemStyle: {
                normal: {
                    color: 'red'
                },
                emphasis: {
                    opacity: 0.5
                }
            },
            data: [
                [new Date(2016,6,30), "项目总周期"],
                [new Date(2016,3,29), "阶段一"],
                [new Date(2016,5,10), "阶段二"],
                [new Date(2016,6,30), "阶段三"]
            ]
        },
        {
            type: 'bar',
            barWidth: '40',
            stack: "进度",
            itemStyle: {
                normal: {
                    opacity: 0
                },
                emphasis: {
                    opacity: 0
                }
            },
            data: [
                [new Date(2016,3,1), "项目总周期"],
                [new Date(2016,3,1), "阶段一"],
                [new Date(2016,3,29), "阶段二"],
                [new Date(2016,5,10), "阶段三"]
            ] 
        },
        {
            type: 'bar',
            barWidth: '40',
            stack: "进度",
            itemStyle: {
                normal: {
                    color: 'green'
                }
            },
            data: [
                [new Date(2016,4,30), "项目总周期"],
                [new Date(2016,3,29), "阶段一"],
                [new Date(2016,4,30), "阶段二"],
                [new Date(2016,5,10), "阶段三"]
            ] 
        }
    ]
});
window.addEventListener('resize', function () {
    
    　　myChart.resize();
       });