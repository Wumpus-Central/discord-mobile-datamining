// === Module 11130: useFavoritesGuildMoveToCategoryAction ===

// Module 11130 (useFavoritesGuildMoveToCategoryAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10351 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildMoveToCategoryAction.tsx");

export default function useFavoritesGuildMoveToCategoryAction(id) {
  let obj = favorite(10352);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  favorite = favorite(10352).useFavorite(id.id);
  const obj2 = favorite(10352);
  id = undefined;
  if (favorite != null) {
    id = favorite.id;
  }
  [][0] = id;
  if (isFavoritesGuildSelected) {
    if (null != favorite) {
      const found = arr.filter((id) => {
        let tmp = null != id.id;
        if (tmp) {
          tmp = id.id !== favorite.parentId;
        }
        return tmp;
      });
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      if (null != favorite.parentId) {
        obj = { label: null, destinations: null, perform: null };
        const intl = tmp(1114).intl;
        obj.label = intl.string(tmp(1114).t.FAplms);
        let tmp8 = mapped;
        if (tmp12) {
          obj = { id: null, label: null };
          const intl2 = tmp(1114).intl;
          obj.label = intl2.string(tmp(1114).t.GSfOoo);
          const items = [obj];
          HermesBuiltin.arraySpread(mapped, 1);
          tmp8 = items;
        }
        obj.destinations = tmp8;
        obj.perform = tmp6;
        let tmp7 = obj;
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
};