// === Module 4428: PortalKeyboardUIStore ===

// Module 4428 (PortalKeyboardUIStore)
import ZustandStore from "ZustandStore" /* 4429 */;
import PortalKeyboard from "PortalKeyboard" /* 4431 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ keyboard: null, state: PortalKeyboard.PortalKeyboardState.EMPTY, renderers: [] }));
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardUIStore.native.tsx");

export const PortalKeyboardUIStore = { getField: zustandStore.getField, useField: zustandStore.useField };
export const isPortalKeyboardOpenForChannel = function isPortalKeyboardOpenForChannel(arg0) {
  state = zustandStore.getState();
  ({ state, keyboard } = state);
  let channelId;
  if (keyboard != null) {
    channelId = keyboard.channelId;
  }
  let tmp3 = channelId === arg0;
  if (tmp3) {
    tmp3 = state === PortalKeyboard.PortalKeyboardState.REQUEST_OPEN || state === PortalKeyboard.PortalKeyboardState.OPENING || state === PortalKeyboard.PortalKeyboardState.OPEN;
    const tmp6 = state === PortalKeyboard.PortalKeyboardState.REQUEST_OPEN || state === PortalKeyboard.PortalKeyboardState.OPENING || state === PortalKeyboard.PortalKeyboardState.OPEN;
  }
  return tmp3;
};
export const openPortalKeyboard = function openPortalKeyboard(type, channelId, chatInputRef) {
  let obj = zustandStore;
  state = zustandStore.getState();
  ({ state, keyboard } = state);
  type = undefined;
  if (keyboard != null) {
    type = keyboard.type;
  }
  let tmp3 = type === type;
  if (tmp3) {
    channelId = undefined;
    if (keyboard != null) {
      channelId = keyboard.channelId;
    }
    tmp3 = channelId === channelId;
  }
  if (tmp3) {
    tmp3 = tmp7;
  }
  if (!tmp3) {
    obj = { keyboard: null, state: null };
    obj = { id: tmp5(1256).v4(), type, channelId, chatInputRef };
    obj.keyboard = obj;
    obj.state = tmp5(4431).PortalKeyboardState.REQUEST_OPEN;
    obj.setState(obj);
    const tmp5Result = tmp5(1256);
  }
};
export const registerPortalKeyboardRenderer = function registerPortalKeyboardRenderer(id) {
  closure_0 = id;
  zustandStore.setState((renderers) => {
    renderers = renderers.renderers;
    let tmp2 = renderers;
    if (!renderers.includes(closure_0)) {
      const obj = { renderers: null };
      const items = [];
      items[HermesBuiltin.arraySpread(renderers.renderers, 0)] = closure_0;
      obj.renderers = items;
      tmp2 = obj;
    }
    return tmp2;
  });
  return () => {
    zustandStore.setState((renderers) => {
      const obj = { renderers: null };
      renderers = renderers.renderers;
      obj.renderers = renderers.filter((item) => item !== closure_1_0);
      return obj;
    });
  };
};
export const handlePortalKeyboardOpen = function handlePortalKeyboardOpen(id) {
  closure_0 = id;
  zustandStore.setState((keyboard) => {
    let tmp = keyboard;
    if (null != keyboard.keyboard) {
      tmp = keyboard;
      if (keyboard.keyboard.handlerId !== closure_0) {
        let obj = { keyboard: null, state: null };
        obj = {};
        const merged = Object.assign(keyboard.keyboard);
        obj.handlerId = tmp2;
        obj.keyboard = obj;
        obj.state = PortalKeyboard.PortalKeyboardState.OPEN;
        tmp = obj;
      }
    }
    return tmp;
  });
};
export const closePortalKeyboard = function closePortalKeyboard() {
  zustandStore.setState({ state: PortalKeyboard.PortalKeyboardState.CLOSED, keyboard: null });
};
export const closePortalKeyboardIfUnhandled = function closePortalKeyboardIfUnhandled() {
  let obj = zustandStore;
  const state = zustandStore.getState();
  const keyboard = state.keyboard;
  let tmp3 = null == keyboard;
  if (tmp3) {
    tmp3 = tmp2 === PortalKeyboard.PortalKeyboardState.CLOSED;
  }
  if (!tmp3) {
    let handlerId;
    if (keyboard != null) {
      handlerId = keyboard.handlerId;
    }
    if (null == handlerId) {
      obj = { state: PortalKeyboard.PortalKeyboardState.CLOSED, keyboard: null };
      obj.setState(obj);
    }
  }
};
export const closePortalKeyboardRequest = function closePortalKeyboardRequest() {
  let obj = zustandStore;
  const field = zustandStore.getField("state");
  if (tmp4) {
    obj = { state: tmp2(4431).PortalKeyboardState.REQUEST_CLOSE };
    obj.setState(obj);
  }
};