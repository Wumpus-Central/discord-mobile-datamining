// === Module 9032: getBadgeTooltip ===

// Module 9032 (getBadgeTooltip)
import set from "set" /* 2 */;
import BadgeCategory from "BadgeCategory" /* 8883 */;
import GuildVisibility from "GuildVisibility" /* 8884 */;

const result = set.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export const getBadgeTooltip = function getBadgeTooltip(arg0, arg1) {
  if (arg1 === GuildVisibility.GuildVisibility.PUBLIC) {
    const intl3 = tmp(1233).intl;
    let stringResult = intl3.string(tmp(1233).t.op2cJ6);
  } else if (arg1 === tmp(8884).GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = tmp(1233).intl;
    stringResult = intl2.string(tmp(1233).t.YwZfbt);
  } else {
    const intl = tmp(1233).intl;
    stringResult = intl.string(tmp(1233).t.TME4LJ);
  }
  if (BadgeCategory.BadgeCategory.STAFF === arg0) {
    let obj = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl14 = tmp(1233).intl;
    obj[0] = intl14.string(tmp(1233).t.lMrv96);
    const intl15 = tmp(1233).intl;
    obj[1] = intl15.string(tmp(1233).t.lMrv96);
    const intl16 = tmp(1233).intl;
    obj[2] = intl16.string(tmp(1233).t.lMrv96);
    return obj;
  } else if (tmp(8883).BadgeCategory.VERIFIED === arg0) {
    obj = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl12 = tmp(1233).intl;
    obj[0] = intl12.string(tmp(1233).t.K7iRig);
    const intl13 = tmp(1233).intl;
    obj[1] = intl13.string(tmp(1233).t.iCehw9);
    obj[2] = stringResult;
    return obj;
  } else if (tmp(8883).BadgeCategory.PARTNERED === arg0) {
    obj1 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl10 = tmp(1233).intl;
    obj1[0] = intl10.string(tmp(1233).t.K7iRig);
    const intl11 = tmp(1233).intl;
    obj1[1] = intl11.string(tmp(1233).t.hfYfEE);
    obj1[2] = stringResult;
    return obj1;
  } else if (tmp(8883).BadgeCategory.VERIFIED_AND_PARTNERED === arg0) {
    const obj2 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl8 = tmp(1233).intl;
    obj2[0] = intl8.string(tmp(1233).t.K7iRig);
    const intl9 = tmp(1233).intl;
    obj2[1] = intl9.string(tmp(1233).t["TX+iFC"]);
    obj2[2] = stringResult;
    return obj2;
  } else if (tmp(8883).BadgeCategory.COMMUNITY === arg0) {
    const obj3 = { tooltipTitle: null, tooltipDescription: null };
    const intl7 = tmp(1233).intl;
    obj3[0] = intl7.string(tmp(1233).t.K7iRig);
    obj3[1] = stringResult;
    return obj3;
  } else if (tmp(8883).BadgeCategory.DISCOVERABLE === arg0) {
    const obj4 = { tooltipTitle: null, tooltipDescription: null };
    const intl5 = tmp(1233).intl;
    obj4[0] = intl5.string(tmp(1233).t.K7iRig);
    const intl6 = tmp(1233).intl;
    obj4[1] = intl6.string(tmp(1233).t.op2cJ6);
    return obj4;
  } else {
    obj = { tooltipTitle: null };
    const intl4 = tmp(1233).intl;
    obj[0] = intl4.string(tmp(1233).t["iZRkC/"]);
    return obj;
  }
};