import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/components_native/channel_settings/ChannelSettingsModal.tsx
import "EditLinkedLobby";
import { View } from "WebhookItem";
import ME from "ME";
import { SearchTabs } from "MessageEmbedTypes";
import { jsx } from "handleSetRegion";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
const require = arg1;
({ ChannelSettingsSections: c4, SearchTypes: c5, WebhookTypes: closure_6 } = ME);
createCacheKey = { container: null, pinsScreen: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("ME").fileFinishedImporting("components_native/channel_settings/ChannelSettingsModal.tsx");

export const useChannelSettingsScreensStyles = createCacheKey;
export const getChannelSettingsScreens = function getChannelSettingsScreens(channelId, arg1, channelSettingsScreensStyles) {
  const _require = channelId;
  let closure_1 = arg1;
  const dependencyMap = channelSettingsScreensStyles;
  obj = { [closure_4.OVERVIEW]: obj };
  obj = {
    render(autoFocusElement) {
      const obj = { channelId: closure_0, autoFocusElement: null };
      autoFocusElement = undefined;
      if (autoFocusElement != null) {
        autoFocusElement = autoFocusElement.autoFocusElement;
      }
      obj[1] = autoFocusElement;
      return outer1_8(callback(pinsScreen[7]), obj);
    }
  };
  obj = { title: null, render: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.h850Ss);
  obj[1] = function render() {
    return outer1_8(callback(pinsScreen[9]), { channelId: closure_0 });
  };
  obj[constants.NOTIFICATIONS] = obj;
  const obj1 = { title: null, render: null };
  const intl2 = _getSystemLocale.intl;
  obj1[0] = intl2.string(_getSystemLocale.t["mp1N/2"]);
  obj1[1] = function render() {
    let obj = { type: outer1_5.GUILD_CHANNEL, guildId: callback, channelId: closure_0 };
    obj = { style: pinsScreen.pinsScreen, children: outer1_8(callback(pinsScreen[10]), obj) };
    obj = { searchContext: obj, tab: outer1_7.PINS, isFocused: true };
    return outer1_8(outer1_3, obj);
  };
  obj[constants.PINNED_MESSAGES] = obj1;
  obj[constants.PINNED_CHAT] = {
    postponeRender: true,
    render() {
      return outer1_8(callback(pinsScreen[11]), { channelId: closure_0 });
    }
  };
  const obj2 = { title: null, postponeRender: true, render: null };
  const intl3 = _getSystemLocale.intl;
  obj2[0] = intl3.string(_getSystemLocale.t.ngRFjZ);
  obj2[2] = function render() {
    return callback2(callback(pinsScreen[12]), {});
  };
  obj[constants.INSTANT_INVITES] = obj2;
  const obj3 = { title: null, render: null };
  const intl4 = _getSystemLocale.intl;
  obj3[0] = intl4.string(_getSystemLocale.t.xrmhRX);
  obj3[1] = function render(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.channelId = closure_0;
    return outer1_8(callback(pinsScreen[13]), obj);
  };
  obj[constants.PERMISSIONS] = obj3;
  const obj4 = { title: null, postponeRender: true, render: null };
  const intl5 = _getSystemLocale.intl;
  obj4[0] = intl5.string(_getSystemLocale.t.vPHdP5);
  obj4[2] = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_8(callback(pinsScreen[14]), { channelId: closure_0 });
  };
  obj[constants.NEW_PERMISSION] = obj4;
  const obj5 = { title: null, render: null };
  const intl6 = _getSystemLocale.intl;
  obj5[0] = intl6.string(_getSystemLocale.t.D4p9TR);
  obj5[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_8(callback(pinsScreen[15]), { channelId: closure_0 });
  };
  obj[constants.PERMISSION_OVERRIDES] = obj5;
  const obj6 = { title: null, render: null };
  const intl7 = _getSystemLocale.intl;
  obj6[0] = intl7.string(_getSystemLocale.t.CIsNZw);
  obj6[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_8(callback(pinsScreen[16]), { channelId: closure_0 });
  };
  obj[constants.INTEGRATIONS] = obj6;
  const obj7 = { title: null, render: null };
  const intl8 = _getSystemLocale.intl;
  obj7[0] = intl8.string(_getSystemLocale.t.jp25Id);
  obj7[1] = function render() {
    return outer1_8(callback(pinsScreen[17]), { channelId: closure_0, webhookType: outer1_6.INCOMING });
  };
  obj[constants.WEBHOOKS] = obj7;
  const obj8 = { title: null, render: null };
  const intl9 = _getSystemLocale.intl;
  obj8[0] = intl9.string(_getSystemLocale.t["6SE3L3"]);
  obj8[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(pinsScreen[18]), {});
  };
  obj[constants.EDIT_WEBHOOK] = obj8;
  const obj9 = { title: null, render: null };
  const intl10 = _getSystemLocale.intl;
  obj9[0] = intl10.string(_getSystemLocale.t.OJknhi);
  obj9[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(pinsScreen[19]), {});
  };
  obj[constants.EDIT_LINKED_LOBBY] = obj9;
  const obj10 = { title: null, render: null };
  const intl11 = _getSystemLocale.intl;
  obj10[0] = intl11.string(_getSystemLocale.t.OrV60r);
  obj10[1] = function render() {
    return outer1_8(callback(pinsScreen[17]), { channelId: closure_0, webhookType: outer1_6.CHANNEL_FOLLOWER });
  };
  obj[constants.CHANNELS_FOLLOWED] = obj10;
  const obj11 = { title: null, render: null };
  const intl12 = _getSystemLocale.intl;
  obj11[0] = intl12.string(_getSystemLocale.t["+caQHK"]);
  obj11[1] = function render() {
    return outer1_8(callback(pinsScreen[20]), { channelId: closure_0 });
  };
  obj[constants.CHANGE_CATEGORY] = obj11;
  const obj12 = { title: null, render: null };
  const intl13 = _getSystemLocale.intl;
  obj12[0] = intl13.string(_getSystemLocale.t["Ms8bX+"]);
  obj12[1] = function render() {
    return outer1_8(callback(pinsScreen[21]), { channelId: closure_0 });
  };
  obj[constants.CHANGE_RTC_REGION] = obj12;
  obj[constants.EDIT_FORUM_TAG] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_8(callback(pinsScreen[22]), { channelId: closure_0 });
    }
  };
  const obj13 = { title: null, render: null };
  const intl14 = _getSystemLocale.intl;
  obj13[0] = intl14.string(_getSystemLocale.t["kQvoC/"]);
  obj13[1] = function render() {
    return outer1_8(callback(pinsScreen[23]), { channelId: closure_0 });
  };
  obj[constants.DEFAULT_FORUM_LAYOUT] = obj13;
  return obj;
};