// 以下皆为 phone 页面下的js代码哦
//! 当整个页面及所有依赖资源如样式表和图片都已完成加载时，将触发load事件。
window.addEventListener('load', function () {
    // 获取 s_box 盒子 使用鼠标悬浮显示， 离开隐藏
    var dt = document.querySelector('.dt');
    var s_box = document.querySelector('.s_box');
    // 鼠标放到 dt 上， s_box 显示
    dt.addEventListener('mouseover', function () {
        // alert('123');
        s_box.style.display = 'block';
    })
    dt.addEventListener('mouseout', function () {
        s_box.style.display = 'none';
    })
    s_box.addEventListener('mouseover', function () {
        s_box.style.display = 'block';
    })
    s_box.addEventListener('mouseout', function () {
        s_box.style.display = 'none';
    })

    // 放大镜效果
    var preview = document.querySelector('.preview');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过 preview 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 2. 移动的时候，让黄色盒子跟着鼠标来走
    preview.addEventListener('mousemove', function (e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // (2) 减去盒子的高度 300的一半 是 150 就是我们mask 的最终left 和 top 值
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // 遮挡层的最大移动距离
        var maskMax = preview.offsetWidth - mask.offsetWidth;
        // (4) 如果x坐标小于了0 就让它停在0 的位置
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            //! preview.offsetWidth - mask.offsetWidth preview 盒子的宽度减去 mask 盒子的宽度
            maskX = maskMax;
        }

        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            //! preview.offsetHeight - mask.offsetHeight preview 盒子的宽度减去 mask 盒子的宽度
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // mask.style.transform = 'translate(-50%, -50%)';
        //! 大图片的移动距离 = 遮挡层移动的距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var bigImg = document.querySelector('.bigImg');
        // 大图片的最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
})