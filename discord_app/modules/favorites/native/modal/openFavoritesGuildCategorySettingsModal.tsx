// === Module 18493: openFavoritesGuildCategorySettingsModal ===

// Module 18493 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18494, dependencyMap.paths), { categoryId });
};