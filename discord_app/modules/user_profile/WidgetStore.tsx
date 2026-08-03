import _slicedToArray from "_slicedToArray";
import mergeGuildAvatar from "mergeGuildAvatar";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import { Store } from "initialize";

let c5 = null;
let c6 = null;
let c7 = false;
let closure_8 = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] };
let c9 = false;
let c10 = false;
let c11 = false;
class WidgetStore extends Store {
}
const prototype = WidgetStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar);
};
prototype["getPendingWidgets"] = function getPendingWidgets() {
  return c5;
};
prototype["getSaveablePendingWidgets"] = function getSaveablePendingWidgets() {
  let found = null;
  if (null != _null) {
    found = _null.filter((isDiscardable) => !isDiscardable.isDiscardable());
  }
  return found;
};
prototype["hasPendingChanges"] = function hasPendingChanges() {
  let tmp = null !== c5;
  if (tmp) {
    let tmp3 = null === c6;
    if (!tmp3) {
      tmp3 = !importDefault(12).isEqual(c5, c6);
      const obj = importDefault(12);
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getWidgetUpdates"] = function getWidgetUpdates() {
  let changedWidgets = this.getSaveablePendingWidgets();
  if (null != changedWidgets) {
    if (null != _null2) {
      const _Map = Map;
      const map = new Map(_null2.map((id) => {
        const items = [id.id, id];
        return items;
      }));
      const _Map2 = Map;
      const map1 = new Map(changedWidgets.map((id) => {
        const items = [id.id, id];
        return items;
      }));
      let items = [];
      const items1 = [];
      const tmp37 = map1[Symbol.iterator]();
      while (tmp37 !== undefined) {
        let tmp4 = callback;
        let tmp5 = callback(tmp2, 2);
        let obj = tmp5[1];
        let value = map.get(tmp5[0]);
        let isEqualResult = null != value;
        if (isEqualResult) {
          let tmp9 = obj;
          let tmp10 = value;
          isEqualResult = obj.isEqual(tmp7);
        }
        if (!isEqualResult) {
          let tmp11 = obj;
          let arr = items.push(obj);
        }
        continue;
      }
      for (const item10029 of tmp32) {
        let tmp15 = callback;
        let tmp16 = callback(item10029, 2);
        let tmp17 = tmp16[1];
        if (!map1.has(tmp16[0])) {
          let tmp18 = tmp17;
          arr = items1.push(tmp17);
        }
        continue;
      }
      let num = 0;
      let flag = false;
      if (0 < changedWidgets.length) {
        while (true) {
          let tmp20 = changedWidgets[num];
          let tmp21 = num;
          let id;
          if (tmp20 != null) {
            id = tmp20.id;
          }
          let tmp23 = _null2;
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
      obj = { changedWidgets: null, removedWidgets: null, hasOrderChanges: null };
      obj[0] = items;
      obj[1] = items1;
      obj[2] = flag;
      return obj;
    }
  }
  if (changedWidgets == null) {
    changedWidgets = [];
  }
  return { changedWidgets, removedWidgets: [], hasOrderChanges: false };
};
prototype["getChangedWidgets"] = function getChangedWidgets() {
  return this.getWidgetUpdates().changedWidgets;
};
prototype["getRemovedWidgets"] = function getRemovedWidgets() {
  return this.getWidgetUpdates().removedWidgets;
};
prototype["hasUnsavedChanges"] = function hasUnsavedChanges() {
  const widgetUpdates = this.getWidgetUpdates();
  let hasOrderChanges = widgetUpdates.changedWidgets.length > 0;
  if (!hasOrderChanges) {
    hasOrderChanges = widgetUpdates.removedWidgets.length > 0;
  }
  if (!hasOrderChanges) {
    hasOrderChanges = widgetUpdates.hasOrderChanges;
  }
  return hasOrderChanges;
};
prototype["canSaveChanges"] = function canSaveChanges() {
  const saveablePendingWidgets = this.getSaveablePendingWidgets();
  let everyResult = null != saveablePendingWidgets;
  if (everyResult) {
    everyResult = saveablePendingWidgets.every((isValid) => isValid.isValid());
  }
  return everyResult;
};
Object.defineProperty(prototype, "isSubmitting", {
  get: function isSubmitting() {
    return c7;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchError", {
  get: function suggestedFetchError() {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchIsLoading", {
  get: function suggestedFetchIsLoading() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchAttempted", {
  get: function suggestedFetchAttempted() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedGameIds", {
  get: function suggestedGameIds() {
    return closure_8;
  },
  set: undefined
});
const widgetStore = new WidgetStore(require("dispatcher"), {
  WIDGET_PENDING_SET: function handleSetPendingWidgets(widgets) {
    widgets = widgets.widgets;
    if (null === widgets) {
      currentUser = currentUser.getCurrentUser();
      if (null != currentUser) {
        userProfile = userProfile.getUserProfile(currentUser.id);
        widgets = undefined;
        if (userProfile != null) {
          widgets = userProfile.widgets;
        }
        if (widgets == null) {
          widgets = [];
        }
      }
    }
  },
  WIDGET_PENDING_SAVE_START: function handleSavePendingWidgetsStart() {
    let c7 = true;
  },
  WIDGET_PENDING_SAVE_SUCCESS: function handleSavePendingWidgetsSuccess() {
    let c7 = false;
    if (null !== c5) {
      let c6 = null;
      c5 = null;
    }
  },
  WIDGET_PENDING_SAVE_FAILURE: function handleSavePendingWidgetsFailure() {
    let c7 = false;
  },
  WIDGET_SUGGESTED_FETCH_SUCCESS: function handleSetSuggestedGameIds(arg0) {
    ({ suggestedGamesIds: closure_8.suggestedGamesIds, suggestedWishlistGamesIds: closure_8.suggestedWishlistGamesIds } = arg0);
    let c10 = false;
    let c9 = false;
  },
  WIDGET_SUGGESTED_FETCH_FAILURE: function handleSetSuggestedFetchFailure() {
    let c9 = true;
    let c10 = false;
  },
  WIDGET_SUGGESTED_FETCH_START: function handleSetSuggestedFetchStart() {
    let c10 = true;
    let c9 = false;
    let c11 = true;
  },
  WIDGET_PENDING_CLEAR: function handleClearPendingWidgets() {
    let c5 = null;
    let c6 = null;
  },
  WIDGET_SUGGESTED_REMOVE_GAME: function handleRemoveApplicationIdFromSuggestedGames(applicationId) {
    applicationId = applicationId.applicationId;
    const suggestedGamesIds = closure_8.suggestedGamesIds;
    closure_8.suggestedGamesIds = suggestedGamesIds.filter((arg0) => arg0 !== applicationId);
    const prop = closure_8.suggestedWishlistGamesIds;
    closure_8.suggestedWishlistGamesIds = prop.filter((arg0) => arg0 !== applicationId);
  }
});
const result = require("createUserWidgetFromServer").fileFinishedImporting("modules/user_profile/WidgetStore.tsx");

export default widgetStore;