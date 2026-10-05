// discord_app/modules/user_profile/WidgetStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import UserStore from "../../stores/UserStore.tsx";
import UserProfileStore from "UserProfileStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map, map1, uniqueKey;

const metroRequire = null;
const metroImportDefault = null;
let c8 = false;
let closure_9 = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] };
let c10 = false;
let c11 = false;
let c12 = false;
const Store = get_initializedDefault.Store;
class WidgetStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getPendingWidgets() {
    return c6;
  }
  getSaveablePendingWidgets() {
    let found1 = null;
    if (null != _null) {
      const mapped = _null.map((isUpdatable) => {
        let tmp = isUpdatable;
        let closure_0 = isUpdatable;
        if (!isUpdatable.isUpdatable()) {
          let found;
          if (_null2 != null) {
            found = _null2.find((getUniqueKey) => {
              uniqueKey = getUniqueKey.getUniqueKey();
              return uniqueKey === uniqueKey.getUniqueKey();
            });
          }
          tmp = found;
        }
        return tmp;
      });
      let found = mapped.filter(GlobalUtils.isNotNullish);
      found1 = found.filter((isDiscardable) => !isDiscardable.isDiscardable());
    }
    return found1;
  }
  hasPendingChanges() {
    let tmp = null !== c6;
    if (tmp) {
      let tmp3 = null === c7;
      if (!tmp3) {
        const obj = _modDef12;
        tmp3 = !obj.isEqual(c6, c7);
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getWidgetUpdates() {
    let changedWidgets = this.getSaveablePendingWidgets();
    if (null != changedWidgets) {
      if (null != _null2) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map = new Map(
          _null2.map((id) => {
            const items = [id.id, id];
            return items;
          }),
        );
        map1 = new Map(
          changedWidgets.map((id) => {
            const items = [id.id, id];
            return items;
          }),
        );
        let items = [];
        const items1 = [];
        const tmp33 = map1[Symbol.iterator]();
        while (tmp33 !== undefined) {
          let tmp5 = _slicedToArray(tmp2, 2);
          let obj = tmp5[1];
          let value = map.get(tmp5[0]);
          let isEqualResult = null != value;
          if (isEqualResult) {
            isEqualResult = obj.isEqual(tmp7);
          }
          if (!isEqualResult) {
            let arr = items.push(obj);
          }
          continue;
        }
        for (const item10029 of tmp30) {
          let tmp16 = _slicedToArray(item10029, 2);
          let tmp17 = tmp16[1];
          if (!map1.has(tmp16[0])) {
            let arr2 = items1.push(tmp17);
          }
          continue;
        }
        let num = 0;
        let flag = false;
        if (0 < changedWidgets.length) {
          while (true) {
            let tmp20 = changedWidgets[num];
            let id;
            if (tmp20 != null) {
              id = tmp20.id;
            }
            let tmp24 = _null2[num];
            let id1;
            if (tmp24 != null) {
              id1 = tmp24.id;
            }
            flag = true;
            if (id !== id1) {
              break;
            } else {
              let sum = num + 1;
              num = sum;
              flag = false;
              if (sum >= changedWidgets.length) {
                break;
              }
            }
          }
        }
        return { changedWidgets: items, removedWidgets: items1, hasOrderChanges: flag };
      }
    }
    if (changedWidgets == null) {
      changedWidgets = [];
    }
    return { changedWidgets, removedWidgets: [], hasOrderChanges: false };
  }
  getChangedWidgets() {
    return this.getWidgetUpdates().changedWidgets;
  }
  getRemovedWidgets() {
    return this.getWidgetUpdates().removedWidgets;
  }
  hasUnsavedChanges() {
    const widgetUpdates = this.getWidgetUpdates();
    let tmp2 = widgetUpdates.changedWidgets.length > 0;
    const hasOrderChanges = widgetUpdates.hasOrderChanges;
    if (!tmp2) {
      tmp2 = widgetUpdates.removedWidgets.length > 0;
    }
    if (!tmp2) {
      tmp2 = hasOrderChanges;
    }
    return tmp2;
  }
  canSaveChanges() {
    const saveablePendingWidgets = this.getSaveablePendingWidgets();
    const everyResult = null != saveablePendingWidgets && saveablePendingWidgets.every((isValid) => isValid.isValid());
    return everyResult;
  }
}
const prototype = WidgetStore.prototype;
Object.defineProperty(prototype, "isSubmitting", {
  get: function isSubmitting() {
    return c8;
  },
  set: undefined,
});
Object.defineProperty(prototype, "suggestedFetchError", {
  get: function suggestedFetchError() {
    return c10;
  },
  set: undefined,
});
Object.defineProperty(prototype, "suggestedFetchIsLoading", {
  get: function suggestedFetchIsLoading() {
    return c11;
  },
  set: undefined,
});
Object.defineProperty(prototype, "suggestedFetchAttempted", {
  get: function suggestedFetchAttempted() {
    return c12;
  },
  set: undefined,
});
Object.defineProperty(prototype, "suggestedGameIds", {
  get: function suggestedGameIds() {
    return closure_9;
  },
  set: undefined,
});
let obj = {
  WIDGET_PENDING_SET: function handleSetPendingWidgets(widgets) {
    const widgets2 = widgets.widgets;
    if (null === c7) {
      const currentUser = UserStore.getCurrentUser();
      if (null != currentUser) {
        const userProfile = UserProfileStore.getUserProfile(currentUser.id);
        widgets = undefined;
        if (userProfile != null) {
          widgets = userProfile.widgets;
        }
        if (widgets == null) {
          widgets = [];
        }
        c7 = widgets;
      }
    }
  },
  WIDGET_PENDING_SAVE_START: function handleSavePendingWidgetsStart() {
    c8 = true;
  },
  WIDGET_PENDING_SAVE_SUCCESS: function handleSavePendingWidgetsSuccess() {
    c8 = false;
    if (null !== c6) {
      let c7 = null;
      c6 = null;
    }
  },
  WIDGET_PENDING_SAVE_FAILURE: function handleSavePendingWidgetsFailure() {
    c8 = false;
  },
  WIDGET_SUGGESTED_FETCH_SUCCESS: function handleSetSuggestedGameIds(arg0) {
    ({
      suggestedGamesIds: closure_9.suggestedGamesIds,
      suggestedWishlistGamesIds: closure_9.suggestedWishlistGamesIds,
    } = arg0);
    c11 = false;
    c10 = false;
  },
  WIDGET_SUGGESTED_FETCH_FAILURE: function handleSetSuggestedFetchFailure() {
    c10 = true;
    c11 = false;
  },
  WIDGET_SUGGESTED_FETCH_START: function handleSetSuggestedFetchStart() {
    c11 = true;
    c10 = false;
    c12 = true;
  },
  WIDGET_PENDING_CLEAR: function handleClearPendingWidgets() {
    let c6 = null;
    let c7 = null;
  },
  WIDGET_SUGGESTED_REMOVE_GAME: function handleRemoveApplicationIdFromSuggestedGames(applicationId) {
    applicationId = applicationId.applicationId;
    const suggestedGamesIds = closure_9.suggestedGamesIds;
    closure_9.suggestedGamesIds = suggestedGamesIds.filter((item) => item !== applicationId);
    const prop = closure_9.suggestedWishlistGamesIds;
    closure_9.suggestedWishlistGamesIds = prop.filter((item) => item !== applicationId);
  },
};
const widgetStore = new WidgetStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/user_profile/WidgetStore.tsx");

export default widgetStore;
