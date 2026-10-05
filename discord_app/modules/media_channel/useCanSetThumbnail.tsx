// === Module 11032: useCanSetThumbnail ===

// Module 11032 (useCanSetThumbnail)
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, isImage) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return ChannelStore.getChannel(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    let tmp10;
    isImage = undefined;
    const tmp7 = cResult[4];
    if (isImage != null) {
      isImage = isImage.isImage;
    }
    if (tmp7 === isImage) {
      tmp10 = cResult[5];
    }
    return tmp10;
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
  tmp10 = isMediaChannelResult;
}) : ((arg0, isImage) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
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
const result = size.fileFinishedImporting("modules/media_channel/useCanSetThumbnail.tsx");

export default tmp2;