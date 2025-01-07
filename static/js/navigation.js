$(document).ready(function(){
    $(".sibling").hover(
        function() {
            // On hover, add the 'blur' class to all siblings except the hovered one
            $(this).siblings().addClass('blur-md transition-all duration-300');
            $(this).addClass('scale-105  ease-in-out z-10 shadow-lg');
        }, 
        function() {
            // On hover out, remove the 'blur' class from all siblings
            $(this).siblings().removeClass('blur-md transition-all duration-300');
            $(this).removeClass('scale-105   ease-in-out z-10 shadow-lg');
        }
    );

})