// discord_app/design/components/Illustration/native/redesign/generated/SearchEmpty.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8586 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSearchEmptySource() {
      const cResult = c.c(2);
      const theme = shared.useThemeContext().theme;
      if (cResult[0] !== theme) {
        const obj3 = {
          dark() {
            return require("../../../../../../../_runtime/metro/09760__.js");
          },
          darker() {
            return require("../../../../../../../_runtime/metro/09761__.js");
          },
          light() {
            return require("../../../../../../../_runtime/metro/09762__.js");
          },
        };
        const illustrationSource = _mod8586.getIllustrationSource(theme, obj3);
        cResult[0] = theme;
        cResult[1] = illustrationSource;
        let tmp4 = illustrationSource;
        const tmpResult = _mod8586;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function useSearchEmptySource() {
      const obj = shared;
      return _mod8586.getIllustrationSource(obj.useThemeContext().theme, {
        dark() {
          return require("../../../../../../../_runtime/metro/09760__.js");
        },
        darker() {
          return require("../../../../../../../_runtime/metro/09761__.js");
        },
        light() {
          return require("../../../../../../../_runtime/metro/09762__.js");
        },
      });
    };
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getSearchEmptySource(theme) {
  return _mod8586.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/09760__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09761__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/09762__.js");
    },
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export { getSearchEmptySource };
export const useSearchEmptySource = tmp3;
export const SearchEmpty = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchEmpty(arg0) {
      const cResult = c.c(3);
      const tmp3 = closure_4();
      if (cResult[0] === arg0) {
        if (cResult[1] === tmp3) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.source = tmp3;
      const tmp7 = jsx(FastImageDefault, {});
      cResult[0] = arg0;
      cResult[1] = tmp3;
      cResult[2] = tmp7;
      tmp4 = tmp7;
    }
  : function SearchEmpty(arg0) {
      const obj = {};
      const tmp = closure_4();
      const merged = Object.assign(arg0);
      obj.source = tmp;
      return jsx(FastImageDefault, {});
    };
