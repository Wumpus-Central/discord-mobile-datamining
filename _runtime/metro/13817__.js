// _runtime/metro/13817__.js
import _mod13789 from "13789__.js";
import _mod13815 from "13815__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13789[arg0];
    let tmp8;
    if (_mod13815(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13789[arg0];
    if (tmp3) {
      tmp3 = _mod13789[arg0][arg1];
    }
  }
  return tmp3;
};
