// === Module 19045: ComponentOwnedWebView ===

// Module 19045 (ComponentOwnedWebView)
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/ComponentOwnedWebView.tsx");

export default function ComponentOwnedWebView(applicationId) {
  const iframeId = applicationId.iframeId;
  const onDisallowedNavigation = applicationId.onDisallowedNavigation;
  const contextSource = applicationId.contextSource;
  const activityUrl = applicationId.activityUrl;
  const merged = Object.assign(applicationId, Object.assign({ iframeId: 0, onDisallowedNavigation: 0, contextSource: 0, activityUrl: 0, applicationId: 0 }));
  const items = [activityUrl];
  const memo = activityUrl.useMemo(() => {
    try {
      const _URL = URL;
      const uRL = new URL(activityUrl);
      return uRL.origin;
    } catch (err) {
      return activityUrl;
    }
  }, items);
  activityUrl.useRef(contextSource);
  closure_6 = activityUrl.useRef(memo);
  closure_7 = activityUrl.useRef(onDisallowedNavigation);
  const effect = activityUrl.useEffect(() => {
    closure_5.current = contextSource;
    closure_6.current = memo;
    closure_7.current = onDisallowedNavigation;
  });
  const items1 = [iframeId];
  const memo1 = activityUrl.useMemo(() => onDisallowedNavigation(contextSource[2])(), items1);
  const items2 = [iframeId, memo1];
  const effect1 = activityUrl.useEffect(() => {
    closure_0 = onDisallowedNavigation(contextSource[3])(closure_0, {
      contextSource: ref.current,
      getOrigin() {
        return ref.current;
      },
      onDisallowedNavigation() {
        return ref2.current();
      },
      shellBridgeSecret: memo1
    });
    return () => closure_0.release();
  }, items2);
  const merged1 = Object.assign(merged);
  return memo(iframeId(contextSource[4]).BaseEmbeddedAppWebView, { iframeId, shellBridgeSecret: memo1, activityUrl, applicationId: applicationId.applicationId });
};