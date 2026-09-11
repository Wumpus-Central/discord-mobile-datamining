// === Module 9692: StreamFailed ===

// Module 9692 (StreamFailed)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  const obj = {
    dark() {
      return require("module_9693");
    },
    darker() {
      return require("module_9694");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = {
    dark() {
      return require("module_9693");
    },
    darker() {
      return require("module_9694");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamFailed = function StreamFailed(arg0) {
  let obj = {
    dark() {
      return require("module_9693");
    },
    darker() {
      return require("module_9694");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};