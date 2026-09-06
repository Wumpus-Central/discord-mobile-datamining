// === Module 9438: getBotLabel ===

// Module 9438 (getBotLabel)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import CheckmarkSmallBoldIcon from "CheckmarkSmallBoldIcon" /* 9439 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { BotTagTypes } from "ApplicationTypes" /* 1350 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function getBotLabel(BOT) {
  if (BOT === undefined) {
    BOT = BotTagTypes.BOT;
  }
  if (BotTagTypes.SYSTEM_DM !== BOT) {
    if (tmp2.OFFICIAL !== BOT) {
      if (tmp2.SERVER === BOT) {
        const intl2 = getSystemLocale.intl;
        let stringResult = intl2.string(getSystemLocale.t.PuJGuM);
      } else {
        const BOT2 = tmp2.BOT;
        const intl = getSystemLocale.intl;
        stringResult = intl.string(getSystemLocale.t["9RNkeF"]);
      }
    }
    return stringResult;
  }
  const intl3 = getSystemLocale.intl;
  stringResult = intl3.string(getSystemLocale.t.lKQ7Wt);
}
class BotTag {
  constructor(arg0) {
    flag = global.invertColor;
    if (flag === undefined) {
      flag = false;
    }
    BOT = global.type;
    if (BOT === undefined) {
      tmp = BotTagTypes;
      BOT = BotTagTypes.BOT;
    }
    verified = global.verified;
    tmp2 = closure_7();
    tmp4 = BotTagTypes;
    tmp5 = BOT === BotTagTypes.OFFICIAL;
    tmp3 = getBotLabel(BOT);
    if (!tmp5) {
      tmp5 = BOT === tmp4.SYSTEM_DM;
    }
    if (!verified) {
      verified = tmp5;
    }
    tmp6 = null;
    if (verified) {
      tmp7 = jsx;
      tmp8 = closure_0;
      tmp9 = closure_2;
      obj = { size: "xs", color: null };
      tmp10 = closure_1;
      obj[1] = require("Themes").colors.WHITE;
      tmp6 = jsx(require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon, obj);
    }
    prop = null;
    tmp11 = flag ? tmp2.tagInverted : tmp2.tagNormal;
    tmp12 = flag ? tmp2.tagTextInverted : tmp2.tagTextNormal;
    if (null != tmp6) {
      prop = tmp2.verifiedTagLeftPadding;
    }
    if (tmp5) {
      tmp22 = closure_0;
      tmp23 = closure_2;
      intl4 = require("getSystemLocale").intl;
      stringResult = intl4.string(require("getSystemLocale").t["7s687k"]);
      tmp15 = closure_2;
      tmp17 = closure_0;
    } else if (verified) {
      tmp20 = closure_0;
      tmp21 = closure_2;
      intl3 = require("getSystemLocale").intl;
      stringResult = intl3.string(require("getSystemLocale").t.g76OcH);
      tmp15 = closure_2;
      tmp17 = closure_0;
    } else if (BOT === tmp4.SERVER) {
      tmp18 = closure_0;
      tmp19 = closure_2;
      intl2 = require("getSystemLocale").intl;
      stringResult = intl2.string(require("getSystemLocale").t["39trQT"]);
      tmp15 = closure_2;
      tmp17 = closure_0;
    } else {
      tmp14 = closure_0;
      tmp15 = closure_2;
      intl = require("getSystemLocale").intl;
      stringResult = intl.string(require("getSystemLocale").t.qwJHjo);
      tmp17 = closure_0;
    }
    obj = { style: items, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult, children: null };
    items = [, , , ];
    items[0] = tmp2.tag;
    items[1] = tmp11;
    items[2] = global.style;
    items[3] = prop;
    items1 = [, ];
    items1[0] = tmp6;
    items2 = [];
    items2[0] = tmp12;
    items1[1] = jsx(require("Text").Text, { variant: "text-xs/semibold", lineClamp: 1, maxFontSizeMultiplier: 2, style: items2, children: tmp3 });
    obj[4] = items1;
    return jsxs(View, obj);
  }
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { tag: null, verifiedTagLeftPadding: null, tagNormal: null, tagInverted: null, tagTextNormal: null, tagTextInverted: null };
createCacheKey = { paddingLeft: 4, paddingRight: 4, borderRadius: ThemesDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: 1 };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
const obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.WHITE };
const obj2 = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[4] = { color: ThemesDefault.colors.WHITE };
const obj3 = { color: ThemesDefault.colors.WHITE };
createCacheKey[5] = { color: ThemesDefault.colors.BACKGROUND_BRAND };
let closure_7 = createCacheKey.createStyles(createCacheKey);
BotTag.Types = BotTagTypes;
const obj4 = { color: ThemesDefault.colors.BACKGROUND_BRAND };
const result = require("set").fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default BotTag;
export { getBotLabel };