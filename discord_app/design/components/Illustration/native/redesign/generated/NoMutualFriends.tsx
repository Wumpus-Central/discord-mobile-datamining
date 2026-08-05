// discord_app/design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11882);
    },
    darker() {
      return callback(11883);
    },
    light() {
      return callback(11884);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11882);
    },
    darker() {
      return callback(11883);
    },
    light() {
      return callback(11884);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11882);
    },
    darker() {
      return callback(11883);
    },
    light() {
      return callback(11884);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};