var chatbot= {
	userMessage: function (input) {
    	return `<div class="messages user-messages">
                <p class="user-res-text">${input}</p>
                <img src="./images/avatar_2.png" >
            </div>`

	},
	robotMessage: function  (input) {
    return `<div class="messages robot-messages">
                <img src="./images/avatar.svg" >
                <p class="user-res-text">${input}</p>
            </div>`
	}
}




