// === Module 19898: StreamEnded ===

// Module 19898 (StreamEnded)
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export function getStreamEndedSource(theme) {
  return _mod8117.getIllustrationSource(theme, {
    dark() {
      return require("module_19899");
    },
    darker() {
      return require("module_19900");
    }
  });
}
export function useStreamEndedSource() {
  const obj = shared;
  return _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19899");
    },
    darker() {
      return require("module_19900");
    }
  });
}
export function StreamEnded(arg0) {
  const obj = shared;
  const illustrationSource = _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19899");
    },
    darker() {
      return require("module_19900");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19899");
    },
    darker() {
      return require("module_19900");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}