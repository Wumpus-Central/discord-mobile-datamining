// === Module 11460: TieredTenureBadgeCoachmark ===

// Module 11460 (TieredTenureBadgeCoachmark)
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import FastImageDefault from "FastImage" /* 5806 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 11429 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function CoachmarkImg(badge) {
  badge = badge.badge;
  const tmp = closure_9();
  let id;
  if (badge != null) {
    id = badge.id;
  }
  const mobileTenureBadgeImages = useMobileTenureBadgeImages.useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    const medium = mobileTenureBadgeImages.medium;
  }
  let tmp5 = null;
  if (null != badge) {
    const obj2 = { style: tmp.imageContainer, children: null };
    const obj3 = { resizeMode: "contain", style: tmp.image, source: null };
    const obj4 = { uri: medium };
    obj3.source = obj4;
    obj2.children = jsx(FastImageDefault, { resizeMode: "contain", style: tmp.image, source: null });
    tmp5 = <View style={tmp.imageContainer}>{null}</View>;
  }
  return tmp5;
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_9 = createStyles.createStyles({ image: { width: "100%", height: "100%" }, imageContainer: { width: 110, height: 72, marginTop: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx");

export default function TieredTenureBadgeCoachmark(arg0) {
  let tieredTenureBadgeData;
  let first;
  dependencyMap = undefined;
  ({ targetRef, badgeId } = arg0);
  const tieredTenureBadge = tieredTenureBadgeData(7873).getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    tieredTenureBadgeData = tmp(7873).getTieredTenureBadgeData(tieredTenureBadge);
    const tmpResult = tmp(7873);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tmp(2028).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = tieredTenureBadgeData(7873);
  const tmp5 = _slicedToArray(tieredTenureBadgeData(7633).useSelectedDismissibleContent(items1), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  const items2 = [tmp5[1], first, tieredTenureBadgeData];
  const memo = noop.useMemo(() => {
    const obj = { offsetY: 12, title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null, onButtonPress: null, buttonLabel: null, buttonVariant: "experimental_premium-primary" };
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
      tieredTenureBadgeData(7627).openUserSettings({ screen: constants.PREMIUM });
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.RzWDqY);
    return obj;
  }, items2);
  const tmpResult3 = tieredTenureBadgeData(7633);
  const coachmark = tieredTenureBadgeData(11398).useCoachmark(targetRef, memo);
  return null;
};