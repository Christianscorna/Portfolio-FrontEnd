window.addEventListener( "load", () => {
	const currentDate = new Date();
	añoCorriente.innerText = currentDate.getFullYear();
} ) 

const formulario = document.getElementById("form") ;
const inputs = document.querySelectorAll("#form input") ;

const validation = {
	user: /^[a-zA-Z0-9\_\-\.]{4,16}$/, //El usuario puede tener un monton de cosas ejem: Use_r.066
	userName: /^[a-zA-Z\s]{1,40}$/ , //El nombre de usuario no puede tener tantas cosas ejem: Gerardo Gimenez
	passwordUser: /^.{4,12}$/ //La contraseña no tiene limitaciones ejem: 0hg55__
}

function validateSection ( expresion, input, section ) {
	if ( expresion.test( input.value ) ) {
		document.getElementById( `${section}__group` ).classList.remove( "form__group-incorrect" );
		document.querySelector( `#${section}__group .form__input-wrong` ).classList.remove( "form__input-wrong-active" );
	} else {
		document.getElementById( `${section}__group` ).classList.add( "form__group-incorrect" );
		document.querySelector( `#${section}__group .form__input-wrong` ).classList.add( "form__input-wrong-active" );
	}
}

function validatePassword () {
	if ( form. ) {
		
	}
}

function formValidate ( ev ) {
	switch ( ev.target.name ) {
		case "usuario":
			validateSection( validation.user, ev.target, 'user' );
		break;

		case "nombre":
			validateSection( validation.userName, ev.target, 'name' );
		break;

		case "password":
			validateSection( validation.passwordUser, ev.target, 'password' );
			validatePassword();
		break;

		case "re-password":
			validatePassword();
		break;
	}
} ;

inputs.forEach( ( input ) => {
	input.addEventListener( "keyup", formValidate );
	input.addEventListener( "blur", formValidate );
} ) ;

formulario.addEventListener( "submit", ( ev ) => {
	ev.preventDefault();
} ) ;