// discord_app/modules/connections/native/VerifiedRoleIcon.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import useRoleIconProps from "../../roles/useRoleIconProps.tsx";
import getHigherContrastColor from "../../user_profile/utils/getHigherContrastColor.tsx";
import RoleIconDefault from "../../roles/native/RoleIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
const createStyles = fn(5090);
let obj2 = {
  iconContainer: { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round },
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VerifiedRoleIcon(arg0) {
      const cResult = c.c(23);
      ({ guildId, role, roleId, roleColor, size, style, displayRoleIcon } = arg0);
      const tmp3 = closure_9();
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
      if (cResult[0] !== roleColor) {
        const obj3 = { backgroundColor: roleColor, colors: null };
        const items = [WHITE, PRIMARY_630];
        obj3.colors = items;
        const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj3);
        cResult[0] = roleColor;
        cResult[1] = higherContrastColor;
        let tmp5 = higherContrastColor;
        const tmpResult = getHigherContrastColor;
      } else {
        tmp5 = cResult[1];
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
          if (cResult[4] === roleId) {
            let tmp11 = cResult[5];
          }
          const roleIconProps = useRoleIconProps.useRoleIconProps(tmp11);
          if (cResult[6] === roleColor) {
            if (cResult[7] === size) {
              let tmp13 = cResult[8];
            }
            if (cResult[9] !== diff) {
              const size1 = { width: diff, height: diff };
              cResult[9] = diff;
              cResult[10] = size1;
              let tmp14 = size1;
            } else {
              tmp14 = cResult[10];
            }
            if (cResult[11] === tmp13) {
              if (cResult[12] === style) {
                if (cResult[13] === tmp3.iconContainer) {
                  let tmp15 = cResult[14];
                }
                if (cResult[15] === displayRoleIcon) {
                  if (cResult[16] === tmp5) {
                    if (cResult[17] === tmp14) {
                      if (cResult[18] === roleIconProps) {
                        if (cResult[20] === tmp15) {
                          if (cResult[21] === tmp16) {
                            let tmp26 = cResult[22];
                          }
                          return tmp26;
                        }
                        const obj4 = { style: tmp15, children: cResult[19] };
                        const tmp29 = <View style={tmp15}>{cResult[19]}</View>;
                        cResult[20] = tmp15;
                        cResult[21] = cResult[19];
                        cResult[22] = tmp29;
                        tmp26 = tmp29;
                      }
                    }
                  }
                }
                if (false === displayRoleIcon) {
                  const obj5 = { style: tmp14, size: "custom", color: tmp5 };
                  let tmp18 = jsx(LinkIcon.LinkIcon, { style: tmp14, size: "custom", color: tmp5 });
                  cResult[15] = displayRoleIcon;
                  cResult[16] = tmp5;
                  cResult[17] = tmp14;
                  cResult[18] = roleIconProps;
                  cResult[19] = tmp18;
                }
                const obj = {};
                const merged = Object.assign(roleIconProps);
                tmp18 = jsx(RoleIconDefault, {});
              }
            }
            const items1 = [style, tmp3.iconContainer, tmp13];
            cResult[11] = tmp13;
            cResult[12] = style;
            cResult[13] = tmp3.iconContainer;
            cResult[14] = items1;
            tmp15 = items1;
          }
          const size2 = { width: size, height: size, backgroundColor: roleColor };
          cResult[6] = roleColor;
          cResult[7] = size;
          cResult[8] = size2;
          tmp13 = size2;
          const tmpResult2 = useRoleIconProps;
        }
      }
      const obj6 = { guildId, roleId, size: diff };
      cResult[2] = guildId;
      cResult[3] = diff;
      cResult[4] = roleId;
      cResult[5] = obj6;
      tmp11 = obj6;
    }
  : function VerifiedRoleIcon(arg0) {
      ({ role, roleId, roleColor, size } = arg0);
      ({ guildId, style, displayRoleIcon } = arg0);
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
      const tmp = closure_9();
      const obj2 = { backgroundColor: roleColor, colors: null };
      const items = [WHITE, PRIMARY_630];
      obj2.colors = items;
      const diff = size - (size / 8) * 2;
      const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj2);
      const obj4 = { guildId, roleId: null, size: null };
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
      obj4.roleId = roleId;
      obj4.size = diff;
      const roleIconProps = useRoleIconProps.useRoleIconProps(obj4);
      const obj5 = { style: null, children: null };
      const items1 = [style, tmp.iconContainer, { width: size, height: size, backgroundColor: roleColor }];
      obj5.style = items1;
      if (false !== displayRoleIcon) {
        if (null != roleIconProps) {
          const obj6 = {};
          const merged = Object.assign(roleIconProps);
          let tmp9Result = jsx(RoleIconDefault, {});
        }
        obj5.children = tmp9Result;
        return <tmp10 {...obj5} />;
      }
      tmp9Result = jsx(LinkIcon.LinkIcon, {
        style: { width: diff, height: diff },
        size: "custom",
        color: higherContrastColor,
      });
      const obj7 = { style: { width: diff, height: diff }, size: "custom", color: higherContrastColor };
    };
