// === Module 17162: NitroFileUploadUpsellPromoSheet ===

// Module 17162 (NitroFileUploadUpsellPromoSheet)
import nativeDefault from "native" /* 587 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9658 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsPages: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { illustration: { paddingTop: nativeDefault.space.PX_12 } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = markAsDismissed(576).c(23);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_9();
  importDefault = noop.useRef(false);
  if (cResult[0] !== markAsDismissed) {
    const fn = function _(arg0) {
      if (!ref.current) {
        tmp.current = true;
        markAsDismissed(arg0);
      }
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  noop = noop.useRef(ContentDismissActionType.AUTO_DISMISS);
  if (cResult[2] !== tmp5) {
    class A {
      constructor() {
        tmp = closure_2(closure_3.current);
        return;
      }
    }
    cResult[2] = tmp5;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_2(closure_3.current);
        return;
      }
    }
  }
  const obj = markAsDismissed(576);
  const unmountEffect = markAsDismissed(5597).useUnmountEffect(A);
  if (cResult[4] !== tmp5) {
    class P {
      constructor() {
        tmp = closure_2(ContentDismissActionType.TAKE_ACTION);
        obj = closure_0(closure_2[10]);
        obj1 = { screen: UserSettingsSections.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1);
        return;
      }
    }
    cResult[4] = tmp5;
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        tmp = closure_2(ContentDismissActionType.TAKE_ACTION);
        obj = closure_0(closure_2[10]);
        obj1 = { screen: UserSettingsSections.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1);
        return;
      }
    }
  }
  const tmpResult = markAsDismissed(5597);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, P, constants.PREMIUM_UPSELL_FILE_UPLOAD));
  if (cResult[6] !== onPress) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    cResult[6] = onPress;
    cResult[7] = M;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[8] !== tmp5) {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    cResult[8] = tmp5;
    cResult[9] = D;
  } else {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const tmp14 = jsx(tmp(17160).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" });
    cResult[10] = tmp14;
    const tmp13 = tmp14;
  } else {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[11] !== tmp4.illustration) {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const obj3 = { style: tmp4.illustration, children: tmp13 };
    const tmp17 = <onPress style={tmp4.illustration}>{tmp13}</onPress>;
    cResult[11] = tmp4.illustration;
    cResult[12] = tmp17;
  } else {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const stringResult = obj5.string(tmp9(2621)["Uty2/X"]);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp9(2621).VAgI8Q);
    cResult[13] = stringResult;
    cResult[14] = stringResult1;
    let tmp19 = stringResult1;
    const tmp18 = stringResult;
  } else {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    tmp19 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const stringResult2 = obj6.string(tmp9(2621).mRy6sO);
    cResult[15] = stringResult2;
    const tmp22 = stringResult2;
  } else {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (!loading) {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[16] === loading) {
    class D {
      constructor() {
        tmp = closure_2(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    if (cResult[19] === D) {
      class D {
        constructor() {
          tmp = closure_2(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const obj4 = { illustration: tmp15, title: tmp18, description: tmp19, onDismiss: D, actions: tmp25 };
    const tmp29 = jsx(tmp(10058).PromoSheet, { illustration: tmp15, title: tmp18, description: tmp19, onDismiss: D, actions: tmp25 });
    cResult[19] = D;
    cResult[20] = tmp25;
    cResult[21] = tmp15;
    cResult[22] = tmp29;
  }
  const tmp26 = jsx(markAsDismissed(5601).Button, { grow: true, size: "lg", variant: "primary", loading, text: tmp22, onPress: null });
  cResult[16] = loading;
  cResult[17] = null;
  cResult[18] = tmp26;
  const tmp10 = usePremiumFeatureUpsellGetNitroDefault(false, P, constants.PREMIUM_UPSELL_FILE_UPLOAD);
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  noop = undefined;
  onPress = undefined;
  importDefault = noop.useRef(false);
  const items = [markAsDismissed];
  const callback = noop.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  noop = noop.useRef(ContentDismissActionType.AUTO_DISMISS);
  const tmp = closure_9();
  const unmountEffect = markAsDismissed(callback[9]).useUnmountEffect(() => {
    callback(ref2.current);
  });
  const items1 = [callback];
  const callback1 = noop.useCallback(() => {
    callback(ContentDismissActionType.TAKE_ACTION);
    openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
  }, items1);
  const obj = markAsDismissed(callback[9]);
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD));
  const items2 = [onPress];
  const items3 = [callback];
  const callback2 = noop.useCallback(() => {
    closure_3.current = ContentDismissActionType.TAKE_ACTION;
    onPress();
  }, items2);
  const callback3 = noop.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj2 = { illustration: null, title: null, description: null, onDismiss: null, actions: null };
  const tmp5 = require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD);
  obj2.illustration = <onPress style={tmp.illustration}>{jsx(markAsDismissed(callback[12]).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" })}</onPress>;
  const intl = markAsDismissed(callback[13]).intl;
  obj2.title = intl.string(require("module_2621")["Uty2/X"]);
  const intl2 = markAsDismissed(callback[13]).intl;
  obj2.description = intl2.string(require("module_2621").VAgI8Q);
  obj2.onDismiss = callback3;
  const obj4 = { grow: true, size: "lg", variant: "primary", loading, text: null, onPress: null };
  const intl3 = markAsDismissed(callback[13]).intl;
  obj4.text = intl3.string(require("module_2621").mRy6sO);
  let tmp9 = null;
  if (!loading) {
    tmp9 = callback2;
  }
  obj4.onPress = tmp9;
  obj2.actions = jsx(markAsDismissed(callback[15]).Button, { grow: true, size: "lg", variant: "primary", loading, text: null, onPress: null });
  return jsx(markAsDismissed(callback[16]).PromoSheet, { illustration: null, title: null, description: null, onDismiss: null, actions: null });
});