// discord_app/design/components/Illustration/native/redesign/generated/Tier048Px.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12685);
    },
    darker() {
      return callback(12686);
    },
    light() {
      return callback(12687);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12685);
    },
    darker() {
      return callback(12686);
    },
    light() {
      return callback(12687);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12685);
    },
    darker() {
      return callback(12686);
    },
    light() {
      return callback(12687);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};