// === Module 1112: router_utils ===

// Module 1112 (router_utils)
import LoggerDefault from "Logger" /* 3 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import RoutingSources from "RoutingSources" /* 1124 */;
import Constants from "Constants" /* 1085 */;
import module_1113_mod from "module_1113" /* 1113 */;
import size from "module_2" /* 2 */;

let c3, sourceLocationStack;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function transitionTo(Routes, source) {
  let closure_0 = Routes;
  let flag = !(typeof Routes !== "string" || !items.some((item) => closure_0.startsWith(item)));
  const tmp = typeof Routes !== "string" || !items.some((item) => closure_0.startsWith(item));
  if (flag) {
    const _HermesInternal = HermesInternal;
    logger.log("" + "assign" + " - route to external path " + Routes);
    const _window = window;
    const _Event = Event;
    const self = this;
    const self2 = this;
    const event = new Event("beforeunload");
    dispatchEvent(event);
    const _window2 = window;
    const _location = window.location;
    _location.assign(Routes);
    flag = true;
  }
  if (!flag) {
    const _URL = URL;
    const _window3 = window;
    const _HermesInternal2 = HermesInternal;
    const self3 = this;
    const self4 = this;
    const uRL = new URL(Routes, "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
    const obj = { pathname: null, search: null, hash: null };
    ({ pathname: obj.pathname, search: obj.search, hash: obj.hash } = uRL);
    const merged = Object.assign(source);
    const _HermesInternal3 = HermesInternal;
    logger.log("transitionTo - Transitioning to " + Routes);
    source = undefined;
    if (source != null) {
      source = source.source;
    }
    sourceLocationStack = undefined;
    if (source != null) {
      sourceLocationStack = source.sourceLocationStack;
    }
    const _location2 = module_1113.location;
    let tmp22 = _location2.pathname === obj.pathname;
    if (tmp22) {
      const search2 = obj.search;
      let str9 = "";
      const search = _location2.search;
      if (null != search2) {
        str9 = "";
        if ("" !== search2) {
          str9 = "";
          if (search2 !== "?") {
            let text = search2;
            if (!search2.startsWith("?")) {
              text = `?${search2}`;
            }
            str9 = text;
          }
        }
      }
      tmp22 = search === str9;
    }
    if (tmp22) {
      const hash2 = obj.hash;
      let str12 = "";
      const hash = _location2.hash;
      if (null != hash2) {
        str12 = "";
        if ("" !== hash2) {
          str12 = "";
          if (hash2 !== "#") {
            let text1 = hash2;
            if (!hash2.startsWith("#")) {
              text1 = `#${hash2}`;
            }
            str12 = text1;
          }
        }
      }
      tmp22 = hash === str12;
    }
    if (tmp22) {
      const replaced = module_1113.replace(obj);
    } else if (null == source) {
      module_1113.push(Routes);
    } else {
      module_1113.push(obj);
    }
    c3 = source;
  }
}
({ Routes: hasOwnProperty, PageAnalyticsLocations: metroRequire, ComponentActions: metroImportDefault } = Constants);
const RelativeMarketingURLs = Constants.RelativeMarketingURLs;
const logger = new LoggerDefault("Routing/Utils");
const items = [RelativeMarketingURLs.DEVELOPER_PORTAL];
const tmp3 = new LoggerDefault("Routing/Utils");
let module_1113 = module_1113_mod;
module_1113 = module_1113.createMemoryHistory();
let closure_10 = module_1113.listen((arg0, arg1) => {
  if ("REPLACE" !== arg1) {
    closure_10();
  }
});
const result = size.fileFinishedImporting("modules/routing/router_utils.tsx");

export const shouldNavigate = function shouldNavigate() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  return !ComponentDispatch.hasSubscribers(metroImportDefault.MODAL_CLOSE);
};
export { transitionTo };
export const transitionToGuild = function transitionToGuild(guildId, channelId, messageId, source) {
  const obj = { guildId, channelId, messageId };
  logger.log("transitionToGuild - Transitioning to " + JSON.stringify(obj));
  transitionTo(hasOwnProperty.CHANNEL(guildId, channelId, messageId), source);
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
  let closure_0 = ME;
  let flag = !(typeof ME !== "string" || !items.some((item) => closure_0.startsWith(item)));
  const tmp = typeof ME !== "string" || !items.some((item) => closure_0.startsWith(item));
  if (flag) {
    const _HermesInternal = HermesInternal;
    logger.log("" + "replace" + " - route to external path " + ME);
    const _window = window;
    const _Event = Event;
    const self = this;
    const self2 = this;
    const event = new Event("beforeunload");
    dispatchEvent(event);
    const _window2 = window;
    const str5 = window.location;
    const replaced = str5.replace(ME);
    flag = true;
  }
  if (!flag) {
    const _HermesInternal2 = HermesInternal;
    logger.log("Replacing route with " + ME);
    if (typeof ME === "string") {
      const replaced1 = module_1113.replace(ME, state);
    } else {
      const replaced2 = module_1113.replace(ME);
    }
    c3 = arg2;
  }
};
export function getHistory() {
  return module_1113;
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
    let str = module_1113.location.pathname;
    if (str == null) {
      str = "";
    }
    ACCOUNT_REVERT = str;
  }
  if (ACCOUNT_REVERT.startsWith(hasOwnProperty.LOGIN)) {
    ACCOUNT_REVERT = metroRequire.LOGIN;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REGISTER)) {
    ACCOUNT_REVERT = metroRequire.REGISTER;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.INVITE(""))) {
    ACCOUNT_REVERT = metroRequire.INVITE;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.VERIFY)) {
    ACCOUNT_REVERT = metroRequire.VERIFY;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.DISABLE_EMAIL_NOTIFICATIONS)) {
    ACCOUNT_REVERT = metroRequire.DISABLE_EMAIL_NOTIFICATIONS;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) {
    ACCOUNT_REVERT = metroRequire.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REJECT_IP)) {
    ACCOUNT_REVERT = metroRequire.REJECT_IP;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REJECT_MFA)) {
    ACCOUNT_REVERT = metroRequire.REJECT_MFA;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.AUTHORIZE_IP)) {
    ACCOUNT_REVERT = metroRequire.AUTHORIZE_IP;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.AUTHORIZE_PAYMENT)) {
    ACCOUNT_REVERT = metroRequire.AUTHORIZE_PAYMENT;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.RESET)) {
    ACCOUNT_REVERT = metroRequire.RESET;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REPORT)) {
    ACCOUNT_REVERT = metroRequire.REPORT;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.REPORT_SECOND_LOOK)) {
    ACCOUNT_REVERT = metroRequire.REPORT_SECOND_LOOK;
  } else if (ACCOUNT_REVERT.startsWith(hasOwnProperty.ACCOUNT_REVERT(""))) {
    ACCOUNT_REVERT = metroRequire.ACCOUNT_REVERT;
  }
  return ACCOUNT_REVERT;
};
export function hasNavigated() {
  return false;
}
export const back = function back() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  const tmp2 = !ComponentDispatch.hasSubscribers(metroImportDefault.MODAL_CLOSE);
  if (tmp2) {
    c3 = null;
    module_1113.goBack();
  }
};
export const forward = function forward() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  const tmp2 = !ComponentDispatch.hasSubscribers(metroImportDefault.MODAL_CLOSE);
  if (tmp2) {
    c3 = null;
    module_1113.goForward();
  }
};