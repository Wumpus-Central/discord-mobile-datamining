// === Module 9481: GuildEventsNoContent ===

// Module 9481 (GuildEventsNoContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1085 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1096 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles from "TextStyles" /* 5922 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild;

let Fonts;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const GuildSettingsSections = Constants2.GuildSettingsSections;
({ Permissions: metroRequire, Fonts } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 88, padding: 16 }, title: obj2, subtitle: { paddingBottom: 2, textAlign: "center" } };
obj2 = { textAlign: "center" };
createStyles = createStyles.createStyles;
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
const merged = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }));
let closure_9 = createStyles(obj);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let first;
  let intl3;
  let items2;
  let obj7;
  let tmp10;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp22;
  let tmp7;
  let tmp8;
  let obj = guild(576);
  const cResult = obj.c(21);
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function u() {
      return PermissionStore.can(metroRequire.MANAGE_ROLES, guild);
    };
    const items1 = [guild];
    cResult[1] = guild;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = guild(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  const container = tmp4.container;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { icon: onClose(9308), IconComponent: guild(9310).CalendarIcon };
    const tmp13 = onClose(9327);
    const tmp14 = closure_7(tmp13, obj2);
    cResult[4] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
  }
  const title = tmp4.title;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(guild(1126).t["WgZ+3D"]);
    cResult[5] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.title) {
    const obj3 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
    const tmp19 = closure_7(guild(4892).Text, obj3);
    cResult[6] = tmp4.title;
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  const subtitle = tmp4.subtitle;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(guild(1126).t["v/S/PG"]);
    cResult[8] = stringResult1;
    tmp20 = stringResult1;
  } else {
    tmp20 = cResult[8];
  }
  if (cResult[9] !== tmp4.subtitle) {
    const obj4 = { style: subtitle, variant: "text-sm/normal", color: "text-default", children: tmp20 };
    const tmp24 = closure_7(guild(4892).Text, obj4);
    cResult[9] = tmp4.subtitle;
    cResult[10] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] === stateFromStores) {
    if (cResult[12] === guild) {
      if (cResult[13] === onClose) {
        let tmp25;
        if (cResult[14] === tmp4.subtitle) {
          tmp25 = cResult[15];
        }
        if (cResult[16] === tmp4.container) {
          if (cResult[17] === tmp22) {
            if (cResult[18] === tmp25) {
              let tmp28;
              if (cResult[19] === tmp17) {
                tmp28 = cResult[20];
              }
              return tmp28;
            }
          }
        }
        const obj5 = { style: container, children: items2 };
        items2 = [tmp10, tmp17, tmp22, tmp25];
        const tmp31 = closure_8(View, obj5);
        cResult[16] = tmp4.container;
        cResult[17] = tmp22;
        cResult[18] = tmp25;
        cResult[19] = tmp17;
        cResult[20] = tmp31;
        tmp28 = tmp31;
      }
    }
  }
  let tmp26 = stateFromStores;
  if (tmp26) {
    const obj6 = { style: tmp4.subtitle, variant: "text-sm/normal", color: "text-default", children: intl3.format(guild(1126).t["K+DH2o"], obj7) };
    const Text = tmp(4892).Text;
    intl3 = tmp(1126).intl;
    obj7 = {
      onClick() {
          onClose();
          const obj = GuildSettingsActionCreatorsDefault;
          obj.open(guild.id, GuildSettingsSections.ROLES);
        }
    };
    tmp26 = closure_7(Text, obj6);
  }
  cResult[11] = stateFromStores;
  cResult[12] = guild;
  cResult[13] = onClose;
  cResult[14] = tmp4.subtitle;
  cResult[15] = tmp26;
  tmp25 = tmp26;
}) : ((guild) => {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj7;
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = closure_9();
  let obj = guild(504);
  const items = [PermissionStore];
  const items1 = [guild];
  let stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(metroRequire.MANAGE_ROLES, guild), items1);
  const obj2 = { style: tmp.container, children: items2 };
  const obj3 = { icon: onClose(9308), IconComponent: guild(9310).CalendarIcon };
  const tmp8 = onClose(9327);
  items2 = [closure_7(tmp8, obj3), , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(guild(1126).t["WgZ+3D"]) };
  const Text = guild(4892).Text;
  intl = guild(1126).intl;
  items2[1] = closure_7(Text, obj4);
  const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl2.string(guild(1126).t["v/S/PG"]) };
  const Text2 = guild(4892).Text;
  intl2 = guild(1126).intl;
  items2[2] = closure_7(Text2, obj5);
  if (stateFromStores) {
    const obj6 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl3.format(guild(1126).t["K+DH2o"], obj7) };
    const Text3 = tmp2(4892).Text;
    intl3 = tmp2(1126).intl;
    obj7 = {
      onClick() {
          onClose();
          const obj = GuildSettingsActionCreatorsDefault;
          obj.open(guild.id, GuildSettingsSections.ROLES);
        }
    };
    stateFromStores = closure_7(Text3, obj6);
  }
  items2[3] = stateFromStores;
  return closure_8(View, obj2);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default tmp8;