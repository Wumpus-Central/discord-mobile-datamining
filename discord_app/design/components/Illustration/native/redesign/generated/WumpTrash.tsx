// discord_app/design/components/Illustration/native/redesign/generated/WumpTrash.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  let obj = require(6541) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(14910);
    },
    darker() {
      return callback(14911);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14910);
    },
    darker() {
      return callback(14911);
    }
  };
  return require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(14910);
    },
    darker() {
      return callback(14911);
    }
  };
  obj = {};
  const illustrationSource = require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};