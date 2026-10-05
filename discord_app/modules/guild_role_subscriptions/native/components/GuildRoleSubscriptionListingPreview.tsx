// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import PriceUtils from "../../../../utils/PriceUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionTypeUtils from "../../GuildRoleSubscriptionTypeUtils.tsx";
import GuildRoleSubscriptionMemberPreview from "listing_elements/GuildRoleSubscriptionMemberPreview.tsx";
import GuildRoleSubscriptionsActionCreatorExtras from "../../GuildRoleSubscriptionsActionCreatorExtras.native.tsx";
import GuildRoleSubscriptionBenefitPreview from "GuildRoleSubscriptionBenefitPreview.tsx";
import GuildPremiumRoleSubscribeButton from "GuildPremiumRoleSubscribeButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = ["price", "currency"];
let closure_5 = ["label"];
let closure_6 = ["label", "children"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { padding: 16 },
  header: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
  },
  image: { width: 80, height: 80, borderRadius: 40, marginTop: 16 },
  priceGroup: { marginTop: 16, alignItems: "center" },
  priceInterval: { marginTop: 4 },
  content: { paddingHorizontal: 16 },
  contentWithBackground: null,
  separator: null,
  sectionLabel: null,
  benefitSpacing: null,
  roundedBenefitsContainer: null,
  footer: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderTopStartRadius: 8,
  borderTopEndRadius: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 16,
};
obj2.contentWithBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = { width: "100%", height: 1, marginTop: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.separator = size;
obj2.sectionLabel = { paddingVertical: 16 };
obj2.benefitSpacing = { marginTop: 16 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.roundedBenefitsContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  padding: 16,
};
obj2.footer = { borderBottomStartRadius: 8, borderBottomEndRadius: 8, height: 16 };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
      ({ price, currency } = arg0);
      const tmp5 = closure_13();
      if (cResult[0] === currency) {
        if (cResult[1] === price) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] !== tmp8) {
          const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp8 };
          const tmp12 = v65535(Text_Text.Text, obj2);
          cResult[3] = tmp8;
          cResult[4] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[4];
        }
        const Text = Text_Text.Text;
        const intl = util.intl;
        const obj3 = { period: GuildRoleSubscriptionTypeUtils.formatPlanInterval(tmp4) };
        const formatResult = intl.format(util.t.isLGyX, obj3);
        if (cResult[5] === Text) {
          if (cResult[6] === tmp5.priceInterval) {
            if (cResult[7] === formatResult) {
              let tmp14 = cResult[8];
            }
            if (cResult[9] === View) {
              if (cResult[10] === tmp5.priceGroup) {
                if (cResult[11] === tmp10) {
                  if (cResult[12] === tmp14) {
                    let tmp17 = cResult[13];
                  }
                  return tmp17;
                }
              }
            }
            const obj4 = { style: tmp7, children: null };
            const items = [tmp10, tmp14];
            obj4.children = items;
            const tmp19 = closure_1_11(View, obj4);
            cResult[9] = View;
            cResult[10] = tmp5.priceGroup;
            cResult[11] = tmp10;
            cResult[12] = tmp14;
            cResult[13] = tmp19;
            tmp17 = tmp19;
          }
        }
        const obj5 = { style: tmp5.priceInterval, variant: "eyebrow", color: "text-default", children: formatResult };
        const tmp16 = v65535(Text, obj5);
        cResult[5] = Text;
        cResult[6] = tmp5.priceInterval;
        cResult[7] = formatResult;
        cResult[8] = tmp16;
        tmp14 = tmp16;
        const tmpResult = GuildRoleSubscriptionTypeUtils;
      }
      tmp4 = _objectWithoutProperties(arg0, closure_4);
      const formatPriceResult = PriceUtils.formatPrice(price, currency);
      cResult[0] = currency;
      cResult[1] = price;
      cResult[2] = formatPriceResult;
      tmp8 = formatPriceResult;
      const tmpResult2 = PriceUtils;
    }
  : (arg0) => {
      ({ price, currency } = arg0);
      const merged = Object.assign(arg0, Object.assign({ price: 0, currency: 0 }));
      const tmp2 = closure_13();
      const obj = { style: tmp2.priceGroup, children: null };
      const obj2 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: PriceUtils.formatPrice(price, currency),
      };
      const items = [v65535(Text_Text.Text, obj2)];
      const obj4 = { style: tmp2.priceInterval, variant: "eyebrow", color: "text-default", children: null };
      const intl = util.intl;
      const obj5 = { period: null };
      obj5.period = GuildRoleSubscriptionTypeUtils.formatPlanInterval(merged);
      obj4.children = intl.format(util.t.isLGyX, obj5);
      items[1] = v65535(Text_Text.Text, obj4);
      obj.children = items;
      return closure_1_11(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(20);
      ({ listingId, onSubscribePress } = arg0);
      const tmp4 = closure_13();
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useSubscriptionPlan(listingId), 1)[0];
      const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(listingId), 1)[0];
      let str = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(listingId), 1)[0];
      const first2 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useDescription(listingId), 1)[0];
      if (cResult[0] !== first1) {
        obj6 = { variant: "heading-md/semibold", color: "interactive-text-active", children: first1 };
        const tmp10 = v65535(Text_Text.Text, obj6);
        cResult[0] = first1;
        cResult[1] = tmp10;
        let tmp8 = tmp10;
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
        let tmp11 = obj7;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === tmp4.image) {
        if (cResult[5] === tmp11) {
          let tmp12 = cResult[6];
        }
        if (cResult[7] !== first) {
          const obj8 = {};
          const merged = Object.assign(first);
          const tmp20 = v65535(closure_14, obj8);
          cResult[7] = first;
          cResult[8] = tmp20;
          let tmp14 = tmp20;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] !== onSubscribePress) {
          const obj9 = { onPress: onSubscribePress };
          const tmp23 = v65535(GuildPremiumRoleSubscribeButton.GuildPremiumRoleSubscribeButton, obj9);
          cResult[9] = onSubscribePress;
          cResult[10] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] !== first2) {
          const obj10 = { variant: "text-sm/medium", children: first2 };
          const tmp26 = v65535(Text_Text.Text, obj10);
          cResult[11] = first2;
          cResult[12] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[12];
        }
        if (cResult[13] === tmp4.header) {
          if (cResult[14] === tmp8) {
            if (cResult[15] === tmp12) {
              if (cResult[16] === tmp14) {
                if (cResult[17] === tmp21) {
                  if (cResult[18] === tmp24) {
                    let tmp27 = cResult[19];
                  }
                  return tmp27;
                }
              }
            }
          }
        }
        const obj11 = { style: tmp4.header, children: null };
        const items = [tmp8, tmp12, tmp14, tmp21, tmp24];
        obj11.children = items;
        const tmp30 = closure_1_11(View, obj11);
        cResult[13] = tmp4.header;
        cResult[14] = tmp8;
        cResult[15] = tmp12;
        cResult[16] = tmp14;
        cResult[17] = tmp21;
        cResult[18] = tmp24;
        cResult[19] = tmp30;
        tmp27 = tmp30;
      }
      const tmp13 = v65535(FastImageDefault, { style: tmp4.image, source: tmp11 });
      cResult[4] = tmp4.image;
      cResult[5] = tmp11;
      cResult[6] = tmp13;
      tmp12 = tmp13;
      const obj12 = { style: tmp4.image, source: tmp11 };
    }
  : (onPress) => {
      const listingId = onPress.listingId;
      const tmp = closure_13();
      const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      let str = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(listingId), 1)[0];
      const obj5 = { style: tmp.header, children: null };
      const items = [
        v65535(Text_Text.Text, {
          variant: "heading-md/semibold",
          color: "interactive-text-active",
          children: _slicedToArray(obj2.useName(listingId), 1)[0],
        }),
        ,
        ,
        ,
      ];
      obj6 = { style: tmp.image, source: null };
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      if (str == null) {
        str = "";
      }
      obj6.source = { uri: str };
      items[1] = v65535(FastImageDefault, obj6);
      const merged = Object.assign(_slicedToArray(obj.useSubscriptionPlan(listingId), 1)[0]);
      items[2] = v65535(closure_14, {});
      items[3] = v65535(GuildPremiumRoleSubscribeButton.GuildPremiumRoleSubscribeButton, {
        onPress: onPress.onSubscribePress,
      });
      items[4] = v65535(Text_Text.Text, {
        variant: "text-sm/medium",
        children: _slicedToArray(obj4.useDescription(listingId), 1)[0],
      });
      obj5.children = items;
      return closure_1_11(View, obj5);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (noBackground) => {
      const cResult = c.c(7);
      ({ children, style } = noBackground);
      const tmp2 = closure_13();
      if (cResult[0] === style) {
        if (cResult[1] === tmp2.content) {
          if (cResult[2] === tmp3) {
            let tmp4 = cResult[3];
          }
          if (cResult[4] === children) {
            if (cResult[5] === tmp4) {
              let tmp5 = cResult[6];
            }
            return tmp5;
          }
          const obj2 = { style: tmp4, children };
          const tmp8 = v65535(View, obj2);
          cResult[4] = children;
          cResult[5] = tmp4;
          cResult[6] = tmp8;
          tmp5 = tmp8;
        }
      }
      const items = [tmp2.content, true !== noBackground.noBackground && tmp2.contentWithBackground, style];
      cResult[0] = style;
      cResult[1] = tmp2.content;
      cResult[2] = true !== noBackground.noBackground && tmp2.contentWithBackground;
      cResult[3] = items;
      tmp4 = items;
    }
  : (arg0) => {
      ({ children, noBackground, style } = arg0);
      const tmp = closure_13();
      const style1 = [tmp.content, ,];
      let contentWithBackground = true !== noBackground;
      if (contentWithBackground) {
        contentWithBackground = tmp.contentWithBackground;
      }
      style1[1] = contentWithBackground;
      style1[2] = style;
      return v65535(View, { style: style1, children });
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (label) => {
      const cResult = c.c(9);
      if (cResult[0] !== label) {
        label = label.label;
        const tmp8 = _objectWithoutProperties(label, closure_5);
        cResult[0] = label;
        cResult[1] = tmp8;
        cResult[2] = label;
        let tmp5 = label;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_13();
      if (cResult[3] === tmp5) {
        if (cResult[4] === tmp9.sectionLabel) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp10) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
        const obj2 = {};
        const merged = Object.assign(tmp4);
        obj2.children = tmp10;
        const tmp18 = v65535(closure_16, obj2);
        cResult[6] = tmp4;
        cResult[7] = tmp10;
        cResult[8] = tmp18;
        tmp12 = tmp18;
      }
      const tmp11 = v65535(Text_Text.Text, {
        style: tmp9.sectionLabel,
        variant: "eyebrow",
        color: "text-default",
        children: tmp5,
      });
      cResult[3] = tmp5;
      cResult[4] = tmp9.sectionLabel;
      cResult[5] = tmp11;
      tmp10 = tmp11;
      const obj3 = { style: tmp9.sectionLabel, variant: "eyebrow", color: "text-default", children: tmp5 };
    }
  : (children) => {
      const merged = Object.assign(children, Object.assign({ label: 0 }));
      const obj = {};
      const merged1 = Object.assign(merged);
      const tmp2 = closure_13();
      obj.children = v65535(Text_Text.Text, {
        style: closure_13().sectionLabel,
        variant: "eyebrow",
        color: "text-default",
        children: children.label,
      });
      return v65535(closure_16, obj);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(13);
      if (cResult[0] !== arg0) {
        ({ label, children } = arg0);
        const tmp7 = _objectWithoutProperties(arg0, closure_6);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = tmp7;
        cResult[3] = label;
        let tmp4 = label;
        let tmp3 = tmp7;
        let tmp2 = children;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
        tmp4 = cResult[3];
      }
      if (cResult[4] === tmp3) {
        if (cResult[5] === tmp4) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === tmp2) {
          if (cResult[8] === tmp3) {
            let tmp11 = cResult[9];
          }
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp11) {
              let tmp18 = cResult[12];
            }
            return tmp18;
          }
          const obj2 = { children: null };
          const items = [tmp8, tmp11];
          obj2.children = items;
          const tmp21 = closure_1_11(__initData, obj2);
          cResult[10] = tmp8;
          cResult[11] = tmp11;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        }
        const obj3 = {};
        const merged = Object.assign(tmp3);
        obj3.children = tmp2;
        const tmp17 = v65535(closure_16, obj3);
        cResult[7] = tmp2;
        cResult[8] = tmp3;
        cResult[9] = tmp17;
        tmp11 = tmp17;
      }
      const obj4 = {};
      const merged1 = Object.assign(tmp3);
      obj4.label = tmp4;
      const tmp10 = v65535(closure_17, obj4);
      cResult[4] = tmp3;
      cResult[5] = tmp4;
      cResult[6] = tmp10;
      tmp8 = tmp10;
    }
  : (arg0) => {
      ({ label, children } = arg0);
      const merged = Object.assign(arg0, Object.assign({ label: 0, children: 0 }));
      const obj = { children: null };
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.label = label;
      const items = [v65535(closure_17, obj2)];
      const obj3 = {};
      const merged2 = Object.assign(merged);
      obj3.children = children;
      items[1] = v65535(closure_16, obj3);
      obj.children = items;
      return closure_1_11(__initData, obj);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp2 = closure_13();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { children: null };
        const obj3 = { style: tmp2.separator };
        obj2.children = v65535(View, obj3);
        const tmp7 = v65535(closure_16, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp7;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { children: v65535(View, { style: closure_13().separator }) };
      return v65535(closure_16, obj);
    };
let obj6 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(20);
      guildId = guildId.guildId;
      ({ label, benefits, look, listingId } = guildId);
      if (undefined === look) {
        look = obj6.FLAT;
      }
      const tmp5 = closure_13();
      let benefitSpacing = tmp5;
      if (0 === benefits.length) {
        return null;
      } else {
        if (cResult[0] === benefits.length) {
          if (cResult[1] === label) {
            let tmp6 = cResult[2];
          }
          const tmp8 = listingId === tmp(17934).NEW_LISTING_EDIT_STATE_ID;
          closure_2 = tmp8;
          if (cResult[3] === benefits) {
            if (cResult[4] === guildId) {
              if (cResult[5] === tmp8) {
                if (cResult[6] === tmp5) {
                  if (cResult[12] === cResult[7]) {
                    if (cResult[13] === look) {
                      if (cResult[14] === tmp5) {
                        let tmp15 = cResult[15];
                      }
                      if (cResult[16] === tmp6) {
                        if (cResult[17] === tmp19) {
                          if (cResult[18] === tmp15) {
                            let tmp20 = cResult[19];
                          }
                          return tmp20;
                        }
                      }
                      const obj2 = { noBackground: look === tmp14, label: tmp6, children: tmp15 };
                      const tmp23 = closure_10(closure_18, obj2);
                      cResult[16] = tmp6;
                      cResult[17] = look === tmp14;
                      cResult[18] = tmp15;
                      cResult[19] = tmp23;
                      tmp20 = tmp23;
                    }
                  }
                  let tmp16 = tmp9;
                  if (look !== obj6.FLAT) {
                    const obj3 = { style: tmp5.roundedBenefitsContainer, children: tmp9 };
                    tmp16 = closure_10(View, obj3);
                  }
                  cResult[12] = cResult[7];
                  cResult[13] = look;
                  cResult[14] = tmp5;
                  cResult[15] = tmp16;
                  tmp15 = tmp16;
                }
              }
            }
          }
          if (cResult[8] === guildId) {
            if (cResult[9] === tmp8) {
              if (cResult[10] === tmp5) {
                let tmp10 = cResult[11];
              }
              const mapped = benefits.map(tmp10);
              cResult[3] = benefits;
              cResult[4] = guildId;
              cResult[5] = tmp8;
              cResult[6] = tmp5;
              cResult[7] = mapped;
            }
          }
          const fn = function y(benefit, arg1) {
            benefitSpacing = arg1 > 0;
            if (benefitSpacing) {
              benefitSpacing = benefitSpacing.benefitSpacing;
            }
            const obj = {
              style: benefitSpacing,
              children: v65535(GuildRoleSubscriptionBenefitPreview.GuildRoleSubscriptionBenefitPreview, {
                guildId,
                benefit,
                isInteractive: !closure_2,
              }),
            };
            return v65535(View, obj, GuildRoleSubscriptionTypeUtils.getBenefitKey(benefit));
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
      let obj = guildId(576);
    }
  : (listingId) => {
      ({ guildId: require, label, benefits, look } = listingId);
      if (look === undefined) {
        look = obj6.FLAT;
      }
      listingId = listingId.listingId;
      const tmp2 = closure_13();
      let benefitSpacing = tmp2;
      if (0 === benefits.length) {
        return null;
      } else {
        let formatToPlainStringResult = label;
        if (typeof label !== "string") {
          const intl = util.intl;
          let obj2 = { count: benefits.length };
          formatToPlainStringResult = intl.formatToPlainString(label, obj2);
        }
        const mapped = benefits.map((benefit, index) => {
          benefitSpacing = index > 0;
          if (benefitSpacing) {
            benefitSpacing = benefitSpacing.benefitSpacing;
          }
          const obj = {
            style: benefitSpacing,
            children: v65535(GuildRoleSubscriptionBenefitPreview.GuildRoleSubscriptionBenefitPreview, {
              guildId,
              benefit,
              isInteractive: listingId !== GuildRoleSubscriptionsActionCreatorExtras.NEW_LISTING_EDIT_STATE_ID,
            }),
          };
          const obj2 = {
            guildId,
            benefit,
            isInteractive: listingId !== GuildRoleSubscriptionsActionCreatorExtras.NEW_LISTING_EDIT_STATE_ID,
          };
          return v65535(View, obj, GuildRoleSubscriptionTypeUtils.getBenefitKey(benefit));
        });
        let obj = { noBackground: look === obj6.ROUNDED, label: formatToPlainStringResult, children: null };
        let tmp4Result = mapped;
        if (look !== obj6.FLAT) {
          const obj3 = { style: tmp2.roundedBenefitsContainer, children: mapped };
          tmp4Result = closure_10(View, obj3);
        }
        obj.children = tmp4Result;
        return closure_10(closure_18, obj);
      }
    };
let closure_21 = tmp4;
tmp4.Looks = obj6;
ReactCompilerGating = fn(558);
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  padding: 16,
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx",
);

export const BenefitsSection = tmp4;
export const GuildRoleSubscriptionListingPreview = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(22);
      const tmp4 = closure_13();
      ({ guildId, listingId } = arg0);
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
      const first1 = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId),
        1,
      )[0];
      const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(listingId, guildId);
      if (cResult[0] !== arg0) {
        const obj5 = {};
        const merged = Object.assign(arg0);
        const tmp12 = v65535(closure_15, obj5);
        cResult[0] = arg0;
        cResult[1] = tmp12;
        let tmp6 = tmp12;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.FJZmYx);
        cResult[2] = stringResult;
        let tmp13 = stringResult;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] !== role) {
        obj6 = { label: tmp13, children: null };
        const obj7 = { role };
        obj6.children = v65535(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj7);
        const tmp18 = v65535(closure_18, obj6);
        cResult[3] = role;
        cResult[4] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] === first) {
        if (cResult[6] === guildId) {
          if (cResult[7] === listingId) {
            let tmp19 = cResult[8];
          }
          if (cResult[9] === guildId) {
            if (cResult[10] === first1) {
              if (cResult[11] === listingId) {
                let tmp26 = cResult[12];
              }
              if (cResult[13] !== tmp4.footer) {
                const obj8 = { style: tmp4.footer };
                const tmp36 = v65535(closure_16, obj8);
                cResult[13] = tmp4.footer;
                cResult[14] = tmp36;
                let tmp33 = tmp36;
              } else {
                tmp33 = cResult[14];
              }
              if (cResult[15] === tmp4.container) {
                if (cResult[16] === tmp6) {
                  if (cResult[17] === tmp15) {
                    if (cResult[18] === tmp19) {
                      if (cResult[19] === tmp26) {
                        if (cResult[20] === tmp33) {
                          let tmp37 = cResult[21];
                        }
                        return tmp37;
                      }
                    }
                  }
                }
              }
              const obj9 = { style: tmp4.container, children: null };
              const items = [tmp6, tmp15, tmp19, tmp26, tmp33];
              obj9.children = items;
              const tmp40 = closure_1_11(View, obj9);
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
            const obj10 = { children: null };
            const items1 = [v65535(closure_19, {})];
            const obj11 = { guildId, benefits: first1, label: util.t.aBE7f9, listingId };
            items1[1] = v65535(closure_21, obj11);
            obj10.children = items1;
            tmp27 = closure_1_11(__initData, obj10);
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
        const obj12 = { children: null };
        const items2 = [v65535(closure_19, {})];
        const obj13 = { guildId, benefits: first, label: util.t.sqjII9, listingId };
        items2[1] = v65535(closure_21, obj13);
        obj12.children = items2;
        tmp20 = closure_1_11(__initData, obj12);
      }
      cResult[5] = first;
      cResult[6] = guildId;
      cResult[7] = listingId;
      cResult[8] = tmp20;
      tmp19 = tmp20;
    }
  : (arg0) => {
      const tmp = closure_13();
      ({ guildId, listingId } = arg0);
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
      const first1 = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId),
        1,
      )[0];
      const obj4 = { style: tmp.container, children: null };
      const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(listingId, guildId);
      const merged = Object.assign(arg0);
      const items = [v65535(closure_15, {}), , , ,];
      obj6 = { label: null, children: null };
      const intl = util.intl;
      obj6.label = intl.string(util.t.FJZmYx);
      obj6.children = v65535(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, { role });
      items[1] = v65535(closure_18, obj6);
      let tmp4Result = first.length > 0;
      if (tmp4Result) {
        const obj7 = { children: null };
        const items1 = [v65535(closure_19, {})];
        const obj8 = { guildId, benefits: first, label: util.t.sqjII9, listingId };
        items1[1] = v65535(closure_21, obj8);
        obj7.children = items1;
        tmp4Result = closure_1_11(__initData, obj7);
      }
      items[2] = tmp4Result;
      let tmp4Result2 = first1.length > 0;
      if (tmp4Result2) {
        const obj9 = { children: null };
        const items2 = [v65535(closure_19, {})];
        const obj10 = { guildId, benefits: first1, label: util.t.aBE7f9, listingId };
        items2[1] = v65535(closure_21, obj10);
        obj9.children = items2;
        tmp4Result2 = closure_1_11(__initData, obj9);
      }
      items[3] = tmp4Result2;
      items[4] = v65535(closure_16, { style: tmp.footer });
      obj4.children = items;
      return closure_1_11(View, obj4);
    };
