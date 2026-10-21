// === Module 11780: ConjureDevicePermissionRows ===

// Module 11780 (ConjureDevicePermissionRows)
import c from "c" /* 576 */;
import TableRow from "TableRow" /* 6882 */;
import TableRowIcon from "TableRowIcon" /* 6890 */;
import TableRowGroup from "TableRowGroup" /* 6966 */;
import ScreenIcon2 from "ScreenIcon" /* 9443 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10756 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/native/ConjureDevicePermissionRows.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDevicePermissionRows(arg0) {
  const cResult = c.c(7);
  ({ permissions, title, helperText } = arg0);
  if (cResult[0] !== permissions) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c(item) {
        let ScreenIcon;
        if ("screen_capture" === item) {
          ScreenIcon = ScreenIcon2.ScreenIcon;
        }
        const obj = { icon: jsx(TableRowIcon.TableRowIcon, { IconComponent: ScreenIcon }), label: conjureDevicePermissions.getConjureDevicePermissionLabel(item) };
        return jsx(TableRow.TableRow, { icon: jsx(TableRowIcon.TableRowIcon, { IconComponent: ScreenIcon }), label: conjureDevicePermissions.getConjureDevicePermissionLabel(item) }, item);
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = permissions.map(tmp6);
    cResult[0] = permissions;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === helperText) {
      if (cResult[4] === tmp4) {
        if (cResult[5] === title) {
          let tmp9 = cResult[6];
        }
        return tmp9;
      }
    }
    const obj2 = { hasIcons: true, title, helperText, children: cResult[1] };
    const tmp11 = jsx(TableRowGroup.TableRowGroup, { hasIcons: true, title, helperText, children: cResult[1] });
    cResult[3] = helperText;
    cResult[4] = cResult[1];
    cResult[5] = title;
    cResult[6] = tmp11;
    tmp9 = tmp11;
  }
}) : (function ConjureDevicePermissionRows(permissions) {
  permissions = permissions.permissions;
  ({ title, helperText } = permissions);
  return jsx(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    title,
    helperText,
    children: permissions.map((item) => {
      let ScreenIcon;
      if ("screen_capture" === item) {
        ScreenIcon = ScreenIcon2.ScreenIcon;
      }
      const obj = { icon: jsx(TableRowIcon.TableRowIcon, { IconComponent: ScreenIcon }), label: conjureDevicePermissions.getConjureDevicePermissionLabel(item) };
      return jsx(TableRow.TableRow, { icon: jsx(TableRowIcon.TableRowIcon, { IconComponent: ScreenIcon }), label: conjureDevicePermissions.getConjureDevicePermissionLabel(item) }, item);
    })
  });
});