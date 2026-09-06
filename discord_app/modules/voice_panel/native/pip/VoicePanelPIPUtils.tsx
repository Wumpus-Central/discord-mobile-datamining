// discord_app/modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import participantHasVideo from "../../../video_calls/participantHasVideo.tsx";
import isActivityParticipantCurrentUserCurrentSession from "../../../activities/isActivityParticipantCurrentUserCurrentSession.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
const VoicePanelConstants = fn(12273);
({ SECONDARY_PIP_TOP_MARGIN: hasOwnProperty, VoicePanelModes: metroRequire } = VoicePanelConstants);
const VoicePanelPIPConstants = fn(17088);
({ VoicePanelPIPModes: closure_7, PIPReferenceDimensions } = VoicePanelPIPConstants);
const SquarePIPReferenceDimensions = VoicePanelPIPConstants.SquarePIPReferenceDimensions;
const SquareActivityPIPReferenceDimensions = VoicePanelPIPConstants.SquareActivityPIPReferenceDimensions;
const ParticipantTypes = fn(4581).ParticipantTypes;
const MorphablePanelConstants = fn(12274);
const MIN_PIP_TOSS_VELOCITY = MorphablePanelConstants.MIN_PIP_TOSS_VELOCITY;
const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
const set = new Set();
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 10301627783217;
clamp.__initData = {
  code: "function clamp_VoicePanelPIPUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}",
};
let PIP_LAYOUT_PHYSICS = { mass: 0.3, damping: 80, stiffness: 150 };
function layoutTransition(originX) {
  obj = { animations: null, initialValues: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, obj), originY: null, width: null, height: null };
  size.originY = spring.withSpring(originX.targetOriginY, obj);
  size.width = spring.withSpring(originX.targetWidth, obj);
  size.height = spring.withSpring(originX.targetHeight, obj);
  obj.animations = size;
  obj.initialValues = {
    originX: originX.currentOriginX,
    originY: originX.currentOriginY,
    width: originX.currentWidth,
    height: originX.currentHeight,
  };
  return obj;
}
PIP_LAYOUT_PHYSICS = { withSpring: fn(4974).withSpring, PIP_LAYOUT_PHYSICS };
layoutTransition.__closure = PIP_LAYOUT_PHYSICS;
layoutTransition.__workletHash = 16735009420384;
layoutTransition.__initData = {
  code: "function layoutTransition_VoicePanelPIPUtilsTsx2(values){const{withSpring,PIP_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}",
};
function getPIPWindowDimensions(width, left) {
  const bound = Math.max(left.left, PIP_WINDOW_OFFSET);
  const bound1 = Math.max(left.top, PIP_WINDOW_OFFSET);
  obj = { xOffset: bound, yOffset: bound1, xRange: null, yRange: null };
  const diff = width.width - bound;
  obj.xRange = diff - Math.max(left.right, PIP_WINDOW_OFFSET);
  const diff1 = width.height - bound1;
  obj.yRange = diff1 - Math.max(left.bottom, PIP_WINDOW_OFFSET);
  return obj;
}
getPIPWindowDimensions.__closure = { PIP_WINDOW_OFFSET };
getPIPWindowDimensions.__workletHash = 12185397231026;
getPIPWindowDimensions.__initData = {
  code: "function getPIPWindowDimensions_VoicePanelPIPUtilsTsx3(windowDimensions,safeArea){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET),yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}",
};
function pipXYtoAbsoluteXY(arg0) {
  ({ windowDimensions, safeArea } = arg0);
  if (typeof getPIPWindowDimensions === "function") {
    const _Math = Math;
    const bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
    const _Math2 = Math;
    const bound1 = Math.max(safeArea.top, PIP_WINDOW_OFFSET);
    const _Math3 = Math;
    const diff = windowDimensions.width - bound;
    const _Math4 = Math;
    const diff1 = diff - Math.max(safeArea.right, PIP_WINDOW_OFFSET);
    const diff2 = windowDimensions.height - bound1;
    const point = { x: bound + tmp * diff1, y: bound1 + tmp2 * (diff2 - Math.max(safeArea.bottom, PIP_WINDOW_OFFSET)) };
    return point;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
pipXYtoAbsoluteXY.__closure = { getPIPWindowDimensions };
pipXYtoAbsoluteXY.__workletHash = 16213175273517;
pipXYtoAbsoluteXY.__initData = {
  code: "function pipXYtoAbsoluteXY_VoicePanelPIPUtilsTsx4({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}",
};
function getClampedPIPPosition(topAvoidanceRegion) {
  ({ pipX, pipY, width, height, windowDimensions, safeArea, bottomAvoidanceRegion } = topAvoidanceRegion);
  if (bottomAvoidanceRegion === undefined) {
    bottomAvoidanceRegion = 0;
  }
  let num = topAvoidanceRegion.topAvoidanceRegion;
  if (num === undefined) {
    num = 0;
  }
  let point = topAvoidanceRegion.positionOffset;
  if (point === undefined) {
    point = { x: 0, y: 0 };
  }
  let num2 = 1;
  if (-1 !== pipX) {
    num2 = pipX;
  }
  obj = { pipX: num2, pipY: null, windowDimensions: null, safeArea: null };
  let num3 = 0;
  if (-1 !== pipY) {
    num3 = pipY;
  }
  obj.pipY = num3;
  obj.windowDimensions = windowDimensions;
  obj.safeArea = safeArea;
  const y = pipXYtoAbsoluteXY(obj).y;
  if (-1 === pipY) {
    let sum = y + 72;
  } else {
    sum = y - height / 2;
  }
  if (typeof getPIPWindowDimensions === "function") {
    const _Math = Math;
    const bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
    const _Math2 = Math;
    const bound1 = Math.max(safeArea.top, PIP_WINDOW_OFFSET);
    const _Math3 = Math;
    const diff = windowDimensions.width - bound;
    const _Math4 = Math;
    const diff1 = diff - Math.max(safeArea.right, PIP_WINDOW_OFFSET);
    const diff2 = windowDimensions.height - bound1;
    if (typeof clamp === "function") {
      const _Math5 = Math;
      const _Math6 = Math;
      if (typeof tmp12 === "function") {
        const _Math7 = Math;
        const _Math8 = Math;
        point = { x: null, y: null };
        point.x = tmp13 + point.x;
        point.y = Math.min(Math.max(sum, tmp14), tmp15) + point.y;
        return point;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmpResult = pipXYtoAbsoluteXY(obj);
}
getClampedPIPPosition.__closure = { pipXYtoAbsoluteXY, getPIPWindowDimensions, clamp };
getClampedPIPPosition.__workletHash = 7473574077366;
getClampedPIPPosition.__initData = {
  code: "function getClampedPIPPosition_VoicePanelPIPUtilsTsx5({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0}}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}",
};
function calculatePIPPositionFromVelocity(arg0) {
  ({ velocityX, velocityY, windowDimensions, safeArea } = arg0);
  if (typeof getPIPWindowDimensions === "function") {
    const _Math = Math;
    const bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
    const _Math2 = Math;
    const bound1 = Math.max(safeArea.top, PIP_WINDOW_OFFSET);
    const _Math3 = Math;
    const diff = windowDimensions.width - bound;
    const diff1 = diff - Math.max(safeArea.right, PIP_WINDOW_OFFSET);
    const _Math4 = Math;
    const diff2 = windowDimensions.height - bound1;
    const diff3 = diff2 - Math.max(safeArea.bottom, PIP_WINDOW_OFFSET);
    const diff4 = tmp - bound;
    const diff5 = tmp2 - bound1;
    const _Math5 = Math;
    const _Math6 = Math;
    const _Math7 = Math;
    const absolute = Math.abs(velocityY);
    if (Math.max(absolute, Math.abs(velocityX)) < MIN_PIP_TOSS_VELOCITY) {
      if (typeof clamp === "function") {
        const rect = { left: null, right: null, top: null, bottom: null };
        const _Math8 = Math;
        const _Math9 = Math;
        rect.left = Math.min(Math.max(diff4, 0), diff1);
        if (typeof clamp === "function") {
          const _Math10 = Math;
          const _Math11 = Math;
          rect.right = Math.min(Math.max(tmp19, 0), diff1);
          if (typeof clamp === "function") {
            const _Math12 = Math;
            const _Math13 = Math;
            rect.top = Math.min(Math.max(diff5, 0), diff3);
            if (typeof clamp === "function") {
              const _Math14 = Math;
              const _Math15 = Math;
              rect.bottom = Math.min(Math.max(tmp20, 0), diff3);
              const _Math16 = Math;
              const _Object = Object;
              const items = [];
              HermesBuiltin.arraySpread(Object.values(rect), 0);
              const _Math17 = Math;
              const applyResult = HermesBuiltin.apply(items, Math);
              let str2 = "left";
              if (rect.left !== applyResult) {
                let str3 = "top";
                if (rect.top !== applyResult) {
                  let str4 = "bottom";
                  if (rect.right === applyResult) {
                    str4 = "right";
                  }
                  str3 = str4;
                }
                str2 = str3;
              }
              if ("left" === str2) {
                let num6 = diff5 / diff3;
                let num5 = 0;
              } else if ("right" === str2) {
                num6 = diff5 / diff3;
                num5 = 1;
              } else if ("top" === str2) {
                num5 = diff4 / diff1;
                num6 = 0;
              } else {
                num6 = 0;
                num5 = 0;
                if ("bottom" === str2) {
                  num5 = diff4 / diff1;
                  num6 = 1;
                }
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const result = velocityY / velocityX;
      let num2 = 0;
      if (velocityX > 0) {
        num2 = diff1;
      }
      const sum = diff5 + result * (num2 - diff4);
      if (sum >= 0) {
        if (sum <= diff3) {
          num5 = num2 / diff1;
          num6 = sum / diff3;
        }
      }
      let num4 = 0;
      const result1 = 1 / result;
      if (velocityY > 0) {
        num4 = diff3;
      }
      num5 = (diff4 + result1 * (num4 - diff5)) / diff1;
      num6 = num4 / diff3;
    }
    if (typeof clamp === "function") {
      obj = { pipX: null, pipY: null };
      const _Math18 = Math;
      const _Math19 = Math;
      obj.pipX = Math.min(Math.max(num5, 0), 1);
      if (typeof tmp26 === "function") {
        const _Math20 = Math;
        const _Math21 = Math;
        obj.pipY = Math.min(Math.max(num6, 0), 1);
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
calculatePIPPositionFromVelocity.__closure = { getPIPWindowDimensions, MIN_PIP_TOSS_VELOCITY, clamp };
calculatePIPPositionFromVelocity.__workletHash = 3870426217462;
calculatePIPPositionFromVelocity.__initData = {
  code: "function calculatePIPPositionFromVelocity_VoicePanelPIPUtilsTsx6({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}",
};
const xl = nativeDefault.radii.xl;
const lg = nativeDefault.radii.lg;
function getVoicePanelPIPBorderRadius(width, height) {
  if (width <= SquareActivityPIPReferenceDimensions.width) {
    if (height <= tmp.height) {
      let tmp3 = lg;
    }
    return tmp3;
  }
  tmp3 = xl;
}
getVoicePanelPIPBorderRadius.__closure = { SquareActivityPIPReferenceDimensions, lg, xl };
getVoicePanelPIPBorderRadius.__workletHash = 4735899866220;
getVoicePanelPIPBorderRadius.__initData = {
  code: "function getVoicePanelPIPBorderRadius_VoicePanelPIPUtilsTsx7(width,height){const{SquareActivityPIPReferenceDimensions,lg,xl}=this.__closure;if(width<=SquareActivityPIPReferenceDimensions.width&&height<=SquareActivityPIPReferenceDimensions.height){return lg;}return xl;}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx");

export { PIPReferenceDimensions };
export { SquarePIPReferenceDimensions };
export { SquareActivityPIPReferenceDimensions };
export { PIP_LAYOUT_PHYSICS };
export { layoutTransition };
export const computePIPSize = function computePIPSize(SquarePIPReferenceDimensions, arg1, arg2, showSecondaryPIP) {
  ({ width, height } = SquarePIPReferenceDimensions);
  if (!arg1) {
    if (width !== height) {
      if (width >= height) {
        if (arg2) {
          let width2 = SquareActivityPIPReferenceDimensions.width;
        } else {
          width2 = PIPReferenceDimensions.width;
        }
        const _Math2 = Math;
        let height2 = width2 * Math.max(0.5, SquarePIPReferenceDimensions.height / SquarePIPReferenceDimensions.width);
        let result = width2;
      } else {
        if (arg2) {
          height2 = SquareActivityPIPReferenceDimensions.height;
        } else {
          height2 = PIPReferenceDimensions.height;
        }
        const _Math = Math;
        result = height2 * Math.max(0.5, SquarePIPReferenceDimensions.width / SquarePIPReferenceDimensions.height);
      }
      const size = { width: result, height: height2, containerHeight: null };
      let sum = height2;
      if (showSecondaryPIP) {
        sum = 2 * height2 + hasOwnProperty;
      }
      size.containerHeight = sum;
      return size;
    }
  }
  ({ width: width3, height: height3 } = arg2 ? SquareActivityPIPReferenceDimensions : SquarePIPReferenceDimensions);
};
export const computePIPParticipantToShow = function computePIPParticipantToShow(showSecondaryPIP) {
  ({ channelId, panelMode, lastParticipantId, speakingUserId, focusedParticipantId, blockList } = showSecondaryPIP);
  if (blockList === undefined) {
    blockList = set;
  }
  const id = AuthenticationStore.getId();
  let participant;
  if (null != focusedParticipantId) {
    participant = ChannelRTCStore.getParticipant(channelId, focusedParticipantId);
  }
  if (panelMode === constants.PANEL) {
    if (null != focusedParticipantId) {
      let type;
      if (participant != null) {
        type = participant.type;
      }
      if (type === ParticipantTypes.STREAM) {
        let userVideo;
        if (participant != null) {
          userVideo = participant.userVideo;
        }
        if (true === userVideo) {
          if (!blockList.has(participant.user.id)) {
            const participant1 = ChannelRTCStore.getParticipant(channelId, participant.user.id);
            if (null != participant1) {
              obj = participantHasVideo;
              if (obj.canRenderParticipantVideo(participant1)) {
                obj = { id: participant1.id, type: tmp6.USER };
                return obj;
              }
            }
          }
        }
      }
    }
  }
  if (null != focusedParticipantId) {
    if (null != participant) {
      if (!blockList.has(focusedParticipantId)) {
        obj = { id: focusedParticipantId, type: participant.type };
        return obj;
      }
    }
  }
  let type1;
  if (participant != null) {
    type1 = participant.type;
  }
  if (type1 !== ParticipantTypes.ACTIVITY) {
    if (!showSecondaryPIP.showSecondaryPIP) {
      const activityParticipants = ChannelRTCStore.getActivityParticipants(channelId);
      for (const item10060 of activityParticipants) {
        let participants = item10060.participants;
        if (
          participants.some((item) =>
            isActivityParticipantCurrentUserCurrentSession.isActivityParticipantCurrentUserCurrentSession(item),
          )
        ) {
          if (!blockList.has(item10060.id)) {
            let obj1 = { id: null, type: null };
            ({ id: obj5.id, type: obj5.type } = item10060);
            obj3.return();
            return obj1;
          }
        }
        continue;
      }
    }
  }
  const streamParticipants = ChannelRTCStore.getStreamParticipants(channelId);
  for (const item10083 of streamParticipants) {
    if (!blockList.has(item10083.id)) {
      if (null != ApplicationStreamingStore.getActiveStreamForUser(item10083.user.id, item10083.stream.guildId)) {
        let obj2 = { id: null, type: null };
        ({ id: obj7.id, type: obj7.type } = item10083);
        obj5.return();
        return obj2;
      }
    }
    continue;
  }
  if (null != speakingUserId) {
    if (!blockList.has(speakingUserId)) {
      if (null != ChannelRTCStore.getParticipant(channelId, speakingUserId)) {
        const obj3 = { id: speakingUserId, type: ParticipantTypes.USER };
        return obj3;
      }
    }
  }
  let participant2;
  if (null != lastParticipantId) {
    participant2 = ChannelRTCStore.getParticipant(channelId, lastParticipantId);
  }
  if (null != participant2) {
    if (!blockList.has(participant2.id)) {
      type = participant2.type;
      if (ParticipantTypes.STREAM === type) {
        if (
          null != ApplicationStreamingStore.getActiveStreamForUser(participant2.user.id, participant2.stream.guildId)
        ) {
          let obj9 = participantHasVideo;
          if (obj9.canRenderParticipantVideo(participant2)) {
            ({ id: obj11.id, type: obj11.type } = participant2);
            return { id: null, type: null };
          }
        }
      } else if (ParticipantTypes.ACTIVITY === type) {
        const participants2 = participant2.participants;
        if (
          participants2.some((item) =>
            isActivityParticipantCurrentUserCurrentSession.isActivityParticipantCurrentUserCurrentSession(item),
          )
        ) {
          const obj5 = { id: null, type: null };
          ({ id: obj9.id, type: obj9.type } = participant2);
          return obj5;
        }
      } else if (ParticipantTypes.USER === type) {
        ({ id: obj19.id, type: obj19.type } = participant2);
        return { id: null, type: null };
      }
    }
  }
  const participant3 = ChannelRTCStore.getParticipant(channelId, id);
  if (!blockList.has(id)) {
    if (null != participant3) {
      if (obj13.canRenderParticipantVideo(participant3)) {
        const obj7 = { id, type: ParticipantTypes.USER };
        return obj7;
      }
      obj13 = participantHasVideo;
    }
  }
  const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
  for (const item10162 of videoParticipants) {
    if (!blockList.has(item10162.id)) {
      let obj16 = participantHasVideo;
      if (obj16.canRenderParticipantVideo(item10162)) {
        let obj8 = { id: null, type: null };
        ({ id: obj17.id, type: obj17.type } = item10162);
        obj15.return();
        return obj8;
      }
    }
    continue;
  }
  let tmp46;
  if (!blockList.has(id)) {
    if (null != participant3) {
      if (panelMode !== constants.PANEL) {
        obj9 = { id, type: ParticipantTypes.USER };
        tmp46 = obj9;
      } else {
        let type2;
        if (participant != null) {
          type2 = participant.type;
        }
      }
    }
  }
  return tmp46;
};
export const getPIPMode = function getPIPMode(connected) {
  ({ channelId, manuallyFocusedId, mode } = connected);
  if (connected.connected) {
    if (null != manuallyFocusedId) {
      const participant = ChannelRTCStore.getParticipant(channelId, manuallyFocusedId);
    }
    if (mode === constants.PANEL) {
      if (null != participant) {
        if (participant.type === ParticipantTypes.ACTIVITY) {
          return constants2.IN_PANEL;
        } else {
          if (participant.type === tmp27.STREAM) {
            if (participant.userVideo) {
              const participant1 = ChannelRTCStore.getParticipant(channelId, participant.user.id);
              if (obj.canRenderParticipantVideo(participant1)) {
                return constants2.IN_PANEL;
              }
              obj = participantHasVideo;
            }
          }
          if (tmp) {
            if (participant.id !== AuthenticationStore.getId()) {
              return constants2.IN_PANEL;
            } else {
              const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
              for (const item10032 of videoParticipants) {
                if (item10032.id !== AuthenticationStore.getId()) {
                  let obj2 = participantHasVideo;
                  if (obj2.canRenderParticipantVideo(item10032)) {
                    obj3.return();
                    return constants2.IN_PANEL;
                  }
                }
                continue;
              }
              if (participant.id !== AuthenticationStore.getId()) {
                return constants2.IN_PANEL;
              }
            }
          }
        }
      }
    }
    let IN_APP;
    if (mode === constants.PIP) {
      IN_APP = constants2.IN_APP;
    }
    return IN_APP;
  }
};
export { getPIPWindowDimensions };
export { pipXYtoAbsoluteXY };
export { getClampedPIPPosition };
export { calculatePIPPositionFromVelocity };
export { getVoicePanelPIPBorderRadius };
