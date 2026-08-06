// discord_app/design/components/Illustration/native/redesign/generated/VerifyPhone.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16485);
    },
    darker() {
      return callback(16486);
    },
    light() {
      return callback(16487);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16485);
    },
    darker() {
      return callback(16486);
    },
    light() {
      return callback(16487);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16485);
    },
    darker() {
      return callback(16486);
    },
    light() {
      return callback(16487);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};