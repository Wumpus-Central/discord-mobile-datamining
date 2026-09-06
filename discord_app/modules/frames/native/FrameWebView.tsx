// === Module 16618: FrameWebView ===

// Module 16618 (FrameWebView)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9507 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9568 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameWebView.tsx");

export default function FrameWebView(applicationId) {
  const frameId = applicationId.frameId;
  const merged = Object.assign(applicationId, Object.assign({ applicationId: 0, frameId: 0 }));
  let hadInvalidUrlError;
  let obj = frameId(hadInvalidUrlError[2]);
  const hasInvalidUrlErrorState = obj.useHasInvalidUrlErrorState();
  const hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  hadInvalidUrlError = hasInvalidUrlErrorState.hadInvalidUrlError;
  const items = [hasInvalidUrlError, hadInvalidUrlError, frameId];
  const effect = noop.useEffect(() => {
    let tmp = !hadInvalidUrlError;
    if (!hadInvalidUrlError) {
      tmp = hasInvalidUrlError;
    }
    if (tmp) {
      FramesNativeManagerDefault.leaveFrame(frameId);
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
      return FramesActionCreatorsDefault.attachFrameIframe(frameId, iframeId);
    },
    onIframeUnmount(iframeId) {
      return FramesActionCreatorsDefault.detachFrameIframe(frameId, iframeId);
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
      return FramesActionCreatorsDefault.attachFrameIframe(frameId, iframeId);
    },
    onIframeUnmount(iframeId) {
      return FramesActionCreatorsDefault.detachFrameIframe(frameId, iframeId);
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: hasInvalidUrlErrorState.setHasInvalidUrlError,
    hadInvalidUrlError,
    applicationId: applicationId.applicationId
  });
};