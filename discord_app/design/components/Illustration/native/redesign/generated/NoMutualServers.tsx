// === Module 9248: getNoMutualServersSource ===

// Module 9248 (getNoMutualServersSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9249);
    },
    darker() {
      return callback(9250);
    },
    light() {
      return callback(9251);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9249);
    },
    darker() {
      return callback(9250);
    },
    light() {
      return callback(9251);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9249);
    },
    darker() {
      return callback(9250);
    },
    light() {
      return callback(9251);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};