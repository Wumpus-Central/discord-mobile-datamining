// === Module 16643: styles ===

// Module 16643 (styles)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 673 */;
import { SearchTabs } from "MessageEmbedTypes" /* 7633 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ ChannelSettingsSections: c4, SearchTypes: c5, WebhookTypes: closure_6 } = ME);
createCacheKey = { container: null, pinsScreen: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsModal.tsx");

export const useChannelSettingsScreensStyles = createCacheKey;
export const getChannelSettingsScreens = function getChannelSettingsScreens(channelId, arg1, channelSettingsScreensStyles) {
  const _require = channelId;
  closure_1 = arg1;
  dependencyMap = channelSettingsScreensStyles;
  obj = { [closure_4.OVERVIEW]: obj };
  obj = {
    render(autoFocusElement) {
      const obj = { channelId: closure_0, autoFocusElement: null };
      autoFocusElement = undefined;
      if (autoFocusElement != null) {
        autoFocusElement = autoFocusElement.autoFocusElement;
      }
      obj[1] = autoFocusElement;
      return closure_1_8(callback(pinsScreen[7]), obj);
    }
  };
  obj = { title: null, render: null };
  const intl = _require(1233).intl;
  obj[0] = intl.string(_require(1233).t.h850Ss);
  obj[1] = function render() {
    return closure_1_8(callback(pinsScreen[9]), { channelId: closure_0 });
  };
  obj[constants.NOTIFICATIONS] = obj;
  obj1 = { title: null, render: null };
  const intl2 = _require(1233).intl;
  obj1[0] = intl2.string(_require(1233).t["mp1N/2"]);
  obj1[1] = function render() {
    let obj = { type: closure_1_5.GUILD_CHANNEL, guildId: callback, channelId: closure_0 };
    obj = { style: pinsScreen.pinsScreen, children: closure_1_8(callback(pinsScreen[10]), obj) };
    obj = { searchContext: obj, tab: closure_1_7.PINS, isFocused: true };
    return closure_1_8(closure_1_3, obj);
  };
  obj[constants.PINNED_MESSAGES] = obj1;
  obj[constants.PINNED_CHAT] = {
    postponeRender: true,
    render() {
      return closure_1_8(callback(pinsScreen[11]), { channelId: closure_0 });
    }
  };
  const obj2 = { title: null, postponeRender: true, render: null };
  const intl3 = _require(1233).intl;
  obj2[0] = intl3.string(_require(1233).t.ngRFjZ);
  obj2[2] = function render() {
    return callback2(callback(pinsScreen[12]), {});
  };
  obj[constants.INSTANT_INVITES] = obj2;
  const obj3 = { title: null, render: null };
  const intl4 = _require(1233).intl;
  obj3[0] = intl4.string(_require(1233).t.xrmhRX);
  obj3[1] = function render(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.channelId = closure_0;
    return closure_1_8(callback(pinsScreen[13]), obj);
  };
  obj[constants.PERMISSIONS] = obj3;
  const obj4 = { title: null, postponeRender: true, render: null };
  const intl5 = _require(1233).intl;
  obj4[0] = intl5.string(_require(1233).t.vPHdP5);
  obj4[2] = function render(arg0) {
    const merged = Object.assign(arg0);
    return closure_1_8(callback(pinsScreen[14]), { channelId: closure_0 });
  };
  obj[constants.NEW_PERMISSION] = obj4;
  const obj5 = { title: null, render: null };
  const intl6 = _require(1233).intl;
  obj5[0] = intl6.string(_require(1233).t.D4p9TR);
  obj5[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return closure_1_8(callback(pinsScreen[15]), { channelId: closure_0 });
  };
  obj[constants.PERMISSION_OVERRIDES] = obj5;
  const obj6 = { title: null, render: null };
  const intl7 = _require(1233).intl;
  obj6[0] = intl7.string(_require(1233).t.CIsNZw);
  obj6[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return closure_1_8(callback(pinsScreen[16]), { channelId: closure_0 });
  };
  obj[constants.INTEGRATIONS] = obj6;
  const obj7 = { title: null, render: null };
  const intl8 = _require(1233).intl;
  obj7[0] = intl8.string(_require(1233).t.jp25Id);
  obj7[1] = function render() {
    return closure_1_8(callback(pinsScreen[17]), { channelId: closure_0, webhookType: closure_1_6.INCOMING });
  };
  obj[constants.WEBHOOKS] = obj7;
  const obj8 = { title: null, render: null };
  const intl9 = _require(1233).intl;
  obj8[0] = intl9.string(_require(1233).t["6SE3L3"]);
  obj8[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(pinsScreen[18]), {});
  };
  obj[constants.EDIT_WEBHOOK] = obj8;
  const obj9 = { title: null, render: null };
  const intl10 = _require(1233).intl;
  obj9[0] = intl10.string(_require(1233).t.OJknhi);
  obj9[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(pinsScreen[19]), {});
  };
  obj[constants.EDIT_LINKED_LOBBY] = obj9;
  const obj10 = { title: null, render: null };
  const intl11 = _require(1233).intl;
  obj10[0] = intl11.string(_require(1233).t.OrV60r);
  obj10[1] = function render() {
    return closure_1_8(callback(pinsScreen[17]), { channelId: closure_0, webhookType: closure_1_6.CHANNEL_FOLLOWER });
  };
  obj[constants.CHANNELS_FOLLOWED] = obj10;
  const obj11 = { title: null, render: null };
  const intl12 = _require(1233).intl;
  obj11[0] = intl12.string(_require(1233).t["+caQHK"]);
  obj11[1] = function render() {
    return closure_1_8(callback(pinsScreen[20]), { channelId: closure_0 });
  };
  obj[constants.CHANGE_CATEGORY] = obj11;
  const obj12 = { title: null, render: null };
  const intl13 = _require(1233).intl;
  obj12[0] = intl13.string(_require(1233).t["Ms8bX+"]);
  obj12[1] = function render() {
    return closure_1_8(callback(pinsScreen[21]), { channelId: closure_0 });
  };
  obj[constants.CHANGE_RTC_REGION] = obj12;
  obj[constants.EDIT_FORUM_TAG] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_8(callback(pinsScreen[22]), { channelId: closure_0 });
    }
  };
  const obj13 = { title: null, render: null };
  const intl14 = _require(1233).intl;
  obj13[0] = intl14.string(_require(1233).t["kQvoC/"]);
  obj13[1] = function render() {
    return closure_1_8(callback(pinsScreen[23]), { channelId: closure_0 });
  };
  obj[constants.DEFAULT_FORUM_LAYOUT] = obj13;
  return obj;
};