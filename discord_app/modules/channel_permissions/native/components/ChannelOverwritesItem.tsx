// discord_app/modules/channel_permissions/native/components/ChannelOverwritesItem.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import ChannelPermissionsUtilsAll from "../../ChannelPermissionsUtils.tsx";
import ShieldUserIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import _modDef8622 from "../../../../../_runtime/metro/08622__.js";
import _modDef8623 from "../../../../../_runtime/metro/08623__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
let closure_4 = ["item"];
let closure_5 = ["checked"];
const View = fn(17).View;
const RowType = fn(7489).RowType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let closure_12 = createStyles.createStyles({ nameWrapper: { flexDirection: "row", alignItems: "flex-end", marginRight: 16 }, name: { paddingRight: 4 }, memberName: { flexShrink: 1 }, ownerIcon: { alignSelf: "center" }, roleIcon: { height: 30, width: 30 }, rowRemoveIconDisabled: { opacity: 0.3 } });
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoveIcon(item) {
  const cResult = item(576).c(11);
  item = item.item;
  const channelId = item.channelId;
  const onRemove = item.onRemove;
  if (null == channelId) {
    return null;
  } else {
    const _Symbol = Symbol;
    const disabled = item.disabled;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.N86XcP);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === channelId) {
      if (cResult[2] === item) {
        if (cResult[3] === onRemove) {
          let tmp7 = cResult[4];
        }
        let prop;
        if (item.disabled) {
          prop = tmp4.rowRemoveIconDisabled;
        }
        if (cResult[5] !== prop) {
          let obj2 = { style: prop };
          cResult[5] = prop;
          class R {
            constructor() {
              if (null != onRemove) {
                tmp2 = item;
                return tmp(item);
              } else {
                tmp3 = item;
                ({ id, name } = item);
                tmp4 = channelId;
                closure_2 = channelId;
                tmp5 = closure_0;
                tmp6 = closure_3;
                obj = closure_0(closure_3[7]);
                obj1 = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
                tmp7 = globalThis;
                _HermesInternal = HermesInternal;
                str = "remove-channel-overwrite-";
                obj1.key = "remove-channel-overwrite-" + id;
                intl = closure_0(closure_3[8]).intl;
                obj1.title = intl.string(closure_0(closure_3[8]).t.GuPYQB);
                intl2 = closure_0(closure_3[8]).intl;
                obj4 = { name: null };
                obj4.name = name;
                obj1.content = intl2.format(closure_0(closure_3[8]).t.xERCnZ, obj4);
                intl3 = closure_0(closure_3[8]).intl;
                obj1.confirmText = intl3.string(closure_0(closure_3[8]).t.fKxYb0);
                obj1.onConfirm = function onConfirm() { ... };
                showConfirmModalResult = obj.showConfirmModal(obj1);
                return;
              }
            }
          }
          let tmp9 = closure_10(tmp(6295).CircleXIcon, obj2);
          const tmp11 = closure_10(tmp(6295).CircleXIcon, obj2);
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === item.disabled) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === tmp9) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
        }
        let obj3 = { disabled: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        class R {
          constructor() {
            if (null != onRemove) {
              tmp2 = item;
              return tmp(item);
            } else {
              tmp3 = item;
              ({ id, name } = item);
              tmp4 = channelId;
              closure_2 = channelId;
              tmp5 = closure_0;
              tmp6 = closure_3;
              obj = closure_0(closure_3[7]);
              obj1 = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
              tmp7 = globalThis;
              _HermesInternal = HermesInternal;
              str = "remove-channel-overwrite-";
              obj1.key = "remove-channel-overwrite-" + id;
              intl = closure_0(closure_3[8]).intl;
              obj1.title = intl.string(closure_0(closure_3[8]).t.GuPYQB);
              intl2 = closure_0(closure_3[8]).intl;
              obj4 = { name: null };
              obj4.name = name;
              obj1.content = intl2.format(closure_0(closure_3[8]).t.xERCnZ, obj4);
              intl3 = closure_0(closure_3[8]).intl;
              obj1.confirmText = intl3.string(closure_0(closure_3[8]).t.fKxYb0);
              obj1.onConfirm = function onConfirm() { ... };
              showConfirmModalResult = obj.showConfirmModal(obj1);
              return;
            }
          }
        }
        obj3.accessibilityLabel = first;
        obj3.onPress = tmp7;
        obj3.children = tmp9;
        const tmp14 = closure_10(tmp(6184).PressableOpacity, obj3);
        cResult[7] = item.disabled;
        cResult[8] = tmp7;
        cResult[9] = tmp9;
        cResult[10] = tmp14;
        tmp12 = tmp14;
      }
    }
    class R {
      constructor() {
        if (null != onRemove) {
          tmp2 = item;
          return tmp(item);
        } else {
          tmp3 = item;
          ({ id, name } = item);
          tmp4 = channelId;
          closure_2 = channelId;
          tmp5 = closure_0;
          tmp6 = closure_3;
          obj = closure_0(closure_3[7]);
          obj1 = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
          tmp7 = globalThis;
          _HermesInternal = HermesInternal;
          str = "remove-channel-overwrite-";
          obj1.key = "remove-channel-overwrite-" + id;
          intl = closure_0(closure_3[8]).intl;
          obj1.title = intl.string(closure_0(closure_3[8]).t.GuPYQB);
          intl2 = closure_0(closure_3[8]).intl;
          obj4 = { name: null };
          obj4.name = name;
          obj1.content = intl2.format(closure_0(closure_3[8]).t.xERCnZ, obj4);
          intl3 = closure_0(closure_3[8]).intl;
          obj1.confirmText = intl3.string(closure_0(closure_3[8]).t.fKxYb0);
          obj1.onConfirm = function onConfirm() { ... };
          showConfirmModalResult = obj.showConfirmModal(obj1);
          return;
        }
      }
    }
    cResult[1] = channelId;
    cResult[2] = item;
    cResult[3] = onRemove;
    cResult[4] = R;
    tmp7 = R;
  }
  let obj = item(576);
}) : (function RemoveIcon(item) {
  item = item.item;
  const channelId = item.channelId;
  const onRemove = item.onRemove;
  let tmp3Result = null;
  if (null != channelId) {
    let obj = { disabled: item.disabled, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    let intl = item(1126).intl;
    obj.accessibilityLabel = intl.string(item(1126).t.N86XcP);
    obj.onPress = function onPress() {
      if (null != onRemove) {
        return tmp(item);
      } else {
        ({ id, name } = item);
        closure_2 = channelId;
        const obj2 = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
        const _HermesInternal = HermesInternal;
        obj2.key = "remove-channel-overwrite-" + id;
        const intl = util.intl;
        obj2.title = intl.string(util.t.GuPYQB);
        const intl2 = util.intl;
        const obj3 = { name };
        obj2.content = intl2.format(util.t.xERCnZ, obj3);
        const intl3 = util.intl;
        obj2.confirmText = intl3.string(util.t.fKxYb0);
        obj2.onConfirm = function onConfirm() {
          let result = channelId(dependencyMap[9]).clearPermissionOverwrite(closure_2, id);
          result.then(() => {
            const result = id(closure_2_3[10]).memberOrRoleRemovedToast(name);
          });
        };
        AlertModal.showConfirmModal(obj2);
      }
    };
    let prop;
    if (item.disabled) {
      prop = tmp.rowRemoveIconDisabled;
    }
    let obj2 = { style: prop };
    obj.children = closure_10(item(6295).CircleXIcon, obj2);
    tmp3Result = closure_10(item(6184).PressableOpacity, obj);
  }
  return tmp3Result;
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleItem(arg0) {
  const cResult = c.c(23);
  ({ disabled, item, subLabel, channelId, showType, showRemove, start, end, trailing, onPress, accessibilityRole, accessibilityState, accessible } = arg0);
  if (cResult[0] !== item.colorString) {
    const obj2 = { size: "lg", color: item.colorString };
    const tmp6 = collapsed(ShieldUserIcon.ShieldUserIcon, obj2);
    cResult[0] = item.colorString;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === item.rowType) {
    if (cResult[3] === showType) {
      if (cResult[4] === subLabel) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === channelId) {
        if (cResult[7] === item) {
          if (cResult[8] === showRemove) {
            if (cResult[9] === trailing) {
              let tmp10 = cResult[10];
            }
            if (cResult[11] === accessibilityRole) {
              if (cResult[12] === accessibilityState) {
                if (cResult[13] === accessible) {
                  if (cResult[14] === disabled) {
                    if (cResult[15] === end) {
                      if (cResult[16] === onPress) {
                        if (cResult[17] === item.name) {
                          if (cResult[18] === start) {
                            if (cResult[19] === tmp4) {
                              if (cResult[20] === tmp7) {
                                if (cResult[21] === tmp10) {
                                  let tmp14 = cResult[22];
                                }
                                return tmp14;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj4 = { icon: tmp4, label: item.name, subLabel: tmp7, start, end, trailing: tmp10, onPress, disabled, accessibilityRole, accessibilityState, accessible };
            const tmp16 = collapsed(TableRow.TableRow, obj4);
            cResult[11] = accessibilityRole;
            cResult[12] = accessibilityState;
            cResult[13] = accessible;
            cResult[14] = disabled;
            cResult[15] = end;
            cResult[16] = onPress;
            cResult[17] = item.name;
            cResult[18] = start;
            cResult[19] = tmp4;
            cResult[20] = tmp7;
            cResult[21] = tmp10;
            cResult[22] = tmp16;
            tmp14 = tmp16;
          }
        }
      }
      let tmp11 = trailing;
      if (showRemove) {
        const obj5 = { item, channelId };
        tmp11 = collapsed(closure_13, obj5);
      }
      cResult[6] = channelId;
      cResult[7] = item;
      cResult[8] = showRemove;
      cResult[9] = trailing;
      cResult[10] = tmp11;
      tmp10 = tmp11;
    }
  }
  let rowTypeLabel = subLabel;
  if (showType) {
    rowTypeLabel = ChannelPermissionsUtilsAll.getRowTypeLabel(item.rowType);
  }
  cResult[2] = item.rowType;
  cResult[3] = showType;
  cResult[4] = subLabel;
  cResult[5] = rowTypeLabel;
  tmp7 = rowTypeLabel;
}) : (function RoleItem(arg0) {
  ({ item, subLabel, trailing } = arg0);
  ({ disabled, channelId, showType, showRemove, start, end, onPress, accessibilityRole, accessibilityState, accessible } = arg0);
  const obj = { icon: collapsed(ShieldUserIcon.ShieldUserIcon, { size: "lg", color: item.colorString }), label: item.name, subLabel: null, start: null, end: null, trailing: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityState: null, accessible: null };
  if (showType) {
    subLabel = ChannelPermissionsUtilsAll.getRowTypeLabel(item.rowType);
  }
  obj.subLabel = subLabel;
  obj.start = start;
  obj.end = end;
  if (showRemove) {
    const obj4 = { item, channelId };
    trailing = collapsed(closure_13, obj4);
  }
  obj.trailing = trailing;
  obj.onPress = onPress;
  obj.disabled = disabled;
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.accessible = accessible;
  return collapsed(TableRow.TableRow, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberItem(arg0) {
  const cResult = c.c(36);
  ({ item, channelId, showRemove, onRemove, guildId, start, end, trailing, onPress, disabled, accessibilityRole, accessibilityState, accessible } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === tmp4.memberName) {
    if (cResult[1] === tmp4.name) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === item.name) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === item.rowType) {
        if (cResult[7] === tmp4.ownerIcon) {
          let tmp9 = cResult[8];
        }
        if (cResult[9] === tmp4.nameWrapper) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp9) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] === guildId) {
              if (cResult[14] === item.id) {
                let tmp18 = cResult[15];
              }
              if (cResult[16] !== tmp18) {
                const obj2 = { source: tmp18, size: native.AvatarSizes.SMALL };
                const tmp24 = collapsed(native.Avatar, obj2);
                cResult[16] = tmp18;
                cResult[17] = tmp24;
                let tmp22 = tmp24;
              } else {
                tmp22 = cResult[17];
              }
              if (cResult[18] === channelId) {
                if (cResult[19] === item) {
                  if (cResult[20] === onRemove) {
                    if (cResult[21] === showRemove) {
                      if (cResult[22] === trailing) {
                        let tmp25 = cResult[23];
                      }
                      if (cResult[24] === accessibilityRole) {
                        if (cResult[25] === accessibilityState) {
                          if (cResult[26] === accessible) {
                            if (cResult[27] === disabled) {
                              if (cResult[28] === end) {
                                if (cResult[29] === item.username) {
                                  if (cResult[30] === onPress) {
                                    if (cResult[31] === start) {
                                      if (cResult[32] === tmp22) {
                                        if (cResult[33] === tmp25) {
                                          if (cResult[34] === tmp14) {
                                            let tmp29 = cResult[35];
                                          }
                                          return tmp29;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj3 = { icon: tmp22, label: tmp14, subLabel: item.username, start, end, trailing: tmp25, onPress, disabled, accessibilityRole, accessibilityState, accessible };
                      const tmp31 = collapsed(TableRow.TableRow, obj3);
                      cResult[24] = accessibilityRole;
                      cResult[25] = accessibilityState;
                      cResult[26] = accessible;
                      cResult[27] = disabled;
                      cResult[28] = end;
                      cResult[29] = item.username;
                      cResult[30] = onPress;
                      cResult[31] = start;
                      cResult[32] = tmp22;
                      cResult[33] = tmp25;
                      cResult[34] = tmp14;
                      cResult[35] = tmp31;
                      tmp29 = tmp31;
                    }
                  }
                }
              }
              let tmp26 = trailing;
              if (showRemove) {
                const obj4 = { item, channelId, onRemove };
                tmp26 = collapsed(closure_13, obj4);
              }
              cResult[18] = channelId;
              cResult[19] = item;
              cResult[20] = onRemove;
              cResult[21] = showRemove;
              cResult[22] = trailing;
              cResult[23] = tmp26;
              tmp25 = tmp26;
            }
            const user = UserStore.getUser(item.id);
            let avatarSource;
            if (user != null) {
              avatarSource = user.getAvatarSource(guildId);
            }
            cResult[13] = guildId;
            cResult[14] = item.id;
            cResult[15] = avatarSource;
            tmp18 = avatarSource;
          }
        }
        const obj5 = { style: tmp4.nameWrapper, children: null };
        const items = [tmp6, tmp9];
        obj5.children = items;
        const tmp17 = closure_1_11(View, obj5);
        cResult[9] = tmp4.nameWrapper;
        cResult[10] = tmp6;
        cResult[11] = tmp9;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      let tmp11 = null;
      if (item.rowType === RowType.OWNER) {
        const obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef8622, disableColor: true, style: tmp4.ownerIcon };
        tmp11 = collapsed(native.Icon, obj6);
      }
      cResult[6] = item.rowType;
      cResult[7] = tmp4.ownerIcon;
      cResult[8] = tmp11;
      tmp9 = tmp11;
    }
    const obj7 = { style: tmp5, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: item.name };
    const tmp8 = collapsed(Text_Text.Text, obj7);
    cResult[3] = item.name;
    cResult[4] = tmp5;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items1 = [, ];
  ({ name: arr[0], memberName: arr[1] } = tmp4);
  cResult[0] = tmp4.memberName;
  cResult[1] = tmp4.name;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function MemberItem(arg0) {
  ({ item, trailing } = arg0);
  ({ channelId, showRemove, onRemove, guildId, start, end, onPress, disabled, accessibilityRole, accessibilityState, accessible } = arg0);
  const tmp = closure_12();
  const obj = { style: tmp.nameWrapper, children: null };
  const obj2 = { style: null, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: item.name };
  const items = [, ];
  ({ name: arr[0], memberName: arr[1] } = tmp);
  obj2.style = items;
  const items1 = [collapsed(Text_Text.Text, obj2), ];
  let tmp4Result = null;
  if (item.rowType === RowType.OWNER) {
    const obj3 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef8622, disableColor: true, style: tmp.ownerIcon };
    tmp4Result = collapsed(native.Icon, obj3);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  const user = UserStore.getUser(item.id);
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(guildId);
  }
  const obj4 = { icon: null, label: null, subLabel: null, start: null, end: null, trailing: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityState: null, accessible: null };
  const tmp2Result = closure_1_11(View, obj);
  obj4.icon = collapsed(native.Avatar, { source: avatarSource, size: native.AvatarSizes.SMALL });
  obj4.label = tmp2Result;
  obj4.subLabel = item.username;
  obj4.start = start;
  obj4.end = end;
  if (showRemove) {
    const obj6 = { item, channelId, onRemove };
    trailing = collapsed(closure_13, obj6);
  }
  obj4.trailing = trailing;
  obj4.onPress = onPress;
  obj4.disabled = disabled;
  obj4.accessibilityRole = accessibilityRole;
  obj4.accessibilityState = accessibilityState;
  obj4.accessible = accessible;
  return collapsed(TableRow.TableRow, obj4);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyRoleItem(item) {
  const cResult = c.c(6);
  item = item.item;
  const tmp4 = closure_12();
  if (cResult[0] === item.colorString) {
    if (cResult[1] === tmp4.roleIcon) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === item.name) {
      if (cResult[4] === tmp5) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { icon: tmp5, label: item.name };
    const tmp9 = collapsed(TableRow.TableRow, obj2);
    cResult[3] = item.name;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = collapsed(native.Icon, { source: _modDef8623, color: item.colorString, size: native.IconSizes.MEDIUM, style: tmp4.roleIcon });
  cResult[0] = item.colorString;
  cResult[1] = tmp4.roleIcon;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj3 = { source: _modDef8623, color: item.colorString, size: native.IconSizes.MEDIUM, style: tmp4.roleIcon };
}) : (function EmptyRoleItem(item) {
  item = item.item;
  const obj = { icon: null, label: null };
  const tmp = closure_12();
  obj.icon = collapsed(native.Icon, { source: _modDef8623, color: item.colorString, size: native.IconSizes.MEDIUM, style: closure_12().roleIcon });
  obj.label = item.name;
  return collapsed(TableRow.TableRow, obj);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelOverwritesItem(item) {
  const cResult = c.c(12);
  if (cResult[0] !== item) {
    item = item.item;
    const tmp6 = _objectWithoutProperties(item, closure_4);
    cResult[0] = item;
    cResult[1] = item;
    cResult[2] = tmp6;
    let tmp3 = tmp6;
    let tmp2 = item;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const rowType = tmp2.rowType;
  if (RowType.ADMINISTRATOR !== rowType) {
    if (RowType.ROLE !== rowType) {
      if (RowType.OWNER !== rowType) {
        if (RowType.MEMBER !== rowType) {
          if (RowType.APP_CHANNEL_APP !== rowType) {
            if (RowType.EMPTY_STATE === rowType) {
              if (cResult[9] === tmp2) {
                if (cResult[10] === tmp3) {
                  let tmp9 = cResult[11];
                }
                return tmp9;
              }
              const obj2 = { item: tmp2 };
              const merged = Object.assign(tmp3);
              const tmp15 = collapsed(closure_16, obj2);
              cResult[9] = tmp2;
              cResult[10] = tmp3;
              cResult[11] = tmp15;
              tmp9 = tmp15;
            } else {
              return null;
            }
          }
        }
      }
      if (cResult[6] === tmp2) {
        if (cResult[7] === tmp3) {
          let tmp16 = cResult[8];
        }
        return tmp16;
      }
      const obj3 = { item: tmp2 };
      const merged1 = Object.assign(tmp3);
      const tmp22 = collapsed(closure_15, obj3);
      cResult[6] = tmp2;
      cResult[7] = tmp3;
      cResult[8] = tmp22;
      tmp16 = tmp22;
    }
  }
  if (cResult[3] === tmp2) {
    if (cResult[4] === tmp3) {
      let tmp23 = cResult[5];
    }
    return tmp23;
  }
  const merged2 = Object.assign(tmp3);
  const tmp25 = collapsed(closure_14, { item: tmp2 });
  cResult[3] = tmp2;
  cResult[4] = tmp3;
  cResult[5] = tmp25;
  tmp23 = tmp25;
  const obj4 = { item: tmp2 };
}) : (function ChannelOverwritesItem(item) {
  item = item.item;
  const merged = Object.assign(item, Object.assign({ item: 0 }));
  const rowType = item.rowType;
  if (RowType.ADMINISTRATOR !== rowType) {
    if (RowType.ROLE !== rowType) {
      if (RowType.OWNER !== rowType) {
        if (RowType.MEMBER !== rowType) {
          if (RowType.APP_CHANNEL_APP !== rowType) {
            if (RowType.EMPTY_STATE === rowType) {
              const obj = { item };
              const merged1 = Object.assign(merged);
              return collapsed(closure_16, obj);
            } else {
              return null;
            }
          }
        }
      }
      const obj2 = { item };
      const merged2 = Object.assign(merged);
      return collapsed(closure_15, obj2);
    }
  }
  const merged3 = Object.assign(merged);
  return collapsed(closure_14, { item });
});
let closure_17 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelOverwritesItem.tsx");

export default tmp4;
export const ChannelOverwritesCheckboxItem = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelOverwritesCheckboxItem(checked) {
  const cResult = c.c(12);
  if (cResult[0] !== checked) {
    checked = checked.checked;
    const tmp8 = _objectWithoutProperties(checked, closure_5);
    cResult[0] = checked;
    cResult[1] = checked;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = checked;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj2 = { checked: tmp4 };
    cResult[3] = tmp4;
    cResult[4] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp9);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[5] !== tmp4) {
    const obj3 = { checked: tmp4 };
    const tmp13 = collapsed(FormCheckbox.FormCheckbox, obj3);
    cResult[5] = tmp4;
    cResult[6] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === accessibilityRole) {
    if (cResult[8] === accessibilityState) {
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp11) {
          let tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
  }
  const obj4 = {};
  const merged = Object.assign(tmp5);
  obj4.accessible = true;
  obj4.accessibilityRole = accessibilityRole;
  obj4.accessibilityState = accessibilityState;
  obj4.trailing = tmp11;
  const tmp16 = collapsed(closure_17, obj4);
  cResult[7] = accessibilityRole;
  cResult[8] = accessibilityState;
  cResult[9] = tmp5;
  cResult[10] = tmp11;
  cResult[11] = tmp16;
  tmp14 = tmp16;
  const tmpResult = useA11yRolesNative;
}) : (function ChannelOverwritesCheckboxItem(checked) {
  checked = checked.checked;
  const merged = Object.assign(checked, Object.assign({ checked: 0 }));
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked });
  const obj2 = {};
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const merged1 = Object.assign(merged);
  obj2.accessible = true;
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityState = accessibilityState;
  obj2.trailing = collapsed(FormCheckbox.FormCheckbox, { checked });
  return collapsed(closure_17, obj2);
});