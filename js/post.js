let posts = [
	{
		title: "Blog Post 1",
		publish: true,
		create: "Dec 12, 2016"
	},
	{
		title: "Blog Post 2",
		publish: true,
		create: "Dec 13, 2016"
	},
	{
		title: "Blog Post 3",
		publish: false,
		create: "Dec 14, 2016"
	},
	{
		title: "Blog Post 4",
		publish: true,
		create: "Dec 15, 2016"
	}
];

let tBody = document.getElementById("tBody");
let searchPost = document.getElementById("search-post");
searchPost.addEventListener("keyup", search);

display();

function display(){

	posts.forEach(function(el,ind){

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

	posts.forEach(function(el, ind){
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

