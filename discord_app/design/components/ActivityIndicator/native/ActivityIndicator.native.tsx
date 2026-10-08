// discord_app/design/components/ActivityIndicator/native/ActivityIndicator.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";

require = fn;
let closure_3 = ["size", "animating"];
const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");

export const ActivityIndicator = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityIndicator(arg0) {
      const cResult = c.c(9);
      if (cResult[0] !== arg0) {
        ({ size, animating } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = size;
        cResult[3] = animating;
        let tmp6 = animating;
        let tmp5 = size;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      let str = "large";
      if (undefined !== tmp5) {
        str = tmp5;
      }
      let color = tmp4.color;
      if (color == null) {
        color = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BRAND);
      }
      if (cResult[4] === (undefined === tmp6 || tmp6)) {
        if (cResult[5] === color) {
          if (cResult[6] === tmp4) {
            if (cResult[7] === str) {
              let tmp11 = cResult[8];
            }
            return tmp11;
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(tmp4);
      obj2.size = str;
      obj2.animating = undefined === tmp6 || tmp6;
      obj2.color = color;
      const tmp13 = <ActivityIndicator />;
      cResult[4] = undefined === tmp6 || tmp6;
      cResult[5] = color;
      cResult[6] = tmp4;
      cResult[7] = str;
      cResult[8] = tmp13;
      tmp11 = tmp13;
      tmpResult = useToken;
    }
  : function ActivityIndicator(size) {
      let str = size.size;
      if (str === undefined) {
        str = "large";
      }
      let flag = size.animating;
      if (flag === undefined) {
        flag = true;
      }
      const merged = Object.assign(size, Object.assign({ size: 0, animating: 0 }));
      let color = merged.color;
      if (color == null) {
        color = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
      }
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.size = str;
      obj2.animating = flag;
      obj2.color = color;
      return <ActivityIndicator />;
    };
