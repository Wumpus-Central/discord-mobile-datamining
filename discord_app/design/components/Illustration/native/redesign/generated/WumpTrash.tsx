// === Module 16303: WumpTrash ===

// Module 16303 (WumpTrash)
import shared from "shared" /* 4607 */;
import _mod8501 from "module_8501" /* 8501 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("module_16304");
    },
    darker() {
      return require("module_16305");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16304");
    },
    darker() {
      return require("module_16305");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16304");
    },
    darker() {
      return require("module_16305");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};