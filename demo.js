var courses=[
    { name: 'Javascript', coin: 1000 }, { name: 'PHP', coin: 1200 }, { name: 'Dart', coin: 1400 }, { name: 'Ruby', coin: 1600 }, { name: 'ReactJS', coin: 1600 }, { name: 'React-Native', coin: 1800 }, ];
function run(courses) {
    var totalCoin= courses.reduce(function(total,course){
    return total+course.coin;
    },0);
    console.log(totalCoin);

}
run(courses);