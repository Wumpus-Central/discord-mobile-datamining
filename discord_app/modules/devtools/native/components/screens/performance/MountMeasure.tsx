// discord_app/modules/devtools/native/components/screens/performance/MountMeasure.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import useMountEffect from "../../../../../../hooks/useMountEffect.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let batchKey;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (batchKey) => {
      let children;
      let style;
      const obj = react2;
      const cResult = obj.c(10);
      batchKey = batchKey.batchKey;
      const onMeasure = batchKey.onMeasure;
      const onCancel = batchKey.onCancel;
      ({ style, children } = batchKey);
      if (cResult[0] === batchKey) {
        let tmp4;
        if (cResult[1] === onCancel) {
          tmp4 = cResult[2];
        }
        const tmpResult = useMountEffect;
        const unmountEffect = tmpResult.useUnmountEffect(tmp4);
        if (cResult[3] === batchKey) {
          let tmp6;
          if (cResult[4] === onMeasure) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === children) {
            if (cResult[7] === style) {
              let tmp7;
              if (cResult[8] === tmp6) {
                tmp7 = cResult[9];
              }
              return tmp7;
            }
          }
          const tmp10 = (
            <View style={style} onLayout={tmp6}>
              {children}
            </View>
          );
          cResult[6] = children;
          cResult[7] = style;
          cResult[8] = tmp6;
          cResult[9] = tmp10;
          tmp7 = tmp10;
        }
        const fn2 = function c() {
          return onMeasure(batchKey);
        };
        cResult[3] = batchKey;
        cResult[4] = onMeasure;
        cResult[5] = fn2;
        tmp6 = fn2;
      }
      const fn = function s() {
        return onCancel(batchKey);
      };
      cResult[0] = batchKey;
      cResult[1] = onCancel;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (arg0) => {
      let children;
      let closure_129_0;
      let closure_129_1;
      let closure_129_2;
      let style;
      ({ batchKey: closure_129_0, onMeasure: closure_129_1, onCancel: closure_129_2 } = arg0);
      ({ style, children } = arg0);
      const obj = useMountEffect;
      const unmountEffect = obj.useUnmountEffect(() => closure_1_2(closure_1_0));
      return (
        <View
          style={style}
          onLayout={function onLayout() {
            return closure_1_1(closure_1_0);
          }}
        >
          {children}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

export default tmp3;
