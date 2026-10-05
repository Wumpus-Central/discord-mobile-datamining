// discord_app/modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import PremiumMarketingButtonActions from "../../premium_marketing/native/PremiumMarketingButtonActions.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let BottomSheet, markAsDismissed;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let View = react_native.View;
const AnalyticsPages = Constants.AnalyticsPages;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  buttonContainer: size,
  header: obj3,
  body: { textAlign: "center" },
  image: size1,
  video: obj4,
};
obj2 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: nativeDefault.radii.lg,
};
createStyles = createStyles.createStyles;
size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
obj3 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
size1 = { height: 188, width: 335, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
obj4 = { borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let button3;
      let button4;
      let closure_4;
      let componentId;
      let obj3;
      let promotionId;
      let tmp5;
      let tmp6;
      let obj = markAsDismissed(promotionId[9]);
      const cResult = obj.c(58);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const bottomSheetData = markAsDismissed.bottomSheetData;
      ({ componentId, promotionId } = markAsDismissed);
      closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function h() {
          return AccessibilityStore.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = markAsDismissed(promotionId[10]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const analyticsLocations = bottomSheetData(promotionId[11])().analyticsLocations;
      if (cResult[2] === markAsDismissed) {
        let tmp9;
        if (cResult[3] === promotionId) {
          tmp9 = cResult[4];
        }
        View = tmp9;
        if (cResult[5] === analyticsLocations) {
          let button = bottomSheetData.button;
          let buttonAction;
          const tmp10 = cResult[6];
          if (button != null) {
            buttonAction = button.buttonAction;
          }
          if (tmp10 === buttonAction) {
            let button2 = bottomSheetData.button;
            let value;
            const tmp13 = cResult[7];
            if (button2 != null) {
              const iter = button2.navigableStorefrontApplicationId;
              if (iter != null) {
                value = iter.value;
              }
            }
            if (tmp13 === value) {
              ({ button: button3, button: button4 } = bottomSheetData);
              if (cResult[10] !== tmp9) {
                class P {
                  constructor() {
                    closure_4(ContentDismissActionType.USER_DISMISS);
                  }
                }
                cResult[10] = tmp9;
                cResult[11] = P;
              } else {
                class P {
                  constructor() {
                    closure_4(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              if (cResult[12] === bottomSheetData.dismissibleContent) {
                class P {
                  constructor() {
                    closure_4(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              let obj2 = {
                type: tmp(promotionId[14]).ImpressionTypes.HALFSHEET,
                name: tmp(promotionId[14]).ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                properties: obj3,
              };
              cResult[12] = bottomSheetData.dismissibleContent;
              cResult[13] = componentId;
              cResult[14] = promotionId;
              cResult[15] = obj2;
              obj3 = {
                component_type: markAsDismissed(promotionId[15]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
                component_id: componentId,
                dismissible_content: bottomSheetData.dismissibleContent,
                promotion_id: promotionId,
              };
            }
          }
        }
        cResult[5] = analyticsLocations;
        if (bottomSheetData.button != null) {
          class P {
            constructor() {
              closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        cResult[6] = undefined;
        if (bottomSheetData.button != null) {
          class P {
            constructor() {
              closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
          if (tmp19 != null) {
            class P {
              constructor() {
                closure_4(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
        }
        const fn2 = function x() {
          let value;
          closure_4(ContentDismissActionType.PRIMARY);
          const button = bottomSheetData.button;
          let buttonAction;
          const getButtonActionHandler = PremiumMarketingButtonActions.getButtonActionHandler;
          if (button != null) {
            buttonAction = button.buttonAction;
          }
          const button2 = bottomSheetData.button;
          const obj = {
            buttonAction,
            applicationId: value,
            analyticsLocations,
            analyticsPage: AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET,
          };
          value = undefined;
          if (button2 != null) {
            if (button2.navigableStorefrontApplicationId != null) {
              value = iter.value;
            }
          }
          getButtonActionHandler(obj)();
        };
        cResult[7] = undefined;
        cResult[8] = tmp9;
        cResult[9] = fn2;
      }
      class T {
        constructor(arg0) {
          markAsDismissed(arg0);
          const obj = DispatcherDefault;
          const obj2 = { type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId };
          obj.dispatch(obj2);
        }
      }
      cResult[2] = markAsDismissed;
      cResult[3] = promotionId;
      cResult[4] = T;
      tmp9 = T;
    }
  : (markAsDismissed) => {
      let copy;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let obj10;
      let obj6;
      let obj8;
      let tmp14Result;
      let tmp5Result2;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const bottomSheetData = markAsDismissed.bottomSheetData;
      const promotionId = markAsDismissed.promotionId;
      let helpArticleLinkProps;
      const componentId = markAsDismissed.componentId;
      const tmp = closure_10();
      let obj = markAsDismissed(promotionId[10]);
      const items = [helpArticleLinkProps];
      const stateFromStores = obj.useStateFromStores(items, () => helpArticleLinkProps.useReducedMotion);
      const analyticsLocations = bottomSheetData(promotionId[11])().analyticsLocations;
      let obj2 = analyticsLocations;
      const items1 = [markAsDismissed, promotionId];
      const callback = analyticsLocations.useCallback((arg0) => {
        markAsDismissed(arg0);
        const obj = DispatcherDefault;
        const obj2 = { type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId };
        obj.dispatch(obj2);
      }, items1);
      let button = bottomSheetData.button;
      let buttonAction;
      const useCallback = analyticsLocations.useCallback;
      if (button != null) {
        buttonAction = button.buttonAction;
      }
      const items2 = [buttonAction, , ,];
      let button2 = bottomSheetData.button;
      let value;
      if (button2 != null) {
        const iter = button2.navigableStorefrontApplicationId;
        if (iter != null) {
          value = iter.value;
        }
      }
      items2[1] = value;
      items2[2] = callback;
      items2[3] = analyticsLocations;
      const items3 = [callback];
      const callback1 = useCallback(() => {
        let value;
        callback(ContentDismissActionType.PRIMARY);
        const button = bottomSheetData.button;
        let buttonAction;
        const getButtonActionHandler = PremiumMarketingButtonActions.getButtonActionHandler;
        if (button != null) {
          buttonAction = button.buttonAction;
        }
        const button2 = bottomSheetData.button;
        const obj = {
          buttonAction,
          applicationId: value,
          analyticsLocations,
          analyticsPage: AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET,
        };
        value = undefined;
        if (button2 != null) {
          if (button2.navigableStorefrontApplicationId != null) {
            value = iter.value;
          }
        }
        getButtonActionHandler(obj)();
      }, items2);
      const callback2 = obj2.useCallback(() => {
        callback(ContentDismissActionType.USER_DISMISS);
      }, items3);
      const obj3 = {
        type: markAsDismissed(promotionId[14]).ImpressionTypes.HALFSHEET,
        name: markAsDismissed(promotionId[14]).ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
          component_type: markAsDismissed(promotionId[15]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
          component_id: componentId,
          dismissible_content: bottomSheetData.dismissibleContent,
          promotion_id: promotionId,
        },
      };
      const tmp5Result = bottomSheetData(promotionId[16]);
      ({
        component_type: markAsDismissed(promotionId[15]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
        component_id: componentId,
        dismissible_content: bottomSheetData.dismissibleContent,
        promotion_id: promotionId,
      });
      tmp5Result(obj3);
      const tmp2Result = markAsDismissed(promotionId[17]);
      helpArticleLinkProps = tmp2Result.getHelpArticleLinkProps(
        bottomSheetData.helpArticle,
        bottomSheetData.helpArticleId,
      );
      const obj5 = { onDismiss: callback2, children: closure_9(callback, obj6) };
      obj6 = { style: items4, children: items5 };
      items4 = [tmp.container];
      BottomSheet = tmp2(tmp3[25]).BottomSheet;
      const obj7 = { uri: bottomSheetData.assetUrl };
      const tmp2Result2 = markAsDismissed(promotionId[18]);
      if (tmp2Result2.getFile(obj7).isVideo) {
        size = {
          src: obj8,
          style: tmp.video,
          muted: true,
          height: 188,
          width: 335,
          paused: stateFromStores,
          resizeMode: "contain",
        };
        obj8 = { videoURI: null, uri: null };
        ({ assetUrl: obj13.videoURI, assetUrl: obj13.uri } = bottomSheetData);
        tmp14Result = closure_8(tmp5(tmp3[19]), size);
      } else {
        const obj9 = { source: obj10, style: tmp.image, resizeMode: "contain" };
        obj10 = { uri: bottomSheetData.assetUrl };
        tmp14Result = closure_8(tmp5(tmp3[20]), obj9);
      }
      items5 = [tmp14Result, , ,];
      const obj11 = {
        style: items6,
        color: "mobile-text-heading-primary",
        variant: "heading-lg/extrabold",
        children: bottomSheetData.header,
      };
      items6 = [tmp.header];
      items5[1] = closure_8(markAsDismissed(promotionId[21]).Text, obj11);
      const obj12 = { style: items7, color: "text-default", variant: "text-sm/normal", children: items8 };
      items7 = [tmp.body];
      items8 = [bottomSheetData.body, " "];
      let tmp14Result2 = null != helpArticleLinkProps;
      const Text = tmp2(tmp3[21]).Text;
      if (tmp14Result2) {
        const obj14 = {
          color: "text-link",
          variant: "text-sm/normal",
          accessibilityRole: "link",
          onPress() {
            const obj = LinkingDefault;
            return obj.openURL(helpArticleLinkProps.url);
          },
          children: helpArticleLinkProps.linkText,
        };
        tmp14Result2 = closure_8(tmp2(tmp3[21]).Text, obj14);
      }
      items8[2] = tmp14Result2;
      items5[2] = closure_9(Text, obj12);
      const obj15 = { style: items9, children: closure_8(tmp5Result2, { text: copy, onPress: callback1 }) };
      items9 = [tmp.buttonContainer];
      const button3 = bottomSheetData.button;
      copy = undefined;
      tmp5Result2 = bottomSheetData(promotionId[24]);
      if (button3 != null) {
        copy = button3.copy;
      }
      if (copy == null) {
        const intl = tmp2(tmp3[23]).intl;
        copy = intl.string(tmp2(tmp3[23]).t.J61px0);
      }
      items5[3] = closure_8(callback, obj15);
      return closure_8(BottomSheet, obj5);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx");

export default tmp4;
