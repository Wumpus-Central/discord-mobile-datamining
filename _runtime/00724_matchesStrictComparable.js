// _runtime/00724_matchesStrictComparable.js

export default function matchesStrictComparable(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      let tmp4 = arg0[closure_0] === closure_1;
      if (tmp4) {
        let tmp5 = undefined !== tmp3;
        if (!tmp5) {
          const _Object = Object;
          tmp5 = tmp2 in Object(arg0);
        }
        tmp4 = tmp5;
      }
      tmp = tmp4;
    }
    return tmp;
  };
};