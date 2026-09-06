// === Module 7830: PoggermodeActionCreators ===

// Module 7830 (PoggermodeActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import trackPoggermodeSettingsUpdatedDefault from "trackPoggermodeSettingsUpdated" /* 7833 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PoggermodeSettingsStore from "PoggermodeSettingsStore" /* 7678 */;
import PoggermodeStore from "PoggermodeStore" /* 7831 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/poggermode/PoggermodeActionCreators.tsx");

export const updatePoggermodeSettings = function updatePoggermodeSettings(settings) {
  let obj = { type: "POGGERMODE_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
  obj = {};
  const merged = Object.assign(PoggermodeSettingsStore.getState());
  const merged1 = Object.assign(settings);
  trackPoggermodeSettingsUpdatedDefault(obj);
};
export const updateCombo = function updateCombo(arg0) {
  const obj = { type: "POGGERMODE_UPDATE_COMBO" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const clearMessageCombo = function clearMessageCombo(arg0) {
  let obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.displayed = true;
  obj.comboMessage = obj;
  obj.dispatch(obj);
};
export const updateComboOnMessageSend = function updateComboOnMessageSend(channelId, id) {
  id = AuthenticationStore.getId();
  const iter = PoggermodeStore.getUserCombo(id, channelId);
  if (null != iter) {
    let obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: null };
    obj = { combo: iter, channelId, messageId: id, displayed: false };
    obj.comboMessage = obj;
    obj.dispatch(obj);
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
};