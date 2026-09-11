// === Module 17594: generated/VerifyPhone ===

// Module 17594 (generated/VerifyPhone)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  const obj = {
    dark() {
      return require("module_17595");
    },
    darker() {
      return require("module_17596");
    },
    light() {
      return require("module_17597");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = {
    dark() {
      return require("module_17595");
    },
    darker() {
      return require("module_17596");
    },
    light() {
      return require("module_17597");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = {
    dark() {
      return require("module_17595");
    },
    darker() {
      return require("module_17596");
    },
    light() {
      return require("module_17597");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};