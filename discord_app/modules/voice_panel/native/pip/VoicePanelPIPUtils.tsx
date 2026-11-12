// === Module 19698: VoicePanelPIPUtils ===

// Module 19698 (VoicePanelPIPUtils)
import nativeDefault from "native" /* 575 */;
import isActivityParticipantCurrentUserCurrentSession from "isActivityParticipantCurrentUserCurrentSession" /* 5915 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6745 */;
import participantHasVideo from "participantHasVideo" /* 11924 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const VoicePanelConstants = fn(11919);
const SECONDARY_PIP_TOP_MARGIN = VoicePanelConstants.SECONDARY_PIP_TOP_MARGIN;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelPIPConstants = fn(19699);
({ VoicePanelPIPModes: metroImportDefault, PIPReferenceDimensions } = VoicePanelPIPConstants);
const SquarePIPReferenceDimensions = VoicePanelPIPConstants.SquarePIPReferenceDimensions;
const SquareActivityPIPReferenceDimensions = VoicePanelPIPConstants.SquareActivityPIPReferenceDimensions;
const ParticipantTypes = fn(5920).ParticipantTypes;
const MorphablePanelConstants = fn(11920);
({ MIN_PIP_TOSS_VELOCITY, PIP_WINDOW_OFFSET } = MorphablePanelConstants);
let set = new Set();
let items = [{ code: "(function clamp_VoicePanelPIPUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);})" }];
[tmp6] = items;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__workletHash = 623753827248;
clamp.__initData = tmp6;
const items1 = [{ code: "(function getPIPWindowDimensions_VoicePanelPIPUtilsTsx2(windowDimensions,safeArea){let[PIP_WINDOW_OFFSET]=this.__closure;const xOffset=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET),yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};})" }, PIP_WINDOW_OFFSET];
let closure_129_0;
[tmp7, tmp8] = items1;
function getPIPWindowDimensions(width, left) {
  const bound = Math.max(left.left, require);
  const bound1 = Math.max(left.top, require);
  const obj = { xOffset: bound, yOffset: bound1, xRange: null, yRange: null };
  const diff = width.width - bound;
  obj.xRange = diff - Math.max(left.right, require);
  const diff1 = width.height - bound1;
  obj.yRange = diff1 - Math.max(left.bottom, require);
  return obj;
}
const items2 = [tmp8];
getPIPWindowDimensions.__closure = items2;
getPIPWindowDimensions.__workletHash = 12962518417802;
getPIPWindowDimensions.__initData = tmp7;
const items3 = [{ code: "(function pipXYtoAbsoluteXY_VoicePanelPIPUtilsTsx3({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea}){let[getPIPWindowDimensions]=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};})" }, getPIPWindowDimensions];
let closure_130_0;
[tmp9, tmp10] = items3;
function pipXYtoAbsoluteXY(windowDimensions) {
  ({ pipX, pipY } = windowDimensions);
  const tmp = require(windowDimensions.windowDimensions, windowDimensions.safeArea);
  const point = { x: tmp.xOffset + pipX * tmp.xRange, y: tmp.yOffset + pipY * tmp.yRange };
  return point;
}
const items4 = [tmp10];
pipXYtoAbsoluteXY.__closure = items4;
pipXYtoAbsoluteXY.__workletHash = 4693203505939;
pipXYtoAbsoluteXY.__initData = tmp9;
const items5 = [{ code: "(function getClampedPIPPosition_VoicePanelPIPUtilsTsx4({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0}){let[pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp]=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);return{x:x,y:y};})" }, pipXYtoAbsoluteXY, getPIPWindowDimensions, clamp];
let closure_131_0;
let closure_131_1;
let closure_131_2;
[tmp11, tmp12, tmp13, tmp14] = items5;
function getClampedPIPPosition(topAvoidanceRegion) {
  ({ pipX, pipY, width, height, windowDimensions, safeArea, bottomAvoidanceRegion } = topAvoidanceRegion);
  if (bottomAvoidanceRegion === undefined) {
    bottomAvoidanceRegion = 0;
  }
  let num = topAvoidanceRegion.topAvoidanceRegion;
  if (num === undefined) {
    num = 0;
  }
  let num2 = 1;
  if (-1 !== pipX) {
    num2 = pipX;
  }
  const obj = { pipX: num2, pipY: null, windowDimensions: null, safeArea: null };
  let num3 = 0;
  if (-1 !== pipY) {
    num3 = pipY;
  }
  obj.pipY = num3;
  obj.windowDimensions = windowDimensions;
  obj.safeArea = safeArea;
  const point = require(obj);
  const y = point.y;
  const diff = point.x - width / 2;
  if (-1 === pipY) {
    let sum = y + 72;
  } else {
    sum = y - height / 2;
  }
  const tmp5 = dependencyMap(windowDimensions, safeArea);
  const point1 = { x: ChannelRTCStore(diff, tmp5.xOffset, tmp5.xOffset + tmp5.xRange - width), y: ChannelRTCStore(sum, tmp5.yOffset + num, tmp5.yOffset + tmp5.yRange - bottomAvoidanceRegion - height) };
  return point1;
}
const items6 = [tmp12, tmp13, tmp14];
getClampedPIPPosition.__closure = items6;
getClampedPIPPosition.__workletHash = 7513917859296;
getClampedPIPPosition.__initData = tmp11;
const items7 = [{ code: "(function getScaledPIPContainerHeight_VoicePanelPIPUtilsTsx5({height:height,containerHeight:containerHeight,showSecondaryPIP:showSecondaryPIP,scale:scale}){let[SECONDARY_PIP_TOP_MARGIN]=this.__closure;if(!showSecondaryPIP){return height*scale;}return(containerHeight-SECONDARY_PIP_TOP_MARGIN)*scale+SECONDARY_PIP_TOP_MARGIN;})" }, SECONDARY_PIP_TOP_MARGIN];
let closure_132_0;
[tmp15, tmp16] = items7;
function getScaledPIPContainerHeight(scale) {
  scale = scale.scale;
  if (scale.showSecondaryPIP) {
    let sum = (tmp2 - require) * scale + require;
  } else {
    sum = tmp * scale;
  }
  return sum;
}
const items8 = [tmp16];
getScaledPIPContainerHeight.__closure = items8;
getScaledPIPContainerHeight.__workletHash = 2802177660733;
getScaledPIPContainerHeight.__initData = tmp15;
const items9 = [{ code: "(function clampPIPScale_VoicePanelPIPUtilsTsx6({scale:scale,width:width,containerHeight:containerHeight,showSecondaryPIP:showSecondaryPIP,windowDimensions:windowDimensions,safeArea:safeArea,pipAvoidanceSpecs:pipAvoidanceSpecs}){let[getPIPWindowDimensions,SECONDARY_PIP_TOP_MARGIN]=this.__closure;const{xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);const maxWidth=xRange;const maxHeight=yRange-pipAvoidanceSpecs.top-pipAvoidanceSpecs.bottom;const scalableHeight=showSecondaryPIP?containerHeight-SECONDARY_PIP_TOP_MARGIN:containerHeight;const scalableMaxHeight=showSecondaryPIP?maxHeight-SECONDARY_PIP_TOP_MARGIN:maxHeight;const maxScale=Math.min(maxWidth/width,scalableMaxHeight/scalableHeight);return Math.max(0.75,Math.min(scale,maxScale));})" }, getPIPWindowDimensions, SECONDARY_PIP_TOP_MARGIN];
let closure_133_0;
let closure_133_1;
[tmp17, tmp18, tmp19] = items9;
function clampPIPScale(windowDimensions) {
  ({ containerHeight, showSecondaryPIP, pipAvoidanceSpecs } = windowDimensions);
  ({ scale, width } = windowDimensions);
  const tmp = require(windowDimensions.windowDimensions, windowDimensions.safeArea);
  const diff = tmp.yRange - pipAvoidanceSpecs.top - pipAvoidanceSpecs.bottom;
  let diff1 = containerHeight;
  if (showSecondaryPIP) {
    diff1 = containerHeight - dependencyMap;
  }
  let diff2 = diff;
  if (showSecondaryPIP) {
    diff2 = diff - dependencyMap;
  }
  return Math.max(0.75, Math.min(scale, Math.min(tmp.xRange / width, diff2 / diff1)));
}
const items10 = [tmp18, tmp19];
clampPIPScale.__closure = items10;
clampPIPScale.__workletHash = 711895361648;
clampPIPScale.__initData = tmp17;
const items11 = [{ code: "(function calculatePIPPositionFromVelocity_VoicePanelPIPUtilsTsx7({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea}){let[getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp]=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};})" }, getPIPWindowDimensions, MIN_PIP_TOSS_VELOCITY, clamp];
let closure_134_0;
let closure_134_1;
let closure_134_2;
[tmp20, tmp21, tmp22, tmp23] = items11;
function calculatePIPPositionFromVelocity(windowDimensions) {
  ({ velocityX, velocityY } = windowDimensions);
  ({ absoluteX, absoluteY } = windowDimensions);
  const tmp = require(windowDimensions.windowDimensions, windowDimensions.safeArea);
  ({ xRange, yRange } = tmp);
  const diff = absoluteX - tmp.xOffset;
  const diff1 = absoluteY - tmp.yOffset;
  const absolute = Math.abs(velocityY);
  if (Math.max(absolute, Math.abs(velocityX)) < dependencyMap) {
    const rect = { left: ChannelRTCStore(diff, 0, xRange), right: ChannelRTCStore(xRange - diff, 0, xRange), top: ChannelRTCStore(diff1, 0, yRange), bottom: ChannelRTCStore(yRange - diff1, 0, yRange) };
    const _Math = Math;
    const _Object = Object;
    items = [];
    HermesBuiltin.arraySpread(Object.values(rect), 0);
    const _Math2 = Math;
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
      let num6 = diff1 / yRange;
      let num5 = 0;
    } else if ("right" === str2) {
      num6 = diff1 / yRange;
      num5 = 1;
    } else if ("top" === str2) {
      num5 = diff / xRange;
      num6 = 0;
    } else {
      num6 = 0;
      num5 = 0;
      if ("bottom" === str2) {
        num5 = diff / xRange;
        num6 = 1;
      }
    }
  } else {
    const result = velocityY / velocityX;
    let num2 = 0;
    if (velocityX > 0) {
      num2 = xRange;
    }
    const sum = diff1 + result * (num2 - diff);
    if (sum >= 0) {
      if (sum <= yRange) {
        num5 = num2 / xRange;
        num6 = sum / yRange;
      }
    }
    let num4 = 0;
    const result1 = 1 / result;
    if (velocityY > 0) {
      num4 = yRange;
    }
    num5 = (diff + result1 * (num4 - diff1)) / xRange;
    num6 = num4 / yRange;
  }
  return { pipX: ChannelRTCStore(num5, 0, 1), pipY: ChannelRTCStore(num6, 0, 1) };
}
const items12 = [tmp21, tmp22, tmp23];
calculatePIPPositionFromVelocity.__closure = items12;
calculatePIPPositionFromVelocity.__workletHash = 7286102854830;
calculatePIPPositionFromVelocity.__initData = tmp20;
const items13 = [{ code: "(function getVoicePanelPIPBorderRadius_VoicePanelPIPUtilsTsx8(width,height){let[SquareActivityPIPReferenceDimensions,lg,xl]=this.__closure;if(width<=SquareActivityPIPReferenceDimensions.width&&height<=SquareActivityPIPReferenceDimensions.height){return lg;}return xl;})" }, SquareActivityPIPReferenceDimensions, nativeDefault.radii.lg, nativeDefault.radii.xl];
let closure_135_0;
let closure_135_1;
let closure_135_2;
[tmp24, tmp25, tmp26, tmp27] = items13;
function getVoicePanelPIPBorderRadius(width, height) {
  if (width <= require.width) {
    if (height <= tmp.height) {
      let tmp3 = dependencyMap;
    }
    return tmp3;
  }
  tmp3 = ChannelRTCStore;
}
const items14 = [tmp25, tmp26, tmp27];
getVoicePanelPIPBorderRadius.__closure = items14;
getVoicePanelPIPBorderRadius.__workletHash = 5727386522170;
getVoicePanelPIPBorderRadius.__initData = tmp24;
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx");

export { PIPReferenceDimensions };
export { SquarePIPReferenceDimensions };
export { SquareActivityPIPReferenceDimensions };
export const PIP_LAYOUT_PHYSICS = { mass: 0.3, damping: 80, stiffness: 150 };
export function computePIPSize(SquarePIPReferenceDimensions, arg1, arg2, showSecondaryPIP) {
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
        sum = 2 * height2 + SECONDARY_PIP_TOP_MARGIN;
      }
      size.containerHeight = sum;
      return size;
    }
  }
  ({ width: width3, height: height3 } = arg2 ? SquareActivityPIPReferenceDimensions : SquarePIPReferenceDimensions);
}
export function createPIPBlockList(PIP, focusedId) {
  set = new Set();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    set.add(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
  }
  let tmp5 = null != focusedId;
  if (tmp5) {
    tmp5 = PIP === VoicePanelModes.PANEL;
  }
  if (tmp5) {
    set.add(focusedId);
  }
  return set;
}
export function computePIPParticipantToShow(canShowActivities) {
  ({ channelId, panelMode, lastParticipantId, speakingUserId, focusedParticipantId, blockList } = canShowActivities);
  if (blockList === undefined) {
    blockList = set;
  }
  canShowActivities = canShowActivities.canShowActivities;
  const id = AuthenticationStore.getId();
  if (null != focusedParticipantId) {
    const participant = ChannelRTCStore.getParticipant(channelId, focusedParticipantId);
  }
  if (panelMode === VoicePanelModes.PANEL) {
    if (null != focusedParticipantId) {
      let type1;
      if (participant != null) {
        type1 = participant.type;
      }
      if (type1 === ParticipantTypes.STREAM) {
        let userVideo;
        if (participant != null) {
          userVideo = participant.userVideo;
        }
        if (true === userVideo) {
          if (!blockList.has(participant.user.id)) {
            const participant1 = ChannelRTCStore.getParticipant(channelId, participant.user.id);
            if (null != participant1) {
              if (obj.canRenderParticipantVideo(participant1)) {
                const obj2 = { id: participant1.id, type: tmp6.USER };
                return obj2;
              }
              obj = participantHasVideo;
            }
          }
        }
      }
    }
  }
  if (null != focusedParticipantId) {
    if (null != participant) {
      if (!blockList.has(focusedParticipantId)) {
        const obj3 = { id: focusedParticipantId, type: participant.type };
        return obj3;
      }
    }
  }
  if (canShowActivities) {
    let type2;
    if (participant != null) {
      type2 = participant.type;
    }
    if (type2 !== ParticipantTypes.ACTIVITY) {
      if (!canShowActivities.showSecondaryPIP) {
        const activityParticipants = ChannelRTCStore.getActivityParticipants(channelId);
        for (const item10064 of activityParticipants) {
          let participants = item10064.participants;
          if (participants.some((item) => isActivityParticipantCurrentUserCurrentSession.isActivityParticipantCurrentUserCurrentSession(item))) {
            if (!blockList.has(item10064.id)) {
              let obj8 = { id: null, type: null };
              ({ id: obj5.id, type: obj5.type } = item10064);
              obj4.return();
              return obj8;
            }
          }
          continue;
        }
      }
    }
  }
  const streamParticipants = ChannelRTCStore.getStreamParticipants(channelId);
  for (const item10087 of streamParticipants) {
    if (!blockList.has(item10087.id)) {
      if (null != ApplicationStreamingStore.getActiveStreamForUser(item10087.user.id, item10087.stream.guildId)) {
        let obj14 = { id: null, type: null };
        ({ id: obj7.id, type: obj7.type } = item10087);
        obj6.return();
        return obj14;
      }
    }
    continue;
  }
  if (null != speakingUserId) {
    if (!blockList.has(speakingUserId)) {
      if (null != ChannelRTCStore.getParticipant(channelId, speakingUserId)) {
        const obj18 = { id: speakingUserId, type: ParticipantTypes.USER };
        return obj18;
      }
    }
  }
  let participant2;
  if (null != lastParticipantId) {
    participant2 = ChannelRTCStore.getParticipant(channelId, lastParticipantId);
  }
  if (null != participant2) {
    if (!blockList.has(participant2.id)) {
      const type = participant2.type;
      if (ParticipantTypes.STREAM === type) {
        if (null != ApplicationStreamingStore.getActiveStreamForUser(participant2.user.id, participant2.stream.guildId)) {
          if (obj10.canRenderParticipantVideo(participant2)) {
            ({ id: obj11.id, type: obj11.type } = participant2);
            return { id: null, type: null };
          }
          obj10 = participantHasVideo;
        }
      } else if (ParticipantTypes.ACTIVITY === type) {
        if (canShowActivities) {
          const participants2 = participant2.participants;
          if (participants2.some((item) => isActivityParticipantCurrentUserCurrentSession.isActivityParticipantCurrentUserCurrentSession(item))) {
            ({ id: obj9.id, type: obj9.type } = participant2);
            return { id: null, type: null };
          }
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
        const obj33 = { id, type: ParticipantTypes.USER };
        return obj33;
      }
      obj13 = participantHasVideo;
    }
  }
  const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
  for (const item10166 of videoParticipants) {
    if (!blockList.has(item10166.id)) {
      let obj16 = participantHasVideo;
      if (obj16.canRenderParticipantVideo(item10166)) {
        let obj34 = { id: null, type: null };
        ({ id: obj17.id, type: obj17.type } = item10166);
        obj15.return();
        return obj34;
      }
    }
    continue;
  }
  let tmp48;
  if (!blockList.has(id)) {
    if (null != participant3) {
      if (panelMode !== VoicePanelModes.PANEL) {
        const obj35 = { id, type: ParticipantTypes.USER };
        tmp48 = obj35;
      } else {
        let type3;
        if (participant != null) {
          type3 = participant.type;
        }
      }
    }
  }
  return tmp48;
}
export function getPIPMode(connected) {
  ({ channelId, manuallyFocusedId, mode } = connected);
  if (connected.connected) {
    if (null != manuallyFocusedId) {
      const participant = ChannelRTCStore.getParticipant(channelId, manuallyFocusedId);
    }
    if (mode === VoicePanelModes.PANEL) {
      if (null != participant) {
        if (participant.type === ParticipantTypes.ACTIVITY) {
          return constants.IN_PANEL;
        } else {
          if (participant.type === tmp27.STREAM) {
            if (participant.userVideo) {
              const participant1 = ChannelRTCStore.getParticipant(channelId, participant.user.id);
              if (obj.canRenderParticipantVideo(participant1)) {
                return constants.IN_PANEL;
              }
              obj = participantHasVideo;
            }
          }
          if (tmp) {
            if (participant.id !== AuthenticationStore.getId()) {
              return constants.IN_PANEL;
            } else {
              const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
              for (const item10032 of videoParticipants) {
                if (item10032.id !== AuthenticationStore.getId()) {
                  let obj2 = participantHasVideo;
                  if (obj2.canRenderParticipantVideo(item10032)) {
                    obj3.return();
                    return constants.IN_PANEL;
                  }
                }
                continue;
              }
              if (participant.id !== AuthenticationStore.getId()) {
                return constants.IN_PANEL;
              }
            }
          }
        }
      }
    }
    let IN_APP;
    if (mode === VoicePanelModes.PIP) {
      IN_APP = constants.IN_APP;
    }
    return IN_APP;
  }
}
export { getPIPWindowDimensions };
export { pipXYtoAbsoluteXY };
export { getClampedPIPPosition };
export { getScaledPIPContainerHeight };
export { clampPIPScale };
export { calculatePIPPositionFromVelocity };
export { getVoicePanelPIPBorderRadius };