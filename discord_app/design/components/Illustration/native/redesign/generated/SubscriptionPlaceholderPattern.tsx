// === Module 15668: SubscriptionPlaceholderPattern ===

// Module 15668 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 5147 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _mod8880 from "module_8880" /* 8880 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod8880.getIllustrationSource(theme, {
    dark() {
      return require("module_15669");
    },
    darker() {
      return require("module_15670");
    },
    light() {
      return require("module_15671");
    }
  });
}
export function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15669");
    },
    darker() {
      return require("module_15670");
    },
    light() {
      return require("module_15671");
    }
  });
}
export function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const illustrationSource = _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15669");
    },
    darker() {
      return require("module_15670");
    },
    light() {
      return require("module_15671");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_15669");
    },
    darker() {
      return require("module_15670");
    },
    light() {
      return require("module_15671");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}