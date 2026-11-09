// === Module 19688: useShowStreamWithTimeout ===

// Module 19688 (useShowStreamWithTimeout)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useShowStreamWithTimeout.tsx");

export default function useShowStreamWithTimeout(streamKey) {
  streamKey = streamKey.streamKey;
  const isWatching = streamKey.isWatching;
  let hasEnded = streamKey.hasEnded;
  let first;
  let showStream;
  [tmp2, tmp3] = first.useState(() => {
    let tmp;
    if (isWatching) {
      tmp = streamKey;
    }
    return tmp;
  });
  _slicedToArray = tmp3;
  first = _slicedToArray(first.useState(() => {
    const timeout = new streamKey(isWatching[2]).Timeout();
    return timeout;
  }), 1)[0];
  let tmp5 = isWatching;
  if (!isWatching) {
    tmp5 = null == tmp2;
  }
  if (!tmp5) {
    tmp3(undefined);
  }
  showStream = isWatching;
  if (isWatching) {
    if (!hasEnded) {
      hasEnded = null != streamKey && tmp2 === streamKey;
      const tmp10 = null != streamKey && tmp2 === streamKey;
    }
    showStream = hasEnded;
  }
  items = [first, streamKey];
  const items1 = [first, streamKey, isWatching];
  const onStreamReady = obj.useCallback(() => {
    first.start(100, () => closure_1_2(streamKey));
  }, items);
  const effect = obj.useEffect(() => () => first.stop(), items1);
  const items2 = [isWatching, showStream, streamKey];
  const effect1 = obj.useEffect(() => {
    if (isWatching) {
      if (!showStream) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => closure_1_2(closure_0), 3000);
        return () => clearTimeout(closure_0);
      }
    }
  }, items2);
  return { showStream, onStreamReady };
};