// === Module 17106: AppIconsCoachmark ===

// Module 17106 (AppIconsCoachmark)
import nativeDefault from "native" /* 587 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import _modDef9642 from "module_9642" /* 9642 */;
import AppIconUtils from "AppIconUtils" /* 13261 */;
import _modDef17107 from "module_17107" /* 17107 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { padding: nativeDefault.space.PX_16, paddingBottom: 0 }, info: { alignItems: "center" }, image: { alignSelf: "center", marginBottom: 20 }, nitroWheel: { marginRight: 8 }, titleContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, footer: null };
let obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
obj2.footer = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: 20, gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = markAsDismissed(576).c(43);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = markAsDismissed(576);
  const stateFromStores = markAsDismissed(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isPremiumResult;
    let tmp9 = isPremiumResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== markAsDismissed) {
    const fn2 = function b() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      if (markAsDismissed != null) {
        tmp3(ContentDismissActionType.PRIMARY);
      }
      const result = AppIconUtils.navigateToAppIconSettings();
    };
    cResult[4] = markAsDismissed;
    cResult[5] = fn2;
  }
  if (cResult[6] !== markAsDismissed) {
    class A {
      constructor() {
        obj = closure_1(closure_2[11]);
        hideActionSheetResult = obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp3 = ContentDismissActionType;
          tmp2Result = tmp2(ContentDismissActionType.DISMISS);
        }
        return;
      }
    }
    cResult[6] = markAsDismissed;
    cResult[7] = A;
  } else {
    class A {
      constructor() {
        obj = closure_1(closure_2[11]);
        hideActionSheetResult = obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp3 = ContentDismissActionType;
          tmp2Result = tmp2(ContentDismissActionType.DISMISS);
        }
        return;
      }
    }
  }
  if (cResult[8] !== markAsDismissed) {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
    cResult[8] = markAsDismissed;
    cResult[9] = D;
  } else {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
  }
  if (cResult[10] !== tmp4.image) {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
    let obj2 = { source: _modDef17107, style: tmp4.image };
    const tmp18 = closure_8(closure_4, obj2);
    cResult[10] = tmp4.image;
    cResult[11] = tmp18;
  } else {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
  }
  if (cResult[12] !== tmp4.nitroWheel) {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
    const obj4 = { source: _modDef9642, size: tmp(1188).IconSizes.MEDIUM, style: tmp4.nitroWheel, disableColor: true };
    const tmp21 = closure_8(tmp(1188).Icon, obj4);
    cResult[12] = tmp4.nitroWheel;
    cResult[13] = tmp21;
  } else {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
    const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp(1126).intl;
    obj5.children = intl.string(tmp(1126).t.EfA4Cq);
    const tmp23 = closure_8(tmp(4886).Text, obj5);
    cResult[14] = tmp23;
    const tmp22 = tmp23;
  } else {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
  }
  if (cResult[15] === tmp4.titleContainer) {
    class D {
      constructor() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      }
    }
    if (cResult[18] !== tmp9) {
      class D {
        constructor() {
          return markAsDismissed(ContentDismissActionType.DISMISS);
        }
      }
      if (tmp9) {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        const stringResult = obj8.string(tmp(1126).t);
      } else {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
      }
      cResult[18] = tmp9;
      cResult[19] = stringResult;
    } else {
      class D {
        constructor() {
          return markAsDismissed(ContentDismissActionType.DISMISS);
        }
      }
      if (cResult[20] === tmp4.subtitle) {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        if (cResult[23] === tmp4.info) {
          class D {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
        }
        const obj6 = { style: tmp4.info, children: null };
        const items1 = [tmp15, tmp24, tmp29];
        obj6.children = items1;
        const tmp35 = closure_9(closure_5, obj6);
        cResult[23] = tmp4.info;
        cResult[24] = tmp24;
        cResult[25] = tmp29;
        cResult[26] = tmp15;
        cResult[27] = tmp35;
      }
      const obj7 = { variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: tmp26 };
      const tmp31 = closure_8(tmp(4886).Text, obj7);
      cResult[20] = tmp4.subtitle;
      cResult[21] = tmp26;
      cResult[22] = tmp31;
    }
  }
  const obj9 = { style: tmp4.titleContainer, children: null };
  const items2 = [tmp19, tmp22];
  obj9.children = items2;
  const tmp25 = closure_9(closure_5, obj9);
  cResult[15] = tmp4.titleContainer;
  cResult[16] = tmp19;
  cResult[17] = tmp25;
  const tmpResult = markAsDismissed(504);
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  const items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = markAsDismissed(504);
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.DISMISS);
    }
  }, items1);
  const obj3 = {
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    contentStyles: tmp.container,
    children: null
  };
  const obj4 = { style: tmp.info, children: null };
  const isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
  const items2 = [closure_8(closure_4, { source: _modDef17107, style: tmp.image }), , ];
  const obj6 = { style: tmp.titleContainer, children: null };
  const obj5 = { source: _modDef17107, style: tmp.image };
  const items3 = [closure_8(markAsDismissed(1188).Icon, { source: _modDef9642, size: markAsDismissed(1188).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true }), ];
  const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1126).intl;
  obj8.children = intl.string(markAsDismissed(1126).t.EfA4Cq);
  items3[1] = closure_8(markAsDismissed(4886).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_9(closure_5, obj6);
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = markAsDismissed(1126).intl;
  const string = intl2.string;
  const t = markAsDismissed(1126).t;
  if (isPremiumResult) {
    let stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  obj9.children = stringResult;
  items2[2] = closure_8(markAsDismissed(4886).Text, obj9);
  obj4.children = items2;
  const items4 = [closure_9(closure_5, obj4), ];
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { text: null, onPress: null };
  const intl3 = tmp2(1126).intl;
  obj11.text = intl3.string(markAsDismissed(1126).t.Pt547C);
  obj11.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp3(ContentDismissActionType.PRIMARY);
    }
    const result = AppIconUtils.navigateToAppIconSettings();
  };
  const items5 = [closure_8(markAsDismissed(5594).Button, obj11), ];
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1126).intl;
  obj12.text = intl4.string(markAsDismissed(1126).t.iSrIIZ);
  obj12.onPress = callback;
  items5[1] = closure_8(markAsDismissed(5594).Button, obj12);
  obj10.children = items5;
  items4[1] = closure_9(closure_5, obj10);
  obj3.children = items4;
  return closure_9(markAsDismissed(6645).BottomSheet, obj3);
});