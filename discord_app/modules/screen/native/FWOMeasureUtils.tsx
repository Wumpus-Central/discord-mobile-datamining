// === Module 8749: __measureInWindowForFWO ===

// Module 8749 (__measureInWindowForFWO)
import set from "set" /* 2 */;
import NativeFWOMeasureModule from "NativeFWOMeasureModule" /* 8750 */;

const __measureInWindowForFWO = global.__measureInWindowForFWO;
function measureInWindowForFWO(value) {
  let tmpResult;
  if (__measureInWindowForFWO != null) {
    tmpResult = tmp(value);
  }
  if (tmpResult == null) {
    tmpResult = null;
  }
  return tmpResult;
}
measureInWindowForFWO.__closure = { _measureInWindowForFWO: __measureInWindowForFWO };
measureInWindowForFWO.__workletHash = 12993496951221;
measureInWindowForFWO.__initData = { code: "function measureInWindowForFWO_FWOMeasureUtilsTsx1(tag){const{_measureInWindowForFWO}=this.__closure;var _measureInWindowForFW,_measureInWindowForFW2;return(_measureInWindowForFW=(_measureInWindowForFW2=_measureInWindowForFWO)===null||_measureInWindowForFW2===void 0?void 0:_measureInWindowForFW2(tag))!==null&&_measureInWindowForFW!==void 0?_measureInWindowForFW:null;}" };
const result = set.fileFinishedImporting("modules/screen/native/FWOMeasureUtils.tsx");

export { measureInWindowForFWO };