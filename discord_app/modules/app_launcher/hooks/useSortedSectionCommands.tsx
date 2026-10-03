// discord_app/modules/app_launcher/hooks/useSortedSectionCommands.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import ApplicationDirectoryActionCreatorsAll from "../../global_discovery_apps/ApplicationDirectoryActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const CommandListSortOrder = fn(11759).CommandListSortOrder;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useSortedSectionCommands.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (sectionId) => {
      const cResult = alphabeticalSortedCommands(576).c(15);
      sectionId = sectionId.sectionId;
      alphabeticalSortedCommands = sectionId;
      const prop = sectionId.commandsByActiveSection;
      let obj = alphabeticalSortedCommands(576);
      [tmp4, tmp5] = noop.useState(CommandListSortOrder.ALPHABETICAL);
      importDefault = tmp5;
      if (cResult[0] === prop) {
        if (cResult[1] === sectionId) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp6) {
          const obj3 = { alphabeticalSortedCommands: tmp6 };
          cResult[3] = tmp6;
          cResult[4] = obj3;
          let tmp9 = obj3;
        } else {
          tmp9 = cResult[4];
        }
        alphabeticalSortedCommands = tmp9.alphabeticalSortedCommands;
        const items = [alphabeticalSortedCommands];
        const memo = noop.useMemo(() => {
          if (memo.length <= 1) {
            const obj2 = { popularSortedCommands: memo, canSort: false };
            return obj2;
          } else {
            closure_0 = false;
            const mapped = memo.map((command, alphabeticalSortIndex) => {
              let tmp = closure_0;
              if (!closure_0) {
                tmp = null != command.global_popularity_rank;
              }
              closure_0 = tmp;
              return { command, alphabeticalSortIndex };
            });
            if (closure_0) {
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
              const obj3 = { popularSortedCommands: mapped.map((command) => command.command), canSort: true };
              let obj = obj3;
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
              obj = closure_2(closure_3[5]);
              obj1 = { dontRefetchMs: closure_1(closure_3[6]).Millis.DAY };
              application = obj.getApplication(closure_0, obj1);
              return;
            }
          }
          const items1 = [sectionId];
          cResult[5] = sectionId;
          cResult[6] = L;
          cResult[7] = items1;
          let tmp12 = items1;
        } else {
          class L {
            constructor() {
              obj = closure_2(closure_3[5]);
              obj1 = { dontRefetchMs: closure_1(closure_3[6]).Millis.DAY };
              application = obj.getApplication(closure_0, obj1);
              return;
            }
          }
          tmp12 = cResult[7];
        }
        const effect = noop.useEffect(L, tmp12);
        if (cResult[8] !== canSort) {
          class L {
            constructor() {
              obj = closure_2(closure_3[5]);
              obj1 = { dontRefetchMs: closure_1(closure_3[6]).Millis.DAY };
              application = obj.getApplication(closure_0, obj1);
              return;
            }
          }
          const items2 = [canSort];
          cResult[8] = canSort;
          cResult[9] = tmp16;
          cResult[10] = items2;
          let tmp15 = items2;
        } else {
          class L {
            constructor() {
              obj = closure_2(closure_3[5]);
              obj1 = { dontRefetchMs: closure_1(closure_3[6]).Millis.DAY };
              application = obj.getApplication(closure_0, obj1);
              return;
            }
          }
          tmp15 = cResult[10];
        }
        const layoutEffect = noop.useLayoutEffect(tmp16, tmp15);
        if (CommandListSortOrder.POPULAR !== tmp4) {
          class L {
            constructor() {
              obj = closure_2(closure_3[5]);
              obj1 = { dontRefetchMs: closure_1(closure_3[6]).Millis.DAY };
              application = obj.getApplication(closure_0, obj1);
              return;
            }
          }
          popularSortedCommands = tmp6;
        }
        if (cResult[11] === canSort) {
          class L {
            constructor() {
              obj = closure_2(closure_3[5]);
              obj1 = { dontRefetchMs: closure_1(closure_3[6]).Millis.DAY };
              application = obj.getApplication(closure_0, obj1);
              return;
            }
          }
        }
        const obj4 = { sortOrder: tmp4, setSortOrder: tmp5, commands: popularSortedCommands, canSort };
        cResult[11] = canSort;
        cResult[12] = popularSortedCommands;
        cResult[13] = tmp4;
        cResult[14] = obj4;
      }
      const found = prop.find((section) => section.section.id === alphabeticalSortedCommands);
      if (found != null) {
        class L {
          constructor() {
            obj = closure_2(closure_3[5]);
            obj1 = { dontRefetchMs: closure_1(closure_3[6]).Millis.DAY };
            application = obj.getApplication(closure_0, obj1);
            return;
          }
        }
      }
      if (undefined == null) {
        class L {
          constructor() {
            obj = closure_2(closure_3[5]);
            obj1 = { dontRefetchMs: closure_1(closure_3[6]).Millis.DAY };
            application = obj.getApplication(closure_0, obj1);
            return;
          }
        }
      }
      cResult[0] = prop;
      cResult[1] = sectionId;
      cResult[2] = undefined;
      tmp6 = tmp8;
      const tmp3 = _slicedToArray(noop.useState(CommandListSortOrder.ALPHABETICAL), 2);
    }
  : (sectionId) => {
      sectionId = sectionId.sectionId;
      const commandsByActiveSection = sectionId.commandsByActiveSection;
      let setSortOrder;
      canSort = undefined;
      [tmp3, tmp4] = noop.useState(CommandListSortOrder.ALPHABETICAL);
      const items = [commandsByActiveSection, sectionId];
      const memo = noop.useMemo(() => {
        const found = commandsByActiveSection.find((section) => section.section.id === memo);
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
      const memo1 = noop.useMemo(() => {
        if (memo.length <= 1) {
          const obj2 = { popularSortedCommands: memo, canSort: false };
          return obj2;
        } else {
          closure_0 = false;
          const mapped = memo.map((command, alphabeticalSortIndex) => {
            let tmp = closure_0;
            if (!closure_0) {
              tmp = null != command.global_popularity_rank;
            }
            closure_0 = tmp;
            return { command, alphabeticalSortIndex };
          });
          if (closure_0) {
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
            const obj3 = { popularSortedCommands: mapped.map((command) => command.command), canSort: true };
            let obj = obj3;
          } else {
            obj = { popularSortedCommands: memo, canSort: false };
          }
          return obj;
        }
      }, items1);
      ({ popularSortedCommands, canSort } = memo1);
      const items2 = [sectionId];
      const effect = noop.useEffect(() => {
        const obj = ApplicationDirectoryActionCreatorsAll;
        const application = obj.getApplication(memo, { dontRefetchMs: DurationsDefault.Millis.DAY });
      }, items2);
      const items3 = [canSort];
      const layoutEffect = noop.useLayoutEffect(() => {
        if (canSort) {
          setSortOrder(CommandListSortOrder.POPULAR);
        }
      }, items3);
      if (CommandListSortOrder.POPULAR !== sortOrder) {
        const ALPHABETICAL = CommandListSortOrder.ALPHABETICAL;
        const commands = memo;
      }
      return { sortOrder, setSortOrder, commands, canSort };
    };
