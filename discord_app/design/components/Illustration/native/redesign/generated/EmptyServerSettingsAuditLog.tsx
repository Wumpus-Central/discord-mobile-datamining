// === Module 18353: EmptyServerSettingsAuditLog ===

// Module 18353 (EmptyServerSettingsAuditLog)
import c from "c" /* 576 */;
import shared from "shared" /* 4969 */;
import _mod8360 from "module_8360" /* 8360 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmptyServerSettingsAuditLogSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_18354");
        },
      darker() {
          return require("module_18355");
        },
      light() {
          return require("module_18356");
        }
    };
    const illustrationSource = _mod8360.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8360;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8360.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18354");
    },
    darker() {
      return require("module_18355");
    },
    light() {
      return require("module_18356");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8360.getIllustrationSource(theme, {
    dark() {
      return require("module_18354");
    },
    darker() {
      return require("module_18355");
    },
    light() {
      return require("module_18356");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export { getEmptyServerSettingsAuditLogSource };
export const useEmptyServerSettingsAuditLogSource = tmp3;
export const EmptyServerSettingsAuditLog = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyServerSettingsAuditLog(arg0) {
  const cResult = c.c(3);
  const tmp2 = closure_4();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.source = tmp2;
  const tmp5 = <Image />;
  cResult[0] = arg0;
  cResult[1] = tmp2;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : (function EmptyServerSettingsAuditLog(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.source = closure_4();
  return <Image />;
});