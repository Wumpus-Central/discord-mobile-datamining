// discord_app/modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef5007 from "../../../../_runtime/metro/05007__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
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
function GuildSettingsModalInstantInvites(invites) {
  invites = invites.invites;
  guild = invites.guild;
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
  const invitesDisabledPermission = invites(flag[19]).useInvitesDisabledPermission(guild);
  let obj = invites(flag[19]);
  let items = [invitesDisabledLoading];
  const stateFromStores = invites(flag[20]).useStateFromStores(items, () =>
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
  let obj2 = invites(flag[20]);
  const items2 = [closure_7];
  stateFromStoresArray = invites(flag[20]).useStateFromStoresArray(items2, () =>
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
          asyncRequireImpl(11435, dependencyMap.paths),
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
    let tmp28 = closure_12(tmp2(tmp3[29]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    let obj3 = { children: null };
    let obj4 = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    const items6 = [closure_12(closure_19, obj4)];
    const obj5 = { Illustration: tmp2(tmp3[31]).InviteEmpty, title: null, body: null };
    const intl = tmp2(tmp3[13]).intl;
    obj5.title = intl.string(tmp2(tmp3[13]).t["+nLJkZ"]);
    const intl2 = tmp2(tmp3[13]).intl;
    obj5.body = intl2.string(tmp2(tmp3[13]).t.F53CAc);
    items6[1] = closure_12(tmp2(tmp3[30]).EmptyState, obj5);
    obj3.children = items6;
    tmp28 = closure_14(closure_13, obj3);
  } else {
    const obj6 = {
      style: invitesDisabledPermission ? tmp.listWithPause : tmp.list,
      data: memo1,
      keyExtractor: callback,
      renderItem: tmp27,
      initialNumToRender: 10,
      windowSize: tmp21[0],
      contentContainerStyle: null,
    };
    const items7 = [invites.contentContainerStyle, tmp.content];
    obj6.contentContainerStyle = items7;
    tmp28 = closure_12(hasItem, obj6);
  }
  return tmp28;
}
get_ActivityIndicator = fn(17);
({ Platform, FlatList: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({ GuildFeatures: c10, HelpdeskArticles: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5090);
let closure_15 = createStyles.createStyles({
  list: { paddingTop: 8 },
  content: { padding: 16, gap: 24 },
  listWithPause: { paddingTop: 0 },
});
const pause_invites = "pause_invites";
const importDefaultResult1 = new InviteRecord({ code: "pause_invites" });
let closure_18 = {};
let ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function InvitesDisabledRow(arg0) {
      const cResult = c.c(12);
      ({ onPauseInvites, invitesDisabled } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.Uwsjn6);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== invitesDisabled) {
        const intl2 = util.intl;
        if (invitesDisabled) {
          let stringResult1 = intl2.string(util.t["2LLbj9"]);
        } else {
          const obj2 = { helpArticleUrl: HelpdeskUtilsDefault.getArticleURL(constants.INVITE_DISABLED) };
          stringResult1 = intl2.format(util.t.IFBHag, obj2);
        }
        cResult[1] = invitesDisabled;
        cResult[2] = stringResult1;
      } else {
        if (cResult[3] !== cResult[2]) {
          const obj4 = { variant: "text-xs/medium", children: tmp6 };
          const tmp13 = __initData(Text_Text.Text, obj4);
          cResult[3] = tmp6;
          cResult[4] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== invitesDisabled) {
          let tmp15 = null;
          if (invitesDisabled) {
            const obj5 = { source: _modDef5007 };
            tmp15 = __initData(TableRowIcon.TableRowIcon, obj5);
          }
          cResult[5] = invitesDisabled;
          cResult[6] = tmp15;
          let tmp14 = tmp15;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === invitesDisabled) {
          if (cResult[8] === onPauseInvites) {
            if (cResult[9] === tmp11) {
              if (cResult[10] === tmp14) {
                let tmp18 = cResult[11];
              }
              return tmp18;
            }
          }
        }
        const obj6 = {
          label: first,
          subLabel: tmp11,
          icon: tmp14,
          checked: invitesDisabled,
          onPress: onPauseInvites,
          start: true,
          end: true,
        };
        const tmp20 = __initData(TableCheckboxRow.TableCheckboxRow, obj6);
        cResult[7] = invitesDisabled;
        cResult[8] = onPauseInvites;
        cResult[9] = tmp11;
        cResult[10] = tmp14;
        cResult[11] = tmp20;
        tmp18 = tmp20;
      }
    }
  : function InvitesDisabledRow(invitesDisabled) {
      invitesDisabled = invitesDisabled.invitesDisabled;
      const intl = util.intl;
      const intl2 = util.intl;
      if (invitesDisabled) {
        let stringResult1 = intl2.string(util.t["2LLbj9"]);
      } else {
        const obj = { helpArticleUrl: HelpdeskUtilsDefault.getArticleURL(constants.INVITE_DISABLED) };
        stringResult1 = intl2.format(util.t.IFBHag, obj);
      }
      const obj3 = {
        label: intl.string(util.t.Uwsjn6),
        subLabel: __initData(Text_Text.Text, { variant: "text-xs/medium", children: stringResult1 }),
        icon: null,
        checked: null,
        onPress: null,
        start: true,
        end: true,
      };
      let tmp7Result = null;
      if (invitesDisabled) {
        const obj4 = { source: _modDef5007 };
        tmp7Result = __initData(TableRowIcon.TableRowIcon, obj4);
      }
      obj3.icon = tmp7Result;
      obj3.checked = invitesDisabled;
      obj3.onPress = invitesDisabled.onPauseInvites;
      return __initData(TableCheckboxRow.TableCheckboxRow, obj3);
    };
let closure_19 = tmp7;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedGuildSettingsModalInstantInvites(guildId) {
      const cResult = guildId(576).c(9);
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function n() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildSettingsStore];
        class I {
          constructor() {
            invites = closure_1_9.getProps().invites;
            if (invites == null) {
              invites = closure_1_18;
            }
            return invites;
          }
        }
        cResult[3] = items1;
        cResult[4] = I;
        let tmp9 = I;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const tmpResult = guildId(504);
      const stateFromStores1 = guildId(504).useStateFromStores(tmp8, tmp9);
      if (cResult[5] === contentContainerStyle) {
        if (cResult[6] === stateFromStores) {
          if (cResult[7] === stateFromStores1) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      let tmp13 = null;
      if (null != stateFromStores) {
        const obj2 = { children: null };
        class I {
          constructor() {
            invites = closure_1_9.getProps().invites;
            if (invites == null) {
              invites = closure_1_18;
            }
            return invites;
          }
        }
        const obj3 = { guild: stateFromStores, invites: stateFromStores1, contentContainerStyle, showChannel: true };
        const items2 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(tmp(6719).NavScrim, {})];
        obj2.children = items2;
        tmp13 = closure_14(closure_13, obj2);
      }
      cResult[5] = contentContainerStyle;
      cResult[6] = stateFromStores;
      cResult[7] = stateFromStores1;
      cResult[8] = tmp13;
      tmp12 = tmp13;
      const tmpResult2 = guildId(504);
    }
  : function ConnectedGuildSettingsModalInstantInvites(guildId) {
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
        const items1 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(guildId(6719).NavScrim, {})];
        obj2.children = items1;
        tmp6 = closure_14(closure_13, obj2);
      }
      return tmp6;
    };
export const InvitesDisabledRow = tmp7;
