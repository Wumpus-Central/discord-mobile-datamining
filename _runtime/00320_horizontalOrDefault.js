// _runtime/00320_horizontalOrDefault.js
import noop from "metro/00019__.js";

export function horizontalOrDefault(horizontal) {
  let flag = horizontal;
  if (horizontal == null) {
    flag = false;
  }
  return flag;
}
export function initialNumToRenderOrDefault(initialNumToRender) {
  let num = initialNumToRender;
  if (initialNumToRender == null) {
    num = 10;
  }
  return num;
}
export function maxToRenderPerBatchOrDefault(maxToRenderPerBatch) {
  let num = maxToRenderPerBatch;
  if (maxToRenderPerBatch == null) {
    num = 10;
  }
  return num;
}
export function onStartReachedThresholdOrDefault(onStartReachedThreshold) {
  let num = onStartReachedThreshold;
  if (onStartReachedThreshold == null) {
    num = 2;
  }
  return num;
}
export function onEndReachedThresholdOrDefault(onEndReachedThreshold) {
  let num = onEndReachedThreshold;
  if (onEndReachedThreshold == null) {
    num = 2;
  }
  return num;
}
export function windowSizeOrDefault(windowSize) {
  let num = windowSize;
  if (windowSize == null) {
    num = 21;
  }
  return num;
}
