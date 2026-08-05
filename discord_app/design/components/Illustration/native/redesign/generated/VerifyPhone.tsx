// discord_app/design/components/Illustration/native/redesign/generated/VerifyPhone.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16464);
    },
    darker() {
      return callback(16465);
    },
    light() {
      return callback(16466);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16464);
    },
    darker() {
      return callback(16465);
    },
    light() {
      return callback(16466);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16464);
    },
    darker() {
      return callback(16465);
    },
    light() {
      return callback(16466);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};