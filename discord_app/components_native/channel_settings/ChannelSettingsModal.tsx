// discord_app/components_native/channel_settings/ChannelSettingsModal.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import SearchConstants from "../../modules/search/SearchConstants.tsx";
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications.tsx";
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
import react from "../../../_runtime/00019_react.js";
import Constants from "../../Constants.tsx";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ ChannelSettingsSections: closure_4, SearchTypes: hasOwnProperty, WebhookTypes: metroRequire } = Constants);
const SearchTabs = SearchConstants.SearchTabs;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, pinsScreen: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const styles = createStyles(obj);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsModal.tsx");

export const useChannelSettingsScreensStyles = styles;
export const getChannelSettingsScreens = function getChannelSettingsScreens(
  channelId,
  guildId,
  channelSettingsScreensStyles,
) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj2;
  _require = channelId;
  dependencyMap = channelSettingsScreensStyles;
  const obj = { [closure_4.OVERVIEW]: obj2 };
  obj2 = {
    render(autoFocusElement) {
      autoFocusElement = undefined;
      ChannelSettingsOverviewDefault;
      if (autoFocusElement != null) {
        autoFocusElement = autoFocusElement.autoFocusElement;
      }
      return <tmp2 channelId={channelId} autoFocusElement={autoFocusElement} />;
    },
  };
  const obj3 = {
    title: intl.string(require("intl").t.h850Ss),
    render() {
      return jsx(ChannelSettingsNotificationsDefault, { channelId });
    },
  };
  const NOTIFICATIONS = constants.NOTIFICATIONS;
  intl = require("intl").intl;
  obj[NOTIFICATIONS] = obj3;
  const PINNED_MESSAGES = constants.PINNED_MESSAGES;
  const obj4 = {
    title: intl2.string(require("intl").t["mp1N/2"]),
    render() {
      return <View style={channelSettingsScreensStyles.pinsScreen}>{null}</View>;
    },
  };
  intl2 = require("intl").intl;
  obj[PINNED_MESSAGES] = obj4;
  obj[constants.PINNED_CHAT] = {
    postponeRender: true,
    render() {
      return jsx(MessagePreviewDefault, { channelId });
    },
  };
  const INSTANT_INVITES = constants.INSTANT_INVITES;
  const obj5 = {
    title: intl3.string(require("intl").t.ngRFjZ),
    postponeRender: true,
    render() {
      return jsx(guildId(channelSettingsScreensStyles[12]), {});
    },
  };
  intl3 = require("intl").intl;
  obj[INSTANT_INVITES] = obj5;
  const PERMISSIONS = constants.PERMISSIONS;
  const obj6 = {
    title: intl4.string(require("intl").t.xrmhRX),
    render(arg0) {
      EasyChannelPermissionSettingsDefault;
      const merged = Object.assign(arg0);
      return <tmp channelId={channelId} />;
    },
  };
  intl4 = require("intl").intl;
  obj[PERMISSIONS] = obj6;
  const NEW_PERMISSION = constants.NEW_PERMISSION;
  const obj7 = {
    title: intl5.string(require("intl").t.vPHdP5),
    postponeRender: true,
    render(arg0) {
      ChannelSettingsPermissionsListDefault;
      const merged = Object.assign(arg0);
      return <tmp channelId={channelId} />;
    },
  };
  intl5 = require("intl").intl;
  obj[NEW_PERMISSION] = obj7;
  const PERMISSION_OVERRIDES = constants.PERMISSION_OVERRIDES;
  const obj8 = {
    title: intl6.string(require("intl").t.D4p9TR),
    render(arg0) {
      ChannelSettingsPermissionsOverridesDefault;
      const merged = Object.assign(arg0);
      return <tmp channelId={channelId} />;
    },
  };
  intl6 = require("intl").intl;
  obj[PERMISSION_OVERRIDES] = obj8;
  const INTEGRATIONS = constants.INTEGRATIONS;
  const obj9 = {
    title: intl7.string(require("intl").t.CIsNZw),
    render(arg0) {
      ChannelSettingsIntegrationsOverviewDefault;
      const merged = Object.assign(arg0);
      return <tmp channelId={channelId} />;
    },
  };
  intl7 = require("intl").intl;
  obj[INTEGRATIONS] = obj9;
  const WEBHOOKS = constants.WEBHOOKS;
  const obj10 = {
    title: intl8.string(require("intl").t.jp25Id),
    render() {
      return jsx(IntegrationsSettingsWebhooksOverviewDefault, { channelId, webhookType: metroRequire.INCOMING });
    },
  };
  intl8 = require("intl").intl;
  obj[WEBHOOKS] = obj10;
  const EDIT_WEBHOOK = constants.EDIT_WEBHOOK;
  const obj11 = {
    title: intl9.string(require("intl").t["6SE3L3"]),
    render(arg0) {
      guildId(channelSettingsScreensStyles[18]);
      const merged = Object.assign(arg0);
      return <tmp />;
    },
  };
  intl9 = require("intl").intl;
  obj[EDIT_WEBHOOK] = obj11;
  const EDIT_LINKED_LOBBY = constants.EDIT_LINKED_LOBBY;
  const obj12 = {
    title: intl10.string(require("intl").t.OJknhi),
    render(arg0) {
      guildId(channelSettingsScreensStyles[19]);
      const merged = Object.assign(arg0);
      return <tmp />;
    },
  };
  intl10 = require("intl").intl;
  obj[EDIT_LINKED_LOBBY] = obj12;
  const CHANNELS_FOLLOWED = constants.CHANNELS_FOLLOWED;
  const obj13 = {
    title: intl11.string(require("intl").t.OrV60r),
    render() {
      return jsx(IntegrationsSettingsWebhooksOverviewDefault, {
        channelId,
        webhookType: metroRequire.CHANNEL_FOLLOWER,
      });
    },
  };
  intl11 = require("intl").intl;
  obj[CHANNELS_FOLLOWED] = obj13;
  const CHANGE_CATEGORY = constants.CHANGE_CATEGORY;
  const obj14 = {
    title: intl12.string(require("intl").t["+caQHK"]),
    render() {
      return jsx(ChannelSettingsChangeCategoryDefault, { channelId });
    },
  };
  intl12 = require("intl").intl;
  obj[CHANGE_CATEGORY] = obj14;
  const CHANGE_RTC_REGION = constants.CHANGE_RTC_REGION;
  const obj15 = {
    title: intl13.string(require("intl").t["Ms8bX+"]),
    render() {
      return jsx(ChannelSettingsChangeRTCRegionDefault, { channelId });
    },
  };
  intl13 = require("intl").intl;
  obj[CHANGE_RTC_REGION] = obj15;
  obj[constants.EDIT_FORUM_TAG] = {
    render(arg0) {
      ChannelSettingsEditForumTagDefault;
      const merged = Object.assign(arg0);
      return <tmp channelId={channelId} />;
    },
  };
  const DEFAULT_FORUM_LAYOUT = constants.DEFAULT_FORUM_LAYOUT;
  const obj16 = {
    title: intl14.string(require("intl").t["kQvoC/"]),
    render() {
      return jsx(ChannelSettingsChangeDefaultForumLayoutDefault, { channelId });
    },
  };
  intl14 = require("intl").intl;
  obj[DEFAULT_FORUM_LAYOUT] = obj16;
  return obj;
};
