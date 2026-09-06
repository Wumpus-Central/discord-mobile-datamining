// discord_app/modules/guild_settings/native/GuildSettingsModal.tsx
import util from "../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import GuildSettingsModalChannelsActionCreatorsDefault from "../GuildSettingsModalChannelsActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

require = fn;
function close() {
  GuildSettingsModalChannelsActionCreatorsDefault.terminate();
  GuildSettingsActionCreatorsDefault.close();
}
const Constants = fn(1074);
({ GuildSettingsSections: closure_7, WebhookTypes: closure_8 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default function GuildSettingsModal() {
  let bottom = require("useSafeAreaInsets")().bottom;
  let tmp2 = require("useInitialValue")(() => GuildSettingsStore.getGuildId());
  importDefault = tmp2;
  let obj = bottom(stateFromStores[51]);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_1));
  const items1 = [bottom, tmp2];
  const memo = noop.useMemo(() => {
    let tmp2;
    if (null != contentContainerStyle) {
      bottom = tmp;
      contentContainerStyle = { contentContainerStyle: null };
      contentContainerStyle = { paddingBottom: 16 + bottom };
      contentContainerStyle.contentContainerStyle = contentContainerStyle;
      contentContainerStyle = {};
      const obj1 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_LANDING,
        title: null,
        headerLeft: null,
        render: null,
      };
      const intl = util.intl;
      obj1.title = intl.string(util.t["154/bL"]);
      let obj4 = NavigatorHeader;
      obj1.headerLeft = obj4.getHeaderCloseButton(close);
      obj1.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[11]), { guildId });
      };
      contentContainerStyle[constants.LANDING] = obj1;
      const obj2 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
        title: null,
        render: null,
      };
      const intl2 = util.intl;
      obj2.title = intl2.string(util.t["/dp6yY"]);
      obj2.render = function render() {
        const obj = {};
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[12]), {});
      };
      contentContainerStyle[constants.OVERVIEW] = obj2;
      const obj3 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MODERATION,
        title: null,
        render: null,
      };
      const intl3 = util.intl;
      obj3.title = intl3.string(util.t["5tbTdV"]);
      obj3.render = function render() {
        const obj = {};
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[13]), {});
      };
      contentContainerStyle[constants.MODERATION] = obj3;
      obj4 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
        title: null,
        postponeRender: true,
        render: null,
      };
      const intl4 = util.intl;
      obj4.title = intl4.string(util.t.SPWLyT);
      obj4.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[14]), { guildId });
      };
      contentContainerStyle[constants.AUDIT_LOG] = obj4;
      const obj5 = { title: null, render: null };
      const intl5 = util.intl;
      obj5.title = intl5.string(util.t.pEasFX);
      obj5.render = function render(arg0) {
        const obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[15]), { guildId });
      };
      contentContainerStyle[constants.AUDIT_LOG_FILTER] = obj5;
      const obj6 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
        title: null,
        render: null,
      };
      const intl6 = util.intl;
      obj6.title = intl6.string(util.t.CIsNZw);
      obj6.render = function render() {
        const obj = {};
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[16]), {});
      };
      contentContainerStyle[constants.INTEGRATIONS] = obj6;
      const obj7 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_EMOJI,
        title: null,
        postponeRender: true,
        render: null,
      };
      const intl7 = util.intl;
      obj7.title = intl7.string(util.t.sMOuuS);
      obj7.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[17]), { guildId });
      };
      contentContainerStyle[constants.EMOJI] = obj7;
      const obj8 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_STICKERS,
        title: null,
        postponeRender: true,
        render: null,
      };
      const intl8 = util.intl;
      obj8.title = intl8.string(util.t.R5nQkS);
      obj8.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[18]), { guildId });
      };
      contentContainerStyle[constants.STICKERS] = obj8;
      const obj9 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_TAG,
        title: null,
        render: null,
      };
      const intl9 = util.intl;
      obj9.title = intl9.string(util.t["2QmKZ2"]);
      obj9.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[19]), { guildId });
      };
      contentContainerStyle[constants.TAG] = obj9;
      const obj10 = { title: null, render: null };
      const intl10 = util.intl;
      obj10.title = intl10.string(util.t.r4R7mm);
      obj10.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[20]), { guildId });
      };
      contentContainerStyle[constants.TAG_CUSTOMIZE] = obj10;
      const obj11 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS,
        title: null,
        render: null,
      };
      const intl11 = util.intl;
      obj11.title = intl11.string(util.t.jp25Id);
      obj11.render = function render() {
        const obj = { guildId, webhookType: constants.INCOMING };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[21]), { guildId, webhookType: constants.INCOMING });
      };
      contentContainerStyle[constants.WEBHOOKS] = obj11;
      const obj12 = { title: null, render: null };
      const intl12 = util.intl;
      obj12.title = intl12.string(util.t["6SE3L3"]);
      obj12.render = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[22]), {});
      };
      contentContainerStyle[constants.EDIT_WEBHOOK] = obj12;
      const obj13 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS,
        title: null,
        render: null,
      };
      const intl13 = util.intl;
      obj13.title = intl13.string(util.t.OrV60r);
      obj13.render = function render() {
        const obj = { guildId, webhookType: constants.CHANNEL_FOLLOWER };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[21]), { guildId, webhookType: constants.CHANNEL_FOLLOWER });
      };
      contentContainerStyle[constants.CHANNELS_FOLLOWED] = obj13;
      const obj14 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
        title: null,
        render: null,
      };
      const intl14 = util.intl;
      obj14.title = intl14.string(util.t.sE5hSZ);
      obj14.render = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[23]), {});
      };
      contentContainerStyle[constants.INTEGRATION_SETTINGS] = obj14;
      const obj15 = { title: null, render: null };
      const intl15 = util.intl;
      obj15.title = intl15.string(util.t.CIsNZw);
      obj15.render = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.closeGuildSettings = closeGuildSettings;
        const merged1 = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[24]), {});
      };
      contentContainerStyle[constants.INTEGRATION_PLATFORM] = obj15;
      const obj16 = { title: null, render: null };
      const intl16 = util.intl;
      obj16.title = intl16.string(util.t.tqtDXC);
      obj16.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[25]), { guildId });
      };
      contentContainerStyle[constants.LOBBIES_LINKED] = obj16;
      const obj17 = { title: null, render: null };
      const intl17 = util.intl;
      obj17.title = intl17.string(util.t.OJknhi);
      obj17.render = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[26]), {});
      };
      contentContainerStyle[constants.EDIT_LINKED_LOBBY] = obj17;
      const obj18 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_CHANNELS,
        title: null,
        postponeRender: true,
        render: null,
      };
      const intl18 = util.intl;
      obj18.title = intl18.string(util.t.OGiMXJ);
      obj18.render = function render() {
        const obj = { guildId, onDone: contentContainerStyle(stateFromStores[6]).stopReordering };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[27]), {
          guildId,
          onDone: contentContainerStyle(stateFromStores[6]).stopReordering,
        });
      };
      contentContainerStyle[constants.CHANNELS] = obj18;
      const obj19 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_SECURITY,
        title: null,
        render: null,
      };
      const intl19 = util.intl;
      obj19.title = intl19.string(util.t.Am9YHi);
      obj19.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[28]), { guildId });
      };
      contentContainerStyle[constants.SECURITY] = obj19;
      const obj20 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_ROLES,
        title: null,
        render: null,
      };
      const intl20 = util.intl;
      obj20.title = intl20.string(util.t["LPJmL/"]);
      obj20.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[29]), { guildId });
      };
      contentContainerStyle[constants.ROLES] = obj20;
      const obj21 = { title: null, render: null };
      const intl21 = util.intl;
      obj21.title = intl21.string(util.t["LPJmL/"]);
      obj21.render = function render(arg0) {
        const obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[30]), { guildId });
      };
      contentContainerStyle[constants.ROLE_EDIT_REFRESH] = obj21;
      const obj22 = { title: null, render: null };
      const intl22 = util.intl;
      obj22.title = intl22.string(util.t["5XZKy/"]);
      obj22.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[31]), { guildId });
      };
      contentContainerStyle[constants.VANITY_URL] = obj22;
      const obj23 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INVITES,
        title: null,
        postponeRender: true,
        render: null,
      };
      const intl23 = util.intl;
      obj23.title = intl23.string(util.t.ngRFjZ);
      obj23.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[32]), { guildId });
      };
      contentContainerStyle[constants.INSTANT_INVITES] = obj23;
      const obj24 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MEMBERS,
        title: null,
        postponeRender: true,
        render: null,
      };
      const intl24 = util.intl;
      obj24.title = intl24.string(util.t["9Oq93m"]);
      obj24.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[33]), { guildId });
      };
      contentContainerStyle[constants.MEMBERS] = obj24;
      const obj25 = {
        render(arg0) {
          const obj = { guildId };
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(obj);
          return jsx(bottom(stateFromStores[34]).GuildSettingsModalMemberEditScene, { guildId });
        },
      };
      contentContainerStyle[constants.MEMBER_EDIT] = obj25;
      const obj26 = {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const obj = { guildId };
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(obj);
          return jsx(contentContainerStyle(stateFromStores[35]), { guildId });
        },
      };
      contentContainerStyle[constants.MEMBER_KICK] = obj26;
      const obj27 = {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const obj = { guildId };
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(obj);
          return jsx(contentContainerStyle(stateFromStores[36]), { guildId });
        },
      };
      contentContainerStyle[constants.MEMBER_BAN] = obj27;
      const obj28 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_BANS,
        title: null,
        postponeRender: true,
        render: null,
      };
      const intl25 = util.intl;
      obj28.title = intl25.string(util.t.ZbeITS);
      obj28.render = function render() {
        const obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[37]), { guildId });
      };
      contentContainerStyle[constants.BANS] = obj28;
      const obj29 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
        title: null,
        postponeRender: true,
        render: null,
      };
      const intl26 = util.intl;
      obj29.title = intl26.string(util.t.nRtNqn);
      obj29.render = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(contentContainerStyle(stateFromStores[38]), {});
      };
      contentContainerStyle[constants.COMMUNITY] = obj29;
      const obj30 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
        title: null,
        render: null,
      };
      const intl27 = util.intl;
      obj30.title = intl27.string(util.t.ElKTeb);
      obj30.render = function render(arg0) {
        const obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(contentContainerStyle(stateFromStores[39]), { guildId });
      };
      contentContainerStyle[constants.COMMUNITY_INTRO] = obj30;
      const obj31 = { title: null, render: null };
      const intl28 = util.intl;
      obj31.title = intl28.string(util.t["KzCF/6"]);
      obj31.render = function render() {
        return jsx(contentContainerStyle(stateFromStores[40]), { guildId });
      };
      contentContainerStyle[constants.ROLE_SUBSCRIPTIONS] = obj31;
      const obj32 = { title: null, render: null };
      const intl29 = util.intl;
      obj32.title = intl29.string(util.t["KzCF/6"]);
      obj32.render = function render() {
        return jsx(contentContainerStyle(stateFromStores[41]), { guildId });
      };
      contentContainerStyle[constants.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj32;
      const obj33 = { title: null, render: null };
      const intl30 = util.intl;
      obj33.title = intl30.string(util.t["/CfKoD"]);
      obj33.render = function render() {
        return jsx(contentContainerStyle(stateFromStores[42]), { guildId });
      };
      contentContainerStyle[constants.ROLE_SUBSCRIPTIONS_BASIC] = obj33;
      const obj34 = { title: null, render: null };
      const intl31 = util.intl;
      obj34.title = intl31.string(util.t.pXbGYc);
      obj34.render = function render() {
        return jsx(contentContainerStyle(stateFromStores[43]), { guildId });
      };
      contentContainerStyle[constants.ROLE_SUBSCRIPTIONS_TIERS] = obj34;
      const obj35 = { title: null, render: null };
      const intl32 = util.intl;
      obj35.title = intl32.string(util.t["KzCF/6"]);
      obj35.render = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(contentContainerStyle(stateFromStores[44]), {});
      };
      contentContainerStyle[constants.ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj35;
      const obj36 = { title: null, render: null };
      const intl33 = util.intl;
      obj36.title = intl33.string(util.t.p2Rsdl);
      obj36.render = function render() {
        return jsx(contentContainerStyle(stateFromStores[45]), { guildId });
      };
      contentContainerStyle[constants.ROLE_SUBSCRIPTIONS_PAYMENTS] = obj36;
      const obj37 = { title: null, render: null };
      const intl34 = util.intl;
      obj37.title = intl34.string(util.t.C5Dbwn);
      obj37.render = function render() {
        return jsx(contentContainerStyle(stateFromStores[46]), { guildId });
      };
      contentContainerStyle[constants.ROLE_SUBSCRIPTIONS_EMOJIS] = obj37;
      const obj38 = { title: null, render: null };
      const intl35 = util.intl;
      obj38.title = intl35.string(util.t["KzCF/6"]);
      obj38.render = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(contentContainerStyle(stateFromStores[47]), {});
      };
      contentContainerStyle[constants.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj38;
      const obj39 = { title: null, render: null };
      const intl36 = util.intl;
      obj39.title = intl36.string(util.t.xHEzFh);
      obj39.render = function render() {
        return jsx(contentContainerStyle(stateFromStores[48]), { guildId });
      };
      contentContainerStyle[constants.OFFICIAL_MESSAGES] = obj39;
      tmp2 = contentContainerStyle;
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores, tmp2];
  const effect = noop.useEffect(() => {
    let tmp = null != closure_1;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (!tmp) {
      GuildSettingsActionCreatorsDefault.close();
    }
  }, items2);
  const first = _slicedToArray(
    noop.useState(() => GuildSettingsStore.getSavedRouteState()),
    1,
  )[0];
  let tmp10Result = null;
  if (null != memo) {
    obj = { onWillFocus: tmp8, initialRouteName: null, initialRouteState: null, screens: null };
    let LANDING;
    if (null == first) {
      LANDING = constants.LANDING;
    }
    obj.initialRouteName = LANDING;
    let tmp13;
    if (null != first) {
      tmp13 = first;
    }
    obj.initialRouteState = tmp13;
    obj.screens = memo;
    tmp10Result = jsx(bottom(stateFromStores[52]).Navigator, {
      onWillFocus: tmp8,
      initialRouteName: null,
      initialRouteState: null,
      screens: null,
    });
  }
  return tmp10Result;
}
