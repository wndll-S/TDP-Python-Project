// Function to stop video playback by clearing the iframe source
function stopVideo(iframeId) {
    var iframe = document.getElementById(iframeId);
    iframe.src = ''; // Clear the src to stop playback
}

// Function to set and play video
function playVideo(iframeId, videoSrc) {
    var iframe = document.getElementById(iframeId);
    iframe.src = videoSrc; // Set the src to start playback
}

// Switch to student video
$("#studentList").click(function(){
    toggleActiveClass("student");
    // Show and hide corresponding videos
    $("#studentVid").removeClass("hidden");
    $("#adminVid").addClass("hidden");
    $("#staffVid").addClass("hidden");

    // Stop any active video before switching
    stopVideo('adminIframe');
    stopVideo('staffIframe');

    // Play student video
    const studentVideoSrc = $("#studentVid").data("video");
    playVideo('studentIframe', studentVideoSrc);
});

// Switch to staff video
$("#staffList").click(function(){
    toggleActiveClass("staff");
    // Show and hide corresponding videos
    $("#staffVid").removeClass("hidden");
    $("#adminVid").addClass("hidden");
    $("#studentVid").addClass("hidden");

    // Stop any active video before switching
    stopVideo('adminIframe');
    stopVideo('studentIframe');

    // Play staff video
    const staffVideoSrc = $("#staffVid").data("video");
    playVideo('staffIframe', staffVideoSrc);
});

// Switch to admin video
$("#adminList").click(function(){
    toggleActiveClass("admin");
    // Show and hide corresponding videos
    $("#adminVid").removeClass("hidden");
    $("#studentVid").addClass("hidden");
    $("#staffVid").addClass("hidden");
    // Stop any active video before switching
    stopVideo('studentIframe');
    stopVideo('staffIframe');

    // Play admin video
    const adminVideoSrc = $("#adminVid").data("video");
    playVideo('adminIframe', adminVideoSrc);
});

function toggleActiveClass(id) {
    $('#vidSelect').hide();
    $('.sibling').removeClass("btn-active");
    $("#"+ id + "List").addClass("btn-active");
}

