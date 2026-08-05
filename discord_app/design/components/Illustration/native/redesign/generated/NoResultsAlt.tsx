// discord_app/design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8937);
    },
    darker() {
      return callback(8938);
    },
    light() {
      return callback(8336);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8937);
    },
    darker() {
      return callback(8938);
    },
    light() {
      return callback(8336);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8937);
    },
    darker() {
      return callback(8938);
    },
    light() {
      return callback(8336);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};