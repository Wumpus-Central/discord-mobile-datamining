// discord_app/modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2;
let c3;
({ StyleSheet: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
let c5 = "chat-input-accessibility-divider";
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const obj = react2;
        const cResult = obj.c(2);
        let tmp4 = null;
        const obj2 = useIsScreenReaderEnabled;
        if (obj2.useIsScreenReaderEnabled()) {
          tmp4 = null;
          const tmpResult = PlatformUtils;
          if (!tmpResult.isAndroid()) {
            let first;
            let tmp8;
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl2.intl;
              const stringResult = intl.string(intl2.t["uKZtC/"]);
              cResult[0] = stringResult;
              first = stringResult;
            } else {
              first = cResult[0];
            }
            const _Symbol2 = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [React2.absoluteFill, { height: 1 }];
              const tmp13 = (
                <_false
                  nativeID={nativeID}
                  accessible
                  accessibilityLabel={first}
                  accessibilityRole="header"
                  style={items}
                />
              );
              cResult[1] = tmp13;
              tmp8 = tmp13;
            } else {
              tmp8 = cResult[1];
            }
            tmp4 = tmp8;
          }
        }
        return tmp4;
      }
    : () => {
        let tmp3 = null;
        const obj = useIsScreenReaderEnabled;
        if (obj.useIsScreenReaderEnabled()) {
          tmp3 = null;
          const tmpResult = PlatformUtils;
          if (!tmpResult.isAndroid()) {
            const intl = intl2.intl;
            const items = [React2.absoluteFill, { height: 1 }];
            tmp3 = (
              <_false
                nativeID={nativeID}
                accessible
                accessibilityLabel={intl.string(intl2.t["uKZtC/"])}
                accessibilityRole="header"
                style={items}
              />
            );
          }
        }
        return tmp3;
      },
);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
