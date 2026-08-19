// discord_app/components_native/channel_settings/ChannelSettingsModal.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../Constants.tsx";
import { SearchTabs } from "../../modules/search/SearchConstants.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ ChannelSettingsSections: c4, SearchTypes: c5, WebhookTypes: closure_6 } = ME);
let createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/channel_settings/ChannelSettingsModal.tsx");

export const useChannelSettingsScreensStyles = createCacheKey;
export const getChannelSettingsScreens = function getChannelSettingsScreens(channelId, arg1, channelSettingsScreensStyles) {
  const _require = channelId;
  closure_1 = arg1;
  dependencyMap = channelSettingsScreensStyles;
  let obj = { title: null, render: null };
  const intl = require("../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../intl/index.native.tsx").t.h850Ss);
  obj[1] = function render() {
    return jsx(callback(pinsScreen[9]), { channelId: closure_0 });
  };
  obj[constants.NOTIFICATIONS] = obj;
  obj1 = { title: null, render: null };
  const intl2 = require("../../intl/index.native.tsx").intl;
  obj1[0] = intl2.string(require("../../intl/index.native.tsx").t["mp1N/2"]);
  obj1[1] = function render() {
    let obj = { style: pinsScreen.pinsScreen, children: jsx(callback(pinsScreen[10]), { type: closure_1_5.GUILD_CHANNEL, guildId: callback, channelId: closure_0 }) };
    obj = { searchContext: obj, tab: SearchTabs.PINS, isFocused: true };
    return <View searchContext={obj} tab={SearchTabs.PINS} isFocused />;
  };
  obj[constants.PINNED_MESSAGES] = obj1;
  obj[constants.PINNED_CHAT] = {
    postponeRender: true,
    render() {
      return jsx(callback(pinsScreen[11]), { channelId: closure_0 });
    }
  };
  const obj2 = { title: null, postponeRender: true, render: null };
  const intl3 = require("../../intl/index.native.tsx").intl;
  obj2[0] = intl3.string(require("../../intl/index.native.tsx").t.ngRFjZ);
  obj2[2] = function render() {
    return callback2(callback(pinsScreen[12]), {});
  };
  obj[constants.INSTANT_INVITES] = obj2;
  const obj3 = { title: null, render: null };
  const intl4 = require("../../intl/index.native.tsx").intl;
  obj3[0] = intl4.string(require("../../intl/index.native.tsx").t.xrmhRX);
  obj3[1] = function render(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.channelId = closure_0;
    return jsx(callback(pinsScreen[13]), {});
  };
  obj[constants.PERMISSIONS] = obj3;
  const obj4 = { title: null, postponeRender: true, render: null };
  const intl5 = require("../../intl/index.native.tsx").intl;
  obj4[0] = intl5.string(require("../../intl/index.native.tsx").t.vPHdP5);
  obj4[2] = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(callback(pinsScreen[14]), { channelId: closure_0 });
  };
  obj[constants.NEW_PERMISSION] = obj4;
  const obj5 = { title: null, render: null };
  const intl6 = require("../../intl/index.native.tsx").intl;
  obj5[0] = intl6.string(require("../../intl/index.native.tsx").t.D4p9TR);
  obj5[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(callback(pinsScreen[15]), { channelId: closure_0 });
  };
  obj[constants.PERMISSION_OVERRIDES] = obj5;
  const obj6 = { title: null, render: null };
  const intl7 = require("../../intl/index.native.tsx").intl;
  obj6[0] = intl7.string(require("../../intl/index.native.tsx").t.CIsNZw);
  obj6[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(callback(pinsScreen[16]), { channelId: closure_0 });
  };
  obj[constants.INTEGRATIONS] = obj6;
  const obj7 = { title: null, render: null };
  const intl8 = require("../../intl/index.native.tsx").intl;
  obj7[0] = intl8.string(require("../../intl/index.native.tsx").t.jp25Id);
  obj7[1] = function render() {
    return jsx(callback(pinsScreen[17]), { channelId: closure_0, webhookType: closure_1_6.INCOMING });
  };
  obj[constants.WEBHOOKS] = obj7;
  const obj8 = { title: null, render: null };
  const intl9 = require("../../intl/index.native.tsx").intl;
  obj8[0] = intl9.string(require("../../intl/index.native.tsx").t["6SE3L3"]);
  obj8[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(pinsScreen[18]), {});
  };
  obj[constants.EDIT_WEBHOOK] = obj8;
  const obj9 = { title: null, render: null };
  const intl10 = require("../../intl/index.native.tsx").intl;
  obj9[0] = intl10.string(require("../../intl/index.native.tsx").t.OJknhi);
  obj9[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(pinsScreen[19]), {});
  };
  obj[constants.EDIT_LINKED_LOBBY] = obj9;
  const obj10 = { title: null, render: null };
  const intl11 = require("../../intl/index.native.tsx").intl;
  obj10[0] = intl11.string(require("../../intl/index.native.tsx").t.OrV60r);
  obj10[1] = function render() {
    return jsx(callback(pinsScreen[17]), { channelId: closure_0, webhookType: closure_1_6.CHANNEL_FOLLOWER });
  };
  obj[constants.CHANNELS_FOLLOWED] = obj10;
  const obj11 = { title: null, render: null };
  const intl12 = require("../../intl/index.native.tsx").intl;
  obj11[0] = intl12.string(require("../../intl/index.native.tsx").t["+caQHK"]);
  obj11[1] = function render() {
    return jsx(callback(pinsScreen[20]), { channelId: closure_0 });
  };
  obj[constants.CHANGE_CATEGORY] = obj11;
  const obj12 = { title: null, render: null };
  const intl13 = require("../../intl/index.native.tsx").intl;
  obj12[0] = intl13.string(require("../../intl/index.native.tsx").t["Ms8bX+"]);
  obj12[1] = function render() {
    return jsx(callback(pinsScreen[21]), { channelId: closure_0 });
  };
  obj[constants.CHANGE_RTC_REGION] = obj12;
  obj[constants.EDIT_FORUM_TAG] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(callback(pinsScreen[22]), { channelId: closure_0 });
    }
  };
  const obj13 = { title: null, render: null };
  const intl14 = require("../../intl/index.native.tsx").intl;
  obj13[0] = intl14.string(require("../../intl/index.native.tsx").t["kQvoC/"]);
  obj13[1] = function render() {
    return jsx(callback(pinsScreen[23]), { channelId: closure_0 });
  };
  obj[constants.DEFAULT_FORUM_LAYOUT] = obj13;
  return obj;
};