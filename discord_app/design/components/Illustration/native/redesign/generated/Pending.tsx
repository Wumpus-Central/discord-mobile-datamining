// === Module 16933: Pending ===

// Module 16933 (Pending)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_16934");
    },
    darker() {
      return require("module_16935");
    },
    light() {
      return require("module_16936");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16934");
    },
    darker() {
      return require("module_16935");
    },
    light() {
      return require("module_16936");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16934");
    },
    darker() {
      return require("module_16935");
    },
    light() {
      return require("module_16936");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};