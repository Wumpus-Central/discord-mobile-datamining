// === Module 17569: EmptyServerSettingsEmoji ===

// Module 17569 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  const obj = {
    dark() {
      return require("module_17570");
    },
    darker() {
      return require("module_17571");
    },
    light() {
      return require("module_17572");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = {
    dark() {
      return require("module_17570");
    },
    darker() {
      return require("module_17571");
    },
    light() {
      return require("module_17572");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = {
    dark() {
      return require("module_17570");
    },
    darker() {
      return require("module_17571");
    },
    light() {
      return require("module_17572");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};