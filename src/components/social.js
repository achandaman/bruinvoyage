import './social.css';
const Social = () => {
    // Create necessary HTML elements
    var h1 = document.createElement('h1');
    h1.textContent = 'social';
    document.body.appendChild(h1);

    var ul = document.createElement('ul');
    ul.id = 'messages';
    document.body.appendChild(ul);

    var textbox = document.createElement('input');
    textbox.id = 'textbox';
    textbox.type = 'text';
    document.body.appendChild(textbox);

    var sendButton = document.createElement('button');
    sendButton.textContent = 'send';
    document.body.appendChild(sendButton);

    // Add event listener for send button click
    sendButton.addEventListener('click', function() {
        var messages = document.getElementById('messages');
        var newMessage = document.createElement('li'); // Add parentheses after createElement
        newMessage.textContent = textbox.value;
        messages.appendChild(newMessage);
        textbox.value = '';
    });
}

// Execute social function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function(event) {
    Social();
});

export default Social;
