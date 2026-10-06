// discord_app/design/components/mana-assets/native/generated/DogIllocon.native.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../../_runtime/00576_react.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef16712 from "../../../../../../discord_assets/assets/mana/asset-library/generated/DogIllocon-2x.png.js";
import ReactCompilerGating from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let accessible;
      let first;
      let resizeMode;
      let tmp5;
      const obj = react;
      const cResult = obj.c(8);
      ({ accessible, accessibilityLabel, resizeMode, size } = arg0);
      let num = 64;
      if (undefined !== size) {
        num = size;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { uri: _modDef16712 };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== num) {
        const size1 = { width: num, height: num };
        const items = [size1];
        cResult[1] = num;
        cResult[2] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] === accessibilityLabel) {
        if (cResult[4] === accessible) {
          if (cResult[5] === resizeMode) {
            let tmp6;
            if (cResult[6] === tmp5) {
              tmp6 = cResult[7];
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
      let accessibilityLabel;
      let accessible;
      let resizeMode;
      let num = size.size;
      ({ accessible, accessibilityLabel, resizeMode } = size);
      if (num === undefined) {
        num = 64;
      }
      const obj2 = { uri: _modDef16712 };
      FastImageDefault;
      const items = [{ width: num, height: num }];
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
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DogIllocon.native.tsx");

export const DogIllocon = tmp2;
