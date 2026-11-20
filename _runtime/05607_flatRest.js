// === Module 5607: flatRest ===

// Module 5607 (flatRest)
import _mod5608 from "module_5608" /* 5608 */;
import basePick from "basePick" /* 5618 */;


export default _mod5608((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});