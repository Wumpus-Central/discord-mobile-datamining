import getParticipants from "getParticipants";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import VoicePanelModes from "VoicePanelModes";
import VoicePanelPIPModes from "VoicePanelPIPModes";
import { ParticipantTypes } from "ParticipantTypes";
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE";
import set from "fetchFingerprint";

let PIPReferenceDimensions;
let c5;
let closure_6;
let error;
const require = arg1;
({ SECONDARY_PIP_TOP_MARGIN: c5, VoicePanelModes: closure_6 } = VoicePanelModes);
({ VoicePanelPIPModes: error, PIPReferenceDimensions } = VoicePanelPIPModes);
const SquarePIPReferenceDimensions = VoicePanelPIPModes.SquarePIPReferenceDimensions;
const SquareActivityPIPReferenceDimensions = VoicePanelPIPModes.SquareActivityPIPReferenceDimensions;
const MIN_PIP_TOSS_VELOCITY = MIN_PAN_GESTURE_MOVE.MIN_PIP_TOSS_VELOCITY;
const PIP_WINDOW_OFFSET = MIN_PAN_GESTURE_MOVE.PIP_WINDOW_OFFSET;
let set = new Set();
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 10301627783217;
clamp.__initData = { code: "function clamp_VoicePanelPIPUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}" };
function getPIPWindowDimensions(width, left) {
  const bound = Math.max(left.left, PIP_WINDOW_OFFSET);
  const bound1 = Math.max(left.top, PIP_WINDOW_OFFSET);
  const diff = width.width - bound;
  const diff1 = width.height - bound1;
  return { xOffset: bound, yOffset: bound1, xRange: diff - Math.max(left.right, PIP_WINDOW_OFFSET), yRange: diff1 - Math.max(left.bottom, PIP_WINDOW_OFFSET) };
}
getPIPWindowDimensions.__closure = { PIP_WINDOW_OFFSET };
getPIPWindowDimensions.__workletHash = 10369369214675;
getPIPWindowDimensions.__initData = { code: "function getPIPWindowDimensions_VoicePanelPIPUtilsTsx2(windowDimensions,safeArea){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET),yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}" };
function pipXYtoAbsoluteXY(arg0) {
  let pipX;
  let pipY;
  let safeArea;
  let windowDimensions;
  ({ windowDimensions, safeArea } = arg0);
  ({ pipX, pipY } = arg0);
  if (typeof getPIPWindowDimensions !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
  const bound1 = Math.max(safeArea.top, PIP_WINDOW_OFFSET);
  const diff = windowDimensions.width - bound;
  const diff1 = diff - Math.max(safeArea.right, PIP_WINDOW_OFFSET);
  const diff2 = windowDimensions.height - bound1;
  return { x: bound + pipX * diff1, y: bound1 + pipY * (diff2 - Math.max(safeArea.bottom, PIP_WINDOW_OFFSET)) };
}
pipXYtoAbsoluteXY.__closure = { getPIPWindowDimensions };
pipXYtoAbsoluteXY.__workletHash = 13405407399530;
pipXYtoAbsoluteXY.__initData = { code: "function pipXYtoAbsoluteXY_VoicePanelPIPUtilsTsx3({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}" };
function getClampedPIPPosition(topAvoidanceRegion) {
  let bottomAvoidanceRegion;
  let height;
  let pipX;
  let pipY;
  let safeArea;
  let width;
  let windowDimensions;
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
  let obj = { pipX: num2, pipY: null, windowDimensions: null, safeArea: null };
  let num3 = 0;
  if (-1 !== pipY) {
    num3 = pipY;
  }
  obj[1] = num3;
  obj[2] = windowDimensions;
  obj[3] = safeArea;
  const point2 = pipXYtoAbsoluteXY(obj);
  const y = point2.y;
  const diff = point2.x - width / 2;
  if (-1 === pipY) {
    let sum = y + 72;
  } else {
    sum = y - height / 2;
  }
  if (typeof getPIPWindowDimensions !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
  const bound1 = Math.max(safeArea.top, PIP_WINDOW_OFFSET);
  const diff1 = windowDimensions.width - bound;
  const diff2 = diff1 - Math.max(safeArea.right, PIP_WINDOW_OFFSET);
  const diff3 = windowDimensions.height - bound1;
  const diff4 = diff3 - Math.max(safeArea.bottom, PIP_WINDOW_OFFSET);
  const diff5 = bound + diff2 - width;
  if (typeof clamp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const bound2 = Math.min(Math.max(diff, bound), diff5);
  const sum1 = bound1 + num;
  const diff6 = bound1 + diff4 - bottomAvoidanceRegion - height;
  if (typeof clamp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = { x: bound2 + point.x, y: Math.min(Math.max(sum, sum1), diff6) + point.y };
  return obj;
}
getClampedPIPPosition.__closure = { pipXYtoAbsoluteXY, getPIPWindowDimensions, clamp };
getClampedPIPPosition.__workletHash = 10462021389431;
getClampedPIPPosition.__initData = { code: "function getClampedPIPPosition_VoicePanelPIPUtilsTsx4({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0}}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}" };
function calculatePIPPositionFromVelocity(arg0) {
  let absoluteX;
  let absoluteY;
  let safeArea;
  let velocityX;
  let velocityY;
  let windowDimensions;
  ({ velocityX, velocityY, windowDimensions, safeArea } = arg0);
  ({ absoluteX, absoluteY } = arg0);
  if (typeof getPIPWindowDimensions !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
  const bound1 = Math.max(safeArea.top, PIP_WINDOW_OFFSET);
  const diff = windowDimensions.width - bound;
  const diff1 = diff - Math.max(safeArea.right, PIP_WINDOW_OFFSET);
  const diff2 = windowDimensions.height - bound1;
  const diff3 = diff2 - Math.max(safeArea.bottom, PIP_WINDOW_OFFSET);
  const diff4 = absoluteX - bound;
  const diff5 = absoluteY - bound1;
  const absolute = Math.abs(velocityY);
  if (Math.max(absolute, Math.abs(velocityX)) < MIN_PIP_TOSS_VELOCITY) {
    if (typeof clamp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const rect = { left: null, right: null, top: null, bottom: null };
    const _Math = Math;
    const _Math2 = Math;
    rect[0] = Math.min(Math.max(diff4, 0), diff1);
    const diff6 = diff1 - diff4;
    if (typeof clamp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math3 = Math;
    const _Math4 = Math;
    rect[1] = Math.min(Math.max(diff6, 0), diff1);
    if (typeof clamp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math5 = Math;
    const _Math6 = Math;
    rect[2] = Math.min(Math.max(diff5, 0), diff3);
    const diff7 = diff3 - diff5;
    if (typeof clamp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math7 = Math;
    const _Math8 = Math;
    rect[3] = Math.min(Math.max(diff7, 0), diff3);
    const _Math9 = Math;
    const _Object = Object;
    const items = [];
    HermesBuiltin.arraySpread(Object.values(rect), 0);
    const _Math10 = Math;
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
  if (typeof clamp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = { pipX: Math.min(Math.max(num5, 0), 1), pipY: null };
  if (typeof clamp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj[1] = Math.min(Math.max(num6, 0), 1);
  return obj;
}
calculatePIPPositionFromVelocity.__closure = { getPIPWindowDimensions, MIN_PIP_TOSS_VELOCITY, clamp };
calculatePIPPositionFromVelocity.__workletHash = 14615762848981;
calculatePIPPositionFromVelocity.__initData = { code: "function calculatePIPPositionFromVelocity_VoicePanelPIPUtilsTsx5({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}" };
const xl = require("Themes").radii.xl;
const lg = require("Themes").radii.lg;
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
getVoicePanelPIPBorderRadius.__workletHash = 16698745361037;
getVoicePanelPIPBorderRadius.__initData = { code: "function getVoicePanelPIPBorderRadius_VoicePanelPIPUtilsTsx6(width,height){const{SquareActivityPIPReferenceDimensions,lg,xl}=this.__closure;if(width<=SquareActivityPIPReferenceDimensions.width&&height<=SquareActivityPIPReferenceDimensions.height){return lg;}return xl;}" };
let result = set.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx");

export { PIPReferenceDimensions };
export { SquarePIPReferenceDimensions };
export { SquareActivityPIPReferenceDimensions };
export const computePIPSize = function computePIPSize(SquarePIPReferenceDimensions, arg1, arg2, showSecondaryPIP) {
  let height;
  let height3;
  let width;
  let width3;
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
      const obj = { width: null, height: null, containerHeight: null };
      obj[0] = result;
      obj[1] = height2;
      let sum = height2;
      if (showSecondaryPIP) {
        sum = 2 * height2 + closure_5;
      }
      obj[2] = sum;
      return obj;
    }
  }
  ({ width: width3, height: height3 } = arg2 ? SquareActivityPIPReferenceDimensions : SquarePIPReferenceDimensions);
};
export const computePIPParticipantToShow = function computePIPParticipantToShow(showSecondaryPIP) {
  let blockList;
  let channelId;
  let focusedParticipantId;
  let lastParticipantId;
  let panelMode;
  let speakingUserId;
  ({ channelId, panelMode, lastParticipantId, speakingUserId, focusedParticipantId, blockList } = showSecondaryPIP);
  if (blockList === undefined) {
    blockList = set;
  }
  const id = store2.getId();
  let participant;
  if (null != focusedParticipantId) {
    participant = store.getParticipant(channelId, focusedParticipantId);
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
            const participant1 = store.getParticipant(channelId, participant.user.id);
            if (null != participant1) {
              let obj = require(10618) /* canRenderParticipantVideo */;
              if (obj.canRenderParticipantVideo(participant1)) {
                obj = { id: null, type: null };
                obj[0] = participant1.id;
                obj[1] = tmp6.USER;
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
        obj = { id: null, type: null };
        obj[0] = focusedParticipantId;
        obj[1] = participant.type;
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
      const activityParticipants = store.getActivityParticipants(channelId);
      for (const item10060 of activityParticipants) {
        let tmp17 = item10060;
        let participants = item10060.participants;
        if (participants.some((userId) => callback(13240).isActivityParticipantCurrentUserCurrentSession(userId))) {
          let tmp18 = item10060;
          if (!blockList.has(tmp17.id)) {
            let obj1 = { id: null, type: null };
            let tmp19 = item10060;
            ({ id: obj5[0], type: obj5[1] } = tmp17);
            let tmp20 = obj3;
            obj3.return();
            return obj1;
          }
        }
        continue;
      }
    }
  }
  const streamParticipants = store.getStreamParticipants(channelId);
  for (const item10083 of streamParticipants) {
    let tmp22 = item10083;
    if (!blockList.has(item10083.id)) {
      let tmp23 = authStore;
      let tmp24 = item10083;
      if (null != authStore.getActiveStreamForUser(tmp22.user.id, tmp22.stream.guildId)) {
        let obj2 = { id: null, type: null };
        let tmp25 = item10083;
        ({ id: obj7[0], type: obj7[1] } = tmp22);
        let tmp26 = obj5;
        obj5.return();
        return obj2;
      }
    }
    continue;
  }
  if (null != speakingUserId) {
    if (!blockList.has(speakingUserId)) {
      if (null != store.getParticipant(channelId, speakingUserId)) {
        const obj3 = { id: null, type: null };
        obj3[0] = speakingUserId;
        obj3[1] = ParticipantTypes.USER;
        return obj3;
      }
    }
  }
  let participant2;
  if (null != lastParticipantId) {
    participant2 = store.getParticipant(channelId, lastParticipantId);
  }
  if (null != participant2) {
    if (!blockList.has(participant2.id)) {
      type = participant2.type;
      if (ParticipantTypes.STREAM === type) {
        if (null != authStore.getActiveStreamForUser(participant2.user.id, participant2.stream.guildId)) {
          let obj9 = require(10618) /* canRenderParticipantVideo */;
          if (obj9.canRenderParticipantVideo(participant2)) {
            ({ id: obj11[0], type: obj11[1] } = participant2);
            return { id: null, type: null };
          }
        }
      } else if (tmp31.ACTIVITY === type) {
        const participants2 = participant2.participants;
        if (participants2.some((userId) => callback(13240).isActivityParticipantCurrentUserCurrentSession(userId))) {
          const obj5 = { id: null, type: null };
          ({ id: obj9[0], type: obj9[1] } = participant2);
          return obj5;
        }
      } else if (tmp31.USER === type) {
        ({ id: obj19[0], type: obj19[1] } = participant2);
        return { id: null, type: null };
      }
    }
  }
  const participant3 = store.getParticipant(channelId, id);
  if (!blockList.has(id)) {
    if (null != participant3) {
      if (obj13.canRenderParticipantVideo(participant3)) {
        const obj7 = { id: null, type: null };
        obj7[0] = id;
        obj7[1] = ParticipantTypes.USER;
        return obj7;
      }
      obj13 = require(10618) /* canRenderParticipantVideo */;
    }
  }
  const videoParticipants = store.getVideoParticipants(channelId);
  for (const item10162 of videoParticipants) {
    let tmp40 = item10162;
    if (!blockList.has(item10162.id)) {
      let tmp41 = require;
      let tmp42 = dependencyMap;
      let obj16 = require(10618) /* canRenderParticipantVideo */;
      let tmp43 = item10162;
      if (obj16.canRenderParticipantVideo(tmp40)) {
        let obj8 = { id: null, type: null };
        let tmp44 = item10162;
        ({ id: obj17[0], type: obj17[1] } = tmp40);
        let tmp45 = obj15;
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
        obj9 = { id: null, type: null };
        obj9[0] = id;
        obj9[1] = ParticipantTypes.USER;
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
  let channelId;
  let manuallyFocusedId;
  let mode;
  ({ channelId, manuallyFocusedId, mode } = connected);
  if (connected.connected) {
    if (null != manuallyFocusedId) {
      const participant = store.getParticipant(channelId, manuallyFocusedId);
    }
    if (mode === constants.PANEL) {
      if (null != participant) {
        if (participant.type === ParticipantTypes.ACTIVITY) {
          return constants2.IN_PANEL;
        } else {
          if (participant.type === tmp27.STREAM) {
            if (participant.userVideo) {
              const participant1 = store.getParticipant(channelId, participant.user.id);
              if (obj.canRenderParticipantVideo(participant1)) {
                return constants2.IN_PANEL;
              }
              obj = require(10618) /* canRenderParticipantVideo */;
            }
          }
          if (tmp) {
            if (participant.id !== store2.getId()) {
              return constants2.IN_PANEL;
            } else {
              const videoParticipants = store.getVideoParticipants(channelId);
              for (const item10032 of videoParticipants) {
                let tmp13 = store2;
                let tmp12 = item10032;
                if (item10032.id !== store2.getId()) {
                  let tmp14 = require;
                  let tmp15 = dependencyMap;
                  let obj2 = require(10618) /* canRenderParticipantVideo */;
                  let tmp16 = item10032;
                  if (obj2.canRenderParticipantVideo(tmp12)) {
                    let tmp17 = constants2;
                    let tmp18 = obj3;
                    obj3.return();
                    return constants2.IN_PANEL;
                  }
                }
                continue;
              }
              if (participant.id !== store2.getId()) {
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