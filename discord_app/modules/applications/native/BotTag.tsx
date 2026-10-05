// === Module 8961: BotTag ===

// Module 8961 (BotTag)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import Text_Text from "Text/Text" /* 4886 */;
import CheckmarkSmallBoldIcon2 from "CheckmarkSmallBoldIcon" /* 8962 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function getBotLabel() {
  let BOT;
  if (BOT === undefined) {
    BOT = BotTagTypes.BOT;
  }
  if (BotTagTypes.SYSTEM_DM !== BOT) {
    let stringResult;
    if (BotTagTypes.OFFICIAL !== BOT) {
      if (BotTagTypes.SERVER === BOT) {
        const intl2 = intl5.intl;
        stringResult = intl2.string(intl5.t.PuJGuM);
      } else {
        const BOT2 = BotTagTypes.BOT;
        const intl = intl5.intl;
        stringResult = intl.string(intl5.t["9RNkeF"]);
      }
    }
    return stringResult;
  }
  const intl3 = intl5.intl;
  stringResult = intl3.string(intl5.t.lKQ7Wt);
}
const View = react_native.View;
const BotTagTypes = ApplicationConstants.BotTagTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { tag: obj2, verifiedTagLeftPadding: { paddingLeft: 1 }, tagNormal: obj3, tagInverted: obj4, tagTextNormal: { color: nativeDefault.colors.WHITE }, tagTextInverted: { color: nativeDefault.colors.BACKGROUND_BRAND } };
obj2 = { paddingLeft: 4, paddingRight: 4, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { backgroundColor: nativeDefault.colors.WHITE };
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.BACKGROUND_BRAND });
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let invertColor;
  let items1;
  let style;
  let tmp22;
  let tmp7;
  let type;
  let verified;
  const obj = react2;
  const cResult = obj.c(22);
  ({ invertColor, type, style, verified } = arg0);
  if (undefined === type) {
    type = BotTagTypes.BOT;
  }
  const tmp6 = closure_7();
  if (cResult[0] !== type) {
    const tmp9 = getBotLabel(type);
    cResult[0] = type;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (!verified) {
    verified = tmp11;
  }
  let tmp12 = null;
  if (verified) {
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
      const CheckmarkSmallBoldIcon = CheckmarkSmallBoldIcon2.CheckmarkSmallBoldIcon;
      const tmp17 = hasOwnProperty(CheckmarkSmallBoldIcon, obj2);
      cResult[2] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[2];
    }
    tmp12 = tmp14;
  }
  const tmp18 = undefined !== invertColor && invertColor ? tmp6.tagInverted : tmp6.tagNormal;
  const tmp19 = undefined !== invertColor && invertColor ? tmp6.tagTextInverted : tmp6.tagTextNormal;
  let prop = null;
  if (null != tmp12) {
    prop = tmp6.verifiedTagLeftPadding;
  }
  if (type === BotTagTypes.OFFICIAL || type === BotTagTypes.SYSTEM_DM) {
    let tmp31;
    const _Symbol5 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl5.intl;
      const stringResult = intl4.string(intl5.t["7s687k"]);
      cResult[3] = stringResult;
      tmp31 = stringResult;
    } else {
      tmp31 = cResult[3];
    }
    tmp22 = tmp31;
  } else if (verified) {
    let tmp28;
    const _Symbol4 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = intl5.intl;
      const stringResult1 = intl3.string(intl5.t.g76OcH);
      cResult[4] = stringResult1;
      tmp28 = stringResult1;
    } else {
      tmp28 = cResult[4];
    }
    tmp22 = tmp28;
  } else if (type === BotTagTypes.SERVER) {
    let tmp25;
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl5.intl;
      const stringResult2 = intl2.string(intl5.t["39trQT"]);
      cResult[5] = stringResult2;
      tmp25 = stringResult2;
    } else {
      tmp25 = cResult[5];
    }
    tmp22 = tmp25;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl5.intl;
      const stringResult3 = intl.string(intl5.t.qwJHjo);
      cResult[6] = stringResult3;
      tmp22 = stringResult3;
    } else {
      tmp22 = cResult[6];
    }
  }
  if (cResult[7] === prop) {
    if (cResult[8] === style) {
      if (cResult[9] === tmp6.tag) {
        let tmp33;
        let tmp34;
        if (cResult[10] === tmp18) {
          tmp33 = cResult[11];
        }
        if (cResult[12] !== tmp19) {
          const items = [tmp19];
          cResult[12] = tmp19;
          cResult[13] = items;
          tmp34 = items;
        } else {
          tmp34 = cResult[13];
        }
        if (cResult[14] === tmp34) {
          let tmp35;
          if (cResult[15] === tmp7) {
            tmp35 = cResult[16];
          }
          if (cResult[17] === tmp22) {
            if (cResult[18] === tmp33) {
              if (cResult[19] === tmp35) {
                let tmp38;
                if (cResult[20] === tmp12) {
                  tmp38 = cResult[21];
                }
                return tmp38;
              }
            }
          }
          const obj3 = { style: tmp33, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp22, children: items1 };
          items1 = [tmp12, tmp35];
          const tmp41 = metroRequire(View, obj3);
          cResult[17] = tmp22;
          cResult[18] = tmp33;
          cResult[19] = tmp35;
          cResult[20] = tmp12;
          cResult[21] = tmp41;
          tmp38 = tmp41;
        }
        const obj4 = { variant: "text-xs/semibold", lineClamp: 1, maxFontSizeMultiplier: 2, style: tmp34, children: tmp7 };
        const tmp37 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[14] = tmp34;
        cResult[15] = tmp7;
        cResult[16] = tmp37;
        tmp35 = tmp37;
      }
    }
  }
  const items2 = [tmp6.tag, tmp18, style, prop];
  cResult[7] = prop;
  cResult[8] = style;
  cResult[9] = tmp6.tag;
  cResult[10] = tmp18;
  cResult[11] = items2;
  tmp33 = items2;
}) : ((invertColor) => {
  let items;
  let items1;
  let items2;
  let stringResult;
  let tmp17;
  let flag = invertColor.invertColor;
  if (flag === undefined) {
    flag = false;
  }
  let BOT = invertColor.type;
  if (BOT === undefined) {
    BOT = BotTagTypes.BOT;
  }
  let verified = invertColor.verified;
  const style = invertColor.style;
  const tmp2 = closure_7();
  let tmp5 = BOT === BotTagTypes.OFFICIAL;
  const tmp3 = getBotLabel(BOT);
  if (!tmp5) {
    tmp5 = BOT === BotTagTypes.SYSTEM_DM;
  }
  if (!verified) {
    verified = tmp5;
  }
  let tmp6 = null;
  if (verified) {
    const obj = { size: "xs", color: nativeDefault.colors.WHITE };
    const CheckmarkSmallBoldIcon = CheckmarkSmallBoldIcon2.CheckmarkSmallBoldIcon;
    tmp6 = hasOwnProperty(CheckmarkSmallBoldIcon, obj);
  }
  let prop = null;
  const tmp11 = flag ? tmp2.tagInverted : tmp2.tagNormal;
  const tmp12 = flag ? tmp2.tagTextInverted : tmp2.tagTextNormal;
  if (null != tmp6) {
    prop = tmp2.verifiedTagLeftPadding;
  }
  if (tmp5) {
    const intl4 = intl5.intl;
    stringResult = intl4.string(intl5.t["7s687k"]);
    tmp17 = require;
  } else if (verified) {
    const intl3 = intl5.intl;
    stringResult = intl3.string(intl5.t.g76OcH);
    tmp17 = require;
  } else if (BOT === BotTagTypes.SERVER) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t["39trQT"]);
    tmp17 = require;
  } else {
    const intl = intl5.intl;
    stringResult = intl.string(intl5.t.qwJHjo);
    tmp17 = require;
  }
  const obj2 = { style: items, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult, children: items1 };
  items = [tmp2.tag, tmp11, style, prop];
  items1 = [tmp6, ];
  const obj3 = { variant: "text-xs/semibold", lineClamp: 1, maxFontSizeMultiplier: 2, style: items2, children: tmp3 };
  items2 = [tmp12];
  items1[1] = hasOwnProperty(tmp17(4886).Text, obj3);
  return metroRequire(View, obj2);
});
tmp5.Types = BotTagTypes;
const result = size.fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default tmp5;
export { getBotLabel };