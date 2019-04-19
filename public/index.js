/* may not need

d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('updated h1 tag');

d3.json('http://localhost:3001/api', function(err, mydata) {
    mydata.forEach(function(mls) {
        d3.select('body').append('p').text(JSON.stringify(mls.lat));
    })
    
})
*/