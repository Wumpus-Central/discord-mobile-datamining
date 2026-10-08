// discord_app/modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RequestDataContentDefault from "RequestDataContent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
const obj = { container: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function RequestDataScreen() {
        const cResult = c.c(3);
        const tmp3 = closure_5();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = jsx(RequestDataContentDefault, {});
          cResult[0] = tmp7;
          let first = tmp7;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp3.container) {
          const obj2 = { style: tmp3.container, children: first };
          const tmp11 = <React3 style={tmp3.container}>{first}</React3>;
          cResult[1] = tmp3.container;
          cResult[2] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[2];
        }
        return tmp8;
      }
    : function RequestDataScreen() {
        return <React3 style={closure_5().container}>{jsx(RequestDataContentDefault, {})}</React3>;
      },
);
