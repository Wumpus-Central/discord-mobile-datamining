// === Module 8939: ApplicationCommandQueryApi ===

// Module 8939 (ApplicationCommandQueryApi)
import c from "c" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 8803 */;
import ApplicationCommandBuiltIns from "ApplicationCommandBuiltIns" /* 8805 */;
import CommandPermissionUtils from "CommandPermissionUtils" /* 8928 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import ApplicationCommandIndexStore_mod from "ApplicationCommandIndexStore" /* 8795 */;

const require = globalThis.__r;
const CommandPermissionUtilsAll = CommandPermissionUtils;

require = fn;
function findCommandInSection(found, commandId) {
  closure_0 = commandId;
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
        const obj2 = { rootCommand, command: rootCommand, applicationId: null };
        const application = found.descriptor.application;
        let str;
        if (application != null) {
          str = application.id;
        }
        if (str == null) {
          str = "";
        }
        obj2.applicationId = str;
        command = ApplicationCommandUtils.buildCommand(obj2);
      }
      return command;
    }
  }
}
let ApplicationCommandIndexStore = fn(8795);
({ useContextIndexState: metroRequire, useDiscoveryState: closure_7, useQueryState: closure_8, useUserIndexState: closure_9 } = ApplicationCommandIndexStore);
let ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
const BuiltInSectionId = fn(5788).BuiltInSectionId;
const NOOP = fn(1085).NOOP;
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, text) => {
  const cResult = c.c(9);
  if (cResult[0] !== arg1) {
    items = [arg1];
    cResult[0] = arg1;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === text) {
      let tmp5 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
      cResult[5] = obj2;
      let tmp7 = obj2;
    } else {
      tmp7 = cResult[5];
    }
    const tmp10 = closure_1_8(arg0, tmp5, tmp7);
    if (cResult[6] === tmp10.commands) {
      if (cResult[7] === tmp10.descriptors) {
        let tmp11 = cResult[8];
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
}) : ((arg0, arg1, text) => {
  closure_0 = arg1;
  items = [arg1];
  const obj = {
    commandTypes: noop.useMemo(() => {
      items = [closure_0];
      return items;
    }, items),
    text
  };
  const tmp = closure_1_8(arg0, obj, { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false });
  return { commands: tmp.commands, sections: tmp.descriptors };
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = guild_id(576).c(46);
  ({ context, filters, options, allowFetch } = arg0);
  guild_id = null;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildStore];
    cResult[0] = items;
    let first = items;
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = guild_id(576);
  const stateFromStores = guild_id(504).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === allowFetch) {
    if (cResult[5] === options) {
      let tmp10 = cResult[6];
    }
    ({ descriptors, commands, sectionedCommands, loading } = closure_7(context, stateFromStores, filters, tmp10));
    [first1, dependencyMap] = noop.useState(null);
    let num6 = options.placeholderCount;
    if (num6 == null) {
      num6 = 0;
    }
    if (cResult[7] === filters.commandTypes[0]) {
      if (cResult[8] === num6) {
        let tmp22 = cResult[9];
      }
      if (cResult[10] === loading) {
        if (cResult[11] === tmp22) {
          let tmp23 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function x(arg0) {
            closure_2(arg0);
          };
          cResult[13] = fn2;
          let tmp25 = fn2;
        } else {
          tmp25 = cResult[13];
        }
        if (cResult[14] === commands) {
          if (cResult[15] === descriptors) {
            if (cResult[16] === first1) {
              if (cResult[17] === loading) {
                if (cResult[18] === tmp22) {
                  if (cResult[19] === sectionedCommands) {
                    if (cResult[20] === tmp23) {
                      let tmp26 = cResult[21];
                    }
                    return tmp26;
                  }
                }
              }
            }
          }
        }
        const obj2 = { loading, commands, activeSections: descriptors, commandsByActiveSection: sectionedCommands, filteredSectionId: first1, hasMoreAfter: false, placeholders: tmp23, sectionDescriptors: descriptors, filterSection: tmp25, scrollDown: NOOP };
        if (null == first1) {
          if (!loading) {
            cResult[14] = commands;
            cResult[15] = descriptors;
            cResult[16] = first1;
            cResult[17] = loading;
            cResult[18] = tmp22;
            cResult[19] = sectionedCommands;
            cResult[20] = tmp23;
            cResult[21] = obj2;
            tmp26 = obj2;
          } else {
            const first2 = sectionedCommands[0];
            if (null != first2) {
              if (cResult[31] === first2.data) {
                if (cResult[32] === tmp22) {
                  let tmp37 = cResult[33];
                }
                if (cResult[34] === first2.section) {
                  if (cResult[35] === tmp37) {
                    let tmp42 = cResult[36];
                  }
                  if (cResult[37] === sectionedCommands) {
                    if (cResult[38] === tmp42) {
                      let tmp43 = cResult[39];
                    }
                    obj2.commandsByActiveSection = tmp43;
                  }
                  const items2 = [tmp42];
                  HermesBuiltin.arraySpread(sectionedCommands.slice(1), 1);
                  cResult[37] = sectionedCommands;
                  cResult[38] = tmp42;
                  cResult[39] = items2;
                  tmp43 = items2;
                }
                const obj3 = { section: first2.section, data: tmp37 };
                cResult[34] = first2.section;
                cResult[35] = tmp37;
                cResult[36] = obj3;
                tmp42 = obj3;
              }
              const items3 = [];
              HermesBuiltin.arraySpread(tmp22, HermesBuiltin.arraySpread(first2.data, 0));
              cResult[31] = first2.data;
              cResult[32] = tmp22;
              cResult[33] = items3;
              tmp37 = items3;
            } else {
              const tmp53 = tmp(8805).BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN];
              const _Symbol2 = Symbol;
              if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                const items4 = [tmp53];
                cResult[40] = items4;
                let tmp35 = items4;
              } else {
                tmp35 = cResult[40];
              }
              obj2.activeSections = tmp35;
              if (cResult[41] !== tmp22) {
                const obj4 = { section: tmp53, data: tmp22 };
                const items5 = [obj4];
                cResult[41] = tmp22;
                cResult[42] = items5;
                let tmp36 = items5;
              } else {
                tmp36 = cResult[42];
              }
              obj2.commandsByActiveSection = tmp36;
              if (cResult[43] === commands) {
                if (cResult[44] === tmp22) {
                  let tmp46 = cResult[45];
                }
                obj2.commands = tmp46;
              }
              const items6 = [];
              HermesBuiltin.arraySpread(tmp22, HermesBuiltin.arraySpread(commands, 0));
              cResult[43] = commands;
              cResult[44] = tmp22;
              cResult[45] = items6;
              tmp46 = items6;
            }
          }
        } else {
          if (cResult[22] === first1) {
            if (cResult[23] === sectionedCommands) {
              if (cResult[27] !== cResult[24]) {
                if (null != tmp28) {
                  const items7 = [tmp28.section];
                  let items8 = items7;
                } else {
                  items8 = [];
                }
                cResult[27] = tmp28;
                cResult[28] = items8;
              } else {
                obj2.activeSections = cResult[28];
                if (cResult[29] === tmp28) {
                  obj2.commandsByActiveSection = cResult[30];
                }
                if (null != tmp28) {
                  const items9 = [tmp28];
                  let items10 = items9;
                } else {
                  items10 = [];
                }
                cResult[29] = tmp28;
                cResult[30] = items10;
              }
            }
          }
          if (cResult[25] !== first1) {
            class G {
              constructor(arg0) {
                return arg0.section.id === closure_1;
              }
            }
            cResult[25] = first1;
            cResult[26] = G;
          } else {
            class G {
              constructor(arg0) {
                return arg0.section.id === closure_1;
              }
            }
          }
          const found = sectionedCommands.find(G);
          cResult[22] = first1;
          cResult[23] = sectionedCommands;
          cResult[24] = found;
        }
      }
      if (!loading) {
        class G {
          constructor(arg0) {
            return arg0.section.id === closure_1;
          }
        }
      }
      cResult[10] = loading;
      cResult[11] = tmp22;
      cResult[12] = tmp22;
      tmp23 = tmp24;
    }
    const items11 = [];
    if (0 < num6) {
      class G {
        constructor(arg0) {
          return arg0.section.id === closure_1;
        }
      }
    }
    cResult[7] = filters.commandTypes[0];
    cResult[8] = num6;
    cResult[9] = items11;
    tmp22 = items11;
    const tmp17 = closure_7(context, stateFromStores, filters, tmp10);
  }
  const obj5 = {};
  const merged = Object.assign(options);
  obj5.allowFetch = allowFetch;
  cResult[4] = allowFetch;
  cResult[5] = options;
  cResult[6] = obj5;
  tmp10 = obj5;
  const tmpResult = guild_id(504);
}) : ((options) => {
  ({ context, filters } = options);
  options = options.options;
  let descriptors;
  let commands;
  let sectionedCommands;
  let loading;
  let first;
  closure_8 = undefined;
  let memo;
  let guild_id = null;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  items = [sectionedCommands];
  let items1 = [guild_id];
  const stateFromStores = filters(guild_id[10]).useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  let obj2 = {};
  const merged = Object.assign(options);
  obj2.allowFetch = options.allowFetch;
  const tmp4 = first(context, stateFromStores, filters, obj2);
  descriptors = tmp4.descriptors;
  commands = tmp4.commands;
  sectionedCommands = tmp4.sectionedCommands;
  loading = tmp4.loading;
  const tmp5 = descriptors(commands.useState(null), 2);
  first = tmp5[0];
  closure_8 = tmp5[1];
  let items2 = [filters.commandTypes, options.placeholderCount];
  memo = commands.useMemo(() => {
    let num = options.placeholderCount;
    if (num == null) {
      num = 0;
    }
    items = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      let obj = { type: tmp, inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
      let _HermesInternal = HermesInternal;
      obj.id = "placeholder-" + num2;
      obj.section = obj6;
      let arr = items.push(obj);
    }
    return items;
  }, items2);
  let items3 = [loading, commands, descriptors, sectionedCommands, first, memo];
  return commands.useMemo(() => {
    const obj = {
      loading,
      commands,
      activeSections: descriptors,
      commandsByActiveSection: sectionedCommands,
      filteredSectionId: commandsByActiveSection,
      hasMoreAfter: false,
      placeholders: loading ? memo : [],
      sectionDescriptors: descriptors,
      filterSection(id) {
        closure_1_8(id);
      },
      scrollDown: NOOP
    };
    if (null == commandsByActiveSection) {
      if (!loading) {
        return obj;
      } else {
        commandsByActiveSection = sectionedCommands[0];
        if (null != commandsByActiveSection) {
          const obj2 = { section: commandsByActiveSection.section, data: null };
          items = [];
          HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(commandsByActiveSection.data, 0));
          obj2.data = items;
          commandsByActiveSection = [obj2];
          HermesBuiltin.arraySpread(sectionedCommands.slice(1), 1);
          obj.commandsByActiveSection = commandsByActiveSection;
          let tmp7 = memo;
        } else {
          const tmp6 = ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN];
          const items1 = [tmp6];
          obj.activeSections = items1;
          const obj3 = { section: tmp6, data: null };
          tmp7 = memo;
          obj3.data = memo;
          const items2 = [obj3];
          obj.commandsByActiveSection = items2;
        }
        const items3 = [];
        HermesBuiltin.arraySpread(tmp7, HermesBuiltin.arraySpread(commands, 0));
        obj.commands = items3;
      }
    } else {
      const found = sectionedCommands.find((section) => section.section.id === first);
      if (null != found) {
        const items4 = [found.section];
        let items5 = items4;
      } else {
        items5 = [];
      }
      obj.activeSections = items5;
      if (null != found) {
        const items6 = [found];
        let items7 = items6;
      } else {
        items7 = [];
      }
      obj.commandsByActiveSection = items7;
    }
  }, items3);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arr) => {
  const cResult = require("c").c(12);
  const tmp4 = closure_9(true, true);
  const tmp5 = closure_6(arg0, true, true);
  const result = tmp4.result;
  if (result != null) {
    const sections = result.sections;
  }
  const result2 = tmp5.result;
  if (result2 != null) {
    const sections2 = result2.sections;
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
    if (tmp10 != null) {
      commands = tmp10.commands;
    }
    if (cResult[1] === commands) {
      let application;
      if (tmp10 != null) {
        const descriptor = tmp10.descriptor;
        if (descriptor != null) {
          application = descriptor.application;
        }
      }
      if (cResult[2] === application) {
        let tmp14 = cResult[3];
        let tmp15 = cResult[4];
      }
      let descriptor1;
      if (tmp10 != null) {
        descriptor1 = tmp10.descriptor;
      }
      if (cResult[6] === tmp9) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp14) {
            if (cResult[9] === tmp15) {
              if (cResult[10] === descriptor1) {
                let tmp22 = cResult[11];
              }
              return tmp22;
            }
          }
        }
      }
      const obj2 = { application: tmp14, commands: tmp15, sectionDescriptor: descriptor1, isGuildInstalled: tmp9, isUserInstalled: tmp7 };
      cResult[6] = tmp9;
      cResult[7] = tmp7;
      cResult[8] = tmp14;
      cResult[9] = tmp15;
      cResult[10] = descriptor1;
      cResult[11] = obj2;
      tmp22 = obj2;
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(arg0, id) {
      arg0[id.id] = id;
      return arg0;
    };
    cResult[5] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[5];
  }
  let commands1;
  if (tmp10 != null) {
    commands1 = tmp10.commands;
  }
  if (commands1 == null) {
    commands1 = {};
  }
  const values = Object.values(commands1);
  const mapped = values.map((rootCommand) => {
    let command = rootCommand;
    if (null != rootCommand.rootCommand) {
      ({ rootCommand: obj2.rootCommand, rootCommand: obj2.command, applicationId: obj2.applicationId } = rootCommand);
      command = dependencyMap(dependencyMap[6]).buildCommand({ rootCommand: null, command: null, applicationId: null });
      const obj = dependencyMap(dependencyMap[6]);
      const obj3 = { rootCommand: null, command: null, applicationId: null };
    }
    return command;
  });
  _require = mapped.reduce(tmp16, {});
  let application1;
  if (tmp10 != null) {
    const descriptor2 = tmp10.descriptor;
    if (descriptor2 != null) {
      application1 = descriptor2.application;
    }
  }
  const mapped1 = arr.map((item) => dependencyMap[item]);
  const found = mapped1.filter(require("GlobalUtils").isNotNullish);
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
  tmp15 = found;
  tmp14 = application1;
  let obj = require("c");
}) : ((arg0, arg1, arg2) => {
  closure_0 = arg1;
  closure_1 = arg2;
  const tmp = closure_9(true, true);
  let tmp2 = closure_6(arg0, true, true);
  let result2 = tmp2;
  let result;
  if (tmp != null) {
    result = tmp.result;
  }
  items = [result, , , ];
  let result1;
  if (tmp2 != null) {
    result1 = tmp2.result;
  }
  items[1] = result1;
  items[2] = arg1;
  items[3] = arg2;
  return noop.useMemo(() => {
    result = result.result;
    let tmp2;
    if (result != null) {
      const sections = result.sections;
      if (sections != null) {
        tmp2 = sections[dependencyMap];
      }
    }
    result2 = result2.result;
    let tmp6;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp6 = sections2[dependencyMap];
      }
    }
    const result3 = result.result;
    let tmp9;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp9 = sections3[dependencyMap];
      }
    }
    if (tmp9 == null) {
      const result4 = result2.result;
      let tmp11;
      if (result4 != null) {
        tmp11 = result4.sections[dependencyMap];
      }
      tmp9 = tmp11;
    }
    let commands;
    if (tmp9 != null) {
      commands = tmp9.commands;
    }
    if (commands == null) {
      commands = {};
    }
    const values = Object.values(commands);
    const mapped = values.map((rootCommand) => {
      let command = rootCommand;
      if (null != rootCommand.rootCommand) {
        ({ rootCommand: obj2.rootCommand, rootCommand: obj2.command, applicationId: obj2.applicationId } = rootCommand);
        command = dependencyMap(dependencyMap[6]).buildCommand({ rootCommand: null, command: null, applicationId: null });
        const obj = dependencyMap(dependencyMap[6]);
        const obj3 = { rootCommand: null, command: null, applicationId: null };
      }
      return command;
    });
    dependencyMap = mapped.reduce((acc, id) => {
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
    let obj = { application, commands: null, sectionDescriptor: null, isGuildInstalled: null, isUserInstalled: null };
    const mapped1 = closure_1.map((item) => dependencyMap[item]);
    obj.commands = mapped1.filter(GlobalUtils.isNotNullish);
    let descriptor1;
    if (tmp9 != null) {
      descriptor1 = tmp9.descriptor;
    }
    obj.sectionDescriptor = descriptor1;
    obj.isGuildInstalled = null != tmp6;
    obj.isUserInstalled = null != tmp2;
    return obj;
  }, items);
});
let closure_14 = tmp6;
let items = [fn(1985).ApplicationCommandType.CHAT];
ReactCompilerGating = fn(558);
const obj6 = { id: "placeholder-section", type: null, name: "" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, placeholderCount) => {
  const cResult = c.c(15);
  if (cResult[0] !== placeholderCount) {
    const obj2 = {};
    const merged = Object.assign(placeholderCount);
    obj2.allowFetch = true;
    cResult[0] = placeholderCount;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ descriptors, commands, loading } = closure_1_8(arg0, arg1, tmp4));
  let num3 = placeholderCount.placeholderCount;
  if (num3 == null) {
    num3 = 0;
  }
  if (cResult[2] === arg1.commandTypes[0]) {
    if (cResult[3] === num3) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === commands) {
      if (cResult[6] === loading) {
        if (cResult[7] === tmp9) {
          let tmp15 = cResult[8];
        }
        if (cResult[9] === descriptors) {
          if (cResult[10] === loading) {
            let tmp22 = cResult[11];
          }
          if (cResult[12] === tmp15) {
            if (cResult[13] === tmp22) {
              let tmp25 = cResult[14];
            }
            return tmp25;
          }
          const obj3 = { commands: tmp15, sections: tmp22, scrollDown: NOOP };
          cResult[12] = tmp15;
          cResult[13] = tmp22;
          cResult[14] = obj3;
          tmp25 = obj3;
        }
        let tmp23 = descriptors;
        if (loading) {
          tmp23 = descriptors;
          if (0 === descriptors.length) {
            items = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
            tmp23 = items;
          }
        }
        cResult[9] = descriptors;
        cResult[10] = loading;
        cResult[11] = tmp23;
        tmp22 = tmp23;
      }
    }
    let tmp16 = commands;
    if (loading) {
      const items1 = [];
      HermesBuiltin.arraySpread(tmp9, HermesBuiltin.arraySpread(commands, 0));
      tmp16 = items1;
    }
    cResult[5] = commands;
    cResult[6] = loading;
    cResult[7] = tmp9;
    cResult[8] = tmp16;
    tmp15 = tmp16;
  }
  const items2 = [];
  for (let num4 = 0; num4 < num3; num4 = num4 + 1) {
    let obj4 = { type: tmp10, inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
    let _HermesInternal = HermesInternal;
    obj4.id = "placeholder-" + num4;
    obj4.section = obj6;
    let arr = items2.push(obj4);
  }
  cResult[2] = arg1.commandTypes[0];
  cResult[3] = num3;
  cResult[4] = items2;
  tmp9 = items2;
  const tmp8 = closure_1_8(arg0, arg1, tmp4);
}) : ((arg0, commandTypes, placeholderCount) => {
  closure_0 = commandTypes;
  let obj = {};
  const merged = Object.assign(placeholderCount);
  obj.allowFetch = true;
  const tmp2 = closure_8(arg0, commandTypes, obj);
  const descriptors = tmp2.descriptors;
  const commands = tmp2.commands;
  const loading = tmp2.loading;
  items = [commandTypes.commandTypes, placeholderCount.placeholderCount];
  const memo = loading.useMemo(() => {
    let num = placeholderCount.placeholderCount;
    if (num == null) {
      num = 0;
    }
    items = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      let obj = { type: tmp, inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
      let _HermesInternal = HermesInternal;
      obj.id = "placeholder-" + num2;
      obj.section = obj6;
      let arr = items.push(obj);
    }
    return items;
  }, items);
  let items1 = [loading, commands, descriptors, memo];
  return loading.useMemo(() => {
    if (loading) {
      items = [];
      HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(commands, 0));
      let tmp3 = items;
    } else {
      tmp3 = commands;
    }
    const obj = { commands: tmp3, sections: null, scrollDown: null };
    if (loading) {
      if (0 === descriptors.length) {
        const items1 = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
        let tmp10 = items1;
      }
      obj.sections = tmp10;
      obj.scrollDown = NOOP;
      return obj;
    }
    tmp10 = descriptors;
  }, items1);
});
obj6.type = fn(7034).ApplicationCommandSectionType.APPLICATION;
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandQueryApi.tsx");

