// === Module 4620: DirectVideo ===

// Module 4620 (DirectVideo)
import DirectVideoStream from "DirectVideoStream" /* 4621 */;
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
  const merged = Object.assign(streamId, Object.assign({ streamId: 0, paused: 0, onReady: 0, onResize: 0, reportContainerResized: 0, className: 0 }));
  onResize.useRef(null);
  const ref = onResize.useRef(null);
  closure_7 = onResize.useRef({ width: 0, height: 0 });
  let obj = { streamId, paused: flag, onReady, onResize, onContainerResized };
  closure_8 = onResize.useRef(obj);
  const items = [flag2];
  const layoutEffect = onResize.useLayoutEffect(() => {
    let current = ref.current;
    const resizeObserver = new globalThis.ResizeObserver((arg0) => {
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
            let current = closure_1_8.current;
            let onContainerResized = current.onContainerResized;
            if (onContainerResized != null) {
              let onContainerResizedResult = onContainerResized(closure_1_8.current.streamId, result, result1);
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
        if (!closure_1_8.current.paused) {
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
          const current3 = closure_1_8.current;
          onResize = current3.onResize;
          if (onResize != null) {
            onResize(size);
          }
          ref2.current = size;
        }
      });
      const listener2 = element.addEventListener("canplaythrough", function handleReady() {
        ref.info("handleReady for " + closure_1_8.current.streamId + ", have onReady callback = " + null != closure_1_8.current.onReady);
        const current = closure_1_8.current;
        onReady = current.onReady;
        if (onReady != null) {
          onReady();
        }
      });
      const _HermesInternal2 = HermesInternal;
      logger.info("create video element for " + closure_8.current.streamId + ", readyState=" + element.readyState);
      if (element.readyState > 3) {
        const _HermesInternal = HermesInternal;
        obj3.error("video element for " + tmp10.current.streamId + " was ready before attached");
      }
      current.appendChild(element);
      resizeObserver.disconnect();
      resizeObserver.observe(element);
      ref.current = element;
      obj3 = logger;
      tmp10 = closure_8;
    }
  }, items);
  const effect = onResize.useEffect(() => {
    closure_8.current.streamId = streamId;
    closure_8.current.paused = flag;
    closure_8.current.onReady = onReady;
    closure_8.current.onResize = onResize;
  });
  const items1 = [flag, streamId];
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
  }, items1);
  obj = { className: flag(onReady[4])("media-engine-video", streamId.className), ref };
  const merged1 = Object.assign(merged);
  return flag2("div", obj);
};