// _runtime/00283_getHandler.js
import getFabricUIManager from "00071_getFabricUIManager.js";
import SymbolResult1 from "00134_SymbolResult1.js";
import getInstanceHandle from "00136_getInstanceHandle.js";
import _isNativeReflectConstructDefault from "00141__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault2 from "00285__isNativeReflectConstruct.js";
import recordTouchStart from "00284_recordTouchStart.js";

require = arg1;
function getHandler(arg0, arg1) {
  const tmp = getInstanceHandle.getCurrentProps(arg0)[arg1];
  return typeof tmp === "function" ? tmp : undefined;
}
function dispatchResponderEvent(c5, responderEnd, responderIgnoreScroll, self) {
  const registrationName = tmp.registrationName;
  if (null != registrationName) {
    const tmp4 = getHandler(c5, registrationName);
    if (null != tmp4) {
      const tmp14 = new _isNativeReflectConstructDefault2(responderEnd, { bubbles: false, cancelable: true }, responderIgnoreScroll, tmp, closure_3.touchHistory);
      let tmp16 = null;
      if (null != self) {
        tmp16 = self;
      }
      SymbolResult1.setTarget(tmp14, tmp16);
      let tmp15Result = SymbolResult1;
      tmp15Result.setCurrentTarget(tmp14, c5);
      try {
        tmp15Result = SymbolResult1;
        tmp15Result.setCurrentTarget(tmp14, null);
        return tmp4(tmp14);
      } catch (tmp21) {
        if (!c9) {
          c9 = true;
          c8 = tmp21;
        }
      }
    }
  }
}
let c5 = null;
let c6 = 0;
let items = ["topTouchStart"];
const items1 = ["topTouchMove"];
const items2 = ["topTouchCancel", "topTouchEnd"];
let closure_7 = { startShouldSetResponder: { phasedRegistrationNames: { bubbled: "onStartShouldSetResponder", captured: "onStartShouldSetResponderCapture" }, dependencies: items }, scrollShouldSetResponder: { phasedRegistrationNames: { bubbled: "onScrollShouldSetResponder", captured: "onScrollShouldSetResponderCapture" }, dependencies: ["topScroll"] }, selectionChangeShouldSetResponder: { phasedRegistrationNames: { bubbled: "onSelectionChangeShouldSetResponder", captured: "onSelectionChangeShouldSetResponderCapture" }, dependencies: ["topSelectionChange"] }, moveShouldSetResponder: { phasedRegistrationNames: { bubbled: "onMoveShouldSetResponder", captured: "onMoveShouldSetResponderCapture" }, dependencies: items1 }, responderStart: { registrationName: "onResponderStart", dependencies: items }, responderMove: { registrationName: "onResponderMove", dependencies: items1 }, responderEnd: { registrationName: "onResponderEnd", dependencies: items2 }, responderRelease: { registrationName: "onResponderRelease", dependencies: items2 }, responderTerminationRequest: { registrationName: "onResponderTerminationRequest", dependencies: [] }, responderGrant: { registrationName: "onResponderGrant", dependencies: [] }, responderReject: { registrationName: "onResponderReject", dependencies: [] }, responderTerminate: { registrationName: "onResponderTerminate", dependencies: [] } };
let c8 = null;
let c9 = false;

