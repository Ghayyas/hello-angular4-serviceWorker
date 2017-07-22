import { HelloOfflinePage } from './app.po';

describe('hello-offline App', () => {
  let page: HelloOfflinePage;

  beforeEach(() => {
    page = new HelloOfflinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
