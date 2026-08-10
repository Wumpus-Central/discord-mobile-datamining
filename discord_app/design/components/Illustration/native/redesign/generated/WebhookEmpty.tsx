// discord_app/design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(15920);
    },
    darker() {
      return callback(15921);
    },
    light() {
      return callback(15922);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(15920);
    },
    darker() {
      return callback(15921);
    },
    light() {
      return callback(15922);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(15920);
    },
    darker() {
      return callback(15921);
    },
    light() {
      return callback(15922);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};