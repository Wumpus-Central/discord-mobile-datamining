// === Module 11263: useFavoritesGuildMoveToCategoryAction ===

// Module 11263 (useFavoritesGuildMoveToCategoryAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10480 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildMoveToCategoryAction.tsx");

export default function useFavoritesGuildMoveToCategoryAction(id) {
  const isFavoritesGuildSelected = favorite(10481).useIsFavoritesGuildSelected();
  let obj = favorite(10481);
  favorite = favorite(10481).useFavorite(id.id);
  const obj2 = favorite(10481);
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
        const obj3 = { label: null, destinations: null, perform: null };
        const intl = tmp(1115).intl;
        obj3.label = intl.string(tmp(1115).t.FAplms);
        let tmp8 = mapped;
        if (tmp12) {
          const obj4 = { id: null, label: null };
          const intl2 = tmp(1115).intl;
          obj4.label = intl2.string(tmp(1115).t.GSfOoo);
          const items = [obj4];
          HermesBuiltin.arraySpread(mapped, 1);
          tmp8 = items;
        }
        obj3.destinations = tmp8;
        obj3.perform = tmp6;
        let tmp7 = obj3;
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
};