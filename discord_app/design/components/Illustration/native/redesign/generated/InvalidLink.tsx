// === Module 12087: InvalidLink ===

// Module 12087 (InvalidLink)
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export function getInvalidLinkSource(theme) {
  return _mod7666.getIllustrationSource(theme, {
    dark() {
      return require("module_11809");
    },
    darker() {
      return require("module_12088");
    },
    light() {
      return require("module_11810");
    }
  });
}
export function useInvalidLinkSource() {
  const obj = shared;
  return _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11809");
    },
    darker() {
      return require("module_12088");
    },
    light() {
      return require("module_11810");
    }
  });
}
export function InvalidLink(arg0) {
  const obj = shared;
  const illustrationSource = _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11809");
    },
    darker() {
      return require("module_12088");
    },
    light() {
      return require("module_11810");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_11809");
    },
    darker() {
      return require("module_12088");
    },
    light() {
      return require("module_11810");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}