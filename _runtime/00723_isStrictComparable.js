
export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !require(606) /* isObject */(arg0);
  }
  return tmp;
};