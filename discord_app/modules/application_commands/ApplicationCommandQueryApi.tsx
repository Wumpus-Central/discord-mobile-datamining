// discord_app/modules/application_commands/ApplicationCommandQueryApi.tsx
import react2 from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import Server from "../../flow/Server.tsx";
import ApplicationCommandConstants from "ApplicationCommandConstants.tsx";
import ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import ApplicationCommandTypes from "ApplicationCommandTypes.tsx";
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes.tsx";
import ApplicationCommandBuiltIns from "ApplicationCommandBuiltIns.tsx";
import CommandPermissionUtils from "CommandPermissionUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import GuildStore from "../../stores/GuildStore.tsx";
import ApplicationCommandIndexStore_mod from "ApplicationCommandIndexStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const CommandPermissionUtilsAll = CommandPermissionUtils;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function findCommandInSection(found, commandId) {
  let str;
  let closure_0 = commandId;
  if (null != commandId) {
    if (null != found.commands[commandId]) {
      return found.commands[commandId];
    } else {
      const _Object = Object;
      const values = Object.values(found.commands);
      found = values.find((rootCommand) => {
        rootCommand = rootCommand.rootCommand;
        let id;
        if (rootCommand != null) {
          id = rootCommand.id;
        }
        return id === closure_0;
      });
      let rootCommand;
      if (found != null) {
        rootCommand = found.rootCommand;
      }
      let command;
      if (null != rootCommand) {
        const application = found.descriptor.application;
        const obj = { rootCommand, command: rootCommand, applicationId: str };
        str = undefined;
        const buildCommand = ApplicationCommandUtils.buildCommand;
        ApplicationCommandUtils;
        if (application != null) {
          str = application.id;
        }
        if (str == null) {
          str = "";
        }
        command = buildCommand(obj);
      }
      return command;
    }
  }
}
let ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
({
  useContextIndexState: metroRequire,
  useDiscoveryState: metroImportDefault,
  useQueryState: metroImportAll,
  useUserIndexState: c9,
} = ApplicationCommandIndexStore);
ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const NOOP = Constants.NOOP;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (View, arg1, text) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(9);
      if (cResult[0] !== arg1) {
        items = [arg1];
        cResult[0] = arg1;
        cResult[1] = items;
        tmp4 = items;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp4) {
        let tmp5;
        let tmp7;
        if (cResult[3] === text) {
          tmp5 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION,
            allowFetch: false,
          };
          cResult[5] = obj2;
          tmp7 = obj2;
        } else {
          tmp7 = cResult[5];
        }
        const tmp10 = metroImportAll(View, tmp5, tmp7);
        if (cResult[6] === tmp10.commands) {
          let tmp11;
          if (cResult[7] === tmp10.descriptors) {
            tmp11 = cResult[8];
          }
          return tmp11;
        }
        const obj3 = { commands: null, sections: null };
        ({ commands: obj4.commands, descriptors: obj4.sections } = tmp10);
        cResult[6] = tmp10.commands;
        cResult[7] = tmp10.descriptors;
        cResult[8] = obj3;
        tmp11 = obj3;
      }
      const obj7 = { commandTypes: tmp4, text };
      cResult[2] = tmp4;
      cResult[3] = text;
      cResult[4] = obj7;
      tmp5 = obj7;
    }
  : (View, arg1, text) => {
      let closure_0 = arg1;
      items = [arg1];
      const obj = {
        commandTypes: react.useMemo(() => {
          items = [closure_0];
          return items;
        }, items),
        text,
      };
      const obj2 = { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
      const tmp = metroImportAll(View, obj, obj2);
      return { commands: tmp.commands, sections: tmp.descriptors };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let allowFetch;
      let closure_2;
      let commands;
      let context;
      let descriptors;
      let filters;
      let first;
      let first1;
      let guild_id;
      let loading;
      let options;
      let sectionedCommands;
      let tmp43;
      let tmp7;
      let tmp8;
      const obj = guild_id(576);
      const cResult = obj.c(46);
      ({ context, filters, options, allowFetch } = arg0);
      guild_id = null;
      if ("channel" === context.type) {
        guild_id = context.channel.guild_id;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild_id) {
        const fn = function l() {
          return GuildStore.getGuild(guild_id);
        };
        const items1 = [guild_id];
        cResult[1] = guild_id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = guild_id(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === allowFetch) {
        let tmp10;
        if (cResult[5] === options) {
          tmp10 = cResult[6];
        }
        ({ descriptors, commands, sectionedCommands, loading } = closure_7(context, stateFromStores, filters, tmp10));
        closure_7(context, stateFromStores, filters, tmp10);
        [first1, dependencyMap] = react.useState(null);
        let num6 = options.placeholderCount;
        if (num6 == null) {
          num6 = 0;
        }
        if (cResult[7] === filters.commandTypes[0]) {
          let tmp22;
          if (cResult[8] === num6) {
            tmp22 = cResult[9];
          }
          if (cResult[10] === loading) {
            let tmp23;
            let tmp25;
            if (cResult[11] === tmp22) {
              tmp23 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const fn2 = function x(arg0) {
                closure_2(arg0);
              };
              cResult[13] = fn2;
              tmp25 = fn2;
            } else {
              tmp25 = cResult[13];
            }
            if (cResult[14] === commands) {
              if (cResult[15] === descriptors) {
                if (cResult[16] === first1) {
                  if (cResult[17] === loading) {
                    if (cResult[18] === tmp22) {
                      if (cResult[19] === sectionedCommands) {
                        let tmp26;
                        if (cResult[20] === tmp23) {
                          tmp26 = cResult[21];
                        }
                        return tmp26;
                      }
                    }
                  }
                }
              }
            }
            const obj2 = {
              loading,
              commands,
              activeSections: descriptors,
              commandsByActiveSection: sectionedCommands,
              filteredSectionId: first1,
              hasMoreAfter: false,
              placeholders: tmp23,
              sectionDescriptors: descriptors,
              filterSection: tmp25,
              scrollDown: NOOP,
            };
            if (null != first1) {
              if (cResult[22] === first1) {
                let tmp28;
                let tmp31;
                let tmp32;
                if (cResult[23] === sectionedCommands) {
                  tmp28 = cResult[24];
                }
                if (cResult[27] !== tmp28) {
                  let items3;
                  if (null != tmp28) {
                    const items2 = [tmp28.section];
                    items3 = items2;
                  } else {
                    items3 = [];
                  }
                  cResult[27] = tmp28;
                  cResult[28] = items3;
                  tmp31 = items3;
                } else {
                  tmp31 = cResult[28];
                }
                obj2.activeSections = tmp31;
                if (cResult[29] !== tmp28) {
                  let items5;
                  if (null != tmp28) {
                    const items4 = [tmp28];
                    items5 = items4;
                  } else {
                    items5 = [];
                  }
                  cResult[29] = tmp28;
                  cResult[30] = items5;
                  tmp32 = items5;
                } else {
                  tmp32 = cResult[30];
                }
                obj2.commandsByActiveSection = tmp32;
              }
              if (cResult[25] !== first1) {
                class G {
                  constructor(section) {
                    return section.section.id === first1;
                  }
                }
                cResult[25] = first1;
                cResult[26] = G;
              } else {
                class G {
                  constructor(section) {
                    return section.section.id === first1;
                  }
                }
              }
              const found = sectionedCommands.find(G);
              cResult[22] = first1;
              cResult[23] = sectionedCommands;
              cResult[24] = found;
              tmp28 = found;
            }
            if (loading) {
              class G {
                constructor(section) {
                  return section.section.id === first1;
                }
              }
              if (null != tmp33) {
                class G {
                  constructor(section) {
                    return section.section.id === first1;
                  }
                }
                const items6 = [];
                HermesBuiltin.arraySpread(items6, tmp22, HermesBuiltin.arraySpread(items6, tmp33.data, 0));
                cResult[31] = tmp33.data;
                cResult[32] = tmp22;
                cResult[33] = items6;
              } else {
                let tmp36;
                class G {
                  constructor(section) {
                    return section.section.id === first1;
                  }
                }
                const tmp49 = guild_id(8835).BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN];
                const _Symbol2 = Symbol;
                if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                  class G {
                    constructor(section) {
                      return section.section.id === first1;
                    }
                  }
                  tmp35[0] = tmp49;
                  cResult[40] = tmp35;
                } else {
                  class G {
                    constructor(section) {
                      return section.section.id === first1;
                    }
                  }
                }
                obj2.activeSections = tmp35;
                if (cResult[41] !== tmp22) {
                  class G {
                    constructor(section) {
                      return section.section.id === first1;
                    }
                  }
                  tmp37[0] = tmp49;
                  tmp37[1] = tmp22;
                  const items7 = [tmp37];
                  cResult[41] = tmp22;
                  cResult[42] = items7;
                  tmp36 = items7;
                } else {
                  class G {
                    constructor(section) {
                      return section.section.id === first1;
                    }
                  }
                }
                obj2.commandsByActiveSection = tmp36;
              }
              if (cResult[43] === commands) {
                class G {
                  constructor(section) {
                    return section.section.id === first1;
                  }
                }
                obj2.commands = tmp43;
              }
              const items8 = [];
              HermesBuiltin.arraySpread(items8, tmp22, HermesBuiltin.arraySpread(items8, commands, 0));
              cResult[43] = commands;
              cResult[44] = tmp22;
              cResult[45] = items8;
              tmp43 = items8;
            }
            cResult[14] = commands;
            cResult[15] = descriptors;
            cResult[16] = first1;
            cResult[17] = loading;
            cResult[18] = tmp22;
            cResult[19] = sectionedCommands;
            cResult[20] = tmp23;
            cResult[21] = obj2;
            tmp26 = obj2;
          }
          if (!loading) {
            class G {
              constructor(section) {
                return section.section.id === first1;
              }
            }
          }
          cResult[10] = loading;
          cResult[11] = tmp22;
          cResult[12] = tmp22;
          tmp23 = tmp24;
        }
        const items9 = [];
        if (0 < num6) {
          class G {
            constructor(section) {
              return section.section.id === first1;
            }
          }
        }
        cResult[7] = filters.commandTypes[0];
        cResult[8] = num6;
        cResult[9] = items9;
        tmp22 = items9;
      }
      const obj3 = { allowFetch };
      const merged = Object.assign(options);
      cResult[4] = allowFetch;
      cResult[5] = options;
      cResult[6] = obj3;
      tmp10 = obj3;
    }
  : (options) => {
      let context;
      let filters;
      ({ context, filters } = options);
      options = options.options;
      let descriptors;
      let commands;
      let sectionedCommands;
      let loading;
      let filteredSectionId;
      let closure_8;
      let memo;
      let guild_id = null;
      const allowFetch = options.allowFetch;
      if ("channel" === context.type) {
        guild_id = context.channel.guild_id;
      }
      let obj = filters(guild_id[10]);
      items = [sectionedCommands];
      let items1 = [guild_id];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
      let obj2 = { allowFetch };
      const merged = Object.assign(options);
      let tmp4 = filteredSectionId(context, stateFromStores, filters, obj2);
      descriptors = tmp4.descriptors;
      commands = tmp4.commands;
      sectionedCommands = tmp4.sectionedCommands;
      loading = tmp4.loading;
      const tmp5 = descriptors(commands.useState(null), 2);
      filteredSectionId = tmp5[0];
      closure_8 = tmp5[1];
      let items2 = [filters.commandTypes, options.placeholderCount];
      memo = commands.useMemo(() => {
        let num2;
        let num = options.placeholderCount;
        if (num == null) {
          num = 0;
        }
        items = [];
        for (let num2 = 0; num2 < num; num2 = num2 + 1) {
          section = {
            type: tmp,
            inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER,
            id: "placeholder-" + num2,
            untranslatedName: "",
            displayName: "",
            untranslatedDescription: "",
            displayDescription: "",
            applicationId: "",
            section,
          };
          let push = items.push;
          let _HermesInternal = HermesInternal;
          let arr = push(section);
        }
        return items;
      }, items2);
      let items3 = [loading, commands, descriptors, sectionedCommands, filteredSectionId, memo];
      return commands.useMemo(() => {
        let items4;
        const obj = {
          loading,
          commands,
          activeSections: descriptors,
          commandsByActiveSection: sectionedCommands,
          filteredSectionId,
          hasMoreAfter: false,
          placeholders: loading ? memo : [],
          sectionDescriptors: descriptors,
          filterSection(id) {
            closure_1_8(id);
          },
          scrollDown: NOOP,
        };
        if (null != filteredSectionId) {
          let items1;
          let items3;
          const found = sectionedCommands.find((section) => section.section.id === filteredSectionId);
          if (null != found) {
            items = [found.section];
            items1 = items;
          } else {
            items1 = [];
          }
          obj.activeSections = items1;
          if (null != found) {
            const items2 = [found];
            items3 = items2;
          } else {
            items3 = [];
          }
          obj.commandsByActiveSection = items3;
        }
        if (loading) {
          let tmp10;
          filteredSectionId = sectionedCommands[0];
          if (null != filteredSectionId) {
            const obj2 = { section: filteredSectionId.section, data: items4 };
            items4 = [];
            HermesBuiltin.arraySpread(items4, memo, HermesBuiltin.arraySpread(items4, filteredSectionId.data, 0));
            const items5 = [obj2];
            HermesBuiltin.arraySpread(items5, sectionedCommands.slice(1), 1);
            obj.commandsByActiveSection = items5;
            tmp10 = memo;
          } else {
            const tmp9 = ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN];
            const items6 = [tmp9];
            obj.activeSections = items6;
            tmp10 = memo;
            const items7 = [{ section: tmp9, data: memo }];
            const obj3 = { section: tmp9, data: memo };
            obj.commandsByActiveSection = items7;
          }
          const items8 = [];
          HermesBuiltin.arraySpread(items8, tmp10, HermesBuiltin.arraySpread(items8, commands, 0));
          obj.commands = items8;
        }
        return obj;
      }, items3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (View, constructResult, placeholderCount) => {
      let commands;
      let descriptors;
      let loading;
      let num4;
      let tmp5;
      section = react2;
      const cResult = section.c(15);
      if (cResult[0] !== placeholderCount) {
        const obj2 = { allowFetch: true };
        const merged = Object.assign(placeholderCount);
        cResult[0] = placeholderCount;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      ({ descriptors, commands, loading } = metroImportAll(View, constructResult, tmp5));
      let num3 = placeholderCount.placeholderCount;
      metroImportAll(View, constructResult, tmp5);
      if (num3 == null) {
        num3 = 0;
      }
      if (cResult[2] === constructResult.commandTypes[0]) {
        let tmp10;
        if (cResult[3] === num3) {
          tmp10 = cResult[4];
        }
        if (cResult[5] === commands) {
          if (cResult[6] === loading) {
            let tmp16;
            if (cResult[7] === tmp10) {
              tmp16 = cResult[8];
            }
            if (cResult[9] === descriptors) {
              let tmp23;
              if (cResult[10] === loading) {
                tmp23 = cResult[11];
              }
              if (cResult[12] === tmp16) {
                let tmp26;
                if (cResult[13] === tmp23) {
                  tmp26 = cResult[14];
                }
                return tmp26;
              }
              const obj3 = { commands: tmp16, sections: tmp23, scrollDown: NOOP };
              cResult[12] = tmp16;
              cResult[13] = tmp23;
              cResult[14] = obj3;
              tmp26 = obj3;
            }
            let tmp24 = descriptors;
            if (loading) {
              tmp24 = descriptors;
              if (0 === descriptors.length) {
                items = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
                tmp24 = items;
              }
            }
            cResult[9] = descriptors;
            cResult[10] = loading;
            cResult[11] = tmp24;
            tmp23 = tmp24;
          }
        }
        let tmp17 = commands;
        if (loading) {
          const items1 = [];
          HermesBuiltin.arraySpread(items1, tmp10, HermesBuiltin.arraySpread(items1, commands, 0));
          tmp17 = items1;
        }
        cResult[5] = commands;
        cResult[6] = loading;
        cResult[7] = tmp10;
        cResult[8] = tmp17;
        tmp16 = tmp17;
      }
      const items2 = [];
      for (let num4 = 0; num4 < num3; num4 = num4 + 1) {
        let obj4 = {
          type: tmp11,
          inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER,
          id: "placeholder-" + num4,
          untranslatedName: "",
          displayName: "",
          untranslatedDescription: "",
          displayDescription: "",
          applicationId: "",
          section,
        };
        let push = items2.push;
        let _HermesInternal = HermesInternal;
        let arr = push(obj4);
      }
      cResult[2] = constructResult.commandTypes[0];
      cResult[3] = num3;
      cResult[4] = items2;
      tmp10 = items2;
    }
  : (arg0, commandTypes, placeholderCount) => {
      let closure_0 = commandTypes;
      let obj = { allowFetch: true };
      const merged = Object.assign(placeholderCount);
      const tmp2 = closure_8(arg0, commandTypes, obj);
      const descriptors = tmp2.descriptors;
      const commands = tmp2.commands;
      const loading = tmp2.loading;
      items = [commandTypes.commandTypes, placeholderCount.placeholderCount];
      const memo = loading.useMemo(() => {
        let num2;
        let num = placeholderCount.placeholderCount;
        if (num == null) {
          num = 0;
        }
        items = [];
        for (let num2 = 0; num2 < num; num2 = num2 + 1) {
          section = {
            type: tmp,
            inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER,
            id: "placeholder-" + num2,
            untranslatedName: "",
            displayName: "",
            untranslatedDescription: "",
            displayDescription: "",
            applicationId: "",
            section,
          };
          let push = items.push;
          let _HermesInternal = HermesInternal;
          let arr = push(section);
        }
        return items;
      }, items);
      let items1 = [loading, commands, descriptors, memo];
      return loading.useMemo(() => {
        let tmp4;
        if (loading) {
          items = [];
          HermesBuiltin.arraySpread(items, memo, HermesBuiltin.arraySpread(items, commands, 0));
          tmp4 = items;
        } else {
          tmp4 = commands;
        }
        const obj = { commands: tmp4, sections: null, scrollDown: null };
        if (loading) {
          let tmp11;
          if (0 === descriptors.length) {
            const items1 = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
            tmp11 = items1;
          }
          obj.sections = tmp11;
          obj.scrollDown = NOOP;
          return obj;
        }
        tmp11 = descriptors;
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arr) => {
      let closure_0;
      let tmp18;
      let obj = require("react");
      const cResult = obj.c(12);
      const tmp4 = closure_9(true, true);
      const tmp5 = closure_6(arg0, true, true);
      const result = tmp4.result;
      let tmp6;
      const tmp = _require;
      if (result != null) {
        const sections = result.sections;
        if (sections != null) {
          tmp6 = sections[arg1];
        }
      }
      const result2 = tmp5.result;
      let tmp8;
      if (result2 != null) {
        const sections2 = result2.sections;
        if (sections2 != null) {
          tmp8 = sections2[arg1];
        }
      }
      const result3 = tmp4.result;
      let tmp10;
      if (result3 != null) {
        const sections3 = result3.sections;
        if (sections3 != null) {
          tmp10 = sections3[arg1];
        }
      }
      if (tmp10 == null) {
        const result4 = tmp5.result;
        let tmp11;
        if (result4 != null) {
          tmp11 = result4.sections[arg1];
        }
        tmp10 = tmp11;
      }
      if (cResult[0] === arr) {
        let commands;
        const tmp12 = cResult[1];
        if (tmp10 != null) {
          commands = tmp10.commands;
        }
        if (tmp12 === commands) {
          let tmp16;
          let tmp17;
          let application;
          const tmp14 = cResult[2];
          if (tmp10 != null) {
            const descriptor = tmp10.descriptor;
            if (descriptor != null) {
              application = descriptor.application;
            }
          }
          if (tmp14 === application) {
            tmp16 = cResult[3];
            tmp17 = cResult[4];
          }
          let descriptor1;
          if (tmp10 != null) {
            descriptor1 = tmp10.descriptor;
          }
          if ((cResult[6] === null) != tmp8) {
            if ((cResult[7] === null) != tmp6) {
              if (cResult[8] === tmp16) {
                if (cResult[9] === tmp17) {
                  let tmp24;
                  if (cResult[10] === descriptor1) {
                    tmp24 = cResult[11];
                  }
                  return tmp24;
                }
              }
            }
          }
          const obj2 = {
            application: tmp16,
            commands: tmp17,
            sectionDescriptor: descriptor1,
            isGuildInstalled: null != tmp8,
            isUserInstalled: null != tmp6,
          };
          cResult[6] = null != tmp8;
          cResult[7] = null != tmp6;
          cResult[8] = tmp16;
          cResult[9] = tmp17;
          cResult[10] = descriptor1;
          cResult[11] = obj2;
          tmp24 = obj2;
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(arg0, id) {
          arg0[id.id] = id;
          return arg0;
        };
        cResult[5] = fn;
        tmp18 = fn;
      } else {
        tmp18 = cResult[5];
      }
      let commands1;
      const _Object = Object;
      if (tmp10 != null) {
        commands1 = tmp10.commands;
      }
      if (commands1 == null) {
        commands1 = {};
      }
      const values2 = values(commands1);
      const mapped = values2.map((rootCommand) => {
        let command = rootCommand;
        if (null != rootCommand.rootCommand) {
          const obj3 = { rootCommand: null, command: null, applicationId: null };
          ({
            rootCommand: obj2.rootCommand,
            rootCommand: obj2.command,
            applicationId: obj2.applicationId,
          } = rootCommand);
          const obj = closure_0(dependencyMap[6]);
          command = obj.buildCommand(obj3);
        }
        return command;
      });
      _require = mapped.reduce(tmp18, {});
      let application1;
      if (tmp10 != null) {
        const descriptor2 = tmp10.descriptor;
        if (descriptor2 != null) {
          application1 = descriptor2.application;
        }
      }
      const mapped1 = arr.map((item) => closure_0[item]);
      const found = mapped1.filter(tmp(1375).isNotNullish);
      cResult[0] = arr;
      let commands2;
      if (tmp10 != null) {
        commands2 = tmp10.commands;
      }
      cResult[1] = commands2;
      let application2;
      if (tmp10 != null) {
        const descriptor3 = tmp10.descriptor;
        if (descriptor3 != null) {
          application2 = descriptor3.application;
        }
      }
      cResult[2] = application2;
      cResult[3] = application1;
      cResult[4] = found;
      tmp17 = found;
      tmp16 = application1;
    }
  : (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      let closure_1 = arg2;
      let tmp = closure_9(true, true);
      let tmp2 = closure_6(arg0, true, true);
      let result2 = tmp2;
      let result;
      const useMemo = react.useMemo;
      if (tmp != null) {
        result = tmp.result;
      }
      items = [result, , ,];
      let result1;
      if (tmp2 != null) {
        result1 = tmp2.result;
      }
      items[1] = result1;
      items[2] = arg1;
      items[3] = arg2;
      return useMemo(() => {
        let descriptor1;
        let mapped1;
        result = result.result;
        let tmp2;
        const tmp = result;
        if (result != null) {
          const sections = result.sections;
          if (sections != null) {
            tmp2 = sections[closure_0];
          }
        }
        result2 = result2.result;
        let tmp6;
        const tmp4 = null != tmp2;
        const tmp5 = result2;
        if (result2 != null) {
          const sections2 = result2.sections;
          if (sections2 != null) {
            tmp6 = sections2[closure_0];
          }
        }
        const result3 = tmp.result;
        let tmp9;
        const tmp8 = null != tmp6;
        if (result3 != null) {
          const sections3 = result3.sections;
          if (sections3 != null) {
            tmp9 = sections3[closure_0];
          }
        }
        if (tmp9 == null) {
          const result4 = tmp5.result;
          let tmp11;
          if (result4 != null) {
            tmp11 = result4.sections[closure_0];
          }
          tmp9 = tmp11;
        }
        let commands;
        const _Object = Object;
        if (tmp9 != null) {
          commands = tmp9.commands;
        }
        if (commands == null) {
          commands = {};
        }
        const values2 = values(commands);
        const mapped = values2.map((rootCommand) => {
          let command = rootCommand;
          if (null != rootCommand.rootCommand) {
            const obj3 = { rootCommand: null, command: null, applicationId: null };
            ({
              rootCommand: obj2.rootCommand,
              rootCommand: obj2.command,
              applicationId: obj2.applicationId,
            } = rootCommand);
            const obj = closure_1_0(closure_1_2[6]);
            command = obj.buildCommand(obj3);
          }
          return command;
        });
        closure_0 = mapped.reduce((acc, id) => {
          acc[id.id] = id;
          return acc;
        }, {});
        let application;
        if (tmp9 != null) {
          const descriptor = tmp9.descriptor;
          if (descriptor != null) {
            application = descriptor.application;
          }
        }
        let obj = {
          application,
          commands: mapped1.filter(GlobalUtils.isNotNullish),
          sectionDescriptor: descriptor1,
          isGuildInstalled: tmp8,
          isUserInstalled: tmp4,
        };
        mapped1 = closure_1.map((item) => closure_0[item]);
        descriptor1 = undefined;
        if (tmp9 != null) {
          descriptor1 = tmp9.descriptor;
        }
        return obj;
      }, items);
    };
let closure_14 = tmp6;
let items = [Server.ApplicationCommandType.CHAT];
ReactCompilerGating = ReactCompilerGating_mod;
let section = {
  id: "placeholder-section",
  type: ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION,
  name: "",
};
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel, arg1, arg2) => {
      let application;
      let commands;
      let isUserInstalled;
      let sectionDescriptor;
      let tmp4;
      const tmp2 = isUserInstalled;
      let obj = sectionDescriptor(isUserInstalled[9]);
      const cResult = obj.c(12);
      const tmp = sectionDescriptor;
      if (cResult[0] !== channel) {
        const obj2 = { channel, type: "channel" };
        cResult[0] = channel;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmp5 = closure_14(tmp4, arg1, arg2);
      ({ commands, application, sectionDescriptor } = tmp5);
      const isGuildInstalled = tmp5.isGuildInstalled;
      isUserInstalled = tmp5.isUserInstalled;
      const tmpResult = tmp(tmp2[14]);
      const permissionContext = tmpResult.usePermissionContext(channel, items);
      let tmp7;
      if (null != commands) {
        if (cResult[2] === channel) {
          if (cResult[3] === isGuildInstalled) {
            if (cResult[4] === isUserInstalled) {
              if (cResult[5] === permissionContext) {
                if (cResult[6] === sectionDescriptor) {
                  let tmp8;
                  if (cResult[7] === commands) {
                    tmp8 = cResult[8];
                  }
                  tmp7 = tmp8;
                }
              }
            }
          }
        }
        let allowedForUser = null;
        if (null != channel.guild_id) {
          let permissions;
          if (sectionDescriptor != null) {
            permissions = sectionDescriptor.permissions;
          }
          allowedForUser = null;
          if (null != permissions) {
            const obj4 = isGuildInstalled(tmp2[15]);
            allowedForUser = obj4.computeAllowedForUser(
              sectionDescriptor.permissions,
              channel.guild_id,
              permissionContext.userId,
              permissionContext.roleIds,
              permissionContext.isImpersonating,
            );
          }
        }
        let allowedForChannel = null;
        if (null != channel.guild_id) {
          let permissions1;
          if (sectionDescriptor != null) {
            permissions1 = sectionDescriptor.permissions;
          }
          allowedForChannel = null;
          if (null != permissions1) {
            const obj5 = isGuildInstalled(tmp2[15]);
            allowedForChannel = obj5.computeAllowedForChannel(sectionDescriptor.permissions, channel, channel.guild_id);
          }
        }
        const found = commands.filter((item) => {
          let botId;
          const obj = {
            applicationAllowedForUser: allowedForUser,
            applicationAllowedForChannel: allowedForChannel,
            isGuildInstalled,
            isUserInstalled,
            commandBotId: botId,
          };
          botId = undefined;
          const hasAccess = CommandPermissionUtilsAll.hasAccess;
          CommandPermissionUtilsAll;
          if (sectionDescriptor != null) {
            botId = sectionDescriptor.botId;
          }
          const hasAccessResult = hasAccess(item, permissionContext, obj);
          return hasAccessResult === CommandPermissionUtils.HasAccessResult.ALLOWED;
        });
        cResult[2] = channel;
        cResult[3] = isGuildInstalled;
        cResult[4] = isUserInstalled;
        cResult[5] = permissionContext;
        cResult[6] = sectionDescriptor;
        cResult[7] = commands;
        cResult[8] = found;
        tmp8 = found;
      }
      if (cResult[9] === application) {
        let tmp17;
        if (cResult[10] === tmp7) {
          tmp17 = cResult[11];
        }
        return tmp17;
      }
      const obj3 = { application, commands: tmp7 };
      cResult[9] = application;
      cResult[10] = tmp7;
      cResult[11] = obj3;
      tmp17 = obj3;
    }
  : (channel, arg1, arg2) => {
      let isUserInstalled;
      let items1;
      _require = channel;
      items = [channel];
      const tmp = closure_14(
        isUserInstalled.useMemo(() => ({ channel, type: "channel" }), items),
        arg1,
        arg2,
      );
      const commands = tmp.commands;
      const sectionDescriptor = tmp.sectionDescriptor;
      const isGuildInstalled = tmp.isGuildInstalled;
      isUserInstalled = tmp.isUserInstalled;
      const application = tmp.application;
      let obj = require("CommandPermissionContext");
      const permissionContext = obj.usePermissionContext(channel, items);
      let obj2 = {
        application,
        commands: isUserInstalled.useMemo(() => {
          let allowedForChannel;
          const arr = allowedForChannel;
          if (null != allowedForChannel) {
            let allowedForUser = null;
            if (null != allowedForUser.guild_id) {
              let permissions;
              if (sectionDescriptor != null) {
                permissions = sectionDescriptor.permissions;
              }
              allowedForUser = null;
              if (null != permissions) {
                let obj = commands(sectionDescriptor[15]);
                allowedForUser = obj.computeAllowedForUser(
                  sectionDescriptor.permissions,
                  tmp.guild_id,
                  permissionContext.userId,
                  permissionContext.roleIds,
                  permissionContext.isImpersonating,
                );
              }
            }
            allowedForChannel = null;
            if (null != allowedForUser.guild_id) {
              let permissions1;
              if (sectionDescriptor != null) {
                permissions1 = sectionDescriptor.permissions;
              }
              allowedForChannel = null;
              if (null != permissions1) {
                const obj2 = commands(sectionDescriptor[15]);
                allowedForChannel = obj2.computeAllowedForChannel(sectionDescriptor.permissions, tmp, tmp.guild_id);
              }
            }
            return arr.filter((item) => {
              let botId;
              const obj = {
                applicationAllowedForUser: allowedForUser,
                applicationAllowedForChannel: allowedForChannel,
                isGuildInstalled,
                isUserInstalled,
                commandBotId: botId,
              };
              botId = undefined;
              const hasAccess = CommandPermissionUtilsAll.hasAccess;
              CommandPermissionUtilsAll;
              if (sectionDescriptor != null) {
                botId = sectionDescriptor.botId;
              }
              const hasAccessResult = hasAccess(item, permissionContext, obj);
              return hasAccessResult === CommandPermissionUtils.HasAccessResult.ALLOWED;
            });
          }
        }, items1),
      };
      items1 = [commands, permissionContext, sectionDescriptor, isGuildInstalled, isUserInstalled, channel];
      return obj2;
    };
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandQueryApi.tsx");

export const getCachedCommand = function getCachedCommand(type, commandId, applicationId) {
  let closure_0 = applicationId;
  if (null == commandId) {
    return { application: "duration", command: "toCharArray$esjava$1", section: "toCharArray$esjava$1" };
  } else {
    const userState = ApplicationCommandIndexStore.getUserState();
    const result2 = userState.result;
    let sections;
    const contextState = ApplicationCommandIndexStore.getContextState(type);
    const _Object2 = Object;
    const values2 = Object.values;
    if (result2 != null) {
      sections = result2.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result = contextState.result;
    let sections1;
    const concat = values2(sections).concat;
    const _Object = Object;
    values2(sections);
    if (result != null) {
      sections1 = result.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    const combined = concat(values(sections1));
    if (null != applicationId) {
      const found = combined.find((descriptor) => {
        const application = descriptor.descriptor.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        return id === closure_0;
      });
      if (null != found) {
        const obj = {
          application: found.descriptor.application,
          command: findCommandInSection(found, commandId),
          section: found.descriptor,
        };
        return obj;
      }
    } else {
      const iter = combined[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = findCommandInSection(nextResult, commandId);
        if (null != tmp8) {
          let obj2 = { application: nextResult.descriptor.application, command: tmp8, section: nextResult.descriptor };
          iter.return();
          return obj2;
        }
      }
    }
    return { application: "duration", command: "toCharArray$esjava$1", section: "toCharArray$esjava$1" };
  }
};
export const getCachedApplicationSection = function getCachedApplicationSection(type, CHAT, applicationId) {
  const userState = ApplicationCommandIndexStore.getUserState();
  const contextState = ApplicationCommandIndexStore.getContextState(type);
  const result = userState.result;
  let tmp4;
  const applicationState = ApplicationCommandIndexStore.getApplicationState(applicationId);
  if (result != null) {
    const sections = result.sections;
    if (sections != null) {
      tmp4 = sections[applicationId];
    }
  }
  if (tmp4 == null) {
    const result2 = contextState.result;
    let tmp5;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp5 = sections2[applicationId];
      }
    }
    tmp4 = tmp5;
  }
  if (tmp4 == null) {
    const result3 = applicationState.result;
    let tmp6;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp6 = sections3[applicationId];
      }
    }
    tmp4 = tmp6;
  }
  let descriptor;
  if (tmp4 != null) {
    descriptor = tmp4.descriptor;
  }
  return descriptor;
};
export const getCachedResults = function getCachedResults(dependencyMap, CHAT, query) {
  const obj = { commandTypes: items, text: query };
  items = [CHAT];
  const obj2 = { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
  query = ApplicationCommandIndexStore.query(dependencyMap, obj, obj2);
  return { commands: query.commands, sections: query.descriptors };
};
export const getChangeKeys = function getChangeKeys(type) {
  const userState = ApplicationCommandIndexStore.getUserState();
  const contextState = ApplicationCommandIndexStore.getContextState(type);
  let result;
  if (userState != null) {
    result = userState.result;
  }
  items = [result];
  let result1;
  if (contextState != null) {
    result1 = contextState.result;
  }
  items[1] = result1;
  return items;
};
export const useCachedResults = tmp3;
export const useDiscovery = tmp4;
export const executeQuery = function executeQuery(dependencyMap, commandTypes, placeholderCount) {
  let commands;
  let descriptors;
  let loading;
  let num3;
  let tmp15;
  const query = ApplicationCommandIndexStore.query(dependencyMap, commandTypes, placeholderCount);
  ({ descriptors, commands, loading } = query);
  let num = 0;
  if (loading) {
    let num2 = placeholderCount.placeholderCount;
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  items = [];
  for (let num3 = 0; num3 < num; num3 = num3 + 1) {
    section = {
      type: tmp4,
      inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER,
      id: "placeholder-" + num3,
      untranslatedName: "",
      displayName: "",
      untranslatedDescription: "",
      displayDescription: "",
      applicationId: "",
      section,
    };
    let push = items.push;
    let _HermesInternal = HermesInternal;
    let arr = push(section);
  }
  let tmp9 = commands;
  if (loading) {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, items, HermesBuiltin.arraySpread(items1, commands, 0));
    tmp9 = items1;
  }
  const obj2 = { commands: tmp9, sections: tmp15 };
  tmp15 = descriptors;
  if (loading) {
    tmp15 = descriptors;
    if (0 === descriptors.length) {
      const items2 = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
      tmp15 = items2;
    }
  }
  return obj2;
};
export const useQuery = tmp5;
export const useCommand = function useCommand(cResult, commandId) {
  let closure_0 = commandId;
  const tmp = React4(true, true);
  let closure_1 = tmp;
  const tmp2 = metroRequire(cResult, true, true);
  let closure_2 = tmp2;
  items = [tmp2.result, tmp.result, commandId];
  return react.useMemo(() => {
    if (null != closure_0) {
      result2 = result.result;
      let sections;
      const _Object2 = Object;
      const values2 = Object.values;
      if (result2 != null) {
        sections = result2.sections;
      }
      if (sections == null) {
        sections = {};
      }
      result = result2.result;
      let sections1;
      const concat = values2(sections).concat;
      const _Object = Object;
      values2(sections);
      if (result != null) {
        sections1 = result.sections;
      }
      if (sections1 == null) {
        sections1 = {};
      }
      const combined = concat(values(sections1));
      for (const item10019 of combined) {
        let tmp8 = item10019.commands[closure_0];
        if (null != tmp8) {
          let obj = { command: tmp8, application: item10019.descriptor.application };
          obj3.return();
          return obj;
        }
      }
    }
    return { command: "start", application: "unicodeVersion" };
  }, items);
};
export const useCommandsForApplication = tmp6;
export const useAccessibleCommandsForApplication = tmp7;
