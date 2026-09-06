// _runtime/08300_originWhitelistToRegex.js
import _modDef8301 from "metro/08301__.js";
import _modDef8302 from "metro/08302__.js";
import noop from "metro/00019__.js";
import get_ActivityIndicator from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";

({ useCallback: c2, useMemo: c3, useRef: closure_4, useState: hasOwnProperty } = noop);
({
  Linking: metroRequire,
  View: closure_7,
  ActivityIndicator: closure_8,
  Text: closure_9,
  Platform,
} = get_ActivityIndicator);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let fn = this;
if (this) {
  fn = this.__spreadArray;
}
if (!fn) {
  fn = (arr, arg1, arg2) => {
    let tmp;
    if (arg2) {
      let num4 = 0;
      if (0 < arg1.length) {
        while (true) {
          let tmp4 = !tmp3;
          let tmp6 = tmp3;
          if (!tmp3) {
            tmp4 = num4 in arg1;
          }
          let tmp7 = tmp3;
          if (!tmp4) {
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
  return "^".concat(_modDef8301(arg0).replace(/\\\*/g, ".*"));
}
function createOnShouldStartLoadWithRequest(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const url = nativeEvent.url;
    let items = closure_1;
    if (!closure_1) {
      items = [];
    }
    const mapped = onShouldStartLoadWithRequestCallback(["about:blank"], items, true).map(closure_13);
    const match = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(url);
    const str = "";
    if (
      mapped.some((item) => {
        const regExp = new RegExp(item);
        return regExp.test(str);
      })
    ) {
      let flag = true;
      if (tmp2) {
        flag = tmp2(nativeEvent);
      }
    } else {
      const canOpenURLResult = onHttpErrorProp.canOpenURL(url);
      onHttpErrorProp
        .canOpenURL(url)
        .then((result) => {
          if (result) {
            return onHttpErrorProp.openURL(str);
          } else {
            const _console = console;
            const concat = "Can't open url: ".concat;
            console.warn("Can't open url: ".concat("Can't open url: "));
          }
        })
        .catch((error) => {
          console.warn("Error opening URL: ", error);
        });
      flag = false;
      const nextPromise = onHttpErrorProp.canOpenURL(url).then((result) => {
        if (result) {
          return onHttpErrorProp.openURL(str);
        } else {
          const _console = console;
          const concat = "Can't open url: ".concat;
          console.warn("Can't open url: ".concat("Can't open url: "));
        }
      });
    }
    closure_0(flag, url, nativeEvent.lockIdentifier);
  };
}

export const defaultOriginWhitelist = ["http://*", "https://*"];
export { createOnShouldStartLoadWithRequest };
export const defaultRenderLoading = () =>
  closure_1_10(React5, { style: _modDef8302.loadingOrErrorView, children: closure_1_10(React6, {}) });
export const defaultRenderError = (arg0, arg1, arg2) => {
  let obj = { style: _modDef8302.loadingOrErrorView, children: null };
  obj = { style: _modDef8302.errorTextTitle, children: "Error loading page" };
  const items = [closure_1_10(React7, obj), , ,];
  obj = { style: _modDef8302.errorText, children: "Domain: ".concat(arg0) };
  items[1] = closure_1_10(React7, obj);
  items[2] = closure_1_10(React7, { style: _modDef8302.errorText, children: "Error Code: ".concat(arg1) });
  const obj1 = { style: _modDef8302.errorText, children: "Error Code: ".concat(arg1) };
  items[3] = closure_1_10(React7, { style: _modDef8302.errorText, children: "Description: ".concat(arg2) });
  obj.children = items;
  return closure_1_11(React5, obj);
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
  tmp(str);
  closure_13 = tmp3;
  const tmpResult = tmp(null);
  closure_14 = tmpResult[1];
  onLoadEnd(null);
  let items = [onNavigationStateChange];
  const tmp5 = onLoad((nativeEvent) => {
    if (null != onNavigationStateChange) {
      tmp(nativeEvent.nativeEvent);
    }
  }, items);
  closure_16 = tmp5;
  const items1 = [onLoadStart, tmp5];
  const items2 = [onError, onLoadEnd];
  const items3 = [onHttpErrorProp];
  const tmp6 = onLoad((nativeEvent) => {
    closure_15.current = nativeEvent.nativeEvent.url;
    if (null != onLoadStart) {
      tmp(nativeEvent);
    }
    closure_16(nativeEvent);
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
      closure_13("ERROR");
      closure_14(persist.nativeEvent);
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
      closure_13("IDLE");
    }
    closure_16(nativeEvent);
  }, items6);
  const obj = {
    onShouldStartLoadWithRequest: null,
    onLoadingStart: null,
    onLoadingProgress: null,
    onLoadingError: null,
    onLoadingFinish: null,
    onHttpError: null,
    onRenderProcessGone: null,
    onContentProcessDidTerminate: null,
    onMessage: null,
    viewState: null,
    setViewState: null,
    lastErrorEvent: null,
  };
  const items9 = [originWhitelist, onShouldStartLoadWithRequestProp, onShouldStartLoadWithRequestCallback];
  const tmp12 = onLoad((arg0) => {
    if (null != onMessageProp) {
      tmp(arg0);
    }
  }, items7);
  obj.onShouldStartLoadWithRequest = onLoadProgress(() => {
    if (typeof createOnShouldStartLoadWithRequest === "function") {
      closure_0 = onShouldStartLoadWithRequestCallback;
      onLoadStart = tmp;
      onLoad = tmp2;
      return (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        const url = nativeEvent.url;
        let items = closure_1;
        if (!closure_1) {
          items = [];
        }
        const mapped = onShouldStartLoadWithRequestCallback(["about:blank"], items, true).map(closure_13);
        const match = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(url);
        const str = "";
        if (
          mapped.some((item) => {
            const regExp = new RegExp(item);
            return regExp.test(str);
          })
        ) {
          let flag = true;
          if (tmp2) {
            flag = tmp2(nativeEvent);
          }
        } else {
          const canOpenURLResult = onHttpErrorProp.canOpenURL(url);
          onHttpErrorProp
            .canOpenURL(url)
            .then((result) => {
              if (result) {
                return onHttpErrorProp.openURL(str);
              } else {
                const _console = console;
                const concat = "Can't open url: ".concat;
                console.warn("Can't open url: ".concat("Can't open url: "));
              }
            })
            .catch((error) => {
              console.warn("Error opening URL: ", error);
            });
          flag = false;
          const nextPromise = onHttpErrorProp.canOpenURL(url).then((result) => {
            if (result) {
              return onHttpErrorProp.openURL(str);
            } else {
              const _console = console;
              const concat = "Can't open url: ".concat;
              console.warn("Can't open url: ".concat("Can't open url: "));
            }
          });
        }
        closure_0(flag, url, nativeEvent.lockIdentifier);
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, items9);
  obj.onLoadingStart = tmp6;
  obj.onLoadingProgress = onLoad((nativeEvent) => {
    if (1 === nativeEvent.nativeEvent.progress) {
      closure_13((arg0) => {
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
  obj.onLoadingError = tmp7;
  obj.onLoadingFinish = tmp11;
  obj.onHttpError = tmp8;
  obj.onRenderProcessGone = tmp9;
  obj.onContentProcessDidTerminate = tmp10;
  obj.onMessage = tmp12;
  obj.viewState = tmpResult[0];
  obj.setViewState = tmpResult[1];
  obj.lastErrorEvent = tmpResult[0];
  return obj;
};
