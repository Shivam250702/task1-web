let desktopview = window.matchMedia("(min-width: 790px)").matches;
let mobileview = window.matchMedia("(min-width: 400px)").matches;
let follow = obj1; 
let locationedit = 0;
let locationValue = "Noida, India"; 
let signedin = false;
let setfollow = (newFollow) => { follow = newFollow; }; 

const Updating_follow_grp = (clicked_group) => {
  follow.forEach((group, index) => {
    if (group[1] === clicked_group) {
      follow[index][2] = !group[2];
    }
  });
  setfollow([...follow]); // Spread Operator
};
const obj1 = [
    [rec4, "Leisure", false],
    [rec5, "Activism", false],
    [rec6, "MBA", false],
    [rec7, "Philosophy", false],
  ];
  document.addEventListener("DOMContentLoaded", function() {
    const desktopview = true;
    const signedin = true; 

    const c21Container = document.getElementById("c21Container");

    if (desktopview) {
        const navContent = `
            <nav class="nav">
                <div>
                    <a class="nav-link active" aria-current="page" href="#">All Posts(32)</a>
                    <a class="nav-link" href="#">Article</a>
                    <a class="nav-link" href="#">Event</a>
                    <a class="nav-link" href="#">Education</a>
                    <a class="nav-link" href="#">Job</a>
                </div>
                <div class="btn-group">
                    <button class="btn btn-sm" style="background-color: #EDEEF0;" type="button">Write a Post</button>
                    <button class="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split" type="button"></button>
                    ${signedin ? `
                        <button class="btn btn-sm" style="width: 134px; color: #6A6A6B; border-color: #6A6A6B;" type="button" onclick="leaveGroup()">
                            <span><img style="margin-top: -2px;" alt="->" src="leaveicon.png" /></span> &nbsp; Leave Group
                        </button>
                    ` : `
                        <button style="width: 134px;" data-bs-toggle="modal" data-bs-target="#createaccountmodal" class="btn btn-sm btn-primary" type="button">
                            <span><img alt="+" src="groupicon.png" /></span> &nbsp; Join Group
                        </button>
                    `}
                </div>
            </nav>
        `;

        c21Container.innerHTML = navContent;
    } else {
        const mobileViewContent = `
            <div class="mobile-view">
                <p style="font-weight: 600; margin-left: 3.75%;">Posts(368)</p>
                <button style="margin-bottom: 10px; margin-top: -10px; margin-right: 3.75%; background-color: #F1F3F5; color: black;" class="btn dropdown-toggle" type="button">Filter: All</button>
            </div>
        `;

        c21Container.innerHTML = mobileViewContent;
    }
});

function leaveGroup() {
    // Replace with your logic for leaving the group
    console.log('Leaving the group...');
}