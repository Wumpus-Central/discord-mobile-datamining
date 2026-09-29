// === Module 13228: TopPattern ===

// Module 13228 (TopPattern)
import shared from "shared" /* 4685 */;
import _mod7844 from "module_7844" /* 7844 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod7844.getIllustrationSource(theme, {
    dark() {
      return require("module_13229");
    },
    darker() {
      return require("module_13230");
    },
    light() {
      return require("module_13231");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13229");
    },
    darker() {
      return require("module_13230");
    },
    light() {
      return require("module_13231");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13229");
    },
    darker() {
      return require("module_13230");
    },
    light() {
      return require("module_13231");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};