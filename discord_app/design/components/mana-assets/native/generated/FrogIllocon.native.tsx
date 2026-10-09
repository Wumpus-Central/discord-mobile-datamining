// discord_app/design/components/mana-assets/native/generated/FrogIllocon.native.tsx
import c from "../../../../../../_runtime/00576_c.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import assetHelpers from "../assetHelpers.native.tsx";
import _modDef17111 from "../../../../../../discord_assets/assets/mana/asset-library/generated/FrogIllocon-1x.png.js";
import _modDef17112 from "../../../../../../discord_assets/assets/mana/asset-library/generated/FrogIllocon-2x.png.js";
import _modDef17113 from "../../../../../../discord_assets/assets/mana/asset-library/generated/FrogIllocon-3x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef17111 }, 3: null };
const obj2 = { uri: _modDef17111 };
obj[2] = { uri: _modDef17112 };
const obj3 = { uri: _modDef17112 };
obj[3] = { uri: _modDef17113 };
const ReactCompilerGating = fn(558);
const obj4 = { uri: _modDef17113 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export const FrogIllocon = ReactCompilerGating.isReactCompilerEnabled()
  ? function FrogIllocon(arg0) {
      obj = c;
      const cResult = obj.c(8);
      ({ accessible, accessibilityLabel, resizeMode, size } = arg0);
      let num = 64;
      if (undefined !== size) {
        num = size;
      }
      if (cResult[0] !== num) {
        const size1 = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
        const assetSizeStyle = assetHelpers.getAssetSizeStyle(size1);
        cResult[0] = num;
        cResult[1] = assetSizeStyle;
        let tmp4 = assetSizeStyle;
        const tmpResult = assetHelpers;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const assetSource = assetHelpers.getAssetSource(obj);
        cResult[2] = assetSource;
        let tmp6 = assetSource;
        const tmpResult2 = assetHelpers;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === accessibilityLabel) {
        if (cResult[4] === accessible) {
          if (cResult[5] === resizeMode) {
            if (cResult[6] === tmp4) {
              let tmp9 = cResult[7];
            }
            return tmp9;
          }
        }
      }
      const tmp10 = jsx(FastImageDefault, {
        fadeDuration: 0,
        source: tmp6,
        style: tmp4,
        accessible,
        accessibilityLabel,
        resizeMode,
      });
      cResult[3] = accessibilityLabel;
      cResult[4] = accessible;
      cResult[5] = resizeMode;
      cResult[6] = tmp4;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  : function FrogIllocon(size) {
      let num = size.size;
      ({ accessible, accessibilityLabel, resizeMode } = size);
      if (num === undefined) {
        num = 64;
      }
      const items = [num];
      const memo = noop.useMemo(() => {
        const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
        return assetHelpers.getAssetSizeStyle(size);
      }, items);
      obj = {
        fadeDuration: 0,
        source: null,
        style: null,
        accessible: null,
        accessibilityLabel: null,
        resizeMode: null,
      };
      obj.source = num(6277).getAssetSource(obj);
      obj.style = memo;
      obj.accessible = accessible;
      obj.accessibilityLabel = accessibilityLabel;
      obj.resizeMode = resizeMode;
      return (
        <tmp2
          fadeDuration={0}
          source={null}
          style={null}
          accessible={null}
          accessibilityLabel={null}
          resizeMode={null}
        />
      );
    };
