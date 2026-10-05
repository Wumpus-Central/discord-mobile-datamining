// === Module 6684: UserProfileRolesCard ===

// Module 6684 (UserProfileRolesCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import Text_Text from "Text/Text" /* 4886 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import VerifiedRoleIconDefault from "VerifiedRoleIcon" /* 6702 */;
import RoleIconDefault from "RoleIcon" /* 6704 */;
import UserProfileRoleUtils from "UserProfileRoleUtils" /* 6705 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ DEFAULT_ROLE_COLOR_HEX: closure_7, MAX_VISUAL_ROLE_LENGTH: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let c12 = 12;
const createStyles = fn(4890);
let obj2 = { roleContainer: { flexDirection: "row", gap: 8, flexWrap: "wrap" }, role: { flexDirection: "row", alignItems: "center", columnGap: 4, padding: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm }, roleDot: null };
let size = { borderRadius: nativeDefault.radii.round, height: 12, width: 12 };
obj2.roleDot = size;
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  const cResult = c.c(5);
  color = color.color;
  const tmp2 = closure_13();
  if (color == null) {
    color = React5;
  }
  if (cResult[0] !== color) {
    const obj2 = { backgroundColor: color };
    cResult[0] = color;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.roleDot) {
    if (cResult[3] === tmp3) {
      let tmp4 = cResult[4];
    }
    return tmp4;
  }
  const obj3 = { style: null };
  const items = [tmp2.roleDot, tmp3];
  obj3.style = items;
  const tmp5 = options(View, obj3);
  cResult[2] = tmp2.roleDot;
  cResult[3] = tmp3;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : ((color) => {
  color = color.color;
  const style = [closure_13().roleDot, ];
  if (color == null) {
    color = React5;
  }
  style[1] = { backgroundColor: color };
  return options(View, { style });
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((role) => {
  let tmp2 = dependencyMap;
  const cResult = role(576).c(30);
  role = role.role;
  const guildId = role.guildId;
  let colorString = role.color;
  let role2 = closure_13();
  if (cResult[0] !== role.name) {
    if (role.name.length <= closure_8) {
      let name = role.name;
    } else {
      const name1 = role.name;
      const _HermesInternal = HermesInternal;
      name = "" + name1.slice(0, tmp5) + "...";
    }
    cResult[0] = role.name;
    cResult[1] = name;
  } else {
    dependencyMap = tmp4;
    if (colorString == null) {
      colorString = role.colorString;
    }
    if (cResult[2] === guildId) {
      if (cResult[3] === role.id) {
        let tmp9 = cResult[4];
      }
      const roleIconProps = tmp(6685).useRoleIconProps(tmp9);
      const tags = role.tags;
      let guild_connections;
      if (tags != null) {
        guild_connections = tags.guild_connections;
      }
      closure_5 = tmp13;
      const DeveloperMode = tmp(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "RoleItem" };
        const obj3 = { autoTrackExposure: false };
        cResult[5] = obj2;
        cResult[6] = obj3;
      }
      guildId(6687);
      if (cResult[7] === tmp4) {
        if (cResult[8] === role.id) {
          let tmp20 = cResult[9];
        }
        if (cResult[10] === tmp4) {
          if (cResult[11] === role) {
            if (cResult[12] === roleIconProps) {
              let tmp21 = cResult[13];
            }
            class T {
              constructor() {
                obj = { label: null, onPress: null };
                tmp = role;
                tmp2 = closure_2;
                intl = role(closure_2[15]).intl;
                obj.label = intl.string(role(closure_2[15]).t.sMsaLg);
                obj.onPress = function onPress() { ... };
                items = [];
                items[0] = obj;
                if (null != closure_4) {
                  tmpResult = tmp(tmp2[16]);
                  tmp5 = customIconSrc;
                  roleIconData = tmpResult.getRoleIconData(customIconSrc);
                  if (roleIconData == null) {
                    roleIconData = {};
                  }
                  customIconSrc = roleIconData.customIconSrc;
                  if (null != customIconSrc) {
                    obj1 = { label: null, onPress: null };
                    intl2 = tmp(tmp2[15]).intl;
                    obj1.label = intl2.string(tmp(tmp2[15]).t["8xHmxo"]);
                    obj1.onPress = function onPress() { ... };
                    arr1 = items.push(obj1);
                  }
                }
                tmpResult1 = tmp(tmp2[17]);
                result = tmpResult1.showSimpleActionSheet({ key: "RoleItem", options: items, hasIcons: false });
                return;
              }
            }
            if (cResult[14] === guildId) {
              if (cResult[15] === tmp4) {
                if (cResult[16] === role.colorString) {
                  if (cResult[17] === role.id) {
                    if (cResult[18] === colorString) {
                      if (cResult[19] === roleIconProps) {
                        if (cResult[20] === tmp13) {
                          let tmp23 = cResult[21];
                        }
                        if (cResult[22] === setting) {
                          if (cResult[23] === tmp22) {
                            if (cResult[24] === tmp21) {
                              if (cResult[25] === tmp20) {
                                if (cResult[26] === tmp4) {
                                  if (cResult[27] === tmp23) {
                                    if (cResult[28] === role2.role) {
                                      return cResult[29];
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        class T {
                          constructor() {
                            obj = { label: null, onPress: null };
                            tmp = role;
                            tmp2 = closure_2;
                            intl = role(closure_2[15]).intl;
                            obj.label = intl.string(role(closure_2[15]).t.sMsaLg);
                            obj.onPress = function onPress() { ... };
                            items = [];
                            items[0] = obj;
                            if (null != closure_4) {
                              tmpResult = tmp(tmp2[16]);
                              tmp5 = customIconSrc;
                              roleIconData = tmpResult.getRoleIconData(customIconSrc);
                              if (roleIconData == null) {
                                roleIconData = {};
                              }
                              customIconSrc = roleIconData.customIconSrc;
                              if (null != customIconSrc) {
                                obj1 = { label: null, onPress: null };
                                intl2 = tmp(tmp2[15]).intl;
                                obj1.label = intl2.string(tmp(tmp2[15]).t["8xHmxo"]);
                                obj1.onPress = function onPress() { ... };
                                arr1 = items.push(obj1);
                              }
                            }
                            tmpResult1 = tmp(tmp2[17]);
                            result = tmpResult1.showSimpleActionSheet({ key: "RoleItem", options: items, hasIcons: false });
                            return;
                          }
                        }
                        if (setting) {
                          let obj4 = { onPress: tmp20, onLongPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, style: null, children: null };
                          class T {
                            constructor() {
                              obj = { label: null, onPress: null };
                              tmp = role;
                              tmp2 = closure_2;
                              intl = role(closure_2[15]).intl;
                              obj.label = intl.string(role(closure_2[15]).t.sMsaLg);
                              obj.onPress = function onPress() { ... };
                              items = [];
                              items[0] = obj;
                              if (null != closure_4) {
                                tmpResult = tmp(tmp2[16]);
                                tmp5 = customIconSrc;
                                roleIconData = tmpResult.getRoleIconData(customIconSrc);
                                if (roleIconData == null) {
                                  roleIconData = {};
                                }
                                customIconSrc = roleIconData.customIconSrc;
                                if (null != customIconSrc) {
                                  obj1 = { label: null, onPress: null };
                                  intl2 = tmp(tmp2[15]).intl;
                                  obj1.label = intl2.string(tmp(tmp2[15]).t["8xHmxo"]);
                                  obj1.onPress = function onPress() { ... };
                                  arr1 = items.push(obj1);
                                }
                              }
                              tmpResult1 = tmp(tmp2[17]);
                              result = tmpResult1.showSimpleActionSheet({ key: "RoleItem", options: items, hasIcons: false });
                              return;
                            }
                          }
                          class H {
                            constructor() {
                              tmp3 = jsx;
                              tmp = jsxs;
                              tmp2 = Fragment;
                              if (closure_5) {
                                tmp9 = closure_1;
                                tmp10 = closure_2;
                                obj1 = { roleId: null, guildId: null, roleColor: null, size: null, displayRoleIcon: false };
                                obj1.roleId = role.id;
                                tmp12 = guildId;
                                obj1.guildId = guildId;
                                tmp13 = null;
                                colorString = undefined;
                                tmp11 = closure_1(closure_2[18]);
                                if (role != null) {
                                  colorString = role.colorString;
                                }
                                obj1.roleColor = colorString;
                                tmp15 = c12;
                                obj1.size = c12;
                                tmp3Result = tmp3(tmp11, obj1);
                                tmp8 = tmp3;
                              } else {
                                tmp5 = colorString;
                                tmp6 = null;
                                tmp4 = f38717;
                                obj = { color: null };
                                obj.color = tmp5;
                                tmp3Result = tmp3(tmp4, obj);
                                tmp8 = tmp3;
                              }
                              items = [, , ];
                              items[0] = tmp3Result;
                              tmp16 = closure_2;
                              obj5 = { variant: "text-xs/medium", children: closure_2 };
                              items[1] = tmp8(closure_0(closure_2[19]).Text, obj5);
                              tmp17 = closure_4;
                              tmp8Result = null;
                              if (null != closure_4) {
                                tmp19 = closure_1;
                                obj6 = {};
                                tmp21 = obj6;
                                tmp22 = tmp17;
                                tmp20 = closure_1(tmp16[20]);
                                merged = Object.assign(tmp17);
                                tmp8Result = tmp8(tmp20, obj6);
                              }
                              items[2] = tmp8Result;
                              return tmp(tmp2, { children: items });
                            }
                          }
                          obj4.onLongPress = tmp27;
                          obj4.accessibilityLabel = tmp4;
                          let intl = tmp(1126).intl;
                          obj4.accessibilityHint = intl.string(tmp(1126).t.sMsaLg);
                          obj4.style = role2.role;
                          tmp2 = tmp23();
                          obj4.children = tmp2;
                          const tmp24Result = tmp24(tmp(5909).PressableHighlight, obj4);
                        } else {
                          class T {
                            constructor() {
                              obj = { label: null, onPress: null };
                              tmp = role;
                              tmp2 = closure_2;
                              intl = role(closure_2[15]).intl;
                              obj.label = intl.string(role(closure_2[15]).t.sMsaLg);
                              obj.onPress = function onPress() { ... };
                              items = [];
                              items[0] = obj;
                              if (null != closure_4) {
                                tmpResult = tmp(tmp2[16]);
                                tmp5 = customIconSrc;
                                roleIconData = tmpResult.getRoleIconData(customIconSrc);
                                if (roleIconData == null) {
                                  roleIconData = {};
                                }
                                customIconSrc = roleIconData.customIconSrc;
                                if (null != customIconSrc) {
                                  obj1 = { label: null, onPress: null };
                                  intl2 = tmp(tmp2[15]).intl;
                                  obj1.label = intl2.string(tmp(tmp2[15]).t["8xHmxo"]);
                                  obj1.onPress = function onPress() { ... };
                                  arr1 = items.push(obj1);
                                }
                              }
                              tmpResult1 = tmp(tmp2[17]);
                              result = tmpResult1.showSimpleActionSheet({ key: "RoleItem", options: items, hasIcons: false });
                              return;
                            }
                          }
                          { style: null, children: null }.children = tmp23();
                          class H {
                            constructor() {
                              tmp3 = jsx;
                              tmp = jsxs;
                              tmp2 = Fragment;
                              if (closure_5) {
                                tmp9 = closure_1;
                                tmp10 = closure_2;
                                obj1 = { roleId: null, guildId: null, roleColor: null, size: null, displayRoleIcon: false };
                                obj1.roleId = role.id;
                                tmp12 = guildId;
                                obj1.guildId = guildId;
                                tmp13 = null;
                                colorString = undefined;
                                tmp11 = closure_1(closure_2[18]);
                                if (role != null) {
                                  colorString = role.colorString;
                                }
                                obj1.roleColor = colorString;
                                tmp15 = c12;
                                obj1.size = c12;
                                tmp3Result = tmp3(tmp11, obj1);
                                tmp8 = tmp3;
                              } else {
                                tmp5 = colorString;
                                tmp6 = null;
                                tmp4 = f38717;
                                obj = { color: null };
                                obj.color = tmp5;
                                tmp3Result = tmp3(tmp4, obj);
                                tmp8 = tmp3;
                              }
                              items = [, , ];
                              items[0] = tmp3Result;
                              tmp16 = closure_2;
                              obj5 = { variant: "text-xs/medium", children: closure_2 };
                              items[1] = tmp8(closure_0(closure_2[19]).Text, obj5);
                              tmp17 = closure_4;
                              tmp8Result = null;
                              if (null != closure_4) {
                                tmp19 = closure_1;
                                obj6 = {};
                                tmp21 = obj6;
                                tmp22 = tmp17;
                                tmp20 = closure_1(tmp16[20]);
                                merged = Object.assign(tmp17);
                                tmp8Result = tmp8(tmp20, obj6);
                              }
                              items[2] = tmp8Result;
                              return tmp(tmp2, { children: items });
                            }
                          }
                          const obj5 = { style: null, children: null };
                        }
                        class H {
                          constructor() {
                            tmp3 = jsx;
                            tmp = jsxs;
                            tmp2 = Fragment;
                            if (closure_5) {
                              tmp9 = closure_1;
                              tmp10 = closure_2;
                              obj1 = { roleId: null, guildId: null, roleColor: null, size: null, displayRoleIcon: false };
                              obj1.roleId = role.id;
                              tmp12 = guildId;
                              obj1.guildId = guildId;
                              tmp13 = null;
                              colorString = undefined;
                              tmp11 = closure_1(closure_2[18]);
                              if (role != null) {
                                colorString = role.colorString;
                              }
                              obj1.roleColor = colorString;
                              tmp15 = c12;
                              obj1.size = c12;
                              tmp3Result = tmp3(tmp11, obj1);
                              tmp8 = tmp3;
                            } else {
                              tmp5 = colorString;
                              tmp6 = null;
                              tmp4 = f38717;
                              obj = { color: null };
                              obj.color = tmp5;
                              tmp3Result = tmp3(tmp4, obj);
                              tmp8 = tmp3;
                            }
                            items = [, , ];
                            items[0] = tmp3Result;
                            tmp16 = closure_2;
                            obj5 = { variant: "text-xs/medium", children: closure_2 };
                            items[1] = tmp8(closure_0(closure_2[19]).Text, obj5);
                            tmp17 = closure_4;
                            tmp8Result = null;
                            if (null != closure_4) {
                              tmp19 = closure_1;
                              obj6 = {};
                              tmp21 = obj6;
                              tmp22 = tmp17;
                              tmp20 = closure_1(tmp16[20]);
                              merged = Object.assign(tmp17);
                              tmp8Result = tmp8(tmp20, obj6);
                            }
                            items[2] = tmp8Result;
                            return tmp(tmp2, { children: items });
                          }
                        }
                        cResult[22] = setting;
                        cResult[23] = tmp22;
                        cResult[24] = tmp21;
                        cResult[25] = tmp20;
                        cResult[26] = tmp4;
                        cResult[27] = tmp23;
                        role2 = role2.role;
                        cResult[28] = role2;
                        class D {
                          constructor() {
                            obj = closure_0(closure_2[13]);
                            copyResult = obj.copy(role.id);
                            obj2 = closure_0(closure_2[14]);
                            roleIdCopiedResult = obj2.roleIdCopied(closure_2);
                            return;
                          }
                        }
                        cResult[29] = tmp24Result;
                      }
                    }
                  }
                }
              }
            }
            class H {
              constructor() {
                tmp3 = jsx;
                tmp = jsxs;
                tmp2 = Fragment;
                if (closure_5) {
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj1 = { roleId: null, guildId: null, roleColor: null, size: null, displayRoleIcon: false };
                  obj1.roleId = role.id;
                  tmp12 = guildId;
                  obj1.guildId = guildId;
                  tmp13 = null;
                  colorString = undefined;
                  tmp11 = closure_1(closure_2[18]);
                  if (role != null) {
                    colorString = role.colorString;
                  }
                  obj1.roleColor = colorString;
                  tmp15 = c12;
                  obj1.size = c12;
                  tmp3Result = tmp3(tmp11, obj1);
                  tmp8 = tmp3;
                } else {
                  tmp5 = colorString;
                  tmp6 = null;
                  tmp4 = f38717;
                  obj = { color: null };
                  obj.color = tmp5;
                  tmp3Result = tmp3(tmp4, obj);
                  tmp8 = tmp3;
                }
                items = [, , ];
                items[0] = tmp3Result;
                tmp16 = closure_2;
                obj5 = { variant: "text-xs/medium", children: closure_2 };
                items[1] = tmp8(closure_0(closure_2[19]).Text, obj5);
                tmp17 = closure_4;
                tmp8Result = null;
                if (null != closure_4) {
                  tmp19 = closure_1;
                  obj6 = {};
                  tmp21 = obj6;
                  tmp22 = tmp17;
                  tmp20 = closure_1(tmp16[20]);
                  merged = Object.assign(tmp17);
                  tmp8Result = tmp8(tmp20, obj6);
                }
                items[2] = tmp8Result;
                return tmp(tmp2, { children: items });
              }
            }
            cResult[14] = guildId;
            cResult[15] = tmp4;
            cResult[16] = role.colorString;
            cResult[17] = role.id;
            cResult[18] = colorString;
            cResult[19] = roleIconProps;
            cResult[20] = tmp13;
            class D {
              constructor() {
                obj = closure_0(closure_2[13]);
                copyResult = obj.copy(role.id);
                obj2 = closure_0(closure_2[14]);
                roleIdCopiedResult = obj2.roleIdCopied(closure_2);
                return;
              }
            }
            cResult[21] = H;
            tmp23 = H;
          }
        }
        class T {
          constructor() {
            obj = { label: null, onPress: null };
            tmp = role;
            tmp2 = closure_2;
            intl = role(closure_2[15]).intl;
            obj.label = intl.string(role(closure_2[15]).t.sMsaLg);
            obj.onPress = function onPress() { ... };
            items = [];
            items[0] = obj;
            if (null != closure_4) {
              tmpResult = tmp(tmp2[16]);
              tmp5 = customIconSrc;
              roleIconData = tmpResult.getRoleIconData(customIconSrc);
              if (roleIconData == null) {
                roleIconData = {};
              }
              customIconSrc = roleIconData.customIconSrc;
              if (null != customIconSrc) {
                obj1 = { label: null, onPress: null };
                intl2 = tmp(tmp2[15]).intl;
                obj1.label = intl2.string(tmp(tmp2[15]).t["8xHmxo"]);
                obj1.onPress = function onPress() { ... };
                arr1 = items.push(obj1);
              }
            }
            tmpResult1 = tmp(tmp2[17]);
            result = tmpResult1.showSimpleActionSheet({ key: "RoleItem", options: items, hasIcons: false });
            return;
          }
        }
        cResult[11] = role;
        cResult[12] = roleIconProps;
        cResult[13] = T;
        tmp21 = T;
      }
      class D {
        constructor() {
          obj = closure_0(closure_2[13]);
          copyResult = obj.copy(role.id);
          obj2 = closure_0(closure_2[14]);
          roleIdCopiedResult = obj2.roleIdCopied(closure_2);
          return;
        }
      }
      cResult[7] = tmp4;
      cResult[8] = role.id;
      cResult[9] = D;
      tmp20 = D;
      let tmpResult = tmp(6685);
    }
    const obj6 = { guildId, roleId: role.id, size };
    cResult[2] = guildId;
    cResult[3] = role.id;
    cResult[4] = obj6;
    tmp9 = obj6;
  }
  let obj = role(576);
}) : ((role) => {
  role = role.role;
  const guildId = role.guildId;
  let name;
  let colorString;
  let roleIconProps;
  closure_5 = undefined;
  const tmp = closure_13();
  if (role.name.length <= closure_8) {
    name = role.name;
  } else {
    const name1 = role.name;
    const _HermesInternal = HermesInternal;
    name = "" + name1.slice(0, tmp2) + "...";
  }
  if (colorString == null) {
    colorString = role.colorString;
  }
  roleIconProps = role(name[10]).useRoleIconProps({ guildId, roleId: role.id, size });
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  function renderContent() {
    if (closure_5) {
      const obj2 = { roleId: role.id, guildId, roleColor: null, size: null, displayRoleIcon: false };
      colorString = undefined;
      if (role != null) {
        colorString = role.colorString;
      }
      obj2.roleColor = colorString;
      obj2.size = size;
      let tmp3Result = options(VerifiedRoleIconDefault, obj2);
      let tmp8 = options;
    } else {
      const obj = { color: colorString };
      tmp3Result = options(closure_14, obj);
      tmp8 = options;
    }
    const children = [tmp3Result, tmp8(Text_Text.Text, { variant: "text-xs/medium", children: name }), ];
    let tmp8Result = null;
    if (null != roleIconProps) {
      const obj4 = {};
      const merged = Object.assign(roleIconProps);
      tmp8Result = tmp8(RoleIconDefault, obj4);
    }
    children[2] = tmp8Result;
    return closure_2_11(v65535, { children });
  }
  closure_5 = undefined !== guild_connections;
  const DeveloperMode = tmp4(tmp5[11]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = role(name[10]);
  let obj2 = { guildId, roleId: role.id, size };
  let items = [role.id, name];
  const items1 = [role, name, roleIconProps];
  const callback = colorString.useCallback(() => {
    ClipboardUtils.copy(role.id);
    ToastUtils.roleIdCopied(name);
  }, items);
  if (setting) {
    let obj4 = { onPress: callback, onLongPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, style: null, children: null };
    let tmp14;
    if (setting) {
      if (obj3.useExperiment({ location: "RoleItem" }, { autoTrackExposure: false }).tidaWebformEnabled) {
        tmp14 = tmp10;
      }
    }
    obj4.onLongPress = tmp14;
    obj4.accessibilityLabel = name;
    let intl = tmp4(tmp5[15]).intl;
    obj4.accessibilityHint = intl.string(tmp4(tmp5[15]).t.sMsaLg);
    obj4.style = tmp.role;
    obj4.children = renderContent();
    let tmp11Result = closure_9(tmp4(tmp5[21]).PressableHighlight, obj4);
  } else {
    const obj5 = { style: tmp.role, children: renderContent() };
    tmp11Result = closure_9(roleIconProps, obj5);
  }
  return tmp11Result;
});
let closure_15 = tmp4;
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildMemberRoleIds) => {
  const cResult = guildMemberRoleIds(576).c(13);
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === guildMemberRoleIds) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStoresArray = tmp(504).useStateFromStoresArray(first, tmp7, tmp8);
    if (0 === stateFromStoresArray.length) {
      return null;
    } else {
      if (cResult[5] === guildId) {
        if (cResult[6] === stateFromStoresArray) {
          if (cResult[10] === tmp4.roleContainer) {
            if (cResult[11] === tmp9) {
              let tmp13 = cResult[12];
            }
            return tmp13;
          }
          const obj2 = { style: tmp18, children: cResult[7] };
          const tmp16 = closure_9(View, obj2);
          cResult[10] = tmp4.roleContainer;
          cResult[11] = cResult[7];
          cResult[12] = tmp16;
          tmp13 = tmp16;
        }
      }
      if (cResult[8] !== guildId) {
        class C {
          constructor(arg0) {
            obj = { role: guildMemberRoleIds, guildId };
            return jsx(f38719, obj, guildMemberRoleIds.id);
          }
        }
        cResult[8] = guildId;
        cResult[9] = C;
      } else {
        class C {
          constructor(arg0) {
            obj = { role: guildMemberRoleIds, guildId };
            return jsx(f38719, obj, guildMemberRoleIds.id);
          }
        }
      }
      const mapped = stateFromStoresArray.map(C);
      cResult[5] = guildId;
      cResult[6] = stateFromStoresArray;
      cResult[7] = mapped;
    }
    const tmpResult = tmp(504);
  }
  const fn = function s() {
    const manyRoles = GuildRoleStore.getManyRoles(guildId, guildMemberRoleIds);
    return manyRoles.sort(UserProfileRoleUtils.sortRolesByVerification);
  };
  const items1 = [guildMemberRoleIds, guildId];
  cResult[1] = guildId;
  cResult[2] = guildMemberRoleIds;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj = guildMemberRoleIds(576);
  tmp = guildMemberRoleIds;
}) : ((guildMemberRoleIds) => {
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  const tmp = closure_13();
  const items = [GuildRoleStore];
  const items1 = [guildMemberRoleIds, guildId];
  const stateFromStoresArray = guildMemberRoleIds(504).useStateFromStoresArray(items, () => {
    const manyRoles = GuildRoleStore.getManyRoles(guildId, guildMemberRoleIds);
    return manyRoles.sort(UserProfileRoleUtils.sortRolesByVerification);
  }, items1);
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { style: tmp.roleContainer, children: stateFromStoresArray.map((role) => options(closure_15, { role, guildId }, role.id)) };
    tmp2 = closure_9(View, obj2);
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", columnGap: 4, padding: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let tmp2 = dependencyMap;
  const cResult = userId(576).c(14);
  userId = userId.userId;
  const guildId = userId.guildId;
  const style = userId.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === userId) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
    let roles;
    if (stateFromStores != null) {
      roles = stateFromStores.roles;
    }
    if (cResult[5] !== roles) {
      let roles1;
      if (stateFromStores != null) {
        roles1 = stateFromStores.roles;
      }
      if (roles1 == null) {
        roles1 = [];
      }
      let roles2;
      if (stateFromStores != null) {
        roles2 = stateFromStores.roles;
      }
      cResult[5] = roles2;
      cResult[6] = roles1;
      let arr3 = roles1;
    } else {
      arr3 = cResult[6];
    }
    if (0 === arr3.length) {
      return null;
    } else {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["LPJmL/"]);
        cResult[7] = stringResult;
        let tmp13 = stringResult;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === guildId) {
        if (cResult[9] === arr3) {
          let tmp15 = cResult[10];
        }
        if (cResult[11] === style) {
        }
        const obj2 = { title: tmp13, style, children: tmp15 };
        tmp2 = closure_9(guildId(6706), obj2);
        cResult[11] = style;
        cResult[12] = tmp15;
        cResult[13] = tmp2;
      }
      const obj3 = { guildId, guildMemberRoleIds: arr3 };
      const tmp18 = closure_9(closure_16, obj3);
      cResult[8] = guildId;
      cResult[9] = arr3;
      cResult[10] = tmp18;
      tmp15 = tmp18;
    }
    const tmpResult = tmp(504);
  }
  const fn = function n() {
    return GuildMemberStore.getMember(guildId, userId);
  };
  const items1 = [userId, guildId];
  cResult[1] = guildId;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = userId(576);
}) : ((userId) => {
  userId = userId.userId;
  const guildId = userId.guildId;
  const items = [GuildMemberStore];
  const items1 = [userId, guildId];
  const stateFromStores = userId(504).useStateFromStores(items, () => GuildMemberStore.getMember(guildId, userId), items1);
  let roles;
  if (stateFromStores != null) {
    roles = stateFromStores.roles;
  }
  if (roles == null) {
    roles = [];
  }
  let tmp4 = null;
  if (0 !== roles.length) {
    const obj2 = { title: null, style: null, children: null };
    const intl = tmp(1126).intl;
    obj2.title = intl.string(tmp(1126).t["LPJmL/"]);
    obj2.style = userId.style;
    const obj3 = { guildId, guildMemberRoleIds: roles };
    obj2.children = closure_9(closure_16, obj3);
    tmp4 = closure_9(guildId(6706), obj2);
    const tmp7 = guildId(6706);
  }
  return tmp4;
});
export const RoleItem = tmp4;