// discord_app/design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import shared from "../../../../../shared.tsx";
import _mod8335 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmptyServerSettingsEmojiSource() {
      const cResult = c.c(2);
      const theme = shared.useThemeContext().theme;
      if (cResult[0] !== theme) {
        const obj3 = {
          dark() {
            return require("../../../../../../../_runtime/metro/18075__.js");
          },
          darker() {
            return require("../../../../../../../_runtime/metro/18076__.js");
          },
          light() {
            return require("../../../../../../../_runtime/metro/18077__.js");
          },
        };
        const illustrationSource = _mod8335.getIllustrationSource(theme, obj3);
        cResult[0] = theme;
        cResult[1] = illustrationSource;
        let tmp4 = illustrationSource;
        const tmpResult = _mod8335;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function useEmptyServerSettingsEmojiSource() {
      const obj = shared;
      return _mod8335.getIllustrationSource(obj.useThemeContext().theme, {
        dark() {
          return require("../../../../../../../_runtime/metro/18075__.js");
        },
        darker() {
          return require("../../../../../../../_runtime/metro/18076__.js");
        },
        light() {
          return require("../../../../../../../_runtime/metro/18077__.js");
        },
      });
    };
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8335.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18075__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18076__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/18077__.js");
    },
  });
}
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx",
);

export { getEmptyServerSettingsEmojiSource };
export const useEmptyServerSettingsEmojiSource = tmp3;
export const EmptyServerSettingsEmoji = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyServerSettingsEmoji(arg0) {
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
  : function EmptyServerSettingsEmoji(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.source = closure_4();
      return <Image />;
    };
