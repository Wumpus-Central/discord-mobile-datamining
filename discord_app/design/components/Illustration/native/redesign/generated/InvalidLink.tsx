// === Module 11479: InvalidLink ===

// Module 11479 (InvalidLink)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_11203");
    },
    darker() {
      return require("module_11480");
    },
    light() {
      return require("module_11204");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11203");
    },
    darker() {
      return require("module_11480");
    },
    light() {
      return require("module_11204");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11203");
    },
    darker() {
      return require("module_11480");
    },
    light() {
      return require("module_11204");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};