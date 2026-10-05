// === Module 283: rethrowCaughtError ===

// Module 283 (rethrowCaughtError)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 71 */;
import COMPOSED_PATH_KEY from "COMPOSED_PATH_KEY" /* 134 */;
import _mod136 from "module_136" /* 136 */;
import _getBoundingClientRectDefault from "_getBoundingClientRect" /* 141 */;
import _modDef285 from "module_285" /* 285 */;
import module_284 from "module_284" /* 284 */;

let _null;

function getHandler(arg0, arg1) {
  obj = _mod136;
  const tmp = obj.getCurrentProps(arg0)[arg1];
  return typeof tmp === "function" ? tmp : undefined;
}
function dispatchResponderEvent(c5, responderEnd, responderIgnoreScroll, upload) {
  const registrationName = tmp2.registrationName;
  if (null != registrationName) {
    const tmp5 = getHandler(c5, registrationName);
    if (null != tmp5) {
      let tmp;
      const self = this;
      const self2 = this;
      const tmp13 = new _modDef285(responderEnd, { bubbles: false, cancelable: true }, responderIgnoreScroll, obj[responderEnd], module_284.touchHistory);
      let tmp16 = null;
      const setTarget = COMPOSED_PATH_KEY.setTarget;
      COMPOSED_PATH_KEY;
      if (null != upload) {
        tmp16 = upload;
      }
      setTarget(tmp13, tmp16);
      const tmp14Result = COMPOSED_PATH_KEY;
      tmp14Result.setCurrentTarget(tmp13, c5);
      try {
        tmp = tmp5(tmp13);
      } catch (tmp20) {
        const tmp21 = c9;
        if (!tmp21) {
          c9 = true;
          c8 = tmp20;
        }
      }
      const tmp14Result2 = COMPOSED_PATH_KEY;
      tmp14Result2.setCurrentTarget(tmp13, null);
      return tmp;
    }
  }
}
let c5 = null;
let closure_6 = 0;
let items = ["topTouchStart"];
const items1 = ["topTouchMove"];
const items2 = ["topTouchCancel", "topTouchEnd"];
let obj = { startShouldSetResponder: { phasedRegistrationNames: { bubbled: "onStartShouldSetResponder", captured: "onStartShouldSetResponderCapture" }, dependencies: items }, scrollShouldSetResponder: { phasedRegistrationNames: { bubbled: "onScrollShouldSetResponder", captured: "onScrollShouldSetResponderCapture" }, dependencies: ["topScroll"] }, selectionChangeShouldSetResponder: { phasedRegistrationNames: { bubbled: "onSelectionChangeShouldSetResponder", captured: "onSelectionChangeShouldSetResponderCapture" }, dependencies: ["topSelectionChange"] }, moveShouldSetResponder: { phasedRegistrationNames: { bubbled: "onMoveShouldSetResponder", captured: "onMoveShouldSetResponderCapture" }, dependencies: items1 }, responderStart: { registrationName: "onResponderStart", dependencies: items }, responderMove: { registrationName: "onResponderMove", dependencies: items1 }, responderEnd: { registrationName: "onResponderEnd", dependencies: items2 }, responderRelease: { registrationName: "onResponderRelease", dependencies: items2 }, responderTerminationRequest: { registrationName: "onResponderTerminationRequest", dependencies: [] }, responderGrant: { registrationName: "onResponderGrant", dependencies: [] }, responderReject: { registrationName: "onResponderReject", dependencies: [] }, responderTerminate: { registrationName: "onResponderTerminate", dependencies: [] } };
let c8 = null;
let c9 = false;

