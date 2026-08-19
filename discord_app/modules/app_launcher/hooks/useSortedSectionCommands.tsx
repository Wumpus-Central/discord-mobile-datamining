// discord_app/modules/app_launcher/hooks/useSortedSectionCommands.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { CommandListSortOrder } from "../AppLauncherConstants.tsx";

const result = require("obj132").fileFinishedImporting("modules/app_launcher/hooks/useSortedSectionCommands.tsx");

export default function useSortedSectionCommands(sectionId) {
  sectionId = sectionId.sectionId;
  const commandsByActiveSection = sectionId.commandsByActiveSection;
  let setSortOrder;
  canSort = undefined;
  [tmp3, tmp4] = canSort(React.useState(CommandListSortOrder.ALPHABETICAL), 2);
  const items = [commandsByActiveSection, sectionId];
  let memo = React.useMemo(() => {
    const found = commandsByActiveSection.find((item, index) => item.section.id === closure_0);
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
      const mapped = arr.map((item, index) => {
        let tmp = closure_0;
        if (!closure_0) {
          tmp = null != item.global_popularity_rank;
        }
        closure_0 = tmp;
        return { command: item, alphabeticalSortIndex: index };
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
        obj[0] = mapped.map((item, index) => item.command);
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
    commandsByActiveSection(setSortOrder[3]);
    const obj = { dontRefetchMs: memo(setSortOrder[4]).Millis.DAY };
    const application = obj.getApplication(memo, obj);
  }, items2);
  const items3 = [canSort];
  const layoutEffect = React.useLayoutEffect(() => {
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