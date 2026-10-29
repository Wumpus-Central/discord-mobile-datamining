// === Module 14475: ConjureDevicePermissionSettingsSheet ===

// Module 14475 (ConjureDevicePermissionSettingsSheet)
import nativeDefault from "native" /* 587 */;
import _modDef3864 from "module_3864" /* 3864 */;
import useConjureDevicePermissionSettingsDefault from "useConjureDevicePermissionSettings" /* 14476 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj2 = { content: { paddingBottom: nativeDefault.space.PX_16 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/native/ConjureDevicePermissionSettingsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDevicePermissionSettingsSheet(appName) {
  const cResult = setAllowed(576).c(18);
  appName = appName.appName;
  const tmp4 = closure_5();
  let obj = setAllowed(576);
  ({ settings, setAllowed } = useConjureDevicePermissionSettingsDefault(appName.applicationId));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = setAllowed(1125).intl;
    let stringResult = intl.string(_modDef3864["7a+RNP"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== appName) {
    const intl2 = setAllowed(1125).intl;
    const obj2 = { app: appName };
    const formatToPlainStringResult = intl2.formatToPlainString(_modDef3864.IJY15p, obj2);
    cResult[1] = appName;
    cResult[2] = formatToPlainStringResult;
    let tmp9 = formatToPlainStringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp9) {
    const obj3 = { title: first, subtitle: tmp9 };
    const tmp13 = jsx(setAllowed(7308).BottomSheetTitleHeader, { title: first, subtitle: tmp9 });
    cResult[3] = tmp9;
    cResult[4] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === setAllowed) {
    if (cResult[6] === settings) {
      if (cResult[10] !== cResult[7]) {
        const obj4 = { hasIcons: false, children: tmp15 };
        const tmp20 = jsx(setAllowed(7047).TableRowGroup, { hasIcons: false, children: tmp15 });
        cResult[10] = tmp15;
        cResult[11] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] === tmp4.content) {
        if (cResult[13] === tmp18) {
          let tmp21 = cResult[14];
        }
        if (cResult[15] === tmp11) {
          if (cResult[16] === tmp21) {
            let tmp25 = cResult[17];
          }
          return tmp25;
        }
        const obj5 = { startExpanded: true, header: tmp11, children: tmp21 };
        const tmp27 = jsx(setAllowed(7358).ActionSheet, { startExpanded: true, header: tmp11, children: tmp21 });
        cResult[15] = tmp11;
        cResult[16] = tmp21;
        cResult[17] = tmp27;
        tmp25 = tmp27;
      }
      const obj6 = { style: tmp14, children: tmp18 };
      const tmp24 = <View style={tmp14}>{tmp18}</View>;
      cResult[12] = tmp4.content;
      cResult[13] = tmp18;
      cResult[14] = tmp24;
      tmp21 = tmp24;
    }
  }
  if (cResult[8] !== setAllowed) {
    class C {
      constructor(arg0) {
        permission = appName.permission;
        decision = appName.decision;
        tmp3 = closure_1_2;
        tmp = closure_1_4;
        tmp2 = setAllowed;
        obj = { label: null, subLabel: null, value: null, onValueChange: null };
        obj2 = setAllowed(closure_1_2[12]);
        obj.label = obj2.getConjureDevicePermissionLabel(permission);
        stringResult = undefined;
        if (null == decision) {
          intl = tmp2(tmp3[8]).intl;
          tmp5 = closure_1_1;
          stringResult = intl.string(closure_1_1(tmp3[9])["wyav+H"]);
        }
        obj.subLabel = stringResult;
        obj.value = "granted" === decision;
        obj.onValueChange = function onValueChange() { ... };
        return tmp(setAllowed(closure_1_2[11]).TableSwitchRow, obj, permission);
      }
    }
    cResult[8] = setAllowed;
    cResult[9] = C;
  } else {
    class C {
      constructor(arg0) {
        permission = appName.permission;
        decision = appName.decision;
        tmp3 = closure_1_2;
        tmp = closure_1_4;
        tmp2 = setAllowed;
        obj = { label: null, subLabel: null, value: null, onValueChange: null };
        obj2 = setAllowed(closure_1_2[12]);
        obj.label = obj2.getConjureDevicePermissionLabel(permission);
        stringResult = undefined;
        if (null == decision) {
          intl = tmp2(tmp3[8]).intl;
          tmp5 = closure_1_1;
          stringResult = intl.string(closure_1_1(tmp3[9])["wyav+H"]);
        }
        obj.subLabel = stringResult;
        obj.value = "granted" === decision;
        obj.onValueChange = function onValueChange() { ... };
        return tmp(setAllowed(closure_1_2[11]).TableSwitchRow, obj, permission);
      }
    }
  }
  const mapped = settings.map(C);
  cResult[5] = setAllowed;
  cResult[6] = settings;
  cResult[7] = mapped;
  const tmp6 = useConjureDevicePermissionSettingsDefault(appName.applicationId);
}) : (function ConjureDevicePermissionSettingsSheet(arg0) {
  _require = undefined;
  ({ applicationId, appName } = arg0);
  const tmp = closure_5();
  ({ settings, setAllowed: c0 } = useConjureDevicePermissionSettingsDefault(applicationId));
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null, subtitle: null };
  let intl = require("util").intl;
  obj2.title = intl.string(_modDef3864["7a+RNP"]);
  const intl2 = require("util").intl;
  obj2.subtitle = intl2.formatToPlainString(_modDef3864.IJY15p, { app: appName });
  obj.header = jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: null, subtitle: null });
  const obj3 = { style: tmp.content, children: null };
  const tmp2 = useConjureDevicePermissionSettingsDefault(applicationId);
  obj3.children = jsx(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: settings.map((permission) => {
      permission = permission.permission;
      const decision = permission.decision;
      const obj = { label: _undefined(10911).getConjureDevicePermissionLabel(permission), subLabel: null, value: null, onValueChange: null };
      let stringResult;
      if (null == decision) {
        const intl = _undefined(1125).intl;
        stringResult = intl.string(_modDef3864["wyav+H"]);
      }
      obj.subLabel = stringResult;
      obj.value = "granted" === decision;
      obj.onValueChange = function onValueChange(arg0) {
        return permission(permission, arg0);
      };
      return jsx(_undefined(7355).TableSwitchRow, { label: _undefined(10911).getConjureDevicePermissionLabel(permission), subLabel: null, value: null, onValueChange: null }, permission);
    })
  });
  obj.children = <View style={tmp.content}>{null}</View>;
  return jsx(require("ActionSheet").ActionSheet, { startExpanded: true, header: null, children: null });
});
export const CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY = "ConjureDevicePermissionSettingsSheet";