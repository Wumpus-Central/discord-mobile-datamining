// === Module 17760: generated/VerifyPhone ===

// Module 17760 (generated/VerifyPhone)
import shared from "shared" /* 4491 */;
import _mod8380 from "module_8380" /* 8380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8380.getIllustrationSource(theme, {
    dark() {
      return require("module_17761");
    },
    darker() {
      return require("module_17762");
    },
    light() {
      return require("module_17763");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17761");
    },
    darker() {
      return require("module_17762");
    },
    light() {
      return require("module_17763");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17761");
    },
    darker() {
      return require("module_17762");
    },
    light() {
      return require("module_17763");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};