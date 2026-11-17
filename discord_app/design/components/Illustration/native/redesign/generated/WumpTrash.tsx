// === Module 18724: WumpTrash ===

// Module 18724 (WumpTrash)
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export function getWumpTrashSource(theme) {
  return _mod8194.getIllustrationSource(theme, {
    dark() {
      return require("module_18725");
    },
    darker() {
      return require("module_18726");
    }
  });
}
export function useWumpTrashSource() {
  const obj = shared;
  return _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18725");
    },
    darker() {
      return require("module_18726");
    }
  });
}
export function WumpTrash(arg0) {
  const obj = shared;
  const illustrationSource = _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18725");
    },
    darker() {
      return require("module_18726");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_18725");
    },
    darker() {
      return require("module_18726");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}