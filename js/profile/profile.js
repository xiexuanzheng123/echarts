import * as echarts from 'echarts';

var data = [];
var dataCount = 2;
var startTime = +new Date();
var categories = ['JS Heap', 'Documents', 'Nodes', 'Listeners'];
var types = [
    {name: 'JS Heap', color: '#7b9ce1', startTime: 1511924880356, endTime: 1511926880356},
    {name: 'JS Heap', color: '#7b9ce1', startTime: 1511930880356, endTime: 1511934880356},
    {name: 'JS Heap', color: '#7b9ce1', startTime: 1511930880356, endTime: 1511934880356},
    {name: 'Documents', color: '#bd6d6c', startTime: 1511924880356, endTime: 1511934880356},
    {name: 'Nodes', color: '#75d874', startTime: 1511924880356, endTime: 1511934880356},
    {name: 'Listeners', color: '#e0bc78', startTime: 1511924880356, endTime: 1511934880356},
    // {name: 'GPU Memory', color: '#dc77dc', startTime: 1511870985924, endTime: 1511870185924},
    // {name: 'GPU', color: '#72b362', startTime: 1511870985924, endTime: 1511870185924}
];

// Generate mock data
// echarts.util.each(types, function (type, index) {
//     // var baseTime = startTime;
//     // console.log(baseTime, 'baseTime');
//     for (var i = 0; i < dataCount; i++) {
//         //var typeItem = types[Math.round(Math.random() * (types.length - 1))];
//         //var duration = Math.round(Math.random() * 10000);
//         //console.log(duration, 'duration');
//         var baseTime = types[i].startTime;
//         var endTime = types[i].endTime;
//         data.push({
//             name: types[i].name,
//             value: [
//                 index,
//                 baseTime,
//                 20 * i,
//                 endTime
//                 //baseTime += types[i].time,
//                 //duration
//             ],
//             itemStyle: {
//                 normal: {
//                     color: types[i].color
//                 }
//             }
//         });
//         //baseTime += Math.round(Math.random() * 2000);
//         //baseTime += types[i].time;
//     }
// });
for(let i = 0; i < types.length; i++) {
    data.push({
            name: types[i].name,
            value: [
                categories.indexOf(types[i].name),
                types[i].startTime,
                types[i].endTime
                //baseTime += types[i].time,
                //duration
            ],
            itemStyle: {
                normal: {
                    color: types[i].color
                }
            }
        })
};
console.log(data,'data');
function renderItem(params, api) {//params 包含了当前数据信息和坐标系的信息//api包含一些开发者可调用的方法集合
    console.log(params, 'params');
    console.log(api, 'api');
    var categoryIndex = api.value(0);//取出dataItem中的值，取出value中第一个纬度的值
    var start = api.coord([api.value(1), categoryIndex]);//进行坐标转换计算
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1];
    //console.log(api.size([0, 1]));
    console.log(start, 'start');
    console.log(end, 'end');
    console.log(height, 'height')
    return {//返回图形元素
        type: 'rect',
        // shape: echarts.graphic.clipRectByRect({
        //     x: start[0],
        //     y: start[1] - height / 2,
        //     width: end[0] - start[0],
        //     height: height
        // }, {
        //     x: params.coordSys.x,
        //     y: params.coordSys.y,
        //     width: params.coordSys.width,
        //     height: params.coordSys.height
        // }),
        shape: echarts.graphic.clipRectByRect ({
            x: start[0], 
            y: start[1] - height / 2, 
            width: end[0] - start[0], 
            height: height
        }, {
            x: 0,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height:params.coordSys.height
        }),
        style: api.style()
    };
}

let myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    tooltip: {
        formatter: function (params) {
            //console.log(params, 'tooltip')
            return params.marker + params.name + ': ' + params.value[1] + ' ~ ' + params.value[2];
        }
    },
    title: {
        text: 'Profile',
        left: 'center'
    },
    legend: {
        data: ['bar', 'error']
    },
    // dataZoom: [{
    //     type: 'slider',
    //     filterMode: 'weakFilter',
    //     showDataShadow: false,
    //     top: 400,
    //     height: 10,
    //     borderColor: 'transparent',
    //     backgroundColor: '#e2e2e2',
    //     handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
    //     handleSize: 20,
    //     handleStyle: {
    //         shadowBlur: 6,
    //         shadowOffsetX: 1,
    //         shadowOffsetY: 2,
    //         shadowColor: '#aaa'
    //     },
    //     labelFormatter: ''
    // }, {
    //     type: 'inside',
    //     filterMode: 'weakFilter'
    // }],
    grid: {
        height: 400,
        width: 800
    },
    xAxis: {
        min: 1511924000000,
        scale: true,
        axisLabel: {
            interval: 1,
            showMinLabel: true,
            //rotate: -45,
            align: 'left',
            //backgroundColor: '#ccc',
            //padding: '0px',
            formatter: function (value) {
                var date = new Date(value);
                var texts = [date.getHours(), (date.getMinutes()), date.getSeconds()];
                // if (index === 0) {
                //     texts.unshift(date.getYear());
                // }
                return value;
            },
            axisTick: {
                length: 60
            }
        },
        //data: [16653, 116653, 216653, 316656, 416653]
    },
    yAxis: {
        data: categories,
        axisTick: {
            length: 70
        }
    },
    series: [{
        name: 'test',
        id: 1,
        type: 'custom',
        renderItem: renderItem,//自定义渲染逻辑
        itemStyle: {
            normal: {
                opacity: 0.8
            }
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    }]
});