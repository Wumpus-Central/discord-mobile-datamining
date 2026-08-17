// discord_app/modules/routing/router_utils.tsx
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import set2 from "set" /* 1234 */;
import ME from "ME" /* 676 */;
import _extends from "_extends" /* 1223 */;

function transitionTo(ME, closure_1) {
  closure_0 = ME;
  let tmp = typeof ME !== "string";
  if (typeof ME === "string") {
    tmp = !items.some((arg0) => ME.startsWith(arg0));
  }
  let flag = !tmp;
  if (!tmp) {
    const _HermesInternal = HermesInternal;
    logger.log("" + "assign" + " - route to external path " + ME);
    const _window = window;
    const _Event = Event;
    const event = new Event("beforeunload");
    window.dispatchEvent(event);
    const _window2 = window;
    const _location = window.location;
    let obj = _location.assign(ME);
    flag = true;
  }
  if (!flag) {
    const _HermesInternal2 = HermesInternal;
    logger.log("transitionTo - Transitioning to " + ME);
    let source;
    if (closure_1 != null) {
      source = closure_1.source;
    }
    let sourceLocationStack;
    if (closure_1 != null) {
      sourceLocationStack = closure_1.sourceLocationStack;
    }
    if (null == closure_1) {
      _extends.push(ME);
    } else {
      const _URL = URL;
      const _window3 = window;
      const _HermesInternal3 = HermesInternal;
      const uRL = new URL(ME, "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
      obj = { pathname: null, search: null, hash: null };
      ({ pathname: obj[0], search: obj[1], hash: obj[2] } = uRL);
      const merged = Object.assign(closure_1);
      _extends.push(obj);
    }
  }
}
({ Routes: c5, PageAnalyticsLocations: closure_6, ComponentActions: error } = ME);
let closure_8 = new timestampDefault("Routing/Utils");
const items = [ME.RelativeMarketingURLs.DEVELOPER_PORTAL];
_extends = _extends.createMemoryHistory();
let closure_10 = _extends.listen((arg0, arg1) => {
  if ("REPLACE" !== arg1) {
    callback();
  }
});
const tmp3 = new timestampDefault("Routing/Utils");
const result = set.fileFinishedImporting("modules/routing/router_utils.tsx");

export const shouldNavigate = function shouldNavigate() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  return !ComponentDispatch.hasSubscribers(constants2.MODAL_CLOSE);
};
export { transitionTo };
export const transitionToGuild = function transitionToGuild(guildId, channelId, messageId, closure_1) {
  logger.log("transitionToGuild - Transitioning to " + JSON.stringify({ guildId, channelId, messageId }));
  transitionTo(closure_5.CHANNEL(guildId, channelId, messageId), closure_1);
};
export const currentRouteHasBackNavigation = function currentRouteHasBackNavigation() {
  let hasItem = null != closure_3;
  if (hasItem) {
    const ChannelBackNavigationSources = set2.ChannelBackNavigationSources;
    hasItem = ChannelBackNavigationSources.has(closure_3);
  }
  return hasItem;
};
export const replaceWith = function replaceWith(ME, state) {
  closure_0 = ME;
  let tmp = typeof ME !== "string";
  if (typeof ME === "string") {
    tmp = !items.some((arg0) => ME.startsWith(arg0));
  }
  let flag = !tmp;
  if (!tmp) {
    const _HermesInternal = HermesInternal;
    logger.log("" + "replace" + " - route to external path " + ME);
    const _window = window;
    const _Event = Event;
    const event = new Event("beforeunload");
    window.dispatchEvent(event);
    const _window2 = window;
    const replaced = window.location.replace(ME);
    flag = true;
    const str5 = window.location;
  }
  if (!flag) {
    const _HermesInternal2 = HermesInternal;
    logger.log("Replacing route with " + ME);
    if (typeof ME === "string") {
      const replaced1 = _extends.replace(ME, state);
    } else {
      const replaced2 = _extends.replace(ME);
    }
    closure_3 = arg2;
  }
};
export function getHistory() {
  return _extends;
}
export function getLastRouteChangeSource() {
  return closure_3;
}
export function getLastRouteChangeSourceLocationStack() {
  return closure_4;
}
export const isValidFingerprintRoute = function isValidFingerprintRoute(arg0) {
  return true;
};
export const getFingerprintLocation = function getFingerprintLocation(arg0) {
  let ACCOUNT_REVERT = arg0;
  if (null == arg0) {
    let str = _extends.location.pathname;
    if (str == null) {
      str = "";
    }
    ACCOUNT_REVERT = str;
  }
  if (ACCOUNT_REVERT.startsWith(closure_5.LOGIN)) {
    ACCOUNT_REVERT = constants.LOGIN;
  } else if (ACCOUNT_REVERT.startsWith(obj.REGISTER)) {
    ACCOUNT_REVERT = constants.REGISTER;
  } else if (ACCOUNT_REVERT.startsWith(obj.INVITE(""))) {
    ACCOUNT_REVERT = constants.INVITE;
  } else if (ACCOUNT_REVERT.startsWith(obj.VERIFY)) {
    ACCOUNT_REVERT = constants.VERIFY;
  } else if (ACCOUNT_REVERT.startsWith(obj.DISABLE_EMAIL_NOTIFICATIONS)) {
    ACCOUNT_REVERT = constants.DISABLE_EMAIL_NOTIFICATIONS;
  } else if (ACCOUNT_REVERT.startsWith(obj.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) {
    ACCOUNT_REVERT = constants.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
  } else if (ACCOUNT_REVERT.startsWith(obj.REJECT_IP)) {
    ACCOUNT_REVERT = constants.REJECT_IP;
  } else if (ACCOUNT_REVERT.startsWith(obj.REJECT_MFA)) {
    ACCOUNT_REVERT = constants.REJECT_MFA;
  } else if (ACCOUNT_REVERT.startsWith(obj.AUTHORIZE_IP)) {
    ACCOUNT_REVERT = constants.AUTHORIZE_IP;
  } else if (ACCOUNT_REVERT.startsWith(obj.AUTHORIZE_PAYMENT)) {
    ACCOUNT_REVERT = constants.AUTHORIZE_PAYMENT;
  } else if (ACCOUNT_REVERT.startsWith(obj.RESET)) {
    ACCOUNT_REVERT = constants.RESET;
  } else if (ACCOUNT_REVERT.startsWith(obj.REPORT)) {
    ACCOUNT_REVERT = constants.REPORT;
  } else if (ACCOUNT_REVERT.startsWith(obj.REPORT_SECOND_LOOK)) {
    ACCOUNT_REVERT = constants.REPORT_SECOND_LOOK;
  } else if (ACCOUNT_REVERT.startsWith(obj.ACCOUNT_REVERT(""))) {
    ACCOUNT_REVERT = constants.ACCOUNT_REVERT;
  }
  return ACCOUNT_REVERT;
};
export function hasNavigated() {
  return false;
}
export const back = function back() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  if (!hasSubscribersResult) {
    c3 = null;
    _extends.goBack();
  }
};
export const forward = function forward() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  if (!hasSubscribersResult) {
    c3 = null;
    _extends.goForward();
  }
};