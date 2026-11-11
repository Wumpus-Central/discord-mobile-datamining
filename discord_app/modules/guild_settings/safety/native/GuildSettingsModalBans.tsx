// discord_app/modules/guild_settings/safety/native/GuildSettingsModalBans.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import fuzzysearchDefault from "../../../../../_runtime/07010_fuzzysearch.js";
import showSimpleActionSheet from "../../../action_sheet/native/showSimpleActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6 } = get_ActivityIndicator);
const Permissions = fn(1072).Permissions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5243);
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
  let rounded;
  let users;
  items = [users];
  let stateFromStores = guildId(stateFromStores1[11]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(stateFromStores1[11]);
  let items1 = [PermissionStore];
  let items2 = [stateFromStores];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(
    items1,
    () => {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.BAN_MEMBERS, tmp);
      }
      return canResult;
    },
    items2,
  );
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
  const flattenResult = rounded.flatten(guildId.contentContainerStyle);
  let paddingBottom;
  if (flattenResult != null) {
    paddingBottom = flattenResult.paddingBottom;
  }
  let num = 0;
  if (typeof paddingBottom === "number") {
    num = paddingBottom + stateFromStores(tmp2[10]).space.PX_16;
  }
  const tmp8 = closure_15();
  const DeveloperMode = tmp(tmp2[12]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  let obj3 = guildId(stateFromStores1[11]);
  const token = guildId(stateFromStores1[13]).useToken(stateFromStores(tmp2[10]).modules.mobile.TABLE_ROW_HEIGHT);
  const tmp10 = stateFromStores;
  const tmpResult = guildId(stateFromStores1[13]);
  const token1 = guildId(stateFromStores1[13]).useToken(stateFromStores(tmp2[10]).modules.mobile.TABLE_ROW_PADDING);
  const tmpResult5 = guildId(stateFromStores1[13]);
  const token2 = guildId(stateFromStores1[13]).useToken(
    stateFromStores(tmp2[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE,
  );
  const tmpResult6 = guildId(stateFromStores1[13]);
  const scaledTextLineHeight = guildId(stateFromStores1[14]).useScaledTextLineHeight(token2);
  const tmpResult7 = guildId(stateFromStores1[14]);
  rounded = Math.ceil(
    Math.max(
      token,
      2 * token1 + scaledTextLineHeight + guildId(stateFromStores1[14]).useScaledTextLineHeight("body-xs/medium"),
    ),
  );
  const items4 = [bans, stateFromStoresObject.bansVersion, searchQuery];
  const memo = searchQuery.useMemo(() => {
    items = [];
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
      stateFromStores(stateFromStores1[17]).setSearchQuery("");
    };
  }, items5);
  const items6 = [bans, stateFromStores1, setting, stateFromStores, rounded, users];
  const callback = searchQuery.useCallback((arg0, arg1) => {
    let str = users[arg1];
    value = undefined;
    if (bans != null) {
      value = bans.get(str.id);
    }
    stateFromStores = value;
    if (null == value) {
      return null;
    } else {
      let TableRowArrow = guildId;
      let tmp2Result = stateFromStores1;
      let obj2 = {
        start: 0 === arg1,
        end: arg1 === users.length - 1,
        height: rounded,
        icon: null,
        label: null,
        labelLineClamp: 1,
        subLabel: null,
        subLabelLineClamp: 1,
        accessibilityLabel: null,
        trailing: null,
        onPress: null,
      };
      let obj3 = { size: guildId(stateFromStores1[19]).AvatarSizes.SMALL, user: str, guildId: null };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj3.guildId = id;
      obj2.icon = closure_1_12(guildId(stateFromStores1[19]).Avatar, obj3);
      let username = str.globalName;
      if (username == null) {
        username = str.username;
      }
      obj2.label = username;
      let username1 = null;
      if (null != str.globalName) {
        username1 = str.username;
      }
      obj2.subLabel = username1;
      if (null != str.globalName) {
        let _HermesInternal = HermesInternal;
        ({ globalName, username: username3 } = str);
        str = "";
        let username2 = "" + globalName + ", " + username3;
      } else {
        username2 = ``.username;
      }
      obj2.accessibilityLabel = username2;
      TableRowArrow = TableRowArrow(tmp2Result[20]).TableRowArrow;
      tmp2Result = closure_1_12(TableRowArrow, {});
      obj2.trailing = tmp2Result;
      obj2.onPress = function onPress() {
        if (null != stateFromStores) {
          items = [];
          if (stateFromStores1) {
            let obj = { label: null, isDestructive: true, onPress: null };
            const intl = util.intl;
            obj.label = intl.string(util.t.Mp6Z2l);
            obj.onPress = function onPress() {
              stateFromStores(stateFromStores1[16]).unbanUser(value.id, user.id);
            };
            items.push(obj);
          }
          if (setting) {
            const obj2 = { label: null, onPress: null };
            const intl2 = util.intl;
            obj2.label = intl2.string(util.t["/AXYnE"]);
            obj2.onPress = function onPress() {
              guildId(stateFromStores1[22]).copy(user.id);
              const obj = guildId(stateFromStores1[22]);
              guildId(stateFromStores1[23]).presentIdCopied();
            };
            items.push(obj2);
          }
          const obj4 = { title: str.username, subtitle: null };
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
      closure_1_12(guildId(stateFromStores1[18]).TableRow, obj2);
    }
  }, items6);
  if (null == bans) {
    let tmp20Result = closure_12(tmp(tmp2[25]).SceneLoadingIndicator, {});
    let tmp23 = closure_12;
  } else {
    if ("" === searchQuery) {
      if (0 === users.length) {
        let obj4 = { Illustration: tmp(tmp2[26]).BansEmpty, title: null, body: null };
        let intl2 = tmp(tmp2[21]).intl;
        obj4.title = intl2.string(tmp(tmp2[21]).t.ZEiY1D);
        let intl3 = tmp(tmp2[21]).intl;
        obj4.body = intl3.string(tmp(tmp2[21]).t.zfCsAw);
        tmp20Result = closure_12(tmp(tmp2[19]).EmptyState, obj4);
        tmp23 = closure_12;
      }
    }
    let obj5 = { style: tmp8.containerInner, children: null };
    tmp23 = closure_12;
    const obj6 = { style: tmp8.searchField, children: null };
    const obj7 = { size: "md", onChange: tmp19 };
    obj6.children = closure_12(tmp(tmp2[27]).SearchBar, obj7);
    const items7 = [closure_12(setting, obj6)];
    if ("" !== searchQuery) {
      if (0 === users.length) {
        const obj8 = { Illustration: tmp(tmp2[28]).NoResults, body: null };
        let intl = tmp(tmp2[21]).intl;
        obj8.body = intl.string(tmp(tmp2[21]).t.z3cK5j);
        let tmp23Result = tmp23(tmp(tmp2[19]).EmptyState, obj8);
      }
      items7[1] = tmp23Result;
      obj5.children = items7;
      tmp20Result = closure_13(tmp22, obj5);
    }
    const obj9 = {
      sections: memo.sections,
      itemSize: rounded,
      estimatedListSize: "windowSize",
      renderItem: callback,
      insetEnd: num,
    };
    tmp23Result = tmp23(tmp10(tmp2[29]), obj9);
    tmp22 = setting;
  }
  const obj10 = { children: null };
  const items8 = [tmp20Result, tmp23(guildId(stateFromStores1[30]).NavScrim, {})];
  obj10.children = items8;
  return closure_13(closure_14, obj10);
}
