// _runtime/00953_breadcrumbsIntegration.js
import _addMeasureSpans from "00909__addMeasureSpans.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = 1024;

export const breadcrumbsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = { console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true };
  let merged = Object.assign(obj);
  let obj3 = {
    name: "Breadcrumbs",
    setup(on) {
      if (obj2.console) {
        let obj = registerSpanErrorInstrumentation;
        let closure_0 = on;
        const result = obj.addConsoleInstrumentationHandler(function _consoleBreadcrumb(args) {
          let obj4;
          let tmpResult;
          let tmpResult4;
          const obj = closure_2_0(closure_2_1[0]);
          if (obj.getClient() === closure_0) {
            obj2 = {
              category: "console",
              data: obj4,
              level: tmpResult.severityLevelFromString(args.level),
              message: tmpResult4.safeJoin(args.args, " "),
            };
            obj4 = { arguments: args.args, logger: "console" };
            tmpResult = closure_2_0(closure_2_1[0]);
            tmpResult4 = closure_2_0(closure_2_1[0]);
            if ("assert" === args.level) {
              if (false === args.args[0]) {
                args = args.args;
                const _HermesInternal = HermesInternal;
                const tmpResult5 = closure_2_0(closure_2_1[0]);
                const tmp3 = tmpResult5.safeJoin(args.slice(1), " ") || "console.assert";
                obj2.message = "Assertion failed: " + tmp3;
                const args1 = args.args;
                obj2.data.arguments = args1.slice(1);
              }
            }
            const obj5 = { input: null, level: null };
            ({ args: obj3.input, level: obj3.level } = args);
            const tmpResult6 = closure_2_0(closure_2_1[0]);
            tmpResult6.addBreadcrumb(obj2, obj5);
          }
        });
      }
      if (obj2.dom) {
        obj2 = _addMeasureSpans;
        closure_0 = on;
        const dom = tmp.dom;
        const result1 = obj2.addClickKeypressInstrumentationHandler(function _innerDomBreadcrumb(event) {
          function _isEvent(event) {
            return event && event.target;
          }
          const obj = closure_2_0(closure_2_1[0]);
          if (obj.getClient() === closure_0) {
            let str3;
            let componentName;
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
            let tmp7 = maxStringLength;
            const tmp5 = maxStringLength && maxStringLength > closure_2_2;
            if (tmp5) {
              if (closure_2_0(closure_2_1[2]).DEBUG_BUILD) {
                const debug = closure_2_0(closure_2_1[0]).debug;
                const _HermesInternal = HermesInternal;
                debug.warn(
                  "`dom.maxStringLength` cannot exceed 1024, but a value of " +
                    maxStringLength +
                    " was configured. Sentry will use 1024 instead.",
                );
              }
              tmp7 = closure_2_2;
            }
            let tmp10 = serializeAttribute;
            if (typeof serializeAttribute === "string") {
              const items = [serializeAttribute];
              tmp10 = items;
            }
            try {
              let target;
              event = event.event;
              if (_isEvent(event)) {
                target = event.target;
              } else {
                target = event;
              }
              obj2 = { keyAttrs: tmp10, maxStringLength: tmp7 };
              const tmp2Result = closure_2_0(closure_2_1[0]);
              str3 = tmp2Result.htmlTreeAsString(target, obj2);
              const tmp2Result3 = closure_2_0(closure_2_1[0]);
              componentName = tmp2Result3.getComponentName(target);
            } catch (err) {
              str3 = "<unknown>";
            }
            if (0 !== str3.length) {
              const obj3 = { category: "ui." + event.name, message: str3 };
              const _HermesInternal2 = HermesInternal;
              const tmp18 = componentName;
              if (tmp18) {
                const obj4 = { "ui.component_name": componentName };
                obj3.data = obj4;
              }
              const obj5 = { event: null, name: null, global: null };
              ({ event: obj7.event, name: obj7.name, global: obj7.global } = event);
              const tmp2Result4 = closure_2_0(closure_2_1[0]);
              tmp2Result4.addBreadcrumb(obj3, obj5);
            }
          }
        });
      }
      if (obj2.xhr) {
        let obj3 = _addMeasureSpans;
        closure_0 = on;
        const result2 = obj3.addXhrInstrumentationHandler(function _xhrBreadcrumb(xhr) {
          let endTimestamp;
          let startTimestamp;
          let tmpResult;
          const obj = obj2(closure_2_1[0]);
          if (obj.getClient() === closure_0) {
            ({ startTimestamp, endTimestamp, xhr } = xhr);
            const tmp6 = xhr[obj2(undefined, closure_2_1[1]).SENTRY_XHR_DATA_KEY];
            if (startTimestamp) {
              if (endTimestamp) {
                if (tmp6) {
                  const status_code = tmp6.status_code;
                  const request = { method: null, url: null, status_code };
                  ({ method: obj3.method, url: obj3.url } = tmp6);
                  const obj4 = { xhr: xhr.xhr, input: tmp6.body, startTimestamp, endTimestamp };
                  const obj5 = {
                    category: "xhr",
                    data: request,
                    type: "http",
                    level: tmpResult.getBreadcrumbLogLevelFromHttpStatusCode(status_code),
                  };
                  tmpResult = obj2(closure_2_1[0]);
                  closure_0.emit("beforeOutgoingRequestBreadcrumb", obj5, obj4);
                  const tmpResult2 = obj2(closure_2_1[0]);
                  tmpResult2.addBreadcrumb(obj5, obj4);
                }
              }
            }
          }
        });
      }
      if (obj2.fetch) {
        let obj4 = registerSpanErrorInstrumentation;
        closure_0 = on;
        const result3 = obj4.addFetchInstrumentationHandler(function _fetchBreadcrumb(fetchData) {
          let endTimestamp;
          let startTimestamp;
          let status;
          let tmpResult3;
          const obj = obj2(closure_2_1[0]);
          if (obj.getClient() === closure_0) {
            ({ startTimestamp, endTimestamp } = fetchData);
            if (endTimestamp) {
              const str = fetchData.fetchData.url;
              if (!str.match(/sentry_key/)) {
                const method = fetchData.fetchData.method;
                const url = fetchData.fetchData.url;
                if (fetchData.error) {
                  const obj3 = { data: null, input: null, startTimestamp, endTimestamp };
                  ({ error: obj8.data, args: obj8.input } = fetchData);
                  const obj4 = { category: "fetch", data: fetchData.fetchData, level: "error", type: "http" };
                  closure_0.emit("beforeOutgoingRequestBreadcrumb", obj4, obj3);
                  const tmpResult = obj2(closure_2_1[0]);
                  tmpResult.addBreadcrumb(obj4, obj3);
                } else {
                  const response = fetchData.response;
                  const obj5 = { status_code: status };
                  const merged = Object.assign(fetchData.fetchData);
                  status = undefined;
                  if (response != null) {
                    status = response.status;
                  }
                  const request_body_size = fetchData.fetchData.request_body_size;
                  const response_body_size = fetchData.fetchData.response_body_size;
                  const obj6 = { input: fetchData.args, response, startTimestamp, endTimestamp };
                  const obj7 = {
                    category: "fetch",
                    data: obj5,
                    type: "http",
                    level: tmpResult3.getBreadcrumbLogLevelFromHttpStatusCode(obj5.status_code),
                  };
                  tmpResult3 = obj2(closure_2_1[0]);
                  closure_0.emit("beforeOutgoingRequestBreadcrumb", obj7, obj6);
                  const tmpResult4 = obj2(closure_2_1[0]);
                  tmpResult4.addBreadcrumb(obj7, obj6);
                }
              }
            }
          }
        });
      }
      if (obj2.history) {
        let obj5 = _addMeasureSpans;
        closure_0 = on;
        const result4 = obj5.addHistoryInstrumentationHandler(function _historyBreadcrumb(arg0) {
          let from;
          let obj3;
          let to;
          const obj = closure_2_0(closure_2_1[0]);
          if (obj.getClient() === closure_0) {
            ({ from, to } = arg0);
            const tmpResult = closure_2_0(closure_2_1[0]);
            const url2 = tmpResult.parseUrl(closure_2_0(closure_2_1[3]).WINDOW.location.href);
            let parseUrlResult;
            if (from) {
              const tmpResult4 = closure_2_0(closure_2_1[0]);
              parseUrlResult = tmpResult4.parseUrl(from);
            }
            const tmpResult5 = closure_2_0(closure_2_1[0]);
            const url = tmpResult5.parseUrl(to);
            let path;
            if (parseUrlResult != null) {
              path = parseUrlResult.path;
            }
            if (!path) {
              parseUrlResult = url2;
            }
            const tmp6 = url2.protocol === url.protocol && url2.host === url.host;
            if (tmp6) {
              to = url.relative;
            }
            let relative = from;
            const tmp7 = url2.protocol === parseUrlResult.protocol && url2.host === parseUrlResult.host;
            if (tmp7) {
              relative = parseUrlResult.relative;
            }
            obj2 = { category: "navigation", data: obj3 };
            obj3 = { from: relative, to };
            const tmpResult6 = closure_2_0(closure_2_1[0]);
            tmpResult6.addBreadcrumb(obj2);
          }
        });
      }
      if (obj2.sentry) {
        closure_0 = on;
        let str = "beforeSendEvent";
        on.on("beforeSendEvent", function addSentryBreadcrumb(type) {
          let tmpResult2;
          const obj = closure_2_0(closure_2_1[0]);
          if (obj.getClient() === closure_0) {
            let str = "event";
            const addBreadcrumb = closure_2_0(closure_2_1[0]).addBreadcrumb;
            closure_2_0(closure_2_1[0]);
            if ("transaction" === type.type) {
              str = "transaction";
            }
            ({ event_id: obj2.event_id, level: obj2.level } = type);
            const obj3 = {
              category: `sentry.${str}`,
              event_id: null,
              level: null,
              message: tmpResult2.getEventDescription(type),
            };
            const obj4 = { event: type };
            tmpResult2 = closure_2_0(closure_2_1[0]);
            addBreadcrumb(obj3, obj4);
          }
        });
      }
    },
  };
  return obj3;
});
