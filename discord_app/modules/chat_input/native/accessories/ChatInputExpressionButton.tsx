// discord_app/modules/chat_input/native/accessories/ChatInputExpressionButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((height) => {
  const obj = {
    expressionButton: size,
    expressionButtonIconTint: { tintColor: nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT },
  };
  size = {
    borderRadius: nativeDefault.radii.sm,
    height,
    width: height,
    alignItems: "center",
    justifyContent: "center",
  };
  ({ tintColor: nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT });
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let active;
        let onPress;
        let showKeyboardIcon;
        let style;
        let tmp11;
        const obj = react2;
        const cResult = obj.c(18);
        ({ style, active, showKeyboardIcon, onPress } = arg0);
        if (undefined === showKeyboardIcon) {
          showKeyboardIcon = tmp4;
        }
        const tmpResult = useToken;
        const token = tmpResult.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const tmpResult3 = useToken;
        const token1 = tmpResult3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ICON_SIZE);
        const tmpResult4 = useToken;
        const token2 = tmpResult4.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
        const tmp9 = closure_5(token);
        const bound = Math.max(0, (token2 - token) / 2);
        if (cResult[0] !== onPress) {
          const fn = function l() {
            onPress(undefined);
          };
          cResult[0] = onPress;
          cResult[1] = fn;
          tmp11 = fn;
        } else {
          tmp11 = cResult[1];
        }
        if (cResult[2] === style) {
          let tmp13;
          let tmp15;
          let tmp17;
          if (cResult[3] === tmp9.expressionButton) {
            tmp13 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t.iZ7Mz9);
            cResult[5] = stringResult;
            tmp15 = stringResult;
          } else {
            tmp15 = cResult[5];
          }
          if (cResult[6] !== (undefined !== active && active)) {
            const obj2 = { expanded: undefined !== active && active };
            cResult[6] = undefined !== active && active;
            cResult[7] = obj2;
            tmp17 = obj2;
          } else {
            tmp17 = cResult[7];
          }
          const tmp5Result = importDefault(showKeyboardIcon ? 11059 : 8412);
          if (cResult[8] === tmp9.expressionButtonIconTint) {
            if (cResult[9] === token1) {
              let tmp19;
              if (cResult[10] === tmp5Result) {
                tmp19 = cResult[11];
              }
              if (cResult[12] === tmp11) {
                if (cResult[13] === tmp19) {
                  if (cResult[14] === tmp13) {
                    if (cResult[15] === tmp14) {
                      let tmp22;
                      if (cResult[16] === tmp17) {
                        tmp22 = cResult[17];
                      }
                      return tmp22;
                    }
                  }
                }
              }
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
      }
    : (active) => {
        let flag = active.active;
        const style = active.style;
        if (flag === undefined) {
          flag = false;
        }
        let showKeyboardIcon = active.showKeyboardIcon;
        if (showKeyboardIcon === undefined) {
          showKeyboardIcon = flag;
        }
        const onPress = active.onPress;
        const obj = useToken;
        const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const obj2 = useToken;
        const token1 = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ICON_SIZE);
        const obj3 = useToken;
        const token2 = obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
        const tmp7 = closure_5(token);
        const bound = Math.max(0, (token2 - token) / 2);
        const items = [onPress];
        const callback = react.useCallback(() => {
          onPress(undefined);
        }, items);
        const items1 = [tmp7.expressionButton, style];
        let tmp12;
        const PressableOpacity = Pressables.PressableOpacity;
        if (bound > 0) {
          tmp12 = bound;
        }
        const intl = intl2.intl;
        ({
          size: token1,
          style: tmp7.expressionButtonIconTint,
          source: importDefault(showKeyboardIcon ? 11059 : 8412),
        });
        const Icon = native.Icon;
        return (
          <PressableOpacity
            ref={react.useRef(null)}
            style={items1}
            hitSlop={tmp12}
            accessibilityRole="button"
            accessibilityLabel={intl.string(intl2.t.iZ7Mz9)}
            accessibilityState={{ expanded: flag }}
            onPress={callback}
          >
            {null}
          </PressableOpacity>
        );
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default memoResult;
