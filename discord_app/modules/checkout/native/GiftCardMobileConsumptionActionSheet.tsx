// === Module 7094: GiftCardMobileConsumptionActionSheet ===

// Module 7094 (GiftCardMobileConsumptionActionSheet)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef2271 from "module_2271" /* 2271 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { sheet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: null, illustration: null, body: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.container = { paddingHorizontal: nativeDefault.space.PX_16 };
const obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.illustration = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
obj2.body = { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  const cResult = markAsDismissed(576).c(34);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_8();
  const bottom = useSafeAreaInsetsDefault().bottom;
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  if (cResult[0] !== markAsDismissed) {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
        return;
      }
    }
    const items = [markAsDismissed];
    cResult[0] = markAsDismissed;
    cResult[1] = S;
    cResult[2] = items;
    let tmp7 = items;
  } else {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
        return;
      }
    }
    tmp7 = cResult[2];
  }
  const effect = obj2.useEffect(S, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
        return;
      }
    }
    const items1 = [];
    cResult[3] = tmp11;
    cResult[4] = items1;
    let tmp10 = items1;
  } else {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
        return;
      }
    }
    tmp10 = cResult[4];
  }
  const effect1 = obj2.useEffect(tmp11, tmp10);
  if (cResult[5] !== markAsDismissed) {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
        return;
      }
    }
    cResult[5] = markAsDismissed;
    cResult[6] = tmp14;
  } else {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
        return;
      }
    }
  }
  noop = tmp14;
  if (cResult[7] !== tmp14) {
    class A {
      constructor() {
        return closure_3(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[7] = tmp14;
    cResult[8] = A;
  } else {
    class A {
      constructor() {
        return closure_3(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[9] !== bottom) {
    class A {
      constructor() {
        return closure_3(ContentDismissActionType.USER_DISMISS);
      }
    }
    tmp17[0] = bottom;
    cResult[9] = bottom;
    cResult[10] = tmp17;
  } else {
    class A {
      constructor() {
        return closure_3(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[11] === tmp4.container) {
    class A {
      constructor() {
        return closure_3(ContentDismissActionType.USER_DISMISS);
      }
    }
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
      const tmp19 = closure_6(tmp(7095).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 });
      cResult[14] = tmp19;
      const tmp18 = tmp19;
    } else {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[15] !== tmp4.illustration) {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj3 = { style: tmp4.illustration, children: tmp18 };
      const tmp22 = closure_6(View, obj3);
      cResult[15] = tmp4.illustration;
      cResult[16] = tmp22;
    } else {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
      const stringResult = obj4.string(tmp5(2271).V3DI1E);
      cResult[17] = stringResult;
      const tmp23 = stringResult;
    } else {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[18] !== tmp4.body) {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp4.body, children: tmp23 };
      const tmp26 = closure_6(tmp(5086).Text, obj5);
      cResult[18] = tmp4.body;
      cResult[19] = tmp26;
    } else {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
      const stringResult1 = obj6.string(tmp5(2271).YZePWx);
      cResult[20] = stringResult1;
      const tmp27 = stringResult1;
    } else {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[21] !== tmp14) {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj7 = {
        size: "lg",
        variant: "secondary",
        grow: true,
        text: tmp27,
        onPress() {
              return tmp14(ContentDismissActionType.USER_DISMISS);
            }
      };
      const tmp30 = closure_6(tmp(5375).Button, obj7);
      cResult[21] = tmp14;
      cResult[22] = tmp30;
    } else {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[23] === tmp20) {
      class A {
        constructor() {
          return closure_3(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const obj8 = { spacing: tmp5(587).space.PX_16, children: null };
    const items2 = [tmp20, tmp25, tmp29];
    obj8.children = items2;
    const tmp33 = closure_7(tmp(5373).Stack, obj8);
    cResult[23] = tmp20;
    cResult[24] = tmp25;
    cResult[25] = tmp29;
    cResult[26] = tmp33;
  }
  const items3 = [tmp4.container, tmp17];
  cResult[11] = tmp4.container;
  cResult[12] = tmp17;
  cResult[13] = items3;
  let obj = markAsDismissed(576);
}) : (function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  noop = undefined;
  const tmp = closure_8();
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = noop.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = noop.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  noop = noop.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items1);
  let obj = {
    startExpanded: true,
    backgroundStyles: tmp.sheet,
    onDismiss() {
      return closure_3(ContentDismissActionType.USER_DISMISS);
    },
    children: null
  };
  const obj2 = { style: null, children: null };
  const items2 = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.style = items2;
  const obj3 = { spacing: nativeDefault.space.PX_16, children: null };
  const items3 = [closure_6(View, { style: tmp.illustration, children: closure_6(markAsDismissed(7095).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) }), , ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: null };
  const intl = markAsDismissed(1126).intl;
  obj5.children = intl.string(_modDef2271.V3DI1E);
  items3[1] = closure_6(markAsDismissed(5086).Text, obj5);
  const obj6 = { size: "lg", variant: "secondary", grow: true, text: null, onPress: null };
  const intl2 = markAsDismissed(1126).intl;
  obj6.text = intl2.string(_modDef2271.YZePWx);
  obj6.onPress = function onPress() {
    return closure_3(ContentDismissActionType.USER_DISMISS);
  };
  items3[2] = closure_6(markAsDismissed(5375).Button, obj6);
  obj3.children = items3;
  obj2.children = closure_7(markAsDismissed(5373).Stack, obj3);
  obj.children = closure_6(View, obj2);
  return closure_6(markAsDismissed(6829).BottomSheet, obj);
});