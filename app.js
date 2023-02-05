const sideMenu = document.querySelector('aside');
const menubtn = document.querySelector('#menu-btn');
const closebtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');


// Show Sidebar 
menubtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
})

// Close Sidebar 
closebtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
})

// Change Theme 
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})



// Fill Orders in Table 
Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>
                    `;
                    // console.log(trContent);
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})