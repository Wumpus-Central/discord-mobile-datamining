// discord_app/design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7907 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11780);
    },
    darker() {
      return callback(11781);
    },
    light() {
      return callback(11782);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11780);
    },
    darker() {
      return callback(11781);
    },
    light() {
      return callback(11782);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11780);
    },
    darker() {
      return callback(11781);
    },
    light() {
      return callback(11782);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};