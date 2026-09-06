// discord_app/modules/guild_member_verification/native/openJoinRequestActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16579, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
}
