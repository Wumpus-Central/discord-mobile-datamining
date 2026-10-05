// === Module 13231: MarketingPageBannerTile ===

// Module 13231 (MarketingPageBannerTile)
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4565 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8422 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9648 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%" }, card: obj2, image: size, bodyText: obj3, ctaButton: obj4 };
obj2 = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: "100%", maxWidth: 317, height: 144, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, alignSelf: "center" };
obj3 = { marginTop: nativeDefault.space.PX_4 };
obj4 = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsPage;
  let bannerFields;
  let cardStyle;
  let componentId;
  let items;
  let items1;
  let obj10;
  let obj12;
  let obj7;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let promotionId;
  let style;
  let url;
  let obj = require("react");
  const cResult = obj.c(43);
  ({ style, cardStyle, componentId, promotionId, bannerFields, analyticsPage, onPaymentSuccess, onPaymentDismiss } = arg0);
  const tmp4 = closure_7();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const button = bannerFields.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const button2 = bannerFields.button;
  let value;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === analyticsPage) {
      if (cResult[2] === onPaymentDismiss) {
        if (cResult[3] === onPaymentSuccess) {
          if (cResult[4] === buttonAction) {
            let tmp8;
            if (cResult[5] === value) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === componentId) {
              let tmp10;
              if (cResult[8] === promotionId) {
                tmp10 = cResult[9];
              }
              useTrackImpressionDefault(tmp10);
              const tmpResult = require("PromotionStringUtils");
              const formatStringWithCommonPremiumParams = tmpResult.useFormatStringWithCommonPremiumParams(bannerFields.body);
              if (cResult[10] === bannerFields.helpArticle) {
                let tmp13;
                if (cResult[11] === bannerFields.helpArticleId) {
                  tmp13 = cResult[12];
                }
                _require = tmp13;
                if (cResult[13] === style) {
                  let tmp15;
                  if (cResult[14] === tmp4.container) {
                    tmp15 = cResult[15];
                  }
                  if (cResult[16] === cardStyle) {
                    let tmp16;
                    if (cResult[17] === tmp4.card) {
                      tmp16 = cResult[18];
                    }
                    if (cResult[19] === bannerFields.assetUrl) {
                      let tmp17;
                      let tmp21;
                      let tmp24;
                      if (cResult[20] === tmp4.image) {
                        tmp17 = cResult[21];
                      }
                      if (cResult[22] !== bannerFields.header) {
                        const obj2 = { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header };
                        const tmp23 = closure_5(require("Text/Text").Text, obj2);
                        cResult[22] = bannerFields.header;
                        cResult[23] = tmp23;
                        tmp21 = tmp23;
                      } else {
                        tmp21 = cResult[23];
                      }
                      if (cResult[24] !== tmp13) {
                        let tmp25 = null != tmp13;
                        if (tmp25) {
                          const obj3 = {
                            color: "text-link",
                            variant: "text-sm/medium",
                            accessibilityRole: "link",
                            onPress() {
                                                      const obj = LinkingDefault;
                                                      return obj.openURL(url.url);
                                                    },
                            children: tmp13.linkText
                          };
                          tmp25 = closure_5(tmp(4886).Text, obj3);
                        }
                        cResult[24] = tmp13;
                        cResult[25] = tmp25;
                        tmp24 = tmp25;
                      } else {
                        tmp24 = cResult[25];
                      }
                      if (cResult[26] === formatStringWithCommonPremiumParams) {
                        if (cResult[27] === tmp4.bodyText) {
                          let tmp27;
                          if (cResult[28] === tmp24) {
                            tmp27 = cResult[29];
                          }
                          if (cResult[30] === bannerFields.button) {
                            if (cResult[31] === tmp8) {
                              let tmp30;
                              if (cResult[32] === tmp4.ctaButton) {
                                tmp30 = cResult[33];
                              }
                              if (cResult[34] === tmp27) {
                                if (cResult[35] === tmp30) {
                                  if (cResult[36] === tmp16) {
                                    if (cResult[37] === tmp17) {
                                      let tmp34;
                                      if (cResult[38] === tmp21) {
                                        tmp34 = cResult[39];
                                      }
                                      if (cResult[40] === tmp34) {
                                        let tmp38;
                                        if (cResult[41] === tmp15) {
                                          tmp38 = cResult[42];
                                        }
                                        return tmp38;
                                      }
                                      const obj4 = { style: tmp15, children: tmp34 };
                                      const tmp41 = closure_5(closure_4, obj4);
                                      cResult[40] = tmp34;
                                      cResult[41] = tmp15;
                                      cResult[42] = tmp41;
                                      tmp38 = tmp41;
                                    }
                                  }
                                }
                              }
                              const obj5 = { style: tmp16, children: items };
                              items = [tmp17, tmp21, tmp27, tmp30];
                              const tmp37 = closure_6(closure_4, obj5);
                              cResult[34] = tmp27;
                              cResult[35] = tmp30;
                              cResult[36] = tmp16;
                              cResult[37] = tmp17;
                              cResult[38] = tmp21;
                              cResult[39] = tmp37;
                              tmp34 = tmp37;
                            }
                          }
                          let tmp31 = null != bannerFields.button;
                          if (tmp31) {
                            const obj6 = { style: tmp4.ctaButton, children: closure_5(NitroUpsellButtonDefault, obj7) };
                            obj7 = { text: bannerFields.button.copy, onPress: tmp8 };
                            tmp31 = closure_5(closure_4, obj6);
                          }
                          cResult[30] = bannerFields.button;
                          cResult[31] = tmp8;
                          cResult[32] = tmp4.ctaButton;
                          cResult[33] = tmp31;
                          tmp30 = tmp31;
                        }
                      }
                      const obj8 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp4.bodyText, children: items1 };
                      items1 = [formatStringWithCommonPremiumParams, " ", tmp24];
                      const tmp29 = closure_6(require("Text/Text").Text, obj8);
                      cResult[26] = formatStringWithCommonPremiumParams;
                      cResult[27] = tmp4.bodyText;
                      cResult[28] = tmp24;
                      cResult[29] = tmp29;
                      tmp27 = tmp29;
                    }
                    let tmp18 = "" !== bannerFields.assetUrl;
                    if (tmp18) {
                      const obj9 = { source: obj10, style: tmp4.image, resizeMode: "contain" };
                      obj10 = { uri: bannerFields.assetUrl };
                      tmp18 = closure_5(closure_3, obj9);
                    }
                    cResult[19] = bannerFields.assetUrl;
                    cResult[20] = tmp4.image;
                    cResult[21] = tmp18;
                    tmp17 = tmp18;
                  }
                  const items2 = [tmp4.card, cardStyle];
                  cResult[16] = cardStyle;
                  cResult[17] = tmp4.card;
                  cResult[18] = items2;
                  tmp16 = items2;
                }
                const items3 = [tmp4.container, style];
                cResult[13] = style;
                cResult[14] = tmp4.container;
                cResult[15] = items3;
                tmp15 = items3;
              }
              const tmpResult3 = require("PromotionStringUtils");
              const helpArticleLinkProps = tmpResult3.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
              cResult[10] = bannerFields.helpArticle;
              cResult[11] = bannerFields.helpArticleId;
              cResult[12] = helpArticleLinkProps;
              tmp13 = helpArticleLinkProps;
            }
            const obj11 = { type: require("discord_common/AnalyticsUtils").ImpressionTypes.VIEW, name: require("discord_common/AnalyticsUtils").ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: obj12 };
            cResult[7] = componentId;
            cResult[8] = promotionId;
            cResult[9] = obj11;
            tmp10 = obj11;
            obj12 = { component_type: require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId };
          }
        }
      }
    }
  }
  const tmpResult4 = require("PremiumMarketingButtonActions");
  const buttonActionHandler = tmpResult4.getButtonActionHandler({ buttonAction, applicationId: value, analyticsLocations, analyticsPage, onPaymentSuccess, onPaymentDismiss });
  cResult[0] = analyticsLocations;
  cResult[1] = analyticsPage;
  cResult[2] = onPaymentDismiss;
  cResult[3] = onPaymentSuccess;
  cResult[4] = buttonAction;
  cResult[5] = value;
  cResult[6] = buttonActionHandler;
  tmp8 = buttonActionHandler;
}) : ((bannerFields) => {
  let analyticsPage;
  let cardStyle;
  let componentId;
  let items;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj5;
  let obj7;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let promotionId;
  let style;
  let value;
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, promotionId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = closure_7();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const button = bannerFields.button;
  let buttonAction;
  const getButtonActionHandler = helpArticleLinkProps(13232).getButtonActionHandler;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  let obj = { buttonAction, applicationId: value, analyticsLocations, analyticsPage, onPaymentSuccess, onPaymentDismiss };
  const button2 = bannerFields.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  const obj2 = { type: helpArticleLinkProps(1260).ImpressionTypes.VIEW, name: helpArticleLinkProps(1260).ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: helpArticleLinkProps(10470).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId } };
  const buttonActionHandler = getButtonActionHandler(obj);
  const tmp2Result = useTrackImpressionDefault;
  ({ component_type: helpArticleLinkProps(10470).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId });
  tmp2Result(obj2);
  const tmp4Result = helpArticleLinkProps(13235);
  const formatStringWithCommonPremiumParams = tmp4Result.useFormatStringWithCommonPremiumParams(bannerFields.body);
  const tmp4Result2 = helpArticleLinkProps(13235);
  helpArticleLinkProps = tmp4Result2.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj4 = { style: items, children: closure_6(closure_4, obj5) };
  items = [tmp.container, style];
  obj5 = { style: items1, children: items2 };
  items1 = [tmp.card, cardStyle];
  let tmp13Result = "" !== bannerFields.assetUrl;
  if (tmp13Result) {
    const obj6 = { source: obj7, style: tmp.image, resizeMode: "contain" };
    obj7 = { uri: bannerFields.assetUrl };
    tmp13Result = closure_5(closure_3, obj6);
  }
  items2 = [tmp13Result, , , ];
  const obj8 = { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header };
  items2[1] = closure_5(helpArticleLinkProps(4886).Text, obj8);
  const obj9 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText, children: items3 };
  items3 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp13Result3 = null != helpArticleLinkProps;
  const Text = tmp4(4886).Text;
  if (tmp13Result3) {
    const obj10 = {
      color: "text-link",
      variant: "text-sm/medium",
      accessibilityRole: "link",
      onPress() {
          const obj = LinkingDefault;
          return obj.openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp13Result3 = closure_5(tmp4(4886).Text, obj10);
  }
  items3[2] = tmp13Result3;
  items2[2] = closure_6(Text, obj9);
  let tmp13Result4 = null != bannerFields.button;
  if (tmp13Result4) {
    const obj11 = { style: tmp.ctaButton, children: closure_5(NitroUpsellButtonDefault, obj12) };
    obj12 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    tmp13Result4 = closure_5(closure_4, obj11);
  }
  items2[3] = tmp13Result4;
  return closure_5(closure_4, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default tmp6;