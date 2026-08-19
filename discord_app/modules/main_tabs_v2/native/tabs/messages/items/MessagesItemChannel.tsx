// === Module 15295: getMessagesItemChannelSizes ===

// Module 15295 (getMessagesItemChannelSizes)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 9288 */;
import MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING from "MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING" /* 15296 */;
import MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDINGDefault from "MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING" /* 15296 */;
import _modDef15305 from "module_15305" /* 15305 */;
import toNativeHorizontalOffset from "toNativeHorizontalOffset" /* 15306 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let c4 = importAllResult;
let closure_7 = importAllResult.memo(function MessagesItemChannel(arg0) {
  ({ channelId: require, placeholderHeight } = arg0);
  ({ row, isPressed, setIsPressed } = arg0);
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(closure_0));
  let isPrivateResult;
  if (stateFromStores != null) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    obj = { channel: null, height: null, isPressed: null, setIsPressed: null };
    obj[0] = stateFromStores;
    obj[1] = placeholderHeight;
    obj[2] = isPressed;
    obj[3] = setIsPressed;
    let tmp5 = jsx(MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDINGDefault, { channel: null, height: null, isPressed: null, setIsPressed: null });
  } else {
    obj = { height: null, row: null };
    obj[0] = placeholderHeight;
    obj[1] = row;
    tmp5 = jsx(_modDef15305, { height: null, row: null });
  }
  return tmp5;
});
const memoResult = importAllResult.memo((arg0) => {
  const obj = {};
  [tmp2, tmp3] = callback(importAllResult.useState(false), 2);
  const merged = Object.assign(arg0);
  obj.isPressed = tmp2;
  obj.setIsPressed = tmp3;
  return <closure_7 />;
});
const memoResult1 = importAllResult.memo((channelId) => {
  let obj = _require(8029);
  const items = [channelId.channelId];
  const tmp = callback(obj.useRecyclingState(false, items), 2);
  _require = tmp2;
  const items1 = [tmp[1]];
  obj = {};
  callback = importAllResult.useCallback((arg0) => callback(arg0, true), items1);
  const merged = Object.assign(channelId);
  obj.isPressed = tmp[0];
  obj.setIsPressed = callback;
  return <closure_7 />;
});
const memoResult2 = importAllResult.memo((arg0) => {
  const obj = {};
  [tmp2, tmp3] = callback(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  obj.isPressed = tmp2;
  obj.setIsPressed = tmp3;
  return <closure_7 />;
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

export const getMessagesItemChannelSizes = function getMessagesItemChannelSizes(fontScale) {
  let obj = map;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const scaleTextLineHeightResult1 = map.scaleTextLineHeight("text-xs/medium", fontScale);
  const PX_16 = ThemesDefault.space.PX_16;
  const PX_32 = ThemesDefault.space.PX_32;
  obj = { avatar: PX_32, height: null, label: null, labelSecondary: null, padding: null };
  const sum = Math.max(PX_32, scaleTextLineHeightResult + scaleTextLineHeightResult1) + PX_16;
  obj[1] = sum + MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
  obj[2] = scaleTextLineHeightResult;
  obj[3] = scaleTextLineHeightResult1;
  obj[4] = PX_16;
  return obj;
};
export const MessagesItemChannelFast = memoResult;
export const MessagesItemChannelFlash = memoResult1;
export const MessagesItemChannelLegend = memoResult2;