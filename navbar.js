document.getElementById("slv-navbar-expand").onclick = function()
{
	let eNavbar = document.getElementById("slv-navbar");
	if (!eNavbar.classList.contains("slv-expanded"))
	{
		eNavbar.classList.add("slv-expanded");
		eNavbar.style.width = "auto";
		document.querySelector("#slv-navbar-expand svg use").setAttribute("href", "#angles-left-light");
	}
	else
	{
		eNavbar.classList.remove("slv-expanded");
		eNavbar.style.width = "";
		document.querySelector("#slv-navbar-expand svg use").setAttribute("href", "#angles-right-light");
	}
};

function slvNavbar_orientate()
{
	let eNavbar = document.getElementById("slv-navbar");
	if (document.documentElement.clientWidth > document.documentElement.clientHeight)
	{
		eNavbar.classList.add("slv-sidebar");
		eNavbar.classList.remove("slv-topbar");
	}
	else
	{
		eNavbar.classList.add("slv-topbar");
		eNavbar.classList.remove("slv-sidebar");
	}
}
window.addEventListener("resize", slvNavbar_orientate);
slvNavbar_orientate();
