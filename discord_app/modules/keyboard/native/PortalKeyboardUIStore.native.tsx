// discord_app/modules/keyboard/native/PortalKeyboardUIStore.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import v1 from "../../../../_runtime/00514_v1.js";
import defaultStatesAreEqual from "../../../lib/ZustandStore.tsx";
import PortalKeyboardState from "PortalKeyboard.tsx";

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ keyboard: null, state: PortalKeyboardState.PortalKeyboardState.EMPTY, renderers: [] }));
const result = obj132.fileFinishedImporting("modules/keyboard/native/PortalKeyboardUIStore.native.tsx");

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
    tmp3 = state === PortalKeyboardState.PortalKeyboardState.REQUEST_OPEN || state === PortalKeyboardState.PortalKeyboardState.OPENING || state === PortalKeyboardState.PortalKeyboardState.OPEN;
  }
  return tmp3;
};
export const openPortalKeyboard = function openPortalKeyboard(type, closure_0, closure_1) {
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
    obj = { id: null, type: null, channelId: null, chatInputRef: null };
    obj[0] = v1.v4();
    obj[1] = type;
    obj[2] = closure_0;
    obj[3] = closure_1;
    obj[0] = obj;
    obj[1] = PortalKeyboardState.PortalKeyboardState.REQUEST_OPEN;
    obj.setState(obj);
    const tmp5Result = v1;
  }
  tmp7 = state === PortalKeyboardState.PortalKeyboardState.REQUEST_OPEN || state === PortalKeyboardState.PortalKeyboardState.OPENING || state === PortalKeyboardState.PortalKeyboardState.OPEN;
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
      obj[0] = items;
      tmp2 = obj;
    }
    return tmp2;
  });
  return () => {
    zustandStore.setState((renderers) => {
      renderers = renderers.renderers;
      return { renderers: renderers.filter((item, index) => item !== closure_0) };
    });
  };
};
export const handlePortalKeyboardOpen = function handlePortalKeyboardOpen(id) {
  closure_0 = id;
  zustandStore.setState((keyboard) => {
    let tmp = keyboard;
    if (null != keyboard.keyboard) {
      tmp = keyboard;
      if (keyboard.keyboard.handlerId !== id) {
        const obj = {};
        const merged = Object.assign(keyboard.keyboard);
        obj.handlerId = tmp2;
        obj[0] = obj;
        obj[1] = id(dependencyMap[1]).PortalKeyboardState.OPEN;
        tmp = obj;
      }
    }
    return tmp;
  });
};
export const closePortalKeyboard = function closePortalKeyboard() {
  zustandStore.setState({ state: PortalKeyboardState.PortalKeyboardState.CLOSED, keyboard: null });
};
export const closePortalKeyboardIfUnhandled = function closePortalKeyboardIfUnhandled() {
  let obj = zustandStore;
  const state = zustandStore.getState();
  const keyboard = state.keyboard;
  let tmp3 = null == keyboard;
  if (tmp3) {
    tmp3 = tmp2 === PortalKeyboardState.PortalKeyboardState.CLOSED;
  }
  if (!tmp3) {
    let handlerId;
    if (keyboard != null) {
      handlerId = keyboard.handlerId;
    }
    if (null == handlerId) {
      obj = { state: null, keyboard: null };
      obj[0] = PortalKeyboardState.PortalKeyboardState.CLOSED;
      obj.setState(obj);
    }
  }
};
export const closePortalKeyboardRequest = function closePortalKeyboardRequest() {
  let obj = zustandStore;
  const field = zustandStore.getField("state");
  if (tmp4) {
    obj = { state: null };
    obj[0] = PortalKeyboardState.PortalKeyboardState.REQUEST_CLOSE;
    obj.setState(obj);
  }
  tmp4 = field !== PortalKeyboardState.PortalKeyboardState.CLOSED && field !== PortalKeyboardState.PortalKeyboardState.REQUEST_CLOSE;
};