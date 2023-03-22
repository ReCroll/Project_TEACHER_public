let books = document.querySelectorAll('.book');
// const bookMath5 = document.getElementById('bookMath5');
for (let book of books) {
	let pages = book.getElementsByClassName('bookpage');
	let size = pages.length;
	for (let i = 0, page; page = pages[i]; ++i) {
		if (i % 2 === 0) page.style.zIndex = (size - i);
	}
	book.onclick = function(e) {
		if (e.target == e.currentTarget) { // unroll book in mobile mode
			e.target.classList.toggle('unrolled');
		} else {
			e.currentTarget.classList.remove('unrolled');
			let pagearray = [...e.target.parentElement.children];
			let pagenum = pagearray.indexOf(e.target);
			
			e.target.classList.remove('clickable');
			if (pagenum & 1) { // odd pages (flip back)
				e.target.classList.remove('flipped');
				e.target.previousElementSibling.classList.remove('flipped');
				e.target.nextElementSibling.classList.remove('clickable');
				if (pagenum > 1) {
					e.target.previousElementSibling.classList.add('clickable');				
					e.target.previousElementSibling.previousElementSibling.classList.add('clickable');
				} else {
					// e.target.closest('.book__science').classList.remove('opened');
                    e.target.parentElement.classList.remove('opened');
					// setTimeout(function () {
                    //     // e.target.parentElement.classList.remove('delay');
					// 	e.target.closest('.book__science').classList.remove('delay');
					// }, 4000);
				}
			} else if (pagenum === (pagearray.length-1)) { // last page (close book)
				for (let i = pagenum; i >= 0; --i) {
					pagearray[i].classList.remove('flipped');
				}
                e.target.parentElement.classList.remove('opened');
                // setTimeout(function () {
                //     // e.target.parentElement.classList.remove('delay');
                //     e.target.closest('.book__science').classList.remove('delay');
                // }, 4000);
				// e.target.closest('.book__science').classList.remove('opened');
			} else { // even pages (flip forward)
				if (pagenum === 0) { // first page (open book)
					e.target.parentElement.classList.add('opened', 'delay');
					// console.log(bookMath5);
					// e.target.closest('.book__science').classList.add('opened', 'delay');
				} else {
					e.target.previousElementSibling.classList.remove('clickable');
				}
				e.target.classList.add('flipped');
				e.target.nextElementSibling.classList.add('flipped');
				e.target.nextElementSibling.classList.add('clickable');				
				e.target.nextElementSibling.nextElementSibling.classList.add('clickable');
			}
		}
		e.stopPropagation();
        e.preventDefault();
	}
}
const menuMath5Links = document.getElementById('menu__math5-link');
const menuMath6Links = document.getElementById('menu__math6-link');
const menuPhysics8Links = document.getElementById('menu__physics8-link');
const menuMath5LinksTwo = document.getElementById('menu__math5-link-2');
const menuMath6LinksTwo = document.getElementById('menu__math6-link-2');
const menuPhysics8LinksTwo = document.getElementById('menu__physics8-link-2');
const bookMath5 = document.getElementById('sub__math5-2');
const bookMath6 = document.getElementById('sub__math6-2');
const bookPhysics8 = document.getElementById('sub__physics8-2');
const firstDivMath5 = document.getElementById('first__div-math5');
const secondDivMath5 = document.getElementById('second__div-math5');
const thirdDivMath5 = document.getElementById('third__div-math5');
const firstDivMath6 = document.getElementById('first__div-math6');
const secondDivMath6 = document.getElementById('second__div-math6');
const thirdDivMath6 = document.getElementById('third__div-math6');
const firstDivPhysics8 = document.getElementById('first__div-physics8');
const secondDivPhysics8 = document.getElementById('second__div-physics8');
const thirdDivPhysics8 = document.getElementById('third__div-physics8');
const lastpageMath5 = document.getElementById('lastpage__math5');
const lastpageMath6 = document.getElementById('lastpage__math6');
const lastpagePhysics8 = document.getElementById('lastpage__physics8');


