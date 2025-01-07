// Function to stop video playback by resetting the iframe source
function stopVideo(iframeId) {
    var iframe = document.getElementById(iframeId);
    var src = iframe.src;
    iframe.src = '';  // Temporarily clear the src to stop playback
    iframe.src = src; // Reset the src to start the video from the beginning
}

// Switch to student video
$("#studentAccount").click(function(){
    // Show and hide corresponding videos
    $("#studentVid").removeClass("hidden");
    $("#adminVid").addClass("hidden");
    $("#staffVid").addClass("hidden");
    
    // Stop any active video before switching
    stopVideo('adminIframe');
    stopVideo('staffIframe');
});

// Switch to staff video
$("#staffAccount").click(function(){
    // Show and hide corresponding videos
    $("#staffVid").removeClass("hidden");
    $("#adminVid").addClass("hidden");
    $("#studentVid").addClass("hidden");

    // Stop any active video before switching
    stopVideo('adminIframe');
    stopVideo('studentIframe');
});

$(".sibling").click(
    function() {
        $(this).addClass('hidden');
    }
);