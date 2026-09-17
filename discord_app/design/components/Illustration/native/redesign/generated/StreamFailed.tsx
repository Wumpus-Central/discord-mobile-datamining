// === Module 13130: StreamFailed ===

// Module 13130 (StreamFailed)
import shared from "shared" /* 4491 */;
import _mod8380 from "module_8380" /* 8380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  return _mod8380.getIllustrationSource(theme, {
    dark() {
      return require("module_13131");
    },
    darker() {
      return require("module_13132");
    }
  });
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = shared;
  return _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13131");
    },
    darker() {
      return require("module_13132");
    }
  });
};
export const StreamFailed = function StreamFailed(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13131");
    },
    darker() {
      return require("module_13132");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};