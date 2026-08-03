import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getSafeArea").fileFinishedImporting("modules/frames/native/FrameWebView.tsx");

export default function FrameWebView(applicationId) {
  applicationId = applicationId.applicationId;
  const merged = Object.assign(applicationId, Object.create(null));
  let hasInvalidUrlError;
  let hadInvalidUrlError;
  let obj = applicationId(hadInvalidUrlError[2]);
  const hasInvalidUrlErrorState = obj.useHasInvalidUrlErrorState();
  hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  hadInvalidUrlError = hasInvalidUrlErrorState.hadInvalidUrlError;
  const items = [hasInvalidUrlError, hadInvalidUrlError, applicationId];
  const effect = React.useEffect(() => {
    let tmp = !hadInvalidUrlError;
    if (!hadInvalidUrlError) {
      tmp = hasInvalidUrlError;
    }
    if (tmp) {
      tmp = null != applicationId;
    }
    if (tmp) {
      let obj = hasInvalidUrlError(hadInvalidUrlError[3]);
      obj = { applicationId: null };
      obj[0] = applicationId;
      obj.leaveFrame(obj);
    }
  }, items);
  obj = {
    hasFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).hasFrameId();
    },
    getOrCreateFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).getOrCreateFrameId();
    },
    releaseFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).releaseFrameId();
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: hasInvalidUrlErrorState.setHasInvalidUrlError,
    hadInvalidUrlError,
    applicationId
  };
  const merged1 = Object.assign(merged);
  return jsx(applicationId(hadInvalidUrlError[2]).BaseActivityWebView, {
    hasFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).hasFrameId();
    },
    getOrCreateFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).getOrCreateFrameId();
    },
    releaseFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).releaseFrameId();
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: hasInvalidUrlErrorState.setHasInvalidUrlError,
    hadInvalidUrlError,
    applicationId
  });
};