import { USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH } from "../../../discord_common/js/shared/shared-constants/ClipsGalleryLimits.tsx";
import { GAME_WIDGET_LIMITS_BY_TYPE } from "../../../discord_common/js/shared/shared-constants/GameWidgetLimits.tsx";
import { WidgetGameTag } from "../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx";
import { isAgeRestrictedContentClassification } from "../content_classification/utils.tsx";
import { convertClip } from "UserProfileClipsGalleryWidgetTypes.tsx";
import { items } from "UserProfileGameWidgetTypes.tsx";
import { isFieldEmpty } from "UserProfilePersonalWidget.tsx";
import { WidgetActionCreators } from "WidgetActionCreators.tsx";
// discord_app/modules/user_profile/WidgetUtils.tsx
import _slicedToArray from "_slicedToArray";
import mergeGuildAvatar from "mergeGuildAvatar";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import initialize from "initialize";
import items from "items";

let c9;
let error;
let metroImportAll;
const require = arg1;
function findGameWidget(widgetType) {
  const _require = widgetType;
  if (initialize.hasPendingChanges()) {
    let pendingWidgets = initialize.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = authStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = authStore2.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  const found = widgets.filter(_items.isGameWidget);
  let found1 = found.find((type) => type.type === closure_0);
  if (found1 == null) {
    found1 = null;
  }
  return found1;
}
function replaceWidgetInList(baseGameWidget) {
  let closure_0 = baseGameWidget;
  if (initialize.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = authStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = authStore2.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  const findIndexResult = widgets.findIndex((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === baseGameWidget.getUniqueKey();
  });
  if (-1 === findIndexResult) {
    const items = [baseGameWidget];
    HermesBuiltin.arraySpread(tmp8, 1);
    return items;
  } else {
    const items1 = [];
    HermesBuiltin.arraySpread(tmp8, 0);
    items1[findIndexResult] = baseGameWidget;
    return items1;
  }
  obj = initialize;
}
({ WIDGET_TITLES_BY_TYPE: error, WIDGETS_SUPPORTING_COMMENT: metroImportAll, WIDGETS_SUPPORTING_TAGS: c9 } = items);
let result = require("createUserWidgetFromServer").fileFinishedImporting("modules/user_profile/WidgetUtils.tsx");

export const getWidgetTitle = function getWidgetTitle(widget) {
  return dependencyMap[widget.type](widget);
};
export const getGameWidgetSubtitle = function getGameWidgetSubtitle(games, showEditingControls) {
  if (showEditingControls.showEditingControls) {
    if (games.games.length > 0) {
      if (1 === GAME_WIDGET_LIMITS_BY_TYPE /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE[games.type]) {
        const intl2 = tmp(1236).intl;
        let stringResult = intl2.string(tmp(1236).t.wiXdEa);
      } else {
        const intl = tmp(1236).intl;
        const obj = { numGames: null };
        obj[0] = tmp(6992).GAME_WIDGET_LIMITS_BY_TYPE[games.type];
        stringResult = intl.format(tmp(1236).t["zR1+0/"], obj);
      }
      return stringResult;
    }
  }
};
export const widgetSupportsComment = function widgetSupportsComment(arg0) {
  return closure_8.includes(arg0);
};
export const widgetSupportsTags = function widgetSupportsTags(arg0) {
  return closure_9.includes(arg0);
};
export const widgetMaxGames = function widgetMaxGames(arg0) {
  let num = 0;
  if (arg0 in GAME_WIDGET_LIMITS_BY_TYPE /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = GAME_WIDGET_LIMITS_BY_TYPE /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE[arg0];
  }
  return num;
};
export const getRandomElement = function getRandomElement(arg0) {
  return arg0[Math.floor(Math, Math.random(Math) * arg0.length)];
};
export const getRandomElements = function getRandomElements(arg0, arg1) {
  const items = [...arg0];
  const sorted = items.sort(() => 0.5 - Math.random());
  return sorted.slice(0, arg1);
};
export const getSavedWidgets = function getSavedWidgets() {
  const currentUser = authStore.getCurrentUser();
  let userProfile = null;
  if (null != currentUser) {
    userProfile = authStore2.getUserProfile(currentUser.id);
  }
  let widgets;
  if (userProfile != null) {
    widgets = userProfile.widgets;
  }
  if (widgets == null) {
    widgets = [];
  }
  return widgets;
};
export { replaceWidgetInList };
export const addWidgetToPending = function addWidgetToPending(arg0) {
  let closure_0 = arg0;
  if (initialize.hasPendingChanges()) {
    let pendingWidgets = initialize.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = authStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = authStore2.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  if (null == widgets.find((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === uniqueKey.getUniqueKey();
  })) {
    const items = [arg0];
    HermesBuiltin.arraySpread(tmp7, 1);
    WidgetActionCreators.setPendingWidgets(items);
    const obj2 = WidgetActionCreators;
  }
};
export const removeWidgetFromPending = function removeWidgetFromPending(arg0) {
  let closure_0 = arg0;
  if (initialize.hasPendingChanges()) {
    let pendingWidgets = initialize.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = authStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = authStore2.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  const found = widgets.filter((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey !== uniqueKey.getUniqueKey();
  });
  WidgetActionCreators.setPendingWidgets(found);
};
export const addPendingClipToClipsGalleryWidget = function addPendingClipToClipsGalleryWidget(arg0) {
  let obj = initialize;
  if (initialize.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = authStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = authStore2.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((arg0) => arg0 instanceof callback(table[9]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  let clips;
  if (found != null) {
    clips = found.clips;
  }
  if (clips == null) {
    clips = [];
  }
  if (clips.length < USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH /* USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH */.USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH) {
    let id;
    if (found != null) {
      id = found.id;
    }
    obj = { id: null, clips: null };
    obj[0] = id;
    const items = [];
    items[HermesBuiltin.arraySpread(clips, 0)] = arg0;
    obj[1] = items;
    const clipsGalleryWidget = new convertClip /* convertClip */.ClipsGalleryWidget(obj);
    WidgetActionCreators.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
    const obj3 = WidgetActionCreators;
  }
};
export const updatePersonalWidget = function updatePersonalWidget(arg0) {
  if (initialize.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = authStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = authStore2.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((arg0) => arg0 instanceof callback(table[11]).UserProfilePersonalWidget);
  if (found == null) {
    found = null;
  }
  if (found == null) {
    found = isFieldEmpty /* isFieldEmpty */.createDefaultPersonalWidget();
    const obj2 = isFieldEmpty /* isFieldEmpty */;
  }
  obj = initialize;
  const tmp = replaceWidgetInList;
  const tmpResult = replaceWidgetInList(arg0(found));
  WidgetActionCreators.setPendingWidgets(tmpResult);
};
export const updatePendingGameTags = function updatePendingGameTags(widgetType, arg1, tags) {
  const _require = arg1;
  if (tags.length <= Object.values(_WidgetGameTag.WidgetGameTag).length) {
    const tmp5 = findGameWidget(widgetType);
    if (null != tmp5) {
      const games = tmp5.games;
      const found = games.find((applicationId) => applicationId.applicationId === closure_0);
      if (null != found) {
        let obj = {};
        const merged = Object.assign(found);
        obj.tags = tags;
        const games1 = tmp5.games;
        const mapped = games1.map((applicationId) => {
          let tmp = applicationId;
          if (applicationId.applicationId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        obj = {};
        const merged1 = Object.assign(tmp5);
        obj.games = mapped;
        const baseGameWidget = new _items.BaseGameWidget(obj);
        const tmp21 = replaceWidgetInList(baseGameWidget);
        obj(6996).setPendingWidgets(tmp21);
        const obj3 = obj(6996);
      }
    }
  }
};
export const removeTagFromGame = function removeTagFromGame(widgetType) {
  let _require = arg1;
  let obj = arg2;
  const tmp2 = findGameWidget(widgetType);
  if (null != tmp2) {
    const games = tmp2.games;
    const found = games.find((applicationId) => applicationId.applicationId === closure_0);
    if (null != found) {
      if (null != found.tags) {
        if (0 !== found.tags.length) {
          const tags = found.tags;
          let found1 = tags.filter((arg0) => arg0 !== obj);
          if (found1.length <= 0) {
            found1 = [];
          }
          _require = arg1;
          const _Object = Object;
          if (found1.length <= Object.values(_WidgetGameTag.WidgetGameTag).length) {
            const tmpResult = findGameWidget(tmp2.type);
            if (null != tmpResult) {
              const games1 = tmpResult.games;
              const found2 = games1.find((applicationId) => applicationId.applicationId === closure_0);
              if (null != found2) {
                obj = {};
                const merged = Object.assign(found2);
                obj.tags = found1;
                const games2 = tmpResult.games;
                const mapped = games2.map((applicationId) => {
                  let tmp = applicationId;
                  if (applicationId.applicationId === closure_0) {
                    tmp = obj;
                  }
                  return tmp;
                });
                obj = {};
                const merged1 = Object.assign(tmpResult);
                obj.games = mapped;
                const baseGameWidget = new tmp4(6991).BaseGameWidget(obj);
                const tmp22 = replaceWidgetInList(baseGameWidget);
                obj(6996).setPendingWidgets(tmp22);
                const obj3 = obj(6996);
              }
            }
          }
          tmp4 = _require;
        }
      }
    }
  }
};
export const updatePendingGameComment = function updatePendingGameComment(widgetType, arg1, comment) {
  const _require = arg1;
  let tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const games = tmp.games;
    const found = games.find((applicationId) => applicationId.applicationId === closure_0);
    if (null != found) {
      if (comment !== found.comment) {
        let obj = {};
        const merged = Object.assign(found);
        obj.comment = comment;
        const games1 = tmp.games;
        const mapped = games1.map((applicationId) => {
          let tmp = applicationId;
          if (applicationId.applicationId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        obj = {};
        const merged1 = Object.assign(tmp);
        obj.games = mapped;
        const baseGameWidget = new _items.BaseGameWidget(obj);
        const tmp19 = replaceWidgetInList(baseGameWidget);
        obj(6996).setPendingWidgets(tmp19);
        const obj3 = obj(6996);
      }
    }
  }
};
export const addPendingGameToWidget = function addPendingGameToWidget(ignoreMaxGames) {
  let game;
  let widgetType;
  ({ widgetType, game } = ignoreMaxGames);
  let flag = ignoreMaxGames.ignoreMaxGames;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = findGameWidget(widgetType);
  let num = 0;
  if (widgetType in game(6992).GAME_WIDGET_LIMITS_BY_TYPE) {
    num = tmp2(6992).GAME_WIDGET_LIMITS_BY_TYPE[widgetType];
  }
  if (null != tmp) {
    const games = tmp.games;
    let num2;
    if (games != null) {
      num2 = games.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let games1 = tmp.games;
    if (games1 == null) {
      games1 = [];
    }
  }
  let obj = { applicationId: game.applicationId, comment: game.comment, tags: game.tags };
  if (null != tmp) {
    const items = [obj];
    let games2 = tmp.games;
    if (games2 == null) {
      games2 = [];
    }
    HermesBuiltin.arraySpread(games2, 1);
    let items1 = items;
  } else {
    items1 = [obj];
  }
  let tmp8 = tmp;
  if (tmp == null) {
    obj = { type: null };
    obj[0] = widgetType;
    tmp8 = obj;
  }
  obj = {};
  const merged = Object.assign(tmp8);
  obj.games = items1;
  const baseGameWidget = new tmp2(6991).BaseGameWidget(obj);
  const tmp7 = replaceWidgetInList;
  const tmp7Result = replaceWidgetInList(baseGameWidget);
  WidgetActionCreators.setPendingWidgets(tmp7Result);
  const useGame = tmp2(7002).useGame;
  const items2 = [game.applicationId];
  const many = useGame.fetchMany(items2);
};
export const reorderWidgets = function reorderWidgets(arg0, arg1) {
  if (arg0 !== arg1) {
    if (initialize.hasPendingChanges()) {
      let pendingWidgets = obj2.getPendingWidgets();
      if (pendingWidgets == null) {
        pendingWidgets = [];
      }
      let widgets = pendingWidgets;
    } else {
      const currentUser = authStore.getCurrentUser();
      let userProfile = null;
      if (null != currentUser) {
        userProfile = authStore2.getUserProfile(currentUser.id);
      }
      widgets = undefined;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
        widgets = [];
      }
    }
    if (arg0 >= 0) {
      if (arg0 < widgets.length) {
        if (arg1 >= 0) {
          if (arg1 < widgets.length) {
            const items = [];
            HermesBuiltin.arraySpread(widgets, 0);
            items.splice(arg1, 0, callback(items.splice(arg0, 1), 1)[0]);
            WidgetActionCreators.setPendingWidgets(items);
            const obj = WidgetActionCreators;
          }
        }
      }
    }
    obj2 = initialize;
  }
};
export const reorderGamesInWidget = function reorderGamesInWidget(widgetType) {
  const tmp = findGameWidget(widgetType);
  if (null != tmp) {
    if (null != tmp.games) {
      if (arg1 !== arg2) {
        const items = [];
        HermesBuiltin.arraySpread(tmp.games, 0);
        if (arg1 >= 0) {
          if (arg1 < items.length) {
            if (arg2 >= 0) {
              if (arg2 < items.length) {
                items.splice(arg2, 0, callback(items.splice(arg1, 1), 1)[0]);
                const obj = {};
                const merged = Object.assign(tmp);
                obj.games = items;
                const baseGameWidget = new items /* items */.BaseGameWidget(obj);
                const tmp19 = replaceWidgetInList(baseGameWidget);
                WidgetActionCreators.setPendingWidgets(tmp19);
                const obj2 = WidgetActionCreators;
              }
            }
          }
        }
      }
    }
  }
};
export const removePendingGameFromWidget = function removePendingGameFromWidget(widgetType) {
  const _require = arg1;
  let merged = findGameWidget(widgetType);
  if (null != merged) {
    const found = null != merged.games ? merged.games : [].filter((applicationId) => applicationId.applicationId !== closure_0);
    const obj = {};
    merged = Object.assign(merged);
    obj.games = found;
    const baseGameWidget = new _items.BaseGameWidget(obj);
    const arr = null != merged.games ? merged.games : [];
    const tmp13 = replaceWidgetInList(baseGameWidget);
    WidgetActionCreators.setPendingWidgets(tmp13);
    const obj2 = WidgetActionCreators;
  }
};
export const isGameLimitReached = function isGameLimitReached(type) {
  type = type.type;
  let num = 0;
  if (type in GAME_WIDGET_LIMITS_BY_TYPE /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = GAME_WIDGET_LIMITS_BY_TYPE /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE[type];
  }
  return type.games.length >= num;
};
export const areWidgetGamesEqual = function areWidgetGamesEqual(games, games2, type) {
  let closure_0 = games2;
  let closure_1 = type;
  return games.length === games2.length && games.every((applicationId) => {
    let games2;
    let flag = false;
    if (applicationId.applicationId === games2[arg1].applicationId) {
      if (!outer1_8.includes(tmp2)) {
        flag = true;
        if (outer1_9.includes(tmp2)) {
          const tags = applicationId.tags;
          let tmp10 = null;
          if (null != tags) {
            tmp10 = null;
            if ("" !== tags) {
              const _Array3 = Array;
              if (!Array.isArray(tags)) {
                tmp10 = tags;
              } else {
                tmp10 = null;
              }
            }
          }
          const tags1 = tmp.tags;
          let tmp12 = null;
          if (null != tags1) {
            tmp12 = null;
            if ("" !== tags1) {
              const _Array4 = Array;
              if (!Array.isArray(tags1)) {
                tmp12 = tags1;
              } else {
                tmp12 = null;
              }
            }
          }
          games2 = tmp12;
          flag = false;
          if (null === tmp10 === null === tmp12) {
            flag = true;
            if (null !== tmp10) {
              flag = true;
              if (null !== tmp12) {
                flag = false;
                if (tmp10.length === tmp12.length) {
                  flag = true;
                  if (!tmp10.every((arg0, arg1) => arg0 === _undefined[arg1])) {
                    flag = false;
                  }
                }
              }
            }
          }
        }
      } else {
        const comment = applicationId.comment;
        let tmp4 = null;
        if (null != comment) {
          tmp4 = null;
          if ("" !== comment) {
            const _Array = Array;
            if (!Array.isArray(comment)) {
              tmp4 = comment;
            } else {
              tmp4 = null;
            }
          }
        }
        const comment1 = tmp.comment;
        let tmp6 = null;
        if (null != comment1) {
          tmp6 = null;
          if ("" !== comment1) {
            const _Array2 = Array;
            if (!Array.isArray(comment1)) {
              tmp6 = comment1;
            } else {
              tmp6 = null;
            }
          }
        }
        flag = false;
      }
    }
    return flag;
  });
};
export const isGameAllowedInGameWidgets = function isGameAllowedInGameWidgets(contentClassification) {
  const result = isAgeRestrictedContentClassification /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.contentClassification);
  let tmp4 = !result;
  if (!result) {
    const GAME_WIDGET_BANNED_APPLICATION_IDS = GAME_WIDGET_LIMITS_BY_TYPE /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_BANNED_APPLICATION_IDS;
    tmp4 = !GAME_WIDGET_BANNED_APPLICATION_IDS.has(contentClassification.id);
  }
  return tmp4;
};