// === Module 18006: GuildRoleSubscriptionListingPreview ===

// Module 18006 (GuildRoleSubscriptionListingPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import PriceUtils from "PriceUtils" /* 6750 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15060 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15064 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 15071 */;
import GuildRoleSubscriptionsActionCreatorExtras from "GuildRoleSubscriptionsActionCreatorExtras" /* 17980 */;
import GuildRoleSubscriptionBenefitPreview2 from "GuildRoleSubscriptionBenefitPreview" /* 18001 */;
import GuildPremiumRoleSubscribeButton from "GuildPremiumRoleSubscribeButton" /* 18007 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c10;
let closure_12;
let obj2;
let obj3;
let obj4;
let size;
let unpackModuleId;
let closure_4 = ["price", "currency"];
let closure_5 = ["label"];
let closure_6 = ["label", "children"];
const View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, header: obj2, image: { width: 80, height: 80, borderRadius: 40, marginTop: 16 }, priceGroup: { marginTop: 16, alignItems: "center" }, priceInterval: { marginTop: 4 }, content: { paddingHorizontal: 16 }, contentWithBackground: obj3, separator: size, sectionLabel: { paddingVertical: 16 }, benefitSpacing: { marginTop: 16 }, roundedBenefitsContainer: obj4, footer: { borderBottomStartRadius: 8, borderBottomEndRadius: 8, height: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopStartRadius: 8, borderTopEndRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = { width: "100%", height: 1, marginTop: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: 16 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currency;
  let items;
  let price;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(14);
  ({ price, currency } = arg0);
  const tmp4 = _objectWithoutProperties(arg0, closure_4);
  const tmp5 = closure_13();
  if (cResult[0] === currency) {
    let tmp8;
    let tmp10;
    if (cResult[1] === price) {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== tmp8) {
      const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp8 };
      const tmp12 = authStore(Text_Text.Text, obj2);
      cResult[3] = tmp8;
      cResult[4] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[4];
    }
    const Text = Text_Text.Text;
    const priceInterval = tmp5.priceInterval;
    const intl = intl2.intl;
    const format = intl.format;
    const obj3 = { period: tmpResult.formatPlanInterval(tmp4) };
    const isLGyX = intl2.t.isLGyX;
    tmpResult = GuildRoleSubscriptionTypeUtils;
    const formatResult = format(isLGyX, obj3);
    if (cResult[5] === Text) {
      if (cResult[6] === tmp5.priceInterval) {
        let tmp14;
        if (cResult[7] === formatResult) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === View) {
          if (cResult[10] === tmp5.priceGroup) {
            if (cResult[11] === tmp10) {
              let tmp17;
              if (cResult[12] === tmp14) {
                tmp17 = cResult[13];
              }
              return tmp17;
            }
          }
        }
        const obj4 = { style: tmp7, children: items };
        items = [tmp10, tmp14];
        const tmp19 = unpackModuleId(View, obj4);
        cResult[9] = View;
        cResult[10] = tmp5.priceGroup;
        cResult[11] = tmp10;
        cResult[12] = tmp14;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
    }
    obj5 = { style: priceInterval, variant: "eyebrow", color: "text-default", children: formatResult };
    const tmp16 = authStore(Text, obj5);
    cResult[5] = Text;
    cResult[6] = tmp5.priceInterval;
    cResult[7] = formatResult;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const tmpResult2 = PriceUtils;
  const formatPriceResult = tmpResult2.formatPrice(price, currency);
  cResult[0] = currency;
  cResult[1] = price;
  cResult[2] = formatPriceResult;
  tmp8 = formatPriceResult;
}) : ((arg0) => {
  let currency;
  let format;
  let isLGyX;
  let items;
  let obj3;
  let obj6;
  let price;
  ({ price, currency } = arg0);
  const merged = Object.assign(arg0, Object.assign({ price: 0, currency: 0 }));
  const tmp2 = closure_13();
  const obj = { style: tmp2.priceGroup, children: items };
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: obj3.formatPrice(price, currency) };
  const Text = Text_Text.Text;
  obj3 = PriceUtils;
  items = [authStore(Text, obj2), ];
  const obj4 = { style: tmp2.priceInterval, variant: "eyebrow", color: "text-default", children: format(isLGyX, obj5) };
  const Text2 = Text_Text.Text;
  const intl = intl2.intl;
  format = intl.format;
  obj5 = { period: obj6.formatPlanInterval(merged) };
  isLGyX = intl2.t.isLGyX;
  obj6 = GuildRoleSubscriptionTypeUtils;
  items[1] = authStore(Text2, obj4);
  return unpackModuleId(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let listingId;
  let onSubscribePress;
  let tmp11;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(20);
  ({ listingId, onSubscribePress } = arg0);
  const tmp4 = closure_13();
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useSubscriptionPlan(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.useName(listingId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let str = _slicedToArray(obj4.useImage(listingId), 1)[0];
  obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj5.useDescription(listingId), 1)[0];
  if (cResult[0] !== first1) {
    const obj6 = { variant: "heading-md/semibold", color: "interactive-text-active", children: first1 };
    const tmp10 = authStore(Text_Text.Text, obj6);
    cResult[0] = first1;
    cResult[1] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (str == null) {
    str = "";
  }
  if (cResult[2] !== str) {
    const obj7 = { uri: str };
    cResult[2] = str;
    cResult[3] = obj7;
    tmp11 = obj7;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp4.image) {
    let tmp12;
    let tmp14;
    let tmp21;
    let tmp24;
    if (cResult[5] === tmp11) {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== first) {
      const obj8 = {};
      const merged = Object.assign(first);
      const tmp20 = authStore(closure_14, obj8);
      cResult[7] = first;
      cResult[8] = tmp20;
      tmp14 = tmp20;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] !== onSubscribePress) {
      const obj9 = { onPress: onSubscribePress };
      const tmp23 = authStore(GuildPremiumRoleSubscribeButton.GuildPremiumRoleSubscribeButton, obj9);
      cResult[9] = onSubscribePress;
      cResult[10] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[10];
    }
    if (cResult[11] !== first2) {
      const obj10 = { variant: "text-sm/medium", children: first2 };
      const tmp26 = authStore(Text_Text.Text, obj10);
      cResult[11] = first2;
      cResult[12] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[12];
    }
    if (cResult[13] === tmp4.header) {
      if (cResult[14] === tmp8) {
        if (cResult[15] === tmp12) {
          if (cResult[16] === tmp14) {
            if (cResult[17] === tmp21) {
              let tmp27;
              if (cResult[18] === tmp24) {
                tmp27 = cResult[19];
              }
              return tmp27;
            }
          }
        }
      }
    }
    const obj11 = { style: tmp4.header, children: items };
    items = [tmp8, tmp12, tmp14, tmp21, tmp24];
    const tmp30 = unpackModuleId(View, obj11);
    cResult[13] = tmp4.header;
    cResult[14] = tmp8;
    cResult[15] = tmp12;
    cResult[16] = tmp14;
    cResult[17] = tmp21;
    cResult[18] = tmp24;
    cResult[19] = tmp30;
    tmp27 = tmp30;
  }
  const obj12 = { style: tmp4.image, source: tmp11 };
  const tmp13 = authStore(FastImageDefault, obj12);
  cResult[4] = tmp4.image;
  cResult[5] = tmp11;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((listingId) => {
  let items;
  listingId = listingId.listingId;
  const onSubscribePress = listingId.onSubscribePress;
  const tmp = closure_13();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useSubscriptionPlan(listingId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useName(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let str = _slicedToArray(obj3.useImage(listingId), 1)[0];
  obj5 = { style: tmp.header, children: items };
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj4.useDescription(listingId), 1)[0];
  items = [authStore(Text_Text.Text, { variant: "heading-md/semibold", color: "interactive-text-active", children: first1 }), , , , ];
  const obj6 = { style: tmp.image, source: { uri: str } };
  const tmp10 = FastImageDefault;
  if (str == null) {
    str = "";
  }
  items[1] = authStore(tmp10, obj6);
  const obj7 = {};
  const merged = Object.assign(first);
  items[2] = authStore(closure_14, obj7);
  items[3] = authStore(GuildPremiumRoleSubscribeButton.GuildPremiumRoleSubscribeButton, { onPress: onSubscribePress });
  items[4] = authStore(Text_Text.Text, { variant: "text-sm/medium", children: first2 });
  return unpackModuleId(View, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((noBackground) => {
  let children;
  let style;
  const obj = react2;
  const cResult = obj.c(7);
  ({ children, style } = noBackground);
  noBackground = noBackground.noBackground;
  const tmp2 = closure_13();
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.content) {
      let tmp4;
      if (cResult[2] === (true !== noBackground && tmp2.contentWithBackground)) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === children) {
        let tmp5;
        if (cResult[5] === tmp4) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
      const obj2 = { style: tmp4, children };
      const tmp8 = authStore(View, obj2);
      cResult[4] = children;
      cResult[5] = tmp4;
      cResult[6] = tmp8;
      tmp5 = tmp8;
    }
  }
  const items = [tmp2.content, true !== noBackground && tmp2.contentWithBackground, style];
  cResult[0] = style;
  cResult[1] = tmp2.content;
  cResult[2] = true !== noBackground && tmp2.contentWithBackground;
  cResult[3] = items;
  tmp4 = items;
}) : ((arg0) => {
  let children;
  let noBackground;
  let style;
  ({ children, noBackground, style } = arg0);
  const tmp = closure_13();
  const style1 = [tmp.content, , ];
  const contentWithBackground = true !== noBackground && tmp.contentWithBackground;
  style1[1] = contentWithBackground;
  style1[2] = style;
  return authStore(View, { style: style1, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((label) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] !== label) {
    label = label.label;
    const tmp8 = _objectWithoutProperties(label, closure_5);
    cResult[0] = label;
    cResult[1] = tmp8;
    cResult[2] = label;
    tmp5 = label;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_13();
  if (cResult[3] === tmp5) {
    let tmp10;
    if (cResult[4] === tmp9.sectionLabel) {
      tmp10 = cResult[5];
    }
    if (cResult[6] === tmp4) {
      let tmp12;
      if (cResult[7] === tmp10) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj2 = { children: tmp10 };
    const merged = Object.assign(tmp4);
    const tmp18 = authStore(closure_16, obj2);
    cResult[6] = tmp4;
    cResult[7] = tmp10;
    cResult[8] = tmp18;
    tmp12 = tmp18;
  }
  const obj3 = { style: tmp9.sectionLabel, variant: "eyebrow", color: "text-default", children: tmp5 };
  const tmp11 = authStore(Text_Text.Text, obj3);
  cResult[3] = tmp5;
  cResult[4] = tmp9.sectionLabel;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((label) => {
  let obj2;
  label = label.label;
  const merged = Object.assign(label, Object.assign({ label: 0 }));
  const obj = { children: authStore(Text_Text.Text, obj2) };
  const tmp2 = closure_13();
  const merged1 = Object.assign(merged);
  obj2 = { style: tmp2.sectionLabel, variant: "eyebrow", color: "text-default", children: label };
  return authStore(closure_16, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let label;
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    ({ label, children } = arg0);
    const tmp7 = _objectWithoutProperties(arg0, closure_6);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp7;
    cResult[3] = label;
    tmp4 = label;
    tmp3 = tmp7;
    tmp2 = children;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
  }
  if (cResult[4] === tmp3) {
    let tmp8;
    if (cResult[5] === tmp4) {
      tmp8 = cResult[6];
    }
    if (cResult[7] === tmp2) {
      let tmp11;
      if (cResult[8] === tmp3) {
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp8) {
        let tmp18;
        if (cResult[11] === tmp11) {
          tmp18 = cResult[12];
        }
        return tmp18;
      }
      const obj2 = { children: items };
      items = [tmp8, tmp11];
      const tmp21 = unpackModuleId(closure_12, obj2);
      cResult[10] = tmp8;
      cResult[11] = tmp11;
      cResult[12] = tmp21;
      tmp18 = tmp21;
    }
    const obj3 = { children: tmp2 };
    const merged = Object.assign(tmp3);
    const tmp17 = authStore(closure_16, obj3);
    cResult[7] = tmp2;
    cResult[8] = tmp3;
    cResult[9] = tmp17;
    tmp11 = tmp17;
  }
  const obj4 = { label: tmp4 };
  const merged1 = Object.assign(tmp3);
  const tmp10 = authStore(closure_17, obj4);
  cResult[4] = tmp3;
  cResult[5] = tmp4;
  cResult[6] = tmp10;
  tmp8 = tmp10;
}) : ((arg0) => {
  let children;
  let items;
  let label;
  ({ label, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, children: 0 }));
  const obj = { children: items };
  const obj2 = { label };
  const merged1 = Object.assign(merged);
  items = [authStore(closure_17, obj2), ];
  const obj3 = { children };
  const merged2 = Object.assign(merged);
  items[1] = authStore(closure_16, obj3);
  return unpackModuleId(closure_12, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let obj3;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_13();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { children: authStore(View, obj3) };
    obj3 = { style: tmp2.separator };
    const tmp7 = authStore(closure_16, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp7;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let obj2;
  const obj = { children: authStore(View, obj2) };
  obj2 = { style: closure_13().separator };
  return authStore(closure_16, obj);
});
let obj5 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let benefits;
  let label;
  let listingId;
  let look;
  let obj = guildId(576);
  const cResult = obj.c(20);
  guildId = guildId.guildId;
  ({ label, benefits, look, listingId } = guildId);
  if (undefined === look) {
    look = obj5.FLAT;
  }
  const tmp5 = closure_13();
  let benefitSpacing = tmp5;
  if (0 === benefits.length) {
    return null;
  } else {
    if (cResult[0] === benefits.length) {
      let tmp6;
      let tmp9;
      if (cResult[1] === label) {
        tmp6 = cResult[2];
      }
      const tmp8 = listingId === guildId(17980).NEW_LISTING_EDIT_STATE_ID;
      let closure_2 = tmp8;
      if (cResult[3] === benefits) {
        if (cResult[4] === guildId) {
          if (cResult[5] === tmp8) {
            if (cResult[6] === tmp5) {
              tmp9 = cResult[7];
            }
            if (cResult[12] === tmp9) {
              if (cResult[13] === look) {
                let tmp14;
                if (cResult[14] === tmp5) {
                  tmp14 = cResult[15];
                }
                if (cResult[16] === tmp6) {
                  if (cResult[17] === look === tmp13) {
                    let tmp19;
                    if (cResult[18] === tmp14) {
                      tmp19 = cResult[19];
                    }
                    return tmp19;
                  }
                }
                let obj2 = { noBackground: look === tmp13, label: tmp6, children: tmp14 };
                const tmp22 = closure_10(closure_18, obj2);
                cResult[16] = tmp6;
                cResult[17] = look === tmp13;
                cResult[18] = tmp14;
                cResult[19] = tmp22;
                tmp19 = tmp22;
              }
            }
            let tmp15 = tmp9;
            if (look !== obj5.FLAT) {
              let obj3 = { style: tmp5.roundedBenefitsContainer, children: tmp9 };
              tmp15 = closure_10(View, obj3);
            }
            cResult[12] = tmp9;
            cResult[13] = look;
            cResult[14] = tmp5;
            cResult[15] = tmp15;
            tmp14 = tmp15;
          }
        }
      }
      if (cResult[8] === guildId) {
        if (cResult[9] === tmp8) {
          let tmp10;
          if (cResult[10] === tmp5) {
            tmp10 = cResult[11];
          }
          const mapped = benefits.map(tmp10);
          cResult[3] = benefits;
          cResult[4] = guildId;
          cResult[5] = tmp8;
          cResult[6] = tmp5;
          cResult[7] = mapped;
          tmp9 = mapped;
        }
      }
      const fn = function y(benefit, arg1) {
        let obj2;
        benefitSpacing = arg1 > 0 && benefitSpacing.benefitSpacing;
        const obj = { style: benefitSpacing, children: authStore(GuildRoleSubscriptionBenefitPreview2.GuildRoleSubscriptionBenefitPreview, obj2) };
        obj2 = { guildId, benefit, isInteractive: !closure_2 };
        const obj3 = GuildRoleSubscriptionTypeUtils;
        return authStore(View, obj, obj3.getBenefitKey(benefit));
      };
      cResult[8] = guildId;
      cResult[9] = tmp8;
      cResult[10] = tmp5;
      cResult[11] = fn;
      tmp10 = fn;
    }
    let formatToPlainStringResult = label;
    if (typeof label !== "string") {
      const intl = tmp(1126).intl;
      const obj4 = { count: benefits.length };
      formatToPlainStringResult = intl.formatToPlainString(label, obj4);
    }
    cResult[0] = benefits.length;
    cResult[1] = label;
    cResult[2] = formatToPlainStringResult;
    tmp6 = formatToPlainStringResult;
  }
}) : ((listingId) => {
  let benefits;
  let guildId;
  let label;
  let look;
  let tmp4Result;
  ({ guildId: require, label, benefits, look } = listingId);
  if (look === undefined) {
    look = obj5.FLAT;
  }
  listingId = listingId.listingId;
  const tmp2 = closure_13();
  let benefitSpacing = tmp2;
  if (0 === benefits.length) {
    return null;
  } else {
    let formatToPlainStringResult = label;
    if (typeof label !== "string") {
      const intl = intl2.intl;
      let obj2 = { count: benefits.length };
      formatToPlainStringResult = intl.formatToPlainString(label, obj2);
    }
    const mapped = benefits.map((benefit, index) => {
      let GuildRoleSubscriptionBenefitPreview;
      let obj2;
      benefitSpacing = index > 0 && benefitSpacing.benefitSpacing;
      const obj = { style: benefitSpacing, children: authStore(GuildRoleSubscriptionBenefitPreview, obj2) };
      obj2 = { guildId: require, benefit, isInteractive: listingId !== GuildRoleSubscriptionsActionCreatorExtras.NEW_LISTING_EDIT_STATE_ID };
      GuildRoleSubscriptionBenefitPreview = GuildRoleSubscriptionBenefitPreview2.GuildRoleSubscriptionBenefitPreview;
      const obj3 = GuildRoleSubscriptionTypeUtils;
      return authStore(View, obj, obj3.getBenefitKey(benefit));
    });
    let obj = { noBackground: look === obj5.ROUNDED, label: formatToPlainStringResult, children: tmp4Result };
    tmp4Result = mapped;
    if (look !== obj5.FLAT) {
      let obj3 = { style: tmp2.roundedBenefitsContainer, children: mapped };
      tmp4Result = closure_10(View, obj3);
    }
    return closure_10(closure_18, obj);
  }
});
let closure_21 = tmp5;
tmp5.Looks = obj5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let items;
  let items1;
  let items2;
  let listingId;
  let obj7;
  let tmp13;
  let tmp15;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(22);
  const tmp4 = closure_13();
  ({ guildId, listingId } = arg0);
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const role = obj4.useRole(listingId, guildId);
  const container = tmp4.container;
  if (cResult[0] !== arg0) {
    obj5 = {};
    const merged = Object.assign(arg0);
    const tmp12 = authStore(closure_15, obj5);
    cResult[0] = arg0;
    cResult[1] = tmp12;
    tmp6 = tmp12;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.FJZmYx);
    cResult[2] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] !== role) {
    const obj6 = { label: tmp13, children: authStore(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj7) };
    obj7 = { role };
    const tmp18 = authStore(closure_18, obj6);
    cResult[3] = role;
    cResult[4] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === first) {
    if (cResult[6] === guildId) {
      let tmp19;
      if (cResult[7] === listingId) {
        tmp19 = cResult[8];
      }
      if (cResult[9] === guildId) {
        if (cResult[10] === first1) {
          let tmp26;
          let tmp33;
          if (cResult[11] === listingId) {
            tmp26 = cResult[12];
          }
          if (cResult[13] !== tmp4.footer) {
            const obj8 = { style: tmp4.footer };
            const tmp36 = authStore(closure_16, obj8);
            cResult[13] = tmp4.footer;
            cResult[14] = tmp36;
            tmp33 = tmp36;
          } else {
            tmp33 = cResult[14];
          }
          if (cResult[15] === tmp4.container) {
            if (cResult[16] === tmp6) {
              if (cResult[17] === tmp15) {
                if (cResult[18] === tmp19) {
                  if (cResult[19] === tmp26) {
                    let tmp37;
                    if (cResult[20] === tmp33) {
                      tmp37 = cResult[21];
                    }
                    return tmp37;
                  }
                }
              }
            }
          }
          const obj9 = { style: container, children: items };
          items = [tmp6, tmp15, tmp19, tmp26, tmp33];
          const tmp40 = unpackModuleId(View, obj9);
          cResult[15] = tmp4.container;
          cResult[16] = tmp6;
          cResult[17] = tmp15;
          cResult[18] = tmp19;
          cResult[19] = tmp26;
          cResult[20] = tmp33;
          cResult[21] = tmp40;
          tmp37 = tmp40;
        }
      }
      let tmp27 = first1.length > 0;
      if (tmp27) {
        const obj10 = { children: items1 };
        items1 = [authStore(closure_19, {}), ];
        const obj11 = { guildId, benefits: first1, label: intl2.t.aBE7f9, listingId };
        items1[1] = authStore(closure_21, obj11);
        tmp27 = unpackModuleId(closure_12, obj10);
      }
      cResult[9] = guildId;
      cResult[10] = first1;
      cResult[11] = listingId;
      cResult[12] = tmp27;
      tmp26 = tmp27;
    }
  }
  let tmp20 = first.length > 0;
  if (tmp20) {
    const obj12 = { children: items2 };
    items2 = [authStore(closure_19, {}), ];
    const obj13 = { guildId, benefits: first, label: intl2.t.sqjII9, listingId };
    items2[1] = authStore(closure_21, obj13);
    tmp20 = unpackModuleId(closure_12, obj12);
  }
  cResult[5] = first;
  cResult[6] = guildId;
  cResult[7] = listingId;
  cResult[8] = tmp20;
  tmp19 = tmp20;
}) : ((arg0) => {
  let guildId;
  let intl;
  let items;
  let items1;
  let items2;
  let listingId;
  const tmp = closure_13();
  ({ guildId, listingId } = arg0);
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useChannelBenefits(listingId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useIntangibleBenefits(listingId), 1)[0];
  const obj4 = { style: tmp.container, children: items };
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj5 = {};
  const role = obj3.useRole(listingId, guildId);
  const merged = Object.assign(arg0);
  items = [authStore(closure_15, obj5), , , , ];
  const obj6 = { label: intl.string(intl2.t.FJZmYx), children: authStore(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, { role }) };
  intl = intl2.intl;
  items[1] = authStore(closure_18, obj6);
  let tmp4Result = first.length > 0;
  if (tmp4Result) {
    const obj7 = { children: items1 };
    items1 = [authStore(closure_19, {}), ];
    const obj8 = { guildId, benefits: first, label: intl2.t.sqjII9, listingId };
    items1[1] = authStore(closure_21, obj8);
    tmp4Result = unpackModuleId(closure_12, obj7);
  }
  items[2] = tmp4Result;
  let tmp4Result2 = first1.length > 0;
  if (tmp4Result2) {
    const obj9 = { children: items2 };
    items2 = [authStore(closure_19, {}), ];
    const obj10 = { guildId, benefits: first1, label: intl2.t.aBE7f9, listingId };
    items2[1] = authStore(closure_21, obj10);
    tmp4Result2 = unpackModuleId(closure_12, obj9);
  }
  items[3] = tmp4Result2;
  const obj11 = { style: tmp.footer };
  items[4] = authStore(closure_16, obj11);
  return unpackModuleId(View, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx");

export const BenefitsSection = tmp5;
export const GuildRoleSubscriptionListingPreview = tmp6;