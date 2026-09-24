// === Module 18190: GuildSettingsModalBans ===

// Module 18190 (GuildSettingsModalBans)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import fuzzysearchDefault from "fuzzysearch" /* 5822 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5825 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 7527 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9940 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { containerInner: { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 }, searchField: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj2.searchField = { paddingVertical: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  guildId = guildId.guildId;
  let bans;
  let setting;
  let users;
  const tmp = closure_13();
  let items = [GuildStore];
  let stateFromStores = guildId(bans[9]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(bans[9]);
  let items1 = [GuildSettingsStore];
  const stateFromStoresObject = guildId(bans[9]).useStateFromStoresObject(items1, () => {
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
  bans = stateFromStoresObject.bans;
  const searchQuery = stateFromStoresObject.searchQuery;
  let obj2 = guildId(bans[9]);
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
  let items2 = [bans, stateFromStoresObject.bansVersion, searchQuery];
  const memo = setting.useMemo(() => {
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
  }, items2);
  users = memo.users;
  const items3 = [guildId];
  const effect = setting.useEffect(() => {
    const guildBansBatch = GuildActionCreatorsDefault.fetchGuildBansBatch(guildId, 1000, null);
    return () => {
      stateFromStores(bans[14]).setSearchQuery("");
    };
  }, items3);
  const items4 = [bans, setting, stateFromStores, users];
  const callback = setting.useCallback((arg0, arg1) => {
    const user = tmp;
    value = undefined;
    if (bans != null) {
      value = bans.get(tmp.id);
    }
    stateFromStores = value;
    let tmp4Result = null;
    if (null != value) {
      let obj2 = { start: 0 === arg1, end: arg1 === users.length - 1, icon: null, label: null, subLabel: null, trailing: null, onPress: null };
      let obj3 = { size: guildId(bans[16]).AvatarSizes.SMALL, user: tmp, guildId: null };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj3.guildId = id;
      obj2.icon = closure_1_10(guildId(bans[16]).Avatar, obj3);
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
      obj2.trailing = closure_1_10(guildId(bans[17]).TableRowArrow, {});
      obj2.onPress = function onPress() {
        if (null != stateFromStores) {
          const obj2 = { label: null, isDestructive: true, onPress: null };
          const intl4 = util.intl;
          obj2.label = intl4.string(util.t.Mp6Z2l);
          obj2.onPress = function onPress() {
            stateFromStores(bans[13]).unbanUser(value.id, user.id);
          };
          const items = [obj2];
          if (setting) {
            let obj = { label: null, onPress: null };
            const intl = util.intl;
            obj.label = intl.string(util.t["/AXYnE"]);
            obj.onPress = function onPress() {
              guildId(bans[19]).copy(user.id);
              const obj = guildId(bans[19]);
              guildId(bans[20]).presentIdCopied();
            };
            items.push(obj);
          }
          const obj3 = { title: null, subtitle: null };
          const intl2 = util.intl;
          const obj4 = { user: user.username };
          obj3.title = intl2.formatToPlainString(util.t.XvAG5t, obj4);
          const string = util.intl.string;
          let result = value;
          if (null == value.reason) {
            const intl3 = util.intl;
            let reason = intl3.string(util.t["t+2Zci"]);
            const obj5 = { key: "GuildSettingsUnban", header: null, options: null, hasIcons: false };
            const _HermesInternal = HermesInternal;
            obj3.subtitle = "" + tmp3 + ": " + reason;
            obj5.header = obj3;
            obj5.options = items;
            result = tmp6Result.showSimpleActionSheet(obj5);
          }
          reason = result.reason;
          tmp6Result = showSimpleActionSheet;
        }
      };
      tmp4Result = closure_1_10(guildId(bans[15]).TableRow, obj2);
    }
    return tmp4Result;
  }, items4);
  if (null == bans) {
    let tmp15Result = closure_10(tmp2(tmp3[22]).SceneLoadingIndicator, {});
    let tmp18 = closure_10;
  } else {
    if ("" === searchQuery) {
      if (0 === users.length) {
        let obj3 = { Illustration: tmp2(tmp3[23]).BansEmpty, title: null, body: null };
        let intl2 = tmp2(tmp3[18]).intl;
        obj3.title = intl2.string(tmp2(tmp3[18]).t.ZEiY1D);
        let intl3 = tmp2(tmp3[18]).intl;
        obj3.body = intl3.string(tmp2(tmp3[18]).t.zfCsAw);
        tmp15Result = closure_10(tmp2(tmp3[16]).EmptyState, obj3);
        tmp18 = closure_10;
      }
    }
    let obj4 = { style: tmp.containerInner, children: null };
    tmp18 = closure_10;
    let obj5 = { style: tmp.searchField, children: null };
    const obj6 = { size: "md", onChange: tmp14 };
    obj5.children = closure_10(tmp2(tmp3[24]).SearchField, obj6);
    const items5 = [closure_10(users, obj5), ];
    if ("" !== searchQuery) {
      if (0 === users.length) {
        const obj7 = { Illustration: tmp2(tmp3[25]).NoResults, body: null };
        let intl = tmp2(tmp3[18]).intl;
        obj7.body = intl.string(tmp2(tmp3[18]).t.z3cK5j);
        let tmp18Result = tmp18(tmp2(tmp3[16]).EmptyState, obj7);
      }
      items5[1] = tmp18Result;
      obj4.children = items5;
      tmp15Result = closure_11(tmp17, obj4);
    }
    const obj8 = { sections: memo.sections, itemSize: tmp7, estimatedListSize: "windowSize", renderItem: callback, insetEnd: num };
    tmp18Result = tmp18(tmp6(tmp3[26]), obj8);
    tmp17 = users;
  }
  const obj9 = { children: null };
  const items6 = [tmp15Result, tmp18(guildId(bans[27]).NavScrim, {})];
  obj9.children = items6;
  return closure_11(closure_12, obj9);
};