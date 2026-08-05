// discord_app/design/components/Illustration/native/redesign/generated/InviteEmpty.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9622);
    },
    darker() {
      return callback(16608);
    },
    light() {
      return callback(9621);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9622);
    },
    darker() {
      return callback(16608);
    },
    light() {
      return callback(9621);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9622);
    },
    darker() {
      return callback(16608);
    },
    light() {
      return callback(9621);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};