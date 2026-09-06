// === Module 16030: MessagesItemChannel ===

// Module 16030 (MessagesItemChannel)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import _mod8874 from "module_8874" /* 8874 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10119 */;
import MessagesItemChannelBase from "MessagesItemChannelBase" /* 16031 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16040 */;
import _mod16041 from "module_16041" /* 16041 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const MessagesItemChannelBaseDefault = MessagesItemChannelBase;

require = fn;
const jsx = fn(21).jsx;
let closure_7 = noop.memo(function MessagesItemChannel(arg0) {
  ({ channelId: require, placeholderHeight } = arg0);
  ({ row, isPressed, setIsPressed } = arg0);
  let obj = initialize;
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let isPrivateResult;
  if (stateFromStores != null) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    obj = { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed };
    let tmp5 = jsx(MessagesItemChannelBaseDefault, { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed });
  } else {
    obj = { height: placeholderHeight, row };
    tmp5 = jsx(MessagesItemPlaceholderDefault, { height: placeholderHeight, row });
  }
  return tmp5;
});
const memoResult = noop.memo((arg0) => {
  const obj = {};
  [tmp2, tmp3] = _slicedToArray(noop.useState(false), 2);
  const merged = Object.assign(arg0);
  obj.isPressed = tmp2;
  obj.setIsPressed = tmp3;
  return <closure_7 />;
});
const memoResult1 = noop.memo((channelId) => {
  let obj = _mod8874;
  const items = [channelId.channelId];
  const tmp = _slicedToArray(obj.useRecyclingState(false, items), 2);
  closure_0 = tmp2;
  const items1 = [tmp[1]];
  obj = {};
  const callback = noop.useCallback((arg0) => closure_0(arg0, true), items1);
  const merged = Object.assign(channelId);
  obj.isPressed = tmp[0];
  obj.setIsPressed = callback;
  return <closure_7 />;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

export const getMessagesItemChannelSizes = function getMessagesItemChannelSizes(fontScale) {
  let obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const scaleTextLineHeightResult1 = useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale);
  const PX_16 = nativeDefault.space.PX_16;
  const PX_32 = nativeDefault.space.PX_32;
  obj = { avatar: PX_32, height: null, label: null, labelSecondary: null, padding: null };
  const sum = Math.max(PX_32, scaleTextLineHeightResult + scaleTextLineHeightResult1) + PX_16;
  obj.height = sum + MessagesItemChannelBase.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
  obj.label = scaleTextLineHeightResult;
  obj.labelSecondary = scaleTextLineHeightResult1;
  obj.padding = PX_16;
  return obj;
};
export const MessagesItemChannelFast = memoResult;
export const MessagesItemChannelFlash = memoResult1;
export const MessagesItemChannelLegend = noop.memo((arg0) => {
  const obj = {};
  [tmp2, tmp3] = _slicedToArray(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  obj.isPressed = tmp2;
  obj.setIsPressed = tmp3;
  return <closure_7 />;
});