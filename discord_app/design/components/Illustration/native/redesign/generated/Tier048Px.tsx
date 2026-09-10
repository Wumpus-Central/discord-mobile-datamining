// === Module 13584: Tier048Px ===

// Module 13584 (Tier048Px)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  const obj = {
    dark() {
      return require("module_13585");
    },
    darker() {
      return require("module_13586");
    },
    light() {
      return require("module_13587");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = {
    dark() {
      return require("module_13585");
    },
    darker() {
      return require("module_13586");
    },
    light() {
      return require("module_13587");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = {
    dark() {
      return require("module_13585");
    },
    darker() {
      return require("module_13586");
    },
    light() {
      return require("module_13587");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};