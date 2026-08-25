// === Module 16902: getEmptyServerSettingsAuditLogSource ===

// Module 16902 (getEmptyServerSettingsAuditLogSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16903);
    },
    darker() {
      return callback(16904);
    },
    light() {
      return callback(16905);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16903);
    },
    darker() {
      return callback(16904);
    },
    light() {
      return callback(16905);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16903);
    },
    darker() {
      return callback(16904);
    },
    light() {
      return callback(16905);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};