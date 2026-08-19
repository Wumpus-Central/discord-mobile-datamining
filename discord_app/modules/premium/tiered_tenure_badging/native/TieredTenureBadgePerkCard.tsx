// === Module 12875: TieredTenureBadgePerkCard ===

// Module 12875 (TieredTenureBadgePerkCard)
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ badgeNameContainer: { flexDirection: "row" }, tenureRequirements: { marginStart: 4 }, image: { width: "100%", height: "100%" }, imageContainer: { height: 238, paddingVertical: 32 }, upcomingBadge: { opacity: 0.4 }, title: { marginTop: 0 } });
const result = require("obj132").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx");

export const TieredTenureBadgePerkCard = function TieredTenureBadgePerkCard() {
  let obj = tieredTenureBadgeData(9496);
  tieredTenureBadgeData = obj.useTieredTenureBadgeData();
  obj1 = tieredTenureBadgeData(9496);
  const premiumSince = obj1.usePremiumSince();
  let obj2 = tieredTenureBadgeData(12876);
  const timeUntilNextBadge = obj2.useTimeUntilNextBadge();
  const tmp6 = callback3();
  let obj3 = tieredTenureBadgeData(589);
  const items = [closure_5];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = tieredTenureBadgeData(9470);
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
    if (tieredTenureBadgeData.status === tmp(9496).TieredTenureBadgeStatus.UPCOMING) {
      const intl2 = tmp(1236).intl;
      let stringResult = intl2.string(tmp(1236).t.O9TBwQ);
    } else {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t["jyYgZ+"]);
    }
    let formatResult = null;
    let tmp14 = large;
    if (null != premiumSince) {
      const status = tieredTenureBadgeData.status;
      if (tmp(9496).TieredTenureBadgeStatus.EARNED === status) {
        const intl5 = tmp(1236).intl;
        obj = { date: null };
        const _Date2 = Date;
        const date = new Date(premiumSince);
        obj[0] = date;
        formatResult = intl5.format(tmp(1236).t.Hu4jfi, obj);
        tmp14 = large;
      } else {
        formatResult = null;
        tmp14 = large;
        if (tmp(9496).TieredTenureBadgeStatus.UPCOMING === status) {
          formatResult = null;
          tmp14 = large;
          if (null != timeUntilNextBadge) {
            const intl3 = tmp(1236).intl;
            obj = { timeFrame: null, date: null };
            const intl4 = tmp(1236).intl;
            obj1 = { days: null };
            obj1[0] = timeUntilNextBadge.days;
            obj[0] = intl4.formatToPlainString(tmp(1236).t["k2UNz+"], obj1);
            const _Date = Date;
            const date1 = new Date(premiumSince);
            obj[1] = date1;
            formatResult = intl3.format(tmp(1236).t.vwLvec, obj);
            tmp14 = stateFromStores(12878);
          }
        }
      }
    }
    obj2 = { style: null, children: null };
    obj2[0] = tmp6.badgeNameContainer;
    obj3 = { variant: "heading-md/medium", color: "text-default", children: null };
    const intl6 = tmp(1236).intl;
    obj3[2] = intl6.string(tieredTenureBadgeData.nameUnformatted);
    const items2 = [callback(tmp(4734).Text, obj3), ];
    obj4 = { variant: "heading-md/medium", color: "text-muted", style: null, children: null };
    obj4[2] = tmp6.tenureRequirements;
    obj4[3] = tmp(9495).getTenureBadgeRequirementString(tieredTenureBadgeData.id, tieredTenureBadgeData.tenureReqNumMonths);
    items2[1] = callback(tmp(4734).Text, obj4);
    obj2[1] = items2;
    const items3 = [callback2(View, obj2), ];
    let tmp30Result = null != formatResult;
    if (tmp30Result) {
      const obj5 = { variant: "heading-sm/normal", color: "text-muted", children: null };
      obj5[2] = formatResult;
      tmp30Result = callback(tmp(4734).Text, obj5);
    }
    const obj6 = { children: null };
    items3[1] = tmp30Result;
    obj6[0] = items3;
    const tmpResult = tmp(9495);
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
    const tmp34 = stateFromStores(12852);
    const tmp35 = stateFromStores(5449);
    const obj9 = { resizeMode: "contain", style: null, source: null };
    items4[1] = tieredTenureBadgeData.status === tmp(9496).TieredTenureBadgeStatus.UPCOMING && tmp6.upcomingBadge;
    obj9[1] = items4;
    const obj10 = { uri: null };
    obj10[0] = tmp14;
    obj9[2] = obj10;
    obj8[1] = callback(tmp35, obj9);
    obj7[5] = callback(View, obj8);
    obj7[6] = stringResult;
    return callback(tmp34, obj7);
  }
};