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

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelSettingsSections: closure_4, SearchTypes: hasOwnProperty, WebhookTypes: metroRequire } = Constants);
const SearchTabs = fn(7985).SearchTabs;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  pinsScreen: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.pinsScreen = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const styles = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsModal.tsx");

export const useChannelSettingsScreensStyles = styles;
export const getChannelSettingsScreens = function getChannelSettingsScreens(
  channelId,
  guildId,
  channelSettingsScreensStyles,
) {
  _require = channelId;
  dependencyMap = channelSettingsScreensStyles;
  let obj = { [closure_4.OVERVIEW]: obj2 };
  const obj3 = { title: null, render: null };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t.h850Ss);
  obj3.render = function render() {
    return jsx(ChannelSettingsNotificationsDefault, { channelId });
  };
  obj[constants.NOTIFICATIONS] = obj3;
  const obj4 = { title: null, render: null };
  const intl2 = require("util").intl;
  obj4.title = intl2.string(require("util").t["mp1N/2"]);
  obj4.render = function render() {
    const obj2 = {
      style: pinsScreen.pinsScreen,
      children: jsx(messages_PinsScreenDefault, {
        searchContext: { type: constants2.GUILD_CHANNEL, guildId, channelId },
        tab: SearchTabs.PINS,
        isFocused: true,
      }),
    };
    return (
      <View style={pinsScreen.pinsScreen}>
        {jsx(messages_PinsScreenDefault, {
          searchContext: { type: constants2.GUILD_CHANNEL, guildId, channelId },
          tab: SearchTabs.PINS,
          isFocused: true,
        })}
      </View>
    );
  };
  obj[constants.PINNED_MESSAGES] = obj4;
  obj[constants.PINNED_CHAT] = {
    postponeRender: true,
    render() {
      return jsx(MessagePreviewDefault, { channelId });
    },
  };
  const obj5 = { title: null, postponeRender: true, render: null };
  const intl3 = require("util").intl;
  obj5.title = intl3.string(require("util").t.ngRFjZ);
  obj5.render = function render() {
    return jsx(guildId(pinsScreen[12]), {});
  };
  obj[constants.INSTANT_INVITES] = obj5;
  const obj6 = { title: null, render: null };
  const intl4 = require("util").intl;
  obj6.title = intl4.string(require("util").t.xrmhRX);
  obj6.render = function render(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.channelId = channelId;
    return jsx(EasyChannelPermissionSettingsDefault, {});
  };
  obj[constants.PERMISSIONS] = obj6;
  const obj7 = { title: null, postponeRender: true, render: null };
  const intl5 = require("util").intl;
  obj7.title = intl5.string(require("util").t.vPHdP5);
  obj7.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(ChannelSettingsPermissionsListDefault, { channelId });
  };
  obj[constants.NEW_PERMISSION] = obj7;
  const obj8 = { title: null, render: null };
  const intl6 = require("util").intl;
  obj8.title = intl6.string(require("util").t.D4p9TR);
  obj8.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(ChannelSettingsPermissionsOverridesDefault, { channelId });
  };
  obj[constants.PERMISSION_OVERRIDES] = obj8;
  const obj9 = { title: null, render: null };
  const intl7 = require("util").intl;
  obj9.title = intl7.string(require("util").t.CIsNZw);
  obj9.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(ChannelSettingsIntegrationsOverviewDefault, { channelId });
  };
  obj[constants.INTEGRATIONS] = obj9;
  const obj10 = { title: null, render: null };
  const intl8 = require("util").intl;
  obj10.title = intl8.string(require("util").t.jp25Id);
  obj10.render = function render() {
    return jsx(IntegrationsSettingsWebhooksOverviewDefault, { channelId, webhookType: constants3.INCOMING });
  };
  obj[constants.WEBHOOKS] = obj10;
  const obj11 = { title: null, render: null };
  const intl9 = require("util").intl;
  obj11.title = intl9.string(require("util").t["6SE3L3"]);
  obj11.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(guildId(pinsScreen[18]), {});
  };
  obj[constants.EDIT_WEBHOOK] = obj11;
  const obj12 = { title: null, render: null };
  const intl10 = require("util").intl;
  obj12.title = intl10.string(require("util").t.OJknhi);
  obj12.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(guildId(pinsScreen[19]), {});
  };
  obj[constants.EDIT_LINKED_LOBBY] = obj12;
  const obj13 = { title: null, render: null };
  const intl11 = require("util").intl;
  obj13.title = intl11.string(require("util").t.OrV60r);
  obj13.render = function render() {
    return jsx(IntegrationsSettingsWebhooksOverviewDefault, { channelId, webhookType: constants3.CHANNEL_FOLLOWER });
  };
  obj[constants.CHANNELS_FOLLOWED] = obj13;
  const obj14 = { title: null, render: null };
  const intl12 = require("util").intl;
  obj14.title = intl12.string(require("util").t["+caQHK"]);
  obj14.render = function render() {
    return jsx(ChannelSettingsChangeCategoryDefault, { channelId });
  };
  obj[constants.CHANGE_CATEGORY] = obj14;
  const obj15 = { title: null, render: null };
  const intl13 = require("util").intl;
  obj15.title = intl13.string(require("util").t["Ms8bX+"]);
  obj15.render = function render() {
    return jsx(ChannelSettingsChangeRTCRegionDefault, { channelId });
  };
  obj[constants.CHANGE_RTC_REGION] = obj15;
  obj[constants.EDIT_FORUM_TAG] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(ChannelSettingsEditForumTagDefault, { channelId });
    },
  };
  const obj16 = { title: null, render: null };
  const intl14 = require("util").intl;
  obj16.title = intl14.string(require("util").t["kQvoC/"]);
  obj16.render = function render() {
    return jsx(ChannelSettingsChangeDefaultForumLayoutDefault, { channelId });
  };
  obj[constants.DEFAULT_FORUM_LAYOUT] = obj16;
  return obj;
};
