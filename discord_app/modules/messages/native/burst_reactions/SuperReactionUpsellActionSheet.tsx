// === Module 9869: SuperReactionUpsellActionSheet ===

// Module 9869 (SuperReactionUpsellActionSheet)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import _mod7434 from "module_7434" /* 7434 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8896 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import AssetRegistry from "AssetRegistry" /* 9870 */;
import AssetRegistry2 from "AssetRegistry" /* 9871 */;
import AssetRegistry3 from "AssetRegistry" /* 9872 */;
import AssetRegistry4 from "AssetRegistry" /* 9873 */;
import AssetRegistry5 from "AssetRegistry" /* 9874 */;
import AssetRegistry6 from "AssetRegistry" /* 9875 */;
import AssetRegistry7 from "AssetRegistry" /* 9876 */;
import SuperReactionLocalImageAnimationDefault from "SuperReactionLocalImageAnimation" /* 9877 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onDismiss;

let StyleSheet;
let closure_4;
let obj2;
let size;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native);
const AnalyticsPages = Constants.AnalyticsPages;
const jsx = Fragment.jsx;
const dismissibleContent = dismissible_content.DismissibleContent.SUPER_REACTIONS_COACHMARK_MOBILE;
let items = [AssetRegistry, AssetRegistry2, AssetRegistry3, AssetRegistry4, AssetRegistry2, AssetRegistry5, AssetRegistry6, AssetRegistry7];
let createStyles = createStyles_mod;
let obj = { fill: obj2, nitroIcon: size, description: { paddingHorizontal: 16 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", top: -150 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { tintColor: nativeDefault.colors.WHITE, width: 32, height: 32, marginVertical: -8, marginRight: -4 };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onDismiss) => {
  let analyticsLocation;
  let analyticsLocations;
  let closure_3;
  let currentUser;
  let nitroIcon;
  let tmp13;
  let tmp15;
  let tmp8;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(24);
  onDismiss = onDismiss.onDismiss;
  const tmp4 = closure_10();
  _require = tmp4;
  analyticsLocations = analyticsLocations(analyticsLocation[17])().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
    cResult[0] = obj2;
    analyticsLocation = obj2;
  } else {
    analyticsLocation = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    items = [UserStore];
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[1] = items;
    cResult[2] = I;
    tmp9 = I;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(analyticsLocation[18]);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  const tmpResult2 = tmp(analyticsLocation[19]);
  const isPremiumResult = tmpResult2.isPremium(stateFromStores);
  if (cResult[3] !== analyticsLocations) {
    const fn = function b() {
      const obj = { analyticsLocation, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp = openPremiumModalDefault;
      tmp(obj);
    };
    cResult[3] = analyticsLocations;
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[4] = fn;
    tmp13 = fn;
  } else {
    tmp13 = cResult[4];
  }
  react = tmp13;
  const tmp5Result = analyticsLocations(analyticsLocation[22]);
  const tmp14 = items[tmp5Result.random(tmp5Result, 0, items.length - 1)];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const tmp18 = <tmp17 localImageSource={tmp14} animationSource={tmp(analyticsLocation[24])} />;
    cResult[5] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.fill) {
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const tmp22 = <closure_4 style={null}>{tmp15}</closure_4>;
    cResult[6] = tmp4.fill;
    cResult[7] = tmp22;
  }
  if (isPremiumResult) {
    return null;
  } else {
    let tmp23;
    let tmp26;
    let tmp28;
    let tmp32;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[25]).intl;
      const stringResult = intl.string(tmp(analyticsLocation[25]).t.Wfl5zp);
      class I {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[8] = stringResult;
      tmp23 = stringResult;
    } else {
      tmp23 = cResult[8];
    }
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[25]).intl;
      const stringResult1 = intl2.string(tmp(analyticsLocation[25]).t.eikz43);
      class I {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[11] = stringResult1;
      tmp26 = stringResult1;
    } else {
      tmp26 = cResult[11];
    }
    const _Symbol3 = Symbol;
    const description = tmp4.description;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[25]).intl;
      const stringResult2 = intl3.string(tmp(analyticsLocation[25]).t.sEAnVH);
      class I {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[12] = stringResult2;
      tmp28 = stringResult2;
    } else {
      tmp28 = cResult[12];
    }
    if (cResult[13] !== tmp4.nitroIcon) {
      class F {
        constructor() {
          return jsx(native.NitroWheel, { style: nitroIcon.nitroIcon });
        }
      }
      cResult[13] = tmp4.nitroIcon;
      class I {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[14] = F;
    } else {
      class F {
        constructor() {
          return jsx(native.NitroWheel, { style: nitroIcon.nitroIcon });
        }
      }
    }
    if (cResult[15] !== tmp13) {
      class M {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_3();
        }
      }
      cResult[15] = tmp13;
      class I {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[16] = M;
    } else {
      class M {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_3();
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_3();
        }
      }
      const stringResult3 = obj8.string(tmp(analyticsLocation[25]).t.TulDPl);
      class I {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[17] = stringResult3;
      tmp32 = stringResult3;
    } else {
      class M {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_3();
        }
      }
    }
    if (cResult[18] === onDismiss) {
      class M {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_3();
        }
      }
    }
    cResult[18] = onDismiss;
    cResult[19] = tmp4.description;
    cResult[20] = F;
    cResult[21] = M;
    cResult[22] = tmp25;
    cResult[23] = jsx(analyticsLocations(analyticsLocation[29]), { title: tmp23, backdropProps: tmp25, description: tmp26, descriptionStyle: description, dismissibleContent, primaryButtonText: tmp28, primaryButtonIcon: F, onPrimaryButtonPress: M, secondaryButtonText: tmp32, onDismiss });
    const tmp37 = jsx(analyticsLocations(analyticsLocation[29]), { title: tmp23, backdropProps: tmp25, description: tmp26, descriptionStyle: description, dismissibleContent, primaryButtonText: tmp28, primaryButtonIcon: F, onPrimaryButtonPress: M, secondaryButtonText: tmp32, onDismiss });
  }
}) : ((onDismiss) => {
  let currentUser;
  let nitroIcon;
  let analyticsLocations;
  let analyticsLocation;
  onDismiss = onDismiss.onDismiss;
  const tmp = closure_10();
  _require = tmp;
  let tmp2 = analyticsLocations;
  analyticsLocations = analyticsLocations(analyticsLocation[17])().analyticsLocations;
  analyticsLocation = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
  let obj2 = require("get initialized");
  items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = require("PremiumUtils");
  [][0] = tmp;
  let tmp8 = null;
  const isPremiumResult = obj3.isPremium(stateFromStores);
  if (!isPremiumResult) {
    tmp2(tmp3[29]);
    const intl = tmp4(tmp3[25]).intl;
    const obj5 = { backdropOpacity: require("burst_reactions/BurstReactionEffectUtils").BACKDROP_OPACITY, backdropChildren: tmp7 };
    const intl2 = tmp4(tmp3[25]).intl;
    const intl3 = tmp4(tmp3[25]).intl;
    const intl4 = tmp4(tmp3[25]).intl;
    tmp8 = <tmp2Result title={intl.string(require("intl").t.Wfl5zp)} backdropProps={obj5} description={intl2.string(require("intl").t.eikz43)} descriptionStyle={tmp.description} dismissibleContent={dismissibleContent} primaryButtonText={intl3.string(require("intl").t.sEAnVH)} primaryButtonIcon={function primaryButtonIcon() {
      return jsx(native.NitroWheel, { style: nitroIcon.nitroIcon });
    }} onPrimaryButtonPress={function onPrimaryButtonPress() {
      analyticsLocation = ActionSheetActionCreatorsDefault;
      analyticsLocation.hideActionSheet();
      const obj2 = { analyticsLocation, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj2);
    }} secondaryButtonText={intl4.string(require("intl").t.TulDPl)} onDismiss={onDismiss} />;
  }
  return tmp8;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

export default tmp5;