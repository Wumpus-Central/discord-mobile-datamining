// === Module 17662: EmptyServerSettingsEmoji ===

// Module 17662 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  const obj = {
    dark() {
      return require("module_17663");
    },
    darker() {
      return require("module_17664");
    },
    light() {
      return require("module_17665");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = {
    dark() {
      return require("module_17663");
    },
    darker() {
      return require("module_17664");
    },
    light() {
      return require("module_17665");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = {
    dark() {
      return require("module_17663");
    },
    darker() {
      return require("module_17664");
    },
    light() {
      return require("module_17665");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};