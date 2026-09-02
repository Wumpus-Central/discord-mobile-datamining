// _runtime/01074_breadcrumbsIntegration.js
import registerSpanErrorInstrumentation from "00814_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = 1024;

export const breadcrumbsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = undefined;
  obj = { console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true };
  let merged = Object.assign(obj);
  obj = {
    name: "Breadcrumbs",
    setup(on) {
      if (obj.console) {
        obj = obj(closure_1_1[0]);
        obj = on;
        const result = obj.addConsoleInstrumentationHandler(function _consoleBreadcrumb(args) {
          obj = on(dom[0]);
          if (obj.getClient() === on) {
            obj = { category: "console", data: null, level: null, message: null };
            obj = { arguments: null, logger: "console" };
            obj[0] = args.args;
            obj[1] = obj;
            let tmpResult = tmp(tmp2[0]);
            obj[2] = tmpResult.severityLevelFromString(args.level);
            tmpResult = tmp(tmp2[0]);
            obj[3] = tmpResult.safeJoin(args.args, " ");
            if ("assert" === args.level) {
              if (false === args.args[0]) {
                args = args.args;
                const tmpResult1 = tmp(tmp2[0]);
                const _HermesInternal = HermesInternal;
                obj.message = "Assertion failed: " + tmp(tmp2[0]).safeJoin(args.slice(1), " ") || "console.assert";
                const args1 = args.args;
                obj.data.arguments = args1.slice(1);
                const tmp3 = tmp(tmp2[0]).safeJoin(args.slice(1), " ") || "console.assert";
              }
            }
            ({ args: obj3[0], level: obj3[1] } = args);
            tmp(tmp2[0]).addBreadcrumb(obj, { input: null, level: null });
            obj1 = { input: null, level: null };
            const tmpResult2 = tmp(tmp2[0]);
          }
        });
      }
      if (obj.dom) {
        obj = on;
        const dom = tmp.dom;
        const result1 = obj(closure_1_1[1]).addClickKeypressInstrumentationHandler(function _innerDomBreadcrumb(event) {
          obj = on(dom[0]);
          if (obj.getClient() === on) {
            let serializeAttribute;
            if (typeof dom === "object") {
              serializeAttribute = tmp15.serializeAttribute;
            }
            let maxStringLength;
            if (typeof dom === "object") {
              if (typeof tmp15.maxStringLength === "number") {
                maxStringLength = tmp15.maxStringLength;
              }
            }
            let tmp4 = maxStringLength;
            if (maxStringLength) {
              tmp4 = maxStringLength > closure_1_2;
            }
            let tmp6 = maxStringLength;
            if (tmp4) {
              if (tmp(tmp2[2]).DEBUG_BUILD) {
                const debug = tmp(tmp2[0]).debug;
                const _HermesInternal = HermesInternal;
                debug.warn(
                  "`dom.maxStringLength` cannot exceed 1024, but a value of " +
                    maxStringLength +
                    " was configured. Sentry will use 1024 instead.",
                );
              }
              tmp6 = closure_1_2;
            }
            let tmp9 = serializeAttribute;
            if (typeof serializeAttribute === "string") {
              const items = [serializeAttribute];
              tmp9 = items;
            }
            try {
              event = event.event;
              if (
                (function _isEvent(event) {
                  return event && event.target;
                })(event)
              ) {
                let target = event.target;
              } else {
                target = event;
              }
              let tmpResult = tmp(tmp2[0]);
              obj = { keyAttrs: null, maxStringLength: null };
              obj[0] = tmp9;
              obj[1] = tmp6;
              let str3 = tmpResult.htmlTreeAsString(target, obj);
              tmpResult = tmp(tmp2[0]);
              const componentName = tmpResult.getComponentName(target);
              if (0 !== str3.length) {
                obj = { category: null, message: null };
                const _HermesInternal2 = HermesInternal;
                obj[0] = "ui." + event.name;
                obj[1] = str3;
                if (componentName) {
                  obj1 = { "ui.component_name": null };
                  obj1[0] = componentName;
                  obj.data = obj1;
                }
                ({ event: obj7[0], name: obj7[1], global: obj7[2] } = event);
                tmp(tmp2[0]).addBreadcrumb(obj, { event: null, name: null, global: null });
                const obj2 = { event: null, name: null, global: null };
                const tmpResult1 = tmp(tmp2[0]);
              }
            } catch (err) {
              str3 = "<unknown>";
            }
          }
        });
        let obj2 = obj(closure_1_1[1]);
      }
      if (obj.xhr) {
        obj = on;
        const result2 = obj(closure_1_1[1]).addXhrInstrumentationHandler(function _xhrBreadcrumb(xhr) {
          obj = on(dom[0]);
          obj1 = on;
          if (obj.getClient() === on) {
            ({ startTimestamp, endTimestamp, xhr } = xhr);
            const tmp6 = xhr[tmp(undefined, tmp2[1]).SENTRY_XHR_DATA_KEY];
            if (startTimestamp) {
              if (endTimestamp) {
                if (tmp6) {
                  const status_code = tmp6.status_code;
                  obj = { method: null, url: null, status_code: null };
                  ({ method: obj3[0], url: obj3[1] } = tmp6);
                  obj[2] = status_code;
                  obj = { xhr: null, input: null, startTimestamp: null, endTimestamp: null };
                  obj[0] = xhr.xhr;
                  obj[1] = tmp6.body;
                  obj[2] = startTimestamp;
                  obj[3] = endTimestamp;
                  obj1 = { category: "xhr", data: null, type: "http", level: null };
                  obj1[1] = obj;
                  let tmpResult = tmp(tmp2[0]);
                  obj1[3] = tmpResult.getBreadcrumbLogLevelFromHttpStatusCode(status_code);
                  obj1.emit("beforeOutgoingRequestBreadcrumb", obj1, obj);
                  tmpResult = tmp(tmp2[0]);
                  tmpResult.addBreadcrumb(obj1, obj);
                }
              }
            }
          }
        });
        let obj3 = obj(closure_1_1[1]);
      }
      if (obj.fetch) {
        obj = on;
        const result3 = obj(closure_1_1[0]).addFetchInstrumentationHandler(function _fetchBreadcrumb(fetchData) {
          obj = on(dom[0]);
          obj1 = on;
          if (obj.getClient() === on) {
            ({ startTimestamp, endTimestamp } = fetchData);
            if (endTimestamp) {
              if (!str.match(/sentry_key/)) {
                const method = fetchData.fetchData.method;
                const url = fetchData.fetchData.url;
                if (fetchData.error) {
                  obj = { data: null, input: null, startTimestamp: null, endTimestamp: null };
                  ({ error: obj8[0], args: obj8[1] } = fetchData);
                  obj[2] = startTimestamp;
                  obj[3] = endTimestamp;
                  obj = { category: "fetch", data: null, level: "error", type: "http" };
                  obj[1] = fetchData.fetchData;
                  obj1.emit("beforeOutgoingRequestBreadcrumb", obj, obj);
                  let tmpResult = tmp(tmp2[0]);
                  tmpResult.addBreadcrumb(obj, obj);
                } else {
                  const response = fetchData.response;
                  obj1 = {};
                  const merged = Object.assign(fetchData.fetchData);
                  let status;
                  if (response != null) {
                    status = response.status;
                  }
                  obj1.status_code = status;
                  const request_body_size = fetchData.fetchData.request_body_size;
                  const response_body_size = fetchData.fetchData.response_body_size;
                  const obj2 = { input: null, response: null, startTimestamp: null, endTimestamp: null };
                  obj2[0] = fetchData.args;
                  obj2[1] = response;
                  obj2[2] = startTimestamp;
                  obj2[3] = endTimestamp;
                  const obj3 = { category: "fetch", data: null, type: "http", level: null };
                  obj3[1] = obj1;
                  tmpResult = tmp(tmp2[0]);
                  obj3[3] = tmpResult.getBreadcrumbLogLevelFromHttpStatusCode(obj1.status_code);
                  obj1.emit("beforeOutgoingRequestBreadcrumb", obj3, obj2);
                  tmp(tmp2[0]).addBreadcrumb(obj3, obj2);
                  const tmpResult1 = tmp(tmp2[0]);
                }
              }
              str = fetchData.fetchData.url;
            }
          }
        });
        const obj4 = obj(closure_1_1[0]);
      }
      if (obj.history) {
        obj = on;
        const result4 = obj(closure_1_1[1]).addHistoryInstrumentationHandler(function _historyBreadcrumb(arg0) {
          obj = on(dom[0]);
          if (obj.getClient() === on) {
            ({ from, to } = arg0);
            let tmpResult = tmp(tmp2[0]);
            const url2 = tmpResult.parseUrl(tmp(tmp2[3]).WINDOW.location.href);
            let parseUrlResult;
            if (from) {
              tmpResult = tmp(tmp2[0]);
              parseUrlResult = tmpResult.parseUrl(from);
            }
            const url = tmp(tmp2[0]).parseUrl(to);
            let path;
            if (parseUrlResult != null) {
              path = parseUrlResult.path;
            }
            if (!path) {
              parseUrlResult = url2;
            }
            if (tmp6) {
              to = url.relative;
            }
            let relative = from;
            if (tmp7) {
              relative = parseUrlResult.relative;
            }
            tmp6 = url2.protocol === url.protocol && url2.host === url.host;
            tmp7 = url2.protocol === parseUrlResult.protocol && url2.host === parseUrlResult.host;
            const tmpResult1 = tmp(tmp2[0]);
            obj = { category: "navigation", data: null };
            obj = { from: null, to: null };
            obj[0] = relative;
            obj[1] = to;
            obj[1] = obj;
            tmp(tmp2[0]).addBreadcrumb(obj);
            const tmpResult2 = tmp(tmp2[0]);
          }
        });
        const obj5 = obj(closure_1_1[1]);
      }
      if (obj.sentry) {
        obj = on;
        on.on("beforeSendEvent", function addSentryBreadcrumb(type) {
          obj = on(dom[0]);
          if (obj.getClient() === on) {
            let tmpResult = tmp(tmp2[0]);
            let str = "event";
            if ("transaction" === type.type) {
              str = "transaction";
            }
            obj = { category: null, event_id: null, level: null, message: null };
            obj[0] = `sentry.${str}`;
            ({ event_id: obj2[1], level: obj2[2] } = type);
            tmpResult = tmp(tmp2[0]);
            obj[3] = tmpResult.getEventDescription(type);
            obj = { event: null };
            obj[0] = type;
            tmpResult.addBreadcrumb(obj, obj);
          }
        });
      }
    },
  };
  return obj;
});
