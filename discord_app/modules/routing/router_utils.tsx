// === Module 1100: router_utils ===

// Module 1100 (router_utils)
import LoggerDefault from "Logger" /* 3 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import RoutingSources from "RoutingSources" /* 1112 */;
import Constants from "Constants" /* 1074 */;
import _extends from "module_1101" /* 1101 */;
import size from "module_2" /* 2 */;

function transitionTo(CHANNELResult, guildScheduledEvent1) {
  closure_0 = CHANNELResult;
  let tmp = typeof CHANNELResult !== "string";
  if (typeof CHANNELResult === "string") {
    tmp = !items.some((item) => ME.startsWith(item));
  }
  let flag = !tmp;
  if (!tmp) {
    const _HermesInternal = HermesInternal;
    logger.log("" + "assign" + " - route to external path " + CHANNELResult);
    const _window = window;
    const _Event = Event;
    const event = new Event("beforeunload");
    window.dispatchEvent(event);
    const _window2 = window;
    const _location = window.location;
    let obj = _location.assign(CHANNELResult);
    flag = true;
  }
  if (!flag) {
    const _URL = URL;
    const _window3 = window;
    const _HermesInternal2 = HermesInternal;
    const uRL = new URL(CHANNELResult, "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
    obj = { pathname: null, search: null, hash: null };
    ({ pathname: obj.pathname, search: obj.search, hash: obj.hash } = uRL);
    const merged = Object.assign(guildScheduledEvent1);
    const _HermesInternal3 = HermesInternal;
    logger.log("transitionTo - Transitioning to " + CHANNELResult);
    if (guildScheduledEvent1 != null) {
      const source = guildScheduledEvent1.source;
    }
    if (guildScheduledEvent1 != null) {
      sourceLocationStack = guildScheduledEvent1.sourceLocationStack;
    }
    const _location2 = _extends.location;
    let tmp24 = _location2.pathname === obj.pathname;
    if (tmp24) {
      const search = obj.search;
      let str9 = "";
      if (null != search) {
        str9 = "";
        if ("" !== search) {
          str9 = "";
          if (search !== "?") {
            let text = search;
            if (!search.startsWith("?")) {
              text = `?${search}`;
            }
            str9 = text;
          }
        }
      }
      tmp24 = _location2.search === str9;
    }
    if (tmp24) {
      const hash = obj.hash;
      let str12 = "";
      if (null != hash) {
        str12 = "";
        if ("" !== hash) {
          str12 = "";
          if (hash !== "#") {
            let text1 = hash;
            if (!hash.startsWith("#")) {
              text1 = `#${hash}`;
            }
            str12 = text1;
          }
        }
      }
      tmp24 = _location2.hash === str12;
    }
    if (tmp24) {
      const replaced = _extends.replace(obj);
      c3 = source;
    } else if (null != guildScheduledEvent1) {
      _extends.push(obj);
    }
    _extends.push(CHANNELResult);
  }
}
({ Routes: hasOwnProperty, PageAnalyticsLocations: metroRequire, ComponentActions: closure_7 } = Constants);
const logger = new LoggerDefault("Routing/Utils");
const items = [Constants.RelativeMarketingURLs.DEVELOPER_PORTAL];
_extends = _extends.createMemoryHistory();
let closure_10 = _extends.listen((arg0, arg1) => {
  if ("REPLACE" !== arg1) {
    closure_10();
  }
});
const result = size.fileFinishedImporting("modules/routing/router_utils.tsx");

export const shouldNavigate = function shouldNavigate() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  return !ComponentDispatch.hasSubscribers(constants2.MODAL_CLOSE);
};
export { transitionTo };
export const transitionToGuild = function transitionToGuild(guildId, channelId, messageId, guildScheduledEvent1) {
  logger.log("transitionToGuild - Transitioning to " + JSON.stringify({ guildId, channelId, messageId }));
  transitionTo(hasOwnProperty.CHANNEL(guildId, channelId, messageId), guildScheduledEvent1);
};
export const currentRouteHasBackNavigation = function currentRouteHasBackNavigation() {
  let hasItem = null != c3;
  if (hasItem) {
    const ChannelBackNavigationSources = RoutingSources.ChannelBackNavigationSources;
    hasItem = ChannelBackNavigationSources.has(c3);
  }
  return hasItem;
};
export const replaceWith = function replaceWith(ME, state, arg2) {
  let tmp = typeof ME !== "string";
  if (typeof ME === "string") {
    tmp = !items.some((item) => ME.startsWith(item));
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
    c3 = arg2;
  }
};
export function getHistory() {
  return _extends;
}
export function getLastRouteChangeSource() {
  return c3;
}
export function getLastRouteChangeSourceLocationStack() {
  return sourceLocationStack;
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
  if (ACCOUNT_REVERT.startsWith(hasOwnProperty.LOGIN)) {
    ACCOUNT_REVERT = constants.LOGIN;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REGISTER)) {
    ACCOUNT_REVERT = constants.REGISTER;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.INVITE(""))) {
    ACCOUNT_REVERT = constants.INVITE;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.VERIFY)) {
    ACCOUNT_REVERT = constants.VERIFY;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.DISABLE_EMAIL_NOTIFICATIONS)) {
    ACCOUNT_REVERT = constants.DISABLE_EMAIL_NOTIFICATIONS;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) {
    ACCOUNT_REVERT = constants.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REJECT_IP)) {
    ACCOUNT_REVERT = constants.REJECT_IP;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REJECT_MFA)) {
    ACCOUNT_REVERT = constants.REJECT_MFA;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.AUTHORIZE_IP)) {
    ACCOUNT_REVERT = constants.AUTHORIZE_IP;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.AUTHORIZE_PAYMENT)) {
    ACCOUNT_REVERT = constants.AUTHORIZE_PAYMENT;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.RESET)) {
    ACCOUNT_REVERT = constants.RESET;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REPORT)) {
    ACCOUNT_REVERT = constants.REPORT;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REPORT_SECOND_LOOK)) {
    ACCOUNT_REVERT = constants.REPORT_SECOND_LOOK;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.ACCOUNT_REVERT(""))) {
    ACCOUNT_REVERT = constants.ACCOUNT_REVERT;
  }
  return ACCOUNT_REVERT;
};
export function hasNavigated() {
  return false;
}
export const back = function back() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  if (!hasSubscribersResult) {
    c3 = null;
    _extends.goBack();
  }
  hasSubscribersResult = ComponentDispatch.hasSubscribers(constants2.MODAL_CLOSE);
};
export const forward = function forward() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  if (!hasSubscribersResult) {
    c3 = null;
    _extends.goForward();
  }
  hasSubscribersResult = ComponentDispatch.hasSubscribers(constants2.MODAL_CLOSE);
};