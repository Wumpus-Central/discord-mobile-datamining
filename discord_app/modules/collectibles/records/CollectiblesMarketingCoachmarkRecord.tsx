// discord_app/modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx
import CollectiblesMarketingType from "../../../../discord_common/js/shared/shared-constants/CollectiblesMarketingType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class CollectiblesMarketingCoachmarkRecord {
  constructor(arg0) {
    const obj = Object.create(new.target.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.COACHMARK;
    ({
      title: tmp.title,
      body: tmp.body,
      assetDark: tmp.assetDark,
      assetLight: tmp.assetLight,
      version: tmp.version,
      refTargetBackground: tmp.refTargetBackground,
      badgeIcon: tmp.badgeIcon,
      badgeText: tmp.badgeText,
      badgeCountdownEndsAt: tmp.badgeCountdownEndsAt,
      buttonLabel: tmp.buttonLabel,
      showHoverGradient: tmp.showHoverGradient,
      displayType: tmp.displayType,
    } = arg0);
    return obj;
  }
  static fromServer(badge_countdown_ends_at) {
    let date;
    const obj = { badgeCountdownEndsAt: date };
    const merged = Object.assign(badge_countdown_ends_at);
    ({
      asset_dark: obj.assetDark,
      asset_light: obj.assetLight,
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
    ({
      button_label: obj.buttonLabel,
      show_hover_gradient: obj.showHoverGradient,
      display_type: obj.displayType,
    } = badge_countdown_ends_at);
    if (typeof CollectiblesMarketingCoachmarkRecord === "function") {
      const obj2 = Object.create(CollectiblesMarketingCoachmarkRecord.prototype);
      obj2.type = CollectiblesMarketingType.CollectiblesMarketingType.COACHMARK;
      ({
        title: tmp4.title,
        body: tmp4.body,
        assetDark: tmp4.assetDark,
        assetLight: tmp4.assetLight,
        version: tmp4.version,
        refTargetBackground: tmp4.refTargetBackground,
        badgeIcon: tmp4.badgeIcon,
        badgeText: tmp4.badgeText,
        badgeCountdownEndsAt: tmp4.badgeCountdownEndsAt,
        buttonLabel: tmp4.buttonLabel,
        showHoverGradient: tmp4.showHoverGradient,
        displayType: tmp4.displayType,
      } = obj);
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx");

export { CollectiblesMarketingCoachmarkRecord };
