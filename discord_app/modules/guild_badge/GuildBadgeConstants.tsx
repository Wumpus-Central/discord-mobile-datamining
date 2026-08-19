// discord_app/modules/guild_badge/GuildBadgeConstants.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import BadgeCategory from "BadgeCategory.tsx";
import GuildVisibility from "GuildTraits.tsx";

const result = obj132.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export const getBadgeTooltip = function getBadgeTooltip(badgeCategory, visibility) {
  if (visibility === GuildVisibility.GuildVisibility.PUBLIC) {
    const intl3 = getSystemLocale.intl;
    let stringResult = intl3.string(getSystemLocale.t.op2cJ6);
  } else if (visibility === GuildVisibility.GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.YwZfbt);
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.TME4LJ);
  }
  if (BadgeCategory.BadgeCategory.STAFF === badgeCategory) {
    let obj = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl14 = getSystemLocale.intl;
    obj[0] = intl14.string(getSystemLocale.t.lMrv96);
    const intl15 = getSystemLocale.intl;
    obj[1] = intl15.string(getSystemLocale.t.lMrv96);
    const intl16 = getSystemLocale.intl;
    obj[2] = intl16.string(getSystemLocale.t.lMrv96);
    return obj;
  } else if (BadgeCategory.BadgeCategory.VERIFIED === badgeCategory) {
    obj = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl12 = getSystemLocale.intl;
    obj[0] = intl12.string(getSystemLocale.t.K7iRig);
    const intl13 = getSystemLocale.intl;
    obj[1] = intl13.string(getSystemLocale.t.iCehw9);
    obj[2] = stringResult;
    return obj;
  } else if (BadgeCategory.BadgeCategory.PARTNERED === badgeCategory) {
    obj1 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl10 = getSystemLocale.intl;
    obj1[0] = intl10.string(getSystemLocale.t.K7iRig);
    const intl11 = getSystemLocale.intl;
    obj1[1] = intl11.string(getSystemLocale.t.hfYfEE);
    obj1[2] = stringResult;
    return obj1;
  } else if (BadgeCategory.BadgeCategory.VERIFIED_AND_PARTNERED === badgeCategory) {
    const obj2 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl8 = getSystemLocale.intl;
    obj2[0] = intl8.string(getSystemLocale.t.K7iRig);
    const intl9 = getSystemLocale.intl;
    obj2[1] = intl9.string(getSystemLocale.t["TX+iFC"]);
    obj2[2] = stringResult;
    return obj2;
  } else if (BadgeCategory.BadgeCategory.COMMUNITY === badgeCategory) {
    const obj3 = { tooltipTitle: null, tooltipDescription: null };
    const intl7 = getSystemLocale.intl;
    obj3[0] = intl7.string(getSystemLocale.t.K7iRig);
    obj3[1] = stringResult;
    return obj3;
  } else if (BadgeCategory.BadgeCategory.DISCOVERABLE === badgeCategory) {
    const obj4 = { tooltipTitle: null, tooltipDescription: null };
    const intl5 = getSystemLocale.intl;
    obj4[0] = intl5.string(getSystemLocale.t.K7iRig);
    const intl6 = getSystemLocale.intl;
    obj4[1] = intl6.string(getSystemLocale.t.op2cJ6);
    return obj4;
  } else {
    obj = { tooltipTitle: null };
    const intl4 = getSystemLocale.intl;
    obj[0] = intl4.string(getSystemLocale.t["iZRkC/"]);
    return obj;
  }
};