// === Module 17742: InviteEmpty ===

// Module 17742 (InviteEmpty)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_11022");
    },
    darker() {
      return require("module_17743");
    },
    light() {
      return require("module_11021");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = {
    dark() {
      return require("module_11022");
    },
    darker() {
      return require("module_17743");
    },
    light() {
      return require("module_11021");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_11022");
    },
    darker() {
      return require("module_17743");
    },
    light() {
      return require("module_11021");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};