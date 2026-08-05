import { dispatcher } from "../../Dispatcher.tsx";
import { getScreenshakeLocationName } from "trackPoggermodeSettingsUpdated.tsx";
// discord_app/modules/poggermode/PoggermodeActionCreators.tsx
import fetchFingerprint from "fetchFingerprint";
import initialize from "initialize";
import updateCombo from "updateCombo";

const result = require("updateCombo").fileFinishedImporting("modules/poggermode/PoggermodeActionCreators.tsx");

export const updatePoggermodeSettings = function updatePoggermodeSettings(settings) {
  let obj = dispatcher;
  obj = { type: "POGGERMODE_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
  obj = {};
  const merged = Object.assign(state.getState());
  const merged1 = Object.assign(settings);
  getScreenshakeLocationName(obj);
};
export const updateCombo = function updateCombo(arg0) {
  let obj = dispatcher;
  obj = { type: "POGGERMODE_UPDATE_COMBO" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const clearMessageCombo = function clearMessageCombo(arg0) {
  let obj = dispatcher;
  obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.displayed = true;
  obj[1] = obj;
  obj.dispatch(obj);
};
export const updateComboOnMessageSend = function updateComboOnMessageSend(throwTypeErrorResult, id) {
  id = id.getId();
  const iter = userCombo.getUserCombo(id, throwTypeErrorResult);
  if (null != iter) {
    let obj = dispatcher;
    obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: null };
    obj = { combo: null, channelId: null, messageId: null, displayed: false };
    obj[0] = iter;
    obj[1] = throwTypeErrorResult;
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
  dispatcher.dispatch({ type: "POGGERMODE_UPDATE_COMBO", channelId: throwTypeErrorResult, userId: id, multiplier: num, value: 0 });
};