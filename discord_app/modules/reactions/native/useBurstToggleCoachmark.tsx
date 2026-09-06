// === Module 11126: useBurstToggleCoachmark ===

// Module 11126 (useBurstToggleCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import SuperReactionIcon from "SuperReactionIcon" /* 9373 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function EducationCoachmarkImg() {
  let obj = { style: closure_10().upsellImageContainer, children: null };
  obj = { color: nativeDefault.colors.WHITE, size: "md" };
  obj.children = jsx(SuperReactionIcon.SuperReactionIcon, { color: nativeDefault.colors.WHITE, size: "md" });
  return <View color={nativeDefault.colors.WHITE} size="md" />;
}
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_9 = fn(1943).DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
fn(4560);
const createStyles = { upsellImageContainer: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
createStyles.upsellImageContainer = size;
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  const items = [UserStore];
  const stateFromStores = first(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = first(504);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  let tmpResult = tmp(7388);
  const tmp5 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  closure_1 = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = noop.useMemo(() => {
    const obj = { description: null, onDismiss: null, position: "bottom", renderImgComponent: null, title: null, visible: null };
    const intl = util.intl;
    obj.description = intl.string(util.t.nyYohm);
    obj.onDismiss = function onDismiss() {
      closure_1_1(constants.UNKNOWN);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_8(closure_1_11, {});
    };
    const intl2 = util.intl;
    obj.title = intl2.string(util.t.ORK94p);
    obj.visible = first === closure_9;
    return obj;
  }, items3);
  tmpResult = tmp(11127);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return tmp5[1];
};