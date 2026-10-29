// discord_app/modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx
import c from "../../../../_runtime/00576_c.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../intl/index.native.tsx";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import _modDef2930 from "../intl/DisplayNameStyles.messages.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useColorPresetsWithA11yLabels(selectedEffectId, arg1) {
      const cResult = c.c(6);
      if (cResult[0] === arg1) {
        if (cResult[1] === selectedEffectId) {
          let arr = cResult[2];
        }
        if (cResult[3] !== arr) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function u(colors, arg1) {
              colors = colors.colors;
              const obj = { colors, a11yLabel: null };
              const intl = util.intl;
              const obj2 = { number: arg1 + 1, hexList: null };
              const mapped = colors.map(utils_ColorUtils.int2hex);
              obj2.hexList = mapped.join(", ");
              obj.a11yLabel = intl.formatToPlainString(_modDef2930.FHfTsV, obj2);
              return obj;
            };
            cResult[5] = fn;
            let tmp6 = fn;
          } else {
            tmp6 = cResult[5];
          }
          let mapped = arr.map(tmp6);
          cResult[3] = arr;
          cResult[4] = mapped;
        } else {
          return cResult[4];
        }
      }
      let colorPaletteList = arg1;
      if (arg1 == null) {
        colorPaletteList = DisplayNameStylesUtils.createColorPaletteList(selectedEffectId, null);
        const tmpResult = DisplayNameStylesUtils;
      }
      cResult[0] = arg1;
      cResult[1] = selectedEffectId;
      cResult[2] = colorPaletteList;
      arr = colorPaletteList;
    }
  : function useColorPresetsWithA11yLabels(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const items = [arg0, arg1];
      return noop.useMemo(() => {
        let colorPaletteList = closure_1;
        if (closure_1 == null) {
          colorPaletteList = DisplayNameStylesUtils.createColorPaletteList(closure_0, null);
        }
        return colorPaletteList.map((colors, index) => {
          colors = colors.colors;
          const obj = { colors, a11yLabel: null };
          const intl = closure_1_0(1125).intl;
          const obj2 = { number: index + 1, hexList: null };
          const mapped = colors.map(closure_1_0(1102).int2hex);
          obj2.hexList = mapped.join(", ");
          obj.a11yLabel = intl.formatToPlainString(closure_1_1(2930).FHfTsV, obj2);
          return obj;
        });
      }, items);
    };
