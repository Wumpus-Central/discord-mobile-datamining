// discord_app/modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

const require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1085).GuildSettingsSections;
const Constants = fn(1096);
({ Permissions: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 88,
    padding: 16,
  },
  title: null,
  subtitle: null,
};
let obj3 = {};
const merged = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }),
);
obj3.textAlign = "center";
obj2.title = obj3;
obj2.subtitle = { paddingBottom: 2, textAlign: "center" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(576).c(21);
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
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { icon: onClose(9273), IconComponent: tmp(9275).CalendarIcon };
        const tmp14 = closure_7(onClose(9292), obj2);
        cResult[4] = tmp14;
        let tmp10 = tmp14;
        const tmp13 = onClose(9292);
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["WgZ+3D"]);
        cResult[5] = stringResult;
        let tmp15 = stringResult;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== tmp4.title) {
        const obj3 = {
          style: tmp4.title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp15,
        };
        const tmp19 = closure_7(tmp(4886).Text, obj3);
        cResult[6] = tmp4.title;
        cResult[7] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["v/S/PG"]);
        cResult[8] = stringResult1;
        let tmp20 = stringResult1;
      } else {
        tmp20 = cResult[8];
      }
      if (cResult[9] !== tmp4.subtitle) {
        const obj4 = { style: tmp4.subtitle, variant: "text-sm/normal", color: "text-default", children: tmp20 };
        const tmp24 = closure_7(tmp(4886).Text, obj4);
        cResult[9] = tmp4.subtitle;
        cResult[10] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[10];
      }
      if (cResult[11] === stateFromStores) {
        if (cResult[12] === guild) {
          if (cResult[13] === onClose) {
            if (cResult[14] === tmp4.subtitle) {
              let tmp25 = cResult[15];
            }
            if (cResult[16] === tmp4.container) {
              if (cResult[17] === tmp22) {
                if (cResult[18] === tmp25) {
                  if (cResult[19] === tmp17) {
                    let tmp28 = cResult[20];
                  }
                  return tmp28;
                }
              }
            }
            const obj5 = { style: tmp4.container, children: null };
            const items2 = [tmp10, tmp17, tmp22, tmp25];
            obj5.children = items2;
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
      if (stateFromStores) {
        const obj6 = { style: tmp4.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
        const intl3 = tmp(1126).intl;
        const obj7 = {
          onClick() {
            onClose();
            GuildSettingsActionCreatorsDefault.open(guild.id, GuildSettingsSections.ROLES);
          },
        };
        obj6.children = intl3.format(tmp(1126).t["K+DH2o"], obj7);
        tmp26 = closure_7(tmp(4886).Text, obj6);
      }
      cResult[11] = stateFromStores;
      cResult[12] = guild;
      cResult[13] = onClose;
      cResult[14] = tmp4.subtitle;
      cResult[15] = tmp26;
      tmp25 = tmp26;
      const tmpResult = guild(504);
    }
  : (guild) => {
      guild = guild.guild;
      const onClose = guild.onClose;
      const tmp = closure_9();
      const items = [PermissionStore];
      const items1 = [guild];
      let stateFromStores = guild(504).useStateFromStores(
        items,
        () => PermissionStore.can(constants.MANAGE_ROLES, guild),
        items1,
      );
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { icon: null, IconComponent: null };
      const obj = guild(504);
      obj3.icon = onClose(9273);
      obj3.IconComponent = guild(9275).CalendarIcon;
      const items2 = [closure_7(onClose(9292), obj3), , ,];
      const obj4 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = guild(1126).intl;
      obj4.children = intl.string(guild(1126).t["WgZ+3D"]);
      items2[1] = closure_7(guild(4886).Text, obj4);
      const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
      const intl2 = guild(1126).intl;
      obj5.children = intl2.string(guild(1126).t["v/S/PG"]);
      items2[2] = closure_7(guild(4886).Text, obj5);
      if (stateFromStores) {
        const obj6 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
        const intl3 = tmp2(1126).intl;
        const obj7 = {
          onClick() {
            onClose();
            GuildSettingsActionCreatorsDefault.open(guild.id, GuildSettingsSections.ROLES);
          },
        };
        obj6.children = intl3.format(tmp2(1126).t["K+DH2o"], obj7);
        stateFromStores = closure_7(tmp2(4886).Text, obj6);
      }
      items2[3] = stateFromStores;
      obj2.children = items2;
      return closure_8(View, obj2);
    };
