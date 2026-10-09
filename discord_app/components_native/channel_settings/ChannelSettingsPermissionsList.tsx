// discord_app/components_native/channel_settings/ChannelSettingsPermissionsList.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Server from "../../flow/Server.tsx";
import fuzzysearchDefault from "../../../_runtime/06101_fuzzysearch.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ PermissionOverrideType: closure_11, ChannelSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = { rows: [], sections: [] };
const createStyles = fn(5091);
let obj = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    paddingHorizontal: nativeDefault.space.PX_12,
    flex: 1,
  },
  containerSearchBar: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: nativeDefault.space.PX_12,
  flex: 1,
};
obj.containerSearchBar = { paddingVertical: nativeDefault.space.PX_8 };
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildMemberData(enabled) {
      const cResult = c.c(13);
      ({ permissionOverwrites, guildId, searchQuery } = enabled);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (enabled.enabled) {
        if (null != guildId) {
          if (cResult[2] === guildId) {
            if (cResult[3] === permissionOverwrites) {
              if (cResult[4] === searchQuery) {
                if (cResult[8] !== cResult[5].length) {
                  const items1 = [arr2.length];
                  cResult[8] = arr2.length;
                  cResult[9] = items1;
                  let tmp22 = items1;
                } else {
                  tmp22 = cResult[9];
                }
                if (cResult[10] === cResult[5]) {
                }
                const obj2 = { rows: cResult[5], sections: tmp22 };
                cResult[10] = cResult[5];
                cResult[11] = tmp22;
                cResult[12] = obj2;
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const mutableAllGuildsAndMembers = GuildMemberStore.getMutableAllGuildsAndMembers();
            cResult[6] = mutableAllGuildsAndMembers;
            let tmp9 = mutableAllGuildsAndMembers;
          } else {
            tmp9 = cResult[6];
          }
          const items2 = [];
          for (const key10049 in tmp9[guildId]) {
            let user = UserStore.getUser(key10049);
            if (null == user) {
              continue;
            } else {
              let tmp12;
              if (permissionOverwrites != null) {
                tmp12 = permissionOverwrites[key10049];
              }
              if (null != tmp12) {
                continue;
              } else {
                let tmp16Result = 0 === searchQuery.length;
                if (!tmp16Result) {
                  let tmp16 = fuzzysearchDefault;
                  let str = user.username;
                  let formatted = searchQuery.toLowerCase();
                  tmp16Result = tmp16(formatted, str.toLowerCase());
                }
                if (!tmp16Result) {
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
              const formatted = username.username.toLowerCase();
              return formatted.localeCompare(username2.username.toLowerCase());
            };
            cResult[7] = fn2;
            let tmp19 = fn2;
          } else {
            tmp19 = cResult[7];
          }
          const sorted = items2.sort(tmp19);
          cResult[2] = guildId;
          cResult[3] = permissionOverwrites;
          cResult[4] = searchQuery;
          cResult[5] = items2;
        }
      }
      return closure_15;
    }
  : function useGuildMemberData(enabled) {
      enabled = enabled.enabled;
      const permissionOverwrites = enabled.permissionOverwrites;
      const guildId = enabled.guildId;
      const searchQuery = enabled.searchQuery;
      let items = [GuildMemberStore];
      let items1 = [
        enabled,
        guildId,
        enabled(searchQuery[13]).useStateFromStores(items, () => memberVersion.getMemberVersion()),
        permissionOverwrites,
        searchQuery,
      ];
      return noop.useMemo(() => {
        if (enabled) {
          if (null != guildId) {
            const items = [];
            for (const key10003 in GuildMemberStore.getMutableAllGuildsAndMembers()[tmp]) {
              let user = UserStore.getUser(key10003);
              if (null == user) {
                continue;
              } else {
                let tmp3;
                if (permissionOverwrites != null) {
                  tmp3 = permissionOverwrites[key10003];
                }
                if (null != tmp3) {
                  continue;
                } else {
                  let tmp7Result = 0 === searchQuery.length;
                  if (!tmp7Result) {
                    let tmp7 = fuzzysearchDefault;
                    let str2 = user.username;
                    let formatted = searchQuery.toLowerCase();
                    tmp7Result = tmp7(formatted, str2.toLowerCase());
                  }
                  if (!tmp7Result) {
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
              const formatted = username.username.toLowerCase();
              return formatted.localeCompare(username2.username.toLowerCase());
            });
            const obj = { rows: items, sections: null };
            const items1 = [items.length];
            obj.sections = items1;
            return obj;
          }
        }
        return closure_15;
      }, items1);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildRoleData(channel) {
      const cResult = channel(576).c(12);
      channel = channel.channel;
      ({ sortedGuildRoles, searchQuery } = channel);
      if (channel.enabled) {
        if (null != sortedGuildRoles) {
          if (null != channel) {
            if (cResult[0] === channel) {
              if (cResult[1] === searchQuery) {
                if (cResult[2] === sortedGuildRoles) {
                  if (cResult[7] !== cResult[3].length) {
                    const items = [arr.length];
                    cResult[7] = arr.length;
                    cResult[8] = items;
                    let tmp6 = items;
                  } else {
                    tmp6 = cResult[8];
                  }
                  if (cResult[9] === cResult[3]) {
                  }
                  const obj2 = { rows: cResult[3], sections: tmp6 };
                  cResult[9] = cResult[3];
                  cResult[10] = tmp6;
                  cResult[11] = obj2;
                }
              }
            }
            if (cResult[4] === channel) {
              if (cResult[5] === searchQuery) {
                let tmp3 = cResult[6];
              }
              const found = sortedGuildRoles.filter(tmp3);
              cResult[0] = channel;
              cResult[1] = searchQuery;
              cResult[2] = sortedGuildRoles;
              cResult[3] = found;
            }
            const fn = function h(name) {
              let tmp = 0 !== searchQuery.length;
              if (tmp) {
                const formatted = searchQuery.toLowerCase();
                tmp = !fuzzysearchDefault(formatted, name.name.toLowerCase());
              }
              let tmp6 = !tmp;
              if (!tmp) {
                tmp6 = null == channel.permissionOverwrites[name.id];
              }
              return tmp6;
            };
            cResult[4] = channel;
            cResult[5] = searchQuery;
            cResult[6] = fn;
            tmp3 = fn;
          }
        }
      }
      return closure_15;
    }
  : function useGuildRoleData(enabled) {
      enabled = enabled.enabled;
      const channel = enabled.channel;
      const sortedGuildRoles = enabled.sortedGuildRoles;
      const searchQuery = enabled.searchQuery;
      let items = [enabled, channel, sortedGuildRoles, searchQuery];
      return noop.useMemo(() => {
        if (enabled) {
          if (null != sortedGuildRoles) {
            if (null != channel) {
              const found = sortedGuildRoles.filter((name) => {
                let tmp = 0 !== length.length;
                if (tmp) {
                  const formatted = length.toLowerCase();
                  tmp = !channel(searchQuery[14])(formatted, name.name.toLowerCase());
                  const tmp4 = channel(searchQuery[14]);
                }
                let tmp6 = !tmp;
                if (!tmp) {
                  tmp6 = null == permissionOverwrites.permissionOverwrites[name.id];
                }
                return tmp6;
              });
              const obj = { rows: found, sections: null };
              const items = [found.length];
              obj.sections = items;
              return obj;
            }
          }
        }
        return closure_15;
      }, items);
    };
ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsList.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelSettingsPermissionsList(channelId) {
        const cResult = channelId(stateFromStores[12]).c(44);
        channelId = channelId.channelId;
        const type = channelId.type;
        closure_16();
        let obj = channelId(stateFromStores[12]);
        const navigation = channelId(stateFromStores[15]).useNavigation();
        let obj2 = channelId(stateFromStores[15]);
        const first = guildId(noop.useState(""), 2)[0];
        const bottom = type(stateFromStores[16])().bottom;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first1 = items;
        } else {
          first1 = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function c() {
            return ChannelStore.getChannel(channelId);
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[2];
        }
        const tmp6 = guildId(noop.useState(""), 2);
        stateFromStores = channelId(stateFromStores[13]).useStateFromStores(first1, tmp10);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [GuildRoleStore];
          cResult[3] = items1;
          let tmp12 = items1;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] !== stateFromStores) {
          class B {
            constructor() {
              obj = closure_3;
              guildId = undefined;
              if (closure_3 != null) {
                guildId = obj.getGuildId();
              }
              sortedRoles = undefined;
              if (null != guildId) {
                tmp3 = closure_9;
                sortedRoles = closure_9.getSortedRoles(guildId);
              }
              return { sortedGuildRoles: sortedRoles, guildId };
            }
          }
          const items2 = [stateFromStores];
          cResult[4] = stateFromStores;
          cResult[5] = B;
          cResult[6] = items2;
          let tmp15 = items2;
        } else {
          class B {
            constructor() {
              obj = closure_3;
              guildId = undefined;
              if (closure_3 != null) {
                guildId = obj.getGuildId();
              }
              sortedRoles = undefined;
              if (null != guildId) {
                tmp3 = closure_9;
                sortedRoles = closure_9.getSortedRoles(guildId);
              }
              return { sortedGuildRoles: sortedRoles, guildId };
            }
          }
          tmp15 = cResult[6];
        }
        const tmpResult = channelId(stateFromStores[13]);
        const stateFromStoresObject = channelId(stateFromStores[13]).useStateFromStoresObject(tmp12, B, tmp15);
        guildId = stateFromStoresObject.guildId;
        if (stateFromStores != null) {
          class B {
            constructor() {
              obj = closure_3;
              guildId = undefined;
              if (closure_3 != null) {
                guildId = obj.getGuildId();
              }
              sortedRoles = undefined;
              if (null != guildId) {
                tmp3 = closure_9;
                sortedRoles = closure_9.getSortedRoles(guildId);
              }
              return { sortedGuildRoles: sortedRoles, guildId };
            }
          }
        }
        if (cResult[7] === guildId) {
          class B {
            constructor() {
              obj = closure_3;
              guildId = undefined;
              if (closure_3 != null) {
                guildId = obj.getGuildId();
              }
              sortedRoles = undefined;
              if (null != guildId) {
                tmp3 = closure_9;
                sortedRoles = closure_9.getSortedRoles(guildId);
              }
              return { sortedGuildRoles: sortedRoles, guildId };
            }
          }
        }
        cResult[7] = guildId;
        cResult[8] = first;
        cResult[9] = type === constants.MEMBER;
        cResult[10] = undefined;
        cResult[11] = {
          enabled: type === constants.MEMBER,
          permissionOverwrites: undefined,
          guildId,
          searchQuery: first,
        };
        const obj3 = {
          enabled: type === constants.MEMBER,
          permissionOverwrites: undefined,
          guildId,
          searchQuery: first,
        };
        const tmpResult2 = channelId(stateFromStores[13]);
      }
    : function ChannelSettingsPermissionsList(channelId) {
        channelId = channelId.channelId;
        const type = channelId.type;
        let stateFromStores;
        let guildId;
        let rows;
        let rows1;
        let rowContentHeight;
        let callback;
        const tmp = closure_16();
        const navigation = channelId(stateFromStores[15]).useNavigation();
        const tmp5 = guildId(rows.useState(""), 2);
        const first = tmp5[0];
        let obj = channelId(stateFromStores[15]);
        const items = [rowContentHeight];
        stateFromStores = channelId(stateFromStores[13]).useStateFromStores(items, () =>
          ChannelStore.getChannel(channelId),
        );
        const obj3 = channelId(stateFromStores[13]);
        const items1 = [GuildRoleStore];
        const items2 = [stateFromStores];
        const stateFromStoresObject = channelId(stateFromStores[13]).useStateFromStoresObject(
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
        const obj5 = {
          enabled: type === constants.MEMBER,
          permissionOverwrites: null,
          guildId: null,
          searchQuery: null,
        };
        let permissionOverwrites;
        if (stateFromStores != null) {
          permissionOverwrites = stateFromStores.permissionOverwrites;
        }
        obj5.permissionOverwrites = permissionOverwrites;
        obj5.guildId = guildId;
        obj5.searchQuery = first;
        const tmp10Result = closure_17(obj5);
        rows = tmp10Result.rows;
        let sections = tmp10Result.sections;
        const tmp14 = closure_18({
          enabled: type === constants.ROLE,
          channel: stateFromStores,
          sortedGuildRoles: stateFromStoresObject.sortedGuildRoles,
          searchQuery: first,
        });
        rows1 = tmp14.rows;
        const obj4 = channelId(stateFromStores[13]);
        const obj6 = {
          enabled: type === constants.ROLE,
          channel: stateFromStores,
          sortedGuildRoles: stateFromStoresObject.sortedGuildRoles,
          searchQuery: first,
        };
        const scaledRowHeightData = channelId(stateFromStores[17]).useScaledRowHeightData();
        rowContentHeight = scaledRowHeightData.rowContentHeight;
        const items3 = [channelId, navigation, type];
        callback = obj2.useCallback((id, type) => {
          if (null != id) {
            const obj2 = {
              id,
              type,
              allow: navigation(stateFromStores[19]).NONE,
              deny: navigation(stateFromStores[19]).NONE,
            };
            const result = type(stateFromStores[18]).updatePermissionOverwrite(tmp, obj2);
            result.then(() => {
              navigation.push(constants2.PERMISSION_OVERRIDES, { type, id, fromCreate: true });
            });
            const obj = type(stateFromStores[18]);
          }
        }, items3);
        const items4 = [guildId, rows, rows1, callback, type, rowContentHeight];
        const obj7 = { style: tmp.container, children: null };
        const obj8 = { style: tmp.containerSearchBar, children: null };
        const callback1 = obj2.useCallback((arg0, arg1) => {
          if (null == guildId) {
            return null;
          } else if (constants.ROLE === tmp) {
            let id = tmp13;
            const obj2 = { arrow: true, end: tmp19, label: null, onPress: null, start: null };
            ({ name: obj3.name, colorString: obj3.color, colorStrings: obj3.colors } = rows1[arg1]);
            obj2.label = closure_1_13(channelId(stateFromStores[21]).RoleLabel, {
              name: null,
              color: null,
              colors: null,
            });
            obj2.onPress = function onPress() {
              callback(id.id, Server.PermissionOverwriteType.ROLE);
            };
            obj2.start = tmp18;
            return closure_1_13(channelId(stateFromStores[20]).TableRow, obj2);
          } else if (constants.MEMBER === tmp) {
            id = rows[arg1].id;
            const obj = {
              arrow: true,
              contentHeight: rowContentHeight,
              end: tmp19,
              guildId: tmp6,
              userId: id,
              onPress() {
                callback(id, Server.PermissionOverwriteType.MEMBER);
              },
              start: tmp18,
            };
            return closure_1_13(type(stateFromStores[23]), obj);
          } else {
            return null;
          }
        }, items4);
        const obj9 = { size: "md", placeholder: null, onChange: null, round: true };
        const intl = tmp2(tmp3[25]).intl;
        obj9.placeholder = intl.string(channelId(stateFromStores[25]).t["5h0QOP"]);
        obj9.onChange = tmp5[1];
        obj8.children = closure_13(channelId(stateFromStores[24]).SearchField, obj9);
        const items5 = [closure_13(rows1, obj8)];
        if (0 !== (type === constants.ROLE ? rows1.length : rows.length)) {
          if (type === constants.ROLE) {
            sections = tmp14.sections;
          }
          const obj10 = {
            sections,
            itemSize: scaledRowHeightData.rowHeight,
            estimatedListSize: "windowSize",
            renderItem: callback1,
            wrapChildren: true,
            insetStart: tmp7(tmp3[10]).space.PX_8,
            insetEnd: tmp7(tmp3[10]).space.PX_8 + type(stateFromStores[16])().bottom,
            keyboardShouldPersistTaps: "always",
          };
          let tmp20Result = closure_13(tmp7(tmp3[26]), obj10);
          const tmp7Result = tmp7(tmp3[26]);
        } else {
          const obj11 = { Illustration: tmp2(tmp3[28]).NoResults, title: null, body: null };
          if (type === constants.ROLE) {
            const intl3 = tmp2(tmp3[25]).intl;
            let stringResult = intl3.string(tmp2(tmp3[25]).t.Sojqsr);
          } else {
            const intl2 = tmp2(tmp3[25]).intl;
            stringResult = intl2.string(tmp2(tmp3[25]).t.pYHobK);
          }
          obj11.title = stringResult;
          if (type === constants.ROLE) {
            const intl5 = tmp2(tmp3[25]).intl;
            let stringResult1 = intl5.string(tmp2(tmp3[25]).t["7gBhmO"]);
          } else {
            const intl4 = tmp2(tmp3[25]).intl;
            stringResult1 = intl4.string(tmp2(tmp3[25]).t.tuL9TW);
          }
          obj11.body = stringResult1;
          tmp20Result = closure_13(tmp2(tmp3[27]).EmptyState, obj11);
        }
        items5[1] = tmp20Result;
        obj7.children = items5;
        return closure_14(rows1, obj7);
      },
);
