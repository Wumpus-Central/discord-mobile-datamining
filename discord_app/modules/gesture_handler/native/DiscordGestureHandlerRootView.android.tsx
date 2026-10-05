// discord_app/modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import DiscordGestureHandlerRootViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let StyleSheet;
let TurboModuleRegistry;
({ StyleSheet, TurboModuleRegistry } = react_native);
const jsx = Fragment.jsx;
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let style;
      const obj = react2;
      const cResult = obj.c(3);
      ({ children, style } = arg0);
      if (cResult[0] === children) {
        let tmp4;
        if (cResult[1] === style) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      DiscordGestureHandlerRootViewNativeComponentDefault;
      const tmp6 = <tmp5 style={styles.flex}>{null}</tmp5>;
      cResult[0] = children;
      cResult[1] = style;
      cResult[2] = tmp6;
      tmp4 = tmp6;
    }
  : (arg0) => {
      let children;
      let style;
      ({ children, style } = arg0);
      DiscordGestureHandlerRootViewNativeComponentDefault;
      return <tmp style={styles.flex}>{null}</tmp>;
    };
const result = size.fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default tmp5;
