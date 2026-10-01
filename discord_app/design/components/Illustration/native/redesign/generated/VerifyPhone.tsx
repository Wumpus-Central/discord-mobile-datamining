// === Module 17536: generated/VerifyPhone ===

// Module 17536 (generated/VerifyPhone)
import shared from "shared" /* 4714 */;
import _mod7861 from "module_7861" /* 7861 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod7861.getIllustrationSource(theme, {
    dark() {
      return require("module_17537");
    },
    darker() {
      return require("module_17538");
    },
    light() {
      return require("module_17539");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17537");
    },
    darker() {
      return require("module_17538");
    },
    light() {
      return require("module_17539");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17537");
    },
    darker() {
      return require("module_17538");
    },
    light() {
      return require("module_17539");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};