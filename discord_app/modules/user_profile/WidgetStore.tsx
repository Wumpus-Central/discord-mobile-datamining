// discord_app/modules/user_profile/WidgetStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import createUserWidgetFromServer from "UserProfileStore.tsx";

require = fn;
let c6 = null;
let c7 = null;
let c8 = false;
let closure_9 = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] };
let c10 = false;
let c11 = false;
let c12 = false;
const Store = initializeDefault.Store;
class WidgetStore extends Store {
}
const prototype = WidgetStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4);
};
prototype["getPendingWidgets"] = function getPendingWidgets() {
  return c6;
};
prototype["getSaveablePendingWidgets"] = function getSaveablePendingWidgets() {
  let found1 = null;
  if (null != _null) {
    const mapped = _null.map((item, index) => {
      let tmp = item;
      closure_0 = item;
      if (!item.isUpdatable()) {
        let found;
        if (closure_7 != null) {
          found = closure_7.find((item, index) => {
            const uniqueKey = item.getUniqueKey();
            return uniqueKey === item.getUniqueKey();
          });
        }
        tmp = found;
      }
      return tmp;
    });
    let found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
    found1 = found.filter((item, index) => !item.isDiscardable());
  }
  return found1;
};
prototype["hasPendingChanges"] = function hasPendingChanges() {
  let tmp = null !== c6;
  if (tmp) {
    let tmp3 = null === c7;
    if (!tmp3) {
      tmp3 = !applyDefault.isEqual(c6, c7);
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
      const map = new Map(_null2.map((item, index) => {
        const items = [item.id, item];
        return items;
      }));
      const _Map2 = Map;
      map1 = new Map(changedWidgets.map((item, index) => {
        const items = [item.id, item];
        return items;
      }));
      let items = [];
      const items1 = [];
      const tmp37 = map1[Symbol.iterator]();
      while (tmp37 !== undefined) {
        let tmp5 = callback(tmp2, 2);
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
      for (const item10029 of tmp32) {
        let tmp16 = callback(item10029, 2);
        let tmp17 = tmp16[1];
        if (!map1.has(tmp16[0])) {
          arr = items1.push(tmp17);
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
    everyResult = saveablePendingWidgets.every((item, index) => item.isValid());
  }
  return everyResult;
};
Object.defineProperty(prototype, "isSubmitting", {
  get: function isSubmitting() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchError", {
  get: function suggestedFetchError() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchIsLoading", {
  get: function suggestedFetchIsLoading() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchAttempted", {
  get: function suggestedFetchAttempted() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedGameIds", {
  get: function suggestedGameIds() {
    return closure_9;
  },
  set: undefined
});
const widgetStore = new WidgetStore(dispatcherDefault, {
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
    c8 = true;
  },
  WIDGET_PENDING_SAVE_SUCCESS: function handleSavePendingWidgetsSuccess() {
    c8 = false;
    if (null !== c6) {
      c7 = null;
      c6 = null;
    }
  },
  WIDGET_PENDING_SAVE_FAILURE: function handleSavePendingWidgetsFailure() {
    c8 = false;
  },
  WIDGET_SUGGESTED_FETCH_SUCCESS: function handleSetSuggestedGameIds(arg0) {
    ({ suggestedGamesIds: closure_9.suggestedGamesIds, suggestedWishlistGamesIds: closure_9.suggestedWishlistGamesIds } = arg0);
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
    c6 = null;
    c7 = null;
  },
  WIDGET_SUGGESTED_REMOVE_GAME: function handleRemoveApplicationIdFromSuggestedGames(applicationId) {
    applicationId = applicationId.applicationId;
    const suggestedGamesIds = closure_9.suggestedGamesIds;
    closure_9.suggestedGamesIds = suggestedGamesIds.filter((item, index) => item !== applicationId);
    const prop = closure_9.suggestedWishlistGamesIds;
    closure_9.suggestedWishlistGamesIds = prop.filter((item, index) => item !== applicationId);
  }
});
const result = require("obj132").fileFinishedImporting("modules/user_profile/WidgetStore.tsx");

export default widgetStore;