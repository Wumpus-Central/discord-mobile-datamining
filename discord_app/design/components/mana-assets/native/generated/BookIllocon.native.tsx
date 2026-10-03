// discord_app/design/components/mana-assets/native/generated/BookIllocon.native.tsx
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../../_runtime/00576_c.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef12369 from "../../../../../../discord_assets/assets/mana/asset-library/generated/BookIllocon-2x.png.js";
import ReactCompilerGating from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BookIllocon.native.tsx");

export const BookIllocon = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(8);
      ({ accessible, accessibilityLabel, resizeMode, size } = arg0);
      let num = 64;
      if (undefined !== size) {
        num = size;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { uri: _modDef12369 };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== num) {
        const size1 = { width: num, height: num };
        const items = [size1];
        cResult[1] = num;
        cResult[2] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] === accessibilityLabel) {
        if (cResult[4] === accessible) {
          if (cResult[5] === resizeMode) {
            if (cResult[6] === tmp5) {
              let tmp6 = cResult[7];
            }
            return tmp6;
          }
        }
      }
      const tmp7 = jsx(FastImageDefault, {
        fadeDuration: 0,
        source: first,
        style: tmp5,
        accessible,
        accessibilityLabel,
        resizeMode,
      });
      cResult[3] = accessibilityLabel;
      cResult[4] = accessible;
      cResult[5] = resizeMode;
      cResult[6] = tmp5;
      cResult[7] = tmp7;
      tmp6 = tmp7;
    }
  : (size) => {
      let num = size.size;
      ({ accessible, accessibilityLabel, resizeMode } = size);
      if (num === undefined) {
        num = 64;
      }
      const obj = {
        fadeDuration: 0,
        source: null,
        style: null,
        accessible: null,
        accessibilityLabel: null,
        resizeMode: null,
      };
      const obj2 = { uri: _modDef12369 };
      obj.source = obj2;
      const items = [{ width: num, height: num }];
      obj.style = items;
      obj.accessible = accessible;
      obj.accessibilityLabel = accessibilityLabel;
      obj.resizeMode = resizeMode;
      return jsx(FastImageDefault, {
        fadeDuration: 0,
        source: null,
        style: null,
        accessible: null,
        accessibilityLabel: null,
        resizeMode: null,
      });
    };
