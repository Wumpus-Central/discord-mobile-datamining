// discord_app/modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import AssetRegistryDefault from "../../../../_runtime/04813_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import TableCheckboxRow2 from "../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRowIcon2 from "../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import GuildAntiRaidUtils from "../../guild_antiraid/GuildAntiRaidUtils.tsx";
import GuildAntiRaidTypes from "../../guild_antiraid/GuildAntiRaidTypes.tsx";
import InstantInvite from "../../guild_instant_invites/native/InstantInvite.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildIncidentsStore from "../../guild_antiraid/GuildIncidentsStore.tsx";
import InviteRecord from "../../../records/InviteRecord.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channel, guildId;

let Platform;
let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let unpackModuleId;
function GuildSettingsModalInstantInvites(invites) {
  let intl;
  let intl2;
  let items6;
  let items7;
  let items8;
  let tmp25;
  invites = invites.invites;
  const guild = invites.guild;
  let flag = invites.showChannel;
  if (flag === undefined) {
    flag = false;
  }
  let invitesDisabledLoading;
  let closure_7;
  let closure_8;
  let memo;
  let stateFromStoresArray;
  let callback1;
  const contentContainerStyle = invites.contentContainerStyle;
  const tmp = closure_15();
  let obj = invites(flag[19]);
  const invitesDisabledPermission = obj.useInvitesDisabledPermission(guild);
  let obj2 = invites(flag[20]);
  let items = [invitesDisabledLoading];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
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
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      const date1 = new Date();
      BooleanResult = Boolean(date > date1);
    }
    hasItem = BooleanResult;
  }
  const tmp15 = invitesDisabledPermission(stateFromStores.useState(false), 2);
  invitesDisabledLoading = tmp15[0];
  closure_7 = tmp15[1];
  const tmp17 = invitesDisabledPermission(stateFromStores.useState(21), 2);
  closure_8 = tmp17[1];
  const items1 = [invites, invitesDisabledPermission, flag];
  const first1 = tmp17[0];
  memo = stateFromStores.useMemo(() => {
    const obj = _modDef12;
    const sortByResult = obj.sortBy(invites, (channel) => {
      let str;
      if (flag) {
        channel = channel.channel;
        let formatted;
        if (channel != null) {
          const str3 = channel.name;
          formatted = str3.toLowerCase();
        }
        str = formatted;
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
  const items2 = [closure_7];
  const tmp2Result = invites(flag[20]);
  stateFromStoresArray = tmp2Result.useStateFromStoresArray(items2, () =>
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
    let id;
    if ("invite" === type.type) {
      id = type.data.code;
    } else {
      id = type.data.id;
    }
    return id;
  }, []);
  callback1 = stateFromStores.useCallback(() => {
    let obj2;
    if (!first) {
      closure_7(true);
      try {
        const obj = {
          source: GuildAntiRaidTypes.GuildIncidentActionSources.MESSAGE,
          alertType: obj2.getIncidentAlertType(stateFromStores),
        };
        obj2 = GuildAntiRaidUtils;
        const obj4 = { guild, analyticsData: obj };
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(11452, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
        closure_7(false);
      } catch (tmp16) {
        closure_7(false);
        throw tmp16;
      }
    }
  }, items4);
  const items5 = [hasItem, callback1, invitesDisabledLoading];
  if (null == invites) {
    tmp25 = closure_12(tmp2(tmp3[29]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    let obj3 = { children: items6 };
    let obj4 = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    items6 = [closure_12(closure_19, obj4)];
    const obj5 = {
      Illustration: invites(flag[31]).InviteEmpty,
      title: intl.string(invites(flag[13]).t["+nLJkZ"]),
      body: intl2.string(invites(flag[13]).t.F53CAc),
    };
    const EmptyState = tmp2(tmp3[30]).EmptyState;
    intl = tmp2(tmp3[13]).intl;
    intl2 = tmp2(tmp3[13]).intl;
    items6[1] = closure_12(EmptyState, obj5);
    tmp25 = closure_14(closure_13, obj3);
  } else {
    const obj6 = {
      style: items7,
      data: memo1,
      keyExtractor: callback,
      renderItem: tmp24,
      initialNumToRender: 10,
      windowSize: first1,
      contentContainerStyle: items8,
    };
    items7 = [invitesDisabledPermission ? tmp.listWithPause : tmp.list];
    items8 = [contentContainerStyle, tmp.content];
    tmp25 = closure_12(hasItem, obj6);
  }
  return tmp25;
}
({ Platform, FlatList: hasOwnProperty } = react_native);
({ GuildFeatures: c10, HelpdeskArticles: unpackModuleId } = Constants);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({
  list: { paddingTop: 8 },
  content: { padding: 16, gap: 24 },
  listWithPause: { paddingTop: 0 },
});
const pause_invites = "pause_invites";
const importDefaultResult1 = new InviteRecord({ code: "pause_invites" });
let closure_18 = {};
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let invitesDisabled;
      let obj3;
      let onPauseInvites;
      let tmp10;
      let tmp13;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(12);
      ({ onPauseInvites, invitesDisabled } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.Uwsjn6);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== invitesDisabled) {
        let stringResult1;
        const intl2 = intl3.intl;
        if (invitesDisabled) {
          stringResult1 = intl2.string(intl3.t["2LLbj9"]);
        } else {
          const format = intl2.format;
          const obj2 = { helpArticleUrl: obj3.getArticleURL(unpackModuleId.INVITE_DISABLED) };
          const IFBHag = intl3.t.IFBHag;
          obj3 = HelpdeskUtilsDefault;
          stringResult1 = format(IFBHag, obj2);
        }
        cResult[1] = invitesDisabled;
        cResult[2] = stringResult1;
        tmp6 = stringResult1;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp6) {
        const obj4 = { variant: "text-xs/medium", children: tmp6 };
        const tmp12 = closure_12(Text_Text.Text, obj4);
        cResult[3] = tmp6;
        cResult[4] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== invitesDisabled) {
        let tmp14 = null;
        if (invitesDisabled) {
          const obj5 = { source: AssetRegistryDefault };
          const TableRowIcon = TableRowIcon2.TableRowIcon;
          tmp14 = closure_12(TableRowIcon, obj5);
        }
        cResult[5] = invitesDisabled;
        cResult[6] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === invitesDisabled) {
        if (cResult[8] === onPauseInvites) {
          if (cResult[9] === tmp10) {
            let tmp17;
            if (cResult[10] === tmp13) {
              tmp17 = cResult[11];
            }
            return tmp17;
          }
        }
      }
      const tmp18 = closure_12(TableCheckboxRow2.TableCheckboxRow, {
        label: first,
        subLabel: tmp10,
        icon: tmp13,
        checked: invitesDisabled,
        onPress: onPauseInvites,
        start: true,
        end: true,
      });
      cResult[7] = invitesDisabled;
      cResult[8] = onPauseInvites;
      cResult[9] = tmp10;
      cResult[10] = tmp13;
      cResult[11] = tmp18;
      tmp17 = tmp18;
    }
  : (invitesDisabled) => {
      let obj2;
      let stringResult1;
      let tmp7Result;
      invitesDisabled = invitesDisabled.invitesDisabled;
      const onPauseInvites = invitesDisabled.onPauseInvites;
      const intl = intl3.intl;
      const stringResult = intl.string(intl3.t.Uwsjn6);
      const intl2 = intl3.intl;
      if (invitesDisabled) {
        stringResult1 = intl2.string(intl3.t["2LLbj9"]);
      } else {
        const format = intl2.format;
        const obj = { helpArticleUrl: obj2.getArticleURL(unpackModuleId.INVITE_DISABLED) };
        const IFBHag = intl3.t.IFBHag;
        obj2 = HelpdeskUtilsDefault;
        stringResult1 = format(IFBHag, obj);
      }
      const obj3 = {
        label: stringResult,
        subLabel: closure_12(Text_Text.Text, { variant: "text-xs/medium", children: stringResult1 }),
        icon: tmp7Result,
        checked: invitesDisabled,
        onPress: onPauseInvites,
        start: true,
        end: true,
      };
      const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
      tmp7Result = null;
      if (invitesDisabled) {
        const obj4 = { source: AssetRegistryDefault };
        const TableRowIcon = TableRowIcon2.TableRowIcon;
        tmp7Result = closure_12(TableRowIcon, obj4);
      }
      return closure_12(TableCheckboxRow, obj3);
    };
let closure_19 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let items2;
      let props;
      let tmp6;
      let tmp8;
      let tmp9;
      const obj = guildId(576);
      const cResult = obj.c(9);
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function n() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildSettingsStore];
        class S {
          constructor() {
            invites = props.getProps().invites;
            if (invites == null) {
              invites = closure_1_18;
            }
            return invites;
          }
        }
        cResult[3] = items1;
        cResult[4] = S;
        tmp9 = S;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const tmpResult2 = guildId(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
      if (cResult[5] === contentContainerStyle) {
        if (cResult[6] === stateFromStores) {
          let tmp12;
          if (cResult[7] === stateFromStores1) {
            tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      let tmp13 = null;
      if (null != stateFromStores) {
        const obj2 = { children: items2 };
        class S {
          constructor() {
            invites = props.getProps().invites;
            if (invites == null) {
              invites = closure_1_18;
            }
            return invites;
          }
        }
        const obj3 = { guild: stateFromStores, invites: stateFromStores1, contentContainerStyle, showChannel: true };
        items2 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(guildId(6543).NavScrim, {})];
        tmp13 = closure_14(closure_13, obj2);
      }
      cResult[5] = contentContainerStyle;
      cResult[6] = stateFromStores;
      cResult[7] = stateFromStores1;
      cResult[8] = tmp13;
      tmp12 = tmp13;
    }
  : (guildId) => {
      let items1;
      let props;
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      const items = [GuildStore];
      const obj = guildId(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      guildId(504);
      [][0] = GuildSettingsStore;
      let tmp6 = null;
      const tmp = guildId;
      if (null != stateFromStores) {
        const obj2 = { children: items1 };
        const obj3 = { guild: stateFromStores, invites: tmp5, contentContainerStyle, showChannel: true };
        items1 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(tmp(6543).NavScrim, {})];
        tmp6 = closure_14(closure_13, obj2);
      }
      return tmp6;
    };
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default tmp8;
export const InvitesDisabledRow = tmp7;
