// discord_app/modules/chat_input/native/accessories/ChatInputExpressionButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((height) => {
  let obj = { expressionButton: null, expressionButtonIconTint: null };
  const size = {
    borderRadius: nativeDefault.radii.sm,
    height,
    width: height,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.expressionButton = size;
  obj = { tintColor: nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  obj.expressionButtonIconTint = obj;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default noop.memo((active) => {
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  let showKeyboardIcon = active.showKeyboardIcon;
  if (showKeyboardIcon === undefined) {
    showKeyboardIcon = flag;
  }
  const onPress = active.onPress;
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ICON_SIZE);
  const tmp3 = importDefault;
  const token2 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_5(token);
  const bound = Math.max(0, (token2 - token) / 2);
  const items = [onPress];
  const callback = noop.useCallback(() => {
    onPress(undefined);
  }, items);
  obj = {
    ref: noop.useRef(null),
    style: null,
    hitSlop: null,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityState: null,
    onPress: null,
    children: null,
  };
  const items1 = [tmp7.expressionButton, active.style];
  obj.style = items1;
  let tmp12;
  if (bound > 0) {
    tmp12 = bound;
  }
  obj.hitSlop = tmp12;
  const intl = tmp(1114).intl;
  obj.accessibilityLabel = intl.string(util.t.iZ7Mz9);
  obj.accessibilityState = { expanded: flag };
  obj.onPress = callback;
  obj = { size: token1, style: tmp7.expressionButtonIconTint, source: tmp3(showKeyboardIcon ? 11247 : 8758) };
  obj.children = jsx(native.Icon, {
    size: token1,
    style: tmp7.expressionButtonIconTint,
    source: tmp3(showKeyboardIcon ? 11247 : 8758),
  });
  return jsx(Pressables.PressableOpacity, {
    size: token1,
    style: tmp7.expressionButtonIconTint,
    source: tmp3(showKeyboardIcon ? 11247 : 8758),
  });
});
