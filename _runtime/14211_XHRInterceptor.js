// === Module 14211: XHRInterceptor ===

// Module 14211 (XHRInterceptor)
let c0, c1, c2, c3, c4;

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
    const tmp = c8;
    if (!tmp) {
      const _XMLHttpRequest = XMLHttpRequest;
      XMLHttpRequest.prototype.open = function(arg0, arg1) {
        const self = this;
        if (closure_1_0) {
          tmp(arg0, arg1, self);
        }
        open(...arguments);
      };
      const _XMLHttpRequest2 = XMLHttpRequest;
      XMLHttpRequest.prototype.setRequestHeader = function(arg0, arg1) {
        const self = this;
        if (closure_1_2) {
          tmp(arg0, arg1, self);
        }
        setRequestHeader(...arguments);
      };
      const _XMLHttpRequest3 = XMLHttpRequest;
      XMLHttpRequest.prototype.send = function(arg0) {
        const self = this;
        if (closure_1) {
          tmp(arg0, self);
        }
        if (self.addEventListener) {
          const listener = self.addEventListener("readystatechange", () => {
            if (closure_2_8) {
              if (self.readyState === self.HEADERS_RECEIVED) {
                let first;
                let parsed;
                const str2 = self.getResponseHeader("Content-Type");
                const responseHeader = self.getResponseHeader("Content-Length");
                if (str2) {
                  first = str2.split(";")[0];
                }
                if (responseHeader) {
                  const _parseInt = parseInt;
                  parsed = parseInt(responseHeader, 10);
                }
                if (closure_2_3) {
                  tmp6(first, parsed, self.getAllResponseHeaders(), self);
                }
              }
              const tmp11 = self.readyState === self.DONE && closure_2_4;
              if (tmp11) {
                closure_2_4(self.status, self.timeout, self.response, self.responseURL, self.responseType, self);
              }
            }
          }, false);
        }
        closure_6(...arguments);
      };
      c8 = true;
    }
  },
  disableInterception() {
    const tmp = c8;
    if (tmp) {
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
  }
};