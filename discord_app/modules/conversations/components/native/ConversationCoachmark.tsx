// === Module 13558: ConversationCoachmark ===

// Module 13558 (ConversationCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function NewBadge() {
  const obj = { style: closure_9().badge, children: null };
  const obj2 = { variant: "text-sm/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.c2GSIl);
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/bold", color: "text-default", children: null });
  return <View style={closure_9().badge}>{null}</View>;
}
const View = fn(17).View;
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const jsx = fn(21).jsx;
const TOPICAL_NAVIGATION_HEADER_COACHMARK = fn(2027).DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
let items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
const createStyles = fn(4756);
let obj2 = { badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round }, coachmarkWrapper: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.coachmarkWrapper = { marginRight: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = function ConversationCoachmark(arg0) {
  let first;
  ({ children, isLast } = arg0);
  const ref = noop.useRef(null);
  const tmp = closure_9();
  const tmp3 = _slicedToArray(first(7628).useSelectedDismissibleContent(items), 2);
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
  let obj = first(7628);
  const coachmark = first(11392).useCoachmark(ref, memo);
  const items1 = [tmp3[1]];
  let coachmarkWrapper;
  const callback = noop.useCallback(() => {
    closure_1(ContentDismissActionType.USER_DISMISS);
  }, items1);
  if (!isLast) {
    coachmarkWrapper = tmp.coachmarkWrapper;
  }
  const obj3 = { style: coachmarkWrapper, children: null };
  const obj2 = first(11392);
  obj3.children = <View ref={ref}>{children(callback)}</View>;
  return <View style={coachmarkWrapper}>{null}</View>;
};