// const sliderLinks = document.querySelectorAll('.slider-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock__padding');

// let unlock = true;

// const timeout = 800;
// const timeoutTwo = 600;
if (menuMath5LinksTwo) {
    menuMath5LinksTwo.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivMath5.classList.add('hide__before');

        e.preventDefault();
    })
}
if (menuMath6LinksTwo) {
    menuMath6LinksTwo.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivMath6.classList.add('hide__before');

        e.preventDefault();
    })
}
if (menuPhysics8LinksTwo) {
    menuPhysics8LinksTwo.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivPhysics8.classList.add('hide__before');

        e.preventDefault();
    })
}
if (menuMath5Links) {
    menuMath5Links.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivMath5.classList.add('hide__before');
        // bookMath5.classList.add('hide__before');

        e.preventDefault();
    })
}
if (menuMath6Links) {
    menuMath6Links.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivMath6.classList.add('hide__before');

        e.preventDefault();
    })
}
if (menuPhysics8Links) {
    menuPhysics8Links.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivPhysics8.classList.add('hide__before');

        e.preventDefault();
    })
}

if (firstDivMath5) {
    firstDivMath5.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivMath5.classList.add('hide__before');

        e.preventDefault();
    })
}
if (firstDivMath6) {
    firstDivMath6.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivMath6.classList.add('hide__before');

        e.preventDefault();
    })
}
if (firstDivPhysics8) {
    firstDivPhysics8.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        firstDivPhysics8.classList.add('hide__before');

        e.preventDefault();
    })
}

if (secondDivMath6) {
    secondDivMath6.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            bookMath6.classList.remove('delay');
		}, 4000);
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            firstDivMath6.classList.remove('hide__before');
		}, 2100);

        e.preventDefault();
    })
}
if (lastpageMath6) {
    lastpageMath6.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            bookMath6.classList.remove('delay');
		}, 4000);
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            firstDivMath6.classList.remove('hide__before');
		}, 2100);
        e.preventDefault();
    })
}
if (secondDivMath5) {
    secondDivMath5.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            bookMath5.classList.remove('delay');
		}, 4000);
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            firstDivMath5.classList.remove('hide__before');


		}, 2100);
        e.preventDefault();
    })
}
if (lastpageMath5) {
    lastpageMath5.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            bookMath5.classList.remove('delay');
		}, 4000);
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            firstDivMath5.classList.remove('hide__before');
		}, 2100);
        
        e.preventDefault();
    })
}
if (secondDivPhysics8) {
    secondDivPhysics8.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            bookPhysics8.classList.remove('delay');
		}, 4000);
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            firstDivPhysics8.classList.remove('hide__before');
		}, 2100);

        e.preventDefault();
    })
}
if (lastpagePhysics8) {
    lastpagePhysics8.addEventListener("click", function(e){
        // bookMath6.classList.remove('delay');
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
        bookPhysics8.classList.remove('delay');
		}, 4000);
        setTimeout(function () {
                        // e.target.parentElement.classList.remove('delay');
            firstDivPhysics8.classList.remove('hide__before');
		}, 2100);
        e.preventDefault();
    })
}

