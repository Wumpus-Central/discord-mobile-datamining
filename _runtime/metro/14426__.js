// === Module 14426: ? ===

// Module 14426
import _slicedToArray from "module_32" /* 32 */;

const re3 = /^(image)\/.*$/i;
let closure_4 = {};

export default () => {
  if (arg0 === undefined) {
    let obj = {};
  }
  return (arg0) => {
    closure_0 = arg0;
    function onSend(data, _url) {
      if (merged.ignoreUrls) {
        const ignoreUrls = merged.ignoreUrls;
        if (ignoreUrls.test(_url._url)) {
          _url._skipReactotron = true;
        }
      }
      const sum = c3 + 1;
      c3 = sum;
      _url._trackingName = sum;
      closure_4[c3] = { data, xhr: _url, stopTimer: closure_0.startTimer() };
    }
    function onResponse(status, arg1, _bodyBlob, arg3, arg4, _skipReactotron) {
      closure_1 = _bodyBlob;
      regex = _skipReactotron;
      if (!_skipReactotron._skipReactotron) {
        let _url = arg3;
        obj = null;
        let num2 = -1;
        if (arg3) {
          num2 = _url.indexOf("?");
        }
        let tmp2 = null;
        if (num2 > -1) {
          obj = {};
          const parts = _url.substr(num2 + 1).split("&");
          const item = parts.forEach((item) => {
            [tmp2, str] = _slicedToArray(item.split("="), 2);
            let tmp3 = tmp2;
            if (tmp2) {
              tmp3 = undefined !== str;
            }
            if (tmp3) {
              const _decodeURIComponent = decodeURIComponent;
              obj[tmp2] = decodeURIComponent(str.replace(/\+/g, " "));
            }
            const tmp = _slicedToArray(item.split("="), 2);
          });
          tmp2 = obj;
          const str2 = _url.substr(num2 + 1);
        }
        const _trackingName = _skipReactotron._trackingName;
        let tmp5 = closure_4[_trackingName];
        if (!tmp5) {
          obj = { xhr: _skipReactotron };
          tmp5 = obj;
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
          const tmp6 = _skipReactotron.responseHeaders && _skipReactotron.responseHeaders["Content-Type"];
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
              str = closure_1;
            }
          }
          const response = { body: str, status, headers: responseHeaders.responseHeaders || null };
          let tmp4Result = null;
          if (closure_1_4) {
            tmp4Result = tmp4();
          }
          status.apiResponse(request, response, tmp4Result);
        }
        if (typeof _bodyBlob === "string") {
          if (!str4) {
            str4 = "";
          }
          if (!regex.test(str4)) {
            if ("blob" === arg4) {
              const _FileReader = FileReader;
              if (typeof FileReader !== "undefined") {
                if (_bodyBlob) {
                  const _FileReader2 = FileReader;
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
    let regex = merged.ignoreContentTypes || re3;
    c3 = 1000;
    closure_4 = {};
    obj = {
      onConnect() {
        const XHRInterceptor = obj(14427).XHRInterceptor;
        XHRInterceptor.setSendCallback(onSend);
        const XHRInterceptor2 = obj(14427).XHRInterceptor;
        XHRInterceptor2.setResponseCallback(onResponse);
        const XHRInterceptor3 = obj(14427).XHRInterceptor;
        XHRInterceptor3.enableInterception();
      }
    };
    return obj;
  };
};