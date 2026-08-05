// discord_app/design/components/Illustration/native/redesign/generated/AppCrash.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = getIllustrationSource /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9005);
    },
    darker() {
      return callback(9006);
    },
    light() {
      return callback(9007);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9005);
    },
    darker() {
      return callback(9006);
    },
    light() {
      return callback(9007);
    }
  };
  return getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9005);
    },
    darker() {
      return callback(9006);
    },
    light() {
      return callback(9007);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};