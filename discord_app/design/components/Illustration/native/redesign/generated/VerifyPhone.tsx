// === Module 17544: generated/VerifyPhone ===

// Module 17544 (generated/VerifyPhone)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  const obj = {
    dark() {
      return require("module_17545");
    },
    darker() {
      return require("module_17546");
    },
    light() {
      return require("module_17547");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = {
    dark() {
      return require("module_17545");
    },
    darker() {
      return require("module_17546");
    },
    light() {
      return require("module_17547");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = {
    dark() {
      return require("module_17545");
    },
    darker() {
      return require("module_17546");
    },
    light() {
      return require("module_17547");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};