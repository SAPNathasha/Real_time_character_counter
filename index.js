$(document).ready(function () {
    const maxLength = 50;
    const $textarea = $("#textarea");
    const $totalCounter = $("#total-counter");
    const $remainingCounter = $("#remaining-counter");
    const $progressBar = $(".progress");

    
    $totalCounter.text(0);
    $remainingCounter.text(maxLength);

    $textarea.on("input", function () {
        const currentLength = this.value.length;
        const remain = maxLength - currentLength;
        const percentage = (currentLength / maxLength) * 100;

        $totalCounter.text(currentLength);
        $remainingCounter.text(remain);
        $progressBar.css("width", percentage + "%");

        
        if (remain <= 10 && remain > 5) {
            $progressBar.css("background-color", "orange");
            $remainingCounter.css("color", "orange");
        } else if (remain <= 5) {
            $progressBar.css("background-color", "red");
            $remainingCounter.css("color", "red");
        } else {
            $progressBar.css("background-color", "#76eaff");
            $remainingCounter.css("color", "#76eaff");
        }
    });
});
