// discord_app/modules/guild_badge/GuildBadgeConstants.tsx
import BadgeCategory from "BadgeCategory.tsx";
import GuildTraits from "GuildTraits.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export const getBadgeTooltip = function getBadgeTooltip(badgeCategory, visibility) {
  if (visibility === GuildTraits.GuildVisibility.PUBLIC) {
    const intl3 = tmp(1114).intl;
    let stringResult = intl3.string(tmp(1114).t.op2cJ6);
  } else if (visibility === tmp(8743).GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = tmp(1114).intl;
    stringResult = intl2.string(tmp(1114).t.YwZfbt);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.TME4LJ);
  }
  if (BadgeCategory.BadgeCategory.STAFF === badgeCategory) {
    let obj = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl14 = tmp(1114).intl;
    obj.tooltipTitle = intl14.string(tmp(1114).t.lMrv96);
    const intl15 = tmp(1114).intl;
    obj.tooltipSubtitle = intl15.string(tmp(1114).t.lMrv96);
    const intl16 = tmp(1114).intl;
    obj.tooltipDescription = intl16.string(tmp(1114).t.lMrv96);
    return obj;
  } else if (tmp(8742).BadgeCategory.VERIFIED === badgeCategory) {
    obj = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl12 = tmp(1114).intl;
    obj.tooltipTitle = intl12.string(tmp(1114).t.K7iRig);
    const intl13 = tmp(1114).intl;
    obj.tooltipSubtitle = intl13.string(tmp(1114).t.iCehw9);
    obj.tooltipDescription = stringResult;
    return obj;
  } else if (tmp(8742).BadgeCategory.PARTNERED === badgeCategory) {
    const obj1 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl10 = tmp(1114).intl;
    obj1.tooltipTitle = intl10.string(tmp(1114).t.K7iRig);
    const intl11 = tmp(1114).intl;
    obj1.tooltipSubtitle = intl11.string(tmp(1114).t.hfYfEE);
    obj1.tooltipDescription = stringResult;
    return obj1;
  } else if (tmp(8742).BadgeCategory.VERIFIED_AND_PARTNERED === badgeCategory) {
    const obj2 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl8 = tmp(1114).intl;
    obj2.tooltipTitle = intl8.string(tmp(1114).t.K7iRig);
    const intl9 = tmp(1114).intl;
    obj2.tooltipSubtitle = intl9.string(tmp(1114).t["TX+iFC"]);
    obj2.tooltipDescription = stringResult;
    return obj2;
  } else if (tmp(8742).BadgeCategory.COMMUNITY === badgeCategory) {
    const obj3 = { tooltipTitle: null, tooltipDescription: null };
    const intl7 = tmp(1114).intl;
    obj3.tooltipTitle = intl7.string(tmp(1114).t.K7iRig);
    obj3.tooltipDescription = stringResult;
    return obj3;
  } else if (tmp(8742).BadgeCategory.DISCOVERABLE === badgeCategory) {
    const obj4 = { tooltipTitle: null, tooltipDescription: null };
    const intl5 = tmp(1114).intl;
    obj4.tooltipTitle = intl5.string(tmp(1114).t.K7iRig);
    const intl6 = tmp(1114).intl;
    obj4.tooltipDescription = intl6.string(tmp(1114).t.op2cJ6);
    return obj4;
  } else {
    obj = { tooltipTitle: null };
    const intl4 = tmp(1114).intl;
    obj.tooltipTitle = intl4.string(tmp(1114).t["iZRkC/"]);
    return obj;
  }
};
