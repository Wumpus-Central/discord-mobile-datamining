// === Module 12722: InAppReportsGuildPreviewElement ===

// Module 12722 (InAppReportsGuildPreviewElement)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import Text_Text from "Text/Text" /* 4892 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6476 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let guild;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { lineHeight: 16, marginBottom: 8 }, guildContainer: obj3, guildInfo: { marginLeft: 8 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let items;
  let items1;
  let title;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(29);
  guild = guild.guild;
  const tmp4 = closure_6();
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("InAppReportsGuildPreview", "text-xs/bold");
  if (cResult[0] !== tmp4.borderColor.color) {
    const tmpResult = ColorUtils;
    const hexWithOpacityResult = tmpResult.hexWithOpacity(tmp4.borderColor.color, 0.08);
    cResult[0] = tmp4.borderColor.color;
    cResult[1] = hexWithOpacityResult;
    tmp6 = hexWithOpacityResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === typeConsolidationEyebrow.style) {
    let tmp8;
    let tmp9;
    if (cResult[3] === tmp4.title) {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== typeConsolidationEyebrow.style) {
      let stringResult;
      if (null != typeConsolidationEyebrow.style) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t["0ox7Hq"]);
      } else {
        const intl = intl3.intl;
        const str = intl.string(intl3.t["0ox7Hq"]);
        stringResult = str.toUpperCase();
      }
      cResult[5] = typeConsolidationEyebrow.style;
      cResult[6] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === typeConsolidationEyebrow.variant) {
      if (cResult[8] === tmp8) {
        let tmp12;
        let tmp15;
        if (cResult[9] === tmp9) {
          tmp12 = cResult[10];
        }
        if (cResult[11] !== tmp6) {
          const obj3 = { borderColor: tmp6 };
          cResult[11] = tmp6;
          cResult[12] = obj3;
          tmp15 = obj3;
        } else {
          tmp15 = cResult[12];
        }
        if (cResult[13] === tmp4.guildContainer) {
          let tmp16;
          let tmp17;
          if (cResult[14] === tmp15) {
            tmp16 = cResult[15];
          }
          if (cResult[16] !== guild) {
            const obj4 = { size: GuildIcon.GuildIconSizes.LARGE, guild };
            const tmp20 = GuildIconDefault;
            const tmp21 = React3(tmp20, obj4);
            cResult[16] = guild;
            cResult[17] = tmp21;
            tmp17 = tmp21;
          } else {
            tmp17 = cResult[17];
          }
          if (cResult[18] === guild.name) {
            let tmp22;
            if (cResult[19] === tmp4.guildInfo) {
              tmp22 = cResult[20];
            }
            if (cResult[21] === tmp16) {
              if (cResult[22] === tmp17) {
                let tmp25;
                if (cResult[23] === tmp22) {
                  tmp25 = cResult[24];
                }
                if (cResult[25] === tmp4.container) {
                  if (cResult[26] === tmp12) {
                    let tmp29;
                    if (cResult[27] === tmp25) {
                      tmp29 = cResult[28];
                    }
                    return tmp29;
                  }
                }
                const obj5 = { style: tmp4.container, children: items };
                items = [tmp12, tmp25];
                const tmp32 = hasOwnProperty(View, obj5);
                cResult[25] = tmp4.container;
                cResult[26] = tmp12;
                cResult[27] = tmp25;
                cResult[28] = tmp32;
                tmp29 = tmp32;
              }
            }
            const obj6 = { style: tmp16, children: items1 };
            items1 = [tmp17, tmp22];
            const tmp28 = hasOwnProperty(View, obj6);
            cResult[21] = tmp16;
            cResult[22] = tmp17;
            cResult[23] = tmp22;
            cResult[24] = tmp28;
            tmp25 = tmp28;
          }
          const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.guildInfo, children: guild.name };
          const tmp24 = React3(Text_Text.Text, obj7);
          cResult[18] = guild.name;
          cResult[19] = tmp4.guildInfo;
          cResult[20] = tmp24;
          tmp22 = tmp24;
        }
        const items2 = [tmp4.guildContainer, tmp15];
        cResult[13] = tmp4.guildContainer;
        cResult[14] = tmp15;
        cResult[15] = items2;
        tmp16 = items2;
      }
    }
    const obj8 = { style: tmp8, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: tmp9 };
    const tmp14 = React3(Text_Text.Text, obj8);
    cResult[7] = typeConsolidationEyebrow.variant;
    cResult[8] = tmp8;
    cResult[9] = tmp9;
    cResult[10] = tmp14;
    tmp12 = tmp14;
  }
  if (null != typeConsolidationEyebrow.style) {
    const items3 = [tmp4.title, typeConsolidationEyebrow.style];
    title = items3;
  } else {
    title = tmp4.title;
  }
  cResult[2] = typeConsolidationEyebrow.style;
  cResult[3] = tmp4.title;
  cResult[4] = title;
  tmp8 = title;
}) : ((guild) => {
  let items1;
  let items2;
  let items3;
  let stringResult;
  let title;
  guild = guild.guild;
  const tmp = closure_6();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsGuildPreview", "text-xs/bold");
  const obj3 = { style: tmp.container, children: items1 };
  const obj2 = ColorUtils;
  const hexWithOpacityResult = obj2.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    title = items;
  } else {
    title = tmp.title;
  }
  const obj4 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: stringResult };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t["0ox7Hq"]);
  } else {
    const intl = intl3.intl;
    const str = intl.string(intl3.t["0ox7Hq"]);
    stringResult = str.toUpperCase();
  }
  items1 = [React3(Text, obj4), ];
  const obj5 = { style: items2, children: items3 };
  items2 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  const obj6 = { size: GuildIcon.GuildIconSizes.LARGE, guild };
  const tmp10 = GuildIconDefault;
  items3 = [React3(tmp10, obj6), ];
  const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name };
  items3[1] = React3(Text_Text.Text, obj7);
  items1[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj3);
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default tmp5;