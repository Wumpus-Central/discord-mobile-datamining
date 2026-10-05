// discord_app/modules/collectibles/shop_this_look/native/ShopThisLookMarketingCoachmark.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import Constants from "../../../user_profile/native/Constants.tsx";
import ShopThisLookAnalyticsUtils from "../ShopThisLookAnalyticsUtils.tsx";
import BumpingFistsSpotIllustration from "../../../../design/components/mana-assets/native/generated/BumpingFistsSpotIllustration.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let visible;

const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(BumpingFistsSpotIllustration.BumpingFistsSpotIllustration, {
          width: 100,
          height: 56,
          resizeMode: "contain",
        });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.imageContainer) {
        const tmp11 = <View style={tmp4.imageContainer}>{first}</View>;
        cResult[1] = tmp4.imageContainer;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => (
      <View style={closure_7().imageContainer}>
        {jsx(BumpingFistsSpotIllustration.BumpingFistsSpotIllustration, {
          width: 100,
          height: 56,
          resizeMode: "contain",
        })}
      </View>
    );
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      let constants2;
      let onDismiss;
      let tmp10;
      let tmp9;
      let obj = visible(onDismiss[7]);
      const cResult = obj.c(20);
      visible = visible.visible;
      onDismiss = visible.onDismiss;
      const onPress = visible.onPress;
      let closure_3 = onPress.useRef(false);
      if (cResult[0] === onDismiss) {
        let tmp4;
        let tmp7;
        if (cResult[1] === onPress) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== onDismiss) {
          class E {
            constructor() {
              closure_3.current = true;
              onDismiss(ContentDismissActionType.USER_DISMISS);
            }
          }
          cResult[3] = onDismiss;
          cResult[4] = E;
        } else {
          class E {
            constructor() {
              closure_3.current = true;
              onDismiss(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[5] !== visible) {
          class I {
            constructor() {
              if (visible) {
                const obj = ShopThisLookAnalyticsUtils;
                const result = obj.trackShopThisLookMenuAction(
                  ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED,
                  UserProfileThemeTypes.ACTION_SHEET,
                );
              }
            }
          }
          const items = [visible];
          cResult[5] = visible;
          cResult[6] = I;
          cResult[7] = items;
          tmp7 = items;
        } else {
          class I {
            constructor() {
              if (visible) {
                const obj = ShopThisLookAnalyticsUtils;
                const result = obj.trackShopThisLookMenuAction(
                  ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED,
                  UserProfileThemeTypes.ACTION_SHEET,
                );
              }
            }
          }
          tmp7 = cResult[7];
        }
        const effect = obj2.useEffect(I, tmp7);
        if (cResult[8] === onDismiss) {
          let tmp14;
          let tmp13;
          let tmp18;
          let tmp17;
          class I {
            constructor() {
              if (visible) {
                const obj = ShopThisLookAnalyticsUtils;
                const result = obj.trackShopThisLookMenuAction(
                  ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED,
                  UserProfileThemeTypes.ACTION_SHEET,
                );
              }
            }
          }
          const effect1 = obj2.useEffect(tmp9, tmp10);
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                if (visible) {
                  const obj = ShopThisLookAnalyticsUtils;
                  const result = obj.trackShopThisLookMenuAction(
                    ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED,
                    UserProfileThemeTypes.ACTION_SHEET,
                  );
                }
              }
            }
            const stringResult = obj3.string(visible(onDismiss[10]).t.TrOccu);
            const intl = tmp(tmp2[10]).intl;
            const stringResult1 = intl.string(visible(onDismiss[10]).t["Eh5+1F"]);
            cResult[12] = stringResult;
            cResult[13] = stringResult1;
            tmp14 = stringResult1;
            tmp13 = stringResult;
          } else {
            class I {
              constructor() {
                if (visible) {
                  const obj = ShopThisLookAnalyticsUtils;
                  const result = obj.trackShopThisLookMenuAction(
                    ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED,
                    UserProfileThemeTypes.ACTION_SHEET,
                  );
                }
              }
            }
            tmp14 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor() {
                return <closure_1_8 />;
              }
            }
            const intl2 = tmp(tmp2[10]).intl;
            const stringResult2 = intl2.string(visible(onDismiss[10]).t["bqZVd/"]);
            cResult[14] = stringResult2;
            cResult[15] = L;
            tmp18 = L;
            tmp17 = stringResult2;
          } else {
            class L {
              constructor() {
                return <closure_1_8 />;
              }
            }
            tmp18 = cResult[15];
          }
          if (cResult[16] === tmp4) {
            class L {
              constructor() {
                return <closure_1_8 />;
              }
            }
          }
          const obj4 = {
            title: tmp13,
            description: tmp14,
            visible,
            position: "bottom",
            renderImgComponent: tmp18,
            buttonLabel: tmp17,
            buttonVariant: "primary",
            onButtonPress: tmp4,
            onDismiss: E,
          };
          cResult[16] = tmp4;
          cResult[17] = E;
          cResult[18] = visible;
          cResult[19] = obj4;
        }
        const fn2 = function f() {
          let ref;
          return visible
            ? () => {
                const obj = visible(onDismiss[9]);
                const result = obj.trackShopThisLookMenuAction(
                  visible(onDismiss[9]).ShopThisLookMenuAction.COACHMARK_DISMISSED,
                  constants2.ACTION_SHEET,
                );
                if (!ref.current) {
                  closure_1_1(constants.AUTO_DISMISS);
                }
              }
            : undefined;
        };
        const items1 = [visible, onDismiss];
        cResult[8] = onDismiss;
        cResult[9] = visible;
        cResult[10] = fn2;
        cResult[11] = items1;
        tmp10 = items1;
        tmp9 = fn2;
      }
      const fn = function u() {
        closure_3.current = true;
        const obj = ShopThisLookAnalyticsUtils;
        const result = obj.trackShopThisLookMenuAction(
          ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_CTA_CLICKED,
          UserProfileThemeTypes.ACTION_SHEET,
        );
        onDismiss(ContentDismissActionType.TAKE_ACTION);
        onPress();
      };
      cResult[0] = onDismiss;
      cResult[1] = onPress;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (visible) => {
      visible = visible.visible;
      const onDismiss = visible.onDismiss;
      const onPress = visible.onPress;
      const targetRef = visible.targetRef;
      let closure_3 = onPress.useRef(false);
      const items = [onDismiss, onPress];
      const onButtonPress = onPress.useCallback(() => {
        closure_3.current = true;
        const obj = ShopThisLookAnalyticsUtils;
        const result = obj.trackShopThisLookMenuAction(
          ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_CTA_CLICKED,
          UserProfileThemeTypes.ACTION_SHEET,
        );
        onDismiss(ContentDismissActionType.TAKE_ACTION);
        onPress();
      }, items);
      const items1 = [onDismiss];
      const callback1 = onPress.useCallback(() => {
        closure_3.current = true;
        onDismiss(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const items2 = [visible];
      const effect = onPress.useEffect(() => {
        if (visible) {
          const obj = ShopThisLookAnalyticsUtils;
          const result = obj.trackShopThisLookMenuAction(
            ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED,
            UserProfileThemeTypes.ACTION_SHEET,
          );
        }
      }, items2);
      const items3 = [visible, onDismiss];
      const effect1 = onPress.useEffect(() => {
        let ref;
        return visible
          ? () => {
              const obj = visible(onDismiss[9]);
              const result = obj.trackShopThisLookMenuAction(
                visible(onDismiss[9]).ShopThisLookMenuAction.COACHMARK_DISMISSED,
                callback1.ACTION_SHEET,
              );
              if (!ref.current) {
                closure_1_1(callback.AUTO_DISMISS);
              }
            }
          : undefined;
      }, items3);
      const items4 = [visible, onButtonPress, callback1];
      const memo = onPress.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        const obj = {
          title: intl.string(intl4.t.TrOccu),
          description: intl2.string(intl4.t["Eh5+1F"]),
          visible,
          position: "bottom",
          renderImgComponent() {
            return closure_1_6(closure_1_8, {});
          },
          buttonLabel: intl3.string(intl4.t["bqZVd/"]),
          buttonVariant: "primary",
          onButtonPress,
          onDismiss: callback1,
        };
        intl = intl4.intl;
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        return obj;
      }, items4);
      let obj = visible(onDismiss[11]);
      const coachmark = obj.useCoachmark(targetRef, memo);
      return null;
    };
let result = size.fileFinishedImporting(
  "modules/collectibles/shop_this_look/native/ShopThisLookMarketingCoachmark.tsx",
);

export default tmp2;
