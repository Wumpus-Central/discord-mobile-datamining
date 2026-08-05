// discord_app/design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16512);
    },
    darker() {
      return callback(16513);
    },
    light() {
      return callback(16514);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16512);
    },
    darker() {
      return callback(16513);
    },
    light() {
      return callback(16514);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16512);
    },
    darker() {
      return callback(16513);
    },
    light() {
      return callback(16514);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};