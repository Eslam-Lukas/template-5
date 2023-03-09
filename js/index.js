//global functions
//active toggler
function activeToggler(arr, cls = 'active') {
	arr.forEach((ele) => {
		ele.addEventListener('click', () => {
			arr.forEach((e) => e.classList.remove(cls));
			ele.classList.add(cls);
		});
	});
}

let control = document.getElementById('control'),
	gearIcon = document.getElementById('gear');

//open control section
gearIcon.addEventListener('click', (e) => {
	e.currentTarget.firstElementChild.classList.toggle('fa-spin');
	let width = control.clientWidth;
	e.currentTarget.firstElementChild.classList.contains('fa-spin')
		? (control.style.left = 0)
		: (control.style.left = `${width * -1}px`);
});

//set Content view
let controlContainer = document.getElementById('control-container'),
	sectBIcon = [...document.querySelectorAll(`.sect-handler .bars`)],
	sectContent = [...document.querySelectorAll(`.sect .sit-content`)];

sectBIcon.forEach((ele) => {
	ele.addEventListener('click', (e) => {
		let sect = e.currentTarget.parentElement.parentElement.lastElementChild;
		if (sect.classList.contains('hidden')) {
			sectContent.forEach((c) => c.classList.add('hidden'));
			sect.classList.toggle('hidden');
		} else {
			sect.classList.add('hidden');
		}
	});
});
// set color
let color = document.querySelectorAll('.color > .sit-content > .group span');
color.forEach((e) => {
	e.style.backgroundColor = e.getAttribute('data-color');
});

//active color
color.forEach((ele) => {
	let parent = ele.parentElement,
		children = Array.from(parent.children);
	activeToggler(children);
	ele.addEventListener('click', () => {
		if (parent.classList.contains('main-color')) {
			document.body.style.setProperty(
				// '--text-M-Color',
				'--full-white',
				ele.getAttribute('data-color'),
			);
			// document.body.style.setProperty('--full-white', 'black');
		} else if (parent.classList.contains('back-color')) {
			document.body.style.setProperty(
				'--back-white-Color',
				ele.getAttribute('data-color'),
			);
		}
	});
});

//set time
let time = document.getElementById('time'),
	hour = document.getElementById('hour'),
	min = document.getElementById('min'),
	sec = document.getElementById('sec'),
	initTime = new Date();
setInterval(() => {
	let timeNow = new Date();
	hour.dataset.hour = timeNow.getHours();
	hour.textContent = `0${hour.dataset.hour}`.slice(-2);
	min.dataset.min = timeNow.getMinutes();
	min.textContent = `0${min.dataset.min}`.slice(-2);
	sec.dataset.sec = timeNow.getSeconds();
	sec.textContent = `0${sec.dataset.sec}`.slice(-2);
}, 1000);

//nav bar
let logo = document.getElementById('logo'),
	links = document.querySelectorAll('#nav-bar ul li');

activeToggler(links);
//animition
let animition = document.getElementById('animi'),
	animiBtn = Array.from(animition.children);
activeToggler(animiBtn);
