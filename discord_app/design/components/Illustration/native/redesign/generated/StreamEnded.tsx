// === Module 9689: StreamEnded ===

// Module 9689 (StreamEnded)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  const obj = {
    dark() {
      return require("module_9690");
    },
    darker() {
      return require("module_9691");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = {
    dark() {
      return require("module_9690");
    },
    darker() {
      return require("module_9691");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamEnded = function StreamEnded(arg0) {
  let obj = {
    dark() {
      return require("module_9690");
    },
    darker() {
      return require("module_9691");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};