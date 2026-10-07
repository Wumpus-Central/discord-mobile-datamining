// === Module 12057: ApplicationCommandItem ===

// Module 12057 (ApplicationCommandItem)
import nativeDefault from "native" /* 587 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11874 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AUTOCOMPLETE_ROW_HEIGHT = fn(10085).AUTOCOMPLETE_ROW_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { applicationCommandItem: { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) }, highlightedApplicationCommandItem: null, applicationCommandIcon: null, applicationCommandDescriptionWrapper: null, applicationCommandSectionName: null };
  const obj2 = { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj.highlightedApplicationCommandItem = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
  const size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, marginRight: 16 };
  obj.applicationCommandIcon = size;
  obj.applicationCommandDescriptionWrapper = { flexDirection: "column", flexShrink: 1, alignSelf: "flex-end" };
  obj.applicationCommandSectionName = { paddingLeft: 16, marginLeft: "auto" };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = section(576).c(39);
  ({ command, onPress, section } = guildId);
  guildId = guildId.guildId;
  ({ showIcon, highlighted } = guildId);
  let highlightedApplicationCommandItem = undefined !== highlighted && highlighted;
  const obj = section(576);
  const tmp5 = closure_9(section(5609).useFontScale());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === section) {
      let tmp8 = cResult[3];
    }
    const stateFromStores = section(504).useStateFromStores(first, tmp8);
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === section) {
        let tmp10 = cResult[6];
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
      if (cResult[7] === command.displayDescription) {
        if (cResult[8] === command.displayName) {
          if (cResult[9] === name) {
            let tmp14 = cResult[10];
          }
          if (cResult[11] === highlightedApplicationCommandItem) {
            if (cResult[12] === tmp5.highlightedApplicationCommandItem) {
              if (cResult[14] === tmp5.applicationCommandItem) {
                if (cResult[15] === tmp16) {
                  let tmp19 = cResult[16];
                }
                if (cResult[17] === tmp10) {
                  if (cResult[18] === tmp4) {
                    if (cResult[19] === tmp5.applicationCommandIcon) {
                      let tmp25 = cResult[20];
                    }
                    const text = `/ ${command.displayName}`;
                    if (cResult[21] !== `/ ${command.displayName}`) {
                      const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text };
                      const tmp32 = closure_7(section(4892).Text, obj2);
                      cResult[21] = text;
                      cResult[22] = tmp32;
                      let tmp30 = tmp32;
                    } else {
                      tmp30 = cResult[22];
                    }
                    if (cResult[23] !== command.displayDescription) {
                      const obj3 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: command.displayDescription };
                      const tmp35 = closure_7(section(4892).Text, obj3);
                      cResult[23] = command.displayDescription;
                      cResult[24] = tmp35;
                      let tmp33 = tmp35;
                    } else {
                      tmp33 = cResult[24];
                    }
                    if (cResult[25] === tmp5.applicationCommandDescriptionWrapper) {
                      if (cResult[26] === tmp30) {
                        if (cResult[27] === tmp33) {
                          let tmp36 = cResult[28];
                        }
                        if (cResult[29] === name) {
                          if (cResult[30] === tmp5.applicationCommandSectionName) {
                            let tmp40 = cResult[31];
                          }
                          if (cResult[32] === onPress) {
                            if (cResult[33] === tmp36) {
                              if (cResult[34] === tmp40) {
                                if (cResult[35] === tmp14) {
                                  if (cResult[36] === tmp19) {
                                    if (cResult[37] === tmp25) {
                                      let tmp43 = cResult[38];
                                    }
                                    return tmp43;
                                  }
                                }
                              }
                            }
                          }
                          const obj4 = { accessibilityLabel: tmp14, style: tmp19, accessibilityRole: "button", onPress, children: null };
                          const items1 = [tmp25, tmp36, tmp40];
                          obj4.children = items1;
                          const tmp45 = closure_8(section(5916).PressableOpacity, obj4);
                          cResult[32] = onPress;
                          cResult[33] = tmp36;
                          cResult[34] = tmp40;
                          cResult[35] = tmp14;
                          cResult[36] = tmp19;
                          cResult[37] = tmp25;
                          cResult[38] = tmp45;
                          tmp43 = tmp45;
                        }
                        const obj6 = { style: tmp5.applicationCommandSectionName, variant: "eyebrow", color: "text-muted", children: name };
                        const tmp42 = closure_7(section(4892).Text, obj6);
                        cResult[29] = name;
                        cResult[30] = tmp5.applicationCommandSectionName;
                        cResult[31] = tmp42;
                        tmp40 = tmp42;
                      }
                    }
                    const obj7 = { style: tmp5.applicationCommandDescriptionWrapper, children: null };
                    const items2 = [tmp30, tmp33];
                    obj7.children = items2;
                    const tmp39 = closure_8(View, obj7);
                    cResult[25] = tmp5.applicationCommandDescriptionWrapper;
                    cResult[26] = tmp30;
                    cResult[27] = tmp33;
                    cResult[28] = tmp39;
                    tmp36 = tmp39;
                  }
                }
                let tmp26 = tmp4;
                if (tmp4) {
                  tmp26 = null != tmp10;
                }
                if (tmp26) {
                  const obj8 = { style: tmp5.applicationCommandIcon, source: tmp10 };
                  tmp26 = closure_7(guildId(5981), obj8);
                }
                cResult[17] = tmp10;
                cResult[18] = tmp4;
                cResult[19] = tmp5.applicationCommandIcon;
                cResult[20] = tmp26;
                tmp25 = tmp26;
              }
              const obj9 = {};
              const merged = Object.assign(tmp5.applicationCommandItem);
              const merged1 = Object.assign(tmp16);
              cResult[14] = tmp5.applicationCommandItem;
              cResult[15] = cResult[13];
              cResult[16] = obj9;
              tmp19 = obj9;
            }
          }
          const tmp17 = highlightedApplicationCommandItem ? tmp5.highlightedApplicationCommandItem : {};
          cResult[11] = highlightedApplicationCommandItem;
          highlightedApplicationCommandItem = tmp5.highlightedApplicationCommandItem;
          cResult[12] = highlightedApplicationCommandItem;
          cResult[13] = tmp17;
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
      tmp14 = formatToPlainStringResult;
    }
    const tmpResult3 = section(504);
    const applicationCommandsIconSource = section(11874).getApplicationCommandsIconSource(section, stateFromStores);
    cResult[4] = stateFromStores;
    cResult[5] = section;
    cResult[6] = applicationCommandsIconSource;
    tmp10 = applicationCommandsIconSource;
    const tmpResult4 = section(11874);
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
  tmp8 = fn;
  const tmpResult = section(5609);
}) : ((highlighted) => {
  ({ command, section } = highlighted);
  ({ guildId: importDefault, showIcon } = highlighted);
  if (showIcon === undefined) {
    showIcon = true;
  }
  let flag = highlighted.highlighted;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  const tmp3 = closure_9(section(stateFromStores[9]).useFontScale());
  const obj = section(stateFromStores[9]);
  const items = [GuildMemberStore];
  stateFromStores = section(stateFromStores[10]).useStateFromStores(items, () => {
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
  const memo = noop.useMemo(() => application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section, stateFromStores), items1);
  let nick;
  if (stateFromStores != null) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (section != null) {
    name = section.name;
  }
  const obj3 = { accessibilityLabel: null, style: null, accessibilityRole: "button", onPress: null, children: null };
  const intl = section(tmp2[12]).intl;
  obj3.accessibilityLabel = intl.formatToPlainString(section(stateFromStores[12]).t.eo8b3e, { applicationName: name, commandDescription: command.displayDescription, commandName: command.displayName });
  const merged = Object.assign(tmp3.applicationCommandItem);
  const merged1 = Object.assign(flag ? tmp3.highlightedApplicationCommandItem : {});
  obj3.style = {};
  obj3.onPress = highlighted.onPress;
  if (showIcon) {
    showIcon = null != memo;
  }
  if (showIcon) {
    const obj6 = { style: tmp3.applicationCommandIcon, source: memo };
    showIcon = closure_7(require("FastImage"), obj6);
  }
  const items2 = [showIcon, , ];
  const obj7 = { style: tmp3.applicationCommandDescriptionWrapper, children: null };
  const items3 = [closure_7(section(stateFromStores[14]).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` }), closure_7(section(stateFromStores[14]).Text, { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: command.displayDescription })];
  obj7.children = items3;
  items2[1] = closure_8(View, obj7);
  items2[2] = closure_7(section(stateFromStores[14]).Text, { style: tmp3.applicationCommandSectionName, variant: "eyebrow", color: "text-muted", children: name });
  obj3.children = items2;
  return closure_8(section(stateFromStores[15]).PressableOpacity, obj3);
});