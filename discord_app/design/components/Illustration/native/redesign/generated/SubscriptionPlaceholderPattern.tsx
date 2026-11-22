// === Module 14109: SubscriptionPlaceholderPattern ===

// Module 14109 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 4920 */;
import FastImageDefault from "FastImage" /* 5600 */;
import _mod7786 from "module_7786" /* 7786 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod7786.getIllustrationSource(theme, {
    dark() {
      return require("module_14110");
    },
    darker() {
      return require("module_14111");
    },
    light() {
      return require("module_14112");
    }
  });
}
export function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14110");
    },
    darker() {
      return require("module_14111");
    },
    light() {
      return require("module_14112");
    }
  });
}
export function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const illustrationSource = _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14110");
    },
    darker() {
      return require("module_14111");
    },
    light() {
      return require("module_14112");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_14110");
    },
    darker() {
      return require("module_14111");
    },
    light() {
      return require("module_14112");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}