// === Module 7012: ClearAllIncomingRequestsConfirmation ===

// Module 7012 (ClearAllIncomingRequestsConfirmation)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6803 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7004 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { root: { display: "flex", flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", paddingTop: nativeDefault.space.PX_24 }, closeButton: { marginRight: 8, alignSelf: "flex-end" }, content: null, container: null, footer: null, header: null, headerText: null, body: null, noticeHeader: null, buttonWrapper: null };
let obj3 = { display: "flex", flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", paddingTop: nativeDefault.space.PX_24 };
obj2.content = { flexGrow: 1, padding: nativeDefault.space.PX_16 };
let obj4 = { flexGrow: 1, padding: nativeDefault.space.PX_16 };
obj2.container = { display: "flex", flexDirection: "column", height: "100%", marginTop: nativeDefault.space.PX_24 };
let obj5 = { display: "flex", flexDirection: "column", height: "100%", marginTop: nativeDefault.space.PX_24 };
obj2.footer = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.header = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
let obj7 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj8 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj2.body = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj9 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.noticeHeader = { marginBottom: nativeDefault.space.PX_4 };
let obj10 = { marginBottom: nativeDefault.space.PX_4 };
obj2.buttonWrapper = { marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj11 = { marginBottom: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  const cResult = c.c(50);
  incomingPendingRequestCount = incomingPendingRequestCount.incomingPendingRequestCount;
  const tmp4 = closure_10();
  [tmp6, require] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      _require(false);
      ModalActionCreatorsDefault.pop();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      _require(false);
      const intl = util.intl;
      ToastUtils.presentFailedToast(intl.string(util.t.R0RpRX));
    };
    cResult[1] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  dependencyMap = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        tmp = closure_0(true);
        obj = closure_1(closure_2[11]);
        result = obj.clearPendingRelationships();
        nextPromise = result.then(closure_1);
        catchPromise = nextPromise.catch(closure_2);
        return;
      }
    }
    cResult[2] = T;
  } else {
    class T {
      constructor() {
        tmp = closure_0(true);
        obj = closure_1(closure_2[11]);
        result = obj.clearPendingRelationships();
        nextPromise = result.then(closure_1);
        catchPromise = nextPromise.catch(closure_2);
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        tmp = closure_0(true);
        obj = closure_1(closure_2[11]);
        result = obj.clearPendingRelationships();
        nextPromise = result.then(closure_1);
        catchPromise = nextPromise.catch(closure_2);
        return;
      }
    }
    const stringResult = obj2.string(util.t.cpT0Cq);
    cResult[3] = stringResult;
    const tmp10 = stringResult;
  } else {
    class T {
      constructor() {
        tmp = closure_0(true);
        obj = closure_1(closure_2[11]);
        result = obj.clearPendingRelationships();
        nextPromise = result.then(closure_1);
        catchPromise = nextPromise.catch(closure_2);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
    cResult[4] = X;
  } else {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
  }
  if (cResult[5] !== tmp4.closeButton) {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
    const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp10, source: first(6767), style: tmp4.closeButton, onPress: X };
    const tmp16 = closure_7(first(7013), obj3);
    cResult[5] = tmp4.closeButton;
    cResult[6] = tmp16;
    const tmp15 = first(7013);
  } else {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
  }
  ({ container, content, header, headerText } = tmp4);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
    const stringResult1 = obj4.string(util.t.eVjfAu);
    cResult[7] = stringResult1;
    const tmp17 = stringResult1;
  } else {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
  }
  if (cResult[8] !== tmp4.headerText) {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
    const obj5 = { style: headerText, variant: "text-lg/bold", children: tmp17 };
    const tmp20 = closure_7(Text_Text.Text, obj5);
    cResult[8] = tmp4.headerText;
    cResult[9] = tmp20;
  } else {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
  }
  if (cResult[10] === tmp4.header) {
    class X {
      constructor() {
        arr = closure_1(closure_2[8]);
        return arr.pop();
      }
    }
    ({ body, noticeHeader } = tmp4);
    if (cResult[13] !== incomingPendingRequestCount) {
      class X {
        constructor() {
          arr = closure_1(closure_2[8]);
          return arr.pop();
        }
      }
      const obj7 = { incomingRequestCount: incomingPendingRequestCount };
      const formatResult = obj6.format(util.t.jaXsA3, obj7);
      cResult[13] = incomingPendingRequestCount;
      cResult[14] = formatResult;
    } else {
      class X {
        constructor() {
          arr = closure_1(closure_2[8]);
          return arr.pop();
        }
      }
    }
    if (cResult[15] === tmp4.noticeHeader) {
      class X {
        constructor() {
          arr = closure_1(closure_2[8]);
          return arr.pop();
        }
      }
      if (cResult[18] === tmp4.body) {
        class X {
          constructor() {
            arr = closure_1(closure_2[8]);
            return arr.pop();
          }
        }
        if (cResult[21] === tmp21) {
          class X {
            constructor() {
              arr = closure_1(closure_2[8]);
              return arr.pop();
            }
          }
          if (cResult[24] === tmp4.content) {
            class X {
              constructor() {
                arr = closure_1(closure_2[8]);
                return arr.pop();
              }
            }
            const _Symbol = Symbol;
            ({ footer, buttonWrapper } = tmp4);
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor() {
                  arr = closure_1(closure_2[8]);
                  return arr.pop();
                }
              }
              const stringResult2 = obj12.string(util.t.Eq9seb);
              cResult[27] = stringResult2;
              const tmp40 = stringResult2;
            } else {
              class X {
                constructor() {
                  arr = closure_1(closure_2[8]);
                  return arr.pop();
                }
              }
            }
            if (cResult[28] !== tmp6) {
              class X {
                constructor() {
                  arr = closure_1(closure_2[8]);
                  return arr.pop();
                }
              }
              const obj8 = { disabled: tmp6, loading: tmp6, variant: "destructive", size: "md", text: tmp40, onPress: T, grow: true };
              const tmp43 = closure_7(components_Button_Button.Button, obj8);
              cResult[28] = tmp6;
              cResult[29] = tmp43;
            } else {
              class X {
                constructor() {
                  arr = closure_1(closure_2[8]);
                  return arr.pop();
                }
              }
            }
            if (cResult[30] === tmp4.buttonWrapper) {
              class X {
                constructor() {
                  arr = closure_1(closure_2[8]);
                  return arr.pop();
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                class X {
                  constructor() {
                    arr = closure_1(closure_2[8]);
                    return arr.pop();
                  }
                }
                const obj9 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
                let intl = util.intl;
                obj9.text = intl.string(util.t["ETE/oC"]);
                obj9.onPress = first(5940).pop;
                const tmp50 = closure_7(components_Button_Button.Button, obj9);
                cResult[33] = tmp50;
                const tmp48 = tmp50;
              } else {
                class X {
                  constructor() {
                    arr = closure_1(closure_2[8]);
                    return arr.pop();
                  }
                }
              }
              if (cResult[34] !== tmp4.buttonWrapper) {
                class X {
                  constructor() {
                    arr = closure_1(closure_2[8]);
                    return arr.pop();
                  }
                }
                const obj10 = { style: tmp4.buttonWrapper, children: tmp48 };
                const tmp53 = closure_7(closure_5, obj10);
                cResult[34] = tmp4.buttonWrapper;
                cResult[35] = tmp53;
              } else {
                class X {
                  constructor() {
                    arr = closure_1(closure_2[8]);
                    return arr.pop();
                  }
                }
              }
              if (cResult[36] === tmp44) {
                class X {
                  constructor() {
                    arr = closure_1(closure_2[8]);
                    return arr.pop();
                  }
                }
                if (cResult[39] === tmp4.footer) {
                  class X {
                    constructor() {
                      arr = closure_1(closure_2[8]);
                      return arr.pop();
                    }
                  }
                  if (cResult[42] === tmp4.container) {
                    class X {
                      constructor() {
                        arr = closure_1(closure_2[8]);
                        return arr.pop();
                      }
                    }
                  }
                  const obj11 = { style: container, children: null };
                  const items = [tmp36, tmp59];
                  obj11.children = items;
                  const tmp66 = closure_9(closure_5, obj11);
                  cResult[42] = tmp4.container;
                  cResult[43] = tmp36;
                  cResult[44] = tmp59;
                  cResult[45] = tmp66;
                }
                const obj13 = { style: footer, children: tmp54 };
                const tmp62 = closure_7(closure_5, obj13);
                cResult[39] = tmp4.footer;
                cResult[40] = tmp54;
                cResult[41] = tmp62;
              }
              const obj14 = { bottom: true, children: null };
              const obj15 = { children: null };
              const items1 = [tmp44, tmp51];
              obj15.children = items1;
              obj14.children = closure_9(closure_8, obj15);
              const tmp58 = closure_7(common_SafeAreaView.SafeAreaPaddingView, obj14);
              cResult[36] = tmp44;
              cResult[37] = tmp51;
              cResult[38] = tmp58;
            }
            const obj16 = { style: buttonWrapper, children: tmp42 };
            const tmp47 = closure_7(closure_5, obj16);
            cResult[30] = tmp4.buttonWrapper;
            cResult[31] = tmp42;
            cResult[32] = tmp47;
          }
          const obj17 = { style: content, children: tmp32 };
          const tmp39 = closure_7(closure_6, obj17);
          cResult[24] = tmp4.content;
          cResult[25] = tmp32;
          cResult[26] = tmp39;
        }
        const obj18 = { children: null };
        const items2 = [tmp21, tmp28];
        obj18.children = items2;
        const tmp35 = closure_9(closure_8, obj18);
        cResult[21] = tmp21;
        cResult[22] = tmp28;
        cResult[23] = tmp35;
      }
      const obj19 = { style: body, children: tmp25 };
      const tmp31 = closure_7(closure_5, obj19);
      cResult[18] = tmp4.body;
      cResult[19] = tmp25;
      cResult[20] = tmp31;
    }
    const obj20 = { style: noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp23 };
    const tmp27 = closure_7(Text_Text.Text, obj20);
    cResult[15] = tmp4.noticeHeader;
    cResult[16] = tmp23;
    cResult[17] = tmp27;
  }
  const tmp22 = closure_7(closure_5, { style: header, children: tmp19 });
  cResult[10] = tmp4.header;
  cResult[11] = tmp19;
  cResult[12] = tmp22;
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : (function ClearAllIncomingRequestsConfirmationModal(incomingRequestCount) {
  _require = undefined;
  const tmp = closure_10();
  [tmp3, c0] = noop.useState(false);
  const callback = noop.useCallback(() => {
    _undefined(false);
    ModalActionCreatorsDefault.pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    _undefined(false);
    const intl = util.intl;
    ToastUtils.presentFailedToast(intl.string(util.t.R0RpRX));
  }, []);
  const items = [callback, callback1];
  const callback2 = noop.useCallback(() => {
    _undefined(true);
    const result = RelationshipActionCreatorsDefault.clearPendingRelationships();
    result.then(callback).catch(callback1);
  }, items);
  let obj = { top: true, children: null };
  const obj2 = { style: tmp.root, children: null };
  const obj3 = { accessibilityRole: "button", accessibilityLabel: null, source: null, style: null, onPress: null };
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  let intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
  obj3.source = callback(callback1[13]);
  obj3.style = tmp.closeButton;
  obj3.onPress = function onPress() {
    return callback(callback1[8]).pop();
  };
  const items1 = [closure_7(callback(callback1[12]), obj3), ];
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.content, children: null };
  const obj6 = { children: null };
  const obj7 = { style: tmp.header, children: null };
  const obj8 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  const intl2 = require("util").intl;
  obj8.children = intl2.string(require("util").t.eVjfAu);
  obj7.children = closure_7(require("Text/Text").Text, obj8);
  const items2 = [closure_7(closure_5, obj7), ];
  const obj9 = { style: tmp.body, children: null };
  const obj10 = { style: tmp.noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: null };
  const intl3 = require("util").intl;
  obj10.children = intl3.format(require("util").t.jaXsA3, { incomingRequestCount: incomingRequestCount.incomingPendingRequestCount });
  obj9.children = closure_7(require("Text/Text").Text, obj10);
  items2[1] = closure_7(closure_5, obj9);
  obj6.children = items2;
  obj5.children = closure_9(closure_8, obj6);
  const items3 = [closure_7(closure_6, obj5), ];
  const obj11 = { style: tmp.footer, children: null };
  const obj12 = { bottom: true, children: null };
  const obj13 = { children: null };
  const obj14 = { style: tmp.buttonWrapper, children: null };
  const obj15 = { disabled: tmp3, loading: tmp3, variant: "destructive", size: "md", text: null, onPress: null, grow: true };
  const intl4 = require("util").intl;
  obj15.text = intl4.string(require("util").t.Eq9seb);
  obj15.onPress = callback2;
  obj14.children = closure_7(require("components/Button/Button").Button, obj15);
  const items4 = [closure_7(closure_5, obj14), ];
  const obj16 = { style: tmp.buttonWrapper, children: null };
  const obj17 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
  const intl5 = require("util").intl;
  obj17.text = intl5.string(require("util").t["ETE/oC"]);
  obj17.onPress = callback(callback1[8]).pop;
  obj16.children = closure_7(require("components/Button/Button").Button, obj17);
  items4[1] = closure_7(closure_5, obj16);
  obj13.children = items4;
  obj12.children = closure_9(closure_8, obj13);
  obj11.children = closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj12);
  items3[1] = closure_7(closure_5, obj11);
  obj4.children = items3;
  items1[1] = closure_9(closure_5, obj4);
  obj2.children = items1;
  obj.children = closure_9(closure_5, obj2);
  return closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj);
});