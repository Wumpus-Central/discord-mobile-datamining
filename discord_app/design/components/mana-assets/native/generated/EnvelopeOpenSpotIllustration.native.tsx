// discord_app/design/components/mana-assets/native/generated/EnvelopeOpenSpotIllustration.native.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../../_runtime/00576_react.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef6091 from "../../../../../../discord_assets/assets/mana/asset-library/generated/EnvelopeOpenSpotIllustration-2x.png.js";
import ReactCompilerGating from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let accessible;
      let first;
      let height;
      let resizeMode;
      let scale;
      let width;
      const obj = react;
      const cResult = obj.c(9);
      ({ accessible, accessibilityLabel, resizeMode, width, height, scale } = arg0);
      let num = 288;
      if (undefined !== width) {
        num = width;
      }
      let num2 = 192;
      if (undefined !== height) {
        num2 = height;
      }
      let num3 = 1;
      if (undefined !== scale) {
        num3 = scale;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { uri: _modDef6091 };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const result = num * num3;
      const result1 = num2 * num3;
      if (cResult[1] === result) {
        let tmp7;
        if (cResult[2] === result1) {
          tmp7 = cResult[3];
        }
        if (cResult[4] === accessibilityLabel) {
          if (cResult[5] === accessible) {
            if (cResult[6] === resizeMode) {
              let tmp8;
              if (cResult[7] === tmp7) {
                tmp8 = cResult[8];
              }
              return tmp8;
            }
          }
        }
        const tmp11 = jsx(FastImageDefault, {
          fadeDuration: 0,
          source: first,
          style: tmp7,
          accessible,
          accessibilityLabel,
          resizeMode,
        });
        cResult[4] = accessibilityLabel;
        cResult[5] = accessible;
        cResult[6] = resizeMode;
        cResult[7] = tmp7;
        cResult[8] = tmp11;
        tmp8 = tmp11;
      }
      const items = [{ width: result, height: result1 }];
      cResult[1] = result;
      cResult[2] = result1;
      cResult[3] = items;
      tmp7 = items;
    }
  : (width) => {
      let accessibilityLabel;
      let accessible;
      let resizeMode;
      let num = width.width;
      ({ accessible, accessibilityLabel, resizeMode } = width);
      if (num === undefined) {
        num = 288;
      }
      let num2 = width.height;
      if (num2 === undefined) {
        num2 = 192;
      }
      let num3 = width.scale;
      if (num3 === undefined) {
        num3 = 1;
      }
      const obj2 = { uri: _modDef6091 };
      FastImageDefault;
      size = { width: num * num3, height: num2 * num3 };
      const items = [size];
      return (
        <tmp
          fadeDuration={0}
          source={obj2}
          style={items}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
          resizeMode={resizeMode}
        />
      );
    };
let size = size_mod;
let result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/EnvelopeOpenSpotIllustration.native.tsx",
);

export const EnvelopeOpenSpotIllustration = tmp2;
