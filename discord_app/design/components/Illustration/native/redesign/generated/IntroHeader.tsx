// discord_app/design/components/Illustration/native/redesign/generated/IntroHeader.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16618);
    },
    darker() {
      return callback(16619);
    },
    light() {
      return callback(16620);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16618);
    },
    darker() {
      return callback(16619);
    },
    light() {
      return callback(16620);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16618);
    },
    darker() {
      return callback(16619);
    },
    light() {
      return callback(16620);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};