export const rethrowCaughtError = function rethrowCaughtError() {
  const tmp = c9;
  if (tmp) {
    c9 = false;
    c8 = null;
    throw c8;
  }
};
export const processResponderEvent = function processResponderEvent(arg0, upload, responderIgnoreScroll) {
  let tmp38;
  let tmp46;
  if ("topTouchStart" === arg0) {
    closure_6 = closure_6 + 1;
  } else {
    const tmp2 = "topTouchEnd" === arg0 || "topTouchCancel" === arg0;
    if (tmp2) {
      if (closure_6 >= 0) {
        closure_6 = tmp3 - 1;
      }
    }
  }
  if ("topTouchStart" !== arg0) {
    let tmp11 = null;
    if (upload instanceof _getBoundingClientRectDefault) {
      tmp11 = upload;
    }
    let tmp12 = null != tmp11;
    if (tmp12) {
      let tmp13 = "topScroll" === arg0 && true !== responderIgnoreScroll.responderIgnoreScroll;
      if (!tmp13) {
        tmp13 = closure_6 > 0 && "topSelectionChange" === arg0;
        const tmp15 = closure_6 > 0 && "topSelectionChange" === arg0;
      }
      if (!tmp13) {
        tmp13 = tmp;
      }
      if (!tmp13) {
        tmp13 = "topTouchMove" === arg0;
      }
      tmp12 = tmp13;
    }
    if (tmp12) {
      if (null != tmp11) {
        let tmp21;
        let str13 = "startShouldSetResponder";
        if ("topTouchStart" !== arg0) {
          let str9 = "moveShouldSetResponder";
          if ("topTouchMove" !== arg0) {
            let str11 = "scrollShouldSetResponder";
            if ("topSelectionChange" === arg0) {
              str11 = "selectionChangeShouldSetResponder";
            }
            str9 = str11;
          }
          str13 = str9;
        }
        let flag3 = false;
        let tmp17 = tmp11;
        if (null == _null) {
          let parentElement3 = tmp17;
          if (flag3) {
            parentElement3 = tmp17.parentElement;
          }
          tmp21 = null;
          if (null != parentElement3) {
            const items = [];
            if (null != parentElement3) {
              do {
                let arr = items.unshift(parentElement3);
                parentElement3 = parentElement3.parentElement;
              } while (null != parentElement3);
            }
            const self = this;
            const self2 = this;
            const tmp32 = new _modDef285(str13, { bubbles: true, cancelable: true }, responderIgnoreScroll, obj[str13], module_284.touchHistory);
            obj = COMPOSED_PATH_KEY;
            obj.setTarget(tmp32, tmp11);
            const phasedRegistrationNames = tmp25.phasedRegistrationNames;
            tmp21 = null;
            if (null != phasedRegistrationNames) {
              let num7 = 0;
              let tmp37 = require;
              const bubbled = phasedRegistrationNames.bubbled;
              if (0 < items.length) {
                while (true) {
                  tmp38 = items[num7];
                  let obj2 = _mod136;
                  let tmp41 = obj2.getCurrentProps(tmp38)[tmp36];
                  let tmp43;
                  if (typeof tmp41 === "function") {
                    tmp43 = tmp41;
                  }
                  if (null != tmp43) {
                    let tmp39Result = COMPOSED_PATH_KEY;
                    let setCurrentTargetResult = tmp39Result.setCurrentTarget(tmp32, tmp38);
                    if (true === tmp43(tmp32)) {
                      break;
                    }
                  }
                  num7 = num7 + 1;
                  tmp37 = require;
                }
                const tmp39Result2 = COMPOSED_PATH_KEY;
                tmp39Result2.setCurrentTarget(tmp32, null);
                tmp21 = tmp38;
              }
              let diff = items.length - 1;
              if (0 <= diff) {
                while (true) {
                  tmp46 = items[diff];
                  let obj4 = _mod136;
                  let tmp49 = obj4.getCurrentProps(tmp46)[bubbled];
                  let tmp51;
                  if (typeof tmp49 === "function") {
                    tmp51 = tmp49;
                  }
                  if (null != tmp51) {
                    let tmp47Result = COMPOSED_PATH_KEY;
                    let setCurrentTargetResult2 = tmp47Result.setCurrentTarget(tmp32, tmp46);
                    if (true === tmp51(tmp32)) {
                      break;
                    }
                  }
                  diff = diff - 1;
                  tmp37 = require;
                }
                const tmp47Result2 = COMPOSED_PATH_KEY;
                tmp47Result2.setCurrentTarget(tmp32, null);
                tmp21 = tmp46;
              }
              const tmp37Result = tmp37(134);
              tmp37Result.setCurrentTarget(tmp32, null);
              tmp21 = null;
            }
          }
        } else {
          let tmp19 = _null;
          if (!_null.contains(tmp11)) {
            tmp19 = tmp11;
            if (!tmp11.contains(_null)) {
              let parentElement = tmp18.parentElement;
              tmp19 = null;
              if (null != parentElement) {
                tmp19 = parentElement;
                while (!parentElement.contains(tmp11)) {
                  let parentElement2 = parentElement.parentElement;
                  parentElement = parentElement2;
                  tmp19 = null;
                  if (null == parentElement2) {
                    break;
                  }
                }
              }
            }
          }
          tmp21 = null;
          if (null != tmp19) {
            flag3 = false;
            tmp17 = tmp19;
            if (tmp19 === _null) {
              flag3 = true;
              tmp17 = tmp19;
            }
          }
        }
        if (null != tmp21) {
          if (tmp21 !== _null) {
            const tmp116 = true === dispatchResponderEvent(tmp21, "responderGrant", responderIgnoreScroll, tmp11);
            if (null != _null) {
              if (false !== dispatchResponderEvent(_null, "responderTerminationRequest", responderIgnoreScroll, tmp11)) {
                dispatchResponderEvent(_null, "responderTerminate", responderIgnoreScroll, tmp11);
                _null = tmp21;
                const obj10 = defineLazyObjectProperty;
                const fabricUIManager = obj10.getFabricUIManager();
                const tmp70 = _null;
                if (null != _null) {
                  const tmp71Result = _mod136;
                  const nativeElementReference = tmp71Result.getNativeElementReference(tmp70);
                  if (null != nativeElementReference) {
                    if (fabricUIManager != null) {
                      fabricUIManager.setIsJSResponder(nativeElementReference, false, tmp116);
                    }
                  }
                }
                if (null != tmp21) {
                  const tmp71Result2 = _mod136;
                  const nativeElementReference1 = tmp71Result2.getNativeElementReference(tmp21);
                  if (null != nativeElementReference1) {
                    if (fabricUIManager != null) {
                      fabricUIManager.setIsJSResponder(nativeElementReference1, true, tmp116);
                    }
                  }
                }
              } else {
                dispatchResponderEvent(tmp21, "responderReject", responderIgnoreScroll, tmp11);
              }
            } else {
              _null = tmp21;
              const obj19 = defineLazyObjectProperty;
              const fabricUIManager1 = obj19.getFabricUIManager();
              const tmp118 = _null;
              if (null != _null) {
                const tmp119Result = _mod136;
                const nativeElementReference2 = tmp119Result.getNativeElementReference(tmp118);
                if (null != nativeElementReference2) {
                  if (fabricUIManager1 != null) {
                    fabricUIManager1.setIsJSResponder(nativeElementReference2, false, tmp116);
                  }
                }
              }
              if (null != tmp21) {
                const tmp119Result2 = _mod136;
                const nativeElementReference3 = tmp119Result2.getNativeElementReference(tmp21);
                if (null != nativeElementReference3) {
                  if (fabricUIManager1 != null) {
                    fabricUIManager1.setIsJSResponder(nativeElementReference3, true, tmp116);
                  }
                }
              }
            }
          }
        }
      }
    }
    if (null != _null) {
      if ("topTouchStart" === arg0) {
        dispatchResponderEvent(_null, "responderStart", responderIgnoreScroll, tmp11);
      } else if ("topTouchMove" === arg0) {
        dispatchResponderEvent(_null, "responderMove", responderIgnoreScroll, tmp11);
      } else {
        const tmp78 = "topTouchEnd" === arg0 || "topTouchCancel" === arg0;
        if (tmp78) {
          dispatchResponderEvent(_null, "responderEnd", responderIgnoreScroll, tmp11);
          if ("topTouchCancel" === arg0) {
            dispatchResponderEvent(_null, "responderTerminate", responderIgnoreScroll, tmp11);
            _null = null;
            const obj16 = defineLazyObjectProperty;
            const fabricUIManager2 = obj16.getFabricUIManager();
            const tmp96 = _null;
            if (null != _null) {
              const tmp97Result = _mod136;
              const nativeElementReference4 = tmp97Result.getNativeElementReference(tmp96);
              if (null != nativeElementReference4) {
                if (fabricUIManager2 != null) {
                  fabricUIManager2.setIsJSResponder(nativeElementReference4, false, false);
                }
              }
            }
          } else {
            const touches = responderIgnoreScroll.touches;
            const _Array = Array;
            const isArray = Array.isArray(touches);
            let tmp84 = !isArray;
            if (isArray) {
              tmp84 = 0 === touches.length;
            }
            if (tmp84) {
              dispatchResponderEvent(_null, "responderRelease", responderIgnoreScroll, tmp11);
              _null = null;
              const obj14 = defineLazyObjectProperty;
              const fabricUIManager3 = obj14.getFabricUIManager();
              const tmp89 = _null;
              if (null != _null) {
                const tmp90Result = _mod136;
                const nativeElementReference5 = tmp90Result.getNativeElementReference(tmp89);
                if (null != nativeElementReference5) {
                  if (fabricUIManager3 != null) {
                    fabricUIManager3.setIsJSResponder(nativeElementReference5, false, false);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  module_284.recordTouchTrack(arg0, responderIgnoreScroll);
};