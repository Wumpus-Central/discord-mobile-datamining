// === Module 20566: EmptyServerSettingsEmoji ===

// Module 20566 (EmptyServerSettingsEmoji)
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8194.getIllustrationSource(theme, {
    dark() {
      return require("module_20567");
    },
    darker() {
      return require("module_20568");
    },
    light() {
      return require("module_20569");
    }
  });
}
export function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20567");
    },
    darker() {
      return require("module_20568");
    },
    light() {
      return require("module_20569");
    }
  });
}
export function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const illustrationSource = _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20567");
    },
    darker() {
      return require("module_20568");
    },
    light() {
      return require("module_20569");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20567");
    },
    darker() {
      return require("module_20568");
    },
    light() {
      return require("module_20569");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}