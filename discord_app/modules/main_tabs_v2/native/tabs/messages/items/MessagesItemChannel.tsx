import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

let require = arg1;
let c4 = importAllResult;
let closure_7 = importAllResult.memo(function MessagesItemChannel(arg0) {
  let isPressed;
  let placeholderHeight;
  let require;
  let row;
  let setIsPressed;
  ({ channelId: require, placeholderHeight } = arg0);
  ({ row, isPressed, setIsPressed } = arg0);
  let obj = require(589) /* initialize */;
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(closure_0));
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
    let tmp5 = jsx(importDefault(15062), { channel: null, height: null, isPressed: null, setIsPressed: null });
  } else {
    obj = { height: null, row: null };
    obj[0] = placeholderHeight;
    obj[1] = row;
    tmp5 = jsx(importDefault(15071), { height: null, row: null });
  }
  return tmp5;
});
const memoResult = importAllResult.memo((arg0) => {
  let tmp2;
  let tmp3;
  const obj = {};
  [tmp2, tmp3] = callback(importAllResult.useState(false), 2);
  const merged = Object.assign(arg0);
  obj.isPressed = tmp2;
  obj.setIsPressed = tmp3;
  return <closure_7 />;
});
const memoResult1 = importAllResult.memo((channelId) => {
  let obj = require(7666) /* noop */;
  const items = [channelId.channelId];
  const tmp = callback(obj.useRecyclingState(false, items), 2);
  require = tmp2;
  const items1 = [tmp[1]];
  obj = {};
  callback = importAllResult.useCallback((arg0) => tmp2(arg0, true), items1);
  const merged = Object.assign(channelId);
  obj.isPressed = tmp[0];
  obj.setIsPressed = callback;
  return <closure_7 />;
});
const memoResult2 = importAllResult.memo((arg0) => {
  let tmp2;
  let tmp3;
  let obj = require(15072) /* toNativeHorizontalOffset */;
  obj = {};
  [tmp2, tmp3] = callback(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  obj.isPressed = tmp2;
  obj.setIsPressed = tmp3;
  return <closure_7 />;
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

export const getMessagesItemChannelSizes = function getMessagesItemChannelSizes(fontScale) {
  let obj = require(9370) /* map */;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const scaleTextLineHeightResult1 = require(9370) /* map */.scaleTextLineHeight("text-xs/medium", fontScale);
  const PX_16 = importDefault(712).space.PX_16;
  const PX_32 = importDefault(712).space.PX_32;
  obj = { avatar: PX_32, height: null, label: null, labelSecondary: null, padding: null };
  const sum = Math.max(PX_32, scaleTextLineHeightResult + scaleTextLineHeightResult1) + PX_16;
  obj[1] = sum + require(15062) /* MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING */.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
  obj[2] = scaleTextLineHeightResult;
  obj[3] = scaleTextLineHeightResult1;
  obj[4] = PX_16;
  return obj;
};
export const MessagesItemChannelFast = memoResult;
export const MessagesItemChannelFlash = memoResult1;
export const MessagesItemChannelLegend = memoResult2;