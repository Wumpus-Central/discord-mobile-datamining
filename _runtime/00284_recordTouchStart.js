// === Module 284: recordTouchStart ===

// Module 284 (recordTouchStart)
function recordTouchStart(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    const error = new Error("Touch object is missing identifier.");
    throw error;
  } else {
    if (items[identifier]) {
      tmp3.touchActive = true;
      ({ pageX: tmp3.startPageX, pageY: tmp3.startPageY } = identifier);
      tmp3.startTimeStamp = tmp;
      ({ pageX: tmp3.currentPageX, pageY: tmp3.currentPageY } = identifier);
      tmp3.currentTimeStamp = tmp;
      ({ pageX: tmp3.previousPageX, pageY: tmp3.previousPageY } = identifier);
      tmp3.previousTimeStamp = tmp;
    } else {
      const obj = { touchActive: true, startPageX: null, startPageY: null, startTimeStamp: null, currentPageX: null, currentPageY: null, currentTimeStamp: null, previousPageX: null, previousPageY: null, previousTimeStamp: null };
      ({ pageX: obj.startPageX, pageY: obj.startPageY } = identifier);
      obj.startTimeStamp = tmp;
      ({ pageX: obj.currentPageX, pageY: obj.currentPageY } = identifier);
      obj.currentTimeStamp = tmp;
      ({ pageX: obj.previousPageX, pageY: obj.previousPageY } = identifier);
      obj.previousTimeStamp = tmp;
      tmp2[identifier] = obj;
    }
    obj.mostRecentTimeStamp = identifier.timeStamp || identifier.timestamp;
  }
}
function recordTouchMove(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    const error = new Error("Touch object is missing identifier.");
    throw error;
  } else if (tmp[identifier]) {
    tmp2.touchActive = true;
    ({ currentPageX: tmp2.previousPageX, currentPageY: tmp2.previousPageY, currentTimeStamp: tmp2.previousTimeStamp } = tmp2);
    ({ pageX: tmp2.currentPageX, pageY: tmp2.currentPageY } = identifier);
    tmp2.currentTimeStamp = identifier.timeStamp || identifier.timestamp;
    obj.mostRecentTimeStamp = identifier.timeStamp || identifier.timestamp;
  }
}
function recordTouchEnd(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    const error = new Error("Touch object is missing identifier.");
    throw error;
  } else if (tmp[identifier]) {
    tmp2.touchActive = false;
    ({ currentPageX: tmp2.previousPageX, currentPageY: tmp2.previousPageY, currentTimeStamp: tmp2.previousTimeStamp } = tmp2);
    ({ pageX: tmp2.currentPageX, pageY: tmp2.currentPageY } = identifier);
    tmp2.currentTimeStamp = identifier.timeStamp || identifier.timestamp;
    obj.mostRecentTimeStamp = identifier.timeStamp || identifier.timestamp;
  }
}
const items = [];
const touchHistory = { touchBank: items, numberActiveTouches: 0, indexOfSingleActiveTouch: -1, mostRecentTimeStamp: 0 };

export default {
  instrument(arg0) {
    global = arg0;
  },
  recordTouchTrack(framebus, changedTouches) {
    if (null != global) {
      global(framebus, changedTouches);
    }
    if ("topTouchMove" === framebus) {
      changedTouches = changedTouches.changedTouches;
      const item = changedTouches.forEach(recordTouchMove);
    } else if ("topTouchStart" === framebus) {
      const changedTouches1 = changedTouches.changedTouches;
      const item1 = changedTouches1.forEach(recordTouchStart);
      obj.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj.numberActiveTouches) {
        tmp12.indexOfSingleActiveTouch = changedTouches.touches[0].identifier;
      }
    } else {
      let tmp3 = "topTouchEnd" === framebus;
      if (!tmp3) {
        tmp3 = "topTouchCancel" === framebus;
      }
      if (tmp3) {
        const changedTouches2 = changedTouches.changedTouches;
        const item2 = changedTouches2.forEach(recordTouchEnd);
        obj.numberActiveTouches = changedTouches.touches.length;
        if (1 === obj.numberActiveTouches) {
          let num2 = 0;
          if (0 < items.length) {
            while (true) {
              let tmp7 = items[num2];
              if (null != tmp7) {
                if (tmp7.touchActive) {
                  break;
                }
              }
              num2 = num2 + 1;
            }
            obj.indexOfSingleActiveTouch = num2;
          }
        }
      }
    }
  },
  touchHistory
};