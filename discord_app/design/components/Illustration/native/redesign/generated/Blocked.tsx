// === Module 14511: Blocked ===

// Module 14511 (Blocked)
import shared from "shared" /* 4685 */;
import _mod7844 from "module_7844" /* 7844 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod7844.getIllustrationSource(theme, {
    dark() {
      return require("module_14512");
    },
    darker() {
      return require("module_14513");
    },
    light() {
      return require("module_14514");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14512");
    },
    darker() {
      return require("module_14513");
    },
    light() {
      return require("module_14514");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14512");
    },
    darker() {
      return require("module_14513");
    },
    light() {
      return require("module_14514");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};