// === Module 13231: MarketingPageBannerTile ===

// Module 13231 (MarketingPageBannerTile)
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4565 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8422 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9648 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { width: "100%" }, card: { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" }, image: null, bodyText: null, ctaButton: null };
let size = { width: "100%", maxWidth: 317, height: 144, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, alignSelf: "center" };
obj2.image = size;
let obj3 = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
obj2.bodyText = { marginTop: nativeDefault.space.PX_4 };
let obj4 = { marginTop: nativeDefault.space.PX_4 };
obj2.ctaButton = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(43);
  ({ style, cardStyle, componentId, promotionId, bannerFields, analyticsPage, onPaymentSuccess, onPaymentDismiss } = arg0);
  const tmp4 = closure_7();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const button = bannerFields.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const button2 = bannerFields.button;
  value = undefined;
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
            if (cResult[5] === value) {
              let tmp8 = cResult[6];
            }
            if (cResult[7] === componentId) {
              if (cResult[8] === promotionId) {
                let tmp10 = cResult[9];
              }
              useTrackImpressionDefault(tmp10);
              const formatStringWithCommonPremiumParams = tmp(13235).useFormatStringWithCommonPremiumParams(bannerFields.body);
              if (cResult[10] === bannerFields.helpArticle) {
                if (cResult[11] === bannerFields.helpArticleId) {
                  let tmp13 = cResult[12];
                }
                _require = tmp13;
                if (cResult[13] === style) {
                  if (cResult[14] === tmp4.container) {
                    let tmp15 = cResult[15];
                  }
                  if (cResult[16] === cardStyle) {
                    if (cResult[17] === tmp4.card) {
                      let tmp16 = cResult[18];
                    }
                    if (cResult[19] === bannerFields.assetUrl) {
                      if (cResult[20] === tmp4.image) {
                        let tmp17 = cResult[21];
                      }
                      if (cResult[22] !== bannerFields.header) {
                        const obj2 = { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header };
                        const tmp23 = closure_5(tmp(4886).Text, obj2);
                        cResult[22] = bannerFields.header;
                        cResult[23] = tmp23;
                        let tmp21 = tmp23;
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
                                                      return LinkingDefault.openURL(url.url);
                                                    },
                            children: tmp13.linkText
                          };
                          tmp25 = closure_5(tmp(4886).Text, obj3);
                        }
                        cResult[24] = tmp13;
                        cResult[25] = tmp25;
                        let tmp24 = tmp25;
                      } else {
                        tmp24 = cResult[25];
                      }
                      if (cResult[26] === formatStringWithCommonPremiumParams) {
                        if (cResult[27] === tmp4.bodyText) {
                          if (cResult[28] === tmp24) {
                            let tmp27 = cResult[29];
                          }
                          if (cResult[30] === bannerFields.button) {
                            if (cResult[31] === tmp8) {
                              if (cResult[32] === tmp4.ctaButton) {
                                let tmp30 = cResult[33];
                              }
                              if (cResult[34] === tmp27) {
                                if (cResult[35] === tmp30) {
                                  if (cResult[36] === tmp16) {
                                    if (cResult[37] === tmp17) {
                                      if (cResult[38] === tmp21) {
                                        let tmp34 = cResult[39];
                                      }
                                      if (cResult[40] === tmp34) {
                                        if (cResult[41] === tmp15) {
                                          let tmp38 = cResult[42];
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
                              const obj5 = { style: tmp16, children: null };
                              const items = [tmp17, tmp21, tmp27, tmp30];
                              obj5.children = items;
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
                            const obj6 = { style: tmp4.ctaButton, children: null };
                            const obj7 = { text: bannerFields.button.copy, onPress: tmp8 };
                            obj6.children = closure_5(NitroUpsellButtonDefault, obj7);
                            tmp31 = closure_5(closure_4, obj6);
                          }
                          cResult[30] = bannerFields.button;
                          cResult[31] = tmp8;
                          cResult[32] = tmp4.ctaButton;
                          cResult[33] = tmp31;
                          tmp30 = tmp31;
                        }
                      }
                      const obj8 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp4.bodyText, children: null };
                      const items1 = [formatStringWithCommonPremiumParams, " ", tmp24];
                      obj8.children = items1;
                      const tmp29 = closure_6(tmp(4886).Text, obj8);
                      cResult[26] = formatStringWithCommonPremiumParams;
                      cResult[27] = tmp4.bodyText;
                      cResult[28] = tmp24;
                      cResult[29] = tmp29;
                      tmp27 = tmp29;
                    }
                    let tmp18 = "" !== bannerFields.assetUrl;
                    if (tmp18) {
                      const obj9 = { source: null, style: null, resizeMode: "contain" };
                      const obj10 = { uri: bannerFields.assetUrl };
                      obj9.source = obj10;
                      obj9.style = tmp4.image;
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
              const tmpResult = tmp(13235);
              const helpArticleLinkProps = tmp(13235).getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
              cResult[10] = bannerFields.helpArticle;
              cResult[11] = bannerFields.helpArticleId;
              cResult[12] = helpArticleLinkProps;
              tmp13 = helpArticleLinkProps;
              const tmpResult3 = tmp(13235);
            }
            const obj11 = { type: tmp(1260).ImpressionTypes.VIEW, name: tmp(1260).ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: null };
            const obj12 = { component_type: tmp(10470).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId };
            obj11.properties = obj12;
            cResult[7] = componentId;
            cResult[8] = promotionId;
            cResult[9] = obj11;
            tmp10 = obj11;
          }
        }
      }
    }
  }
  const obj = require("c");
  const buttonActionHandler = require("PremiumMarketingButtonActions").getButtonActionHandler({ buttonAction, applicationId: value, analyticsLocations, analyticsPage, onPaymentSuccess, onPaymentDismiss });
  cResult[0] = analyticsLocations;
  cResult[1] = analyticsPage;
  cResult[2] = onPaymentDismiss;
  cResult[3] = onPaymentSuccess;
  cResult[4] = buttonAction;
  cResult[5] = value;
  cResult[6] = buttonActionHandler;
  tmp8 = buttonActionHandler;
  const tmpResult4 = require("PremiumMarketingButtonActions");
}) : ((bannerFields) => {
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, promotionId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = closure_7();
  const button = bannerFields.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const obj2 = { buttonAction, applicationId: null, analyticsLocations: null, analyticsPage: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const button2 = bannerFields.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  obj2.applicationId = value;
  obj2.analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  obj2.analyticsPage = analyticsPage;
  obj2.onPaymentSuccess = onPaymentSuccess;
  obj2.onPaymentDismiss = onPaymentDismiss;
  const obj = helpArticleLinkProps(13232);
  const obj3 = { type: null, name: null, properties: null };
  const buttonActionHandler = helpArticleLinkProps(13232).getButtonActionHandler(obj2);
  obj3.type = helpArticleLinkProps(1260).ImpressionTypes.VIEW;
  obj3.name = helpArticleLinkProps(1260).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  const tmp2Result = useTrackImpressionDefault;
  obj3.properties = { component_type: helpArticleLinkProps(10470).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId };
  tmp2Result(obj3);
  const obj4 = { component_type: helpArticleLinkProps(10470).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId };
  const formatStringWithCommonPremiumParams = helpArticleLinkProps(13235).useFormatStringWithCommonPremiumParams(bannerFields.body);
  const tmp4Result = helpArticleLinkProps(13235);
  helpArticleLinkProps = helpArticleLinkProps(13235).getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj5 = { style: null, children: null };
  const items = [tmp.container, style];
  obj5.style = items;
  const obj6 = { style: null, children: null };
  const items1 = [tmp.card, cardStyle];
  obj6.style = items1;
  let tmp12Result = "" !== bannerFields.assetUrl;
  if (tmp12Result) {
    const obj7 = { source: null, style: null, resizeMode: "contain" };
    const obj8 = { uri: bannerFields.assetUrl };
    obj7.source = obj8;
    obj7.style = tmp.image;
    tmp12Result = closure_5(closure_3, obj7);
  }
  const items2 = [tmp12Result, closure_5(helpArticleLinkProps(4886).Text, { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header }), , ];
  const obj10 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText, children: null };
  const items3 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp12Result3 = null != helpArticleLinkProps;
  if (tmp12Result3) {
    const obj11 = {
      color: "text-link",
      variant: "text-sm/medium",
      accessibilityRole: "link",
      onPress() {
          return LinkingDefault.openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp12Result3 = closure_5(tmp4(4886).Text, obj11);
  }
  items3[2] = tmp12Result3;
  obj10.children = items3;
  items2[2] = closure_6(helpArticleLinkProps(4886).Text, obj10);
  let tmp12Result4 = null != bannerFields.button;
  if (tmp12Result4) {
    const obj12 = { style: tmp.ctaButton, children: null };
    const obj13 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    obj12.children = closure_5(NitroUpsellButtonDefault, obj13);
    tmp12Result4 = closure_5(closure_4, obj12);
  }
  items2[3] = tmp12Result4;
  obj6.children = items2;
  obj5.children = closure_6(closure_4, obj6);
  return closure_5(closure_4, obj5);
});