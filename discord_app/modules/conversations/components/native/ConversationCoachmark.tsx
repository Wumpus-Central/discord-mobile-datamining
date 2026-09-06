// === Module 13256: ConversationCoachmark ===

// Module 13256 (ConversationCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function NewBadge() {
  let obj = { style: closure_9().badge, children: null };
  obj = { variant: "text-sm/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.c2GSIl);
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/bold", color: "text-default", children: null });
  return <View variant="text-sm/bold" color="text-default">{null}</View>;
}
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const TOPICAL_NAVIGATION_HEADER_COACHMARK = fn(1943).DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
let items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
fn(4560);
let createStyles = { badge: null, coachmarkWrapper: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
createStyles.badge = createStyles;
createStyles.coachmarkWrapper = { marginRight: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = function ConversationCoachmark(arg0) {
  let first;
  ({ children, isLast } = arg0);
  const ref = noop.useRef(null);
  let obj = first(7388);
  const tmp3 = _slicedToArray(obj.useSelectedDismissibleContent(items), 2);
  first = tmp3[0];
  dependencyMap = tmp5;
  items = [tmp3[1], first];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.UcQjDe);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.QeJIbA);
    obj.visible = first === TOPICAL_NAVIGATION_HEADER_COACHMARK;
    obj.onDismiss = function onDismiss() {
      closure_1_1(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_6(closure_1_10, {});
    };
    return obj;
  }, items);
  const tmp = closure_9();
  const coachmark = first(11127).useCoachmark(ref, memo);
  const items1 = [tmp3[1]];
  let coachmarkWrapper;
  const callback = noop.useCallback(() => {
    closure_1(ContentDismissActionType.USER_DISMISS);
  }, items1);
  if (!isLast) {
    coachmarkWrapper = tmp.coachmarkWrapper;
  }
  obj = { style: coachmarkWrapper, children: null };
  obj = { ref, children: children(callback) };
  obj.children = <View ref={ref}>{children(callback)}</View>;
  return <View ref={ref}>{children(callback)}</View>;
};