// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import BadgeId from "../../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet.tsx";
import openBadgeDetailsSheet from "../../../badges/native/openBadgeDetailsSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let closure_9 = createStyles.createStyles({
  badgeNameContainer: { flexDirection: "row" },
  tenureRequirements: { marginStart: 4 },
  image: { width: "100%", height: "100%" },
  imageContainer: { height: 238, paddingVertical: 32 },
  upcomingBadge: { opacity: 0.4 },
  title: { marginTop: 0 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx");

export function TieredTenureBadgePerkCard() {
  isBadgeDirectoryUpdatesEnabled = isBadgeDirectoryUpdatesEnabled(stateFromStores[6]).useIsBadgeDirectoryUpdatesEnabled(
    { location: "TieredTenureBadgePerkCard" },
  );
  let obj = isBadgeDirectoryUpdatesEnabled(stateFromStores[6]);
  const isNitroHomeBadgeDirectoryEnabled = isBadgeDirectoryUpdatesEnabled(
    stateFromStores[7],
  ).useIsNitroHomeBadgeDirectoryEnabled({ location: "TieredTenureBadgePerkCard" });
  let obj2 = isBadgeDirectoryUpdatesEnabled(stateFromStores[7]);
  const isBadgeManagementEnabled = isBadgeDirectoryUpdatesEnabled(stateFromStores[8]).useIsBadgeManagementEnabled({
    location: "TieredTenureBadgePerkCard",
  });
  if (isBadgeDirectoryUpdatesEnabled) {
    isBadgeDirectoryUpdatesEnabled = isNitroHomeBadgeDirectoryEnabled;
  }
  if (isBadgeDirectoryUpdatesEnabled) {
    isBadgeDirectoryUpdatesEnabled = isBadgeManagementEnabled;
  }
  let obj3 = isBadgeDirectoryUpdatesEnabled(stateFromStores[8]);
  const tieredTenureBadgeData = isBadgeDirectoryUpdatesEnabled(stateFromStores[9]).useTieredTenureBadgeData();
  const tmpResult = isBadgeDirectoryUpdatesEnabled(stateFromStores[9]);
  const premiumSince = isBadgeDirectoryUpdatesEnabled(stateFromStores[9]).usePremiumSince();
  const tmpResult6 = isBadgeDirectoryUpdatesEnabled(stateFromStores[9]);
  const timeUntilNextBadge = isBadgeDirectoryUpdatesEnabled(stateFromStores[10]).useTimeUntilNextBadge();
  const tmp9 = closure_9();
  const tmpResult7 = isBadgeDirectoryUpdatesEnabled(stateFromStores[10]);
  const items = [UserStore];
  stateFromStores = isBadgeDirectoryUpdatesEnabled(stateFromStores[11]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  const tmpResult8 = isBadgeDirectoryUpdatesEnabled(stateFromStores[11]);
  let id;
  if (tieredTenureBadgeData != null) {
    id = tieredTenureBadgeData.id;
  }
  const mobileTenureBadgeImages = isBadgeDirectoryUpdatesEnabled(stateFromStores[12]).useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    const large = mobileTenureBadgeImages.large;
  }
  const items1 = [stateFromStores, ,];
  let id1;
  if (tieredTenureBadgeData != null) {
    id1 = tieredTenureBadgeData.id;
  }
  items1[1] = id1;
  items1[2] = isBadgeDirectoryUpdatesEnabled;
  if (null == tieredTenureBadgeData) {
    return null;
  } else {
    const intl9 = tmp(tmp2[20]).intl;
    let stringResult = intl9.string(tmp(tmp2[20]).t["jyYgZ+"]);
    if (tieredTenureBadgeData.status === tmp(tmp2[9]).TieredTenureBadgeStatus.UPCOMING) {
      const intl2 = tmp(tmp2[20]).intl;
      stringResult = intl2.string(tmp(tmp2[20]).t.O9TBwQ);
    } else if (tieredTenureBadgeData.status === tmp(tmp2[9]).TieredTenureBadgeStatus.WITHHELD) {
      const intl = tmp(tmp2[20]).intl;
      stringResult = intl.string(tmp(tmp2[20]).t.lHYDUu);
    }
    let formatResult = null;
    let tmp17 = large;
    if (null != premiumSince) {
      const status = tieredTenureBadgeData.status;
      if (tmp(tmp2[9]).TieredTenureBadgeStatus.EARNED !== status) {
        if (tmp(tmp2[9]).TieredTenureBadgeStatus.WITHHELD !== status) {
          formatResult = null;
          tmp17 = large;
          if (tmp(tmp2[9]).TieredTenureBadgeStatus.UPCOMING === status) {
            formatResult = null;
            tmp17 = large;
            if (null != timeUntilNextBadge) {
              const intl3 = tmp(tmp2[20]).intl;
              let obj4 = { timeFrame: null, date: null };
              const intl4 = tmp(tmp2[20]).intl;
              let obj5 = { days: timeUntilNextBadge.days };
              obj4.timeFrame = intl4.formatToPlainString(tmp(tmp2[20]).t["k2UNz+"], obj5);
              const _Date = Date;
              const date = new Date(premiumSince);
              obj4.date = date;
              formatResult = intl3.format(tmp(tmp2[20]).t.vwLvec, obj4);
              tmp17 = tieredTenureBadgeData(tmp2[21]);
            }
          }
        }
      }
      const intl5 = tmp(tmp2[20]).intl;
      let obj6 = { date: null };
      const _Date2 = Date;
      const date1 = new Date(premiumSince);
      obj6.date = date1;
      formatResult = intl5.format(tmp(tmp2[20]).t.Hu4jfi, obj6);
      tmp17 = large;
    }
    const obj7 = { style: tmp9.badgeNameContainer, children: null };
    const obj8 = { variant: "heading-md/medium", color: "text-default", children: null };
    const intl6 = tmp(tmp2[20]).intl;
    obj8.children = intl6.string(tieredTenureBadgeData.nameUnformatted);
    const items2 = [closure_7(tmp(tmp2[22]).Text, obj8)];
    const obj9 = {
      variant: "heading-md/medium",
      color: "text-muted",
      style: tmp9.tenureRequirements,
      children: tmp(tmp2[23]).getTenureBadgeRequirementString(
        tieredTenureBadgeData.id,
        tieredTenureBadgeData.tenureReqNumMonths,
      ),
    };
    items2[1] = closure_7(tmp(tmp2[22]).Text, obj9);
    obj7.children = items2;
    const items3 = [closure_8(View, obj7)];
    let tmp33Result = null != formatResult;
    if (tmp33Result) {
      const obj10 = { variant: "heading-sm/normal", color: "text-muted", children: formatResult };
      tmp33Result = closure_7(tmp(tmp2[22]).Text, obj10);
    }
    const obj11 = { children: null };
    items3[1] = tmp33Result;
    obj11.children = items3;
    const tmpResult10 = tmp(tmp2[23]);
    const obj12 = {
      title: null,
      titleStyle: null,
      bodyComponent: null,
      cta: null,
      buttonOnPress: null,
      headerComponent: null,
      pillText: null,
    };
    const tmp31Result = closure_8(View, obj11);
    const intl7 = tmp(tmp2[20]).intl;
    obj12.title = intl7.string(tmp(tmp2[20]).t.rnsqpa);
    obj12.titleStyle = tmp9.title;
    obj12.bodyComponent = tmp31Result;
    const intl8 = tmp(tmp2[20]).intl;
    obj12.cta = intl8.string(tmp(tmp2[20]).t.VsY8ZW);
    obj12.buttonOnPress = tmp14;
    const obj13 = { style: tmp9.imageContainer, children: null };
    const items4 = [tmp9.image];
    const tmp37 = tieredTenureBadgeData(tmp2[24]);
    let upcomingBadge = tieredTenureBadgeData.status === tmp(tmp2[9]).TieredTenureBadgeStatus.UPCOMING;
    if (!upcomingBadge) {
      upcomingBadge = tieredTenureBadgeData.status === tmp(tmp2[9]).TieredTenureBadgeStatus.WITHHELD;
    }
    if (upcomingBadge) {
      upcomingBadge = tmp9.upcomingBadge;
    }
    const obj14 = { resizeMode: "contain", style: null, source: null };
    items4[1] = upcomingBadge;
    obj14.style = items4;
    const obj15 = { uri: tmp17 };
    obj14.source = obj15;
    obj13.children = closure_7(tieredTenureBadgeData(tmp2[25]), obj14);
    obj12.headerComponent = closure_7(View, obj13);
    obj12.pillText = stringResult;
    return closure_7(tmp37, obj12);
  }
  const tmpResult9 = isBadgeDirectoryUpdatesEnabled(stateFromStores[12]);
}
