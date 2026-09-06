// discord_app/modules/message_request/native/RestrictedBlockedMessageGroup.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { toggle: null };
createStyles = { marginLeft: fn(16899).RESTRICTED_CONTENT_INSET, marginVertical: nativeDefault.space.PX_8 };
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
  let obj = {
    style: tmp.toggle,
    accessibilityRole: "button",
    accessibilityState: { expanded: mapped },
    onPress: callback,
    children: null,
  };
  obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj = { count: messages.length };
  obj.children = intl.format(util.t["+FcYM/"], obj);
  obj.children = closure_5(Text_Text.Text, obj);
  const children = [closure_5(Pressables.PressableOpacity, obj)];
  if (mapped) {
    mapped = messages.map((id) => hasOwnProperty(View, { children: require(id) }, id.id));
  }
  children[1] = mapped;
  return closure_6(View, { children });
}
