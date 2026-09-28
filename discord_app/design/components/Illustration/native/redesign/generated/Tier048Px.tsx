// === Module 13047: Tier048Px ===

// Module 13047 (Tier048Px)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_13048");
    },
    darker() {
      return require("module_13049");
    },
    light() {
      return require("module_13050");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13048");
    },
    darker() {
      return require("module_13049");
    },
    light() {
      return require("module_13050");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13048");
    },
    darker() {
      return require("module_13049");
    },
    light() {
      return require("module_13050");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};