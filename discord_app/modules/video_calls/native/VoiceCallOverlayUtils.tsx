// discord_app/modules/video_calls/native/VoiceCallOverlayUtils.tsx
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 8670 */;

const MIN_MARGIN_BETWEEN_OVERLAYS = BOX_MODE_ACTIONSHEET_WIDTH.MIN_MARGIN_BETWEEN_OVERLAYS;
const VoiceCallOverlayType = BOX_MODE_ACTIONSHEET_WIDTH.VoiceCallOverlayType;
function doRectanglesIntersectWorklet(arg0, arg1, MIN_MARGIN_BETWEEN_OVERLAYS) {
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
                      let tmp = arg0.x + arg0.width + MIN_MARGIN_BETWEEN_OVERLAYS < arg1.x;
                      const diff = arg0.y - MIN_MARGIN_BETWEEN_OVERLAYS;
                      const sum = arg0.y + arg0.height + MIN_MARGIN_BETWEEN_OVERLAYS;
                      const sum1 = arg1.y + arg1.height;
                      if (!tmp) {
                        tmp = arg0.x - MIN_MARGIN_BETWEEN_OVERLAYS > arg1.x + arg1.width;
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
doRectanglesIntersectWorklet.__closure = {};
doRectanglesIntersectWorklet.__workletHash = 697248006216;
doRectanglesIntersectWorklet.__initData = { code: "function doRectanglesIntersectWorklet_VoiceCallOverlayUtilsTsx1(rectA,rectB,minMarginBetweenOverlays){if(rectA==null||rectA.x==null||rectA.y==null||rectA.width==null||rectA.height==null||rectB==null||rectB.x==null||rectB.y==null||rectB.width==null||rectB.height==null){return false;}const minAx=rectA.x-minMarginBetweenOverlays;const maxAx=rectA.x+rectA.width+minMarginBetweenOverlays;const minAy=rectA.y-minMarginBetweenOverlays;const maxAy=rectA.y+rectA.height+minMarginBetweenOverlays;const minBx=rectB.x;const maxBx=rectB.x+rectB.width;const minBy=rectB.y;const maxBy=rectB.y+rectB.height;const aLeftOfB=maxAx<minBx;const aRightOfB=minAx>maxBx;const aBelowB=minAy>maxBy;const aAboveB=maxAy<minBy;return!(aLeftOfB||aRightOfB||aAboveB||aBelowB);}" };
function doesTargetPositionIntersectOtherOverlaysWorklet(arg0, arg1, arg2) {
  if (VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON === arg1) {
    if (arg0[tmp.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible) {
      if (doRectanglesIntersectWorklet(arg2, arg0[tmp.CAMERA_PREVIEW_PICTURE_IN_PICTURE], MIN_MARGIN_BETWEEN_OVERLAYS)) {
        return true;
      }
    } else {
      return false;
    }
  } else if (tmp.CAMERA_PREVIEW_PICTURE_IN_PICTURE === arg1) {
    if (arg0[tmp.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible) {
      if (doRectanglesIntersectWorklet(arg2, arg0[tmp.VOICE_CONTROLS_TOGGLE_BUTTON], MIN_MARGIN_BETWEEN_OVERLAYS)) {
        return true;
      }
    } else {
      return false;
    }
  }
  return false;
}
doesTargetPositionIntersectOtherOverlaysWorklet.__closure = { VoiceCallOverlayType, doRectanglesIntersectWorklet, MIN_MARGIN_BETWEEN_OVERLAYS };
doesTargetPositionIntersectOtherOverlaysWorklet.__workletHash = 4190950618494;
doesTargetPositionIntersectOtherOverlaysWorklet.__initData = { code: "function doesTargetPositionIntersectOtherOverlaysWorklet_VoiceCallOverlayUtilsTsx2(voiceCallOverlayLayoutStates,voiceCallOverlayType,targetRectangle){const{VoiceCallOverlayType,doRectanglesIntersectWorklet,MIN_MARGIN_BETWEEN_OVERLAYS}=this.__closure;switch(voiceCallOverlayType){case VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}case VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}}return false;}" };
const result = set.fileFinishedImporting("modules/video_calls/native/VoiceCallOverlayUtils.tsx");

export { doesTargetPositionIntersectOtherOverlaysWorklet };
export const updateVoiceCallOverlayLayoutState = function updateVoiceCallOverlayLayoutState(voiceCallOverlayType, voiceCallOverlayLayoutState) {
  let obj = dispatcherDefault;
  obj = { type: "VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE", voiceCallOverlayType, voiceCallOverlayLayoutState };
  obj.dispatch(obj);
};
export const setPipEnabledWhileFocusedOnActivityOrStream = function setPipEnabledWhileFocusedOnActivityOrStream(pipEnabledWhileFocusedOnActivityOrStream) {
  let obj = dispatcherDefault;
  obj = { type: "VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM", pipEnabledWhileFocusedOnActivityOrStream };
  obj.dispatch(obj);
};