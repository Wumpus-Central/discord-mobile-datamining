// === Module 459: ? ===

// Module 459
arg5.default = function _default() {
  const items = [...arguments];
  if (1 === items.length) {
    const _Error = Error;
    if (items[0] instanceof Error) {
      const error2 = items[0];
      const _console = console;
      console.error(`Error: "${error2.message}".  Stack:
  ${error2.stack}`);
    }
  }
  error.apply(console, items);
};