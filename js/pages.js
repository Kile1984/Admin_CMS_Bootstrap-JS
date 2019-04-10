let pages = [
	{
		title: "Home",
		publish: true,
		create: "Dec 12, 2016"
	},
	{
		title: "About",
		publish: true,
		create: "Dec 13, 2016"
	},
	{
		title: "Services",
		publish: false,
		create: "Dec 14, 2016"
	},
	{
		title: "Contact",
		publish: true,
		create: "Dec 15, 2016"
	}
];

let tBody = document.getElementById("tBody");
let searchPage = document.getElementById("search-page");
searchPage.addEventListener("keyup", search);

display();

function display(){

	pages.forEach(function(el,ind){

		if ( el.publish == true ){
			el.publish = '<i class="fas fa-check-circle"></i>';
		}else{
			el.publish = '<i class="fas fa-times-circle"></i>';
		}
		tBody.innerHTML += 
		`
		<tr>
			<td>${el.title}</td>
			<td>${el.publish}</td>
			<td>${el.create}</td>
			<td>
				<a href="edit.html" class="btn btn-dark" id=${ind}>Edit</a>
				<a href="#" class="btn btn-danger">Delete</a>
			</td>
		</tr>
		`
	})
}

function search(e){
	let text = e.target.value.toLowerCase();
	tBody.innerHTML = "";

	pages.forEach(function(el, ind){
		if ( el.title.toLowerCase().indexOf(text) != -1 ){
			tBody.innerHTML += 
			`
			<tr>
				<td>${el.title}</td>
				<td>${el.publish}</td>
				<td>${el.create}</td>
				<td>
					<a href="edit.html" class="btn btn-dark">Edit</a>
					<a href="#" class="btn btn-danger">Delete</a>
				</td>
			</tr>
	`
		}
	})
}

