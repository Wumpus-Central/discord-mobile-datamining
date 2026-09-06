// discord_app/modules/applications/native/BotTag.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CheckmarkSmallBoldIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallBoldIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getBotLabel(BOT) {
  if (BOT === undefined) {
    BOT = BotTagTypes.BOT;
  }
  if (BotTagTypes.SYSTEM_DM !== BOT) {
    if (tmp2.OFFICIAL !== BOT) {
      if (tmp2.SERVER === BOT) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.PuJGuM);
      } else {
        const BOT2 = tmp2.BOT;
        const intl = util.intl;
        stringResult = intl.string(util.t["9RNkeF"]);
      }
    }
    return stringResult;
  }
  const intl3 = util.intl;
  stringResult = intl3.string(util.t.lKQ7Wt);
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
      obj.color = closure_1(closure_2[5]).colors.WHITE;
      tmp6 = jsx(closure_0(closure_2[7]).CheckmarkSmallBoldIcon, obj);
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
      intl4 = closure_0(closure_2[6]).intl;
      stringResult = intl4.string(closure_0(closure_2[6]).t["7s687k"]);
      tmp15 = closure_2;
      tmp17 = closure_0;
    } else if (verified) {
      tmp20 = closure_0;
      tmp21 = closure_2;
      intl3 = closure_0(closure_2[6]).intl;
      stringResult = intl3.string(closure_0(closure_2[6]).t.g76OcH);
      tmp15 = closure_2;
      tmp17 = closure_0;
    } else if (BOT === tmp4.SERVER) {
      tmp18 = closure_0;
      tmp19 = closure_2;
      intl2 = closure_0(closure_2[6]).intl;
      stringResult = intl2.string(closure_0(closure_2[6]).t["39trQT"]);
      tmp15 = closure_2;
      tmp17 = closure_0;
    } else {
      tmp14 = closure_0;
      tmp15 = closure_2;
      intl = closure_0(closure_2[6]).intl;
      stringResult = intl.string(closure_0(closure_2[6]).t.qwJHjo);
      tmp17 = closure_0;
    }
    obj = {
      style: null,
      accessible: true,
      accessibilityRole: "image",
      accessibilityLabel: stringResult,
      children: null,
    };
    items = [, , ,];
    items[0] = tmp2.tag;
    items[1] = tmp11;
    items[2] = global.style;
    items[3] = prop;
    obj.style = items;
    items1 = [,];
    items1[0] = tmp6;
    obj1 = { variant: "text-xs/semibold", lineClamp: 1, maxFontSizeMultiplier: 2, style: null, children: tmp3 };
    items2 = [];
    items2[0] = tmp12;
    obj1.style = items2;
    items1[1] = jsx(tmp17(tmp15[8]).Text, obj1);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const BotTagTypes = fn(1350).BotTagTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  tag: null,
  verifiedTagLeftPadding: null,
  tagNormal: null,
  tagInverted: null,
  tagTextNormal: null,
  tagTextInverted: null,
};
createStyles = {
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
};
createStyles.tag = createStyles;
createStyles.verifiedTagLeftPadding = { paddingLeft: 1 };
createStyles.tagNormal = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.tagInverted = { backgroundColor: nativeDefault.colors.WHITE };
const obj2 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles.tagTextNormal = { color: nativeDefault.colors.WHITE };
const obj3 = { color: nativeDefault.colors.WHITE };
createStyles.tagTextInverted = { color: nativeDefault.colors.BACKGROUND_BRAND };
const React5 = createStyles.createStyles(createStyles);
BotTag.Types = BotTagTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default BotTag;
export { getBotLabel };
