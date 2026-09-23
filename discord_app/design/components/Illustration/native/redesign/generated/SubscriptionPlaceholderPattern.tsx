// === Module 13860: SubscriptionPlaceholderPattern ===

// Module 13860 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 4678 */;
import _mod8577 from "module_8577" /* 8577 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("module_13861");
    },
    darker() {
      return require("module_13862");
    },
    light() {
      return require("module_13863");
    }
  });
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13861");
    },
    darker() {
      return require("module_13862");
    },
    light() {
      return require("module_13863");
    }
  });
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13861");
    },
    darker() {
      return require("module_13862");
    },
    light() {
      return require("module_13863");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};