//ABRE E FECHA A PORTA
var chamadas = 0;
portafechada = false;
var abrePorta = function() {
	$('.porta1').animate({
    	left: "-=90",
    },500);
    $('.porta2').animate({
    	left: "+=90",
    },500);
    
    setTimeout(function fechaPorta(){
		var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
		$('.porta1').animate({
	    	left: "+=90",
	    },500);
	    $('.porta2').animate({
	    	left: "-=90",
	    },500);
	    portafechada = true;
	}, 3000)
	$(bThis).removeClass('active');
	$('.painel .botao').removeClass('ocupado');
	chamadas = chamadas - velocidade;
	console.log(chamadas);
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
		$('.painel .botao').addClass('ocupado');
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
        bThisFirst = $(this);
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
				$('#elevador').animate({
					'bottom' : "5px"
				},velocidade);
				$('#elevador').promise().done(function(){
				    abrePorta();
				});
				return false;
			}
		}
		else{
    		console.log(bThis);
    		$(this).addClass('active');
    		setTimeout(function() { 
				$('#elevador').animate({
	        		'bottom' : "5px"
				},velocidade);
				$('#elevador').promise().done(function(){
			   	 abrePorta();
			   	 $(bThisFirst).removeClass('active');
			   	 chamadas = chamadas += velocidade;
				});
				return false;
    		}, velocidade+4500+chamadas);
	    }
    });
    //PRIMEIRO ANDAR
    $('#andar1 .botao').click(function() {
        chamadas = chamadas += 1;
        bThisFirst = $(this);
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
    	else{
    		console.log(bThis);
    		$(this).addClass('active');
    		setTimeout(function() { 
				$('#elevador').animate({
	        		'bottom' : "137px"
				},velocidade);
				$('#elevador').promise().done(function(){
			   	 abrePorta();
			   	 $(bThisFirst).removeClass('active');
			   	 chamadas = chamadas += velocidade;
				});
				return false;
    		}, velocidade+4500+chamadas);
	    }
    });
    //SEGUNDO ANDAR
    $('#andar2 .botao').click(function() {
        chamadas = chamadas += 1;
        bThisFirst = $(this);
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
				$('.painel .botao').addClass('ocupado');
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
		        return false;
	    	}
	    }
	    else{
    		console.log(bThis);
    		$(this).addClass('active');
    		setTimeout(function() { 
				$('#elevador').animate({
	        		'bottom' : "269px"
				},velocidade);
				$('#elevador').promise().done(function(){
			   	 abrePorta();
			   	 $(bThisFirst).removeClass('active');
			   	 chamadas = chamadas += velocidade;
				});
				return false;
    		}, velocidade+4500+chamadas);
	    }
    });
    //TERCEIRO ANDAR
    $('#andar3 .botao').click(function() {
       	chamadas = chamadas += 1;
       	bThisFirst = $(this);
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
		        return false;
		     }
	    }
	    else{
    		console.log(bThis);
    		$(this).addClass('active');
    		setTimeout(function() { 
				$('#elevador').animate({
	        		'bottom' : "401px"
				},velocidade);
				$('#elevador').promise().done(function(){
			   	 abrePorta();
			   	 $(bThisFirst).removeClass('active');
			   	 chamadas = chamadas += velocidade;
				});
				return false;
    		}, velocidade+4500+chamadas);
	    }
    });
    //QUARTO ANDAR
    $('#andar4 .botao').click(function() {
       chamadas = chamadas += 1;
       bThisFirst = $(this);
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
				    $(bThis).removeClass('active');
				});
		        return false;
	    	}
	    }
	    else{
    		console.log(bThis);
    		$(this).addClass('active');
    		setTimeout(function() { 
				$('#elevador').animate({
	        		'bottom' : "533px"
				},velocidade);
				$('#elevador').promise().done(function(){
			   	 abrePorta();
			   	 $(bThisFirst).removeClass('active');
			   	 chamadas = chamadas += velocidade;
				});
				return false;
    		}, velocidade+4500+chamadas);
	    }
    });
    //QUINTO ANDAR
    $('#andar5 .botao').click(function() {
        chamadas = chamadas += 1;
        bThisFirst = $(this);
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
		        return false;
	    	}
    	}
    	else{
    		console.log(bThis);
    		$(this).addClass('active');
    		setTimeout(function() { 
				$('#elevador').animate({
	        		'bottom' : "665px"
				},velocidade);
				$('#elevador').promise().done(function(){
			   	 abrePorta();
			   	 $(bThisFirst).removeClass('active');
			   	 chamadas = chamadas += velocidade;
				});
				return false;
    		}, velocidade+4500+chamadas);
	    }
    });
});