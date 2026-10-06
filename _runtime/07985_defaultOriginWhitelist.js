// _runtime/07985_defaultOriginWhitelist.js
import _modDef7986 from "metro/07986__.js";
import react_nativeDefault from "07987_react-native.js";
import react_mod from "00019_react.js";
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";

let Platform;
let c10;
let c2;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ useCallback: c2, useMemo: c3, useRef: closure_4, useState: hasOwnProperty } = react);
react = react_mod;
({
  Linking: metroRequire,
  View: metroImportDefault,
  ActivityIndicator: metroImportAll,
  Text: c9,
  Platform,
} = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 =
  (this && this.__spreadArray) ||
  ((arg0, arg1, arg2) => {
    let callResult1;
    let tmp4;
    const tmp = arg2;
    if (tmp) {
      let num4 = 0;
      if (0 < arg1.length) {
        do {
          let tmp5 = !tmp4;
          let tmp7 = tmp4;
          if (!tmp7) {
            tmp5 = num4 in arg1;
          }
          let tmp8 = tmp4;
          if (!tmp5) {
            let callResult = tmp4;
            if (!callResult) {
              let _Array = Array;
              callResult = slice.call(arg1, 0, num4);
            }
            callResult[num4] = arg1[num4];
            tmp8 = callResult;
          }
          num4 = num4 + 1;
          tmp4 = tmp8;
          callResult1 = tmp8;
        } while (num4 < arg1.length);
      }
    }
    const concat = arg0.concat;
    if (!callResult1) {
      const _Array2 = Array;
      const slice2 = Array.prototype.slice;
      callResult1 = slice2.call(arg1);
    }
    return concat(callResult1);
  });
function originWhitelistToRegex(arg0) {
  const str = _modDef7986(arg0);
  return "^".concat(str.replace(/\\\*/g, ".*"));
}
function createOnShouldStartLoadWithRequest(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return (nativeEvent) => {
    let flag;
    nativeEvent = nativeEvent.nativeEvent;
    const url = nativeEvent.url;
    let items = closure_1;
    const lockIdentifier = nativeEvent.lockIdentifier;
    if (!closure_1) {
      items = [];
    }
    const tmpResult = onShouldStartLoadWithRequestCallback(["about:blank"], items, true);
    const mapped = tmpResult.map(closure_2_13);
    const obj2 = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/;
    const match = obj2.exec(url);
    let str = "";
    if (null !== match) {
      str = match[0];
    }
    if (
      mapped.some((item) => {
        const regExp = new RegExp(item);
        return regExp.test(str);
      })
    ) {
      flag = true;
      if (tmp2) {
        flag = tmp2(nativeEvent);
      }
    } else {
      const canOpenURLResult = onHttpErrorProp.canOpenURL(url);
      const nextPromise = canOpenURLResult.then((result) => {
        const tmp = result;
        if (tmp) {
          return closure_2_6.openURL(url);
        } else {
          const _console = console;
          const concat = "Can't open url: ".concat;
          console.warn("Can't open url: ".concat(url));
        }
      });
      nextPromise.catch((error) => {
        console.warn("Error opening URL: ", error);
      });
      flag = false;
    }
    closure_0(flag, url, lockIdentifier);
  };
}

export const defaultOriginWhitelist = ["http://*", "https://*"];
export { createOnShouldStartLoadWithRequest };
export const defaultRenderLoading = () => {
  const obj = { style: react_nativeDefault.loadingOrErrorView, children: authStore(metroImportAll, {}) };
  return authStore(metroImportDefault, obj);
};
export const defaultRenderError = (arg0, arg1, arg2) => {
  let items;
  const obj = { style: react_nativeDefault.loadingOrErrorView, children: items };
  items = [, , ,];
  const obj2 = { style: react_nativeDefault.errorTextTitle, children: "Error loading page" };
  items[0] = authStore(React4, obj2);
  const obj3 = { style: react_nativeDefault.errorText, children: "Domain: ".concat(arg0) };
  items[1] = authStore(React4, obj3);
  const obj4 = { style: react_nativeDefault.errorText, children: "Error Code: ".concat(arg1) };
  items[2] = authStore(React4, obj4);
  const obj5 = { style: react_nativeDefault.errorText, children: "Description: ".concat(arg2) };
  items[3] = authStore(React4, obj5);
  return unpackModuleId(metroImportDefault, obj);
};
export const useWebWiewLogic = (onNavigationStateChange) => {
  let items9;
  let tmp14;
  let tmp15;
  onNavigationStateChange = onNavigationStateChange.onNavigationStateChange;
  const onLoadStart = onNavigationStateChange.onLoadStart;
  const onLoad = onNavigationStateChange.onLoad;
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
  let tmp = onError;
  let str = "IDLE";
  if (onNavigationStateChange.startInLoadingState) {
    str = "LOADING";
  }
  let tmpResult = tmp(str);
  let closure_13 = tmp4;
  const first = tmpResult[0];
  const tmpResult2 = tmp(null);
  let closure_14 = tmpResult2[1];
  const first1 = tmpResult2[0];
  const ref = onLoadEnd(null);
  let items = [onNavigationStateChange];
  const tmp7 = onLoad((nativeEvent) => {
    if (null != onNavigationStateChange) {
      tmp(nativeEvent.nativeEvent);
    }
  }, items);
  let closure_16 = tmp7;
  const items1 = [onLoadStart, tmp7];
  const items2 = [onError, onLoadEnd];
  const items3 = [onHttpErrorProp];
  const tmp8 = onLoad((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.url;
    if (null != onLoadStart) {
      tmp(nativeEvent);
    }
    closure_16(nativeEvent);
  }, items1);
  const items4 = [onRenderProcessGoneProp];
  const items5 = [onContentProcessDidTerminateProp];
  const tmp9 = onLoad((persist) => {
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
  const tmp10 = onLoad((arg0) => {
    if (null != onHttpErrorProp) {
      tmp(arg0);
    }
  }, items3);
  const items6 = [onLoad, onLoadEnd, tmp7];
  const items7 = [onMessageProp];
  const tmp11 = onLoad((arg0) => {
    if (null != onRenderProcessGoneProp) {
      tmp(arg0);
    }
  }, items4);
  const items8 = [onLoadProgress];
  const tmp12 = onLoad((arg0) => {
    if (null != onContentProcessDidTerminateProp) {
      tmp(arg0);
    }
  }, items5);
  const tmp13 = onLoad((nativeEvent) => {
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
    onShouldStartLoadWithRequest: onLoadProgress(() => {
      let tmp;
      if (typeof createOnShouldStartLoadWithRequest === "function") {
        let closure_0 = onShouldStartLoadWithRequestCallback;
        let closure_1 = tmp;
        let closure_2 = tmp2;
        return (nativeEvent) => {
          let flag;
          nativeEvent = nativeEvent.nativeEvent;
          const url = nativeEvent.url;
          let items = closure_1;
          const lockIdentifier = nativeEvent.lockIdentifier;
          if (!closure_1) {
            items = [];
          }
          const tmpResult = onShouldStartLoadWithRequestCallback(["about:blank"], items, true);
          const mapped = tmpResult.map(closure_2_13);
          const obj2 = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/;
          const match = obj2.exec(url);
          let str = "";
          if (null !== match) {
            str = match[0];
          }
          if (
            mapped.some((item) => {
              const regExp = new RegExp(item);
              return regExp.test(str);
            })
          ) {
            flag = true;
            if (tmp2) {
              flag = tmp2(nativeEvent);
            }
          } else {
            const canOpenURLResult = onHttpErrorProp.canOpenURL(url);
            const nextPromise = canOpenURLResult.then((result) => {
              const tmp = result;
              if (tmp) {
                return closure_2_6.openURL(url);
              } else {
                const _console = console;
                const concat = "Can't open url: ".concat;
                console.warn("Can't open url: ".concat(url));
              }
            });
            nextPromise.catch((error) => {
              console.warn("Error opening URL: ", error);
            });
            flag = false;
          }
          closure_0(flag, url, lockIdentifier);
        };
      } else {
        let str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }, items9),
    onLoadingStart: tmp8,
    onLoadingProgress: tmp15,
    onLoadingError: tmp9,
    onLoadingFinish: tmp13,
    onHttpError: tmp10,
    onRenderProcessGone: tmp11,
    onContentProcessDidTerminate: tmp12,
    onMessage: tmp14,
    viewState: first,
    setViewState: tmpResult[1],
    lastErrorEvent: first1,
  };
  items9 = [originWhitelist, onShouldStartLoadWithRequestProp, onShouldStartLoadWithRequestCallback];
  tmp14 = onLoad((arg0) => {
    if (null != onMessageProp) {
      tmp(arg0);
    }
  }, items7);
  tmp15 = onLoad((nativeEvent) => {
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
  return obj;
};
