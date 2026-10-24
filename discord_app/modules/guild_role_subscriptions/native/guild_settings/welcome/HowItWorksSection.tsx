// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import PerksTicketSpotIllustration from "../../../../../design/components/mana-assets/native/generated/PerksTicketSpotIllustration.native.tsx";
import AnnouncementMegaphoneSpotIllustration from "../../../../../design/components/mana-assets/native/generated/AnnouncementMegaphoneSpotIllustration.native.tsx";
import CoinsAndBagSpotIllustration from "../../../../../design/components/mana-assets/native/generated/CoinsAndBagSpotIllustration.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4971);
let obj2 = {
  container: { flex: 1 },
  horizontalContainer: { flex: 1, flexDirection: "row" },
  card: {
    flex: 1,
    marginVertical: 6,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    alignItems: "center",
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
  },
  cardNumber: null,
  howItWorksCardDescription: null,
  howItWorksCardIcon: null,
};
let size = {
  width: 18,
  height: 18,
  position: "absolute",
  top: 9,
  start: 9,
  textAlign: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: 9,
  overflow: "hidden",
};
obj2.cardNumber = size;
let obj3 = {
  flex: 1,
  marginVertical: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.howItWorksCardDescription = {
  width: "100%",
  paddingHorizontal: 18,
  paddingVertical: 8,
  textAlign: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderBottomStartRadius: 8,
  borderBottomEndRadius: 8,
  overflow: "hidden",
};
obj2.howItWorksCardIcon = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 16 };
let closure_5 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HowItWorksCard(arg0) {
      const cResult = c.c(17);
      ({ cardNumber, Illustration, description } = arg0);
      const tmp4 = closure_5();
      const combined = "" + cardNumber + " - " + description;
      if (cResult[0] === cardNumber) {
        if (cResult[1] === tmp4.cardNumber) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== Illustration) {
          const tmp10 = React3(Illustration, { width: 108 });
          cResult[3] = Illustration;
          cResult[4] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4.howItWorksCardIcon) {
          if (cResult[6] === tmp8) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === description) {
            if (cResult[9] === tmp4.howItWorksCardDescription) {
              let tmp15 = cResult[10];
            }
            if (cResult[11] === tmp4.card) {
              if (cResult[12] === combined) {
                if (cResult[13] === tmp6) {
                  if (cResult[14] === tmp11) {
                    if (cResult[15] === tmp15) {
                      let tmp18 = cResult[16];
                    }
                    return tmp18;
                  }
                }
              }
            }
            const obj2 = { style: tmp4.card, accessible: true, accessibilityLabel: combined, children: null };
            const items = [tmp6, tmp11, tmp15];
            obj2.children = items;
            const tmp21 = React4(View, obj2);
            cResult[11] = tmp4.card;
            cResult[12] = combined;
            cResult[13] = tmp6;
            cResult[14] = tmp11;
            cResult[15] = tmp15;
            cResult[16] = tmp21;
            tmp18 = tmp21;
          }
          const obj3 = {
            style: tmp4.howItWorksCardDescription,
            variant: "text-sm/normal",
            color: "mobile-text-heading-primary",
            children: description,
          };
          const tmp17 = React3(Text_Text.Text, obj3);
          cResult[8] = description;
          cResult[9] = tmp4.howItWorksCardDescription;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        }
        const obj4 = { style: tmp4.howItWorksCardIcon, children: tmp8 };
        const tmp14 = React3(View, obj4);
        cResult[5] = tmp4.howItWorksCardIcon;
        cResult[6] = tmp8;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      }
      const tmp7 = React3(Text_Text.Text, {
        style: tmp4.cardNumber,
        variant: "text-xs/bold",
        color: "text-overlay-light",
        children: cardNumber,
      });
      cResult[0] = cardNumber;
      cResult[1] = tmp4.cardNumber;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const obj5 = {
        style: tmp4.cardNumber,
        variant: "text-xs/bold",
        color: "text-overlay-light",
        children: cardNumber,
      };
    }
  : function HowItWorksCard(Illustration) {
      ({ cardNumber, description } = Illustration);
      const tmp = closure_5();
      const obj = {
        style: tmp.card,
        accessible: true,
        accessibilityLabel: "" + cardNumber + " - " + description,
        children: null,
      };
      const items = [
        React3(Text_Text.Text, {
          style: tmp.cardNumber,
          variant: "text-xs/bold",
          color: "text-overlay-light",
          children: cardNumber,
        }),
        React3(View, { style: tmp.howItWorksCardIcon, children: React3(Illustration.Illustration, { width: 108 }) }),
        React3(Text_Text.Text, {
          style: tmp.howItWorksCardDescription,
          variant: "text-sm/normal",
          color: "mobile-text-heading-primary",
          children: description,
        }),
      ];
      obj.children = items;
      return React4(View, obj);
    };
