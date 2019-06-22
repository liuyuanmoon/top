window.addEventListener('load',function () {
    let box = document.querySelector('.box');
    let mychart= echarts.init(box);
    let options ={
        backgroundColor: '#4e3e3e',

        series : [
            {
                name:'电影类型',
                type:'pie',
                data:[]
    }]
  };
let arr=[];
    for(let i=0;i<categories.length;i++){
        if(i == 0){
            continue;
        }
        let name = categories[i];
        let value = data.filter(ele=>ele[4].includes(name)).length;
        console.log(name);
        console.log(value);
        arr.push({name,value});
    }

    options.series[0].data=arr;
    mychart.setOption(options);

});