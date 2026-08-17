// discord_app/modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef5260;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15374, dependencyMap.paths), obj);
};