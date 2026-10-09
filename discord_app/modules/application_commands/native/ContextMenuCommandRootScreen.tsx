// discord_app/modules/application_commands/native/ContextMenuCommandRootScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import executeCommandDefault from "../executeCommand.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
const View = fn(17).View;
const ApplicationCommandConstants = fn(5400);
({ CONTEXT_MENU_COMMANDS_QUERY_LIMIT: closure_8, BuiltInSectionId: closure_9 } = ApplicationCommandConstants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, sectionHeader: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.sectionHeader = {
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandRootScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ContextMenuCommandRootScreen(navigation) {
      const cResult = navigation(onPressAppCommand[9]).c(83);
      navigation = navigation.navigation;
      const params = navigation.route.params;
      const channel = params.channel;
      ({ commandType, commandTargetId } = params);
      onPressAppCommand = params.onPressAppCommand;
      const onClose = params.onClose;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_7];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function y() {
          return GuildStore.getGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = navigation(onPressAppCommand[9]);
      const stateFromStores = navigation(onPressAppCommand[10]).useStateFromStores(first, tmp6);
      closure_6 = stateFromStores.useRef(false);
      let obj3 = stateFromStores;
      const tmpResult = navigation(onPressAppCommand[10]);
      const first1 = onClose(stateFromStores.useState(""), 2)[0];
      closure_7 = tmp10;
      if (cResult[3] === navigation) {
        if (cResult[4] === onClose) {
          let tmp11 = cResult[5];
          let tmp12 = cResult[6];
        }
        const effect = obj3.useEffect(tmp11, tmp12);
        if (cResult[7] !== channel) {
          let obj2 = { channel, type: "channel" };
          cResult[7] = channel;
          cResult[8] = obj2;
          let tmp14 = obj2;
        } else {
          tmp14 = cResult[8];
        }
        let tmp15;
        if (tmp10) {
          tmp15 = first1;
        }
        if (cResult[9] !== commandType) {
          const items1 = [commandType];
          cResult[9] = commandType;
          cResult[10] = items1;
          let tmp16 = items1;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] === tmp15) {
          let prop;
          if (tmp10) {
            prop = tmp(tmp2[11]).ScoreMethod.COMMAND_OR_APPLICATION;
          }
          if (cResult[14] === !tmp10) {
            if (cResult[17] === tmp17) {
              if (cResult[18] === tmp20) {
                if (cResult[19] === tmp14) {
                  let tmp22 = cResult[20];
                }
                const discovery = commandTargetId(tmp2[12]).useDiscovery(tmp22);
                const commands = discovery.commands;
                const prop1 = discovery.commandsByActiveSection;
                ({ sectionDescriptors, loading } = discovery);
                if (cResult[21] !== sectionDescriptors) {
                  const item = sectionDescriptors.forEach((id) => {
                    obj4[id.id] = id;
                  });
                  const obj5 = { sections: {} };
                  cResult[21] = sectionDescriptors;
                  cResult[22] = obj5;
                  let tmp25 = obj5;
                  let obj4 = {};
                } else {
                  tmp25 = cResult[22];
                }
                const sections = tmp25.sections;
                if (cResult[23] === channel) {
                  if (cResult[24] === commandTargetId) {
                    if (cResult[25] === stateFromStores) {
                      if (cResult[26] === navigation) {
                        if (cResult[27] === onPressAppCommand) {
                          let tmp27 = cResult[28];
                        }
                        const onPressCommand = tmp27;
                        if (cResult[29] === prop1) {
                          if (cResult[30] === tmp27) {
                            if (cResult[31] === navigation) {
                              let tmp28 = cResult[32];
                            }
                            closure_14 = tmp28;
                            if (!loading) {
                              if (0 !== commands.length) {
                                if (cResult[34] !== prop1) {
                                  const _Symbol = Symbol;
                                  if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                                    function re(section) {
                                      return section.section.id === prop1.FRECENCY;
                                    }
                                    cResult[37] = re;
                                    let tmp31 = re;
                                  } else {
                                    tmp31 = cResult[37];
                                  }
                                  let found = prop1.find(tmp31);
                                  const _Symbol2 = Symbol;
                                  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                                    function ie(section) {
                                      return section.section.id !== prop1.FRECENCY;
                                    }
                                    cResult[38] = ie;
                                    let tmp33 = ie;
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
                                    constructor(arg0) {
                                      if (onPressAppCommand != null) {
                                        tmpResult = tmp();
                                      }
                                      closure_6.current = true;
                                      obj = { command: navigation, optionValues: {}, context: null, commandTargetId };
                                      obj1 = { channel, guild: closure_5 };
                                      obj.context = obj1;
                                      tmp3 = closure_1(closure_3[13])(obj);
                                      tmp4 = navigation;
                                      parent = navigation.getParent();
                                      if (parent == null) {
                                        parent = tmp4;
                                      }
                                      goBackResult = parent.goBack();
                                      return;
                                    }
                                  }
                                  cResult[34] = prop1;
                                  cResult[35] = mapped;
                                  cResult[36] = tmp37;
                                } else {
                                  if (cResult[40] === cResult[36]) {
                                    if (cResult[41] === tmp29) {
                                      let tmp40 = cResult[42];
                                    }
                                    const frecencyItems = tmp40.frecencyItems;
                                    const appItems = tmp40.appItems;
                                    if (loading) {
                                      const _Symbol7 = Symbol;
                                      if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                                        const items2 = [{ type: "placeholder" }];
                                        const items3 = [items2];
                                        cResult[43] = items3;
                                      }
                                    } else {
                                      if (0 === commands.length) {
                                        const _Symbol6 = Symbol;
                                        if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                          const items4 = [{ type: "no_commands" }];
                                          const items5 = [items4];
                                          cResult[44] = items5;
                                          let tmp51 = items5;
                                        } else {
                                          tmp51 = cResult[44];
                                        }
                                        let tmp44 = tmp51;
                                      } else if (tmp10) {
                                        if (cResult[45] !== commands) {
                                          const _Symbol5 = Symbol;
                                          if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                            class Se {
                                              constructor(arg0) {
                                                obj = { type: "command", command: navigation };
                                                return obj;
                                              }
                                            }
                                            cResult[47] = Se;
                                          } else {
                                            class Se {
                                              constructor(arg0) {
                                                obj = { type: "command", command: navigation };
                                                return obj;
                                              }
                                            }
                                          }
                                          const mapped1 = commands.map(Se);
                                          cResult[45] = commands;
                                          cResult[46] = mapped1;
                                        } else {
                                          class Se {
                                            constructor(arg0) {
                                              obj = { type: "command", command: navigation };
                                              return obj;
                                            }
                                          }
                                          if (cResult[48] !== tmp45) {
                                            class Se {
                                              constructor(arg0) {
                                                obj = { type: "command", command: navigation };
                                                return obj;
                                              }
                                            }
                                            tmp50[0] = tmp45;
                                            cResult[48] = tmp45;
                                            cResult[49] = tmp50;
                                          } else {
                                            class Se {
                                              constructor(arg0) {
                                                obj = { type: "command", command: navigation };
                                                return obj;
                                              }
                                            }
                                          }
                                          tmp44 = tmp50;
                                        }
                                      } else {
                                        class Se {
                                          constructor(arg0) {
                                            obj = { type: "command", command: navigation };
                                            return obj;
                                          }
                                        }
                                        let items6 = [];
                                        if (frecencyItems.length > 0) {
                                          class Se {
                                            constructor(arg0) {
                                              obj = { type: "command", command: navigation };
                                              return obj;
                                            }
                                          }
                                        }
                                        if (appItems.length > 0) {
                                          class Se {
                                            constructor(arg0) {
                                              obj = { type: "command", command: navigation };
                                              return obj;
                                            }
                                          }
                                        }
                                        cResult[50] = appItems;
                                        cResult[51] = frecencyItems;
                                        cResult[52] = items6;
                                        tmp44 = items6;
                                      }
                                      items6 = tmp44;
                                      const _Symbol8 = Symbol;
                                      if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                        class Se {
                                          constructor(arg0) {
                                            obj = { type: "command", command: navigation };
                                            return obj;
                                          }
                                        }
                                        cResult[53] = tmp55;
                                      } else {
                                        class Se {
                                          constructor(arg0) {
                                            obj = { type: "command", command: navigation };
                                            return obj;
                                          }
                                        }
                                      }
                                      const insets = channel(tmp2[14])(tmp55).insets;
                                      channel(tmp2[15])();
                                      if (cResult[54] !== tmp44) {
                                        class Se {
                                          constructor(arg0) {
                                            obj = { type: "command", command: navigation };
                                            return obj;
                                          }
                                        }
                                        cResult[54] = tmp44;
                                        cResult[55] = tmp59;
                                      } else {
                                        class Se {
                                          constructor(arg0) {
                                            obj = { type: "command", command: navigation };
                                            return obj;
                                          }
                                        }
                                      }
                                      const tmp61 = onPressCommand();
                                      sectionHeader = tmp61;
                                      tmp(tmp2[16]);
                                      class W {
                                        constructor(arg0) {
                                          if (onPressAppCommand != null) {
                                            tmpResult = tmp();
                                          }
                                          closure_6.current = true;
                                          obj = {
                                            command: navigation,
                                            optionValues: {},
                                            context: null,
                                            commandTargetId,
                                          };
                                          obj1 = { channel, guild: closure_5 };
                                          obj.context = obj1;
                                          tmp3 = closure_1(closure_3[13])(obj);
                                          tmp4 = navigation;
                                          parent = navigation.getParent();
                                          if (parent == null) {
                                            parent = tmp4;
                                          }
                                          goBackResult = parent.goBack();
                                          return;
                                        }
                                      }
                                      class Re {
                                        constructor(arg0) {
                                          if (!loading) {
                                            tmp = commands;
                                            num = 0;
                                            if (0 !== commands.length) {
                                              tmp17 = closure_7;
                                              if (!closure_7) {
                                                tmp2 = navigation;
                                                if (0 === navigation) {
                                                  tmp3 = frecencyItems;
                                                  if (frecencyItems.length > 0) {
                                                    tmp9 = closure_0;
                                                    tmp10 = closure_3;
                                                    intl2 = closure_0(closure_3[17]).intl;
                                                    tmp11 = closure_0;
                                                    tmp12 = closure_3;
                                                    stringResult = intl2.string(closure_0(closure_3[17]).t.V0w2ap);
                                                  }
                                                  tmp13 = jsx;
                                                  tmp14 = closure_0;
                                                  tmp15 = closure_3;
                                                  obj = {
                                                    variant: "text-sm/semibold",
                                                    color: "text-default",
                                                    style: null,
                                                    children: null,
                                                  };
                                                  tmp16 = closure_17;
                                                  obj.style = closure_17.sectionHeader;
                                                  obj.children = stringResult;
                                                  return jsx(closure_0(closure_3[18]).Text, obj);
                                                }
                                                tmp4 = closure_0;
                                                tmp5 = closure_3;
                                                intl = closure_0(closure_3[17]).intl;
                                                tmp6 = closure_0;
                                                tmp7 = closure_3;
                                                stringResult = intl.string(closure_0(closure_3[17]).t.PHjkRE);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                      cResult[56] = commands.length;
                                      cResult[57] = frecencyItems.length;
                                      cResult[58] = loading;
                                      cResult[59] = tmp10;
                                      cResult[60] = tmp61.sectionHeader;
                                      cResult[61] = Re;
                                    }
                                  }
                                  const obj6 = { frecencyItems: cResult[35], appItems: cResult[36] };
                                  cResult[40] = cResult[36];
                                  cResult[41] = cResult[35];
                                  cResult[42] = obj6;
                                  tmp40 = obj6;
                                }
                              }
                            }
                            const _Symbol4 = Symbol;
                            if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                              class Se {
                                constructor(arg0) {
                                  obj = { type: "command", command: navigation };
                                  return obj;
                                }
                              }
                              tmp42[0] = [];
                              tmp42[1] = [];
                              cResult[33] = tmp42;
                            } else {
                              class Se {
                                constructor(arg0) {
                                  obj = { type: "command", command: navigation };
                                  return obj;
                                }
                              }
                            }
                          }
                        }
                        const fn2 = function $(section) {
                          const found = prop1.find((section) => section.section.id === section.id);
                          let data;
                          if (found != null) {
                            data = found.data;
                          }
                          if (data == null) {
                            data = [];
                          }
                          navigation.navigate("app", { section, commands: data, onPressCommand });
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
                  constructor(arg0) {
                    if (onPressAppCommand != null) {
                      tmpResult = tmp();
                    }
                    closure_6.current = true;
                    obj = { command: navigation, optionValues: {}, context: null, commandTargetId };
                    obj1 = { channel, guild: closure_5 };
                    obj.context = obj1;
                    tmp3 = closure_1(closure_3[13])(obj);
                    tmp4 = navigation;
                    parent = navigation.getParent();
                    if (parent == null) {
                      parent = tmp4;
                    }
                    goBackResult = parent.goBack();
                    return;
                  }
                }
                cResult[23] = channel;
                cResult[24] = commandTargetId;
                cResult[25] = stateFromStores;
                cResult[26] = navigation;
                cResult[27] = onPressAppCommand;
                cResult[28] = W;
                tmp27 = W;
                const obj8 = commandTargetId(tmp2[12]);
              }
            }
            const obj7 = { context: tmp14, filters: tmp17, options: tmp20, allowFetch: true };
            cResult[17] = tmp17;
            cResult[18] = tmp20;
            cResult[19] = tmp14;
            cResult[20] = obj7;
            tmp22 = obj7;
          }
          const obj9 = { limit: commands, includeFrecency: !tmp10, scoreMethod: prop };
          cResult[14] = !tmp10;
          cResult[15] = prop;
        }
        const obj10 = { text: tmp15, commandTypes: tmp16 };
        cResult[11] = tmp15;
        cResult[12] = tmp16;
      }
      class H {
        constructor() {
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
      const tmp8 = onClose(stateFromStores.useState(""), 2);
    }
  : function ContextMenuCommandRootScreen(navigation) {
      navigation = navigation.navigation;
      const params = navigation.route.params;
      const channel = params.channel;
      const commandTargetId = params.commandTargetId;
      const onPressAppCommand = params.onPressAppCommand;
      const onClose = params.onClose;
      closure_7 = undefined;
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
      closure_18 = undefined;
      c19 = undefined;
      let scaledTextLineHeight;
      let items = [closure_7];
      const stateFromStores = navigation(onPressAppCommand[10]).useStateFromStores(items, () =>
        GuildStore.getGuild(channel.guild_id),
      );
      closure_6 = stateFromStores.useRef(false);
      const tmp4 = onClose(stateFromStores.useState(""), 2);
      const first = tmp4[0];
      closure_7 = tmp6;
      let items1 = [navigation, onClose];
      const effect = stateFromStores.useEffect(
        () =>
          navigation.addListener("beforeRemove", () => {
            if (!ref.current) {
              if (onClose != null) {
                tmp();
              }
            }
          }),
        items1,
      );
      let obj = navigation(onPressAppCommand[10]);
      let obj4 = { context: { channel, type: "channel" }, filters: null, options: null, allowFetch: true };
      let tmp8;
      if ("" !== first) {
        tmp8 = first;
      }
      const obj5 = { text: tmp8, commandTypes: null };
      let items2 = [params.commandType];
      obj5.commandTypes = items2;
      obj4.filters = obj5;
      const obj6 = { limit: commands, includeFrecency: "" === first, scoreMethod: null };
      let prop;
      if ("" !== first) {
        prop = tmp(tmp2[11]).ScoreMethod.COMMAND_OR_APPLICATION;
      }
      obj6.scoreMethod = prop;
      obj4.options = obj6;
      const discovery = commandTargetId(onPressAppCommand[12]).useDiscovery(obj4);
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
        if (onPressAppCommand != null) {
          tmp();
        }
        closure_6.current = true;
        const obj = { command, optionValues: {}, context: { channel, guild: stateFromStores }, commandTargetId };
        executeCommandDefault(obj);
        let parent = navigation.getParent();
        if (parent == null) {
          parent = navigation;
        }
        parent.goBack();
        const obj2 = { channel, guild: stateFromStores };
      }, items4);
      let items5 = [commandsByActiveSection, navigation, onPressCommand];
      callback1 = obj2.useCallback((section) => {
        const found = commandsByActiveSection.find((section) => section.section.id === section.id);
        let data;
        if (found != null) {
          data = found.data;
        }
        if (data == null) {
          data = [];
        }
        navigation.navigate("app", { section, commands: data, onPressCommand });
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
            items5.push(tmp2);
          }
          if (appItems.length > 0) {
            items5.push(tmp4);
          }
          return items5;
        }
      }, items7);
      const items8 = [memo1];
      let obj3 = commandTargetId(onPressAppCommand[12]);
      const memo2 = obj2.useMemo(() => memo1.map((item) => item.length), items8);
      const tmp18 = onPressCommand();
      closure_18 = tmp18;
      c19 = "text-sm/semibold";
      const tmp16 = channel(onPressAppCommand[15])();
      scaledTextLineHeight = navigation(onPressAppCommand[16]).useScaledTextLineHeight("text-sm/semibold");
      const items9 = [loading, commands.length, "" !== first, frecencyItems.length, tmp18.sectionHeader];
      const items10 = [memo1, onPressCommand, callback1, sections];
      const callback2 = obj2.useCallback((arg0) => {
        if (!loading) {
          if (0 !== commands.length) {
            if (!closure_7) {
              if (0 === arg0) {
                if (frecencyItems.length > 0) {
                  const intl2 = util.intl;
                  let stringResult = intl2.string(util.t.V0w2ap);
                }
                const obj = { variant, color: "text-default", style: closure_18.sectionHeader, children: stringResult };
                return collapsed(Text_Text.Text, obj);
              }
              const intl = util.intl;
              stringResult = intl.string(util.t.PHjkRE);
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
        tmp18.sectionHeader.paddingTop,
        tmp18.sectionHeader.paddingBottom,
      ];
      const callback3 = obj2.useCallback((arg0, arg1) => {
        closure_0 = tmp;
        const type = tmp.type;
        if ("placeholder" === type) {
          const obj2 = { start: tmp2, end: tmp3 };
          return sectionDescriptors(
            navigation(onPressAppCommand[19]).ContextMenuCommandLoadingItem,
            obj2,
            "placeholder",
          );
        } else if ("no_commands" === type) {
          const obj3 = { start: tmp2, end: tmp3 };
          return sectionDescriptors(navigation(onPressAppCommand[19]).ContextMenuCommandEmptyItem, obj3, "no_commands");
        } else if ("command" === type) {
          const obj4 = {
            item: tmp.command,
            onPress() {
              return callback(closure_0.command);
            },
            section: sections[tmp.command.applicationId],
            start: tmp2,
            end: tmp3,
          };
          return sectionDescriptors(channel(onPressAppCommand[19]), obj4, tmp.command.id);
        } else if ("app" === type) {
          const obj = {
            section: tmp.section,
            onPress() {
              return callback1(closure_0.section);
            },
            start: tmp2,
            end: tmp3,
          };
          return sectionDescriptors(navigation(onPressAppCommand[19]).ContextMenuCommandAppItem, obj, tmp.section.id);
        }
      }, items10);
      let tmp27Result = tmp6;
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
      if ("" === first) {
        let tmp26 = !loading;
        if (!loading) {
          tmp26 = commands.length > 0;
        }
        tmp27Result = tmp26;
      }
      if (tmp27Result) {
        const items12 = [tmp18.content];
        let num2 = 0;
        if (tmp6) {
          num2 = tmp15(tmp2[7]).space.PX_16;
        }
        const obj7 = { style: null, children: null };
        const obj8 = { marginBottom: num2 };
        items12[1] = obj8;
        obj7.style = items12;
        const obj9 = { size: "md", onChange: tmp4[1], placeholder: null };
        let intl = tmp(tmp2[17]).intl;
        obj9.placeholder = intl.string(tmp(tmp2[17]).t.m1UwbP);
        obj7.children = sectionDescriptors(tmp(tmp2[20]).SearchField, obj9);
        tmp27Result = tmp27(closure_6, obj7);
      }
      const obj10 = { children: null };
      const items13 = [tmp27Result];
      const tmp23 = sections;
      const tmp24 = loading;
      const tmpResult = navigation(onPressAppCommand[16]);
      items13[1] = sectionDescriptors(channel(onPressAppCommand[21]), {
        sections: memo2,
        estimatedListSize: "windowSize",
        itemSize: tmp16,
        insetEnd: channel(onPressAppCommand[14])({ includeKeyboardHeight: true }).insets.bottom,
        renderItem: callback3,
        renderSectionHeader: callback2,
        sectionHeaderSize: memo3,
        style: tmp18.content,
      });
      obj10.children = items13;
      return tmp23(tmp24, obj10);
    };
