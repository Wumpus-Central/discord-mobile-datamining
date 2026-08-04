// _runtime/00283_getHandler.js
import recordTouchStart from "recordTouchStart";

const require = arg1;
function getHandler(arg0, arg1) {
  const tmp = require(136) /* getInstanceHandle */.getCurrentProps(arg0)[arg1];
  return typeof tmp === "fileFinishedImporting" ? tmp : undefined;
}
function dispatchResponderEvent(nativeElementReference3, responderEnd, responderIgnoreScroll, self) {
  const registrationName = tmp.registrationName;
  if (null != registrationName) {
    const tmp4 = getHandler(nativeElementReference3, registrationName);
    if (null != tmp4) {
      const tmp14 = new importDefault(285)(responderEnd, { bubbles: false, cancelable: true }, responderIgnoreScroll, tmp, recordTouchStart.touchHistory);
      let tmp16 = null;
      if (null != self) {
        tmp16 = self;
      }
      require(134) /* SymbolResult1 */.setTarget(tmp14, tmp16);
      let tmp15Result = tmp15(134);
      tmp15Result.setCurrentTarget(tmp14, nativeElementReference3);
      try {
        tmp15Result = tmp15(134);
        tmp15Result.setCurrentTarget(tmp14, null);
        return tmp4(tmp14);
      } catch (tmp21) {
        if (!c9) {
          c9 = true;
          let c8 = tmp21;
        }
      }
      const obj = require(134) /* SymbolResult1 */;
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
    let c8 = null;
    throw c8;
  }
};
export const processResponderEvent = function processResponderEvent(arg0, self, responderIgnoreScroll) {
  let tmp41;
  let tmp42;
  let tmp49;
  let tmp50;
  let nativeElementReference3 = "topTouchStart" === arg0;
  if (nativeElementReference3) {
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
  if (!nativeElementReference3) {
    if ("topTouchMove" !== arg0) {
      let tmp5 = "topTouchEnd" === arg0;
      if (!tmp5) {
        tmp5 = "topTouchCancel" === arg0;
      }
    }
    let tmp11 = null;
    if (self instanceof importDefault(141)) {
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
        tmp13 = nativeElementReference3;
      }
      if (!tmp13) {
        tmp13 = "topTouchMove" === arg0;
      }
      tmp12 = tmp13;
    }
    if (tmp12) {
      if (null != tmp11) {
        let str13 = "startShouldSetResponder";
        if (!nativeElementReference3) {
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
            const tmp34 = new importDefault(285)(str13, { bubbles: true, cancelable: true }, responderIgnoreScroll, dependencyMap[str13], recordTouchStart.touchHistory);
            require(134) /* SymbolResult1 */.setTarget(tmp34, tmp11);
            const phasedRegistrationNames = tmp25.phasedRegistrationNames;
            tmp21 = null;
            if (null != phasedRegistrationNames) {
              let num7 = 0;
              let tmp40 = tmp36;
              if (0 < items.length) {
                while (true) {
                  tmp41 = items[num7];
                  tmp42 = require;
                  let tmp43 = dependencyMap;
                  let obj2 = require(136) /* getInstanceHandle */;
                  let tmp44 = obj2.getCurrentProps(tmp41)[tmp39];
                  let tmp45 = num7;
                  let tmp46;
                  if (typeof tmp44 !== "disabledUntil") {
                    tmp46 = tmp44;
                  }
                  if (null != tmp46) {
                    let tmp42Result = tmp42(134);
                    let setCurrentTargetResult = tmp42Result.setCurrentTarget(tmp34, tmp41);
                    if (true === tmp46(tmp34)) {
                      break;
                    }
                  }
                  num7 = num7 + 1;
                  let tmp27 = tmp43;
                  tmp40 = tmp42;
                }
                tmp42Result = tmp42(134);
                tmp42Result.setCurrentTarget(tmp34, null);
                tmp21 = tmp41;
              }
              let diff = items.length - 1;
              if (0 <= diff) {
                while (true) {
                  tmp49 = items[diff];
                  tmp50 = require;
                  let tmp51 = dependencyMap;
                  let obj4 = require(136) /* getInstanceHandle */;
                  let tmp52 = obj4.getCurrentProps(tmp49)[tmp38];
                  let tmp53 = diff;
                  let tmp54;
                  if (typeof tmp52 !== "disabledUntil") {
                    tmp54 = tmp52;
                  }
                  if (null != tmp54) {
                    let tmp50Result = tmp50(134);
                    let setCurrentTargetResult2 = tmp50Result.setCurrentTarget(tmp34, tmp49);
                    if (true === tmp54(tmp34)) {
                      break;
                    }
                  }
                  diff = diff - 1;
                  tmp27 = tmp51;
                  tmp40 = tmp50;
                }
                tmp50Result = tmp50(134);
                tmp50Result.setCurrentTarget(tmp34, null);
                tmp21 = tmp49;
              }
              tmp40(134).setCurrentTarget(tmp34, null);
              tmp21 = null;
              const tmp40Result = tmp40(134);
            }
            const obj = require(134) /* SymbolResult1 */;
            tmp36 = require;
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
          nativeElementReference3 = _null;
          if (tmp21 !== _null) {
            nativeElementReference3 = dispatchResponderEvent;
            nativeElementReference3 = tmp21;
            nativeElementReference3 = responderIgnoreScroll;
            nativeElementReference3 = tmp11;
            nativeElementReference3 = true === dispatchResponderEvent(tmp21, "responderGrant", responderIgnoreScroll, tmp11);
            nativeElementReference3 = _null;
            if (null != _null) {
              if (false !== nativeElementReference3(_null, "responderTerminationRequest", responderIgnoreScroll, tmp11)) {
                const result = nativeElementReference3(tmp61, "responderTerminate", responderIgnoreScroll, tmp11);
                _null = tmp21;
                const fabricUIManager = require(71) /* getFabricUIManager */.getFabricUIManager();
                if (null != _null) {
                  let tmp74Result = tmp74(136);
                  const nativeElementReference = tmp74Result.getNativeElementReference(tmp73);
                  if (null != nativeElementReference) {
                    if (fabricUIManager != null) {
                      fabricUIManager.setIsJSResponder(nativeElementReference, false, nativeElementReference3);
                    }
                  }
                }
                if (null != tmp21) {
                  tmp74Result = tmp74(136);
                  const nativeElementReference1 = tmp74Result.getNativeElementReference(tmp21);
                  if (null != nativeElementReference1) {
                    if (fabricUIManager != null) {
                      fabricUIManager.setIsJSResponder(nativeElementReference1, true, nativeElementReference3);
                    }
                  }
                }
                const obj10 = require(71) /* getFabricUIManager */;
                tmp73 = _null;
              } else {
                const result1 = nativeElementReference3(tmp21, "responderReject", responderIgnoreScroll, tmp11);
              }
            } else {
              _null = tmp21;
              nativeElementReference3 = require;
              nativeElementReference3 = dependencyMap;
              nativeElementReference3 = _null;
              const fabricUIManager1 = require(71) /* getFabricUIManager */.getFabricUIManager();
              if (null != _null) {
                const result2 = nativeElementReference3(136);
                const nativeElementReference2 = result2.getNativeElementReference(nativeElementReference3);
                if (null != nativeElementReference2) {
                  if (fabricUIManager1 != null) {
                    fabricUIManager1.setIsJSResponder(nativeElementReference2, false, nativeElementReference3);
                  }
                }
              }
              if (null != tmp21) {
                const result3 = nativeElementReference3(136);
                nativeElementReference3 = result3.getNativeElementReference(tmp21);
                if (null != nativeElementReference3) {
                  if (fabricUIManager1 != null) {
                    nativeElementReference3 = fabricUIManager1.setIsJSResponder(nativeElementReference3, true, nativeElementReference3);
                  }
                }
              }
              const obj19 = require(71) /* getFabricUIManager */;
            }
          }
        }
      }
    }
    if (null != _null) {
      nativeElementReference3 = _null;
      if (nativeElementReference3) {
        nativeElementReference3 = dispatchResponderEvent;
        nativeElementReference3 = responderIgnoreScroll;
        nativeElementReference3 = tmp11;
        nativeElementReference3 = dispatchResponderEvent(nativeElementReference3, "responderStart", responderIgnoreScroll, tmp11);
      } else if ("topTouchMove" === arg0) {
        nativeElementReference3 = dispatchResponderEvent;
        nativeElementReference3 = responderIgnoreScroll;
        nativeElementReference3 = tmp11;
        nativeElementReference3 = dispatchResponderEvent(nativeElementReference3, "responderMove", responderIgnoreScroll, tmp11);
      } else {
        let tmp81 = "topTouchEnd" === arg0;
        if (!tmp81) {
          tmp81 = "topTouchCancel" === arg0;
        }
        if (tmp81) {
          dispatchResponderEvent(nativeElementReference3, "responderEnd", responderIgnoreScroll, tmp11);
          if ("topTouchCancel" === arg0) {
            tmp82(nativeElementReference3, "responderTerminate", responderIgnoreScroll, tmp11);
            _null = null;
            nativeElementReference3 = require;
            nativeElementReference3 = dependencyMap;
            const fabricUIManager2 = require(71) /* getFabricUIManager */.getFabricUIManager();
            if (null != _null) {
              const result4 = nativeElementReference3(136);
              nativeElementReference3 = result4.getNativeElementReference(tmp99);
              if (null != nativeElementReference3) {
                if (fabricUIManager2 != null) {
                  nativeElementReference3 = fabricUIManager2.setIsJSResponder(nativeElementReference3, false, false);
                }
              }
            }
            const obj16 = require(71) /* getFabricUIManager */;
            tmp99 = _null;
          } else {
            const touches = responderIgnoreScroll.touches;
            nativeElementReference3 = globalThis;
            const _Array = Array;
            nativeElementReference3 = Array.isArray(touches);
            let tmp87 = !nativeElementReference3;
            if (nativeElementReference3) {
              tmp87 = 0 === touches.length;
            }
            if (tmp87) {
              tmp82(nativeElementReference3, "responderRelease", responderIgnoreScroll, tmp11);
              _null = null;
              const fabricUIManager3 = require(71) /* getFabricUIManager */.getFabricUIManager();
              if (null != _null) {
                nativeElementReference3 = tmp93(136).getNativeElementReference(tmp92);
                if (null != nativeElementReference3) {
                  if (fabricUIManager3 != null) {
                    nativeElementReference3 = fabricUIManager3.setIsJSResponder(nativeElementReference3, false, false);
                  }
                }
                const tmp93Result = tmp93(136);
              }
              const obj14 = require(71) /* getFabricUIManager */;
              tmp92 = _null;
              tmp93 = require;
            }
          }
        }
      }
    }
  }
  recordTouchStart.recordTouchTrack(arg0, responderIgnoreScroll);
};