// discord_app/design/components/Illustration/native/redesign/generated/NoResults.tsx
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7907 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(8975);
    },
    darker() {
      return callback(8976);
    },
    light() {
      return callback(8977);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(8975);
    },
    darker() {
      return callback(8976);
    },
    light() {
      return callback(8977);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(8975);
    },
    darker() {
      return callback(8976);
    },
    light() {
      return callback(8977);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};