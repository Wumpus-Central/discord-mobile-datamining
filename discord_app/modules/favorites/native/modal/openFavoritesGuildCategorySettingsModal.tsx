// === Module 15943: openFavoritesGuildCategorySettingsModal ===

// Module 15943 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15944, dependencyMap.paths), { categoryId });
};