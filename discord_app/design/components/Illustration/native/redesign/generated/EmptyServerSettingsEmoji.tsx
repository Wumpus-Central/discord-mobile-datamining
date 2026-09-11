// === Module 17653: EmptyServerSettingsEmoji ===

// Module 17653 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  const obj = {
    dark() {
      return require("module_17654");
    },
    darker() {
      return require("module_17655");
    },
    light() {
      return require("module_17656");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = {
    dark() {
      return require("module_17654");
    },
    darker() {
      return require("module_17655");
    },
    light() {
      return require("module_17656");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = {
    dark() {
      return require("module_17654");
    },
    darker() {
      return require("module_17655");
    },
    light() {
      return require("module_17656");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};