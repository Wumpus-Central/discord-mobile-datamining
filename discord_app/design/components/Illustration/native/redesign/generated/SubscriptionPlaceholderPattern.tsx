// === Module 13556: SubscriptionPlaceholderPattern ===

// Module 13556 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  const obj = {
    dark() {
      return require("module_13557");
    },
    darker() {
      return require("module_13558");
    },
    light() {
      return require("module_13559");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = {
    dark() {
      return require("module_13557");
    },
    darker() {
      return require("module_13558");
    },
    light() {
      return require("module_13559");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  let obj = {
    dark() {
      return require("module_13557");
    },
    darker() {
      return require("module_13558");
    },
    light() {
      return require("module_13559");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};