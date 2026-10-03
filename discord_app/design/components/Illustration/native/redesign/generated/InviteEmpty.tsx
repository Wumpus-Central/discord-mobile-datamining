// discord_app/design/components/Illustration/native/redesign/generated/InviteEmpty.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import shared from "../../../../../shared.tsx";
import _mod7905 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const theme = shared.useThemeContext().theme;
      if (cResult[0] !== theme) {
        const obj3 = {
          dark() {
            return require("../../../../../../../_runtime/metro/10688__.js");
          },
          darker() {
            return require("../../../../../../../_runtime/metro/17795__.js");
          },
          light() {
            return require("../../../../../../../_runtime/metro/10687__.js");
          },
        };
        const illustrationSource = _mod7905.getIllustrationSource(theme, obj3);
        cResult[0] = theme;
        cResult[1] = illustrationSource;
        let tmp4 = illustrationSource;
        const tmpResult = _mod7905;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = shared;
      return _mod7905.getIllustrationSource(obj.useThemeContext().theme, {
        dark() {
          return require("../../../../../../../_runtime/metro/10688__.js");
        },
        darker() {
          return require("../../../../../../../_runtime/metro/17795__.js");
        },
        light() {
          return require("../../../../../../../_runtime/metro/10687__.js");
        },
      });
    };
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getInviteEmptySource(theme) {
  return _mod7905.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10688__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17795__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10687__.js");
    },
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export { getInviteEmptySource };
export const useInviteEmptySource = tmp3;
export const InviteEmpty = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      const tmp2 = closure_4();
      if (cResult[0] === arg0) {
        if (cResult[1] === tmp2) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.source = tmp2;
      const tmp5 = <Image />;
      cResult[0] = arg0;
      cResult[1] = tmp2;
      cResult[2] = tmp5;
      tmp3 = tmp5;
    }
  : (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.source = closure_4();
      return <Image />;
    };
