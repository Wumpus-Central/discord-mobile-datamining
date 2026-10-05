// discord_app/modules/collectibles/records/CollectiblesMarketingTabTooltipRecord.tsx
import CollectiblesMarketingType from "../../../../discord_common/js/shared/shared-constants/CollectiblesMarketingType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class CollectiblesMarketingTabTooltipRecord {
  constructor(arg0) {
    const obj = Object.create(new.target.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.TAB_TOOLTIP;
    ({
      title: tmp.title,
      body: tmp.body,
      asset: tmp.asset,
      dismissibleContent: tmp.dismissibleContent,
      version: tmp.version,
      refTargetBackground: tmp.refTargetBackground,
      badgeIcon: tmp.badgeIcon,
      badgeText: tmp.badgeText,
      badgeCountdownEndsAt: tmp.badgeCountdownEndsAt,
      showHoverGradient: tmp.showHoverGradient,
    } = arg0);
    return obj;
  }
  static fromServer(badge_countdown_ends_at) {
    let date;
    const obj = { badgeCountdownEndsAt: date, showHoverGradient: badge_countdown_ends_at.show_hover_gradient };
    const merged = Object.assign(badge_countdown_ends_at);
    ({
      dismissible_content: obj.dismissibleContent,
      ref_target_background: obj.refTargetBackground,
      badge_icon: obj.badgeIcon,
      badge_text: obj.badgeText,
    } = badge_countdown_ends_at);
    date = undefined;
    if (null != badge_countdown_ends_at.badge_countdown_ends_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(badge_countdown_ends_at.badge_countdown_ends_at);
    }
    if (typeof CollectiblesMarketingTabTooltipRecord === "function") {
      const obj2 = Object.create(CollectiblesMarketingTabTooltipRecord.prototype);
      obj2.type = CollectiblesMarketingType.CollectiblesMarketingType.TAB_TOOLTIP;
      ({
        title: tmp5.title,
        body: tmp5.body,
        asset: tmp5.asset,
        dismissibleContent: tmp5.dismissibleContent,
        version: tmp5.version,
        refTargetBackground: tmp5.refTargetBackground,
        badgeIcon: tmp5.badgeIcon,
        badgeText: tmp5.badgeText,
        badgeCountdownEndsAt: tmp5.badgeCountdownEndsAt,
        showHoverGradient: tmp5.showHoverGradient,
      } = obj);
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingTabTooltipRecord.tsx");

export default CollectiblesMarketingTabTooltipRecord;
