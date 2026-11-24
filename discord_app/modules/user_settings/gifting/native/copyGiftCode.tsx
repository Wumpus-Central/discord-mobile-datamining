// === Module 13860: copyGiftCode ===

// Module 13860 (copyGiftCode)
import GiftCodeUtils from "GiftCodeUtils" /* 5664 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _copyGiftCode(arg0, arg1) {
  let code = arg0;
  closure_1 = arg1;
  c3 = 0;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp3;
    GiftCodeUtils.trackGiftCodeCopy(code, closure_1);
    await ClipboardUtils.copy(GiftCodeUtils.getGiftCodeURL(code.code));
    if (1 === tmp7) {
      c4 = 0;
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_0(closure_130_1[3]).presentLinkCopied();
      c4 = 0;
      closure_130_0(closure_130_1[3]);
    }
    return value;
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/gifting/native/copyGiftCode.tsx");

export default function copyGiftCode() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};