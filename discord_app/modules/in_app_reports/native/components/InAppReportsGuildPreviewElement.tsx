// === Module 13486: InAppReportsGuildPreviewElement ===

// Module 13486 (InAppReportsGuildPreviewElement)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import Text_Text from "Text/Text" /* 5087 */;
import GuildIcon from "GuildIcon" /* 6165 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6661 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, guildContainer: null, guildInfo: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildContainer = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
obj2.guildInfo = { marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPreview(guild) {
  const cResult = c.c(29);
  guild = guild.guild;
  const tmp4 = closure_6();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsGuildPreview", "text-xs/bold");
  if (cResult[0] !== tmp4.borderColor.color) {
    const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp4.borderColor.color, 0.08);
    cResult[0] = tmp4.borderColor.color;
    cResult[1] = hexWithOpacityResult;
    let tmp6 = hexWithOpacityResult;
    const tmpResult = ColorUtils;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === typeConsolidationEyebrow.style) {
    if (cResult[3] === tmp4.title) {
      if (cResult[5] !== typeConsolidationEyebrow.style) {
        if (null != typeConsolidationEyebrow.style) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t["0ox7Hq"]);
        } else {
          const intl = util.intl;
          stringResult = intl.string(util.t["0ox7Hq"]).toUpperCase();
          const str = intl.string(util.t["0ox7Hq"]);
        }
        cResult[5] = typeConsolidationEyebrow.style;
        cResult[6] = stringResult;
      } else {
        if (cResult[7] === typeConsolidationEyebrow.variant) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === tmp9) {
              let tmp13 = cResult[10];
            }
            if (cResult[11] !== tmp6) {
              const obj3 = { borderColor: tmp6 };
              cResult[11] = tmp6;
              cResult[12] = obj3;
              let tmp16 = obj3;
            } else {
              tmp16 = cResult[12];
            }
            if (cResult[13] === tmp4.guildContainer) {
              if (cResult[14] === tmp16) {
                let tmp17 = cResult[15];
              }
              if (cResult[16] !== guild) {
                const obj4 = { size: GuildIcon.GuildIconSizes.LARGE, guild };
                const tmp22 = React4(GuildIconDefault, obj4);
                cResult[16] = guild;
                cResult[17] = tmp22;
                let tmp18 = tmp22;
              } else {
                tmp18 = cResult[17];
              }
              if (cResult[18] === guild.name) {
                if (cResult[19] === tmp4.guildInfo) {
                  let tmp23 = cResult[20];
                }
                if (cResult[21] === tmp17) {
                  if (cResult[22] === tmp18) {
                    if (cResult[23] === tmp23) {
                      let tmp26 = cResult[24];
                    }
                    if (cResult[25] === tmp4.container) {
                      if (cResult[26] === tmp13) {
                        if (cResult[27] === tmp26) {
                          let tmp30 = cResult[28];
                        }
                        return tmp30;
                      }
                    }
                    const obj5 = { style: tmp4.container, children: null };
                    const items = [tmp13, tmp26];
                    obj5.children = items;
                    const tmp33 = hasOwnProperty(View, obj5);
                    cResult[25] = tmp4.container;
                    cResult[26] = tmp13;
                    cResult[27] = tmp26;
                    cResult[28] = tmp33;
                    tmp30 = tmp33;
                  }
                }
                const obj6 = { style: tmp17, children: null };
                const items1 = [tmp18, tmp23];
                obj6.children = items1;
                const tmp29 = hasOwnProperty(View, obj6);
                cResult[21] = tmp17;
                cResult[22] = tmp18;
                cResult[23] = tmp23;
                cResult[24] = tmp29;
                tmp26 = tmp29;
              }
              const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.guildInfo, children: guild.name };
              const tmp25 = React4(Text_Text.Text, obj7);
              cResult[18] = guild.name;
              cResult[19] = tmp4.guildInfo;
              cResult[20] = tmp25;
              tmp23 = tmp25;
            }
            const items2 = [tmp4.guildContainer, tmp16];
            cResult[13] = tmp4.guildContainer;
            cResult[14] = tmp16;
            cResult[15] = items2;
            tmp17 = items2;
          }
        }
        const obj8 = { style: tmp8, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: cResult[6] };
        const tmp15 = React4(Text_Text.Text, obj8);
        cResult[7] = typeConsolidationEyebrow.variant;
        cResult[8] = tmp8;
        cResult[9] = cResult[6];
        cResult[10] = tmp15;
        tmp13 = tmp15;
      }
    }
  }
  if (null != typeConsolidationEyebrow.style) {
    const items3 = [tmp4.title, typeConsolidationEyebrow.style];
    let title = items3;
  } else {
    title = tmp4.title;
  }
  cResult[2] = typeConsolidationEyebrow.style;
  cResult[3] = tmp4.title;
  cResult[4] = title;
}) : (function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_6();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsGuildPreview", "text-xs/bold");
  const obj3 = { style: tmp.container, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    let title = items;
  } else {
    title = tmp.title;
  }
  const obj4 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["0ox7Hq"]);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["0ox7Hq"]).toUpperCase();
    const str = intl.string(util.t["0ox7Hq"]);
  }
  obj4.children = stringResult;
  const items1 = [React4(Text_Text.Text, obj4), ];
  const obj5 = { style: null, children: null };
  const items2 = [tmp.guildContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj5.style = items2;
  const obj6 = { size: null, guild: null };
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj6.size = GuildIcon.GuildIconSizes.LARGE;
  obj6.guild = guild;
  const items3 = [React4(GuildIconDefault, obj6), React4(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name })];
  obj5.children = items3;
  items1[1] = hasOwnProperty(View, obj5);
  obj3.children = items1;
  return hasOwnProperty(View, obj3);
});