// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import react_native from "../../../_runtime/00017_react-native.js";
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import GuildRoleRecord from "../../records/GuildRoleRecord.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import TableRow3 from "../../design/components/TableRow/native/TableRow.native.tsx";
import DeprecatedLayoutAnimation from "../../modules/animations/native/DeprecatedLayoutAnimation.tsx";
import RoleLabel from "../../design/void/RoleLabel/native/RoleLabel.tsx";
import DetailedGuildIdentityUserRowDefault from "../../modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx";
import CircleMinusIcon2 from "../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import useGetOrFetchChannelOverwriteUsersDefault from "../../modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react_mod from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c2, c3, channelId, guild, isEditing, navigation;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
({ PermissionOverrideType: closure_14, ChannelSettingsSections: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { tableRowGroupContainer: obj2, tableContainer: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_18 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(22);
      channel = channel.channel;
      const category = channel.category;
      const locked = channel.locked;
      const tmp4 = closure_18();
      if (cResult[0] === category) {
        let tmp5;
        let formatToPlainStringResult;
        if (cResult[1] === channel) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === category) {
          if (cResult[4] === locked) {
            let tmp6;
            let tmp7;
            let tmp8;
            let tmp9;
            let tmp17;
            let tmp16;
            let tmp21;
            if (cResult[5] === tmp4.tableRowGroupContainer) {
              tmp6 = cResult[6];
              tmp7 = cResult[7];
              tmp8 = cResult[8];
              tmp9 = cResult[9];
            }
            const tmp15 = globalThis;
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp19 = closure_16(tmp(14778).RefreshIcon, {});
              let intl2 = tmp(1126).intl;
              const stringResult = intl2.string(tmp(1126).t.NVwuHq);
              cResult[10] = tmp19;
              cResult[11] = stringResult;
              tmp17 = stringResult;
              tmp16 = tmp19;
            } else {
              tmp16 = cResult[10];
              tmp17 = cResult[11];
            }
            if (cResult[12] !== tmp5) {
              let obj2 = { icon: tmp16, label: tmp17, onPress: tmp5 };
              const tmp23 = closure_16(tmp(5993).TableRow, obj2);
              cResult[12] = tmp5;
              cResult[13] = tmp23;
              tmp21 = tmp23;
            } else {
              tmp21 = cResult[13];
            }
            if (cResult[14] === tmp6) {
              if (cResult[15] === tmp8) {
                let tmp24;
                if (cResult[16] === tmp21) {
                  tmp24 = cResult[17];
                }
                if (cResult[18] === tmp7) {
                  if (cResult[19] === tmp9) {
                    let tmp27;
                    if (cResult[20] === tmp24) {
                      tmp27 = cResult[21];
                    }
                    return tmp27;
                  }
                }
                let obj3 = { style: tmp9, children: tmp24 };
                const tmp29 = closure_16(tmp7, obj3);
                cResult[18] = tmp7;
                cResult[19] = tmp9;
                cResult[20] = tmp24;
                cResult[21] = tmp29;
                tmp27 = tmp29;
              }
            }
            let obj4 = { title: tmp8, hasIcons: true, children: tmp21 };
            const tmp26 = closure_16(tmp6, obj4);
            cResult[14] = tmp6;
            cResult[15] = tmp8;
            cResult[16] = tmp21;
            cResult[17] = tmp26;
            tmp24 = tmp26;
          }
        }
        const tmpResult = tmp(5043);
        const channelName = tmpResult.computeChannelName(category, UserStore, RelationshipStore);
        const tableRowGroupContainer = tmp4.tableRowGroupContainer;
        const TableRowGroup = tmp(6074).TableRowGroup;
        let intl = tmp(1126).intl;
        const formatToPlainString = intl.formatToPlainString;
        const t = tmp(1126).t;
        if (locked) {
          let obj5 = { categoryName: channelName };
          formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj5);
        } else {
          let obj6 = { categoryName: channelName };
          formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj6);
        }
        cResult[3] = category;
        cResult[4] = locked;
        cResult[5] = tmp4.tableRowGroupContainer;
        cResult[6] = TableRowGroup;
        cResult[7] = View;
        cResult[8] = formatToPlainStringResult;
        cResult[9] = tableRowGroupContainer;
        tmp8 = formatToPlainStringResult;
        tmp9 = tableRowGroupContainer;
        tmp7 = View;
        tmp6 = TableRowGroup;
      }
      const fn = function l() {
        let format;
        let intl;
        let intl3;
        let intl4;
        let obj2;
        let obj3;
        let obj4;
        let prop;
        const tmp = category(dependencyMap[16]);
        let obj = {
          title: intl.string(channel(dependencyMap[17]).t.YWMtRe),
          body: format(prop, obj2),
          confirmText: intl3.string(channel(dependencyMap[17]).t.eW8Gy4),
          cancelText: intl4.string(channel(dependencyMap[17]).t.s4uM3b),
          onConfirm: function () {
            return closure_0(...arguments);
          },
        };
        const show = tmp.show;
        intl = channel(dependencyMap[17]).intl;
        const intl2 = channel(dependencyMap[17]).intl;
        format = intl2.format;
        obj2 = {
          channelName: obj3.computeChannelName(closure_0, UserStore, RelationshipStore, true),
          categoryName: obj4.computeChannelName(category, UserStore, RelationshipStore),
        };
        prop = channel(dependencyMap[17]).t["iKW+jY"];
        obj3 = channel(dependencyMap[18]);
        obj4 = channel(dependencyMap[18]);
        intl3 = channel(dependencyMap[17]).intl;
        intl4 = channel(dependencyMap[17]).intl;
        closure_0 = _asyncToGenerator(async () => {
          let obj2;
          let obj8;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let syncedPermissionOverwrites;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let guild_id = tmp4;
                  guild_id = guild_id.guild_id;
                  const getSyncedPermissionOverwrites = PermissionUtilsAll.getSyncedPermissionOverwrites;
                  const obj7 = tmp(dependencyMap[20]);
                  syncedPermissionOverwrites = getSyncedPermissionOverwrites(
                    guild_id,
                    obj7.getAppChannelBotUserId(tmp),
                  );
                  c2 = 1;
                  c3 = 1;
                  const obj5 = {
                    value: obj8.checkChattableChannelThresholdMetAfterChannelPermissionDeny(
                      tmp,
                      syncedPermissionOverwrites[guild_id].deny,
                      syncedPermissionOverwrites[guild_id].allow,
                    ),
                    done: false,
                  };
                  obj8 = tmp(dependencyMap[21]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                if (value) {
                  const obj = { permissionOverwrites: obj2.values(syncedPermissionOverwrites) };
                  const saveChannel = tmp(dependencyMap[22]).saveChannel;
                  const id = tmp.id;
                  const tmp9 = tmp(dependencyMap[22]);
                  obj2 = category(dependencyMap[23]);
                  saveChannel(id, obj);
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c3 = 3;
              throw tmp15;
            }
          }
        });
        show(obj);
      };
      cResult[0] = category;
      cResult[1] = channel;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (channel) => {
      let TableRow;
      let TableRowGroup;
      let formatToPlainStringResult;
      let intl2;
      let obj5;
      let obj6;
      channel = channel.channel;
      const category = channel.category;
      const locked = channel.locked;
      const items = [channel, category];
      let tmp = closure_18();
      const tmp3 = channel;
      const callback = react.useCallback(() => {
        let format;
        let intl;
        let intl3;
        let intl4;
        let obj2;
        let obj3;
        let obj4;
        let prop;
        const tmp = category(dependencyMap[16]);
        let obj = {
          title: intl.string(channel(dependencyMap[17]).t.YWMtRe),
          body: format(prop, obj2),
          confirmText: intl3.string(channel(dependencyMap[17]).t.eW8Gy4),
          cancelText: intl4.string(channel(dependencyMap[17]).t.s4uM3b),
          onConfirm: function () {
            return closure_0(...arguments);
          },
        };
        const show = tmp.show;
        intl = channel(dependencyMap[17]).intl;
        const intl2 = channel(dependencyMap[17]).intl;
        format = intl2.format;
        obj2 = {
          channelName: obj3.computeChannelName(closure_0, UserStore, RelationshipStore, true),
          categoryName: obj4.computeChannelName(category, UserStore, RelationshipStore),
        };
        prop = channel(dependencyMap[17]).t["iKW+jY"];
        obj3 = channel(dependencyMap[18]);
        obj4 = channel(dependencyMap[18]);
        intl3 = channel(dependencyMap[17]).intl;
        intl4 = channel(dependencyMap[17]).intl;
        closure_0 = _asyncToGenerator(async () => {
          let obj2;
          let obj8;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let syncedPermissionOverwrites;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let guild_id = tmp4;
                  guild_id = guild_id.guild_id;
                  const getSyncedPermissionOverwrites = PermissionUtilsAll.getSyncedPermissionOverwrites;
                  const obj7 = tmp(dependencyMap[20]);
                  syncedPermissionOverwrites = getSyncedPermissionOverwrites(
                    guild_id,
                    obj7.getAppChannelBotUserId(tmp),
                  );
                  c2 = 1;
                  c3 = 1;
                  const obj5 = {
                    value: obj8.checkChattableChannelThresholdMetAfterChannelPermissionDeny(
                      tmp,
                      syncedPermissionOverwrites[guild_id].deny,
                      syncedPermissionOverwrites[guild_id].allow,
                    ),
                    done: false,
                  };
                  obj8 = tmp(dependencyMap[21]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                if (value) {
                  const obj = { permissionOverwrites: obj2.values(syncedPermissionOverwrites) };
                  const saveChannel = tmp(dependencyMap[22]).saveChannel;
                  const id = tmp.id;
                  const tmp9 = tmp(dependencyMap[22]);
                  obj2 = category(dependencyMap[23]);
                  saveChannel(id, obj);
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c3 = 3;
              throw tmp15;
            }
          }
        });
        show(obj);
      }, items);
      let obj = channel(5043);
      const channelName = obj.computeChannelName(category, UserStore, RelationshipStore);
      let obj2 = { style: tmp.tableRowGroupContainer, children: closure_16(TableRowGroup, obj5) };
      TableRowGroup = channel(6074).TableRowGroup;
      let intl = channel(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = channel(1126).t;
      if (locked) {
        let obj3 = { categoryName: channelName };
        formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj3);
      } else {
        let obj4 = { categoryName: channelName };
        formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj4);
      }
      obj5 = { title: formatToPlainStringResult, hasIcons: true, children: closure_16(TableRow, obj6) };
      obj6 = {
        icon: closure_16(tmp3(14778).RefreshIcon, {}),
        label: intl2.string(tmp3(1126).t.NVwuHq),
        onPress: callback,
      };
      TableRow = tmp3(5993).TableRow;
      intl2 = tmp3(1126).intl;
      return closure_16(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let category;
      let channel;
      let locked;
      const obj = react2;
      const cResult = obj.c(4);
      ({ channel, category, locked } = arg0);
      let tmp3 = null;
      if (null != category) {
        tmp3 = null;
        if (!tmp2) {
          if (cResult[0] === category) {
            if (cResult[1] === channel) {
              let tmp4;
              if (cResult[2] === locked) {
                tmp4 = cResult[3];
              }
              tmp3 = tmp4;
            }
          }
          const obj2 = { channel, category, locked };
          const tmp7 = authStore3(closure_19, obj2);
          cResult[0] = category;
          cResult[1] = channel;
          cResult[2] = locked;
          cResult[3] = tmp7;
          tmp4 = tmp7;
        }
      }
      return tmp3;
    }
  : (category) => {
      category = category.category;
      let tmp4 = null;
      if (null != category) {
        tmp4 = null;
        if (!tmp2) {
          const obj = { channel: tmp, category, locked: tmp3 };
          tmp4 = authStore3(closure_19, obj);
        }
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isEditing) => {
      let items;
      let obj = navigation(576);
      const cResult = obj.c(17);
      isEditing = isEditing.isEditing;
      const tmp4 = closure_18();
      const obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (isEditing) {
        return null;
      } else {
        let tmp6;
        let tmp8;
        let tmp11;
        let tmp10;
        let tmp15;
        let tmp19;
        let tmp18;
        let tmp23;
        if (cResult[0] !== navigation) {
          const fn = function t(type) {
            const obj = { type };
            navigation.push(constants2.NEW_PERMISSION, obj);
          };
          cResult[0] = navigation;
          cResult[1] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[1];
        }
        let closure_1 = tmp6;
        const _Symbol = Symbol;
        const tableRowGroupContainer = tmp4.tableRowGroupContainer;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(navigation(1126).t.vPHdP5);
          cResult[2] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[2];
        }
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_16(navigation(10978).PlusMediumIcon, {});
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(navigation(1126).t.fVWxvT);
          cResult[3] = tmp13;
          cResult[4] = stringResult1;
          tmp11 = stringResult1;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[3];
          tmp11 = cResult[4];
        }
        if (cResult[5] !== tmp6) {
          const obj3 = {
            icon: tmp10,
            label: tmp11,
            onPress() {
              return closure_1(constants.ROLE);
            },
          };
          const tmp17 = closure_16(navigation(5993).TableRow, obj3);
          cResult[5] = tmp6;
          cResult[6] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[6];
        }
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp21 = closure_16(navigation(10978).PlusMediumIcon, {});
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(navigation(1126).t.riesLt);
          cResult[7] = tmp21;
          cResult[8] = stringResult2;
          tmp19 = stringResult2;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[7];
          tmp19 = cResult[8];
        }
        if (cResult[9] !== tmp6) {
          const obj4 = {
            icon: tmp18,
            label: tmp19,
            onPress() {
              return closure_1(constants.MEMBER);
            },
          };
          const tmp25 = closure_16(navigation(5993).TableRow, obj4);
          cResult[9] = tmp6;
          cResult[10] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[10];
        }
        if (cResult[11] === tmp15) {
          let tmp26;
          if (cResult[12] === tmp23) {
            tmp26 = cResult[13];
          }
          if (cResult[14] === tmp4.tableRowGroupContainer) {
            let tmp29;
            if (cResult[15] === tmp26) {
              tmp29 = cResult[16];
            }
            return tmp29;
          }
          const obj5 = { style: tableRowGroupContainer, children: tmp26 };
          const tmp32 = closure_16(View, obj5);
          cResult[14] = tmp4.tableRowGroupContainer;
          cResult[15] = tmp26;
          cResult[16] = tmp32;
          tmp29 = tmp32;
        }
        const obj6 = { title: tmp8, hasIcons: true, children: items };
        items = [tmp15, tmp23];
        const tmp28 = closure_17(navigation(6074).TableRowGroup, obj6);
        cResult[11] = tmp15;
        cResult[12] = tmp23;
        cResult[13] = tmp28;
        tmp26 = tmp28;
      }
    }
  : (isEditing) => {
      let TableRowGroup;
      let closure_0;
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj3;
      let _require;
      isEditing = isEditing.isEditing;
      const tmp = closure_18();
      let obj = require("useNavigation");
      _require = obj.useNavigation();
      if (isEditing) {
        return null;
      } else {
        const obj2 = { style: tmp.tableRowGroupContainer, children: closure_17(TableRowGroup, obj3) };
        obj3 = { title: intl.string(require("intl").t.vPHdP5), hasIcons: true, children: items };
        TableRowGroup = tmp2(6074).TableRowGroup;
        intl = tmp2(1126).intl;
        const obj4 = {
          icon: closure_16(require("PlusMediumIcon").PlusMediumIcon, {}),
          label: intl2.string(require("intl").t.fVWxvT),
          onPress() {
            const obj = { type: constants.ROLE };
            closure_0.push(constants2.NEW_PERMISSION, obj);
          },
        };
        const TableRow = tmp2(5993).TableRow;
        intl2 = tmp2(1126).intl;
        items = [closure_16(TableRow, obj4)];
        const obj5 = {
          icon: closure_16(require("PlusMediumIcon").PlusMediumIcon, {}),
          label: intl3.string(require("intl").t.riesLt),
          onPress() {
            const obj = { type: constants.MEMBER };
            closure_0.push(constants2.NEW_PERMISSION, obj);
          },
        };
        const TableRow2 = tmp2(5993).TableRow;
        intl3 = tmp2(1126).intl;
        items[1] = closure_16(TableRow2, obj5);
        return closure_16(View, obj2);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onDelete) => {
      let colorString;
      let colorStrings;
      let intl;
      let name;
      let onSelect;
      let role;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(14);
      ({ role, isEditing, onSelect } = onDelete);
      ({ name, colorString, colorStrings } = role);
      onDelete = onDelete.onDelete;
      if (cResult[0] !== role) {
        const tmp6 = isEveryoneRole(role);
        cResult[0] = role;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === colorString) {
        if (cResult[3] === colorStrings) {
          let tmp7;
          if (cResult[4] === name) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === isEditing) {
            let tmp10;
            if (cResult[7] === tmp4) {
              tmp10 = cResult[8];
            }
            let tmp14 = onSelect;
            if (isEditing) {
              tmp14 = onSelect;
              if (!tmp4) {
                tmp14 = onDelete;
              }
            }
            if (cResult[9] === tmp7) {
              if (cResult[10] === !isEditing) {
                if (cResult[11] === tmp10) {
                  let tmp15;
                  if (cResult[12] === tmp14) {
                    tmp15 = cResult[13];
                  }
                  return tmp15;
                }
              }
            }
            const obj2 = { label: tmp7, arrow: !isEditing, icon: tmp10, onPress: tmp14 };
            const tmp17 = authStore3(TableRow3.TableRow, obj2);
            cResult[9] = tmp7;
            cResult[10] = !isEditing;
            cResult[11] = tmp10;
            cResult[12] = tmp14;
            cResult[13] = tmp17;
            tmp15 = tmp17;
          }
          let tmp11 = null;
          if (isEditing) {
            tmp11 = null;
            if (!tmp4) {
              const obj3 = {
                color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
                accessibilityLabel: intl.string(intl5.t.N86XcP),
              };
              const CircleMinusIcon = CircleMinusIcon2.CircleMinusIcon;
              intl = intl5.intl;
              tmp11 = authStore3(CircleMinusIcon, obj3);
            }
          }
          cResult[6] = isEditing;
          cResult[7] = tmp4;
          cResult[8] = tmp11;
          tmp10 = tmp11;
        }
      }
      const tmp8 = authStore3(RoleLabel.RoleLabel, { name, color: colorString, colors: colorStrings });
      cResult[2] = colorString;
      cResult[3] = colorStrings;
      cResult[4] = name;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (onDelete) => {
      let colorString;
      let colorStrings;
      let intl;
      let name;
      let onSelect;
      let role;
      let tmp2Result;
      let tmp7;
      ({ role, isEditing, onSelect } = onDelete);
      onDelete = onDelete.onDelete;
      ({ name, colorString, colorStrings } = role);
      const tmp = isEveryoneRole(role);
      const obj = {
        label: authStore3(RoleLabel.RoleLabel, { name, color: colorString, colors: colorStrings }),
        arrow: !isEditing,
        icon: tmp2Result,
        onPress: tmp7,
      };
      const TableRow = TableRow3.TableRow;
      tmp2Result = null;
      if (isEditing) {
        tmp2Result = null;
        if (!tmp) {
          const obj2 = {
            color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
            accessibilityLabel: intl.string(intl5.t.N86XcP),
          };
          const CircleMinusIcon = CircleMinusIcon2.CircleMinusIcon;
          intl = intl5.intl;
          tmp2Result = authStore3(CircleMinusIcon, obj2);
        }
      }
      tmp7 = onSelect;
      if (isEditing) {
        tmp7 = onSelect;
        if (!tmp) {
          tmp7 = onDelete;
        }
      }
      return authStore3(TableRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let channel;
      let first;
      let obj5;
      let onDeleteRow;
      let tmp7;
      const tmp = guild;
      let obj = guild(onDeleteRow[15]);
      const cResult = obj.c(36);
      guild = guild.guild;
      ({ channel, isEditing } = guild);
      const onSelectRow = guild.onSelectRow;
      onDeleteRow = guild.onDeleteRow;
      const tmp4 = closure_18();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function l() {
          return GuildRoleStore.getSortedRoles(guild.id);
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(onDeleteRow[31]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === channel.permissionOverwrites) {
        if (cResult[4] === guild.id) {
          obj5 = cResult[5];
        }
        if (cResult[8] === isEditing) {
          if (cResult[9] === onDeleteRow) {
            if (cResult[10] === onSelectRow) {
              if (cResult[11] === tmp8) {
                if (cResult[12] === stateFromStores) {
                  if (cResult[27] === tmp11) {
                    if (cResult[28] === tmp13) {
                      if (cResult[29] === tmp14) {
                        let tmp23;
                        if (cResult[30] === tmp15) {
                          tmp23 = cResult[31];
                        }
                        if (cResult[32] === tmp12) {
                          if (cResult[33] === tmp16) {
                            let tmp26;
                            if (cResult[34] === tmp23) {
                              tmp26 = cResult[35];
                            }
                            return tmp26;
                          }
                        }
                        const obj2 = { style: tmp16, children: tmp23 };
                        const tmp28 = closure_16(tmp12, obj2);
                        cResult[32] = tmp12;
                        cResult[33] = tmp16;
                        class D {
                          constructor(arg0) {
                            closure_0 = guild;
                            obj = {
                              role: guild,
                              isEditing,
                              onSelect() {
                                return onSelectRow(role.id);
                              },
                              onDelete() {
                                return onDeleteRow(role.id);
                              },
                            };
                            return closure_1_16(closure_1_22, obj, guild.id);
                          }
                        }
                        cResult[34] = tmp23;
                        cResult[35] = tmp28;
                        tmp26 = tmp28;
                      }
                    }
                  }
                  const obj3 = { title: tmp13, hasIcons: tmp14, children: tmp15 };
                  const tmp25 = closure_16(tmp11, obj3);
                  cResult[27] = tmp11;
                  class D {
                    constructor(arg0) {
                      closure_0 = guild;
                      obj = {
                        role: guild,
                        isEditing,
                        onSelect() {
                          return onSelectRow(role.id);
                        },
                        onDelete() {
                          return onDeleteRow(role.id);
                        },
                      };
                      return closure_1_16(closure_1_22, obj, guild.id);
                    }
                  }
                  cResult[29] = tmp14;
                  cResult[30] = tmp15;
                  cResult[31] = tmp25;
                  tmp23 = tmp25;
                }
              }
            }
          }
        }
        if (cResult[20] !== tmp8) {
          class G {
            constructor(arg0) {
              let type;
              if (obj5[arg0.id] != null) {
                type = tmp.type;
              }
              return type === Server.PermissionOverwriteType.ROLE;
            }
          }
          cResult[20] = tmp8;
          cResult[21] = G;
        } else {
          class G {
            constructor(arg0) {
              let type;
              if (obj5[arg0.id] != null) {
                type = tmp.type;
              }
              return type === Server.PermissionOverwriteType.ROLE;
            }
          }
        }
        const found = stateFromStores.filter(G);
        const tableRowGroupContainer = tmp4.tableRowGroupContainer;
        const TableRowGroup = tmp(tmp2[24]).TableRowGroup;
        const _Symbol = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor(arg0) {
              let type;
              if (obj5[arg0.id] != null) {
                type = tmp.type;
              }
              return type === Server.PermissionOverwriteType.ROLE;
            }
          }
          cResult[22] = obj4.string(tmp(onDeleteRow[17]).t["LPJmL/"]);
          const stringResult = obj4.string(tmp(onDeleteRow[17]).t["LPJmL/"]);
        } else {
          class G {
            constructor(arg0) {
              let type;
              if (obj5[arg0.id] != null) {
                type = tmp.type;
              }
              return type === Server.PermissionOverwriteType.ROLE;
            }
          }
        }
        if (cResult[23] === isEditing) {
          class G {
            constructor(arg0) {
              let type;
              if (obj5[arg0.id] != null) {
                type = tmp.type;
              }
              return type === Server.PermissionOverwriteType.ROLE;
            }
          }
        }
        class D {
          constructor(arg0) {
            closure_0 = guild;
            obj = {
              role: guild,
              isEditing,
              onSelect() {
                return onSelectRow(role.id);
              },
              onDelete() {
                return onDeleteRow(role.id);
              },
            };
            return closure_1_16(closure_1_22, obj, guild.id);
          }
        }
        cResult[23] = isEditing;
        cResult[24] = onDeleteRow;
        cResult[25] = onSelectRow;
        cResult[26] = D;
      }
      obj5 = {};
      const merged = Object.assign(channel.permissionOverwrites);
      if (null == obj5[guild.id]) {
        class G {
          constructor(arg0) {
            let type;
            if (obj5[arg0.id] != null) {
              type = tmp.type;
            }
            return type === Server.PermissionOverwriteType.ROLE;
          }
        }
        obj5[guild.id] = tmp10;
      }
      cResult[3] = channel.permissionOverwrites;
      cResult[4] = guild.id;
      cResult[5] = obj5;
    }
  : (guild) => {
      let TableRowGroup;
      let intl;
      let obj5;
      guild = guild.guild;
      ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = guild);
      const channel = guild.channel;
      const tmp = closure_18();
      let obj = guild(504);
      const items = [GuildRoleStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
      const obj2 = {};
      const merged = Object.assign(channel.permissionOverwrites);
      if (null == obj2[guild.id]) {
        const id = guild.id;
        const obj3 = PermissionUtilsAll;
        obj2[id] = obj3.makeEveryoneOverwrite(guild.id);
      }
      const found = stateFromStores.filter((item) => {
        let type;
        if (obj2[item.id] != null) {
          type = tmp.type;
        }
        return type === Server.PermissionOverwriteType.ROLE;
      });
      const obj4 = { style: tmp.tableRowGroupContainer, children: closure_16(TableRowGroup, obj5) };
      obj5 = {
        title: intl.string(guild(1126).t["LPJmL/"]),
        hasIcons: true,
        children: found.map((role) => {
          const obj = {
            role,
            isEditing,
            onSelect() {
              return importAll(role.id);
            },
            onDelete() {
              return dependencyMap(role.id);
            },
          };
          return closure_1_16(closure_1_22, obj, role.id);
        }),
      };
      TableRowGroup = tmp2(6074).TableRowGroup;
      intl = tmp2(1126).intl;
      return closure_16(View, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onDelete) => {
      let guildId;
      let intl;
      let onSelect;
      let tmp5;
      let user;
      const obj = react2;
      const cResult = obj.c(8);
      ({ guildId, user, isEditing, onSelect } = onDelete);
      if (isEditing) {
        onSelect = onDelete.onDelete;
      }
      if (cResult[0] !== isEditing) {
        let tmp6 = null;
        if (isEditing) {
          const obj2 = {
            color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
            accessibilityLabel: intl.string(intl5.t.N86XcP),
          };
          const CircleMinusIcon = CircleMinusIcon2.CircleMinusIcon;
          intl = intl5.intl;
          tmp6 = authStore3(CircleMinusIcon, obj2);
        }
        cResult[0] = isEditing;
        cResult[1] = tmp6;
        tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === guildId) {
        if (cResult[3] === onSelect) {
          if (cResult[4] === !isEditing) {
            if (cResult[5] === tmp5) {
              let tmp9;
              if (cResult[6] === user.id) {
                tmp9 = cResult[7];
              }
              return tmp9;
            }
          }
        }
      }
      const obj3 = { userId: user.id, guildId, onPress: onSelect, arrow: !isEditing, leading: tmp5 };
      const tmp10 = authStore3(DetailedGuildIdentityUserRowDefault, obj3);
      cResult[2] = guildId;
      cResult[3] = onSelect;
      cResult[4] = !isEditing;
      cResult[5] = tmp5;
      cResult[6] = user.id;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let guildId;
      let intl;
      let onDelete;
      let onSelect;
      let tmpResult;
      let user;
      ({ isEditing, onSelect } = arg0);
      ({ guildId, user, onDelete } = arg0);
      const obj = { userId: user.id, guildId, onPress: onSelect, arrow: !isEditing, leading: tmpResult };
      const tmp4 = DetailedGuildIdentityUserRowDefault;
      if (isEditing) {
        onSelect = onDelete;
      }
      tmpResult = null;
      if (isEditing) {
        const obj2 = {
          color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
          accessibilityLabel: intl.string(intl5.t.N86XcP),
        };
        const CircleMinusIcon = CircleMinusIcon2.CircleMinusIcon;
        intl = intl5.intl;
        tmpResult = authStore3(CircleMinusIcon, obj2);
      }
      return authStore3(tmp4, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onSelectRow) => {
      let channel;
      let guild_id;
      let obj = isEditing(guild_id[15]);
      const cResult = obj.c(29);
      ({ channel, isEditing } = onSelectRow);
      onSelectRow = onSelectRow.onSelectRow;
      const onDeleteRow = onSelectRow.onDeleteRow;
      guild_id = channel.guild_id;
      const permissionOverwrites = channel.permissionOverwrites;
      const tmp4 = closure_18();
      const tmp6 = onSelectRow(guild_id[34])(guild_id, permissionOverwrites);
      const tmp5 = onSelectRow;
      if (cResult[0] === guild_id) {
        if (cResult[1] === isEditing) {
          if (cResult[2] === onDeleteRow) {
            if (cResult[3] === onSelectRow) {
              if (cResult[4] === tmp6) {
                let tmp7;
                let tmp8;
                let tmp9;
                let tmp10;
                let tmp11;
                let tmp12;
                let tmp13;
                if (cResult[5] === tmp4) {
                  tmp7 = cResult[6];
                  tmp8 = cResult[7];
                  tmp9 = cResult[8];
                  tmp10 = cResult[9];
                  tmp11 = cResult[10];
                  tmp12 = cResult[11];
                  tmp13 = cResult[12];
                }
                const _Symbol2 = Symbol;
                let str = "react.early_return_sentinel";
                if (tmp13 === Symbol.for("react.early_return_sentinel")) {
                  if (cResult[20] === tmp7) {
                    if (cResult[21] === tmp9) {
                      if (cResult[22] === tmp10) {
                        let tmp27;
                        if (cResult[23] === tmp11) {
                          tmp27 = cResult[24];
                        }
                        if (cResult[25] === tmp8) {
                          if (cResult[26] === tmp12) {
                            let tmp30;
                            if (cResult[27] === tmp27) {
                              tmp30 = cResult[28];
                            }
                            tmp13 = tmp30;
                          }
                        }
                        const obj4 = { style: tmp12, children: tmp27 };
                        const tmp32 = closure_16(tmp8, obj4);
                        cResult[25] = tmp8;
                        cResult[26] = tmp12;
                        cResult[27] = tmp27;
                        cResult[28] = tmp32;
                        tmp30 = tmp32;
                      }
                    }
                  }
                  const obj5 = { title: tmp9, hasIcons: tmp10, children: tmp11 };
                  const tmp29 = closure_16(tmp7, obj5);
                  cResult[20] = tmp7;
                  cResult[21] = tmp9;
                  cResult[22] = tmp10;
                  cResult[23] = tmp11;
                  cResult[24] = tmp29;
                  tmp27 = tmp29;
                }
                return tmp13;
              }
            }
          }
        }
      }
      Symbol.for("react.early_return_sentinel");
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor(arg0) {
            str = onSelectRow.username;
            return str.toLowerCase();
          }
        }
        cResult[13] = N;
      } else {
        class N {
          constructor(arg0) {
            str = onSelectRow.username;
            return str.toLowerCase();
          }
        }
      }
      const obj2 = tmp5(guild_id[23])(tmp6);
      const iter = obj2.sortBy(N);
      const valueResult = iter.value();
      if (valueResult.length > 0) {
        class N {
          constructor(arg0) {
            str = onSelectRow.username;
            return str.toLowerCase();
          }
        }
        const tableRowGroupContainer = tmp4.tableRowGroupContainer;
        const _Symbol = Symbol;
        const TableRowGroup = isEditing(tmp2[24]).TableRowGroup;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor(arg0) {
              str = onSelectRow.username;
              return str.toLowerCase();
            }
          }
          cResult[14] = obj3.string(isEditing(guild_id[17]).t["9Oq93m"]);
          const stringResult = obj3.string(isEditing(guild_id[17]).t["9Oq93m"]);
        } else {
          class N {
            constructor(arg0) {
              str = onSelectRow.username;
              return str.toLowerCase();
            }
          }
        }
        if (cResult[15] === guild_id) {
          class N {
            constructor(arg0) {
              str = onSelectRow.username;
              return str.toLowerCase();
            }
          }
        }
        class L {
          constructor(arg0) {
            closure_0 = onSelectRow;
            obj = {
              guildId: guild_id,
              user: onSelectRow,
              isEditing: closure_0,
              onSelect() {
                /* body not rendered: F147833 */
              },
              onDelete() {
                /* body not rendered: F147834 */
              },
            };
            return closure_1_16(closure_1_24, obj, onSelectRow.id);
          }
        }
        cResult[15] = guild_id;
        cResult[16] = isEditing;
        cResult[17] = onDeleteRow;
        cResult[18] = onSelectRow;
        cResult[19] = L;
      }
      cResult[0] = guild_id;
      cResult[1] = isEditing;
      cResult[2] = onDeleteRow;
      cResult[3] = onSelectRow;
      cResult[4] = tmp6;
      cResult[5] = tmp4;
      cResult[6] = undefined;
      cResult[7] = undefined;
      cResult[8] = undefined;
      cResult[9] = undefined;
      cResult[10] = undefined;
      cResult[11] = undefined;
      cResult[12] = null;
      tmp13 = tmp16;
      tmp12 = tmp17;
      tmp11 = tmp18;
      tmp10 = tmp19;
      tmp9 = tmp20;
      tmp8 = tmp21;
      tmp7 = tmp22;
    }
  : (channel) => {
      let TableRowGroup;
      let intl;
      let obj3;
      channel = channel.channel;
      const guild_id = channel.guild_id;
      ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = channel);
      const permissionOverwrites = channel.permissionOverwrites;
      const tmp = closure_18();
      const tmp3 = useGetOrFetchChannelOverwriteUsersDefault(guild_id, permissionOverwrites);
      let obj = _modDef12(tmp3);
      const iter = obj.sortBy((username) => {
        const str = username.username;
        return str.toLowerCase();
      });
      const valueResult = iter.value();
      let tmp4 = null;
      if (valueResult.length > 0) {
        const obj2 = { style: tmp.tableRowGroupContainer, children: closure_16(TableRowGroup, obj3) };
        obj3 = {
          title: intl.string(guild_id(1126).t["9Oq93m"]),
          hasIcons: true,
          children: valueResult.map((user) => {
            guildId = user;
            const obj = {
              guildId,
              user,
              isEditing,
              onSelect() {
                return importAll(user.id);
              },
              onDelete() {
                return dependencyMap(user.id);
              },
            };
            return closure_1_16(closure_1_24, obj, user.id);
          }),
        };
        TableRowGroup = guild_id(6074).TableRowGroup;
        intl = guild_id(1126).intl;
        tmp4 = closure_16(View, obj2);
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let stateFromStores2;
      let tmp12;
      let tmp17;
      let tmp23;
      let tmp9;
      let tmp = channelId;
      let obj = channelId(stateFromStores2[15]);
      const cResult = obj.c(62);
      channelId = channelId.channelId;
      closure_18();
      const obj2 = channelId(stateFromStores2[27]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = R;
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(stateFromStores2[31]);
      const stateFromStores = tmpResult.useStateFromStores(first, R, tmp9);
      const tmpResult5 = tmp(stateFromStores2[20]);
      const appChannelBotUserId = tmpResult5.useAppChannelBotUserId(stateFromStores);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
        const items2 = [ChannelStore];
        cResult[4] = items2;
        tmp12 = items2;
      } else {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
      }
      const tmp13 = cResult[5];
      if (stateFromStores != null) {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
      }
      if (tmp13 !== undefined) {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
        if (stateFromStores != null) {
          class R {
            constructor() {
              return closure_9.getChannel(channelId);
            }
          }
        }
        class M {
          constructor() {
            parent_id = undefined;
            tmp = closure_9;
            getChannel = closure_9.getChannel;
            if (closure_2 != null) {
              parent_id = closure_2.parent_id;
            }
            return getChannel(parent_id);
          }
        }
        cResult[5] = tmp15;
        cResult[6] = M;
      } else {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
      }
      const tmpResult6 = tmp(stateFromStores2[31]);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp12, M);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
        const items3 = [];
        class M {
          constructor() {
            parent_id = undefined;
            tmp = closure_9;
            getChannel = closure_9.getChannel;
            if (closure_2 != null) {
              parent_id = closure_2.parent_id;
            }
            return getChannel(parent_id);
          }
        }
        cResult[7] = items3;
        tmp17 = items3;
      } else {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
      }
      const tmp18 = cResult[8];
      if (stateFromStores != null) {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
      }
      if (tmp18 !== undefined) {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
        if (stateFromStores != null) {
          class R {
            constructor() {
              return closure_9.getChannel(channelId);
            }
          }
        }
        class M {
          constructor() {
            parent_id = undefined;
            tmp = closure_9;
            getChannel = closure_9.getChannel;
            if (closure_2 != null) {
              parent_id = closure_2.parent_id;
            }
            return getChannel(parent_id);
          }
        }
        cResult[8] = tmp20;
        cResult[9] = tmp21;
      } else {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
      }
      const tmpResult7 = tmp(stateFromStores2[31]);
      stateFromStores2 = tmpResult7.useStateFromStores(tmp17, tmp21);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
        const items4 = [];
        class M {
          constructor() {
            parent_id = undefined;
            tmp = closure_9;
            getChannel = closure_9.getChannel;
            if (closure_2 != null) {
              parent_id = closure_2.parent_id;
            }
            return getChannel(parent_id);
          }
        }
        cResult[10] = items4;
        tmp23 = items4;
      } else {
        class R {
          constructor() {
            return closure_9.getChannel(channelId);
          }
        }
      }
      if (cResult[11] !== stateFromStores2) {
        class F {
          constructor() {
            rolesSnapshot = undefined;
            if (null != closure_3) {
              tmp3 = closure_10;
              rolesSnapshot = closure_10.getRolesSnapshot(tmp.id);
            }
            return rolesSnapshot;
          }
        }
        class M {
          constructor() {
            parent_id = undefined;
            tmp = closure_9;
            getChannel = closure_9.getChannel;
            if (closure_2 != null) {
              parent_id = closure_2.parent_id;
            }
            return getChannel(parent_id);
          }
        }
        cResult[12] = F;
      } else {
        class F {
          constructor() {
            rolesSnapshot = undefined;
            if (null != closure_3) {
              tmp3 = closure_10;
              rolesSnapshot = closure_10.getRolesSnapshot(tmp.id);
            }
            return rolesSnapshot;
          }
        }
      }
      const tmpResult8 = tmp(stateFromStores2[31]);
      const stateFromStores3 = tmpResult8.useStateFromStores(tmp23, F);
      if (cResult[13] === appChannelBotUserId) {
        class F {
          constructor() {
            rolesSnapshot = undefined;
            if (null != closure_3) {
              tmp3 = closure_10;
              rolesSnapshot = closure_10.getRolesSnapshot(tmp.id);
            }
            return rolesSnapshot;
          }
        }
      }
      if (null != stateFromStores) {
        class F {
          constructor() {
            rolesSnapshot = undefined;
            if (null != closure_3) {
              tmp3 = closure_10;
              rolesSnapshot = closure_10.getRolesSnapshot(tmp.id);
            }
            return rolesSnapshot;
          }
        }
        stateFromStores(stateFromStores2[19]);
        class M {
          constructor() {
            parent_id = undefined;
            tmp = closure_9;
            getChannel = closure_9.getChannel;
            if (closure_2 != null) {
              parent_id = closure_2.parent_id;
            }
            return getChannel(parent_id);
          }
        }
      }
      cResult[13] = appChannelBotUserId;
      cResult[14] = stateFromStores1;
      cResult[15] = stateFromStores;
      cResult[16] = null != stateFromStores;
    }
  : (channelId) => {
      let closure_6;
      let items6;
      channelId = channelId.channelId;
      let stateFromStores2;
      isEditing = undefined;
      react = undefined;
      let callback;
      function handleClearPermissionOverwrite(arg0) {
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let username;
        let closure_0 = arg0;
        let tmp;
        if (closure_4 != null) {
          tmp = closure_4[arg0];
        }
        user = user.getUser(arg0);
        if (null != tmp) {
          username = tmp.name;
        } else if (user != null) {
          username = user.username;
        }
        let obj = {
          title: intl.formatToPlainString(channelId(stateFromStores2[17]).t.txPV7k, { name: username }),
          body: intl2.format(channelId(stateFromStores2[17]).t.xERCnZ, { name: username }),
          cancelText: intl3.string(channelId(stateFromStores2[17]).t.gm1Vej),
          confirmText: intl4.string(channelId(stateFromStores2[17]).t.p89ACt),
          onConfirm() {
            const obj = ChannelActionCreatorsDefault;
            const result = obj.clearPermissionOverwrite(channelId, closure_0);
          },
        };
        const show = navigation(stateFromStores2[16]).show;
        navigation(stateFromStores2[16]);
        intl = channelId(stateFromStores2[17]).intl;
        intl2 = channelId(stateFromStores2[17]).intl;
        intl3 = channelId(stateFromStores2[17]).intl;
        intl4 = channelId(stateFromStores2[17]).intl;
        show(obj);
      }
      let tmp = closure_18();
      let obj = channelId(stateFromStores2[27]);
      navigation = obj.useNavigation();
      const items = [ChannelStore];
      const items1 = [channelId];
      const obj2 = channelId(stateFromStores2[31]);
      const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
      const obj3 = channelId(stateFromStores2[20]);
      const appChannelBotUserId = obj3.useAppChannelBotUserId(stateFromStores);
      const items2 = [ChannelStore];
      const obj4 = channelId(stateFromStores2[31]);
      const stateFromStores1 = obj4.useStateFromStores(items2, () => {
        let parent_id;
        const getChannel = ChannelStore.getChannel;
        if (stateFromStores != null) {
          parent_id = stateFromStores.parent_id;
        }
        return getChannel(parent_id);
      });
      const items3 = [GuildStore];
      const obj5 = channelId(stateFromStores2[31]);
      const tmp2 = stateFromStores2;
      stateFromStores2 = obj5.useStateFromStores(items3, () => {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        return getGuild(guild_id);
      });
      const items4 = [GuildRoleStore];
      const obj6 = channelId(stateFromStores2[31]);
      let closure_4 = obj6.useStateFromStores(items4, () => {
        let rolesSnapshot;
        if (null != stateFromStores2) {
          rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp.id);
        }
        return rolesSnapshot;
      });
      let areChannelsLockedResult = null != stateFromStores;
      if (areChannelsLockedResult) {
        const obj7 = stateFromStores(tmp2[19]);
        areChannelsLockedResult = obj7.areChannelsLocked(stateFromStores, stateFromStores1, appChannelBotUserId);
      }
      const tmp10 = closure_4(react.useState(false), 2);
      isEditing = tmp10[0];
      react = tmp10[1];
      callback = react.useCallback(() => {
        closure_6((arg0) => !arg0);
        const obj = DeprecatedLayoutAnimation;
        const result = obj.DeprecatedLayoutAnimation();
      }, []);
      const items5 = [navigation, isEditing, callback];
      const layoutEffect = react.useLayoutEffect(() => {
        let onPress;
        let obj = {
          headerRight(arg0) {
            let stringResult;
            const obj = { onPress, label: stringResult };
            const HeaderTextButton = channelId(stateFromStores2[36]).HeaderTextButton;
            const merged = Object.assign(arg0);
            const intl = channelId(stateFromStores2[17]).intl;
            const string = intl.string;
            const t = channelId(stateFromStores2[17]).t;
            if (isEditing) {
              stringResult = string(t.i4jeWR);
            } else {
              stringResult = string(t.bt75uw);
            }
            return closure_2_16(HeaderTextButton, obj);
          },
        };
        navigation.setOptions(obj);
      }, items5);
      let tmp14 = null;
      if (null != stateFromStores) {
        tmp14 = null;
        if (null != stateFromStores2) {
          const obj8 = { style: tmp.tableContainer, children: items6 };
          const obj9 = {
            channel: stateFromStores,
            category: stateFromStores1,
            isEditing,
            locked: areChannelsLockedResult,
          };
          items6 = [closure_16(closure_20, obj9), , ,];
          const obj10 = { isEditing };
          items6[1] = closure_16(closure_21, obj10);
          const obj11 = {
            guild: stateFromStores2,
            channel: stateFromStores,
            isEditing,
            onSelectRow(id) {
              const obj = { type: constants.ROLE, id };
              if (!first) {
                navigation.push(constants2.PERMISSION_OVERRIDES, obj);
              }
            },
            onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            },
          };
          items6[2] = closure_16(closure_23, obj11);
          const obj12 = {
            channel: stateFromStores,
            isEditing,
            onSelectRow(id) {
              const obj = { type: constants.MEMBER, id };
              if (!first) {
                navigation.push(constants2.PERMISSION_OVERRIDES, obj);
              }
            },
            onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            },
          };
          items6[3] = closure_16(closure_25, obj12);
          tmp14 = closure_17(callback, obj8);
        }
      }
      return tmp14;
    };
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx");

export default tmp5;
