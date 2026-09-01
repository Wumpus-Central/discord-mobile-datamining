// discord_common/js/shared/DevtoolsExtension.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("../discord_common/js/shared/DevtoolsExtension.tsx");

export const logFluxAction = function logFluxAction(description, durationMs) {
  let __DISCORD_DEVTOOLS = null;
  if (typeof window !== "undefined") {
    const _window = window;
    __DISCORD_DEVTOOLS = window.__DISCORD_DEVTOOLS;
  }
  if (__DISCORD_DEVTOOLS != null) {
    const reportEvent = __DISCORD_DEVTOOLS.reportEvent;
    if (reportEvent != null) {
      reportEvent(obj);
    }
  }
};
export const reportEvent = function reportEvent(arg0) {
  let __DISCORD_DEVTOOLS = null;
  if (typeof window !== "undefined") {
    const _window = window;
    __DISCORD_DEVTOOLS = window.__DISCORD_DEVTOOLS;
  }
  if (__DISCORD_DEVTOOLS != null) {
    const reportEvent = __DISCORD_DEVTOOLS.reportEvent;
    if (reportEvent != null) {
      reportEvent(arg0);
    }
  }
};
export const notifyStoreCreated = function notifyStoreCreated(arg0) {
  let __DISCORD_DEVTOOLS = null;
  if (typeof window !== "undefined") {
    const _window = window;
    __DISCORD_DEVTOOLS = window.__DISCORD_DEVTOOLS;
  }
  if (__DISCORD_DEVTOOLS != null) {
    const notifyStoreCreated = __DISCORD_DEVTOOLS.notifyStoreCreated;
    if (notifyStoreCreated != null) {
      const obj = { storeName: null };
      obj[0] = arg0;
      notifyStoreCreated(obj);
    }
  }
};
export const notifyStoreChange = function notifyStoreChange(arg0) {
  let __DISCORD_DEVTOOLS = null;
  if (typeof window !== "undefined") {
    const _window = window;
    __DISCORD_DEVTOOLS = window.__DISCORD_DEVTOOLS;
  }
  if (__DISCORD_DEVTOOLS != null) {
    const notifyStoreChange = __DISCORD_DEVTOOLS.notifyStoreChange;
    if (notifyStoreChange != null) {
      const obj = { storeName: null };
      obj[0] = arg0;
      notifyStoreChange(obj);
    }
  }
};
