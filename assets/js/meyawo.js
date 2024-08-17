/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});


// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


// kavithai 


  document.getElementById('downloadButton').addEventListener('click', function() {
    // URL of the file you want to download
    const fileUrl = 'assets/imgs/zoho.png.png'; // Replace with the actual file URL

    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop(); // Optional: set the file name to the file's name

    // Append the anchor to the body
    document.body.appendChild(link);

    // Programmatically click the anchor to trigger the download
    link.click();

    // Remove the anchor from the body
    document.body.removeChild(link);
  });

  //anniversary gift


  document.getElementById('anniversaryGift').addEventListener('click', function() {
    // URL of the file you want to download
    const fileUrl = 'assets/imgs/zoho.png.png'; // Replace with the actual file URL

    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop(); // Optional: set the file name to the file's name

    // Append the anchor to the body
    document.body.appendChild(link);

    // Programmatically click the anchor to trigger the download
    link.click();

    // Remove the anchor from the body
    document.body.removeChild(link);
  });
