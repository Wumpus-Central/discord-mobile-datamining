// === Module 11990: useFavoritesGuildCategoryAddAction ===

// Module 11990 (useFavoritesGuildCategoryAddAction)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName";
import noop from "noop";
import { ChannelTypes } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  const _require = id;
  const items = [id.id];
  callback = React.useCallback(callback(function*() {
    if (paths === 2) {
      paths = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        paths = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            paths = 3;
            throw arg1;
          } else if (arg0 === 2) {
            paths = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const id = tmp4;
            c1 = 1;
            paths = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(paths[4])(paths[3], paths.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          paths = 3;
          throw arg1;
        } else if (arg0 === 2) {
          paths = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          obj = { parentId: null, source: "favorites_add_to_category" };
          obj[0] = id.id;
          const result = arg1.openAddFavoriteChannelModal(obj);
          paths = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        paths = tmp;
        throw tmp10;
      }
    }
  }), items);
  let obj = _require(1865);
  let tmp4 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      obj = { label: null, perform: null };
      const intl = _require(1236).intl;
      obj[0] = intl.string(importDefault(3001)["1QJmIL"]);
      obj[1] = callback;
      tmp4 = obj;
    }
  }
  return tmp4;
};