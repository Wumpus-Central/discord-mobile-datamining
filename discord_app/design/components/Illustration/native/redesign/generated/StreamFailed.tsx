// === Module 9731: StreamFailed ===

// Module 9731 (StreamFailed)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_9732");
    },
    darker() {
      return require("module_9733");
    }
  });
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9732");
    },
    darker() {
      return require("module_9733");
    }
  });
};
export const StreamFailed = function StreamFailed(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9732");
    },
    darker() {
      return require("module_9733");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};