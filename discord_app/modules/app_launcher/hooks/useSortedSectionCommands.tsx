// === Module 11312: useSortedSectionCommands ===

// Module 11312 (useSortedSectionCommands)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { CommandListSortOrder } from "CommandListSortOrder" /* 11313 */;

const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useSortedSectionCommands.tsx");

export default function useSortedSectionCommands(sectionId) {
  sectionId = sectionId.sectionId;
  let memo = sectionId;
  const commandsByActiveSection = sectionId.commandsByActiveSection;
  let setSortOrder;
  canSort = undefined;
  [tmp3, tmp4] = canSort(React.useState(CommandListSortOrder.ALPHABETICAL), 2);
  const items = [commandsByActiveSection, sectionId];
  memo = React.useMemo(() => {
    const found = commandsByActiveSection.find((section) => section.section.id === closure_0);
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
  const memo1 = React.useMemo(() => {
    if (memo.length <= 1) {
      let obj = { popularSortedCommands: null, canSort: false };
      obj[0] = arr;
      return obj;
    } else {
      memo = false;
      const mapped = arr.map((command, alphabeticalSortIndex) => {
        let tmp = closure_0;
        if (!closure_0) {
          tmp = null != command.global_popularity_rank;
        }
        closure_0 = tmp;
        return { command, alphabeticalSortIndex };
      });
      if (memo) {
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
        obj = { popularSortedCommands: null, canSort: true };
        obj[0] = mapped.map((command) => command.command);
      } else {
        obj = { popularSortedCommands: null, canSort: false };
        obj[0] = arr;
      }
      return obj;
    }
  }, items1);
  ({ popularSortedCommands, canSort } = memo1);
  const items2 = [sectionId];
  const effect = React.useEffect(() => {
    let obj = commandsByActiveSection(setSortOrder[3]);
    obj = { dontRefetchMs: memo(setSortOrder[4]).Millis.DAY };
    const application = obj.getApplication(memo, obj);
  }, items2);
  const items3 = [canSort];
  const layoutEffect = React.useLayoutEffect(() => {
    if (canSort) {
      setSortOrder(closure_1_5.POPULAR);
    }
  }, items3);
  if (CommandListSortOrder.POPULAR !== sortOrder) {
    const ALPHABETICAL = CommandListSortOrder.ALPHABETICAL;
    const commands = memo;
  }
  return { sortOrder, setSortOrder, commands, canSort };
};