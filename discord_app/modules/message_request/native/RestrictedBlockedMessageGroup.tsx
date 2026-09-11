// === Module 16987: RestrictedBlockedMessageGroup ===

// Module 16987 (RestrictedBlockedMessageGroup)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4602 */;
import Pressables from "Pressables" /* 5174 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4606);
let createStyles = { toggle: null };
createStyles = { marginLeft: fn(16985).RESTRICTED_CONTENT_INSET, marginVertical: nativeDefault.space.PX_8 };
createStyles.toggle = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default function RestrictedBlockedMessageGroup(arg0) {
  ({ messages, renderMessage: require } = arg0);
  dependencyMap = undefined;
  const tmp = closure_7();
  [tmp3, c1] = _slicedToArray(noop.useState(false), 2);
  const callback = noop.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  let obj = { style: tmp.toggle, accessibilityRole: "button", accessibilityState: { expanded: mapped }, onPress: callback, children: null };
  obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj = { count: messages.length };
  obj.children = intl.format(util.t["+FcYM/"], obj);
  obj.children = closure_5(Text_Text.Text, obj);
  const children = [closure_5(Pressables.PressableOpacity, obj), ];
  if (mapped) {
    mapped = messages.map((id) => hasOwnProperty(View, { children: require(id) }, id.id));
  }
  children[1] = mapped;
  return closure_6(View, { children });
};