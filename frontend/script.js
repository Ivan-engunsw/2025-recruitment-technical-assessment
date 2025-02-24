let rooms = document.getElementById('rooms');
createRooms();

function createRooms() {
    const buildingArr = [['./assets/agsm.webp', 'AGSM building'], ['./assets/ainsworth.webp', 'Ainsworth building'], ['./assets/anitab.webp', 'Anita B building'],
                        ['./assets/biologicalScience.webp', 'Biological Science building'], ['./assets/biologicalScienceWest.webp', 'Biological Science West building'],
                        ['./assets/blockhouse.webp', 'Blockhouse building'], ['./assets/businessSchool.webp', 'Business School building'], ['./assets/civilBuilding.webp', 'Civil Engineering building'],
                        ['./assets/colombo.webp', 'Colombo building'], ['./assets/cseBuilding.webp',['CSE Building']]];
    const buildingNames = ['AGSM', 'Ainsworth Building', 'Anita B Lawrence Centre', 'Biological Sciences', 'Biological Sciences (West)', 'Blockhouse',
                            'Business School', 'Civil Engineering Building', 'Colombo Building', 'Computer Science & Eng (K17)'];
    const buildingFreeRooms =[9, 16, 44, 6, 8, 42, 18, 8, 5, 7];
    let counter = 0;

    for (let building of buildingArr) {
        let container = document.createElement('div');
        rooms.appendChild(container);
        container.setAttribute('style', 'position: relative')

        let image = document.createElement('img');
        image.setAttribute('src', building[0]);
        image.setAttribute('alt', building[1]);

        let name = document.createElement('div');
        name.setAttribute('style', 'position: absolute; bottom: 1rem; left: 0.2rem; width: 14rem; border-radius: 8px; background: orange; padding: 0.7rem; color: white');
        name.textContent = buildingNames[counter];

        let greenDotIcon = document.createElement('img');
        greenDotIcon.setAttribute('src', './assets/greenDot.webp');
        greenDotIcon.setAttribute('alt', 'green dot');
        greenDotIcon.setAttribute('style', 'height: 0.8rem; width: 0.8rem; position: absolute; top: 0.3rem; right: 6.3rem;')

        let numRoomAvailable = document.createElement('div');
        numRoomAvailable.setAttribute('style', 'position: absolute; top: 1rem; right: 0.5rem; width: 7rem; border-radius: 8px; background: white; padding: 0.3rem; font-size: 12px; text-align: right');
        numRoomAvailable.textContent = buildingFreeRooms[counter] + " rooms available";

        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(numRoomAvailable);
        numRoomAvailable.appendChild(greenDotIcon);

        counter++;
    }
}

let brand = document.getElementById("brand");
let logo = brand.querySelector("img");

logo.addEventListener('click', changeLogo);

function changeLogo() {
    if (logo.getAttribute('src').localeCompare('./assets/freeRoomsLogo.png') === 0) {
        logo.setAttribute('src', './assets/freeroomsDoorClosed.png');
        logo.setAttribute('alt', 'Freerooms closed logo');
    } else {
        logo.setAttribute('src', './assets/freeRoomsLogo.png');
        logo.setAttribute('alt', 'Freerooms open logo');
    }
}