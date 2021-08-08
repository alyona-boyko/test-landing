@@include('wow.min.js');
new WOW().init();

var totalAmount = 1000;
var options1 = {
chart: {
height: 280,
type: "radialBar",
},
series: ['67', '82', '97'],
colors: ['#826AF9', '#9E86FF', '#F7D2FF'],
plotOptions: {
radialBar: {
dataLabels: {
name: {
    fontSize: '14px',
    offsetY: 20,
    color: "#9AA1A9",
},
total: {
    fontSize: '14px',
    color: "#9AA1A9",
    show: true,
    label: 'Total',
    formatter: function(val) {
        return `$ ${totalAmount}`
    }
},
value: {
    fontSize: '20px',
    color: "#505D6F",
    offsetY: -20,
    formatter: function(val) {
        var calc = (totalAmount * val) / 100;
        return `$ ${calc.toFixed(2)}`;
    }
},
}
}
},
stroke: {
  lineCap: 'round'
},
labels: ['Facebook', 'Twitter', 'Instagram'],
};

new ApexCharts(document.querySelector("#chart1"), options1).render();

