// === Module 17419: QuestDockUtils ===

// Module 17419 (QuestDockUtils)
import _mod17 from "module_17" /* 17 */;
import DurationsDefault from "Durations" /* 1089 */;
import spring_spring from "spring/spring" /* 5763 */;
import QuestDockConstants from "QuestDockConstants" /* 17420 */;
import size from "module_2" /* 2 */;

const PixelRatio = _mod17.PixelRatio;
const QUEST_DOCK_COLLAPSED_MAX_WIDTH = QuestDockConstants.QUEST_DOCK_COLLAPSED_MAX_WIDTH;
const items = [{ code: "(function roundToNearestPixel_QuestDockUtilsTsx1(position){let[PIXEL_DENSITY]=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;})" }, ];
({ QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED, QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_MODE_CHANGE_PHYSICS } = QuestDockConstants);
items[1] = PixelRatio.get();
let c0;
[tmp3, tmp4] = items;
function roundToNearestPixel(arg0) {
  return Math.round(arg0 * c0) / c0;
}
const items1 = [tmp4];
roundToNearestPixel.__closure = items1;
roundToNearestPixel.__workletHash = 10304999690601;
roundToNearestPixel.__initData = tmp3;
const items2 = [{ code: "(function getQuestDockExpandedHeightLimits_QuestDockUtilsTsx2(windowHeight,safeAreaTop,minContentHeight){let[QUEST_DOCK_COLLAPSED_HEIGHT]=this.__closure;return{minHeight:QUEST_DOCK_COLLAPSED_HEIGHT,maxHeight:Math.min(minContentHeight,windowHeight-safeAreaTop)};})" }, QUEST_DOCK_COLLAPSED_HEIGHT];
let closure_129_0;
[tmp5, tmp6] = items2;
function getQuestDockExpandedHeightLimits(c6, top, c2) {
  return { minHeight, maxHeight: Math.min(c2, c6 - top) };
}
const items3 = [tmp6];
getQuestDockExpandedHeightLimits.__closure = items3;
getQuestDockExpandedHeightLimits.__workletHash = 15733700309499;
getQuestDockExpandedHeightLimits.__initData = tmp5;
const items4 = [{ code: "(function getQuestDockCollapsedWidth_QuestDockUtilsTsx3(windowWidth,safeAreaLeft,safeAreaRight,horizontalMargin=0){let[QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED,QUEST_DOCK_COLLAPSED_MAX_WIDTH]=this.__closure;const gutter=Math.max(horizontalMargin,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);return Math.min(windowWidth-safeAreaLeft-safeAreaRight-gutter*2,QUEST_DOCK_COLLAPSED_MAX_WIDTH);})" }, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED, QUEST_DOCK_COLLAPSED_MAX_WIDTH];
let closure_130_0;
let closure_130_1;
[tmp7, tmp8, tmp9] = items4;
function getQuestDockCollapsedWidth(width, left, right) {
  let num = youBarHorizontalMargin;
  if (youBarHorizontalMargin === undefined) {
    num = 0;
  }
  return Math.min(width - left - right - 2 * Math.max(num, c0), duration);
}
const items5 = [tmp8, tmp9];
getQuestDockCollapsedWidth.__closure = items5;
getQuestDockCollapsedWidth.__workletHash = 6066350043816;
getQuestDockCollapsedWidth.__initData = tmp7;
const items6 = [{ code: "(function getQuestDockExpandedWidth_QuestDockUtilsTsx4(windowWidth,safeAreaLeft,safeAreaRight){let[QUEST_DOCK_COLLAPSED_MAX_WIDTH]=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);})" }, QUEST_DOCK_COLLAPSED_MAX_WIDTH];
let closure_131_0;
[tmp10, tmp11] = items6;
function getQuestDockExpandedWidth(width, left, right) {
  return Math.min(width - left - right, c0);
}
const items7 = [tmp11];
getQuestDockExpandedWidth.__closure = items7;
getQuestDockExpandedWidth.__workletHash = 4011342921019;
getQuestDockExpandedWidth.__initData = tmp10;
const items8 = [{ code: "(function getQuestDockClosedWidth_QuestDockUtilsTsx5(windowWidth,safeAreaLeft,safeAreaRight,horizontalMargin=0){let[QUEST_DOCK_COLLAPSED_MAX_WIDTH]=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight-horizontalMargin*2,QUEST_DOCK_COLLAPSED_MAX_WIDTH);})" }, QUEST_DOCK_COLLAPSED_MAX_WIDTH];
let closure_132_0;
[tmp12, tmp13] = items8;
function getQuestDockClosedWidth(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  return Math.min(arg0 - arg1 - arg2 - 2 * num, c0);
}
const items9 = [tmp13];
getQuestDockClosedWidth.__closure = items9;
getQuestDockClosedWidth.__workletHash = 13348040907675;
getQuestDockClosedWidth.__initData = tmp12;
let closure_133_0 = 3 * DurationsDefault.Millis.HOUR;
const items10 = [{ code: "(function dimensionsLayoutTransition_QuestDockUtilsTsx6(values){let[withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS)}};})" }, spring_spring.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS];
let closure_134_0;
let closure_134_1;
[tmp14, tmp15, tmp16] = items10;
function dimensionsLayoutTransition(originX) {
  const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null };
  const size = { originX: minHeight(originX.targetOriginX, duration), originY: minHeight(originX.targetOriginY, duration), height: minHeight(originX.targetHeight, duration), width: minHeight(originX.targetWidth, duration) };
  obj.animations = size;
  return obj;
}
const items11 = [tmp15, tmp16];
dimensionsLayoutTransition.__closure = items11;
dimensionsLayoutTransition.__workletHash = 8505007023969;
dimensionsLayoutTransition.__initData = tmp14;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUtils.tsx");

export { roundToNearestPixel };
export { getQuestDockExpandedHeightLimits };
export { getQuestDockCollapsedWidth };
export { getQuestDockExpandedWidth };
export { getQuestDockClosedWidth };
export function isSoftDismissed(questDockSoftDismissedAt) {
  let tmp = null != questDockSoftDismissedAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - questDockSoftDismissedAt < c0;
  }
  return tmp;
}
export { dimensionsLayoutTransition };