export const CardComponent = {
    
    render(arr) { 
        arr.map(item => `
        <div>
        <img src="${item.url}" alt="${item.id}">
        </div>
        `)  
    }
}


