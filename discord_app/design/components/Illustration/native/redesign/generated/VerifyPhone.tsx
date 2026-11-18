// === Module 19746: generated/VerifyPhone ===

// Module 19746 (generated/VerifyPhone)
import shared from "shared" /* 4830 */;
import FastImageDefault from "FastImage" /* 5510 */;
import _mod7697 from "module_7697" /* 7697 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export function getVerifyPhoneSource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("module_19747");
    },
    darker() {
      return require("module_19748");
    },
    light() {
      return require("module_19749");
    }
  });
}
export function useVerifyPhoneSource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19747");
    },
    darker() {
      return require("module_19748");
    },
    light() {
      return require("module_19749");
    }
  });
}
export function VerifyPhone(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19747");
    },
    darker() {
      return require("module_19748");
    },
    light() {
      return require("module_19749");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19747");
    },
    darker() {
      return require("module_19748");
    },
    light() {
      return require("module_19749");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}