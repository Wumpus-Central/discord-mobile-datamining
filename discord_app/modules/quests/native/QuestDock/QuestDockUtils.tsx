// === Module 15094: QuestDockUtils ===

// Module 15094 (QuestDockUtils)
import _mod17 from "module_17" /* 17 */;
import DurationsDefault from "Durations" /* 1090 */;
import spring from "spring" /* 4974 */;
import QuestDockConstants from "QuestDockConstants" /* 15095 */;
import size from "module_2" /* 2 */;

const PixelRatio = _mod17.PixelRatio;
const QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED = QuestDockConstants.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
const QUEST_DOCK_COLLAPSED_MAX_WIDTH = QuestDockConstants.QUEST_DOCK_COLLAPSED_MAX_WIDTH;
const QUEST_DOCK_COLLAPSED_HEIGHT = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const value = PixelRatio.get();
const metroRequire = value;
function roundToNearestPixel(arg0) {
  return Math.round(arg0 * value) / value;
}
roundToNearestPixel.__closure = { PIXEL_DENSITY: value };
roundToNearestPixel.__workletHash = 9602449563120;
roundToNearestPixel.__initData = { code: "function roundToNearestPixel_QuestDockUtilsTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}" };
function getQuestDockExpandedHeightLimits(windowHeight, top, minExpandedContentHeight) {
  return { minHeight: QUEST_DOCK_COLLAPSED_HEIGHT, maxHeight: Math.min(minExpandedContentHeight, windowHeight - top) };
}
getQuestDockExpandedHeightLimits.__closure = { QUEST_DOCK_COLLAPSED_HEIGHT };
getQuestDockExpandedHeightLimits.__workletHash = 880847803554;
getQuestDockExpandedHeightLimits.__initData = { code: "function getQuestDockExpandedHeightLimits_QuestDockUtilsTsx2(windowHeight,safeAreaTop,minContentHeight){const{QUEST_DOCK_COLLAPSED_HEIGHT}=this.__closure;return{minHeight:QUEST_DOCK_COLLAPSED_HEIGHT,maxHeight:Math.min(minContentHeight,windowHeight-safeAreaTop)};}" };
function getQuestDockCollapsedWidth(width, youBarHorizontalMargin, youBarHorizontalMargin2) {
  const bound = Math.max(youBarHorizontalMargin, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);
  return Math.min(width - bound - Math.max(youBarHorizontalMargin2, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED), QUEST_DOCK_COLLAPSED_MAX_WIDTH);
}
getQuestDockCollapsedWidth.__closure = { QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
getQuestDockCollapsedWidth.__workletHash = 1119343760780;
getQuestDockCollapsedWidth.__initData = { code: "function getQuestDockCollapsedWidth_QuestDockUtilsTsx3(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;safeAreaLeft=Math.max(safeAreaLeft,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);safeAreaRight=Math.max(safeAreaRight,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}" };
function getQuestDockExpandedWidth(width, left, right) {
  return Math.min(width - left - right, QUEST_DOCK_COLLAPSED_MAX_WIDTH);
}
getQuestDockExpandedWidth.__closure = { QUEST_DOCK_COLLAPSED_MAX_WIDTH };
getQuestDockExpandedWidth.__workletHash = 6480418564130;
getQuestDockExpandedWidth.__initData = { code: "function getQuestDockExpandedWidth_QuestDockUtilsTsx4(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}" };
function getQuestDockClosedWidth(width, left, right) {
  return Math.min(width - left - right, QUEST_DOCK_COLLAPSED_MAX_WIDTH);
}
getQuestDockClosedWidth.__closure = { QUEST_DOCK_COLLAPSED_MAX_WIDTH };
getQuestDockClosedWidth.__workletHash = 14159592925974;
getQuestDockClosedWidth.__initData = { code: "function getQuestDockClosedWidth_QuestDockUtilsTsx5(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}" };
let closure_7 = 3 * DurationsDefault.Millis.HOUR;
function dimensionsLayoutTransition(originX) {
  const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS), originY: null, height: null, width: null };
  size.originY = spring.withSpring(originX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS);
  size.height = spring.withSpring(originX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS);
  size.width = spring.withSpring(originX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS);
  obj.animations = size;
  return obj;
}
dimensionsLayoutTransition.__closure = { withSpring: spring.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS };
dimensionsLayoutTransition.__workletHash = 4497154070776;
dimensionsLayoutTransition.__initData = { code: "function dimensionsLayoutTransition_QuestDockUtilsTsx6(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS)}};}" };
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUtils.tsx");

export { roundToNearestPixel };
export { getQuestDockExpandedHeightLimits };
export { getQuestDockCollapsedWidth };
export { getQuestDockExpandedWidth };
export { getQuestDockClosedWidth };
export const isSoftDismissed = function isSoftDismissed(questDockSoftDismissedAt) {
  let tmp = null != questDockSoftDismissedAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - questDockSoftDismissedAt < closure_7;
  }
  return tmp;
};
export { dimensionsLayoutTransition };