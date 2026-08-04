// discord_app/design/components/Illustration/native/redesign/generated/InviteEmpty.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(6541) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10223);
    },
    darker() {
      return callback(16511);
    },
    light() {
      return callback(10222);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10223);
    },
    darker() {
      return callback(16511);
    },
    light() {
      return callback(10222);
    }
  };
  return require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10223);
    },
    darker() {
      return callback(16511);
    },
    light() {
      return callback(10222);
    }
  };
  obj = {};
  const illustrationSource = require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};