// === Module 4060: zustandStore ===

// Module 4060 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ keyboard: null, state: require(4063) /* PortalKeyboardState */.PortalKeyboardState.EMPTY, renderers: [] }));
const result = require("v1").fileFinishedImporting("modules/keyboard/native/PortalKeyboardUIStore.native.tsx");

export const PortalKeyboardUIStore = { getField: zustandStore.getField, useField: zustandStore.useField };
export const isPortalKeyboardOpenForChannel = function isPortalKeyboardOpenForChannel(arg0) {
  let keyboard;
  let state;
  state = zustandStore.getState();
  ({ state, keyboard } = state);
  let channelId;
  if (keyboard != null) {
    channelId = keyboard.channelId;
  }
  let tmp3 = channelId === arg0;
  if (tmp3) {
    tmp3 = state === require(4063) /* PortalKeyboardState */.PortalKeyboardState.REQUEST_OPEN || state === require(4063) /* PortalKeyboardState */.PortalKeyboardState.OPENING || state === require(4063) /* PortalKeyboardState */.PortalKeyboardState.OPEN;
    const tmp6 = state === require(4063) /* PortalKeyboardState */.PortalKeyboardState.REQUEST_OPEN || state === require(4063) /* PortalKeyboardState */.PortalKeyboardState.OPENING || state === require(4063) /* PortalKeyboardState */.PortalKeyboardState.OPEN;
  }
  return tmp3;
};
export const openPortalKeyboard = function openPortalKeyboard(type, closure_0, arg2) {
  let keyboard;
  let state;
  let obj = zustandStore;
  state = zustandStore.getState();
  ({ state, keyboard } = state);
  type = undefined;
  if (keyboard != null) {
    type = keyboard.type;
  }
  let tmp3 = type === type;
  if (tmp3) {
    let channelId;
    if (keyboard != null) {
      channelId = keyboard.channelId;
    }
    tmp3 = channelId === closure_0;
  }
  if (tmp3) {
    tmp3 = tmp7;
  }
  if (!tmp3) {
    obj = { keyboard: null, state: null };
    obj = { id: null, type: null, channelId: null, chatInputRef: null };
    obj[0] = tmp5(514).v4();
    obj[1] = type;
    obj[2] = closure_0;
    obj[3] = arg2;
    obj[0] = obj;
    obj[1] = tmp5(4063).PortalKeyboardState.REQUEST_OPEN;
    obj.setState(obj);
    const tmp5Result = tmp5(514);
  }
};
export const registerPortalKeyboardRenderer = function registerPortalKeyboardRenderer(id) {
  let closure_0 = id;
  zustandStore.setState((renderers) => {
    renderers = renderers.renderers;
    let tmp2 = renderers;
    if (!renderers.includes(closure_0)) {
      const obj = { renderers: null };
      const items = [];
      items[HermesBuiltin.arraySpread(renderers.renderers, 0)] = closure_0;
      obj[0] = items;
      tmp2 = obj;
    }
    return tmp2;
  });
  return () => {
    outer1_2.setState((renderers) => {
      renderers = renderers.renderers;
      return { renderers: renderers.filter((arg0) => arg0 !== closure_0) };
    });
  };
};
export const handlePortalKeyboardOpen = function handlePortalKeyboardOpen(id) {
  let closure_0 = id;
  zustandStore.setState((keyboard) => {
    let tmp = keyboard;
    if (null != keyboard.keyboard) {
      tmp = keyboard;
      if (keyboard.keyboard.handlerId !== id) {
        let obj = { keyboard: null, state: null };
        obj = {};
        const merged = Object.assign(keyboard.keyboard);
        obj.handlerId = tmp2;
        obj[0] = obj;
        obj[1] = id(outer1_1[1]).PortalKeyboardState.OPEN;
        tmp = obj;
      }
    }
    return tmp;
  });
};
export const closePortalKeyboard = function closePortalKeyboard() {
  zustandStore.setState({ state: require(4063) /* PortalKeyboardState */.PortalKeyboardState.CLOSED, keyboard: null });
};
export const closePortalKeyboardIfUnhandled = function closePortalKeyboardIfUnhandled() {
  let obj = zustandStore;
  const state = zustandStore.getState();
  const keyboard = state.keyboard;
  let tmp3 = null == keyboard;
  if (tmp3) {
    tmp3 = tmp2 === require(4063) /* PortalKeyboardState */.PortalKeyboardState.CLOSED;
  }
  if (!tmp3) {
    let handlerId;
    if (keyboard != null) {
      handlerId = keyboard.handlerId;
    }
    if (null == handlerId) {
      obj = { state: null, keyboard: null };
      obj[0] = require(4063) /* PortalKeyboardState */.PortalKeyboardState.CLOSED;
      obj.setState(obj);
    }
  }
};
export const closePortalKeyboardRequest = function closePortalKeyboardRequest() {
  let obj = zustandStore;
  const field = zustandStore.getField("state");
  if (tmp4) {
    obj = { state: null };
    obj[0] = tmp2(4063).PortalKeyboardState.REQUEST_CLOSE;
    obj.setState(obj);
  }
};