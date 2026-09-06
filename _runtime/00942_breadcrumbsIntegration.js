// === Module 942: breadcrumbsIntegration ===

// Module 942 (breadcrumbsIntegration)
import triggerHandlers from "triggerHandlers" /* 898 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = 1024;

export const breadcrumbsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  if (data === undefined) {
    data = {};
  }
  data = { console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true };
  let merged = Object.assign(data);
  data = {
    name: "Breadcrumbs",
    setup(on) {
      if (obj.console) {
        obj = registerSpanErrorInstrumentation;
        const result = obj.addConsoleInstrumentationHandler(function _consoleBreadcrumb(args) {
          data = data(682);
          if (data.getClient() === closure_0) {
            data = { category: "console", data: null, level: null, message: null };
            data = { arguments: args.args, logger: "console" };
            data.data = data;
            let tmpResult = tmp(682);
            data.level = tmpResult.severityLevelFromString(args.level);
            tmpResult = tmp(682);
            data.message = tmpResult.safeJoin(args.args, " ");
            if ("assert" === args.level) {
              if (false === args.args[0]) {
                args = args.args;
                const tmpResult1 = tmp(682);
                const _HermesInternal = HermesInternal;
                data.message = "Assertion failed: " + tmp(682).safeJoin(args.slice(1), " ") || "console.assert";
                const args1 = args.args;
                data.data.arguments = args1.slice(1);
                const tmp3 = tmp(682).safeJoin(args.slice(1), " ") || "console.assert";
              }
            }
            ({ args: obj3.input, level: obj3.level } = args);
            tmp(682).addBreadcrumb(data, { input: null, level: null });
            const obj1 = { input: null, level: null };
            const tmpResult2 = tmp(682);
          }
        });
      }
      if (obj.dom) {
        const dom = tmp.dom;
        const result1 = triggerHandlers.addClickKeypressInstrumentationHandler(function _innerDomBreadcrumb(event) {
          obj = obj(682);
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
              if (tmp(937).DEBUG_BUILD) {
                const debug = tmp(682).debug;
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
              let tmpResult = tmp(682);
              obj = { keyAttrs: tmp9, maxStringLength: tmp6 };
              let str3 = tmpResult.htmlTreeAsString(target, obj);
              tmpResult = tmp(682);
              const componentName = tmpResult.getComponentName(target);
              if (0 !== str3.length) {
                obj = { category: null, message: null };
                const _HermesInternal2 = HermesInternal;
                obj.category = "ui." + event.name;
                obj.message = str3;
                if (componentName) {
                  const obj1 = { "ui.component_name": componentName };
                  obj.data = obj1;
                }
                ({ event: obj7.event, name: obj7.name, global: obj7.global } = event);
                tmp(682).addBreadcrumb(obj, { event: null, name: null, global: null });
                const obj2 = { event: null, name: null, global: null };
                const tmpResult1 = tmp(682);
              }
            } catch (err) {
              str3 = "<unknown>";
            }
          }
        });
      }
      if (obj.xhr) {
        const result2 = triggerHandlers.addXhrInstrumentationHandler(function _xhrBreadcrumb(xhr) {
          obj = obj(682);
          if (obj.getClient() === on) {
            ({ startTimestamp, endTimestamp, xhr } = xhr);
            const tmp6 = xhr[tmp(undefined, 898).SENTRY_XHR_DATA_KEY];
            if (startTimestamp) {
              if (endTimestamp) {
                if (tmp6) {
                  const status_code = tmp6.status_code;
                  const request = { method: null, url: null, status_code: null };
                  ({ method: obj3.method, url: obj3.url } = tmp6);
                  request.status_code = status_code;
                  obj = { xhr: xhr.xhr, input: tmp6.body, startTimestamp, endTimestamp };
                  obj = { category: "xhr", data: request, type: "http", level: null };
                  let tmpResult = tmp(682);
                  obj.level = tmpResult.getBreadcrumbLogLevelFromHttpStatusCode(status_code);
                  on.emit("beforeOutgoingRequestBreadcrumb", obj, obj);
                  tmpResult = tmp(682);
                  tmpResult.addBreadcrumb(obj, obj);
                }
              }
            }
          }
        });
      }
      if (obj.fetch) {
        const result3 = registerSpanErrorInstrumentation.addFetchInstrumentationHandler(function _fetchBreadcrumb(fetchData) {
          obj = obj(682);
          let obj1 = closure_0;
          if (obj.getClient() === closure_0) {
            ({ startTimestamp, endTimestamp } = fetchData);
            if (endTimestamp) {
              if (!str.match(/sentry_key/)) {
                const method = fetchData.fetchData.method;
                const url = fetchData.fetchData.url;
                if (fetchData.error) {
                  obj = { data: null, input: null, startTimestamp: null, endTimestamp: null };
                  ({ error: obj8.data, args: obj8.input } = fetchData);
                  obj.startTimestamp = startTimestamp;
                  obj.endTimestamp = endTimestamp;
                  obj = { category: "fetch", data: fetchData.fetchData, level: "error", type: "http" };
                  obj1.emit("beforeOutgoingRequestBreadcrumb", obj, obj);
                  let tmpResult = tmp(682);
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
                  const obj2 = { input: fetchData.args, response, startTimestamp, endTimestamp };
                  const obj3 = { category: "fetch", data: obj1, type: "http", level: null };
                  tmpResult = tmp(682);
                  obj3.level = tmpResult.getBreadcrumbLogLevelFromHttpStatusCode(obj1.status_code);
                  obj1.emit("beforeOutgoingRequestBreadcrumb", obj3, obj2);
                  tmp(682).addBreadcrumb(obj3, obj2);
                  const tmpResult1 = tmp(682);
                }
              }
              str = fetchData.fetchData.url;
            }
          }
        });
      }
      if (obj.history) {
        const result4 = triggerHandlers.addHistoryInstrumentationHandler(function _historyBreadcrumb(arg0) {
          data = data(682);
          if (data.getClient() === closure_0) {
            ({ from, to } = arg0);
            let tmpResult = tmp(682);
            const url2 = tmpResult.parseUrl(tmp(893).WINDOW.location.href);
            let parseUrlResult;
            if (from) {
              tmpResult = tmp(682);
              parseUrlResult = tmpResult.parseUrl(from);
            }
            const url = tmp(682).parseUrl(to);
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
            const tmpResult1 = tmp(682);
            data = { category: "navigation", data: null };
            data = { from: relative, to };
            data.data = data;
            tmp(682).addBreadcrumb(data);
            const tmpResult2 = tmp(682);
          }
        });
      }
      if (obj.sentry) {
        on.on("beforeSendEvent", function addSentryBreadcrumb(type) {
          obj = obj(682);
          if (obj.getClient() === closure_0) {
            let tmpResult = tmp(682);
            let str = "event";
            if ("transaction" === type.type) {
              str = "transaction";
            }
            obj = { category: `sentry.${str}`, event_id: null, level: null, message: null };
            ({ event_id: obj2.event_id, level: obj2.level } = type);
            tmpResult = tmp(682);
            obj.message = tmpResult.getEventDescription(type);
            obj = { event: type };
            tmpResult.addBreadcrumb(obj, obj);
          }
        });
      }
    }
  };
  return data;
});