export const getCachedCommand = function getCachedCommand(type, commandId, applicationId) {
  closure_0 = applicationId;
  if (null == commandId) {
    return { application: "done", command: "toCharArray$esjava$1", section: "toCharArray$esjava$1" };
  } else {
    const userState = ApplicationCommandIndexStore.getUserState();
    const result2 = userState.result;
    let sections;
    const contextState = ApplicationCommandIndexStore.getContextState(type);
    if (result2 != null) {
      sections = result2.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const values = Object.values(sections);
    const result = contextState.result;
    let sections1;
    if (result != null) {
      sections1 = result.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    const combined = values.concat(Object.values(sections1));
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
        const obj = { application: found.descriptor.application, command: findCommandInSection(found, commandId), section: found.descriptor };
        return obj;
      }
    } else {
      const iter = combined[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = findCommandInSection(nextResult, commandId);
        if (null != tmp7) {
          let obj2 = { application: nextResult.descriptor.application, command: tmp7, section: nextResult.descriptor };
          iter.return();
          return obj2;
        }
      }
    }
    return { application: "done", command: "toCharArray$esjava$1", section: "toCharArray$esjava$1" };
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
  const obj = { commandTypes: null, text: query };
  items = [CHAT];
  obj.commandTypes = items;
  query = ApplicationCommandIndexStore.query(dependencyMap, obj, { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false });
  return { commands: query.commands, sections: query.descriptors };
};
export const getChangeKeys = function getChangeKeys(type) {
  const userState = ApplicationCommandIndexStore.getUserState();
  const contextState = ApplicationCommandIndexStore.getContextState(type);
  let result;
  if (userState != null) {
    result = userState.result;
  }
  items = [result, ];
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
    let obj = { type: tmp3, inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
    let _HermesInternal = HermesInternal;
    obj.id = "placeholder-" + num3;
    obj.section = obj6;
    let arr = items.push(obj);
  }
  let tmp8 = commands;
  if (loading) {
    const items1 = [];
    HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(commands, 0));
    tmp8 = items1;
  }
  const obj2 = { commands: tmp8, sections: null };
  let tmp14 = descriptors;
  if (loading) {
    tmp14 = descriptors;
    if (0 === descriptors.length) {
      const items2 = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
      tmp14 = items2;
    }
  }
  obj2.sections = tmp14;
  return obj2;
};
export const useQuery = tmp5;
export const useCommand = function useCommand(cResult, commandId) {
  closure_0 = commandId;
  const tmp = options(true, true);
  let result = tmp;
  const tmp2 = timestampProducer(cResult, true, true);
  let result2 = tmp2;
  items = [tmp2.result, tmp.result, commandId];
  return noop.useMemo(() => {
    if (null != closure_0) {
      result2 = result.result;
      let sections;
      if (result2 != null) {
        sections = result2.sections;
      }
      if (sections == null) {
        sections = {};
      }
      const values = Object.values(sections);
      result = result2.result;
      let sections1;
      if (result != null) {
        sections1 = result.sections;
      }
      if (sections1 == null) {
        sections1 = {};
      }
      const combined = values.concat(Object.values(sections1));
      for (const item10019 of combined) {
        let tmp7 = item10019.commands[closure_0];
        if (null != tmp7) {
          let obj = { command: tmp7, application: item10019.descriptor.application };
          obj4.return();
          return obj;
        }
      }
    }
    return { command: "Symbol", application: "current" };
  }, items);
};
export const useCommandsForApplication = tmp6;
export const useAccessibleCommandsForApplication = ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1, arg2) => {
  let guild_id = isUserInstalled;
  const cResult = sectionDescriptor(isUserInstalled[9]).c(12);
  if (cResult[0] !== channel) {
    let obj2 = { channel, type: "channel" };
    cResult[0] = channel;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const tmp4 = closure_14(tmp3, arg1, arg2);
  ({ commands, application, sectionDescriptor } = tmp4);
  const isGuildInstalled = tmp4.isGuildInstalled;
  isUserInstalled = tmp4.isUserInstalled;
  let obj = sectionDescriptor(isUserInstalled[9]);
  const permissionContext = sectionDescriptor(guild_id[14]).usePermissionContext(channel, items);
  if (null == commands) {
    if (cResult[9] === application) {
      if (cResult[10] === undefined) {
        let tmp16 = cResult[11];
      }
      return tmp16;
    }
    const obj3 = { application, commands: undefined };
    cResult[9] = application;
    cResult[10] = undefined;
    cResult[11] = obj3;
    tmp16 = obj3;
  } else {
    if (cResult[2] === channel) {
      if (cResult[3] === isGuildInstalled) {
        if (cResult[4] === isUserInstalled) {
          if (cResult[5] === permissionContext) {
            if (cResult[6] === sectionDescriptor) {
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
        const obj4 = isGuildInstalled(guild_id[15]);
        allowedForUser = obj4.computeAllowedForUser(sectionDescriptor.permissions, channel.guild_id, permissionContext.userId, permissionContext.roleIds, permissionContext.isImpersonating);
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
        guild_id = channel.guild_id;
        allowedForChannel = isGuildInstalled(guild_id[15]).computeAllowedForChannel(sectionDescriptor.permissions, channel, guild_id);
        const obj5 = isGuildInstalled(guild_id[15]);
      }
    }
    const found = commands.filter((item) => {
      const obj2 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled, commandBotId: null };
      let botId;
      if (sectionDescriptor != null) {
        botId = sectionDescriptor.botId;
      }
      obj2.commandBotId = botId;
      return CommandPermissionUtilsAll.hasAccess(item, permissionContext, obj2) === CommandPermissionUtils.HasAccessResult.ALLOWED;
    });
    cResult[2] = channel;
    cResult[3] = isGuildInstalled;
    cResult[4] = isUserInstalled;
    cResult[5] = permissionContext;
    cResult[6] = sectionDescriptor;
    cResult[7] = commands;
    cResult[8] = found;
  }
}) : ((channel, arg1, arg2) => {
  _require = channel;
  items = [channel];
  const tmp = closure_14(isUserInstalled.useMemo(() => ({ channel, type: "channel" }), items), arg1, arg2);
  const commands = tmp.commands;
  const sectionDescriptor = tmp.sectionDescriptor;
  const isGuildInstalled = tmp.isGuildInstalled;
  isUserInstalled = tmp.isUserInstalled;
  const permissionContext = require("CommandPermissionContext").usePermissionContext(channel, items);
  let obj2 = { application: tmp.application, commands: null };
  const items1 = [commands, permissionContext, sectionDescriptor, isGuildInstalled, isUserInstalled, channel];
  obj2.commands = isUserInstalled.useMemo(() => {
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
          allowedForUser = obj.computeAllowedForUser(sectionDescriptor.permissions, tmp.guild_id, permissionContext.userId, permissionContext.roleIds, permissionContext.isImpersonating);
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
          allowedForChannel = commands(sectionDescriptor[15]).computeAllowedForChannel(sectionDescriptor.permissions, tmp, tmp.guild_id);
          let obj2 = commands(sectionDescriptor[15]);
        }
      }
      return arr.filter((item) => {
        const obj2 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled, commandBotId: null };
        let botId;
        if (sectionDescriptor != null) {
          botId = sectionDescriptor.botId;
        }
        obj2.commandBotId = botId;
        return CommandPermissionUtilsAll.hasAccess(item, permissionContext, obj2) === CommandPermissionUtils.HasAccessResult.ALLOWED;
      });
    }
    arr = allowedForChannel;
  }, items1);
  return obj2;
});