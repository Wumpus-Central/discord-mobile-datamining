import keys from "keys";

const obj = keys.create((arg0) => {
  let closure_0 = arg0;
  return {
    favoriteAdded: false,
    notifyFavoriteAdded() {
      return callback(outer1_1[1]).batchUpdates(() => callback({ favoriteAdded: true }));
    },
    clearFavoriteAdded() {
      return callback(outer1_1[1]).batchUpdates(() => callback({ favoriteAdded: false }));
    }
  };
});
const result = require("set").fileFinishedImporting("modules/favorites/FavoritesNotificationStore.tsx");

export const useFavoritesNotificationStore = obj;