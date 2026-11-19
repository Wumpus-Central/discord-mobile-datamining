// === Module 19929: InviteEmpty ===

// Module 19929 (InviteEmpty)
import shared from "shared" /* 4799 */;
import FastImageDefault from "FastImage" /* 5479 */;
import _mod7667 from "module_7667" /* 7667 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export function getInviteEmptySource(theme) {
  return _mod7667.getIllustrationSource(theme, {
    dark() {
      return require("module_13773");
    },
    darker() {
      return require("module_19930");
    },
    light() {
      return require("module_13772");
    }
  });
}
export function useInviteEmptySource() {
  const obj = shared;
  return _mod7667.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13773");
    },
    darker() {
      return require("module_19930");
    },
    light() {
      return require("module_13772");
    }
  });
}
export function InviteEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod7667.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13773");
    },
    darker() {
      return require("module_19930");
    },
    light() {
      return require("module_13772");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_13773");
    },
    darker() {
      return require("module_19930");
    },
    light() {
      return require("module_13772");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}