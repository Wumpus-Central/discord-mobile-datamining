// === Module 8951: BotPermissions ===

// Module 8951 (BotPermissions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import permissions from "permissions" /* 8730 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let deniedPermissions;

let metroImportDefault;
let metroRequire;
let size;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { disabledPermissionIcon: size };
size = { width: 24, height: 24, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((deniedPermissions) => {
  let application;
  let closure_4;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj8;
  let onPermissionsChange;
  let permissions;
  let obj = permissions(onPermissionsChange[7]);
  const cResult = obj.c(39);
  ({ application, permissions } = deniedPermissions);
  deniedPermissions = deniedPermissions.deniedPermissions;
  onPermissionsChange = deniedPermissions.onPermissionsChange;
  const guild = deniedPermissions.guild;
  const tmp4 = closure_8();
  react = tmp4;
  let obj2 = react;
  const tmp5 = guild(react.useState(deniedPermissions(onPermissionsChange[8]).NONE), 2);
  const first = tmp5[0];
  let closure_6 = tmp5[1];
  if (cResult[0] === guild.permissions) {
    if (cResult[1] === onPermissionsChange) {
      let tmp7;
      let tmp8;
      let tmp11;
      let tmp12;
      let arr2;
      let tmp10;
      if (cResult[2] === permissions) {
        tmp7 = cResult[3];
        tmp8 = cResult[4];
      }
      const effect = obj2.useEffect(tmp7, tmp8);
      if (cResult[5] === deniedPermissions) {
        if (cResult[6] === first) {
          if (cResult[7] === onPermissionsChange) {
            if (cResult[8] === permissions) {
              if (cResult[9] === tmp4) {
                tmp10 = cResult[10];
                arr2 = cResult[11];
              }
              if (cResult[23] === application.name) {
                let tmp18;
                let tmp20;
                let tmp23;
                if (cResult[24] === guild.name) {
                  tmp18 = cResult[25];
                }
                if (cResult[26] !== tmp18) {
                  let obj3 = { variant: "text-sm/medium", color: "text-subtle", children: tmp18 };
                  const tmp22 = closure_6(permissions(onPermissionsChange[14]).Text, obj3);
                  cResult[26] = tmp18;
                  cResult[27] = tmp22;
                  tmp20 = tmp22;
                } else {
                  tmp20 = cResult[27];
                }
                if (cResult[28] !== tmp10) {
                  const obj4 = { spacing: 12, children: tmp10 };
                  const tmp25 = closure_6(permissions(onPermissionsChange[12]).Stack, obj4);
                  cResult[28] = tmp10;
                  cResult[29] = tmp25;
                  tmp23 = tmp25;
                } else {
                  tmp23 = cResult[29];
                }
                if (cResult[30] === tmp20) {
                  let tmp26;
                  if (cResult[31] === tmp23) {
                    tmp26 = cResult[32];
                  }
                  if (cResult[33] === application.name) {
                    let tmp29;
                    if (cResult[34] === arr2) {
                      tmp29 = cResult[35];
                    }
                    if (cResult[36] === tmp26) {
                      let tmp33;
                      if (cResult[37] === tmp29) {
                        tmp33 = cResult[38];
                      }
                      return tmp33;
                    }
                    const obj5 = { spacing: 16, children: items };
                    items = [tmp26, tmp29];
                    const tmp35 = closure_7(permissions(onPermissionsChange[12]).Stack, obj5);
                    cResult[36] = tmp26;
                    cResult[37] = tmp29;
                    cResult[38] = tmp35;
                    tmp33 = tmp35;
                  }
                  let tmp30 = null;
                  if (arr2.length > 0) {
                    const obj6 = { children: items1 };
                    let Stack = permissions(tmp2[12]).Stack;
                    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: intl2.format(permissions(onPermissionsChange[15]).t.fsOkF4, obj8) };
                    const Text = permissions(tmp2[14]).Text;
                    intl2 = permissions(tmp2[15]).intl;
                    obj8 = { applicationName: application.name };
                    items1 = [closure_6(Text, obj7), ];
                    const obj9 = { spacing: 12, children: arr2 };
                    items1[1] = closure_6(permissions(onPermissionsChange[12]).Stack, obj9);
                    tmp30 = closure_7(Stack, obj6);
                  }
                  cResult[33] = application.name;
                  cResult[34] = arr2;
                  cResult[35] = tmp30;
                  tmp29 = tmp30;
                }
                const obj10 = { children: items2 };
                items2 = [tmp20, tmp23];
                const tmp28 = closure_7(permissions(onPermissionsChange[12]).Stack, obj10);
                cResult[30] = tmp20;
                cResult[31] = tmp23;
                cResult[32] = tmp28;
                tmp26 = tmp28;
              }
              const intl = permissions(tmp2[15]).intl;
              const obj11 = { applicationName: application.name, guildName: guild.name };
              const formatResult = intl.format(permissions(onPermissionsChange[15]).t.sOaT2j, obj11);
              cResult[23] = application.name;
              cResult[24] = guild.name;
              cResult[25] = formatResult;
              tmp18 = formatResult;
            }
          }
        }
      }
      if (cResult[12] !== permissions) {
        const fn2 = function j(VIEW_CHANNEL) {
          const obj = BigFlagUtilsAll;
          return obj.has(permissions, VIEW_CHANNEL);
        };
        cResult[12] = permissions;
        cResult[13] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[13];
      }
      const OrderedPermissions = permissions(tmp2[10]).OrderedPermissions;
      const found = OrderedPermissions.filter(tmp11);
      if (cResult[14] !== first) {
        const fn3 = function _(VIEW_CHANNEL) {
          const obj = BigFlagUtilsAll;
          return !obj.has(first, VIEW_CHANNEL);
        };
        cResult[14] = first;
        cResult[15] = fn3;
        tmp12 = fn3;
      } else {
        tmp12 = cResult[15];
      }
      if (cResult[16] === deniedPermissions) {
        let tmp13;
        let tmp15;
        let tmp16;
        if (cResult[17] === onPermissionsChange) {
          tmp13 = cResult[18];
        }
        const found1 = found.filter(tmp12);
        const mapped = found1.map(tmp13);
        if (cResult[19] !== first) {
          const fn5 = function y(VIEW_CHANNEL) {
            const obj = BigFlagUtilsAll;
            return obj.has(first, VIEW_CHANNEL);
          };
          cResult[19] = first;
          cResult[20] = fn5;
          tmp15 = fn5;
        } else {
          tmp15 = cResult[20];
        }
        if (cResult[21] !== tmp4) {
          const fn6 = function z(item) {
            let items;
            const obj = permissions;
            const permissionName = obj.getPermissionName(item);
            const obj2 = { direction: "horizontal", align: "center", children: items };
            const obj3 = { style: closure_4.disabledPermissionIcon, children: metroRequire(XSmallIcon.XSmallIcon, { size: "sm", color: "white" }) };
            const Stack = Stack_Stack.Stack;
            items = [metroRequire(View, obj3), metroRequire(Text_Text.Text, { variant: "text-md/medium", children: permissionName })];
            return metroImportDefault(Stack, obj2, String(item));
          };
          cResult[21] = tmp4;
          cResult[22] = fn6;
          tmp16 = fn6;
        } else {
          tmp16 = cResult[22];
        }
        const found2 = found.filter(tmp15);
        const mapped1 = found2.map(tmp16);
        cResult[5] = deniedPermissions;
        cResult[6] = first;
        cResult[7] = onPermissionsChange;
        cResult[8] = permissions;
        cResult[9] = tmp4;
        cResult[10] = mapped;
        cResult[11] = mapped1;
        arr2 = mapped1;
        tmp10 = mapped;
      }
      const fn4 = function w(item) {
        let closure_0 = item;
        const obj = permissions(onPermissionsChange[10]);
        const permissionName = obj.getPermissionName(item);
        const obj2 = deniedPermissions(onPermissionsChange[9]);
        const obj3 = {
          checked: !obj2.has(deniedPermissions, item),
          onToggle(arg0) {
            return onPermissionsChange(arg0, item);
          },
          label: permissionName
        };
        return closure_6(permissions(onPermissionsChange[11]).Checkbox, obj3, String(item));
      };
      cResult[16] = deniedPermissions;
      cResult[17] = onPermissionsChange;
      cResult[18] = fn4;
      tmp13 = fn4;
    }
  }
  const fn = function u() {
    onPermissionsChange(true, permissions);
    const obj = BigFlagUtilsAll;
    closure_6(obj.invert(guild.permissions));
    const obj2 = BigFlagUtilsAll;
    onPermissionsChange(false, obj2.invert(guild.permissions));
  };
  const items3 = [guild.permissions, onPermissionsChange, permissions];
  cResult[0] = guild.permissions;
  cResult[1] = onPermissionsChange;
  cResult[2] = permissions;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp8 = items3;
  tmp7 = fn;
}) : ((guild) => {
  let _undefined;
  let application;
  let c5;
  let c6;
  let closure_4;
  let intl;
  let intl2;
  let items1;
  let items3;
  let obj3;
  let obj6;
  let onPermissionsChange;
  let permissions;
  ({ application, permissions } = guild);
  ({ deniedPermissions: importAll, onPermissionsChange } = guild);
  guild = guild.guild;
  c5 = undefined;
  c6 = undefined;
  react = closure_8();
  [c5, c6] = guild(react.useState(require("PermissionUtils").NONE), 2);
  let items = [guild.permissions, onPermissionsChange, permissions];
  const tmp2 = guild(react.useState(require("PermissionUtils").NONE), 2);
  const effect = react.useEffect(() => {
    onPermissionsChange(true, permissions);
    const obj = BigFlagUtilsAll;
    _undefined(obj.invert(guild.permissions));
    const obj2 = BigFlagUtilsAll;
    onPermissionsChange(false, obj2.invert(guild.permissions));
  }, items);
  const OrderedPermissions = permissions(onPermissionsChange[10]).OrderedPermissions;
  const found = OrderedPermissions.filter((item) => {
    const obj = BigFlagUtilsAll;
    return obj.has(permissions, item);
  });
  const found1 = found.filter((item) => {
    const obj = BigFlagUtilsAll;
    return !obj.has(c5, item);
  });
  const mapped = found1.map((item) => {
    let closure_0 = item;
    const obj = permissions(onPermissionsChange[10]);
    const permissionName = obj.getPermissionName(item);
    const obj2 = require("BigFlagUtils");
    const obj3 = {
      checked: !obj2.has(importAll, item),
      onToggle(arg0) {
        return onPermissionsChange(arg0, item);
      },
      label: permissionName
    };
    return _undefined(permissions(onPermissionsChange[11]).Checkbox, obj3, String(item));
  });
  const found2 = found.filter((item) => {
    const obj = BigFlagUtilsAll;
    return obj.has(c5, item);
  });
  const mapped1 = found2.map((item) => {
    let items;
    const obj = permissions;
    const permissionName = obj.getPermissionName(item);
    const obj2 = { direction: "horizontal", align: "center", children: items };
    const obj3 = { style: closure_4.disabledPermissionIcon, children: metroRequire(XSmallIcon.XSmallIcon, { size: "sm", color: "white" }) };
    const Stack = Stack_Stack.Stack;
    items = [metroRequire(View, obj3), metroRequire(Text_Text.Text, { variant: "text-md/medium", children: permissionName })];
    return metroImportDefault(Stack, obj2, String(item));
  });
  let Stack = permissions(onPermissionsChange[12]).Stack;
  let obj = { children: items1 };
  const Stack2 = permissions(onPermissionsChange[12]).Stack;
  let obj2 = { variant: "text-sm/medium", color: "text-subtle", children: intl.format(permissions(onPermissionsChange[15]).t.sOaT2j, obj3) };
  const Text = permissions(onPermissionsChange[14]).Text;
  intl = permissions(onPermissionsChange[15]).intl;
  obj3 = { applicationName: application.name, guildName: guild.name };
  items1 = [c6(Text, obj2), c6(permissions(onPermissionsChange[12]).Stack, { spacing: 12, children: mapped })];
  const children = [closure_7(Stack2, obj), ];
  let tmp6Result = null;
  if (mapped1.length > 0) {
    const obj4 = { children: items3 };
    const Stack3 = permissions(onPermissionsChange[12]).Stack;
    const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: intl2.format(permissions(onPermissionsChange[15]).t.fsOkF4, obj6) };
    const Text2 = permissions(onPermissionsChange[14]).Text;
    intl2 = permissions(onPermissionsChange[15]).intl;
    obj6 = { applicationName: application.name };
    items3 = [c6(Text2, obj5), ];
    const obj7 = { spacing: 12, children: mapped1 };
    items3[1] = c6(permissions(onPermissionsChange[12]).Stack, obj7);
    tmp6Result = closure_7(Stack3, obj4);
  }
  children[1] = tmp6Result;
  return closure_7(Stack, { spacing: 16, children });
});
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/BotPermissions.tsx");

export default tmp3;