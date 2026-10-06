// === Module 11196: OfficialConnectionIcon ===

// Module 11196 (OfficialConnectionIcon)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import native from "native" /* 1188 */;
import useRoleIconProps2 from "useRoleIconProps" /* 6692 */;
import RoleIconDefault from "RoleIcon" /* 6711 */;
import AssetRegistryDefault from "AssetRegistry" /* 11197 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11198 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((displayRoleIcon) => {
  let guildId;
  let items1;
  let role;
  let roleColor;
  let roleId;
  let style;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(33);
  ({ guildId, role, roleId, roleColor, size, style } = displayRoleIcon);
  displayRoleIcon = displayRoleIcon.displayRoleIcon;
  const tmp4 = closure_8();
  if (cResult[0] !== size) {
    const size1 = { width: size, height: size };
    cResult[0] = size;
    cResult[1] = size1;
    tmp5 = size1;
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
      let tmp7;
      if (cResult[4] === roleId) {
        tmp7 = cResult[5];
      }
      const tmpResult = useRoleIconProps2;
      const roleIconProps = tmpResult.useRoleIconProps(tmp7);
      if (false !== displayRoleIcon) {
        if (null != roleIconProps) {
          if (cResult[6] === tmp5) {
            let tmp26;
            let tmp27;
            if (cResult[7] === style) {
              tmp26 = cResult[8];
            }
            if (cResult[9] !== roleIconProps) {
              const obj2 = {};
              const tmp30 = RoleIconDefault;
              const merged = Object.assign(roleIconProps);
              const tmp34 = metroRequire(tmp30, obj2);
              cResult[9] = roleIconProps;
              cResult[10] = tmp34;
              tmp27 = tmp34;
            } else {
              tmp27 = cResult[10];
            }
            if (cResult[11] === tmp26) {
              let tmp35;
              if (cResult[12] === tmp27) {
                tmp35 = cResult[13];
              }
              return tmp35;
            }
            const obj3 = { style: tmp26, children: tmp27 };
            const tmp38 = metroRequire(View, obj3);
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
        roleColor = React3;
      }
      let PRIMARY_630 = nativeDefault.unsafe_rawColors.WHITE;
      const tmpResult3 = utils_ColorUtils;
      const hex2intResult = tmpResult3.hex2int(roleColor);
      const tmpResult4 = utils_ColorUtils;
      if (tmpResult4.getDarkness(hex2intResult) < 0.3) {
        PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
      }
      if (cResult[14] === tmp5) {
        let tmp13;
        if (cResult[15] === style) {
          tmp13 = cResult[16];
        }
        if (cResult[17] === tmp5) {
          let tmp14;
          if (cResult[18] === tmp4.verifiedCheck) {
            tmp14 = cResult[19];
          }
          if (cResult[20] === roleColor) {
            let tmp15;
            if (cResult[21] === tmp14) {
              tmp15 = cResult[22];
            }
            if (cResult[23] === tmp5) {
              let tmp18;
              if (cResult[24] === tmp4.verifiedCheck) {
                tmp18 = cResult[25];
              }
              if (cResult[26] === PRIMARY_630) {
                let tmp19;
                if (cResult[27] === tmp18) {
                  tmp19 = cResult[28];
                }
                if (cResult[29] === tmp13) {
                  if (cResult[30] === tmp15) {
                    let tmp22;
                    if (cResult[31] === tmp19) {
                      tmp22 = cResult[32];
                    }
                    return tmp22;
                  }
                }
                const obj4 = { style: tmp13, children: items1 };
                items1 = [tmp15, tmp19];
                const tmp25 = metroImportDefault(View, obj4);
                cResult[29] = tmp13;
                cResult[30] = tmp15;
                cResult[31] = tmp19;
                cResult[32] = tmp25;
                tmp22 = tmp25;
              }
              const obj5 = { style: tmp18, size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault2, color: PRIMARY_630 };
              const Icon2 = native.Icon;
              const tmp21 = metroRequire(Icon2, obj5);
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
          const obj6 = { style: tmp14, size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault, color: roleColor };
          const Icon = native.Icon;
          const tmp17 = metroRequire(Icon, obj6);
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
    }
  }
  const obj7 = { guildId, roleId, size };
  cResult[2] = guildId;
  cResult[3] = size;
  cResult[4] = roleId;
  cResult[5] = obj7;
  tmp7 = obj7;
}) : ((arg0) => {
  let displayRoleIcon;
  let guildId;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj3;
  let role;
  let roleColor;
  let roleId;
  let style;
  let tmp13;
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = closure_8();
  const size1 = { width: size, height: size };
  const obj = { guildId, roleId, size };
  const useRoleIconProps = useRoleIconProps2.useRoleIconProps;
  useRoleIconProps2;
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
  const roleIconProps = useRoleIconProps(obj);
  if (false !== displayRoleIcon) {
    if (null != roleIconProps) {
      const obj2 = { style: items, children: metroRequire(tmp13, obj3) };
      items = [style, size1];
      obj3 = {};
      tmp13 = RoleIconDefault;
      const merged = Object.assign(roleIconProps);
      return metroRequire(View, obj2);
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
    roleColor = React3;
  }
  let PRIMARY_630 = nativeDefault.unsafe_rawColors.WHITE;
  const tmp2Result = utils_ColorUtils;
  const hex2intResult = tmp2Result.hex2int(roleColor);
  const tmp2Result2 = utils_ColorUtils;
  if (tmp2Result2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  const obj4 = { style: items1, children: items3 };
  items1 = [style, size1];
  const obj5 = { style: items2, size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault, color: roleColor };
  items2 = [tmp.verifiedCheck, size1];
  const Icon = native.Icon;
  items3 = [metroRequire(Icon, obj5), ];
  const obj6 = { style: items4, size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault2, color: PRIMARY_630 };
  items4 = [tmp.verifiedCheck, size1];
  const Icon2 = native.Icon;
  items3[1] = metroRequire(Icon2, obj6);
  return metroImportDefault(View, obj4);
});
const result = size.fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default tmp5;