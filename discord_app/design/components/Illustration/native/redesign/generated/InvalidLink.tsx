// === Module 12039: InvalidLink ===

// Module 12039 (InvalidLink)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_11706");
    },
    darker() {
      return require("module_12040");
    },
    light() {
      return require("module_11707");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11706");
    },
    darker() {
      return require("module_12040");
    },
    light() {
      return require("module_11707");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11706");
    },
    darker() {
      return require("module_12040");
    },
    light() {
      return require("module_11707");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};