// === Module 475: ? ===

// Module 475
const obj = {
  centroidDimension(touchBank, arg1, arg2, arg3) {
    let noCentroid;
    let num4;
    let num5;
    touchBank = touchBank.touchBank;
    let tmp = null;
    if (1 === touchBank.numberActiveTouches) {
      tmp = touchBank.touchBank[touchBank.indexOfSingleActiveTouch];
    }
    if (null !== tmp) {
      num4 = 0;
      num5 = 0;
      const tmp8 = tmp.touchActive && tmp.currentTimeStamp > arg1;
      if (tmp8) {
        let currentPageY2;
        if (arg3) {
          if (arg2) {
            currentPageY2 = tmp.currentPageX;
          }
          num5 = currentPageY2;
          num4 = 1;
        }
        if (arg3) {
          if (!arg2) {
            currentPageY2 = tmp.currentPageY;
          }
        }
        if (!arg3) {
          let previousPageY2;
          if (arg2) {
            previousPageY2 = tmp.previousPageX;
          }
          currentPageY2 = previousPageY2;
        }
        previousPageY2 = tmp.previousPageY;
      }
    } else {
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      num4 = 0;
      num5 = 0;
      if (0 < touchBank.length) {
        do {
          let tmp2 = touchBank[num];
          let sum1 = num2;
          let sum = num3;
          if (null != tmp2) {
            sum1 = num2;
            sum = num3;
            if (tmp2.touchActive) {
              sum1 = num2;
              sum = num3;
              if (tmp2.currentTimeStamp >= arg1) {
                if (arg3) {
                  if (arg2) {
                    sum = num3 + tmp2.currentPageX;
                    sum1 = num2 + 1;
                  }
                }
                if (arg3) {
                  if (!arg2) {
                    let currentPageY = tmp2.currentPageY;
                  }
                }
                if (!arg3) {
                  let previousPageY;
                  if (arg2) {
                    previousPageY = tmp2.previousPageX;
                  }
                  currentPageY = previousPageY;
                }
                previousPageY = tmp2.previousPageY;
              }
            }
          }
          num = num + 1;
          num2 = sum1;
          num3 = sum;
          num4 = sum1;
          num5 = sum;
        } while (num < touchBank.length);
      }
    }
    if (0 < num4) {
      noCentroid = num5 / num4;
    } else {
      noCentroid = obj.noCentroid;
    }
    return noCentroid;
  },
  currentCentroidXOfTouchesChangedAfter(touchBank, arg1) {
    return obj.centroidDimension(touchBank, arg1, true, true);
  },
  currentCentroidYOfTouchesChangedAfter(touchBank, arg1) {
    return obj.centroidDimension(touchBank, arg1, false, true);
  },
  previousCentroidXOfTouchesChangedAfter(touchBank, arg1) {
    return obj.centroidDimension(touchBank, arg1, true, false);
  },
  previousCentroidYOfTouchesChangedAfter(touchBank, arg1) {
    return obj.centroidDimension(touchBank, arg1, false, false);
  },
  currentCentroidX(touchHistory) {
    return obj.centroidDimension(touchHistory, 0, true, true);
  },
  currentCentroidY(touchHistory) {
    return obj.centroidDimension(touchHistory, 0, false, true);
  },
  noCentroid: -1
};

export default obj;