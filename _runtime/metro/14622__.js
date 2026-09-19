// === Module 14622: ? ===

// Module 14622
import _mod14620 from "module_14620" /* 14620 */;


export default (arg0, arg1) => {
  const tmp = _mod14620(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};