// === Module 284: ? ===

// Module 284
function recordTouchStart(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Touch object is missing identifier.");
    throw error;
  } else {
    let obj;
    if (items[identifier]) {
      items[identifier].touchActive = true;
      ({ pageX: tmp3.startPageX, pageY: tmp3.startPageY } = identifier);
      items[identifier].startTimeStamp = identifier.timeStamp || identifier.timestamp;
      ({ pageX: tmp3.currentPageX, pageY: tmp3.currentPageY } = identifier);
      items[identifier].currentTimeStamp = identifier.timeStamp || identifier.timestamp;
      ({ pageX: tmp3.previousPageX, pageY: tmp3.previousPageY } = identifier);
      items[identifier].previousTimeStamp = identifier.timeStamp || identifier.timestamp;
    } else {
      obj = { touchActive: true, startPageX: null, startPageY: null, startTimeStamp: identifier.timeStamp || identifier.timestamp, currentPageX: null, currentPageY: null, currentTimeStamp: identifier.timeStamp || identifier.timestamp, previousPageX: null, previousPageY: null, previousTimeStamp: identifier.timeStamp || identifier.timestamp };
      ({ pageX: obj.startPageX, pageY: obj.startPageY } = identifier);
      ({ pageX: obj.currentPageX, pageY: obj.currentPageY } = identifier);
      ({ pageX: obj.previousPageX, pageY: obj.previousPageY } = identifier);
      tmp2[identifier] = obj;
    }
    obj.mostRecentTimeStamp = identifier.timeStamp || identifier.timestamp;
  }
}
function recordTouchMove(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Touch object is missing identifier.");
    throw error;
  } else if (tmp[identifier]) {
    tmp[identifier].touchActive = true;
    ({ currentPageX: tmp2.previousPageX, currentPageY: tmp2.previousPageY, currentTimeStamp: tmp2.previousTimeStamp } = tmp[identifier]);
    ({ pageX: tmp2.currentPageX, pageY: tmp2.currentPageY } = identifier);
    tmp[identifier].currentTimeStamp = identifier.timeStamp || identifier.timestamp;
    obj.mostRecentTimeStamp = identifier.timeStamp || identifier.timestamp;
  }
}
function recordTouchEnd(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Touch object is missing identifier.");
    throw error;
  } else if (tmp[identifier]) {
    tmp[identifier].touchActive = false;
    ({ currentPageX: tmp2.previousPageX, currentPageY: tmp2.previousPageY, currentTimeStamp: tmp2.previousTimeStamp } = tmp[identifier]);
    ({ pageX: tmp2.currentPageX, pageY: tmp2.currentPageY } = identifier);
    tmp[identifier].currentTimeStamp = identifier.timeStamp || identifier.timestamp;
    obj.mostRecentTimeStamp = identifier.timeStamp || identifier.timestamp;
  }
}
const items = [];
const touchHistory = { touchBank: items, numberActiveTouches: 0, indexOfSingleActiveTouch: -1, mostRecentTimeStamp: 0 };

export default {
  instrument(arg0) {
    let closure_1_0 = arg0;
  },
  recordTouchTrack(arg0, changedTouches) {
    if (null != React) {
      React(arg0, changedTouches);
    }
    if ("topTouchMove" === arg0) {
      changedTouches = changedTouches.changedTouches;
      const item = changedTouches.forEach(recordTouchMove);
    } else if ("topTouchStart" === arg0) {
      const changedTouches1 = changedTouches.changedTouches;
      const item1 = changedTouches1.forEach(recordTouchStart);
      obj.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj.numberActiveTouches) {
        tmp12.indexOfSingleActiveTouch = changedTouches.touches[0].identifier;
      }
    } else {
      const tmp3 = "topTouchEnd" === arg0 || "topTouchCancel" === arg0;
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