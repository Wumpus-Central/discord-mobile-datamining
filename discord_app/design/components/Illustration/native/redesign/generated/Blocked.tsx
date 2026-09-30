// === Module 14542: Blocked ===

// Module 14542 (Blocked)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_14543");
    },
    darker() {
      return require("module_14544");
    },
    light() {
      return require("module_14545");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14543");
    },
    darker() {
      return require("module_14544");
    },
    light() {
      return require("module_14545");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14543");
    },
    darker() {
      return require("module_14544");
    },
    light() {
      return require("module_14545");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};