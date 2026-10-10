// discord_app/modules/applications/native/BotTag.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
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
const View = fn(17).View;
const BotTagTypes = fn(1373).BotTagTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
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
let obj3 = {
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
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.tagInverted = { backgroundColor: nativeDefault.colors.WHITE };
const obj5 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.tagTextNormal = { color: nativeDefault.colors.WHITE };
const obj6 = { color: nativeDefault.colors.WHITE };
obj2.tagTextInverted = { color: nativeDefault.colors.BACKGROUND_BRAND };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BotTag(arg0) {
      const cResult = c.c(20);
      ({ invertColor, type, style, verified } = arg0);
      if (undefined === type) {
        type = BotTagTypes.BOT;
      }
      const tmp6 = closure_7();
      if (cResult[0] !== type) {
        const tmp9 = getBotLabel(type);
        cResult[0] = type;
        cResult[1] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (!verified) {
        verified = tmp11;
      }
      if (!verified) {
        const tmp18 = tmp4 ? tmp6.tagInverted : tmp6.tagNormal;
        const tmp19 = tmp4 ? tmp6.tagTextInverted : tmp6.tagTextNormal;
        let prop = null;
        if (null != null) {
          prop = tmp6.verifiedTagLeftPadding;
        }
        if (tmp11) {
          const _Symbol5 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult = intl4.string(util.t["7s687k"]);
            cResult[3] = stringResult;
          }
        } else {
          if (verified) {
            const _Symbol4 = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult1 = intl3.string(util.t.g76OcH);
              cResult[4] = stringResult1;
              let tmp28 = stringResult1;
            } else {
              tmp28 = cResult[4];
            }
            let tmp22 = tmp28;
          } else if (type === BotTagTypes.SERVER) {
            const _Symbol3 = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = util.intl;
              const stringResult2 = intl2.string(util.t["39trQT"]);
              cResult[5] = stringResult2;
              let tmp25 = stringResult2;
            } else {
              tmp25 = cResult[5];
            }
            tmp22 = tmp25;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = util.intl;
              const stringResult3 = intl.string(util.t.qwJHjo);
              cResult[6] = stringResult3;
              tmp22 = stringResult3;
            } else {
              tmp22 = cResult[6];
            }
          }
          if (cResult[7] === prop) {
            if (cResult[8] === style) {
              if (cResult[9] === tmp6.tag) {
                if (cResult[10] === tmp18) {
                  let tmp34 = cResult[11];
                }
                if (cResult[12] === tmp7) {
                  if (cResult[13] === tmp19) {
                    let tmp35 = cResult[14];
                  }
                  if (cResult[15] === tmp22) {
                    if (cResult[16] === tmp34) {
                      if (cResult[17] === tmp35) {
                        if (cResult[18] === null) {
                          let tmp38 = cResult[19];
                        }
                        return tmp38;
                      }
                    }
                  }
                  const obj2 = {
                    style: tmp34,
                    accessible: true,
                    accessibilityRole: "image",
                    accessibilityLabel: tmp22,
                    children: null,
                  };
                  const items = [null, tmp35];
                  obj2.children = items;
                  const tmp41 = timestampProducer(View, obj2);
                  cResult[15] = tmp22;
                  cResult[16] = tmp34;
                  cResult[17] = tmp35;
                  cResult[18] = null;
                  cResult[19] = tmp41;
                  tmp38 = tmp41;
                }
                const obj3 = {
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  maxFontSizeMultiplier: 2,
                  style: tmp19,
                  children: tmp7,
                };
                const tmp37 = hasOwnProperty(Text_Text.Text, obj3);
                cResult[12] = tmp7;
                cResult[13] = tmp19;
                cResult[14] = tmp37;
                tmp35 = tmp37;
              }
            }
          }
          const items1 = [tmp6.tag, tmp18, style, prop];
          cResult[7] = prop;
          cResult[8] = style;
          cResult[9] = tmp6.tag;
          cResult[10] = tmp18;
          cResult[11] = items1;
          tmp34 = items1;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { size: "xs", color: nativeDefault.colors.WHITE };
          const tmp16 = hasOwnProperty(CheckmarkSmallBoldIcon.CheckmarkSmallBoldIcon, obj4);
          cResult[2] = tmp16;
        }
      }
    }
  : function BotTag(invertColor) {
      let flag = invertColor.invertColor;
      if (flag === undefined) {
        flag = false;
      }
      let BOT = invertColor.type;
      if (BOT === undefined) {
        BOT = BotTagTypes.BOT;
      }
      let verified = invertColor.verified;
      const tmp2 = closure_7();
      let tmp5 = BOT === BotTagTypes.OFFICIAL;
      if (!tmp5) {
        tmp5 = BOT === BotTagTypes.SYSTEM_DM;
      }
      if (!verified) {
        verified = tmp5;
      }
      let tmp6 = null;
      if (verified) {
        const obj = { size: "xs", color: nativeDefault.colors.WHITE };
        tmp6 = hasOwnProperty(CheckmarkSmallBoldIcon.CheckmarkSmallBoldIcon, obj);
      }
      let prop = null;
      if (null != tmp6) {
        prop = tmp2.verifiedTagLeftPadding;
      }
      if (tmp5) {
        const intl4 = util.intl;
        let stringResult = intl4.string(util.t["7s687k"]);
        let tmp17 = require;
      } else if (verified) {
        const intl3 = util.intl;
        stringResult = intl3.string(util.t.g76OcH);
        tmp17 = require;
      } else if (BOT === BotTagTypes.SERVER) {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t["39trQT"]);
        tmp17 = require;
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.qwJHjo);
        tmp17 = require;
      }
      const obj2 = {
        style: null,
        accessible: true,
        accessibilityRole: "image",
        accessibilityLabel: stringResult,
        children: null,
      };
      const items = [tmp2.tag, flag ? tmp2.tagInverted : tmp2.tagNormal, invertColor.style, prop];
      obj2.style = items;
      const items1 = [
        tmp6,
        hasOwnProperty(tmp17(5088).Text, {
          variant: "text-xs/semibold",
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          style: flag ? tmp2.tagTextInverted : tmp2.tagTextNormal,
          children: getBotLabel(BOT),
        }),
      ];
      obj2.children = items1;
      return timestampProducer(View, obj2);
    };
tmp4.Types = BotTagTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default tmp4;
export { getBotLabel };
