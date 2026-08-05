// _runtime/13578_onSend.js
import _slicedToArray from "_slicedToArray";

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
      const sum = c3 + 1;
      c3 = sum;
      _url._trackingName = sum;
      closure_4[c3] = { data, xhr: _url, stopTimer: lib.startTimer() };
    }
    function onResponse(arg0, arg1, _bodyBlob, arg3, arg4, _skipReactotron) {
      let closure_4;
      let data;
      let closure_0 = arg0;
      let closure_1 = _bodyBlob;
      const regex = _skipReactotron;
      if (!_skipReactotron._skipReactotron) {
        let _url = arg3;
        let obj = null;
        let num2 = -1;
        if (arg3) {
          num2 = _url.indexOf("?");
        }
        let tmp2 = null;
        if (num2 > -1) {
          obj = {};
          const parts = _url.substr(num2 + 1).split("&");
          const item = parts.forEach((str) => {
            let tmp2;
            [tmp2, str] = _skipReactotron(str.split("="), 2);
            let tmp3 = tmp2;
            if (tmp2) {
              tmp3 = undefined !== str;
            }
            if (tmp3) {
              const _decodeURIComponent = decodeURIComponent;
              obj[tmp2] = decodeURIComponent(str.replace(/\+/g, " "));
            }
          });
          tmp2 = obj;
          const str2 = _url.substr(num2 + 1);
        }
        const _trackingName = _skipReactotron._trackingName;
        let tmp5 = table[_trackingName];
        if (!tmp5) {
          obj = { xhr: null };
          obj[0] = _skipReactotron;
          tmp5 = obj;
        }
        table[_trackingName] = null;
        ({ stopTimer: closure_4, data } = tmp5);
        if (!_url) {
          _url = tmp5.xhr._url;
        }
        obj = { url: null, method: null, data: null, headers: null, params: null };
        obj[0] = _url;
        obj[1] = _skipReactotron._method || null;
        obj[2] = data;
        obj[3] = _skipReactotron._headers || null;
        obj[4] = tmp2;
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
          const obj = { body: str, status: closure_0, headers: tmp2 };
          let tmp5Result = null;
          if (closure_4) {
            tmp5Result = tmp5();
          }
          closure_0.apiResponse(obj, obj, tmp5Result);
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
        const tmp4 = table;
      }
    }
    const merged = Object.assign({}, outer1_4, closure_0);
    let closure_2 = merged.ignoreContentTypes || outer1_3;
    let c3 = 1000;
    let closure_4 = {};
    return {
      onConnect() {
        const XHRInterceptor = lib(merged[1]).XHRInterceptor;
        XHRInterceptor.setSendCallback(onSend);
        const XHRInterceptor2 = lib(merged[1]).XHRInterceptor;
        XHRInterceptor2.setResponseCallback(onResponse);
        const XHRInterceptor3 = lib(merged[1]).XHRInterceptor;
        XHRInterceptor3.enableInterception();
      }
    };
  };
};