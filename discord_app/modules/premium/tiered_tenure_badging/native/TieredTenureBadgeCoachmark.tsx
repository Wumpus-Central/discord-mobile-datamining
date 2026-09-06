// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useMobileTenureBadgeImages from "hooks/useMobileTenureBadgeImages.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function CoachmarkImg(badge) {
  badge = badge.badge;
  const tmp = closure_9();
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
    obj = { style: tmp.imageContainer, children: null };
    obj = { resizeMode: "contain", style: tmp.image, source: null };
    const obj1 = { uri: medium };
    obj.source = obj1;
    obj.children = jsx(FastImageDefault, { resizeMode: "contain", style: tmp.image, source: null });
    tmp5 = <View resizeMode="contain" style={tmp.image} source={null} />;
  }
  return tmp5;
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({
  image: { width: "100%", height: "100%" },
  imageContainer: { width: 110, height: 72, marginTop: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
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
  const tmp5 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items1), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  const items2 = [tmp5[1], first, tieredTenureBadgeData];
  const memo = noop.useMemo(() => {
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
    const intl = util.intl;
    obj.title = intl.string(util.t.Ajj8iG);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["WUNqD/"]);
    obj.visible = first === dismissible_content.DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      dependencyMap(constants2.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return <CoachmarkImg badge={badge} />;
    };
    obj.onButtonPress = function onButtonPress() {
      dependencyMap(constants2.TAKE_ACTION);
      tieredTenureBadgeData(7382);
      const obj = { screen: constants.PREMIUM };
      obj.openUserSettings(obj);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.RzWDqY);
    return obj;
  }, items2);
  let obj = tieredTenureBadgeData(7634);
  const coachmark = tieredTenureBadgeData(11127).useCoachmark(targetRef, memo);
  return null;
}
