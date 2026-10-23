// === Module 19022: EmptyServerSettingsAuditLog ===

// Module 19022 (EmptyServerSettingsAuditLog)
import c from "c" /* 576 */;
import shared from "shared" /* 4976 */;
import FastImageDefault from "FastImage" /* 5667 */;
import _mod8722 from "module_8722" /* 8722 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmptyServerSettingsAuditLogSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_19023");
        },
      darker() {
          return require("module_19024");
        },
      light() {
          return require("module_19025");
        }
    };
    const illustrationSource = _mod8722.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8722;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8722.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19023");
    },
    darker() {
      return require("module_19024");
    },
    light() {
      return require("module_19025");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8722.getIllustrationSource(theme, {
    dark() {
      return require("module_19023");
    },
    darker() {
      return require("module_19024");
    },
    light() {
      return require("module_19025");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export { getEmptyServerSettingsAuditLogSource };
export const useEmptyServerSettingsAuditLogSource = tmp3;
export const EmptyServerSettingsAuditLog = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyServerSettingsAuditLog(arg0) {
  const cResult = c.c(3);
  const tmp3 = closure_4();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp3) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.source = tmp3;
  const tmp7 = jsx(FastImageDefault, {});
  cResult[0] = arg0;
  cResult[1] = tmp3;
  cResult[2] = tmp7;
  tmp4 = tmp7;
}) : (function EmptyServerSettingsAuditLog(arg0) {
  const obj = {};
  const tmp = closure_4();
  const merged = Object.assign(arg0);
  obj.source = tmp;
  return jsx(FastImageDefault, {});
});