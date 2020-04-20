!function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0;
        let id = setInterval(()=>{
            n+=1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },10)
    }
    let code = `
    /*
     * 首先，需要准备皮卡丘的皮肤
     */
    .preview{
    height: 100%;
    background: #FEE433;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.skin{
    position: relative;
    width: 100vw;
    height: 165px;
}
/*
 *接下来，画皮卡丘的鼻子
 */
.nose{
    width:0;
    height:0;
    border: 12px solid;
    border-color: black transparent transparent;
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}
.eye{
    width:49px;
    height:49px;
    background: #2E2E2E;
    border: 2px solid black;
    border-radius:49px;
    position: absolute;
}
.eye::before{
    content: '';
    display: block;
    width:24px;
    height:24px;
    background: white;
    position: absolute;
    left: 4px;
    border-radius:50%;
    border: 2px solid black;
}
.eye.right{
    left:50%;
    transform:translateX(90px);
}
.eye.left{
    right:50%;
    transform:translateX(-90px);
}
.face{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
.face.right{
    left: 50%;
    margin-left: 116px;
}
.face.left{
    right: 50%;
    margin-right: 116px;
}
.upperLip{
    height: 20px;
    width: 80px;
    border: 2px solid black;
    background: #FEE433;
    position: absolute;
    top: 50px;
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
.lowerLip-container{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 300px;
    height: 110px;
    overflow: hidden;
}
.lowerLip{
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.lowerLip::after{
    content: '';
    width: 85px;
    height: 85px;
    background: #FC4A62;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
} `
    writeCode('',code)
}.call()