// discord_app/modules/poggermode/PoggermodeActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import trackPoggermodeSettingsUpdatedDefault from "trackPoggermodeSettingsUpdated.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import PoggermodeSettingsStore from "PoggermodeSettingsStore.tsx";
import PoggermodeStore from "PoggermodeStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/poggermode/PoggermodeActionCreators.tsx");

export const updatePoggermodeSettings = function updatePoggermodeSettings(settings) {
  DispatcherDefault.dispatch({ type: "POGGERMODE_SETTINGS_UPDATE", settings });
  const merged = Object.assign(PoggermodeSettingsStore.getState());
  const merged1 = Object.assign(settings);
  trackPoggermodeSettingsUpdatedDefault({});
};
export const updateCombo = function updateCombo(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "POGGERMODE_UPDATE_COMBO" });
};
export const clearMessageCombo = function clearMessageCombo(arg0) {
  const obj2 = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: null };
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.displayed = true;
  obj2.comboMessage = obj3;
  DispatcherDefault.dispatch(obj2);
};
export const updateComboOnMessageSend = function updateComboOnMessageSend(channelId, id) {
  id = AuthenticationStore.getId();
  const iter = PoggermodeStore.getUserCombo(id, channelId);
  if (null != iter) {
    const obj2 = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: null };
    const obj3 = { combo: iter, channelId, messageId: id, displayed: false };
    obj2.comboMessage = obj3;
    DispatcherDefault.dispatch(obj2);
  }
  let num = 1;
  if (null != iter) {
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    num = 1;
    if (value > 0) {
      let num3;
      if (iter != null) {
        num3 = iter.multiplier;
      }
      if (num3 == null) {
        num3 = 0;
      }
      num = num3 + 1;
    }
  }
  DispatcherDefault.dispatch({ type: "POGGERMODE_UPDATE_COMBO", channelId, userId: id, multiplier: num, value: 0 });
  const obj5 = { type: "POGGERMODE_UPDATE_COMBO", channelId, userId: id, multiplier: num, value: 0 };
};
