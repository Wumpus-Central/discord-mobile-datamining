// === Module 18222: GuildSettingsModal ===

// Module 18222 (GuildSettingsModal)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 11393 */;
import KickConfirmDefault from "KickConfirm" /* 11407 */;
import BanConfirmDefault from "BanConfirm" /* 11435 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16558 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 16559 */;
import IntegrationsSettingsWebhooksOverviewDefault from "IntegrationsSettingsWebhooksOverview" /* 17547 */;
import IntegrationsSettingsEditWebhookDefault from "IntegrationsSettingsEditWebhook" /* 17556 */;
import IntegrationsSettingsEditLinkedLobbyDefault from "IntegrationsSettingsEditLinkedLobby" /* 17558 */;
import GuildSettingsModalLandingDefault from "GuildSettingsModalLanding" /* 18223 */;
import GuildSettingsModalOverviewDefault from "GuildSettingsModalOverview" /* 18235 */;
import GuildSettingsModalModerationDefault from "GuildSettingsModalModeration" /* 18240 */;
import GuildSettingsAutoModerationDefault from "GuildSettingsAutoModeration" /* 18241 */;
import GuildSettingsAutomodRuleDefault from "GuildSettingsAutomodRule" /* 18260 */;
import GuildSettingsModalAuditLogDefault from "GuildSettingsModalAuditLog" /* 18279 */;
import GuildSettingsModalAuditLogFilterDefault from "GuildSettingsModalAuditLogFilter" /* 18284 */;
import GuildSettingsModalIntegrationsDefault from "GuildSettingsModalIntegrations" /* 18299 */;
import GuildSettingsModalEmojiDefault from "GuildSettingsModalEmoji" /* 18300 */;
import GuildSettingsModalStickersDefault from "GuildSettingsModalStickers" /* 18312 */;
import GuildSettingsModalServerTagDefault from "GuildSettingsModalServerTag" /* 18324 */;
import GuildSettingsModalServerTagCustomizeDefault from "GuildSettingsModalServerTagCustomize" /* 18326 */;
import GuildSettingsModalIntegrationSettingsDefault from "GuildSettingsModalIntegrationSettings" /* 18334 */;
import GuildSettingsModalIntegrationPlatformDefault from "GuildSettingsModalIntegrationPlatform" /* 18338 */;
import GuildSettingsModalLobbiesLinkedDefault from "GuildSettingsModalLobbiesLinked" /* 18339 */;
import GuildSettingsModalSecurityDefault from "GuildSettingsModalSecurity" /* 18340 */;
import GuildSettingsRolesDefault from "GuildSettingsRoles" /* 18341 */;
import GuildSettingsRoleEditDefault from "GuildSettingsRoleEdit" /* 18361 */;
import GuildSettingsModalVanityURLDefault from "GuildSettingsModalVanityURL" /* 18382 */;
import GuildSettingsModalInstantInvitesDefault from "GuildSettingsModalInstantInvites" /* 18386 */;
import GuildSettingsModalTemplateDefault from "GuildSettingsModalTemplate" /* 18389 */;
import GuildSettingsModalMembersWrapperDefault from "GuildSettingsModalMembersWrapper" /* 18392 */;
import GuildSettingsModalBansDefault from "GuildSettingsModalBans" /* 18393 */;
import GuildSettingsModalCommunityDefault from "GuildSettingsModalCommunity" /* 18398 */;
import GuildSettingsModalCommunityIntroDefault from "GuildSettingsModalCommunityIntro" /* 18399 */;
import GuildSettingsModalAnalyticsDefault from "GuildSettingsModalAnalytics" /* 18421 */;
import GuildSettingsRoleSubscriptionsEmptyDefault from "GuildSettingsRoleSubscriptionsEmpty" /* 18444 */;
import GuildSettingsRoleSubscriptionsEnableMonetizationDefault from "GuildSettingsRoleSubscriptionsEnableMonetization" /* 18484 */;
import GuildSettingsRoleSubscriptionsGroupEditDefault from "GuildSettingsRoleSubscriptionsGroupEdit" /* 18485 */;
import GuildSettingsRoleSubscriptionTiersDefault from "GuildSettingsRoleSubscriptionTiers" /* 18499 */;
import GuildSettingsRoleSubscriptionTierEditDefault from "GuildSettingsRoleSubscriptionTierEdit" /* 18538 */;
import GuildSettingsRoleSubscriptionsPaymentsDefault from "GuildSettingsRoleSubscriptionsPayments" /* 18542 */;
import GuildSettingsRoleSubscriptionEmojisDefault from "GuildSettingsRoleSubscriptionEmojis" /* 18543 */;
import GuildSettingsRoleSubscriptionTierTemplateSelectionDefault from "GuildSettingsRoleSubscriptionTierTemplateSelection" /* 18546 */;
import GuildSettingsModalOfficialMessagesDefault from "GuildSettingsModalOfficialMessages" /* 18554 */;
import GuildSettingsModalGuildSpaceDefault from "GuildSettingsModalGuildSpace" /* 18555 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8638 */;

