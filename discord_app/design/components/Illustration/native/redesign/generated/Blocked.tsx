// === Module 14856: Blocked ===

// Module 14856 (Blocked)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  const obj = {
    dark() {
      return require("module_14857");
    },
    darker() {
      return require("module_14858");
    },
    light() {
      return require("module_14859");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  const obj = {
    dark() {
      return require("module_14857");
    },
    darker() {
      return require("module_14858");
    },
    light() {
      return require("module_14859");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = {
    dark() {
      return require("module_14857");
    },
    darker() {
      return require("module_14858");
    },
    light() {
      return require("module_14859");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};