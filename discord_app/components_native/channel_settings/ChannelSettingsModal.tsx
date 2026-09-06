// discord_app/components_native/channel_settings/ChannelSettingsModal.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications.tsx";
import messages_PinsScreenDefault from "../../modules/search/native/components/tabs/pages/messages/PinsScreen.tsx";
import ChannelSettingsOverviewDefault from "ChannelSettingsOverview.tsx";
import MessagePreviewDefault from "../common/MessagePreview.tsx";
import EasyChannelPermissionSettingsDefault from "../../modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx";
import ChannelSettingsPermissionsListDefault from "ChannelSettingsPermissionsList.tsx";
import ChannelSettingsPermissionsOverridesDefault from "ChannelSettingsPermissionsOverrides.tsx";
import ChannelSettingsIntegrationsOverviewDefault from "ChannelSettingsIntegrationsOverview.tsx";
import IntegrationsSettingsWebhooksOverviewDefault from "../../modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx";
import ChannelSettingsChangeCategoryDefault from "ChannelSettingsChangeCategory.tsx";
import ChannelSettingsChangeRTCRegionDefault from "ChannelSettingsChangeRTCRegion.tsx";
import ChannelSettingsEditForumTagDefault from "../../modules/forums/native/ChannelSettingsEditForumTag.tsx";
import ChannelSettingsChangeDefaultForumLayoutDefault from "ChannelSettingsChangeDefaultForumLayout.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelSettingsSections: closure_4, SearchTypes: hasOwnProperty, WebhookTypes: metroRequire } = Constants);
const SearchTabs = fn(7878).SearchTabs;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, pinsScreen: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
createStyles.pinsScreen = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsModal.tsx");

export const useChannelSettingsScreensStyles = createStyles;
export const getChannelSettingsScreens = function getChannelSettingsScreens(
  channelId,
  guildId,
  channelSettingsScreensStyles,
) {
  _require = channelId;
  dependencyMap = channelSettingsScreensStyles;
  obj = { [closure_4.OVERVIEW]: obj };
  obj = {
    render(autoFocusElement) {
      const obj = { channelId, autoFocusElement: null };
      autoFocusElement = undefined;
      if (autoFocusElement != null) {
        autoFocusElement = autoFocusElement.autoFocusElement;
      }
      obj.autoFocusElement = autoFocusElement;
      return jsx(ChannelSettingsOverviewDefault, { channelId, autoFocusElement: null });
    },
  };
  obj = { title: null, render: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.h850Ss);
  obj.render = function render() {
    return jsx(ChannelSettingsNotificationsDefault, { channelId });
  };
  obj[constants.NOTIFICATIONS] = obj;
  const obj1 = { title: null, render: null };
  const intl2 = require("util").intl;
  obj1.title = intl2.string(require("util").t["mp1N/2"]);
  obj1.render = function render() {
    let obj = { type: constants2.GUILD_CHANNEL, guildId, channelId };
    obj = { style: pinsScreen.pinsScreen, children: null };
    obj = { searchContext: obj, tab: SearchTabs.PINS, isFocused: true };
    obj.children = jsx(messages_PinsScreenDefault, { searchContext: obj, tab: SearchTabs.PINS, isFocused: true });
    return <View searchContext={obj} tab={SearchTabs.PINS} isFocused />;
  };
  obj[constants.PINNED_MESSAGES] = obj1;
  obj[constants.PINNED_CHAT] = {
    postponeRender: true,
    render() {
      return jsx(MessagePreviewDefault, { channelId });
    },
  };
  const obj2 = { title: null, postponeRender: true, render: null };
  const intl3 = require("util").intl;
  obj2.title = intl3.string(require("util").t.ngRFjZ);
  obj2.render = function render() {
    return jsx(guildId(pinsScreen[12]), {});
  };
  obj[constants.INSTANT_INVITES] = obj2;
  const obj3 = { title: null, render: null };
  const intl4 = require("util").intl;
  obj3.title = intl4.string(require("util").t.xrmhRX);
  obj3.render = function render(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.channelId = channelId;
    return jsx(EasyChannelPermissionSettingsDefault, {});
  };
  obj[constants.PERMISSIONS] = obj3;
  const obj4 = { title: null, postponeRender: true, render: null };
  const intl5 = require("util").intl;
  obj4.title = intl5.string(require("util").t.vPHdP5);
  obj4.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(ChannelSettingsPermissionsListDefault, { channelId });
  };
  obj[constants.NEW_PERMISSION] = obj4;
  const obj5 = { title: null, render: null };
  const intl6 = require("util").intl;
  obj5.title = intl6.string(require("util").t.D4p9TR);
  obj5.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(ChannelSettingsPermissionsOverridesDefault, { channelId });
  };
  obj[constants.PERMISSION_OVERRIDES] = obj5;
  const obj6 = { title: null, render: null };
  const intl7 = require("util").intl;
  obj6.title = intl7.string(require("util").t.CIsNZw);
  obj6.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(ChannelSettingsIntegrationsOverviewDefault, { channelId });
  };
  obj[constants.INTEGRATIONS] = obj6;
  const obj7 = { title: null, render: null };
  const intl8 = require("util").intl;
  obj7.title = intl8.string(require("util").t.jp25Id);
  obj7.render = function render() {
    return jsx(IntegrationsSettingsWebhooksOverviewDefault, { channelId, webhookType: constants3.INCOMING });
  };
  obj[constants.WEBHOOKS] = obj7;
  const obj8 = { title: null, render: null };
  const intl9 = require("util").intl;
  obj8.title = intl9.string(require("util").t["6SE3L3"]);
  obj8.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(guildId(pinsScreen[18]), {});
  };
  obj[constants.EDIT_WEBHOOK] = obj8;
  const obj9 = { title: null, render: null };
  const intl10 = require("util").intl;
  obj9.title = intl10.string(require("util").t.OJknhi);
  obj9.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(guildId(pinsScreen[19]), {});
  };
  obj[constants.EDIT_LINKED_LOBBY] = obj9;
  const obj10 = { title: null, render: null };
  const intl11 = require("util").intl;
  obj10.title = intl11.string(require("util").t.OrV60r);
  obj10.render = function render() {
    return jsx(IntegrationsSettingsWebhooksOverviewDefault, { channelId, webhookType: constants3.CHANNEL_FOLLOWER });
  };
  obj[constants.CHANNELS_FOLLOWED] = obj10;
  const obj11 = { title: null, render: null };
  const intl12 = require("util").intl;
  obj11.title = intl12.string(require("util").t["+caQHK"]);
  obj11.render = function render() {
    return jsx(ChannelSettingsChangeCategoryDefault, { channelId });
  };
  obj[constants.CHANGE_CATEGORY] = obj11;
  const obj12 = { title: null, render: null };
  const intl13 = require("util").intl;
  obj12.title = intl13.string(require("util").t["Ms8bX+"]);
  obj12.render = function render() {
    return jsx(ChannelSettingsChangeRTCRegionDefault, { channelId });
  };
  obj[constants.CHANGE_RTC_REGION] = obj12;
  obj[constants.EDIT_FORUM_TAG] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(ChannelSettingsEditForumTagDefault, { channelId });
    },
  };
  const obj13 = { title: null, render: null };
  const intl14 = require("util").intl;
  obj13.title = intl14.string(require("util").t["kQvoC/"]);
  obj13.render = function render() {
    return jsx(ChannelSettingsChangeDefaultForumLayoutDefault, { channelId });
  };
  obj[constants.DEFAULT_FORUM_LAYOUT] = obj13;
  return obj;
};
