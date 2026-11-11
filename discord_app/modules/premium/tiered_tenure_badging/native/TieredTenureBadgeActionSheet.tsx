// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TieredTenureBadgeUtils from "../../../user_profile/TieredTenureBadgeUtils.tsx";
import showUserProfileActionSheet from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import useMobileTenureBadgeImages from "hooks/useMobileTenureBadgeImages.tsx";
import useTenureBadgeRequirementString from "../hooks/useTenureBadgeRequirementString.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

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
    items = [tmp.badgeContainer];
    let usersBadgeContainer = isUsersBadge;
    if (isUsersBadge) {
      usersBadgeContainer = tmp.usersBadgeContainer;
    }
    const obj2 = { style: null, children: null };
    items[1] = usersBadgeContainer;
    obj2.style = items;
    const obj3 = { resizeMode: "contain", source: small };
    const items1 = [closure_1_10(FastImageDefault, obj3), , ,];
    const obj4 = {
      style: tmp.badgeName,
      variant: "heading-sm/semibold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = util.intl;
    obj4.children = intl.string(tieredTenureBadgeData.nameUnformatted);
    items1[1] = closure_1_10(Text_Text.Text, obj4);
    const obj5 = {
      style: tmp.badgeRequirement,
      variant: "body-xs/normal",
      color: "mobile-text-heading-primary",
      children: tmp7,
    };
    items1[2] = closure_1_10(Text_Text.Text, obj5);
    if (isUsersBadge) {
      isUsersBadge = null != premiumSince;
    }
    if (isUsersBadge) {
      const obj6 = { style: tmp.badgePremiumSince, variant: "body-xs/normal", color: "text-muted", children: null };
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
const PremiumConstants = fn(1387);
({ PremiumTypes: closure_6, TieredTenureBadge: metroImportDefault } = PremiumConstants);
const Constants = fn(1072);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const TIERED_TENURE_BADGE_ACTION_SHEET = "TIERED_TENURE_BADGE_ACTION_SHEET";
const createStyles = fn(5243);
let obj2 = {
  headerContainer: { paddingHorizontal: 24, alignItems: "center" },
  title: { marginTop: 8, paddingHorizontal: 12, textAlign: "center" },
  subtitle: { marginTop: 8, textAlign: "center" },
  container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 24, marginTop: 16 },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    height: 160,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  rowContainerWithUsersBadge: { height: 186 },
  badgeContainer: { minWidth: 110, height: "100%", paddingTop: 16, alignItems: "center", paddingHorizontal: 8 },
  usersBadgeContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderWidth: 1.2,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.sm,
  },
  badgeName: { marginTop: 8 },
  badgeRequirement: { marginTop: 4 },
  badgePremiumSince: { width: 90, marginTop: 4, textAlign: "center" },
  footer: { marginHorizontal: 24 },
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx",
);

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
  items = [UserStore];
  const stateFromStores = userId(tieredTenureBadgeDataForUser[15]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  let obj3 = userId(tieredTenureBadgeDataForUser[15]);
  const canUseTenureBadge = userId(tieredTenureBadgeDataForUser[16]).useCanUseTenureBadge();
  let obj4 = userId(tieredTenureBadgeDataForUser[16]);
  const obj5 = userId(tieredTenureBadgeDataForUser[17]);
  const isPremiumResult = userId(tieredTenureBadgeDataForUser[17]).isPremium(stateFromStores, TIER_2.TIER_2);
  let premiumType;
  if (stateFromStores != null) {
    premiumType = stateFromStores.premiumType;
  }
  const obj6 = userId(tieredTenureBadgeDataForUser[17]);
  const obj7 = { type: null, name: null, properties: null };
  const isPremiumAtLeastResult = userId(tieredTenureBadgeDataForUser[17]).isPremiumAtLeast(premiumType, TIER_2.TIER_0);
  obj7.type = userId(tieredTenureBadgeDataForUser[19]).ImpressionTypes.HALFSHEET;
  obj7.name = userId(tieredTenureBadgeDataForUser[19]).ImpressionNames.TIERED_TENURE_BADGE_MODAL;
  let id;
  if (tieredTenureBadgeDataForUser != null) {
    id = tieredTenureBadgeDataForUser.id;
  }
  obj7.properties = { badge: id, premium_type: isPremiumResult, viewed_user_id: userId };
  let id1;
  if (tieredTenureBadgeDataForUser != null) {
    id1 = tieredTenureBadgeDataForUser.id;
  }
  let id2;
  if (tieredTenureBadgeDataForUser != null) {
    id2 = tieredTenureBadgeDataForUser.id;
  }
  const items1 = [id2];
  require("useTrackImpression")(obj7, { disableTrack: null == id1 }, items1);
  const bottom = tmp11(tmp3[20])().bottom;
  const items2 = [userId];
  const callback = noop.useCallback(() => {
    openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
    const obj2 = { screen: constants2.PREMIUM };
    ActionSheetActionCreatorsDefault.hideActionSheet(TIERED_TENURE_BADGE_ACTION_SHEET);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet(showUserProfileActionSheet.getUserProfileActionSheetKey(userId));
  }, items2);
  const obj8 = { disableTrack: null == id1 };
  const tmp12 = require("useTrackImpression");
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(
    false,
    callback,
    constants.TIERED_TENURE_BADGES_ACTION_SHEET,
    "replaceTopSheet",
  ));
  const memo = noop.useMemo(() => {
    let sum;
    const values = Object.values(closure_1_7);
    items = [];
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
  const obj9 = { style: tmp.headerContainer, children: null };
  const obj10 = {
    variant: "heading-xl/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.title,
    children: null,
  };
  const intl = tmp2(tmp3[13]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[13]).t;
  if (canUseTenureBadge) {
    let stringResult = string(t.Og62j7);
  } else {
    stringResult = string(t.RtGeFS);
  }
  obj10.children = stringResult;
  const items3 = [closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj10)];
  const obj11 = { variant: "body-md/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = tmp2(tmp3[13]).intl;
  if (canUseTenureBadge) {
    let stringResult1 = intl2.string(tmp2(tmp3[13]).t.IdAP91);
  } else {
    const obj12 = { learnMoreHook: callback };
    stringResult1 = intl2.format(tmp2(tmp3[13]).t["bF+q7R"], obj12);
  }
  obj11.children = stringResult1;
  items3[1] = closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj11);
  obj9.children = items3;
  const obj13 = { style: null, children: null };
  const items4 = [tmp.footer, { paddingBottom: bottom }];
  obj13.style = items4;
  const tmp18 = require("usePremiumFeatureUpsellGetNitro")(
    false,
    callback,
    constants.TIERED_TENURE_BADGES_ACTION_SHEET,
    "replaceTopSheet",
  );
  const tmp11Result = require("NitroUpsellButton");
  if (canUseTenureBadge) {
    const obj14 = { shiny: false, text: null, onPress: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj14.text = intl4.string(tmp2(tmp3[13]).t.hvVgAZ);
    obj14.onPress = callback;
    obj13.children = closure_10(tmp11Result, obj14);
  } else {
    const obj15 = { loading, text: null, onPress: null };
    const intl3 = tmp2(tmp3[13]).intl;
    const string2 = intl3.string;
    const t2 = tmp2(tmp3[13]).t;
    if (isPremiumAtLeastResult) {
      let string2Result = string2(t2.IJI7yk);
    } else {
      string2Result = string2(t2.pj0XBN);
    }
    obj15.text = string2Result;
    obj15.onPress = onPress;
    obj13.children = closure_10(tmp11Result, obj15);
  }
  const tmp19Result = closure_11(View, obj9);
  let tmp29;
  if (flag) {
    tmp29 = tmp21Result;
  }
  const obj16 = { scrollable: true, startExpanded: true, footer: tmp29, children: null };
  const obj17 = { contentContainerStyle: null, children: null };
  const items5 = [tmp.container, { paddingBottom: bottom + 64 }];
  obj17.contentContainerStyle = items5;
  const items6 = [
    tmp19Result,
    memo.map((arr, index) => {
      const someResult = arr.some((item) => {
        let id;
        if (user != null) {
          id = user.id;
        }
        return item === id;
      });
      items = [closure_1.rowContainer];
      let rowContainerWithUsersBadge = someResult;
      if (someResult) {
        rowContainerWithUsersBadge = closure_1.rowContainerWithUsersBadge;
      }
      items[1] = rowContainerWithUsersBadge;
      return closure_2_10(
        View,
        {
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
          }),
        },
        index,
      );
    }),
  ];
  obj17.children = items6;
  obj16.children = closure_11(userId(tieredTenureBadgeDataForUser[27]).BottomSheetScrollView, obj17);
  return closure_10(userId(tieredTenureBadgeDataForUser[26]).BottomSheet, obj16);
}
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";
