// === Module 20017: EmptyServerSettingsEmoji ===

// Module 20017 (EmptyServerSettingsEmoji)
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _mod8567 from "module_8567" /* 8567 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8567.getIllustrationSource(theme, {
    dark() {
      return require("module_20018");
    },
    darker() {
      return require("module_20019");
    },
    light() {
      return require("module_20020");
    }
  });
}
export function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8567.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20018");
    },
    darker() {
      return require("module_20019");
    },
    light() {
      return require("module_20020");
    }
  });
}
export function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const illustrationSource = _mod8567.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20018");
    },
    darker() {
      return require("module_20019");
    },
    light() {
      return require("module_20020");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20018");
    },
    darker() {
      return require("module_20019");
    },
    light() {
      return require("module_20020");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}