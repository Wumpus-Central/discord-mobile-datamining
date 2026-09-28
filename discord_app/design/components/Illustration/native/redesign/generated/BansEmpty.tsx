// === Module 17456: BansEmpty ===

// Module 17456 (BansEmpty)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_17457");
    },
    darker() {
      return require("module_17458");
    },
    light() {
      return require("module_17459");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17457");
    },
    darker() {
      return require("module_17458");
    },
    light() {
      return require("module_17459");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17457");
    },
    darker() {
      return require("module_17458");
    },
    light() {
      return require("module_17459");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};