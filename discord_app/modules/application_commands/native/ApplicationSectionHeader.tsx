// discord_app/modules/application_commands/native/ApplicationSectionHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let section;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { applicationHeaderWrapper: obj2, applicationIcon: size };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  height: 32,
  backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
  paddingHorizontal: 16,
};
createStyles = createStyles.createStyles;
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm, marginRight: 8 };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (section) => {
      let first;
      let items1;
      const tmp = section;
      const obj = section(576);
      const cResult = obj.c(19);
      section = section.section;
      const guildId = section.guildId;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        let tmp7;
        if (cResult[2] === section) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
        if (cResult[4] === stateFromStores) {
          let tmp9;
          let name;
          let tmp13;
          if (cResult[5] === section) {
            tmp9 = cResult[6];
          }
          let nick;
          if (stateFromStores != null) {
            nick = stateFromStores.nick;
          }
          if (null != nick) {
            name = stateFromStores.nick;
          } else if (section != null) {
            name = section.name;
          }
          const applicationHeaderWrapper = tmp4.applicationHeaderWrapper;
          if (cResult[7] !== name) {
            const intl = tmp(1126).intl;
            const obj2 = { applicationName: name };
            const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["Ocw/sM"], obj2);
            cResult[7] = name;
            cResult[8] = formatToPlainStringResult;
            tmp13 = formatToPlainStringResult;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === tmp9) {
            let tmp15;
            let tmp19;
            if (cResult[10] === tmp4.applicationIcon) {
              tmp15 = cResult[11];
            }
            if (cResult[12] !== name) {
              const obj3 = { variant: "eyebrow", color: "interactive-text-default", children: name };
              const tmp21 = closure_5(tmp(4892).Text, obj3);
              cResult[12] = name;
              cResult[13] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[13];
            }
            if (cResult[14] === tmp4.applicationHeaderWrapper) {
              if (cResult[15] === tmp13) {
                if (cResult[16] === tmp15) {
                  let tmp22;
                  if (cResult[17] === tmp19) {
                    tmp22 = cResult[18];
                  }
                  return tmp22;
                }
              }
            }
            const obj4 = { style: applicationHeaderWrapper, accessibilityLabel: tmp13, children: items1 };
            items1 = [tmp15, tmp19];
            const tmp25 = closure_6(View, obj4);
            cResult[14] = tmp4.applicationHeaderWrapper;
            cResult[15] = tmp13;
            cResult[16] = tmp15;
            cResult[17] = tmp19;
            cResult[18] = tmp25;
            tmp22 = tmp25;
          }
          let tmp16 = null != tmp9;
          if (tmp16) {
            const obj5 = { style: tmp4.applicationIcon, source: tmp9 };
            tmp16 = closure_5(guildId(5981), obj5);
          }
          cResult[9] = tmp9;
          cResult[10] = tmp4.applicationIcon;
          cResult[11] = tmp16;
          tmp15 = tmp16;
        }
        const tmpResult2 = tmp(11874);
        const applicationCommandsIconSource = tmpResult2.getApplicationCommandsIconSource(section, stateFromStores);
        cResult[4] = stateFromStores;
        cResult[5] = section;
        cResult[6] = applicationCommandsIconSource;
        tmp9 = applicationCommandsIconSource;
      }
      const fn = function u() {
        if (null != guildId) {
          let botId;
          if (section != null) {
            botId = section.botId;
          }
          if (null != botId) {
            return GuildMemberStore.getMember(tmp, section.botId);
          }
        }
      };
      cResult[1] = guildId;
      cResult[2] = section;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : (section) => {
      let intl;
      let items1;
      let name;
      section = section.section;
      const guildId = section.guildId;
      const tmp = closure_7();
      const items = [GuildMemberStore];
      const obj = section(504);
      const stateFromStores = obj.useStateFromStores(items, () => {
        if (null != guildId) {
          let botId;
          if (section != null) {
            botId = section.botId;
          }
          if (null != botId) {
            return GuildMemberStore.getMember(tmp, section.botId);
          }
        }
      });
      const obj2 = section(11874);
      const applicationCommandsIconSource = obj2.getApplicationCommandsIconSource(section, stateFromStores);
      let nick;
      if (stateFromStores != null) {
        nick = stateFromStores.nick;
      }
      if (null != nick) {
        name = stateFromStores.nick;
      } else if (section != null) {
        name = section.name;
      }
      const obj3 = {
        style: tmp.applicationHeaderWrapper,
        accessibilityLabel: intl.formatToPlainString(section(1126).t["Ocw/sM"], { applicationName: name }),
        children: items1,
      };
      intl = tmp2(1126).intl;
      let tmp9 = null != applicationCommandsIconSource;
      if (tmp9) {
        const obj4 = { style: tmp.applicationIcon, source: applicationCommandsIconSource };
        tmp9 = closure_5(guildId(5981), obj4);
      }
      items1 = [
        tmp9,
        closure_5(section(4892).Text, { variant: "eyebrow", color: "interactive-text-default", children: name }),
      ];
      return closure_6(View, obj3);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default tmp5;
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;
