// === Module 9454: ClearAllIncomingRequestsConfirmation ===

// Module 9454 (ClearAllIncomingRequestsConfirmation)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import Text_Text from "Text/Text" /* 4892 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9447 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
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

export default ReactCompilerGating.isReactCompilerEnabled() ? ((incomingPendingRequestCount) => {
  const cResult = c.c(52);
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
    class C {
      constructor() {
        tmp = closure_0(false);
        obj = closure_0(closure_2[9]);
        intl = closure_0(closure_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_2[10]).t.R0RpRX));
        return;
      }
    }
    cResult[1] = C;
  } else {
    class C {
      constructor() {
        tmp = closure_0(false);
        obj = closure_0(closure_2[9]);
        intl = closure_0(closure_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_2[10]).t.R0RpRX));
        return;
      }
    }
  }
  dependencyMap = C;
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
  if (cResult[4] !== tmp4.closeButton) {
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
    tmp13[0] = tmp4.closeButton;
    cResult[4] = tmp4.closeButton;
    cResult[5] = tmp13;
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
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
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
    cResult[6] = tmp15;
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
  if (cResult[7] !== tmp13) {
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
    const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp10, source: first(6591), style: tmp13, onPress: tmp15 };
    const tmp19 = closure_7(first(9455), obj3);
    cResult[7] = tmp13;
    cResult[8] = tmp19;
    const tmp18 = first(9455);
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
  ({ container, content, header, headerText } = tmp4);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
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
    const stringResult1 = obj4.string(util.t.eVjfAu);
    cResult[9] = stringResult1;
    const tmp20 = stringResult1;
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
  if (cResult[10] !== tmp4.headerText) {
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
    const obj5 = { style: headerText, variant: "text-lg/bold", children: tmp20 };
    const tmp23 = closure_7(Text_Text.Text, obj5);
    cResult[10] = tmp4.headerText;
    cResult[11] = tmp23;
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
  if (cResult[12] === tmp4.header) {
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
    ({ body, noticeHeader } = tmp4);
    if (cResult[15] !== incomingPendingRequestCount) {
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
      const obj7 = { incomingRequestCount: incomingPendingRequestCount };
      const formatResult = obj6.format(util.t.jaXsA3, obj7);
      cResult[15] = incomingPendingRequestCount;
      cResult[16] = formatResult;
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
    if (cResult[17] === tmp4.noticeHeader) {
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
      if (cResult[20] === tmp4.body) {
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
        if (cResult[23] === tmp24) {
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
          if (cResult[26] === tmp4.content) {
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
            const _Symbol = Symbol;
            ({ footer, buttonWrapper } = tmp4);
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
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
              const stringResult2 = obj12.string(util.t.Eq9seb);
              cResult[29] = stringResult2;
              const tmp43 = stringResult2;
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
            if (cResult[30] !== tmp6) {
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
              const obj8 = { disabled: tmp6, loading: tmp6, variant: "destructive", size: "md", text: tmp43, onPress: T, grow: true };
              const tmp46 = closure_7(components_Button_Button.Button, obj8);
              cResult[30] = tmp6;
              cResult[31] = tmp46;
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
            if (cResult[32] === tmp4.buttonWrapper) {
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
              const _Symbol2 = Symbol;
              if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
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
                const obj9 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
                let intl = util.intl;
                obj9.text = intl.string(util.t["ETE/oC"]);
                obj9.onPress = first(5099).pop;
                const tmp53 = closure_7(components_Button_Button.Button, obj9);
                cResult[35] = tmp53;
                const tmp51 = tmp53;
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
              if (cResult[36] !== tmp4.buttonWrapper) {
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
                const obj10 = { style: tmp4.buttonWrapper, children: tmp51 };
                const tmp56 = closure_7(closure_5, obj10);
                cResult[36] = tmp4.buttonWrapper;
                cResult[37] = tmp56;
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
              if (cResult[38] === tmp47) {
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
                if (cResult[41] === tmp4.footer) {
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
                  if (cResult[44] === tmp4.container) {
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
                  const obj11 = { style: container, children: null };
                  const items = [tmp39, tmp62];
                  obj11.children = items;
                  const tmp69 = closure_9(closure_5, obj11);
                  cResult[44] = tmp4.container;
                  cResult[45] = tmp39;
                  cResult[46] = tmp62;
                  cResult[47] = tmp69;
                }
                const obj13 = { style: footer, children: tmp57 };
                const tmp65 = closure_7(closure_5, obj13);
                cResult[41] = tmp4.footer;
                cResult[42] = tmp57;
                cResult[43] = tmp65;
              }
              const obj14 = { bottom: true, children: null };
              const obj15 = { children: null };
              const items1 = [tmp47, tmp54];
              obj15.children = items1;
              obj14.children = closure_9(closure_8, obj15);
              const tmp61 = closure_7(common_SafeAreaView.SafeAreaPaddingView, obj14);
              cResult[38] = tmp47;
              cResult[39] = tmp54;
              cResult[40] = tmp61;
            }
            const obj16 = { style: buttonWrapper, children: tmp45 };
            const tmp50 = closure_7(closure_5, obj16);
            cResult[32] = tmp4.buttonWrapper;
            cResult[33] = tmp45;
            cResult[34] = tmp50;
          }
          const obj17 = { style: content, children: tmp35 };
          const tmp42 = closure_7(closure_6, obj17);
          cResult[26] = tmp4.content;
          cResult[27] = tmp35;
          cResult[28] = tmp42;
        }
        const obj18 = { children: null };
        const items2 = [tmp24, tmp31];
        obj18.children = items2;
        const tmp38 = closure_9(closure_8, obj18);
        cResult[23] = tmp24;
        cResult[24] = tmp31;
        cResult[25] = tmp38;
      }
      const obj19 = { style: body, children: tmp28 };
      const tmp34 = closure_7(closure_5, obj19);
      cResult[20] = tmp4.body;
      cResult[21] = tmp28;
      cResult[22] = tmp34;
    }
    const obj20 = { style: noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp26 };
    const tmp30 = closure_7(Text_Text.Text, obj20);
    cResult[17] = tmp4.noticeHeader;
    cResult[18] = tmp26;
    cResult[19] = tmp30;
  }
  const tmp25 = closure_7(closure_5, { style: header, children: tmp22 });
  cResult[12] = tmp4.header;
  cResult[13] = tmp22;
  cResult[14] = tmp25;
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : ((incomingRequestCount) => {
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
  const items1 = [tmp.closeButton];
  obj3.style = items1;
  obj3.onPress = function onPress() {
    return callback(callback1[8]).pop();
  };
  const items2 = [closure_7(callback(callback1[12]), obj3), ];
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.content, children: null };
  const obj6 = { children: null };
  const obj7 = { style: tmp.header, children: null };
  const obj8 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  const intl2 = require("util").intl;
  obj8.children = intl2.string(require("util").t.eVjfAu);
  obj7.children = closure_7(require("Text/Text").Text, obj8);
  const items3 = [closure_7(closure_5, obj7), ];
  const obj9 = { style: tmp.body, children: null };
  const obj10 = { style: tmp.noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: null };
  const intl3 = require("util").intl;
  obj10.children = intl3.format(require("util").t.jaXsA3, { incomingRequestCount: incomingRequestCount.incomingPendingRequestCount });
  obj9.children = closure_7(require("Text/Text").Text, obj10);
  items3[1] = closure_7(closure_5, obj9);
  obj6.children = items3;
  obj5.children = closure_9(closure_8, obj6);
  const items4 = [closure_7(closure_6, obj5), ];
  const obj11 = { style: tmp.footer, children: null };
  const obj12 = { bottom: true, children: null };
  const obj13 = { children: null };
  const obj14 = { style: tmp.buttonWrapper, children: null };
  const obj15 = { disabled: tmp3, loading: tmp3, variant: "destructive", size: "md", text: null, onPress: null, grow: true };
  const intl4 = require("util").intl;
  obj15.text = intl4.string(require("util").t.Eq9seb);
  obj15.onPress = callback2;
  obj14.children = closure_7(require("components/Button/Button").Button, obj15);
  const items5 = [closure_7(closure_5, obj14), ];
  const obj16 = { style: tmp.buttonWrapper, children: null };
  const obj17 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
  const intl5 = require("util").intl;
  obj17.text = intl5.string(require("util").t["ETE/oC"]);
  obj17.onPress = callback(callback1[8]).pop;
  obj16.children = closure_7(require("components/Button/Button").Button, obj17);
  items5[1] = closure_7(closure_5, obj16);
  obj13.children = items5;
  obj12.children = closure_9(closure_8, obj13);
  obj11.children = closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj12);
  items4[1] = closure_7(closure_5, obj11);
  obj4.children = items4;
  items2[1] = closure_9(closure_5, obj4);
  obj2.children = items2;
  obj.children = closure_9(closure_5, obj2);
  return closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj);
});