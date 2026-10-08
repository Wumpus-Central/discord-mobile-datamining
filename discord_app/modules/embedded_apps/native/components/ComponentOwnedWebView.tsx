// === Module 17462: ComponentOwnedWebView ===

// Module 17462 (ComponentOwnedWebView)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["iframeId", "onDisallowedNavigation", "contextSource", "activityUrl", "applicationId"];
let jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/ComponentOwnedWebView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ComponentOwnedWebView(iframeId) {
  const cResult = require("c").c(21);
  if (cResult[0] !== iframeId) {
    iframeId = iframeId.iframeId;
    closure_1 = iframeId;
    const onDisallowedNavigation = iframeId.onDisallowedNavigation;
    dependencyMap = onDisallowedNavigation;
    const contextSource = iframeId.contextSource;
    _require = contextSource;
    ({ activityUrl, applicationId } = iframeId);
    const tmp13 = _objectWithoutProperties(iframeId, origin);
    cResult[0] = iframeId;
    cResult[1] = activityUrl;
    cResult[2] = applicationId;
    cResult[3] = contextSource;
    cResult[4] = iframeId;
    cResult[5] = onDisallowedNavigation;
    cResult[6] = tmp13;
    let tmp10 = tmp13;
    let tmp6 = applicationId;
    let tmp5 = activityUrl;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
    _require = cResult[3];
    closure_1 = cResult[4];
    dependencyMap = cResult[5];
    tmp10 = cResult[6];
  }
  try {
    if (cResult[7] !== tmp5) {
      const _URL = URL;
      const uRL = new URL(tmp5);
      let tmp14 = uRL;
      cResult[7] = tmp5;
      cResult[8] = uRL;
    } else {
      tmp14 = cResult[8];
    }
    origin = tmp14.origin;
    _objectWithoutProperties = noop.useRef(tmp7);
    noop = noop.useRef(origin);
    jsx = noop.useRef(tmp9);
    if (cResult[9] === tmp7) {
      if (cResult[10] === origin) {
        if (cResult[11] === tmp9) {
          let tmp22 = cResult[12];
        }
        const effect = obj2.useEffect(tmp22);
        if (cResult[13] !== tmp8) {
          const fn2 = function x() {
            closure_0 = closure_1(current2[5])(closure_1, {
              contextSource: ref.current,
              getOrigin() {
                return ref.current;
              },
              onDisallowedNavigation() {
                return ref2.current();
              }
            });
            return () => closure_0.release();
          };
          const items = [tmp8];
          cResult[13] = tmp8;
          cResult[14] = fn2;
          cResult[15] = items;
          let tmp25 = items;
          let tmp24 = fn2;
        } else {
          tmp24 = cResult[14];
          tmp25 = cResult[15];
        }
        const effect1 = obj2.useEffect(tmp24, tmp25);
        if (cResult[16] === tmp5) {
          if (cResult[17] === tmp6) {
            if (cResult[18] === tmp8) {
              if (cResult[19] === tmp10) {
                let tmp27 = cResult[20];
              }
              return tmp27;
            }
          }
        }
        const obj3 = { iframeId: tmp8, activityUrl: tmp5, applicationId: tmp6 };
        const merged = Object.assign(tmp10);
        const tmp32 = jsx(require("BaseEmbeddedAppWebView").BaseEmbeddedAppWebView, { iframeId: tmp8, activityUrl: tmp5, applicationId: tmp6 });
        cResult[16] = tmp5;
        cResult[17] = tmp6;
        cResult[18] = tmp8;
        cResult[19] = tmp10;
        cResult[20] = tmp32;
        tmp27 = tmp32;
      }
    }
    const fn = function y() {
      closure_4.current = current;
      closure_5.current = origin;
      closure_6.current = current2;
    };
    cResult[9] = tmp7;
    cResult[10] = origin;
    cResult[11] = tmp9;
    cResult[12] = fn;
    tmp22 = fn;
  } catch (err) {
    origin = tmp;
  }
}) : (function ComponentOwnedWebView(applicationId) {
  const iframeId = applicationId.iframeId;
  const onDisallowedNavigation = applicationId.onDisallowedNavigation;
  const contextSource = applicationId.contextSource;
  const activityUrl = applicationId.activityUrl;
  const merged = Object.assign(applicationId, Object.assign({ iframeId: 0, onDisallowedNavigation: 0, contextSource: 0, activityUrl: 0, applicationId: 0 }));
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
  noop = noop.useRef(contextSource);
  jsx = noop.useRef(memo);
  closure_7 = noop.useRef(onDisallowedNavigation);
  const effect = noop.useEffect(() => {
    closure_5.current = contextSource;
    closure_6.current = memo;
    closure_7.current = onDisallowedNavigation;
  });
  const items1 = [iframeId];
  const effect1 = noop.useEffect(() => {
    closure_0 = onDisallowedNavigation(contextSource[5])(closure_0, {
      contextSource: ref.current,
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
  return jsx(iframeId(contextSource[6]).BaseEmbeddedAppWebView, { iframeId, activityUrl, applicationId: applicationId.applicationId });
});