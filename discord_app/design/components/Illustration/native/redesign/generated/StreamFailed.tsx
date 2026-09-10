// === Module 9671: StreamFailed ===

// Module 9671 (StreamFailed)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  const obj = {
    dark() {
      return require("module_9672");
    },
    darker() {
      return require("module_9673");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = {
    dark() {
      return require("module_9672");
    },
    darker() {
      return require("module_9673");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamFailed = function StreamFailed(arg0) {
  let obj = {
    dark() {
      return require("module_9672");
    },
    darker() {
      return require("module_9673");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};