// discord_app/modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let first;
        const obj = react2;
        const cResult = obj.c(7);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { disallowInterruption: true };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        const tmpResult = LegacyBaseButton;
        const nativeGesture = tmpResult.useNativeGesture(first);
        if (cResult[1] === arg0) {
          let tmp6;
          if (cResult[2] === ref) {
            tmp6 = cResult[3];
          }
          if (cResult[4] === nativeGesture) {
            let tmp9;
            if (cResult[5] === tmp6) {
              tmp9 = cResult[6];
            }
            return tmp9;
          }
          const tmp11 = jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: tmp6 });
          cResult[4] = nativeGesture;
          cResult[5] = tmp6;
          cResult[6] = tmp11;
          tmp9 = tmp11;
        }
        const merged = Object.assign(arg0);
        const tmp8 = <ScrollView ref={ref} horizontal nestedScrollEnabled />;
        cResult[1] = arg0;
        cResult[2] = ref;
        cResult[3] = tmp8;
        tmp6 = tmp8;
      }
    : (arg0, ref) => {
        const obj = LegacyBaseButton;
        const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
        const GestureDetector = LegacyBaseButton.GestureDetector;
        const merged = Object.assign(arg0);
        return <GestureDetector gesture={nativeGesture}>{null}</GestureDetector>;
      },
);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default forwardRefResult;
