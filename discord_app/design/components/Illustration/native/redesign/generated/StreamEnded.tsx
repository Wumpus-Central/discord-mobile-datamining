// === Module 19597: StreamEnded ===

// Module 19597 (StreamEnded)
import shared from "shared" /* 5177 */;
import FastImageDefault from "FastImage" /* 5872 */;
import _mod8898 from "module_8898" /* 8898 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export function getStreamEndedSource(theme) {
  return _mod8898.getIllustrationSource(theme, {
    dark() {
      return require("module_19598");
    },
    darker() {
      return require("module_19599");
    }
  });
}
export function useStreamEndedSource() {
  const obj = shared;
  return _mod8898.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19598");
    },
    darker() {
      return require("module_19599");
    }
  });
}
export function StreamEnded(arg0) {
  const obj = shared;
  const illustrationSource = _mod8898.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19598");
    },
    darker() {
      return require("module_19599");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19598");
    },
    darker() {
      return require("module_19599");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}