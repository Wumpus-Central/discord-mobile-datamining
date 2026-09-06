// discord_app/modules/user_settings/premium/native/utils/usePremiumFeatures.tsx
import util from "../../../../../intl/index.native.tsx";
import user from "../../../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import _modDef3063 from "../../../../premium/premium_group/PremiumGroup.messages.js";
import PremiumUtils from "../../../../../utils/PremiumUtils.tsx";
import FriendsIcon from "../../../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import ReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import ScreenStreamIcon from "../../../../../design/components/Icon/native/redesign/generated/ScreenStreamIcon.tsx";
import UploadIcon from "../../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import SuperReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/SuperReactionIcon.tsx";
import BoostGemIcon from "../../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import UserSquareIcon from "../../../../../design/components/Icon/native/redesign/generated/UserSquareIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const PremiumConstants = fn(1373);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
const TOTAL_PREMIUM_GROUP_USERS = fn(4232).TOTAL_PREMIUM_GROUP_USERS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/utils/usePremiumFeatures.tsx");

export default function usePremiumFeatures(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let UNSPECIFIED = arg2;
  if (arg2 === undefined) {
    UNSPECIFIED = require("user").PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let items = [arg0, flag, UNSPECIFIED];
  return noop.useMemo(() => {
    let obj = {
      IconComponent: FriendsIcon.FriendsIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: false,
    };
    const intl = util.intl;
    obj = { totalSeats: TOTAL_PREMIUM_GROUP_USERS };
    obj.label = intl.formatToPlainString(_modDef3063.gsE005, obj);
    const items = [hasOwnProperty.TIER_2];
    obj.premiumTypes = new Set(items);
    const items1 = [user.PremiumSubscriptionGroupRole.PRIMARY];
    obj.premiumGroupRoles = items1;
    const items2 = [obj, , , , , , , , ,];
    obj = {
      IconComponent: FriendsIcon.FriendsIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: false,
    };
    const intl2 = util.intl;
    obj.label = intl2.string(_modDef3063["G6K/+s"]);
    const items3 = [hasOwnProperty.TIER_2];
    const set = new Set(items);
    obj.premiumTypes = new Set(items3);
    const items4 = [user.PremiumSubscriptionGroupRole.MEMBER];
    obj.premiumGroupRoles = items4;
    items2[1] = obj;
    const obj1 = {
      IconComponent: UploadIcon.UploadIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: true,
    };
    const intl3 = util.intl;
    const obj2 = { uploadSize: null };
    let obj5 = PremiumUtils;
    obj2.uploadSize = obj5.getMaxFileSizeForPremiumType(closure_0, { useSpace: false });
    obj1.label = intl3.formatToPlainString(util.t.oEudy7, obj2);
    const items5 = [,];
    ({ TIER_0: arr6[0], TIER_2: arr6[1] } = hasOwnProperty);
    const set1 = new Set(items3);
    obj1.premiumTypes = new Set(items5);
    const items6 = [user.PremiumSubscriptionGroupRole.UNSPECIFIED, user.PremiumSubscriptionGroupRole.PRIMARY];
    obj1.premiumGroupRoles = items6;
    items2[2] = obj1;
    const obj3 = {
      IconComponent: ReactionIcon.ReactionIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: true,
    };
    const intl4 = util.intl;
    obj3.label = intl4.string(util.t.E1NP2x);
    const items7 = [,];
    ({ TIER_0: arr8[0], TIER_2: arr8[1] } = hasOwnProperty);
    const set2 = new Set(items5);
    obj3.premiumTypes = new Set(items7);
    const items8 = [
      user.PremiumSubscriptionGroupRole.UNSPECIFIED,
      user.PremiumSubscriptionGroupRole.PRIMARY,
      user.PremiumSubscriptionGroupRole.MEMBER,
    ];
    obj3.premiumGroupRoles = items8;
    items2[3] = obj3;
    const obj4 = {
      IconComponent: SuperReactionIcon.SuperReactionIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: true,
    };
    const intl5 = util.intl;
    obj4.label = intl5.string(util.t["taMwg/"]);
    const items9 = [hasOwnProperty.TIER_2];
    const set3 = new Set(items7);
    obj4.premiumTypes = new Set(items9);
    const items10 = [
      user.PremiumSubscriptionGroupRole.UNSPECIFIED,
      user.PremiumSubscriptionGroupRole.PRIMARY,
      user.PremiumSubscriptionGroupRole.MEMBER,
    ];
    obj4.premiumGroupRoles = items10;
    items2[4] = obj4;
    obj5 = {
      IconComponent: NitroWheelIcon.NitroWheelIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: true,
    };
    const intl6 = util.intl;
    obj5.label = intl6.string(util.t.oyfAMZ);
    const items11 = [hasOwnProperty.TIER_0];
    const set4 = new Set(items9);
    obj5.premiumTypes = new Set(items11);
    const items12 = [user.PremiumSubscriptionGroupRole.UNSPECIFIED];
    obj5.premiumGroupRoles = items12;
    items2[5] = obj5;
    const obj6 = {
      IconComponent: ScreenStreamIcon.ScreenStreamIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: true,
    };
    const intl7 = util.intl;
    obj6.label = intl7.string(util.t.myyAEr);
    const items13 = [hasOwnProperty.TIER_2];
    const set5 = new Set(items11);
    obj6.premiumTypes = new Set(items13);
    const items14 = [
      user.PremiumSubscriptionGroupRole.UNSPECIFIED,
      user.PremiumSubscriptionGroupRole.PRIMARY,
      user.PremiumSubscriptionGroupRole.MEMBER,
    ];
    obj6.premiumGroupRoles = items14;
    items2[6] = obj6;
    const obj7 = {
      IconComponent: BoostGemIcon.BoostGemIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: false,
    };
    const intl8 = util.intl;
    obj7.label = intl8.formatToPlainString(_modDef3063.HVCRVf, { numBoosts });
    const items15 = [hasOwnProperty.TIER_2];
    const obj8 = { numBoosts };
    const set6 = new Set(items13);
    obj7.premiumTypes = new Set(items15);
    const items16 = [user.PremiumSubscriptionGroupRole.PRIMARY];
    obj7.premiumGroupRoles = items16;
    items2[7] = obj7;
    const obj9 = {
      IconComponent: BoostGemIcon.BoostGemIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: false,
    };
    const intl9 = util.intl;
    obj9.label = intl9.formatToPlainString(util.t.DbkNFj, { numBoosts });
    const items17 = [hasOwnProperty.TIER_2];
    const obj10 = { numBoosts };
    const set7 = new Set(items15);
    obj9.premiumTypes = new Set(items17);
    const items18 = [user.PremiumSubscriptionGroupRole.UNSPECIFIED];
    obj9.premiumGroupRoles = items18;
    items2[8] = obj9;
    const obj11 = {
      IconComponent: UserSquareIcon.UserSquareIcon,
      label: null,
      premiumTypes: null,
      premiumGroupRoles: null,
      availableOnFractional: true,
    };
    const intl10 = util.intl;
    obj11.label = intl10.string(util.t.vlHicE);
    const items19 = [hasOwnProperty.TIER_2];
    const set8 = new Set(items17);
    obj11.premiumTypes = new Set(items19);
    const items20 = [
      user.PremiumSubscriptionGroupRole.UNSPECIFIED,
      user.PremiumSubscriptionGroupRole.PRIMARY,
      user.PremiumSubscriptionGroupRole.MEMBER,
    ];
    obj11.premiumGroupRoles = items20;
    items2[9] = obj11;
    const found = items2.filter((premiumTypes) => {
      premiumTypes = premiumTypes.premiumTypes;
      let hasItem = premiumTypes.has(closure_1_0);
      if (hasItem) {
        let availableOnFractional = !flag;
        if (flag) {
          availableOnFractional = premiumTypes.availableOnFractional;
        }
        hasItem = availableOnFractional;
      }
      return hasItem;
    });
    const found1 = found.filter((premiumGroupRoles) => {
      premiumGroupRoles = premiumGroupRoles.premiumGroupRoles;
      return premiumGroupRoles.includes(UNSPECIFIED);
    });
    return found1.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.color = flag(UNSPECIFIED[15]).unsafe_rawColors.WHITE;
      return obj;
    });
  }, items);
}
