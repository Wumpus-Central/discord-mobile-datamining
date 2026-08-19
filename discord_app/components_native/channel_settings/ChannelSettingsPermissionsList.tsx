// === Module 16044: ? ===

// Module 16044
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
let c5 = importAllResult;
({ PermissionOverrideType: unpackModuleId, ChannelSettingsSections: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = { rows: [], sections: [] };
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: ThemesDefault.space.PX_12, flex: 1 };
obj[0] = obj;
const createCacheKey = { paddingVertical: ThemesDefault.space.PX_8 };
obj[1] = createCacheKey;
let closure_16 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ChannelSettingsPermissionsList(channelId) {
  channelId = channelId.channelId;
  let _require = channelId;
  const type = channelId.type;
  let first;
  let guildId;
  let rows;
  let rows1;
  let rowContentHeight;
  let callback;
  let tmp = callback2();
  let obj = _require(first[13]);
  const navigation = obj.useNavigation();
  obj1 = rows;
  const tmp5 = guildId(rows.useState(""), 2);
  first = tmp5[0];
  let obj2 = _require(first[11]);
  let items = [rowContentHeight];
  let stateFromStores = obj2.useStateFromStores(items, () => rowContentHeight.getChannel(closure_0));
  first = stateFromStores;
  let obj3 = _require(first[11]);
  let items1 = [closure_9];
  const items2 = [stateFromStores];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    guildId = undefined;
    if (first != null) {
      guildId = first.getGuildId();
    }
    sortedGuildRoles = undefined;
    if (null != guildId) {
      sortedGuildRoles = closure_1_9.getSortedRoles(guildId);
    }
    return { sortedGuildRoles, guildId };
  }, items2);
  guildId = stateFromStoresObject.guildId;
  let sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let permissionOverwrites;
  if (stateFromStores != null) {
    permissionOverwrites = stateFromStores.permissionOverwrites;
  }
  stateFromStores = permissionOverwrites;
  sortedGuildRoles = guildId;
  let tmp2Result = tmp2(tmp3[11]);
  const items3 = [callback];
  const items4 = [type === constants.MEMBER, guildId, tmp2Result.useStateFromStores(items3, () => callback.getMemberVersion()), permissionOverwrites, first];
  const memo = obj1.useMemo(() => {
    if (closure_0) {
      if (null != sortedGuildRoles) {
        const items = [];
        for (const key10003 in callback.getMutableAllGuildsAndMembers()[tmp]) {
          let user = closure_1_10.getUser(key10003);
          let tmp4 = null != user;
          if (tmp4) {
            let tmp3;
            if (stateFromStores != null) {
              tmp3 = stateFromStores[key10003];
            }
            tmp4 = null == tmp3;
          }
          if (tmp4) {
            let tmp8Result = 0 === first.length;
            if (!tmp8Result) {
              let tmp8 = stateFromStores(first[12]);
              let str2 = user.username;
              let formatted = first.toLowerCase();
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
        const obj = { rows: null, sections: null };
        obj[0] = items;
        const items1 = [items.length];
        obj[1] = items1;
        return obj;
      }
    }
    return closure_1_15;
  }, items4);
  rows = memo.rows;
  let sections = memo.sections;
  _require = tmp14;
  const items5 = [type === constants.ROLE, stateFromStores, sortedGuildRoles, first];
  const memo1 = obj1.useMemo(() => {
    if (closure_0) {
      if (null != sortedGuildRoles) {
        if (null != stateFromStores) {
          const found = sortedGuildRoles.filter((item, index) => {
            let tmp = 0 !== length.length;
            if (tmp) {
              const formatted = length.toLowerCase();
              tmp = !stateFromStores(first[12])(formatted, item.name.toLowerCase());
              const tmp4 = stateFromStores(first[12]);
            }
            let tmp6 = !tmp;
            if (!tmp) {
              tmp6 = null == permissionOverwrites.permissionOverwrites[item.id];
            }
            return tmp6;
          });
          const obj = { rows: null, sections: null };
          obj[0] = found;
          const items = [found.length];
          obj[1] = items;
          return obj;
        }
      }
    }
    return closure_1_15;
  }, items5);
  rows1 = memo1.rows;
  tmp2Result = tmp2(tmp3[15]);
  const scaledRowHeightData = tmp2Result.useScaledRowHeightData();
  rowContentHeight = scaledRowHeightData.rowContentHeight;
  const items6 = [channelId, navigation, type];
  callback = obj1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    if (null != closure_0) {
      stateFromStores(first[16]);
      const obj = { id: null, type: null, allow: null, deny: null };
      obj[0] = arg0;
      obj[1] = arg1;
      obj[2] = sortedGuildRoles(first[17]).NONE;
      obj[3] = sortedGuildRoles(first[17]).NONE;
      const result = obj.updatePermissionOverwrite(tmp, obj);
      result.then((result) => {
        sortedGuildRoles.push(closure_2_12.PERMISSION_OVERRIDES, { type: stateFromStores, id: closure_0, fromCreate: true });
      });
    }
  }, items6);
  const items7 = [guildId, rows, rows1, callback, type, rowContentHeight];
  obj = { style: tmp.containerSearchBar, children: null };
  const callback1 = obj1.useCallback((arg0, arg1) => {
    if (null == guildId) {
      return null;
    } else if (closure_1_11.ROLE === tmp) {
      callback = tmp13;
      let obj = { arrow: true, end: null, label: null, onPress: null, start: null };
      obj[1] = tmp19;
      obj = { name: null, color: null, colors: null };
      ({ name: obj3[0], colorString: obj3[1], colorStrings: obj3[2] } = rows1[arg1]);
      obj[2] = closure_1_13(callback(first[19]).RoleLabel, obj);
      obj[3] = function onPress() {
        callback(lib.id, lib(first[20]).PermissionOverwriteType.ROLE);
      };
      obj[4] = tmp18;
      return closure_1_13(callback(first[18]).TableRow, obj);
    } else if (closure_1_11.MEMBER === tmp) {
      const id = rows[arg1].id;
      obj = { arrow: true, contentHeight: null, end: null, guildId: null, userId: null, onPress: null, start: null };
      obj[1] = rowContentHeight;
      obj[2] = tmp19;
      obj[3] = tmp6;
      obj[4] = id;
      obj[5] = function onPress() {
        callback(id, lib(first[20]).PermissionOverwriteType.MEMBER);
      };
      obj[6] = tmp18;
      return closure_1_13(stateFromStores(first[21]), obj);
    } else {
      return null;
    }
  }, items7);
  obj1 = { size: "md", placeholder: null, onChange: null, isRound: true };
  const intl = tmp2(tmp3[23]).intl;
  obj1[1] = intl.string(_require(first[23]).t["5h0QOP"]);
  obj1[2] = tmp5[1];
  obj[1] = callback(_require(first[22]).SearchField, obj1);
  const items8 = [callback(rows1, obj), ];
  if (0 !== (type === constants.ROLE ? rows1.length : rows.length)) {
    if (type === constants.ROLE) {
      sections = memo1.sections;
    }
    obj2 = { sections: null, itemSize: null, estimatedListSize: "windowSize", renderItem: null, wrapChildren: true, insetStart: null, insetEnd: null, keyboardShouldPersistTaps: "always" };
    obj2[0] = sections;
    obj2[1] = scaledRowHeightData.rowHeight;
    obj2[3] = callback1;
    obj2[5] = tmp7(tmp3[10]).space.PX_8;
    obj2[6] = tmp7(tmp3[10]).space.PX_8 + stateFromStores(first[14])().bottom;
    let tmp21Result = tmp21(tmp7(tmp3[24]), obj2);
    const tmp7Result = tmp7(tmp3[24]);
  } else {
    obj3 = { Illustration: null, title: null, body: null };
    obj3[0] = tmp2(tmp3[26]).NoResults;
    if (type === constants.ROLE) {
      const intl3 = tmp2(tmp3[23]).intl;
      let stringResult = intl3.string(tmp2(tmp3[23]).t.Sojqsr);
    } else {
      const intl2 = tmp2(tmp3[23]).intl;
      stringResult = intl2.string(tmp2(tmp3[23]).t.pYHobK);
    }
    obj3[1] = stringResult;
    if (type === constants.ROLE) {
      const intl5 = tmp2(tmp3[23]).intl;
      let stringResult1 = intl5.string(tmp2(tmp3[23]).t["7gBhmO"]);
    } else {
      const intl4 = tmp2(tmp3[23]).intl;
      stringResult1 = intl4.string(tmp2(tmp3[23]).t.tuL9TW);
    }
    obj3[2] = stringResult1;
    tmp21Result = tmp21(tmp2(tmp3[25]).EmptyState, obj3);
  }
  items8[1] = tmp21Result;
  obj[1] = items8;
  return callback(rows1, obj);
});
let result = require("obj132").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsList.tsx");

export default memoResult;