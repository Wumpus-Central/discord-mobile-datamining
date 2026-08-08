// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { preload } from "../../../../components_native/common/FastImage.tsx";
import { useMobileTenureBadgeImages } from "hooks/useMobileTenureBadgeImages.tsx";

const require = arg1;
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
    const obj1 = { uri: null };
    obj1[0] = medium;
    obj[2] = obj1;
    obj[1] = jsx(preload, { resizeMode: "contain", style: null, source: null });
    tmp5 = <View resizeMode="contain" style={null} source={null} />;
  }
  return tmp5;
}
let closure_9 = createCacheKey.createStyles({ image: { width: "100%", height: "100%" }, imageContainer: { width: 110, height: 72, marginTop: 16 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx");

export default function TieredTenureBadgeCoachmark(arg0) {
  let badgeId;
  let targetRef;
  let tieredTenureBadgeData;
  let first;
  let dependencyMap;
  ({ targetRef, badgeId } = arg0);
  const tieredTenureBadge = tieredTenureBadgeData(7095).getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    let tmpResult = tmp(7095);
    tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tmp(1358).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  tmpResult = tmp(6022);
  const tmp5 = callback(tmpResult.useSelectedDismissibleContent(items1), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  const items2 = [tmp5[1], first, tieredTenureBadgeData];
  const memo = React.useMemo(() => {
    let obj = { offsetY: 12, title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null, onButtonPress: null, buttonLabel: null, buttonVariant: "experimental_premium-primary" };
    const intl = tieredTenureBadgeData(_undefined[12]).intl;
    obj[1] = intl.string(tieredTenureBadgeData(_undefined[12]).t.Ajj8iG);
    const intl2 = tieredTenureBadgeData(_undefined[12]).intl;
    obj[2] = intl2.string(tieredTenureBadgeData(_undefined[12]).t["WUNqD/"]);
    obj[4] = first === tieredTenureBadgeData(_undefined[10]).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
    obj[5] = function onDismiss() {
      callback(outer1_7.USER_DISMISS);
    };
    obj[6] = function renderImgComponent() {
      return outer1_8(outer1_10, { badge: closure_0 });
    };
    obj[7] = function onButtonPress() {
      callback(outer1_7.TAKE_ACTION);
      let obj = outer1_0(outer1_2[13]);
      obj = { screen: outer1_6.PREMIUM };
      obj.openUserSettings(obj);
    };
    const intl3 = tieredTenureBadgeData(_undefined[12]).intl;
    obj[8] = intl3.string(tieredTenureBadgeData(_undefined[12]).t.RzWDqY);
    return obj;
  }, items2);
  let obj = tieredTenureBadgeData(7095);
  const coachmark = tieredTenureBadgeData(8653).useCoachmark(targetRef, memo);
  return null;
};