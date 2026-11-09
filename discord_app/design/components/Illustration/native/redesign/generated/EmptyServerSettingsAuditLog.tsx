// === Module 20130: EmptyServerSettingsAuditLog ===

// Module 20130 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 5147 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _mod8880 from "module_8880" /* 8880 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8880.getIllustrationSource(theme, {
    dark() {
      return require("module_20131");
    },
    darker() {
      return require("module_20132");
    },
    light() {
      return require("module_20133");
    }
  });
}
export function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20131");
    },
    darker() {
      return require("module_20132");
    },
    light() {
      return require("module_20133");
    }
  });
}
export function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const illustrationSource = _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20131");
    },
    darker() {
      return require("module_20132");
    },
    light() {
      return require("module_20133");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20131");
    },
    darker() {
      return require("module_20132");
    },
    light() {
      return require("module_20133");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}