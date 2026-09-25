// === Module 17336: EmptyServerSettingsEmoji ===

// Module 17336 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4682 */;
import _mod7671 from "module_7671" /* 7671 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("module_17337");
    },
    darker() {
      return require("module_17338");
    },
    light() {
      return require("module_17339");
    }
  });
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17337");
    },
    darker() {
      return require("module_17338");
    },
    light() {
      return require("module_17339");
    }
  });
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17337");
    },
    darker() {
      return require("module_17338");
    },
    light() {
      return require("module_17339");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};