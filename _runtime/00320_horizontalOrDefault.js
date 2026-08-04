// _runtime/00320_horizontalOrDefault.js
import "noop";


export const horizontalOrDefault = function horizontalOrDefault(horizontal) {
  let flag = horizontal;
  if (horizontal == null) {
    flag = false;
  }
  return flag;
};
export const initialNumToRenderOrDefault = function initialNumToRenderOrDefault(initialNumToRender) {
  let num = initialNumToRender;
  if (initialNumToRender == null) {
    num = 10;
  }
  return num;
};
export const maxToRenderPerBatchOrDefault = function maxToRenderPerBatchOrDefault(maxToRenderPerBatch) {
  let num = maxToRenderPerBatch;
  if (maxToRenderPerBatch == null) {
    num = 10;
  }
  return num;
};
export const onStartReachedThresholdOrDefault = function onStartReachedThresholdOrDefault(onStartReachedThreshold) {
  let num = onStartReachedThreshold;
  if (onStartReachedThreshold == null) {
    num = 2;
  }
  return num;
};
export const onEndReachedThresholdOrDefault = function onEndReachedThresholdOrDefault(onEndReachedThreshold) {
  let num = onEndReachedThreshold;
  if (onEndReachedThreshold == null) {
    num = 2;
  }
  return num;
};
export const windowSizeOrDefault = function windowSizeOrDefault(windowSize) {
  let num = windowSize;
  if (windowSize == null) {
    num = 21;
  }
  return num;
};