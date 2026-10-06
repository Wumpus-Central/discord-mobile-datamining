// === Module 9417: GuildBadgeConstants ===

// Module 9417 (GuildBadgeConstants)
import intl17 from "intl" /* 1126 */;
import BadgeCategory from "BadgeCategory" /* 8429 */;
import GuildTraits from "GuildTraits" /* 8430 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export const getBadgeTooltip = function getBadgeTooltip(badgeCategory, visibility) {
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let stringResult;
  if (visibility === GuildTraits.GuildVisibility.PUBLIC) {
    const intl3 = intl17.intl;
    stringResult = intl3.string(intl17.t.op2cJ6);
  } else if (visibility === GuildTraits.GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = intl17.intl;
    stringResult = intl2.string(intl17.t.YwZfbt);
  } else {
    const intl = intl17.intl;
    stringResult = intl.string(intl17.t.TME4LJ);
  }
  if (BadgeCategory.BadgeCategory.STAFF === badgeCategory) {
    const obj2 = { tooltipTitle: intl14.string(intl17.t.lMrv96), tooltipSubtitle: intl15.string(intl17.t.lMrv96), tooltipDescription: intl16.string(intl17.t.lMrv96) };
    intl14 = intl17.intl;
    intl15 = intl17.intl;
    intl16 = intl17.intl;
    return obj2;
  } else if (BadgeCategory.BadgeCategory.VERIFIED === badgeCategory) {
    const obj3 = { tooltipTitle: intl12.string(intl17.t.K7iRig), tooltipSubtitle: intl13.string(intl17.t.iCehw9), tooltipDescription: stringResult };
    intl12 = intl17.intl;
    intl13 = intl17.intl;
    return obj3;
  } else if (BadgeCategory.BadgeCategory.PARTNERED === badgeCategory) {
    const obj4 = { tooltipTitle: intl10.string(intl17.t.K7iRig), tooltipSubtitle: intl11.string(intl17.t.hfYfEE), tooltipDescription: stringResult };
    intl10 = intl17.intl;
    intl11 = intl17.intl;
    return obj4;
  } else if (BadgeCategory.BadgeCategory.VERIFIED_AND_PARTNERED === badgeCategory) {
    const obj5 = { tooltipTitle: intl8.string(intl17.t.K7iRig), tooltipSubtitle: intl9.string(intl17.t["TX+iFC"]), tooltipDescription: stringResult };
    intl8 = intl17.intl;
    intl9 = intl17.intl;
    return obj5;
  } else if (BadgeCategory.BadgeCategory.COMMUNITY === badgeCategory) {
    const obj6 = { tooltipTitle: intl7.string(intl17.t.K7iRig), tooltipDescription: stringResult };
    intl7 = intl17.intl;
    return obj6;
  } else if (BadgeCategory.BadgeCategory.DISCOVERABLE === badgeCategory) {
    const obj7 = { tooltipTitle: intl5.string(intl17.t.K7iRig), tooltipDescription: intl6.string(intl17.t.op2cJ6) };
    intl5 = intl17.intl;
    intl6 = intl17.intl;
    return obj7;
  } else {
    const obj = { tooltipTitle: intl4.string(intl17.t["iZRkC/"]) };
    intl4 = intl17.intl;
    return obj;
  }
};