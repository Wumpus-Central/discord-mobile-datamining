// === Module 952: _getGraphQLOperation ===

// Module 952 (_getGraphQLOperation)
import addClsInstrumentationHandler from "addClsInstrumentationHandler" /* 898 */;
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 682 */;

function _getGraphQLOperation(obj) {
  let tmp = typeof obj === "object";
  let tmp2 = tmp;
  if (typeof obj === "object") {
    tmp2 = null !== obj;
  }
  if (tmp2) {
    tmp2 = typeof obj.operationName === "string";
  }
  if (tmp2) {
    const extensions = obj.extensions;
    let tmp3 = typeof extensions === "object";
    if (typeof extensions === "object") {
      tmp3 = null !== extensions;
    }
    tmp2 = tmp3;
  }
  if (tmp2) {
    const persistedQuery = obj.extensions.persistedQuery;
    let tmp4 = typeof persistedQuery === "object";
    if (typeof persistedQuery === "object") {
      tmp4 = null !== persistedQuery;
    }
    tmp2 = tmp4;
  }
  if (tmp2) {
    tmp2 = typeof obj.extensions.persistedQuery.sha256Hash === "string";
  }
  if (tmp2) {
    tmp2 = typeof obj.extensions.persistedQuery.version === "number";
  }
  if (tmp2) {
    const _HermesInternal2 = HermesInternal;
    return "persisted " + obj.operationName;
  } else {
    if (typeof obj === "object") {
      tmp = null !== obj;
    }
    if (tmp) {
      tmp = typeof obj.query === "string";
    }
    if (tmp) {
      ({ query, operationName } = obj);
      const match = query.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
      if (match) {
        obj = { operationType: null, operationName: null };
        obj[0] = match[1];
        obj[1] = match[2];
      } else {
        const match1 = query.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
        if (match1) {
          obj = { operationType: null, operationName: "a" };
          obj[0] = match1[1];
        } else {
          obj = { operationType: "hash", operationName: "call" };
        }
      }
      let operationName2 = obj.operationName;
      if (undefined === operationName2) {
        operationName2 = operationName;
      }
      const operationType = obj.operationType;
      const _HermesInternal = HermesInternal;
      if (operationName2) {
        let combined = concat(operationType, " ", operationName2);
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
function isPersistedRequest(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    tmp = typeof obj.operationName === "string";
  }
  if (tmp) {
    const extensions = obj.extensions;
    let tmp2 = typeof extensions === "object";
    if (typeof extensions === "object") {
      tmp2 = null !== extensions;
    }
    tmp = tmp2;
  }
  if (tmp) {
    const persistedQuery = obj.extensions.persistedQuery;
    let tmp3 = typeof persistedQuery === "object";
    if (typeof persistedQuery === "object") {
      tmp3 = null !== persistedQuery;
    }
    tmp = tmp3;
  }
  if (tmp) {
    tmp = typeof obj.extensions.persistedQuery.sha256Hash === "string";
  }
  if (tmp) {
    tmp = typeof obj.extensions.persistedQuery.version === "number";
  }
  return tmp;
}
function getGraphQLRequestPayload(arg0) {
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(arg0);
    if (isStandardRequest(parsed)) {
      const tmp9 = parsed;
    }
    return tmp9;
  } catch (err) {
    return tmp;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _getGraphQLOperation };
export { getGraphQLRequestPayload };
export const getRequestPayloadXhrOrFetch = function getRequestPayloadXhrOrFetch(input) {
  if ("xhr" in input) {
    const tmp7 = input.xhr[addClsInstrumentationHandler.SENTRY_XHR_DATA_KEY];
    let first = tmp7;
    if (tmp7) {
      first = tmp5(898).getBodyString(tmp7.body)[0];
      const tmp5Result = tmp5(898);
    }
    let first1 = first;
    tmp5 = require;
  } else {
    const fetchRequestArgBody = addClsInstrumentationHandler.getFetchRequestArgBody(input.input);
    const obj = addClsInstrumentationHandler;
    first1 = addClsInstrumentationHandler.getBodyString(fetchRequestArgBody)[0];
    const obj2 = addClsInstrumentationHandler;
  }
  return first1;
};
export const graphqlClientIntegration = registerSpanErrorInstrumentation.defineIntegration((arg0) => {
  closure_0 = arg0;
  return {
    name: "GraphQLClient",
    setup(on) {
      on.on("beforeOutgoingRequestSpan", (updateName, input) => {
        const tmp3 = lib(closure_1_1[0]).spanToJSON(updateName).data || {};
        if ("http.client" === tmp3[lib(undefined, closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_OP]) {
          const tmp4 = tmp3[tmp(undefined, tmp2[0]).SEMANTIC_ATTRIBUTE_URL_FULL] || tmp3["http.url"];
          const tmp5 = tmp3[tmp(undefined, tmp2[0]).SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] || tmp3["http.method"];
          let tmpResult = tmp(tmp2[0]);
          if (tmpResult.isString(tmp4)) {
            tmpResult = tmp(tmp2[0]);
            if (tmpResult.isString(tmp5)) {
              const result = tmp(tmp2[0]).stringMatchesSomePattern(tmp4, lib.endpoints);
              if ("xhr" in input) {
                const tmp11 = input.xhr[tmp(undefined, tmp2[1]).SENTRY_XHR_DATA_KEY];
                let first = tmp11;
                if (tmp11) {
                  first = tmp(tmp2[1]).getBodyString(tmp11.body)[0];
                  const tmpResult2 = tmp(tmp2[1]);
                }
                let first1 = first;
              } else {
                const fetchRequestArgBody = tmp(tmp2[1]).getFetchRequestArgBody(input.input);
                const tmpResult3 = tmp(tmp2[1]);
                first1 = tmp(tmp2[1]).getBodyString(fetchRequestArgBody)[0];
                const tmpResult4 = tmp(tmp2[1]);
              }
              if (result) {
                if (first1) {
                  const tmp14 = closure_1_5(first1);
                  if (tmp14) {
                    const _HermesInternal = HermesInternal;
                    updateName.updateName("" + tmp5 + " " + tmp4 + " (" + closure_1_2(tmp14) + ")");
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
                      const attr1 = updateName.setAttribute("graphql.persisted_query.hash.sha256", tmp14.extensions.persistedQuery.sha256Hash);
                      const attr2 = updateName.setAttribute("graphql.persisted_query.version", tmp14.extensions.persistedQuery.version);
                    }
                  }
                }
              }
              const tmpResult1 = tmp(tmp2[0]);
            }
          }
        }
      });
      on.on("beforeOutgoingRequestBreadcrumb", (type, input) => {
        ({ category, data } = type);
        if ("http" === type.type) {
          if ("fetch" === category) {
            let url;
            if (data != null) {
              url = data.url;
            }
            const result = lib(closure_1_1[0]).stringMatchesSomePattern(url, lib.endpoints);
            if ("xhr" in input) {
              const tmp10 = input.xhr[tmp5(undefined, tmp6[1]).SENTRY_XHR_DATA_KEY];
              let first = tmp10;
              if (tmp10) {
                let tmp5Result = tmp5(tmp6[1]);
                first = tmp5Result.getBodyString(tmp10.body)[0];
              }
              let first1 = first;
            } else {
              tmp5Result = tmp5(tmp6[1]);
              const fetchRequestArgBody = tmp5Result.getFetchRequestArgBody(input.input);
              first1 = tmp5(tmp6[1]).getBodyString(fetchRequestArgBody)[0];
              const tmp5Result1 = tmp5(tmp6[1]);
            }
            if (result) {
              if (data) {
                if (first1) {
                  const tmp13 = closure_1_5(first1);
                  if (!data.graphql) {
                    if (tmp13) {
                      data["graphql.operation"] = closure_1_2(tmp13);
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
            const obj = lib(closure_1_1[0]);
          }
        }
      });
    }
  };
});
export const parseGraphQLQuery = function parseGraphQLQuery(str) {
  const match = str.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
  if (match) {
    let obj = { operationType: null, operationName: null };
    obj[0] = match[1];
    obj[1] = match[2];
    return obj;
  } else {
    const match1 = str.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
    if (match1) {
      obj = { operationType: null, operationName: "a" };
      obj[0] = match1[1];
    } else {
      obj = { operationType: "hash", operationName: "call" };
    }
    return obj;
  }
};