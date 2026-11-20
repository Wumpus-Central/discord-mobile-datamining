// === Module 5565: DirectVideo ===

// Module 5565 (DirectVideo)
import DirectVideoStream from "DirectVideoStream" /* 5566 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const logger = new fn(4).Logger("DirectVideo");
logger.enableNativeLogger(true);
let size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx");

export default function DirectVideo(streamId, onContainerResized) {
  streamId = streamId.streamId;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let onReady = streamId.onReady;
  let onResize = streamId.onResize;
  let flag2 = streamId.reportContainerResized;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const onVideoElement = streamId.onVideoElement;
  const merged = Object.assign(streamId, Object.assign({ streamId: 0, paused: 0, onReady: 0, onResize: 0, reportContainerResized: 0, onVideoElement: 0, className: 0 }));
  onResize.useRef(null);
  const ref = onResize.useRef(null);
  closure_8 = onResize.useRef({ width: 0, height: 0 });
  closure_9 = onResize.useRef({ streamId, paused: flag, onReady, onResize, onContainerResized });
  items = [flag2];
  const layoutEffect = onResize.useLayoutEffect(() => {
    let current = ref.current;
    let defaultView;
    if (current != null) {
      const ownerDocument = current.ownerDocument;
      if (ownerDocument != null) {
        defaultView = ownerDocument.defaultView;
      }
    }
    if (defaultView == null) {
      defaultView = window;
    }
    const resizeObserver = new defaultView.ResizeObserver((arg0) => {
      if (flag2) {
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp8 = nextResult;
          if (nextResult.target === ref.current) {
            let _window = window;
            let result = window.devicePixelRatio * tmp8.target.clientWidth;
            let _window2 = window;
            let result1 = window.devicePixelRatio * tmp8.target.clientHeight;
            let current = closure_1_9.current;
            let onContainerResized = current.onContainerResized;
            if (onContainerResized != null) {
              let onContainerResizedResult = onContainerResized(closure_1_9.current.streamId, result, result1);
            }
          }
          continue;
        }
      }
    });
    if (null != current) {
      const _document = document;
      const element = <video />;
      element.style.display = "block";
      element.style.width = "100%";
      element.style.height = "100%";
      element.autoplay = true;
      element.muted = true;
      const listener = element.addEventListener("pause", function handlePause() {
        if (!closure_1_9.current.paused) {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
      });
      const listener1 = element.addEventListener("resize", function handleResize() {
        const current = ref.current;
        let num;
        ({ width, height } = ref2.current);
        if (current != null) {
          num = current.videoWidth;
        }
        if (num == null) {
          num = 0;
        }
        const current2 = ref.current;
        let num2;
        if (current2 != null) {
          num2 = current2.videoHeight;
        }
        if (num2 == null) {
          num2 = 0;
        }
        if (width !== num) {
          const size = { width: num, height: num2 };
          const current3 = closure_1_9.current;
          onResize = current3.onResize;
          if (onResize != null) {
            onResize(size);
          }
          ref2.current = size;
        }
      });
      const listener2 = element.addEventListener("canplaythrough", function handleReady() {
        onVideoElement.info("handleReady for " + closure_1_9.current.streamId + ", have onReady callback = " + null != closure_1_9.current.onReady);
        const current = closure_1_9.current;
        onReady = current.onReady;
        if (onReady != null) {
          onReady();
        }
      });
      const _HermesInternal2 = HermesInternal;
      logger.info("create video element for " + closure_9.current.streamId + ", readyState=" + element.readyState);
      if (element.readyState > 3) {
        const _HermesInternal = HermesInternal;
        logger.error("video element for " + closure_9.current.streamId + " was ready before attached");
      }
      current.appendChild(element);
      resizeObserver.disconnect();
      resizeObserver.observe(element);
      ref.current = element;
    }
  }, items);
  const items1 = [onVideoElement];
  const layoutEffect1 = onResize.useLayoutEffect(() => {
    if (onVideoElement != null) {
      tmp(ref.current);
    }
    return () => {
      let tmp;
      if (onVideoElement != null) {
        tmp = onVideoElement(null);
      }
      return tmp;
    };
  }, items1);
  const effect = onResize.useEffect(() => {
    closure_9.current.streamId = streamId;
    closure_9.current.paused = flag;
    closure_9.current.onReady = onReady;
    closure_9.current.onResize = onResize;
  });
  const items2 = [flag, streamId];
  const effect1 = onResize.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      if (flag) {
        if (null != current.srcObject) {
          current.srcObject = null;
        }
      } else {
        const _HermesInternal = HermesInternal;
        logger.info("attaching srcObject for " + streamId);
        const result = DirectVideoStream.acquireDirectVideoStream(streamId);
        current.srcObject = result.stream;
        return () => {
          result.release();
          current.srcObject = null;
        };
      }
    }
  }, items2);
  const merged1 = Object.assign(merged);
  return flag2("div", { className: flag(onReady[4])("media-engine-video", streamId.className), ref });
};