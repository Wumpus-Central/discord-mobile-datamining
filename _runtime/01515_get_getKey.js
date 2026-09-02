// _runtime/01515_get_getKey.js
import noopAll from "00019_noop.js";

let c0 =
  "Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.";
const obj = { isDefault: true };
Object.defineProperty(obj, "getKey", {
  get: () => {
    error = new Error(c0);
    throw error;
  },
  set: undefined,
});
Object.defineProperty(obj, "setKey", {
  get: () => {
    error = new Error(c0);
    throw error;
  },
  set: undefined,
});
Object.defineProperty(obj, "getState", {
  get: () => {
    error = new Error(c0);
    throw error;
  },
  set: undefined,
});
Object.defineProperty(obj, "setState", {
  get: () => {
    error = new Error(c0);
    throw error;
  },
  set: undefined,
});
Object.defineProperty(obj, "getIsInitial", {
  get: () => {
    error = new Error(c0);
    throw error;
  },
  set: undefined,
});

export const NavigationStateContext = noopAll.createContext(obj);
