import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const reportingObserverIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0;
  function handler(arg0) {
    if (map.has(obj.getClient())) {
      function _loop(iter) {
        const callback = iter;
        callback(table[0]).withScope((setExtra) => {
          setExtra.setExtra("url", iter.url);
          let str = "No details available";
          const combined = "ReportingObserver [" + iter.type + "]";
          if (iter.body) {
            const obj = {};
            for (const key10019 in iter.body) {
              let tmp10 = key10019;
              let tmp11 = iter;
              obj[key10019] = iter.body[key10019];
              continue;
            }
            setExtra.setExtra("body", obj);
            if ("crash" === iter.type) {
              const body = tmp5.body;
              const items = [body.crashId || "", body.reason || ""];
              const str5 = items.join(" ");
              const tmp7 = body.crashId || "";
              str = items.join(" ").trim() || "No details available";
              const tmp8 = items.join(" ").trim() || "No details available";
            } else {
              str = tmp5.body.message || "No details available";
              const tmp6 = tmp5.body.message || "No details available";
            }
          }
          iter(outer1_1[0]).captureMessage("" + combined + ": " + str);
        });
      }
      const iter = arg0[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
    }
  }
  closure_0 = obj.types || ["crash", "deprecation", "intervention"];
  obj = {
    name: "ReportingObserver",
    setupOnce() {
      let obj = callback(handler[0]);
      if (obj.supportsReportingObserver()) {
        obj = { buffered: true, types: null };
        obj[1] = callback;
        const reportingObserver = new callback(handler[0]).GLOBAL_OBJ.ReportingObserver(handler, obj);
        reportingObserver.observe();
      }
    },
    setup(arg0) {
      const result = map.set(arg0, true);
    }
  };
  return obj;
});