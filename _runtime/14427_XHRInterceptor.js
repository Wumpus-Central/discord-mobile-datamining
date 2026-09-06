// _runtime/14427_XHRInterceptor.js
let c8 = false;

export const XHRInterceptor = {
  setOpenCallback(arg0) {
    c0 = arg0;
  },
  setSendCallback(onSend) {
    c1 = onSend;
  },
  setHeaderReceivedCallback(arg0) {
    c3 = arg0;
  },
  setResponseCallback(onResponse) {
    c4 = onResponse;
  },
  setRequestHeaderCallback(arg0) {
    c2 = arg0;
  },
  isInterceptorEnabled() {
    return c8;
  },
  enableInterception() {
    if (!c8) {
      const _XMLHttpRequest = XMLHttpRequest;
      XMLHttpRequest.prototype.open = function (arg0, arg1) {
        const self = this;
        if (closure_1_0) {
          tmp(arg0, arg1, self);
        }
        const apply = open.apply;
        if (typeof apply === "unknown") {
          HermesBuiltin.applyArguments(self);
        } else {
          apply(self, arguments);
        }
      };
      const _XMLHttpRequest2 = XMLHttpRequest;
      XMLHttpRequest.prototype.setRequestHeader = function (arg0, arg1) {
        const self = this;
        if (closure_1_2) {
          tmp(arg0, arg1, self);
        }
        const apply = setRequestHeader.apply;
        if (typeof apply === "unknown") {
          HermesBuiltin.applyArguments(self);
        } else {
          apply(self, arguments);
        }
      };
      const _XMLHttpRequest3 = XMLHttpRequest;
      XMLHttpRequest.prototype.send = function (arg0) {
        const self = this;
        if (closure_1) {
          tmp(arg0, self);
        }
        if (self.addEventListener) {
          const listener = self.addEventListener(
            "readystatechange",
            () => {
              if (closure_2_8) {
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
                  if (closure_2_3) {
                    tmp5(first, parsed, obj.getAllResponseHeaders(), obj);
                  }
                }
                if (tmp10) {
                  closure_2_4(obj.status, obj.timeout, obj.response, obj.responseURL, obj.responseType, obj);
                }
                tmp10 = self.readyState === self.DONE && closure_2_4;
              }
            },
            false,
          );
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
      c4 = null;
      c0 = null;
      c1 = null;
      c3 = null;
      c2 = null;
    }
  },
};
