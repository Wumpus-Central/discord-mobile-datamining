// discord_app/modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import PremiumMarketingButtonActions from "../../premium_marketing/native/PremiumMarketingButtonActions.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
let View = fn(17).View;
const AnalyticsPages = fn(1085).AnalyticsPages;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: nativeDefault.radii.lg,
  },
  buttonContainer: null,
  header: null,
  body: null,
  image: null,
  video: null,
};
let size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
obj2.buttonContainer = size;
let obj3 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: nativeDefault.radii.lg,
};
obj2.header = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.body = { textAlign: "center" };
const size1 = {
  height: 188,
  width: 335,
  borderRadius: nativeDefault.radii.md,
  marginBottom: nativeDefault.space.PX_24,
};
obj2.image = size1;
let obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.video = { borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(promotionId[9]).c(58);
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
      let obj = markAsDismissed(promotionId[9]);
      const stateFromStores = markAsDismissed(promotionId[10]).useStateFromStores(tmp5, tmp6);
      const analyticsLocations = bottomSheetData(promotionId[11])().analyticsLocations;
      if (cResult[2] === markAsDismissed) {
        if (cResult[3] === promotionId) {
          let tmp9 = cResult[4];
        }
        View = tmp9;
        if (cResult[5] === analyticsLocations) {
          let button = bottomSheetData.button;
          let buttonAction;
          if (button != null) {
            buttonAction = button.buttonAction;
          }
          if (cResult[6] === buttonAction) {
            let button2 = bottomSheetData.button;
            value = undefined;
            if (button2 != null) {
              if (button2.navigableStorefrontApplicationId != null) {
                value = iter.value;
              }
            }
            if (cResult[7] === value) {
              ({ button: button3, button: button4 } = bottomSheetData);
              if (cResult[10] !== tmp9) {
                class P {
                  constructor() {
                    tmp = closure_4(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
                cResult[10] = tmp9;
                cResult[11] = P;
              } else {
                class P {
                  constructor() {
                    tmp = closure_4(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
              }
              if (cResult[12] === bottomSheetData.dismissibleContent) {
                class P {
                  constructor() {
                    tmp = closure_4(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
              }
              let obj2 = {
                type: tmp(promotionId[14]).ImpressionTypes.HALFSHEET,
                name: tmp(promotionId[14]).ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                properties: null,
              };
              const obj3 = {
                component_type: tmp(promotionId[15]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
                component_id: componentId,
                dismissible_content: bottomSheetData.dismissibleContent,
                promotion_id: promotionId,
              };
              obj2.properties = obj3;
              cResult[12] = bottomSheetData.dismissibleContent;
              cResult[13] = componentId;
              cResult[14] = promotionId;
              cResult[15] = obj2;
            }
          }
        }
        cResult[5] = analyticsLocations;
        if (bottomSheetData.button != null) {
          class P {
            constructor() {
              tmp = closure_4(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        cResult[6] = undefined;
        if (bottomSheetData.button != null) {
          class P {
            constructor() {
              tmp = closure_4(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          if (tmp17 != null) {
            class P {
              constructor() {
                tmp = closure_4(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
        }
        const fn2 = function x() {
          closure_4(ContentDismissActionType.PRIMARY);
          const button = bottomSheetData.button;
          let buttonAction;
          if (button != null) {
            buttonAction = button.buttonAction;
          }
          const obj2 = { buttonAction, applicationId: null, analyticsLocations: null, analyticsPage: null };
          const button2 = bottomSheetData.button;
          value = undefined;
          if (button2 != null) {
            if (button2.navigableStorefrontApplicationId != null) {
              value = iter.value;
            }
          }
          obj2.applicationId = value;
          obj2.analyticsLocations = analyticsLocations;
          obj2.analyticsPage = AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET;
          PremiumMarketingButtonActions.getButtonActionHandler(obj2)();
        };
        cResult[7] = undefined;
        cResult[8] = tmp9;
        cResult[9] = fn2;
      }
      class T {
        constructor(arg0) {
          tmp = markAsDismissed(markAsDismissed);
          obj = closure_1(closure_2[12]);
          obj1 = { type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId };
          dispatchResult = obj.dispatch(obj1);
          return;
        }
      }
      cResult[2] = markAsDismissed;
      cResult[3] = promotionId;
      cResult[4] = T;
      tmp9 = T;
      const tmpResult = markAsDismissed(promotionId[10]);
    }
  : (component_id) => {
      const markAsDismissed = component_id.markAsDismissed;
      const bottomSheetData = component_id.bottomSheetData;
      const promotionId = component_id.promotionId;
      let helpArticleLinkProps;
      const tmp = closure_10();
      const items = [helpArticleLinkProps];
      const stateFromStores = markAsDismissed(promotionId[10]).useStateFromStores(
        items,
        () => helpArticleLinkProps.useReducedMotion,
      );
      const analyticsLocations = bottomSheetData(promotionId[11])().analyticsLocations;
      const items1 = [markAsDismissed, promotionId];
      const callback = analyticsLocations.useCallback((arg0) => {
        markAsDismissed(arg0);
        DispatcherDefault.dispatch({ type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId });
      }, items1);
      let button = bottomSheetData.button;
      let buttonAction;
      if (button != null) {
        buttonAction = button.buttonAction;
      }
      const items2 = [buttonAction, , ,];
      let button2 = bottomSheetData.button;
      value = undefined;
      if (button2 != null) {
        if (button2.navigableStorefrontApplicationId != null) {
          value = iter.value;
        }
      }
      items2[1] = value;
      items2[2] = callback;
      items2[3] = analyticsLocations;
      const items3 = [callback];
      const callback1 = analyticsLocations.useCallback(() => {
        callback(ContentDismissActionType.PRIMARY);
        const button = bottomSheetData.button;
        let buttonAction;
        if (button != null) {
          buttonAction = button.buttonAction;
        }
        const obj2 = { buttonAction, applicationId: null, analyticsLocations: null, analyticsPage: null };
        const button2 = bottomSheetData.button;
        value = undefined;
        if (button2 != null) {
          if (button2.navigableStorefrontApplicationId != null) {
            value = iter.value;
          }
        }
        obj2.applicationId = value;
        obj2.analyticsLocations = analyticsLocations;
        obj2.analyticsPage = AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET;
        PremiumMarketingButtonActions.getButtonActionHandler(obj2)();
      }, items2);
      const callback2 = analyticsLocations.useCallback(() => {
        callback(ContentDismissActionType.USER_DISMISS);
      }, items3);
      const obj3 = { type: null, name: null, properties: null };
      let obj = markAsDismissed(promotionId[10]);
      obj3.type = markAsDismissed(promotionId[14]).ImpressionTypes.HALFSHEET;
      obj3.name = markAsDismissed(promotionId[14]).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
      const tmp5Result = bottomSheetData(promotionId[16]);
      obj3.properties = {
        component_type: markAsDismissed(promotionId[15]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
        component_id: component_id.componentId,
        dismissible_content: bottomSheetData.dismissibleContent,
        promotion_id: promotionId,
      };
      tmp5Result(obj3);
      const obj4 = {
        component_type: markAsDismissed(promotionId[15]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
        component_id: component_id.componentId,
        dismissible_content: bottomSheetData.dismissibleContent,
        promotion_id: promotionId,
      };
      helpArticleLinkProps = markAsDismissed(promotionId[17]).getHelpArticleLinkProps(
        bottomSheetData.helpArticle,
        bottomSheetData.helpArticleId,
      );
      const obj5 = { onDismiss: callback2, children: null };
      const obj6 = { style: null, children: null };
      const items4 = [tmp.container];
      obj6.style = items4;
      const tmp2Result = markAsDismissed(promotionId[17]);
      if (tmp2Result2.getFile(obj7).isVideo) {
        const size = {
          src: null,
          style: null,
          muted: true,
          height: 188,
          width: 335,
          paused: null,
          resizeMode: "contain",
        };
        ({ assetUrl: obj13.videoURI, assetUrl: obj13.uri } = bottomSheetData);
        size.src = { videoURI: null, uri: null };
        size.style = tmp.video;
        size.paused = stateFromStores;
        let tmp14Result = closure_8(tmp5(tmp3[19]), size);
        const obj8 = { videoURI: null, uri: null };
      } else {
        const obj9 = { source: null, style: null, resizeMode: "contain" };
        const obj10 = { uri: bottomSheetData.assetUrl };
        obj9.source = obj10;
        obj9.style = tmp.image;
        tmp14Result = closure_8(tmp5(tmp3[20]), obj9);
      }
      const items5 = [tmp14Result, , ,];
      const obj11 = {
        style: null,
        color: "mobile-text-heading-primary",
        variant: "heading-lg/extrabold",
        children: bottomSheetData.header,
      };
      const items6 = [tmp.header];
      obj11.style = items6;
      items5[1] = closure_8(markAsDismissed(promotionId[21]).Text, obj11);
      const obj12 = { style: null, color: "text-default", variant: "text-sm/normal", children: null };
      const items7 = [tmp.body];
      obj12.style = items7;
      const items8 = [bottomSheetData.body, " "];
      let tmp14Result2 = null != helpArticleLinkProps;
      if (tmp14Result2) {
        const obj14 = {
          color: "text-link",
          variant: "text-sm/normal",
          accessibilityRole: "link",
          onPress() {
            return LinkingDefault.openURL(helpArticleLinkProps.url);
          },
          children: helpArticleLinkProps.linkText,
        };
        tmp14Result2 = closure_8(tmp2(tmp3[21]).Text, obj14);
      }
      items8[2] = tmp14Result2;
      obj12.children = items8;
      items5[2] = closure_9(markAsDismissed(promotionId[21]).Text, obj12);
      const obj15 = { style: null, children: null };
      const items9 = [tmp.buttonContainer];
      obj15.style = items9;
      const button3 = bottomSheetData.button;
      let copy;
      obj7 = { uri: bottomSheetData.assetUrl };
      tmp2Result2 = markAsDismissed(promotionId[18]);
      if (button3 != null) {
        copy = button3.copy;
      }
      if (copy == null) {
        const intl = tmp2(tmp3[23]).intl;
        copy = intl.string(tmp2(tmp3[23]).t.J61px0);
      }
      obj15.children = closure_8(bottomSheetData(promotionId[24]), { text: copy, onPress: callback1 });
      items5[3] = closure_8(callback, obj15);
      obj6.children = items5;
      obj5.children = closure_9(callback, obj6);
      return closure_8(markAsDismissed(promotionId[25]).BottomSheet, obj5);
    };
