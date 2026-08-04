
export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13478), arg0, obj);
    return arg1;
  } catch (err) {
    require(13478)[tmp2] = tmp;
  }
};