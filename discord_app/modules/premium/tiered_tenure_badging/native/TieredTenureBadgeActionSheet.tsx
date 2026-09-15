// === Module 11296: TieredTenureBadgeActionSheet ===

// Module 11296 (TieredTenureBadgeActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import Text_Text from "Text/Text" /* 4635 */;
import FastImageDefault from "FastImage" /* 5672 */;
import openUserSettings from "openUserSettings" /* 7489 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7739 */;
import showUserProfileActionSheet from "showUserProfileActionSheet" /* 8299 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 11297 */;
import useTenureBadgeRequirementString from "useTenureBadgeRequirementString" /* 11322 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function TieredTenureBadgeItem(arg0) {
  ({ badge, isUsersBadge, premiumSince } = arg0);
  const tmp = closure_13();
  const mobileTenureBadgeImages = useMobileTenureBadgeImages.useMobileTenureBadgeImages(badge);
  if (mobileTenureBadgeImages != null) {
    const small = mobileTenureBadgeImages.small;
  }
  const tieredTenureBadgeData = TieredTenureBadgeUtils.getTieredTenureBadgeData(badge);
  useTenureBadgeRequirementString;
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
    const obj2 = { style: null, children: null };
    items[1] = usersBadgeContainer;
    obj2.style = items;
    const obj3 = { resizeMode: "contain", source: small };
    const items1 = [closure_1_10(FastImageDefault, obj3), , , ];
    const obj4 = { style: tmp.badgeName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj4.children = intl.string(tieredTenureBadgeData.nameUnformatted);
    items1[1] = closure_1_10(Text_Text.Text, obj4);
    const obj5 = { style: tmp.badgeRequirement, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp7 };
    items1[2] = closure_1_10(Text_Text.Text, obj5);
    if (isUsersBadge) {
      isUsersBadge = null != premiumSince;
    }
    if (isUsersBadge) {
      const obj6 = { style: tmp.badgePremiumSince, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl2 = util.intl;
      const obj7 = { date: null };
      const _Date = Date;
      const date = new Date(premiumSince);
      obj7.date = date;
      obj6.children = intl2.formatToPlainString(util.t.Hu4jfi, obj7);
      isUsersBadge = closure_1_10(Text_Text.Text, obj6);
    }
    items1[3] = isUsersBadge;
    obj2.children = items1;
    tmp9Result = closure_1_11(View, obj2);
  }
  return tmp9Result;
}
const View = fn(17).View;
const PremiumConstants = fn(1374);
({ PremiumTypes: metroRequire, TieredTenureBadge: closure_7 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const TIERED_TENURE_BADGE_ACTION_SHEET = "TIERED_TENURE_BADGE_ACTION_SHEET";
const createStyles = fn(4639);
let obj2 = { headerContainer: { paddingHorizontal: 24, alignItems: "center" }, title: { marginTop: 8, paddingHorizontal: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 24, marginTop: 16 }, rowContainer: { flexDirection: "row", width: "100%", height: 160, gap: 8, justifyContent: "center", alignItems: "center", marginTop: 24 }, rowContainerWithUsersBadge: { height: 186 }, badgeContainer: { minWidth: 110, height: "100%", paddingTop: 16, alignItems: "center", paddingHorizontal: 8 }, usersBadgeContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1.2, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm }, badgeName: { marginTop: 8 }, badgeRequirement: { marginTop: 4 }, badgePremiumSince: { width: 90, marginTop: 4, textAlign: "center" }, footer: { marginHorizontal: 24 } };
let closure_13 = createStyles.createStyles(obj2);
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
  tieredTenureBadgeDataForUser = userId(tieredTenureBadgeDataForUser[14]).useTieredTenureBadgeDataForUser(userId);
  let obj = userId(tieredTenureBadgeDataForUser[14]);
  noop = userId(tieredTenureBadgeDataForUser[14]).usePremiumSinceForUser(userId);
  let obj2 = userId(tieredTenureBadgeDataForUser[14]);
  let items = [UserStore];
  const stateFromStores = userId(tieredTenureBadgeDataForUser[15]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = userId(tieredTenureBadgeDataForUser[15]);
  const isPremiumResult = userId(tieredTenureBadgeDataForUser[16]).isPremium(stateFromStores, TIER_2.TIER_2);
  let obj4 = userId(tieredTenureBadgeDataForUser[16]);
  let premiumType;
  if (stateFromStores != null) {
    premiumType = stateFromStores.premiumType;
  }
  const obj5 = userId(tieredTenureBadgeDataForUser[16]);
  const obj6 = { type: null, name: null, properties: null };
  const isPremiumAtLeastResult = userId(tieredTenureBadgeDataForUser[16]).isPremiumAtLeast(premiumType, TIER_2.TIER_0);
  obj6.type = userId(tieredTenureBadgeDataForUser[18]).ImpressionTypes.HALFSHEET;
  obj6.name = userId(tieredTenureBadgeDataForUser[18]).ImpressionNames.TIERED_TENURE_BADGE_MODAL;
  let id;
  if (tieredTenureBadgeDataForUser != null) {
    id = tieredTenureBadgeDataForUser.id;
  }
  obj6.properties = { badge: id, premium_type: isPremiumResult, viewed_user_id: userId };
  let id1;
  if (tieredTenureBadgeDataForUser != null) {
    id1 = tieredTenureBadgeDataForUser.id;
  }
  let id2;
  if (tieredTenureBadgeDataForUser != null) {
    id2 = tieredTenureBadgeDataForUser.id;
  }
  const items1 = [id2];
  require("useTrackImpression")(obj6, { disableTrack: null == id1 }, items1);
  const bottom = tmp10(tmp3[19])().bottom;
  const items2 = [userId];
  const callback = noop.useCallback(() => {
    openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
    const obj2 = { screen: constants2.PREMIUM };
    ActionSheetActionCreatorsDefault.hideActionSheet(TIERED_TENURE_BADGE_ACTION_SHEET);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet(showUserProfileActionSheet.getUserProfileActionSheetKey(userId));
  }, items2);
  const obj7 = { disableTrack: null == id1 };
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
  const obj8 = { style: tmp.headerContainer, children: null };
  const obj9 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = tmp2(tmp3[13]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[13]).t;
  if (isPremiumResult) {
    let stringResult = string(t.Og62j7);
  } else {
    stringResult = string(t.RtGeFS);
  }
  obj9.children = stringResult;
  const items3 = [closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj9), ];
  const obj10 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = tmp2(tmp3[13]).intl;
  if (isPremiumResult) {
    let stringResult1 = intl2.string(tmp2(tmp3[13]).t.IdAP91);
  } else {
    const obj11 = { learnMoreHook: callback };
    stringResult1 = intl2.format(tmp2(tmp3[13]).t["bF+q7R"], obj11);
  }
  obj10.children = stringResult1;
  items3[1] = closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj10);
  obj8.children = items3;
  const obj12 = { style: null, children: null };
  const items4 = [tmp.footer, { paddingBottom: bottom }];
  obj12.style = items4;
  const tmp17 = require("usePremiumFeatureUpsellGetNitro")(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet");
  const tmp10Result = require("NitroUpsellButton");
  if (isPremiumResult) {
    const obj13 = { shiny: false, text: null, onPress: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj13.text = intl4.string(tmp2(tmp3[13]).t.hvVgAZ);
    obj13.onPress = callback;
    obj12.children = closure_10(tmp10Result, obj13);
  } else {
    const obj14 = { loading, text: null, onPress: null };
    const intl3 = tmp2(tmp3[13]).intl;
    const string2 = intl3.string;
    const t2 = tmp2(tmp3[13]).t;
    if (isPremiumAtLeastResult) {
      let string2Result = string2(t2.IJI7yk);
    } else {
      string2Result = string2(t2.pj0XBN);
    }
    obj14.text = string2Result;
    obj14.onPress = onPress;
    obj12.children = closure_10(tmp10Result, obj14);
  }
  const tmp18Result = closure_11(View, obj8);
  let tmp28;
  if (flag) {
    tmp28 = tmp20Result;
  }
  const obj15 = { scrollable: true, startExpanded: true, footer: tmp28, children: null };
  const obj16 = { contentContainerStyle: null, children: null };
  const items5 = [tmp.container, { paddingBottom: bottom + 64 }];
  obj16.contentContainerStyle = items5;
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
  obj16.children = items6;
  obj15.children = closure_11(userId(tieredTenureBadgeDataForUser[26]).BottomSheetScrollView, obj16);
  return closure_10(userId(tieredTenureBadgeDataForUser[25]).BottomSheet, obj15);
};
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";