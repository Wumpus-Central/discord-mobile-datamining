// === Module 7088: CollectiblesMarketingBadgeRecord ===

// Module 7088 (CollectiblesMarketingBadgeRecord)
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7089 */;
import size from "module_2" /* 2 */;

class CollectiblesMarketingBadgeRecord {
  constructor(arg0) {
    const obj = Object.create(new.target.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BADGE;
    ({ dismissibleContent: tmp.dismissibleContent, version: tmp.version, refTargetBackground: tmp.refTargetBackground, badgeIcon: tmp.badgeIcon, badgeText: tmp.badgeText, badgeCountdownEndsAt: tmp.badgeCountdownEndsAt, showHoverGradient: tmp.showHoverGradient } = arg0);
    return obj;
  }
  static fromServer(badge_countdown_ends_at) {
    let date;
    const obj = { badgeCountdownEndsAt: date, showHoverGradient: badge_countdown_ends_at.show_hover_gradient };
    const merged = Object.assign(badge_countdown_ends_at);
    ({ dismissible_content: obj.dismissibleContent, ref_target_background: obj.refTargetBackground, badge_icon: obj.badgeIcon, badge_text: obj.badgeText } = badge_countdown_ends_at);
    date = undefined;
    if (null != badge_countdown_ends_at.badge_countdown_ends_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(badge_countdown_ends_at.badge_countdown_ends_at);
    }
    if (typeof CollectiblesMarketingBadgeRecord === "function") {
      const obj2 = Object.create(CollectiblesMarketingBadgeRecord.prototype);
      obj2.type = CollectiblesMarketingType.CollectiblesMarketingType.BADGE;
      ({ dismissibleContent: tmp5.dismissibleContent, version: tmp5.version, refTargetBackground: tmp5.refTargetBackground, badgeIcon: tmp5.badgeIcon, badgeText: tmp5.badgeText, badgeCountdownEndsAt: tmp5.badgeCountdownEndsAt, showHoverGradient: tmp5.showHoverGradient } = obj);
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBadgeRecord.tsx");

export { CollectiblesMarketingBadgeRecord };