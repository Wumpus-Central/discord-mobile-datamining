// === Module 19752: GuildSettingsModalInstantInvites ===

// Module 19752 (GuildSettingsModalInstantInvites)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6968 */;
import TableRowIcon from "TableRowIcon" /* 6977 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8474 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8476 */;
import InstantInvite from "InstantInvite" /* 10788 */;
import _modDef15455 from "module_15455" /* 15455 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10991 */;
import InviteRecord from "InviteRecord" /* 8193 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;

require = fn;
function InviteSeparator() {
  return closure_1_12(hasOwnProperty, { style: closure_15().separator });
}
class InvitesDisabledRow {
  constructor(arg0) {
    invitesDisabled = global.invitesDisabled;
    tmp = closure_0;
    tmp2 = closure_2;
    intl = closure_0(closure_2[12]).intl;
    stringResult = intl.string(closure_0(closure_2[12]).t.Uwsjn6);
    intl2 = closure_0(closure_2[12]).intl;
    if (invitesDisabled) {
      stringResult1 = intl2.string(tmp(tmp2[12]).t["2LLbj9"]);
    } else {
      obj = { helpArticleUrl: null };
      tmp4 = closure_1;
      obj2 = closure_1(tmp2[13]);
      tmp5 = HelpdeskArticles;
      obj.helpArticleUrl = obj2.getArticleURL(HelpdeskArticles.INVITE_DISABLED);
      stringResult1 = intl2.format(tmp(tmp2[12]).t.IFBHag, obj);
    }
    tmp7 = jsx;
    obj1 = { label: stringResult, subLabel: jsx(tmp(tmp2[15]).Text, { variant: "text-xs/medium", children: stringResult1 }), icon: null, checked: null, onPress: null, start: true, end: true };
    tmp7Result = null;
    if (invitesDisabled) {
      obj5 = { source: null };
      tmp9 = closure_1;
      obj5.source = closure_1(tmp2[17]);
      tmp7Result = tmp7(tmp(tmp2[16]).TableRowIcon, obj5);
    }
    obj1.icon = tmp7Result;
    obj1.checked = invitesDisabled;
    obj1.onPress = global.onPauseInvites;
    return tmp7(tmp(tmp2[14]).TableCheckboxRow, obj1);
  }
}
function GuildSettingsModalInstantInvites(invites) {
  invites = invites.invites;
  const guild = invites.guild;
  let flag = invites.showChannel;
  if (flag === undefined) {
    flag = false;
  }
  let invitesDisabledLoading;
  closure_7 = undefined;
  let memo;
  let stateFromStoresArray;
  let callback1;
  const tmp = closure_15();
  const invitesDisabledPermission = invites(flag[18]).useInvitesDisabledPermission(guild);
  let obj = invites(flag[18]);
  let items = [invitesDisabledLoading];
  const stateFromStores = invites(flag[19]).useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
  const features = guild.features;
  let hasItem = features.has(callback1.INVITES_DISABLED);
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
  invitesDisabledLoading = tmp19[0];
  closure_7 = tmp19[1];
  const items1 = [invites, invitesDisabledPermission, flag];
  memo = stateFromStores.useMemo(() => {
    const sortByResult = _modDef12.sortBy(invites, (channel) => {
      if (flag) {
        channel = channel.channel;
        let formatted;
        if (channel != null) {
          formatted = channel.name.toLowerCase();
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
      sortByResult.unshift(importDefaultResult1);
    }
    return sortByResult;
  }, items1);
  let obj2 = invites(flag[19]);
  const items2 = [closure_7];
  stateFromStoresArray = invites(flag[19]).useStateFromStoresArray(items2, () => ChannelStore.getSortedLinkedChannelsForGuild(guild.id));
  const items3 = [memo, stateFromStoresArray];
  const memo1 = stateFromStores.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items3);
  const items4 = [invitesDisabledLoading, stateFromStores, guild];
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
      closure_7(true);
      try {
        const obj = { source: GuildAntiRaidTypes.GuildIncidentActionSources.MESSAGE, alertType: GuildAntiRaidUtils.getIncidentAlertType(stateFromStores) };
        const obj4 = { guild, analyticsData: obj };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13205, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
        closure_7(false);
      } catch (tmp17) {
        tmp2(false);
        throw tmp17;
      }
    }
  }, items4);
  const items5 = [hasItem, callback1, invitesDisabledLoading];
  if (null == invites) {
    let tmp26Result = closure_12(tmp2(tmp3[28]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    let obj3 = { children: null };
    let obj4 = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    const items6 = [closure_12(InvitesDisabledRow, obj4), ];
    const obj5 = { Illustration: tmp2(tmp3[30]).InviteEmpty, title: null, body: null };
    const intl = tmp2(tmp3[12]).intl;
    obj5.title = intl.string(tmp2(tmp3[12]).t["+nLJkZ"]);
    const intl2 = tmp2(tmp3[12]).intl;
    obj5.body = intl2.string(tmp2(tmp3[12]).t.F53CAc);
    items6[1] = closure_12(tmp2(tmp3[29]).EmptyState, obj5);
    obj3.children = items6;
    tmp26Result = closure_14(closure_13, obj3);
  } else {
    const obj6 = {
      data: memo1,
      keyExtractor: callback,
      getItemType(type) {
          if ("invite" !== type.type) {
            let str = type.type;
          } else {
            str = "pause";
          }
          return str;
        },
      renderItem: tmp25,
      ItemSeparatorComponent: InviteSeparator,
      contentContainerStyle: null
    };
    const items7 = [invites.contentContainerStyle, tmp.content, ];
    let contentWithoutPause = !invitesDisabledPermission;
    if (!invitesDisabledPermission) {
      contentWithoutPause = tmp.contentWithoutPause;
    }
    items7[2] = contentWithoutPause;
    obj6.contentContainerStyle = items7;
    tmp26Result = closure_12(tmp2(tmp3[31]).FlashList, obj6);
  }
  return tmp26Result;
}
get_ActivityIndicator = fn(17);
({ Platform, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ GuildFeatures: c10, HelpdeskArticles: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { content: { padding: 16 }, contentWithoutPause: { paddingTop: nativeDefault.space.PX_24 }, separator: null };
let obj3 = { paddingTop: nativeDefault.space.PX_24 };
obj2.separator = { height: nativeDefault.space.PX_24 };
let closure_15 = createStyles.createStyles(obj2);
const pause_invites = "pause_invites";
const importDefaultResult1 = new InviteRecord({ code: "pause_invites" });
let closure_19 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default function ConnectedGuildSettingsModalInstantInvites(guildId) {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  guildId(504);
  [][0] = GuildSettingsStore;
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj2 = { children: null };
    const obj3 = { guild: stateFromStores, invites: tmp5, contentContainerStyle: guildId.contentContainerStyle, showChannel: true };
    const items1 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(guildId(5601).NavScrim, {})];
    obj2.children = items1;
    tmp6 = closure_14(closure_13, obj2);
  }
  return tmp6;
};
export { InvitesDisabledRow };