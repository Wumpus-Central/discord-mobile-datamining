// === Module 17443: NitroFileUploadUpsellPromoSheet ===

// Module 17443 (NitroFileUploadUpsellPromoSheet)
import nativeDefault from "native" /* 587 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9451 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsPages: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { illustration: { paddingTop: nativeDefault.space.PX_12 } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NitroFileUploadUpsellPromoSheet(markAsDismissed) {
  const cResult = markAsDismissed(576).c(23);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_9();
  importDefault = noop.useRef(false);
  if (cResult[0] !== markAsDismissed) {
    class U {
      constructor(arg0) {
        if (!closure_1.current) {
          tmp2 = markAsDismissed;
          flag = true;
          tmp.current = true;
          tmp3 = markAsDismissed;
          tmp4 = markAsDismissed(markAsDismissed);
        }
        return;
      }
    }
    cResult[0] = markAsDismissed;
    cResult[1] = U;
  } else {
    class U {
      constructor(arg0) {
        if (!closure_1.current) {
          tmp2 = markAsDismissed;
          flag = true;
          tmp.current = true;
          tmp3 = markAsDismissed;
          tmp4 = markAsDismissed(markAsDismissed);
        }
        return;
      }
    }
  }
  dependencyMap = U;
  noop = noop.useRef(ContentDismissActionType.AUTO_DISMISS);
  if (cResult[2] !== U) {
    class U {
      constructor(arg0) {
        if (!closure_1.current) {
          tmp2 = markAsDismissed;
          flag = true;
          tmp.current = true;
          tmp3 = markAsDismissed;
          tmp4 = markAsDismissed(markAsDismissed);
        }
        return;
      }
    }
    cResult[2] = U;
    cResult[3] = tmp7;
  } else {
    class U {
      constructor(arg0) {
        if (!closure_1.current) {
          tmp2 = markAsDismissed;
          flag = true;
          tmp.current = true;
          tmp3 = markAsDismissed;
          tmp4 = markAsDismissed(markAsDismissed);
        }
        return;
      }
    }
  }
  const obj = markAsDismissed(576);
  const unmountEffect = markAsDismissed(5392).useUnmountEffect(tmp7);
  if (cResult[4] !== U) {
    class A {
      constructor() {
        tmp = closure_2(ContentDismissActionType.TAKE_ACTION);
        obj = closure_0(closure_2[10]);
        obj1 = { screen: UserSettingsSections.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1);
        return;
      }
    }
    cResult[4] = U;
    cResult[5] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_2(ContentDismissActionType.TAKE_ACTION);
        obj = closure_0(closure_2[10]);
        obj1 = { screen: UserSettingsSections.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1);
        return;
      }
    }
  }
  const tmpResult = markAsDismissed(5392);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, A, constants.PREMIUM_UPSELL_FILE_UPLOAD));
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
  if (cResult[8] !== U) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    cResult[8] = U;
    cResult[9] = tmp14;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    const tmp16 = jsx(tmp(17441).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" });
    cResult[10] = tmp16;
    const tmp15 = tmp16;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[11] !== tmp4.illustration) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    const obj3 = { style: tmp4.illustration, children: tmp15 };
    const tmp19 = <onPress style={tmp4.illustration}>{tmp15}</onPress>;
    cResult[11] = tmp4.illustration;
    cResult[12] = tmp19;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    const stringResult = obj5.string(tmp10(2665)["Uty2/X"]);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp10(2665).VAgI8Q);
    cResult[13] = stringResult;
    cResult[14] = stringResult1;
    let tmp21 = stringResult1;
    const tmp20 = stringResult;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    tmp21 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    const stringResult2 = obj6.string(tmp10(2665).mRy6sO);
    cResult[15] = stringResult2;
    const tmp24 = stringResult2;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (!loading) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[16] === loading) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    if (cResult[19] === tmp14) {
      class M {
        constructor() {
          closure_3.current = ContentDismissActionType.TAKE_ACTION;
          tmp = onPress();
          return;
        }
      }
    }
    const obj4 = { illustration: tmp17, title: tmp20, description: tmp21, onDismiss: tmp14, actions: tmp27 };
    const tmp31 = jsx(tmp(10303).PromoSheet, { illustration: tmp17, title: tmp20, description: tmp21, onDismiss: tmp14, actions: tmp27 });
    cResult[19] = tmp14;
    cResult[20] = tmp27;
    cResult[21] = tmp17;
    cResult[22] = tmp31;
  }
  const tmp28 = jsx(markAsDismissed(5375).Button, { grow: true, size: "lg", variant: "primary", loading, text: tmp24, onPress: null });
  cResult[16] = loading;
  cResult[17] = null;
  cResult[18] = tmp28;
  const tmp11 = usePremiumFeatureUpsellGetNitroDefault(false, A, constants.PREMIUM_UPSELL_FILE_UPLOAD);
}) : (function NitroFileUploadUpsellPromoSheet(markAsDismissed) {
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
  obj2.title = intl.string(require("module_2665")["Uty2/X"]);
  const intl2 = markAsDismissed(callback[13]).intl;
  obj2.description = intl2.string(require("module_2665").VAgI8Q);
  obj2.onDismiss = callback3;
  const obj4 = { grow: true, size: "lg", variant: "primary", loading, text: null, onPress: null };
  const intl3 = markAsDismissed(callback[13]).intl;
  obj4.text = intl3.string(require("module_2665").mRy6sO);
  let tmp9 = null;
  if (!loading) {
    tmp9 = callback2;
  }
  obj4.onPress = tmp9;
  obj2.actions = jsx(markAsDismissed(callback[15]).Button, { grow: true, size: "lg", variant: "primary", loading, text: null, onPress: null });
  return jsx(markAsDismissed(callback[16]).PromoSheet, { illustration: null, title: null, description: null, onDismiss: null, actions: null });
});