const require = globalThis.__r;

require = fn;
function close() {
  GuildSettingsModalChannelsActionCreatorsDefault.terminate();
  GuildSettingsActionCreatorsDefault.close();
}
function getScreens(guildId, arg1) {
  _require = guildId;
  let obj = { contentContainerStyle: { paddingBottom: 16 + arg1 } };
  const obj3 = {};
  const obj4 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_LANDING, title: null, headerLeft: null, render: null };
  const intl = require("util").intl;
  obj4.title = intl.string(require("util").t["154/bL"]);
  obj4.headerLeft = require("NavigatorHeader").getHeaderCloseButton(close);
  obj4.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalLandingDefault, { guildId });
  };
  obj3[constants.LANDING] = obj4;
  const obj6 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_OVERVIEW, title: null, render: null };
  const intl2 = require("util").intl;
  obj6.title = intl2.string(require("util").t["/dp6yY"]);
  obj6.render = function render() {
    obj = {};
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalOverviewDefault, {});
  };
  obj3[constants.OVERVIEW] = obj6;
  const obj7 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_MODERATION, title: null, render: null };
  const intl3 = require("util").intl;
  obj7.title = intl3.string(require("util").t["5tbTdV"]);
  obj7.render = function render() {
    obj = {};
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalModerationDefault, {});
  };
  obj3[constants.MODERATION] = obj7;
  const obj8 = { title: null, postponeRender: true, render: null };
  const intl4 = require("util").intl;
  obj8.title = intl4.string(require("util").t.uRelgx);
  obj8.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsAutoModerationDefault, { guildId });
  };
  obj3[constants.GUILD_AUTOMOD] = obj8;
  const obj9 = { title: null, render: null };
  const intl5 = require("util").intl;
  obj9.title = intl5.string(require("util").t.uRelgx);
  obj9.render = function render(arg0) {
    obj = { guildId };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsAutomodRuleDefault, { guildId });
  };
  obj3[constants.GUILD_AUTOMOD_RULE] = obj9;
  const obj10 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, title: null, postponeRender: true, render: null };
  const intl6 = require("util").intl;
  obj10.title = intl6.string(require("util").t.SPWLyT);
  obj10.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalAuditLogDefault, { guildId });
  };
  obj3[constants.AUDIT_LOG] = obj10;
  const obj11 = { title: null, render: null };
  const intl7 = require("util").intl;
  obj11.title = intl7.string(require("util").t.pEasFX);
  obj11.render = function render(arg0) {
    obj = { guildId };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsModalAuditLogFilterDefault, { guildId });
  };
  obj3[constants.AUDIT_LOG_FILTER] = obj11;
  const obj12 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INTEGRATION, title: null, render: null };
  const intl8 = require("util").intl;
  obj12.title = intl8.string(require("util").t.CIsNZw);
  obj12.render = function render() {
    obj = {};
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalIntegrationsDefault, {});
  };
  obj3[constants.INTEGRATIONS] = obj12;
  const obj13 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_EMOJI, title: null, postponeRender: true, render: null };
  const intl9 = require("util").intl;
  obj13.title = intl9.string(require("util").t.sMOuuS);
  obj13.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalEmojiDefault, { guildId });
  };
  obj3[constants.EMOJI] = obj13;
  const obj14 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_STICKERS, title: null, postponeRender: true, render: null };
  const intl10 = require("util").intl;
  obj14.title = intl10.string(require("util").t.R5nQkS);
  obj14.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalStickersDefault, { guildId });
  };
  obj3[constants.STICKERS] = obj14;
  const obj15 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_TAG, title: null, render: null };
  const intl11 = require("util").intl;
  obj15.title = intl11.string(require("util").t["2QmKZ2"]);
  obj15.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalServerTagDefault, { guildId });
  };
  obj3[constants.TAG] = obj15;
  const obj16 = { title: null, render: null };
  const intl12 = require("util").intl;
  obj16.title = intl12.string(require("util").t.r4R7mm);
  obj16.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalServerTagCustomizeDefault, { guildId });
  };
  obj3[constants.TAG_CUSTOMIZE] = obj16;
  const obj17 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_WEBHOOKS, title: null, render: null };
  const intl13 = require("util").intl;
  obj17.title = intl13.string(require("util").t.jp25Id);
  obj17.render = function render() {
    obj = { guildId, webhookType: constants2.INCOMING };
    const merged = Object.assign(obj);
    return jsx(IntegrationsSettingsWebhooksOverviewDefault, { guildId, webhookType: constants2.INCOMING });
  };
  obj3[constants.WEBHOOKS] = obj17;
  const obj18 = { title: null, render: null };
  const intl14 = require("util").intl;
  obj18.title = intl14.string(require("util").t["6SE3L3"]);
  obj18.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(IntegrationsSettingsEditWebhookDefault, {});
  };
  obj3[constants.EDIT_WEBHOOK] = obj18;
  const obj19 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_WEBHOOKS, title: null, render: null };
  const intl15 = require("util").intl;
  obj19.title = intl15.string(require("util").t.OrV60r);
  obj19.render = function render() {
    obj = { guildId, webhookType: constants2.CHANNEL_FOLLOWER };
    const merged = Object.assign(obj);
    return jsx(IntegrationsSettingsWebhooksOverviewDefault, { guildId, webhookType: constants2.CHANNEL_FOLLOWER });
  };
  obj3[constants.CHANNELS_FOLLOWED] = obj19;
  const obj20 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INTEGRATION, title: null, render: null };
  const intl16 = require("util").intl;
  obj20.title = intl16.string(require("util").t.sE5hSZ);
  obj20.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsModalIntegrationSettingsDefault, {});
  };
  obj3[constants.INTEGRATION_SETTINGS] = obj20;
  const obj21 = { title: null, render: null };
  const intl17 = require("util").intl;
  obj21.title = intl17.string(require("util").t.CIsNZw);
  obj21.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.closeGuildSettings = close;
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsModalIntegrationPlatformDefault, {});
  };
  obj3[constants.INTEGRATION_PLATFORM] = obj21;
  const obj22 = { title: null, render: null };
  const intl18 = require("util").intl;
  obj22.title = intl18.string(require("util").t.tqtDXC);
  obj22.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalLobbiesLinkedDefault, { guildId });
  };
  obj3[constants.LOBBIES_LINKED] = obj22;
  const obj23 = { title: null, render: null };
  const intl19 = require("util").intl;
  obj23.title = intl19.string(require("util").t.OJknhi);
  obj23.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(IntegrationsSettingsEditLinkedLobbyDefault, {});
  };
  obj3[constants.EDIT_LINKED_LOBBY] = obj23;
  const obj24 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_CHANNELS, title: null, postponeRender: true, render: null };
  const intl20 = require("util").intl;
  obj24.title = intl20.string(require("util").t.OGiMXJ);
  obj24.render = function render() {
    obj = { guildId, onDone: GuildSettingsModalChannelsActionCreatorsDefault.stopReordering };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalChannelsDefault, { guildId, onDone: GuildSettingsModalChannelsActionCreatorsDefault.stopReordering });
  };
  obj3[constants.CHANNELS] = obj24;
  const obj25 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_SECURITY, title: null, render: null };
  const intl21 = require("util").intl;
  obj25.title = intl21.string(require("util").t.Am9YHi);
  obj25.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalSecurityDefault, { guildId });
  };
  obj3[constants.SECURITY] = obj25;
  const obj26 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_ROLES, title: null, render: null };
  const intl22 = require("util").intl;
  obj26.title = intl22.string(require("util").t["LPJmL/"]);
  obj26.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsRolesDefault, { guildId });
  };
  obj3[constants.ROLES] = obj26;
  const obj27 = { title: null, render: null };
  const intl23 = require("util").intl;
  obj27.title = intl23.string(require("util").t["LPJmL/"]);
  obj27.render = function render(arg0) {
    obj = { guildId };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsRoleEditDefault, { guildId });
  };
  obj3[constants.ROLE_EDIT_REFRESH] = obj27;
  const obj28 = { title: null, render: null };
  const intl24 = require("util").intl;
  obj28.title = intl24.string(require("util").t["5XZKy/"]);
  obj28.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalVanityURLDefault, { guildId });
  };
  obj3[constants.VANITY_URL] = obj28;
  const obj29 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_INVITES, title: null, postponeRender: true, render: null };
  const intl25 = require("util").intl;
  obj29.title = intl25.string(require("util").t.ngRFjZ);
  obj29.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalInstantInvitesDefault, { guildId });
  };
  obj3[constants.INSTANT_INVITES] = obj29;
  const obj30 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_TEMPLATE, title: null, postponeRender: true, render: null };
  const intl26 = require("util").intl;
  obj30.title = intl26.string(require("util").t.KUw7Ss);
  obj30.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalTemplateDefault, { guildId });
  };
  obj3[constants.GUILD_TEMPLATES] = obj30;
  const obj31 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_MEMBERS, title: null, postponeRender: true, render: null };
  const intl27 = require("util").intl;
  obj31.title = intl27.string(require("util").t["9Oq93m"]);
  obj31.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalMembersWrapperDefault, { guildId });
  };
  obj3[constants.MEMBERS] = obj31;
  obj3[constants.MEMBER_EDIT] = {
    render(arg0) {
      obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, { guildId });
    }
  };
  obj3[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(KickConfirmDefault, { guildId });
    }
  };
  obj3[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(BanConfirmDefault, { guildId });
    }
  };
  const obj32 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_BANS, title: null, postponeRender: true, render: null };
  const intl28 = require("util").intl;
  obj32.title = intl28.string(require("util").t.ZbeITS);
  obj32.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalBansDefault, { guildId });
  };
  obj3[constants.BANS] = obj32;
  const obj33 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW, title: null, postponeRender: true, render: null };
  const intl29 = require("util").intl;
  obj33.title = intl29.string(require("util").t.nRtNqn);
  obj33.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.guildId = guildId;
    return jsx(GuildSettingsModalCommunityDefault, {});
  };
  obj3[constants.COMMUNITY] = obj33;
  const obj34 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, title: null, render: null };
  const intl30 = require("util").intl;
  obj34.title = intl30.string(require("util").t.ElKTeb);
  obj34.render = function render(arg0) {
    obj = { guildId };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return jsx(GuildSettingsModalCommunityIntroDefault, { guildId });
  };
  obj3[constants.COMMUNITY_INTRO] = obj34;
  const obj35 = { impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_SETTINGS_ANALYTICS, title: null, postponeRender: true, render: null };
  const intl31 = require("util").intl;
  obj35.title = intl31.string(require("util").t["0wWfUG"]);
  obj35.render = function render() {
    obj = { guildId };
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalAnalyticsDefault, { guildId });
  };
  obj3[constants.ANALYTICS] = obj35;
  const obj36 = { title: null, render: null };
  const intl32 = require("util").intl;
  obj36.title = intl32.string(require("util").t["KzCF/6"]);
  obj36.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionsEmptyDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS] = obj36;
  const obj37 = { title: null, render: null };
  const intl33 = require("util").intl;
  obj37.title = intl33.string(require("util").t["KzCF/6"]);
  obj37.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionsEnableMonetizationDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj37;
  const obj38 = { title: null, render: null };
  const intl34 = require("util").intl;
  obj38.title = intl34.string(require("util").t["/CfKoD"]);
  obj38.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionsGroupEditDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_BASIC] = obj38;
  const obj39 = { title: null, render: null };
  const intl35 = require("util").intl;
  obj39.title = intl35.string(require("util").t.pXbGYc);
  obj39.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionTiersDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_TIERS] = obj39;
  const obj40 = { title: null, render: null };
  const intl36 = require("util").intl;
  obj40.title = intl36.string(require("util").t["KzCF/6"]);
  obj40.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.guildId = guildId;
    return jsx(GuildSettingsRoleSubscriptionTierEditDefault, {});
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj40;
  const obj41 = { title: null, render: null };
  const intl37 = require("util").intl;
  obj41.title = intl37.string(require("util").t.p2Rsdl);
  obj41.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionsPaymentsDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_PAYMENTS] = obj41;
  const obj42 = { title: null, render: null };
  const intl38 = require("util").intl;
  obj42.title = intl38.string(require("util").t.C5Dbwn);
  obj42.render = function render() {
    return jsx(GuildSettingsRoleSubscriptionEmojisDefault, { guildId });
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_EMOJIS] = obj42;
  const obj43 = { title: null, render: null };
  const intl39 = require("util").intl;
  obj43.title = intl39.string(require("util").t["KzCF/6"]);
  obj43.render = function render(arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.guildId = guildId;
    return jsx(GuildSettingsRoleSubscriptionTierTemplateSelectionDefault, {});
  };
  obj3[constants.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj43;
  const obj44 = { title: null, render: null };
  const intl40 = require("util").intl;
  obj44.title = intl40.string(require("util").t.xHEzFh);
  obj44.render = function render() {
    return jsx(GuildSettingsModalOfficialMessagesDefault, { guildId });
  };
  obj3[constants.OFFICIAL_MESSAGES] = obj44;
  const obj45 = { title: null, render: null };
  const intl41 = require("util").intl;
  obj45.title = intl41.string(require("util").t.OBskVU);
  obj45.render = function render() {
    obj = {};
    const merged = Object.assign(obj);
    return jsx(GuildSettingsModalGuildSpaceDefault, {});
  };
  obj3[constants.GUILD_SPACE] = obj45;
  return obj3;
}
const Constants = fn(1085);
({ GuildSettingsSections: closure_7, WebhookTypes: closure_8 } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModal() {
  const cResult = require("c").c(20);
  let obj = require("c");
  const tmp4 = stateFromStores;
  ({ bottom, left, right } = stateFromStores(1631)());
  if (cResult[0] === left) {
    if (cResult[1] === right) {
      let tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function p() {
        return GuildSettingsStore.getGuildId();
      };
      cResult[3] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[3];
    }
    const tmp9 = tmp4(6169)(tmp8);
    _require = tmp9;
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildStore];
      cResult[4] = items;
      let tmp10 = items;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp9) {
      class L {
        constructor() {
          return closure_5.getGuild(closure_0);
        }
      }
      cResult[5] = tmp9;
      cResult[6] = L;
    } else {
      class L {
        constructor() {
          return closure_5.getGuild(closure_0);
        }
      }
    }
    stateFromStores = tmp(504).useStateFromStores(tmp10, L);
    if (cResult[7] === tmp9) {
      class L {
        constructor() {
          return closure_5.getGuild(closure_0);
        }
      }
      if (cResult[10] === stateFromStores) {
        class L {
          constructor() {
            return closure_5.getGuild(closure_0);
          }
        }
        class M {
          constructor() {
            tmp = null != closure_0;
            if (tmp) {
              tmp2 = closure_1;
              tmp = null != closure_1;
            }
            if (!tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[7]);
              closeResult = obj.close();
            }
            return;
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return closure_1_6.getSavedRouteState();
            }
          }
          class M {
            constructor() {
              tmp = null != closure_0;
              if (tmp) {
                tmp2 = closure_1;
                tmp = null != closure_1;
              }
              if (!tmp) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[7]);
                closeResult = obj.close();
              }
              return;
            }
          }
        } else {
          class A {
            constructor() {
              return closure_1_6.getSavedRouteState();
            }
          }
        }
        const first = _slicedToArray(noop.useState(A), 1)[0];
        const _Symbol4 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return closure_1_6.getSavedRouteState();
            }
          }
          class M {
            constructor() {
              tmp = null != closure_0;
              if (tmp) {
                tmp2 = closure_1;
                tmp = null != closure_1;
              }
              if (!tmp) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[7]);
                closeResult = obj.close();
              }
              return;
            }
          }
        } else {
          class A {
            constructor() {
              return closure_1_6.getSavedRouteState();
            }
          }
        }
        if (cResult[16] === first) {
          class A {
            constructor() {
              return closure_1_6.getSavedRouteState();
            }
          }
        }
        let tmp27Result = null;
        if (null != tmp14) {
          class A {
            constructor() {
              return closure_1_6.getSavedRouteState();
            }
          }
          const obj2 = { onWillFocus: null, initialRouteName: null, initialRouteState: null, screens: null, viewStyle: null };
          class M {
            constructor() {
              tmp = null != closure_0;
              if (tmp) {
                tmp2 = closure_1;
                tmp = null != closure_1;
              }
              if (!tmp) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[7]);
                closeResult = obj.close();
              }
              return;
            }
          }
          let LANDING;
          if (null == first) {
            class A {
              constructor() {
                return closure_1_6.getSavedRouteState();
              }
            }
            LANDING = constants.LANDING;
          }
          obj2.initialRouteName = LANDING;
          if (null != first) {
            class A {
              constructor() {
                return closure_1_6.getSavedRouteState();
              }
            }
          }
          obj2.initialRouteState = undefined;
          obj2.screens = tmp14;
          obj2.viewStyle = tmp6;
          tmp27Result = tmp27(tmp(6687).Navigator, obj2);
        }
        cResult[16] = first;
        cResult[17] = tmp6;
        cResult[18] = tmp14;
        cResult[19] = tmp27Result;
      }
      class M {
        constructor() {
          tmp = null != closure_0;
          if (tmp) {
            tmp2 = closure_1;
            tmp = null != closure_1;
          }
          if (!tmp) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[7]);
            closeResult = obj.close();
          }
          return;
        }
      }
      const items1 = [stateFromStores, tmp9];
      cResult[10] = stateFromStores;
      cResult[11] = tmp9;
      cResult[12] = M;
      cResult[13] = items1;
    }
    if (null != tmp9) {
      class A {
        constructor() {
          return closure_1_6.getSavedRouteState();
        }
      }
      class M {
        constructor() {
          tmp = null != closure_0;
          if (tmp) {
            tmp2 = closure_1;
            tmp = null != closure_1;
          }
          if (!tmp) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[7]);
            closeResult = obj.close();
          }
          return;
        }
      }
    }
    cResult[7] = tmp9;
    cResult[8] = bottom;
    cResult[9] = undefined;
    const tmpResult = tmp(504);
  }
  const rect = { left, right };
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = rect;
  tmp6 = rect;
  const tmp5 = stateFromStores(1631)();
}) : (function GuildSettingsModal() {
  let rect = left(right[56])();
  const bottom = rect.bottom;
  left = rect.left;
  right = rect.right;
  const items = [left, right];
  const memo = stateFromStores.useMemo(() => {
    const rect = { left, right };
    return rect;
  }, items);
  const tmp3 = left(right[57])(() => GuildSettingsStore.getGuildId());
  _slicedToArray = tmp3;
  const items1 = [GuildStore];
  stateFromStores = bottom(right[58]).useStateFromStores(items1, () => GuildStore.getGuild(closure_3));
  const items2 = [bottom, tmp3];
  const memo1 = stateFromStores.useMemo(() => {
    let tmp2;
    if (null != closure_3) {
      tmp2 = getScreens(tmp, bottom);
    }
    return tmp2;
  }, items2);
  const items3 = [stateFromStores, tmp3];
  const effect = stateFromStores.useEffect(() => {
    let tmp = null != closure_3;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (!tmp) {
      GuildSettingsActionCreatorsDefault.close();
    }
  }, items3);
  const first = _slicedToArray(stateFromStores.useState(() => GuildSettingsStore.getSavedRouteState()), 1)[0];
  let tmp11Result = null;
  if (null != memo1) {
    const obj2 = { onWillFocus: tmp9, initialRouteName: null, initialRouteState: null, screens: null, viewStyle: null };
    let LANDING;
    if (null == first) {
      LANDING = constants.LANDING;
    }
    obj2.initialRouteName = LANDING;
    let tmp14;
    if (null != first) {
      tmp14 = first;
    }
    obj2.initialRouteState = tmp14;
    obj2.screens = memo1;
    obj2.viewStyle = memo;
    tmp11Result = jsx(bottom(right[59]).Navigator, { onWillFocus: tmp9, initialRouteName: null, initialRouteState: null, screens: null, viewStyle: null });
  }
  return tmp11Result;
});