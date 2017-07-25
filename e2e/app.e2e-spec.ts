import { CodeExercisePage } from './app.po';

describe('code-exercise App', () => {
  let page: CodeExercisePage;

  beforeEach(() => {
    page = new CodeExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
