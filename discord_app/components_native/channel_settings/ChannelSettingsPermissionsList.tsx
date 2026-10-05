// discord_app/components_native/channel_settings/ChannelSettingsPermissionsList.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Server from "../../flow/Server.tsx";
import fuzzysearchDefault from "../../../_runtime/05702_fuzzysearch.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channelId, enabled, navigation;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ PermissionOverrideType: unpackModuleId, ChannelSettingsSections: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = { rows: [], sections: [] };
let createStyles = createStyles_mod;
let obj = { container: obj2, containerSearchBar: obj3 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: nativeDefault.space.PX_12,
  flex: 1,
};
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_8 };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (enabled) => {
      let guildId;
      let memberVersion;
      let permissionOverwrites;
      let searchQuery;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(13);
      ({ permissionOverwrites, guildId, searchQuery } = enabled);
      enabled = enabled.enabled;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        const fn = function s() {
          return memberVersion.getMemberVersion();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (enabled) {
        let tmp9;
        if (null != guildId) {
          let tmp20;
          if (cResult[2] === guildId) {
            if (cResult[3] === permissionOverwrites) {
              let arr2;
              let tmp22;
              if (cResult[4] === searchQuery) {
                arr2 = cResult[5];
              }
              if (cResult[8] !== arr2.length) {
                const items1 = [arr2.length];
                cResult[8] = arr2.length;
                cResult[9] = items1;
                tmp22 = items1;
              } else {
                tmp22 = cResult[9];
              }
              if (cResult[10] === arr2) {
                let tmp23;
                if (cResult[11] === tmp22) {
                  tmp23 = cResult[12];
                }
                tmp9 = tmp23;
              }
              const obj2 = { rows: arr2, sections: tmp22 };
              cResult[10] = arr2;
              cResult[11] = tmp22;
              cResult[12] = obj2;
              tmp23 = obj2;
            }
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const mutableAllGuildsAndMembers = GuildMemberStore.getMutableAllGuildsAndMembers();
            cResult[6] = mutableAllGuildsAndMembers;
            let tmp10 = mutableAllGuildsAndMembers;
          } else {
            tmp10 = cResult[6];
          }
          const items2 = [];
          for (const key10049 in tmp10[guildId]) {
            let user = UserStore.getUser(key10049);
            if (null == user) {
              continue;
            } else {
              let tmp13;
              if (permissionOverwrites != null) {
                tmp13 = permissionOverwrites[key10049];
              }
              if (null != tmp13) {
                continue;
              } else {
                let tmp17Result = 0 === searchQuery.length;
                if (!tmp17Result) {
                  let tmp17 = fuzzysearchDefault;
                  let str = user.username;
                  let formatted = searchQuery.toLowerCase();
                  tmp17Result = tmp17(formatted, str.toLowerCase());
                }
                if (!tmp17Result) {
                  continue;
                } else {
                  let arr = items2.push(user);
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function b(username, username2) {
              const str = username.username;
              const formatted = str.toLowerCase();
              const str2 = username2.username;
              return formatted.localeCompare(str2.toLowerCase());
            };
            cResult[7] = fn2;
            tmp20 = fn2;
          } else {
            tmp20 = cResult[7];
          }
          const sorted = items2.sort(tmp20);
          cResult[2] = guildId;
          cResult[3] = permissionOverwrites;
          cResult[4] = searchQuery;
          cResult[5] = items2;
          arr2 = items2;
        }
        return tmp9;
      }
      tmp9 = closure_15;
    }
  : (enabled) => {
      let memberVersion;
      enabled = enabled.enabled;
      const permissionOverwrites = enabled.permissionOverwrites;
      const guildId = enabled.guildId;
      const searchQuery = enabled.searchQuery;
      let obj = enabled(searchQuery[13]);
      let items = [GuildMemberStore];
      let items1 = [
        enabled,
        guildId,
        obj.useStateFromStores(items, () => memberVersion.getMemberVersion()),
        permissionOverwrites,
        searchQuery,
      ];
      return react.useMemo(() => {
        let items1;
        if (enabled) {
          if (null != guildId) {
            const items = [];
            for (const key10003 in GuildMemberStore.getMutableAllGuildsAndMembers()[tmp2]) {
              let user = UserStore.getUser(key10003);
              if (null == user) {
                continue;
              } else {
                let tmp4;
                if (permissionOverwrites != null) {
                  tmp4 = permissionOverwrites[key10003];
                }
                if (null != tmp4) {
                  continue;
                } else {
                  let tmp8Result = 0 === searchQuery.length;
                  if (!tmp8Result) {
                    let tmp8 = fuzzysearchDefault;
                    let str2 = user.username;
                    let formatted = searchQuery.toLowerCase();
                    tmp8Result = tmp8(formatted, str2.toLowerCase());
                  }
                  if (!tmp8Result) {
                    continue;
                  } else {
                    let arr = items.push(user);
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            const sorted = items.sort((username, username2) => {
              const str = username.username;
              const formatted = str.toLowerCase();
              const str2 = username2.username;
              return formatted.localeCompare(str2.toLowerCase());
            });
            const obj = { rows: items, sections: items1 };
            items1 = [items.length];
            return obj;
          }
        }
        return closure_15;
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let searchQuery;
      let sortedGuildRoles;
      const obj = channel(576);
      const cResult = obj.c(12);
      channel = channel.channel;
      ({ sortedGuildRoles, searchQuery } = channel);
      if (channel.enabled) {
        if (null != sortedGuildRoles) {
          let tmp3;
          if (null != channel) {
            let arr;
            if (cResult[0] === channel) {
              if (cResult[1] === searchQuery) {
                let tmp6;
                if (cResult[2] === sortedGuildRoles) {
                  arr = cResult[3];
                }
                if (cResult[7] !== arr.length) {
                  const items = [arr.length];
                  cResult[7] = arr.length;
                  cResult[8] = items;
                  tmp6 = items;
                } else {
                  tmp6 = cResult[8];
                }
                if (cResult[9] === arr) {
                  let tmp7;
                  if (cResult[10] === tmp6) {
                    tmp7 = cResult[11];
                  }
                  tmp3 = tmp7;
                }
                const obj2 = { rows: arr, sections: tmp6 };
                cResult[9] = arr;
                cResult[10] = tmp6;
                cResult[11] = obj2;
                tmp7 = obj2;
              }
            }
            if (cResult[4] === channel) {
              let tmp4;
              if (cResult[5] === searchQuery) {
                tmp4 = cResult[6];
              }
              const found = sortedGuildRoles.filter(tmp4);
              cResult[0] = channel;
              cResult[1] = searchQuery;
              cResult[2] = sortedGuildRoles;
              cResult[3] = found;
              arr = found;
            }
            const fn = function h(name) {
              let tmp = 0 !== searchQuery.length;
              if (tmp) {
                const str2 = name.name;
                const tmp4 = fuzzysearchDefault;
                const formatted = searchQuery.toLowerCase();
                tmp = !tmp4(formatted, str2.toLowerCase());
              }
              return !tmp && null == channel.permissionOverwrites[name.id];
            };
            cResult[4] = channel;
            cResult[5] = searchQuery;
            cResult[6] = fn;
            tmp4 = fn;
          }
          return tmp3;
        }
      }
      tmp3 = closure_15;
    }
  : (enabled) => {
      enabled = enabled.enabled;
      const channel = enabled.channel;
      const sortedGuildRoles = enabled.sortedGuildRoles;
      const searchQuery = enabled.searchQuery;
      let items = [enabled, channel, sortedGuildRoles, searchQuery];
      return react.useMemo(() => {
        let items;
        let length;
        let permissionOverwrites;
        if (enabled) {
          if (null != sortedGuildRoles) {
            if (null != channel) {
              const found = sortedGuildRoles.filter((name) => {
                let tmp = 0 !== length.length;
                if (tmp) {
                  const str2 = name.name;
                  const tmp4 = channel(searchQuery[14]);
                  const formatted = length.toLowerCase();
                  tmp = !tmp4(formatted, str2.toLowerCase());
                }
                return !tmp && null == permissionOverwrites.permissionOverwrites[name.id];
              });
              const obj = { rows: found, sections: items };
              items = [found.length];
              return obj;
            }
          }
        }
        return closure_15;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channelId) => {
        let contentHeight;
        let first1;
        let guildId;
        let length2;
        let stateFromStores;
        let tmp10;
        let tmp12;
        let tmp15;
        const tmp = channelId;
        let obj = channelId(stateFromStores[12]);
        const cResult = obj.c(44);
        channelId = channelId.channelId;
        const type = channelId.type;
        closure_16();
        let obj2 = channelId(stateFromStores[15]);
        navigation = obj2.useNavigation();
        const tmp6 = guildId(react.useState(""), 2);
        const first = tmp6[0];
        const bottom = type(stateFromStores[16])().bottom;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          first1 = items;
        } else {
          first1 = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function c() {
            return ChannelStore.getChannel(channelId);
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[2];
        }
        const tmpResult = tmp(stateFromStores[13]);
        stateFromStores = tmpResult.useStateFromStores(first1, tmp10);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [GuildRoleStore];
          cResult[3] = items1;
          tmp12 = items1;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] !== stateFromStores) {
          class N {
            constructor() {
              guildId = undefined;
              if (stateFromStores != null) {
                guildId = stateFromStores.getGuildId();
              }
              let sortedGuildRoles;
              if (null != guildId) {
                sortedGuildRoles = GuildRoleStore.getSortedRoles(guildId);
              }
              return { sortedGuildRoles, guildId };
            }
          }
          const items2 = [stateFromStores];
          cResult[4] = stateFromStores;
          cResult[5] = N;
          cResult[6] = items2;
          tmp15 = items2;
        } else {
          class N {
            constructor() {
              guildId = undefined;
              if (stateFromStores != null) {
                guildId = stateFromStores.getGuildId();
              }
              let sortedGuildRoles;
              if (null != guildId) {
                sortedGuildRoles = GuildRoleStore.getSortedRoles(guildId);
              }
              return { sortedGuildRoles, guildId };
            }
          }
          tmp15 = cResult[6];
        }
        const tmpResult2 = tmp(stateFromStores[13]);
        const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp12, N, tmp15);
        guildId = stateFromStoresObject.guildId;
        const MEMBER = constants.MEMBER;
        if (stateFromStores != null) {
          class N {
            constructor() {
              guildId = undefined;
              if (stateFromStores != null) {
                guildId = stateFromStores.getGuildId();
              }
              let sortedGuildRoles;
              if (null != guildId) {
                sortedGuildRoles = GuildRoleStore.getSortedRoles(guildId);
              }
              return { sortedGuildRoles, guildId };
            }
          }
        }
        if (cResult[7] === guildId) {
          class N {
            constructor() {
              guildId = undefined;
              if (stateFromStores != null) {
                guildId = stateFromStores.getGuildId();
              }
              let sortedGuildRoles;
              if (null != guildId) {
                sortedGuildRoles = GuildRoleStore.getSortedRoles(guildId);
              }
              return { sortedGuildRoles, guildId };
            }
          }
        }
        const obj3 = { enabled: tmp18, permissionOverwrites: tmp17, guildId, searchQuery: first };
        cResult[7] = guildId;
        cResult[8] = first;
        cResult[9] = type === MEMBER;
        cResult[10] = undefined;
        cResult[11] = obj3;
      }
    : (channelId) => {
        let SearchField;
        let intl;
        let items5;
        let obj9;
        let permissionOverwrites;
        let stringResult;
        let stringResult1;
        let tmp21Result;
        channelId = channelId.channelId;
        const type = channelId.type;
        let stateFromStores;
        let guildId;
        let rows;
        let rows1;
        let rowContentHeight;
        let callback;
        const tmp = closure_16();
        let obj = channelId(stateFromStores[15]);
        navigation = obj.useNavigation();
        let obj2 = rows;
        const tmp5 = guildId(rows.useState(""), 2);
        const first = tmp5[0];
        const tmp7 = tmp5[1];
        const bottom = type(stateFromStores[16])().bottom;
        const obj3 = channelId(stateFromStores[13]);
        const items = [rowContentHeight];
        stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
        const items1 = [GuildRoleStore];
        const items2 = [stateFromStores];
        const obj4 = channelId(stateFromStores[13]);
        const stateFromStoresObject = obj4.useStateFromStoresObject(
          items1,
          () => {
            guildId = undefined;
            if (stateFromStores != null) {
              guildId = stateFromStores.getGuildId();
            }
            let sortedGuildRoles;
            if (null != guildId) {
              sortedGuildRoles = GuildRoleStore.getSortedRoles(guildId);
            }
            return { sortedGuildRoles, guildId };
          },
          items2,
        );
        guildId = stateFromStoresObject.guildId;
        let obj5 = { enabled: type === constants.MEMBER, permissionOverwrites, guildId, searchQuery: first };
        permissionOverwrites = undefined;
        let sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
        if (stateFromStores != null) {
          permissionOverwrites = stateFromStores.permissionOverwrites;
        }
        const tmp11Result = closure_17(obj5);
        rows = tmp11Result.rows;
        let sections = tmp11Result.sections;
        const obj6 = {
          enabled: type === constants.ROLE,
          channel: stateFromStores,
          sortedGuildRoles,
          searchQuery: first,
        };
        const tmp15 = closure_18(obj6);
        rows1 = tmp15.rows;
        const sections2 = tmp15.sections;
        const tmp2Result = channelId(stateFromStores[17]);
        const scaledRowHeightData = tmp2Result.useScaledRowHeightData();
        rowContentHeight = scaledRowHeightData.rowContentHeight;
        const items3 = [channelId, navigation, type];
        const rowHeight = scaledRowHeightData.rowHeight;
        callback = obj2.useCallback((id, type) => {
          if (null != id) {
            let obj = {
              id,
              type,
              allow: navigation(stateFromStores[19]).NONE,
              deny: navigation(stateFromStores[19]).NONE,
            };
            const updatePermissionOverwrite = type(stateFromStores[18]).updatePermissionOverwrite;
            type(stateFromStores[18]);
            const result = updatePermissionOverwrite(tmp, obj);
            result.then(() => {
              const obj = { type, id, fromCreate: true };
              navigation.push(constants.PERMISSION_OVERRIDES, obj);
            });
          }
        }, items3);
        const items4 = [guildId, rows, rows1, callback, type, rowContentHeight];
        const obj7 = { style: tmp.container, children: items5 };
        const obj8 = { style: tmp.containerSearchBar, children: closure_13(SearchField, obj9) };
        const callback1 = obj2.useCallback((arg0, arg1) => {
          let id;
          let obj5;
          if (null == guildId) {
            return null;
          } else if (constants.ROLE === id) {
            id = tmp13;
            const obj2 = {
              arrow: true,
              end: arg1 === tmp5,
              label: closure_1_13(channelId(stateFromStores[21]).RoleLabel, obj5),
              onPress() {
                callback(id.id, Server.PermissionOverwriteType.ROLE);
              },
              start: 0 === arg1,
            };
            const TableRow = channelId(stateFromStores[20]).TableRow;
            obj5 = { name: null, color: null, colors: null };
            ({ name: obj3.name, colorString: obj3.color, colorStrings: obj3.colors } = rows1[arg1]);
            return closure_1_13(TableRow, obj2);
          } else if (constants.MEMBER === id) {
            id = rows[arg1].id;
            const obj = {
              arrow: true,
              contentHeight: rowContentHeight,
              end: arg1 === tmp5,
              guildId: tmp6,
              userId: id,
              onPress() {
                callback(id, Server.PermissionOverwriteType.MEMBER);
              },
              start: 0 === arg1,
            };
            return closure_1_13(type(stateFromStores[23]), obj);
          } else {
            return null;
          }
        }, items4);
        obj9 = {
          size: "md",
          placeholder: intl.string(channelId(stateFromStores[25]).t["5h0QOP"]),
          onChange: tmp7,
          round: true,
        };
        SearchField = tmp2(tmp3[24]).SearchField;
        intl = tmp2(tmp3[25]).intl;
        items5 = [closure_13(rows1, obj8)];
        const tmp20 = rows1;
        if (0 !== (type === constants.ROLE ? rows1.length : rows.length)) {
          const tmp8Result = type(stateFromStores[26]);
          if (type === constants.ROLE) {
            sections = sections2;
          }
          const obj10 = {
            sections,
            itemSize: rowHeight,
            estimatedListSize: "windowSize",
            renderItem: callback1,
            wrapChildren: true,
            insetStart: type(stateFromStores[10]).space.PX_8,
            insetEnd: type(stateFromStores[10]).space.PX_8 + bottom,
            keyboardShouldPersistTaps: "always",
          };
          tmp21Result = closure_13(tmp8Result, obj10);
        } else {
          const obj11 = {
            Illustration: channelId(stateFromStores[28]).NoResults,
            title: stringResult,
            body: stringResult1,
          };
          const EmptyState = tmp2(tmp3[27]).EmptyState;
          if (type === constants.ROLE) {
            const intl3 = tmp2(tmp3[25]).intl;
            stringResult = intl3.string(tmp2(tmp3[25]).t.Sojqsr);
          } else {
            const intl2 = tmp2(tmp3[25]).intl;
            stringResult = intl2.string(tmp2(tmp3[25]).t.pYHobK);
          }
          if (type === constants.ROLE) {
            const intl5 = tmp2(tmp3[25]).intl;
            stringResult1 = intl5.string(tmp2(tmp3[25]).t["7gBhmO"]);
          } else {
            const intl4 = tmp2(tmp3[25]).intl;
            stringResult1 = intl4.string(tmp2(tmp3[25]).t.tuL9TW);
          }
          tmp21Result = closure_13(EmptyState, obj11);
        }
        items5[1] = tmp21Result;
        return closure_14(tmp20, obj7);
      },
);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsList.tsx");

export default memoResult;
