// === Module 9441: ClearAllIncomingRequestsConfirmation ===

// Module 9441 (ClearAllIncomingRequestsConfirmation)
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9434 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, incomingPendingRequestCount;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, closeButton: { marginRight: 8, alignSelf: "flex-end" }, content: obj3, container: obj4, footer: obj5, header: obj6, headerText: obj7, body: obj8, noticeHeader: obj9, buttonWrapper: obj10 };
obj2 = { display: "flex", flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, padding: nativeDefault.space.PX_16 };
obj4 = { display: "flex", flexDirection: "column", height: "100%", marginTop: nativeDefault.space.PX_24 };
obj5 = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj7 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj8 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj9 = { marginBottom: nativeDefault.space.PX_4 };
obj10 = { marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((incomingPendingRequestCount) => {
  let body;
  let buttonWrapper;
  let container;
  let content;
  let first;
  let footer;
  let header;
  let headerText;
  let intl;
  let items;
  let items1;
  let items2;
  let noticeHeader;
  let obj15;
  let require;
  let tmp10;
  let tmp20;
  let tmp6;
  let tmp8;
  const tmp2 = C;
  let obj = require("react");
  const cResult = obj.c(52);
  incomingPendingRequestCount = incomingPendingRequestCount.incomingPendingRequestCount;
  const tmp4 = closure_10();
  [tmp6, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      _require(false);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        _require(false);
        const presentFailedToast = ToastUtils.presentFailedToast;
        ToastUtils;
        const intl = intl6.intl;
        presentFailedToast(intl.string(intl6.t.R0RpRX));
      }
    }
    cResult[1] = C;
    tmp8 = C;
  } else {
    class C {
      constructor() {
        _require(false);
        const presentFailedToast = ToastUtils.presentFailedToast;
        ToastUtils;
        const intl = intl6.intl;
        presentFailedToast(intl.string(intl6.t.R0RpRX));
      }
    }
  }
  C = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
    cResult[2] = T;
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
    const stringResult = obj2.string(require("intl").t.cpT0Cq);
    cResult[3] = stringResult;
    tmp10 = stringResult;
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
  }
  if (cResult[4] !== tmp4.closeButton) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
    tmp13[0] = tmp4.closeButton;
    cResult[4] = tmp4.closeButton;
    cResult[5] = tmp13;
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
    cResult[6] = tmp15;
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
  }
  if (cResult[7] !== tmp13) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
    const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp10, source: first(tmp2[13]), style: tmp13, onPress: tmp15 };
    const tmp18 = first(tmp2[12]);
    cResult[7] = tmp13;
    cResult[8] = closure_7(tmp18, obj3);
    const tmp19 = closure_7(tmp18, obj3);
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
  }
  ({ container, content, header, headerText } = tmp4);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
    const stringResult1 = obj4.string(require("intl").t.eVjfAu);
    cResult[9] = stringResult1;
    tmp20 = stringResult1;
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
  }
  if (cResult[10] !== tmp4.headerText) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
    const obj5 = { style: headerText, variant: "text-lg/bold", children: tmp20 };
    cResult[10] = tmp4.headerText;
    cResult[11] = closure_7(require("Text/Text").Text, obj5);
    const tmp23 = closure_7(require("Text/Text").Text, obj5);
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
  }
  if (cResult[12] === tmp4.header) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(C);
      }
    }
    ({ body, noticeHeader } = tmp4);
    if (cResult[15] !== incomingPendingRequestCount) {
      class T {
        constructor() {
          _require(true);
          const obj = RelationshipActionCreatorsDefault;
          const result = obj.clearPendingRelationships();
          const nextPromise = result.then(first);
          nextPromise.catch(C);
        }
      }
      const obj7 = { incomingRequestCount: incomingPendingRequestCount };
      cResult[15] = incomingPendingRequestCount;
      cResult[16] = obj6.format(require("intl").t.jaXsA3, obj7);
      const formatResult = obj6.format(require("intl").t.jaXsA3, obj7);
    } else {
      class T {
        constructor() {
          _require(true);
          const obj = RelationshipActionCreatorsDefault;
          const result = obj.clearPendingRelationships();
          const nextPromise = result.then(first);
          nextPromise.catch(C);
        }
      }
    }
    if (cResult[17] === tmp4.noticeHeader) {
      class T {
        constructor() {
          _require(true);
          const obj = RelationshipActionCreatorsDefault;
          const result = obj.clearPendingRelationships();
          const nextPromise = result.then(first);
          nextPromise.catch(C);
        }
      }
      if (cResult[20] === tmp4.body) {
        class T {
          constructor() {
            _require(true);
            const obj = RelationshipActionCreatorsDefault;
            const result = obj.clearPendingRelationships();
            const nextPromise = result.then(first);
            nextPromise.catch(C);
          }
        }
        if (cResult[23] === tmp24) {
          class T {
            constructor() {
              _require(true);
              const obj = RelationshipActionCreatorsDefault;
              const result = obj.clearPendingRelationships();
              const nextPromise = result.then(first);
              nextPromise.catch(C);
            }
          }
          if (cResult[26] === tmp4.content) {
            let tmp43;
            class T {
              constructor() {
                _require(true);
                const obj = RelationshipActionCreatorsDefault;
                const result = obj.clearPendingRelationships();
                const nextPromise = result.then(first);
                nextPromise.catch(C);
              }
            }
            const _Symbol = Symbol;
            ({ footer, buttonWrapper } = tmp4);
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
              class T {
                constructor() {
                  _require(true);
                  const obj = RelationshipActionCreatorsDefault;
                  const result = obj.clearPendingRelationships();
                  const nextPromise = result.then(first);
                  nextPromise.catch(C);
                }
              }
              const stringResult2 = obj12.string(require("intl").t.Eq9seb);
              cResult[29] = stringResult2;
              tmp43 = stringResult2;
            } else {
              class T {
                constructor() {
                  _require(true);
                  const obj = RelationshipActionCreatorsDefault;
                  const result = obj.clearPendingRelationships();
                  const nextPromise = result.then(first);
                  nextPromise.catch(C);
                }
              }
            }
            if (cResult[30] !== tmp6) {
              class T {
                constructor() {
                  _require(true);
                  const obj = RelationshipActionCreatorsDefault;
                  const result = obj.clearPendingRelationships();
                  const nextPromise = result.then(first);
                  nextPromise.catch(C);
                }
              }
              const obj8 = { disabled: tmp6, loading: tmp6, variant: "destructive", size: "md", text: tmp43, onPress: T, grow: true };
              cResult[30] = tmp6;
              cResult[31] = closure_7(require("components/Button/Button").Button, obj8);
              const tmp46 = closure_7(require("components/Button/Button").Button, obj8);
            } else {
              class T {
                constructor() {
                  _require(true);
                  const obj = RelationshipActionCreatorsDefault;
                  const result = obj.clearPendingRelationships();
                  const nextPromise = result.then(first);
                  nextPromise.catch(C);
                }
              }
            }
            if (cResult[32] === tmp4.buttonWrapper) {
              let tmp51;
              class T {
                constructor() {
                  _require(true);
                  const obj = RelationshipActionCreatorsDefault;
                  const result = obj.clearPendingRelationships();
                  const nextPromise = result.then(first);
                  nextPromise.catch(C);
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                class T {
                  constructor() {
                    _require(true);
                    const obj = RelationshipActionCreatorsDefault;
                    const result = obj.clearPendingRelationships();
                    const nextPromise = result.then(first);
                    nextPromise.catch(C);
                  }
                }
                const obj9 = { variant: "secondary", size: "md", text: intl.string(require("intl").t["ETE/oC"]), onPress: first(tmp2[8]).pop, grow: true };
                const Button = require("components/Button/Button").Button;
                intl = require("intl").intl;
                const tmp53 = closure_7(Button, obj9);
                cResult[35] = tmp53;
                tmp51 = tmp53;
              } else {
                class T {
                  constructor() {
                    _require(true);
                    const obj = RelationshipActionCreatorsDefault;
                    const result = obj.clearPendingRelationships();
                    const nextPromise = result.then(first);
                    nextPromise.catch(C);
                  }
                }
              }
              if (cResult[36] !== tmp4.buttonWrapper) {
                class T {
                  constructor() {
                    _require(true);
                    const obj = RelationshipActionCreatorsDefault;
                    const result = obj.clearPendingRelationships();
                    const nextPromise = result.then(first);
                    nextPromise.catch(C);
                  }
                }
                const obj10 = { style: tmp4.buttonWrapper, children: tmp51 };
                cResult[36] = tmp4.buttonWrapper;
                cResult[37] = closure_7(closure_5, obj10);
                const tmp56 = closure_7(closure_5, obj10);
              } else {
                class T {
                  constructor() {
                    _require(true);
                    const obj = RelationshipActionCreatorsDefault;
                    const result = obj.clearPendingRelationships();
                    const nextPromise = result.then(first);
                    nextPromise.catch(C);
                  }
                }
              }
              if (cResult[38] === tmp47) {
                class T {
                  constructor() {
                    _require(true);
                    const obj = RelationshipActionCreatorsDefault;
                    const result = obj.clearPendingRelationships();
                    const nextPromise = result.then(first);
                    nextPromise.catch(C);
                  }
                }
                if (cResult[41] === tmp4.footer) {
                  class T {
                    constructor() {
                      _require(true);
                      const obj = RelationshipActionCreatorsDefault;
                      const result = obj.clearPendingRelationships();
                      const nextPromise = result.then(first);
                      nextPromise.catch(C);
                    }
                  }
                  if (cResult[44] === tmp4.container) {
                    class T {
                      constructor() {
                        _require(true);
                        const obj = RelationshipActionCreatorsDefault;
                        const result = obj.clearPendingRelationships();
                        const nextPromise = result.then(first);
                        nextPromise.catch(C);
                      }
                    }
                  }
                  const obj11 = { style: container, children: items };
                  items = [tmp39, tmp62];
                  cResult[44] = tmp4.container;
                  cResult[45] = tmp39;
                  cResult[46] = tmp62;
                  cResult[47] = closure_9(closure_5, obj11);
                  const tmp69 = closure_9(closure_5, obj11);
                }
                const obj13 = { style: footer, children: tmp57 };
                cResult[41] = tmp4.footer;
                cResult[42] = tmp57;
                cResult[43] = closure_7(closure_5, obj13);
                const tmp65 = closure_7(closure_5, obj13);
              }
              const obj14 = { bottom: true, children: closure_9(closure_8, obj15) };
              obj15 = { children: items1 };
              items1 = [tmp47, tmp54];
              const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
              cResult[38] = tmp47;
              cResult[39] = tmp54;
              cResult[40] = closure_7(SafeAreaPaddingView, obj14);
              const tmp61 = closure_7(SafeAreaPaddingView, obj14);
            }
            const obj16 = { style: buttonWrapper, children: tmp45 };
            cResult[32] = tmp4.buttonWrapper;
            cResult[33] = tmp45;
            cResult[34] = closure_7(closure_5, obj16);
            const tmp50 = closure_7(closure_5, obj16);
          }
          const obj17 = { style: content, children: tmp35 };
          cResult[26] = tmp4.content;
          cResult[27] = tmp35;
          cResult[28] = closure_7(closure_6, obj17);
          const tmp42 = closure_7(closure_6, obj17);
        }
        const obj18 = { children: items2 };
        items2 = [tmp24, tmp31];
        cResult[23] = tmp24;
        cResult[24] = tmp31;
        cResult[25] = closure_9(closure_8, obj18);
        const tmp38 = closure_9(closure_8, obj18);
      }
      const obj19 = { style: body, children: tmp28 };
      cResult[20] = tmp4.body;
      cResult[21] = tmp28;
      cResult[22] = closure_7(closure_5, obj19);
      const tmp34 = closure_7(closure_5, obj19);
    }
    const obj20 = { style: noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp26 };
    cResult[17] = tmp4.noticeHeader;
    cResult[18] = tmp26;
    cResult[19] = closure_7(require("Text/Text").Text, obj20);
    const tmp30 = closure_7(require("Text/Text").Text, obj20);
  }
  cResult[12] = tmp4.header;
  cResult[13] = tmp22;
  cResult[14] = closure_7(closure_5, { style: header, children: tmp22 });
  const tmp25 = closure_7(closure_5, { style: header, children: tmp22 });
}) : ((incomingPendingRequestCount) => {
  let Button;
  let Button2;
  let SafeAreaPaddingView2;
  let Text;
  let Text2;
  let _undefined;
  let c0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj12;
  let obj13;
  let obj15;
  let obj17;
  let obj2;
  let obj6;
  let obj8;
  let tmp3;
  _require = undefined;
  incomingPendingRequestCount = incomingPendingRequestCount.incomingPendingRequestCount;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c0] = tmp2;
  const callback = react.useCallback(() => {
    _undefined(false);
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    _undefined(false);
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const intl = intl6.intl;
    presentFailedToast(intl.string(intl6.t.R0RpRX));
  }, []);
  const items = [callback, callback1];
  const callback2 = react.useCallback(() => {
    _undefined(true);
    const obj = RelationshipActionCreatorsDefault;
    const result = obj.clearPendingRelationships();
    const nextPromise = result.then(callback);
    nextPromise.catch(callback1);
  }, items);
  let obj = { top: true, children: closure_9(closure_5, obj2) };
  obj2 = { style: tmp.root, children: items2 };
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj3 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(require("intl").t.cpT0Cq),
    source: callback(callback1[13]),
    style: items1,
    onPress() {
      const arr = callback(callback1[8]);
      return arr.pop();
    }
  };
  const tmp7 = callback(callback1[12]);
  intl = require("intl").intl;
  items1 = [tmp.closeButton];
  items2 = [closure_7(tmp7, obj3), ];
  const obj4 = { style: tmp.container, children: items4 };
  const obj5 = { style: tmp.content, children: closure_9(closure_8, obj6) };
  obj6 = { children: items3 };
  const obj7 = { style: tmp.header, children: closure_7(Text, obj8) };
  obj8 = { style: tmp.headerText, variant: "text-lg/bold", children: intl2.string(require("intl").t.eVjfAu) };
  Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items3 = [closure_7(closure_5, obj7), ];
  const obj9 = { style: tmp.body, children: closure_7(Text2, obj10) };
  obj10 = { style: tmp.noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: intl3.format(require("intl").t.jaXsA3, { incomingRequestCount: incomingPendingRequestCount }) };
  Text2 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items3[1] = closure_7(closure_5, obj9);
  items4 = [closure_7(closure_6, obj5), ];
  const obj11 = { style: tmp.footer, children: closure_7(SafeAreaPaddingView2, obj12) };
  obj12 = { bottom: true, children: closure_9(closure_8, obj13) };
  obj13 = { children: items5 };
  const obj14 = { style: tmp.buttonWrapper, children: closure_7(Button, obj15) };
  SafeAreaPaddingView2 = require("common/SafeAreaView").SafeAreaPaddingView;
  obj15 = { disabled: tmp3, loading: tmp3, variant: "destructive", size: "md", text: intl4.string(require("intl").t.Eq9seb), onPress: callback2, grow: true };
  Button = require("components/Button/Button").Button;
  intl4 = require("intl").intl;
  items5 = [closure_7(closure_5, obj14), ];
  const obj16 = { style: tmp.buttonWrapper, children: closure_7(Button2, obj17) };
  obj17 = { variant: "secondary", size: "md", text: intl5.string(require("intl").t["ETE/oC"]), onPress: callback(callback1[8]).pop, grow: true };
  Button2 = require("components/Button/Button").Button;
  intl5 = require("intl").intl;
  items5[1] = closure_7(closure_5, obj16);
  items4[1] = closure_7(closure_5, obj11);
  items2[1] = closure_9(closure_5, obj4);
  return closure_7(SafeAreaPaddingView, obj);
});
let result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmation.tsx");

export default tmp5;