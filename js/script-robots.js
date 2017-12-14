var robo = document.querySelector('#robo1').createShadowRoot();
/*Step1*/
let prdTemplate = document.querySelector('#producttemplate');
/*Step2*/
let clone = document.importNode(prdTemplate.content, true);
/*Step3*/

clone.querySelector('#pimage').src = 'images/roboDog.png';
clone.querySelector('#lblName').textContent = 'R.E.T';

/*Step4*/
robo.appendChild(clone);
let userTemplate = document.querySelector('#user');
let userClone = document.importNode(userTemplate.content, true);
document.body.appendChild(userClone);
let addressTemplate = document.querySelector('#address');
let addressClone = document.importNode(addressTemplate.content, true);
document.body.appendChild(addressClone);