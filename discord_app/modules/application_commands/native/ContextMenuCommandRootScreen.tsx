// discord_app/modules/application_commands/native/ContextMenuCommandRootScreen.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import executeCommandDefault from "../executeCommand.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import ApplicationCommandConstants from "../ApplicationCommandConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let navigation;

let c10;
let c9;
let closure_12;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ CONTEXT_MENU_COMMANDS_QUERY_LIMIT: metroImportAll, BuiltInSectionId: c9 } = ApplicationCommandConstants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, sectionHeader: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let closure_13 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (navigation) => {
      let commandTargetId;
      let commandType;
      let first;
      let loading;
      let onPressAppCommand;
      let sectionDescriptors;
      let tmp6;
      const tmp = navigation;
      let obj = navigation(onPressAppCommand[9]);
      const cResult = obj.c(83);
      navigation = navigation.navigation;
      const params = navigation.route.params;
      const channel = params.channel;
      ({ commandType, commandTargetId } = params);
      onPressAppCommand = params.onPressAppCommand;
      const onClose = params.onClose;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_7];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function y() {
          return GuildStore.getGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(onPressAppCommand[10]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let obj3 = stateFromStores;
      let closure_6 = stateFromStores.useRef(false);
      const first1 = onClose(stateFromStores.useState(""), 2)[0];
      closure_7 = tmp10;
      onClose(stateFromStores.useState(""), 2);
      if (cResult[3] === navigation) {
        let tmp11;
        let tmp12;
        let tmp14;
        let tmp16;
        if (cResult[4] === onClose) {
          tmp11 = cResult[5];
          tmp12 = cResult[6];
        }
        const effect = obj3.useEffect(tmp11, tmp12);
        if (cResult[7] !== channel) {
          let obj2 = { channel, type: "channel" };
          cResult[7] = channel;
          cResult[8] = obj2;
          tmp14 = obj2;
        } else {
          tmp14 = cResult[8];
        }
        let tmp15;
        if ("" !== first1) {
          tmp15 = first1;
        }
        if (cResult[9] !== commandType) {
          const items1 = [commandType];
          cResult[9] = commandType;
          cResult[10] = items1;
          tmp16 = items1;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] === tmp15) {
          let tmp17;
          let commands;
          if (cResult[12] === tmp16) {
            tmp17 = cResult[13];
          }
          let prop;
          if ("" !== first1) {
            prop = tmp(tmp2[11]).ScoreMethod.COMMAND_OR_APPLICATION;
          }
          if ((cResult[14] === "") === first1) {
            let tmp20;
            if (cResult[15] === prop) {
              tmp20 = cResult[16];
            }
            if (cResult[17] === tmp17) {
              if (cResult[18] === tmp20) {
                let tmp22;
                let tmp25;
                if (cResult[19] === tmp14) {
                  tmp22 = cResult[20];
                }
                const obj8 = commandTargetId(onPressAppCommand[12]);
                const discovery = obj8.useDiscovery(tmp22);
                commands = discovery.commands;
                const prop1 = discovery.commandsByActiveSection;
                ({ sectionDescriptors, loading } = discovery);
                if (cResult[21] !== sectionDescriptors) {
                  let obj4 = {};
                  const item = sectionDescriptors.forEach((id) => {
                    obj4[id.id] = id;
                  });
                  const obj5 = { sections: obj4 };
                  cResult[21] = sectionDescriptors;
                  cResult[22] = obj5;
                  tmp25 = obj5;
                } else {
                  tmp25 = cResult[22];
                }
                const sections = tmp25.sections;
                if (cResult[23] === channel) {
                  if (cResult[24] === commandTargetId) {
                    if (cResult[25] === stateFromStores) {
                      if (cResult[26] === navigation) {
                        let tmp27;
                        if (cResult[27] === onPressAppCommand) {
                          tmp27 = cResult[28];
                        }
                        const onPressCommand = tmp27;
                        if (cResult[29] === prop1) {
                          if (cResult[30] === tmp27) {
                            let tmp28;
                            if (cResult[31] === navigation) {
                              tmp28 = cResult[32];
                            }
                            let closure_14 = tmp28;
                            if (!loading) {
                              let tmp38;
                              let tmp41;
                              if (0 !== commands.length) {
                                let tmp30;
                                let tmp29;
                                if (cResult[34] !== prop1) {
                                  let tmp31;
                                  let tmp33;
                                  const _Symbol = Symbol;
                                  if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                                    function ie(section) {
                                      return section.section.id === prop1.FRECENCY;
                                    }
                                    cResult[37] = ie;
                                    tmp31 = ie;
                                  } else {
                                    tmp31 = cResult[37];
                                  }
                                  let found = prop1.find(tmp31);
                                  const _Symbol2 = Symbol;
                                  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                                    function re(section) {
                                      return section.section.id !== prop1.FRECENCY;
                                    }
                                    cResult[38] = re;
                                    tmp33 = re;
                                  } else {
                                    tmp33 = cResult[38];
                                  }
                                  const found1 = prop1.filter(tmp33);
                                  let mapped;
                                  if (found != null) {
                                    let data = found.data;
                                    mapped = data.map((command) => ({ type: "command", command }));
                                  }
                                  if (mapped == null) {
                                    mapped = [];
                                  }
                                  const _Symbol3 = Symbol;
                                  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                                    function me(section) {
                                      return { type: "app", section: section.section };
                                    }
                                    cResult[39] = me;
                                  }
                                  class W {
                                    constructor(command) {
                                      let obj2;
                                      if (onPressAppCommand != null) {
                                        tmp();
                                      }
                                      closure_6.current = true;
                                      const obj = { command, optionValues: {}, context: obj2, commandTargetId };
                                      obj2 = { channel, guild: stateFromStores };
                                      executeCommandDefault(obj);
                                      let parent = navigation.getParent();
                                      if (parent == null) {
                                        parent = navigation;
                                      }
                                      parent.goBack();
                                    }
                                  }
                                  cResult[34] = prop1;
                                  cResult[35] = mapped;
                                  class Re {
                                    constructor(arg0) {
                                      if (!loading) {
                                        if (0 !== commands.length) {
                                          if (!closure_7) {
                                            if (0 === arg0) {
                                              let stringResult;
                                              if (frecencyItems.length > 0) {
                                                const intl2 = intl3.intl;
                                                stringResult = intl2.string(intl3.t.V0w2ap);
                                              }
                                              const obj = {
                                                variant: "text-sm/semibold",
                                                color: "text-default",
                                                style: sectionHeader.sectionHeader,
                                                children: stringResult,
                                              };
                                              return authStore(Text_Text.Text, obj);
                                            }
                                            const intl = intl3.intl;
                                            stringResult = intl.string(intl3.t.PHjkRE);
                                          }
                                        }
                                      }
                                      return null;
                                    }
                                  }
                                  cResult[36] = tmp37;
                                  tmp30 = tmp37;
                                  tmp29 = mapped;
                                } else {
                                  tmp29 = cResult[35];
                                  tmp30 = cResult[36];
                                }
                                if (cResult[40] === tmp30) {
                                  if (cResult[41] === tmp29) {
                                    tmp38 = cResult[42];
                                  }
                                }
                                const obj6 = { frecencyItems: tmp29, appItems: tmp30 };
                                cResult[40] = tmp30;
                                cResult[41] = tmp29;
                                cResult[42] = obj6;
                                tmp38 = obj6;
                              }
                              const frecencyItems = tmp38.frecencyItems;
                              const appItems = tmp38.appItems;
                              if (loading) {
                                let tmp48;
                                const _Symbol7 = Symbol;
                                if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                                  const items2 = [{ type: "placeholder" }];
                                  const items3 = [items2];
                                  cResult[43] = items3;
                                  tmp48 = items3;
                                } else {
                                  tmp48 = cResult[43];
                                }
                                tmp41 = tmp48;
                              } else if (0 === commands.length) {
                                let tmp47;
                                const _Symbol6 = Symbol;
                                if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                  const items4 = [{ type: "no_commands" }];
                                  const items5 = [items4];
                                  cResult[44] = items5;
                                  tmp47 = items5;
                                } else {
                                  tmp47 = cResult[44];
                                }
                                tmp41 = tmp47;
                              } else if ("" !== first1) {
                                if (cResult[45] !== commands) {
                                  const _Symbol5 = Symbol;
                                  if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                    class Se {
                                      constructor(command) {
                                        return { type: "command", command };
                                      }
                                    }
                                    cResult[47] = Se;
                                  } else {
                                    class Se {
                                      constructor(command) {
                                        return { type: "command", command };
                                      }
                                    }
                                  }
                                  const mapped1 = commands.map(Se);
                                  cResult[45] = commands;
                                  cResult[46] = mapped1;
                                } else {
                                  class Se {
                                    constructor(command) {
                                      return { type: "command", command };
                                    }
                                  }
                                }
                                if (cResult[48] !== tmp42) {
                                  class Se {
                                    constructor(command) {
                                      return { type: "command", command };
                                    }
                                  }
                                  tmp46[0] = tmp42;
                                  cResult[48] = tmp42;
                                  cResult[49] = tmp46;
                                } else {
                                  class Se {
                                    constructor(command) {
                                      return { type: "command", command };
                                    }
                                  }
                                }
                                tmp41 = tmp46;
                              } else {
                                class Se {
                                  constructor(command) {
                                    return { type: "command", command };
                                  }
                                }
                                let items6 = [];
                                if (frecencyItems.length > 0) {
                                  class Se {
                                    constructor(command) {
                                      return { type: "command", command };
                                    }
                                  }
                                }
                                if (appItems.length > 0) {
                                  class Se {
                                    constructor(command) {
                                      return { type: "command", command };
                                    }
                                  }
                                }
                                cResult[50] = appItems;
                                cResult[51] = frecencyItems;
                                cResult[52] = items6;
                                tmp41 = items6;
                              }
                              items6 = tmp41;
                              const _Symbol8 = Symbol;
                              if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                class Se {
                                  constructor(command) {
                                    return { type: "command", command };
                                  }
                                }
                                cResult[53] = tmp50;
                              } else {
                                class Se {
                                  constructor(command) {
                                    return { type: "command", command };
                                  }
                                }
                              }
                              const insets = channel(tmp2[14])(tmp50).insets;
                              channel(onPressAppCommand[15])();
                              if (cResult[54] !== tmp41) {
                                class Se {
                                  constructor(command) {
                                    return { type: "command", command };
                                  }
                                }
                                cResult[54] = tmp41;
                                cResult[55] = tmp54;
                              } else {
                                class Se {
                                  constructor(command) {
                                    return { type: "command", command };
                                  }
                                }
                              }
                              class W {
                                constructor(command) {
                                  let obj2;
                                  if (onPressAppCommand != null) {
                                    tmp();
                                  }
                                  closure_6.current = true;
                                  const obj = { command, optionValues: {}, context: obj2, commandTargetId };
                                  obj2 = { channel, guild: stateFromStores };
                                  executeCommandDefault(obj);
                                  let parent = navigation.getParent();
                                  if (parent == null) {
                                    parent = navigation;
                                  }
                                  parent.goBack();
                                }
                              }
                              const sectionHeader = tmp56;
                              tmp(onPressAppCommand[16]);
                              if (cResult[56] === commands.length) {
                                class Se {
                                  constructor(command) {
                                    return { type: "command", command };
                                  }
                                }
                              }
                              class Re {
                                constructor(arg0) {
                                  if (!loading) {
                                    if (0 !== commands.length) {
                                      if (!closure_7) {
                                        if (0 === arg0) {
                                          let stringResult;
                                          if (frecencyItems.length > 0) {
                                            const intl2 = intl3.intl;
                                            stringResult = intl2.string(intl3.t.V0w2ap);
                                          }
                                          const obj = {
                                            variant: "text-sm/semibold",
                                            color: "text-default",
                                            style: sectionHeader.sectionHeader,
                                            children: stringResult,
                                          };
                                          return authStore(Text_Text.Text, obj);
                                        }
                                        const intl = intl3.intl;
                                        stringResult = intl.string(intl3.t.PHjkRE);
                                      }
                                    }
                                  }
                                  return null;
                                }
                              }
                              cResult[56] = commands.length;
                              cResult[57] = frecencyItems.length;
                              cResult[58] = loading;
                              cResult[59] = "" !== first1;
                              cResult[60] = tmp56.sectionHeader;
                              cResult[61] = Re;
                            }
                            const _Symbol4 = Symbol;
                            if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                              class Se {
                                constructor(command) {
                                  return { type: "command", command };
                                }
                              }
                              tmp40[0] = [];
                              tmp40[1] = [];
                              cResult[33] = tmp40;
                            } else {
                              class Se {
                                constructor(command) {
                                  return { type: "command", command };
                                }
                              }
                            }
                            tmp38 = tmp40;
                          }
                        }
                        const fn2 = function $(section) {
                          let closure_0 = section;
                          const found = prop1.find((section) => section.section.id === id.id);
                          let data;
                          if (found != null) {
                            data = found.data;
                          }
                          if (data == null) {
                            data = [];
                          }
                          const obj = { section, commands: data, onPressCommand };
                          navigation.navigate("app", obj);
                        };
                        cResult[29] = prop1;
                        cResult[30] = tmp27;
                        cResult[31] = navigation;
                        cResult[32] = fn2;
                        tmp28 = fn2;
                      }
                    }
                  }
                }
                class W {
                  constructor(command) {
                    let obj2;
                    if (onPressAppCommand != null) {
                      tmp();
                    }
                    closure_6.current = true;
                    const obj = { command, optionValues: {}, context: obj2, commandTargetId };
                    obj2 = { channel, guild: stateFromStores };
                    executeCommandDefault(obj);
                    let parent = navigation.getParent();
                    if (parent == null) {
                      parent = navigation;
                    }
                    parent.goBack();
                  }
                }
                cResult[23] = channel;
                cResult[24] = commandTargetId;
                cResult[25] = stateFromStores;
                cResult[26] = navigation;
                cResult[27] = onPressAppCommand;
                cResult[28] = W;
                tmp27 = W;
              }
            }
            const obj7 = { context: tmp14, filters: tmp17, options: tmp20, allowFetch: true };
            cResult[17] = tmp17;
            cResult[18] = tmp20;
            cResult[19] = tmp14;
            cResult[20] = obj7;
            tmp22 = obj7;
          }
          const obj9 = { limit: commands, includeFrecency: "" === first1, scoreMethod: prop };
          cResult[14] = "" === first1;
          cResult[15] = prop;
          tmp20 = obj9;
        }
        const obj10 = { text: tmp15, commandTypes: tmp16 };
        cResult[11] = tmp15;
        cResult[12] = tmp16;
        tmp17 = obj10;
      }
      class H {
        constructor() {
          let ref;
          return navigation.addListener("beforeRemove", () => {
            if (!ref.current) {
              if (onClose != null) {
                tmp();
              }
            }
          });
        }
      }
      const items7 = [navigation, onClose];
      cResult[3] = navigation;
      cResult[4] = onClose;
      cResult[5] = H;
      cResult[6] = items7;
      tmp12 = items7;
      tmp11 = H;
    }
  : (navigation) => {
      let SearchField;
      let intl;
      let items13;
      let items2;
      let obj4;
      let obj5;
      let obj8;
      let prop;
      let variant;
      navigation = navigation.navigation;
      const params = navigation.route.params;
      const channel = params.channel;
      const commandTargetId = params.commandTargetId;
      const onPressAppCommand = params.onPressAppCommand;
      const onClose = params.onClose;
      let closure_7;
      let commands;
      let commandsByActiveSection;
      let sectionDescriptors;
      let loading;
      let sections;
      let onPressCommand;
      let callback1;
      let frecencyItems;
      let appItems;
      let memo1;
      let closure_18;
      let c19;
      let scaledTextLineHeight;
      const tmp = navigation;
      const commandType = params.commandType;
      let obj = navigation(onPressAppCommand[10]);
      let items = [closure_7];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
      let obj2 = stateFromStores;
      let closure_6 = stateFromStores.useRef(false);
      const tmp4 = onClose(stateFromStores.useState(""), 2);
      const first = tmp4[0];
      closure_7 = tmp7;
      let items1 = [navigation, onClose];
      const tmp6 = tmp4[1];
      const effect = stateFromStores.useEffect(() => {
        let ref;
        return navigation.addListener("beforeRemove", () => {
          if (!ref.current) {
            if (onClose != null) {
              tmp();
            }
          }
        });
      }, items1);
      let obj3 = { context: { channel, type: "channel" }, filters: obj4, options: obj5, allowFetch: true };
      let tmp10;
      const useDiscovery = commandTargetId(onPressAppCommand[12]).useDiscovery;
      commandTargetId(onPressAppCommand[12]);
      if ("" !== first) {
        tmp10 = first;
      }
      obj4 = { text: tmp10, commandTypes: items2 };
      items2 = [commandType];
      obj5 = { limit: commands, includeFrecency: "" === first, scoreMethod: prop };
      prop = undefined;
      if ("" !== first) {
        prop = tmp(tmp2[11]).ScoreMethod.COMMAND_OR_APPLICATION;
      }
      const discovery = useDiscovery(obj3);
      commands = discovery.commands;
      commandsByActiveSection = discovery.commandsByActiveSection;
      sectionDescriptors = discovery.sectionDescriptors;
      loading = discovery.loading;
      let items3 = [sectionDescriptors];
      sections = obj2.useMemo(() => {
        sections = {};
        const item = sectionDescriptors.forEach((id) => {
          sections[id.id] = id;
        });
        return { sections };
      }, items3).sections;
      let items4 = [channel, commandTargetId, stateFromStores, navigation, onPressAppCommand];
      onPressCommand = obj2.useCallback((command) => {
        let obj2;
        if (onPressAppCommand != null) {
          tmp();
        }
        closure_6.current = true;
        const obj = { command, optionValues: {}, context: obj2, commandTargetId };
        obj2 = { channel, guild: stateFromStores };
        executeCommandDefault(obj);
        let parent = navigation.getParent();
        if (parent == null) {
          parent = navigation;
        }
        parent.goBack();
      }, items4);
      let items5 = [commandsByActiveSection, navigation, onPressCommand];
      callback1 = obj2.useCallback((section) => {
        let closure_0 = section;
        const found = commandsByActiveSection.find((section) => section.section.id === id.id);
        let data;
        if (found != null) {
          data = found.data;
        }
        if (data == null) {
          data = [];
        }
        const obj = { section, commands: data, onPressCommand };
        navigation.navigate("app", obj);
      }, items5);
      const items6 = [loading, commands.length, commandsByActiveSection];
      const memo = obj2.useMemo(() => {
        if (!loading) {
          if (0 !== commands.length) {
            const found = commandsByActiveSection.find((section) => section.section.id === constants.FRECENCY);
            const found1 = commandsByActiveSection.filter((section) => section.section.id !== constants.FRECENCY);
            let mapped;
            if (found != null) {
              const data = found.data;
              mapped = data.map((command) => ({ type: "command", command }));
            }
            if (mapped == null) {
              mapped = [];
            }
            const obj = {
              frecencyItems: mapped,
              appItems: found1.map((section) => ({ type: "app", section: section.section })),
            };
            return obj;
          }
        }
        return { frecencyItems: [], appItems: [] };
      }, items6);
      frecencyItems = memo.frecencyItems;
      appItems = memo.appItems;
      const items7 = [loading, commands, "" !== first, frecencyItems, appItems];
      memo1 = obj2.useMemo(() => {
        if (loading) {
          const items = [{ type: "placeholder" }];
          const items1 = [items];
          return items1;
        } else if (0 === commands.length) {
          const items2 = [{ type: "no_commands" }];
          const items3 = [items2];
          return items3;
        } else if (closure_7) {
          const items4 = [commands.map((command) => ({ type: "command", command }))];
          return items4;
        } else {
          const items5 = [];
          if (frecencyItems.length > 0) {
            items5.push(tmp3);
          }
          if (appItems.length > 0) {
            items5.push(tmp5);
          }
          return items5;
        }
      }, items7);
      const insets = channel(tmp2[14])({ includeKeyboardHeight: true }).insets;
      const items8 = [memo1];
      const tmp18 = channel(onPressAppCommand[15])();
      const memo2 = obj2.useMemo(() => memo1.map((item) => item.length), items8);
      const tmp20 = onPressCommand();
      closure_18 = tmp20;
      c19 = "text-sm/semibold";
      const tmpResult = tmp(onPressAppCommand[16]);
      scaledTextLineHeight = tmpResult.useScaledTextLineHeight("text-sm/semibold");
      const items9 = [loading, commands.length, "" !== first, frecencyItems.length, tmp20.sectionHeader];
      const items10 = [memo1, onPressCommand, callback1, sections];
      const callback2 = obj2.useCallback((arg0) => {
        if (!loading) {
          if (0 !== commands.length) {
            if (!closure_7) {
              if (0 === arg0) {
                let stringResult;
                if (frecencyItems.length > 0) {
                  const intl2 = intl3.intl;
                  stringResult = intl2.string(intl3.t.V0w2ap);
                }
                const obj = { variant, color: "text-default", style: closure_18.sectionHeader, children: stringResult };
                return authStore(Text_Text.Text, obj);
              }
              const intl = intl3.intl;
              stringResult = intl.string(intl3.t.PHjkRE);
            }
          }
        }
        return null;
      }, items9);
      const items11 = [
        loading,
        commands.length,
        "" !== first,
        scaledTextLineHeight,
        tmp20.sectionHeader.paddingTop,
        tmp20.sectionHeader.paddingBottom,
      ];
      const callback3 = obj2.useCallback((arg0, arg1) => {
        let closure_0 = tmp;
        const type = tmp.type;
        if ("placeholder" === type) {
          const obj2 = { start: 0 === arg1, end: arg1 === memo1[arg0].length - 1 };
          return sectionDescriptors(
            navigation(onPressAppCommand[19]).ContextMenuCommandLoadingItem,
            obj2,
            "placeholder",
          );
        } else if ("no_commands" === type) {
          const obj3 = { start: 0 === arg1, end: arg1 === memo1[arg0].length - 1 };
          return sectionDescriptors(navigation(onPressAppCommand[19]).ContextMenuCommandEmptyItem, obj3, "no_commands");
        } else if ("command" === type) {
          const obj4 = {
            item: memo1[arg0][arg1].command,
            onPress() {
              return callback(closure_0.command);
            },
            section: sections[memo1[arg0][arg1].command.applicationId],
            start: 0 === arg1,
            end: arg1 === memo1[arg0].length - 1,
          };
          return sectionDescriptors(channel(onPressAppCommand[19]), obj4, memo1[arg0][arg1].command.id);
        } else if ("app" === type) {
          const obj = {
            section: memo1[arg0][arg1].section,
            onPress() {
              return callback1(closure_0.section);
            },
            start: 0 === arg1,
            end: arg1 === memo1[arg0].length - 1,
          };
          return sectionDescriptors(
            navigation(onPressAppCommand[19]).ContextMenuCommandAppItem,
            obj,
            memo1[arg0][arg1].section.id,
          );
        }
      }, items10);
      let tmp29Result = tmp7;
      const memo3 = obj2.useMemo(() => {
        let num = 0;
        if (!loading) {
          num = 0;
          if (0 !== commands.length) {
            num = 0;
            if (!closure_7) {
              num = scaledTextLineHeight + closure_18.sectionHeader.paddingTop + closure_18.sectionHeader.paddingBottom;
            }
          }
        }
        return num;
      }, items11);
      const tmp25 = sections;
      const tmp26 = loading;
      if ("" === first) {
        let tmp28 = !loading;
        if (tmp28) {
          let num = 0;
          tmp28 = commands.length > 0;
        }
        tmp29Result = tmp28;
      }
      if (tmp29Result) {
        const items12 = [tmp20.content];
        let num2 = 0;
        const tmp30 = closure_6;
        if ("" !== first) {
          num2 = tmp17(tmp2[7]).space.PX_16;
        }
        const obj7 = { marginBottom: num2 };
        items12[1] = obj7;
        const obj6 = { style: items12, children: sectionDescriptors(SearchField, obj8) };
        obj8 = { size: "md", onChange: tmp6, placeholder: intl.string(tmp(onPressAppCommand[17]).t.m1UwbP) };
        SearchField = tmp(tmp2[20]).SearchField;
        intl = tmp(tmp2[17]).intl;
        tmp29Result = tmp29(tmp30, obj6);
      }
      const obj9 = { children: items13 };
      items13 = [tmp29Result];
      const obj10 = {
        sections: memo2,
        estimatedListSize: "windowSize",
        itemSize: tmp18,
        insetEnd: insets.bottom,
        renderItem: callback3,
        renderSectionHeader: callback2,
        sectionHeaderSize: memo3,
        style: tmp20.content,
      };
      items13[1] = sectionDescriptors(channel(onPressAppCommand[21]), obj10);
      return tmp25(tmp26, obj9);
    };
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandRootScreen.tsx");

export default tmp5;
