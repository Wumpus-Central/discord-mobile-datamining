// === Module 17823: generated/VerifyPhone ===

// Module 17823 (generated/VerifyPhone)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_17824");
    },
    darker() {
      return require("module_17825");
    },
    light() {
      return require("module_17826");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17824");
    },
    darker() {
      return require("module_17825");
    },
    light() {
      return require("module_17826");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17824");
    },
    darker() {
      return require("module_17825");
    },
    light() {
      return require("module_17826");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};