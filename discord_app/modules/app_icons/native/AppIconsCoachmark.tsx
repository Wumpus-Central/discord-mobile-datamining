// === Module 17564: AppIconsCoachmark ===

// Module 17564 (AppIconsCoachmark)
import nativeDefault from "native" /* 587 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4728 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import FastImageDefault from "FastImage" /* 6163 */;
import _modDef9508 from "module_9508" /* 9508 */;
import AppIconUtils from "AppIconUtils" /* 13672 */;
import _modDef17565 from "module_17565" /* 17565 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { padding: nativeDefault.space.PX_16, paddingBottom: 0 }, info: { alignItems: "center" }, image: { alignSelf: "center", marginBottom: 20 }, nitroWheel: { marginRight: 8 }, titleContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, footer: null };
let obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
obj2.footer = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: 20, gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppIconsCoachmarkActionSheet(markAsDismissed) {
  const cResult = markAsDismissed(576).c(43);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
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
    function handleOnTryIt() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      if (markAsDismissed != null) {
        tmp3(ContentDismissActionType.PRIMARY);
      }
      const result = AppIconUtils.navigateToAppIconSettings();
    }
    cResult[4] = markAsDismissed;
    cResult[5] = handleOnTryIt;
  }
  if (cResult[6] !== markAsDismissed) {
    class C {
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
    cResult[7] = C;
  } else {
    class C {
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
    class C {
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
    cResult[8] = markAsDismissed;
    cResult[9] = tmp15;
  } else {
    class C {
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
  if (cResult[10] !== tmp4.image) {
    class C {
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
    let obj2 = { source: _modDef17565, style: tmp4.image };
    const tmp19 = closure_7(FastImageDefault, obj2);
    cResult[10] = tmp4.image;
    cResult[11] = tmp19;
  } else {
    class C {
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
  if (cResult[12] !== tmp4.nitroWheel) {
    class C {
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
    const obj4 = { source: _modDef9508, size: tmp(1200).IconSizes.MEDIUM, style: tmp4.nitroWheel, disableColor: true };
    const tmp22 = closure_7(tmp(1200).Icon, obj4);
    cResult[12] = tmp4.nitroWheel;
    cResult[13] = tmp22;
  } else {
    class C {
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
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
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
    const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp(1126).intl;
    obj5.children = intl.string(tmp(1126).t.EfA4Cq);
    const tmp24 = closure_7(tmp(5087).Text, obj5);
    cResult[14] = tmp24;
    const tmp23 = tmp24;
  } else {
    class C {
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
  if (cResult[15] === tmp4.titleContainer) {
    class C {
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
    if (cResult[18] !== tmp9) {
      class C {
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
      if (tmp9) {
        class C {
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
        const stringResult = obj8.string(tmp(1126).t);
      } else {
        class C {
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
      cResult[18] = tmp9;
      cResult[19] = stringResult;
    } else {
      class C {
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
      if (cResult[20] === tmp4.subtitle) {
        class C {
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
        if (cResult[23] === tmp4.info) {
          class C {
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
        const obj6 = { style: tmp4.info, children: null };
        const items1 = [tmp16, tmp25, tmp30];
        obj6.children = items1;
        const tmp36 = closure_8(View, obj6);
        cResult[23] = tmp4.info;
        cResult[24] = tmp25;
        cResult[25] = tmp30;
        cResult[26] = tmp16;
        cResult[27] = tmp36;
      }
      const obj7 = { variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: tmp27 };
      const tmp32 = closure_7(tmp(5087).Text, obj7);
      cResult[20] = tmp4.subtitle;
      cResult[21] = tmp27;
      cResult[22] = tmp32;
    }
  }
  const obj9 = { style: tmp4.titleContainer, children: null };
  const items2 = [tmp20, tmp23];
  obj9.children = items2;
  const tmp26 = closure_8(View, obj9);
  cResult[15] = tmp4.titleContainer;
  cResult[16] = tmp20;
  cResult[17] = tmp26;
  const tmpResult = markAsDismissed(504);
}) : (function AppIconsCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_9();
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
  const obj5 = { source: null, style: null };
  const isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
  obj5.source = _modDef17565;
  obj5.style = tmp.image;
  const items2 = [closure_7(FastImageDefault, obj5), , ];
  const obj6 = { style: tmp.titleContainer, children: null };
  const items3 = [closure_7(markAsDismissed(1200).Icon, { source: _modDef9508, size: markAsDismissed(1200).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true }), ];
  const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1126).intl;
  obj8.children = intl.string(markAsDismissed(1126).t.EfA4Cq);
  items3[1] = closure_7(markAsDismissed(5087).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_8(View, obj6);
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
  items2[2] = closure_7(markAsDismissed(5087).Text, obj9);
  obj4.children = items2;
  const items4 = [closure_8(View, obj4), ];
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { text: null, onPress: null };
  const intl3 = tmp2(1126).intl;
  obj11.text = intl3.string(markAsDismissed(1126).t.Pt547C);
  obj11.onPress = function handleOnTryIt() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp3(ContentDismissActionType.PRIMARY);
    }
    const result = AppIconUtils.navigateToAppIconSettings();
  };
  const items5 = [closure_7(markAsDismissed(5376).Button, obj11), ];
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1126).intl;
  obj12.text = intl4.string(markAsDismissed(1126).t.iSrIIZ);
  obj12.onPress = callback;
  items5[1] = closure_7(markAsDismissed(5376).Button, obj12);
  obj10.children = items5;
  items4[1] = closure_8(View, obj10);
  obj3.children = items4;
  return closure_8(markAsDismissed(6836).BottomSheet, obj3);
});