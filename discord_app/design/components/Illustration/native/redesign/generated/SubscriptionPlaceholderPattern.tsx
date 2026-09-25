// === Module 13026: SubscriptionPlaceholderPattern ===

// Module 13026 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 4682 */;
import _mod7671 from "module_7671" /* 7671 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("module_13027");
    },
    darker() {
      return require("module_13028");
    },
    light() {
      return require("module_13029");
    }
  });
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13027");
    },
    darker() {
      return require("module_13028");
    },
    light() {
      return require("module_13029");
    }
  });
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13027");
    },
    darker() {
      return require("module_13028");
    },
    light() {
      return require("module_13029");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};