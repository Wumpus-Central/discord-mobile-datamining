// === Module 12289: GuildPowerupsBoostInfo ===

// Module 12289 (GuildPowerupsBoostInfo)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5008 */;
import Text_Text from "Text/Text" /* 5088 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6663 */;
import BoostGemIcon from "BoostGemIcon" /* 9409 */;
import getGuildPowerupsBoostInfoText from "getGuildPowerupsBoostInfoText" /* 12290 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_12 }, headerContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" } };
let closure_7 = createStyles.createStyles(obj);
let obj2 = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_12 };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBoostInfo(arg0) {
  const cResult = c.c(21);
  ({ count, type } = arg0);
  const tmp4 = closure_7();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsBoostInfo");
  if (cResult[0] === count) {
    if (cResult[1] === type) {
      let tmp6 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + count + ", " + tmp6;
    if (type === BoostInfoType.AVAILABLE) {
      let TEXT_MUTED = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
    } else {
      TEXT_MUTED = nativeDefault.colors.TEXT_MUTED;
    }
    if (cResult[3] !== TEXT_MUTED) {
      const obj3 = { size: "sm", color: TEXT_MUTED };
      const tmp15 = hasOwnProperty(BoostGemIcon.BoostGemIcon, obj3);
      cResult[3] = TEXT_MUTED;
      cResult[4] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[4];
    }
    let str3 = "text-lg/medium";
    if (manaTypeConsolidationExperiment) {
      str3 = "experimental/body-lg/semibold";
    }
    let str4 = "text-subtle";
    if (type === BoostInfoType.AVAILABLE) {
      str4 = "text-strong";
    }
    if (cResult[5] === count) {
      if (cResult[6] === str3) {
        if (cResult[7] === str4) {
          let tmp16 = cResult[8];
        }
        if (cResult[9] === tmp4.headerContainer) {
          if (cResult[10] === tmp13) {
            if (cResult[11] === tmp16) {
              let tmp19 = cResult[12];
            }
            let str5 = "text-md/normal";
            if (manaTypeConsolidationExperiment) {
              str5 = "text-sm/normal";
            }
            if (cResult[13] === tmp6) {
              if (cResult[14] === str5) {
                let tmp23 = cResult[15];
              }
              if (cResult[16] === tmp4.container) {
                if (cResult[17] === tmp23) {
                  if (cResult[18] === combined) {
                    if (cResult[19] === tmp19) {
                      let tmp26 = cResult[20];
                    }
                    return tmp26;
                  }
                }
              }
              const obj4 = { style: tmp4.container, accessible: true, accessibilityLabel: combined, children: null };
              const items = [tmp19, tmp23];
              obj4.children = items;
              const tmp29 = timestampProducer(View, obj4);
              cResult[16] = tmp4.container;
              cResult[17] = tmp23;
              cResult[18] = combined;
              cResult[19] = tmp19;
              cResult[20] = tmp29;
              tmp26 = tmp29;
            }
            const obj5 = { variant: str5, color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: tmp6 };
            const tmp25 = hasOwnProperty(Text_Text.Text, obj5);
            cResult[13] = tmp6;
            cResult[14] = str5;
            cResult[15] = tmp25;
            tmp23 = tmp25;
          }
        }
        const obj6 = { style: tmp4.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: null };
        const items1 = [tmp13, tmp16];
        obj6.children = items1;
        const tmp22 = timestampProducer(View, obj6);
        cResult[9] = tmp4.headerContainer;
        cResult[10] = tmp13;
        cResult[11] = tmp16;
        cResult[12] = tmp22;
        tmp19 = tmp22;
      }
    }
    const obj7 = { variant: str3, color: str4, importantForAccessibility: "no-hide-descendants", children: count };
    const tmp18 = hasOwnProperty(Text_Text.Text, obj7);
    cResult[5] = count;
    cResult[6] = str3;
    cResult[7] = str4;
    cResult[8] = tmp18;
    tmp16 = tmp18;
  }
  const guildPowerupsBoostInfoText = getGuildPowerupsBoostInfoText.getGuildPowerupsBoostInfoText(count, type);
  cResult[0] = count;
  cResult[1] = type;
  cResult[2] = guildPowerupsBoostInfoText;
  tmp6 = guildPowerupsBoostInfoText;
  const tmpResult = getGuildPowerupsBoostInfoText;
}) : (function GuildPowerupsBoostInfo(arg0) {
  ({ count, type } = arg0);
  const tmp = closure_7();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsBoostInfo");
  const guildPowerupsBoostInfoText = getGuildPowerupsBoostInfoText.getGuildPowerupsBoostInfoText(count, type);
  const obj3 = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText, children: null };
  const obj4 = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: null };
  if (type === BoostInfoType.AVAILABLE) {
    let TEXT_MUTED = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = nativeDefault.colors.TEXT_MUTED;
  }
  const items = [hasOwnProperty(BoostGemIcon.BoostGemIcon, { size: "sm", color: TEXT_MUTED }), ];
  let str = "text-lg/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-lg/semibold";
  }
  const obj5 = { variant: str, color: null, importantForAccessibility: "no-hide-descendants", children: null };
  let str2 = "text-subtle";
  if (type === BoostInfoType.AVAILABLE) {
    str2 = "text-strong";
  }
  obj5.color = str2;
  obj5.children = count;
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  obj4.children = items;
  const items1 = [timestampProducer(View, obj4), ];
  let str3 = "text-md/normal";
  if (manaTypeConsolidationExperiment) {
    str3 = "text-sm/normal";
  }
  items1[1] = hasOwnProperty(Text_Text.Text, { variant: str3, color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: guildPowerupsBoostInfoText });
  obj3.children = items1;
  return timestampProducer(View, obj3);
});