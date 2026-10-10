// === Module 13538: InAppReportsGuildScheduledEventPreview ===

// Module 13538 (InAppReportsGuildScheduledEventPreview)
import nativeDefault from "native" /* 587 */;
import GuildIconDefault from "GuildIcon" /* 6158 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, itemContainer: null, guildInfo: null, guildName: null, eventName: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.itemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
obj2.guildInfo = { display: "flex", flexDirection: "row", alignItems: "center" };
obj2.guildName = { lineHeight: 18, marginStart: 8 };
obj2.eventName = { lineHeight: 20, marginTop: 8 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildScheduledEventPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildScheduledEventPreview(event) {
  const cResult = event(576).c(33);
  event = event.event;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== event.guild_id) {
    const fn = function h() {
      return GuildStore.getGuild(event.guild_id);
    };
    cResult[1] = event.guild_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = event(576);
  const stateFromStores = event(504).useStateFromStores(first, tmp7);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] !== tmp4.borderColor.color) {
      const hexWithOpacityResult = tmp(4967).hexWithOpacity(tmp4.borderColor.color, 0.08);
      cResult[3] = tmp4.borderColor.color;
      cResult[4] = hexWithOpacityResult;
      let tmp9 = hexWithOpacityResult;
      const tmpResult2 = tmp(4967);
    } else {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    ({ container, title } = tmp4);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.SDTOL7);
      cResult[5] = stringResult;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== tmp4.title) {
      const obj2 = { style: title, accessibilityRole: "header", variant: "text-xs/bold", children: tmp11 };
      const tmp15 = closure_5(tmp(5088).Text, obj2);
      cResult[6] = tmp4.title;
      cResult[7] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== tmp9) {
      const obj3 = { borderColor: tmp9 };
      cResult[8] = tmp9;
      cResult[9] = obj3;
      let tmp16 = obj3;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] === tmp4.itemContainer) {
      if (cResult[11] === tmp16) {
        let tmp17 = cResult[12];
      }
      if (cResult[13] !== stateFromStores) {
        const obj4 = { guild: stateFromStores, size: tmp(6158).GuildIconSizes.XXSMALL, selected: false };
        const tmp22 = closure_5(GuildIconDefault, obj4);
        cResult[13] = stateFromStores;
        cResult[14] = tmp22;
        let tmp18 = tmp22;
      } else {
        tmp18 = cResult[14];
      }
      if (cResult[15] === stateFromStores.name) {
        if (cResult[16] === tmp4.guildName) {
          let tmp23 = cResult[17];
        }
        if (cResult[18] === tmp4.guildInfo) {
          if (cResult[19] === tmp18) {
            if (cResult[20] === tmp23) {
              let tmp26 = cResult[21];
            }
            if (cResult[22] === event.name) {
              if (cResult[23] === tmp4.eventName) {
                let tmp30 = cResult[24];
              }
              if (cResult[25] === tmp26) {
                if (cResult[26] === tmp30) {
                  if (cResult[27] === tmp17) {
                    let tmp33 = cResult[28];
                  }
                  if (cResult[29] === tmp4.container) {
                    if (cResult[30] === tmp33) {
                      if (cResult[31] === tmp13) {
                        let tmp37 = cResult[32];
                      }
                      return tmp37;
                    }
                  }
                  const obj5 = { style: container, children: null };
                  const items1 = [tmp13, tmp33];
                  obj5.children = items1;
                  const tmp40 = closure_6(View, obj5);
                  cResult[29] = tmp4.container;
                  cResult[30] = tmp33;
                  cResult[31] = tmp13;
                  cResult[32] = tmp40;
                  tmp37 = tmp40;
                }
              }
              const obj6 = { style: tmp17, children: null };
              const items2 = [tmp26, tmp30];
              obj6.children = items2;
              const tmp36 = closure_6(View, obj6);
              cResult[25] = tmp26;
              cResult[26] = tmp30;
              cResult[27] = tmp17;
              cResult[28] = tmp36;
              tmp33 = tmp36;
            }
            const obj7 = { style: tmp4.eventName, variant: "text-md/bold", color: "mobile-text-heading-primary", children: event.name };
            const tmp32 = closure_5(tmp(5088).Text, obj7);
            cResult[22] = event.name;
            cResult[23] = tmp4.eventName;
            cResult[24] = tmp32;
            tmp30 = tmp32;
          }
        }
        const obj8 = { style: tmp4.guildInfo, children: null };
        const items3 = [tmp18, tmp23];
        obj8.children = items3;
        const tmp29 = closure_6(View, obj8);
        cResult[18] = tmp4.guildInfo;
        cResult[19] = tmp18;
        cResult[20] = tmp23;
        cResult[21] = tmp29;
        tmp26 = tmp29;
      }
      const obj9 = { style: tmp4.guildName, variant: "text-sm/medium", color: "text-default", children: stateFromStores.name };
      const tmp25 = closure_5(tmp(5088).Text, obj9);
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
  const tmpResult = event(504);
}) : (function GuildScheduledEventPreview(event) {
  event = event.event;
  const tmp = closure_7();
  const items = [GuildStore];
  const stateFromStores = event(504).useStateFromStores(items, () => GuildStore.getGuild(event.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = { style: tmp.container, children: null };
    const tmp2Result = tmp2(4967);
    const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    const intl = tmp2(1126).intl;
    obj3.children = intl.string(tmp2(1126).t.SDTOL7);
    const items1 = [closure_5(tmp2(5088).Text, obj3), ];
    const obj4 = { style: null, children: null };
    const items2 = [tmp.itemContainer, ];
    const obj5 = { borderColor: tmp2(4967).hexWithOpacity(tmp.borderColor.color, 0.08) };
    items2[1] = obj5;
    obj4.style = items2;
    const obj6 = { style: tmp.guildInfo, children: null };
    const obj7 = { guild: stateFromStores, size: null, selected: false };
    const hexWithOpacityResult = tmp2(4967).hexWithOpacity(tmp.borderColor.color, 0.08);
    obj7.size = tmp2(6158).GuildIconSizes.XXSMALL;
    const items3 = [closure_5(GuildIconDefault, obj7), ];
    const obj8 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: stateFromStores.name };
    items3[1] = closure_5(tmp2(5088).Text, obj8);
    obj6.children = items3;
    const items4 = [closure_6(View, obj6), ];
    const obj9 = { style: tmp.eventName, variant: "text-md/bold", color: "mobile-text-heading-primary", children: event.name };
    items4[1] = closure_5(tmp2(5088).Text, obj9);
    obj4.children = items4;
    items1[1] = closure_6(View, obj4);
    obj2.children = items1;
    return closure_6(View, obj2);
  }
  const obj = event(504);
});