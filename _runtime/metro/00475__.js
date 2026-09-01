// _runtime/metro/00475__.js
const obj = {
  centroidDimension(touchBank, arg1, arg2, arg3) {
    let tmp2;
    touchBank = touchBank.touchBank;
    let tmp = null;
    if (1 === touchBank.numberActiveTouches) {
      tmp = touchBank.touchBank[touchBank.indexOfSingleActiveTouch];
    }
    if (null !== tmp) {
      let num4 = 0;
      let num5 = 0;
      if (tmp11) {
        if (!arg3) {
          if (arg3) {
            if (!arg2) {
              const currentPageY = tmp.currentPageY;
            }
          }
          if (!arg3) {
            if (arg2) {
              let previousPageY2 = tmp.previousPageX;
            }
          }
          previousPageY2 = tmp.previousPageY;
        }
        const currentPageX2 = tmp.currentPageX;
      }
      tmp11 = tmp.touchActive && tmp.currentTimeStamp > arg1;
    } else {
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      num4 = 0;
      num5 = 0;
      if (0 < touchBank.length) {
        while (true) {
          tmp2 = touchBank[num];
          let tmp3 = num;
          let tmp4 = num2;
          let tmp5 = num3;
          let tmp6 = num2;
          let tmp7 = num3;
          if (null != tmp2) {
            tmp6 = num2;
            tmp7 = num3;
            if (tmp2.touchActive) {
              tmp6 = num2;
              tmp7 = num3;
              if (tmp2.currentTimeStamp >= arg1) {
                break;
              }
            }
          }
          num = num + 1;
          num2 = tmp6;
          num3 = tmp7;
          num4 = tmp6;
          num5 = tmp7;
        }
        if (!arg3) {
          if (arg3) {
            if (!arg2) {
              const sum = num3 + tmp2.currentPageY;
              const sum1 = num2 + 1;
            }
          }
          if (!arg3) {
            if (arg2) {
              let previousPageY = tmp2.previousPageX;
            }
          }
          previousPageY = tmp2.previousPageY;
        }
        const currentPageX = tmp2.currentPageX;
      }
    }
    if (0 < num4) {
      let noCentroid = num5 / num4;
    } else {
      noCentroid = obj.noCentroid;
    }
    return noCentroid;
  },
  currentCentroidXOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, true, true);
  },
  currentCentroidYOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, false, true);
  },
  previousCentroidXOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, true, false);
  },
  previousCentroidYOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, false, false);
  },
  currentCentroidX(touchBank) {
    return obj.centroidDimension(touchBank, 0, true, true);
  },
  currentCentroidY(touchBank) {
    return obj.centroidDimension(touchBank, 0, false, true);
  },
  noCentroid: -1,
};
arg5.default = obj;
