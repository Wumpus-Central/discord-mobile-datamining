// === Module 17429: ? ===

// Module 17429
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let StyleSheet;
let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let react = react_mod;
({ useMemo: c2, useCallback: c3 } = react);
react = react_mod;
({ Linking: closure_4, StyleSheet, View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
const jsx = Fragment.jsx;
const injectedJavaScript = "(" + String(() => {
  function patchedPostMessage(arg0, arg1, arg2) {
    postMessage(arg0, arg1, arg2);
  }
  patchedPostMessage.toString = () => {
    const str = String(Object.hasOwnProperty);
    return str.replace("hasOwnProperty", "postMessage");
  };
  window.ReactNativeWebView.postMessage = patchedPostMessage;
}) + ")();";
const styles = StyleSheet.create({ loadingOverlay: { bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0 } });

export default function _default(siteKey) {
  let cancelButtonText;
  let languageCode;
  let loadingIndicatorColor;
  let loadingOverlay;
  let onMessage;
  let showLoading;
  let style;
  let tmp2;
  let url;
  siteKey = siteKey.siteKey;
  ({ languageCode, cancelButtonText, loadingIndicatorColor } = siteKey);
  const backgroundColor = siteKey.backgroundColor;
  let theme = siteKey.theme;
  let rqdata = siteKey.rqdata;
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
  let tmp5 = theme;
  const tmp4 = theme && typeof theme === "string";
  if (tmp4) {
    const _HermesInternal = HermesInternal;
    const combined = "\"" + theme + "\"";
    theme = combined;
    tmp5 = combined;
  }
  const tmp7 = rqdata && typeof rqdata === "string";
  if (tmp7) {
    const _HermesInternal2 = HermesInternal;
    rqdata = "\"" + rqdata + "\"";
  }
  let items = [siteKey, backgroundColor, tmp5];
  const items1 = [loadingIndicatorColor];
  const items2 = [{ backgroundColor: "transparent", width: "100%" }, style];
  const tmp8 = backgroundColor(() => {
    const tmp2 = siteKey || "";
    return "<!DOCTYPE html>\n      <html>\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <script src=\"" + text2 + "\" async defer></script>\n        <script type=\"text/javascript\">\n          var onloadCallback = function() {\n            try {\n              console.log(\"challenge onload starting\");\n              hcaptcha.render(\"submit\", getRenderConfig(\"" + tmp2 + "\", " + theme + "));\n              // have loaded by this point; render is sync.\n              console.log(\"challenge render complete\");\n            } catch (e) {\n              console.log(\"challenge failed to render\");\n              window.ReactNativeWebView.postMessage(\"error\");\n            }\n            try {\n              console.log(\"showing challenge\");\n              hcaptcha.execute(getExecuteOpts());\n            } catch (e) {\n              console.log(\"failed to show challenge\");\n              window.ReactNativeWebView.postMessage(\"error\");\n            }\n          };\n          var onDataCallback = function(response) {\n            window.ReactNativeWebView.postMessage(response);\n          };\n          var onCancel = function() {\n            window.ReactNativeWebView.postMessage(\"cancel\");\n          };\n          var onOpen = function() {\n            // NOTE: disabled for simplicity.\n            // window.ReactNativeWebView.postMessage(\"open\");\n            console.log(\"challenge opened\");\n          };\n          var onDataExpiredCallback = function(error) { window.ReactNativeWebView.postMessage(\"expired\"); };\n          var onChalExpiredCallback = function(error) { window.ReactNativeWebView.postMessage(\"cancel\"); };\n          var onDataErrorCallback = function(error) {\n            console.log(\"challenge error callback fired\");\n            window.ReactNativeWebView.postMessage(\"error\");\n          };\n          const getRenderConfig = function(siteKey, theme) {\n            var config = {\n              sitekey: siteKey,\n              size: \"invisible\",\n              callback: onDataCallback,\n              \"close-callback\": onCancel,\n              \"open-callback\": onOpen,\n              \"expired-callback\": onDataExpiredCallback,\n              \"chalexpired-callback\": onChalExpiredCallback,\n              \"error-callback\": onDataErrorCallback\n            };\n            if (theme) {\n              config.theme = theme;\n            }\n            return config;\n          };\n          const getExecuteOpts = function() {\n            var opts;\n            const rqdata = " + rqdata + ";\n            if (rqdata) {\n              opts = {\"rqdata\": rqdata};\n            }\n            return opts;\n          };\n        </script>\n      </head>\n      <body style=\"background-color: " + backgroundColor + ";\">\n        <div id=\"submit\"></div>\n      </body>\n      </html>";
  }, items);
  const obj2 = { html: tmp8, baseUrl: "" + url };
  const tmp9 = theme(() => {
    const items = [loadingOverlay.loadingOverlay];
    return <hasOwnProperty style={items}>{null}</hasOwnProperty>;
  }, items1);
  siteKey(loadingIndicatorColor[3]);
  return <tmp10 originWhitelist={["*"]} onShouldStartLoadWithRequest={function onShouldStartLoadWithRequest(url) {
    url = url.url;
    let flag = "https://www.hcaptcha.com" !== url.slice(0, 24);
    if (!flag) {
      rqdata.openURL(url.url);
      flag = false;
    }
    return flag;
  }} mixedContentMode="always" onMessage={onMessage} javaScriptEnabled injectedJavaScript={injectedJavaScript} automaticallyAdjustContentInsets style={items2} source={obj2} renderLoading={tmp9} startInLoadingState={showLoading} />;
};