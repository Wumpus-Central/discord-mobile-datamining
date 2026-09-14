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

const require = globalThis.__r;

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
  const items = [GuildStore];
  stateFromStores = bottom(stateFromStores[51]).useStateFromStores(items, () => GuildStore.getGuild(closure_1));
  const items1 = [bottom, tmp2];
  const memo = noop.useMemo(() => {
    let tmp2;
    if (null != closure_1) {
      bottom = tmp;
      const obj2 = { paddingBottom: 16 + bottom };
      { contentContainerStyle: null }.contentContainerStyle = obj2;
      const obj3 = {};
      const obj4 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_LANDING, title: null, headerLeft: null, render: null };
      const intl = util.intl;
      obj4.title = intl.string(util.t["154/bL"]);
      obj4.headerLeft = NavigatorHeader.getHeaderCloseButton(close);
      obj4.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[11]), { guildId });
      };
      obj3[constants.LANDING] = obj4;
      const obj6 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_OVERVIEW, title: null, render: null };
      const intl2 = util.intl;
      obj6.title = intl2.string(util.t["/dp6yY"]);
      obj6.render = function render() {
        obj = {};
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[12]), {});
      };
      obj3[constants.OVERVIEW] = obj6;
      const obj7 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MODERATION, title: null, render: null };
      const intl3 = util.intl;
      obj7.title = intl3.string(util.t["5tbTdV"]);
      obj7.render = function render() {
        obj = {};
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[13]), {});
      };
      obj3[constants.MODERATION] = obj7;
      const obj8 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, title: null, postponeRender: true, render: null };
      const intl4 = util.intl;
      obj8.title = intl4.string(util.t.SPWLyT);
      obj8.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[14]), { guildId });
      };
      obj3[constants.AUDIT_LOG] = obj8;
      const obj9 = { title: null, render: null };
      const intl5 = util.intl;
      obj9.title = intl5.string(util.t.pEasFX);
      obj9.render = function render(arg0) {
        obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[15]), { guildId });
      };
      obj3[constants.AUDIT_LOG_FILTER] = obj9;
      const obj10 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION, title: null, render: null };
      const intl6 = util.intl;
      obj10.title = intl6.string(util.t.CIsNZw);
      obj10.render = function render() {
        obj = {};
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[16]), {});
      };
      obj3[constants.INTEGRATIONS] = obj10;
      const obj11 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_EMOJI, title: null, postponeRender: true, render: null };
      const intl7 = util.intl;
      obj11.title = intl7.string(util.t.sMOuuS);
      obj11.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[17]), { guildId });
      };
      obj3[constants.EMOJI] = obj11;
      const obj12 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_STICKERS, title: null, postponeRender: true, render: null };
      const intl8 = util.intl;
      obj12.title = intl8.string(util.t.R5nQkS);
      obj12.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[18]), { guildId });
      };
      obj3[constants.STICKERS] = obj12;
      const obj13 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_TAG, title: null, render: null };
      const intl9 = util.intl;
      obj13.title = intl9.string(util.t["2QmKZ2"]);
      obj13.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[19]), { guildId });
      };
      obj3[constants.TAG] = obj13;
      const obj14 = { title: null, render: null };
      const intl10 = util.intl;
      obj14.title = intl10.string(util.t.r4R7mm);
      obj14.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[20]), { guildId });
      };
      obj3[constants.TAG_CUSTOMIZE] = obj14;
      const obj15 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS, title: null, render: null };
      const intl11 = util.intl;
      obj15.title = intl11.string(util.t.jp25Id);
      obj15.render = function render() {
        obj = { guildId, webhookType: constants.INCOMING };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[21]), { guildId, webhookType: constants.INCOMING });
      };
      obj3[constants.WEBHOOKS] = obj15;
      const obj16 = { title: null, render: null };
      const intl12 = util.intl;
      obj16.title = intl12.string(util.t["6SE3L3"]);
      obj16.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[22]), {});
      };
      obj3[constants.EDIT_WEBHOOK] = obj16;
      const obj17 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS, title: null, render: null };
      const intl13 = util.intl;
      obj17.title = intl13.string(util.t.OrV60r);
      obj17.render = function render() {
        obj = { guildId, webhookType: constants.CHANNEL_FOLLOWER };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[21]), { guildId, webhookType: constants.CHANNEL_FOLLOWER });
      };
      obj3[constants.CHANNELS_FOLLOWED] = obj17;
      const obj18 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION, title: null, render: null };
      const intl14 = util.intl;
      obj18.title = intl14.string(util.t.sE5hSZ);
      obj18.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[23]), {});
      };
      obj3[constants.INTEGRATION_SETTINGS] = obj18;
      const obj19 = { title: null, render: null };
      const intl15 = util.intl;
      obj19.title = intl15.string(util.t.CIsNZw);
      obj19.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.closeGuildSettings = closeGuildSettings;
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[24]), {});
      };
      obj3[constants.INTEGRATION_PLATFORM] = obj19;
      const obj20 = { title: null, render: null };
      const intl16 = util.intl;
      obj20.title = intl16.string(util.t.tqtDXC);
      obj20.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[25]), { guildId });
      };
      obj3[constants.LOBBIES_LINKED] = obj20;
      const obj21 = { title: null, render: null };
      const intl17 = util.intl;
      obj21.title = intl17.string(util.t.OJknhi);
      obj21.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[26]), {});
      };
      obj3[constants.EDIT_LINKED_LOBBY] = obj21;
      const obj22 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_CHANNELS, title: null, postponeRender: true, render: null };
      const intl18 = util.intl;
      obj22.title = intl18.string(util.t.OGiMXJ);
      obj22.render = function render() {
        obj = { guildId, onDone: closure_1(stateFromStores[6]).stopReordering };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[27]), { guildId, onDone: closure_1(stateFromStores[6]).stopReordering });
      };
      obj3[constants.CHANNELS] = obj22;
      const obj23 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_SECURITY, title: null, render: null };
      const intl19 = util.intl;
      obj23.title = intl19.string(util.t.Am9YHi);
      obj23.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[28]), { guildId });
      };
      obj3[constants.SECURITY] = obj23;
      const obj24 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_ROLES, title: null, render: null };
      const intl20 = util.intl;
      obj24.title = intl20.string(util.t["LPJmL/"]);
      obj24.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[29]), { guildId });
      };
      obj3[constants.ROLES] = obj24;
      const obj25 = { title: null, render: null };
      const intl21 = util.intl;
      obj25.title = intl21.string(util.t["LPJmL/"]);
      obj25.render = function render(arg0) {
        obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[30]), { guildId });
      };
      obj3[constants.ROLE_EDIT_REFRESH] = obj25;
      const obj26 = { title: null, render: null };
      const intl22 = util.intl;
      obj26.title = intl22.string(util.t["5XZKy/"]);
      obj26.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[31]), { guildId });
      };
      obj3[constants.VANITY_URL] = obj26;
      const obj27 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INVITES, title: null, postponeRender: true, render: null };
      const intl23 = util.intl;
      obj27.title = intl23.string(util.t.ngRFjZ);
      obj27.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[32]), { guildId });
      };
      obj3[constants.INSTANT_INVITES] = obj27;
      const obj28 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MEMBERS, title: null, postponeRender: true, render: null };
      const intl24 = util.intl;
      obj28.title = intl24.string(util.t["9Oq93m"]);
      obj28.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[33]), { guildId });
      };
      obj3[constants.MEMBERS] = obj28;
      const obj29 = {
        render(arg0) {
            obj = { guildId };
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return jsx(bottom(stateFromStores[34]).GuildSettingsModalMemberEditScene, { guildId });
          }
      };
      obj3[constants.MEMBER_EDIT] = obj29;
      const obj30 = {
        headerTitle() {
            return null;
          },
        render(arg0) {
            obj = { guildId };
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return jsx(closure_1(stateFromStores[35]), { guildId });
          }
      };
      obj3[constants.MEMBER_KICK] = obj30;
      const obj31 = {
        headerTitle() {
            return null;
          },
        render(arg0) {
            obj = { guildId };
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return jsx(closure_1(stateFromStores[36]), { guildId });
          }
      };
      obj3[constants.MEMBER_BAN] = obj31;
      const obj32 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_BANS, title: null, postponeRender: true, render: null };
      const intl25 = util.intl;
      obj32.title = intl25.string(util.t.ZbeITS);
      obj32.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[37]), { guildId });
      };
      obj3[constants.BANS] = obj32;
      const obj33 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW, title: null, postponeRender: true, render: null };
      const intl26 = util.intl;
      obj33.title = intl26.string(util.t.nRtNqn);
      obj33.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(closure_1(stateFromStores[38]), {});
      };
      obj3[constants.COMMUNITY] = obj33;
      const obj34 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, title: null, render: null };
      const intl27 = util.intl;
      obj34.title = intl27.string(util.t.ElKTeb);
      obj34.render = function render(arg0) {
        obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[39]), { guildId });
      };
      obj3[constants.COMMUNITY_INTRO] = obj34;
      const obj35 = { title: null, render: null };
      const intl28 = util.intl;
      obj35.title = intl28.string(util.t["KzCF/6"]);
      obj35.render = function render() {
        return jsx(closure_1(stateFromStores[40]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS] = obj35;
      const obj36 = { title: null, render: null };
      const intl29 = util.intl;
      obj36.title = intl29.string(util.t["KzCF/6"]);
      obj36.render = function render() {
        return jsx(closure_1(stateFromStores[41]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj36;
      const obj37 = { title: null, render: null };
      const intl30 = util.intl;
      obj37.title = intl30.string(util.t["/CfKoD"]);
      obj37.render = function render() {
        return jsx(closure_1(stateFromStores[42]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_BASIC] = obj37;
      const obj38 = { title: null, render: null };
      const intl31 = util.intl;
      obj38.title = intl31.string(util.t.pXbGYc);
      obj38.render = function render() {
        return jsx(closure_1(stateFromStores[43]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_TIERS] = obj38;
      const obj39 = { title: null, render: null };
      const intl32 = util.intl;
      obj39.title = intl32.string(util.t["KzCF/6"]);
      obj39.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(closure_1(stateFromStores[44]), {});
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj39;
      const obj40 = { title: null, render: null };
      const intl33 = util.intl;
      obj40.title = intl33.string(util.t.p2Rsdl);
      obj40.render = function render() {
        return jsx(closure_1(stateFromStores[45]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_PAYMENTS] = obj40;
      const obj41 = { title: null, render: null };
      const intl34 = util.intl;
      obj41.title = intl34.string(util.t.C5Dbwn);
      obj41.render = function render() {
        return jsx(closure_1(stateFromStores[46]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_EMOJIS] = obj41;
      const obj42 = { title: null, render: null };
      const intl35 = util.intl;
      obj42.title = intl35.string(util.t["KzCF/6"]);
      obj42.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(closure_1(stateFromStores[47]), {});
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj42;
      const obj43 = { title: null, render: null };
      const intl36 = util.intl;
      obj43.title = intl36.string(util.t.xHEzFh);
      obj43.render = function render() {
        return jsx(closure_1(stateFromStores[48]), { guildId });
      };
      obj3[constants.OFFICIAL_MESSAGES] = obj43;
      tmp2 = obj3;
      let obj = { contentContainerStyle: null };
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
  const first = _slicedToArray(noop.useState(() => GuildSettingsStore.getSavedRouteState()), 1)[0];
  let tmp10Result = null;
  if (null != memo) {
    let obj2 = { onWillFocus: tmp8, initialRouteName: null, initialRouteState: null, screens: null };
    let LANDING;
    if (null == first) {
      LANDING = constants.LANDING;
    }
    obj2.initialRouteName = LANDING;
    let tmp13;
    if (null != first) {
      tmp13 = first;
    }
    obj2.initialRouteState = tmp13;
    obj2.screens = memo;
    tmp10Result = jsx(bottom(stateFromStores[52]).Navigator, { onWillFocus: tmp8, initialRouteName: null, initialRouteState: null, screens: null });
  }
  return tmp10Result;
};