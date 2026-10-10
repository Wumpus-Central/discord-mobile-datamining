// === Module 12807: useCanSetThumbnail ===

// Module 12807 (useCanSetThumbnail)
import ChannelStore from "ChannelStore" /* 2065 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/useCanSetThumbnail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanSetThumbnail(arg0, isImage) {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return ChannelStore.getChannel(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    isImage = undefined;
    if (isImage != null) {
      isImage = isImage.isImage;
    }
    if (cResult[4] === isImage) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  let isMediaChannelResult;
  if (stateFromStores != null) {
    isMediaChannelResult = stateFromStores.isMediaChannel();
  }
  if (isMediaChannelResult) {
    let isImage1;
    if (isImage != null) {
      isImage1 = isImage.isImage;
    }
    isMediaChannelResult = true === isImage1;
  }
  cResult[3] = stateFromStores;
  let isImage2;
  if (isImage != null) {
    isImage2 = isImage.isImage;
  }
  cResult[4] = isImage2;
  cResult[5] = isMediaChannelResult;
  tmp9 = isMediaChannelResult;
  const tmpResult = require("useStateFromStores");
}) : (function useCanSetThumbnail(arg0, isImage) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  let isMediaChannelResult;
  if (stateFromStores != null) {
    isMediaChannelResult = stateFromStores.isMediaChannel();
  }
  if (isMediaChannelResult) {
    isImage = undefined;
    if (isImage != null) {
      isImage = isImage.isImage;
    }
    isMediaChannelResult = true === isImage;
  }
  return isMediaChannelResult;
});