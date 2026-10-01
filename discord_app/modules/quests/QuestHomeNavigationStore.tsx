// === Module 10884: QuestHomeNavigationStore ===

// Module 10884 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4734 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;