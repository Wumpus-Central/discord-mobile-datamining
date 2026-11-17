// === Module 20065: StreamEnded ===

// Module 20065 (StreamEnded)
import shared from "shared" /* 5313 */;
import FastImageDefault from "FastImage" /* 6010 */;
import _mod8183 from "module_8183" /* 8183 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export function getStreamEndedSource(theme) {
  return _mod8183.getIllustrationSource(theme, {
    dark() {
      return require("module_20066");
    },
    darker() {
      return require("module_20067");
    }
  });
}
export function useStreamEndedSource() {
  const obj = shared;
  return _mod8183.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20066");
    },
    darker() {
      return require("module_20067");
    }
  });
}
export function StreamEnded(arg0) {
  const obj = shared;
  const illustrationSource = _mod8183.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20066");
    },
    darker() {
      return require("module_20067");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20066");
    },
    darker() {
      return require("module_20067");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}