// === Module 11501: AutomatedUnderageAppealActionSheet ===

// Module 11501 (AutomatedUnderageAppealActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5915 */;
import TableRow from "TableRow" /* 6184 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import SafetyHubActionCreators from "SafetyHubActionCreators" /* 11498 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11500 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 5920 */;

require = fn;
let View = fn(17).View;
const SafetyHubConstants = fn(5921);
({ AGE_APPEAL_ACTION_SHEET_NAME: metroRequire, SafetyHubLinks: closure_7 } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, header: { alignItems: "center" }, content: null, moreInfo: null, learnMore: null, footer: null, number: null };
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.content = { flex: 1, gap: nativeDefault.space.PX_16 };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj2.moreInfo = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.learnMore = { marginTop: nativeDefault.space.PX_12, textAlign: "center", paddingBottom: nativeDefault.space.PX_32 };
let obj6 = { marginTop: nativeDefault.space.PX_12, textAlign: "center", paddingBottom: nativeDefault.space.PX_32 };
obj2.footer = { marginTop: nativeDefault.space.PX_8 };
let size = { alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.number = size;
let closure_10 = createStyles.createStyles(obj2);
let obj8 = { title: null, description: null };
let intl = fn(1126).intl;
obj8.title = intl.string(fn(1126).t["1+E7LP"]);
let intl2 = fn(1126).intl;
obj8.description = intl2.string(fn(1126).t["BXiat/"]);
let items = [obj8, , ];
let obj9 = { title: null, description: null };
let intl3 = fn(1126).intl;
obj9.title = intl3.string(fn(1126).t.iMQXtK);
let intl4 = fn(1126).intl;
obj9.description = intl4.string(fn(1126).t.oQ0vwu);
items[1] = obj9;
let obj10 = { title: null, description: null };
let intl5 = fn(1126).intl;
obj10.title = intl5.string(fn(1126).t["oY/z1Q"]);
let intl6 = fn(1126).intl;
obj10.description = intl6.string(fn(1126).t.wtj02W);
items[2] = obj10;
const ReactCompilerGating = fn(558);
let obj7 = { marginTop: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AutomatedUnderageAppealActionSheet(onClose) {
  const cResult = onClose(576).c(53);
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [onComplete];
    const fn = function p() {
      return onComplete.getAgeVerificationWebviewUrl();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = onClose(576);
  const stateFromStores = onClose(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [onComplete];
    class E {
      constructor() {
        return closure_5.getIsLoadingAgeVerification();
      }
    }
    cResult[2] = items1;
    cResult[3] = E;
    let tmp10 = E;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = onClose(504);
  const stateFromStores1 = onClose(504).useStateFromStores(tmp9, tmp10);
  const bottom = classificationId(1630)().bottom;
  if (cResult[4] !== onClose) {
    class T {
      constructor() {
        if (onClose != null) {
          tmpResult = tmp();
        }
        obj = closure_1(closure_2[12]);
        closeResult = obj.close();
        return;
      }
    }
    cResult[4] = onClose;
    class E {
      constructor() {
        return closure_5.getIsLoadingAgeVerification();
      }
    }
    cResult[5] = T;
  } else {
    class T {
      constructor() {
        if (onClose != null) {
          tmpResult = tmp();
        }
        obj = closure_1(closure_2[12]);
        closeResult = obj.close();
        return;
      }
    }
  }
  View = T;
  if (cResult[6] !== T) {
    class L {
      constructor() {
        obj = closure_1(closure_2[12]);
        successResult = obj.success();
        tmp2 = closure_4();
        obj2 = closure_1(closure_2[12]);
        result = obj2.start_verification_check();
        return;
      }
    }
    cResult[6] = T;
    class E {
      constructor() {
        return closure_5.getIsLoadingAgeVerification();
      }
    }
    cResult[7] = L;
  } else {
    class L {
      constructor() {
        obj = closure_1(closure_2[12]);
        successResult = obj.success();
        tmp2 = closure_4();
        obj2 = closure_1(closure_2[12]);
        result = obj2.start_verification_check();
        return;
      }
    }
  }
  onComplete = L;
  if (cResult[8] === L) {
    class L {
      constructor() {
        obj = closure_1(closure_2[12]);
        successResult = obj.success();
        tmp2 = closure_4();
        obj2 = closure_1(closure_2[12]);
        result = obj2.start_verification_check();
        return;
      }
    }
    const effect = stateFromStores.useEffect(R, items4);
    class E {
      constructor() {
        return closure_5.getIsLoadingAgeVerification();
      }
    }
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          obj = closure_1(closure_2[12]);
          successResult = obj.success();
          tmp2 = closure_4();
          obj2 = closure_1(closure_2[12]);
          result = obj2.start_verification_check();
          return;
        }
      }
      cResult[12] = tmp19;
      class E {
        constructor() {
          return closure_5.getIsLoadingAgeVerification();
        }
      }
    } else {
      class L {
        constructor() {
          obj = closure_1(closure_2[12]);
          successResult = obj.success();
          tmp2 = closure_4();
          obj2 = closure_1(closure_2[12]);
          result = obj2.start_verification_check();
          return;
        }
      }
    }
    const sum = 425 + bottom;
    const sum1 = sum + tmp13(587).space.PX_16;
    const sum2 = sum1 + tmp13(587).space.PX_32;
    if (cResult[13] === bottom) {
      class L {
        constructor() {
          obj = closure_1(closure_2[12]);
          successResult = obj.success();
          tmp2 = closure_4();
          obj2 = closure_1(closure_2[12]);
          result = obj2.start_verification_check();
          return;
        }
      }
      const _Symbol = Symbol;
      class E {
        constructor() {
          return closure_5.getIsLoadingAgeVerification();
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
        let obj2 = { variant: "heading-md/medium", color: "text-default", children: null };
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        obj2.children = obj6.string(tmp(1126).t["yvx//1"]);
        const tmp29 = closure_8(tmp(5086).Text, obj2);
        cResult[17] = tmp29;
        const tmp28 = tmp29;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
      }
      if (cResult[18] !== tmp4.header) {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
        let obj3 = { style: null, children: null };
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        const items2 = [tmp27, tmp28];
        obj3.children = items2;
        const tmp32 = closure_9(View, obj3);
        cResult[18] = tmp4.header;
        cResult[19] = tmp32;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
      }
      if (cResult[20] !== tmp4.number) {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
        const mapped = items.map((item, index) => {
          ({ title, description } = item);
          const obj = { label: title, subLabel: description, icon: null };
          const obj2 = { style: number.number, children: closure_2_8(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index + 1 }) };
          obj.icon = closure_2_8(View, obj2);
          return closure_2_8(TableRow.TableRow, obj, index);
        });
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        cResult[21] = mapped;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
      }
      if (cResult[22] !== tmp33) {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
        const obj4 = { children: null };
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        tmp37[1] = tmp33;
        obj4.children = closure_8(tmp(6267).TableRowGroup, tmp37);
        const tmp38 = closure_8(View, obj4);
        cResult[22] = tmp33;
        cResult[23] = tmp38;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
      }
      const _Symbol3 = Symbol;
      const moreInfo = tmp4.moreInfo;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
        const stringResult = obj9.string(tmp(1126).t.WPwp1b);
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        cResult[24] = stringResult;
        const tmp39 = stringResult;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
        const obj5 = { title: tmp39, hasIcons: false, children: null };
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        const obj7 = { label: null, subLabel: null, onPress: null, arrow: true, start: true, end: true };
        const intl = tmp(1126).intl;
        obj7.label = intl.string(tmp(1126).t.N9WJMM);
        const intl2 = tmp(1126).intl;
        obj7.subLabel = intl2.string(tmp(1126).t.NHq382);
        obj7.onPress = tmp18;
        obj5.children = closure_8(tmp(6184).TableRow, obj7);
        const tmp43 = closure_8(tmp42, obj5);
        cResult[25] = tmp43;
        const tmp41 = tmp43;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
      }
      if (cResult[26] !== tmp4.moreInfo) {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
        const obj8 = { style: null, children: null };
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        obj8.children = tmp41;
        const tmp46 = closure_8(View, obj8);
        cResult[26] = tmp4.moreInfo;
        cResult[27] = tmp46;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_2[12]);
            successResult = obj.success();
            tmp2 = closure_4();
            obj2 = closure_1(closure_2[12]);
            result = obj2.start_verification_check();
            return;
          }
        }
      }
      if (cResult[28] !== classificationId) {
        class Q {
          constructor() {
            obj = closure_0(closure_2[20]);
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
        cResult[28] = classificationId;
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        cResult[29] = Q;
      } else {
        class Q {
          constructor() {
            obj = closure_0(closure_2[20]);
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
      }
      const _Symbol5 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            obj = closure_0(closure_2[20]);
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
        const stringResult1 = obj13.string(tmp(1126).t["54b8V0"]);
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        cResult[30] = stringResult1;
        const tmp48 = stringResult1;
      } else {
        class Q {
          constructor() {
            obj = closure_0(closure_2[20]);
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
      }
      if (cResult[31] === stateFromStores1) {
        class Q {
          constructor() {
            obj = closure_0(closure_2[20]);
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
        const _Symbol6 = Symbol;
        class E {
          constructor() {
            return closure_5.getIsLoadingAgeVerification();
          }
        }
        if (tmp53 === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor() {
              obj = closure_0(closure_2[20]);
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
          const obj10 = { learnMoreLink: null };
          class E {
            constructor() {
              return closure_5.getIsLoadingAgeVerification();
            }
          }
          obj10.learnMoreLink = constants.LEARN_MORE_UU_APPEAL_LINK;
          const formatResult = obj15.format(tmp(1126).t.ZbWsOF, obj10);
          cResult[34] = formatResult;
        } else {
          class Q {
            constructor() {
              obj = closure_0(closure_2[20]);
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
        }
        if (cResult[35] !== tmp4.learnMore) {
          class Q {
            constructor() {
              obj = closure_0(closure_2[20]);
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
          const obj11 = { variant: "heading-sm/medium", color: "text-subtle", style: tmp4.learnMore, children: null };
          class E {
            constructor() {
              return closure_5.getIsLoadingAgeVerification();
            }
          }
          const tmp57 = closure_8(tmp(5086).Text, obj11);
          cResult[35] = tmp4.learnMore;
          cResult[36] = tmp57;
        } else {
          class Q {
            constructor() {
              obj = closure_0(closure_2[20]);
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
        }
        if (cResult[37] === tmp4.footer) {
          class Q {
            constructor() {
              obj = closure_0(closure_2[20]);
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
        }
        const obj12 = { style: tmp4.footer, children: null };
        const items3 = [tmp50, tmp56];
        obj12.children = items3;
        const tmp61 = closure_9(View, obj12);
        cResult[37] = tmp4.footer;
        cResult[38] = tmp50;
        cResult[39] = tmp56;
        cResult[40] = tmp61;
      }
      const obj14 = { onPress: Q, loading: stateFromStores1, disabled: stateFromStores1, text: tmp48 };
      const tmp52 = closure_8(tmp(5375).Button, obj14);
      cResult[31] = stateFromStores1;
      class R {
        constructor() {
          if ("" !== closure_3) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = { webviewUrl: null, onComplete: null, entryPoint: null };
            obj1.webviewUrl = tmp;
            tmp4 = closure_5;
            obj1.onComplete = closure_5;
            tmp5 = closure_0;
            obj1.entryPoint = closure_0(closure_2[14]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS;
            showAgeVerificationResult = obj.showAgeVerification(obj1);
            obj3 = closure_1(closure_2[15]);
            tmp7 = closure_6;
            hideActionSheetResult = obj3.hideActionSheet(closure_6);
          }
          return;
        }
      }
      cResult[33] = tmp52;
    }
    const obj16 = {};
    const merged = Object.assign(tmp4.content);
    obj16.paddingBottom = bottom;
    cResult[13] = bottom;
    cResult[14] = tmp4.content;
    cResult[15] = obj16;
  }
  class R {
    constructor() {
      if ("" !== closure_3) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        obj = closure_1(closure_2[13]);
        obj1 = { webviewUrl: null, onComplete: null, entryPoint: null };
        obj1.webviewUrl = tmp;
        tmp4 = closure_5;
        obj1.onComplete = closure_5;
        tmp5 = closure_0;
        obj1.entryPoint = closure_0(closure_2[14]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS;
        showAgeVerificationResult = obj.showAgeVerification(obj1);
        obj3 = closure_1(closure_2[15]);
        tmp7 = closure_6;
        hideActionSheetResult = obj3.hideActionSheet(closure_6);
      }
      return;
    }
  }
  items4 = [stateFromStores, L];
  cResult[8] = L;
  cResult[9] = stateFromStores;
  cResult[10] = R;
  cResult[11] = items4;
  const tmpResult2 = onClose(504);
}) : (function AutomatedUnderageAppealActionSheet(onClose) {
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  let callback1;
  const tmp = closure_10();
  dependencyMap = tmp;
  items = [callback1];
  const stateFromStores = onClose(504).useStateFromStores(items, () => callback1.getAgeVerificationWebviewUrl());
  let obj = onClose(504);
  const items1 = [callback1];
  const stateFromStores1 = onClose(504).useStateFromStores(items1, () => callback1.getIsLoadingAgeVerification());
  const bottom = classificationId(1630)().bottom;
  const items2 = [onClose];
  const callback = stateFromStores.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    AutomatedUnderageAppealModalActionCreatorsDefault.close();
  }, items2);
  const items3 = [callback];
  callback1 = stateFromStores.useCallback(() => {
    AutomatedUnderageAppealModalActionCreatorsDefault.success();
    callback();
    const result = AutomatedUnderageAppealModalActionCreatorsDefault.start_verification_check();
  }, items3);
  const items4 = [stateFromStores, callback1];
  const effect = stateFromStores.useEffect(() => {
    if ("" !== stateFromStores) {
      const obj2 = { webviewUrl: tmp, onComplete: callback1, entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
      AgeVerificationActionCreatorsDefault.showAgeVerification(obj2);
      ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
    }
  }, items4);
  let obj3 = { scrollable: true, startHeight: null, children: null };
  const sum = 425 + bottom;
  const sum1 = sum + classificationId(587).space.PX_16;
  obj3.startHeight = sum1 + classificationId(587).space.PX_32;
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: null, children: null };
  const obj6 = {};
  const merged = Object.assign(tmp.content);
  obj6.paddingBottom = bottom;
  obj5.style = obj6;
  const obj7 = { style: tmp.header, children: null };
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = onClose(1126).intl;
  obj8.children = intl.string(onClose(1126).t["9SDLnj"]);
  const items5 = [closure_8(onClose(5086).Text, obj8), ];
  const obj9 = { variant: "heading-md/medium", color: "text-default", children: null };
  const intl2 = onClose(1126).intl;
  obj9.children = intl2.string(onClose(1126).t["yvx//1"]);
  items5[1] = closure_8(onClose(5086).Text, obj9);
  obj7.children = items5;
  const items6 = [closure_9(callback, obj7), , , ];
  const obj10 = { children: null };
  let obj2 = onClose(504);
  obj10.children = closure_8(onClose(6267).TableRowGroup, {
    hasIcons: true,
    children: items.map((item, index) => {
      ({ title, description } = item);
      const obj = { label: title, subLabel: description, icon: null };
      const obj2 = { style: number.number, children: closure_2_8(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index + 1 }) };
      obj.icon = closure_2_8(View, obj2);
      return closure_2_8(TableRow.TableRow, obj, index);
    })
  });
  items6[1] = closure_8(callback, obj10);
  const obj12 = { style: tmp.moreInfo, children: null };
  const obj13 = { title: null, hasIcons: false, children: null };
  const intl3 = onClose(1126).intl;
  obj13.title = intl3.string(onClose(1126).t.WPwp1b);
  const obj14 = { label: null, subLabel: null, onPress: null, arrow: true, start: true, end: true };
  const intl4 = onClose(1126).intl;
  obj14.label = intl4.string(onClose(1126).t.N9WJMM);
  const intl5 = onClose(1126).intl;
  obj14.subLabel = intl5.string(onClose(1126).t.NHq382);
  obj14.onPress = function openForm() {
    return classificationId(number[16]).openURL(constants.AGE_VERIFICATION_LINK);
  };
  obj13.children = closure_8(onClose(6184).TableRow, obj14);
  obj12.children = closure_8(onClose(6267).TableRowGroup, obj13);
  items6[2] = closure_8(callback, obj12);
  const obj15 = { style: tmp.footer, children: null };
  const obj16 = {
    onPress() {
      return SafetyHubActionCreators.requestSuspendedUserAgeVerification(classificationId);
    },
    loading: stateFromStores1,
    disabled: stateFromStores1,
    text: null
  };
  const intl6 = onClose(1126).intl;
  obj16.text = intl6.string(onClose(1126).t["54b8V0"]);
  const items7 = [closure_8(onClose(5375).Button, obj16), ];
  const obj17 = { variant: "heading-sm/medium", color: "text-subtle", style: tmp.learnMore, children: null };
  const intl7 = onClose(1126).intl;
  obj17.children = intl7.format(onClose(1126).t.ZbWsOF, { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK });
  items7[1] = closure_8(onClose(5086).Text, obj17);
  obj15.children = items7;
  items6[3] = closure_9(callback, obj15);
  obj5.children = items6;
  obj4.children = closure_9(callback, obj5);
  obj3.children = closure_8(onClose(6298).BottomSheetScrollView, obj4);
  return closure_8(onClose(6829).BottomSheet, obj3);
});