
export default function getNative(arg0, arg1) {
  const tmp = require(738) /* getValue */(arg0, arg1);
  let tmp2;
  if (require(739) /* baseIsNative */(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};