// === Module 13488: InAppReportsGuildDiscoveryPreviewElement ===

// Module 13488 (InAppReportsGuildDiscoveryPreviewElement)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2078 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import Text_Text from "Text/Text" /* 5087 */;
import GuildIconDefault from "GuildIcon" /* 6165 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6661 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { textTransform: "uppercase", lineHeight: 16, marginBottom: 8 }, itemContainer: null, guildInfo: null, guildName: null, guildIcon: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.itemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
obj2.guildInfo = { display: "flex", flexDirection: "row", alignItems: "center" };
obj2.guildName = { lineHeight: 18, marginStart: 8 };
let size = { borderRadius: nativeDefault.radii.xs, width: 18, height: 18 };
obj2.guildIcon = size;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDiscoveryPreviewElement(guild) {
  const cResult = c.c(36);
  guild = guild.guild;
  const tmp4 = closure_7();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsGuildDiscoveryPreview", "text-xs/bold");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function y() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== tmp4.borderColor.color) {
    const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp4.borderColor.color, 0.08);
    cResult[2] = tmp4.borderColor.color;
    cResult[3] = hexWithOpacityResult;
    let tmp10 = hexWithOpacityResult;
    const tmpResult3 = ColorUtils;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === typeConsolidationEyebrow.style) {
    if (cResult[5] === tmp4.title) {
      let tmp13 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.nTe4HC);
      cResult[7] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === typeConsolidationEyebrow.variant) {
      if (cResult[9] === tmp13) {
        let tmp16 = cResult[10];
      }
      if (cResult[11] !== tmp10) {
        const obj3 = { borderColor: tmp10 };
        cResult[11] = tmp10;
        cResult[12] = obj3;
        let tmp19 = obj3;
      } else {
        tmp19 = cResult[12];
      }
      if (cResult[13] === tmp4.itemContainer) {
        if (cResult[14] === tmp19) {
          let tmp20 = cResult[15];
        }
        ({ guildInfo, guildIcon } = tmp4);
        if (cResult[16] !== guild) {
          const result = GuildRecordUtils.fromClientDiscoverableGuild(guild);
          cResult[16] = guild;
          cResult[17] = result;
          let tmp21 = result;
          const tmpResult4 = GuildRecordUtils;
        } else {
          tmp21 = cResult[17];
        }
        if (cResult[18] === tmp4.guildIcon) {
          if (cResult[19] === tmp21) {
            if (cResult[20] === tmp23) {
              let tmp24 = cResult[21];
            }
            if (cResult[22] === guild.name) {
              if (cResult[23] === tmp4.guildName) {
                let tmp28 = cResult[24];
              }
              if (cResult[25] === tmp4.guildInfo) {
                if (cResult[26] === tmp24) {
                  if (cResult[27] === tmp28) {
                    let tmp31 = cResult[28];
                  }
                  if (cResult[29] === tmp20) {
                    if (cResult[30] === tmp31) {
                      let tmp35 = cResult[31];
                    }
                    if (cResult[32] === tmp4.container) {
                      if (cResult[33] === tmp35) {
                        if (cResult[34] === tmp16) {
                          let tmp39 = cResult[35];
                        }
                        return tmp39;
                      }
                    }
                    const obj4 = { style: tmp12, children: null };
                    const items1 = [tmp16, tmp35];
                    obj4.children = items1;
                    const tmp42 = timestampProducer(View, obj4);
                    cResult[32] = tmp4.container;
                    cResult[33] = tmp35;
                    cResult[34] = tmp16;
                    cResult[35] = tmp42;
                    tmp39 = tmp42;
                  }
                  const obj5 = { style: tmp20, children: tmp31 };
                  const tmp38 = hasOwnProperty(View, obj5);
                  cResult[29] = tmp20;
                  cResult[30] = tmp31;
                  cResult[31] = tmp38;
                  tmp35 = tmp38;
                }
              }
              const obj6 = { style: guildInfo, children: null };
              const items2 = [tmp24, tmp28];
              obj6.children = items2;
              const tmp34 = timestampProducer(View, obj6);
              cResult[25] = tmp4.guildInfo;
              cResult[26] = tmp24;
              cResult[27] = tmp28;
              cResult[28] = tmp34;
              tmp31 = tmp34;
            }
            const obj7 = { style: tmp4.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name };
            const tmp30 = hasOwnProperty(Text_Text.Text, obj7);
            cResult[22] = guild.name;
            cResult[23] = tmp4.guildName;
            cResult[24] = tmp30;
            tmp28 = tmp30;
          }
        }
        const obj8 = { style: guildIcon, guild: tmp21, animate: !stateFromStores };
        const tmp27 = hasOwnProperty(GuildIconDefault, obj8);
        cResult[18] = tmp4.guildIcon;
        cResult[19] = tmp21;
        cResult[20] = !stateFromStores;
        cResult[21] = tmp27;
        tmp24 = tmp27;
      }
      const items3 = [tmp4.itemContainer, tmp19];
      cResult[13] = tmp4.itemContainer;
      cResult[14] = tmp19;
      cResult[15] = items3;
      tmp20 = items3;
    }
    const obj9 = { style: tmp13, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: tmp14 };
    const tmp18 = hasOwnProperty(Text_Text.Text, obj9);
    cResult[8] = typeConsolidationEyebrow.variant;
    cResult[9] = tmp13;
    cResult[10] = tmp18;
    tmp16 = tmp18;
  }
  const items4 = [tmp4.title, typeConsolidationEyebrow.style];
  cResult[4] = typeConsolidationEyebrow.style;
  cResult[5] = tmp4.title;
  cResult[6] = items4;
  tmp13 = items4;
  const tmpResult = initialize;
}) : (function GuildDiscoveryPreviewElement(guild) {
  guild = guild.guild;
  const tmp = closure_7();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsGuildDiscoveryPreview", "text-xs/bold");
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: null, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
  const items1 = [tmp.title, typeConsolidationEyebrow.style];
  obj5.style = items1;
  const intl = util.intl;
  obj5.children = intl.string(util.t.nTe4HC);
  const items2 = [hasOwnProperty(Text_Text.Text, obj5), ];
  const obj6 = { style: null, children: null };
  const items3 = [tmp.itemContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj6.style = items3;
  const obj7 = { style: tmp.guildInfo, children: null };
  const obj8 = { style: tmp.guildIcon, guild: null, animate: null };
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  const tmp5 = GuildIconDefault;
  obj8.guild = GuildRecordUtils.fromClientDiscoverableGuild(guild);
  obj8.animate = !stateFromStores;
  const items4 = [hasOwnProperty(tmp5, obj8), hasOwnProperty(Text_Text.Text, { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name })];
  obj7.children = items4;
  obj6.children = timestampProducer(View, obj7);
  items2[1] = hasOwnProperty(View, obj6);
  obj4.children = items2;
  return timestampProducer(View, obj4);
});