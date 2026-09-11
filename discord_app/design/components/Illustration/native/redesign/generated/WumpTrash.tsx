// === Module 16049: WumpTrash ===

// Module 16049 (WumpTrash)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  const obj = {
    dark() {
      return require("module_16050");
    },
    darker() {
      return require("module_16051");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = {
    dark() {
      return require("module_16050");
    },
    darker() {
      return require("module_16051");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = {
    dark() {
      return require("module_16050");
    },
    darker() {
      return require("module_16051");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};