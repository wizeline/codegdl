window.onload = function(){
	let name = document.getElementById('full-name');
	let nameerror = document.getElementById('nameerror');
	
	let uid= document.getElementById('uid');
	let uiderror = document.getElementById('uiderror');
	
	let email = document.getElementById('email');
	let emailerror = document.getElementById('emailerror');
	
	let pass = document.getElementById('password');
	let passerror = document.getElementById('passerror');
	
	document.getElementById('submit_button').onclick = function(){
		let error = 0;
		nameerror.style.display = 'none';
		uiderror.style.display = 'none';
		emailerror.style.display = 'none';
    passerror.style.display = 'none';
    
		let nameval = name.value.trim();
		if(nameval.length == 0)
		{
			error = 1;
			nameerror.style.display = 'block';
    }
    
    let uidval = uid.value.trim()
		if(uidval.length == 0)
		{
			error = 1;
			uiderror.style.display = 'block';
		}
		else
		{
			uidval = uid.value.trim().replace(/\s+/g, '');
    }
    
		let emailval = email.value.trim()
		if(emailval.length == 0)
		{
			error = 1;
			emailerror.style.display = 'block';
		}
		else if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailval)))
		{
			error = 1;
			emailerror.style.display = 'block';
    }
    
		let passval = pass.value.trim()
		if(passval.length == 0)
		{
			error = 1;
			passerror.style.display = 'block';
		}
		
		if(!error)
		{
			console.log(nameval);
			console.log(uidval);
			localStorage.setItem('name', nameval);
			localStorage.setItem('uid', uidval);
			
			console.log(localStorage.getItem('name'));
			
			location.href = 'profile.html';
		}
		
	}
}