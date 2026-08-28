// === Module 7257: fromServer ===

// Module 7257 (fromServer)
import set from "set" /* 2 */;
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7258 */;

let prototype;
prototype = function CollectiblesMarketingBadgeRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BADGE;
  ({ dismissibleContent: tmp.dismissibleContent, version: tmp.version, refTargetBackground: tmp.refTargetBackground, badgeIcon: tmp.badgeIcon, badgeText: tmp.badgeText, showHoverGradient: tmp.showHoverGradient } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  ({ dismissible_content: obj.dismissibleContent, ref_target_background: obj.refTargetBackground, badge_icon: obj.badgeIcon, badge_text: obj.badgeText, show_hover_gradient: obj.showHoverGradient } = arg0);
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(prototype.prototype);
  obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BADGE;
  ({ dismissibleContent: tmp3.dismissibleContent, version: tmp3.version, refTargetBackground: tmp3.refTargetBackground, badgeIcon: tmp3.badgeIcon, badgeText: tmp3.badgeText, showHoverGradient: tmp3.showHoverGradient } = obj);
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBadgeRecord.tsx");

export const CollectiblesMarketingBadgeRecord = prototype;