// === Module 20440: InviteEmpty ===

// Module 20440 (InviteEmpty)
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export function getInviteEmptySource(theme) {
  return _mod8117.getIllustrationSource(theme, {
    dark() {
      return require("module_10869");
    },
    darker() {
      return require("module_20441");
    },
    light() {
      return require("module_10868");
    }
  });
}
export function useInviteEmptySource() {
  const obj = shared;
  return _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10869");
    },
    darker() {
      return require("module_20441");
    },
    light() {
      return require("module_10868");
    }
  });
}
export function InviteEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10869");
    },
    darker() {
      return require("module_20441");
    },
    light() {
      return require("module_10868");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10869");
    },
    darker() {
      return require("module_20441");
    },
    light() {
      return require("module_10868");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}