// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import useMobileTenureBadgeImages from "hooks/useMobileTenureBadgeImages.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { UserSettingsSections } from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
let closure_9 = createCacheKey.createStyles({
  image: { width: "100%", height: "100%" },
  imageContainer: { width: 110, height: 72, marginTop: 16 },
});
const result = require("set").fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx",
);

export default function TieredTenureBadgeCoachmark(arg0) {
  let tieredTenureBadgeData;
  let first;
  dependencyMap = undefined;
  ({ targetRef, badgeId } = arg0);
  const tieredTenureBadge = tieredTenureBadgeData(7634).getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    let tmpResult = tmp(7634);
    tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tmp(1943).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  tmpResult = tmp(7388);
  const tmp5 = callback(tmpResult.useSelectedDismissibleContent(items1), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  const items2 = [tmp5[1], first, tieredTenureBadgeData];
  const memo = React.useMemo(() => {
    let obj = {
      offsetY: 12,
      title: null,
      description: null,
      position: "bottom",
      visible: null,
      onDismiss: null,
      renderImgComponent: null,
      onButtonPress: null,
      buttonLabel: null,
      buttonVariant: "experimental_premium-primary",
    };
    const intl = tieredTenureBadgeData(1114).intl;
    obj[1] = intl.string(tieredTenureBadgeData(1114).t.Ajj8iG);
    const intl2 = tieredTenureBadgeData(1114).intl;
    obj[2] = intl2.string(tieredTenureBadgeData(1114).t["WUNqD/"]);
    obj[4] = first === tieredTenureBadgeData(1943).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
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
    const intl3 = tieredTenureBadgeData(1114).intl;
    obj[8] = intl3.string(tieredTenureBadgeData(1114).t.RzWDqY);
    return obj;
  }, items2);
  let obj = tieredTenureBadgeData(7634);
  const coachmark = tieredTenureBadgeData(11127).useCoachmark(targetRef, memo);
  return null;
}
