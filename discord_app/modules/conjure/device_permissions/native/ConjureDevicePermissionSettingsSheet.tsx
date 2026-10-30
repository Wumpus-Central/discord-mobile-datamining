// === Module 14508: ConjureDevicePermissionSettingsSheet ===

// Module 14508 (ConjureDevicePermissionSettingsSheet)
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useConjureDevicePermissionSettingsDefault from "useConjureDevicePermissionSettings" /* 14509 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { content: { paddingBottom: nativeDefault.space.PX_16 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/native/ConjureDevicePermissionSettingsSheet.tsx");

export default function ConjureDevicePermissionSettingsSheet(arg0) {
  _require = undefined;
  ({ applicationId, appName } = arg0);
  const tmp = closure_5();
  ({ settings, setAllowed: c0 } = useConjureDevicePermissionSettingsDefault(applicationId));
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null, subtitle: null };
  let intl = require("util").intl;
  obj2.title = intl.string(_modDef3865["7a+RNP"]);
  const intl2 = require("util").intl;
  obj2.subtitle = intl2.formatToPlainString(_modDef3865.IJY15p, { app: appName });
  obj.header = jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: null, subtitle: null });
  const obj3 = { style: tmp.content, children: null };
  const tmp2 = useConjureDevicePermissionSettingsDefault(applicationId);
  obj3.children = jsx(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: settings.map((permission) => {
      permission = permission.permission;
      const decision = permission.decision;
      const obj = { label: _undefined(10934).getConjureDevicePermissionLabel(permission), subLabel: null, value: null, onValueChange: null };
      let stringResult;
      if (null == decision) {
        const intl = _undefined(1114).intl;
        stringResult = intl.string(_modDef3865["wyav+H"]);
      }
      obj.subLabel = stringResult;
      obj.value = "granted" === decision;
      obj.onValueChange = function onValueChange(arg0) {
        return permission(permission, arg0);
      };
      return jsx(_undefined(7363).TableSwitchRow, { label: _undefined(10934).getConjureDevicePermissionLabel(permission), subLabel: null, value: null, onValueChange: null }, permission);
    })
  });
  obj.children = <View style={tmp.content}>{null}</View>;
  return jsx(require("ActionSheet").ActionSheet, { startExpanded: true, header: null, children: null });
};
export const CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY = "ConjureDevicePermissionSettingsSheet";