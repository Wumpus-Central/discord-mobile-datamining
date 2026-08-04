// discord_app/design/components/Illustration/native/redesign/generated/AppCrash.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = require(6541) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12251);
    },
    darker() {
      return callback(12252);
    },
    light() {
      return callback(12253);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12251);
    },
    darker() {
      return callback(12252);
    },
    light() {
      return callback(12253);
    }
  };
  return require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12251);
    },
    darker() {
      return callback(12252);
    },
    light() {
      return callback(12253);
    }
  };
  obj = {};
  const illustrationSource = require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};