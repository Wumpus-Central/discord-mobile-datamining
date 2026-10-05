// === Module 9664: VoiceSensitivity ===

// Module 9664 (VoiceSensitivity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4945 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MediaEngineStore_mod from "MediaEngineStore" /* 1999 */;
import SpeakingStore from "SpeakingStore" /* 5576 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let auto, c1, c2;

let ColorUtils;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
let MediaEngineStore = MediaEngineStore_mod;
const AppStates = Constants.AppStates;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sensitivity: { position: "relative", height: 20 }, sensitivityBar: { position: "absolute", top: 7, left: 0, right: 0, bottom: 7, flexDirection: "row" }, sensitivityFill: rect, sensitivityCommon: { height: 6, borderRadius: 3 }, sensitivityMin: obj2, sensitivityMax: obj3, sensitivityDefault: obj4, sensitivitySpeaking: obj5, sensitivitySlider: { flex: 1, backgroundColor: "transparent", marginVertical: -10 } };
rect = { position: "absolute", backgroundColor: nativeDefault.unsafe_rawColors.WHITE, opacity: 0.5, top: 7, left: 0, right: 0, bottom: 7 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj4 = { flex: 1, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_400, 0.6) };
ColorUtils = ColorUtils_mod;
obj5 = { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_14 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((auto) => {
  let closure_3;
  let closure_7;
  let first;
  let first1;
  let first3;
  let items3;
  let items4;
  let ref;
  let state;
  let stateFromStores;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp25;
  let tmp42;
  let tmp43;
  let width;
  const tmp = auto;
  let tmp2 = first1;
  let obj = auto(first1[14]);
  const cResult = obj.c(75);
  auto = auto.auto;
  const onThresholdChange = auto.onThresholdChange;
  const threshold = auto.threshold;
  let tmp4 = ref();
  const sum = threshold + 100;
  let obj2 = stateFromStores;
  ref = stateFromStores.useRef(null);
  stateFromStores.useRef(null);
  let ref2 = stateFromStores.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const result = first3.isCurrentUserSpeaking();
    cResult[0] = result;
    first = result;
  } else {
    first = cResult[0];
  }
  const tmp13 = width(obj2.useState(first), 2);
  first1 = tmp13[0];
  _asyncToGenerator = tmp13[1];
  width = onThresholdChange(tmp2[15])().width;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [state];
    const fn = function w() {
      return state.getState();
    };
    const items1 = [];
    cResult[1] = items;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp17 = items1;
    tmp16 = fn;
    tmp15 = items;
  } else {
    tmp15 = cResult[1];
    tmp16 = cResult[2];
    tmp17 = cResult[3];
  }
  const tmpResult = tmp(tmp2[16]);
  stateFromStores = tmpResult.useStateFromStores(tmp15, tmp16, tmp17);
  const tmp12Result = width(obj2.useState(0), 2);
  const first2 = tmp12Result[0];
  MediaEngineStore = tmp12Result[1];
  const tmp12Result4 = width(obj2.useState(sum), 2);
  first3 = tmp12Result4[0];
  state = tmp12Result4[1];
  [tmp25, AppStates] = width(obj2.useState(first3 / 100), 2);
  width(obj2.useState(first3 / 100), 2);
  [r10089, NativePermissionTypes] = width(obj2.useState(width * (1 - first2 / -100)), 2);
  width(obj2.useState(width * (1 - first2 / -100)), 2);
  if (cResult[4] === auto) {
    let tmp27;
    let tmp28;
    if (cResult[5] === first3) {
      tmp27 = cResult[6];
      tmp28 = cResult[7];
    }
    const effect = obj2.useEffect(tmp27, tmp28);
    if (cResult[8] === auto) {
      if (cResult[9] === first2) {
        let tmp30;
        let tmp31;
        let tmp39;
        if (cResult[10] === width) {
          tmp30 = cResult[11];
          tmp31 = cResult[12];
        }
        const effect1 = obj2.useEffect(tmp30, tmp31);
        const _Symbol = Symbol;
        class D {
          constructor() {
            if (!auto) {
              NativePermissionTypes(width * (1 - first2 / -100));
            }
          }
        }
        if (tmp33 === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
          cResult[13] = U;
          class D {
            constructor() {
              if (!auto) {
                NativePermissionTypes(width * (1 - first2 / -100));
              }
            }
          }
        } else {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
        }
        closure_12 = tmp34;
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
          cResult[14] = tmp35;
          class D {
            constructor() {
              if (!auto) {
                NativePermissionTypes(width * (1 - first2 / -100));
              }
            }
          }
        } else {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
        }
        if (cResult[15] !== onThresholdChange) {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
          cResult[15] = onThresholdChange;
          class D {
            constructor() {
              if (!auto) {
                NativePermissionTypes(width * (1 - first2 / -100));
              }
            }
          }
          cResult[16] = tmp37;
        } else {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
        }
        if (cResult[17] !== stateFromStores) {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
          const items2 = [tmp34, ];
          class D {
            constructor() {
              if (!auto) {
                NativePermissionTypes(width * (1 - first2 / -100));
              }
            }
          }
          cResult[17] = stateFromStores;
          cResult[18] = tmp40;
          cResult[19] = items2;
          tmp39 = items2;
        } else {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
          tmp39 = cResult[19];
        }
        const effect2 = obj2.useEffect(tmp40, tmp39);
        obj2.useRef(false);
        ref = obj2.useRef(false);
        ref2 = obj2.useRef(null);
        if (cResult[20] === auto) {
          class U {
            constructor(arg0, arg1) {
              closure_3(arg1);
              closure_7(arg0);
            }
          }
          const effect3 = obj2.useEffect(tmp42, tmp43);
          if (auto) {
            let tmp57;
            class U {
              constructor(arg0, arg1) {
                closure_3(arg1);
                closure_7(arg0);
              }
            }
            const _Symbol3 = Symbol;
            class D {
              constructor() {
                if (!auto) {
                  NativePermissionTypes(width * (1 - first2 / -100));
                }
              }
            }
            if (first1) {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
            }
            if (cResult[25] !== first1) {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
              const string = tmp54.string;
              const t = tmp(tmp2[20]).t;
              class D {
                constructor() {
                  if (!auto) {
                    NativePermissionTypes(width * (1 - first2 / -100));
                  }
                }
              }
              cResult[25] = first1;
              cResult[26] = tmp55;
            } else {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
              function _e() {
                ref.current = false;
                if (null != ref2.current) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(ref2.current);
                  ref2.current = null;
                }
              }
              class D {
                constructor() {
                  if (!auto) {
                    NativePermissionTypes(width * (1 - first2 / -100));
                  }
                }
              }
              cResult[28] = _e;
              tmp57 = _e;
            } else {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
              tmp57 = cResult[28];
            }
            if (cResult[29] === tmp50) {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
              if (cResult[32] === tmp4.sensitivityBar) {
                class U {
                  constructor(arg0, arg1) {
                    closure_3(arg1);
                    closure_7(arg0);
                  }
                }
                if (cResult[35] === tmp4.sensitivity) {
                  class U {
                    constructor(arg0, arg1) {
                      closure_3(arg1);
                      closure_7(arg0);
                    }
                  }
                }
                class D {
                  constructor() {
                    if (!auto) {
                      NativePermissionTypes(width * (1 - first2 / -100));
                    }
                  }
                }
                tmp68[2] = tmp52;
                tmp68[3] = 0;
                tmp68[6] = tmp55;
                tmp68[7] = tmp58;
                tmp68[8] = tmp57;
                tmp68[9] = tmp4.sensitivity;
                tmp68[10] = tmp63;
                cResult[35] = tmp4.sensitivity;
                cResult[36] = 0;
                cResult[37] = tmp55;
                cResult[38] = tmp63;
                cResult[39] = closure_12(tmp(tmp2[21]).AccessibilityFocusView, tmp68);
                const tmp69 = closure_12(tmp(tmp2[21]).AccessibilityFocusView, tmp68);
              }
              class D {
                constructor() {
                  if (!auto) {
                    NativePermissionTypes(width * (1 - first2 / -100));
                  }
                }
              }
              let obj3 = { style: tmp4.sensitivityBar, children: tmp59 };
              cResult[32] = tmp4.sensitivityBar;
              cResult[33] = tmp59;
              cResult[34] = closure_12(first2, obj3);
              const tmp65 = closure_12(first2, obj3);
            }
            let obj4 = { style: items3 };
            items3 = [tmp4.sensitivityCommon, tmp50];
            cResult[29] = tmp50;
            cResult[30] = tmp4.sensitivityCommon;
            cResult[31] = closure_12(first2, obj4);
            const tmp62 = closure_12(first2, obj4);
          } else {
            class U {
              constructor(arg0, arg1) {
                closure_3(arg1);
                closure_7(arg0);
              }
            }
            if (cResult[43] !== tmp25) {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
              tmp46[0] = tmp25;
              class D {
                constructor() {
                  if (!auto) {
                    NativePermissionTypes(width * (1 - first2 / -100));
                  }
                }
              }
              cResult[44] = tmp46;
            } else {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
            }
            if (cResult[45] === tmp4.sensitivityCommon) {
              class U {
                constructor(arg0, arg1) {
                  closure_3(arg1);
                  closure_7(arg0);
                }
              }
            }
            class D {
              constructor() {
                if (!auto) {
                  NativePermissionTypes(width * (1 - first2 / -100));
                }
              }
            }
            let obj5 = { ref, style: items4 };
            items4 = [, , ];
            ({ sensitivityCommon: arr7[0], sensitivityMin: arr7[1] } = tmp4);
            items4[2] = tmp46;
            cResult[45] = tmp4.sensitivityCommon;
            cResult[46] = tmp4.sensitivityMin;
            cResult[47] = tmp46;
            cResult[48] = closure_12(first2, obj5);
            const tmp49 = closure_12(first2, obj5);
          }
        }
        function ve() {
          if (ref.current) {
            if (auto) {
              if (ref.current) {
                if (first1) {
                  if (null != ref.current) {
                    let _clearTimeout = clearTimeout;
                    clearTimeout(ref.current);
                    ref.current = null;
                  }
                  let AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                  let announce = AccessibilityAnnouncer.announce;
                  let intl = intl5.intl;
                  announce(intl.string(intl5.t.haLKZ0));
                } else {
                  const _setTimeout = setTimeout;
                  ref.current = setTimeout(() => {
                    ref.current = null;
                    const AccessibilityAnnouncer = auto(first1[19]).AccessibilityAnnouncer;
                    const announce = AccessibilityAnnouncer.announce;
                    const intl = auto(first1[20]).intl;
                    announce(intl.string(auto(first1[20]).t.X2hJL7));
                  }, 1000);
                }
                return () => {
                  if (null != ref.current) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(ref.current);
                    ref.current = null;
                  }
                };
              }
            } else {
              ref.current = false;
            }
          } else {
            tmp.current = true;
          }
        }
        const items5 = [auto, first1];
        cResult[20] = auto;
        cResult[21] = first1;
        cResult[22] = ve;
        cResult[23] = items5;
        tmp42 = ve;
        tmp43 = items5;
      }
    }
    class D {
      constructor() {
        if (!auto) {
          NativePermissionTypes(width * (1 - first2 / -100));
        }
      }
    }
    const items6 = [auto, first2, width];
    cResult[8] = auto;
    cResult[9] = first2;
    cResult[10] = width;
    cResult[11] = D;
    cResult[12] = items6;
    tmp31 = items6;
    tmp30 = D;
  }
  class W {
    constructor() {
      if (!auto) {
        AppStates(first3 / 100);
      }
    }
  }
  const items7 = [auto, first3];
  cResult[4] = auto;
  cResult[5] = first3;
  cResult[6] = W;
  cResult[7] = items7;
  tmp28 = items7;
  tmp27 = W;
}) : ((auto) => {
  let _undefined;
  let c10;
  let fn;
  let intl;
  let intl2;
  let intl4;
  let items10;
  let items11;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let num;
  let obj4;
  let obj5;
  let stringResult;
  let tmp17;
  auto = auto.auto;
  const onThresholdChange = auto.onThresholdChange;
  let width;
  let stateFromStores;
  let first2;
  let state;
  c10 = undefined;
  let ref;
  const threshold = auto.threshold;
  const tmp = ref();
  const sum = threshold + 100;
  stateFromStores.useRef(null);
  const ref1 = stateFromStores.useRef(null);
  stateFromStores.useRef(null);
  const tmp6 = width(stateFromStores.useState(first2.isCurrentUserSpeaking()), 2);
  const first = tmp6[0];
  let closure_3 = tmp6[1];
  width = onThresholdChange(first[15])().width;
  let obj = auto(first[16]);
  const items = [state];
  stateFromStores = obj.useStateFromStores(items, () => state.getState(), []);
  const tmp12 = width(stateFromStores.useState(0), 2);
  const first1 = tmp12[0];
  let closure_7 = tmp12[1];
  const tmp14 = width(stateFromStores.useState(sum), 2);
  first2 = tmp14[0];
  state = tmp14[1];
  const tmp16 = width(stateFromStores.useState(first2 / 100), 2);
  [tmp17, c10] = tmp16;
  const tmp18 = width(stateFromStores.useState(width * (1 - first1 / -100)), 2);
  let closure_11 = tmp18[1];
  const items1 = [auto, first2];
  const first3 = tmp18[0];
  const effect = stateFromStores.useEffect(() => {
    if (!auto) {
      _undefined(first2 / 100);
    }
  }, items1);
  const items2 = [auto, first1, width];
  const effect1 = stateFromStores.useEffect(() => {
    if (!auto) {
      closure_11(width * (1 - first1 / -100));
    }
  }, items2);
  const callback = stateFromStores.useCallback((arg0, arg1) => {
    closure_3(arg1);
    closure_7(arg0);
  }, []);
  const items3 = [callback, stateFromStores];
  const callback1 = stateFromStores.useCallback((arg0) => {
    state(arg0);
  }, []);
  const effect2 = stateFromStores.useEffect(() => {
    let _true;
    function listenOnlyIfWeHavePermission() {
      return obj(...arguments);
    }
    let obj = function _listenOnlyIfWeHavePermission2() {
      obj = _asyncToGenerator(async () => {
        let obj3;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj = { value, done: true };
            return obj;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                let closure_0 = tmp3;
                c1 = 1;
                c2 = 1;
                const obj4 = { value: obj3.hasPermission(constants.AUDIO, { showAuthorizationError: false }), done: false };
                obj3 = closure_2_1(first[17]);
                return obj4;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const tmp4 = value && !closure_128_0;
              if (tmp4) {
                mediaEngine = mediaEngine.getMediaEngine();
                mediaEngine.on(_true(first[18]).MediaEngineEvent.VoiceActivity, closure_1_12);
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            c2 = 3;
            throw tmp16;
          }
        }
      });
      return obj(...arguments);
    };
    if (stateFromStores === _undefined.ACTIVE) {
      let c0 = false;
      listenOnlyIfWeHavePermission();
      return () => {
        let c0 = true;
        const mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.removeListener(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, callback);
      };
    }
  }, items3);
  stateFromStores.useRef(false);
  ref = stateFromStores.useRef(false);
  const ref2 = stateFromStores.useRef(null);
  const items4 = [auto, first];
  const effect3 = stateFromStores.useEffect(() => {
    if (ref.current) {
      if (auto) {
        if (ref.current) {
          if (first) {
            if (null != ref.current) {
              let _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
            let AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            let announce = AccessibilityAnnouncer.announce;
            let intl = intl5.intl;
            announce(intl.string(intl5.t.haLKZ0));
          } else {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              ref.current = null;
              const AccessibilityAnnouncer = auto(first[19]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = auto(first[20]).intl;
              announce(intl.string(auto(first[20]).t.X2hJL7));
            }, 1000);
          }
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
          };
        }
      } else {
        ref.current = false;
      }
    } else {
      tmp.current = true;
    }
  }, items4);
  const tmp8 = onThresholdChange;
  if (auto) {
    let obj2 = {
      accessible: true,
      role: "meter",
      "aria-label": intl2.string(auto(first[20]).t.yZcOjo),
      "aria-valuenow": num,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuetext": stringResult,
      onAccessibilityFocus() {
          ref.current = true;
        },
      onAccessibilityBlur() {
          ref.current = false;
          if (null != ref2.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref2.current);
            ref2.current = null;
          }
        },
      style: tmp.sensitivity,
      children: callback(first1, obj4)
    };
    const tmp30 = first ? tmp.sensitivitySpeaking : tmp.sensitivityDefault;
    const AccessibilityFocusView = tmp10(tmp9[21]).AccessibilityFocusView;
    intl2 = tmp10(tmp9[20]).intl;
    num = 0;
    const tmp31 = ref;
    if (first) {
      num = 100;
    }
    const intl3 = tmp10(tmp9[20]).intl;
    const string = intl3.string;
    const t = tmp10(tmp9[20]).t;
    if (first) {
      stringResult = string(t.haLKZ0);
    } else {
      stringResult = string(t.X2hJL7);
    }
    let obj3 = { children: items6 };
    obj4 = { style: tmp.sensitivityBar, children: callback(first1, obj5) };
    obj5 = { style: items5 };
    items5 = [tmp.sensitivityCommon, tmp30];
    items6 = [callback(AccessibilityFocusView, obj2), ];
    const obj6 = { inset: true, children: intl4.string(auto(first[20]).t.W3K5Im) };
    const FormHint = tmp10(tmp9[22]).FormHint;
    intl4 = tmp10(tmp9[20]).intl;
    items6[1] = callback(FormHint, obj6);
    return tmp31(first1, obj3);
  } else {
    const obj9 = { ref, style: items7 };
    items7 = [, , ];
    const obj7 = { style: tmp.sensitivity, children: items10 };
    const obj8 = { style: tmp.sensitivityBar, children: items8 };
    ({ sensitivityCommon: arr6[0], sensitivityMin: arr6[1] } = tmp);
    const obj10 = { flex: tmp17 };
    items7[2] = obj10;
    items8 = [callback(first1, obj9), ];
    const obj11 = { ref: ref1, style: items9 };
    items9 = [, , ];
    ({ sensitivityCommon: arr8[0], sensitivityMax: arr8[1] } = tmp);
    const obj12 = { flex: 1 - tmp17 };
    items9[2] = obj12;
    items8[1] = callback(first1, obj11);
    items10 = [ref(first1, obj8), , ];
    const obj13 = { ref: ref2, style: items11 };
    items11 = [tmp.sensitivityFill, ];
    const obj14 = { left: first3 };
    items11[1] = obj14;
    items10[1] = callback(first1, obj13);
    const obj15 = {
      style: tmp.sensitivitySlider,
      value: sum,
      minimumValue: 0,
      maximumValue: 100,
      minimumTrackTintColor: "transparent",
      maximumTrackTintColor: "transparent",
      accessibilityLabel: intl.string(auto(first[20]).t["sqUm+k"]),
      onValueChange: callback1,
      onSlidingComplete: function handleSlidingComplete(arg0) {
          onThresholdChange(-1 * (100 - arg0));
        },
      onResponderGrant: fn
    };
    const tmp8Result = tmp8(first[24]);
    intl = tmp10(tmp9[20]).intl;
    fn = undefined;
    const tmp10Result = auto(first[23]);
    const tmp26 = ref;
    const tmp27 = first1;
    const tmp28 = callback;
    if (tmp10Result.isAndroid()) {
      fn = () => true;
    }
    items10[2] = tmp28(tmp8Result, obj15);
    return tmp26(tmp27, obj7);
  }
});
let result = size.fileFinishedImporting("components_native/common/VoiceSensitivity.tsx");

export default tmp4;