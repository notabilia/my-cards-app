import { App } from './app.po';

describe('new App', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  it('should default to cards tab', () => {
    app.navigateTo();
    expect(app.getPageTitle()).toContain('Cards');
  });

  it('home should default to cards tab', () => {
    app.navigateTo('/home');
    expect(app.getPageTitle()).toContain('Cards');
  });

  it('people should have correct title', () => {
    app.navigateTo('/home/people');
    expect(app.getPageTitle()).toContain('People');
  });

  it('occasions should have correct title', () => {
    app.navigateTo('/home/occasions');
    expect(app.getPageTitle()).toContain('Occasions');
  });
});
