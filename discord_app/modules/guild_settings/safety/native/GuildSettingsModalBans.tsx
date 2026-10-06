// discord_app/modules/guild_settings/safety/native/GuildSettingsModalBans.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import fuzzysearchDefault from "../../../../../_runtime/05709_fuzzysearch.js";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import showSimpleActionSheet2 from "../../../action_sheet/native/showSimpleActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let bans, bansVersion, props;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const Permissions = Constants.Permissions;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { containerInner: obj2, searchField: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items8;
  let obj7;
  let tmp16Result;
  let tmp19;
  guildId = guildId.guildId;
  let stateFromStores1;
  let setting;
  let users;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = closure_15();
  const tmp2 = guildId;
  let obj = guildId(stateFromStores1[11]);
  let items = [GuildStore];
  let stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(stateFromStores1[11]);
  let items1 = [PermissionStore];
  let items2 = [stateFromStores];
  stateFromStores1 = obj2.useStateFromStores(
    items1,
    () => {
      const canResult = null != stateFromStores && PermissionStore.can(Permissions.BAN_MEMBERS, tmp);
      return canResult;
    },
    items2,
  );
  let obj3 = guildId(stateFromStores1[11]);
  const items3 = [GuildSettingsStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => {
    let str;
    props = props.getProps();
    const obj = { bans: props.bans, searchQuery: str, bansVersion: props.bansVersion };
    str = props.searchQuery;
    if (str == null) {
      str = "";
    }
    return obj;
  });
  bans = stateFromStoresObject.bans;
  const searchQuery = stateFromStoresObject.searchQuery;
  bansVersion = stateFromStoresObject.bansVersion;
  const tmp8 = stateFromStores(stateFromStores1[12])();
  const flattenResult = users.flatten(contentContainerStyle);
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
  const items4 = [bans, bansVersion, searchQuery];
  const memo = searchQuery.useMemo(() => {
    let items2;
    const items = [];
    let items1 = bans;
    if (bans == null) {
      items1 = [];
    }
    const tmp = items1[Symbol.iterator]();
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
      const str = username.username;
      const formatted = str.toLowerCase();
      const str2 = username2.username;
      return formatted.localeCompare(str2.toLowerCase());
    });
    const obj = { users: items, sections: items2 };
    items2 = [items.length];
    return obj;
  }, items4);
  users = memo.users;
  const items5 = [guildId];
  const sections = memo.sections;
  const effect = searchQuery.useEffect(() => {
    let obj = GuildActionCreatorsDefault;
    const guildBansBatch = obj.fetchGuildBansBatch(guildId, 1000, null);
    return () => {
      const obj = stateFromStores(stateFromStores1[16]);
      obj.setSearchQuery("");
    };
  }, items5);
  const items6 = [bans, stateFromStores1, setting, stateFromStores, users];
  const callback = searchQuery.useCallback((arg0, arg1) => {
    let Avatar;
    let id;
    let obj3;
    let username;
    let username1;
    const user = tmp;
    let value;
    if (bans != null) {
      value = bans.get(tmp.id);
    }
    stateFromStores = value;
    let tmp4Result = null;
    if (null != value) {
      let obj2 = {
        start: 0 === arg1,
        end: arg1 === users.length - 1,
        icon: closure_1_12(Avatar, obj3),
        label: username,
        subLabel: username1,
        trailing: closure_1_12(guildId(stateFromStores1[19]).TableRowArrow, {}),
        onPress() {
          let intl;
          let intl2;
          if (null != stateFromStores) {
            const items = [];
            if (stateFromStores1) {
              let obj = {
                label: intl.string(intl4.t.Mp6Z2l),
                isDestructive: true,
                onPress() {
                  const obj = stateFromStores(stateFromStores1[15]);
                  obj.unbanUser(stateFromStores.id, user.id);
                },
              };
              const push = items.push;
              intl = intl4.intl;
              push(obj);
            }
            if (setting) {
              let obj2 = {
                label: intl2.string(intl4.t["/AXYnE"]),
                onPress() {
                  const obj = guildId(stateFromStores1[21]);
                  obj.copy(user.id);
                  const obj2 = guildId(stateFromStores1[22]);
                  obj2.presentIdCopied();
                },
              };
              const push2 = items.push;
              intl2 = intl4.intl;
              push2(obj2);
            }
            const obj3 = { title: user.username, subtitle: null };
            const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
            showSimpleActionSheet2;
            const string = intl4.intl.string;
            if (null != stateFromStores.reason) {
              let reason;
              if ("" !== stateFromStores.reason) {
                reason = stateFromStores.reason;
              }
              const _HermesInternal = HermesInternal;
              const obj4 = { key: "GuildSettingsBan", header: obj3, options: items, hasIcons: false };
              obj3.subtitle = "" + tmp20 + ": " + reason;
              const result = showSimpleActionSheet(obj4);
            }
            const intl3 = intl4.intl;
            reason = intl3.string(intl4.t["t+2Zci"]);
          }
        },
      };
      const TableRow = guildId(stateFromStores1[17]).TableRow;
      obj3 = { size: guildId(stateFromStores1[18]).AvatarSizes.SMALL, user: users[arg1], guildId: id };
      Avatar = guildId(stateFromStores1[18]).Avatar;
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      username = tmp.globalName;
      if (username == null) {
        username = tmp.username;
      }
      username1 = null;
      if (null != users[arg1].globalName) {
        username1 = tmp.username;
      }
      tmp4Result = closure_1_12(TableRow, obj2);
    }
    return tmp4Result;
  }, items6);
  if (null == bans) {
    tmp16Result = closure_12(tmp2(tmp3[24]).SceneLoadingIndicator, {});
    tmp19 = closure_12;
  } else {
    let str = "";
    if ("" === searchQuery) {
      if (0 === users.length) {
        let obj4 = {
          Illustration: tmp2(stateFromStores1[25]).BansEmpty,
          title: intl2.string(tmp2(stateFromStores1[20]).t.ZEiY1D),
          body: intl3.string(tmp2(stateFromStores1[20]).t.zfCsAw),
        };
        const EmptyState2 = tmp2(tmp3[18]).EmptyState;
        intl2 = tmp2(tmp3[20]).intl;
        intl3 = tmp2(tmp3[20]).intl;
        tmp16Result = closure_12(EmptyState2, obj4);
        tmp19 = closure_12;
      }
    }
    const obj5 = { style: tmp.containerInner, children: null };
    tmp19 = closure_12;
    const obj6 = { style: tmp.searchField, children: closure_12(tmp2(stateFromStores1[26]).SearchField, obj7) };
    obj7 = { size: "md", onChange: tmp15 };
    const items7 = [closure_12(setting, obj6)];
    const tmp18 = setting;
    if ("" !== searchQuery) {
      let tmp19Result;
      if (0 === users.length) {
        const obj8 = {
          Illustration: tmp2(stateFromStores1[27]).NoResults,
          body: intl.string(tmp2(stateFromStores1[20]).t.z3cK5j),
        };
        const EmptyState = tmp2(tmp3[18]).EmptyState;
        intl = tmp2(tmp3[20]).intl;
        tmp19Result = tmp19(EmptyState, obj8);
      }
      items7[1] = tmp19Result;
      obj5.children = items7;
      tmp16Result = closure_13(tmp18, obj5);
    }
    const obj9 = { sections, itemSize: tmp8, estimatedListSize: "windowSize", renderItem: callback, insetEnd: num };
    tmp19Result = tmp19(tmp7(tmp3[28]), obj9);
  }
  const obj10 = { children: items8 };
  items8 = [tmp16Result, tmp19(tmp2(stateFromStores1[29]).NavScrim, {})];
  return closure_13(closure_14, obj10);
}
