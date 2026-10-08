// === Module 12884: BotPermissions ===

// Module 12884 (BotPermissions)
import nativeDefault from "native" /* 587 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import XSmallIcon from "XSmallIcon" /* 6210 */;
import permissions from "permissions" /* 9143 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { disabledPermissionIcon: null };
let size = { width: 24, height: 24, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj2.disabledPermissionIcon = size;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/BotPermissions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BotPermissions(deniedPermissions) {
  const cResult = permissions(onPermissionsChange[7]).c(39);
  ({ application, permissions } = deniedPermissions);
  deniedPermissions = deniedPermissions.deniedPermissions;
  onPermissionsChange = deniedPermissions.onPermissionsChange;
  guild = deniedPermissions.guild;
  const tmp4 = closure_8();
  noop = tmp4;
  const tmp5 = guild(noop.useState(deniedPermissions(onPermissionsChange[8]).NONE), 2);
  const first = tmp5[0];
  closure_6 = tmp5[1];
  if (cResult[0] === guild.permissions) {
    if (cResult[1] === onPermissionsChange) {
      if (cResult[2] === permissions) {
        let tmp7 = cResult[3];
        let tmp8 = cResult[4];
      }
      const effect = obj2.useEffect(tmp7, tmp8);
      if (cResult[5] === deniedPermissions) {
        if (cResult[6] === first) {
          if (cResult[7] === onPermissionsChange) {
            if (cResult[8] === permissions) {
              if (cResult[9] === tmp4) {
                if (cResult[23] === application.name) {
                  if (cResult[24] === guild.name) {
                    let tmp19 = cResult[25];
                  }
                  if (cResult[26] !== tmp19) {
                    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: tmp19 };
                    const tmp23 = closure_6(permissions(tmp2[14]).Text, obj3);
                    cResult[26] = tmp19;
                    cResult[27] = tmp23;
                    let tmp21 = tmp23;
                  } else {
                    tmp21 = cResult[27];
                  }
                  if (cResult[28] !== tmp10) {
                    const obj4 = { spacing: 12, children: tmp10 };
                    const tmp26 = closure_6(permissions(tmp2[12]).Stack, obj4);
                    cResult[28] = tmp10;
                    cResult[29] = tmp26;
                    let tmp24 = tmp26;
                  } else {
                    tmp24 = cResult[29];
                  }
                  if (cResult[30] === tmp21) {
                    if (cResult[31] === tmp24) {
                      let tmp27 = cResult[32];
                    }
                    if (cResult[33] === application.name) {
                      if (cResult[34] === arr2) {
                        let tmp30 = cResult[35];
                      }
                      if (cResult[36] === tmp27) {
                        if (cResult[37] === tmp30) {
                          let tmp34 = cResult[38];
                        }
                        return tmp34;
                      }
                      const obj5 = { spacing: 16, children: null };
                      let items = [tmp27, tmp30];
                      obj5.children = items;
                      const tmp36 = closure_7(permissions(tmp2[12]).Stack, obj5);
                      cResult[36] = tmp27;
                      cResult[37] = tmp30;
                      cResult[38] = tmp36;
                      tmp34 = tmp36;
                    }
                    let tmp31 = null;
                    if (arr2.length > 0) {
                      const obj6 = { children: null };
                      const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: null };
                      const intl2 = permissions(tmp2[15]).intl;
                      const obj8 = { applicationName: application.name };
                      obj7.children = intl2.format(permissions(tmp2[15]).t.fsOkF4, obj8);
                      const items1 = [closure_6(permissions(tmp2[14]).Text, obj7), ];
                      const obj9 = { spacing: 12, children: arr2 };
                      items1[1] = closure_6(permissions(tmp2[12]).Stack, obj9);
                      obj6.children = items1;
                      tmp31 = closure_7(permissions(tmp2[12]).Stack, obj6);
                    }
                    cResult[33] = application.name;
                    cResult[34] = arr2;
                    cResult[35] = tmp31;
                    tmp30 = tmp31;
                  }
                  const obj10 = { children: null };
                  const items2 = [tmp21, tmp24];
                  obj10.children = items2;
                  const tmp29 = closure_7(permissions(tmp2[12]).Stack, obj10);
                  cResult[30] = tmp21;
                  cResult[31] = tmp24;
                  cResult[32] = tmp29;
                  tmp27 = tmp29;
                }
                const intl = permissions(tmp2[15]).intl;
                const obj11 = { applicationName: application.name, guildName: guild.name };
                const formatResult = intl.format(permissions(tmp2[15]).t.sOaT2j, obj11);
                cResult[23] = application.name;
                cResult[24] = guild.name;
                cResult[25] = formatResult;
                tmp19 = formatResult;
              }
            }
          }
        }
      }
      if (cResult[12] !== permissions) {
        const fn2 = function j(VIEW_CHANNEL) {
          return BigFlagUtilsAll.has(permissions, VIEW_CHANNEL);
        };
        cResult[12] = permissions;
        cResult[13] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[13];
      }
      const OrderedPermissions = permissions(tmp2[10]).OrderedPermissions;
      const found = OrderedPermissions.filter(tmp11);
      if (cResult[14] !== first) {
        const fn3 = function _(VIEW_CHANNEL) {
          return !BigFlagUtilsAll.has(first, VIEW_CHANNEL);
        };
        cResult[14] = first;
        cResult[15] = fn3;
        let tmp12 = fn3;
      } else {
        tmp12 = cResult[15];
      }
      if (cResult[16] === deniedPermissions) {
        if (cResult[17] === onPermissionsChange) {
          let tmp13 = cResult[18];
        }
        const found1 = found.filter(tmp12);
        const mapped = found1.map(tmp13);
        if (cResult[19] !== first) {
          const fn5 = function y(VIEW_CHANNEL) {
            return BigFlagUtilsAll.has(first, VIEW_CHANNEL);
          };
          cResult[19] = first;
          cResult[20] = fn5;
          let found2 = fn5;
        } else {
          found2 = cResult[20];
        }
        if (cResult[21] !== tmp4) {
          const fn6 = function z(item) {
            const permissionName = permissions.getPermissionName(item);
            const obj2 = { direction: "horizontal", align: "center", children: null };
            const items = [timestampProducer(View, { style: closure_4.disabledPermissionIcon, children: timestampProducer(XSmallIcon.XSmallIcon, { size: "sm", color: "white" }) }), timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: permissionName })];
            obj2.children = items;
            return React5(Stack_Stack.Stack, obj2, String(item));
          };
          cResult[21] = tmp4;
          cResult[22] = fn6;
          let tmp15 = fn6;
        } else {
          tmp15 = cResult[22];
        }
        found2 = found.filter(found2);
        const mapped1 = found2.map(tmp15);
        cResult[5] = deniedPermissions;
        cResult[6] = first;
        cResult[7] = onPermissionsChange;
        cResult[8] = permissions;
        cResult[9] = tmp4;
        cResult[10] = mapped;
        cResult[11] = mapped1;
      }
      const fn4 = function w(item) {
        closure_0 = item;
        const permissionName = permissions(onPermissionsChange[10]).getPermissionName(item);
        const obj = permissions(onPermissionsChange[10]);
        const obj2 = deniedPermissions(onPermissionsChange[9]);
        const tmp2 = !deniedPermissions(onPermissionsChange[9]).has(deniedPermissions, item);
        return closure_6(permissions(onPermissionsChange[11]).Checkbox, {
          checked: !deniedPermissions(onPermissionsChange[9]).has(deniedPermissions, item),
          onToggle(arg0) {
            return onPermissionsChange(arg0, closure_0);
          },
          label: permissionName
        }, String(item));
      };
      cResult[16] = deniedPermissions;
      cResult[17] = onPermissionsChange;
      cResult[18] = fn4;
      tmp13 = fn4;
    }
  }
  const fn = function u() {
    onPermissionsChange(true, permissions);
    closure_6(BigFlagUtilsAll.invert(guild.permissions));
    onPermissionsChange(false, BigFlagUtilsAll.invert(guild.permissions));
  };
  const items3 = [guild.permissions, onPermissionsChange, permissions];
  cResult[0] = guild.permissions;
  cResult[1] = onPermissionsChange;
  cResult[2] = permissions;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp8 = items3;
  tmp7 = fn;
  let obj = permissions(onPermissionsChange[7]);
  obj2 = noop;
}) : (function BotPermissions(guild) {
  ({ application, permissions } = guild);
  ({ deniedPermissions: importAll, onPermissionsChange } = guild);
  guild = guild.guild;
  c5 = undefined;
  c6 = undefined;
  noop = closure_8();
  [c5, c6] = guild(noop.useState(require("PermissionUtils").NONE), 2);
  let items = [guild.permissions, onPermissionsChange, permissions];
  const effect = noop.useEffect(() => {
    onPermissionsChange(true, permissions);
    _undefined(BigFlagUtilsAll.invert(guild.permissions));
    onPermissionsChange(false, BigFlagUtilsAll.invert(guild.permissions));
  }, items);
  const OrderedPermissions = permissions(onPermissionsChange[10]).OrderedPermissions;
  const found = OrderedPermissions.filter((item) => BigFlagUtilsAll.has(permissions, item));
  const found1 = found.filter((item) => !BigFlagUtilsAll.has(c5, item));
  const mapped = found1.map((item) => {
    closure_0 = item;
    const permissionName = permissions(onPermissionsChange[10]).getPermissionName(item);
    const obj = permissions(onPermissionsChange[10]);
    const obj2 = require("BigFlagUtils");
    const tmp2 = !require("BigFlagUtils").has(closure_1, item);
    return _undefined(permissions(onPermissionsChange[11]).Checkbox, {
      checked: !require("BigFlagUtils").has(closure_1, item),
      onToggle(arg0) {
        return onPermissionsChange(arg0, closure_0);
      },
      label: permissionName
    }, String(item));
  });
  const found2 = found.filter((item) => BigFlagUtilsAll.has(c5, item));
  const mapped1 = found2.map((item) => {
    const permissionName = permissions.getPermissionName(item);
    const obj2 = { direction: "horizontal", align: "center", children: null };
    const items = [timestampProducer(View, { style: closure_4.disabledPermissionIcon, children: timestampProducer(XSmallIcon.XSmallIcon, { size: "sm", color: "white" }) }), timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: permissionName })];
    obj2.children = items;
    return React5(Stack_Stack.Stack, obj2, String(item));
  });
  let obj = { children: null };
  let obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = permissions(onPermissionsChange[15]).intl;
  obj2.children = intl.format(permissions(onPermissionsChange[15]).t.sOaT2j, { applicationName: application.name, guildName: guild.name });
  const items1 = [c6(permissions(onPermissionsChange[14]).Text, obj2), c6(permissions(onPermissionsChange[12]).Stack, { spacing: 12, children: mapped })];
  obj.children = items1;
  const children = [closure_7(permissions(onPermissionsChange[12]).Stack, obj), ];
  let tmp6Result = null;
  if (mapped1.length > 0) {
    const obj4 = { children: null };
    const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = permissions(onPermissionsChange[15]).intl;
    const obj6 = { applicationName: application.name };
    obj5.children = intl2.format(permissions(onPermissionsChange[15]).t.fsOkF4, obj6);
    const items3 = [tmp7(permissions(onPermissionsChange[14]).Text, obj5), ];
    const obj7 = { spacing: 12, children: mapped1 };
    items3[1] = tmp7(permissions(onPermissionsChange[12]).Stack, obj7);
    obj4.children = items3;
    tmp6Result = closure_7(permissions(onPermissionsChange[12]).Stack, obj4);
  }
  children[1] = tmp6Result;
  return closure_7(permissions(onPermissionsChange[12]).Stack, { spacing: 16, children });
});