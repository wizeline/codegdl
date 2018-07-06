window.onload = function(){	
	
	document.getElementById('profilecardname').textContent = localStorage.getItem('name');
	document.getElementById('profilecarduid').textContent = ('@'+localStorage.getItem('uid'));

	let statslistitemcount = document.getElementById('statslistitemcount');

	let posttweetbut = document.getElementById('posttweetbut');
	
	let totalchars =  document.getElementById('totalchars');
	
	let posttweetta = document.getElementById('posttweetta');
	
	let tweetscontainer = document.getElementById('tweetscontainer');
	
	// newline only on skift + enter
	posttweetta.onkeypress = function(e){
		if (e.keyCode == 13 && !e.shiftKey)
		{
		  e.preventDefault();
		  return false;
		}
		
	};
	//handle tweet does not pass 250 characters 
	posttweetta.onkeyup = function(e){
		let totchars = this.value.length;
		if(totchars <= 250)
			totalchars.textContent = totchars ;
		else
		{
			totalchars.textContent = '250' ;
			this.value = this.value.substring(0, 250);
		}
	};
	
	//handle posting tweet
	posttweetbut.onclick = function(){
		let taval = posttweetta.value.trim();
		if(taval.length > 0)
		{
			tweetscontainer.prepend(tweetitem(taval));
			posttweetta.value = '';	
			statslistitemcount.textContent = parseInt(statslistitemcount.textContent) + 1;	
		}
	};
	
	//handle Like and retweets
	tweetscontainer.onclick = function(e){
		let elem = e.target;

		if(elem.classList.contains('retweet')){
			let tweetstatscount = elem.getElementsByClassName('tweetstatscount')[0]
			console.log(tweetstatscount,tweetstatscount.textContent);
			tweetstatscount.textContent = parseInt(tweetstatscount.textContent) + 1;
			tweetscontainer.prepend(tweetitem(tweetstatscount.closest('.tweetcontainer').querySelector('p').textContent));
			statslistitemcount.textContent = parseInt(statslistitemcount.textContent) + 1;	
			return
		}

		if(elem.classList.contains('like')){
			let tweetstatscount = elem.getElementsByClassName('tweetstatscount')[0]
			let liked = tweetstatscount.getElementsByClassName('red')
	
			if(elem.classList.contains('red')) {
				elem.classList.remove("red")
				tweetstatscount.textContent = parseInt(tweetstatscount.textContent) - 1;
			}else{
				elem.classList.add("red")
				tweetstatscount.textContent = parseInt(tweetstatscount.textContent) + 1;
			}
			return
		}
	};

	// create a new tweet element 
	function tweetitem(taval)
	{
		let li = document.createElement("li")
		li.innerHTML = '<li class="tweetcontainer">'+
					'<img class="tweetprofimg" src="http://3.bp.blogspot.com/-JCYefwq__2U/TxCfC3s1ZpI/AAAAAAAAKcM/u5mw7qPAL0w/s300-c/Camilla-Belle-6.jpg">'+
					'<span class="tweetprofname">'+localStorage.getItem('name')+'</span>'+
					'<span class="tweetprofuid">@'+localStorage.getItem('uid')+'</span>'+
					'<div class="ml58px">'+
						'<p style="margin: 0px;">'+taval+'</p>'+
						'<div class="mt10px">'+
							'<span class="retweet tweetstats">'+
								'ret'+
								'<span class="tweetstatscount">0</span>'+
							'</span>'+
							'<span class="like tweetstats">'+
								'like'+
								'<span class="tweetstatscount">0</span>'+
							'</span>'+
						'</div>'+
					'</div>'+
				'</li>';
			return li.firstChild;
	}
}