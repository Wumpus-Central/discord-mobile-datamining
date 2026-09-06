// discord_app/modules/guild_settings/safety/native/GuildSettingsModalBans.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import fuzzysearchDefault from "../../../../../_runtime/05517_fuzzysearch.js";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import showSimpleActionSheet from "../../../action_sheet/native/showSimpleActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = { containerInner: null, searchField: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles.containerInner = createStyles;
createStyles.searchField = { paddingVertical: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  guildId = guildId.guildId;
  let bans;
  let setting;
  let users;
  const tmp = closure_13();
  let obj = guildId(bans[9]);
  let items = [GuildStore];
  let stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj1 = guildId(bans[9]);
  let items1 = [GuildSettingsStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
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
    let obj = bans;
    value = undefined;
    if (bans != null) {
      value = obj.get(tmp.id);
    }
    stateFromStores = value;
    let tmp4Result = null;
    if (null != value) {
      obj = {
        start: 0 === arg1,
        end: arg1 === users.length - 1,
        icon: null,
        label: null,
        subLabel: null,
        trailing: null,
        onPress: null,
      };
      obj = { size: guildId(bans[16]).AvatarSizes.SMALL, user: tmp, guildId: null };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj.guildId = id;
      obj.icon = closure_1_10(guildId(bans[16]).Avatar, obj);
      let username = tmp.globalName;
      if (username == null) {
        username = tmp.username;
      }
      obj.label = username;
      username = null;
      if (null != tmp.globalName) {
        username = tmp.username;
      }
      obj.subLabel = username;
      obj.trailing = closure_1_10(guildId(bans[17]).TableRowArrow, {});
      obj.onPress = function onPress() {
        if (null != stateFromStores) {
          let obj = { label: null, isDestructive: true, onPress: null };
          const intl4 = util.intl;
          obj.label = intl4.string(util.t.Mp6Z2l);
          obj.onPress = function onPress() {
            stateFromStores(bans[13]).unbanUser(value.id, user.id);
          };
          const items = [obj];
          if (setting) {
            obj = { label: null, onPress: null };
            const intl = util.intl;
            obj.label = intl.string(util.t["/AXYnE"]);
            obj.onPress = function onPress() {
              guildId(bans[19]).copy(user.id);
              const obj = guildId(bans[19]);
              guildId(bans[20]).presentIdCopied();
            };
            items.push(obj);
          }
          obj = { title: null, subtitle: null };
          const intl2 = util.intl;
          const obj1 = { user: user.username };
          obj.title = intl2.formatToPlainString(util.t.XvAG5t, obj1);
          const string = util.intl.string;
          let result = value;
          if (null == value.reason) {
            const intl3 = util.intl;
            let reason = intl3.string(util.t["t+2Zci"]);
            const obj2 = { key: "GuildSettingsUnban", header: null, options: null, hasIcons: false };
            const _HermesInternal = HermesInternal;
            obj.subtitle = "" + tmp3 + ": " + reason;
            obj2.header = obj;
            obj2.options = items;
            result = tmp6Result.showSimpleActionSheet(obj2);
          }
          reason = result.reason;
          tmp6Result = showSimpleActionSheet;
        }
      };
      tmp4Result = closure_1_10(guildId(bans[15]).TableRow, obj);
    }
    return tmp4Result;
  }, items4);
  if (null == bans) {
    let tmp15Result = closure_10(tmp2(tmp3[22]).SceneLoadingIndicator, {});
    let tmp18 = closure_10;
  } else {
    if ("" === searchQuery) {
      if (0 === users.length) {
        obj = { Illustration: tmp2(tmp3[23]).BansEmpty, title: null, body: null };
        let intl2 = tmp2(tmp3[18]).intl;
        obj.title = intl2.string(tmp2(tmp3[18]).t.ZEiY1D);
        let intl3 = tmp2(tmp3[18]).intl;
        obj.body = intl3.string(tmp2(tmp3[18]).t.zfCsAw);
        tmp15Result = closure_10(tmp2(tmp3[16]).EmptyState, obj);
        tmp18 = closure_10;
      }
    }
    obj = { style: tmp.containerInner, children: null };
    tmp18 = closure_10;
    obj1 = { style: tmp.searchField, children: null };
    let obj2 = { size: "md", onChange: tmp14 };
    obj1.children = closure_10(tmp2(tmp3[24]).SearchField, obj2);
    const items5 = [closure_10(users, obj1)];
    if ("" !== searchQuery) {
      if (0 === users.length) {
        const obj3 = { Illustration: tmp2(tmp3[25]).NoResults, body: null };
        let intl = tmp2(tmp3[18]).intl;
        obj3.body = intl.string(tmp2(tmp3[18]).t.z3cK5j);
        let tmp18Result = tmp18(tmp2(tmp3[16]).EmptyState, obj3);
      }
      items5[1] = tmp18Result;
      obj.children = items5;
      tmp15Result = closure_11(tmp17, obj);
    }
    const obj4 = {
      sections: memo.sections,
      itemSize: tmp7,
      estimatedListSize: "windowSize",
      renderItem: callback,
      insetEnd: num,
    };
    tmp18Result = tmp18(tmp6(tmp3[26]), obj4);
    tmp17 = users;
  }
  const obj5 = { children: null };
  const items6 = [tmp15Result, tmp18(guildId(bans[27]).NavScrim, {})];
  obj5.children = items6;
  return closure_11(closure_12, obj5);
}
