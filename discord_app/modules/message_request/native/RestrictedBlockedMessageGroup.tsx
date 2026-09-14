// === Module 17016: RestrictedBlockedMessageGroup ===

// Module 17016 (RestrictedBlockedMessageGroup)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4632 */;
import Pressables from "Pressables" /* 5204 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = { toggle: { marginLeft: fn(17014).RESTRICTED_CONTENT_INSET, marginVertical: nativeDefault.space.PX_8 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default function RestrictedBlockedMessageGroup(arg0) {
  ({ messages, renderMessage: require } = arg0);
  dependencyMap = undefined;
  const tmp = closure_7();
  [tmp3, c1] = noop.useState(false);
  const callback = noop.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  const obj = { style: tmp.toggle, accessibilityRole: "button", accessibilityState: { expanded: mapped }, onPress: callback, children: null };
  const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t["+FcYM/"], { count: messages.length });
  obj.children = closure_5(Text_Text.Text, obj2);
  const children = [closure_5(Pressables.PressableOpacity, obj), ];
  if (mapped) {
    mapped = messages.map((id) => hasOwnProperty(View, { children: require(id) }, id.id));
  }
  children[1] = mapped;
  return closure_6(View, { children });
};