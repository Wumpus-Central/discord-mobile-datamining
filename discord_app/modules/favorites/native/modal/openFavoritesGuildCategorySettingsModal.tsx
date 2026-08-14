// discord_app/modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = ModalActionCreators;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15324, dependencyMap.paths), obj);
};