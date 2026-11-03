// discord_app/modules/video_calls/native/VoiceCallOverlayUtils.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ChannelCallConstants from "ChannelCallConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [
  {
    code: "(function doRectanglesIntersectWorklet_VoiceCallOverlayUtilsTsx1(rectA,rectB,minMarginBetweenOverlays){if(rectA==null||rectA.x==null||rectA.y==null||rectA.width==null||rectA.height==null||rectB==null||rectB.x==null||rectB.y==null||rectB.width==null||rectB.height==null){return false;}const minAx=rectA.x-minMarginBetweenOverlays;const maxAx=rectA.x+rectA.width+minMarginBetweenOverlays;const minAy=rectA.y-minMarginBetweenOverlays;const maxAy=rectA.y+rectA.height+minMarginBetweenOverlays;const minBx=rectB.x;const maxBx=rectB.x+rectB.width;const minBy=rectB.y;const maxBy=rectB.y+rectB.height;const aLeftOfB=maxAx<minBx;const aRightOfB=minAx>maxBx;const aBelowB=minAy>maxBy;const aAboveB=maxAy<minBy;return!(aLeftOfB||aRightOfB||aAboveB||aBelowB);})",
  },
];
[tmp3] = items;
function doRectanglesIntersectWorklet(arg0, arg1, arg2) {
  if (null != arg0) {
    if (null != arg0.x) {
      if (null != arg0.y) {
        if (null != arg0.width) {
          if (null != arg0.height) {
            if (null != arg1) {
              if (null != arg1.x) {
                if (null != arg1.y) {
                  if (null != arg1.width) {
                    if (null != arg1.height) {
                      let tmp = arg0.x + arg0.width + arg2 < arg1.x;
                      const diff = arg0.y - arg2;
                      const sum = arg0.y + arg0.height + arg2;
                      const sum1 = arg1.y + arg1.height;
                      if (!tmp) {
                        tmp = arg0.x - arg2 > arg1.x + arg1.width;
                      }
                      if (!tmp) {
                        tmp = sum < arg1.y;
                      }
                      if (!tmp) {
                        tmp = diff > sum1;
                      }
                      return !tmp;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}
doRectanglesIntersectWorklet.__workletHash = 17500774499337;
doRectanglesIntersectWorklet.__initData = tmp3;
const items1 = [
  {
    code: "(function doesTargetPositionIntersectOtherOverlaysWorklet_VoiceCallOverlayUtilsTsx2(voiceCallOverlayLayoutStates,voiceCallOverlayType,targetRectangle){let[VoiceCallOverlayType,doRectanglesIntersectWorklet,MIN_MARGIN_BETWEEN_OVERLAYS]=this.__closure;switch(voiceCallOverlayType){case VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}case VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}}return false;})",
  },
  ChannelCallConstants.VoiceCallOverlayType,
  doRectanglesIntersectWorklet,
  ChannelCallConstants.MIN_MARGIN_BETWEEN_OVERLAYS,
];
let closure_129_0;
let closure_129_1;
let closure_129_2;
[tmp4, tmp5, tmp6, tmp7] = items1;
function doesTargetPositionIntersectOtherOverlaysWorklet(arg0, arg1, arg2) {
  if (importDefault.VOICE_CONTROLS_TOGGLE_BUTTON === arg1) {
    if (arg0[importDefault.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible) {
      if (dependencyMap(arg2, arg0[importDefault.CAMERA_PREVIEW_PICTURE_IN_PICTURE], React2)) {
        return true;
      }
    } else {
      return false;
    }
  } else if (importDefault.CAMERA_PREVIEW_PICTURE_IN_PICTURE === arg1) {
    if (arg0[importDefault.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible) {
      if (dependencyMap(arg2, arg0[importDefault.VOICE_CONTROLS_TOGGLE_BUTTON], React2)) {
        return true;
      }
    } else {
      return false;
    }
  }
  return false;
}
const items2 = [tmp5, tmp6, tmp7];
doesTargetPositionIntersectOtherOverlaysWorklet.__closure = items2;
doesTargetPositionIntersectOtherOverlaysWorklet.__workletHash = 4966817153639;
doesTargetPositionIntersectOtherOverlaysWorklet.__initData = tmp4;
const result = size.fileFinishedImporting("modules/video_calls/native/VoiceCallOverlayUtils.tsx");

export { doesTargetPositionIntersectOtherOverlaysWorklet };
export function updateVoiceCallOverlayLayoutState(voiceCallOverlayType, voiceCallOverlayLayoutState) {
  DispatcherDefault.dispatch({
    type: "VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE",
    voiceCallOverlayType,
    voiceCallOverlayLayoutState,
  });
}
export function setPipEnabledWhileFocusedOnActivityOrStream(pipEnabledWhileFocusedOnActivityOrStream) {
  DispatcherDefault.dispatch({
    type: "VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM",
    pipEnabledWhileFocusedOnActivityOrStream,
  });
}
