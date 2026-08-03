import "initialize";

let require = arg1;
let prototype = function SavedMessagesManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    if (obj.isForLaterExperimentOn("saved_messages_manager")) {
      const andUpdateSavedMessages = applyArgumentsResult(table[1]).fetchAndUpdateSavedMessages();
      const tmpResult = applyArgumentsResult(table[1]);
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("initialize").fileFinishedImporting("modules/saved_messages/SavedMessagesManager.tsx");

export default prototype;