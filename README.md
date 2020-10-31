# Trivia #

## <ins> How Trivia Game Works (Backend) </ins> ##
Trivia is a trivia game designed to test your knowledge. JSON data containing a set of trivia questions, incorrect answers, and correct answers are sent from the server set up by Express framework. The server has a simple CORS set up allowing localhost and the deployed frontend github URL to make requests to the server. When the browser makes a request to the server with the route endpoint as ```/trivia```, the route handler sends back the JSON data. The local server is dpeloyed onto Heroku for remote server access. 

## <ins> Issues </ins> ##
Under the assumption that the localhost was making server requests, the server would allow the localhost to make requests. However, there was a CORS error that popped up on the browser that said localhost did not have access. Therefore, CORS ```whitelist``` was created on the server. 

## <ins> Frontend </ins> ##
Click [here](https://github.com/krislee/tandem-apprentice-coding-challenge-frontend) to view the frontend repositiory. 

## <ins> Deployed Trivia Game </ins> ##
Click [here](https://tandem-apprenticeship-coding-challenge.netlify.app) to play the game.
