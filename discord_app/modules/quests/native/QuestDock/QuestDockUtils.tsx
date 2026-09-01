// discord_app/modules/quests/native/QuestDock/QuestDockUtils.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import setDefault from "../../../../utils/Durations.tsx";
import CONFIG_NEVER_ANIMATE from "../../../../design/animation/reanimated/spring/spring.tsx";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QuestDockConstants.tsx";

const PixelRatio = get_ActivityIndicator.PixelRatio;
const QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED =
  QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
const QUEST_DOCK_COLLAPSED_MAX_WIDTH = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_COLLAPSED_MAX_WIDTH;
QUEST_DOCK_COLLAPSED_HEIGHT = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_COLLAPSED_HEIGHT;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const value = PixelRatio.get();
function roundToNearestPixel(arg0) {
  return Math.round(arg0 * closure_6) / closure_6;
}
roundToNearestPixel.__closure = { PIXEL_DENSITY: value };
roundToNearestPixel.__workletHash = 9602449563120;
roundToNearestPixel.__initData = {
  code: "function roundToNearestPixel_QuestDockUtilsTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}",
};
function getQuestDockExpandedHeightLimits(windowHeight, top, minExpandedContentHeight) {
  return { minHeight: QUEST_DOCK_COLLAPSED_HEIGHT, maxHeight: Math.min(minExpandedContentHeight, windowHeight - top) };
}
getQuestDockExpandedHeightLimits.__closure = { QUEST_DOCK_COLLAPSED_HEIGHT };
getQuestDockExpandedHeightLimits.__workletHash = 880847803554;
getQuestDockExpandedHeightLimits.__initData = {
  code: "function getQuestDockExpandedHeightLimits_QuestDockUtilsTsx2(windowHeight,safeAreaTop,minContentHeight){const{QUEST_DOCK_COLLAPSED_HEIGHT}=this.__closure;return{minHeight:QUEST_DOCK_COLLAPSED_HEIGHT,maxHeight:Math.min(minContentHeight,windowHeight-safeAreaTop)};}",
};
function getQuestDockCollapsedWidth(width, youBarHorizontalMargin, youBarHorizontalMargin2) {
  const bound = Math.max(youBarHorizontalMargin, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);
  return Math.min(
    width - bound - Math.max(youBarHorizontalMargin2, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED),
    QUEST_DOCK_COLLAPSED_MAX_WIDTH,
  );
}
getQuestDockCollapsedWidth.__closure = { QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
getQuestDockCollapsedWidth.__workletHash = 1119343760780;
getQuestDockCollapsedWidth.__initData = {
  code: "function getQuestDockCollapsedWidth_QuestDockUtilsTsx3(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;safeAreaLeft=Math.max(safeAreaLeft,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);safeAreaRight=Math.max(safeAreaRight,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}",
};
function getQuestDockExpandedWidth(width, left, right) {
  return Math.min(width - left - right, QUEST_DOCK_COLLAPSED_MAX_WIDTH);
}
getQuestDockExpandedWidth.__closure = { QUEST_DOCK_COLLAPSED_MAX_WIDTH };
getQuestDockExpandedWidth.__workletHash = 6480418564130;
getQuestDockExpandedWidth.__initData = {
  code: "function getQuestDockExpandedWidth_QuestDockUtilsTsx4(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}",
};
function getQuestDockClosedWidth(width, left, right) {
  return Math.min(width - left - right, QUEST_DOCK_COLLAPSED_MAX_WIDTH);
}
getQuestDockClosedWidth.__closure = { QUEST_DOCK_COLLAPSED_MAX_WIDTH };
getQuestDockClosedWidth.__workletHash = 14159592925974;
getQuestDockClosedWidth.__initData = {
  code: "function getQuestDockClosedWidth_QuestDockUtilsTsx5(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}",
};
let closure_7 = 3 * setDefault.Millis.HOUR;
function dimensionsLayoutTransition(currentOriginX) {
  obj = { initialValues: obj, animations: null };
  obj = {
    originX: currentOriginX.currentOriginX,
    originY: currentOriginX.currentOriginY,
    width: currentOriginX.currentWidth,
    height: currentOriginX.currentHeight,
  };
  obj = {
    originX: CONFIG_NEVER_ANIMATE.withSpring(currentOriginX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS),
    originY: null,
    height: null,
    width: null,
  };
  const obj4 = CONFIG_NEVER_ANIMATE;
  obj[1] = CONFIG_NEVER_ANIMATE.withSpring(currentOriginX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS);
  const obj5 = CONFIG_NEVER_ANIMATE;
  obj[2] = CONFIG_NEVER_ANIMATE.withSpring(currentOriginX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS);
  const obj6 = CONFIG_NEVER_ANIMATE;
  obj[3] = CONFIG_NEVER_ANIMATE.withSpring(currentOriginX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS);
  obj[1] = obj;
  return obj;
}
dimensionsLayoutTransition.__closure = { withSpring: CONFIG_NEVER_ANIMATE.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS };
dimensionsLayoutTransition.__workletHash = 4497154070776;
dimensionsLayoutTransition.__initData = {
  code: "function dimensionsLayoutTransition_QuestDockUtilsTsx6(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS)}};}",
};
let obj = { withSpring: CONFIG_NEVER_ANIMATE.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS };
const result = set.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUtils.tsx");

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
