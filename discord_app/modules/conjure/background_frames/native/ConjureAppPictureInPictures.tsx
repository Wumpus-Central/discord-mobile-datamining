// discord_app/modules/conjure/background_frames/native/ConjureAppPictureInPictures.tsx
import c from "../../../../../_runtime/00576_c.js";
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames.tsx";
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout.tsx";
import ConjureAppPictureInPictureDefault from "ConjureAppPictureInPicture.tsx";
import useFloatConjureAppsOffScreenDefault from "useFloatConjureAppsOffScreen.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../../frames/FramesStore.tsx";

require = fn;
const View = fn(17).View;
const FramesConstants = fn(6811);
({ asLaunched: metroRequire, getPipOrientationLockStateForFrame: closure_7 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5004);
let closure_10 = createStyles.createStyles({
  layer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  hidden: { opacity: 0 },
});
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureAppPictureInPictureLayer(frameIds) {
      const cResult = width(576).c(34);
      frameIds = frameIds.frameIds;
      const tmp4 = closure_10();
      const size = height(1496)();
      width = size.width;
      height = size.height;
      const tmp6 = height(1630)();
      dependencyMap = tmp6;
      const tmp7 = height(18733)(tmp6);
      const avoidance = tmp7;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { includeCustomKeyboard: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp9 = height(7063)(first);
      const obj = width(576);
      const sharedValue = width(5085).useSharedValue(false);
      const tmpResult = width(5085);
      const sharedValue1 = width(5085).useSharedValue(false);
      if (cResult[1] === tmp6) {
        if (cResult[2] === height) {
          if (cResult[3] === width) {
            let tmp12 = cResult[4];
          }
          let closeTargetCenter = tmp12;
          let hidden = tmp9;
          if (tmp9) {
            hidden = tmp4.hidden;
          }
          if (cResult[5] === tmp4.layer) {
            if (cResult[6] === hidden) {
              let tmp14 = cResult[7];
            }
            let str = "box-none";
            if (tmp9) {
              str = "none";
            }
            if (cResult[8] === tmp12) {
              if (cResult[9] === sharedValue1) {
                if (cResult[10] === sharedValue) {
                  let tmp15 = cResult[11];
                }
                if (cResult[12] === tmp7) {
                  if (cResult[13] === tmp12) {
                    if (cResult[14] === sharedValue1) {
                      if (cResult[15] === sharedValue) {
                        if (cResult[16] === frameIds) {
                          if (cResult[17] === tmp6) {
                            if (cResult[18] === height) {
                              if (cResult[19] === width) {
                                if (cResult[29] === tmp14) {
                                  if (cResult[30] === str) {
                                    if (cResult[31] === tmp15) {
                                      if (cResult[32] === tmp18) {
                                        let tmp22 = cResult[33];
                                      }
                                      return tmp22;
                                    }
                                  }
                                }
                                const obj3 = { style: tmp14, pointerEvents: str, children: null };
                                const items = [tmp15, cResult[20]];
                                obj3.children = items;
                                const tmp25 = closure_9(sharedValue, obj3);
                                cResult[29] = tmp14;
                                cResult[30] = str;
                                cResult[31] = tmp15;
                                cResult[32] = cResult[20];
                                cResult[33] = tmp25;
                                tmp22 = tmp25;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (cResult[21] === tmp7) {
                  if (cResult[22] === tmp12) {
                    if (cResult[23] === sharedValue1) {
                      if (cResult[24] === sharedValue) {
                        if (cResult[25] === tmp6) {
                          if (cResult[26] === height) {
                            if (cResult[27] === width) {
                              let tmp19 = cResult[28];
                            }
                            const mapped = frameIds.map(tmp19);
                            cResult[12] = tmp7;
                            cResult[13] = tmp12;
                            cResult[14] = sharedValue1;
                            cResult[15] = sharedValue;
                            cResult[16] = frameIds;
                            cResult[17] = tmp6;
                            cResult[18] = height;
                            cResult[19] = width;
                            cResult[20] = mapped;
                          }
                        }
                      }
                    }
                  }
                }
                const fn = function z(frameId, index) {
                  return closure_2_8(
                    closure_12,
                    {
                      frameId,
                      index,
                      windowWidth: width,
                      windowHeight: height,
                      safeArea,
                      avoidance,
                      closeTargetCenter,
                      closeTargetShown: sharedValue,
                      closeTargetHovered: sharedValue1,
                    },
                    frameId,
                  );
                };
                cResult[21] = tmp7;
                cResult[22] = tmp12;
                cResult[23] = sharedValue1;
                cResult[24] = sharedValue;
                cResult[25] = tmp6;
                cResult[26] = height;
                cResult[27] = width;
                cResult[28] = fn;
                tmp19 = fn;
              }
            }
            const obj4 = { center: tmp12, shown: sharedValue, hovered: sharedValue1 };
            const tmp17 = closure_8(tmp5(18737), obj4);
            cResult[8] = tmp12;
            cResult[9] = sharedValue1;
            cResult[10] = sharedValue;
            cResult[11] = tmp17;
            tmp15 = tmp17;
          }
          const items1 = [tmp4.layer, hidden];
          cResult[5] = tmp4.layer;
          cResult[6] = hidden;
          cResult[7] = items1;
          tmp14 = items1;
        }
      }
      const tmpResult3 = width(5085);
      closeTargetCenter = width(18736).getCloseTargetCenter(width, height, tmp6);
      cResult[1] = tmp6;
      cResult[2] = height;
      cResult[3] = width;
      cResult[4] = closeTargetCenter;
      tmp12 = closeTargetCenter;
      const tmpResult4 = width(18736);
    }
  : function ConjureAppPictureInPictureLayer(frameIds) {
      frameIds = frameIds.frameIds;
      let height;
      const tmp = closure_10();
      const size = height(1496)();
      const width = size.width;
      height = size.height;
      const tmp4 = height(1630)();
      dependencyMap = tmp4;
      noop = height(18733)(tmp4);
      const tmp5 = height(7063)({ includeCustomKeyboard: true });
      const sharedValue = width(5085).useSharedValue(false);
      const obj = width(5085);
      const tmp2 = height;
      const sharedValue1 = width(5085).useSharedValue(false);
      const items = [width, height, tmp4];
      const memo = noop.useMemo(
        () => conjureAppPictureInPictureLayout.getCloseTargetCenter(width, height, closure_2),
        items,
      );
      const items1 = [tmp.layer];
      let hidden = tmp5;
      if (tmp5) {
        hidden = tmp.hidden;
      }
      const obj3 = { style: items1, pointerEvents: null, children: null };
      items1[1] = hidden;
      let str = "box-none";
      if (tmp5) {
        str = "none";
      }
      obj3.pointerEvents = str;
      const items2 = [
        closure_8(tmp2(18737), { center: memo, shown: sharedValue, hovered: sharedValue1 }),
        frameIds.map((frameId, index) =>
          closure_2_8(
            closure_12,
            {
              frameId,
              index,
              windowWidth: width,
              windowHeight: height,
              safeArea,
              avoidance,
              closeTargetCenter: memo,
              closeTargetShown: sharedValue,
              closeTargetHovered: sharedValue1,
            },
            frameId,
          ),
        ),
      ];
      obj3.children = items2;
      return closure_9(sharedValue, obj3);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureAppPictureInPictureWithSize(frameId) {
      const cResult = frameId(576).c(10);
      frameId = frameId.frameId;
      const windowWidth = frameId.windowWidth;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FramesStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== frameId) {
        const fn = function u() {
          return React5(timestampProducer(FramesStore.getFrame(frameId)));
        };
        const items1 = [frameId];
        cResult[1] = frameId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = frameId(576);
      const stateFromStores = frameId(504).useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === windowWidth) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === frameId) {
          if (cResult[8] === tmp9) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
        const obj2 = {};
        const merged = Object.assign(frameId);
        obj2.size = tmp9;
        const tmp18 = closure_8(ConjureAppPictureInPictureDefault, obj2);
        cResult[7] = frameId;
        cResult[8] = tmp9;
        cResult[9] = tmp18;
        tmp11 = tmp18;
      }
      const tmpResult = frameId(504);
      const pictureInPictureSize = frameId(18736).getPictureInPictureSize(windowWidth, stateFromStores);
      cResult[4] = stateFromStores;
      cResult[5] = windowWidth;
      cResult[6] = pictureInPictureSize;
      tmp9 = pictureInPictureSize;
      const tmpResult2 = frameId(18736);
    }
  : function ConjureAppPictureInPictureWithSize(frameId) {
      frameId = frameId.frameId;
      const windowWidth = frameId.windowWidth;
      const items = [FramesStore];
      const items1 = [frameId];
      stateFromStores = frameId(stateFromStores[15]).useStateFromStores(
        items,
        () => React5(timestampProducer(FramesStore.getFrame(frameId))),
        items1,
      );
      const items2 = [windowWidth, stateFromStores];
      const memo = noop.useMemo(
        () => conjureAppPictureInPictureLayout.getPictureInPictureSize(windowWidth, stateFromStores),
        items2,
      );
      const obj2 = {};
      const obj = frameId(stateFromStores[15]);
      const merged = Object.assign(frameId);
      obj2.size = memo;
      return closure_8(windowWidth(stateFromStores[16]), obj2);
    };
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictures.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureAppPictureInPictures() {
      const cResult = c.c(2);
      useFloatConjureAppsOffScreenDefault();
      const conjureAppPictureInPictureFrameIds =
        conjureAppPictureInPictureFrames.useConjureAppPictureInPictureFrameIds();
      if (cResult[0] !== conjureAppPictureInPictureFrameIds) {
        let tmp4 = null;
        if (conjureAppPictureInPictureFrameIds.length > 0) {
          const obj3 = { frameIds: conjureAppPictureInPictureFrameIds };
          tmp4 = closure_1_8(closure_11, obj3);
        }
        cResult[0] = conjureAppPictureInPictureFrameIds;
        cResult[1] = tmp4;
        let tmp3 = tmp4;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function ConjureAppPictureInPictures() {
      useFloatConjureAppsOffScreenDefault();
      const conjureAppPictureInPictureFrameIds =
        conjureAppPictureInPictureFrames.useConjureAppPictureInPictureFrameIds();
      let tmp2 = null;
      if (conjureAppPictureInPictureFrameIds.length > 0) {
        const obj2 = { frameIds: conjureAppPictureInPictureFrameIds };
        tmp2 = closure_1_8(closure_11, obj2);
      }
      return tmp2;
    };
