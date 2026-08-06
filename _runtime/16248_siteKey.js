// _runtime/16248_siteKey.js
import noop from "noop";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let c3;
let c4;
let c5;
let closure_6;
let obj1;
({ useMemo: obj1, useCallback: c3 } = noop);
({ Linking: c4, StyleSheet, View: c5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
let closure_8 = "(" + String(() => {
  function patchedPostMessage(arg0, arg1, arg2) {
    postMessage(arg0, arg1, arg2);
  }
  patchedPostMessage.toString = () => String(Object.hasOwnProperty).replace("hasOwnProperty", "postMessage");
  window.ReactNativeWebView.postMessage = patchedPostMessage;
}) + ")();";
const styles = StyleSheet.create({ loadingOverlay: { bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0 } });

export default function _default(siteKey) {
  let cancelButtonText;
  let languageCode;
  let loadingIndicatorColor;
  let onMessage;
  let showLoading;
  let style;
  let url;
  siteKey = siteKey.siteKey;
  ({ languageCode, cancelButtonText, loadingIndicatorColor } = siteKey);
  const backgroundColor = siteKey.backgroundColor;
  const theme = siteKey.theme;
  let combined = theme;
  const rqdata = siteKey.rqdata;
  let closure_4 = rqdata;
  let text2;
  let str = siteKey;
  ({ onMessage, style, url, showLoading } = siteKey);
  if (!siteKey) {
    str = "missing-sitekey";
  }
  const text = `https://hcaptcha.com/1/api.js?render=explicit&onload=onloadCallback${"&host=" + str + ".react-native.hcaptcha.com"}`;
  let text1 = text;
  if (languageCode) {
    text1 = `https://hcaptcha.com/1/api.js?render=explicit&onload=onloadCallback${"&host=" + str + ".react-native.hcaptcha.com"}${"&hl=" + languageCode}`;
  }
  text2 = text1;
  if (typeof theme === "object") {
    text2 = `${tmp2}&custom=true`;
  }
  let tmp4 = theme;
  if (theme) {
    tmp4 = typeof theme === "string";
  }
  let tmp5 = theme;
  if (tmp4) {
    const _HermesInternal = HermesInternal;
    combined = "\"" + theme + "\"";
    tmp5 = combined;
  }
  let tmp7 = rqdata;
  if (rqdata) {
    tmp7 = typeof rqdata === "string";
  }
  if (tmp7) {
    const _HermesInternal2 = HermesInternal;
    closure_4 = "\"" + rqdata + "\"";
  }
  let items = [siteKey, backgroundColor, tmp5];
  const items1 = [loadingIndicatorColor];
  const tmp8 = backgroundColor(() => {
    let str = siteKey;
    if (!siteKey) {
      str = "";
    }
    return "<!DOCTYPE html>\n      <html>\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <script src=\"" + text2 + "\" async defer></script>\n        <script type=\"text/javascript\">\n          var onloadCallback = function() {\n            try {\n              console.log(\"challenge onload starting\");\n              hcaptcha.render(\"submit\", getRenderConfig(\"" + str + "\", " + combined + "));\n              // have loaded by this point; render is sync.\n              console.log(\"challenge render complete\");\n            } catch (e) {\n              console.log(\"challenge failed to render\");\n              window.ReactNativeWebView.postMessage(\"error\");\n            }\n            try {\n              console.log(\"showing challenge\");\n              hcaptcha.execute(getExecuteOpts());\n            } catch (e) {\n              console.log(\"failed to show challenge\");\n              window.ReactNativeWebView.postMessage(\"error\");\n            }\n          };\n          var onDataCallback = function(response) {\n            window.ReactNativeWebView.postMessage(response);\n          };\n          var onCancel = function() {\n            window.ReactNativeWebView.postMessage(\"cancel\");\n          };\n          var onOpen = function() {\n            // NOTE: disabled for simplicity.\n            // window.ReactNativeWebView.postMessage(\"open\");\n            console.log(\"challenge opened\");\n          };\n          var onDataExpiredCallback = function(error) { window.ReactNativeWebView.postMessage(\"expired\"); };\n          var onChalExpiredCallback = function(error) { window.ReactNativeWebView.postMessage(\"cancel\"); };\n          var onDataErrorCallback = function(error) {\n            console.log(\"challenge error callback fired\");\n            window.ReactNativeWebView.postMessage(\"error\");\n          };\n          const getRenderConfig = function(siteKey, theme) {\n            var config = {\n              sitekey: siteKey,\n              size: \"invisible\",\n              callback: onDataCallback,\n              \"close-callback\": onCancel,\n              \"open-callback\": onOpen,\n              \"expired-callback\": onDataExpiredCallback,\n              \"chalexpired-callback\": onChalExpiredCallback,\n              \"error-callback\": onDataErrorCallback\n            };\n            if (theme) {\n              config.theme = theme;\n            }\n            return config;\n          };\n          const getExecuteOpts = function() {\n            var opts;\n            const rqdata = " + closure_4 + ";\n            if (rqdata) {\n              opts = {\"rqdata\": rqdata};\n            }\n            return opts;\n          };\n        </script>\n      </head>\n      <body style=\"background-color: " + backgroundColor + ";\">\n        <div id=\"submit\"></div>\n      </body>\n      </html>";
  }, items);
  let obj = {
    originWhitelist: ["*"],
    onShouldStartLoadWithRequest(url) {
      url = url.url;
      let flag = "https://www.hcaptcha.com" !== url.slice(0, 24);
      if (!flag) {
        closure_4.openURL(url.url);
        flag = false;
      }
      return flag;
    },
    mixedContentMode: "always",
    onMessage,
    javaScriptEnabled: true,
    injectedJavaScript: closure_8,
    automaticallyAdjustContentInsets: true,
    style: items2,
    source: null,
    renderLoading: null,
    startInLoadingState: null
  };
  items2 = [{ backgroundColor: "transparent", width: "100%" }, style];
  obj = { html: tmp8, baseUrl: null };
  const tmp9 = combined(() => {
    obj = { style: items, children: outer1_7(outer1_6, obj) };
    items = [outer1_9.loadingOverlay];
    obj = { size: "large", color: loadingIndicatorColor };
    return outer1_7(text2, obj);
  }, items1);
  obj[1] = "" + url;
  obj[8] = obj;
  obj[9] = tmp9;
  obj[10] = showLoading;
  return jsx(siteKey(loadingIndicatorColor[3]), { html: tmp8, baseUrl: null });
};