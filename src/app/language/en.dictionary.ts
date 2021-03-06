import { Injectable } from '@angular/core';

@Injectable()
export class EnglishDictionary {
    public dictionary = {
        "error": "Problem occurred",
        "offlineMode": "There is a problem with your connection to the server. Offline mode activated.",
        "success": "The problem with your connection is fixed.",
        "onlineMode": "Active online connection.",
        "offlineUpdate": "In the moment there is no connection to the server. Your change will be sended when the connection is estabilished",
        "guessTheWord": "Guess the word",
        "wrongLetters": "Wrong symbols",
        "startNewGame": "Start new game",
        "hangman": "Hangman",
        "welcome": "Welcome to hangman",
        "welcomeDescription": "Hangman is used often by teachers to practice spelling and just for fun. The most popular way to play hangman games offline is to draw blank letters for the chosen word on a paper or on the blackboard and let the players guess the letters. For each incorrect guess, another part of the man is drawn. If the picture is complete before the word is revealed the hangman game is lost and the character is hanged, if the word is revealed before the execution the game is won."
    }
}