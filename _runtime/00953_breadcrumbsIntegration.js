// === Module 953: breadcrumbsIntegration ===

// Module 953 (breadcrumbsIntegration)
import triggerHandlers from "triggerHandlers" /* 909 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = 1024;

export const breadcrumbsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = { console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true };
  let merged = Object.assign(obj);
  return {
    name: "Breadcrumbs",
    setup(on) {
      if (obj2.console) {
        const result = registerSpanErrorInstrumentation.addConsoleInstrumentationHandler(function _consoleBreadcrumb(args) {
          if (obj.getClient() === closure_0) {
            obj2 = { category: "console", data: null, level: null, message: null };
            const obj4 = { arguments: args.args, logger: "console" };
            obj2.data = obj4;
            obj2.level = tmp(693).severityLevelFromString(args.level);
            const tmpResult = tmp(693);
            obj2.message = tmp(693).safeJoin(args.args, " ");
            if ("assert" === args.level) {
              if (false === args.args[0]) {
                args = args.args;
                const tmpResult5 = tmp(693);
                const _HermesInternal = HermesInternal;
                obj2.message = "Assertion failed: " + tmp(693).safeJoin(args.slice(1), " ") || "console.assert";
                const args1 = args.args;
                obj2.data.arguments = args1.slice(1);
                const tmp3 = tmp(693).safeJoin(args.slice(1), " ") || "console.assert";
              }
            }
            const tmpResult4 = tmp(693);
            ({ args: obj3.input, level: obj3.level } = args);
            tmp(693).addBreadcrumb(obj2, { input: null, level: null });
            const obj5 = { input: null, level: null };
            const tmpResult6 = tmp(693);
          }
          obj = obj2(693);
        });
      }
      if (obj2.dom) {
        obj2 = triggerHandlers;
        const dom = tmp.dom;
        const result1 = obj2.addClickKeypressInstrumentationHandler(function _innerDomBreadcrumb(event) {
          if (obj.getClient() === closure_0) {
            let serializeAttribute;
            if (typeof dom === "object") {
              serializeAttribute = dom.serializeAttribute;
            }
            let maxStringLength;
            if (typeof dom === "object") {
              if (typeof dom.maxStringLength === "number") {
                maxStringLength = dom.maxStringLength;
              }
            }
            let tmp4 = maxStringLength;
            if (maxStringLength) {
              tmp4 = maxStringLength > closure_2_2;
            }
            let tmp6 = maxStringLength;
            if (tmp4) {
              if (tmp(948).DEBUG_BUILD) {
                const debug = tmp(693).debug;
                const _HermesInternal = HermesInternal;
                debug.warn("`dom.maxStringLength` cannot exceed 1024, but a value of " + maxStringLength + " was configured. Sentry will use 1024 instead.");
              }
              tmp6 = closure_2_2;
            }
            let tmp9 = serializeAttribute;
            if (typeof serializeAttribute === "string") {
              const items = [serializeAttribute];
              tmp9 = items;
            }
            try {
              event = event.event;
              if ((function _isEvent(event) {
                return event && event.target;
              })(event)) {
                let target = event.target;
              } else {
                target = event;
              }
              obj2 = { keyAttrs: tmp9, maxStringLength: tmp6 };
              let str3 = tmp(693).htmlTreeAsString(target, obj2);
              const tmpResult = tmp(693);
              const componentName = tmp(693).getComponentName(target);
              if (0 !== str3.length) {
                const obj3 = { category: null, message: null };
                const _HermesInternal2 = HermesInternal;
                obj3.category = "ui." + event.name;
                obj3.message = str3;
                if (componentName) {
                  const obj4 = { "ui.component_name": componentName };
                  obj3.data = obj4;
                }
                ({ event: obj7.event, name: obj7.name, global: obj7.global } = event);
                tmp(693).addBreadcrumb(obj3, { event: null, name: null, global: null });
                const obj5 = { event: null, name: null, global: null };
                const tmpResult4 = tmp(693);
              }
              const tmpResult3 = tmp(693);
            } catch (err) {
              str3 = "<unknown>";
            }
          }
          obj = obj2(693);
        });
      }
      if (obj2.xhr) {
        const result2 = triggerHandlers.addXhrInstrumentationHandler(function _xhrBreadcrumb(xhr) {
          if (obj.getClient() === on) {
            ({ startTimestamp, endTimestamp, xhr } = xhr);
            const tmp6 = xhr[on(undefined, 909).SENTRY_XHR_DATA_KEY];
            if (startTimestamp) {
              if (endTimestamp) {
                if (tmp6) {
                  const status_code = tmp6.status_code;
                  const request = { method: null, url: null, status_code: null };
                  ({ method: obj3.method, url: obj3.url } = tmp6);
                  request.status_code = status_code;
                  const obj4 = { xhr: xhr.xhr, input: tmp6.body, startTimestamp, endTimestamp };
                  const obj5 = { category: "xhr", data: request, type: "http", level: on(693).getBreadcrumbLogLevelFromHttpStatusCode(status_code) };
                  on.emit("beforeOutgoingRequestBreadcrumb", obj5, obj4);
                  const tmpResult = on(693);
                  on(693).addBreadcrumb(obj5, obj4);
                  const tmpResult2 = on(693);
                }
              }
            }
          }
          obj = on(693);
        });
      }
      if (obj2.fetch) {
        const result3 = registerSpanErrorInstrumentation.addFetchInstrumentationHandler(function _fetchBreadcrumb(fetchData) {
          if (obj.getClient() === on) {
            ({ startTimestamp, endTimestamp } = fetchData);
            if (endTimestamp) {
              if (!str.match(/sentry_key/)) {
                const method = fetchData.fetchData.method;
                const url = fetchData.fetchData.url;
                if (fetchData.error) {
                  const obj3 = { data: null, input: null, startTimestamp: null, endTimestamp: null };
                  ({ error: obj8.data, args: obj8.input } = fetchData);
                  obj3.startTimestamp = startTimestamp;
                  obj3.endTimestamp = endTimestamp;
                  const obj4 = { category: "fetch", data: fetchData.fetchData, level: "error", type: "http" };
                  on.emit("beforeOutgoingRequestBreadcrumb", obj4, obj3);
                  on(693).addBreadcrumb(obj4, obj3);
                  const tmpResult = on(693);
                } else {
                  const response = fetchData.response;
                  const obj5 = {};
                  const merged = Object.assign(fetchData.fetchData);
                  let status;
                  if (response != null) {
                    status = response.status;
                  }
                  obj5.status_code = status;
                  const request_body_size = fetchData.fetchData.request_body_size;
                  const response_body_size = fetchData.fetchData.response_body_size;
                  const obj6 = { input: fetchData.args, response, startTimestamp, endTimestamp };
                  const obj7 = { category: "fetch", data: obj5, type: "http", level: on(693).getBreadcrumbLogLevelFromHttpStatusCode(obj5.status_code) };
                  on.emit("beforeOutgoingRequestBreadcrumb", obj7, obj6);
                  const tmpResult3 = on(693);
                  on(693).addBreadcrumb(obj7, obj6);
                  const tmpResult4 = on(693);
                }
              }
              str = fetchData.fetchData.url;
            }
          }
          obj = on(693);
        });
      }
      if (obj2.history) {
        const result4 = triggerHandlers.addHistoryInstrumentationHandler(function _historyBreadcrumb(arg0) {
          if (obj.getClient() === closure_0) {
            ({ from, to } = arg0);
            const url2 = tmp(693).parseUrl(tmp(904).WINDOW.location.href);
            let parseUrlResult;
            if (from) {
              parseUrlResult = tmp(693).parseUrl(from);
              const tmpResult4 = tmp(693);
            }
            const tmpResult = tmp(693);
            const url = tmp(693).parseUrl(to);
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
            const tmpResult5 = tmp(693);
            obj2 = { category: "navigation", data: null };
            const obj3 = { from: relative, to };
            obj2.data = obj3;
            tmp(693).addBreadcrumb(obj2);
            const tmpResult6 = tmp(693);
          }
          obj = obj2(693);
        });
      }
      if (obj2.sentry) {
        on.on("beforeSendEvent", function addSentryBreadcrumb(type) {
          if (obj.getClient() === closure_0) {
            let str = "event";
            if ("transaction" === type.type) {
              str = "transaction";
            }
            const obj3 = { category: `sentry.${str}`, event_id: null, level: null, message: null };
            ({ event_id: obj2.event_id, level: obj2.level } = type);
            const tmpResult = obj2(693);
            obj3.message = obj2(693).getEventDescription(type);
            const obj4 = { event: type };
            tmpResult.addBreadcrumb(obj3, obj4);
            const tmpResult2 = obj2(693);
          }
          obj = obj2(693);
        });
      }
    }
  };
});