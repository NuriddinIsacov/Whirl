const openDescription = (item) =>{
    const relaxItem = document.querySelector(`.${item}`)
    const relaxItems = document.querySelectorAll('.relax-left>div')

    relaxItems.forEach(item =>{
        item.classList.remove('relax-item-active')   
    })

    relaxItem.classList.add('relax-item-active')
}