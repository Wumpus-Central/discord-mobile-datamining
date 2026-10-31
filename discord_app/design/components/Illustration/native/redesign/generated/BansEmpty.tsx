// === Module 19817: BansEmpty ===

// Module 19817 (BansEmpty)
import shared from "shared" /* 5021 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _mod8806 from "module_8806" /* 8806 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export function getBansEmptySource(theme) {
  return _mod8806.getIllustrationSource(theme, {
    dark() {
      return require("module_19818");
    },
    darker() {
      return require("module_19819");
    },
    light() {
      return require("module_19820");
    }
  });
}
export function useBansEmptySource() {
  const obj = shared;
  return _mod8806.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19818");
    },
    darker() {
      return require("module_19819");
    },
    light() {
      return require("module_19820");
    }
  });
}
export function BansEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8806.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19818");
    },
    darker() {
      return require("module_19819");
    },
    light() {
      return require("module_19820");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19818");
    },
    darker() {
      return require("module_19819");
    },
    light() {
      return require("module_19820");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}