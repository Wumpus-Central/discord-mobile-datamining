// === Module 18681: WumpTrash ===

// Module 18681 (WumpTrash)
import shared from "shared" /* 5313 */;
import FastImageDefault from "FastImage" /* 6020 */;
import _mod8183 from "module_8183" /* 8183 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export function getWumpTrashSource(theme) {
  return _mod8183.getIllustrationSource(theme, {
    dark() {
      return require("module_18682");
    },
    darker() {
      return require("module_18683");
    }
  });
}
export function useWumpTrashSource() {
  const obj = shared;
  return _mod8183.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18682");
    },
    darker() {
      return require("module_18683");
    }
  });
}
export function WumpTrash(arg0) {
  const obj = shared;
  const illustrationSource = _mod8183.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18682");
    },
    darker() {
      return require("module_18683");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_18682");
    },
    darker() {
      return require("module_18683");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}