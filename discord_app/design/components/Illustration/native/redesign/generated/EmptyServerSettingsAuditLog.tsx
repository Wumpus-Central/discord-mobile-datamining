// === Module 17556: EmptyServerSettingsAuditLog ===

// Module 17556 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  const obj = {
    dark() {
      return require("module_17557");
    },
    darker() {
      return require("module_17558");
    },
    light() {
      return require("module_17559");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = {
    dark() {
      return require("module_17557");
    },
    darker() {
      return require("module_17558");
    },
    light() {
      return require("module_17559");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = {
    dark() {
      return require("module_17557");
    },
    darker() {
      return require("module_17558");
    },
    light() {
      return require("module_17559");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};