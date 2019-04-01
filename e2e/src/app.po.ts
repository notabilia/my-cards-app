import { browser, by, element } from 'protractor';

export class App {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }
}
