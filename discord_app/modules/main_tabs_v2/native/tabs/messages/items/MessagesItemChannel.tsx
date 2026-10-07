// === Module 15996: MessagesItemChannel ===

// Module 15996 (MessagesItemChannel)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _mod8404 from "module_8404" /* 8404 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10736 */;
import MessagesItemChannelBase from "MessagesItemChannelBase" /* 15997 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16006 */;
import _mod16007 from "module_16007" /* 16007 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

const MessagesItemChannelBaseDefault = MessagesItemChannelBase;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_7 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let tmp2 = dependencyMap;
  const cResult = channelId(576).c(11);
  channelId = channelId.channelId;
  ({ placeholderHeight, row, isPressed, setIsPressed } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  let isPrivateResult;
  if (stateFromStores != null) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === isPressed) {
        if (cResult[5] === placeholderHeight) {
        }
      }
    }
    const obj2 = { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed };
    tmp2 = jsx(MessagesItemChannelBaseDefault, { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed });
    cResult[3] = stateFromStores;
    cResult[4] = isPressed;
    cResult[5] = placeholderHeight;
    cResult[6] = setIsPressed;
    cResult[7] = tmp2;
  } else {
    if (cResult[8] === placeholderHeight) {
      if (cResult[9] === row) {
        let tmp8 = cResult[10];
      }
      return tmp8;
    }
    const obj3 = { height: placeholderHeight, row };
    const tmp11 = jsx(MessagesItemPlaceholderDefault, { height: placeholderHeight, row });
    cResult[8] = placeholderHeight;
    cResult[9] = row;
    cResult[10] = tmp11;
    tmp8 = tmp11;
  }
  const tmpResult = channelId(504);
}) : ((arg0) => {
  ({ channelId: require, placeholderHeight } = arg0);
  ({ row, isPressed, setIsPressed } = arg0);
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let isPrivateResult;
  if (stateFromStores != null) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    const obj2 = { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed };
    let tmp5 = jsx(MessagesItemChannelBaseDefault, { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed });
  } else {
    const obj3 = { height: placeholderHeight, row };
    tmp5 = jsx(MessagesItemPlaceholderDefault, { height: placeholderHeight, row });
  }
  return tmp5;
}));
fn(558);
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  [tmp3, tmp4] = noop.useState(false);
  if (cResult[0] === tmp3) {
    if (cResult[1] === arg0) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.isPressed = tmp3;
  obj2.setIsPressed = tmp4;
  const tmp7 = <closure_7 />;
  cResult[0] = tmp3;
  cResult[1] = arg0;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : ((arg0) => {
  const obj = {};
  [tmp2, tmp3] = noop.useState(false);
  const merged = Object.assign(arg0);
  obj.isPressed = tmp2;
  obj.setIsPressed = tmp3;
  return <closure_7 />;
}));
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = c.c(8);
  if (cResult[0] !== channelId.channelId) {
    const items = [channelId.channelId];
    cResult[0] = channelId.channelId;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = _mod8404;
  [tmp6, tmp7] = _mod8404.useRecyclingState(false, tmp4);
  require = tmp7;
  if (cResult[2] !== tmp7) {
    const fn = function o(arg0) {
      return tmp7(arg0, true);
    };
    cResult[2] = tmp7;
    cResult[3] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp6) {
    if (cResult[5] === channelId) {
      if (cResult[6] === tmp8) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const obj2 = {};
  const merged = Object.assign(channelId);
  obj2.isPressed = tmp6;
  obj2.setIsPressed = tmp8;
  const tmp11 = <closure_7 />;
  cResult[4] = tmp6;
  cResult[5] = channelId;
  cResult[6] = tmp8;
  cResult[7] = tmp11;
  tmp9 = tmp11;
  const tmp5 = _slicedToArray(_mod8404.useRecyclingState(false, tmp4), 2);
}) : ((channelId) => {
  const items = [channelId.channelId];
  const tmp = _slicedToArray(_mod8404.useRecyclingState(false, items), 2);
  closure_0 = tmp2;
  const items1 = [tmp[1]];
  const obj2 = {};
  const callback = noop.useCallback((arg0) => closure_0(arg0, true), items1);
  const merged = Object.assign(channelId);
  obj2.isPressed = tmp[0];
  obj2.setIsPressed = callback;
  return <closure_7 />;
}));
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

export const getMessagesItemChannelSizes = function getMessagesItemChannelSizes(fontScale) {
  const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const scaleTextLineHeightResult1 = useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale);
  const PX_16 = nativeDefault.space.PX_16;
  const PX_32 = nativeDefault.space.PX_32;
  const obj3 = { avatar: PX_32, height: null, label: null, labelSecondary: null, padding: null };
  const sum = Math.max(PX_32, scaleTextLineHeightResult + scaleTextLineHeightResult1) + PX_16;
  obj3.height = sum + MessagesItemChannelBase.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
  obj3.label = scaleTextLineHeightResult;
  obj3.labelSecondary = scaleTextLineHeightResult1;
  obj3.padding = PX_16;
  return obj3;
};
export const MessagesItemChannelFast = memoResult;
export const MessagesItemChannelFlash = memoResult1;
export const MessagesItemChannelLegend = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  [tmp3, tmp4] = _mod16007.useRecyclingState(false);
  if (cResult[0] === tmp3) {
    if (cResult[1] === arg0) {
      if (cResult[2] === tmp4) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.isPressed = tmp3;
  obj3.setIsPressed = tmp4;
  const tmp7 = <closure_7 />;
  cResult[0] = tmp3;
  cResult[1] = arg0;
  cResult[2] = tmp4;
  cResult[3] = tmp7;
  tmp5 = tmp7;
}) : ((arg0) => {
  const obj2 = {};
  [tmp2, tmp3] = _mod16007.useRecyclingState(false);
  const merged = Object.assign(arg0);
  obj2.isPressed = tmp2;
  obj2.setIsPressed = tmp3;
  return <closure_7 />;
}));