// discord_app/modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
const obj = { separator: null };
let size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
obj.separator = size;
let closure_2 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx");

export default noop.memo(function QuestDockHeaderSeparator() {
  return <View style={closure_2().separator} />;
});
