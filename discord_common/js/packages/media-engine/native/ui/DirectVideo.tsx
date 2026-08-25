// === Module 4484: logger ===

// Module 4484 (logger)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const logger = new require("log").Logger("DirectVideo");
logger.enableNativeLogger(true);
let result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx");

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
  const merged = Object.assign(streamId, Object.create(null));
  let ref;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  ref = onResize.useRef(null);
  closure_6 = onResize.useRef(null);
  closure_7 = onResize.useRef({ width: 0, height: 0 });
  let obj = { streamId, paused: flag, onReady, onResize, onContainerResized };
  closure_8 = onResize.useRef(obj);
  const items = [flag2];
  const layoutEffect = onResize.useLayoutEffect(() => {
    let current = ref.current;
    const resizeObserver = new globalThis.ResizeObserver((arg0) => {
      if (closure_4) {
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp8 = nextResult;
          let tmp9 = ref;
          if (nextResult.target === ref.current) {
            let _window = window;
            let tmp10 = nextResult;
            let result = window.devicePixelRatio * tmp8.target.clientWidth;
            let _window2 = window;
            let result1 = window.devicePixelRatio * tmp8.target.clientHeight;
            let current = closure_8.current;
            let onContainerResized = current.onContainerResized;
            if (onContainerResized != null) {
              let tmp13 = result;
              let tmp14 = result1;
              let onContainerResizedResult = onContainerResized(closure_8.current.streamId, result, result1);
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
        if (!closure_8.current.paused) {
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
          const obj = { width: null, height: null };
          obj[0] = num;
          obj[1] = num2;
          const current3 = closure_8.current;
          onResize = current3.onResize;
          if (onResize != null) {
            onResize(obj);
          }
          ref2.current = obj;
        }
      });
      const listener2 = element.addEventListener("canplaythrough", function handleReady() {
        closure_1_5.info("handleReady for " + closure_8.current.streamId + ", have onReady callback = " + null != closure_8.current.onReady);
        const current = closure_8.current;
        onReady = current.onReady;
        if (onReady != null) {
          onReady();
        }
      });
      const _HermesInternal2 = HermesInternal;
      ref.info("create video element for " + closure_8.current.streamId + ", readyState=" + element.readyState);
      if (element.readyState > 3) {
        const _HermesInternal = HermesInternal;
        obj3.error("video element for " + tmp10.current.streamId + " was ready before attached");
      }
      current.appendChild(element);
      resizeObserver.disconnect();
      resizeObserver.observe(element);
      closure_6.current = element;
      obj3 = ref;
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
        ref.info("attaching srcObject for " + current);
        const result = streamId(onReady[3]).acquireDirectVideoStream(current);
        current.srcObject = result.stream;
        return () => {
          closure_1.release();
          current.srcObject = null;
        };
      }
    }
  }, items1);
  obj = { className: flag(onReady[4])("media-engine-video", streamId.className), ref };
  const merged1 = Object.assign(merged);
  return flag2("div", obj);
};