// === Module 7667: CollectiblesMarketingBadgeRecord ===

// Module 7667 (CollectiblesMarketingBadgeRecord)
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7668 */;
import size from "module_2" /* 2 */;

const prototype = function CollectiblesMarketingBadgeRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BADGE;
  ({ dismissibleContent: tmp.dismissibleContent, version: tmp.version, refTargetBackground: tmp.refTargetBackground, badgeIcon: tmp.badgeIcon, badgeText: tmp.badgeText, badgeCountdownEndsAt: tmp.badgeCountdownEndsAt, showHoverGradient: tmp.showHoverGradient } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(badge_countdown_ends_at) {
  let obj = {};
  const merged = Object.assign(badge_countdown_ends_at);
  ({ dismissible_content: obj.dismissibleContent, ref_target_background: obj.refTargetBackground, badge_icon: obj.badgeIcon, badge_text: obj.badgeText } = badge_countdown_ends_at);
  let date;
  if (null != badge_countdown_ends_at.badge_countdown_ends_at) {
    const _Date = Date;
    date = new Date(badge_countdown_ends_at.badge_countdown_ends_at);
  }
  obj.badgeCountdownEndsAt = date;
  obj.showHoverGradient = badge_countdown_ends_at.show_hover_gradient;
  if (typeof prototype === "function") {
    obj = Object.create(prototype.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BADGE;
    ({ dismissibleContent: tmp7.dismissibleContent, version: tmp7.version, refTargetBackground: tmp7.refTargetBackground, badgeIcon: tmp7.badgeIcon, badgeText: tmp7.badgeText, badgeCountdownEndsAt: tmp7.badgeCountdownEndsAt, showHoverGradient: tmp7.showHoverGradient } = obj);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBadgeRecord.tsx");

export const CollectiblesMarketingBadgeRecord = prototype;