if (menuMath5Links) {
    menuMath5Links.addEventListener("click", function(e) {
        // const bookMath5Open = menuMath5Link.getAttribute('class').replace('menu__link ', '');
        // const curentBookMath5Open = document.getElementById(bookMath5Open);
        bookMath5.classList.add('opened', 'delay');
        // console.log(firstBookDiv);
        firstDivMath5.classList.add('flipped');
        secondDivMath5.classList.add('flipped', 'clickable');
        thirdDivMath5.classList.add('clickable');
        e.preventDefault();
    })      
}
if (menuMath6Links) {
    menuMath6Links.addEventListener("click", function(e) {
        // const bookMath5Open = menuMath5Link.getAttribute('class').replace('menu__link ', '');
        // const curentBookMath5Open = document.getElementById(bookMath5Open);
        bookMath6.classList.add('opened', 'delay');
        // console.log(firstBookDiv);
        firstDivMath6.classList.add('flipped');
        secondDivMath6.classList.add('flipped', 'clickable');
        thirdDivMath6.classList.add('clickable');
        e.preventDefault();
    })      
}
if (menuPhysics8Links) {
    menuPhysics8Links.addEventListener("click", function(e) {
        // const bookMath5Open = menuMath5Link.getAttribute('class').replace('menu__link ', '');
        // const curentBookMath5Open = document.getElementById(bookMath5Open);
        bookPhysics8.classList.add('opened', 'delay');
        // console.log(firstBookDiv);
        firstDivPhysics8.classList.add('flipped');
        secondDivPhysics8.classList.add('flipped', 'clickable');
        thirdDivPhysics8.classList.add('clickable');
        e.preventDefault();
    })      
}

if (menuMath5LinksTwo) {
    menuMath5LinksTwo.addEventListener("click", function(e) {
        // const bookMath5Open = menuMath5Link.getAttribute('class').replace('menu__link ', '');
        // const curentBookMath5Open = document.getElementById(bookMath5Open);
        bookMath5.classList.add('opened', 'delay');
        // console.log(firstBookDiv);
        firstDivMath5.classList.add('flipped');
        secondDivMath5.classList.add('flipped', 'clickable');
        thirdDivMath5.classList.add('clickable');
        e.preventDefault();
    })      
}
if (menuMath6LinksTwo) {
    menuMath6LinksTwo.addEventListener("click", function(e) {
        // const bookMath5Open = menuMath5Link.getAttribute('class').replace('menu__link ', '');
        // const curentBookMath5Open = document.getElementById(bookMath5Open);
        bookMath6.classList.add('opened', 'delay');
        // console.log(firstBookDiv);
        firstDivMath6.classList.add('flipped');
        secondDivMath6.classList.add('flipped', 'clickable');
        thirdDivMath6.classList.add('clickable');
        e.preventDefault();
    })      
}
if (menuPhysics8LinksTwo) {
    menuPhysics8LinksTwo.addEventListener("click", function(e) {
        // const bookMath5Open = menuMath5Link.getAttribute('class').replace('menu__link ', '');
        // const curentBookMath5Open = document.getElementById(bookMath5Open);
        bookPhysics8.classList.add('opened', 'delay');
        // console.log(firstBookDiv);
        firstDivPhysics8.classList.add('flipped');
        secondDivPhysics8.classList.add('flipped', 'clickable');
        thirdDivPhysics8.classList.add('clickable');
        e.preventDefault();
    })      
}

//===================== OLL  ===================
"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/Iphone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    }, 
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    }, 
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());

        
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    let menuClassLinks = document.querySelectorAll('.menu__sub-list')
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }

    }
    if (menuClassLinks.length > 0) {
        for (let index = 0; index < menuClassLinks.length; index++) {
            const menuClassLink = menuClassLinks[index];
            menuClassLink.addEventListener("click", function (e) {
                menuClassLink.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// прокрутка к блоку

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            
            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//==================  POPUP start  ======================

const popupLinks = document.querySelectorAll('.lesson-link');
const sliderLinks = document.querySelectorAll('.slider__img-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock__padding');

let unlock = true;

const timeout = 800;
const timeoutTwo = 600;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })      
    }
}

