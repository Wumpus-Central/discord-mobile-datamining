// discord_app/modules/conjure/background_frames/conjureBackgroundFrames.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import getChannelIdForEmbeddedSurfaceDefault from "../../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import conjurePreviewSurface from "../preview/conjurePreviewSurface.tsx";
import leaveFrame from "../../frames/leaveFrame.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import validateConjureAppFrame from "../../rpc/helpers/validateConjureAppFrame.tsx";
import conjureBackgroundFrameRules from "conjureBackgroundFrameRules.tsx";
import conjureBackgroundFramePlatformDefault from "conjureBackgroundFramePlatform.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../../frames/FramesStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
function releaseConjureFrame(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    let result = conjureBackgroundFrameRules.shouldRunInBackgroundOnRelease(frame);
    if (result) {
      result = !conjureBackgroundFramePlatformDefault.isInHostWindow(frame);
    }
    if (result) {
      result = !conjureBackgroundFramePlatformDefault.isActivityPopoutOpen();
    }
    const intent = frame.intent;
    if (result) {
      if (intent === constants.INLINE) {
        FramesActionCreatorsDefault.promoteFrame(frameId);
      }
      const result1 = conjureBackgroundFramePlatformDefault.enterPictureInPicture(frameId);
    } else if (intent === constants.MAIN) {
      FramesActionCreatorsDefault.demoteMainFrame(frameId);
    }
  }
}
function isRunningInBackground(surface) {
  let isPictureInPicture = dependencyMap;
  let tmp2 = surface.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY;
  if (tmp2) {
    tmp2 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(surface);
    const tmpResult = conjureBackgroundFrameRules;
  }
  if (tmp2) {
    tmp2 = !conjureBackgroundFramePlatformDefault.isInHostWindow(surface);
  }
  if (!tmp2) {
    return tmp2;
  } else {
    const mainFrame = FramesStore.getMainFrame();
    let id;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    if (id === surface.id) {
      const isActivityPopoutOpenResult = conjureBackgroundFramePlatformDefault.isActivityPopoutOpen();
      let isPictureInPictureResult = !isActivityPopoutOpenResult;
      if (!isActivityPopoutOpenResult) {
        isPictureInPicture = conjureBackgroundFramePlatformDefault.isPictureInPicture;
        isPictureInPictureResult = isPictureInPicture(surface);
        const tmp10Result = conjureBackgroundFramePlatformDefault;
      }
    } else {
      const tmp9 = !conjureBackgroundFramePlatformDefault.isOnScreen(surface.id);
    }
  }
}
function closeBackgroundedConjureAppFrames(applicationId, arg1) {
  if (obj.isConjureApplication(applicationId)) {
    const allFrames = FramesStore.getAllFrames();
    const iter = allFrames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let tmp8 = nextResult.applicationId === applicationId;
      if (tmp8) {
        tmp8 = tmp7.id !== arg1;
      }
      if (tmp8) {
        tmp8 = isRunningInBackground(tmp7);
      }
      if (tmp8) {
        let obj2 = leaveFrame;
        let leaveFrameResult = obj2.leaveFrame(tmp7.id);
      }
      continue;
    }
  }
  obj = validateConjureAppFrame;
}
const FramesConstants = fn(6762);
({ FrameIntent: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFrames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureFrameHandoff(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(7);
      if (cResult[0] === arg0) {
        if (cResult[1] === arg1) {
          let tmp2 = cResult[2];
        }
        closure_1 = tmp2;
        if (cResult[3] === arg0) {
          if (cResult[4] === tmp2) {
            let tmp5 = cResult[5];
            let tmp6 = cResult[6];
          }
          const effect = noop.useEffect(tmp5, tmp6);
        }
        const fn = function s() {
          if (null != closure_1) {
            closeBackgroundedConjureAppFrames(closure_0, closure_1);
            const frame = FramesStore.getFrame(closure_1);
            if (null != frame) {
              if (!obj6.isActivityPopoutOpen()) {
                const mainFrame = FramesStore.getMainFrame();
                let id;
                if (mainFrame != null) {
                  id = mainFrame.id;
                }
                if (frame.intent === constants.MAIN) {
                  if (!tmp8) {
                    FramesActionCreatorsDefault.promoteFrame(closure_1);
                    const tmp15Result = FramesActionCreatorsDefault;
                  }
                  const result = FramesActionCreatorsDefault.resetFrameLayoutModes(closure_1);
                  const tmp15Result3 = FramesActionCreatorsDefault;
                } else {
                  let isConjureApplicationResult = tmp8;
                  if (tmp8) {
                    isConjureApplicationResult = validateConjureAppFrame.isConjureApplication(frame.applicationId);
                  }
                  if (isConjureApplicationResult) {
                    FramesActionCreatorsDefault.clearMainFrameSlot();
                    const tmp15Result4 = FramesActionCreatorsDefault;
                  }
                }
              }
              obj6 = conjureBackgroundFramePlatformDefault;
            }
            return () => {
              releaseConjureFrame(closure_1_1);
            };
          }
        };
        const items = [arg0, tmp2];
        cResult[3] = arg0;
        cResult[4] = tmp2;
        cResult[5] = fn;
        cResult[6] = items;
        tmp6 = items;
        tmp5 = fn;
      }
      let tmp3 = null;
      if (null != arg1) {
        tmp3 = closure_7(arg0, arg1);
      }
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = tmp3;
      tmp2 = tmp3;
      const obj = require("c");
    }
  : function useConjureFrameHandoff(arg0, arg1) {
      closure_0 = arg0;
      let tmp = null;
      if (null != arg1) {
        tmp = closure_7(arg0, arg1);
      }
      closure_1 = tmp;
      const items = [arg0, tmp];
      const effect = noop.useEffect(() => {
        if (null != closure_1) {
          closeBackgroundedConjureAppFrames(closure_0, closure_1);
          const frame = FramesStore.getFrame(closure_1);
          if (null != frame) {
            if (!obj6.isActivityPopoutOpen()) {
              const mainFrame = FramesStore.getMainFrame();
              let id;
              if (mainFrame != null) {
                id = mainFrame.id;
              }
              if (frame.intent === constants.MAIN) {
                if (!tmp8) {
                  FramesActionCreatorsDefault.promoteFrame(closure_1);
                  const tmp15Result = FramesActionCreatorsDefault;
                }
                const result = FramesActionCreatorsDefault.resetFrameLayoutModes(closure_1);
                const tmp15Result3 = FramesActionCreatorsDefault;
              } else {
                let isConjureApplicationResult = tmp8;
                if (tmp8) {
                  isConjureApplicationResult = validateConjureAppFrame.isConjureApplication(frame.applicationId);
                }
                if (isConjureApplicationResult) {
                  FramesActionCreatorsDefault.clearMainFrameSlot();
                  const tmp15Result4 = FramesActionCreatorsDefault;
                }
              }
            }
            obj6 = conjureBackgroundFramePlatformDefault;
          }
          return () => {
            releaseConjureFrame(closure_1_1);
          };
        }
      }, items);
    };
export { closeBackgroundedConjureAppFrames };
export const returnToConjureFrameSurface = function returnToConjureFrameSurface(frame) {
  if (frame.intent === constants.INLINE) {
    if (!obj3.isConjurePreviewSurface(frame.surface)) {
      if (tmp6Result.isConjureApplication(frame.applicationId)) {
        const channel = ChannelStore.getChannel(getChannelIdForEmbeddedSurfaceDefault(frame.surface));
        let openSurfaceChannelResult = null != channel;
        if (openSurfaceChannelResult) {
          openSurfaceChannelResult = conjureBackgroundFramePlatformDefault.openSurfaceChannel(frame.surface, channel);
          const tmp2Result = conjureBackgroundFramePlatformDefault;
        }
        return openSurfaceChannelResult;
      }
      tmp6Result = validateConjureAppFrame;
    }
    obj3 = conjurePreviewSurface;
  }
  return false;
};
