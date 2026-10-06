// === Module 17162: NitroFileUploadUpsellPromoSheet ===

// Module 17162 (NitroFileUploadUpsellPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _modDef2621 from "module_2621" /* 2621 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9658 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, markAsDismissed;

let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
({ AnalyticsPages: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { illustration: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let closure_2;
  let loading;
  let onPress;
  let ref;
  let ref2;
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp5;
  const tmp = markAsDismissed;
  let obj = markAsDismissed(576);
  const cResult = obj.c(23);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_9();
  let obj2 = react;
  importDefault = react.useRef(false);
  if (cResult[0] !== markAsDismissed) {
    const fn = function _(arg0) {
      if (!ref.current) {
        tmp.current = true;
        markAsDismissed(arg0);
      }
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  react = obj2.useRef(ContentDismissActionType.AUTO_DISMISS);
  if (cResult[2] !== tmp5) {
    class A {
      constructor() {
        closure_2(ref2.current);
      }
    }
    cResult[2] = tmp5;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        closure_2(ref2.current);
      }
    }
  }
  const tmpResult = tmp(5597);
  const unmountEffect = tmpResult.useUnmountEffect(A);
  if (cResult[4] !== tmp5) {
    class P {
      constructor() {
        closure_2(ContentDismissActionType.TAKE_ACTION);
        const obj = openUserSettings;
        const obj2 = { screen: metroRequire.PREMIUM };
        obj.openUserSettings(obj2);
      }
    }
    cResult[4] = tmp5;
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        closure_2(ContentDismissActionType.TAKE_ACTION);
        const obj = openUserSettings;
        const obj2 = { screen: metroRequire.PREMIUM };
        obj.openUserSettings(obj2);
      }
    }
  }
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, P, constants.PREMIUM_UPSELL_FILE_UPLOAD));
  usePremiumFeatureUpsellGetNitroDefault(false, P, constants.PREMIUM_UPSELL_FILE_UPLOAD);
  if (cResult[6] !== onPress) {
    class M {
      constructor() {
        ref2.current = ContentDismissActionType.TAKE_ACTION;
        onPress();
      }
    }
    cResult[6] = onPress;
    cResult[7] = M;
  } else {
    class M {
      constructor() {
        ref2.current = ContentDismissActionType.TAKE_ACTION;
        onPress();
      }
    }
  }
  if (cResult[8] !== tmp5) {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[8] = tmp5;
    cResult[9] = D;
  } else {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    const tmp14 = jsx(tmp(17160).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" });
    cResult[10] = tmp14;
    tmp13 = tmp14;
  } else {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[11] !== tmp4.illustration) {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    const tmp17 = <onPress style={tmp4.illustration}>{tmp13}</onPress>;
    cResult[11] = tmp4.illustration;
    cResult[12] = tmp17;
  } else {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    const stringResult = obj5.string(_modDef2621["Uty2/X"]);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(_modDef2621.VAgI8Q);
    cResult[13] = stringResult;
    cResult[14] = stringResult1;
    tmp19 = stringResult1;
    tmp18 = stringResult;
  } else {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    tmp19 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    const stringResult2 = obj6.string(_modDef2621.mRy6sO);
    cResult[15] = stringResult2;
    tmp22 = stringResult2;
  } else {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (!loading) {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[16] === loading) {
    class D {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    if (cResult[19] === D) {
      class D {
        constructor() {
          closure_2(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    cResult[19] = D;
    cResult[20] = tmp25;
    cResult[21] = tmp15;
    cResult[22] = jsx(tmp(10058).PromoSheet, { illustration: tmp15, title: tmp18, description: tmp19, onDismiss: D, actions: tmp25 });
    const tmp29 = jsx(tmp(10058).PromoSheet, { illustration: tmp15, title: tmp18, description: tmp19, onDismiss: D, actions: tmp25 });
  }
  cResult[16] = loading;
  cResult[17] = null;
  cResult[18] = jsx(tmp(5601).Button, { grow: true, size: "lg", variant: "primary", loading, text: tmp22, onPress: null });
  const tmp26 = jsx(tmp(5601).Button, { grow: true, size: "lg", variant: "primary", loading, text: tmp22, onPress: null });
}) : ((markAsDismissed) => {
  let intl3;
  let loading;
  let onPress;
  let ref;
  let ref2;
  let tmp9;
  markAsDismissed = markAsDismissed.markAsDismissed;
  react = undefined;
  onPress = undefined;
  const tmp = closure_9();
  importDefault = react.useRef(false);
  const items = [markAsDismissed];
  const callback = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  react = react.useRef(ContentDismissActionType.AUTO_DISMISS);
  let obj = markAsDismissed(callback[9]);
  const unmountEffect = obj.useUnmountEffect(() => {
    callback(ref2.current);
  });
  const items1 = [callback];
  const callback1 = react.useCallback(() => {
    callback(ContentDismissActionType.TAKE_ACTION);
    const obj = openUserSettings;
    const obj2 = { screen: metroRequire.PREMIUM };
    obj.openUserSettings(obj2);
  }, items1);
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD));
  const items2 = [onPress];
  const items3 = [callback];
  require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD);
  const callback2 = react.useCallback(() => {
    ref2.current = ContentDismissActionType.TAKE_ACTION;
    onPress();
  }, items2);
  const callback3 = react.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const PromoSheet = markAsDismissed(callback[16]).PromoSheet;
  const intl = markAsDismissed(callback[13]).intl;
  const intl2 = markAsDismissed(callback[13]).intl;
  ({ grow: true, size: "lg", variant: "primary", loading, text: intl3.string(require("module_2621").mRy6sO), onPress: tmp9 });
  const Button = markAsDismissed(callback[15]).Button;
  intl3 = markAsDismissed(callback[13]).intl;
  tmp9 = null;
  if (!loading) {
    tmp9 = callback2;
  }
  return <PromoSheet illustration={null} title={intl.string(require("module_2621")["Uty2/X"])} description={intl2.string(require("module_2621").VAgI8Q)} onDismiss={callback3} actions={null} />;
});
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx");

export default tmp3;