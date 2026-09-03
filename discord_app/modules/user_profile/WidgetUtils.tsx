// === Module 7379: findGameWidget ===

// Module 7379 (findGameWidget)
import GAME_WIDGET_LIMITS_BY_TYPE from "GAME_WIDGET_LIMITS_BY_TYPE" /* 5064 */;
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5066 */;
import items3 from "items" /* 7378 */;
import _modDef7383 from "module_7383" /* 7383 */;
import convertClip from "convertClip" /* 7384 */;
import createDefaultFieldsSection from "createDefaultFieldsSection" /* 7385 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import closure_5 from "createUserWidgetFromServer" /* 7376 */;
import closure_6 from "initialize" /* 7380 */;
import items from "items" /* 7381 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import { USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH as closure_11 } from "USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH" /* 7382 */;

require = arg1;
function findGameWidget(widgetType) {
  const _require = widgetType;
  if (closure_6.hasPendingChanges()) {
    let pendingWidgets = closure_6.getPendingWidgets();
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
  const found = widgets.filter(_require(7378).isGameWidget);
  let found1 = found.find((type) => type.type === closure_0);
  if (found1 == null) {
    found1 = null;
  }
  return found1;
}
function replaceWidgetInList(clipsGalleryWidget) {
  closure_0 = clipsGalleryWidget;
  if (closure_6.hasPendingChanges()) {
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
    return uniqueKey === uniqueKey.getUniqueKey();
  });
  if (-1 === findIndexResult) {
    const items = [clipsGalleryWidget];
    HermesBuiltin.arraySpread(tmp8, 1);
    return items;
  } else {
    const items1 = [];
    HermesBuiltin.arraySpread(tmp8, 0);
    items1[findIndexResult] = clipsGalleryWidget;
    return items1;
  }
  obj = closure_6;
}
({ WIDGET_TITLES_BY_TYPE: error, WIDGETS_SUPPORTING_COMMENT: closure_8, WIDGETS_SUPPORTING_TAGS: c9 } = items);
let result = require("set").fileFinishedImporting("modules/user_profile/WidgetUtils.tsx");

