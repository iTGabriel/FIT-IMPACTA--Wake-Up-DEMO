
// Personalização do campo de data
$(function(){
    
    var aniversario = $('.validate-input input[name="userdata"]');
    $(aniversario).mask("00/00/0000");
    
});


function cadastrarBtn(){
    let btnCadastrar = document.querySelector('#cadastrarBtn');

    btnCadastrar.addEventListener('click', function(){
        document.location.href = 'newaccount.html';
    })
}


// Validação dos campos preenchidos
$(function() {


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validação dos campos, se estão preenchidos ou não ]*/
    var username = $('.validate-input input[name="username"]');
    var userpass = $('.validate-input input[name="userpass"]');
    var useradress = $('.validate-input input[name="useradress"]');
    var userdata = $('.validate-input input[name="userdata"]');
    
    
    
    
    $('.validate-form').on('submit',function(){
        // var check = true;
        
        if($(username).val().trim() == ''){
            showValidate(username);
            // check=false;
            event.preventDefault();
        }
        
        
        if($(userpass).val().trim() == ''){
            showValidate(userpass);
            // check=false;
            event.preventDefault();
        }
        
        
        if($(useradress).val().trim() == ''){
            showValidate(useradress);
            // check=false;
            event.preventDefault();
        }
        
        
        if($(userdata).val().trim() == ''){
            showValidate(userdata);
            // check=false;
            event.preventDefault();
        }

        
        

        // return check;
    });
    
    
    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });
    
    function showValidate(input) {
        var thisAlert = $(input).parent();
        
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        
        $(thisAlert).removeClass('alert-validate');
    }
    
})