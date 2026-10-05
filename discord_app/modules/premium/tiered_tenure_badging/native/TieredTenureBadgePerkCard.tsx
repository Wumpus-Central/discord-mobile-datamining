// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({
  badgeNameContainer: { flexDirection: "row" },
  tenureRequirements: { marginStart: 4 },
  image: { width: "100%", height: "100%" },
  imageContainer: { height: 238, paddingVertical: 32 },
  upcomingBadge: { opacity: 0.4 },
  title: { marginTop: 0 },
});
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx");

export const TieredTenureBadgePerkCard = function TieredTenureBadgePerkCard() {
  let currentUser;
  let date;
  let date1;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let items2;
  let large;
  let obj14;
  let obj15;
  let obj16;
  let obj6;
  let tieredTenureBadgeData;
  let tmp25Result;
  let tmp32;
  let tmpResult;
  const tmp = tieredTenureBadgeData;
  let obj = tieredTenureBadgeData(10875);
  tieredTenureBadgeData = obj.useTieredTenureBadgeData();
  let obj2 = tieredTenureBadgeData(10875);
  const premiumSince = obj2.usePremiumSince();
  const obj3 = tieredTenureBadgeData(13237);
  const timeUntilNextBadge = obj3.useTimeUntilNextBadge();
  const tmp6 = closure_9();
  const items = [UserStore];
  const obj4 = tieredTenureBadgeData(504);
  const stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  const useMobileTenureBadgeImages = tieredTenureBadgeData(10849).useMobileTenureBadgeImages;
  tieredTenureBadgeData(10849);
  if (tieredTenureBadgeData != null) {
    id = tieredTenureBadgeData.id;
  }
  const mobileTenureBadgeImages = useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    large = mobileTenureBadgeImages.large;
  }
  const items1 = [stateFromStores];
  let id1;
  if (tieredTenureBadgeData != null) {
    id1 = tieredTenureBadgeData.id;
  }
  items1[1] = id1;
  if (null == tieredTenureBadgeData) {
    return null;
  } else {
    const intl9 = tmp(1126).intl;
    let stringResult = intl9.string(tmp(1126).t["jyYgZ+"]);
    if (tieredTenureBadgeData.status === tmp(10875).TieredTenureBadgeStatus.UPCOMING) {
      const intl2 = tmp(1126).intl;
      stringResult = intl2.string(tmp(1126).t.O9TBwQ);
    } else if (tieredTenureBadgeData.status === tmp(10875).TieredTenureBadgeStatus.WITHHELD) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.lHYDUu);
    }
    let formatResult = null;
    let tmp15 = large;
    if (null != premiumSince) {
      const status = tieredTenureBadgeData.status;
      if (tmp(10875).TieredTenureBadgeStatus.EARNED !== status) {
        if (tmp(10875).TieredTenureBadgeStatus.WITHHELD !== status) {
          formatResult = null;
          tmp15 = large;
          if (tmp(10875).TieredTenureBadgeStatus.UPCOMING === status) {
            formatResult = null;
            tmp15 = large;
            if (null != timeUntilNextBadge) {
              const intl3 = tmp(1126).intl;
              const format = intl3.format;
              const obj5 = { timeFrame: intl4.formatToPlainString(tmp(1126).t["k2UNz+"], obj6), date };
              const vwLvec = tmp(1126).t.vwLvec;
              intl4 = tmp(1126).intl;
              let tmp16 = globalThis;
              const _Date = Date;
              const self = this;
              const self2 = this;
              obj6 = { days: timeUntilNextBadge.days };
              date = new Date(premiumSince);
              formatResult = format(vwLvec, obj5);
              tmp15 = stateFromStores(13239);
            }
          }
        }
      }
      const intl5 = tmp(1126).intl;
      const format2 = intl5.format;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const obj7 = { date: date1 };
      const Hu4jfi = tmp(1126).t.Hu4jfi;
      date1 = new Date(premiumSince);
      formatResult = format2(Hu4jfi, obj7);
      tmp15 = large;
    }
    const obj8 = { style: tmp6.badgeNameContainer, children: items2 };
    const obj9 = {
      variant: "heading-md/medium",
      color: "text-default",
      children: intl6.string(tieredTenureBadgeData.nameUnformatted),
    };
    const Text = tmp(4886).Text;
    intl6 = tmp(1126).intl;
    items2 = [closure_7(Text, obj9)];
    const obj10 = {
      variant: "heading-md/medium",
      color: "text-muted",
      style: tmp6.tenureRequirements,
      children: tmpResult.getTenureBadgeRequirementString(
        tieredTenureBadgeData.id,
        tieredTenureBadgeData.tenureReqNumMonths,
      ),
    };
    const Text2 = tmp(4886).Text;
    tmpResult = tmp(10874);
    items2[1] = closure_7(Text2, obj10);
    const items3 = [closure_8(View, obj8)];
    let tmp27Result = null != formatResult;
    if (tmp27Result) {
      const obj11 = { variant: "heading-sm/normal", color: "text-muted", children: formatResult };
      tmp27Result = closure_7(tmp(4886).Text, obj11);
    }
    const obj12 = { children: items3 };
    items3[1] = tmp27Result;
    const obj13 = {
      title: intl7.string(tmp(1126).t.rnsqpa),
      titleStyle: tmp6.title,
      bodyComponent: tmp25Result,
      cta: intl8.string(tmp(1126).t.VsY8ZW),
      buttonOnPress: tmp12,
      headerComponent: closure_7(View, obj14),
      pillText: stringResult,
    };
    tmp25Result = closure_8(View, obj12);
    const tmp31 = stateFromStores(13204);
    intl7 = tmp(1126).intl;
    intl8 = tmp(1126).intl;
    const items4 = [tmp6.image];
    obj14 = { style: tmp6.imageContainer, children: closure_7(tmp32, obj15) };
    tmp32 = stateFromStores(5974);
    const upcomingBadge =
      (tieredTenureBadgeData.status === tmp(10875).TieredTenureBadgeStatus.UPCOMING ||
        tieredTenureBadgeData.status === tmp(10875).TieredTenureBadgeStatus.WITHHELD) &&
      tmp6.upcomingBadge;
    obj15 = { resizeMode: "contain", style: items4, source: obj16 };
    items4[1] = upcomingBadge;
    obj16 = { uri: tmp15 };
    return closure_7(tmp31, obj13);
  }
};
