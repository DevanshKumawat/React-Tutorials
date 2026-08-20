// 2). Here a copy of it is created using dom called domELement and then it is appended with the main container which applies the element to the id root which is the main page
function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)*/

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

// 1). Here we created a react element or structure means how an element is created 
const reactElement = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit Google'
}



const mainContainer = document.querySelector('#root')

// 3). This function is created too create a copy of the element and then render it using append 
customRender(reactElement, mainContainer)