export const rethrowCaughtError = function rethrowCaughtError() {
  if (c9) {
    c9 = false;
    c8 = null;
    throw c8;
  }
};
export const processResponderEvent = function processResponderEvent(arg0, self, responderIgnoreScroll) {
  let tmp41;
  let tmp49;
  if ("topTouchStart" === arg0) {
    closure_6 = closure_6 + 1;
  } else {
    let tmp2 = "topTouchEnd" === arg0;
    if (!tmp2) {
      tmp2 = "topTouchCancel" === arg0;
    }
    if (tmp2) {
      if (closure_6 >= 0) {
        closure_6 = tmp3 - 1;
      }
    }
  }
  if ("topTouchStart" !== arg0) {
    if ("topTouchMove" !== arg0) {
      let tmp5 = "topTouchEnd" === arg0;
      if (!tmp5) {
        tmp5 = "topTouchCancel" === arg0;
      }
    }
    let tmp11 = null;
    if (self instanceof _isNativeReflectConstructDefault) {
      tmp11 = self;
    }
    let tmp12 = null != tmp11;
    if (tmp12) {
      let tmp13 = "topScroll" === arg0;
      if (tmp13) {
        tmp13 = true !== responderIgnoreScroll.responderIgnoreScroll;
      }
      if (!tmp13) {
        let tmp15 = closure_6 > 0;
        if (tmp15) {
          tmp15 = "topSelectionChange" === arg0;
        }
        tmp13 = tmp15;
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
        let str13 = "startShouldSetResponder";
        if (!tmp) {
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
          let tmp21 = null;
          if (null != parentElement3) {
            const items = [];
            if (null != parentElement3) {
              do {
                let arr = items.unshift(parentElement3);
                parentElement3 = parentElement3.parentElement;
              } while (null != parentElement3);
            }
            const tmp34 = new _isNativeReflectConstructDefault2(str13, { bubbles: true, cancelable: true }, responderIgnoreScroll, dependencyMap[str13], closure_3.touchHistory);
            SymbolResult1.setTarget(tmp34, tmp11);
            const phasedRegistrationNames = tmp25.phasedRegistrationNames;
            tmp21 = null;
            if (null != phasedRegistrationNames) {
              let num7 = 0;
              let tmp40 = require;
              if (0 < items.length) {
                while (true) {
                  tmp41 = items[num7];
                  let obj2 = getInstanceHandle;
                  let tmp44 = obj2.getCurrentProps(tmp41)[tmp39];
                  let tmp46;
                  if (typeof tmp44 === "function") {
                    tmp46 = tmp44;
                  }
                  if (null != tmp46) {
                    let tmp42Result = SymbolResult1;
                    let setCurrentTargetResult = tmp42Result.setCurrentTarget(tmp34, tmp41);
                    if (true === tmp46(tmp34)) {
                      break;
                    }
                  }
                  num7 = num7 + 1;
                  tmp40 = require;
                }
                tmp42Result = SymbolResult1;
                tmp42Result.setCurrentTarget(tmp34, null);
                tmp21 = tmp41;
              }
              let diff = items.length - 1;
              if (0 <= diff) {
                while (true) {
                  tmp49 = items[diff];
                  let obj4 = getInstanceHandle;
                  let tmp52 = obj4.getCurrentProps(tmp49)[tmp38];
                  let tmp54;
                  if (typeof tmp52 === "function") {
                    tmp54 = tmp52;
                  }
                  if (null != tmp54) {
                    let tmp50Result = SymbolResult1;
                    let setCurrentTargetResult2 = tmp50Result.setCurrentTarget(tmp34, tmp49);
                    if (true === tmp54(tmp34)) {
                      break;
                    }
                  }
                  diff = diff - 1;
                  tmp40 = require;
                }
                tmp50Result = SymbolResult1;
                tmp50Result.setCurrentTarget(tmp34, null);
                tmp21 = tmp49;
              }
              tmp40(134).setCurrentTarget(tmp34, null);
              tmp21 = null;
              const tmp40Result = tmp40(134);
            }
          }
        } else {
          let tmp19 = _null;
          if (!_null.contains(tmp11)) {
            tmp19 = tmp11;
            if (!tmp11.contains(tmp18)) {
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
            const tmp119 = true === dispatchResponderEvent(tmp21, "responderGrant", responderIgnoreScroll, tmp11);
            if (null != _null) {
              if (false !== dispatchResponderEvent(_null, "responderTerminationRequest", responderIgnoreScroll, tmp11)) {
                dispatchResponderEvent(tmp61, "responderTerminate", responderIgnoreScroll, tmp11);
                _null = tmp21;
                const fabricUIManager = getFabricUIManager.getFabricUIManager();
                if (null != _null) {
                  let tmp74Result = getInstanceHandle;
                  const nativeElementReference = tmp74Result.getNativeElementReference(tmp73);
                  if (null != nativeElementReference) {
                    if (fabricUIManager != null) {
                      fabricUIManager.setIsJSResponder(nativeElementReference, false, tmp119);
                    }
                  }
                }
                if (null != tmp21) {
                  tmp74Result = getInstanceHandle;
                  const nativeElementReference1 = tmp74Result.getNativeElementReference(tmp21);
                  if (null != nativeElementReference1) {
                    if (fabricUIManager != null) {
                      fabricUIManager.setIsJSResponder(nativeElementReference1, true, tmp119);
                    }
                  }
                }
                tmp73 = _null;
              } else {
                dispatchResponderEvent(tmp21, "responderReject", responderIgnoreScroll, tmp11);
              }
            } else {
              _null = tmp21;
              const fabricUIManager1 = getFabricUIManager.getFabricUIManager();
              if (null != _null) {
                let tmp122Result = getInstanceHandle;
                const nativeElementReference2 = tmp122Result.getNativeElementReference(tmp121);
                if (null != nativeElementReference2) {
                  if (fabricUIManager1 != null) {
                    fabricUIManager1.setIsJSResponder(nativeElementReference2, false, tmp119);
                  }
                }
              }
              if (null != tmp21) {
                tmp122Result = getInstanceHandle;
                const nativeElementReference3 = tmp122Result.getNativeElementReference(tmp21);
                if (null != nativeElementReference3) {
                  if (fabricUIManager1 != null) {
                    fabricUIManager1.setIsJSResponder(nativeElementReference3, true, tmp119);
                  }
                }
              }
              tmp121 = _null;
            }
          }
        }
      }
    }
    if (null != _null) {
      if (tmp) {
        dispatchResponderEvent(tmp126, "responderStart", responderIgnoreScroll, tmp11);
      } else if ("topTouchMove" === arg0) {
        dispatchResponderEvent(tmp126, "responderMove", responderIgnoreScroll, tmp11);
      } else {
        let tmp81 = "topTouchEnd" === arg0;
        if (!tmp81) {
          tmp81 = "topTouchCancel" === arg0;
        }
        if (tmp81) {
          dispatchResponderEvent(tmp126, "responderEnd", responderIgnoreScroll, tmp11);
          if ("topTouchCancel" === arg0) {
            dispatchResponderEvent(tmp126, "responderTerminate", responderIgnoreScroll, tmp11);
            _null = null;
            const fabricUIManager2 = getFabricUIManager.getFabricUIManager();
            if (null != _null) {
              const nativeElementReference4 = getInstanceHandle.getNativeElementReference(tmp99);
              if (null != nativeElementReference4) {
                if (fabricUIManager2 != null) {
                  fabricUIManager2.setIsJSResponder(nativeElementReference4, false, false);
                }
              }
              const tmp100Result = getInstanceHandle;
            }
            tmp99 = _null;
          } else {
            const touches = responderIgnoreScroll.touches;
            const _Array = Array;
            const isArray = Array.isArray(touches);
            let tmp87 = !isArray;
            if (isArray) {
              tmp87 = 0 === touches.length;
            }
            if (tmp87) {
              dispatchResponderEvent(tmp126, "responderRelease", responderIgnoreScroll, tmp11);
              _null = null;
              const fabricUIManager3 = getFabricUIManager.getFabricUIManager();
              if (null != _null) {
                const nativeElementReference5 = getInstanceHandle.getNativeElementReference(tmp92);
                if (null != nativeElementReference5) {
                  if (fabricUIManager3 != null) {
                    fabricUIManager3.setIsJSResponder(nativeElementReference5, false, false);
                  }
                }
                const tmp93Result = getInstanceHandle;
              }
              tmp92 = _null;
            }
          }
        }
      }
    }
  }
  closure_3.recordTouchTrack(arg0, responderIgnoreScroll);
};