// discord_app/modules/guild_badge/GuildBadgeConstants.tsx
import util from "../../intl/index.native.tsx";
import GuildTraits from "GuildTraits.tsx";
import BadgeCategory from "BadgeCategory.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export function getBadgeTooltip(badgeCategory, visibility) {
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
  if (visibility === GuildTraits.GuildVisibility.PUBLIC) {
    const intl5 = util.intl;
    let stringResult1 = intl5.string(util.t.SiZQ0N);
  } else {
    const intl4 = util.intl;
    stringResult1 = intl4.string(util.t.K7iRig);
  }
  if (BadgeCategory.BadgeCategory.STAFF === badgeCategory) {
    const obj2 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl13 = util.intl;
    obj2.tooltipTitle = intl13.string(util.t.lMrv96);
    const intl14 = util.intl;
    obj2.tooltipSubtitle = intl14.string(util.t.lMrv96);
    const intl15 = util.intl;
    obj2.tooltipDescription = intl15.string(util.t.lMrv96);
    return obj2;
  } else if (BadgeCategory.BadgeCategory.VERIFIED === badgeCategory) {
    const obj3 = { tooltipTitle: stringResult1, tooltipSubtitle: null, tooltipDescription: null };
    const intl12 = util.intl;
    obj3.tooltipSubtitle = intl12.string(util.t.iCehw9);
    obj3.tooltipDescription = stringResult;
    return obj3;
  } else if (BadgeCategory.BadgeCategory.PARTNERED === badgeCategory) {
    const obj4 = { tooltipTitle: stringResult1, tooltipSubtitle: null, tooltipDescription: null };
    const intl11 = util.intl;
    obj4.tooltipSubtitle = intl11.string(util.t.hfYfEE);
    obj4.tooltipDescription = stringResult;
    return obj4;
  } else if (BadgeCategory.BadgeCategory.VERIFIED_AND_PARTNERED === badgeCategory) {
    const obj5 = { tooltipTitle: stringResult1, tooltipSubtitle: null, tooltipDescription: null };
    const intl10 = util.intl;
    obj5.tooltipSubtitle = intl10.string(util.t["TX+iFC"]);
    obj5.tooltipDescription = stringResult;
    return obj5;
  } else if (BadgeCategory.BadgeCategory.COMMUNITY === badgeCategory) {
    const obj6 = { tooltipTitle: null, tooltipDescription: null };
    const intl9 = util.intl;
    obj6.tooltipTitle = intl9.string(util.t.K7iRig);
    obj6.tooltipDescription = stringResult;
    return obj6;
  } else if (BadgeCategory.BadgeCategory.DISCOVERABLE === badgeCategory) {
    const obj7 = { tooltipTitle: null, tooltipDescription: null };
    const intl7 = util.intl;
    obj7.tooltipTitle = intl7.string(util.t.SiZQ0N);
    const intl8 = util.intl;
    obj7.tooltipDescription = intl8.string(util.t.op2cJ6);
    return obj7;
  } else {
    const obj = { tooltipTitle: null };
    const intl6 = util.intl;
    obj.tooltipTitle = intl6.string(util.t["iZRkC/"]);
    return obj;
  }
}
