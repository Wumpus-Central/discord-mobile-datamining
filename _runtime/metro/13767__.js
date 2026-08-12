// _runtime/metro/13767__.js
arg5.XHRInterceptor = undefined;
let c8 = false;
arg5.XHRInterceptor = {
  setOpenCallback(arg0) {
    let closure_0 = arg0;
  },
  setSendCallback(onSend) {
    let closure_1 = onSend;
  },
  setHeaderReceivedCallback(arg0) {
    let closure_3 = arg0;
  },
  setResponseCallback(onResponse) {
    let closure_4 = onResponse;
  },
  setRequestHeaderCallback(arg0) {
    let closure_2 = arg0;
  },
  isInterceptorEnabled() {
    return c8;
  },
  enableInterception() {
    if (!c8) {
      const _XMLHttpRequest = XMLHttpRequest;
      XMLHttpRequest.prototype.open = function(arg0, arg1) {
        const self = this;
        if (closure_0) {
          tmp(arg0, arg1, self);
        }
        const apply = closure_5.apply;
        if (typeof apply === "unknown") {
          HermesBuiltin.applyArguments(self);
        } else {
          apply(self, arguments);
        }
      };
      const _XMLHttpRequest2 = XMLHttpRequest;
      XMLHttpRequest.prototype.setRequestHeader = function(arg0, arg1) {
        const self = this;
        if (closure_2) {
          tmp(arg0, arg1, self);
        }
        const apply = closure_7.apply;
        if (typeof apply === "unknown") {
          HermesBuiltin.applyArguments(self);
        } else {
          apply(self, arguments);
        }
      };
      const _XMLHttpRequest3 = XMLHttpRequest;
      XMLHttpRequest.prototype.send = function(arg0) {
        let self = this;
        self = this;
        if (closure_1) {
          tmp(arg0, self);
        }
        if (self.addEventListener) {
          const listener = self.addEventListener("readystatechange", () => {
            if (outer1_8) {
              if (self.readyState === self.HEADERS_RECEIVED) {
                const str2 = obj.getResponseHeader("Content-Type");
                const responseHeader = obj.getResponseHeader("Content-Length");
                if (str2) {
                  const first = str2.split(";")[0];
                }
                if (responseHeader) {
                  const _parseInt = parseInt;
                  const parsed = parseInt(responseHeader, 10);
                }
                if (outer1_3) {
                  tmp5(first, parsed, obj.getAllResponseHeaders(), obj);
                }
              }
              if (tmp10) {
                outer1_4(obj.status, obj.timeout, obj.response, obj.responseURL, obj.responseType, obj);
              }
              tmp10 = self.readyState === self.DONE && outer1_4;
            }
          }, false);
        }
        const apply = closure_6.apply;
        if (typeof apply === "unknown") {
          HermesBuiltin.applyArguments(self);
        } else {
          apply(self, arguments);
        }
      };
      c8 = true;
    }
  },
  disableInterception() {
    if (c8) {
      c8 = false;
      const _XMLHttpRequest = XMLHttpRequest;
      XMLHttpRequest.prototype.send = send;
      const _XMLHttpRequest2 = XMLHttpRequest;
      XMLHttpRequest.prototype.open = open;
      const _XMLHttpRequest3 = XMLHttpRequest;
      XMLHttpRequest.prototype.setRequestHeader = setRequestHeader;
      let c4 = null;
      let c0 = null;
      let c1 = null;
      let c3 = null;
      let c2 = null;
    }
  }
};