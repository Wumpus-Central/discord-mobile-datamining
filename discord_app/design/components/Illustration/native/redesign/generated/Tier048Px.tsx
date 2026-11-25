// === Module 13917: Tier048Px ===

// Module 13917 (Tier048Px)
import shared from "shared" /* 5019 */;
import FastImageDefault from "FastImage" /* 5699 */;
import _mod8524 from "module_8524" /* 8524 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export function getTier048PxSource(theme) {
  return _mod8524.getIllustrationSource(theme, {
    dark() {
      return require("module_13918");
    },
    darker() {
      return require("module_13919");
    },
    light() {
      return require("module_13920");
    }
  });
}
export function useTier048PxSource() {
  const obj = shared;
  return _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13918");
    },
    darker() {
      return require("module_13919");
    },
    light() {
      return require("module_13920");
    }
  });
}
export function Tier048Px(arg0) {
  const obj = shared;
  const illustrationSource = _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13918");
    },
    darker() {
      return require("module_13919");
    },
    light() {
      return require("module_13920");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_13918");
    },
    darker() {
      return require("module_13919");
    },
    light() {
      return require("module_13920");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}