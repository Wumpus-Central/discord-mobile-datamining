// === Module 20645: InviteEmpty ===

// Module 20645 (InviteEmpty)
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export function getInviteEmptySource(theme) {
  return _mod8194.getIllustrationSource(theme, {
    dark() {
      return require("module_15165");
    },
    darker() {
      return require("module_20646");
    },
    light() {
      return require("module_15164");
    }
  });
}
export function useInviteEmptySource() {
  const obj = shared;
  return _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15165");
    },
    darker() {
      return require("module_20646");
    },
    light() {
      return require("module_15164");
    }
  });
}
export function InviteEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15165");
    },
    darker() {
      return require("module_20646");
    },
    light() {
      return require("module_15164");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_15165");
    },
    darker() {
      return require("module_20646");
    },
    light() {
      return require("module_15164");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}