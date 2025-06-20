const changeDefaultAction = () => {
    const btnsDelete = document.getElementsByName('delete-action');
    btnsDelete.forEach((btn => btn.addEventListener('click', function (e) {
        e.preventDefault();
        const id = btn.getAttribute('data');
        fetch(`/handle-delete/${id}?_method=DELETE`, {
            method: 'POST', // Specify the HTTP method
        })
    })))

};

changeDefaultAction();