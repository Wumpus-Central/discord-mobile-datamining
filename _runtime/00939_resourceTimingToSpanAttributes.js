// _runtime/00939_resourceTimingToSpanAttributes.js
import _mod693 from "metro/00693__.js";
import extractNetworkProtocol from "00935_extractNetworkProtocol.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const resourceTimingToSpanAttributes = function resourceTimingToSpanAttributes(nextHopProtocol) {
  let fromEntriesResult;
  let result1;
  let result10;
  let result11;
  let result12;
  let result13;
  let result2;
  let result3;
  let result4;
  let result5;
  let result6;
  let result7;
  let result8;
  let result9;
  const obj = {};
  if (null != nextHopProtocol.nextHopProtocol) {
    const obj2 = extractNetworkProtocol;
    const result = obj2.extractNetworkProtocol(nextHopProtocol.nextHopProtocol);
    ({ version: obj["network.protocol.version"], name: obj["network.protocol.name"] } = result);
  }
  const obj3 = _mod693;
  if (obj3.browserPerformanceTimeOrigin()) {
    const obj4 = {
      "http.request.redirect_start": result1,
      "http.request.redirect_end": result2,
      "http.request.worker_start": result3,
      "http.request.fetch_start": result4,
      "http.request.domain_lookup_start": result5,
      "http.request.domain_lookup_end": result6,
      "http.request.connect_start": result7,
      "http.request.secure_connection_start": result8,
      "http.request.connection_end": result9,
      "http.request.request_start": result10,
      "http.request.response_start": result11,
      "http.request.response_end": result12,
      "http.request.time_to_first_byte": result13,
    };
    const merged = Object.assign(obj);
    const redirectStart = nextHopProtocol.redirectStart;
    result1 = redirectStart;
    if (result1) {
      const tmp4Result = _mod693;
      let timeOrigin = tmp4Result.browserPerformanceTimeOrigin();
      if (!timeOrigin) {
        const _performance = performance;
        timeOrigin = performance.timeOrigin;
      }
      result1 = (timeOrigin + redirectStart) / 1000;
    }
    const redirectEnd = nextHopProtocol.redirectEnd;
    result2 = redirectEnd;
    if (result2) {
      const tmp4Result13 = _mod693;
      let timeOrigin2 = tmp4Result13.browserPerformanceTimeOrigin();
      if (!timeOrigin2) {
        const _performance2 = performance;
        timeOrigin2 = performance.timeOrigin;
      }
      result2 = (timeOrigin2 + redirectEnd) / 1000;
    }
    const workerStart = nextHopProtocol.workerStart;
    result3 = workerStart;
    if (result3) {
      const tmp4Result14 = _mod693;
      let timeOrigin3 = tmp4Result14.browserPerformanceTimeOrigin();
      if (!timeOrigin3) {
        const _performance3 = performance;
        timeOrigin3 = performance.timeOrigin;
      }
      result3 = (timeOrigin3 + workerStart) / 1000;
    }
    const fetchStart = nextHopProtocol.fetchStart;
    result4 = fetchStart;
    if (result4) {
      const tmp4Result15 = _mod693;
      let timeOrigin4 = tmp4Result15.browserPerformanceTimeOrigin();
      if (!timeOrigin4) {
        const _performance4 = performance;
        timeOrigin4 = performance.timeOrigin;
      }
      result4 = (timeOrigin4 + fetchStart) / 1000;
    }
    const domainLookupStart = nextHopProtocol.domainLookupStart;
    result5 = domainLookupStart;
    if (result5) {
      const tmp4Result16 = _mod693;
      let timeOrigin5 = tmp4Result16.browserPerformanceTimeOrigin();
      if (!timeOrigin5) {
        const _performance5 = performance;
        timeOrigin5 = performance.timeOrigin;
      }
      result5 = (timeOrigin5 + domainLookupStart) / 1000;
    }
    const domainLookupEnd = nextHopProtocol.domainLookupEnd;
    result6 = domainLookupEnd;
    if (result6) {
      const tmp4Result17 = _mod693;
      let timeOrigin6 = tmp4Result17.browserPerformanceTimeOrigin();
      if (!timeOrigin6) {
        const _performance6 = performance;
        timeOrigin6 = performance.timeOrigin;
      }
      result6 = (timeOrigin6 + domainLookupEnd) / 1000;
    }
    const connectStart = nextHopProtocol.connectStart;
    result7 = connectStart;
    if (result7) {
      const tmp4Result18 = _mod693;
      let timeOrigin7 = tmp4Result18.browserPerformanceTimeOrigin();
      if (!timeOrigin7) {
        const _performance7 = performance;
        timeOrigin7 = performance.timeOrigin;
      }
      result7 = (timeOrigin7 + connectStart) / 1000;
    }
    const secureConnectionStart = nextHopProtocol.secureConnectionStart;
    result8 = secureConnectionStart;
    if (result8) {
      const tmp4Result19 = _mod693;
      let timeOrigin8 = tmp4Result19.browserPerformanceTimeOrigin();
      if (!timeOrigin8) {
        const _performance8 = performance;
        timeOrigin8 = performance.timeOrigin;
      }
      result8 = (timeOrigin8 + secureConnectionStart) / 1000;
    }
    const connectEnd = nextHopProtocol.connectEnd;
    result9 = connectEnd;
    if (result9) {
      const tmp4Result20 = _mod693;
      let timeOrigin9 = tmp4Result20.browserPerformanceTimeOrigin();
      if (!timeOrigin9) {
        const _performance9 = performance;
        timeOrigin9 = performance.timeOrigin;
      }
      result9 = (timeOrigin9 + connectEnd) / 1000;
    }
    const requestStart = nextHopProtocol.requestStart;
    result10 = requestStart;
    if (result10) {
      const tmp4Result21 = _mod693;
      let timeOrigin10 = tmp4Result21.browserPerformanceTimeOrigin();
      if (!timeOrigin10) {
        const _performance10 = performance;
        timeOrigin10 = performance.timeOrigin;
      }
      result10 = (timeOrigin10 + requestStart) / 1000;
    }
    const responseStart = nextHopProtocol.responseStart;
    result11 = responseStart;
    if (result11) {
      const tmp4Result22 = _mod693;
      let timeOrigin11 = tmp4Result22.browserPerformanceTimeOrigin();
      if (!timeOrigin11) {
        const _performance11 = performance;
        timeOrigin11 = performance.timeOrigin;
      }
      result11 = (timeOrigin11 + responseStart) / 1000;
    }
    const responseEnd = nextHopProtocol.responseEnd;
    result12 = responseEnd;
    if (result12) {
      const tmp4Result23 = _mod693;
      let timeOrigin12 = tmp4Result23.browserPerformanceTimeOrigin();
      if (!timeOrigin12) {
        const _performance12 = performance;
        timeOrigin12 = performance.timeOrigin;
      }
      result12 = (timeOrigin12 + responseEnd) / 1000;
    }
    result13 = undefined;
    if (null != nextHopProtocol.responseStart) {
      result13 = nextHopProtocol.responseStart / 1000;
    }
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(obj4);
    fromEntriesResult = fromEntries(
      entries.filter((item) => {
        let tmp;
        [, tmp] = item;
        return null != tmp;
      }),
    );
  } else {
    const tmp4Result24 = extractNetworkProtocol;
    const browserPerformanceAPI = tmp4Result24.getBrowserPerformanceAPI();
    let timeOrigin1;
    if (browserPerformanceAPI != null) {
      timeOrigin1 = browserPerformanceAPI.timeOrigin;
    }
    fromEntriesResult = obj;
  }
  return fromEntriesResult;
};
