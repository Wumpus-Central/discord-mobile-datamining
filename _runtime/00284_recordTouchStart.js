// _runtime/00284_recordTouchStart.js
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
      ({ pageX: obj[1], pageY: obj[2] } = identifier);
      obj[3] = tmp;
      ({ pageX: obj[4], pageY: obj[5] } = identifier);
      obj[6] = tmp;
      ({ pageX: obj[7], pageY: obj[8] } = identifier);
      obj[9] = tmp;
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
let obj = { touchBank: items, numberActiveTouches: 0, indexOfSingleActiveTouch: -1, mostRecentTimeStamp: 0 };
arg5.default = {
  instrument(arg0) {
    let closure_0 = arg0;
  },
  recordTouchTrack(arg0, changedTouches) {
    if (null != callback) {
      callback(arg0, changedTouches);
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
      let tmp3 = "topTouchEnd" === arg0;
      if (!tmp3) {
        tmp3 = "topTouchCancel" === arg0;
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
              let tmp8 = num2;
              let arr2 = items;
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
  touchHistory: obj
};