const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const x3 = document.getElementById("x3");
const x4 = document.getElementById("x4");
const name = document.getElementById("name");
const img = document.getElementById("img");
const description = document.getElementById("description");
const button = document.getElementById("button");

const projects = {
    x1 : {
        name: "Featherwold",
        img: '<img id="x1" class="project img-fluid" src="img/featherdeskmob.jpg" alt="featherwold">',
        description: "<p>Featherwold is an <span class='color bold'>E-commerce</span> site, built and designed following the guidelines of a customer request. The site's purpose is to sell artisan bespoke cushions and fabrics. Featherwold was built from the ground up, using bootstrap, html, CSS, Javascript, and the logo/graphics created on Photoshop.<br><span class='color bold'>Please note - This is a work in progress.</span></p>",
        button: "<a href='https://wrecket.github.io/Featherwold-new-final/'><button type='button' class='btn project-btn btn-warning'>Click to view</button></a>"
    },
    x2 : {
        name: "Grandma's Cookbook",
        img: '<img id="x2" class="project img-fluid" src="img/gmcb.JPG" alt="GMCB">',
        description: "<p>Grandma's Cookbook is an online recipe-book, built and designed following the guidelines of a customer request.The site's purpose is an easy-to-use website for an elderly client, and was built from the ground up, using html, CSS and Javascript.<br> <span class='color bold'>Please note - This is a work in progress.</span></p>",
        button: "<a href='https://wrecket.github.io/GMCB-Final/'><button type='button' class='btn project-btn btn-warning'>Click to view</button></a>"
    },
    x3 : {
        name: "Ryan's Woodworks",
        img: '<img id="x3" class="project img-fluid" src="img/ryanmob2.jpg" alt="Ryans Woodworks">',
        description: "<p><span class='color bold'>E-commerce</span> site made on request without guidelines. The sites purpose is to sell fully customisable handmade woodworks, and to promote the owners 'oddjob' business. Ryan's woodworks was built from the ground up, using bootstrap, HTML, CSS, Javascript, and the graphics editted and designed on photoshop.</p>",
        button: "<a href='https://wrecket.github.io/Ryans-Woodworks/'><button type='button' class='btn project-btn btn-warning'>Click to view</button></a>"
    },
    x4 : {
        name: "Movie Battle Royale",
        img: '<img id="x4" class="project img-fluid" src="img/movie.JPG" alt="Gradient finder tool">',
        description: "<p>Javascript program that makes use of a movie <span class='color bold'>database</span> API. The site's purpose is to fetch the data from the public API upon entering two movie titles, the program will then compare the statistics and highlight the winner of each category. This was build with Javascript, HTML and CSS, using Ajax.</p>",
        button: "<a href='https://wrecket.github.io/Movie/'><button type='button' class='btn project-btn btn-warning'>Click to view</button></a>"
    }
}



function projectCard(id) {
	const p = projects[id];
	name.innerHTML = p.name;
	img.innerHTML = p.img;
    description.innerHTML = p.description;	
    button.innerHTML = p.button;
}

document.querySelectorAll('.project').forEach((item) => {
	item.addEventListener('mouseover', function() {
		obj = this.id;
        projectCard(obj);
        const remove = document.getElementById("remove");		
        remove.classList.add("hide");
	});
});