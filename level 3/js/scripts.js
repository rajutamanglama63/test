// this will show this message whenever page is loaded
alert("Hello TEJ!");

// this will show a greeting message whenever we click on say hello button on our sample website
document.querySelector("#btn").addEventListener("click", function() {
    alert("Hello there");
});


// adding counter functionality
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".counter_btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("increase")) {
            count++;
        }else if(styles.contains("decrease")) {
            count--;
        }else{
            count = 0;
        }
        value.textContent = count;
    })
})


