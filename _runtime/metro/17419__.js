// _runtime/metro/17419__.js

export default (promise, arg1) => {
  let fn = arg1;
  if (!arg1) {
    fn = () => {};
  }
  return promise.then(
    (result) => {
      closure_0 = result;
      return new Promise((fn) => {
        fn(closure_0());
      }).then(() => closure_0);
    },
    (arg0) => {
      closure_0 = arg0;
      return new Promise((fn) => {
        fn(closure_0());
      }).then(() => {
        throw closure_0;
      });
    },
  );
};
