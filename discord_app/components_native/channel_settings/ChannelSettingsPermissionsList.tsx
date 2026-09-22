// discord_app/components_native/channel_settings/ChannelSettingsPermissionsList.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Server from "../../flow/Server.tsx";
import fuzzysearchDefault from "../../../_runtime/05736_fuzzysearch.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ PermissionOverrideType: closure_11, ChannelSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = { rows: [], sections: [] };
const createStyles = fn(4757);
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
let obj4 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsList.tsx");

export default noop.memo(function ChannelSettingsPermissionsList(channelId) {
  channelId = channelId.channelId;
  const type = channelId.type;
  let stateFromStores;
  let guildId;
  let rows;
  let rows1;
  let rowContentHeight;
  let callback;
  let tmp = closure_16();
  const navigation = channelId(stateFromStores[13]).useNavigation();
  const tmp5 = guildId(rows.useState(""), 2);
  const first = tmp5[0];
  let obj = channelId(stateFromStores[13]);
  let items = [rowContentHeight];
  stateFromStores = channelId(stateFromStores[11]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj3 = channelId(stateFromStores[11]);
  let items1 = [GuildRoleStore];
  const items2 = [stateFromStores];
  const stateFromStoresObject = channelId(stateFromStores[11]).useStateFromStoresObject(
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
  let sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let permissionOverwrites;
  if (stateFromStores != null) {
    permissionOverwrites = stateFromStores.permissionOverwrites;
  }
  closure_129_0 = tmp12;
  closure_129_1 = permissionOverwrites;
  closure_129_2 = guildId;
  closure_129_3 = first;
  const obj4 = channelId(stateFromStores[11]);
  const items3 = [callback];
  const items4 = [
    type === constants.MEMBER,
    guildId,
    channelId(stateFromStores[11]).useStateFromStores(items3, () => callback.getMemberVersion()),
    permissionOverwrites,
    first,
  ];
  const memo = obj2.useMemo(() => {
    if (channelId) {
      if (null != navigation) {
        const items = [];
        for (const key10003 in GuildMemberStore.getMutableAllGuildsAndMembers()[tmp]) {
          let user = UserStore.getUser(key10003);
          let tmp4 = null != user;
          if (tmp4) {
            let tmp3;
            if (type != null) {
              tmp3 = type[key10003];
            }
            tmp4 = null == tmp3;
          }
          if (tmp4) {
            let tmp8Result = 0 === stateFromStores.length;
            if (!tmp8Result) {
              let tmp8 = fuzzysearchDefault;
              let str2 = user.username;
              let formatted = stateFromStores.toLowerCase();
              tmp8Result = tmp8(formatted, str2.toLowerCase());
            }
            tmp4 = tmp8Result;
          }
          if (!tmp4) {
            continue;
          } else {
            let arr = items.push(user);
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
  }, items4);
  rows = memo.rows;
  let sections = memo.sections;
  closure_130_0 = tmp14;
  closure_130_1 = stateFromStores;
  closure_130_2 = sortedGuildRoles;
  closure_130_3 = first;
  const items5 = [type === constants.ROLE, stateFromStores, sortedGuildRoles, first];
  const memo1 = obj2.useMemo(() => {
    if (channelId) {
      if (null != navigation) {
        if (null != type) {
          const found = navigation.filter((name) => {
            let tmp = 0 !== length.length;
            if (tmp) {
              const formatted = length.toLowerCase();
              tmp = !type(stateFromStores[12])(formatted, name.name.toLowerCase());
              const tmp4 = type(stateFromStores[12]);
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
  }, items5);
  rows1 = memo1.rows;
  const tmp2Result = channelId(stateFromStores[11]);
  const scaledRowHeightData = channelId(stateFromStores[15]).useScaledRowHeightData();
  rowContentHeight = scaledRowHeightData.rowContentHeight;
  const items6 = [channelId, navigation, type];
  callback = obj2.useCallback((id, type) => {
    if (null != id) {
      const obj2 = {
        id,
        type,
        allow: navigation(stateFromStores[17]).NONE,
        deny: navigation(stateFromStores[17]).NONE,
      };
      const result = type(stateFromStores[16]).updatePermissionOverwrite(tmp, obj2);
      result.then(() => {
        navigation.push(constants2.PERMISSION_OVERRIDES, { type, id, fromCreate: true });
      });
      const obj = type(stateFromStores[16]);
    }
  }, items6);
  const items7 = [guildId, rows, rows1, callback, type, rowContentHeight];
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.containerSearchBar, children: null };
  const callback1 = obj2.useCallback((arg0, arg1) => {
    if (null == guildId) {
      return null;
    } else if (constants.ROLE === tmp) {
      let id = tmp13;
      const obj2 = { arrow: true, end: tmp19, label: null, onPress: null, start: null };
      ({ name: obj3.name, colorString: obj3.color, colorStrings: obj3.colors } = rows1[arg1]);
      obj2.label = closure_1_13(channelId(stateFromStores[19]).RoleLabel, { name: null, color: null, colors: null });
      obj2.onPress = function onPress() {
        callback(id.id, Server.PermissionOverwriteType.ROLE);
      };
      obj2.start = tmp18;
      return closure_1_13(channelId(stateFromStores[18]).TableRow, obj2);
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
      return closure_1_13(type(stateFromStores[21]), obj);
    } else {
      return null;
    }
  }, items7);
  const obj7 = { size: "md", placeholder: null, onChange: null, round: true };
  const intl = tmp2(tmp3[23]).intl;
  obj7.placeholder = intl.string(channelId(stateFromStores[23]).t["5h0QOP"]);
  obj7.onChange = tmp5[1];
  obj6.children = closure_13(channelId(stateFromStores[22]).SearchField, obj7);
  const items8 = [closure_13(rows1, obj6)];
  if (0 !== (type === constants.ROLE ? rows1.length : rows.length)) {
    if (type === constants.ROLE) {
      sections = memo1.sections;
    }
    const obj8 = {
      sections,
      itemSize: scaledRowHeightData.rowHeight,
      estimatedListSize: "windowSize",
      renderItem: callback1,
      wrapChildren: true,
      insetStart: tmp7(tmp3[10]).space.PX_8,
      insetEnd: tmp7(tmp3[10]).space.PX_8 + type(stateFromStores[14])().bottom,
      keyboardShouldPersistTaps: "always",
    };
    let tmp21Result = closure_13(tmp7(tmp3[24]), obj8);
    const tmp7Result = tmp7(tmp3[24]);
  } else {
    const obj9 = { Illustration: tmp2(tmp3[26]).NoResults, title: null, body: null };
    if (type === constants.ROLE) {
      const intl3 = tmp2(tmp3[23]).intl;
      let stringResult = intl3.string(tmp2(tmp3[23]).t.Sojqsr);
    } else {
      const intl2 = tmp2(tmp3[23]).intl;
      stringResult = intl2.string(tmp2(tmp3[23]).t.pYHobK);
    }
    obj9.title = stringResult;
    if (type === constants.ROLE) {
      const intl5 = tmp2(tmp3[23]).intl;
      let stringResult1 = intl5.string(tmp2(tmp3[23]).t["7gBhmO"]);
    } else {
      const intl4 = tmp2(tmp3[23]).intl;
      stringResult1 = intl4.string(tmp2(tmp3[23]).t.tuL9TW);
    }
    obj9.body = stringResult1;
    tmp21Result = closure_13(tmp2(tmp3[25]).EmptyState, obj9);
  }
  items8[1] = tmp21Result;
  obj5.children = items8;
  return closure_14(rows1, obj5);
});
