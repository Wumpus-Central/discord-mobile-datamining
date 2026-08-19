// === Module 5369: findGameWidget ===

// Module 5369 (findGameWidget)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 4786 */;
import items3 from "items" /* 5367 */;
import GAME_WIDGET_LIMITS_BY_TYPE from "GAME_WIDGET_LIMITS_BY_TYPE" /* 5368 */;
import _modDef5373 from "module_5373" /* 5373 */;
import convertClip from "convertClip" /* 5374 */;
import isFieldEmpty from "isFieldEmpty" /* 5375 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import createUserWidgetFromServer from "createUserWidgetFromServer" /* 5365 */;
import initialize from "initialize" /* 5370 */;
import items from "items" /* 5371 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH as closure_11 } from "USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH" /* 5372 */;

require = fn;
function findGameWidget(widgetType) {
  const _require = widgetType;
  if (store.hasPendingChanges()) {
    let pendingWidgets = store.getPendingWidgets();
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
  const found = widgets.filter(_require(5367).isGameWidget);
  let found1 = found.find((item, index) => item.type === closure_0);
  if (found1 == null) {
    found1 = null;
  }
  return found1;
}
function replaceWidgetInList(baseGameWidget) {
  closure_0 = baseGameWidget;
  if (store.hasPendingChanges()) {
    let pendingWidgets = store.getPendingWidgets();
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
  const findIndexResult = widgets.findIndex((item, index) => {
    const uniqueKey = item.getUniqueKey();
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
}
({ WIDGET_TITLES_BY_TYPE: error, WIDGETS_SUPPORTING_COMMENT: closure_8, WIDGETS_SUPPORTING_TAGS: c9 } = items);
let result = require("obj132").fileFinishedImporting("modules/user_profile/WidgetUtils.tsx");

export const getWidgetTitle = function getWidgetTitle(widget) {
  return dependencyMap[widget.type](widget);
};
export const getGameWidgetSubtitle = function getGameWidgetSubtitle(games, showEditingControls) {
  if (showEditingControls.showEditingControls) {
    if (games.games.length > 0) {
      if (1 === GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_LIMITS_BY_TYPE[games.type]) {
        const intl2 = getSystemLocale.intl;
        let stringResult = intl2.string(getSystemLocale.t.wiXdEa);
      } else {
        const intl = getSystemLocale.intl;
        const obj = { numGames: null };
        obj[0] = GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_LIMITS_BY_TYPE[games.type];
        stringResult = intl.format(getSystemLocale.t["zR1+0/"], obj);
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
  if (arg0 in GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_LIMITS_BY_TYPE[arg0];
  }
  return num;
};
export const getRandomElement = function getRandomElement(arg0) {
  return arg0[Math.floor(Math, Math.random(Math) * arg0.length)];
};
export const getRandomElements = function getRandomElements(arg0, arg1) {
  const items = [...arg0];
  const sorted = items.sort((arg0, arg1) => 0.5 - Math.random());
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
export const addWidgetToPending = function addWidgetToPending(type) {
  const _require = type;
  let obj = store;
  if (store.hasPendingChanges()) {
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
  if (null == widgets.find((item, index) => {
    const uniqueKey = item.getUniqueKey();
    return uniqueKey === type.getUniqueKey();
  })) {
    if (type.type === _require(5366).WidgetType.PERSONAL) {
      obj = { dismissAction: null };
      obj[0] = ContentDismissActionType.INDIRECT_ACTION;
      const result = tmp15(4196).UNSAFE_markDismissibleContentAsDismissed(tmp15(1377).DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, obj);
      const tmp15Result = tmp15(4196);
    }
    const items = [type];
    HermesBuiltin.arraySpread(tmp7, 1);
    _modDef5373.setPendingWidgets(items);
  }
};
export const removeWidgetFromPending = function removeWidgetFromPending(arg0) {
  closure_0 = arg0;
  if (store.hasPendingChanges()) {
    let pendingWidgets = store.getPendingWidgets();
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
  const found = widgets.filter((item, index) => {
    const uniqueKey = item.getUniqueKey();
    return uniqueKey !== uniqueKey.getUniqueKey();
  });
  _modDef5373.setPendingWidgets(found);
};
export const addPendingClipToClipsGalleryWidget = function addPendingClipToClipsGalleryWidget(arg0) {
  let obj = store;
  if (store.hasPendingChanges()) {
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
  let found = widgets.find((item, index) => item instanceof callback(table[14]).ClipsGalleryWidget);
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
  if (clips.length < closure_11) {
    let id;
    if (found != null) {
      id = found.id;
    }
    obj = { id: null, clips: null };
    obj[0] = id;
    const items = [];
    items[HermesBuiltin.arraySpread(clips, 0)] = arg0;
    obj[1] = items;
    const clipsGalleryWidget = new convertClip.ClipsGalleryWidget(obj);
    _modDef5373.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
  }
};
export const updateClipTitleInClipsGalleryWidget = function updateClipTitleInClipsGalleryWidget(arg0, str) {
  const _require = arg0;
  let obj = store;
  if (store.hasPendingChanges()) {
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
  let found = widgets.find((item, index) => item instanceof callback(table[14]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    importDefault = str.trim();
    obj = { id: null, clips: null };
    ({ id: obj2[0], clips } = found);
    obj[1] = clips.map((item, index) => {
      let tmp = item;
      if (item.id === closure_0) {
        const obj = {};
        const merged = Object.assign(item);
        let tmp5;
        if ("" !== closure_1) {
          tmp5 = closure_1;
        }
        obj.title = tmp5;
        tmp = obj;
      }
      return tmp;
    });
    const clipsGalleryWidget = new _require(5374).ClipsGalleryWidget(obj);
    _modDef5373.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
  }
};
export const removeClipFromClipsGalleryWidget = function removeClipFromClipsGalleryWidget(arg0) {
  const _require = arg0;
  let obj = store;
  if (store.hasPendingChanges()) {
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
  let found = widgets.find((item, index) => item instanceof callback(table[14]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    obj = { id: null, clips: null };
    ({ id: obj2[0], clips } = found);
    obj[1] = clips.filter((item, index) => item.id !== closure_0);
    const clipsGalleryWidget = new _require(5374).ClipsGalleryWidget(obj);
    _modDef5373.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
  }
};
export const updatePersonalWidget = function updatePersonalWidget(fn) {
  if (store.hasPendingChanges()) {
    let pendingWidgets = store.getPendingWidgets();
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
  let found = widgets.find((item, index) => item instanceof callback(table[15]).UserProfilePersonalWidget);
  if (found == null) {
    found = null;
  }
  if (found == null) {
    found = isFieldEmpty.createDefaultPersonalWidget();
  }
  const tmpResult = replaceWidgetInList(fn(found));
  _modDef5373.setPendingWidgets(tmpResult);
};
export const updatePendingGameTags = function updatePendingGameTags(widgetType, arg1, tags) {
  const _require = arg1;
  if (tags.length <= Object.values(_require(5377).WidgetGameTag).length) {
    const tmp5 = findGameWidget(widgetType);
    if (null != tmp5) {
      const games = tmp5.games;
      const found = games.find((item, index) => item.gameId === closure_0);
      if (null != found) {
        let obj = {};
        const merged = Object.assign(found);
        obj.tags = tags;
        const games1 = tmp5.games;
        const mapped = games1.map((item, index) => {
          let tmp = item;
          if (item.gameId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        obj = {};
        const merged1 = Object.assign(tmp5);
        obj.games = mapped;
        const baseGameWidget = new tmp(5367).BaseGameWidget(obj);
        const tmp21 = replaceWidgetInList(baseGameWidget);
        obj(5373).setPendingWidgets(tmp21);
        const obj3 = obj(5373);
      }
    }
  }
  tmp = _require;
};
export const removeTagFromGame = function removeTagFromGame(widgetType) {
  let _require = arg1;
  let obj = arg2;
  const tmp2 = findGameWidget(widgetType);
  if (null != tmp2) {
    const games = tmp2.games;
    const found = games.find((item, index) => item.gameId === closure_0);
    if (null != found) {
      if (null != found.tags) {
        if (0 !== found.tags.length) {
          const tags = found.tags;
          let found1 = tags.filter((item, index) => item !== obj);
          if (found1.length <= 0) {
            found1 = [];
          }
          _require = arg1;
          const _Object = Object;
          if (found1.length <= Object.values(_require(5377).WidgetGameTag).length) {
            const tmpResult = findGameWidget(tmp2.type);
            if (null != tmpResult) {
              const games1 = tmpResult.games;
              const found2 = games1.find((item, index) => item.gameId === closure_0);
              if (null != found2) {
                obj = {};
                const merged = Object.assign(found2);
                obj.tags = found1;
                const games2 = tmpResult.games;
                const mapped = games2.map((item, index) => {
                  let tmp = item;
                  if (item.gameId === closure_0) {
                    tmp = obj;
                  }
                  return tmp;
                });
                obj = {};
                const merged1 = Object.assign(tmpResult);
                obj.games = mapped;
                const baseGameWidget = new tmp4(5367).BaseGameWidget(obj);
                const tmp22 = replaceWidgetInList(baseGameWidget);
                obj(5373).setPendingWidgets(tmp22);
                const obj3 = obj(5373);
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
    const found = games.find((item, index) => item.gameId === closure_0);
    if (null != found) {
      if (comment !== found.comment) {
        let obj = {};
        const merged = Object.assign(found);
        obj.comment = comment;
        const games1 = tmp.games;
        const mapped = games1.map((item, index) => {
          let tmp = item;
          if (item.gameId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        obj = {};
        const merged1 = Object.assign(tmp);
        obj.games = mapped;
        const baseGameWidget = new _require(5367).BaseGameWidget(obj);
        const tmp19 = replaceWidgetInList(baseGameWidget);
        obj(5373).setPendingWidgets(tmp19);
        const obj3 = obj(5373);
      }
    }
  }
};
export const addPendingGameToWidget = function addPendingGameToWidget(ignoreMaxGames) {
  ({ widgetType, game } = ignoreMaxGames);
  let flag = ignoreMaxGames.ignoreMaxGames;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = findGameWidget(widgetType);
  if (widgetType in game(5368).GAME_WIDGET_LIMITS_BY_TYPE) {
    game(5368).GAME_WIDGET_LIMITS_BY_TYPE[widgetType];
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
  let obj = { gameId: game.gameId, comment: game.comment, tags: game.tags };
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
  const baseGameWidget = new game(5367).BaseGameWidget(obj);
  const tmp7Result = replaceWidgetInList(baseGameWidget);
  _modDef5373.setPendingWidgets(tmp7Result);
  const useGame = game(5378).useGame;
  const items2 = [game.gameId];
  const many = useGame.fetchMany(items2);
};
export const reorderWidgets = function reorderWidgets(arg0, arg1) {
  if (arg0 !== arg1) {
    if (store.hasPendingChanges()) {
      let pendingWidgets = store.getPendingWidgets();
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
            _modDef5373.setPendingWidgets(items);
          }
        }
      }
    }
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
                const baseGameWidget = new items3.BaseGameWidget(obj);
                const tmp19 = replaceWidgetInList(baseGameWidget);
                _modDef5373.setPendingWidgets(tmp19);
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
    const found = null != merged.games ? merged.games : [].filter((item, index) => item.gameId !== closure_0);
    const obj = {};
    merged = Object.assign(merged);
    obj.games = found;
    const baseGameWidget = new _require(5367).BaseGameWidget(obj);
    const tmp13 = replaceWidgetInList(baseGameWidget);
    _modDef5373.setPendingWidgets(tmp13);
  }
};
export const isGameLimitReached = function isGameLimitReached(type) {
  type = type.type;
  let num = 0;
  if (type in GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_LIMITS_BY_TYPE[type];
  }
  return type.games.length >= num;
};
export const areWidgetGamesEqual = function areWidgetGamesEqual(games, games2, type) {
  closure_0 = games2;
  closure_1 = type;
  return games.length === games2.length && games.every((item, index) => {
    games2 = undefined;
    let flag = false;
    if (item.gameId === games2[index].gameId) {
      if (!closure_1_8.includes(closure_1)) {
        flag = true;
        if (closure_1_9.includes(closure_1)) {
          const tags = item.tags;
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
                  if (!tmp10.every((item, index) => item === _null[index])) {
                    flag = false;
                  }
                }
              }
            }
          }
        }
      } else {
        const comment = item.comment;
        if (null != comment) {
          if ("" !== comment) {
            const _Array = Array;
          }
        }
        const comment1 = tmp.comment;
        if (null != comment1) {
          if ("" !== comment1) {
            const _Array2 = Array;
          }
        }
        flag = false;
      }
    }
    return flag;
  });
};
export const isGameAllowedInGameWidgets = function isGameAllowedInGameWidgets(contentClassification) {
  const result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(contentClassification.contentClassification);
  let tmp4 = !result;
  if (!result) {
    const GAME_WIDGET_BANNED_APPLICATION_IDS = GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_BANNED_APPLICATION_IDS;
    tmp4 = !GAME_WIDGET_BANNED_APPLICATION_IDS.has(contentClassification.id);
  }
  return tmp4;
};