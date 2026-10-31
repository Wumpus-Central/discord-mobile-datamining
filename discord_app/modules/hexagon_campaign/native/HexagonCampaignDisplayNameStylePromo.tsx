// discord_app/modules/hexagon_campaign/native/HexagonCampaignDisplayNameStylePromo.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4285 from "../HexagonCampaign.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient.tsx";
import openHexagonCampaignLearnMore from "openHexagonCampaignLearnMore.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDisplayNameStylePromo.tsx");

export default function HexagonCampaignDisplayNameStylePromo(showLearnMore) {
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
    let formatResult = intl.format(_modDef4285.eb99JA, obj3);
  } else {
    formatResult = intl.string(_modDef4285.WyZOg3);
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
}
