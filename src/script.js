'use strict';
const notesContainer = document.querySelector('.notes-container');
const title = 'xd';

let note = `<div class="note">
<h2 class="note__tile">${title}</h2>
<p class="note__content"></p>
<p class="note__date"></p>
</div>`;

notesContainer.insertAdjacentHTML('afterend', note);
