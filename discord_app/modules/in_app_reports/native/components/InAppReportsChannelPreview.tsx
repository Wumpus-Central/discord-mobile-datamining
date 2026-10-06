// === Module 12721: InAppReportsChannelPreview ===

// Module 12721 (InAppReportsChannelPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import GuildIconDefault from "GuildIcon" /* 5978 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let stageInstance;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { lineHeight: 16, marginBottom: 8 }, itemContainer: obj3, guildInfo: { display: "flex", flexDirection: "row", alignItems: "center" }, guildName: { lineHeight: 18, marginStart: 8 }, topic: { lineHeight: 20, marginTop: 8 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((stageInstance) => {
  let container;
  let first;
  let items1;
  let items2;
  let items3;
  let title;
  let tmp7;
  const obj = stageInstance(576);
  const cResult = obj.c(33);
  stageInstance = stageInstance.stageInstance;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stageInstance.guild_id) {
    const fn = function h() {
      return GuildStore.getGuild(stageInstance.guild_id);
    };
    cResult[1] = stageInstance.guild_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = stageInstance(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (null != stateFromStores) {
    if (null != stageInstance) {
      let tmp9;
      let tmp11;
      let tmp13;
      let tmp16;
      if (cResult[3] !== tmp4.borderColor.color) {
        const tmpResult2 = stageInstance(4733);
        const hexWithOpacityResult = tmpResult2.hexWithOpacity(tmp4.borderColor.color, 0.08);
        cResult[3] = tmp4.borderColor.color;
        cResult[4] = hexWithOpacityResult;
        tmp9 = hexWithOpacityResult;
      } else {
        tmp9 = cResult[4];
      }
      const _Symbol = Symbol;
      ({ container, title } = tmp4);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(stageInstance(1126).t.InbJ8x);
        cResult[5] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp4.title) {
        const obj2 = { style: title, accessibilityRole: "header", variant: "text-xs/bold", children: tmp11 };
        const tmp15 = closure_5(stageInstance(4892).Text, obj2);
        cResult[6] = tmp4.title;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] !== tmp9) {
        const obj3 = { borderColor: tmp9 };
        cResult[8] = tmp9;
        cResult[9] = obj3;
        tmp16 = obj3;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp4.itemContainer) {
        let tmp17;
        let tmp18;
        if (cResult[11] === tmp16) {
          tmp17 = cResult[12];
        }
        if (cResult[13] !== stateFromStores) {
          const obj4 = { guild: stateFromStores, size: stageInstance(5978).GuildIconSizes.XXSMALL, selected: false };
          const tmp21 = GuildIconDefault;
          const tmp22 = closure_5(tmp21, obj4);
          cResult[13] = stateFromStores;
          cResult[14] = tmp22;
          tmp18 = tmp22;
        } else {
          tmp18 = cResult[14];
        }
        if (cResult[15] === stateFromStores.name) {
          let tmp23;
          if (cResult[16] === tmp4.guildName) {
            tmp23 = cResult[17];
          }
          if (cResult[18] === tmp4.guildInfo) {
            if (cResult[19] === tmp18) {
              let tmp26;
              if (cResult[20] === tmp23) {
                tmp26 = cResult[21];
              }
              if (cResult[22] === stageInstance.topic) {
                let tmp30;
                if (cResult[23] === tmp4.topic) {
                  tmp30 = cResult[24];
                }
                if (cResult[25] === tmp26) {
                  if (cResult[26] === tmp30) {
                    let tmp33;
                    if (cResult[27] === tmp17) {
                      tmp33 = cResult[28];
                    }
                    if (cResult[29] === tmp4.container) {
                      if (cResult[30] === tmp33) {
                        let tmp37;
                        if (cResult[31] === tmp13) {
                          tmp37 = cResult[32];
                        }
                        return tmp37;
                      }
                    }
                    const obj5 = { style: container, children: items1 };
                    items1 = [tmp13, tmp33];
                    const tmp40 = closure_6(View, obj5);
                    cResult[29] = tmp4.container;
                    cResult[30] = tmp33;
                    cResult[31] = tmp13;
                    cResult[32] = tmp40;
                    tmp37 = tmp40;
                  }
                }
                const obj6 = { style: tmp17, children: items2 };
                items2 = [tmp26, tmp30];
                const tmp36 = closure_6(View, obj6);
                cResult[25] = tmp26;
                cResult[26] = tmp30;
                cResult[27] = tmp17;
                cResult[28] = tmp36;
                tmp33 = tmp36;
              }
              const obj7 = { style: tmp4.topic, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stageInstance.topic };
              const tmp32 = closure_5(stageInstance(4892).Text, obj7);
              cResult[22] = stageInstance.topic;
              cResult[23] = tmp4.topic;
              cResult[24] = tmp32;
              tmp30 = tmp32;
            }
          }
          const obj8 = { style: tmp4.guildInfo, children: items3 };
          items3 = [tmp18, tmp23];
          const tmp29 = closure_6(View, obj8);
          cResult[18] = tmp4.guildInfo;
          cResult[19] = tmp18;
          cResult[20] = tmp23;
          cResult[21] = tmp29;
          tmp26 = tmp29;
        }
        const obj9 = { style: tmp4.guildName, variant: "text-sm/medium", color: "text-default", children: stateFromStores.name };
        const tmp25 = closure_5(stageInstance(4892).Text, obj9);
        cResult[15] = stateFromStores.name;
        cResult[16] = tmp4.guildName;
        cResult[17] = tmp25;
        tmp23 = tmp25;
      }
      const items4 = [tmp4.itemContainer, tmp16];
      cResult[10] = tmp4.itemContainer;
      cResult[11] = tmp16;
      cResult[12] = items4;
      tmp17 = items4;
    }
  }
  return null;
}) : ((stageInstance) => {
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  stageInstance = stageInstance.stageInstance;
  const tmp = closure_7();
  const items = [GuildStore];
  const obj = stageInstance(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(stageInstance.guild_id));
  if (null != stateFromStores) {
    if (null != stageInstance) {
      const obj2 = { style: tmp.container, children: items1 };
      const tmp2Result = stageInstance(4733);
      const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: intl.string(stageInstance(1126).t.InbJ8x) };
      const hexWithOpacityResult = tmp2Result.hexWithOpacity(tmp.borderColor.color, 0.08);
      const Text = tmp2(4892).Text;
      intl = tmp2(1126).intl;
      items1 = [closure_5(Text, obj3), ];
      const obj4 = { style: items2, children: items4 };
      items2 = [tmp.itemContainer, ];
      const obj5 = { borderColor: hexWithOpacityResult };
      items2[1] = obj5;
      const obj6 = { style: tmp.guildInfo, children: items3 };
      const obj7 = { guild: stateFromStores, size: stageInstance(5978).GuildIconSizes.XXSMALL, selected: false };
      const tmp10 = GuildIconDefault;
      items3 = [closure_5(tmp10, obj7), ];
      const obj8 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: stateFromStores.name };
      items3[1] = closure_5(stageInstance(4892).Text, obj8);
      items4 = [closure_6(View, obj6), ];
      const obj9 = { style: tmp.topic, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stageInstance.topic };
      items4[1] = closure_5(stageInstance(4892).Text, obj9);
      items1[1] = closure_6(View, obj4);
      return closure_6(View, obj2);
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsChannelPreview.tsx");

export default tmp5;