// === Module 19917: GuildSettingsModal ===

// Module 19917 (GuildSettingsModal)
import util from "util" /* 1112 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import NavigatorHeader from "NavigatorHeader" /* 7191 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8574 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 17878 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8575 */;

const require = globalThis.__r;

require = fn;
function close() {
  GuildSettingsModalChannelsActionCreatorsDefault.terminate();
  GuildSettingsActionCreatorsDefault.close();
}
const Constants = fn(1071);
({ GuildSettingsSections: metroImportDefault, WebhookTypes: closure_8 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default function GuildSettingsModal() {
  let bottom = require("useSafeAreaInsets")().bottom;
  let tmp2 = require("useInitialValue")(() => GuildSettingsStore.getGuildId());
  importDefault = tmp2;
  items = [GuildStore];
  stateFromStores = bottom(stateFromStores[60]).useStateFromStores(items, () => GuildStore.getGuild(closure_1));
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
      const obj8 = { title: null, postponeRender: true, render: null };
      const intl4 = util.intl;
      obj8.title = intl4.string(util.t.uRelgx);
      obj8.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[14]), { guildId });
      };
      obj3[constants.GUILD_AUTOMOD] = obj8;
      const obj9 = { title: null, render: null };
      const intl5 = util.intl;
      obj9.title = intl5.string(util.t.uRelgx);
      obj9.render = function render(arg0) {
        obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[15]), { guildId });
      };
      obj3[constants.GUILD_AUTOMOD_RULE] = obj9;
      const obj10 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, title: null, postponeRender: true, render: null };
      const intl6 = util.intl;
      obj10.title = intl6.string(util.t.SPWLyT);
      obj10.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[16]), { guildId });
      };
      obj3[constants.AUDIT_LOG] = obj10;
      const obj11 = { title: null, render: null };
      const intl7 = util.intl;
      obj11.title = intl7.string(util.t.pEasFX);
      obj11.render = function render(arg0) {
        obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[17]), { guildId });
      };
      obj3[constants.AUDIT_LOG_FILTER] = obj11;
      const obj12 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION, title: null, render: null };
      const intl8 = util.intl;
      obj12.title = intl8.string(util.t.CIsNZw);
      obj12.render = function render() {
        obj = {};
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[18]), {});
      };
      obj3[constants.INTEGRATIONS] = obj12;
      const obj13 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_EMOJI, title: null, postponeRender: true, render: null };
      const intl9 = util.intl;
      obj13.title = intl9.string(util.t.sMOuuS);
      obj13.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[19]), { guildId });
      };
      obj3[constants.EMOJI] = obj13;
      const obj14 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_STICKERS, title: null, postponeRender: true, render: null };
      const intl10 = util.intl;
      obj14.title = intl10.string(util.t.R5nQkS);
      obj14.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[20]), { guildId });
      };
      obj3[constants.STICKERS] = obj14;
      const obj15 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, title: null, postponeRender: true, render: null };
      const intl11 = util.intl;
      obj15.title = intl11.string(util.t.OWQNYr);
      obj15.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[21]), { guildId });
      };
      obj3[constants.SOUNDBOARD] = obj15;
      const obj16 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_TAG, title: null, render: null };
      const intl12 = util.intl;
      obj16.title = intl12.string(util.t["2QmKZ2"]);
      obj16.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[22]), { guildId });
      };
      obj3[constants.TAG] = obj16;
      const obj17 = { title: null, render: null };
      const intl13 = util.intl;
      obj17.title = intl13.string(util.t.r4R7mm);
      obj17.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[23]), { guildId });
      };
      obj3[constants.TAG_CUSTOMIZE] = obj17;
      const obj18 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS, title: null, render: null };
      const intl14 = util.intl;
      obj18.title = intl14.string(util.t.jp25Id);
      obj18.render = function render() {
        obj = { guildId, webhookType: constants.INCOMING };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[24]), { guildId, webhookType: constants.INCOMING });
      };
      obj3[constants.WEBHOOKS] = obj18;
      const obj19 = { title: null, render: null };
      const intl15 = util.intl;
      obj19.title = intl15.string(util.t["6SE3L3"]);
      obj19.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[25]), {});
      };
      obj3[constants.EDIT_WEBHOOK] = obj19;
      const obj20 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_WEBHOOKS, title: null, render: null };
      const intl16 = util.intl;
      obj20.title = intl16.string(util.t.OrV60r);
      obj20.render = function render() {
        obj = { guildId, webhookType: constants.CHANNEL_FOLLOWER };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[24]), { guildId, webhookType: constants.CHANNEL_FOLLOWER });
      };
      obj3[constants.CHANNELS_FOLLOWED] = obj20;
      const obj21 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INTEGRATION, title: null, render: null };
      const intl17 = util.intl;
      obj21.title = intl17.string(util.t.sE5hSZ);
      obj21.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[26]), {});
      };
      obj3[constants.INTEGRATION_SETTINGS] = obj21;
      const obj22 = { title: null, render: null };
      const intl18 = util.intl;
      obj22.title = intl18.string(util.t.CIsNZw);
      obj22.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.closeGuildSettings = closeGuildSettings;
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[27]), {});
      };
      obj3[constants.INTEGRATION_PLATFORM] = obj22;
      const obj23 = { title: null, render: null };
      const intl19 = util.intl;
      obj23.title = intl19.string(util.t.CIsNZw);
      obj23.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[28]), {});
      };
      obj3[constants.INTEGRATION_APPLICATION] = obj23;
      const obj24 = { title: null, render: null };
      const intl20 = util.intl;
      obj24.title = intl20.string(util.t.xrmhRX);
      obj24.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[29]), {});
      };
      obj3[constants.INTEGRATION_BOT_PERMISSIONS] = obj24;
      const obj25 = { title: null, render: null };
      const intl21 = util.intl;
      obj25.title = intl21.string(util.t["N+InBa"]);
      obj25.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[30]), {});
      };
      obj3[constants.INTEGRATION_COMMAND_PERMISSIONS] = obj25;
      const obj26 = { title: null, render: null };
      const intl22 = util.intl;
      obj26.title = intl22.string(util.t.tqtDXC);
      obj26.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[31]), { guildId });
      };
      obj3[constants.LOBBIES_LINKED] = obj26;
      const obj27 = { title: null, render: null };
      const intl23 = util.intl;
      obj27.title = intl23.string(util.t.OJknhi);
      obj27.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[32]), {});
      };
      obj3[constants.EDIT_LINKED_LOBBY] = obj27;
      const obj28 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_CHANNELS, title: null, postponeRender: true, render: null };
      const intl24 = util.intl;
      obj28.title = intl24.string(util.t.OGiMXJ);
      obj28.render = function render() {
        obj = { guildId, onDone: closure_1(stateFromStores[6]).stopReordering };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[33]), { guildId, onDone: closure_1(stateFromStores[6]).stopReordering });
      };
      obj3[constants.CHANNELS] = obj28;
      const obj29 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_SECURITY, title: null, render: null };
      const intl25 = util.intl;
      obj29.title = intl25.string(util.t.Am9YHi);
      obj29.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[34]), { guildId });
      };
      obj3[constants.SECURITY] = obj29;
      const obj30 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_ROLES, title: null, render: null };
      const intl26 = util.intl;
      obj30.title = intl26.string(util.t["LPJmL/"]);
      obj30.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[35]), { guildId });
      };
      obj3[constants.ROLES] = obj30;
      const obj31 = { title: null, render: null };
      const intl27 = util.intl;
      obj31.title = intl27.string(util.t["LPJmL/"]);
      obj31.render = function render(arg0) {
        obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[36]), { guildId });
      };
      obj3[constants.ROLE_EDIT_REFRESH] = obj31;
      const obj32 = { title: null, render: null };
      const intl28 = util.intl;
      obj32.title = intl28.string(util.t["5XZKy/"]);
      obj32.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[37]), { guildId });
      };
      obj3[constants.VANITY_URL] = obj32;
      const obj33 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_INVITES, title: null, postponeRender: true, render: null };
      const intl29 = util.intl;
      obj33.title = intl29.string(util.t.ngRFjZ);
      obj33.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[38]), { guildId });
      };
      obj3[constants.INSTANT_INVITES] = obj33;
      const obj34 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_TEMPLATE, title: null, postponeRender: true, render: null };
      const intl30 = util.intl;
      obj34.title = intl30.string(util.t.KUw7Ss);
      obj34.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[39]), { guildId });
      };
      obj3[constants.GUILD_TEMPLATES] = obj34;
      const obj35 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_MEMBERS, title: null, postponeRender: true, render: null };
      const intl31 = util.intl;
      obj35.title = intl31.string(util.t["9Oq93m"]);
      obj35.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[40]), { guildId });
      };
      obj3[constants.MEMBERS] = obj35;
      const obj36 = {
        render(arg0) {
            obj = { guildId };
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return jsx(bottom(stateFromStores[41]).GuildSettingsModalMemberEditScene, { guildId });
          }
      };
      obj3[constants.MEMBER_EDIT] = obj36;
      const obj37 = {
        headerTitle() {
            return null;
          },
        render(arg0) {
            obj = { guildId };
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return jsx(closure_1(stateFromStores[42]), { guildId });
          }
      };
      obj3[constants.MEMBER_KICK] = obj37;
      const obj38 = {
        headerTitle() {
            return null;
          },
        render(arg0) {
            obj = { guildId };
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(obj);
            return jsx(closure_1(stateFromStores[43]), { guildId });
          }
      };
      obj3[constants.MEMBER_BAN] = obj38;
      const obj39 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_BANS, title: null, postponeRender: true, render: null };
      const intl32 = util.intl;
      obj39.title = intl32.string(util.t.ZbeITS);
      obj39.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[44]), { guildId });
      };
      obj3[constants.BANS] = obj39;
      const obj40 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW, title: null, postponeRender: true, render: null };
      const intl33 = util.intl;
      obj40.title = intl33.string(util.t.nRtNqn);
      obj40.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(closure_1(stateFromStores[45]), {});
      };
      obj3[constants.COMMUNITY] = obj40;
      const obj41 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, title: null, render: null };
      const intl34 = util.intl;
      obj41.title = intl34.string(util.t.ElKTeb);
      obj41.render = function render(arg0) {
        obj = { guildId };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return jsx(closure_1(stateFromStores[46]), { guildId });
      };
      obj3[constants.COMMUNITY_INTRO] = obj41;
      const obj42 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_SETTINGS_ANALYTICS, title: null, postponeRender: true, render: null };
      const intl35 = util.intl;
      obj42.title = intl35.string(util.t["0wWfUG"]);
      obj42.render = function render() {
        obj = { guildId };
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[47]), { guildId });
      };
      obj3[constants.ANALYTICS] = obj42;
      const obj43 = { title: null, render: null };
      const intl36 = util.intl;
      obj43.title = intl36.string(util.t["KzCF/6"]);
      obj43.render = function render() {
        return jsx(closure_1(stateFromStores[48]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS] = obj43;
      const obj44 = { title: null, render: null };
      const intl37 = util.intl;
      obj44.title = intl37.string(util.t["KzCF/6"]);
      obj44.render = function render() {
        return jsx(closure_1(stateFromStores[49]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj44;
      const obj45 = { title: null, render: null };
      const intl38 = util.intl;
      obj45.title = intl38.string(util.t["/CfKoD"]);
      obj45.render = function render() {
        return jsx(closure_1(stateFromStores[50]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_BASIC] = obj45;
      const obj46 = { title: null, render: null };
      const intl39 = util.intl;
      obj46.title = intl39.string(util.t.pXbGYc);
      obj46.render = function render() {
        return jsx(closure_1(stateFromStores[51]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_TIERS] = obj46;
      const obj47 = { title: null, render: null };
      const intl40 = util.intl;
      obj47.title = intl40.string(util.t["KzCF/6"]);
      obj47.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(closure_1(stateFromStores[52]), {});
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj47;
      const obj48 = { title: null, render: null };
      const intl41 = util.intl;
      obj48.title = intl41.string(util.t.p2Rsdl);
      obj48.render = function render() {
        return jsx(closure_1(stateFromStores[53]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_PAYMENTS] = obj48;
      const obj49 = { title: null, render: null };
      const intl42 = util.intl;
      obj49.title = intl42.string(util.t.C5Dbwn);
      obj49.render = function render() {
        return jsx(closure_1(stateFromStores[54]), { guildId });
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_EMOJIS] = obj49;
      const obj50 = { title: null, render: null };
      const intl43 = util.intl;
      obj50.title = intl43.string(util.t["KzCF/6"]);
      obj50.render = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return jsx(closure_1(stateFromStores[55]), {});
      };
      obj3[constants.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj50;
      const obj51 = { title: null, render: null };
      const intl44 = util.intl;
      obj51.title = intl44.string(util.t.xHEzFh);
      obj51.render = function render() {
        return jsx(closure_1(stateFromStores[56]), { guildId });
      };
      obj3[constants.OFFICIAL_MESSAGES] = obj51;
      const obj52 = { title: null, render: null };
      const intl45 = util.intl;
      obj52.title = intl45.string(util.t.OBskVU);
      obj52.render = function render() {
        obj = {};
        const merged = Object.assign(obj);
        return jsx(closure_1(stateFromStores[57]), {});
      };
      obj3[constants.GUILD_SPACE] = obj52;
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
    tmp10Result = jsx(bottom(stateFromStores[61]).Navigator, { onWillFocus: tmp8, initialRouteName: null, initialRouteState: null, screens: null });
  }
  return tmp10Result;
};