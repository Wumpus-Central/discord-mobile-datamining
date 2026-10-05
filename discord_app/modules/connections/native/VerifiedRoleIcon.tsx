// discord_app/modules/connections/native/VerifiedRoleIcon.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import useRoleIconProps2 from "../../roles/useRoleIconProps.tsx";
import getHigherContrastColor from "../../user_profile/utils/getHigherContrastColor.tsx";
import RoleIconDefault from "../../roles/native/RoleIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
let obj = { iconContainer: obj2 };
obj2 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let displayRoleIcon;
      let guildId;
      let items;
      let role;
      let roleColor;
      let roleId;
      let style;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(23);
      ({ guildId, role, roleId, roleColor, size, style, displayRoleIcon } = arg0);
      const tmp4 = closure_9();
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
      if (cResult[0] !== roleColor) {
        const obj2 = { backgroundColor: roleColor, colors: items };
        items = [WHITE, PRIMARY_630];
        const tmpResult = getHigherContrastColor;
        const higherContrastColor = tmpResult.getHigherContrastColor(obj2);
        cResult[0] = roleColor;
        cResult[1] = higherContrastColor;
        tmp6 = higherContrastColor;
      } else {
        tmp6 = cResult[1];
      }
      const diff = size - (size / 8) * 2;
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
        if (cResult[3] === diff) {
          let tmp12;
          if (cResult[4] === roleId) {
            tmp12 = cResult[5];
          }
          const tmpResult2 = useRoleIconProps2;
          const roleIconProps = tmpResult2.useRoleIconProps(tmp12);
          if (cResult[6] === roleColor) {
            let tmp14;
            let tmp15;
            if (cResult[7] === size) {
              tmp14 = cResult[8];
            }
            if (cResult[9] !== diff) {
              const size1 = { width: diff, height: diff };
              cResult[9] = diff;
              cResult[10] = size1;
              tmp15 = size1;
            } else {
              tmp15 = cResult[10];
            }
            if (cResult[11] === tmp14) {
              if (cResult[12] === style) {
                let tmp16;
                let tmp17;
                if (cResult[13] === tmp4.iconContainer) {
                  tmp16 = cResult[14];
                }
                if (cResult[15] === displayRoleIcon) {
                  if (cResult[16] === tmp6) {
                    if (cResult[17] === tmp15) {
                      if (cResult[18] === roleIconProps) {
                        tmp17 = cResult[19];
                      }
                      if (cResult[20] === tmp16) {
                        let tmp26;
                        if (cResult[21] === tmp17) {
                          tmp26 = cResult[22];
                        }
                        return tmp26;
                      }
                      const tmp29 = <View style={tmp16}>{tmp17}</View>;
                      cResult[20] = tmp16;
                      cResult[21] = tmp17;
                      cResult[22] = tmp29;
                      tmp26 = tmp29;
                    }
                  }
                }
                if (false !== displayRoleIcon) {
                  let tmp19;
                  if (null != roleIconProps) {
                    RoleIconDefault;
                    const merged = Object.assign(roleIconProps);
                    tmp19 = <tmp22 />;
                  }
                  cResult[15] = displayRoleIcon;
                  cResult[16] = tmp6;
                  cResult[17] = tmp15;
                  cResult[18] = roleIconProps;
                  cResult[19] = tmp19;
                  tmp17 = tmp19;
                }
                tmp19 = jsx(LinkIcon.LinkIcon, { style: tmp15, size: "custom", color: tmp6 });
              }
            }
            const items1 = [style, tmp4.iconContainer, tmp14];
            cResult[11] = tmp14;
            cResult[12] = style;
            cResult[13] = tmp4.iconContainer;
            cResult[14] = items1;
            tmp16 = items1;
          }
          const size2 = { width: size, height: size, backgroundColor: roleColor };
          cResult[6] = roleColor;
          cResult[7] = size;
          cResult[8] = size2;
          tmp14 = size2;
        }
      }
      const obj6 = { guildId, roleId, size: diff };
      cResult[2] = guildId;
      cResult[3] = diff;
      cResult[4] = roleId;
      cResult[5] = obj6;
      tmp12 = obj6;
    }
  : (arg0) => {
      let displayRoleIcon;
      let guildId;
      let items;
      let items1;
      let role;
      let roleColor;
      let roleId;
      let style;
      ({ role, roleId, roleColor, size } = arg0);
      ({ guildId, style, displayRoleIcon } = arg0);
      const tmp = closure_9();
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
      const obj2 = { backgroundColor: roleColor, colors: items };
      items = [WHITE, PRIMARY_630];
      const diff = size - (size / 8) * 2;
      const obj = getHigherContrastColor;
      const higherContrastColor = obj.getHigherContrastColor(obj2);
      const obj3 = { guildId, roleId, size: diff };
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
      const roleIconProps = useRoleIconProps(obj3);
      const obj4 = { style: items1, children: null };
      items1 = [style, tmp.iconContainer, { width: size, height: size, backgroundColor: roleColor }];
      if (false !== displayRoleIcon) {
        let tmp10Result;
        if (null != roleIconProps) {
          RoleIconDefault;
          const merged = Object.assign(roleIconProps);
          tmp10Result = <tmp14 />;
        }
        obj4.children = tmp10Result;
        return <tmp11 {...obj4} />;
      }
      tmp10Result = jsx(LinkIcon.LinkIcon, {
        style: { width: diff, height: diff },
        size: "custom",
        color: higherContrastColor,
      });
    };
const result = size.fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

export default tmp4;
