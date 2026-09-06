// discord_app/modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4763 from "../../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4763;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(16112, dependencyMap.paths), obj);
}
