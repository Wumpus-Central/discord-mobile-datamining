// discord_app/modules/vibegrations/lib/vibegrationsConjureTip.tsx
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
