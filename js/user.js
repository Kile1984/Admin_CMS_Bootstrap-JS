let users = [
	{
		name: "Jill Smit",
		eMail: true,
		joined: "Dec 12, 2016"
	},
	{
		name: "Eva Jackson",
		eMail: true,
		joined: "Dec 13, 2016"
	},
	{
		name: "John Doe",
		eMail: false,
		joined: "Dec 14, 2016"
	},
	{
		name: "Stephanie Landon",
		eMail: true,
		joined: "Dec 15, 2016"
	}
];

let tBody = document.getElementById("tBody");
let searchUser = document.getElementById("search-user");
searchUser.addEventListener("keyup", search);

display();

function display(){

	users.forEach(function(el,ind){

		if ( el.eMail == true ){
			el.eMail = '<i class="fas fa-check-circle"></i>';
		}else{
			el.eMail = '<i class="fas fa-times-circle"></i>';
		}
		tBody.innerHTML += 
		`
		<tr>
			<td>${el.name}</td>
			<td>${el.eMail}</td>
			<td>${el.joined}</td>
			<td>
				<a href="edit.html" class="btn btn-dark">Edit</a>
				<a href="#" class="btn btn-danger">Delete</a>
			</td>
		</tr>
		`
	})
}

function search(e){
	let text = e.target.value.toLowerCase();
	tBody.innerHTML = "";

	users.forEach(function(el, ind){
		if ( el.name.toLowerCase().indexOf(text) != -1 ){
			tBody.innerHTML += 
			`
			<tr>
				<td>${el.name}</td>
				<td>${el.eMail}</td>
				<td>${el.joined}</td>
				<td>
					<a href="edit.html" class="btn btn-dark">Edit</a>
					<a href="#" class="btn btn-danger">Delete</a>
				</td>
			</tr>
	`
		}
	})
}

