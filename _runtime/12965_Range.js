// _runtime/12965_Range.js

export default (arg0, arg1, arg2) => {
  const obj = new require(12954) /* Range */(arg0, arg2);
  return obj.intersects(new require(12954) /* Range */(arg1, arg2), arg2);
};