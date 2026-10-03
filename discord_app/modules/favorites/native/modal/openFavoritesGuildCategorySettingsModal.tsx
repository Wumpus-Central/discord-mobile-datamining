// === Module 16033: openFavoritesGuildCategorySettingsModal ===

// Module 16033 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16034, dependencyMap.paths), { categoryId });
};