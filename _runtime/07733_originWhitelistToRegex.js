// _runtime/07733_originWhitelistToRegex.js
import noop from "noop";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let c10;
let c3;
let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
let obj1;
let unpackModuleId;
({ useCallback: obj1, useMemo: c3, useRef: c4, useState: c5 } = noop);
({ Linking: closure_6, View: error, ActivityIndicator: metroImportAll, Text: c9, Platform } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let fn = this;
if (this) {
  fn = this.__spreadArray;
}
if (!fn) {
  fn = (arr) => {
    let tmp;
    if (arg2) {
      let num4 = 0;
      if (0 < arg1.length) {
        while (true) {
          let tmp4 = !tmp3;
          let tmp5 = num4;
          let tmp6 = tmp3;
          if (!tmp3) {
            tmp4 = num4 in arg1;
          }
          let tmp7 = tmp3;
          if (!tmp4) {
            let tmp8 = tmp3;
            if (!tmp3) {
              break;
            } else {
              tmp6[num4] = arg1[num4];
              tmp7 = tmp6;
            }
          }
          num4 = num4 + 1;
          tmp3 = tmp7;
          tmp = tmp7;
        }
        const _Array = Array;
        const call = slice.call;
        typeof call === "unknown" ? slice(0, num4) : call(arg1, 0, num4);
      }
    }
    if (tmp) {
      return arr.concat(tmp);
    } else {
      const _Array2 = Array;
      const call2 = slice2.call;
      typeof call2 === "unknown" ? slice2() : call2(arg1);
    }
  };
}
function originWhitelistToRegex(arg0) {
  return "^".concat(require("metro/07734__.js")(arg0).replace(/\\\*/g, ".*"));
}
function createOnShouldStartLoadWithRequest(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const url = nativeEvent.url;
    let str = url;
    let items = closure_1;
    if (!closure_1) {
      items = [];
    }
    const mapped = outer1_12(["about:blank"], items, true).map(outer1_13);
    str = undefined;
    const match = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(url);
    str = "";
    if (null !== match) {
      str = match[0];
    }
    if (mapped.some((arg0) => {
      const regExp = new RegExp(arg0);
      return regExp.test(str);
    })) {
      let flag = true;
      if (tmp3) {
        flag = tmp3(nativeEvent);
      }
    } else {
      const canOpenURLResult = outer1_6.canOpenURL(url);
      outer1_6.canOpenURL(url).then((arg0) => {
        if (arg0) {
          return outer1_6.openURL(str);
        } else {
          const _console = console;
          const concat = "Can't open url: ".concat;
          console.warn("Can't open url: ".concat("Can't open url: "));
        }
      }).catch((arg0) => {
        console.warn("Error opening URL: ", arg0);
      });
      flag = false;
      const nextPromise = outer1_6.canOpenURL(url).then((arg0) => {
        if (arg0) {
          return outer1_6.openURL(str);
        } else {
          const _console = console;
          const concat = "Can't open url: ".concat;
          console.warn("Can't open url: ".concat("Can't open url: "));
        }
      });
    }
    str(flag, url, nativeEvent.lockIdentifier);
  };
}

