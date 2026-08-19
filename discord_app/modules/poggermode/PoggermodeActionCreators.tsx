// discord_app/modules/poggermode/PoggermodeActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import getScreenshakeLocationNameDefault from "trackPoggermodeSettingsUpdated.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import initialize from "PoggermodeSettingsStore.tsx";
import updateCombo from "PoggermodeStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/poggermode/PoggermodeActionCreators.tsx");

export const updatePoggermodeSettings = function updatePoggermodeSettings(settings) {
  let obj = { type: "POGGERMODE_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
  obj = {};
  const merged = Object.assign(state.getState());
  const merged1 = Object.assign(settings);
  getScreenshakeLocationNameDefault(obj);
};
export const updateCombo = function updateCombo(arg0) {
  const obj = { type: "POGGERMODE_UPDATE_COMBO" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const clearMessageCombo = function clearMessageCombo(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.displayed = true;
  obj[1] = obj;
  obj.dispatch(obj);
};
export const updateComboOnMessageSend = function updateComboOnMessageSend(channelId, id) {
  id = id.getId();
  const iter = userCombo.getUserCombo(id, channelId);
  if (null != iter) {
    const obj = { combo: null, channelId: null, messageId: null, displayed: false };
    obj[0] = iter;
    obj[1] = channelId;
    obj[2] = id;
    obj[1] = obj;
    obj.dispatch(obj);
  }
  let num = 1;
  if (null != iter) {
    let value;
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
  dispatcherDefault.dispatch({ type: "POGGERMODE_UPDATE_COMBO", channelId, userId: id, multiplier: num, value: 0 });
};