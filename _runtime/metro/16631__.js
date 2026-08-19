// === Module 16631: ? ===

// Module 16631

export default (promise) => {
  let fn = arg1;
  if (!arg1) {
    fn = () => {

    };
  }
  return promise.then((result) => {
    closure_0 = result;
    return new Promise((fn) => {
      fn(callback());
    }).then((result) => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    return new Promise((fn) => {
      fn(callback());
    }).then((result) => {
      throw closure_0;
    });
  });
};