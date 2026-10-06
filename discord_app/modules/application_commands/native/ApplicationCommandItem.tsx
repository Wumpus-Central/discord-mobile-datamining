// discord_app/modules/application_commands/native/ApplicationCommandItem.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ApplicationCommandsConstants from "ApplicationCommandsConstants.tsx";
import application_commands_ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let guildId;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = {
    applicationCommandItem: {
      flexDirection: "row",
      paddingVertical: 8,
      paddingHorizontal: 16,
      alignItems: "center",
      height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT),
    },
    highlightedApplicationCommandItem: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER },
    applicationCommandIcon: size,
    applicationCommandDescriptionWrapper: { flexDirection: "column", flexShrink: 1, alignSelf: "flex-end" },
    applicationCommandSectionName: { paddingLeft: 16, marginLeft: "auto" },
  };
  ({
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT),
  });
  ({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER });
  size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, marginRight: 16 };
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let command;
      let first;
      let highlighted;
      let items1;
      let items2;
      let onPress;
      let section;
      let showIcon;
      const obj = section(576);
      const cResult = obj.c(39);
      ({ command, onPress, section } = guildId);
      guildId = guildId.guildId;
      ({ showIcon, highlighted } = guildId);
      const tmpResult = section(5609);
      const tmp6 = closure_9(tmpResult.useFontScale());
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        let tmp9;
        if (cResult[2] === section) {
          tmp9 = cResult[3];
        }
        const tmpResult3 = section(504);
        const stateFromStores = tmpResult3.useStateFromStores(first, tmp9);
        if (cResult[4] === stateFromStores) {
          let tmp11;
          let name;
          if (cResult[5] === section) {
            tmp11 = cResult[6];
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
          if (cResult[7] === command.displayDescription) {
            if (cResult[8] === command.displayName) {
              let tmp15;
              if (cResult[9] === name) {
                tmp15 = cResult[10];
              }
              if (cResult[11] === (undefined !== highlighted && highlighted)) {
                let tmp17;
                if (cResult[12] === tmp6.highlightedApplicationCommandItem) {
                  tmp17 = cResult[13];
                }
                if (cResult[14] === tmp6.applicationCommandItem) {
                  let tmp19;
                  if (cResult[15] === tmp17) {
                    tmp19 = cResult[16];
                  }
                  if (cResult[17] === tmp11) {
                    if (cResult[18] === (undefined === showIcon || showIcon)) {
                      let tmp25;
                      let tmp30;
                      let tmp33;
                      if (cResult[19] === tmp6.applicationCommandIcon) {
                        tmp25 = cResult[20];
                      }
                      const text = `/ ${command.displayName}`;
                      if (cResult[21] !== `/ ${command.displayName}`) {
                        const obj2 = {
                          lineClamp: 1,
                          variant: "text-md/semibold",
                          color: "mobile-text-heading-primary",
                          children: text,
                        };
                        const tmp32 = closure_7(section(4892).Text, obj2);
                        cResult[21] = text;
                        cResult[22] = tmp32;
                        tmp30 = tmp32;
                      } else {
                        tmp30 = cResult[22];
                      }
                      if (cResult[23] !== command.displayDescription) {
                        const obj3 = {
                          lineClamp: 1,
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: command.displayDescription,
                        };
                        const tmp35 = closure_7(section(4892).Text, obj3);
                        cResult[23] = command.displayDescription;
                        cResult[24] = tmp35;
                        tmp33 = tmp35;
                      } else {
                        tmp33 = cResult[24];
                      }
                      if (cResult[25] === tmp6.applicationCommandDescriptionWrapper) {
                        if (cResult[26] === tmp30) {
                          let tmp36;
                          if (cResult[27] === tmp33) {
                            tmp36 = cResult[28];
                          }
                          if (cResult[29] === name) {
                            let tmp40;
                            if (cResult[30] === tmp6.applicationCommandSectionName) {
                              tmp40 = cResult[31];
                            }
                            if (cResult[32] === onPress) {
                              if (cResult[33] === tmp36) {
                                if (cResult[34] === tmp40) {
                                  if (cResult[35] === tmp15) {
                                    if (cResult[36] === tmp19) {
                                      let tmp43;
                                      if (cResult[37] === tmp25) {
                                        tmp43 = cResult[38];
                                      }
                                      return tmp43;
                                    }
                                  }
                                }
                              }
                            }
                            const obj4 = {
                              accessibilityLabel: tmp15,
                              style: tmp19,
                              accessibilityRole: "button",
                              onPress,
                              children: items1,
                            };
                            items1 = [tmp25, tmp36, tmp40];
                            const tmp45 = closure_8(section(5916).PressableOpacity, obj4);
                            cResult[32] = onPress;
                            cResult[33] = tmp36;
                            cResult[34] = tmp40;
                            cResult[35] = tmp15;
                            cResult[36] = tmp19;
                            cResult[37] = tmp25;
                            cResult[38] = tmp45;
                            tmp43 = tmp45;
                          }
                          const obj6 = {
                            style: tmp6.applicationCommandSectionName,
                            variant: "eyebrow",
                            color: "text-muted",
                            children: name,
                          };
                          const tmp42 = closure_7(section(4892).Text, obj6);
                          cResult[29] = name;
                          cResult[30] = tmp6.applicationCommandSectionName;
                          cResult[31] = tmp42;
                          tmp40 = tmp42;
                        }
                      }
                      const obj7 = { style: tmp6.applicationCommandDescriptionWrapper, children: items2 };
                      items2 = [tmp30, tmp33];
                      const tmp39 = closure_8(View, obj7);
                      cResult[25] = tmp6.applicationCommandDescriptionWrapper;
                      cResult[26] = tmp30;
                      cResult[27] = tmp33;
                      cResult[28] = tmp39;
                      tmp36 = tmp39;
                    }
                  }
                  let tmp26 = tmp4 && null != tmp11;
                  if (tmp26) {
                    const obj8 = { style: tmp6.applicationCommandIcon, source: tmp11 };
                    tmp26 = closure_7(guildId(5981), obj8);
                  }
                  cResult[17] = tmp11;
                  cResult[18] = undefined === showIcon || showIcon;
                  cResult[19] = tmp6.applicationCommandIcon;
                  cResult[20] = tmp26;
                  tmp25 = tmp26;
                }
                const obj9 = {};
                const merged = Object.assign(tmp6.applicationCommandItem);
                const merged1 = Object.assign(tmp17);
                cResult[14] = tmp6.applicationCommandItem;
                cResult[15] = tmp17;
                cResult[16] = obj9;
                tmp19 = obj9;
              }
              const tmp18 = undefined !== highlighted && highlighted ? tmp6.highlightedApplicationCommandItem : {};
              cResult[11] = undefined !== highlighted && highlighted;
              cResult[12] = tmp6.highlightedApplicationCommandItem;
              cResult[13] = tmp18;
              tmp17 = tmp18;
            }
          }
          const intl = section(1126).intl;
          const obj10 = { applicationName: name, commandDescription: null, commandName: null };
          ({ displayDescription: obj5.commandDescription, displayName: obj5.commandName } = command);
          const formatToPlainStringResult = intl.formatToPlainString(section(1126).t.eo8b3e, obj10);
          cResult[7] = command.displayDescription;
          cResult[8] = command.displayName;
          cResult[9] = name;
          cResult[10] = formatToPlainStringResult;
          tmp15 = formatToPlainStringResult;
        }
        const tmpResult4 = section(11874);
        const applicationCommandsIconSource = tmpResult4.getApplicationCommandsIconSource(section, stateFromStores);
        cResult[4] = stateFromStores;
        cResult[5] = section;
        cResult[6] = applicationCommandsIconSource;
        tmp11 = applicationCommandsIconSource;
      }
      const fn = function c() {
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
      tmp9 = fn;
    }
  : (onPress) => {
      let command;
      let intl;
      let items2;
      let items3;
      let name;
      let obj4;
      let obj5;
      let section;
      let showIcon;
      ({ command, section } = onPress);
      ({ guildId: importDefault, showIcon } = onPress);
      onPress = onPress.onPress;
      if (showIcon === undefined) {
        showIcon = true;
      }
      let flag = onPress.highlighted;
      if (flag === undefined) {
        flag = false;
      }
      let stateFromStores;
      let obj = section(stateFromStores[9]);
      const tmp3 = closure_9(obj.useFontScale());
      const items = [GuildMemberStore];
      const obj2 = section(stateFromStores[10]);
      stateFromStores = obj2.useStateFromStores(items, () => {
        if (null != importDefault) {
          let botId;
          if (section != null) {
            botId = section.botId;
          }
          if (null != botId) {
            return GuildMemberStore.getMember(tmp, section.botId);
          }
        }
      });
      const items1 = [section, stateFromStores];
      const memo = react.useMemo(() => {
        const obj = application_commands_ApplicationCommandUtils;
        return obj.getApplicationCommandsIconSource(section, stateFromStores);
      }, items1);
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
        accessibilityLabel: intl.formatToPlainString(section(stateFromStores[12]).t.eo8b3e, obj4),
        style: obj5,
        accessibilityRole: "button",
        onPress,
        children: items2,
      };
      const PressableOpacity = section(tmp2[15]).PressableOpacity;
      intl = section(tmp2[12]).intl;
      obj4 = {
        applicationName: name,
        commandDescription: command.displayDescription,
        commandName: command.displayName,
      };
      obj5 = {};
      const merged = Object.assign(tmp3.applicationCommandItem);
      const tmp9 = flag ? tmp3.highlightedApplicationCommandItem : {};
      const merged1 = Object.assign(tmp9);
      if (showIcon) {
        showIcon = null != memo;
      }
      if (showIcon) {
        const obj6 = { style: tmp3.applicationCommandIcon, source: memo };
        showIcon = closure_7(require("FastImage"), obj6);
      }
      items2 = [showIcon, ,];
      const obj7 = { style: tmp3.applicationCommandDescriptionWrapper, children: items3 };
      items3 = [,];
      const obj8 = {
        lineClamp: 1,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: `/ ${command.displayName}`,
      };
      items3[0] = closure_7(section(stateFromStores[14]).Text, obj8);
      const obj9 = {
        lineClamp: 1,
        variant: "text-xs/medium",
        color: "text-default",
        children: command.displayDescription,
      };
      items3[1] = closure_7(section(stateFromStores[14]).Text, obj9);
      items2[1] = closure_8(View, obj7);
      const obj10 = {
        style: tmp3.applicationCommandSectionName,
        variant: "eyebrow",
        color: "text-muted",
        children: name,
      };
      items2[2] = closure_7(section(stateFromStores[14]).Text, obj10);
      return closure_8(PressableOpacity, obj3);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandItem.tsx");

export default tmp3;
