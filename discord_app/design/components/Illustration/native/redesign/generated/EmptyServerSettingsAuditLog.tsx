// === Module 17980: EmptyServerSettingsAuditLog ===

// Module 17980 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 4607 */;
import _mod8501 from "module_8501" /* 8501 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("module_17981");
    },
    darker() {
      return require("module_17982");
    },
    light() {
      return require("module_17983");
    }
  });
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17981");
    },
    darker() {
      return require("module_17982");
    },
    light() {
      return require("module_17983");
    }
  });
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17981");
    },
    darker() {
      return require("module_17982");
    },
    light() {
      return require("module_17983");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};