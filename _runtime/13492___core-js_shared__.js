// _runtime/13492___core-js_shared__.js

export default (arg0, arg1) => {
  let tmp3 = require(13493) /* __core-js_shared__ */[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    require(13493) /* __core-js_shared__ */[arg0] = obj;
    tmp3 = obj;
    const tmpResult = require(13493) /* __core-js_shared__ */;
  }
  return tmp3;
};