// === Module 19910: generated/VerifyPhone ===

// Module 19910 (generated/VerifyPhone)
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _mod8567 from "module_8567" /* 8567 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export function getVerifyPhoneSource(theme) {
  return _mod8567.getIllustrationSource(theme, {
    dark() {
      return require("module_19911");
    },
    darker() {
      return require("module_19912");
    },
    light() {
      return require("module_19913");
    }
  });
}
export function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8567.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19911");
    },
    darker() {
      return require("module_19912");
    },
    light() {
      return require("module_19913");
    }
  });
}
export function VerifyPhone(arg0) {
  const obj = shared;
  const illustrationSource = _mod8567.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19911");
    },
    darker() {
      return require("module_19912");
    },
    light() {
      return require("module_19913");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19911");
    },
    darker() {
      return require("module_19912");
    },
    light() {
      return require("module_19913");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}