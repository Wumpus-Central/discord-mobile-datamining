// === Module 9048: NoResultsAlt ===

// Module 9048 (NoResultsAlt)
import shared from "shared" /* 5016 */;
import FastImageDefault from "FastImage" /* 5712 */;
import _mod8798 from "module_8798" /* 8798 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export function getNoResultsAltSource(theme) {
  return _mod8798.getIllustrationSource(theme, {
    dark() {
      return require("module_9049");
    },
    darker() {
      return require("module_9050");
    },
    light() {
      return require("module_7216");
    }
  });
}
export function useNoResultsAltSource() {
  const obj = shared;
  return _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9049");
    },
    darker() {
      return require("module_9050");
    },
    light() {
      return require("module_7216");
    }
  });
}
export function NoResultsAlt(arg0) {
  const obj = shared;
  const illustrationSource = _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9049");
    },
    darker() {
      return require("module_9050");
    },
    light() {
      return require("module_7216");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_9049");
    },
    darker() {
      return require("module_9050");
    },
    light() {
      return require("module_7216");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}