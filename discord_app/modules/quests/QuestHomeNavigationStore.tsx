// === Module 9526: QuestHomeNavigationStore ===

// Module 9526 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5145 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;