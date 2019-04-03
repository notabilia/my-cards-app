import { browser, by, element } from 'protractor';

export class App {
  navigateTo(location: string = '') {
    return browser.get(location);
  }

  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }

  getComponent(component: string) {
    return element(by.css(component));
  }
}
