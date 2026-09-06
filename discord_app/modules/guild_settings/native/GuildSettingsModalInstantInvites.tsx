// === Module 17646: GuildSettingsModalInstantInvites ===

// Module 17646 (GuildSettingsModalInstantInvites)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef5597 from "module_5597" /* 5597 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5604 */;
import TableRowIcon from "TableRowIcon" /* 5611 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8015 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8017 */;
import InstantInvite from "InstantInvite" /* 10932 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10080 */;
import InviteRecord from "InviteRecord" /* 8380 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

require = fn;
class InvitesDisabledRow {
  constructor(arg0) {
    invitesDisabled = global.invitesDisabled;
    tmp = closure_0;
    tmp2 = closure_2;
    intl = closure_0(closure_2[11]).intl;
    stringResult = intl.string(closure_0(closure_2[11]).t.Uwsjn6);
    intl2 = closure_0(closure_2[11]).intl;
    if (invitesDisabled) {
      stringResult1 = intl2.string(tmp(tmp2[11]).t["2LLbj9"]);
    } else {
      obj = { helpArticleUrl: null };
      tmp4 = closure_1;
      obj2 = closure_1(tmp2[12]);
      tmp5 = HelpdeskArticles;
      obj.helpArticleUrl = obj2.getArticleURL(HelpdeskArticles.INVITE_DISABLED);
      stringResult1 = intl2.format(tmp(tmp2[11]).t.IFBHag, obj);
    }
    tmp7 = jsx;
    obj = { label: stringResult, subLabel: jsx(tmp(tmp2[14]).Text, { variant: "text-xs/medium", children: stringResult1 }), icon: null, checked: null, onPress: null, start: true, end: true };
    tmp7Result = null;
    if (invitesDisabled) {
      obj1 = { source: null };
      tmp9 = closure_1;
      obj1.source = closure_1(tmp2[16]);
      tmp7Result = tmp7(tmp(tmp2[15]).TableRowIcon, obj1);
    }
    obj.icon = tmp7Result;
    obj.checked = invitesDisabled;
    obj.onPress = global.onPauseInvites;
    return tmp7(tmp(tmp2[13]).TableCheckboxRow, obj);
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
  closure_8 = undefined;
  let memo;
  let stateFromStoresArray;
  let callback1;
  const tmp = closure_15();
  let obj = invites(flag[17]);
  const invitesDisabledPermission = obj.useInvitesDisabledPermission(guild);
  let obj1 = invites(flag[18]);
  let items = [invitesDisabledLoading];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
  const features = guild.features;
  let hasItem = features.has(stateFromStoresArray.INVITES_DISABLED);
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
  const tmp21 = invitesDisabledPermission(stateFromStores.useState(21), 2);
  closure_8 = tmp21[1];
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
      sortByResult.unshift(InviteRecord);
    }
    return sortByResult;
  }, items1);
  const items2 = [closure_7];
  stateFromStoresArray = invites(flag[18]).useStateFromStoresArray(items2, () => ChannelStore.getSortedLinkedChannelsForGuild(guild.id));
  const items3 = [memo, stateFromStoresArray];
  const memo1 = stateFromStores.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items3);
  const effect = stateFromStores.useEffect(() => {
    closure_8(21);
  }, []);
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
        let obj = { source: GuildAntiRaidTypes.GuildIncidentActionSources.MESSAGE, alertType: GuildAntiRaidUtils.getIncidentAlertType(stateFromStores) };
        obj = { guild, analyticsData: null };
        obj.analyticsData = obj;
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11829, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj);
        closure_7(false);
      } catch (tmp17) {
        tmp2(false);
        throw tmp17;
      }
    }
  }, items4);
  const items5 = [hasItem, callback1, invitesDisabledLoading];
  if (null == invites) {
    let tmp28 = closure_12(tmp2(tmp3[27]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    obj = { children: null };
    obj = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    const items6 = [closure_12(InvitesDisabledRow, obj), ];
    obj1 = { Illustration: tmp2(tmp3[29]).InviteEmpty, title: null, body: null };
    const intl = tmp2(tmp3[11]).intl;
    obj1.title = intl.string(tmp2(tmp3[11]).t["+nLJkZ"]);
    const intl2 = tmp2(tmp3[11]).intl;
    obj1.body = intl2.string(tmp2(tmp3[11]).t.F53CAc);
    items6[1] = closure_12(tmp2(tmp3[28]).EmptyState, obj1);
    obj.children = items6;
    tmp28 = closure_14(closure_13, obj);
  } else {
    let obj2 = { style: null, data: null, keyExtractor: null, renderItem: null, initialNumToRender: 10, windowSize: null, contentContainerStyle: null };
    const items7 = [invitesDisabledPermission ? tmp.listWithPause : tmp.list];
    obj2.style = items7;
    obj2.data = memo1;
    obj2.keyExtractor = callback;
    obj2.renderItem = tmp27;
    obj2.windowSize = tmp21[0];
    const items8 = [invites.contentContainerStyle, tmp.content];
    obj2.contentContainerStyle = items8;
    tmp28 = closure_12(hasItem, obj2);
  }
  return tmp28;
}
get_ActivityIndicator = fn(17);
({ Platform, FlatList: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ GuildFeatures: c10, HelpdeskArticles: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles({ list: { paddingTop: 8 }, content: { padding: 16, gap: 24 }, listWithPause: { paddingTop: 0 } });
const pause_invites = "pause_invites";
InviteRecord = new InviteRecord({ code: "pause_invites" });
let closure_18 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default function ConnectedGuildSettingsModalInstantInvites(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  guildId(504);
  [][0] = GuildSettingsStore;
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { children: null };
    obj = { guild: stateFromStores, invites: tmp5, contentContainerStyle: guildId.contentContainerStyle, showChannel: true };
    const items1 = [closure_12(GuildSettingsModalInstantInvites, obj), closure_12(guildId(7040).NavScrim, {})];
    obj.children = items1;
    tmp6 = closure_14(closure_13, obj);
  }
  return tmp6;
};
export { InvitesDisabledRow };