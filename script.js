$('div').not('.contain').css('background-color', '#4ae1fc');
$('body').css('background-color', '#e7e7e7');
$('html').css('font-family', '"Open Sans"');
$('input').css('background-color', '#e7e7e7');
$('button').css('background-color', '#e7e7e7');
$('p').css('font-weight', 'bold');

function postComments () {
    let username = document.getElementById("username").value.trim();
    let commentText = document.getElementById("comment").value.trim();
    if (username && commentText) {
        let commentArea = document.createElement("div");
        commentArea.classList.add("comment");
        
        let userSpan = document.createElement("span");
        userSpan.innerHTML = "<span class = 'userName'>" + username + "</span>"
        
        let commentSpan = document.createElement("p");
        commentSpan.innerHTML = "<p class = 'firstComment'>" + commentText + "</p>";
        commentSpan.classList.add("firstComment");
        
        let editButton = document.createElement("button");
        editButton.classList.add("commentButton")
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            let newComment = prompt("Edit your comment", commentSpan.textContent);
            if (newComment !== null) {
                commentSpan.textContent = newComment;
            }
        }

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("commentButton")
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            commentArea.remove();
        }

        commentArea.appendChild(userSpan);
        commentArea.appendChild(commentSpan);
        commentArea.appendChild(editButton);
        commentArea.appendChild(deleteButton);

        document.getElementById("commentContainer").prepend(commentArea);
        document.getElementById("username").value = "";
        document.getElementById("comment").value = "";
    } else {
        alert("Please enter both a username and a comment.");
    }
    $('p').css('font-weight', 'bold');
    $('button').css('background-color', '#e7e7e7');
    $('button').css('margin', '10px');
}