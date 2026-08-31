// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ badgeNameContainer: { flexDirection: "row" }, tenureRequirements: { marginStart: 4 }, image: { width: "100%", height: "100%" }, imageContainer: { height: 238, paddingVertical: 32 }, upcomingBadge: { opacity: 0.4 }, title: { marginTop: 0 } });
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx");

export const TieredTenureBadgePerkCard = function TieredTenureBadgePerkCard() {
  let obj = tieredTenureBadgeData(8929);
  tieredTenureBadgeData = obj.useTieredTenureBadgeData();
  obj1 = tieredTenureBadgeData(8929);
  const premiumSince = obj1.usePremiumSince();
  let obj2 = tieredTenureBadgeData(13068);
  const timeUntilNextBadge = obj2.useTimeUntilNextBadge();
  const tmp6 = callback3();
  let obj3 = tieredTenureBadgeData(589);
  const items = [closure_5];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = tieredTenureBadgeData(8903);
  let id;
  if (tieredTenureBadgeData != null) {
    id = tieredTenureBadgeData.id;
  }
  const mobileTenureBadgeImages = obj4.useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    const large = mobileTenureBadgeImages.large;
  }
  const items1 = [stateFromStores, ];
  let id1;
  if (tieredTenureBadgeData != null) {
    id1 = tieredTenureBadgeData.id;
  }
  items1[1] = id1;
  if (null == tieredTenureBadgeData) {
    return null;
  } else {
    const intl9 = tmp(1236).intl;
    let stringResult = intl9.string(tmp(1236).t["jyYgZ+"]);
    if (tieredTenureBadgeData.status === tmp(8929).TieredTenureBadgeStatus.UPCOMING) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.O9TBwQ);
    } else if (tieredTenureBadgeData.status === tmp(8929).TieredTenureBadgeStatus.WITHHELD) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.lHYDUu);
    }
    let formatResult = null;
    let tmp14 = large;
    if (null != premiumSince) {
      const status = tieredTenureBadgeData.status;
      if (tmp(8929).TieredTenureBadgeStatus.EARNED !== status) {
        if (tmp(8929).TieredTenureBadgeStatus.WITHHELD !== status) {
          formatResult = null;
          tmp14 = large;
          if (tmp(8929).TieredTenureBadgeStatus.UPCOMING === status) {
            formatResult = null;
            tmp14 = large;
            if (null != timeUntilNextBadge) {
              const intl3 = tmp(1236).intl;
              obj = { timeFrame: null, date: null };
              const intl4 = tmp(1236).intl;
              obj = { days: null };
              obj[0] = timeUntilNextBadge.days;
              obj[0] = intl4.formatToPlainString(tmp(1236).t["k2UNz+"], obj);
              const _Date = Date;
              const date = new Date(premiumSince);
              obj[1] = date;
              formatResult = intl3.format(tmp(1236).t.vwLvec, obj);
              tmp14 = stateFromStores(13070);
            }
          }
        }
      }
      const intl5 = tmp(1236).intl;
      obj1 = { date: null };
      const _Date2 = Date;
      const date1 = new Date(premiumSince);
      obj1[0] = date1;
      formatResult = intl5.format(tmp(1236).t.Hu4jfi, obj1);
      tmp14 = large;
    }
    obj2 = { style: null, children: null };
    obj2[0] = tmp6.badgeNameContainer;
    obj3 = { variant: "heading-md/medium", color: "text-default", children: null };
    const intl6 = tmp(1236).intl;
    obj3[2] = intl6.string(tieredTenureBadgeData.nameUnformatted);
    const items2 = [callback(tmp(4444).Text, obj3), ];
    obj4 = { variant: "heading-md/medium", color: "text-muted", style: null, children: null };
    obj4[2] = tmp6.tenureRequirements;
    obj4[3] = tmp(8928).getTenureBadgeRequirementString(tieredTenureBadgeData.id, tieredTenureBadgeData.tenureReqNumMonths);
    items2[1] = callback(tmp(4444).Text, obj4);
    obj2[1] = items2;
    const items3 = [callback2(View, obj2), ];
    let tmp30Result = null != formatResult;
    if (tmp30Result) {
      const obj5 = { variant: "heading-sm/normal", color: "text-muted", children: null };
      obj5[2] = formatResult;
      tmp30Result = tmp30(tmp(4444).Text, obj5);
    }
    const obj6 = { children: null };
    items3[1] = tmp30Result;
    obj6[0] = items3;
    const tmp28 = callback2;
    const tmpResult = tmp(8928);
    const obj7 = { title: null, titleStyle: null, bodyComponent: null, cta: null, buttonOnPress: null, headerComponent: null, pillText: null };
    const tmp28Result = callback2(View, obj6);
    const intl7 = tmp(1236).intl;
    obj7[0] = intl7.string(tmp(1236).t.rnsqpa);
    obj7[1] = tmp6.title;
    obj7[2] = tmp28Result;
    const intl8 = tmp(1236).intl;
    obj7[3] = intl8.string(tmp(1236).t.VsY8ZW);
    obj7[4] = tmp11;
    const obj8 = { style: null, children: null };
    obj8[0] = tmp6.imageContainer;
    const items4 = [tmp6.image, ];
    const tmp34 = stateFromStores(13044);
    let upcomingBadge = tieredTenureBadgeData.status === tmp(8929).TieredTenureBadgeStatus.UPCOMING;
    if (!upcomingBadge) {
      upcomingBadge = tieredTenureBadgeData.status === tmp(8929).TieredTenureBadgeStatus.WITHHELD;
    }
    if (upcomingBadge) {
      upcomingBadge = tmp6.upcomingBadge;
    }
    const obj9 = { resizeMode: "contain", style: null, source: null };
    items4[1] = upcomingBadge;
    obj9[1] = items4;
    const obj10 = { uri: null };
    obj10[0] = tmp14;
    obj9[2] = obj10;
    obj8[1] = callback(stateFromStores(5461), obj9);
    obj7[5] = callback(View, obj8);
    obj7[6] = stringResult;
    return callback(tmp34, obj7);
  }
};