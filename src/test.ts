// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare const __karma__: any;

// Prevent Karma from running prematurely.
__karma__.loaded = () => undefined;
// Finally, start Karma to run the tests.
__karma__.start();
