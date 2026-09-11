// === Module 17733: InviteEmpty ===

// Module 17733 (InviteEmpty)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_11042");
    },
    darker() {
      return require("module_17734");
    },
    light() {
      return require("module_11041");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = {
    dark() {
      return require("module_11042");
    },
    darker() {
      return require("module_17734");
    },
    light() {
      return require("module_11041");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_11042");
    },
    darker() {
      return require("module_17734");
    },
    light() {
      return require("module_11041");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};