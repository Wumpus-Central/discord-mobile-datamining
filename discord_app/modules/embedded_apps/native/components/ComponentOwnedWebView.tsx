// === Module 17181: ComponentOwnedWebView ===

// Module 17181 (ComponentOwnedWebView)
import Fragment from "Fragment" /* 21 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, importDefault;

let closure_3 = ["iframeId", "onDisallowedNavigation", "activityUrl", "applicationId"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
let react = react_mod;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(iframeId) {
  let activityUrl;
  let applicationId;
  let closure_4;
  let current;
  let origin;
  let tmp4;
  let tmp5;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(19);
  const tmp = _require;
  const tmp2 = origin;
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
    tmp8 = tmp11;
    tmp5 = applicationId;
    tmp4 = activityUrl;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    importDefault = cResult[4];
    tmp8 = cResult[5];
  }
  try {
    let tmp12;
    if (cResult[6] !== tmp4) {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(tmp4);
      tmp12 = uRL;
      cResult[6] = tmp4;
      cResult[7] = uRL;
    } else {
      tmp12 = cResult[7];
    }
    origin = tmp12.origin;
  } catch (err) {
    origin = tmp4;
  }
  closure_3 = react.useRef(origin);
  _objectWithoutProperties = react.useRef(tmp7);
  if (cResult[8] === origin) {
    let tmp17;
    let tmp20;
    if (cResult[9] === tmp7) {
      tmp17 = cResult[10];
    }
    const effect = react.useEffect(tmp17);
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
          closure_0 = closure_1(closure_2[5])(closure_0, obj);
          return () => closure_0.release();
        }
      }
      const items = [tmp6];
      cResult[11] = tmp6;
      cResult[12] = E;
      cResult[13] = items;
      tmp20 = items;
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
          closure_0 = closure_1(closure_2[5])(closure_0, obj);
          return () => closure_0.release();
        }
      }
      tmp20 = cResult[13];
    }
    const effect1 = react.useEffect(E, tmp20);
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
          closure_0 = closure_1(closure_2[5])(closure_0, obj);
          return () => closure_0.release();
        }
      }
    }
    const BaseEmbeddedAppWebView = tmp(tmp2[6]).BaseEmbeddedAppWebView;
    const merged = Object.assign(tmp8);
    const tmp27 = <BaseEmbeddedAppWebView iframeId={tmp6} activityUrl={tmp4} applicationId={tmp5} />;
    cResult[14] = tmp4;
    cResult[15] = tmp5;
    cResult[16] = tmp6;
    cResult[17] = tmp8;
    cResult[18] = tmp27;
  }
  const fn = function y() {
    closure_3.current = origin;
    closure_4.current = current;
  };
  cResult[8] = origin;
  cResult[9] = tmp7;
  cResult[10] = fn;
  tmp17 = fn;
}) : ((iframeId) => {
  let closure_5;
  iframeId = iframeId.iframeId;
  const onDisallowedNavigation = iframeId.onDisallowedNavigation;
  const activityUrl = iframeId.activityUrl;
  const applicationId = iframeId.applicationId;
  const merged = Object.assign(iframeId, Object.assign({ iframeId: 0, onDisallowedNavigation: 0, activityUrl: 0, applicationId: 0 }));
  react = undefined;
  const items = [activityUrl];
  const memo = react.useMemo(function() {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(activityUrl);
      return uRL.origin;
    } catch (err) {
      return activityUrl;
    }
  }, items);
  let closure_4 = react.useRef(memo);
  react = react.useRef(onDisallowedNavigation);
  const effect = react.useEffect(() => {
    closure_4.current = memo;
    closure_5.current = onDisallowedNavigation;
  });
  const items1 = [iframeId];
  const effect1 = react.useEffect(() => {
    let ref;
    let ref2;
    const obj = {
      getOrigin() {
        return ref.current;
      },
      onDisallowedNavigation() {
        return ref2.current();
      }
    };
    closure_0 = onDisallowedNavigation(activityUrl[5])(closure_0, obj);
    return () => closure_0.release();
  }, items1);
  const BaseEmbeddedAppWebView = iframeId(activityUrl[6]).BaseEmbeddedAppWebView;
  const merged1 = Object.assign(merged);
  return <BaseEmbeddedAppWebView iframeId={iframeId} activityUrl={activityUrl} applicationId={applicationId} />;
});
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/ComponentOwnedWebView.tsx");

export default tmp2;