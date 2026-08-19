// === Module 9293: getRandomCustomStatusPrompt ===

// Module 9293 (getRandomCustomStatusPrompt)
import obj132 from "obj132" /* 2 */;
import StatusTypes from "StatusTypes" /* 9292 */;

({ CustomStatusPrompts: obj1, CustomStatusPromptValues: c3 } = StatusTypes);
const result = obj132.fileFinishedImporting("modules/custom_status/utils/getRandomCustomStatusPrompt.tsx");

export default function getRandomCustomStatusPrompt(size) {
  closure_0 = size;
  if (null != size) {
    if (size.size > 0) {
      let found = closure_2.filter((item, index) => !size.has(item.value));
    }
    if (0 === found.length) {
      const obj = { value: null, label: null };
      obj[0] = constants.ADD_STATUS;
      obj[1] = function label() {
        const intl = size(1236).intl;
        return intl.string(size(1236).t.Vq4UmS);
      };
      let tmp3 = obj;
    } else {
      const _Math = Math;
      const _Math2 = Math;
      tmp3 = found[Math.floor(Math, Math.random(Math) * found.length)];
    }
    return tmp3;
  }
  found = closure_2;
};