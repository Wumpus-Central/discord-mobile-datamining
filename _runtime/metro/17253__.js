// _runtime/metro/17253__.js

export default (promise) => {
  let fn = arg1;
  fn = arg1;
  if (!arg1) {
    fn = () => {};
  }
  return promise.then(
    (arg0) => {
      closure_0 = arg0;
      return new Promise((arg0) => {
        arg0(callback());
      }).then(() => closure_0);
    },
    (arg0) => {
      closure_0 = arg0;
      return new Promise((arg0) => {
        arg0(callback());
      }).then(() => {
        throw closure_0;
      });
    },
  );
};
