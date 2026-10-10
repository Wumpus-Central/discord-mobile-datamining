// discord_app/modules/application_commands/native/ApplicationSectionHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  applicationHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
    paddingHorizontal: 16,
  },
  applicationIcon: null,
};
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm, marginRight: 8 };
obj2.applicationIcon = size;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  height: 32,
  backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
  paddingHorizontal: 16,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ApplicationSectionHeader(section) {
      const cResult = section(576).c(19);
      section = section.section;
      const guildId = section.guildId;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === section) {
          let tmp7 = cResult[3];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp7);
        if (cResult[4] === stateFromStores) {
          if (cResult[5] === section) {
            let tmp9 = cResult[6];
          }
          let nick;
          if (stateFromStores != null) {
            nick = stateFromStores.nick;
          }
          if (null != nick) {
            let name = stateFromStores.nick;
          } else if (section != null) {
            name = section.name;
          }
          if (cResult[7] !== name) {
            const intl = tmp(1126).intl;
            const obj2 = { applicationName: name };
            const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["Ocw/sM"], obj2);
            cResult[7] = name;
            cResult[8] = formatToPlainStringResult;
            let tmp13 = formatToPlainStringResult;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === tmp9) {
            if (cResult[10] === tmp4.applicationIcon) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] !== name) {
              const obj3 = { variant: "eyebrow", color: "interactive-text-default", children: name };
              const tmp21 = closure_5(tmp(5088).Text, obj3);
              cResult[12] = name;
              cResult[13] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[13];
            }
            if (cResult[14] === tmp4.applicationHeaderWrapper) {
              if (cResult[15] === tmp13) {
                if (cResult[16] === tmp15) {
                  if (cResult[17] === tmp19) {
                    let tmp22 = cResult[18];
                  }
                  return tmp22;
                }
              }
            }
            const obj4 = { style: tmp4.applicationHeaderWrapper, accessibilityLabel: tmp13, children: null };
            const items1 = [tmp15, tmp19];
            obj4.children = items1;
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
            tmp16 = closure_5(guildId(6156), obj5);
          }
          cResult[9] = tmp9;
          cResult[10] = tmp4.applicationIcon;
          cResult[11] = tmp16;
          tmp15 = tmp16;
        }
        const tmpResult = tmp(504);
        const applicationCommandsIconSource = tmp(11927).getApplicationCommandsIconSource(section, stateFromStores);
        cResult[4] = stateFromStores;
        cResult[5] = section;
        cResult[6] = applicationCommandsIconSource;
        tmp9 = applicationCommandsIconSource;
        const tmpResult2 = tmp(11927);
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
      const obj = section(576);
    }
  : function ApplicationSectionHeader(section) {
      section = section.section;
      const guildId = section.guildId;
      const tmp = closure_7();
      const items = [GuildMemberStore];
      const stateFromStores = section(504).useStateFromStores(items, () => {
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
      const obj = section(504);
      const applicationCommandsIconSource = section(11927).getApplicationCommandsIconSource(section, stateFromStores);
      let nick;
      if (stateFromStores != null) {
        nick = stateFromStores.nick;
      }
      if (null != nick) {
        let name = stateFromStores.nick;
      } else if (section != null) {
        name = section.name;
      }
      const obj3 = { style: tmp.applicationHeaderWrapper, accessibilityLabel: null, children: null };
      const intl = tmp2(1126).intl;
      obj3.accessibilityLabel = intl.formatToPlainString(section(1126).t["Ocw/sM"], { applicationName: name });
      let tmp9 = null != applicationCommandsIconSource;
      if (tmp9) {
        const obj4 = { style: tmp.applicationIcon, source: applicationCommandsIconSource };
        tmp9 = closure_5(guildId(6156), obj4);
      }
      const items1 = [
        tmp9,
        closure_5(section(5088).Text, { variant: "eyebrow", color: "interactive-text-default", children: name }),
      ];
      obj3.children = items1;
      return closure_6(View, obj3);
    };
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;
