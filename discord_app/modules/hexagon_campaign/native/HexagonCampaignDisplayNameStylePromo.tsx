// discord_app/modules/hexagon_campaign/native/HexagonCampaignDisplayNameStylePromo.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4248 from "../HexagonCampaign.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import openHexagonCampaignLearnMore from "openHexagonCampaignLearnMore.tsx";
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4972);
let obj2 = {
  promo: {
    height: 32,
    justifyContent: "center",
    paddingBottom: 2,
    paddingLeft: nativeDefault.space.PX_12,
    paddingRight: nativeDefault.space.PX_8,
  },
  link: { textDecorationLine: "underline" },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  height: 32,
  justifyContent: "center",
  paddingBottom: 2,
  paddingLeft: nativeDefault.space.PX_12,
  paddingRight: nativeDefault.space.PX_8,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDisplayNameStylePromo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function HexagonCampaignDisplayNameStylePromo(showLearnMore) {
      const cResult = require("c").c(11);
      showLearnMore = showLearnMore.showLearnMore;
      const tmp5 = closure_6();
      _require = tmp5;
      if (cResult[0] !== tmp5.link) {
        function learnMoreHook(children, arg1) {
          return React4(
            Text_Text.Text,
            {
              variant: "text-xxs/medium",
              color: "text-strong",
              style: link.link,
              accessibilityRole: "link",
              onPress: openHexagonCampaignLearnMore.openHexagonCampaignLearnMore,
              children,
            },
            arg1,
          );
        }
        cResult[0] = tmp5.link;
        cResult[1] = learnMoreHook;
        let tmp6 = learnMoreHook;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = closure_4(HexagonCampaignPromoGradientDefault, { angle: 172 });
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp6) {
        if (cResult[4] === tmp4) {
          if (cResult[6] !== cResult[5]) {
            const obj2 = { variant: "text-xxs/medium", color: "text-default", lineClamp: 1, children: tmp11 };
            const tmp17 = closure_4(tmp(5235).Text, obj2);
            cResult[6] = tmp11;
            cResult[7] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[7];
          }
          if (cResult[8] === tmp5.promo) {
            if (cResult[9] === tmp15) {
              let tmp18 = cResult[10];
            }
            return tmp18;
          }
          const obj3 = { theme: tmp(15915).ThemeTypes.DARK, children: null };
          const obj4 = { style: tmp5.promo, children: null };
          const items = [tmp7, tmp15];
          obj4.children = items;
          obj3.children = closure_5(View, obj4);
          const tmp22 = closure_4(tmp(5038).ThemeContextProvider, obj3);
          cResult[8] = tmp5.promo;
          cResult[9] = tmp15;
          cResult[10] = tmp22;
          tmp18 = tmp22;
        }
      }
      const intl = tmp(1125).intl;
      if (undefined !== showLearnMore && showLearnMore) {
        const obj5 = { learnMoreHook: tmp6 };
        let formatResult = intl.format(_modDef4248.eb99JA, obj5);
      } else {
        formatResult = intl.string(_modDef4248.WyZOg3);
      }
      cResult[3] = tmp6;
      cResult[4] = undefined !== showLearnMore && showLearnMore;
      cResult[5] = formatResult;
      const obj = require("c");
    }
  : function HexagonCampaignDisplayNameStylePromo(showLearnMore) {
      let flag = showLearnMore.showLearnMore;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_6();
      _require = tmp;
      const obj = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: null };
      const obj2 = { style: tmp.promo, children: null };
      const items = [closure_4(HexagonCampaignPromoGradientDefault, { angle: 172 })];
      const intl = require("util").intl;
      if (flag) {
        const obj3 = {
          learnMoreHook(children, arg1) {
            return React4(
              Text_Text.Text,
              {
                variant: "text-xxs/medium",
                color: "text-strong",
                style: link.link,
                accessibilityRole: "link",
                onPress: openHexagonCampaignLearnMore.openHexagonCampaignLearnMore,
                children,
              },
              arg1,
            );
          },
        };
        let formatResult = intl.format(_modDef4248.eb99JA, obj3);
      } else {
        formatResult = intl.string(_modDef4248.WyZOg3);
      }
      items[1] = closure_4(require("Text/Text").Text, {
        variant: "text-xxs/medium",
        color: "text-default",
        lineClamp: 1,
        children: formatResult,
      });
      obj2.children = items;
      obj.children = closure_5(View, obj2);
      return closure_4(require("native").ThemeContextProvider, obj);
    };
