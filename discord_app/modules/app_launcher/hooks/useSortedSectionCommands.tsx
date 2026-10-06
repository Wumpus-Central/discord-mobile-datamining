// === Module 11772: useSortedSectionCommands ===

// Module 11772 (useSortedSectionCommands)
import DurationsDefault from "Durations" /* 1102 */;
import ApplicationDirectoryActionCreatorsAll from "ApplicationDirectoryActionCreators" /* 11699 */;
import AppLauncherConstants from "AppLauncherConstants" /* 11773 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, sectionId;

const CommandListSortOrder = AppLauncherConstants.CommandListSortOrder;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((sectionId) => {
  let canSort;
  let closure_1;
  let popularSortedCommands;
  let tmp4;
  let tmp5;
  let obj = sectionId(576);
  const cResult = obj.c(15);
  sectionId = sectionId.sectionId;
  const prop = sectionId.commandsByActiveSection;
  [tmp4, tmp5] = react.useState(CommandListSortOrder.ALPHABETICAL);
  importDefault = tmp5;
  _slicedToArray(react.useState(CommandListSortOrder.ALPHABETICAL), 2);
  if (cResult[0] === prop) {
    let tmp6;
    let tmp9;
    let tmp12;
    let tmp15;
    if (cResult[1] === sectionId) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj3 = { alphabeticalSortedCommands: tmp6 };
      cResult[3] = tmp6;
      cResult[4] = obj3;
      tmp9 = obj3;
    } else {
      tmp9 = cResult[4];
    }
    const alphabeticalSortedCommands = tmp9.alphabeticalSortedCommands;
    const items = [alphabeticalSortedCommands];
    const memo = react.useMemo(() => {
      const f141950 = (command) => command.command;
      if (memo.length <= 1) {
        return { popularSortedCommands: memo, canSort: false };
      } else {
        let obj;
        let closure_0 = false;
        const mapped = memo.map((command, alphabeticalSortIndex) => {
          const tmp = closure_0 || null != command.global_popularity_rank;
          closure_0 = tmp;
          return { command, alphabeticalSortIndex };
        });
        let tmp = closure_0;
        if (tmp) {
          const sorted = mapped.sort((command, command2) => {
            const global_popularity_rank = command.command.global_popularity_rank;
            const global_popularity_rank2 = command2.command.global_popularity_rank;
            if (null != global_popularity_rank) {
              if (null != global_popularity_rank2) {
                if (global_popularity_rank !== global_popularity_rank2) {
                  return global_popularity_rank - global_popularity_rank2;
                }
              }
              return command.alphabeticalSortIndex - command2.alphabeticalSortIndex;
            }
            if (null != global_popularity_rank) {
              return -1;
            } else if (null != global_popularity_rank2) {
              return 1;
            }
          });
          obj = { popularSortedCommands: mapped.map(f141950), canSort: true };
          const obj3 = { popularSortedCommands: mapped.map(f141950), canSort: true };
        } else {
          obj = { popularSortedCommands: memo, canSort: false };
        }
        return obj;
      }
    }, items);
    ({ popularSortedCommands, canSort } = memo);
    if (cResult[5] !== sectionId) {
      class L {
        constructor() {
          const obj = ApplicationDirectoryActionCreatorsAll;
          const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
          const application = obj.getApplication(sectionId, obj2);
        }
      }
      const items1 = [sectionId];
      cResult[5] = sectionId;
      cResult[6] = L;
      cResult[7] = items1;
      tmp12 = items1;
    } else {
      class L {
        constructor() {
          const obj = ApplicationDirectoryActionCreatorsAll;
          const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
          const application = obj.getApplication(sectionId, obj2);
        }
      }
      tmp12 = cResult[7];
    }
    const effect = react.useEffect(L, tmp12);
    if (cResult[8] !== canSort) {
      class L {
        constructor() {
          const obj = ApplicationDirectoryActionCreatorsAll;
          const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
          const application = obj.getApplication(sectionId, obj2);
        }
      }
      const items2 = [canSort];
      cResult[8] = canSort;
      cResult[9] = tmp16;
      cResult[10] = items2;
      tmp15 = items2;
    } else {
      class L {
        constructor() {
          const obj = ApplicationDirectoryActionCreatorsAll;
          const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
          const application = obj.getApplication(sectionId, obj2);
        }
      }
      tmp15 = cResult[10];
    }
    const layoutEffect = react.useLayoutEffect(tmp16, tmp15);
    if (CommandListSortOrder.POPULAR !== tmp4) {
      class L {
        constructor() {
          const obj = ApplicationDirectoryActionCreatorsAll;
          const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
          const application = obj.getApplication(sectionId, obj2);
        }
      }
      popularSortedCommands = tmp6;
    }
    if (cResult[11] === canSort) {
      class L {
        constructor() {
          const obj = ApplicationDirectoryActionCreatorsAll;
          const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
          const application = obj.getApplication(sectionId, obj2);
        }
      }
    }
    const obj4 = { sortOrder: tmp4, setSortOrder: tmp5, commands: popularSortedCommands, canSort };
    cResult[11] = canSort;
    cResult[12] = popularSortedCommands;
    cResult[13] = tmp4;
    cResult[14] = obj4;
  }
  const found = prop.find((section) => section.section.id === sectionId);
  if (found != null) {
    class L {
      constructor() {
        const obj = ApplicationDirectoryActionCreatorsAll;
        const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
        const application = obj.getApplication(sectionId, obj2);
      }
    }
  }
  if (undefined == null) {
    class L {
      constructor() {
        const obj = ApplicationDirectoryActionCreatorsAll;
        const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
        const application = obj.getApplication(sectionId, obj2);
      }
    }
  }
  cResult[0] = prop;
  cResult[1] = sectionId;
  cResult[2] = undefined;
  tmp6 = tmp8;
}) : ((sectionId) => {
  let canSort;
  let commands;
  let popularSortedCommands;
  let tmp3;
  let tmp4;
  sectionId = sectionId.sectionId;
  const commandsByActiveSection = sectionId.commandsByActiveSection;
  let setSortOrder;
  canSort = undefined;
  [tmp3, tmp4] = _slicedToArray(react.useState(CommandListSortOrder.ALPHABETICAL), 2);
  const items = [commandsByActiveSection, sectionId];
  const tmp2 = _slicedToArray(react.useState(CommandListSortOrder.ALPHABETICAL), 2);
  const memo = react.useMemo(() => {
    const found = commandsByActiveSection.find((section) => section.section.id === sectionId);
    let data;
    if (found != null) {
      data = found.data;
    }
    if (data == null) {
      data = [];
    }
    return data;
  }, items);
  const items1 = [memo];
  const memo1 = react.useMemo(() => {
    const f141950 = (command) => command.command;
    if (memo.length <= 1) {
      return { popularSortedCommands: memo, canSort: false };
    } else {
      let obj;
      let closure_0 = false;
      const mapped = memo.map((command, alphabeticalSortIndex) => {
        const tmp = closure_0 || null != command.global_popularity_rank;
        closure_0 = tmp;
        return { command, alphabeticalSortIndex };
      });
      let tmp = closure_0;
      if (tmp) {
        const sorted = mapped.sort((command, command2) => {
          const global_popularity_rank = command.command.global_popularity_rank;
          const global_popularity_rank2 = command2.command.global_popularity_rank;
          if (null != global_popularity_rank) {
            if (null != global_popularity_rank2) {
              if (global_popularity_rank !== global_popularity_rank2) {
                return global_popularity_rank - global_popularity_rank2;
              }
            }
            return command.alphabeticalSortIndex - command2.alphabeticalSortIndex;
          }
          if (null != global_popularity_rank) {
            return -1;
          } else if (null != global_popularity_rank2) {
            return 1;
          }
        });
        obj = { popularSortedCommands: mapped.map(f141950), canSort: true };
        const obj3 = { popularSortedCommands: mapped.map(f141950), canSort: true };
      } else {
        obj = { popularSortedCommands: memo, canSort: false };
      }
      return obj;
    }
  }, items1);
  ({ popularSortedCommands, canSort } = memo1);
  const items2 = [sectionId];
  const effect = react.useEffect(() => {
    const obj = ApplicationDirectoryActionCreatorsAll;
    const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
    const application = obj.getApplication(sectionId, obj2);
  }, items2);
  const items3 = [canSort];
  const layoutEffect = react.useLayoutEffect(() => {
    if (canSort) {
      setSortOrder(CommandListSortOrder.POPULAR);
    }
  }, items3);
  if (CommandListSortOrder.POPULAR !== sortOrder) {
    const ALPHABETICAL = CommandListSortOrder.ALPHABETICAL;
    commands = memo;
  }
  return { sortOrder, setSortOrder, commands, canSort };
});
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useSortedSectionCommands.tsx");

export default tmp2;