ReactCompilerGating = fn(558);
let obj4 = {
  width: "100%",
  paddingHorizontal: 18,
  paddingVertical: 8,
  textAlign: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderBottomStartRadius: 8,
  borderBottomEndRadius: 8,
  overflow: "hidden",
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function HowItWorksSection() {
      const cResult = c.c(9);
      const tmp4 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { cardNumber: 1, description: null, Illustration: null };
        const intl = util.intl;
        obj2.description = intl.string(util.t.lT0ZNS);
        obj2.Illustration = PerksTicketSpotIllustration.PerksTicketSpotIllustration;
        const tmp9 = React3(closure_6, obj2);
        const tmp10 = React3(native.Spacer, { size: 12 });
        cResult[0] = tmp9;
        cResult[1] = tmp10;
        tmp5 = tmp9;
        tmp6 = tmp10;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { cardNumber: 2, description: null, Illustration: null };
        const intl2 = util.intl;
        obj3.description = intl2.string(util.t.ihN2Wb);
        obj3.Illustration = AnnouncementMegaphoneSpotIllustration.AnnouncementMegaphoneSpotIllustration;
        const tmp14 = React3(closure_6, obj3);
        cResult[2] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== tmp4.horizontalContainer) {
        const obj4 = { style: tmp4.horizontalContainer, children: null };
        const items = [tmp5, tmp6, tmp11];
        obj4.children = items;
        const tmp18 = React4(View, obj4);
        cResult[3] = tmp4.horizontalContainer;
        cResult[4] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { cardNumber: 3, description: null, Illustration: null };
        const intl3 = util.intl;
        obj5.description = intl3.string(util.t.c8krDQ);
        obj5.Illustration = CoinsAndBagSpotIllustration.CoinsAndBagSpotIllustration;
        const tmp22 = React3(closure_6, obj5);
        cResult[5] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp15) {
          let tmp23 = cResult[8];
        }
        return tmp23;
      }
      const obj6 = { style: tmp4.container, children: null };
      const items1 = [tmp15, tmp19];
      obj6.children = items1;
      const tmp24 = React4(View, obj6);
      cResult[6] = tmp4.container;
      cResult[7] = tmp15;
      cResult[8] = tmp24;
      tmp23 = tmp24;
    }
  : function HowItWorksSection() {
      const tmp = closure_5();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.horizontalContainer, children: null };
      const obj3 = { cardNumber: 1, description: null, Illustration: null };
      const intl = util.intl;
      obj3.description = intl.string(util.t.lT0ZNS);
      obj3.Illustration = PerksTicketSpotIllustration.PerksTicketSpotIllustration;
      const items = [React3(closure_6, obj3), React3(native.Spacer, { size: 12 })];
      const obj4 = { cardNumber: 2, description: null, Illustration: null };
      const intl2 = util.intl;
      obj4.description = intl2.string(util.t.ihN2Wb);
      obj4.Illustration = AnnouncementMegaphoneSpotIllustration.AnnouncementMegaphoneSpotIllustration;
      items[2] = React3(closure_6, obj4);
      obj2.children = items;
      const items1 = [React4(View, obj2)];
      const obj5 = { cardNumber: 3, description: null, Illustration: null };
      const intl3 = util.intl;
      obj5.description = intl3.string(util.t.c8krDQ);
      obj5.Illustration = CoinsAndBagSpotIllustration.CoinsAndBagSpotIllustration;
      items1[1] = React3(closure_6, obj5);
      obj.children = items1;
      return React4(View, obj);
    };