export const getWidgetTitle = function getWidgetTitle(widget) {
  return dependencyMap[widget.type](widget);
};
export const getGameWidgetSubtitle = function getGameWidgetSubtitle(games, showEditingControls) {
  if (showEditingControls.showEditingControls) {
    if (games.games.length > 0) {
      if (1 === GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_LIMITS_BY_TYPE[games.type]) {
        const intl2 = tmp(1233).intl;
        let stringResult = intl2.string(tmp(1233).t.wiXdEa);
      } else {
        const intl = tmp(1233).intl;
        const obj = { numGames: null };
        obj[0] = tmp(5064).GAME_WIDGET_LIMITS_BY_TYPE[games.type];
        stringResult = intl.format(tmp(1233).t["zR1+0/"], obj);
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
export const addWidgetToPending = function addWidgetToPending(type) {
  const _require = type;
  let obj = closure_6;
  if (closure_6.hasPendingChanges()) {
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
  if (null == widgets.find((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === type.getUniqueKey();
  })) {
    if (type.type === _require(7377).WidgetType.PERSONAL) {
      let tmp16Result = tmp16(4298);
      obj = { dismissAction: null };
      obj[0] = ContentDismissActionType.INDIRECT_ACTION;
      const result = tmp16Result.UNSAFE_markDismissibleContentAsDismissed(tmp16(1372).DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, obj);
      tmp16Result = tmp16(4298);
      obj = { dismissAction: null };
      obj[0] = ContentDismissActionType.INDIRECT_ACTION;
      const result1 = tmp16Result.UNSAFE_markDismissibleContentAsDismissed(tmp16(1372).DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, obj);
    }
    const items = [type];
    HermesBuiltin.arraySpread(tmp7, 1);
    _modDef7383.setPendingWidgets(items);
    const obj6 = _modDef7383;
  }
};
export const removeWidgetFromPending = function removeWidgetFromPending(arg0) {
  closure_0 = arg0;
  if (closure_6.hasPendingChanges()) {
    let pendingWidgets = closure_6.getPendingWidgets();
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
  _modDef7383.setPendingWidgets(found);
};
export const addPendingClipToClipsGalleryWidget = function addPendingClipToClipsGalleryWidget(arg0) {
  let obj = closure_6;
  if (closure_6.hasPendingChanges()) {
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
  let found = widgets.find((arg0) => arg0 instanceof callback(table[14]).ClipsGalleryWidget);
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
    _modDef7383.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
    const obj3 = _modDef7383;
  }
};
export const updateClipTitleInClipsGalleryWidget = function updateClipTitleInClipsGalleryWidget(arg0, str) {
  const _require = arg0;
  let obj = closure_6;
  if (closure_6.hasPendingChanges()) {
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
  let found = widgets.find((arg0) => arg0 instanceof callback(table[14]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    importDefault = str.trim();
    obj = { id: null, clips: null };
    ({ id: obj2[0], clips } = found);
    obj[1] = clips.map((id) => {
      let tmp = id;
      if (id.id === closure_0) {
        const obj = {};
        const merged = Object.assign(id);
        let tmp5;
        if ("" !== closure_1) {
          tmp5 = closure_1;
        }
        obj.title = tmp5;
        tmp = obj;
      }
      return tmp;
    });
    const clipsGalleryWidget = new _require(7384).ClipsGalleryWidget(obj);
    _modDef7383.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
    const obj3 = _modDef7383;
  }
};
export const reorderClipsInClipsGalleryWidget = function reorderClipsInClipsGalleryWidget(arg0, arg1) {
  let obj = closure_6;
  if (closure_6.hasPendingChanges()) {
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
  let found = widgets.find((arg0) => arg0 instanceof callback(table[14]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    if (arg0 !== arg1) {
      const items = [];
      HermesBuiltin.arraySpread(found.clips, 0);
      if (arg0 >= 0) {
        if (arg0 < items.length) {
          if (arg1 >= 0) {
            if (arg1 < items.length) {
              items.splice(arg1, 0, callback(items.splice(arg0, 1), 1)[0]);
              obj = { id: null, clips: null };
              obj[0] = found.id;
              obj[1] = items;
              const clipsGalleryWidget = new convertClip.ClipsGalleryWidget(obj);
              _modDef7383.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
              const obj3 = _modDef7383;
            }
          }
        }
      }
    }
  }
};
export const updateClipTagsInClipsGalleryWidget = function updateClipTagsInClipsGalleryWidget(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  if (arg1.length <= _require(5064).USER_WIDGET_GAME_TAGS_MAX_LENGTH) {
    if (closure_6.hasPendingChanges()) {
      let pendingWidgets = obj3.getPendingWidgets();
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
    let found = widgets.find((arg0) => arg0 instanceof callback(table[14]).ClipsGalleryWidget);
    if (found == null) {
      found = null;
    }
    if (null != found) {
      const obj = { id: null, clips: null };
      ({ id: obj[0], clips } = found);
      obj[1] = clips.map((id) => {
        let tmp = id;
        if (id.id === closure_0) {
          const obj = {};
          const merged = Object.assign(id);
          let tmp5;
          if (found2.length > 0) {
            tmp5 = found2;
          }
          obj.tags = tmp5;
          tmp = obj;
        }
        return tmp;
      });
      const clipsGalleryWidget = new _require(7384).ClipsGalleryWidget(obj);
      _modDef7383.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
      const obj2 = _modDef7383;
    }
    obj3 = closure_6;
  }
};
export const removeTagFromClip = function removeTagFromClip(arg0, arg1) {
  let _require = arg0;
  let found2 = arg1;
  let obj = closure_6;
  if (closure_6.hasPendingChanges()) {
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
  let found = widgets.find((arg0) => arg0 instanceof callback(table[14]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    clips = found.clips;
    const found1 = clips.find((id) => id.id === closure_0);
    let tags;
    if (found1 != null) {
      tags = found1.tags;
    }
    let tmp9 = null != tags;
    if (tmp9) {
      tmp9 = 0 !== found1.tags.length;
    }
    if (tmp9) {
      const tags1 = found1.tags;
      found2 = tags1.filter((arg0) => arg0 !== found2);
      _require = arg0;
      if (found2.length <= _require(5064).USER_WIDGET_GAME_TAGS_MAX_LENGTH) {
        if (obj.hasPendingChanges()) {
          let pendingWidgets1 = obj.getPendingWidgets();
          if (pendingWidgets1 == null) {
            pendingWidgets1 = [];
          }
          let widgets1 = pendingWidgets1;
        } else {
          const currentUser1 = authStore.getCurrentUser();
          let userProfile1 = null;
          if (null != currentUser1) {
            userProfile1 = authStore2.getUserProfile(currentUser1.id);
          }
          widgets1 = undefined;
          if (userProfile1 != null) {
            widgets1 = userProfile1.widgets;
          }
          if (widgets1 == null) {
            widgets1 = [];
          }
        }
        let found3 = widgets1.find((arg0) => arg0 instanceof callback(table[14]).ClipsGalleryWidget);
        if (found3 == null) {
          found3 = null;
        }
        if (null != found3) {
          obj = { id: null, clips: null };
          ({ id: obj2[0], clips } = found3);
          obj[1] = clips.map((id) => {
            let tmp = id;
            if (id.id === closure_0) {
              const obj = {};
              const merged = Object.assign(id);
              let tmp5;
              if (found2.length > 0) {
                tmp5 = found2;
              }
              obj.tags = tmp5;
              tmp = obj;
            }
            return tmp;
          });
          const clipsGalleryWidget = new tmp10(7384).ClipsGalleryWidget(obj);
          found2(7383).setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
          const obj3 = found2(7383);
        }
      }
      tmp10 = _require;
    }
  }
};
export const removeClipFromClipsGalleryWidget = function removeClipFromClipsGalleryWidget(arg0) {
  const _require = arg0;
  let obj = closure_6;
  if (closure_6.hasPendingChanges()) {
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
  let found = widgets.find((arg0) => arg0 instanceof callback(table[14]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    obj = { id: null, clips: null };
    ({ id: obj2[0], clips } = found);
    obj[1] = clips.filter((id) => id.id !== closure_0);
    const clipsGalleryWidget = new _require(7384).ClipsGalleryWidget(obj);
    _modDef7383.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
    const obj3 = _modDef7383;
  }
};
export const updatePersonalWidget = function updatePersonalWidget(arg0) {
  if (closure_6.hasPendingChanges()) {
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
  let found = widgets.find((arg0) => arg0 instanceof callback(table[15]).UserProfilePersonalWidget);
  if (found == null) {
    found = null;
  }
  if (found == null) {
    found = createDefaultFieldsSection.createDefaultPersonalWidget();
    const obj2 = createDefaultFieldsSection;
  }
  obj = closure_6;
  const tmp = replaceWidgetInList;
  const tmpResult = replaceWidgetInList(arg0(found));
  _modDef7383.setPendingWidgets(tmpResult);
};
export const updatePendingGameTags = function updatePendingGameTags(widgetType, arg1, tags) {
  const _require = arg1;
  if (tags.length <= Object.values(_require(7387).WidgetGameTag).length) {
    const tmp5 = findGameWidget(widgetType);
    if (null != tmp5) {
      const games = tmp5.games;
      const found = games.find((gameId) => gameId.gameId === closure_0);
      if (null != found) {
        let obj = {};
        const merged = Object.assign(found);
        obj.tags = tags;
        const games1 = tmp5.games;
        const mapped = games1.map((gameId) => {
          let tmp = gameId;
          if (gameId.gameId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        obj = {};
        const merged1 = Object.assign(tmp5);
        obj.games = mapped;
        const baseGameWidget = new _require(7378).BaseGameWidget(obj);
        const tmp21 = replaceWidgetInList(baseGameWidget);
        obj(7383).setPendingWidgets(tmp21);
        const obj3 = obj(7383);
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
    const found = games.find((gameId) => gameId.gameId === closure_0);
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
          if (found1.length <= Object.values(_require(7387).WidgetGameTag).length) {
            const tmpResult = findGameWidget(tmp2.type);
            if (null != tmpResult) {
              const games1 = tmpResult.games;
              const found2 = games1.find((gameId) => gameId.gameId === closure_0);
              if (null != found2) {
                obj = {};
                const merged = Object.assign(found2);
                obj.tags = found1;
                const games2 = tmpResult.games;
                const mapped = games2.map((gameId) => {
                  let tmp = gameId;
                  if (gameId.gameId === closure_0) {
                    tmp = obj;
                  }
                  return tmp;
                });
                obj = {};
                const merged1 = Object.assign(tmpResult);
                obj.games = mapped;
                const baseGameWidget = new tmp4(7378).BaseGameWidget(obj);
                const tmp22 = replaceWidgetInList(baseGameWidget);
                obj(7383).setPendingWidgets(tmp22);
                const obj3 = obj(7383);
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
    const found = games.find((gameId) => gameId.gameId === closure_0);
    if (null != found) {
      if (comment !== found.comment) {
        let obj = {};
        const merged = Object.assign(found);
        obj.comment = comment;
        const games1 = tmp.games;
        const mapped = games1.map((gameId) => {
          let tmp = gameId;
          if (gameId.gameId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        obj = {};
        const merged1 = Object.assign(tmp);
        obj.games = mapped;
        const baseGameWidget = new _require(7378).BaseGameWidget(obj);
        const tmp19 = replaceWidgetInList(baseGameWidget);
        obj(7383).setPendingWidgets(tmp19);
        const obj3 = obj(7383);
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
  let num = 0;
  if (widgetType in game(5064).GAME_WIDGET_LIMITS_BY_TYPE) {
    num = tmp2(5064).GAME_WIDGET_LIMITS_BY_TYPE[widgetType];
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
  const baseGameWidget = new tmp2(7378).BaseGameWidget(obj);
  const tmp7 = replaceWidgetInList;
  const tmp7Result = replaceWidgetInList(baseGameWidget);
  _modDef7383.setPendingWidgets(tmp7Result);
  const useGame = tmp2(6163).useGame;
  const items2 = [game.gameId];
  const many = useGame.fetchMany(items2);
};
export const reorderWidgets = function reorderWidgets(arg0, arg1) {
  if (arg0 !== arg1) {
    if (closure_6.hasPendingChanges()) {
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
            _modDef7383.setPendingWidgets(items);
            const obj = _modDef7383;
          }
        }
      }
    }
    obj2 = closure_6;
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
                _modDef7383.setPendingWidgets(tmp19);
                const obj2 = _modDef7383;
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
    const found = null != merged.games ? merged.games : [].filter((gameId) => gameId.gameId !== closure_0);
    const obj = {};
    merged = Object.assign(merged);
    obj.games = found;
    const baseGameWidget = new _require(7378).BaseGameWidget(obj);
    const arr = null != merged.games ? merged.games : [];
    const tmp13 = replaceWidgetInList(baseGameWidget);
    _modDef7383.setPendingWidgets(tmp13);
    const obj2 = _modDef7383;
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
  return games.length === games2.length && games.every((gameId) => {
    games2 = undefined;
    let flag = false;
    if (gameId.gameId === games2[arg1].gameId) {
      if (!closure_1_8.includes(tmp2)) {
        flag = true;
        if (closure_1_9.includes(tmp2)) {
          const tags = gameId.tags;
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
                  if (!tmp10.every((arg0, arg1) => arg0 === _null[arg1])) {
                    flag = false;
                  }
                }
              }
            }
          }
        }
      } else {
        const comment = gameId.comment;
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
  const result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(contentClassification.contentClassification);
  let tmp4 = !result;
  if (!result) {
    const GAME_WIDGET_BANNED_APPLICATION_IDS = GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_BANNED_APPLICATION_IDS;
    tmp4 = !GAME_WIDGET_BANNED_APPLICATION_IDS.has(contentClassification.id);
  }
  return tmp4;
};