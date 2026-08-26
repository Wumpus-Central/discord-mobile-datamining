// === Module 9697: TieredTenureBadgeItem ===

// Module 9697 (TieredTenureBadgeItem)
import ThemesDefault from "Themes" /* 712 */;
import preloadDefault from "preload" /* 5440 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 9698 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function TieredTenureBadgeItem(arg0) {
  ({ badge, isUsersBadge, premiumSince } = arg0);
  const tmp = callback2();
  let obj = useMobileTenureBadgeImages;
  const mobileTenureBadgeImages = obj.useMobileTenureBadgeImages(badge);
  if (mobileTenureBadgeImages != null) {
    const small = mobileTenureBadgeImages.small;
  }
  let tmp2Result = tmp2(7306);
  const tieredTenureBadgeData = tmp2Result.getTieredTenureBadgeData(badge);
  tmp2Result = tmp2(9723);
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
    obj[0] = items;
    obj = { resizeMode: "contain", source: null };
    obj[1] = small;
    const items1 = [callback(preloadDefault, obj), , , ];
    obj1 = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp.badgeName;
    const intl = tmp2(1236).intl;
    obj1[3] = intl.string(tieredTenureBadgeData.nameUnformatted);
    items1[1] = callback(tmp2(4440).Text, obj1);
    const obj2 = { style: null, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.badgeRequirement;
    obj2[3] = tmp7;
    items1[2] = callback(tmp2(4440).Text, obj2);
    if (isUsersBadge) {
      isUsersBadge = null != premiumSince;
    }
    if (isUsersBadge) {
      const obj3 = { style: null, variant: "text-xs/normal", color: "text-muted", children: null };
      obj3[0] = tmp.badgePremiumSince;
      const intl2 = tmp2(1236).intl;
      const obj4 = { date: null };
      const _Date = Date;
      const date = new Date(premiumSince);
      obj4[0] = date;
      obj3[3] = intl2.formatToPlainString(tmp2(1236).t.Hu4jfi, obj4);
      isUsersBadge = tmp11(tmp2(4440).Text, obj3);
    }
    items1[3] = isUsersBadge;
    obj[1] = items1;
    tmp9Result = closure_11(View, obj);
    const tmp10 = View;
    tmp11 = callback;
    const tmp9 = closure_11;
  }
  return tmp9Result;
}
({ PremiumTypes: closure_6, TieredTenureBadge: error } = GuildFeatures);
({ AnalyticsPages: closure_8, UserSettingsSections: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const TIERED_TENURE_BADGE_ACTION_SHEET = "TIERED_TENURE_BADGE_ACTION_SHEET";
createCacheKey = { headerContainer: { paddingHorizontal: 24, alignItems: "center" }, title: { marginTop: 8, paddingHorizontal: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 24, marginTop: 16 }, rowContainer: { flexDirection: "row", width: "100%", height: 160, gap: 8, justifyContent: "center", alignItems: "center", marginTop: 24 }, rowContainerWithUsersBadge: { height: 186 }, badgeContainer: { minWidth: 110, height: "100%", paddingTop: 16, alignItems: "center", paddingHorizontal: 8 }, usersBadgeContainer: null, badgeName: null, badgeRequirement: null, badgePremiumSince: null, footer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1.2, borderColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.sm };
createCacheKey[7] = createCacheKey;
createCacheKey[8] = { marginTop: 8 };
createCacheKey[9] = { marginTop: 4 };
createCacheKey[10] = { width: 90, marginTop: 4, textAlign: "center" };
createCacheKey[11] = { marginHorizontal: 24 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx");

export default function TieredTenureBadgeActionSheet(userId) {
  userId = userId.userId;
  let flag = userId.shouldShowCTA;
  if (flag === undefined) {
    flag = true;
  }
  importDefault = undefined;
  let tieredTenureBadgeDataForUser;
  let React;
  const tmp = callback2();
  importDefault = tmp;
  let obj = userId(tieredTenureBadgeDataForUser[14]);
  tieredTenureBadgeDataForUser = obj.useTieredTenureBadgeDataForUser(userId);
  obj1 = userId(tieredTenureBadgeDataForUser[14]);
  React = obj1.usePremiumSinceForUser(userId);
  let obj2 = userId(tieredTenureBadgeDataForUser[15]);
  let items = [closure_5];
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
  const tmp6 = TIER_2;
  obj[0] = userId(tieredTenureBadgeDataForUser[18]).ImpressionTypes.HALFSHEET;
  obj[1] = userId(tieredTenureBadgeDataForUser[18]).ImpressionNames.TIERED_TENURE_BADGE_MODAL;
  let id;
  if (tieredTenureBadgeDataForUser != null) {
    id = tieredTenureBadgeDataForUser.id;
  }
  obj[2] = { badge: id, premium_type: isPremiumResult, viewed_user_id: userId };
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
  importDefault(tieredTenureBadgeDataForUser[17])(obj, obj, items1);
  const bottom = tmp10(tmp3[19])().bottom;
  const items2 = [userId];
  const callback = React.useCallback(() => {
    let obj = userId(tieredTenureBadgeDataForUser[20]);
    obj = { screen: closure_1_9.PREMIUM };
    obj.openUserSettings(obj);
    lib(tieredTenureBadgeDataForUser[21]).hideActionSheet(closure_1_12);
    const obj3 = lib(tieredTenureBadgeDataForUser[21]);
    const obj4 = lib(tieredTenureBadgeDataForUser[21]);
    obj4.hideActionSheet(userId(tieredTenureBadgeDataForUser[22]).getUserProfileActionSheetKey(userId));
  }, items2);
  const tmp11 = importDefault(tieredTenureBadgeDataForUser[17]);
  ({ loading, onPress } = importDefault(tieredTenureBadgeDataForUser[23])(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet"));
  const memo = React.useMemo(() => {
    let length;
    let sum;
    const values = Object.values(closure_7);
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
  obj2[3] = stringResult;
  const items3 = [closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj2), ];
  obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = tmp2(tmp3[13]).intl;
  if (isPremiumResult) {
    let stringResult1 = intl2.string(tmp2(tmp3[13]).t.IdAP91);
  } else {
    obj4 = { learnMoreHook: null };
    obj4[0] = callback;
    stringResult1 = intl2.format(tmp2(tmp3[13]).t["bF+q7R"], obj4);
  }
  obj3[3] = stringResult1;
  items3[1] = closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj3);
  obj1[1] = items3;
  const obj5 = { style: items4, children: null };
  items4 = [tmp.footer, { paddingBottom: bottom }];
  const tmp17 = importDefault(tieredTenureBadgeDataForUser[23])(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet");
  const tmp10Result = importDefault(tieredTenureBadgeDataForUser[24]);
  if (isPremiumResult) {
    const obj6 = { shiny: false, text: null, onPress: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj6[1] = intl4.string(tmp2(tmp3[13]).t.hvVgAZ);
    obj6[2] = callback;
    obj5[1] = tmp20(tmp10Result, obj6);
    let tmp26 = obj5;
  } else {
    const obj7 = { loading: null, text: null, onPress: null };
    obj7[0] = loading;
    const intl3 = tmp2(tmp3[13]).intl;
    const string2 = intl3.string;
    const t2 = tmp2(tmp3[13]).t;
    if (isPremiumAtLeastResult) {
      let string2Result = string2(t2.IJI7yk);
    } else {
      string2Result = string2(t2.pj0XBN);
    }
    obj7[1] = string2Result;
    obj7[2] = onPress;
    obj5[1] = tmp20(tmp10Result, obj7);
    tmp26 = obj5;
  }
  const tmp18Result = closure_11(View, obj1);
  let tmp28;
  if (flag) {
    tmp28 = tmp20Result;
  }
  const obj8 = { scrollable: true, startExpanded: true, footer: tmp28, children: null };
  const obj9 = { contentContainerStyle: items5, children: null };
  items5 = [tmp.container, { paddingBottom: bottom + 64 }];
  const items6 = [
    tmp18Result,
    memo.map((arr) => {
      const someResult = arr.some((arg0) => {
        let id;
        if (user != null) {
          id = user.id;
        }
        return arg0 === id;
      });
      const items = [lib.rowContainer, ];
      let rowContainerWithUsersBadge = someResult;
      if (someResult) {
        rowContainerWithUsersBadge = lib.rowContainerWithUsersBadge;
      }
      items[1] = rowContainerWithUsersBadge;
      return closure_1_10(closure_1_4, {
        style: items,
        children: arr.map((badge) => {
          const obj = { badge, isUsersBadge: null, premiumSince: null };
          let id;
          if (user != null) {
            id = user.id;
          }
          obj[1] = badge === id;
          obj[2] = closure_3;
          return closure_1_10(closure_1_14, obj, arg1);
        })
      }, arg1);
    })
  ];
  obj9[1] = items6;
  obj8[3] = closure_11(userId(tieredTenureBadgeDataForUser[26]).BottomSheetScrollView, obj9);
  return closure_10(userId(tieredTenureBadgeDataForUser[25]).BottomSheet, obj8);
};
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";