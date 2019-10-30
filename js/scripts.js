new SimpleSlider('.simple-slider-first',{
    autoplay: true,
    class: {
      slide: 'carousel-slide'
    }
  });


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let form = document.getElementsByClassName('reservation-form')[0];
    let confirmation = document.getElementById('reservation-submit-info');
    let saveButton = document.getElementById('reservation-form-submit-button');
    let goBackButton = document.getElementById('go-back-button');

    function saveForm(){
      return new Promise((resolve)=>{
        setTimeout(()=>resolve(),2000)
      });
    }

    function setSubmitButtonSavingState(){
      saveButton.innerHTML = "Sending...";
      saveButton.disabled = true;
    }

    function setSubmitButtonNormalState(){
      saveButton.innerHTML = "Send";
      saveButton.disabled = false;
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (form.checkValidity() === false) {

      } else {
        setSubmitButtonSavingState();
        // sending data
        saveForm().then(()=>{
          setSubmitButtonNormalState();
          
          form.setAttribute( 'class', 'hidden' );
          confirmation.classList.remove('hidden');

        })
      }


      form.classList.add('was-validated');
    }, false);

    goBackButton.addEventListener('click',()=>{
      form.classList.remove('hidden');
      confirmation.setAttribute( 'class', 'hidden' );
    })

  }, false);
})();