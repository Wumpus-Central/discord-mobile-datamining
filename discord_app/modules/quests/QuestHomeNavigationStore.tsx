// discord_app/modules/quests/QuestHomeNavigationStore.tsx
import ZustandStore from "../../lib/ZustandStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
