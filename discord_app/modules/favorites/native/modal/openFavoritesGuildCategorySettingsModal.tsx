// === Module 18833: openFavoritesGuildCategorySettingsModal ===

// Module 18833 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18834, dependencyMap.paths), { categoryId });
};