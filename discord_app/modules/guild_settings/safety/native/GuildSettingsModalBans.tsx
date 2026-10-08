// === Module 18157: GuildSettingsModalBans ===

// Module 18157 (GuildSettingsModalBans)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import fuzzysearchDefault from "fuzzysearch" /* 6099 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6102 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 6877 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UserStore from "UserStore" /* 1389 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8614 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { containerInner: { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 }, searchField: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj2.searchField = { paddingVertical: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let setting;
  let users;
  const tmp = closure_15();
  let items = [GuildStore];
  let stateFromStores = guildId(stateFromStores1[11]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(stateFromStores1[11]);
  let items1 = [PermissionStore];
  let items2 = [stateFromStores];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.BAN_MEMBERS, tmp);
    }
    return canResult;
  }, items2);
  let obj2 = guildId(stateFromStores1[11]);
  const items3 = [GuildSettingsStore];
  const stateFromStoresObject = guildId(stateFromStores1[11]).useStateFromStoresObject(items3, () => {
    props = props.getProps();
    const obj = { bans: props.bans, searchQuery: null, bansVersion: null };
    let str = props.searchQuery;
    if (str == null) {
      str = "";
    }
    obj.searchQuery = str;
    obj.bansVersion = props.bansVersion;
    return obj;
  });
  const bans = stateFromStoresObject.bans;
  const searchQuery = stateFromStoresObject.searchQuery;
  let obj3 = guildId(stateFromStores1[11]);
  const flattenResult = users.flatten(guildId.contentContainerStyle);
  let paddingBottom;
  if (flattenResult != null) {
    paddingBottom = flattenResult.paddingBottom;
  }
  let num = 0;
  if (typeof paddingBottom === "number") {
    num = paddingBottom + tmp7(tmp3[10]).space.PX_16;
  }
  const DeveloperMode = tmp2(tmp3[13]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items4 = [bans, stateFromStoresObject.bansVersion, searchQuery];
  const memo = searchQuery.useMemo(() => {
    const items = [];
    let items1 = bans;
    if (bans == null) {
      items1 = [];
    }
    while (tmp !== undefined) {
      let user = UserStore.getUser(_slicedToArray(tmp2, 1)[0]);
      let tmp6 = user;
      if (null != user) {
        let tmp9Result = 0 === searchQuery.length;
        if (!tmp9Result) {
          let tmp9 = fuzzysearchDefault;
          let str = tmp6.username;
          let formatted = searchQuery.toLowerCase();
          tmp9Result = tmp9(formatted, str.toLowerCase());
        }
        if (!tmp9Result) {
          let tmp17Result = null != tmp6.globalName;
          if (tmp17Result) {
            let tmp17 = fuzzysearchDefault;
            let str2 = tmp6.globalName;
            let formatted1 = searchQuery.toLowerCase();
            tmp17Result = tmp17(formatted1, str2.toLowerCase());
          }
          tmp9Result = tmp17Result;
        }
        if (tmp9Result) {
          let arr = items.push(tmp6);
        }
      }
      continue;
    }
    const sorted = items.sort((username, username2) => {
      const formatted = username.username.toLowerCase();
      return formatted.localeCompare(username2.username.toLowerCase());
    });
    const obj = { users: items, sections: null };
    const items2 = [items.length];
    obj.sections = items2;
    return obj;
  }, items4);
  users = memo.users;
  const items5 = [guildId];
  const effect = searchQuery.useEffect(() => {
    const guildBansBatch = GuildActionCreatorsDefault.fetchGuildBansBatch(guildId, 1000, null);
    return () => {
      stateFromStores(stateFromStores1[16]).setSearchQuery("");
    };
  }, items5);
  const items6 = [bans, stateFromStores1, setting, stateFromStores, users];
  const callback = searchQuery.useCallback((arg0, arg1) => {
    const user = tmp;
    value = undefined;
    if (bans != null) {
      value = bans.get(tmp.id);
    }
    stateFromStores = value;
    let tmp4Result = null;
    if (null != value) {
      let obj2 = { start: 0 === arg1, end: arg1 === users.length - 1, icon: null, label: null, subLabel: null, trailing: null, onPress: null };
      let obj3 = { size: guildId(stateFromStores1[18]).AvatarSizes.SMALL, user: tmp, guildId: null };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj3.guildId = id;
      obj2.icon = closure_1_12(guildId(stateFromStores1[18]).Avatar, obj3);
      let username = tmp.globalName;
      if (username == null) {
        username = tmp.username;
      }
      obj2.label = username;
      let username1 = null;
      if (null != tmp.globalName) {
        username1 = tmp.username;
      }
      obj2.subLabel = username1;
      obj2.trailing = closure_1_12(guildId(stateFromStores1[19]).TableRowArrow, {});
      obj2.onPress = function onPress() {
        if (null != stateFromStores) {
          const items = [];
          if (stateFromStores1) {
            let obj = { label: null, isDestructive: true, onPress: null };
            const intl = util.intl;
            obj.label = intl.string(util.t.Mp6Z2l);
            obj.onPress = function onPress() {
              stateFromStores(stateFromStores1[15]).unbanUser(value.id, user.id);
            };
            items.push(obj);
          }
          if (setting) {
            const obj2 = { label: null, onPress: null };
            const intl2 = util.intl;
            obj2.label = intl2.string(util.t["/AXYnE"]);
            obj2.onPress = function onPress() {
              guildId(stateFromStores1[21]).copy(user.id);
              const obj = guildId(stateFromStores1[21]);
              guildId(stateFromStores1[22]).presentIdCopied();
            };
            items.push(obj2);
          }
          const obj4 = { title: user.username, subtitle: null };
          const string = util.intl.string;
          let result = value;
          if (null == value.reason) {
            const intl3 = util.intl;
            let reason = intl3.string(util.t["t+2Zci"]);
            const obj5 = { key: "GuildSettingsBan", header: null, options: null, hasIcons: false };
            const _HermesInternal = HermesInternal;
            obj4.subtitle = "" + tmp19 + ": " + reason;
            obj5.header = obj4;
            obj5.options = items;
            result = obj3.showSimpleActionSheet(obj5);
          }
          reason = result.reason;
          obj3 = showSimpleActionSheet;
        }
      };
      tmp4Result = closure_1_12(guildId(stateFromStores1[17]).TableRow, obj2);
    }
    return tmp4Result;
  }, items6);
  if (null == bans) {
    let tmp16Result = closure_12(tmp2(tmp3[24]).SceneLoadingIndicator, {});
    let tmp19 = closure_12;
  } else {
    if ("" === searchQuery) {
      if (0 === users.length) {
        let obj4 = { Illustration: tmp2(tmp3[25]).BansEmpty, title: null, body: null };
        let intl2 = tmp2(tmp3[20]).intl;
        obj4.title = intl2.string(tmp2(tmp3[20]).t.ZEiY1D);
        let intl3 = tmp2(tmp3[20]).intl;
        obj4.body = intl3.string(tmp2(tmp3[20]).t.zfCsAw);
        tmp16Result = closure_12(tmp2(tmp3[18]).EmptyState, obj4);
        tmp19 = closure_12;
      }
    }
    let obj5 = { style: tmp.containerInner, children: null };
    tmp19 = closure_12;
    const obj6 = { style: tmp.searchField, children: null };
    const obj7 = { size: "md", onChange: tmp15 };
    obj6.children = closure_12(tmp2(tmp3[26]).SearchField, obj7);
    const items7 = [closure_12(setting, obj6), ];
    if ("" !== searchQuery) {
      if (0 === users.length) {
        const obj8 = { Illustration: tmp2(tmp3[27]).NoResults, body: null };
        let intl = tmp2(tmp3[20]).intl;
        obj8.body = intl.string(tmp2(tmp3[20]).t.z3cK5j);
        let tmp19Result = tmp19(tmp2(tmp3[18]).EmptyState, obj8);
      }
      items7[1] = tmp19Result;
      obj5.children = items7;
      tmp16Result = closure_13(tmp18, obj5);
    }
    const obj9 = { sections: memo.sections, itemSize: tmp8, estimatedListSize: "windowSize", renderItem: callback, insetEnd: num };
    tmp19Result = tmp19(tmp7(tmp3[28]), obj9);
    tmp18 = setting;
  }
  const obj10 = { children: null };
  const items8 = [tmp16Result, tmp19(guildId(stateFromStores1[29]).NavScrim, {})];
  obj10.children = items8;
  return closure_13(closure_14, obj10);
};