// === Module 13595: SubscriptionPlaceholderPattern ===

// Module 13595 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 4491 */;
import _mod8352 from "module_8352" /* 8352 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod8352.getIllustrationSource(theme, {
    dark() {
      return require("module_13596");
    },
    darker() {
      return require("module_13597");
    },
    light() {
      return require("module_13598");
    }
  });
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13596");
    },
    darker() {
      return require("module_13597");
    },
    light() {
      return require("module_13598");
    }
  });
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13596");
    },
    darker() {
      return require("module_13597");
    },
    light() {
      return require("module_13598");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};