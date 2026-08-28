// === Module 8935: CoachmarkImg ===

// Module 8935 (CoachmarkImg)
import preloadDefault from "preload" /* 5458 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 8880 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function CoachmarkImg(badge) {
  badge = badge.badge;
  const tmp = callback2();
  let obj = useMobileTenureBadgeImages;
  let id;
  if (badge != null) {
    id = badge.id;
  }
  const mobileTenureBadgeImages = obj.useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    const medium = mobileTenureBadgeImages.medium;
  }
  let tmp5 = null;
  if (null != badge) {
    obj = { style: null, children: null };
    obj[0] = tmp.imageContainer;
    obj = { resizeMode: "contain", style: null, source: null };
    obj[1] = tmp.image;
    obj1 = { uri: null };
    obj1[0] = medium;
    obj[2] = obj1;
    obj[1] = jsx(preloadDefault, { resizeMode: "contain", style: null, source: null });
    tmp5 = <View resizeMode="contain" style={null} source={null} />;
  }
  return tmp5;
}
let closure_9 = createCacheKey.createStyles({ image: { width: "100%", height: "100%" }, imageContainer: { width: 110, height: 72, marginTop: 16 } });
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx");

export default function TieredTenureBadgeCoachmark(arg0) {
  let tieredTenureBadgeData;
  let first;
  dependencyMap = undefined;
  ({ targetRef, badgeId } = arg0);
  const tieredTenureBadge = tieredTenureBadgeData(7326).getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    let tmpResult = tmp(7326);
    tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tmp(1377).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  tmpResult = tmp(6216);
  const tmp5 = callback(tmpResult.useSelectedDismissibleContent(items1), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  const items2 = [tmp5[1], first, tieredTenureBadgeData];
  const memo = React.useMemo(() => {
    let obj = { offsetY: 12, title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null, onButtonPress: null, buttonLabel: null, buttonVariant: "experimental_premium-primary" };
    const intl = tieredTenureBadgeData(1236).intl;
    obj[1] = intl.string(tieredTenureBadgeData(1236).t.Ajj8iG);
    const intl2 = tieredTenureBadgeData(1236).intl;
    obj[2] = intl2.string(tieredTenureBadgeData(1236).t["WUNqD/"]);
    obj[4] = first === tieredTenureBadgeData(1377).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
    obj[5] = function onDismiss() {
      callback(closure_1_7.USER_DISMISS);
    };
    obj[6] = function renderImgComponent() {
      return closure_1_8(closure_1_10, { badge: closure_0 });
    };
    obj[7] = function onButtonPress() {
      callback(closure_1_7.TAKE_ACTION);
      let obj = closure_1_0(closure_1_2[13]);
      obj = { screen: closure_1_6.PREMIUM };
      obj.openUserSettings(obj);
    };
    const intl3 = tieredTenureBadgeData(1236).intl;
    obj[8] = intl3.string(tieredTenureBadgeData(1236).t.RzWDqY);
    return obj;
  }, items2);
  let obj = tieredTenureBadgeData(7326);
  const coachmark = tieredTenureBadgeData(8913).useCoachmark(targetRef, memo);
  return null;
};