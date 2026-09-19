// === Module 18076: BansEmpty ===

// Module 18076 (BansEmpty)
import shared from "shared" /* 4607 */;
import _mod8501 from "module_8501" /* 8501 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("module_18077");
    },
    darker() {
      return require("module_18078");
    },
    light() {
      return require("module_18079");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18077");
    },
    darker() {
      return require("module_18078");
    },
    light() {
      return require("module_18079");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18077");
    },
    darker() {
      return require("module_18078");
    },
    light() {
      return require("module_18079");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};