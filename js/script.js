(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

// Carousel functionality
let currentSlide = 0;
const totalSlides = 5;

function updateCarousel() {
	$('.carousel-section').removeClass('active');
	$(`.carousel-section:eq(${currentSlide})`).addClass('active');
	$('#current-slide').text(currentSlide + 1);
	
	// Update button states
	$('#prev-btn').prop('disabled', currentSlide === 0);
	$('#next-btn').prop('disabled', currentSlide === totalSlides - 1);
}

$(document).ready(function() {
	// Initialize carousel
	updateCarousel();
	
	$('#next-btn').click(function() {
		if (currentSlide < totalSlides - 1) {
			currentSlide++;
			updateCarousel();
		}
	});
	
	$('#prev-btn').click(function() {
		if (currentSlide > 0) {
			currentSlide--;
			updateCarousel();
		}
	});
	
	// Keyboard navigation
	$(document).on('keydown', function(e) {
		if (e.key === 'ArrowRight') {
			$('#next-btn').click();
		} else if (e.key === 'ArrowLeft') {
			$('#prev-btn').click();
		}
	});
	
	// RSVP Generate Form
	$('#generate-form').click(function() {
		var guestCount = parseInt($('#guest-count').val());
		if (guestCount > 0 && guestCount <= 20) {
			$('#guest-rows').empty();
			for (var i = 0; i < guestCount; i++) {
				var row = '<tr class="guest-row">' +
					'<td><input type="text" placeholder="Guest Name" class="guest-name"></td>' +
					'<td><select class="attendance">' +
						'<option value="yes">Yes</option>' +
						'<option value="no">No</option>' +
					'</select></td>' +
					'<td><input type="text" placeholder="Music Wish (optional)" class="music-wish"></td>' +
					'</tr>';
				$('#guest-rows').append(row);
			}
			$('#rsvp-form').show();
		} else {
			alert('Please enter a valid number of guests (1-20).');
		}
	});

	// RSVP Submit
	$('#submit-rsvp').click(async function() {
		console.log('Submit RSVP clicked');
		var rsvpData = [];
		$('.guest-row').each(function() {
			var name = $(this).find('.guest-name').val();
			var attendance = $(this).find('.attendance').val();
			var musicWish = $(this).find('.music-wish').val();
			rsvpData.push({
				name: name,
				attendance: attendance,
				musicWish: musicWish
			});
		});

		if (rsvpData.length === 0) {
			alert('Please generate the RSVP form and add at least one guest before submitting.');
			return;
		}

		if (!window.db) {
			alert('Firebase is not initialized correctly yet. Please check the console for errors.');
			console.error('Firebase DB not initialized. window.db is', window.db);
			return;
		}
		try {
			// Add to Firebase using compat API
			const docRef = await window.db.collection("rsvps").add({
				guests: rsvpData,
				timestamp: new Date(),
				wedding: "Nina & Mohyiddine"
			});
			console.log("RSVP submitted with ID: ", docRef.id);
			alert('Thank you for your RSVP! We will be in touch.');
		} catch (e) {
			console.error("Error adding document: ", e);
			alert('Error submitting RSVP. Please try again.');
		}
	});
});

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
});

// Set the date we're counting down to
var countDownDate = new Date("June 24, 2027 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: Friday, 24 June 2027!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Mohyiddine Oujarrar', styles1, styles2);
