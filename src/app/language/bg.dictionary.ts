import { Injectable } from '@angular/core';

@Injectable()
export class BulgarianDictionary {
    public dictionary = {
        "error": "Възникна проблем",
        "offlineMode": "Възникна проблем с връзката ви към сървъра. Активиран локален режим.",
        "success": "Проблема с конекцията е решен.",
        "onlineMode": "Влизате в активен режим.",
        "offlineUpdate": "В момента няма връзка със сървъра.",
        "guessTheWord": "Познайте думата",
        "wrongLetters": "Грешни символи",
        "startNewGame": "Започни нова игра",
        "hangman": "Бесеница",
        "welcome": "Добре дошли в нашата Бесеница",
        "welcomeDescription": "Бесеницата се използва често от учителите за да практикуват правописа на децата или просто за забавление. Най-популярният начин да се играе е да се направят празни полета за избраната дума на хартия и играча трябва да отгатне коя е. За всяко неправилно предположение, друга част на мъжа се рисува. Ако картината е завършена преди думата, се разкрива коя е думата и играта се губи а обратно играта се печели."
    }
}