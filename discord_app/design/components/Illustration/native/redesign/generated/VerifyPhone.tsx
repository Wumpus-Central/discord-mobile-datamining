// discord_app/design/components/Illustration/native/redesign/generated/VerifyPhone.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = require(6541) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16366);
    },
    darker() {
      return callback(16367);
    },
    light() {
      return callback(16368);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16366);
    },
    darker() {
      return callback(16367);
    },
    light() {
      return callback(16368);
    }
  };
  return require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16366);
    },
    darker() {
      return callback(16367);
    },
    light() {
      return callback(16368);
    }
  };
  obj = {};
  const illustrationSource = require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};