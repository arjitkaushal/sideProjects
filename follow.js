const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);


function highlightLink() {
    console.log('highlight!');
    const linkCoords = this.getBoundingClientRect(); //important
    console.log(linkCoords); //it gives all the information where that element lives on the page and how large it is
    const coords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX

        } //when you scroll the page you highlight is now not aligned at 0 to window so extra numbers added to co ordinates.so to avoide it make custom coords by including offset done by scroll in y and x axis


    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;

    highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;


};

triggers.forEach(anchor => {
    anchor.addEventListener('mouseenter', highlightLink)
});