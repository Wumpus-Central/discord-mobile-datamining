// === Module 11902: QuestHomeNavigationStore ===

// Module 11902 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4509 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;