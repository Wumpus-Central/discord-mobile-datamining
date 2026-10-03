// discord_app/components_native/common/RolePill.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../modules/toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import VerifiedRoleIconDefault from "../../modules/connections/native/VerifiedRoleIcon.tsx";
import RoleIconDefault from "../../modules/roles/native/RoleIcon.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, MAX_VISUAL_ROLE_LENGTH: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { marginRight: 4, marginBottom: 4, borderRadius: nativeDefault.radii.xs },
  pill: null,
  bubble: null,
  verifiedContainer: null,
  roleIcon: null,
};
let obj3 = { marginRight: 4, marginBottom: 4, borderRadius: nativeDefault.radii.xs };
obj2.pill = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let size = {
  marginRight: 8,
  borderRadius: nativeDefault.radii.sm,
  height: 12,
  width: 12,
  backgroundColor: nativeDefault.colors.ICON_MUTED,
};
obj2.bubble = size;
const size1 = { marginRight: 8, borderRadius: nativeDefault.radii.sm, height: 12, width: 12 };
obj2.verifiedContainer = size1;
obj2.roleIcon = { paddingRight: 4 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
size = fn(2);
const result = size.fileFinishedImporting("components_native/common/RolePill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (role) => {
      const cResult = verifiedContainer(576).c(30);
      verifiedContainer = role.role;
      ({ guildId, color, disableInteraction } = role);
      const DeveloperMode = verifiedContainer(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      if (cResult[0] === guildId) {
        if (cResult[1] === verifiedContainer.id) {
          let tmp5 = cResult[2];
        }
        const roleIconProps = tmp(6685).useRoleIconProps(tmp5);
        if (cResult[3] !== verifiedContainer.name) {
          let name = verifiedContainer.name;
          importDefault = name;
          if (verifiedContainer.name.length > closure_5) {
            const name1 = verifiedContainer.name;
            const _HermesInternal = HermesInternal;
            const combined = "" + name1.slice(0, tmp8) + "...";
            importDefault = combined;
            name = combined;
          }
          cResult[3] = verifiedContainer.name;
          cResult[4] = name;
        } else {
          importDefault = cResult[4];
        }
        if (color == null) {
          color = verifiedContainer.colorString;
        }
        const tags = verifiedContainer.tags;
        if (tags != null) {
          const guild_connections = tags.guild_connections;
        }
        if (cResult[5] === tmp7) {
          if (cResult[6] === verifiedContainer.id) {
            let tmp12 = cResult[7];
          }
          const tmp14 = closure_8();
          let tmp15 = !setting;
          if (setting) {
            tmp15 = disableInteraction;
          }
          if (cResult[8] === color) {
            if (cResult[9] === guildId) {
              if (cResult[10] === verifiedContainer.id) {
                if (cResult[11] === tmp14.bubble) {
                  if (cResult[12] === tmp14.verifiedContainer) {
                    if (cResult[13] === tmp16) {
                      if (cResult[15] === roleIconProps) {
                        if (cResult[16] === tmp14.roleIcon) {
                          let tmp26 = cResult[17];
                        }
                        if (cResult[18] !== tmp7) {
                          const obj2 = {
                            variant: "text-xs/semibold",
                            color: "interactive-text-active",
                            children: tmp7,
                          };
                          const tmp37 = closure_6(tmp(4886).Text, obj2);
                          cResult[18] = tmp7;
                          cResult[19] = tmp37;
                          let tmp35 = tmp37;
                        } else {
                          tmp35 = cResult[19];
                        }
                        if (cResult[20] === tmp14.pill) {
                          if (cResult[21] === tmp17) {
                            if (cResult[22] === tmp26) {
                              if (cResult[23] === tmp35) {
                                let tmp38 = cResult[24];
                              }
                              if (cResult[25] === tmp12) {
                                if (cResult[26] === tmp14.container) {
                                  if (cResult[27] === tmp15) {
                                    if (cResult[28] === tmp38) {
                                      let tmp42 = cResult[29];
                                    }
                                    return tmp42;
                                  }
                                }
                              }
                              const obj3 = {
                                disabled: tmp15,
                                style: tmp14.container,
                                onPress: tmp12,
                                accessible: false,
                                children: tmp38,
                              };
                              const tmp44 = closure_6(tmp(5909).PressableHighlight, obj3);
                              cResult[25] = tmp12;
                              cResult[26] = tmp14.container;
                              cResult[27] = tmp15;
                              cResult[28] = tmp38;
                              cResult[29] = tmp44;
                              tmp42 = tmp44;
                            }
                          }
                        }
                        const obj4 = { style: tmp14.pill, children: null };
                        const items = [tmp17, tmp26, tmp35];
                        obj4.children = items;
                        const tmp41 = closure_7(View, obj4);
                        cResult[20] = tmp14.pill;
                        cResult[21] = tmp17;
                        cResult[22] = tmp26;
                        cResult[23] = tmp35;
                        cResult[24] = tmp41;
                        tmp38 = tmp41;
                      }
                      let tmp27 = null;
                      if (null != roleIconProps) {
                        const obj5 = { style: tmp14.roleIcon, children: null };
                        const obj6 = {};
                        const merged = Object.assign(roleIconProps);
                        obj5.children = closure_6(RoleIconDefault, obj6);
                        tmp27 = closure_6(View, obj5);
                      }
                      cResult[15] = roleIconProps;
                      cResult[16] = tmp14.roleIcon;
                      cResult[17] = tmp27;
                      tmp26 = tmp27;
                    }
                  }
                }
              }
            }
          }
          if (undefined !== guild_connections) {
            const obj7 = {
              style: tmp14.verifiedContainer,
              roleId: verifiedContainer.id,
              guildId: null,
              roleColor: null,
              size: 14,
              displayRoleIcon: false,
            };
            let tmp23 = guildId;
            if (guildId == null) {
              tmp23 = closure_4;
            }
            obj7.guildId = tmp23;
            obj7.roleColor = color;
            let tmp18Result = closure_6(VerifiedRoleIconDefault, obj7);
          } else {
            const items1 = [tmp14.bubble];
            if (null != color) {
              const obj8 = { backgroundColor: color };
              let obj9 = obj8;
            } else {
              obj9 = {};
            }
            const obj10 = { style: null };
            items1[1] = obj9;
            obj10.style = items1;
            tmp18Result = closure_6(View, obj10);
          }
          cResult[8] = color;
          cResult[9] = guildId;
          cResult[10] = verifiedContainer.id;
          ({ bubble: tmp3[11], verifiedContainer } = tmp14);
          cResult[12] = verifiedContainer;
          cResult[13] = undefined !== guild_connections;
          cResult[14] = tmp18Result;
        }
        const fn = function f() {
          ClipboardUtils.copy(verifiedContainer.id);
          ToastUtils.roleIdCopied(closure_1);
        };
        cResult[5] = tmp7;
        cResult[6] = verifiedContainer.id;
        cResult[7] = fn;
        tmp12 = fn;
        const tmpResult = tmp(6685);
      }
      const obj11 = { guildId, roleId: verifiedContainer.id, size: 12 };
      cResult[0] = guildId;
      cResult[1] = verifiedContainer.id;
      cResult[2] = obj11;
      tmp5 = obj11;
      let obj = verifiedContainer(576);
    }
  : (role) => {
      role = role.role;
      ({ guildId, color } = role);
      const DeveloperMode = role(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      const roleIconProps = role(6685).useRoleIconProps({ guildId, roleId: role.id, size: 12 });
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
      let disableInteraction = !setting;
      if (setting) {
        disableInteraction = role.disableInteraction;
      }
      const obj3 = {
        disabled: disableInteraction,
        style: tmp9.container,
        onPress: function handlePress() {
          ClipboardUtils.copy(role.id);
          ToastUtils.roleIdCopied(combined);
        },
        accessible: false,
        children: null,
      };
      const obj4 = { style: tmp9.pill, children: null };
      if (undefined !== guild_connections) {
        const obj5 = {
          style: tmp9.verifiedContainer,
          roleId: role.id,
          guildId: null,
          roleColor: null,
          size: 14,
          displayRoleIcon: false,
        };
        if (guildId == null) {
          guildId = closure_4;
        }
        obj5.guildId = guildId;
        obj5.roleColor = color;
        let tmp10Result = closure_6(combined(6702), obj5);
        const tmp15 = combined(6702);
      } else {
        const items = [tmp9.bubble];
        if (null != color) {
          const obj6 = { backgroundColor: color };
          let obj7 = obj6;
        } else {
          obj7 = {};
        }
        const obj8 = { style: null };
        items[1] = obj7;
        obj8.style = items;
        tmp10Result = closure_6(View, obj8);
      }
      const items1 = [tmp10Result, ,];
      let tmp10Result2 = null;
      if (null != roleIconProps) {
        const obj9 = { style: tmp9.roleIcon, children: null };
        const obj10 = {};
        const merged = Object.assign(roleIconProps);
        obj9.children = closure_6(combined(6704), obj10);
        tmp10Result2 = closure_6(View, obj9);
        const tmp18 = combined(6704);
      }
      items1[1] = tmp10Result2;
      items1[2] = closure_6(role(4886).Text, {
        variant: "text-xs/semibold",
        color: "interactive-text-active",
        children: name,
      });
      obj4.children = items1;
      obj3.children = closure_7(View, obj4);
      return closure_6(role(5909).PressableHighlight, obj3);
    };
