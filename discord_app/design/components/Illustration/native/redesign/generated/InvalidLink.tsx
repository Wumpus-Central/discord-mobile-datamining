// === Module 11487: InvalidLink ===

// Module 11487 (InvalidLink)
import shared from "shared" /* 4714 */;
import _mod7861 from "module_7861" /* 7861 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod7861.getIllustrationSource(theme, {
    dark() {
      return require("module_11207");
    },
    darker() {
      return require("module_11488");
    },
    light() {
      return require("module_11208");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11207");
    },
    darker() {
      return require("module_11488");
    },
    light() {
      return require("module_11208");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11207");
    },
    darker() {
      return require("module_11488");
    },
    light() {
      return require("module_11208");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};