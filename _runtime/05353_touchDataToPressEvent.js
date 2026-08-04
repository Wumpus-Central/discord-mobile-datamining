// _runtime/05353_touchDataToPressEvent.js
function touchDataToPressEvent(arg0, arg1, arg2) {

}
arg5.numberAsInset = (left) => ({ left, right: left, top: left, bottom: left });
arg5.addInsets = (left, left2) => {
  let num = left.left;
  if (num == null) {
    num = 0;
  }
  let num2 = left2.left;
  if (num2 == null) {
    num2 = 0;
  }
  const obj = { left: num + num2, right: null, top: null, bottom: null };
  let num3 = left.right;
  if (num3 == null) {
    num3 = 0;
  }
  let num4 = left2.right;
  if (num4 == null) {
    num4 = 0;
  }
  obj[1] = num3 + num4;
  let num5 = left.top;
  if (num5 == null) {
    num5 = 0;
  }
  let num6 = left2.top;
  if (num6 == null) {
    num6 = 0;
  }
  obj[2] = num5 + num6;
  let num7 = left.bottom;
  if (num7 == null) {
    num7 = 0;
  }
  let num8 = left2.bottom;
  if (num8 == null) {
    num8 = 0;
  }
  obj[3] = num7 + num8;
  return obj;
};
arg5.isTouchWithinInset = (width, right, locationX) => {
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
  let tmp = num < num2 + width.width;
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
    tmp = num3 < num4 + width.height;
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
arg5.gestureToPressableEvent = (handlerTag) => {
  const timestamp = Date.now();
  let nativeEvent = { identifier: handlerTag.handlerTag, locationX: handlerTag.x, locationY: handlerTag.y, pageX: handlerTag.absoluteX, pageY: handlerTag.absoluteY, target: 0, timestamp, touches: [], changedTouches: [] };
  nativeEvent = { touches: items, changedTouches: items1, identifier: nativeEvent.identifier, locationX: handlerTag.x, locationY: handlerTag.y, pageX: handlerTag.absoluteX, pageY: handlerTag.absoluteY, target: 0, timestamp, force: "HermesInternal" };
  items = [nativeEvent];
  items1 = [nativeEvent];
  return { nativeEvent };
};
arg5.gestureTouchToPressableEvent = (handlerTag) => {
  let allTouches;
  let allTouches2;
  let changedTouches;
  const timestamp = Date.now();
  const nativeEvent = {
    touches: allTouches.map((id) => {
      if (typeof timestamp !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      return { identifier: id.id, locationX: id.x, locationY: id.y, pageX: id.absoluteX, pageY: id.absoluteY, target: 0, timestamp, touches: [], changedTouches: [] };
    }),
    changedTouches: changedTouches.map((id) => {
      if (typeof timestamp !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      return { identifier: id.id, locationX: id.x, locationY: id.y, pageX: id.absoluteX, pageY: id.absoluteY, target: 0, timestamp, touches: [], changedTouches: [] };
    }),
    identifier: handlerTag.handlerTag,
    locationX: null,
    locationY: null,
    pageX: null,
    pageY: null,
    target: 0,
    timestamp: null,
    force: "HermesInternal"
  };
  ({ allTouches, changedTouches, allTouches: allTouches2 } = handlerTag);
  const atResult = allTouches2.at(0);
  let num;
  if (atResult != null) {
    num = atResult.x;
  }
  if (num == null) {
    num = -1;
  }
  nativeEvent[3] = num;
  const allTouches3 = handlerTag.allTouches;
  const atResult1 = allTouches3.at(0);
  let num2;
  if (atResult1 != null) {
    num2 = atResult1.y;
  }
  if (num2 == null) {
    num2 = -1;
  }
  nativeEvent[4] = num2;
  const allTouches4 = handlerTag.allTouches;
  const atResult2 = allTouches4.at(0);
  let num3;
  if (atResult2 != null) {
    num3 = atResult2.absoluteX;
  }
  if (num3 == null) {
    num3 = -1;
  }
  nativeEvent[5] = num3;
  const allTouches5 = handlerTag.allTouches;
  const atResult3 = allTouches5.at(0);
  let num4;
  if (atResult3 != null) {
    num4 = atResult3.absoluteY;
  }
  if (num4 == null) {
    num4 = -1;
  }
  nativeEvent[6] = num4;
  nativeEvent[8] = timestamp;
  return { nativeEvent };
};