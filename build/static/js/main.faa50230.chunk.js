(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(10),c=n(11),o=n(15),s=n(12),u=n(16),f=n(13),l=n(1),d=n.n(l),h=n(14),m=n.n(h),v=n(4),b=n(2);n(36);v.c("webgl");var p=.1;function x(){return(x=Object(f.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("https://raw.githubusercontent.com/weijie0216/RustTest/main/models/best_web_model/model.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var y={1:{name:"Rust",id:1},2:{name:"Other",id:2}},w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).videoRef=d.a.createRef(),n.canvasRef=d.a.createRef(),n.detectFrame=function(e,t){v.b().startScope(),t.executeAsync(n.process_input(e)).then(function(a){n.renderPredictions(a,e),requestAnimationFrame(function(){n.detectFrame(e,t)}),v.b().endScope()})},n.renderPredictions=function(e){var t=n.canvasRef.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var a="16px sans-serif";t.font=a,t.textBaseline="top";var r=e[4].arraySync(),i=e[5].arraySync(),c=e[6].dataSync(),o=n.buildDetectedObjects(i,p,r,c,y);o.forEach(function(e){var n=e.bbox[0],r=e.bbox[1],i=e.bbox[2],c=e.bbox[3];t.strokeStyle="#00FFFF",t.lineWidth=4,t.strokeRect(n,r,i,c),t.fillStyle="#00FFFF";var o=t.measureText(e.label+" "+(100*e.score).toFixed(2)+"%").width,s=parseInt(a,10);t.fillRect(n,r,o+4,s+4)}),o.forEach(function(e){var n=e.bbox[0],a=e.bbox[1];t.fillStyle="#000000",t.fillText(e.label+" "+(100*e.score).toFixed(2)+"%",n,a)})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var t=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise(function(t,n){e.videoRef.current.onloadedmetadata=function(){t()}})}),n=function(){return x.apply(this,arguments)}();Promise.all([n,t]).then(function(t){e.detectFrame(e.videoRef.current,t[0])}).catch(function(e){console.error(e)})}}},{key:"process_input",value:function(e){return v.a.fromPixels(e).toInt().transpose([0,1,2]).expandDims()}},{key:"buildDetectedObjects",value:function(e,t,n,a,r){var i=[],c=document.getElementById("frame");return e[0].forEach(function(e,o){if(e>t){var s=[],u=n[0][o][0]*c.offsetHeight,f=n[0][o][1]*c.offsetWidth,l=n[0][o][2]*c.offsetHeight,d=n[0][o][3]*c.offsetWidth;s[0]=f,s[1]=u,s[2]=d-f,s[3]=l-u,i.push({class:a[o],label:r[a[o]].name,score:e.toFixed(4),bbox:s})}}),i}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("h1",null,"Real-Time Object Detection: Rust"),d.a.createElement("h3",null,"MobileNetV2"),d.a.createElement("video",{style:{height:"600px",width:"500px"},className:"size",autoPlay:!0,playsInline:!0,muted:!0,ref:this.videoRef,width:"600",height:"500",id:"frame"}),d.a.createElement("canvas",{className:"size",ref:this.canvasRef,width:"600",height:"500"}))}}]),t}(d.a.Component),g=document.getElementById("root");m.a.render(d.a.createElement(w,null),g)},30:function(e,t){},31:function(e,t){},32:function(e,t){},33:function(e,t){},34:function(e,t){},35:function(e,t){},36:function(e,t,n){}},[[17,2,1]]]);
//# sourceMappingURL=main.faa50230.chunk.js.map