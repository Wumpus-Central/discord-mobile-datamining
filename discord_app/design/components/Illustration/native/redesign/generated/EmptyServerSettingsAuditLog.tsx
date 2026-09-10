// === Module 17649: EmptyServerSettingsAuditLog ===

// Module 17649 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  const obj = {
    dark() {
      return require("module_17650");
    },
    darker() {
      return require("module_17651");
    },
    light() {
      return require("module_17652");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = {
    dark() {
      return require("module_17650");
    },
    darker() {
      return require("module_17651");
    },
    light() {
      return require("module_17652");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = {
    dark() {
      return require("module_17650");
    },
    darker() {
      return require("module_17651");
    },
    light() {
      return require("module_17652");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};