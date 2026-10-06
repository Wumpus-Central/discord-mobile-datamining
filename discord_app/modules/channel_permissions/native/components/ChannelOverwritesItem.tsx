// === Module 9266: ChannelOverwritesItem ===

// Module 9266 (ChannelOverwritesItem)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import react_native2 from "react-native" /* 4600 */;
import Text_Text from "Text/Text" /* 4892 */;
import AlertModal from "AlertModal" /* 5720 */;
import FormCheckbox from "FormCheckbox" /* 5998 */;
import TableRow2 from "TableRow" /* 6000 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 8110 */;
import ChannelPermissionsUtilsAll from "ChannelPermissionsUtils" /* 9250 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9267 */;
import AssetRegistryDefault from "AssetRegistry" /* 9268 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9269 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let checked, obj1, showConfirmModalResult, str;

let c10;
let unpackModuleId;
let closure_4 = ["item"];
let closure_5 = ["checked"];
const View = react_native.View;
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ nameWrapper: { flexDirection: "row", alignItems: "flex-end", marginRight: 16 }, name: { paddingRight: 4 }, memberName: { flexShrink: 1 }, ownerIcon: { alignSelf: "center" }, roleIcon: { height: 30, width: 30 }, rowRemoveIconDisabled: { opacity: 0.3 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  const tmp = item;
  let obj = item(576);
  const cResult = obj.c(11);
  item = item.item;
  const channelId = item.channelId;
  const onRemove = item.onRemove;
  if (null == channelId) {
    return null;
  } else {
    let first;
    const _Symbol = Symbol;
    const disabled = item.disabled;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.N86XcP);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === channelId) {
      if (cResult[2] === item) {
        let tmp7;
        let tmp9;
        if (cResult[3] === onRemove) {
          tmp7 = cResult[4];
        }
        let prop;
        if (item.disabled) {
          prop = tmp4.rowRemoveIconDisabled;
        }
        if (cResult[5] !== prop) {
          let obj2 = { style: prop };
          cResult[5] = prop;
          const tmp11 = closure_10(tmp(4803).CircleXIcon, obj2);
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
                tmp7 = closure_0(closure_3[7]);
                obj = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
                tmp8 = globalThis;
                _HermesInternal = HermesInternal;
                str = "remove-channel-overwrite-";
                showConfirmModal = tmp7.showConfirmModal;
                obj.key = "remove-channel-overwrite-" + id;
                intl = closure_0(closure_3[8]).intl;
                obj.title = intl.string(closure_0(closure_3[8]).t.GuPYQB);
                intl2 = closure_0(closure_3[8]).intl;
                obj1 = { name: null };
                obj1.name = name;
                obj.content = intl2.format(closure_0(closure_3[8]).t.xERCnZ, obj1);
                intl3 = closure_0(closure_3[8]).intl;
                obj.confirmText = intl3.string(closure_0(closure_3[8]).t.fKxYb0);
                obj.onConfirm = function onConfirm() { /* body not rendered: F100079 */ };
                showConfirmModalResult = showConfirmModal(obj);
                return;
              }
            }
          }
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === item.disabled) {
          if (cResult[8] === tmp7) {
            let tmp12;
            if (cResult[9] === tmp9) {
              tmp12 = cResult[10];
            }
            return tmp12;
          }
        }
        const obj3 = { disabled: null, accessibilityRole: "button", accessibilityLabel: first, onPress: tmp7, children: tmp9 };
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
              tmp7 = closure_0(closure_3[7]);
              obj = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
              tmp8 = globalThis;
              _HermesInternal = HermesInternal;
              str = "remove-channel-overwrite-";
              showConfirmModal = tmp7.showConfirmModal;
              obj.key = "remove-channel-overwrite-" + id;
              intl = closure_0(closure_3[8]).intl;
              obj.title = intl.string(closure_0(closure_3[8]).t.GuPYQB);
              intl2 = closure_0(closure_3[8]).intl;
              obj1 = { name: null };
              obj1.name = name;
              obj.content = intl2.format(closure_0(closure_3[8]).t.xERCnZ, obj1);
              intl3 = closure_0(closure_3[8]).intl;
              obj.confirmText = intl3.string(closure_0(closure_3[8]).t.fKxYb0);
              obj.onConfirm = function onConfirm() { /* body not rendered: F100079 */ };
              showConfirmModalResult = showConfirmModal(obj);
              return;
            }
          }
        }
        const tmp14 = closure_10(tmp(5916).PressableOpacity, obj3);
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
          tmp7 = closure_0(closure_3[7]);
          obj = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
          tmp8 = globalThis;
          _HermesInternal = HermesInternal;
          str = "remove-channel-overwrite-";
          showConfirmModal = tmp7.showConfirmModal;
          obj.key = "remove-channel-overwrite-" + id;
          intl = closure_0(closure_3[8]).intl;
          obj.title = intl.string(closure_0(closure_3[8]).t.GuPYQB);
          intl2 = closure_0(closure_3[8]).intl;
          obj1 = { name: null };
          obj1.name = name;
          obj.content = intl2.format(closure_0(closure_3[8]).t.xERCnZ, obj1);
          intl3 = closure_0(closure_3[8]).intl;
          obj.confirmText = intl3.string(closure_0(closure_3[8]).t.fKxYb0);
          obj.onConfirm = function onConfirm() { /* body not rendered: F100079 */ };
          showConfirmModalResult = showConfirmModal(obj);
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
}) : ((item) => {
  let CircleXIcon;
  let intl;
  let obj2;
  item = item.item;
  const channelId = item.channelId;
  const onRemove = item.onRemove;
  let tmp3Result = null;
  if (null != channelId) {
    let obj = {
      disabled: item.disabled,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(item(1126).t.N86XcP),
      onPress() {
          let id;
          let intl;
          let intl2;
          let intl3;
          let name;
          let obj2;
          if (null != onRemove) {
            return tmp(item);
          } else {
            ({ id, name } = item);
            let closure_2 = channelId;
            let obj = {
              key: "remove-channel-overwrite-" + id,
              title: intl.string(intl4.t.GuPYQB),
              content: intl2.format(intl4.t.xERCnZ, obj2),
              confirmText: intl3.string(intl4.t.fKxYb0),
              onConfirm() {
                  let obj = channelId(closure_2_3[9]);
                  let result = obj.clearPermissionOverwrite(closure_2, id);
                  result.then(() => {
                    const obj = id(closure_2_3[10]);
                    const result = obj.memberOrRoleRemovedToast(name);
                  });
                }
            };
            const _HermesInternal = HermesInternal;
            const showConfirmModal = AlertModal.showConfirmModal;
            AlertModal;
            intl = intl4.intl;
            intl2 = intl4.intl;
            obj2 = { name };
            intl3 = intl4.intl;
            showConfirmModal(obj);
          }
        },
      children: closure_10(CircleXIcon, obj2)
    };
    const PressableOpacity = item(5916).PressableOpacity;
    intl = item(1126).intl;
    let prop;
    CircleXIcon = item(4803).CircleXIcon;
    if (item.disabled) {
      prop = tmp.rowRemoveIconDisabled;
    }
    obj2 = { style: prop };
    tmp3Result = closure_10(PressableOpacity, obj);
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let channelId;
  let disabled;
  let end;
  let item;
  let onPress;
  let showRemove;
  let showType;
  let start;
  let subLabel;
  let tmp4;
  let trailing;
  const obj = react2;
  const cResult = obj.c(23);
  ({ disabled, item, subLabel, channelId, showType, showRemove, start, end, trailing, onPress, accessibilityRole, accessibilityState, accessible } = arg0);
  if (cResult[0] !== item.colorString) {
    const obj2 = { size: "lg", color: item.colorString };
    const tmp6 = authStore(ShieldUserIcon.ShieldUserIcon, obj2);
    cResult[0] = item.colorString;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === item.rowType) {
    if (cResult[3] === showType) {
      let tmp7;
      if (cResult[4] === subLabel) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === channelId) {
        if (cResult[7] === item) {
          if (cResult[8] === showRemove) {
            let tmp10;
            if (cResult[9] === trailing) {
              tmp10 = cResult[10];
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
                                let tmp14;
                                if (cResult[21] === tmp10) {
                                  tmp14 = cResult[22];
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
            const tmp16 = authStore(TableRow2.TableRow, obj4);
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
        tmp11 = authStore(closure_13, obj5);
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
    const obj3 = ChannelPermissionsUtilsAll;
    rowTypeLabel = obj3.getRowTypeLabel(item.rowType);
  }
  cResult[2] = item.rowType;
  cResult[3] = showType;
  cResult[4] = subLabel;
  cResult[5] = rowTypeLabel;
  tmp7 = rowTypeLabel;
}) : ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let channelId;
  let disabled;
  let end;
  let item;
  let obj2;
  let onPress;
  let showRemove;
  let showType;
  let start;
  let subLabel;
  let trailing;
  ({ item, subLabel, trailing } = arg0);
  ({ disabled, channelId, showType, showRemove, start, end, onPress, accessibilityRole, accessibilityState, accessible } = arg0);
  const obj = { icon: authStore(ShieldUserIcon.ShieldUserIcon, obj2), label: item.name, subLabel, start, end, trailing, onPress, disabled, accessibilityRole, accessibilityState, accessible };
  const TableRow = TableRow2.TableRow;
  obj2 = { size: "lg", color: item.colorString };
  if (showType) {
    const obj3 = ChannelPermissionsUtilsAll;
    subLabel = obj3.getRowTypeLabel(item.rowType);
  }
  if (showRemove) {
    const obj4 = { item, channelId };
    trailing = authStore(closure_13, obj4);
  }
  return authStore(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let channelId;
  let disabled;
  let end;
  let guildId;
  let item;
  let items;
  let onPress;
  let onRemove;
  let showRemove;
  let start;
  let trailing;
  const obj = react2;
  const cResult = obj.c(36);
  ({ item, channelId, showRemove, onRemove, guildId, start, end, trailing, onPress, disabled, accessibilityRole, accessibilityState, accessible } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === tmp4.memberName) {
    let tmp5;
    if (cResult[1] === tmp4.name) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === item.name) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === item.rowType) {
        let tmp9;
        if (cResult[7] === tmp4.ownerIcon) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp4.nameWrapper) {
          if (cResult[10] === tmp6) {
            let tmp14;
            if (cResult[11] === tmp9) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === guildId) {
              let tmp18;
              let tmp22;
              if (cResult[14] === item.id) {
                tmp18 = cResult[15];
              }
              if (cResult[16] !== tmp18) {
                const obj2 = { source: tmp18, size: native.AvatarSizes.SMALL };
                const Avatar = native.Avatar;
                const tmp24 = authStore(Avatar, obj2);
                cResult[16] = tmp18;
                cResult[17] = tmp24;
                tmp22 = tmp24;
              } else {
                tmp22 = cResult[17];
              }
              if (cResult[18] === channelId) {
                if (cResult[19] === item) {
                  if (cResult[20] === onRemove) {
                    if (cResult[21] === showRemove) {
                      let tmp25;
                      if (cResult[22] === trailing) {
                        tmp25 = cResult[23];
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
                                          let tmp29;
                                          if (cResult[34] === tmp14) {
                                            tmp29 = cResult[35];
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
                      const tmp31 = authStore(TableRow2.TableRow, obj3);
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
                tmp26 = authStore(closure_13, obj4);
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
        const obj5 = { style: tmp4.nameWrapper, children: items };
        items = [tmp6, tmp9];
        const tmp17 = unpackModuleId(View, obj5);
        cResult[9] = tmp4.nameWrapper;
        cResult[10] = tmp6;
        cResult[11] = tmp9;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      let tmp11 = null;
      if (item.rowType === RowType.OWNER) {
        const obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault, disableColor: true, style: tmp4.ownerIcon };
        const Icon = native.Icon;
        tmp11 = authStore(Icon, obj6);
      }
      cResult[6] = item.rowType;
      cResult[7] = tmp4.ownerIcon;
      cResult[8] = tmp11;
      tmp9 = tmp11;
    }
    const obj7 = { style: tmp5, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: item.name };
    const tmp8 = authStore(Text_Text.Text, obj7);
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
}) : ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let channelId;
  let disabled;
  let end;
  let guildId;
  let item;
  let items;
  let items1;
  let obj5;
  let onPress;
  let onRemove;
  let showRemove;
  let start;
  let trailing;
  ({ item, trailing } = arg0);
  ({ channelId, showRemove, onRemove, guildId, start, end, onPress, disabled, accessibilityRole, accessibilityState, accessible } = arg0);
  const tmp = closure_12();
  const obj2 = { style: items, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: item.name };
  items = [, ];
  const obj = { style: tmp.nameWrapper, children: items1 };
  ({ name: arr[0], memberName: arr[1] } = tmp);
  items1 = [authStore(Text_Text.Text, obj2), ];
  let tmp4Result = null;
  if (item.rowType === RowType.OWNER) {
    const obj3 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault, disableColor: true, style: tmp.ownerIcon };
    const Icon = native.Icon;
    tmp4Result = authStore(Icon, obj3);
  }
  items1[1] = tmp4Result;
  const tmp2Result = unpackModuleId(View, obj);
  const TableRow = TableRow2.TableRow;
  const Avatar = native.Avatar;
  const user = UserStore.getUser(item.id);
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(guildId);
  }
  const obj4 = { icon: authStore(Avatar, obj5), label: tmp2Result, subLabel: item.username, start, end, trailing, onPress, disabled, accessibilityRole, accessibilityState, accessible };
  obj5 = { source: avatarSource, size: native.AvatarSizes.SMALL };
  if (showRemove) {
    const obj6 = { item, channelId, onRemove };
    trailing = authStore(closure_13, obj6);
  }
  return authStore(TableRow, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  const obj = react2;
  const cResult = obj.c(6);
  item = item.item;
  const tmp4 = closure_12();
  if (cResult[0] === item.colorString) {
    let tmp5;
    if (cResult[1] === tmp4.roleIcon) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === item.name) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { icon: tmp5, label: item.name };
    const tmp9 = authStore(TableRow2.TableRow, obj2);
    cResult[3] = item.name;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const obj3 = { source: AssetRegistryDefault2, color: item.colorString, size: native.IconSizes.MEDIUM, style: tmp4.roleIcon };
  const Icon = native.Icon;
  const tmp6 = authStore(Icon, obj3);
  cResult[0] = item.colorString;
  cResult[1] = tmp4.roleIcon;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((item) => {
  let Icon;
  let obj2;
  item = item.item;
  const obj = { icon: authStore(Icon, obj2), label: item.name };
  const tmp = closure_12();
  const TableRow = TableRow2.TableRow;
  obj2 = { source: AssetRegistryDefault2, color: item.colorString, size: native.IconSizes.MEDIUM, style: tmp.roleIcon };
  Icon = native.Icon;
  return authStore(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== item) {
    item = item.item;
    const tmp6 = _objectWithoutProperties(item, closure_4);
    cResult[0] = item;
    cResult[1] = item;
    cResult[2] = tmp6;
    tmp3 = tmp6;
    tmp2 = item;
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
                let tmp9;
                if (cResult[10] === tmp3) {
                  tmp9 = cResult[11];
                }
                return tmp9;
              }
              const obj2 = { item: tmp2 };
              const merged = Object.assign(tmp3);
              const tmp15 = authStore(closure_16, obj2);
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
        let tmp16;
        if (cResult[7] === tmp3) {
          tmp16 = cResult[8];
        }
        return tmp16;
      }
      const obj3 = { item: tmp2 };
      const merged1 = Object.assign(tmp3);
      const tmp22 = authStore(closure_15, obj3);
      cResult[6] = tmp2;
      cResult[7] = tmp3;
      cResult[8] = tmp22;
      tmp16 = tmp22;
    }
  }
  if (cResult[3] === tmp2) {
    let tmp23;
    if (cResult[4] === tmp3) {
      tmp23 = cResult[5];
    }
    return tmp23;
  }
  const obj4 = { item: tmp2 };
  const merged2 = Object.assign(tmp3);
  const tmp25 = authStore(closure_14, obj4);
  cResult[3] = tmp2;
  cResult[4] = tmp3;
  cResult[5] = tmp25;
  tmp23 = tmp25;
}) : ((item) => {
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
              return authStore(closure_16, obj);
            } else {
              return null;
            }
          }
        }
      }
      const obj2 = { item };
      const merged2 = Object.assign(merged);
      return authStore(closure_15, obj2);
    }
  }
  const obj3 = { item };
  const merged3 = Object.assign(merged);
  return authStore(closure_14, obj3);
});
let closure_17 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((checked) => {
  let accessibilityRole;
  let accessibilityState;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== checked) {
    checked = checked.checked;
    const tmp8 = _objectWithoutProperties(checked, closure_5);
    cResult[0] = checked;
    cResult[1] = checked;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = checked;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj2 = { checked: tmp4 };
    cResult[3] = tmp4;
    cResult[4] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult = react_native2;
  const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp9);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[5] !== tmp4) {
    const obj3 = { checked: tmp4 };
    const tmp13 = authStore(FormCheckbox.FormCheckbox, obj3);
    cResult[5] = tmp4;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === accessibilityRole) {
    if (cResult[8] === accessibilityState) {
      if (cResult[9] === tmp5) {
        let tmp14;
        if (cResult[10] === tmp11) {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
  }
  const obj4 = { accessible: true, accessibilityRole, accessibilityState, trailing: tmp11 };
  const merged = Object.assign(tmp5);
  const tmp16 = authStore(closure_17, obj4);
  cResult[7] = accessibilityRole;
  cResult[8] = accessibilityState;
  cResult[9] = tmp5;
  cResult[10] = tmp11;
  cResult[11] = tmp16;
  tmp14 = tmp16;
}) : ((checked) => {
  let accessibilityRole;
  let accessibilityState;
  checked = checked.checked;
  const merged = Object.assign(checked, Object.assign({ checked: 0 }));
  const obj = react_native2;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  const obj2 = { accessible: true, accessibilityRole, accessibilityState, trailing: authStore(FormCheckbox.FormCheckbox, { checked }) };
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const merged1 = Object.assign(merged);
  return authStore(closure_17, obj2);
});
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelOverwritesItem.tsx");

export default tmp4;
export const ChannelOverwritesCheckboxItem = tmp5;