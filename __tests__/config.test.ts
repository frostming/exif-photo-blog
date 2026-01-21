describe('Config', () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it('uses default OpenAI model when unset', () => {
    delete process.env.OPENAI_MODEL;
    const { OPENAI_MODEL } = require('../src/app/config');
    expect(OPENAI_MODEL).toBe('gpt-5.2');
  });

  it('uses OpenAI model from env when set', () => {
    process.env.OPENAI_MODEL = 'gpt-4o';
    const { OPENAI_MODEL } = require('../src/app/config');
    expect(OPENAI_MODEL).toBe('gpt-4o');
  });
});
