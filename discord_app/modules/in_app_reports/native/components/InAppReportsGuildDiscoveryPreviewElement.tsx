// discord_app/modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let guild;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  borderColor: obj2,
  title: { textTransform: "uppercase", lineHeight: 16, marginBottom: 8 },
  itemContainer: obj3,
  guildInfo: { display: "flex", flexDirection: "row", alignItems: "center" },
  guildName: { lineHeight: 18, marginStart: 8 },
  guildIcon: size,
};
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
size = { borderRadius: nativeDefault.radii.xs, width: 18, height: 18 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let guildIcon;
      let guildInfo;
      let items1;
      let items2;
      let tmp10;
      let tmp6;
      let tmp7;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(36);
      guild = guild.guild;
      const tmp4 = closure_7();
      const obj2 = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow(
        "InAppReportsGuildDiscoveryPreview",
        "text-xs/bold",
      );
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[2] !== tmp4.borderColor.color) {
        const tmpResult3 = ColorUtils;
        const hexWithOpacityResult = tmpResult3.hexWithOpacity(tmp4.borderColor.color, 0.08);
        cResult[2] = tmp4.borderColor.color;
        cResult[3] = hexWithOpacityResult;
        tmp10 = hexWithOpacityResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === typeConsolidationEyebrow.style) {
        let tmp13;
        let tmp14;
        if (cResult[5] === tmp4.title) {
          tmp13 = cResult[6];
        }
        const _Symbol = Symbol;
        const variant = typeConsolidationEyebrow.variant;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.nTe4HC);
          cResult[7] = stringResult;
          tmp14 = stringResult;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === typeConsolidationEyebrow.variant) {
          let tmp16;
          let tmp19;
          if (cResult[9] === tmp13) {
            tmp16 = cResult[10];
          }
          if (cResult[11] !== tmp10) {
            const obj3 = { borderColor: tmp10 };
            cResult[11] = tmp10;
            cResult[12] = obj3;
            tmp19 = obj3;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[13] === tmp4.itemContainer) {
            let tmp20;
            let tmp21;
            if (cResult[14] === tmp19) {
              tmp20 = cResult[15];
            }
            ({ guildInfo, guildIcon } = tmp4);
            if (cResult[16] !== guild) {
              const tmpResult4 = GuildRecordUtils;
              const result = tmpResult4.fromClientDiscoverableGuild(guild);
              cResult[16] = guild;
              cResult[17] = result;
              tmp21 = result;
            } else {
              tmp21 = cResult[17];
            }
            if (cResult[18] === tmp4.guildIcon) {
              if (cResult[19] === tmp21) {
                let tmp24;
                if (cResult[20] === !stateFromStores) {
                  tmp24 = cResult[21];
                }
                if (cResult[22] === guild.name) {
                  let tmp28;
                  if (cResult[23] === tmp4.guildName) {
                    tmp28 = cResult[24];
                  }
                  if (cResult[25] === tmp4.guildInfo) {
                    if (cResult[26] === tmp24) {
                      let tmp31;
                      if (cResult[27] === tmp28) {
                        tmp31 = cResult[28];
                      }
                      if (cResult[29] === tmp20) {
                        let tmp35;
                        if (cResult[30] === tmp31) {
                          tmp35 = cResult[31];
                        }
                        if (cResult[32] === tmp4.container) {
                          if (cResult[33] === tmp35) {
                            let tmp39;
                            if (cResult[34] === tmp16) {
                              tmp39 = cResult[35];
                            }
                            return tmp39;
                          }
                        }
                        const obj4 = { style: tmp12, children: items1 };
                        items1 = [tmp16, tmp35];
                        const tmp42 = metroRequire(View, obj4);
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
                  const obj6 = { style: guildInfo, children: items2 };
                  items2 = [tmp24, tmp28];
                  const tmp34 = metroRequire(View, obj6);
                  cResult[25] = tmp4.guildInfo;
                  cResult[26] = tmp24;
                  cResult[27] = tmp28;
                  cResult[28] = tmp34;
                  tmp31 = tmp34;
                }
                const obj7 = {
                  style: tmp4.guildName,
                  variant: "text-sm/medium",
                  color: "text-default",
                  children: guild.name,
                };
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
        const obj9 = { style: tmp13, accessibilityRole: "header", variant, children: tmp14 };
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
    }
  : (guild) => {
      let intl;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj7;
      let obj9;
      let useReducedMotion;
      guild = guild.guild;
      const tmp = closure_7();
      const obj = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow(
        "InAppReportsGuildDiscoveryPreview",
        "text-xs/bold",
      );
      const items = [AccessibilityStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj4 = { style: tmp.container, children: items2 };
      const obj3 = ColorUtils;
      const obj5 = {
        style: items1,
        accessibilityRole: "header",
        variant: typeConsolidationEyebrow.variant,
        children: intl.string(intl2.t.nTe4HC),
      };
      items1 = [tmp.title, typeConsolidationEyebrow.style];
      const hexWithOpacityResult = obj3.hexWithOpacity(tmp.borderColor.color, 0.08);
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items2 = [hasOwnProperty(Text, obj5)];
      const obj6 = { style: items3, children: metroRequire(View, obj7) };
      items3 = [tmp.itemContainer, { borderColor: hexWithOpacityResult }];
      obj7 = { style: tmp.guildInfo, children: items4 };
      const obj8 = { style: tmp.guildIcon, guild: obj9.fromClientDiscoverableGuild(guild), animate: !stateFromStores };
      const tmp5 = GuildIconDefault;
      obj9 = GuildRecordUtils;
      items4 = [hasOwnProperty(tmp5, obj8)];
      const obj10 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name };
      items4[1] = hasOwnProperty(Text_Text.Text, obj10);
      items2[1] = hasOwnProperty(View, obj6);
      return metroRequire(View, obj4);
    };
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx",
);

export default tmp5;
