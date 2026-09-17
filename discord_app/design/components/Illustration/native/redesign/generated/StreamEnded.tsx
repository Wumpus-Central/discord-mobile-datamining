// === Module 9752: StreamEnded ===

// Module 9752 (StreamEnded)
import shared from "shared" /* 4491 */;
import _mod8380 from "module_8380" /* 8380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod8380.getIllustrationSource(theme, {
    dark() {
      return require("module_9753");
    },
    darker() {
      return require("module_9754");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9753");
    },
    darker() {
      return require("module_9754");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9753");
    },
    darker() {
      return require("module_9754");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};