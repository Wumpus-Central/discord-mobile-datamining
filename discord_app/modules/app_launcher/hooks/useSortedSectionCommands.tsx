// discord_app/modules/app_launcher/hooks/useSortedSectionCommands.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import ApplicationDirectoryActionCreatorsAll from "../../global_discovery_apps/ApplicationDirectoryActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const CommandListSortOrder = fn(12135).CommandListSortOrder;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useSortedSectionCommands.tsx");

export default function useSortedSectionCommands(sectionId) {
  sectionId = sectionId.sectionId;
  const commandsByActiveSection = sectionId.commandsByActiveSection;
  let setSortOrder;
  canSort = undefined;
  [tmp3, tmp4] = canSort(noop.useState(CommandListSortOrder.ALPHABETICAL), 2);
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
      let obj = { popularSortedCommands: arr, canSort: false };
      return obj;
    } else {
      closure_0 = false;
      const mapped = arr.map((command, alphabeticalSortIndex) => {
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
        obj = { popularSortedCommands: mapped.map((command) => command.command), canSort: true };
      } else {
        obj = { popularSortedCommands: arr, canSort: false };
      }
      return obj;
    }
  }, items1);
  ({ popularSortedCommands, canSort } = memo1);
  const items2 = [sectionId];
  const effect = noop.useEffect(() => {
    const obj = { dontRefetchMs: DurationsDefault.Millis.DAY };
    const application = obj.getApplication(memo, obj);
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
}
