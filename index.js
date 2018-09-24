function hello() {
    alert('hello')
}

$('a').on('click', function () {
    alert('click (111)')
}).on('click', function () {
    alert('click (222)')
})
