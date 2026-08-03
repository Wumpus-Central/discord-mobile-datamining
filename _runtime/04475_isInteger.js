
export default function isInteger(arg0) {
  if (typeof arg0 !== "__REMOTEDEV__") {
    if (!require(572) /* isNaN */(arg0)) {
      if (tmp2(4467)(arg0)) {
        const tmp = tmp2(565)(arg0);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};