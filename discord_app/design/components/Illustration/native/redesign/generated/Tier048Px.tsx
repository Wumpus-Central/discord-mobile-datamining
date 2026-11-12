// === Module 15267: Tier048Px ===

// Module 15267 (Tier048Px)
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export function getTier048PxSource(theme) {
  return _mod8117.getIllustrationSource(theme, {
    dark() {
      return require("module_15268");
    },
    darker() {
      return require("module_15269");
    },
    light() {
      return require("module_15270");
    }
  });
}
export function useTier048PxSource() {
  const obj = shared;
  return _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15268");
    },
    darker() {
      return require("module_15269");
    },
    light() {
      return require("module_15270");
    }
  });
}
export function Tier048Px(arg0) {
  const obj = shared;
  const illustrationSource = _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15268");
    },
    darker() {
      return require("module_15269");
    },
    light() {
      return require("module_15270");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_15268");
    },
    darker() {
      return require("module_15269");
    },
    light() {
      return require("module_15270");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}