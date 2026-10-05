// _runtime/00963__getGraphQLOperation.js
import _addMeasureSpans from "00909__addMeasureSpans.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

let endpoints;

function _getGraphQLOperation(operationName) {
  let query;
  let tmp = typeof operationName === "object";
  let tmp2 = tmp;
  if (typeof operationName === "object") {
    tmp2 = null !== operationName;
  }
  if (tmp2) {
    tmp2 = typeof operationName.operationName === "string";
  }
  if (tmp2) {
    const extensions = operationName.extensions;
    let tmp3 = typeof extensions === "object";
    if (typeof extensions === "object") {
      tmp3 = null !== extensions;
    }
    tmp2 = tmp3;
  }
  if (tmp2) {
    const persistedQuery = operationName.extensions.persistedQuery;
    let tmp4 = typeof persistedQuery === "object";
    if (typeof persistedQuery === "object") {
      tmp4 = null !== persistedQuery;
    }
    tmp2 = tmp4;
  }
  if (tmp2) {
    tmp2 = typeof operationName.extensions.persistedQuery.sha256Hash === "string";
  }
  if (tmp2) {
    tmp2 = typeof operationName.extensions.persistedQuery.version === "number";
  }
  if (tmp2) {
    const _HermesInternal2 = HermesInternal;
    return "persisted " + operationName.operationName;
  } else {
    if (typeof operationName === "object") {
      tmp = null !== operationName;
    }
    if (tmp) {
      tmp = typeof operationName.query === "string";
    }
    if (tmp) {
      let obj;
      let combined;
      ({ query, operationName } = operationName);
      const match = query.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
      if (match) {
        obj = { operationType: match[1], operationName: match[2] };
        const obj2 = { operationType: match[1], operationName: match[2] };
      } else {
        const match1 = query.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
        if (match1) {
          obj = { operationType: match1[1], operationName: "r" };
          const obj3 = { operationType: match1[1], operationName: "r" };
        } else {
          obj = { operationType: "Array", operationName: "Set" };
        }
      }
      let operationName2 = obj.operationName;
      if (undefined === operationName2) {
        operationName2 = operationName;
      }
      const operationType = obj.operationType;
      const _HermesInternal = HermesInternal;
      if (operationName2) {
        combined = concat(operationType, " ", operationName2);
      } else {
        combined = concat(operationType);
      }
      return combined;
    } else {
      return "unknown";
    }
  }
}
function isStandardRequest(parsed) {
  let tmp = typeof parsed === "object";
  if (typeof parsed === "object") {
    tmp = null !== parsed;
  }
  if (tmp) {
    tmp = typeof parsed.query === "string";
  }
  return tmp;
}
function isPersistedRequest(operationName) {
  let tmp = typeof operationName === "object";
  if (typeof operationName === "object") {
    tmp = null !== operationName;
  }
  if (tmp) {
    tmp = typeof operationName.operationName === "string";
  }
  if (tmp) {
    const extensions = operationName.extensions;
    let tmp2 = typeof extensions === "object";
    if (typeof extensions === "object") {
      tmp2 = null !== extensions;
    }
    tmp = tmp2;
  }
  if (tmp) {
    const persistedQuery = operationName.extensions.persistedQuery;
    let tmp3 = typeof persistedQuery === "object";
    if (typeof persistedQuery === "object") {
      tmp3 = null !== persistedQuery;
    }
    tmp = tmp3;
  }
  if (tmp) {
    tmp = typeof operationName.extensions.persistedQuery.sha256Hash === "string";
  }
  if (tmp) {
    tmp = typeof operationName.extensions.persistedQuery.version === "number";
  }
  return tmp;
}
function getGraphQLRequestPayload(arg0) {
  try {
    let tmp8;
    const _JSON = JSON;
    const parsed = JSON.parse(arg0);
    if (isStandardRequest(parsed)) {
      tmp8 = parsed;
    }
    return tmp8;
  } catch (err) {}
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _getGraphQLOperation };
export { getGraphQLRequestPayload };
export const getRequestPayloadXhrOrFetch = function getRequestPayloadXhrOrFetch(input) {
  let first1;
  if ("xhr" in input) {
    const tmp7 = input.xhr[_addMeasureSpans.SENTRY_XHR_DATA_KEY];
    let first = tmp7;
    if (first) {
      const tmp5Result = _addMeasureSpans;
      first = tmp5Result.getBodyString(tmp7.body)[0];
    }
    first1 = first;
  } else {
    const obj = _addMeasureSpans;
    const fetchRequestArgBody = obj.getFetchRequestArgBody(input.input);
    const obj2 = _addMeasureSpans;
    first1 = obj2.getBodyString(fetchRequestArgBody)[0];
  }
  return first1;
};
export const graphqlClientIntegration = registerSpanErrorInstrumentation.defineIntegration((arg0) => {
  let closure_0 = arg0;
  let obj = {
    name: "GraphQLClient",
    setup(on) {
      on.on("beforeOutgoingRequestSpan", (updateName, input) => {
        const obj = closure_2_0(closure_2_1[0]);
        const tmp3 = obj.spanToJSON(updateName).data || {};
        if ("http.client" === tmp3[closure_2_0(undefined, closure_2_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_OP]) {
          const tmp4 = tmp3[closure_2_0(undefined, closure_2_1[0]).SEMANTIC_ATTRIBUTE_URL_FULL] || tmp3["http.url"];
          const tmp5 =
            tmp3[closure_2_0(undefined, closure_2_1[0]).SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] || tmp3["http.method"];
          const tmpResult = closure_2_0(closure_2_1[0]);
          if (tmpResult.isString(tmp4)) {
            const tmpResult6 = closure_2_0(closure_2_1[0]);
            if (tmpResult6.isString(tmp5)) {
              let first1;
              endpoints = endpoints.endpoints;
              const tmpResult7 = closure_2_0(closure_2_1[0]);
              const result = tmpResult7.stringMatchesSomePattern(tmp4, endpoints);
              if ("xhr" in input) {
                const tmp11 = input.xhr[closure_2_0(undefined, closure_2_1[1]).SENTRY_XHR_DATA_KEY];
                let first = tmp11;
                if (first) {
                  const tmpResult8 = closure_2_0(closure_2_1[1]);
                  first = tmpResult8.getBodyString(tmp11.body)[0];
                }
                first1 = first;
              } else {
                const tmpResult9 = closure_2_0(closure_2_1[1]);
                const fetchRequestArgBody = tmpResult9.getFetchRequestArgBody(input.input);
                const tmpResult10 = closure_2_0(closure_2_1[1]);
                first1 = tmpResult10.getBodyString(fetchRequestArgBody)[0];
              }
              if (result) {
                if (first1) {
                  const tmp14 = closure_2_5(first1);
                  if (tmp14) {
                    const _HermesInternal = HermesInternal;
                    updateName.updateName("" + tmp5 + " " + tmp4 + " (" + closure_2_2(tmp14) + ")");
                    let tmp20 = typeof tmp14 === "object";
                    let tmp21 = tmp20;
                    if (typeof tmp14 === "object") {
                      tmp21 = null !== tmp14;
                    }
                    if (tmp21) {
                      tmp21 = typeof tmp14.query === "string";
                    }
                    if (tmp21) {
                      const attr = updateName.setAttribute("graphql.document", tmp14.query);
                    }
                    if (typeof tmp14 === "object") {
                      tmp20 = null !== tmp14;
                    }
                    if (tmp20) {
                      tmp20 = typeof tmp14.operationName === "string";
                    }
                    if (tmp20) {
                      const extensions = tmp14.extensions;
                      let tmp23 = typeof extensions === "object";
                      if (typeof extensions === "object") {
                        tmp23 = null !== extensions;
                      }
                      tmp20 = tmp23;
                    }
                    if (tmp20) {
                      const persistedQuery = tmp14.extensions.persistedQuery;
                      let tmp24 = typeof persistedQuery === "object";
                      if (typeof persistedQuery === "object") {
                        tmp24 = null !== persistedQuery;
                      }
                      tmp20 = tmp24;
                    }
                    if (tmp20) {
                      tmp20 = typeof tmp14.extensions.persistedQuery.sha256Hash === "string";
                    }
                    if (tmp20) {
                      tmp20 = typeof tmp14.extensions.persistedQuery.version === "number";
                    }
                    if (tmp20) {
                      const attr1 = updateName.setAttribute(
                        "graphql.persisted_query.hash.sha256",
                        tmp14.extensions.persistedQuery.sha256Hash,
                      );
                      const attr2 = updateName.setAttribute(
                        "graphql.persisted_query.version",
                        tmp14.extensions.persistedQuery.version,
                      );
                    }
                  }
                }
              }
            }
          }
        }
      });
      on.on("beforeOutgoingRequestBreadcrumb", (type, input) => {
        let category;
        let data;
        ({ category, data } = type);
        if ("http" === type.type) {
          if ("fetch" === category) {
            let first1;
            let url;
            if (data != null) {
              url = data.url;
            }
            endpoints = endpoints.endpoints;
            const obj = closure_2_0(closure_2_1[0]);
            const result = obj.stringMatchesSomePattern(url, endpoints);
            if ("xhr" in input) {
              const tmp10 = input.xhr[closure_2_0(undefined, closure_2_1[1]).SENTRY_XHR_DATA_KEY];
              let first = tmp10;
              if (first) {
                const tmp5Result = closure_2_0(closure_2_1[1]);
                first = tmp5Result.getBodyString(tmp10.body)[0];
              }
              first1 = first;
            } else {
              const tmp5Result3 = closure_2_0(closure_2_1[1]);
              const fetchRequestArgBody = tmp5Result3.getFetchRequestArgBody(input.input);
              const tmp5Result4 = closure_2_0(closure_2_1[1]);
              first1 = tmp5Result4.getBodyString(fetchRequestArgBody)[0];
            }
            if (result) {
              if (data) {
                if (first1) {
                  const tmp13 = closure_2_5(first1);
                  if (!data.graphql) {
                    if (tmp13) {
                      data["graphql.operation"] = closure_2_2(tmp13);
                      let tmp15 = typeof tmp13 === "object";
                      let tmp16 = tmp15;
                      if (typeof tmp13 === "object") {
                        tmp16 = null !== tmp13;
                      }
                      if (tmp16) {
                        tmp16 = typeof tmp13.query === "string";
                      }
                      if (tmp16) {
                        data["graphql.document"] = tmp13.query;
                      }
                      if (typeof tmp13 === "object") {
                        tmp15 = null !== tmp13;
                      }
                      if (tmp15) {
                        tmp15 = typeof tmp13.operationName === "string";
                      }
                      if (tmp15) {
                        const extensions = tmp13.extensions;
                        let tmp17 = typeof extensions === "object";
                        if (typeof extensions === "object") {
                          tmp17 = null !== extensions;
                        }
                        tmp15 = tmp17;
                      }
                      if (tmp15) {
                        const persistedQuery = tmp13.extensions.persistedQuery;
                        let tmp18 = typeof persistedQuery === "object";
                        if (typeof persistedQuery === "object") {
                          tmp18 = null !== persistedQuery;
                        }
                        tmp15 = tmp18;
                      }
                      if (tmp15) {
                        tmp15 = typeof tmp13.extensions.persistedQuery.sha256Hash === "string";
                      }
                      if (tmp15) {
                        tmp15 = typeof tmp13.extensions.persistedQuery.version === "number";
                      }
                      if (tmp15) {
                        data["graphql.persisted_query.hash.sha256"] = tmp13.extensions.persistedQuery.sha256Hash;
                        data["graphql.persisted_query.version"] = tmp13.extensions.persistedQuery.version;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    },
  };
  return obj;
});
export const parseGraphQLQuery = function parseGraphQLQuery(str) {
  const match = str.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
  if (match) {
    return { operationType: match[1], operationName: match[2] };
  } else {
    let obj;
    const match1 = str.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
    if (match1) {
      obj = { operationType: match1[1], operationName: "r" };
      const obj3 = { operationType: match1[1], operationName: "r" };
    } else {
      obj = { operationType: "Array", operationName: "Set" };
    }
    return obj;
  }
};
