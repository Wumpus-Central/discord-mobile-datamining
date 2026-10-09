// discord_app/modules/chat_input/native/accessories/ChatInputExpressionButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles((height) => {
  const obj = { expressionButton: null, expressionButtonIconTint: null };
  const size = {
    borderRadius: nativeDefault.radii.sm,
    height,
    width: height,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.expressionButton = size;
  obj.expressionButtonIconTint = { tintColor: nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ExpressionButton(arg0) {
        const cResult = c.c(18);
        ({ style, active, showKeyboardIcon, onPress } = arg0);
        if (undefined === showKeyboardIcon) {
          showKeyboardIcon = tmp4;
        }
        const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const tmpResult = useToken;
        const token1 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ICON_SIZE);
        const tmpResult3 = useToken;
        const token2 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
        const tmp9 = closure_5(token);
        const bound = Math.max(0, (token2 - token) / 2);
        if (cResult[0] !== onPress) {
          const fn = function l() {
            onPress(undefined);
          };
          cResult[0] = onPress;
          cResult[1] = fn;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[1];
        }
        if (cResult[2] === style) {
          if (cResult[3] === tmp9.expressionButton) {
            let tmp13 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.iZ7Mz9);
            cResult[5] = stringResult;
            let tmp15 = stringResult;
          } else {
            tmp15 = cResult[5];
          }
          if (cResult[6] !== tmp4) {
            const obj2 = { expanded: tmp4 };
            cResult[6] = tmp4;
            cResult[7] = obj2;
            let tmp17 = obj2;
          } else {
            tmp17 = cResult[7];
          }
          const tmp5Result = importDefault(showKeyboardIcon ? 11817 : 8942);
          if (cResult[8] === tmp9.expressionButtonIconTint) {
            if (cResult[9] === token1) {
              if (cResult[10] === tmp5Result) {
                let tmp19 = cResult[11];
              }
              if (cResult[12] === tmp11) {
                if (cResult[13] === tmp19) {
                  if (cResult[14] === tmp13) {
                    if (cResult[15] === tmp14) {
                      if (cResult[16] === tmp17) {
                        let tmp22 = cResult[17];
                      }
                      return tmp22;
                    }
                  }
                }
              }
              const obj3 = {
                ref: tmp12,
                style: tmp13,
                hitSlop: tmp14,
                accessibilityRole: "button",
                accessibilityLabel: tmp15,
                accessibilityState: tmp17,
                onPress: tmp11,
                children: tmp19,
              };
              const tmp24 = jsx(Pressables.PressableOpacity, {
                ref: tmp12,
                style: tmp13,
                hitSlop: tmp14,
                accessibilityRole: "button",
                accessibilityLabel: tmp15,
                accessibilityState: tmp17,
                onPress: tmp11,
                children: tmp19,
              });
              cResult[12] = tmp11;
              cResult[13] = tmp19;
              cResult[14] = tmp13;
              cResult[15] = tmp14;
              cResult[16] = tmp17;
              cResult[17] = tmp24;
              tmp22 = tmp24;
            }
          }
          const obj4 = { size: token1, style: tmp9.expressionButtonIconTint, source: tmp5Result };
          const tmp21 = jsx(native.Icon, { size: token1, style: tmp9.expressionButtonIconTint, source: tmp5Result });
          cResult[8] = tmp9.expressionButtonIconTint;
          cResult[9] = token1;
          cResult[10] = tmp5Result;
          cResult[11] = tmp21;
          tmp19 = tmp21;
        }
        const items = [tmp9.expressionButton, style];
        cResult[2] = style;
        cResult[3] = tmp9.expressionButton;
        cResult[4] = items;
        tmp13 = items;
        const tmpResult4 = useToken;
      }
    : function ExpressionButton(active) {
        let flag = active.active;
        if (flag === undefined) {
          flag = false;
        }
        let showKeyboardIcon = active.showKeyboardIcon;
        if (showKeyboardIcon === undefined) {
          showKeyboardIcon = flag;
        }
        const onPress = active.onPress;
        const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const token1 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ICON_SIZE);
        const token2 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
        const tmp7 = closure_5(token);
        const bound = Math.max(0, (token2 - token) / 2);
        const items = [onPress];
        const callback = noop.useCallback(() => {
          onPress(undefined);
        }, items);
        const obj4 = {
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
        obj4.style = items1;
        let tmp12;
        if (bound > 0) {
          tmp12 = bound;
        }
        obj4.hitSlop = tmp12;
        const intl = util.intl;
        obj4.accessibilityLabel = intl.string(util.t.iZ7Mz9);
        obj4.accessibilityState = { expanded: flag };
        obj4.onPress = callback;
        const ref = noop.useRef(null);
        obj4.children = jsx(native.Icon, {
          size: token1,
          style: tmp7.expressionButtonIconTint,
          source: importDefault(showKeyboardIcon ? 11817 : 8942),
        });
        return jsx(Pressables.PressableOpacity, {
          ref: noop.useRef(null),
          style: null,
          hitSlop: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityState: null,
          onPress: null,
          children: null,
        });
      },
);
