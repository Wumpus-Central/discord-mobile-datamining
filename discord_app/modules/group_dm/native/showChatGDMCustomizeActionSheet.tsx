// discord_app/modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4161).hideActionSheet();
  const obj = importDefault(4161);
  importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(9113, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};