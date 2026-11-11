// === Module 13948: InvalidLink ===

// Module 13948 (InvalidLink)
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export function getInvalidLinkSource(theme) {
  return _mod8117.getIllustrationSource(theme, {
    dark() {
      return require("module_12309");
    },
    darker() {
      return require("module_13949");
    },
    light() {
      return require("module_12310");
    }
  });
}
export function useInvalidLinkSource() {
  const obj = shared;
  return _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12309");
    },
    darker() {
      return require("module_13949");
    },
    light() {
      return require("module_12310");
    }
  });
}
export function InvalidLink(arg0) {
  const obj = shared;
  const illustrationSource = _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12309");
    },
    darker() {
      return require("module_13949");
    },
    light() {
      return require("module_12310");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_12309");
    },
    darker() {
      return require("module_13949");
    },
    light() {
      return require("module_12310");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}