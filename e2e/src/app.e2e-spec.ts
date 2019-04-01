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
});
