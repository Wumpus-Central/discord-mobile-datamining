// === Module 17504: generated/VerifyPhone ===

// Module 17504 (generated/VerifyPhone)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_17505");
    },
    darker() {
      return require("module_17506");
    },
    light() {
      return require("module_17507");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17505");
    },
    darker() {
      return require("module_17506");
    },
    light() {
      return require("module_17507");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17505");
    },
    darker() {
      return require("module_17506");
    },
    light() {
      return require("module_17507");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};