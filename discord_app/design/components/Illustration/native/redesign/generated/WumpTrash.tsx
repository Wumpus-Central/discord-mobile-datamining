// === Module 15978: WumpTrash ===

// Module 15978 (WumpTrash)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  const obj = {
    dark() {
      return require("module_15979");
    },
    darker() {
      return require("module_15980");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = {
    dark() {
      return require("module_15979");
    },
    darker() {
      return require("module_15980");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = {
    dark() {
      return require("module_15979");
    },
    darker() {
      return require("module_15980");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};