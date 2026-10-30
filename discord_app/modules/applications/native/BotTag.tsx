// discord_app/modules/applications/native/BotTag.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CheckmarkSmallBoldIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallBoldIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getBotLabel() {
  if (BOT === undefined) {
    BOT = BotTagTypes.BOT;
  }
  if (BotTagTypes.SYSTEM_DM !== BOT) {
    if (BotTagTypes.OFFICIAL !== BOT) {
      if (BotTagTypes.SERVER === BOT) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.PuJGuM);
      } else {
        const BOT2 = BotTagTypes.BOT;
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
    ({ verified, size, style } = global);
    if (size === undefined) {
      size = "md";
    }
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
    tmp7Result = null;
    if (verified) {
      tmp8 = closure_0;
      tmp7 = jsx;
      tmp9 = closure_2;
      str = "xs";
      str2 = "sm";
      if ("sm" === size) {
        str = "xxs";
      }
      obj = { size: null, color: null };
      obj.size = str;
      tmp10 = closure_1;
      obj.color = closure_1(tmp9[5]).colors.WHITE;
      tmp7Result = tmp7(closure_0(closure_2[7]).CheckmarkSmallBoldIcon, obj);
    }
    prop = null;
    tmp11 = flag ? tmp2.tagInverted : tmp2.tagNormal;
    tmp12 = flag ? tmp2.tagTextInverted : tmp2.tagTextNormal;
    if (null != tmp7Result) {
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
    obj1 = {
      style: null,
      accessible: true,
      accessibilityRole: "image",
      accessibilityLabel: stringResult,
      children: null,
    };
    items = [, , ,];
    items[0] = tmp2.tag;
    items[1] = tmp11;
    items[2] = style;
    items[3] = prop;
    obj1.style = items;
    items1 = [,];
    items1[0] = tmp7Result;
    tmp24 = jsxs;
    tmp25 = View;
    tmp26 = jsx;
    str3 = "text-xs/semibold";
    if ("sm" === size) {
      str3 = "text-xxs/semibold";
    }
    items1[1] = tmp26(tmp17(tmp15[8]).Text, {
      variant: str3,
      lineClamp: 1,
      maxFontSizeMultiplier: 2,
      style: tmp12,
      children: tmp3,
    });
    obj1.children = items1;
    return tmp24(tmp25, obj1);
  }
}
const View = fn(17).View;
const BotTagTypes = fn(1361).BotTagTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  tag: {
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: nativeDefault.radii.xs,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  verifiedTagLeftPadding: { paddingLeft: 1 },
  tagNormal: null,
  tagInverted: null,
  tagTextNormal: null,
  tagTextInverted: null,
};
const obj3 = {
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
};
obj2.tagNormal = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.tagInverted = { backgroundColor: nativeDefault.colors.WHITE };
const obj5 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.tagTextNormal = { color: nativeDefault.colors.WHITE };
const obj6 = { color: nativeDefault.colors.WHITE };
obj2.tagTextInverted = { color: nativeDefault.colors.BACKGROUND_BRAND };
const React5 = createStyles.createStyles(obj2);
BotTag.Types = BotTagTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default BotTag;
export { getBotLabel };
