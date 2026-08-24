// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../../screen/native/useScaledTextLineHeight.android.tsx";
import MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING from "channel/MessagesItemChannelBase.tsx";
import MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDINGDefault from "channel/MessagesItemChannelBase.tsx";
import _modDef15369 from "MessagesItemPlaceholder.tsx";
import toNativeHorizontalOffset from "../../../../../../../_runtime/15370_toNativeHorizontalOffset.js";
import closure_3 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../../../../stores/ChannelStore.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import { noop } from "../../../../../../../discord_common/js/packages/flash-list/index.js";

require = arg1;
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
    tmp5 = jsx(_modDef15369, { height: null, row: null });
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
  let obj = noop;
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
  let obj = toNativeHorizontalOffset;
  obj = {};
  [tmp2, tmp3] = callback(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  obj.isPressed = tmp2;
  obj.setIsPressed = tmp3;
  return <closure_7 />;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

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