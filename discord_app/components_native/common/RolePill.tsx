// discord_app/components_native/common/RolePill.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../modules/toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import VerifiedRoleIconDefault from "../../modules/connections/native/VerifiedRoleIcon.tsx";
import RoleIconDefault from "../../modules/roles/native/RoleIcon.tsx";
import react from "../../../_runtime/00019_react.js";
import Constants from "../../Constants.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let importDefault, role;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
const View = react_native.View;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, MAX_VISUAL_ROLE_LENGTH: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, pill: obj3, bubble: size, verifiedContainer: size1, roleIcon: { paddingRight: 4 } };
obj2 = { marginRight: 4, marginBottom: 4, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
size = {
  marginRight: 8,
  borderRadius: nativeDefault.radii.sm,
  height: 12,
  width: 12,
  backgroundColor: nativeDefault.colors.ICON_MUTED,
};
size1 = { marginRight: 8, borderRadius: nativeDefault.radii.sm, height: 12, width: 12 };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (role) => {
      let closure_1;
      let color;
      let disableInteraction;
      let guildId;
      let items;
      let obj6;
      let tmp23;
      let tmp30;
      let obj = role(576);
      const cResult = obj.c(30);
      role = role.role;
      ({ guildId, color, disableInteraction } = role);
      const DeveloperMode = role(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      if (cResult[0] === guildId) {
        let tmp5;
        let guild_connections;
        if (cResult[1] === role.id) {
          tmp5 = cResult[2];
        }
        const tmpResult = role(6685);
        const roleIconProps = tmpResult.useRoleIconProps(tmp5);
        if (cResult[3] !== role.name) {
          let name = role.name;
          importDefault = name;
          if (role.name.length > closure_5) {
            const name1 = role.name;
            const _HermesInternal = HermesInternal;
            const combined = "" + name1.slice(0, tmp8) + "...";
            importDefault = combined;
            name = combined;
          }
          cResult[3] = role.name;
          cResult[4] = name;
        } else {
          importDefault = cResult[4];
        }
        if (color == null) {
          color = role.colorString;
        }
        const tags = role.tags;
        if (tags != null) {
          guild_connections = tags.guild_connections;
        }
        if (cResult[5] === tmp7) {
          let tmp12;
          let tmp18Result;
          if (cResult[6] === role.id) {
            tmp12 = cResult[7];
          }
          const tmp14 = closure_8();
          let tmp15 = !setting;
          if (setting) {
            tmp15 = disableInteraction;
          }
          if (cResult[8] === color) {
            if (cResult[9] === guildId) {
              if (cResult[10] === role.id) {
                if (cResult[11] === tmp14.bubble) {
                  if (cResult[12] === tmp14.verifiedContainer) {
                    let tmp17;
                    if ((cResult[13] === undefined) !== guild_connections) {
                      tmp17 = cResult[14];
                    }
                    if (cResult[15] === roleIconProps) {
                      let tmp25;
                      let tmp34;
                      if (cResult[16] === tmp14.roleIcon) {
                        tmp25 = cResult[17];
                      }
                      if (cResult[18] !== tmp7) {
                        let obj2 = { variant: "text-xs/semibold", color: "interactive-text-active", children: tmp7 };
                        const tmp36 = closure_6(role(4886).Text, obj2);
                        cResult[18] = tmp7;
                        cResult[19] = tmp36;
                        tmp34 = tmp36;
                      } else {
                        tmp34 = cResult[19];
                      }
                      if (cResult[20] === tmp14.pill) {
                        if (cResult[21] === tmp17) {
                          if (cResult[22] === tmp25) {
                            let tmp37;
                            if (cResult[23] === tmp34) {
                              tmp37 = cResult[24];
                            }
                            if (cResult[25] === tmp12) {
                              if (cResult[26] === tmp14.container) {
                                if (cResult[27] === tmp15) {
                                  let tmp41;
                                  if (cResult[28] === tmp37) {
                                    tmp41 = cResult[29];
                                  }
                                  return tmp41;
                                }
                              }
                            }
                            const obj3 = {
                              disabled: tmp15,
                              style: tmp14.container,
                              onPress: tmp12,
                              accessible: false,
                              children: tmp37,
                            };
                            const tmp43 = closure_6(role(5909).PressableHighlight, obj3);
                            cResult[25] = tmp12;
                            cResult[26] = tmp14.container;
                            cResult[27] = tmp15;
                            cResult[28] = tmp37;
                            cResult[29] = tmp43;
                            tmp41 = tmp43;
                          }
                        }
                      }
                      const obj4 = { style: tmp14.pill, children: items };
                      items = [tmp17, tmp25, tmp34];
                      const tmp40 = closure_7(View, obj4);
                      cResult[20] = tmp14.pill;
                      cResult[21] = tmp17;
                      cResult[22] = tmp25;
                      cResult[23] = tmp34;
                      cResult[24] = tmp40;
                      tmp37 = tmp40;
                    }
                    let tmp26 = null;
                    if (null != roleIconProps) {
                      const obj5 = { style: tmp14.roleIcon, children: closure_6(tmp30, obj6) };
                      obj6 = {};
                      tmp30 = RoleIconDefault;
                      const merged = Object.assign(roleIconProps);
                      tmp26 = closure_6(View, obj5);
                    }
                    cResult[15] = roleIconProps;
                    cResult[16] = tmp14.roleIcon;
                    cResult[17] = tmp26;
                    tmp25 = tmp26;
                  }
                }
              }
            }
          }
          if (undefined !== guild_connections) {
            const obj7 = {
              style: tmp14.verifiedContainer,
              roleId: role.id,
              guildId: tmp23,
              roleColor: color,
              size: 14,
              displayRoleIcon: false,
            };
            tmp23 = guildId;
            const tmp22 = VerifiedRoleIconDefault;
            if (guildId == null) {
              tmp23 = closure_4;
            }
            tmp18Result = closure_6(tmp22, obj7);
          } else {
            let obj9;
            const items1 = [tmp14.bubble];
            if (null != color) {
              obj9 = { backgroundColor: color };
              const obj8 = { backgroundColor: color };
            } else {
              obj9 = {};
            }
            const obj10 = { style: items1 };
            items1[1] = obj9;
            tmp18Result = closure_6(View, obj10);
          }
          cResult[8] = color;
          cResult[9] = guildId;
          cResult[10] = role.id;
          cResult[11] = tmp14.bubble;
          cResult[12] = tmp14.verifiedContainer;
          cResult[13] = undefined !== guild_connections;
          cResult[14] = tmp18Result;
          tmp17 = tmp18Result;
        }
        const fn = function f() {
          const obj = ClipboardUtils;
          obj.copy(role.id);
          const obj2 = ToastUtils;
          obj2.roleIdCopied(closure_1);
        };
        cResult[5] = tmp7;
        cResult[6] = role.id;
        cResult[7] = fn;
        tmp12 = fn;
      }
      const obj11 = { guildId, roleId: role.id, size: 12 };
      cResult[0] = guildId;
      cResult[1] = role.id;
      cResult[2] = obj11;
      tmp5 = obj11;
    }
  : (role) => {
      let color;
      let guildId;
      let items1;
      let obj10;
      let obj4;
      let tmp10Result;
      let tmp19;
      role = role.role;
      ({ guildId, color } = role);
      const disableInteraction = role.disableInteraction;
      const DeveloperMode = role(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      let obj = role(6685);
      let obj2 = { guildId, roleId: role.id, size: 12 };
      const roleIconProps = obj.useRoleIconProps(obj2);
      let name = role.name;
      let combined = name;
      if (role.name.length > closure_5) {
        const name1 = role.name;
        const _HermesInternal = HermesInternal;
        combined = "" + name1.slice(0, tmp5) + "...";
        name = combined;
      }
      if (color == null) {
        color = role.colorString;
      }
      const tags = role.tags;
      let guild_connections;
      if (tags != null) {
        guild_connections = tags.guild_connections;
      }
      const tmp9 = closure_8();
      let tmp11 = !setting;
      const PressableHighlight = tmp(5909).PressableHighlight;
      if (setting) {
        tmp11 = disableInteraction;
      }
      const obj3 = {
        disabled: tmp11,
        style: tmp9.container,
        onPress: function handlePress() {
          const obj = ClipboardUtils;
          obj.copy(role.id);
          const obj2 = ToastUtils;
          obj2.roleIdCopied(combined);
        },
        accessible: false,
        children: closure_7(View, obj4),
      };
      obj4 = { style: tmp9.pill, children: items1 };
      if (undefined !== guild_connections) {
        const obj5 = {
          style: tmp9.verifiedContainer,
          roleId: role.id,
          guildId,
          roleColor: color,
          size: 14,
          displayRoleIcon: false,
        };
        const tmp16 = combined(6702);
        if (guildId == null) {
          guildId = closure_4;
        }
        tmp10Result = closure_6(tmp16, obj5);
      } else {
        let obj7;
        const items = [tmp9.bubble];
        if (null != color) {
          obj7 = { backgroundColor: color };
          const obj6 = { backgroundColor: color };
        } else {
          obj7 = {};
        }
        const obj8 = { style: items };
        items[1] = obj7;
        tmp10Result = closure_6(View, obj8);
      }
      items1 = [tmp10Result, ,];
      let tmp10Result2 = null;
      if (null != roleIconProps) {
        const obj9 = { style: tmp9.roleIcon, children: closure_6(tmp19, obj10) };
        obj10 = {};
        tmp19 = combined(6704);
        const merged = Object.assign(roleIconProps);
        tmp10Result2 = closure_6(View, obj9);
      }
      items1[1] = tmp10Result2;
      items1[2] = closure_6(role(4886).Text, {
        variant: "text-xs/semibold",
        color: "interactive-text-active",
        children: name,
      });
      return closure_6(PressableHighlight, obj3);
    };
size = size_mod;
const result = size.fileFinishedImporting("components_native/common/RolePill.tsx");

export default tmp6;
