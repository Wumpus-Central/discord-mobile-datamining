// === Module 19749: InviteEmpty ===

// Module 19749 (InviteEmpty)
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export function getInviteEmptySource(theme) {
  return _mod7666.getIllustrationSource(theme, {
    dark() {
      return require("module_13742");
    },
    darker() {
      return require("module_19750");
    },
    light() {
      return require("module_13741");
    }
  });
}
export function useInviteEmptySource() {
  const obj = shared;
  return _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13742");
    },
    darker() {
      return require("module_19750");
    },
    light() {
      return require("module_13741");
    }
  });
}
export function InviteEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13742");
    },
    darker() {
      return require("module_19750");
    },
    light() {
      return require("module_13741");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_13742");
    },
    darker() {
      return require("module_19750");
    },
    light() {
      return require("module_13741");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}