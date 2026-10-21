// === Module 11779: ConjurePublishDevicePermissions ===

// Module 11779 (ConjurePublishDevicePermissions)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureDevicePermissionRowsDefault from "ConjureDevicePermissionRows" /* 11780 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishDevicePermissions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishDevicePermissions(permissions) {
  let tmp2 = dependencyMap;
  const cResult = c.c(4);
  permissions = permissions.permissions;
  if (0 === permissions.length) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(_modDef3830["6U+4pJ"]);
      const intl2 = util.intl;
      const stringResult1 = intl2.string(_modDef3830.X8wPIB);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp4 = stringResult;
      tmp5 = stringResult1;
    } else {
      [tmp4, tmp5] = cResult;
    }
    if (cResult[2] !== permissions) {
      const obj2 = { permissions, title: tmp4, helperText: tmp5 };
      tmp2 = jsx(ConjureDevicePermissionRowsDefault, { permissions, title: tmp4, helperText: tmp5 });
      cResult[2] = permissions;
      cResult[3] = tmp2;
    }
  }
}) : (function ConjurePublishDevicePermissions(permissions) {
  permissions = permissions.permissions;
  let tmp = null;
  if (0 !== permissions.length) {
    const obj = { permissions, title: null, helperText: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3830["6U+4pJ"]);
    const intl2 = util.intl;
    obj.helperText = intl2.string(_modDef3830.X8wPIB);
    tmp = jsx(ConjureDevicePermissionRowsDefault, { permissions, title: null, helperText: null });
  }
  return tmp;
});