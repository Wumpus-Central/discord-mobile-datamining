// === Module 8658: GuildEventsNoContent ===

// Module 8658 (GuildEventsNoContent)
import nativeDefault from "native" /* 587 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import TextStyles from "TextStyles" /* 5906 */;

const require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1085).GuildSettingsSections;
const Constants = fn(1096);
({ Permissions: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_80 }, title: null, subtitle: null };
let obj4 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }));
obj4.textAlign = "center";
obj2.title = obj4;
obj2.subtitle = { paddingBottom: 2, textAlign: "center" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_80 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventsNoContent(guild) {
  const cResult = guild(576).c(20);
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function u() {
      return PermissionStore.can(constants.MANAGE_ROLES, guild);
    };
    const items1 = [guild];
    cResult[1] = guild;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = guild(576);
  const stateFromStores = guild(504).useStateFromStores(first, tmp7, tmp8);
  ({ container, title } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["WgZ+3D"]);
    cResult[4] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4.title) {
    const obj2 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp10 };
    const tmp14 = closure_7(tmp(5088).Text, obj2);
    cResult[5] = tmp4.title;
    cResult[6] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["v/S/PG"]);
    cResult[7] = stringResult1;
    let tmp15 = stringResult1;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== tmp4.subtitle) {
    const obj3 = { style: tmp4.subtitle, variant: "text-sm/normal", color: "text-default", children: tmp15 };
    const tmp19 = closure_7(tmp(5088).Text, obj3);
    cResult[8] = tmp4.subtitle;
    cResult[9] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === stateFromStores) {
    if (cResult[11] === guild) {
      if (cResult[12] === onClose) {
        if (cResult[13] === tmp4.subtitle) {
          let tmp20 = cResult[14];
        }
        if (cResult[15] === tmp4.container) {
          if (cResult[16] === tmp17) {
            if (cResult[17] === tmp20) {
              if (cResult[18] === tmp12) {
                let tmp23 = cResult[19];
              }
              return tmp23;
            }
          }
        }
        const obj4 = { style: container, children: null };
        const items2 = [tmp12, tmp17, tmp20];
        obj4.children = items2;
        const tmp26 = closure_8(View, obj4);
        cResult[15] = tmp4.container;
        cResult[16] = tmp17;
        cResult[17] = tmp20;
        cResult[18] = tmp12;
        cResult[19] = tmp26;
        tmp23 = tmp26;
      }
    }
  }
  let tmp21 = stateFromStores;
  if (stateFromStores) {
    const obj5 = { style: tmp4.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = tmp(1126).intl;
    const obj6 = {
      onClick() {
          onClose();
          GuildSettingsActionCreatorsDefault.open(guild.id, GuildSettingsSections.ROLES);
        }
    };
    obj5.children = intl3.format(tmp(1126).t["K+DH2o"], obj6);
    tmp21 = closure_7(tmp(5088).Text, obj5);
  }
  cResult[10] = stateFromStores;
  cResult[11] = guild;
  cResult[12] = onClose;
  cResult[13] = tmp4.subtitle;
  cResult[14] = tmp21;
  tmp20 = tmp21;
  const tmpResult = guild(504);
}) : (function GuildEventsNoContent(guild) {
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = closure_9();
  const items = [PermissionStore];
  const items1 = [guild];
  let stateFromStores = guild(504).useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_ROLES, guild), items1);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guild(1126).intl;
  obj3.children = intl.string(guild(1126).t["WgZ+3D"]);
  const items2 = [closure_7(guild(5088).Text, obj3), , ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = guild(1126).intl;
  obj4.children = intl2.string(guild(1126).t["v/S/PG"]);
  items2[1] = closure_7(guild(5088).Text, obj4);
  if (stateFromStores) {
    const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = tmp2(1126).intl;
    const obj6 = {
      onClick() {
          onClose();
          GuildSettingsActionCreatorsDefault.open(guild.id, GuildSettingsSections.ROLES);
        }
    };
    obj5.children = intl3.format(tmp2(1126).t["K+DH2o"], obj6);
    stateFromStores = closure_7(tmp2(5088).Text, obj5);
  }
  items2[2] = stateFromStores;
  obj2.children = items2;
  return closure_8(View, obj2);
});