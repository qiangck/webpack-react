import React from 'react';

var HelloWorld = React.createClass({
  render(){
    return(
      <p>
        
        <input type="text" placeholder="请输入你的名字" />
        <br/><br/><br/><br/>
        你好{this.props.data.toTimeString()}
      </p>
    );
  }
});

setInterval(function(){
  React.render(
    <HelloWorld data={new Date()} />,
    document.getElementById("react")
  )
},500);