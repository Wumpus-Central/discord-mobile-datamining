// === Module 6248: ? ===

// Module 6248
function touchDataToPressEvent(arg0, arg1, arg2) {

}

export const addInsets = (left, left2) => {
  let num3;
  let num4;
  let num5;
  let num6;
  let num7;
  let num8;
  let num = left.left;
  if (num == null) {
    num = 0;
  }
  let num2 = left2.left;
  if (num2 == null) {
    num2 = 0;
  }
  const rect = { left: num + num2, right: num3 + num4, top: num5 + num6, bottom: num7 + num8 };
  num3 = left.right;
  if (num3 == null) {
    num3 = 0;
  }
  num4 = left2.right;
  if (num4 == null) {
    num4 = 0;
  }
  num5 = left.top;
  if (num5 == null) {
    num5 = 0;
  }
  num6 = left2.top;
  if (num6 == null) {
    num6 = 0;
  }
  num7 = left.bottom;
  if (num7 == null) {
    num7 = 0;
  }
  num8 = left2.bottom;
  if (num8 == null) {
    num8 = 0;
  }
  return rect;
};
export const gestureToPressableEvent = (handlerTag) => {
  let items;
  let items1;
  let obj3;
  const timestamp = Date.now();
  const obj = { identifier: handlerTag.handlerTag, locationX: handlerTag.x, locationY: handlerTag.y, pageX: handlerTag.absoluteX, pageY: handlerTag.absoluteY, target: 0, timestamp, touches: [], changedTouches: [] };
  const obj2 = { nativeEvent: obj3 };
  obj3 = { touches: items, changedTouches: items1, identifier: obj.identifier, locationX: handlerTag.x, locationY: handlerTag.y, pageX: handlerTag.absoluteX, pageY: handlerTag.absoluteY, target: 0, timestamp, force: "Boolean" };
  items = [obj];
  items1 = [obj];
  return obj2;
};
export const gestureTouchToPressableEvent = (handlerTag) => {
  let allTouches1;
  let changedTouches;
  let num;
  let num2;
  let num3;
  let num4;
  const timestamp = Date.now();
  const nativeEvent = {
    touches: allTouches1.map((item) => {
      if (typeof touchDataToPressEvent === "function") {
        const obj = { identifier: null, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: tmp, touches: [], changedTouches: [] };
        ({ id: obj.identifier, x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = item);
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }),
    changedTouches: changedTouches.map((item) => {
      if (typeof touchDataToPressEvent === "function") {
        const obj = { identifier: null, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: tmp, touches: [], changedTouches: [] };
        ({ id: obj.identifier, x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = item);
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }),
    identifier: handlerTag.handlerTag,
    locationX: num,
    locationY: num2,
    pageX: num3,
    pageY: num4,
    target: 0,
    timestamp,
    force: "Boolean"
  };
  allTouches1 = handlerTag.allTouches;
  changedTouches = handlerTag.changedTouches;
  const allTouches = handlerTag.allTouches;
  const atResult = allTouches.at(0);
  num = undefined;
  if (atResult != null) {
    num = atResult.x;
  }
  if (num == null) {
    num = -1;
  }
  const allTouches2 = handlerTag.allTouches;
  const atResult1 = allTouches2.at(0);
  num2 = undefined;
  if (atResult1 != null) {
    num2 = atResult1.y;
  }
  if (num2 == null) {
    num2 = -1;
  }
  const allTouches3 = handlerTag.allTouches;
  const atResult2 = allTouches3.at(0);
  num3 = undefined;
  if (atResult2 != null) {
    num3 = atResult2.absoluteX;
  }
  if (num3 == null) {
    num3 = -1;
  }
  const allTouches4 = handlerTag.allTouches;
  const atResult3 = allTouches4.at(0);
  num4 = undefined;
  if (atResult3 != null) {
    num4 = atResult3.absoluteY;
  }
  if (num4 == null) {
    num4 = -1;
  }
  return { nativeEvent };
};
export const isTouchWithinInset = (current, right, locationX) => {
  let num;
  if (locationX != null) {
    num = locationX.locationX;
  }
  if (num == null) {
    num = 0;
  }
  let num2 = right.right;
  if (num2 == null) {
    num2 = 0;
  }
  let tmp = num < num2 + current.width;
  if (tmp) {
    let num3;
    if (locationX != null) {
      num3 = locationX.locationY;
    }
    if (num3 == null) {
      num3 = 0;
    }
    let num4 = right.bottom;
    if (num4 == null) {
      num4 = 0;
    }
    tmp = num3 < num4 + current.height;
  }
  if (tmp) {
    let num5;
    if (locationX != null) {
      num5 = locationX.locationX;
    }
    if (num5 == null) {
      num5 = 0;
    }
    let num6 = right.left;
    if (num6 == null) {
      num6 = 0;
    }
    tmp = num5 > -num6;
  }
  if (tmp) {
    let num7;
    if (locationX != null) {
      num7 = locationX.locationY;
    }
    if (num7 == null) {
      num7 = 0;
    }
    let num8 = right.top;
    if (num8 == null) {
      num8 = 0;
    }
    tmp = num7 > -num8;
  }
  return tmp;
};
export const numberAsInset = (hitSlop) => {
  const rect = { left: hitSlop, right: hitSlop, top: hitSlop, bottom: hitSlop };
  return rect;
};
export const viewCenterToPressableEvent = (current) => {
  let items;
  let items1;
  let obj3;
  const timestamp = Date.now();
  const result = current.width / 2;
  const result1 = current.height / 2;
  const obj = { identifier: 0, locationX: result, locationY: result1, pageX: -1, pageY: -1, target: 0, timestamp, touches: [], changedTouches: [] };
  const obj2 = { nativeEvent: obj3 };
  obj3 = { touches: items, changedTouches: items1, identifier: 0, locationX: result, locationY: result1, pageX: -1, pageY: -1, target: 0, timestamp, force: "r" };
  items = [obj];
  items1 = [obj];
  return obj2;
};