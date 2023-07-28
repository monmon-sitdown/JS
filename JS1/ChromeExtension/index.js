// chrome ://extensions/
const inputbtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))

const deletebtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")

if (leadsFromLocal) {
    myLeads = leadsFromLocal
    render(myLeads)
}

inputbtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deletebtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabbtn.addEventListener("click", function() {
    chrome.tabs.query({active:true, lastFocusedWindow:true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
       // listItems += "<li><a target = '_blank' href = '#'>" + myLeads[i] + "</a></li>"
       listItems += `
            <li>
                <a target = '_blank' href = '${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
            `
       //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        /*const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)*/
    }
    ulEl.innerHTML = listItems
}

