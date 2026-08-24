// === Module 9328: usePremiumFeatures ===

// Module 9328 (usePremiumFeatures)
import closure_3 from "noop" /* 19 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import { TOTAL_PREMIUM_GROUP_USERS } from "SubscriptionStatusTypes" /* 4053 */;

const require = arg1;
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: c4, PremiumTypes: c5 } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/utils/usePremiumFeatures.tsx");

export default function usePremiumFeatures(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let UNSPECIFIED = arg2;
  if (arg2 === undefined) {
    UNSPECIFIED = _require(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let items = [arg0, flag, UNSPECIFIED];
  return React.useMemo(() => {
    let obj = { IconComponent: callback(UNSPECIFIED[4]).FriendsIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: false };
    const intl = callback(UNSPECIFIED[5]).intl;
    obj = { totalSeats: closure_1_6 };
    obj[1] = intl.formatToPlainString(flag(UNSPECIFIED[6]).gsE005, obj);
    const items = [closure_1_5.TIER_2];
    obj[2] = new Set(items);
    const items1 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj[3] = items1;
    const items2 = [obj, , , , , , , , , ];
    obj = { IconComponent: callback(UNSPECIFIED[4]).FriendsIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: false };
    const intl2 = callback(UNSPECIFIED[5]).intl;
    obj[1] = intl2.string(flag(UNSPECIFIED[6])["G6K/+s"]);
    const items3 = [closure_1_5.TIER_2];
    const set = new Set(items);
    obj[2] = new Set(items3);
    const items4 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj[3] = items4;
    items2[1] = obj;
    obj1 = { IconComponent: callback(UNSPECIFIED[7]).UploadIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: true };
    const intl3 = callback(UNSPECIFIED[5]).intl;
    const obj2 = { uploadSize: null };
    let obj5 = callback(UNSPECIFIED[8]);
    obj2[0] = obj5.getMaxFileSizeForPremiumType(callback, { useSpace: false });
    obj1[1] = intl3.formatToPlainString(callback(UNSPECIFIED[5]).t.oEudy7, obj2);
    const items5 = [, ];
    ({ TIER_0: arr6[0], TIER_2: arr6[1] } = closure_1_5);
    const set1 = new Set(items3);
    obj1[2] = new Set(items5);
    const items6 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj1[3] = items6;
    items2[2] = obj1;
    const obj3 = { IconComponent: callback(UNSPECIFIED[9]).ReactionIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: true };
    const intl4 = callback(UNSPECIFIED[5]).intl;
    obj3[1] = intl4.string(callback(UNSPECIFIED[5]).t.E1NP2x);
    const items7 = [, ];
    ({ TIER_0: arr8[0], TIER_2: arr8[1] } = closure_1_5);
    const set2 = new Set(items5);
    obj3[2] = new Set(items7);
    const items8 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj3[3] = items8;
    items2[3] = obj3;
    const obj4 = { IconComponent: callback(UNSPECIFIED[10]).SuperReactionIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: true };
    const intl5 = callback(UNSPECIFIED[5]).intl;
    obj4[1] = intl5.string(callback(UNSPECIFIED[5]).t["taMwg/"]);
    const items9 = [closure_1_5.TIER_2];
    const set3 = new Set(items7);
    obj4[2] = new Set(items9);
    const items10 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj4[3] = items10;
    items2[4] = obj4;
    obj5 = { IconComponent: callback(UNSPECIFIED[11]).NitroWheelIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: true };
    const intl6 = callback(UNSPECIFIED[5]).intl;
    obj5[1] = intl6.string(callback(UNSPECIFIED[5]).t.oyfAMZ);
    const items11 = [closure_1_5.TIER_0];
    const set4 = new Set(items9);
    obj5[2] = new Set(items11);
    const items12 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED];
    obj5[3] = items12;
    items2[5] = obj5;
    const obj6 = { IconComponent: callback(UNSPECIFIED[12]).ScreenStreamIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: true };
    const intl7 = callback(UNSPECIFIED[5]).intl;
    obj6[1] = intl7.string(callback(UNSPECIFIED[5]).t.myyAEr);
    const items13 = [closure_1_5.TIER_2];
    const set5 = new Set(items11);
    obj6[2] = new Set(items13);
    const items14 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj6[3] = items14;
    items2[6] = obj6;
    const obj7 = { IconComponent: callback(UNSPECIFIED[13]).BoostGemIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: false };
    const intl8 = callback(UNSPECIFIED[5]).intl;
    obj7[1] = intl8.formatToPlainString(flag(UNSPECIFIED[6]).HVCRVf, { numBoosts: closure_1_4 });
    const items15 = [closure_1_5.TIER_2];
    const obj8 = { numBoosts: closure_1_4 };
    const set6 = new Set(items13);
    obj7[2] = new Set(items15);
    const items16 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj7[3] = items16;
    items2[7] = obj7;
    const obj9 = { IconComponent: callback(UNSPECIFIED[13]).BoostGemIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: false };
    const intl9 = callback(UNSPECIFIED[5]).intl;
    obj9[1] = intl9.formatToPlainString(callback(UNSPECIFIED[5]).t.DbkNFj, { numBoosts: closure_1_4 });
    const items17 = [closure_1_5.TIER_2];
    const obj10 = { numBoosts: closure_1_4 };
    const set7 = new Set(items15);
    obj9[2] = new Set(items17);
    const items18 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED];
    obj9[3] = items18;
    items2[8] = obj9;
    const obj11 = { IconComponent: callback(UNSPECIFIED[14]).UserSquareIcon, label: null, premiumTypes: null, premiumGroupRoles: null, availableOnFractional: true };
    const intl10 = callback(UNSPECIFIED[5]).intl;
    obj11[1] = intl10.string(callback(UNSPECIFIED[5]).t.vlHicE);
    const items19 = [closure_1_5.TIER_2];
    const set8 = new Set(items17);
    obj11[2] = new Set(items19);
    const items20 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj11[3] = items20;
    items2[9] = obj11;
    const found = items2.filter((premiumTypes) => {
      premiumTypes = premiumTypes.premiumTypes;
      let hasItem = premiumTypes.has(closure_0);
      if (hasItem) {
        let availableOnFractional = !closure_1;
        if (closure_1) {
          availableOnFractional = premiumTypes.availableOnFractional;
        }
        hasItem = availableOnFractional;
      }
      return hasItem;
    });
    const found1 = found.filter((premiumGroupRoles) => {
      premiumGroupRoles = premiumGroupRoles.premiumGroupRoles;
      return premiumGroupRoles.includes(closure_2);
    });
    return found1.map((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.color = callback(table[15]).unsafe_rawColors.WHITE;
      return obj;
    });
  }, items);
};