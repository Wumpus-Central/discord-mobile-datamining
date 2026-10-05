// === Module 14192: ? ===

// Module 14192
import _slicedToArray from "_slicedToArray" /* 32 */;

let regex;

const re3 = /^(image)\/.*$/i;
let closure_4 = {};

export default () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  return (arg0) => {
    let closure_0 = arg0;
    function onSend(data, _url) {
      if (merged.ignoreUrls) {
        const ignoreUrls = merged.ignoreUrls;
        if (ignoreUrls.test(_url._url)) {
          _url._skipReactotron = true;
        }
      }
      sum = sum + 1;
      _url._trackingName = sum;
      closure_4[sum] = { data, xhr: _url, stopTimer: closure_0.startTimer() };
      ({ data, xhr: _url, stopTimer: closure_0.startTimer() });
    }
    function onResponse(status, arg1, _bodyBlob, arg3, arg4, _skipReactotron) {
      let data;
      let responseHeaders;
      let closure_1 = _bodyBlob;
      regex = _skipReactotron;
      if (!_skipReactotron._skipReactotron) {
        let _url = arg3;
        obj = null;
        let num2 = -1;
        if (arg3) {
          let str = "?";
          num2 = _url.indexOf("?");
        }
        let tmp2 = null;
        if (num2 > -1) {
          obj = {};
          const str2 = _url.substr(num2 + 1);
          const parts = str2.split("&");
          const item = parts.forEach((item) => {
            let str;
            let tmp2;
            [tmp2, str] = closure_3_2(item.split("="), 2);
            closure_3_2(item.split("="), 2);
            const tmp3 = tmp2 && undefined !== str;
            if (tmp3) {
              const _decodeURIComponent = decodeURIComponent;
              obj[tmp2] = decodeURIComponent(str.replace(/\+/g, " "));
            }
          });
          tmp2 = obj;
        }
        const _trackingName = _skipReactotron._trackingName;
        let tmp5 = closure_4[_trackingName];
        if (!tmp5) {
          tmp5 = { xhr: _skipReactotron };
          const obj2 = { xhr: _skipReactotron };
        }
        closure_4[_trackingName] = null;
        ({ stopTimer: closure_4, data } = tmp5);
        if (!_url) {
          _url = tmp5.xhr._url;
        }
        const request = { url: _url, method: _skipReactotron._method || null, data, headers: _skipReactotron._headers || null, params: tmp2 };
        let str4 = _skipReactotron.responseHeaders && _skipReactotron.responseHeaders["content-type"];
        if (!str4) {
          str4 = _skipReactotron.responseHeaders && _skipReactotron.responseHeaders["Content-Type"];
        }
        if (!str4) {
          str4 = "";
        }
        function sendResponse(result) {
          let str = "~~~ skipped ~~~";
          if (result) {
            try {
              const _JSON = JSON;
              str = JSON.parse(result);
            } catch (err) {
              str = _bodyBlob;
            }
          }
          const response = { body: str, status, headers: responseHeaders.responseHeaders || null };
          let tmp4Result = null;
          const apiResponse = status.apiResponse;
          if (closure_4) {
            tmp4Result = tmp4();
          }
          apiResponse(request, response, tmp4Result);
        }
        if (typeof _bodyBlob === "string") {
          const test = regex.test;
          if (!str4) {
            str4 = "";
          }
          if (!test(str4)) {
            if ("blob" === arg4) {
              const _FileReader = FileReader;
              if (typeof FileReader !== "undefined") {
                if (_bodyBlob) {
                  const _FileReader2 = FileReader;
                  const self = this;
                  const self2 = this;
                  const fileReader = new FileReader();
                  function brListener() {
                    sendResponse(fileReader.result);
                    const removed = fileReader.removeEventListener("loadend", brListener);
                  }
                  const listener = fileReader.addEventListener("loadend", brListener);
                  const asText = fileReader.readAsText(_bodyBlob);
                }
              }
            }
            sendResponse(_bodyBlob);
          }
        }
        sendResponse("");
      }
    }
    const merged = Object.assign({}, closure_4, obj);
    let closure_2 = merged.ignoreContentTypes || re3;
    let sum = 1000;
    closure_4 = {};
    obj = {
      onConnect() {
        const XHRInterceptor = obj(closure_2_1[1]).XHRInterceptor;
        XHRInterceptor.setSendCallback(onSend);
        const XHRInterceptor2 = obj(closure_2_1[1]).XHRInterceptor;
        XHRInterceptor2.setResponseCallback(onResponse);
        const XHRInterceptor3 = obj(closure_2_1[1]).XHRInterceptor;
        XHRInterceptor3.enableInterception();
      }
    };
    return obj;
  };
};