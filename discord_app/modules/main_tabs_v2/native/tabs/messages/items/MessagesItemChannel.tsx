// === Module 15957: MessagesItemChannel ===

// Module 15957 (MessagesItemChannel)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8371 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10723 */;
import MessagesItemChannelBase from "MessagesItemChannelBase" /* 15958 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 15967 */;
import LegendList from "LegendList" /* 15968 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MessagesItemChannelBaseDefault = MessagesItemChannelBase;
let channelId;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let isPressed;
  let placeholderHeight;
  let row;
  let setIsPressed;
  let tmp6;
  let tmp8;
  const obj = channelId(576);
  const cResult = obj.c(11);
  const tmp = channelId;
  channelId = channelId.channelId;
  ({ placeholderHeight, row, isPressed, setIsPressed } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let isPrivateResult;
  if (stateFromStores != null) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === isPressed) {
        if (cResult[5] === placeholderHeight) {
          let tmp12;
          if (cResult[6] === setIsPressed) {
            tmp12 = cResult[7];
          }
          tmp8 = tmp12;
        }
      }
    }
    const tmp15 = jsx(MessagesItemChannelBaseDefault, { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed });
    cResult[3] = stateFromStores;
    cResult[4] = isPressed;
    cResult[5] = placeholderHeight;
    cResult[6] = setIsPressed;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  } else {
    if (cResult[8] === placeholderHeight) {
      if (cResult[9] === row) {
        tmp8 = cResult[10];
      }
    }
    const tmp11 = jsx(MessagesItemPlaceholderDefault, { height: placeholderHeight, row });
    cResult[8] = placeholderHeight;
    cResult[9] = row;
    cResult[10] = tmp11;
    tmp8 = tmp11;
  }
  return tmp8;
}) : ((arg0) => {
  let isPressed;
  let placeholderHeight;
  let row;
  let setIsPressed;
  let tmp5;
  ({ channelId: require, placeholderHeight } = arg0);
  ({ row, isPressed, setIsPressed } = arg0);
  const items = [ChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let isPrivateResult;
  if (stateFromStores != null) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    tmp5 = jsx(MessagesItemChannelBaseDefault, { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed });
  } else {
    tmp5 = jsx(MessagesItemPlaceholderDefault, { height: placeholderHeight, row });
  }
  return tmp5;
}));
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(3);
  [tmp3, tmp4] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === tmp3) {
    let tmp5;
    if (cResult[1] === arg0) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const merged = Object.assign(arg0);
  const tmp7 = <closure_7 isPressed={tmp3} setIsPressed={tmp4} />;
  cResult[0] = tmp3;
  cResult[1] = arg0;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : ((arg0) => {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const merged = Object.assign(arg0);
  return <closure_7 isPressed={tmp2} setIsPressed={tmp3} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo3 = react.memo;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== channelId.channelId) {
    const items = [channelId.channelId];
    cResult[0] = channelId.channelId;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = defaultMVCPConfig;
  [tmp6, tmp7] = tmpResult.useRecyclingState(false, tmp4);
  let closure_0 = tmp7;
  _slicedToArray(tmpResult.useRecyclingState(false, tmp4), 2);
  if (cResult[2] !== tmp7) {
    const fn = function o(arg0) {
      return tmp7(arg0, true);
    };
    cResult[2] = tmp7;
    cResult[3] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp6) {
    if (cResult[5] === channelId) {
      let tmp9;
      if (cResult[6] === tmp8) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const merged = Object.assign(channelId);
  const tmp11 = <closure_7 isPressed={tmp6} setIsPressed={tmp8} />;
  cResult[4] = tmp6;
  cResult[5] = channelId;
  cResult[6] = tmp8;
  cResult[7] = tmp11;
  tmp9 = tmp11;
}) : ((channelId) => {
  const items = [channelId.channelId];
  const obj = defaultMVCPConfig;
  const tmp = _slicedToArray(obj.useRecyclingState(false, items), 2);
  let closure_0 = tmp3;
  const items1 = [tmp[1]];
  const first = tmp[0];
  const callback = react.useCallback((arg0) => closure_0(arg0, true), items1);
  const merged = Object.assign(channelId);
  return <closure_7 isPressed={first} setIsPressed={callback} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = LegendList;
  [tmp3, tmp4] = obj2.useRecyclingState(false);
  _slicedToArray(obj2.useRecyclingState(false), 2);
  if (cResult[0] === tmp3) {
    if (cResult[1] === arg0) {
      let tmp5;
      if (cResult[2] === tmp4) {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const merged = Object.assign(arg0);
  const tmp7 = <closure_7 isPressed={tmp3} setIsPressed={tmp4} />;
  cResult[0] = tmp3;
  cResult[1] = arg0;
  cResult[2] = tmp4;
  cResult[3] = tmp7;
  tmp5 = tmp7;
}) : ((arg0) => {
  let tmp2;
  let tmp3;
  const obj = LegendList;
  [tmp2, tmp3] = obj.useRecyclingState(false);
  _slicedToArray(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  return <closure_7 isPressed={tmp2} setIsPressed={tmp3} />;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

export const getMessagesItemChannelSizes = function getMessagesItemChannelSizes(fontScale) {
  let sum;
  const obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const obj2 = useScaledTextLineHeight;
  const scaleTextLineHeightResult1 = obj2.scaleTextLineHeight("text-xs/medium", fontScale);
  const PX_16 = nativeDefault.space.PX_16;
  const PX_32 = nativeDefault.space.PX_32;
  const obj3 = { avatar: PX_32, height: sum + MessagesItemChannelBase.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING, label: scaleTextLineHeightResult, labelSecondary: scaleTextLineHeightResult1, padding: PX_16 };
  sum = Math.max(PX_32, scaleTextLineHeightResult + scaleTextLineHeightResult1) + PX_16;
  return obj3;
};
export const MessagesItemChannelFast = memoResult;
export const MessagesItemChannelFlash = memo2Result;
export const MessagesItemChannelLegend = memo3Result;