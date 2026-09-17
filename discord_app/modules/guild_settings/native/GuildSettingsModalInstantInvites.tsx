// discord_app/modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef5685 from "../../../../_runtime/metro/05685__.js";
import TableCheckboxRow from "../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRowIcon from "../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import GuildAntiRaidUtils from "../../guild_antiraid/GuildAntiRaidUtils.tsx";
import GuildAntiRaidTypes from "../../guild_antiraid/GuildAntiRaidTypes.tsx";
import InstantInvite from "../../guild_instant_invites/native/InstantInvite.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildIncidentsStore from "../../guild_antiraid/GuildIncidentsStore.tsx";
import InviteRecord from "../../../records/InviteRecord.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

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
    obj1 = {
      label: stringResult,
      subLabel: jsx(tmp(tmp2[14]).Text, { variant: "text-xs/medium", children: stringResult1 }),
      icon: null,
      checked: null,
      onPress: null,
      start: true,
      end: true,
    };
    tmp7Result = null;
    if (invitesDisabled) {
      obj5 = { source: null };
      tmp9 = closure_1;
      obj5.source = closure_1(tmp2[16]);
      tmp7Result = tmp7(tmp(tmp2[15]).TableRowIcon, obj5);
    }
    obj1.icon = tmp7Result;
    obj1.checked = invitesDisabled;
    obj1.onPress = global.onPauseInvites;
    return tmp7(tmp(tmp2[13]).TableCheckboxRow, obj1);
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
  const invitesDisabledPermission = invites(flag[17]).useInvitesDisabledPermission(guild);
  let obj = invites(flag[17]);
  let items = [invitesDisabledLoading];
  const stateFromStores = invites(flag[18]).useStateFromStores(items, () =>
    GuildIncidentsStore.getGuildIncident(guild.id),
  );
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
      sortByResult.unshift(importDefaultResult1);
    }
    return sortByResult;
  }, items1);
  let obj2 = invites(flag[18]);
  const items2 = [closure_7];
  stateFromStoresArray = invites(flag[18]).useStateFromStoresArray(items2, () =>
    ChannelStore.getSortedLinkedChannelsForGuild(guild.id),
  );
  const items3 = [memo, stateFromStoresArray];
  const memo1 = stateFromStores.useMemo(() => {
    const items = [
      ...memo.map((data) => ({ type: "invite", data })),
      ...stateFromStoresArray.map((data) => ({ type: "channel", data })),
    ];
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
        const obj = {
          source: GuildAntiRaidTypes.GuildIncidentActionSources.MESSAGE,
          alertType: GuildAntiRaidUtils.getIncidentAlertType(stateFromStores),
        };
        const obj4 = { guild, analyticsData: obj };
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(11981, dependencyMap.paths),
          "GuildIncidentActionsActionSheet",
          obj4,
        );
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
    let obj3 = { children: null };
    let obj4 = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    const items6 = [closure_12(InvitesDisabledRow, obj4)];
    const obj5 = { Illustration: tmp2(tmp3[29]).InviteEmpty, title: null, body: null };
    const intl = tmp2(tmp3[11]).intl;
    obj5.title = intl.string(tmp2(tmp3[11]).t["+nLJkZ"]);
    const intl2 = tmp2(tmp3[11]).intl;
    obj5.body = intl2.string(tmp2(tmp3[11]).t.F53CAc);
    items6[1] = closure_12(tmp2(tmp3[28]).EmptyState, obj5);
    obj3.children = items6;
    tmp28 = closure_14(closure_13, obj3);
  } else {
    const obj6 = {
      style: null,
      data: null,
      keyExtractor: null,
      renderItem: null,
      initialNumToRender: 10,
      windowSize: null,
      contentContainerStyle: null,
    };
    const items7 = [invitesDisabledPermission ? tmp.listWithPause : tmp.list];
    obj6.style = items7;
    obj6.data = memo1;
    obj6.keyExtractor = callback;
    obj6.renderItem = tmp27;
    obj6.windowSize = tmp21[0];
    const items8 = [invites.contentContainerStyle, tmp.content];
    obj6.contentContainerStyle = items8;
    tmp28 = closure_12(hasItem, obj6);
  }
  return tmp28;
}
get_ActivityIndicator = fn(17);
({ Platform, FlatList: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ GuildFeatures: c10, HelpdeskArticles: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4640);
let closure_15 = createStyles.createStyles({
  list: { paddingTop: 8 },
  content: { padding: 16, gap: 24 },
  listWithPause: { paddingTop: 0 },
});
const pause_invites = "pause_invites";
const importDefaultResult1 = new InviteRecord({ code: "pause_invites" });
let closure_18 = {};
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
    const obj3 = {
      guild: stateFromStores,
      invites: tmp5,
      contentContainerStyle: guildId.contentContainerStyle,
      showChannel: true,
    };
    const items1 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(guildId(7154).NavScrim, {})];
    obj2.children = items1;
    tmp6 = closure_14(closure_13, obj2);
  }
  return tmp6;
}
export { InvitesDisabledRow };
