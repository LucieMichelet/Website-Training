function navigateToPage2() {
    const content = document.querySelector('.content');
    content.classList.add('page-transition');
    setTimeout(() => {
        window.location.href = 'test2.html';
    }, 1000);
}

function navigateToPage1() {
    const content = document.querySelector('.content');
    content.classList.add('page-transition');
    setTimeout(() => {
        window.location.href = 'test1.html';
    }, 500);
}