export const defaultOriginWhitelist = ["http://*", "https://*"];
export { createOnShouldStartLoadWithRequest };
export const defaultRenderLoading = () => callback(closure_7, { style: require("07735_get_ActivityIndicator.js").loadingOrErrorView, children: callback(closure_8, {}) });
export const defaultRenderError = (arg0, arg1, arg2) => {
  let obj = { style: require("07735_get_ActivityIndicator.js").loadingOrErrorView, children: null };
  obj = { style: require("07735_get_ActivityIndicator.js").errorTextTitle, children: "Error loading page" };
  const items = [callback(closure_9, obj), , , ];
  obj = { style: require("07735_get_ActivityIndicator.js").errorText, children: "Domain: ".concat(arg0) };
  items[1] = callback(closure_9, obj);
  items[2] = callback(closure_9, { style: require("07735_get_ActivityIndicator.js").errorText, children: "Error Code: ".concat(arg1) });
  const obj1 = { style: require("07735_get_ActivityIndicator.js").errorText, children: "Error Code: ".concat(arg1) };
  items[3] = callback(closure_9, { style: require("07735_get_ActivityIndicator.js").errorText, children: "Description: ".concat(arg2) });
  obj[1] = items;
  return callback2(closure_7, obj);
};
export const useWebWiewLogic = (onNavigationStateChange) => {
  onNavigationStateChange = onNavigationStateChange.onNavigationStateChange;
  let onLoadStart = onNavigationStateChange.onLoadStart;
  let onLoad = onNavigationStateChange.onLoad;
  const onLoadProgress = onNavigationStateChange.onLoadProgress;
  const onLoadEnd = onNavigationStateChange.onLoadEnd;
  const onError = onNavigationStateChange.onError;
  const onHttpErrorProp = onNavigationStateChange.onHttpErrorProp;
  const onMessageProp = onNavigationStateChange.onMessageProp;
  const onRenderProcessGoneProp = onNavigationStateChange.onRenderProcessGoneProp;
  const onContentProcessDidTerminateProp = onNavigationStateChange.onContentProcessDidTerminateProp;
  const originWhitelist = onNavigationStateChange.originWhitelist;
  const onShouldStartLoadWithRequestProp = onNavigationStateChange.onShouldStartLoadWithRequestProp;
  const onShouldStartLoadWithRequestCallback = onNavigationStateChange.onShouldStartLoadWithRequestCallback;
  let str = "IDLE";
  if (onNavigationStateChange.startInLoadingState) {
    str = "LOADING";
  }
  let tmpResult = tmp(str);
  const originWhitelistToRegex = tmp3;
  tmpResult = tmp(null);
  let closure_14 = tmpResult[1];
  let closure_15 = onLoadEnd(null);
  let items = [onNavigationStateChange];
  let tmp5 = onLoad((nativeEvent) => {
    if (null != onNavigationStateChange) {
      tmp(nativeEvent.nativeEvent);
    }
  }, items);
  let closure_16 = tmp5;
  const items1 = [onLoadStart, tmp5];
  const items2 = [onError, onLoadEnd];
  const items3 = [onHttpErrorProp];
  const tmp6 = onLoad((nativeEvent) => {
    closure_15.current = nativeEvent.nativeEvent.url;
    if (null != onLoadStart) {
      tmp(nativeEvent);
    }
    tmp5(nativeEvent);
  }, items1);
  const items4 = [onRenderProcessGoneProp];
  const tmp7 = onLoad((persist) => {
    persist.persist();
    if (onError) {
      tmp2(persist);
    } else {
      const _console = console;
      console.warn("Encountered an error loading page", persist.nativeEvent);
    }
    if (null != onLoadEnd) {
      tmp6(persist);
    }
    if (!persist.isDefaultPrevented()) {
      tmp3("ERROR");
      callback(persist.nativeEvent);
    }
  }, items2);
  const items5 = [onContentProcessDidTerminateProp];
  const tmp8 = onLoad((arg0) => {
    if (null != onHttpErrorProp) {
      tmp(arg0);
    }
  }, items3);
  const items6 = [onLoad, onLoadEnd, tmp5];
  const tmp9 = onLoad((arg0) => {
    if (null != onRenderProcessGoneProp) {
      tmp(arg0);
    }
  }, items4);
  const items7 = [onMessageProp];
  const tmp10 = onLoad((arg0) => {
    if (null != onContentProcessDidTerminateProp) {
      tmp(arg0);
    }
  }, items5);
  const items8 = [onLoadProgress];
  const tmp11 = onLoad((nativeEvent) => {
    if (null != onLoad) {
      tmp(nativeEvent);
    }
    if (null != onLoadEnd) {
      tmp3(nativeEvent);
    }
    if (nativeEvent.nativeEvent.url === ref.current) {
      tmp3("IDLE");
      const tmp5 = tmp3;
    }
    tmp5(nativeEvent);
  }, items6);
  const obj = { onShouldStartLoadWithRequest: null, onLoadingStart: null, onLoadingProgress: null, onLoadingError: null, onLoadingFinish: null, onHttpError: null, onRenderProcessGone: null, onContentProcessDidTerminate: null, onMessage: null, viewState: null, setViewState: null, lastErrorEvent: null };
  const items9 = [originWhitelist, onShouldStartLoadWithRequestProp, onShouldStartLoadWithRequestCallback];
  const tmp12 = onLoad((arg0) => {
    if (null != onMessageProp) {
      tmp(arg0);
    }
  }, items7);
  obj[0] = onLoadProgress(() => {
    if (typeof closure_14 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const onNavigationStateChange = onShouldStartLoadWithRequestCallback;
    const onLoadStart = originWhitelist;
    const onLoad = onShouldStartLoadWithRequestProp;
    return (nativeEvent) => {
      nativeEvent = nativeEvent.nativeEvent;
      const url = nativeEvent.url;
      let str = url;
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      const mapped = outer1_12(["about:blank"], items, true).map(outer1_13);
      str = undefined;
      const match = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(url);
      str = "";
      if (null !== match) {
        str = match[0];
      }
      if (mapped.some((arg0) => {
        const regExp = new RegExp(arg0);
        return regExp.test(str);
      })) {
        let flag = true;
        if (tmp3) {
          flag = tmp3(nativeEvent);
        }
      } else {
        const canOpenURLResult = outer1_6.canOpenURL(url);
        outer1_6.canOpenURL(url).then((arg0) => {
          if (arg0) {
            return outer1_6.openURL(str);
          } else {
            const _console = console;
            const concat = "Can't open url: ".concat;
            console.warn("Can't open url: ".concat("Can't open url: "));
          }
        }).catch((arg0) => {
          console.warn("Error opening URL: ", arg0);
        });
        flag = false;
        const nextPromise = outer1_6.canOpenURL(url).then((arg0) => {
          if (arg0) {
            return outer1_6.openURL(str);
          } else {
            const _console = console;
            const concat = "Can't open url: ".concat;
            console.warn("Can't open url: ".concat("Can't open url: "));
          }
        });
      }
      str(flag, url, nativeEvent.lockIdentifier);
    };
  }, items9);
  obj[1] = tmp6;
  obj[2] = onLoad((nativeEvent) => {
    if (1 === nativeEvent.nativeEvent.progress) {
      tmp3((arg0) => {
        let str = "IDLE";
        if ("LOADING" !== arg0) {
          str = arg0;
        }
        return str;
      });
    }
    if (null != onLoadProgress) {
      tmp3(nativeEvent);
    }
  }, items8);
  obj[3] = tmp7;
  obj[4] = tmp11;
  obj[5] = tmp8;
  obj[6] = tmp9;
  obj[7] = tmp10;
  obj[8] = tmp12;
  obj[9] = tmpResult[0];
  obj[10] = tmpResult[1];
  obj[11] = tmpResult[0];
  return obj;
};