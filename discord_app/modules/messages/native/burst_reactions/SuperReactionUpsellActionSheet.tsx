// discord_app/modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _mod7423 from "../../../../../_runtime/metro/07423__.js";
import PremiumFeaturesCards from "../../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import SuperReactionLocalImageAnimationDefault from "SuperReactionLocalImageAnimation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const AnalyticsPages = fn(1085).AnalyticsPages;
const jsx = fn(21).jsx;
const dismissibleContent = fn(2036).DismissibleContent.SUPER_REACTIONS_COACHMARK_MOBILE;
let items = [fn(9857), fn(9858), fn(9859), fn(9860), fn(9858), fn(9861), fn(9862), fn(9863)];
const createStyles = fn(4890);
let obj2 = { fill: null, nitroIcon: null, description: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flex = 1;
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.top = -150;
obj2.fill = obj3;
let size = { tintColor: nativeDefault.colors.WHITE, width: 32, height: 32, marginVertical: -8, marginRight: -4 };
obj2.nitroIcon = size;
obj2.description = { paddingHorizontal: 16 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onDismiss) => {
      const cResult = require("c").c(24);
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
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[1] = items;
        cResult[2] = I;
        let tmp9 = I;
        let tmp8 = items;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
      const tmpResult = require("initialize");
      const tmpResult2 = require("PremiumUtils");
      if (cResult[3] !== analyticsLocations) {
        const fn = function b() {
          const obj = {
            analyticsLocation,
            analyticsLocations,
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          };
          openPremiumModalDefault(obj);
        };
        cResult[3] = analyticsLocations;
        class I {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[4] = fn;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[4];
      }
      noop = tmp13;
      const tmp5Result = analyticsLocations(analyticsLocation[22]);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          localImageSource: items[tmp5Result.random(tmp5Result, 0, items.length - 1)],
          animationSource: null,
        };
        class I {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        obj3.animationSource = tmp(tmp2[24]);
        const tmp17 = (
          <tmp16 localImageSource={items[tmp5Result.random(tmp5Result, 0, items.length - 1)]} animationSource={null} />
        );
        cResult[5] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] !== tmp4.fill) {
        const obj4 = { style: null, children: null };
        class I {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        obj4.children = tmp14;
        const tmp21 = <closure_4 style={null}>{null}</closure_4>;
        cResult[6] = tmp4.fill;
        cResult[7] = tmp21;
      }
      if (isPremiumResult) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[25]).intl;
          const stringResult = intl.string(tmp(tmp2[25]).t.Wfl5zp);
          class I {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[8] = stringResult;
          let tmp22 = stringResult;
        } else {
          tmp22 = cResult[8];
        }
        class I {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[25]).intl;
          const stringResult1 = intl2.string(tmp(tmp2[25]).t.eikz43);
          class I {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[11] = stringResult1;
          let tmp25 = stringResult1;
        } else {
          tmp25 = cResult[11];
        }
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(tmp2[25]).intl;
          const stringResult2 = intl3.string(tmp(tmp2[25]).t.sEAnVH);
          class I {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[12] = stringResult2;
          let tmp27 = stringResult2;
        } else {
          tmp27 = cResult[12];
        }
        if (cResult[13] !== tmp4.nitroIcon) {
          class F {
            constructor() {
              obj = { style: closure_0.nitroIcon };
              return jsx(closure_0(closure_2[27]).NitroWheel, obj);
            }
          }
          cResult[13] = tmp4.nitroIcon;
          class I {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[14] = F;
        } else {
          class F {
            constructor() {
              obj = { style: closure_0.nitroIcon };
              return jsx(closure_0(closure_2[27]).NitroWheel, obj);
            }
          }
        }
        if (cResult[15] !== tmp13) {
          class M {
            constructor() {
              obj = closure_1(closure_2[28]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_3();
              return;
            }
          }
          cResult[15] = tmp13;
          class I {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[16] = M;
        } else {
          class M {
            constructor() {
              obj = closure_1(closure_2[28]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_3();
              return;
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              obj = closure_1(closure_2[28]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_3();
              return;
            }
          }
          const stringResult3 = obj8.string(tmp(tmp2[25]).t.TulDPl);
          class I {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          cResult[17] = stringResult3;
          const tmp31 = stringResult3;
        } else {
          class M {
            constructor() {
              obj = closure_1(closure_2[28]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_3();
              return;
            }
          }
        }
        if (cResult[18] === onDismiss) {
          class M {
            constructor() {
              obj = closure_1(closure_2[28]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_3();
              return;
            }
          }
        }
        const obj5 = {
          title: tmp22,
          backdropProps: tmp24,
          description: tmp25,
          descriptionStyle: tmp4.description,
          dismissibleContent,
          primaryButtonText: tmp27,
          primaryButtonIcon: F,
          onPrimaryButtonPress: M,
          secondaryButtonText: tmp31,
          onDismiss,
        };
        const tmp36 = jsx(tmp5(tmp2[29]), {
          title: tmp22,
          backdropProps: tmp24,
          description: tmp25,
          descriptionStyle: tmp4.description,
          dismissibleContent,
          primaryButtonText: tmp27,
          primaryButtonIcon: F,
          onPrimaryButtonPress: M,
          secondaryButtonText: tmp31,
          onDismiss,
        });
        cResult[18] = onDismiss;
        cResult[19] = tmp4.description;
        cResult[20] = F;
        cResult[21] = M;
        cResult[22] = tmp24;
        cResult[23] = tmp36;
      }
      isPremiumResult = require("PremiumUtils").isPremium(stateFromStores);
    }
  : (onDismiss) => {
      let analyticsLocations;
      let analyticsLocation;
      const tmp = closure_10();
      _require = tmp;
      analyticsLocations = analyticsLocations(analyticsLocation[17])().analyticsLocations;
      analyticsLocation = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
      items = [UserStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj2 = require("initialize");
      const tmp2 = analyticsLocations;
      [][0] = tmp;
      let obj3 = require("PremiumUtils");
      let tmp8 = null;
      if (!isPremiumResult) {
        const obj4 = {
          title: null,
          backdropProps: null,
          description: null,
          descriptionStyle: null,
          dismissibleContent: null,
          primaryButtonText: null,
          primaryButtonIcon: null,
          onPrimaryButtonPress: null,
          secondaryButtonText: null,
          onDismiss: null,
        };
        const intl = tmp4(tmp3[25]).intl;
        obj4.title = intl.string(tmp4(tmp3[25]).t.Wfl5zp);
        const obj5 = { backdropOpacity: tmp4(tmp3[26]).BACKDROP_OPACITY, backdropChildren: tmp7 };
        obj4.backdropProps = obj5;
        const intl2 = tmp4(tmp3[25]).intl;
        obj4.description = intl2.string(tmp4(tmp3[25]).t.eikz43);
        obj4.descriptionStyle = tmp.description;
        obj4.dismissibleContent = dismissibleContent;
        const intl3 = tmp4(tmp3[25]).intl;
        obj4.primaryButtonText = intl3.string(tmp4(tmp3[25]).t.sEAnVH);
        obj4.primaryButtonIcon = function primaryButtonIcon() {
          return jsx(native.NitroWheel, { style: closure_0.nitroIcon });
        };
        obj4.onPrimaryButtonPress = function onPrimaryButtonPress() {
          analyticsLocation = ActionSheetActionCreatorsDefault;
          analyticsLocation.hideActionSheet();
          const obj2 = {
            analyticsLocation,
            analyticsLocations,
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          };
          openPremiumModalDefault(obj2);
        };
        const intl4 = tmp4(tmp3[25]).intl;
        obj4.secondaryButtonText = intl4.string(tmp4(tmp3[25]).t.TulDPl);
        obj4.onDismiss = onDismiss.onDismiss;
        tmp8 = jsx(tmp2(tmp3[29]), {
          title: null,
          backdropProps: null,
          description: null,
          descriptionStyle: null,
          dismissibleContent: null,
          primaryButtonText: null,
          primaryButtonIcon: null,
          onPrimaryButtonPress: null,
          secondaryButtonText: null,
          onDismiss: null,
        });
        const tmp2Result = tmp2(tmp3[29]);
      }
      return tmp8;
    };
