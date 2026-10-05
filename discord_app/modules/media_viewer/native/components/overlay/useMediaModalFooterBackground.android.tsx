// discord_app/modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx
import react from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../../_runtime/metro/00683__.js";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(5);
      const tmp2 = _modDef683;
      const obj2 = useToken;
      const tmp2Result = tmp2(obj2.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK));
      [tmp4, tmp5, tmp6, tmp7] = tmp2Result.rgba();
      _slicedToArray(tmp2Result.rgba(), 4);
      if (cResult[0] === tmp7) {
        if (cResult[1] === tmp6) {
          if (cResult[2] === tmp5) {
            let tmp8;
            if (cResult[3] === tmp4) {
              tmp8 = cResult[4];
            }
            return tmp8;
          }
        }
      }
      const obj3 = {
        mediaModalFooterBackgroundColorRgba: { r: tmp4, g: tmp5, b: tmp6, a: tmp7 },
        MediaModalFooterUnderlay: "r",
      };
      cResult[0] = tmp7;
      cResult[1] = tmp6;
      cResult[2] = tmp5;
      cResult[3] = tmp4;
      cResult[4] = obj3;
      tmp8 = obj3;
    }
  : () => {
      const tmp = _modDef683;
      const obj = useToken;
      const tmpResult = tmp(obj.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK));
      const tmp2 = _slicedToArray(tmpResult.rgba(), 4);
      return {
        mediaModalFooterBackgroundColorRgba: { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] },
        MediaModalFooterUnderlay: "r",
      };
    };
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx",
);

export default tmp2;
