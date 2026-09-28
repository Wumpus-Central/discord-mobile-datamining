// === Module 17357: EmptyServerSettingsAuditLog ===

// Module 17357 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_17358");
    },
    darker() {
      return require("module_17359");
    },
    light() {
      return require("module_17360");
    }
  });
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17358");
    },
    darker() {
      return require("module_17359");
    },
    light() {
      return require("module_17360");
    }
  });
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17358");
    },
    darker() {
      return require("module_17359");
    },
    light() {
      return require("module_17360");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};