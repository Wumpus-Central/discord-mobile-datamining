// discord_app/design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8724 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNoMutualFriendsSource() {
      const cResult = c.c(2);
      const theme = shared.useThemeContext().theme;
      if (cResult[0] !== theme) {
        const obj3 = {
          dark() {
            return require("../../../../../../../_runtime/metro/13554__.js");
          },
          darker() {
            return require("../../../../../../../_runtime/metro/13555__.js");
          },
          light() {
            return require("../../../../../../../_runtime/metro/13556__.js");
          },
        };
        const illustrationSource = _mod8724.getIllustrationSource(theme, obj3);
        cResult[0] = theme;
        cResult[1] = illustrationSource;
        let tmp4 = illustrationSource;
        const tmpResult = _mod8724;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function useNoMutualFriendsSource() {
      const obj = shared;
      return _mod8724.getIllustrationSource(obj.useThemeContext().theme, {
        dark() {
          return require("../../../../../../../_runtime/metro/13554__.js");
        },
        darker() {
          return require("../../../../../../../_runtime/metro/13555__.js");
        },
        light() {
          return require("../../../../../../../_runtime/metro/13556__.js");
        },
      });
    };
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getNoMutualFriendsSource(theme) {
  return _mod8724.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13554__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13555__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13556__.js");
    },
  });
}
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx",
);

export { getNoMutualFriendsSource };
export const useNoMutualFriendsSource = tmp3;
export const NoMutualFriends = ReactCompilerGating.isReactCompilerEnabled()
  ? function NoMutualFriends(arg0) {
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
  : function NoMutualFriends(arg0) {
      const obj = {};
      const tmp = closure_4();
      const merged = Object.assign(arg0);
      obj.source = tmp;
      return jsx(FastImageDefault, {});
    };