if (sliderLinks.length > 0) {
    for (let index = 0; index < sliderLinks.length; index++) {
        const sliderLink = sliderLinks[index];
        sliderLink.addEventListener("click", function(e) {
            const sliderName = sliderLink.getAttribute('class').replace('slider__img-link ', '');
            const curentSlider = document.getElementById(sliderName);
            popupOpen(curentSlider);
            e.preventDefault();
        })      
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if(!e.target.closest('.popup__content')) {               
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    
    if (unlock) {
        const contentActives = document.querySelector('.lesson__content.open');
        const sliderImageShow = document.querySelector('.slider__popup-img.open');
        
        popupActive.classList.remove('open');

        setTimeout(function(){
            if (contentActives){
                contentActives.classList.remove('open');
            }
        }, timeout);

        setTimeout(function(){
            if (sliderImageShow){
                sliderImageShow.classList.remove('open');
            }
        }, timeout);
        setTimeout(function(){
            if (sliderImageShow && contentActives){
                contentActives.classList.add('open');
                sliderImageShow.classList.remove('open');
            }
        }, timeout);

        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if(lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('_lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }    
        body.style.paddingRight = '0px';
        body.classList.remove('_lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
//==================  POPUP end  ======================

//================== перегляд зображення початок =============

const sliderTargets = document.querySelectorAll('.slider__img-link');

console.log(sliderTargets);
if (sliderTargets.length > 0){
    for (let index = 0; index < sliderTargets.length; index++) {
        const sliderTarget = sliderTargets[index];
        sliderTarget.addEventListener("click", function(e) {
            console.log(sliderTarget);
            const sliderBigShow = sliderTarget.getAttribute('id').replace('small', '');
            console.log(sliderBigShow);
            const sliderBigTarget = document.getElementById(sliderBigShow);
            console.log(sliderBigTarget);
            sliderBigTarget.classList.add('open');
            var sliderPopupImgs = document.getElementsByClassName('slider__popup-img open');
            console.log(sliderPopupImgs);
            if (sliderPopupImgs) {
                for (let closeImg = 0; closeImg < sliderPopupImgs.length; closeImg++) {
                    let sliderPopupImg = sliderPopupImgs[closeImg];
                    console.log(sliderPopupImg);
                    sliderPopupImg.classList.remove('open');
                    sliderBigTarget.classList.add('open');
                }
            }
            
            e.preventDefault();
        });
    }
}

//================== перегляд зображення кінець =============

//==================COCNTENT POPUP start ================
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            const popupContent = popupLink.getAttribute('class').replace('lesson-link ', '');
            const getContent = document.getElementById(popupContent);        
            getContent.classList.add('open');
            e.preventDefault();
        });
    }
}

//==================COCNTENT POPUP end ==================



//================== блок освіта  ======================

// const subMath5Btn = document.querySelector('.sub__math5');
// const subMath5BtnTwo = document.querySelector('.sub__math5-2');
// const math5Btn = document.querySelector('.math5');
// const subMath6Btn = document.querySelector('.sub__math6');
// const subMath6BtnTwo = document.querySelector('.sub__math6-2');
// const math6Btn = document.querySelector('.math6');
// const subPhysics8Btn = document.querySelector('.sub__physics8');
// const subPhysics8BtnTwo = document.querySelector('.sub__physics8-2');
// const physics8Btn = document.querySelector('.physics8');
// const theme5Block = document.querySelector('.theme5__id');
// const backBtn = document.querySelector('.back__btn');
// const closeBtn = document.querySelector('.close__btn');
// const closeScroll = document.querySelector('.science__content-hiden');
// const math5Id = document.getElementById('math5');
// const math6Id = document.getElementById('math6');
// const physics8Id = document.getElementById('physics8');
// const brakePhysics8 = document.getElementById('brakePhysics8');
// const brakeMath6 = document.getElementById('brakeMath6');
// const brakeMath5 = document.getElementById('brakeMath5');
// const brakes = document.querySelector('.brakes');
// const scrollBottom = document.querySelector('.bottom__scroll-img');
// const lessonBlock = document.querySelector('.lesson__block');
// const scienceLinks = document.querySelectorAll ('.class__img');
// const scienceOpenContent = document.querySelectorAll('.lesson__block._show');
// const lockScience = document.querySelectorAll('.lock__science');
// let unlock2 = true;
// const timeoutShow = 1700;
// const timeoutClose = 1000;
// const timeoutToggle = 300;

// if (scienceLinks.length > 0) {
//     for (let index = 0; index < scienceLinks.length; index++) {
//         const books = scienceLinks[index];
//         books.addEventListener("click", function(e){
//             lessonBlock.classList.add('_show');
//             scrollBottom.classList.add('_scroll-bottom');
//             brakes.classList.add('_brake');
//             brakeMath5.classList.add('_up');
//             brakeMath6.classList.add('_up');
//             brakePhysics8.classList.add('_up');
//                 e.preventDefault();
//                 setTimeout(function(){
//                 brakes.classList.remove('_brake');
//                 }, timeoutShow);
//         });
//     }
// }

// if (subMath5Btn) {
//     subMath5Btn.addEventListener("click", function(e) {
//         math5Id.classList.add('_look');
//         lessonBlock.classList.add('_show');
//         scrollBottom.classList.add('_scroll-bottom');
//         brakes.classList.add('_brake');
//         brakeMath5.classList.add('_up');
//         brakeMath6.classList.add('_up');
//         brakePhysics8.classList.add('_up');
//         e.preventDefault();
//         setTimeout(function(){
//         brakes.classList.remove('_brake');
//         }, timeoutShow);
//     });
// }

// if (subMath5BtnTwo) {
//     subMath5BtnTwo.addEventListener("click", function(e) {
//         math5Id.classList.add('_look');
//         lessonBlock.classList.add('_show');
//         scrollBottom.classList.add('_scroll-bottom');
//         brakes.classList.add('_brake');
//         brakeMath5.classList.add('_up');
//         brakeMath6.classList.add('_up');
//         brakePhysics8.classList.add('_up');
//         e.preventDefault();
//         setTimeout(function(){
//         brakes.classList.remove('_brake');
//         }, timeoutShow);
//     });
// }

// if (math5Btn && unlock2 === true) {
//     math5Btn.addEventListener("click", function(e) {
//     math5Id.classList.add('_look');
//         e.preventDefault();
//     });
// }

// if (subMath6Btn) {
//     subMath6Btn.addEventListener("click", function(e) {
//         math6Id.classList.add('_look');
//         lessonBlock.classList.add('_show');
//         scrollBottom.classList.add('_scroll-bottom');
//         brakes.classList.add('_brake');
//         brakeMath5.classList.add('_up');
//         brakeMath6.classList.add('_up');
//         brakePhysics8.classList.add('_up');
//         e.preventDefault();
//         setTimeout(function(){
//         brakes.classList.remove('_brake');
//         }, timeoutShow); 
//     });
// }
// if (subMath6BtnTwo) {
//     subMath6BtnTwo.addEventListener("click", function(e) {
//         math6Id.classList.add('_look');
//         lessonBlock.classList.add('_show');
//         scrollBottom.classList.add('_scroll-bottom');
//         brakes.classList.add('_brake');
//         brakeMath5.classList.add('_up');
//         brakeMath6.classList.add('_up');
//         brakePhysics8.classList.add('_up');
//         e.preventDefault();
//         setTimeout(function(){
//         brakes.classList.remove('_brake');
//         }, timeoutShow);

//     });
// }

// if (math6Btn) {
//     math6Btn.addEventListener("click", function(e) {
//         math6Id.classList.add('_look');
//         e.preventDefault();  
//     });
// }
// if (subPhysics8Btn) {
//     subPhysics8Btn.addEventListener("click", function(e) {
//         physics8Id.classList.add('_look');
//         lessonBlock.classList.add('_show');
//         scrollBottom.classList.add('_scroll-bottom');
//         brakes.classList.add('_brake');
//         brakeMath5.classList.add('_up');
//         brakeMath6.classList.add('_up');
//         brakePhysics8.classList.add('_up');
//         e.preventDefault();
//         setTimeout(function(){
//         brakes.classList.remove('_brake');
//         }, timeoutShow);
//     });
// }
// if (subPhysics8BtnTwo) {
//     subPhysics8BtnTwo.addEventListener("click", function(e) {
//         physics8Id.classList.add('_look');
//         lessonBlock.classList.add('_show');
//         scrollBottom.classList.add('_scroll-bottom');
//         brakes.classList.add('_brake');
//         brakeMath5.classList.add('_up');
//         brakeMath6.classList.add('_up');
//         brakePhysics8.classList.add('_up');
//         e.preventDefault();
//         setTimeout(function(){
//         brakes.classList.remove('_brake');
//         }, timeoutShow);
//     });
// }



// if (physics8Btn) {
//     physics8Btn.addEventListener("click", function(e) {
//         physics8Id.classList.add('_look');
//         e.preventDefault(); 
//     });
// }

// if (math5Btn && unlock2 === true) {
//     brakeMath5.addEventListener("click", function(e) {
//     math5Id.classList.add('_look');
//     math6Id.classList.remove('_look');
//     physics8Id.classList.remove('_look');
//         e.preventDefault();
//     });
// }

// if (math6Btn) {
//     brakeMath6.addEventListener("click", function(e) {
//         math5Id.classList.remove('_look');
//         math6Id.classList.add('_look');
//         physics8Id.classList.remove('_look');
//         e.preventDefault();
//     });
// }
// if (physics8Btn) {
//     brakePhysics8.addEventListener("click", function(e) {
//         math5Id.classList.remove('_look');
//         math6Id.classList.remove('_look');
//         physics8Id.classList.add('_look');
//         e.preventDefault(); 
//     });
// }
// if (closeBtn && unlock2 === true) {
//     closeBtn.addEventListener("click", function(e) {    
//         setTimeout(function() {
//             math5Id.classList.remove('_look');
//             math6Id.classList.remove('_look');
//             physics8Id.classList.remove('_look');  
//         },timeout);
//             lessonBlock.classList.remove('_show');
//             scrollBottom.classList.remove('_scroll-bottom');
//             brakeMath5.classList.remove('_up');
//             brakeMath6.classList.remove('_up');
//             brakePhysics8.classList.remove('_up');
//             brakeMath5.classList.add('_brake');
//             brakeMath6.classList.add('_brake');
//             brakePhysics8.classList.add('_brake');
//         e.preventDefault();
//         setTimeout(function(){
//             brakeMath5.classList.remove('_brake');
//             brakeMath6.classList.remove('_brake');
//             brakePhysics8.classList.remove('_brake');
//         }, timeoutClose); 
//     });
// }
//==================відео з ютюб ===========================

var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;

    $('.to-play').click(function(){
        
        let btn = $(this),
        videoID = btn.data('video'),
        playerID = btn.data('id');

        player = new YT.Player(playerID, {
            playerVars: {
                'autoplay': 0,
                'controls': 1,
                'playsinline': 1
            },
            videoId: videoID,
            events: {

            'onReady': onPlayerReady,
            }
        });
    });
    
    function onPlayerReady(event) {
        let video = event.target.h;
        $(video).siblings('.to-play').addClass('removed__img');
        event.target.playVideo();
    }
    

// ================= зупинка відео після закриття ==================

        $(document).on('click', '.popup__body', function() {
            jQuery("iframe").each(function() {
                jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
            });
        });

// ================= зупинка відео кінець ==========================

// ================= слайдер початок ========================

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow:5,
        slidesToScroll:1,
        speed: 800,
        // easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnFocus: true,
        draggable: false,
        // swipe: true,
        // touchThreshold: 7,
        touchMove: true,
        waitForAnimate: false,
        centerMode: true,
        // centerPadding: '80px',
        focusOnSelect: true,
        asNavFor: ".slider__text",
        // centerPadding: '60px',
        // variableWidth: true,
        // vertical: false,
        // verticalSwiping: false,
        responsive:[
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 376.98,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                
                }
            }
        ]
        
    });

    $('.slider__text').slick({
        arrows: false,
        fade: true,
        dots: false,
        infinite: true,
        asNavFor:".slider"
    });
});


