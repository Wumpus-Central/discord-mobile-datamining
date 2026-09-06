// === Module 11116: getRandomCustomStatusPrompt ===

// Module 11116 (getRandomCustomStatusPrompt)
import Constants from "Constants" /* 11115 */;
import size from "module_2" /* 2 */;

({ CustomStatusPrompts: c2, CustomStatusPromptValues: c3 } = Constants);
const result = size.fileFinishedImporting("modules/custom_status/utils/getRandomCustomStatusPrompt.tsx");

export default function getRandomCustomStatusPrompt(size) {
  if (null != size) {
    if (size.size > 0) {
      let found = closure_2.filter((value) => !size.has(value.value));
    }
    if (0 === found.length) {
      const obj = {
        value: constants.ADD_STATUS,
        label() {
              const intl = size(1114).intl;
              return intl.string(size(1114).t.Vq4UmS);
            }
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