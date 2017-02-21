//ABRE E FECHA A PORTA
portafechada = false;
var abrePorta = function() {
	$('.porta1').animate({
    	left: "-=30",
    },300);
    $('.porta2').animate({
    	left: "+=30",
    },300);
    
    setTimeout(function fechaPorta(){
		$('.porta1').animate({
	    	left: "+=30",
	    },300);
	    $('.porta2').animate({
	    	left: "-=30",
	    },300);
	    portafechada = true;
	}, 3000)
	$(bThis).removeClass('active');
	$('.painel .botao').removeClass('ocupado');
}


$(document).ready(function() {
	 if ($(this).hasClass('active')){
	 	return false;
	 }
	var andarorigem = 0;

	//ANDAR ORIGEM PARA CONTROLA VELOCIDADE
	function andarOrigem(){
		andarorigem = $('#elevador').css('bottom');
		andarorigem = andarorigem.replace('px',''); 

		if ( andarorigem == '5'){		
			andarorigem = 1000;
			//$('#andarT .botao').removeClass('active');
		}else if ( andarorigem == '137'){
			andarorigem = 2000;
			//$('#andar1 .botao').removeClass('active');
		}else if ( andarorigem == '269'){
			andarorigem = 3000;
			$('#andar2 .botao').removeClass('active');
		}else if ( andarorigem == '401'){
			andarorigem = 4000;
			//$('#andar3 .botao').removeClass('active');
		}else if ( andarorigem == '533'){
			andarorigem = 5000;
			//$('#andar4 .botao').removeClass('active');
		}else if ( andarorigem == '665'){
			andarorigem = 6000;
			//$('#andar5 .botao').removeClass('active');
		}
	}

	//PAINEL ANDARES

	//TERREO
	$('#andarT .botao').click(function() {
        var andarDestino = 1000;
        if (!$(this).hasClass('active') && !$(this).hasClass('ocupado')) {
	        bThis = $(this);
	        andarOrigem();
	        velocidade = andarDestino +- andarorigem
	        if(velocidade < 0){
	       	 velocidade = velocidade * -1
	        }
			bThis.addClass('active');
			if( $('.porta1').css('left') == '0px'){
				setTimeout(function() { andaElevador(); }, 2800);
				$('.painel .botao').addClass('ocupado');
	    	}else{
	    		andaElevador();
	    	}
	    	function andaElevador(){
				$('.painel .botao').addClass('ocupado');
				$('#elevador').animate({
					'bottom' : "5px"
				},velocidade);
				$('#elevador').promise().done(function(){
				    abrePorta();
				});
				return false;
			}
			if ($(this).hasClass('ocupado')) {
        		setTimeout(function() { andaElevador(); }, 2800);
	        }
		}
    });
    //PRIMEIRO ANDAR
    $('#andar1 .botao').click(function() {
        var andarDestino = 2000;
        if (!$(this).hasClass('active') && !$(this).hasClass('ocupado')) {
	        //CALCULA VELOCIDADE
	        andarOrigem();
	        velocidade = andarDestino +- andarorigem
	        if(velocidade < 0){
	        	velocidade = velocidade * -1
	        }
	        
	        bThis = $(this);
	        bThis.addClass('active');
	        if( $('.porta1').css('left') == '0px'){
				setTimeout(function() { andaElevador(); }, 2800);
				$('.painel .botao').addClass('ocupado');
	    	}else{
	    		andaElevador();
	    	}
	    	function andaElevador(){
		        $('#elevador').animate({
		        	'bottom' : "137px"
				},velocidade);
		        $('#elevador').promise().done(function(){
				    abrePorta();
				});
		        return false;
	    	}
    	}
    });
    //SEGUNDO ANDAR
    $('#andar2 .botao').click(function() {
        var andarDestino = 3000;
        if (!$(this).hasClass('active') && !$(this).hasClass('ocupado')) {
	        //CALCULA VELOCIDADE
	        andarOrigem();
	        velocidade = andarDestino +- andarorigem
	        if(velocidade < 0){
	        	velocidade = velocidade * -1
	        }

	        bThis = $(this);
	        bThis.addClass('active');
	        if( $('.porta1').css('left') == '0px'){
				setTimeout(function() { andaElevador(); }, 2800);
	    	}else{
	    		andaElevador();
	    	}
	    	function andaElevador(){
		        $('#elevador').animate({
		        	'bottom' : "269px"
				},velocidade);
		        $('#elevador').promise().done(function(){
				    abrePorta();
				});
				$('.painel .botao').addClass('ocupado');
		        return false;
	    	}
	    }
	    if ($(this).hasClass('ocupado')) {
    		console.log(bThis);
    		$(this).addClass('active');
    		setTimeout(function() { 
			$('#elevador').animate({
	        	'bottom' : "269px"
			},velocidade);
	        $('#elevador').promise().done(function(){
			    abrePorta();
			});
			return false;
    		}, 5000);
	    }
    });
    //TERCEIRO ANDAR
    $('#andar3 .botao').click(function() {
       var andarDestino = 4000;
        if (!$(this).hasClass('active') && !$(this).hasClass('ocupado')) {
	        //CALCULA VELOCIDADE
	        andarOrigem();
	        velocidade = andarDestino +- andarorigem
	        if(velocidade < 0){
	        	velocidade = velocidade * -1
	        }
	       
	        bThis = $(this);
	    	bThis.addClass('active');
	    	if( $('.porta1').css('left') == '0px'){
				setTimeout(function() { andaElevador(); }, 2800);
	    	}else{
	    		andaElevador();
	    	}
	    	function andaElevador(){
		    	$('#elevador').animate({
		        	'bottom' : "401px"
				},velocidade);
		    	$('#elevador').promise().done(function(){
				    abrePorta();
				});
				$('.painel .botao').addClass('ocupado');
		        return false;
		     }
	    }
    });
    //QUARTO ANDAR
    $('#andar4 .botao').click(function() {
       var andarDestino = 5000;
        if (!$(this).hasClass('active') && !$(this).hasClass('ocupado')) {
	        //CALCULA VELOCIDADE
	        andarOrigem();
	        velocidade = andarDestino +- andarorigem
	        if(velocidade < 0){
	        	velocidade = velocidade * -1
	        }
	       bThis = $(this);
	       bThis.addClass('active');
	       if( $('.porta1').css('left') == '0px'){
				setTimeout(function() { andaElevador(); }, 2800);
	    	}else{
	    		andaElevador();
	    	}
	    	function andaElevador(){
		       $('#elevador').animate({
		        	'bottom' : "533px"
				},velocidade);
		       $('#elevador').promise().done(function(){
				    abrePorta();
				});
		       $('.painel .botao').addClass('ocupado');
		        return false;
	    	}
	    }
    });
    //QUINTO ANDAR
    $('#andar5 .botao').click(function() {
       var andarDestino = 6000;
        if (!$(this).hasClass('active') && !$(this).hasClass('ocupado')) {
	        //CALCULA VELOCIDADE
	        andarOrigem();
	        velocidade = andarDestino +- andarorigem
	        if(velocidade < 0){
	        	velocidade = velocidade * -1
	        }
	       bThis = $(this);
	       bThis.addClass('active');
	       if( $('.porta1').css('left') == '0px'){
				setTimeout(function() { andaElevador(); }, 2800);
	    	}else{
	    		andaElevador();
	    	}
	    	function andaElevador(){
		       $('#elevador').animate({
		        	'bottom' : "665px"
				},velocidade);
		       $('#elevador').promise().done(function(){
				    abrePorta();
				    $(bThis).removeClass('active');
				});
		       	$('.painel .botao').addClass('ocupado');
		        return false;
	    	}
    	}
    });
});