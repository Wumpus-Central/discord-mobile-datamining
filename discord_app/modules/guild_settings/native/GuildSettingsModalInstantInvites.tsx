// discord_app/modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx
import _slicedToArray from "_slicedToArray";
import apply from "apply";
import get_ActivityIndicator from "useInvitesDisabledPermission";
import computeAlertSettings from "computeAlertSettings";
import importDefaultResult from "createFromServer";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleFormInit from "handleFormInit";
import ME from "ME";
import jsxProd from "DATE_CONFIG";
import createCacheKey from "createCacheKey";

let Platform;
let c10;
let c5;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const require = arg1;
class InvitesDisabledRow {
  constructor(arg0) {
    invitesDisabled = global.invitesDisabled;
    tmp = closure_0;
    tmp2 = closure_2;
    intl = require("getSystemLocale").intl;
    stringResult = intl.string(require("getSystemLocale").t.Uwsjn6);
    intl2 = require("getSystemLocale").intl;
    if (invitesDisabled) {
      stringResult1 = intl2.string(require("getSystemLocale").t["2LLbj9"]);
    } else {
      obj = { helpArticleUrl: null };
      tmp4 = closure_1;
      obj2 = require("combined");
      tmp5 = HelpdeskArticles;
      obj[0] = obj2.getArticleURL(HelpdeskArticles.INVITE_DISABLED);
      stringResult1 = intl2.format(require("getSystemLocale").t.IFBHag, obj);
    }
    tmp7 = jsx;
    obj = { label: stringResult, subLabel: null, icon: null, checked: null, onPress: null, start: true, end: true };
    obj[1] = jsx(require("Text").Text, { variant: "text-xs/medium", children: stringResult1 });
    tmp7Result = null;
    if (invitesDisabled) {
      obj1 = { source: null };
      tmp9 = closure_1;
      obj1[0] = require("registerAsset");
      tmp7Result = tmp7(require("TableRowIcon").TableRowIcon, obj1);
    }
    obj[2] = tmp7Result;
    obj[3] = invitesDisabled;
    obj[4] = global.onPauseInvites;
    return tmp7(require("TableCheckboxRow").TableCheckboxRow, obj);
  }
}
function GuildSettingsModalInstantInvites(invites) {
  invites = invites.invites;
  const guild = invites.guild;
  let flag = invites.showChannel;
  if (flag === undefined) {
    flag = false;
  }
  let invitesDisabledPermission;
  let stateFromStores;
  let hasItem;
  let first;
  let ensureGuildLoaded;
  let createGuildRecordFromRust;
  let memo;
  let stateFromStoresArray;
  let callback1;
  const tmp = callback3();
  let obj = invites(flag[17]);
  invitesDisabledPermission = obj.useInvitesDisabledPermission(guild);
  let obj1 = invites(flag[18]);
  let items = [first];
  stateFromStores = obj1.useStateFromStores(items, () => first.getGuildIncident(guild.id));
  const features = guild.features;
  hasItem = features.has(stateFromStoresArray.INVITES_DISABLED);
  if (!hasItem) {
    let invitesDisabledUntil;
    if (stateFromStores != null) {
      invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
    }
    let BooleanResult = null != invitesDisabledUntil;
    if (BooleanResult) {
      const _Boolean = Boolean;
      const _Date = Date;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      const _Date2 = Date;
      const date1 = new Date();
      BooleanResult = Boolean(date > date1);
    }
    hasItem = BooleanResult;
  }
  const tmp19 = invitesDisabledPermission(stateFromStores.useState(false), 2);
  first = tmp19[0];
  ensureGuildLoaded = tmp19[1];
  const tmp21 = invitesDisabledPermission(stateFromStores.useState(21), 2);
  createGuildRecordFromRust = tmp21[1];
  const items1 = [invites, invitesDisabledPermission, flag];
  memo = stateFromStores.useMemo(() => {
    const sortByResult = guild(flag[19]).sortBy(invites, (channel) => {
      if (closure_2) {
        channel = channel.channel;
        let formatted;
        if (channel != null) {
          formatted = channel.name.toLowerCase();
          const str3 = channel.name;
        }
        let str = formatted;
      } else {
        const inviter = channel.inviter;
        str = undefined;
        if (inviter != null) {
          if (inviter.username != null) {
            str = str2.toLowerCase();
          }
        }
        if (str == null) {
          str = "";
        }
      }
      return str;
    });
    if (invitesDisabledPermission) {
      sortByResult.unshift(outer1_17);
    }
    return sortByResult;
  }, items1);
  const items2 = [ensureGuildLoaded];
  stateFromStoresArray = invites(flag[18]).useStateFromStoresArray(items2, () => sortedLinkedChannelsForGuild.getSortedLinkedChannelsForGuild(guild.id));
  const items3 = [memo, stateFromStoresArray];
  const memo1 = stateFromStores.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items3);
  const effect = stateFromStores.useEffect(() => {
    callback(21);
  }, []);
  const items4 = [first, stateFromStores, guild];
  const callback = stateFromStores.useCallback((type) => {
    if ("invite" === type.type) {
      let id = type.data.code;
    } else {
      id = type.data.id;
    }
    return id;
  }, []);
  callback1 = stateFromStores.useCallback(() => {
    if (!first) {
      sortedLinkedChannelsForGuild(true);
      try {
        let obj = { source: null, alertType: null };
        obj[0] = invites(flag[20]).GuildIncidentActionSources.MESSAGE;
        obj[1] = invites(flag[21]).getIncidentAlertType(stateFromStores);
        const obj2 = invites(flag[21]);
        obj = { guild: null, analyticsData: null };
        obj[0] = guild;
        obj[1] = obj;
        guild(flag[22]).openLazy(invites(flag[24])(flag[23], flag.paths), "GuildIncidentActionsActionSheet", obj);
        tmp3(false);
        const obj3 = guild(flag[22]);
      } catch (tmp17) {
        tmp2(false);
        throw tmp17;
      }
      tmp3 = sortedLinkedChannelsForGuild;
    }
  }, items4);
  const items5 = [hasItem, callback1, first];
  if (null == invites) {
    let tmp28 = callback(tmp2(tmp3[27]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    obj = { children: null };
    obj = { onPauseInvites: null, invitesDisabled: null, invitesDisabledLoading: null };
    obj[0] = callback1;
    obj[1] = hasItem;
    obj[2] = first;
    const items6 = [callback(InvitesDisabledRow, obj), ];
    obj1 = { Illustration: null, title: null, body: null };
    obj1[0] = tmp2(tmp3[29]).InviteEmpty;
    const intl = tmp2(tmp3[11]).intl;
    obj1[1] = intl.string(tmp2(tmp3[11]).t["+nLJkZ"]);
    const intl2 = tmp2(tmp3[11]).intl;
    obj1[2] = intl2.string(tmp2(tmp3[11]).t.F53CAc);
    items6[1] = callback(tmp2(tmp3[28]).EmptyState, obj1);
    obj[0] = items6;
    tmp28 = callback2(closure_13, obj);
  } else {
    let obj2 = { style: null, data: null, keyExtractor: null, renderItem: null, initialNumToRender: 10, windowSize: null, contentContainerStyle: null };
    const items7 = [invitesDisabledPermission ? tmp.listWithPause : tmp.list];
    obj2[0] = items7;
    obj2[1] = memo1;
    obj2[2] = callback;
    obj2[3] = tmp27;
    obj2[5] = tmp21[0];
    const items8 = [invites.contentContainerStyle, tmp.content];
    obj2[6] = items8;
    tmp28 = callback(hasItem, obj2);
  }
  return tmp28;
}
({ Platform, FlatList: c5 } = get_ActivityIndicator);
({ GuildFeatures: c10, HelpdeskArticles: unpackModuleId } = ME);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles({ list: { paddingTop: 8 }, content: { padding: 16, gap: 24 }, listWithPause: { paddingTop: 0 } });
const pause_invites = "pause_invites";
importDefaultResult = new importDefaultResult({ code: "pause_invites" });
let closure_18 = {};
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default function ConnectedGuildSettingsModalInstantInvites(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(guildId));
  guildId(589);
  [][0] = handleFormInit;
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { children: null };
    obj = { guild: null, invites: null, contentContainerStyle: null, showChannel: true };
    obj[0] = stateFromStores;
    obj[1] = tmp5;
    obj[2] = guildId.contentContainerStyle;
    const items1 = [callback(GuildSettingsModalInstantInvites, obj), callback(guildId(5754).NavScrim, {})];
    obj[0] = items1;
    tmp6 = callback2(closure_13, obj);
  }
  return tmp6;
};
export { InvitesDisabledRow };