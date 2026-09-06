// discord_app/modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx",
);

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(17578, dependencyMap.paths),
    merged,
    "guild-settings-sticker-create",
    { presentation: "modal" },
  );
}
