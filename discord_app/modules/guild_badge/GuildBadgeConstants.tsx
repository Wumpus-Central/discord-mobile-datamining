// discord_app/modules/guild_badge/GuildBadgeConstants.tsx
import util from "../../intl/index.native.tsx";
import BadgeCategory from "BadgeCategory.tsx";
import GuildTraits from "GuildTraits.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export const getBadgeTooltip = function getBadgeTooltip(badgeCategory, visibility) {
  if (visibility === GuildTraits.GuildVisibility.PUBLIC) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t.op2cJ6);
  } else if (visibility === GuildTraits.GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.YwZfbt);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.TME4LJ);
  }
  if (BadgeCategory.BadgeCategory.STAFF === badgeCategory) {
    let obj = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl14 = util.intl;
    obj.tooltipTitle = intl14.string(util.t.lMrv96);
    const intl15 = util.intl;
    obj.tooltipSubtitle = intl15.string(util.t.lMrv96);
    const intl16 = util.intl;
    obj.tooltipDescription = intl16.string(util.t.lMrv96);
    return obj;
  } else if (BadgeCategory.BadgeCategory.VERIFIED === badgeCategory) {
    obj = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl12 = util.intl;
    obj.tooltipTitle = intl12.string(util.t.K7iRig);
    const intl13 = util.intl;
    obj.tooltipSubtitle = intl13.string(util.t.iCehw9);
    obj.tooltipDescription = stringResult;
    return obj;
  } else if (BadgeCategory.BadgeCategory.PARTNERED === badgeCategory) {
    const obj1 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl10 = util.intl;
    obj1.tooltipTitle = intl10.string(util.t.K7iRig);
    const intl11 = util.intl;
    obj1.tooltipSubtitle = intl11.string(util.t.hfYfEE);
    obj1.tooltipDescription = stringResult;
    return obj1;
  } else if (BadgeCategory.BadgeCategory.VERIFIED_AND_PARTNERED === badgeCategory) {
    const obj2 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl8 = util.intl;
    obj2.tooltipTitle = intl8.string(util.t.K7iRig);
    const intl9 = util.intl;
    obj2.tooltipSubtitle = intl9.string(util.t["TX+iFC"]);
    obj2.tooltipDescription = stringResult;
    return obj2;
  } else if (BadgeCategory.BadgeCategory.COMMUNITY === badgeCategory) {
    const obj3 = { tooltipTitle: null, tooltipDescription: null };
    const intl7 = util.intl;
    obj3.tooltipTitle = intl7.string(util.t.K7iRig);
    obj3.tooltipDescription = stringResult;
    return obj3;
  } else if (BadgeCategory.BadgeCategory.DISCOVERABLE === badgeCategory) {
    const obj4 = { tooltipTitle: null, tooltipDescription: null };
    const intl5 = util.intl;
    obj4.tooltipTitle = intl5.string(util.t.K7iRig);
    const intl6 = util.intl;
    obj4.tooltipDescription = intl6.string(util.t.op2cJ6);
    return obj4;
  } else {
    obj = { tooltipTitle: null };
    const intl4 = util.intl;
    obj.tooltipTitle = intl4.string(util.t["iZRkC/"]);
    return obj;
  }
};
