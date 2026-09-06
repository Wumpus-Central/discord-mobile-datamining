// === Module 11157: TieredTenureBadgeActionSheet ===

// Module 11157 (TieredTenureBadgeActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7634 */;
import showUserProfileActionSheet from "showUserProfileActionSheet" /* 8179 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 11158 */;
import useTenureBadgeRequirementString from "useTenureBadgeRequirementString" /* 11183 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function TieredTenureBadgeItem(arg0) {
  ({ badge, isUsersBadge, premiumSince } = arg0);
  const tmp = closure_13();
  let obj = useMobileTenureBadgeImages;
  const mobileTenureBadgeImages = obj.useMobileTenureBadgeImages(badge);
  if (mobileTenureBadgeImages != null) {
    const small = mobileTenureBadgeImages.small;
  }
  let tmp2Result = TieredTenureBadgeUtils;
  const tieredTenureBadgeData = tmp2Result.getTieredTenureBadgeData(badge);
  tmp2Result = useTenureBadgeRequirementString;
  if (tieredTenureBadgeData != null) {
    const tenureReqNumMonths = tieredTenureBadgeData.tenureReqNumMonths;
  }
  let tmp9Result = null;
  if (null != tieredTenureBadgeData) {
    const items = [tmp.badgeContainer, ];
    let usersBadgeContainer = isUsersBadge;
    if (isUsersBadge) {
      usersBadgeContainer = tmp.usersBadgeContainer;
    }
    obj = { style: null, children: null };
    items[1] = usersBadgeContainer;
    obj.style = items;
    obj = { resizeMode: "contain", source: small };
    const items1 = [closure_1_10(FastImageDefault, obj), , , ];
    const obj1 = { style: tmp.badgeName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj1.children = intl.string(tieredTenureBadgeData.nameUnformatted);
    items1[1] = closure_1_10(Text_Text.Text, obj1);
    const obj2 = { style: tmp.badgeRequirement, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp7 };
    items1[2] = closure_1_10(Text_Text.Text, obj2);
    if (isUsersBadge) {
      isUsersBadge = null != premiumSince;
    }
    if (isUsersBadge) {
      const obj3 = { style: tmp.badgePremiumSince, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl2 = util.intl;
      const obj4 = { date: null };
      const _Date = Date;
      const date = new Date(premiumSince);
      obj4.date = date;
      obj3.children = intl2.formatToPlainString(util.t.Hu4jfi, obj4);
      isUsersBadge = closure_1_10(Text_Text.Text, obj3);
    }
    items1[3] = isUsersBadge;
    obj.children = items1;
    tmp9Result = closure_1_11(View, obj);
  }
  return tmp9Result;
}
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PremiumTypes: metroRequire, TieredTenureBadge: closure_7 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const TIERED_TENURE_BADGE_ACTION_SHEET = "TIERED_TENURE_BADGE_ACTION_SHEET";
fn(4560);
let createStyles = { headerContainer: { paddingHorizontal: 24, alignItems: "center" }, title: { marginTop: 8, paddingHorizontal: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 24, marginTop: 16 }, rowContainer: { flexDirection: "row", width: "100%", height: 160, gap: 8, justifyContent: "center", alignItems: "center", marginTop: 24 }, rowContainerWithUsersBadge: { height: 186 }, badgeContainer: { minWidth: 110, height: "100%", paddingTop: 16, alignItems: "center", paddingHorizontal: 8 }, usersBadgeContainer: null, badgeName: null, badgeRequirement: null, badgePremiumSince: null, footer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1.2, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm };
createStyles.usersBadgeContainer = createStyles;
createStyles.badgeName = { marginTop: 8 };
createStyles.badgeRequirement = { marginTop: 4 };
createStyles.badgePremiumSince = { width: 90, marginTop: 4, textAlign: "center" };
createStyles.footer = { marginHorizontal: 24 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx");

export default function TieredTenureBadgeActionSheet(userId) {
  userId = userId.userId;
  let flag = userId.shouldShowCTA;
  if (flag === undefined) {
    flag = true;
  }
  let tieredTenureBadgeDataForUser;
  const tmp = closure_13();
  importDefault = tmp;
  let obj = userId(tieredTenureBadgeDataForUser[14]);
  tieredTenureBadgeDataForUser = obj.useTieredTenureBadgeDataForUser(userId);
  let obj1 = userId(tieredTenureBadgeDataForUser[14]);
  noop = obj1.usePremiumSinceForUser(userId);
  let obj2 = userId(tieredTenureBadgeDataForUser[15]);
  let items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = userId(tieredTenureBadgeDataForUser[16]);
  const isPremiumResult = obj3.isPremium(stateFromStores, TIER_2.TIER_2);
  let obj4 = userId(tieredTenureBadgeDataForUser[16]);
  let premiumType;
  if (stateFromStores != null) {
    premiumType = stateFromStores.premiumType;
  }
  obj = { type: null, name: null, properties: null };
  const isPremiumAtLeastResult = obj4.isPremiumAtLeast(premiumType, TIER_2.TIER_0);
  obj.type = userId(tieredTenureBadgeDataForUser[18]).ImpressionTypes.HALFSHEET;
  obj.name = userId(tieredTenureBadgeDataForUser[18]).ImpressionNames.TIERED_TENURE_BADGE_MODAL;
  let id;
  if (tieredTenureBadgeDataForUser != null) {
    id = tieredTenureBadgeDataForUser.id;
  }
  obj.properties = { badge: id, premium_type: isPremiumResult, viewed_user_id: userId };
  let id1;
  if (tieredTenureBadgeDataForUser != null) {
    id1 = tieredTenureBadgeDataForUser.id;
  }
  obj = { disableTrack: null == id1 };
  let id2;
  if (tieredTenureBadgeDataForUser != null) {
    id2 = tieredTenureBadgeDataForUser.id;
  }
  const items1 = [id2];
  require("useTrackImpression")(obj, obj, items1);
  const bottom = tmp10(tmp3[19])().bottom;
  const items2 = [userId];
  const callback = noop.useCallback(() => {
    const obj = { screen: constants2.PREMIUM };
    obj.openUserSettings(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet(TIERED_TENURE_BADGE_ACTION_SHEET);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet(showUserProfileActionSheet.getUserProfileActionSheetKey(userId));
  }, items2);
  const tmp11 = require("useTrackImpression");
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet"));
  const memo = noop.useMemo(() => {
    let length;
    let sum;
    const values = Object.values(closure_1_7);
    const items = [];
    let num = 0;
    if (0 < values.length) {
      do {
        sum = num + 3;
        let arr = items.push(values.slice(num, sum));
        num = sum;
        length = values.length;
      } while (sum < length);
    }
    return items;
  }, []);
  obj1 = { style: tmp.headerContainer, children: null };
  obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = tmp2(tmp3[13]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[13]).t;
  if (isPremiumResult) {
    let stringResult = string(t.Og62j7);
  } else {
    stringResult = string(t.RtGeFS);
  }
  obj2.children = stringResult;
  const items3 = [closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj2), ];
  obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = tmp2(tmp3[13]).intl;
  if (isPremiumResult) {
    let stringResult1 = intl2.string(tmp2(tmp3[13]).t.IdAP91);
  } else {
    obj4 = { learnMoreHook: callback };
    stringResult1 = intl2.format(tmp2(tmp3[13]).t["bF+q7R"], obj4);
  }
  obj3.children = stringResult1;
  items3[1] = closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj3);
  obj1.children = items3;
  const obj5 = { style: null, children: null };
  const items4 = [tmp.footer, { paddingBottom: bottom }];
  obj5.style = items4;
  const tmp17 = require("usePremiumFeatureUpsellGetNitro")(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet");
  const tmp10Result = require("NitroUpsellButton");
  if (isPremiumResult) {
    const obj6 = { shiny: false, text: null, onPress: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj6.text = intl4.string(tmp2(tmp3[13]).t.hvVgAZ);
    obj6.onPress = callback;
    obj5.children = closure_10(tmp10Result, obj6);
  } else {
    const obj7 = { loading, text: null, onPress: null };
    const intl3 = tmp2(tmp3[13]).intl;
    const string2 = intl3.string;
    const t2 = tmp2(tmp3[13]).t;
    if (isPremiumAtLeastResult) {
      let string2Result = string2(t2.IJI7yk);
    } else {
      string2Result = string2(t2.pj0XBN);
    }
    obj7.text = string2Result;
    obj7.onPress = onPress;
    obj5.children = closure_10(tmp10Result, obj7);
  }
  const tmp18Result = closure_11(View, obj1);
  let tmp28;
  if (flag) {
    tmp28 = tmp20Result;
  }
  const obj8 = { scrollable: true, startExpanded: true, footer: tmp28, children: null };
  const obj9 = { contentContainerStyle: null, children: null };
  const items5 = [tmp.container, { paddingBottom: bottom + 64 }];
  obj9.contentContainerStyle = items5;
  const items6 = [
    tmp18Result,
    memo.map((arr, index) => {
      const someResult = arr.some((item) => {
        let id;
        if (user != null) {
          id = user.id;
        }
        return item === id;
      });
      const items = [closure_1.rowContainer, ];
      let rowContainerWithUsersBadge = someResult;
      if (someResult) {
        rowContainerWithUsersBadge = closure_1.rowContainerWithUsersBadge;
      }
      items[1] = rowContainerWithUsersBadge;
      return closure_2_10(View, {
        style: items,
        children: arr.map((badge, index) => {
          const obj = { badge, isUsersBadge: null, premiumSince: null };
          let id;
          if (user != null) {
            id = user.id;
          }
          obj.isUsersBadge = badge === id;
          obj.premiumSince = premiumSince;
          return closure_2_10(TieredTenureBadgeItem, obj, index);
        })
      }, index);
    })
  ];
  obj9.children = items6;
  obj8.children = closure_11(userId(tieredTenureBadgeDataForUser[26]).BottomSheetScrollView, obj9);
  return closure_10(userId(tieredTenureBadgeDataForUser[25]).BottomSheet, obj8);
};
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";