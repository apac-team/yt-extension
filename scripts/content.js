if (document.readyState !== 'loading') {
    console.log('dom loaded');
    main();
} else {
    console.log('waiting');
    document.addEventListener('DOMContentLoaded', function () {
        console.log('dom loaded');
        main();
    });
}

function main() {
    
}



