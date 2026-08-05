// discord_app/design/components/Illustration/native/redesign/generated/NoResults.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = getIllustrationSource /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8750);
    },
    darker() {
      return callback(8751);
    },
    light() {
      return callback(8752);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8750);
    },
    darker() {
      return callback(8751);
    },
    light() {
      return callback(8752);
    }
  };
  return getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8750);
    },
    darker() {
      return callback(8751);
    },
    light() {
      return callback(8752);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};