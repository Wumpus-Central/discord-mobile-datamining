// === Module 16133: FrameWebView ===

// Module 16133 (FrameWebView)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/frames/native/FrameWebView.tsx");

export default function FrameWebView(applicationId) {
  const frameId = applicationId.frameId;
  const merged = Object.assign(applicationId, Object.create(null));
  let hasInvalidUrlError;
  let hadInvalidUrlError;
  let obj = frameId(hadInvalidUrlError[2]);
  const hasInvalidUrlErrorState = obj.useHasInvalidUrlErrorState();
  hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  hadInvalidUrlError = hasInvalidUrlErrorState.hadInvalidUrlError;
  const items = [hasInvalidUrlError, hadInvalidUrlError, frameId];
  const effect = React.useEffect(() => {
    let tmp = !hadInvalidUrlError;
    if (!hadInvalidUrlError) {
      tmp = hasInvalidUrlError;
    }
    if (tmp) {
      hasInvalidUrlError(hadInvalidUrlError[3]).leaveFrame(frameId);
      const obj = hasInvalidUrlError(hadInvalidUrlError[3]);
    }
  }, items);
  obj = {
    hasIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).hasIframeId();
    },
    getOrCreateIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).getOrCreateIframeId();
    },
    releaseIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).releaseIframeId();
    },
    onIframeMount(iframeId) {
      return hasInvalidUrlError(hadInvalidUrlError[4]).attachFrameIframe(frameId, iframeId);
    },
    onIframeUnmount(iframeId) {
      return hasInvalidUrlError(hadInvalidUrlError[4]).detachFrameIframe(frameId, iframeId);
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: hasInvalidUrlErrorState.setHasInvalidUrlError,
    hadInvalidUrlError,
    applicationId: applicationId.applicationId
  };
  const merged1 = Object.assign(merged);
  return jsx(frameId(hadInvalidUrlError[2]).BaseActivityWebView, {
    hasIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).hasIframeId();
    },
    getOrCreateIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).getOrCreateIframeId();
    },
    releaseIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).releaseIframeId();
    },
    onIframeMount(iframeId) {
      return hasInvalidUrlError(hadInvalidUrlError[4]).attachFrameIframe(frameId, iframeId);
    },
    onIframeUnmount(iframeId) {
      return hasInvalidUrlError(hadInvalidUrlError[4]).detachFrameIframe(frameId, iframeId);
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: hasInvalidUrlErrorState.setHasInvalidUrlError,
    hadInvalidUrlError,
    applicationId: applicationId.applicationId
  });
};