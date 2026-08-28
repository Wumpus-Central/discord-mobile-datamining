// === Module 7521: updatePoggermodeSettings ===

// Module 7521 (updatePoggermodeSettings)
import dispatcherDefault from "dispatcher" /* 709 */;
import getScreenshakeLocationNameDefault from "getScreenshakeLocationName" /* 7524 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "initialize" /* 7370 */;
import closure_4 from "updateCombo" /* 7522 */;

const result = require("set").fileFinishedImporting("modules/poggermode/PoggermodeActionCreators.tsx");

export const updatePoggermodeSettings = function updatePoggermodeSettings(settings) {
  let obj = dispatcherDefault;
  obj = { type: "POGGERMODE_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
  obj = {};
  const merged = Object.assign(state.getState());
  const merged1 = Object.assign(settings);
  getScreenshakeLocationNameDefault(obj);
};
export const updateCombo = function updateCombo(arg0) {
  let obj = dispatcherDefault;
  obj = { type: "POGGERMODE_UPDATE_COMBO" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const clearMessageCombo = function clearMessageCombo(arg0) {
  let obj = dispatcherDefault;
  obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.displayed = true;
  obj[1] = obj;
  obj.dispatch(obj);
};
export const updateComboOnMessageSend = function updateComboOnMessageSend(closure_1_0, id) {
  id = id.getId();
  const iter = userCombo.getUserCombo(id, closure_1_0);
  if (null != iter) {
    let obj = dispatcherDefault;
    obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: null };
    obj = { combo: null, channelId: null, messageId: null, displayed: false };
    obj[0] = iter;
    obj[1] = closure_1_0;
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
  dispatcherDefault.dispatch({ type: "POGGERMODE_UPDATE_COMBO", channelId: closure_1_0, userId: id, multiplier: num, value: 0 });
};