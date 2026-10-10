// === Module 10715: OfficialConnectionIcon ===

// Module 10715 (OfficialConnectionIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import native from "native" /* 1200 */;
import useRoleIconProps from "useRoleIconProps" /* 6882 */;
import RoleIconDefault from "RoleIcon" /* 6901 */;
import _modDef10716 from "module_10716" /* 10716 */;
import _modDef10717 from "module_10717" /* 10717 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OfficialConnectionIcon(displayRoleIcon) {
  const cResult = c.c(33);
  ({ guildId, role, roleId, roleColor, size, style } = displayRoleIcon);
  const tmp4 = closure_8();
  if (cResult[0] !== size) {
    const size1 = { width: size, height: size };
    cResult[0] = size;
    cResult[1] = size1;
    let tmp5 = size1;
  } else {
    tmp5 = cResult[1];
  }
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = hasOwnProperty;
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === size) {
      if (cResult[4] === roleId) {
        let tmp7 = cResult[5];
      }
      const roleIconProps = useRoleIconProps.useRoleIconProps(tmp7);
      if (false !== displayRoleIcon.displayRoleIcon) {
        if (null != roleIconProps) {
          if (cResult[6] === tmp5) {
            if (cResult[7] === style) {
              let tmp26 = cResult[8];
            }
            if (cResult[9] !== roleIconProps) {
              const obj2 = {};
              const merged = Object.assign(roleIconProps);
              const tmp34 = timestampProducer(RoleIconDefault, obj2);
              cResult[9] = roleIconProps;
              cResult[10] = tmp34;
              let tmp27 = tmp34;
            } else {
              tmp27 = cResult[10];
            }
            if (cResult[11] === tmp26) {
              if (cResult[12] === tmp27) {
                let tmp35 = cResult[13];
              }
              return tmp35;
            }
            const obj3 = { style: tmp26, children: tmp27 };
            const tmp38 = timestampProducer(View, obj3);
            cResult[11] = tmp26;
            cResult[12] = tmp27;
            cResult[13] = tmp38;
            tmp35 = tmp38;
          }
          const items = [style, tmp5];
          cResult[6] = tmp5;
          cResult[7] = style;
          cResult[8] = items;
          tmp26 = items;
        }
      }
      if (roleColor == null) {
        let colorString;
        if (role != null) {
          colorString = role.colorString;
        }
        roleColor = colorString;
      }
      if (roleColor == null) {
        roleColor = React4;
      }
      let PRIMARY_630 = nativeDefault.unsafe_rawColors.WHITE;
      const tmpResult = useRoleIconProps;
      const tmpResult3 = utils_ColorUtils;
      const hex2intResult = utils_ColorUtils.hex2int(roleColor);
      if (tmpResult4.getDarkness(hex2intResult) < 0.3) {
        PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
      }
      if (cResult[14] === tmp5) {
        if (cResult[15] === style) {
          let tmp13 = cResult[16];
        }
        if (cResult[17] === tmp5) {
          if (cResult[18] === tmp4.verifiedCheck) {
            let tmp14 = cResult[19];
          }
          if (cResult[20] === roleColor) {
            if (cResult[21] === tmp14) {
              let tmp15 = cResult[22];
            }
            if (cResult[23] === tmp5) {
              if (cResult[24] === tmp4.verifiedCheck) {
                let tmp18 = cResult[25];
              }
              if (cResult[26] === PRIMARY_630) {
                if (cResult[27] === tmp18) {
                  let tmp19 = cResult[28];
                }
                if (cResult[29] === tmp13) {
                  if (cResult[30] === tmp15) {
                    if (cResult[31] === tmp19) {
                      let tmp22 = cResult[32];
                    }
                    return tmp22;
                  }
                }
                const obj4 = { style: tmp13, children: null };
                const items1 = [tmp15, tmp19];
                obj4.children = items1;
                const tmp25 = React5(View, obj4);
                cResult[29] = tmp13;
                cResult[30] = tmp15;
                cResult[31] = tmp19;
                cResult[32] = tmp25;
                tmp22 = tmp25;
              }
              const obj5 = { style: tmp18, size: native.Icon.Sizes.CUSTOM, source: _modDef10717, color: PRIMARY_630 };
              const tmp21 = timestampProducer(native.Icon, obj5);
              cResult[26] = PRIMARY_630;
              cResult[27] = tmp18;
              cResult[28] = tmp21;
              tmp19 = tmp21;
            }
            const items2 = [tmp4.verifiedCheck, tmp5];
            cResult[23] = tmp5;
            cResult[24] = tmp4.verifiedCheck;
            cResult[25] = items2;
            tmp18 = items2;
          }
          const obj6 = { style: tmp14, size: native.Icon.Sizes.CUSTOM, source: _modDef10716, color: roleColor };
          const tmp17 = timestampProducer(native.Icon, obj6);
          cResult[20] = roleColor;
          cResult[21] = tmp14;
          cResult[22] = tmp17;
          tmp15 = tmp17;
        }
        const items3 = [tmp4.verifiedCheck, tmp5];
        cResult[17] = tmp5;
        cResult[18] = tmp4.verifiedCheck;
        cResult[19] = items3;
        tmp14 = items3;
      }
      const items4 = [style, tmp5];
      cResult[14] = tmp5;
      cResult[15] = style;
      cResult[16] = items4;
      tmp13 = items4;
      tmpResult4 = utils_ColorUtils;
    }
  }
  const obj7 = { guildId, roleId, size };
  cResult[2] = guildId;
  cResult[3] = size;
  cResult[4] = roleId;
  cResult[5] = obj7;
  tmp7 = obj7;
}) : (function OfficialConnectionIcon(arg0) {
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = closure_8();
  const size1 = { width: size, height: size };
  const obj = { guildId, roleId: null, size: null };
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = hasOwnProperty;
  }
  obj.roleId = roleId;
  obj.size = size;
  const roleIconProps = useRoleIconProps.useRoleIconProps(obj);
  if (false !== displayRoleIcon) {
    if (null != roleIconProps) {
      const obj3 = { style: null, children: null };
      const items = [style, size1];
      obj3.style = items;
      const obj4 = {};
      const merged = Object.assign(roleIconProps);
      obj3.children = timestampProducer(RoleIconDefault, obj4);
      return timestampProducer(View, obj3);
    }
  }
  if (roleColor == null) {
    let colorString;
    if (role != null) {
      colorString = role.colorString;
    }
    roleColor = colorString;
  }
  if (roleColor == null) {
    roleColor = React4;
  }
  let PRIMARY_630 = nativeDefault.unsafe_rawColors.WHITE;
  const tmp2Result = utils_ColorUtils;
  const hex2intResult = utils_ColorUtils.hex2int(roleColor);
  if (tmp2Result2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  const obj5 = { style: null, children: null };
  const items1 = [style, size1];
  obj5.style = items1;
  const obj6 = { style: null, size: native.Icon.Sizes.CUSTOM, source: _modDef10716, color: roleColor };
  const items2 = [tmp.verifiedCheck, size1];
  obj6.style = items2;
  const items3 = [timestampProducer(native.Icon, obj6), ];
  const obj7 = { style: null, size: native.Icon.Sizes.CUSTOM, source: _modDef10717, color: PRIMARY_630 };
  const items4 = [tmp.verifiedCheck, size1];
  obj7.style = items4;
  items3[1] = timestampProducer(native.Icon, obj7);
  obj5.children = items3;
  return React5(View, obj5);
});