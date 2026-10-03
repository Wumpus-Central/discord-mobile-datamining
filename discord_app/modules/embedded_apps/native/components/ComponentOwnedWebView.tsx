// === Module 17128: ComponentOwnedWebView ===

// Module 17128 (ComponentOwnedWebView)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["iframeId", "onDisallowedNavigation", "activityUrl", "applicationId"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/ComponentOwnedWebView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((iframeId) => {
  const cResult = require("c").c(19);
  if (cResult[0] !== iframeId) {
    iframeId = iframeId.iframeId;
    _require = iframeId;
    const onDisallowedNavigation = iframeId.onDisallowedNavigation;
    importDefault = onDisallowedNavigation;
    ({ activityUrl, applicationId } = iframeId);
    const tmp11 = _objectWithoutProperties(iframeId, closure_3);
    cResult[0] = iframeId;
    cResult[1] = activityUrl;
    cResult[2] = applicationId;
    cResult[3] = iframeId;
    cResult[4] = onDisallowedNavigation;
    cResult[5] = tmp11;
    let tmp8 = tmp11;
    let tmp5 = applicationId;
    let tmp4 = activityUrl;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    importDefault = cResult[4];
    tmp8 = cResult[5];
  }
  try {
    if (cResult[6] !== tmp4) {
      const _URL = URL;
      const uRL = new URL(tmp4);
      let tmp12 = uRL;
      cResult[6] = tmp4;
      cResult[7] = uRL;
    } else {
      tmp12 = cResult[7];
    }
    origin = tmp12.origin;
    closure_3 = noop.useRef(origin);
    _objectWithoutProperties = noop.useRef(tmp7);
    if (cResult[8] === origin) {
      if (cResult[9] === tmp7) {
        let tmp20 = cResult[10];
      }
      const effect = noop.useEffect(tmp20);
      if (cResult[11] !== tmp6) {
        class E {
          constructor() {
            obj = {
              getOrigin() {
                          return ref.current;
                        },
              onDisallowedNavigation() {
                          return ref2.current();
                        }
            };
            closure_0 = closure_1(origin[5])(closure_0, obj);
            return () => closure_0.release();
          }
        }
        const items = [tmp6];
        cResult[11] = tmp6;
        cResult[12] = E;
        cResult[13] = items;
        let tmp23 = items;
      } else {
        class E {
          constructor() {
            obj = {
              getOrigin() {
                          return ref.current;
                        },
              onDisallowedNavigation() {
                          return ref2.current();
                        }
            };
            closure_0 = closure_1(origin[5])(closure_0, obj);
            return () => closure_0.release();
          }
        }
        tmp23 = cResult[13];
      }
      const effect1 = noop.useEffect(E, tmp23);
      if (cResult[14] === tmp4) {
        class E {
          constructor() {
            obj = {
              getOrigin() {
                          return ref.current;
                        },
              onDisallowedNavigation() {
                          return ref2.current();
                        }
            };
            closure_0 = closure_1(origin[5])(closure_0, obj);
            return () => closure_0.release();
          }
        }
      }
      const obj3 = { iframeId: tmp6, activityUrl: tmp4, applicationId: tmp5 };
      const merged = Object.assign(tmp8);
      const tmp30 = jsx(tmp(tmp2[6]).BaseEmbeddedAppWebView, { iframeId: tmp6, activityUrl: tmp4, applicationId: tmp5 });
      cResult[14] = tmp4;
      cResult[15] = tmp5;
      cResult[16] = tmp6;
      cResult[17] = tmp8;
      cResult[18] = tmp30;
    }
    const fn = function y() {
      closure_3.current = origin;
      closure_4.current = current;
    };
    cResult[8] = origin;
    cResult[9] = tmp7;
    cResult[10] = fn;
    tmp20 = fn;
  } catch (err) {
    class E {
      constructor() {
        obj = {
          getOrigin() {
                  return ref.current;
                },
          onDisallowedNavigation() {
                  return ref2.current();
                }
        };
        closure_0 = closure_1(origin[5])(closure_0, obj);
        return () => closure_0.release();
      }
    }
  }
  const obj = require("c");
  tmp = _require;
  tmp2 = origin;
}) : ((applicationId) => {
  const iframeId = applicationId.iframeId;
  const onDisallowedNavigation = applicationId.onDisallowedNavigation;
  const activityUrl = applicationId.activityUrl;
  const merged = Object.assign(applicationId, Object.assign({ iframeId: 0, onDisallowedNavigation: 0, activityUrl: 0, applicationId: 0 }));
  noop = undefined;
  const items = [activityUrl];
  const memo = noop.useMemo(() => {
    try {
      const _URL = URL;
      const uRL = new URL(activityUrl);
      return uRL.origin;
    } catch (err) {
      return activityUrl;
    }
  }, items);
  closure_4 = noop.useRef(memo);
  noop = noop.useRef(onDisallowedNavigation);
  const effect = noop.useEffect(() => {
    closure_4.current = memo;
    closure_5.current = onDisallowedNavigation;
  });
  const items1 = [iframeId];
  const effect1 = noop.useEffect(() => {
    closure_0 = onDisallowedNavigation(activityUrl[5])(closure_0, {
      getOrigin() {
        return ref.current;
      },
      onDisallowedNavigation() {
        return ref2.current();
      }
    });
    return () => closure_0.release();
  }, items1);
  const merged1 = Object.assign(merged);
  return jsx(iframeId(activityUrl[6]).BaseEmbeddedAppWebView, { iframeId, activityUrl, applicationId: applicationId.applicationId });
});