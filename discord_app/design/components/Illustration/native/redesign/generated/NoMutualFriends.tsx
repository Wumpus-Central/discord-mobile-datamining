// discord_app/design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11854);
    },
    darker() {
      return callback(11855);
    },
    light() {
      return callback(11856);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11854);
    },
    darker() {
      return callback(11855);
    },
    light() {
      return callback(11856);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11854);
    },
    darker() {
      return callback(11855);
    },
    light() {
      return callback(11856);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};