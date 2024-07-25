const textArea = document.querySelector('.text-area');
const addTextBtn = document.querySelector('.add-text-btn');
let inputText = document.querySelectorAll('.input-text');

let count = 0;
const rgbToHex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`


// bold.addEventListener('click', () => {
//     let get = window.getSelection().toString();
//     console.log(get);
// })

$('#bg-color').val('#F8F9FA');


let id;
$('body').on('focus', '.input-text', function () {
    id = $(this).data('id');

    $('#bg-color').val(rgbToHex($(`#input-text-${id}`).css('background-color')));
    $('#text-color').val(rgbToHex($(`#input-text-${id}`).css('color')));
    $('.font-size').val(parseInt($(`#input-text-${id}`).css("font-size")));
    $('.font-family').val($(`#input-text-${id}`).css("font-family"));
});

$('body').off('change', '.font-family').on('change', '.font-family', function () {
    // console.log($(this).val());
    $(`#input-text-${id}`).css("font-family", $(this).val());
});

$('body').off('change', '.font-size').on('change', '.font-size', function () {
    $(`#input-text-${id}`).css("font-size", `${$(this).val()}px`);
});

$('body').off('change', '#text-color').on('change', '#text-color', function () {
    document.querySelector(`#input-text-${id}`).style.setProperty('color', `${$(this).val()}`, 'important');
});

$('body').off('change', '#bg-color').on('change', '#bg-color', function () {
    document.querySelector(`#input-text-${id}`).style.setProperty('background-color', `${$(this).val()}`, 'important');
});

$('body').off('click', '.strikethrough').on('click', '.strikethrough', function () {
    let highlight = window.getSelection();
    let text = $(`#input-text-${id}`).html();
    if (text.includes('<s>')) {
        $(`#input-text-${id}`).html(text.replace('<s>', ''));
    }
    else {   
        let span = '<s>' + highlight + '</s>';
        $(`#input-text-${id}`).html(text.replace(highlight, span));
    }
});

$('body').off('click', '.strikethrough').on('click', '.strikethrough', function () {
    let highlight = window.getSelection();
    let text = $(`#input-text-${id}`).html();
    if (text.includes('<s>')) {
        $(`#input-text-${id}`).html(text.replace('<s>', ''));
    }
    else {   
        let span = '<s>' + highlight + '</s>';
        $(`#input-text-${id}`).html(text.replace(highlight, span));
    }
});

$('body').off('click', '.underline').on('click', '.underline', function () {
    let highlight = window.getSelection();
    let text = $(`#input-text-${id}`).html();
    if (text.includes('<u>')) {
        $(`#input-text-${id}`).html(text.replace('<u>', ''));
    }
    else {   
        let span = '<u>' + highlight + '</u>';
        $(`#input-text-${id}`).html(text.replace(highlight, span));
    }
});

$('body').off('click', '.italic').on('click', '.italic', function () {
    let highlight = window.getSelection();
    let text = $(`#input-text-${id}`).html();
    if (text.includes('<i>')) {
        $(`#input-text-${id}`).html(text.replace('<i>', ''));
    }
    else {   
        let span = '<i>' + highlight + '</i>';
        $(`#input-text-${id}`).html(text.replace(highlight, span));
    }
});

$('body').off('click', '.bold').on('click', '.bold', function () {
    let highlight = window.getSelection();
    let text = $(`#input-text-${id}`).html();
    if (text.includes('<b>')) {
        $(`#input-text-${id}`).html(text.replace('<b>', ''));
    }
    else {   
        let span = '<b>' + highlight + '</b>';
        $(`#input-text-${id}`).html(text.replace(highlight, span));
    }
});



addTextBtn.addEventListener('click', () => {
    textArea.innerHTML += `<div id="input-text-${count}" data-id="${count}" class="input-text bg-light p-2 rounded" draggable="true" contenteditable="true"></div>`;
    inputText = document.querySelectorAll('.input-text');
    
    inputText.forEach((ele) => {
        ele.addEventListener('dragend', (e) => {
            const getStyle = window.getComputedStyle(ele);
            let newX = parseInt(getStyle.left) + e.layerX;
            let newY = parseInt(getStyle.top) + e.layerY;
        
            ele.style.left = `${newX}px`;
            ele.style.top = `${newY}px`;
        })
    });
    count++;
});
