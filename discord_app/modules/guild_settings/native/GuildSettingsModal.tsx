// discord_app/modules/guild_settings/native/GuildSettingsModal.tsx
import _modDef9649 from "../GuildSettingsActionCreators.tsx";
import dispatcherDefault from "../GuildSettingsModalChannelsActionCreators.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/GuildStore.tsx";
import closure_6 from "../GuildSettingsStore.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function close() {
  dispatcherDefault.terminate();
  const obj = dispatcherDefault;
  _modDef9649.close();
}
({ GuildSettingsSections: error, WebhookTypes: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModal.tsx");

export default function GuildSettingsModal() {
  let bottom = importDefault(stateFromStores[49])().bottom;
  let tmp2 = importDefault(stateFromStores[50])(() => store.getGuildId());
  importDefault = tmp2;
  let obj = bottom(stateFromStores[51]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getGuild(closure_1));
  const items1 = [bottom, tmp2];
  const memo = React.useMemo(() => {
    let tmp2;
    if (null != obj) {
      bottom = tmp;
      obj = { contentContainerStyle: null };
      obj = { paddingBottom: null };
      obj[0] = 16 + bottom;
      obj[0] = obj;
      obj = {};
      obj1 = { impressionName: null, title: null, headerLeft: null, render: null };
      obj1[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_LANDING;
      const intl = bottom(stateFromStores[9]).intl;
      obj1[1] = intl.string(bottom(stateFromStores[9]).t["154/bL"]);
      let obj4 = bottom(stateFromStores[10]);
      obj1[2] = obj4.getHeaderCloseButton(closure_1_10);
      obj1[3] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[11]), obj);
      };
      obj[closure_1_7.LANDING] = obj1;
      const obj2 = { impressionName: null, title: null, render: null };
      obj2[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_OVERVIEW;
      const intl2 = bottom(stateFromStores[9]).intl;
      obj2[1] = intl2.string(bottom(stateFromStores[9]).t["/dp6yY"]);
      obj2[2] = function render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[12]), obj);
      };
      obj[closure_1_7.OVERVIEW] = obj2;
      const obj3 = { impressionName: null, title: null, render: null };
      obj3[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_MODERATION;
      const intl3 = bottom(stateFromStores[9]).intl;
      obj3[1] = intl3.string(bottom(stateFromStores[9]).t["5tbTdV"]);
      obj3[2] = function render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[13]), obj);
      };
      obj[closure_1_7.MODERATION] = obj3;
      obj4 = { impressionName: null, title: null, postponeRender: true, render: null };
      obj4[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_AUDIT_LOG;
      const intl4 = bottom(stateFromStores[9]).intl;
      obj4[1] = intl4.string(bottom(stateFromStores[9]).t.SPWLyT);
      obj4[3] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[14]), obj);
      };
      obj[closure_1_7.AUDIT_LOG] = obj4;
      const obj5 = { title: null, render: null };
      const intl5 = bottom(stateFromStores[9]).intl;
      obj5[0] = intl5.string(bottom(stateFromStores[9]).t.pEasFX);
      obj5[1] = function render(arg0) {
        obj = { guildId: closure_0 };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[15]), obj);
      };
      obj[closure_1_7.AUDIT_LOG_FILTER] = obj5;
      const obj6 = { impressionName: null, title: null, render: null };
      obj6[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_INTEGRATION;
      const intl6 = bottom(stateFromStores[9]).intl;
      obj6[1] = intl6.string(bottom(stateFromStores[9]).t.CIsNZw);
      obj6[2] = function render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[16]), obj);
      };
      obj[closure_1_7.INTEGRATIONS] = obj6;
      const obj7 = { impressionName: null, title: null, postponeRender: true, render: null };
      obj7[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_EMOJI;
      const intl7 = bottom(stateFromStores[9]).intl;
      obj7[1] = intl7.string(bottom(stateFromStores[9]).t.sMOuuS);
      obj7[3] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[17]), obj);
      };
      obj[closure_1_7.EMOJI] = obj7;
      const obj8 = { impressionName: null, title: null, postponeRender: true, render: null };
      obj8[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_STICKERS;
      const intl8 = bottom(stateFromStores[9]).intl;
      obj8[1] = intl8.string(bottom(stateFromStores[9]).t.R5nQkS);
      obj8[3] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[18]), obj);
      };
      obj[closure_1_7.STICKERS] = obj8;
      const obj9 = { impressionName: null, title: null, render: null };
      obj9[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_TAG;
      const intl9 = bottom(stateFromStores[9]).intl;
      obj9[1] = intl9.string(bottom(stateFromStores[9]).t["2QmKZ2"]);
      obj9[2] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[19]), obj);
      };
      obj[closure_1_7.TAG] = obj9;
      const obj10 = { title: null, render: null };
      const intl10 = bottom(stateFromStores[9]).intl;
      obj10[0] = intl10.string(bottom(stateFromStores[9]).t.r4R7mm);
      obj10[1] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[20]), obj);
      };
      obj[closure_1_7.TAG_CUSTOMIZE] = obj10;
      const obj11 = { impressionName: null, title: null, render: null };
      obj11[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_WEBHOOKS;
      const intl11 = bottom(stateFromStores[9]).intl;
      obj11[1] = intl11.string(bottom(stateFromStores[9]).t.jp25Id);
      obj11[2] = function render() {
        obj = { guildId: closure_0, webhookType: closure_1_8.INCOMING };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[21]), obj);
      };
      obj[closure_1_7.WEBHOOKS] = obj11;
      const obj12 = { title: null, render: null };
      const intl12 = bottom(stateFromStores[9]).intl;
      obj12[0] = intl12.string(bottom(stateFromStores[9]).t["6SE3L3"]);
      obj12[1] = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[22]), obj);
      };
      obj[closure_1_7.EDIT_WEBHOOK] = obj12;
      const obj13 = { impressionName: null, title: null, render: null };
      obj13[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_WEBHOOKS;
      const intl13 = bottom(stateFromStores[9]).intl;
      obj13[1] = intl13.string(bottom(stateFromStores[9]).t.OrV60r);
      obj13[2] = function render() {
        obj = { guildId: closure_0, webhookType: closure_1_8.CHANNEL_FOLLOWER };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[21]), obj);
      };
      obj[closure_1_7.CHANNELS_FOLLOWED] = obj13;
      const obj14 = { impressionName: null, title: null, render: null };
      obj14[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_INTEGRATION;
      const intl14 = bottom(stateFromStores[9]).intl;
      obj14[1] = intl14.string(bottom(stateFromStores[9]).t.sE5hSZ);
      obj14[2] = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[23]), obj);
      };
      obj[closure_1_7.INTEGRATION_SETTINGS] = obj14;
      const obj15 = { title: null, render: null };
      const intl15 = bottom(stateFromStores[9]).intl;
      obj15[0] = intl15.string(bottom(stateFromStores[9]).t.CIsNZw);
      obj15[1] = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.closeGuildSettings = closure_1_10;
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[24]), obj);
      };
      obj[closure_1_7.INTEGRATION_PLATFORM] = obj15;
      const obj16 = { title: null, render: null };
      const intl16 = bottom(stateFromStores[9]).intl;
      obj16[0] = intl16.string(bottom(stateFromStores[9]).t.tqtDXC);
      obj16[1] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[25]), obj);
      };
      obj[closure_1_7.LOBBIES_LINKED] = obj16;
      const obj17 = { title: null, render: null };
      const intl17 = bottom(stateFromStores[9]).intl;
      obj17[0] = intl17.string(bottom(stateFromStores[9]).t.OJknhi);
      obj17[1] = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[26]), obj);
      };
      obj[closure_1_7.EDIT_LINKED_LOBBY] = obj17;
      const obj18 = { impressionName: null, title: null, postponeRender: true, render: null };
      obj18[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_CHANNELS;
      const intl18 = bottom(stateFromStores[9]).intl;
      obj18[1] = intl18.string(bottom(stateFromStores[9]).t.OGiMXJ);
      obj18[3] = function render() {
        obj = { guildId: closure_0, onDone: obj(closure_1_2[6]).stopReordering };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[27]), obj);
      };
      obj[closure_1_7.CHANNELS] = obj18;
      const obj19 = { impressionName: null, title: null, render: null };
      obj19[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_SECURITY;
      const intl19 = bottom(stateFromStores[9]).intl;
      obj19[1] = intl19.string(bottom(stateFromStores[9]).t.Am9YHi);
      obj19[2] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[28]), obj);
      };
      obj[closure_1_7.SECURITY] = obj19;
      const obj20 = { impressionName: null, title: null, render: null };
      obj20[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_ROLES;
      const intl20 = bottom(stateFromStores[9]).intl;
      obj20[1] = intl20.string(bottom(stateFromStores[9]).t["LPJmL/"]);
      obj20[2] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[29]), obj);
      };
      obj[closure_1_7.ROLES] = obj20;
      const obj21 = { title: null, render: null };
      const intl21 = bottom(stateFromStores[9]).intl;
      obj21[0] = intl21.string(bottom(stateFromStores[9]).t["LPJmL/"]);
      obj21[1] = function render(arg0) {
        obj = { guildId: closure_0 };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[30]), obj);
      };
      obj[closure_1_7.ROLE_EDIT_REFRESH] = obj21;
      const obj22 = { title: null, render: null };
      const intl22 = bottom(stateFromStores[9]).intl;
      obj22[0] = intl22.string(bottom(stateFromStores[9]).t["5XZKy/"]);
      obj22[1] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[31]), obj);
      };
      obj[closure_1_7.VANITY_URL] = obj22;
      const obj23 = { impressionName: null, title: null, postponeRender: true, render: null };
      obj23[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_INVITES;
      const intl23 = bottom(stateFromStores[9]).intl;
      obj23[1] = intl23.string(bottom(stateFromStores[9]).t.ngRFjZ);
      obj23[3] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[32]), obj);
      };
      obj[closure_1_7.INSTANT_INVITES] = obj23;
      const obj24 = { impressionName: null, title: null, postponeRender: true, render: null };
      obj24[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_MEMBERS;
      const intl24 = bottom(stateFromStores[9]).intl;
      obj24[1] = intl24.string(bottom(stateFromStores[9]).t["9Oq93m"]);
      obj24[3] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[33]), obj);
      };
      obj[closure_1_7.MEMBERS] = obj24;
      const obj25 = { render: null };
      obj25[0] = function render(arg0) {
        obj = { guildId: tmp };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(tmp(closure_1_2[34]).GuildSettingsModalMemberEditScene, obj);
      };
      obj[closure_1_7.MEMBER_EDIT] = obj25;
      const obj26 = { headerTitle: null, render: null };
      obj26[0] = function headerTitle() {
        return null;
      };
      obj26[1] = function render(arg0) {
        obj = { guildId: closure_0 };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[35]), obj);
      };
      obj[closure_1_7.MEMBER_KICK] = obj26;
      const obj27 = { headerTitle: null, render: null };
      obj27[0] = function headerTitle() {
        return null;
      };
      obj27[1] = function render(arg0) {
        obj = { guildId: closure_0 };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[36]), obj);
      };
      obj[closure_1_7.MEMBER_BAN] = obj27;
      const obj28 = { impressionName: null, title: null, postponeRender: true, render: null };
      obj28[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_BANS;
      const intl25 = bottom(stateFromStores[9]).intl;
      obj28[1] = intl25.string(bottom(stateFromStores[9]).t.ZbeITS);
      obj28[3] = function render() {
        obj = { guildId: closure_0 };
        const merged = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[37]), obj);
      };
      obj[closure_1_7.BANS] = obj28;
      const obj29 = { impressionName: null, title: null, postponeRender: true, render: null };
      obj29[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW;
      const intl26 = bottom(stateFromStores[9]).intl;
      obj29[1] = intl26.string(bottom(stateFromStores[9]).t.nRtNqn);
      obj29[3] = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = closure_0;
        return closure_1_9(obj(closure_1_2[38]), obj);
      };
      obj[closure_1_7.COMMUNITY] = obj29;
      const obj30 = { impressionName: null, title: null, render: null };
      obj30[0] = bottom(stateFromStores[8]).ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME;
      const intl27 = bottom(stateFromStores[9]).intl;
      obj30[1] = intl27.string(bottom(stateFromStores[9]).t.ElKTeb);
      obj30[2] = function render(arg0) {
        obj = { guildId: closure_0 };
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(obj);
        return closure_1_9(obj(closure_1_2[39]), obj);
      };
      obj[closure_1_7.COMMUNITY_INTRO] = obj30;
      const obj31 = { title: null, render: null };
      const intl28 = bottom(stateFromStores[9]).intl;
      obj31[0] = intl28.string(bottom(stateFromStores[9]).t["KzCF/6"]);
      obj31[1] = function render() {
        obj = { guildId: closure_0 };
        return closure_1_9(obj(closure_1_2[40]), obj);
      };
      obj[closure_1_7.ROLE_SUBSCRIPTIONS] = obj31;
      const obj32 = { title: null, render: null };
      const intl29 = bottom(stateFromStores[9]).intl;
      obj32[0] = intl29.string(bottom(stateFromStores[9]).t["KzCF/6"]);
      obj32[1] = function render() {
        obj = { guildId: closure_0 };
        return closure_1_9(obj(closure_1_2[41]), obj);
      };
      obj[closure_1_7.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION] = obj32;
      const obj33 = { title: null, render: null };
      const intl30 = bottom(stateFromStores[9]).intl;
      obj33[0] = intl30.string(bottom(stateFromStores[9]).t["/CfKoD"]);
      obj33[1] = function render() {
        obj = { guildId: closure_0 };
        return closure_1_9(obj(closure_1_2[42]), obj);
      };
      obj[closure_1_7.ROLE_SUBSCRIPTIONS_BASIC] = obj33;
      const obj34 = { title: null, render: null };
      const intl31 = bottom(stateFromStores[9]).intl;
      obj34[0] = intl31.string(bottom(stateFromStores[9]).t.pXbGYc);
      obj34[1] = function render() {
        obj = { guildId: closure_0 };
        return closure_1_9(obj(closure_1_2[43]), obj);
      };
      obj[closure_1_7.ROLE_SUBSCRIPTIONS_TIERS] = obj34;
      const obj35 = { title: null, render: null };
      const intl32 = bottom(stateFromStores[9]).intl;
      obj35[0] = intl32.string(bottom(stateFromStores[9]).t["KzCF/6"]);
      obj35[1] = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = closure_0;
        return closure_1_9(obj(closure_1_2[44]), obj);
      };
      obj[closure_1_7.ROLE_SUBSCRIPTIONS_TIER_EDIT] = obj35;
      const obj36 = { title: null, render: null };
      const intl33 = bottom(stateFromStores[9]).intl;
      obj36[0] = intl33.string(bottom(stateFromStores[9]).t.p2Rsdl);
      obj36[1] = function render() {
        obj = { guildId: closure_0 };
        return closure_1_9(obj(closure_1_2[45]), obj);
      };
      obj[closure_1_7.ROLE_SUBSCRIPTIONS_PAYMENTS] = obj36;
      const obj37 = { title: null, render: null };
      const intl34 = bottom(stateFromStores[9]).intl;
      obj37[0] = intl34.string(bottom(stateFromStores[9]).t.C5Dbwn);
      obj37[1] = function render() {
        obj = { guildId: closure_0 };
        return closure_1_9(obj(closure_1_2[46]), obj);
      };
      obj[closure_1_7.ROLE_SUBSCRIPTIONS_EMOJIS] = obj37;
      const obj38 = { title: null, render: null };
      const intl35 = bottom(stateFromStores[9]).intl;
      obj38[0] = intl35.string(bottom(stateFromStores[9]).t["KzCF/6"]);
      obj38[1] = function render(arg0) {
        obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = closure_0;
        return closure_1_9(obj(closure_1_2[47]), obj);
      };
      obj[closure_1_7.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION] = obj38;
      const obj39 = { title: null, render: null };
      const intl36 = bottom(stateFromStores[9]).intl;
      obj39[0] = intl36.string(bottom(stateFromStores[9]).t.xHEzFh);
      obj39[1] = function render() {
        obj = { guildId: closure_0 };
        return closure_1_9(obj(closure_1_2[48]), obj);
      };
      obj[closure_1_7.OFFICIAL_MESSAGES] = obj39;
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores, tmp2];
  const effect = React.useEffect(() => {
    let tmp = null != callback;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (!tmp) {
      callback(stateFromStores[7]).close();
      const obj = callback(stateFromStores[7]);
    }
  }, items2);
  const first = callback(React.useState(() => store.getSavedRouteState()), 1)[0];
  let tmp10Result = null;
  if (null != memo) {
    obj = { onWillFocus: null, initialRouteName: null, initialRouteState: null, screens: null };
    obj[0] = tmp8;
    let LANDING;
    if (null == first) {
      LANDING = constants.LANDING;
    }
    obj[1] = LANDING;
    let tmp13;
    if (null != first) {
      tmp13 = first;
    }
    obj[2] = tmp13;
    obj[3] = memo;
    tmp10Result = jsx(bottom(stateFromStores[52]).Navigator, { onWillFocus: null, initialRouteName: null, initialRouteState: null, screens: null });
    const tmp10 = jsx;
  }
  return tmp10Result;
};