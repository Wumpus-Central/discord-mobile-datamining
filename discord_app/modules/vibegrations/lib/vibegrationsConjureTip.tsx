// === Module 17038: vibegrationsConjureTip ===

// Module 17038 (vibegrationsConjureTip)
import Storage2 from "Storage" /* 510 */;
import size from "module_2" /* 2 */;

let c2 = "VibegrationsConjureTip:shown";
let c3 = null;
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsConjureTip.tsx");

export function markVibegrationsTemplateConjured(arg0) {
  c3 = arg0;
}
export const shouldShowVibegrationsConjureTip = function shouldShowVibegrationsConjureTip(timeout) {
  let tmp = c3 === timeout;
  if (tmp) {
    const Storage = Storage2.Storage;
    tmp = true !== Storage.get(c2);
  }
  return tmp;
};
export const markVibegrationsConjureTipShown = function markVibegrationsConjureTipShown() {
  c3 = null;
  const Storage = Storage2.Storage;
  const result = Storage.set(c2, true);
};