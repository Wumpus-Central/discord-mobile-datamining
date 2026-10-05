// discord_app/modules/keyboard/native/PortalKeyboardUIStore.native.tsx
import v1 from "../../../../_runtime/01266_v1.js";
import ZustandStore from "../../../lib/ZustandStore.tsx";
import PortalKeyboard from "PortalKeyboard.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let renderers;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { keyboard: null, state: PortalKeyboard.PortalKeyboardState.EMPTY, renderers: [] };
  return obj;
});
let obj = { getField: zustandStore.getField, useField: zustandStore.useField };
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardUIStore.native.tsx");

export const PortalKeyboardUIStore = obj;
export const isPortalKeyboardOpenForChannel = function isPortalKeyboardOpenForChannel(arg0) {
  let keyboard;
  let state;
  const state1 = zustandStore.getState();
  ({ state, keyboard } = state1);
  let channelId;
  if (keyboard != null) {
    channelId = keyboard.channelId;
  }
  let tmp3 = channelId === arg0;
  if (tmp3) {
    tmp3 =
      state === PortalKeyboard.PortalKeyboardState.REQUEST_OPEN ||
      state === PortalKeyboard.PortalKeyboardState.OPENING ||
      state === PortalKeyboard.PortalKeyboardState.OPEN;
    state === PortalKeyboard.PortalKeyboardState.REQUEST_OPEN ||
      state === PortalKeyboard.PortalKeyboardState.OPENING ||
      state === PortalKeyboard.PortalKeyboardState.OPEN;
  }
  return tmp3;
};
export const openPortalKeyboard = function openPortalKeyboard(type, channelId, chatInputRef) {
  let keyboard;
  let obj2;
  let state;
  let tmp6Result;
  const state1 = zustandStore.getState();
  ({ state, keyboard } = state1);
  type = undefined;
  if (keyboard != null) {
    type = keyboard.type;
  }
  let tmp4 = type === type;
  if (tmp4) {
    channelId = undefined;
    if (keyboard != null) {
      channelId = keyboard.channelId;
    }
    tmp4 = channelId === channelId;
  }
  const tmp8 =
    state === PortalKeyboard.PortalKeyboardState.REQUEST_OPEN ||
    state === PortalKeyboard.PortalKeyboardState.OPENING ||
    state === PortalKeyboard.PortalKeyboardState.OPEN;
  if (tmp4) {
    tmp4 = tmp8;
  }
  if (!tmp4) {
    const obj = { keyboard: obj2, state: PortalKeyboard.PortalKeyboardState.REQUEST_OPEN };
    const setState = zustandStore.setState;
    obj2 = { id: tmp6Result.v4(), type, channelId, chatInputRef };
    tmp6Result = v1;
    setState(obj);
  }
};
export const registerPortalKeyboardRenderer = function registerPortalKeyboardRenderer(id) {
  let closure_0 = id;
  zustandStore.setState((renderers) => {
    let items;
    renderers = renderers.renderers;
    let tmp3 = renderers;
    if (!renderers.includes(id)) {
      const obj = { renderers: items };
      items = [];
      items[HermesBuiltin.arraySpread(items, renderers.renderers, 0)] = id;
      tmp3 = obj;
    }
    return tmp3;
  });
  return () => {
    zustandStore.setState((renderers) => {
      const obj = { renderers: renderers.filter((item) => item !== closure_1_0) };
      renderers = renderers.renderers;
      return obj;
    });
  };
};
export const handlePortalKeyboardOpen = function handlePortalKeyboardOpen(id) {
  let closure_0 = id;
  zustandStore.setState((keyboard) => {
    let obj2;
    let tmp = keyboard;
    if (null != keyboard.keyboard) {
      tmp = keyboard;
      if (keyboard.keyboard.handlerId !== id) {
        const obj = { keyboard: obj2, state: PortalKeyboard.PortalKeyboardState.OPEN };
        obj2 = { handlerId: tmp2 };
        const merged = Object.assign(keyboard.keyboard);
        tmp = obj;
      }
    }
    return tmp;
  });
};
export const closePortalKeyboard = function closePortalKeyboard() {
  const obj = { state: PortalKeyboard.PortalKeyboardState.CLOSED, keyboard: null };
  zustandStore.setState(obj);
};
export const closePortalKeyboardIfUnhandled = function closePortalKeyboardIfUnhandled() {
  const state = zustandStore.getState();
  const keyboard = state.keyboard;
  const tmp4 = null == keyboard && tmp3 === PortalKeyboard.PortalKeyboardState.CLOSED;
  if (!tmp4) {
    let handlerId;
    if (keyboard != null) {
      handlerId = keyboard.handlerId;
    }
    if (null == handlerId) {
      const setState = zustandStore.setState;
      const obj = { state: PortalKeyboard.PortalKeyboardState.CLOSED, keyboard: null };
      setState(obj);
    }
  }
};
export const closePortalKeyboardRequest = function closePortalKeyboardRequest() {
  const field = zustandStore.getField("state");
  const tmp5 =
    field !== PortalKeyboard.PortalKeyboardState.CLOSED && field !== PortalKeyboard.PortalKeyboardState.REQUEST_CLOSE;
  if (tmp5) {
    const setState = zustandStore.setState;
    const obj = { state: PortalKeyboard.PortalKeyboardState.REQUEST_CLOSE };
    setState(obj);
  }
};
