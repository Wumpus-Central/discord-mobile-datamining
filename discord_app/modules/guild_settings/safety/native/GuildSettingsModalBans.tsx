// === Module 17165: ConnectedGuildSettingsModalBans ===

// Module 17165 (ConnectedGuildSettingsModalBans)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import closure_8 from "mergeGuildAvatar" /* 1923 */;
import closure_9 from "handleFormInit" /* 9668 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { containerInner: null, searchField: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_12, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_16 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  let bans;
  let searchQuery;
  let setting;
  let users;
  const tmp = callback2();
  let obj = guildId(bans[9]);
  let items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getGuild(guildId));
  obj1 = guildId(bans[9]);
  let items1 = [closure_9];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    props = props.getProps();
    const obj = { bans: props.bans, searchQuery: null, bansVersion: null };
    let str = props.searchQuery;
    if (str == null) {
      str = "";
    }
    obj[1] = str;
    obj[2] = props.bansVersion;
    return obj;
  });
  bans = stateFromStoresObject.bans;
  searchQuery = stateFromStoresObject.searchQuery;
  const flattenResult = closure_6.flatten(guildId.contentContainerStyle);
  let paddingBottom;
  if (flattenResult != null) {
    paddingBottom = flattenResult.paddingBottom;
  }
  let num = 0;
  if (typeof paddingBottom === "number") {
    num = paddingBottom + tmp6(tmp3[8]).space.PX_16;
  }
  const DeveloperMode = tmp2(tmp3[11]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items2 = [bans, stateFromStoresObject.bansVersion, searchQuery];
  const memo = setting.useMemo(() => {
    users = [];
    let items1 = bans;
    if (bans == null) {
      items1 = [];
    }
    while (tmp !== undefined) {
      let tmp3 = searchQuery;
      let tmp4 = closure_1_8;
      let user = closure_1_8.getUser(searchQuery(tmp2, 1)[0]);
      let tmp6 = user;
      if (null != user) {
        let str3 = searchQuery;
        let tmp9Result = 0 === searchQuery.length;
        if (!tmp9Result) {
          let tmp7 = stateFromStores;
          let tmp8 = bans;
          let tmp9 = stateFromStores(bans[12]);
          let tmp11 = user;
          let str = tmp6.username;
          let formatted = str3.toLowerCase();
          tmp9Result = tmp9(formatted, str.toLowerCase());
        }
        if (!tmp9Result) {
          let tmp13 = user;
          let tmp17Result = null != tmp6.globalName;
          if (tmp17Result) {
            let tmp15 = stateFromStores;
            let tmp16 = bans;
            let tmp17 = stateFromStores(bans[12]);
            let tmp19 = user;
            let str2 = tmp6.globalName;
            let formatted1 = str3.toLowerCase();
            tmp17Result = tmp17(formatted1, str2.toLowerCase());
          }
          tmp9Result = tmp17Result;
        }
        if (tmp9Result) {
          let tmp20 = user;
          let arr = users.push(tmp6);
        }
      }
      continue;
    }
    const sorted = users.sort((username, username2) => {
      const formatted = username.username.toLowerCase();
      return formatted.localeCompare(username2.username.toLowerCase());
    });
    const sections = [users.length];
    return { users, sections };
  }, items2);
  users = memo.users;
  const items3 = [guildId];
  const effect = setting.useEffect(() => {
    const guildBansBatch = stateFromStores(bans[13]).fetchGuildBansBatch(guildId, 1000, null);
    return () => {
      callback(table[14]).setSearchQuery("");
    };
  }, items3);
  const items4 = [bans, setting, stateFromStores, users];
  const callback = setting.useCallback((arg0, arg1) => {
    closure_0 = tmp;
    let obj = bans;
    let value;
    if (bans != null) {
      value = obj.get(tmp.id);
    }
    stateFromStores = value;
    let tmp4Result = null;
    if (null != value) {
      obj = { start: null, end: null, icon: null, label: null, subLabel: null, trailing: null, onPress: null };
      obj[0] = 0 === arg1;
      obj[1] = arg1 === users.length - 1;
      obj = { size: null, user: null, guildId: null };
      obj[0] = guildId(bans[16]).AvatarSizes.SMALL;
      obj[1] = tmp;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj[2] = id;
      obj[2] = closure_1_10(guildId(bans[16]).Avatar, obj);
      let username = tmp.globalName;
      if (username == null) {
        username = tmp.username;
      }
      obj[3] = username;
      username = null;
      if (null != tmp.globalName) {
        username = tmp.username;
      }
      obj[4] = username;
      obj[5] = closure_1_10(guildId(bans[17]).TableRowArrow, {});
      obj[6] = function onPress() {
        if (null != value) {
          let obj = { label: null, isDestructive: true, onPress: null };
          const intl4 = guildId(bans[18]).intl;
          obj[0] = intl4.string(guildId(bans[18]).t.Mp6Z2l);
          obj[2] = function onPress() {
            value(closure_2_2[13]).unbanUser(closure_1_1.id, lib.id);
          };
          const items = [obj];
          if (closure_1_4) {
            obj = { label: null, onPress: null };
            const intl = tmp6(tmp7[18]).intl;
            obj[0] = intl.string(tmp6(tmp7[18]).t["/AXYnE"]);
            obj[1] = function onPress() {
              lib(closure_2_2[19]).copy(lib.id);
              const obj = lib(closure_2_2[19]);
              lib(closure_2_2[20]).presentIdCopied();
            };
            items.push(obj);
          }
          obj = { title: null, subtitle: null };
          const intl2 = tmp6(tmp7[18]).intl;
          obj1 = { user: null };
          obj1[0] = user.username;
          obj[0] = intl2.formatToPlainString(guildId(bans[18]).t.XvAG5t, obj1);
          const string = tmp6(tmp7[18]).intl.string;
          let result = value;
          if (null == value.reason) {
            const intl3 = tmp6(tmp7[18]).intl;
            let reason = intl3.string(tmp6(tmp7[18]).t["t+2Zci"]);
            const obj2 = { key: "GuildSettingsUnban", header: null, options: null, hasIcons: false };
            const _HermesInternal = HermesInternal;
            obj[1] = "" + tmp3 + ": " + reason;
            obj2[1] = obj;
            obj2[2] = items;
            result = tmp6Result.showSimpleActionSheet(obj2);
          }
          reason = result.reason;
          tmp6Result = guildId(bans[21]);
        }
      };
      tmp4Result = tmp4(guildId(bans[15]).TableRow, obj);
      const tmp5 = guildId;
      const tmp6 = bans;
    }
    return tmp4Result;
  }, items4);
  if (null == bans) {
    let tmp15Result = callback(tmp2(tmp3[22]).SceneLoadingIndicator, {});
    let tmp18 = callback;
  } else {
    if ("" === searchQuery) {
      if (0 === users.length) {
        obj = { Illustration: null, title: null, body: null };
        obj[0] = tmp2(tmp3[23]).BansEmpty;
        let intl2 = tmp2(tmp3[18]).intl;
        obj[1] = intl2.string(tmp2(tmp3[18]).t.ZEiY1D);
        let intl3 = tmp2(tmp3[18]).intl;
        obj[2] = intl3.string(tmp2(tmp3[18]).t.zfCsAw);
        tmp15Result = callback(tmp2(tmp3[16]).EmptyState, obj);
        tmp18 = callback;
      }
    }
    obj = { style: null, children: null };
    obj[0] = tmp.containerInner;
    tmp18 = callback;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.searchField;
    let obj2 = { size: "md", onChange: null };
    obj2[1] = tmp14;
    obj1[1] = callback(tmp2(tmp3[24]).SearchField, obj2);
    const items5 = [callback(users, obj1), ];
    if ("" !== searchQuery) {
      if (0 === users.length) {
        const obj3 = { Illustration: null, body: null };
        obj3[0] = tmp2(tmp3[25]).NoResults;
        let intl = tmp2(tmp3[18]).intl;
        obj3[1] = intl.string(tmp2(tmp3[18]).t.z3cK5j);
        let tmp18Result = tmp18(tmp2(tmp3[16]).EmptyState, obj3);
      }
      items5[1] = tmp18Result;
      obj[1] = items5;
      tmp15Result = tmp15(tmp17, obj);
    }
    const obj4 = { sections: null, itemSize: null, estimatedListSize: "windowSize", renderItem: null, insetEnd: null };
    obj4[0] = memo.sections;
    obj4[1] = tmp7;
    obj4[3] = callback;
    obj4[4] = num;
    tmp18Result = tmp18(tmp6(tmp3[26]), obj4);
    tmp17 = users;
  }
  const obj5 = { children: null };
  const items6 = [tmp15Result, tmp18(guildId(bans[27]).NavScrim, {})];
  obj5[0] = items6;
  return closure_11(closure_12, obj5);
};