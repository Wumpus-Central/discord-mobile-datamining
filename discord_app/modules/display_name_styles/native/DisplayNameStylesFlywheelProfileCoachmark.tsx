// === Module 16801: DisplayNameStylesFlywheelProfileCoachmark ===

// Module 16801 (DisplayNameStylesFlywheelProfileCoachmark)
import native from "native" /* 5692 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function CoachmarkImage() {
  return <View style={closure_8().coachmarkImageContainer}>{jsx(native.DisplayNameLockeAbstractUI, { width: 160, height: 68, resizeMode: "contain" })}</View>;
}
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx");

export default function DisplayNameStylesFlywheelProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  dependencyMap = undefined;
  noop = undefined;
  let onDismiss;
  const items = [UserStore];
  const stateFromStores = visible(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = visible(504);
  const tmp4 = markAsDismissed;
  const result = markAsDismissed(4218).canUsePremiumProfileCustomization(stateFromStores);
  const intl = visible(1114).intl;
  const string = intl.string;
  const tmp6 = markAsDismissed(2786);
  if (result) {
    let stringResult = string(tmp6.h6sykk);
  } else {
    stringResult = string(tmp6.M5amXH);
  }
  dependencyMap = stringResult;
  const intl2 = tmp(1114).intl;
  const string2 = intl2.string;
  const tmp4Result = tmp4(2786);
  if (result) {
    let string2Result = string2(tmp4Result.TyUdka);
  } else {
    string2Result = string2(tmp4Result.dluV0R);
  }
  noop = string2Result;
  const items1 = [markAsDismissed];
  onDismiss = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [stringResult, string2Result, visible, onDismiss];
  const memo = noop.useMemo(() => ({
    title,
    description,
    visible,
    position: "bottom",
    onDismiss,
    renderImgComponent() {
      return closure_1_7(closure_1_9, {});
    }
  }), items2);
  const obj2 = markAsDismissed(4218);
  const coachmark = visible(11127).useCoachmark(visible.targetRef, memo);
  return null;
};