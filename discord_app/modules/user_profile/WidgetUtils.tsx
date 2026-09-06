// discord_app/modules/user_profile/WidgetUtils.tsx
import GameWidgetLimits from "../../../discord_common/js/shared/shared-constants/GameWidgetLimits.tsx";
import utils from "../content_classification/utils.tsx";
import WidgetType from "../../../discord_common/js/shared/shared-constants/WidgetType.tsx";
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes.tsx";
import WidgetActionCreatorsDefault from "WidgetActionCreators.tsx";
import UserProfileClipsGalleryWidgetTypes from "UserProfileClipsGalleryWidgetTypes.tsx";
import UserProfilePersonalWidget from "UserProfilePersonalWidget.tsx";
import WidgetGameTag from "../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import UserStore from "../../stores/UserStore.tsx";
import UserProfileStore from "UserProfileStore.tsx";
import WidgetStore from "WidgetStore.tsx";

require = fn;
function findGameWidget(widgetType) {
  closure_0 = widgetType;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = WidgetStore.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  const found = widgets.filter(UserProfileGameWidgetTypes.isGameWidget);
  let found1 = found.find((type) => type.type === closure_0);
  if (found1 == null) {
    found1 = null;
  }
  return found1;
}
function replaceWidgetInList(clipsGalleryWidget) {
  let uniqueKey = clipsGalleryWidget;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
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
    uniqueKey = getUniqueKey.getUniqueKey();
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
  obj = WidgetStore;
}
const UserProfileWidgetConstants = fn(7626);
({
  WIDGET_TITLES_BY_TYPE: closure_7,
  WIDGETS_SUPPORTING_COMMENT: closure_8,
  WIDGETS_SUPPORTING_TAGS: closure_9,
} = UserProfileWidgetConstants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let closure_11 = fn(7627).USER_WIDGET_CLIPS_GALLERY_MAX_LENGTH;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/WidgetUtils.tsx");

export const getWidgetTitle = function getWidgetTitle(widget) {
  return dependencyMap[widget.type](widget);
};
export const getGameWidgetSubtitle = function getGameWidgetSubtitle(games, showEditingControls) {
  if (showEditingControls.showEditingControls) {
    if (games.games.length > 0) {
      if (1 === GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[games.type]) {
        const intl2 = tmp(1114).intl;
        let stringResult = intl2.string(tmp(1114).t.wiXdEa);
      } else {
        const intl = tmp(1114).intl;
        const obj = { numGames: tmp(5110).GAME_WIDGET_LIMITS_BY_TYPE[games.type] };
        stringResult = intl.format(tmp(1114).t["zR1+0/"], obj);
      }
      return stringResult;
    }
  }
};
export const widgetSupportsComment = function widgetSupportsComment(arg0) {
  return React6.includes(arg0);
};
export const widgetSupportsTags = function widgetSupportsTags(arg0) {
  return React7.includes(arg0);
};
export const widgetMaxGames = function widgetMaxGames(arg0) {
  let num = 0;
  if (arg0 in GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[arg0];
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
  const currentUser = UserStore.getCurrentUser();
  let userProfile = null;
  if (null != currentUser) {
    userProfile = UserProfileStore.getUserProfile(currentUser.id);
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
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  if (
    null ==
    widgets.find((getUniqueKey) => {
      const uniqueKey = getUniqueKey.getUniqueKey();
      return uniqueKey === type.getUniqueKey();
    })
  ) {
    if (type.type === WidgetType.WidgetType.PERSONAL) {
      let tmp16Result = tmp16(4380);
      obj = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const result = tmp16Result.UNSAFE_markDismissibleContentAsDismissed(
        tmp16(1943).DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_COACHMARK,
        obj,
      );
      tmp16Result = tmp16(4380);
      obj = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const result1 = tmp16Result.UNSAFE_markDismissibleContentAsDismissed(
        tmp16(1943).DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE,
        obj,
      );
    }
    const items = [type];
    HermesBuiltin.arraySpread(tmp7, 1);
    WidgetActionCreatorsDefault.setPendingWidgets(items);
  }
};
export const removeWidgetFromPending = function removeWidgetFromPending(arg0) {
  let uniqueKey = arg0;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = WidgetStore.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
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
    uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey !== uniqueKey.getUniqueKey();
  });
  WidgetActionCreatorsDefault.setPendingWidgets(found);
};
export const addPendingClipToClipsGalleryWidget = function addPendingClipToClipsGalleryWidget(arg0) {
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((item) => item instanceof closure_0(dependencyMap[14]).ClipsGalleryWidget);
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
    obj = { id, clips: null };
    const items = [];
    items[HermesBuiltin.arraySpread(clips, 0)] = arg0;
    obj.clips = items;
    const clipsGalleryWidget = new UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget(obj);
    WidgetActionCreatorsDefault.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
  }
};
export const updateClipTitleInClipsGalleryWidget = function updateClipTitleInClipsGalleryWidget(arg0, str) {
  closure_0 = arg0;
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((item) => item instanceof closure_0(dependencyMap[14]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    closure_1 = str.trim();
    obj = { id: null, clips: null };
    ({ id: obj2.id, clips } = found);
    obj.clips = clips.map((id) => {
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
    const clipsGalleryWidget = new UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget(obj);
    WidgetActionCreatorsDefault.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
  }
};
export const reorderClipsInClipsGalleryWidget = function reorderClipsInClipsGalleryWidget(arg0, arg1) {
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((item) => item instanceof closure_0(dependencyMap[14]).ClipsGalleryWidget);
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
              items.splice(arg1, 0, _slicedToArray(items.splice(arg0, 1), 1)[0]);
              obj = { id: found.id, clips: items };
              const clipsGalleryWidget = new UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget(obj);
              WidgetActionCreatorsDefault.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
            }
          }
        }
      }
    }
  }
};
export const updateClipTagsInClipsGalleryWidget = function updateClipTagsInClipsGalleryWidget(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  if (arg1.length <= GameWidgetLimits.USER_WIDGET_GAME_TAGS_MAX_LENGTH) {
    if (WidgetStore.hasPendingChanges()) {
      let pendingWidgets = obj3.getPendingWidgets();
      if (pendingWidgets == null) {
        pendingWidgets = [];
      }
      let widgets = pendingWidgets;
    } else {
      const currentUser = UserStore.getCurrentUser();
      let userProfile = null;
      if (null != currentUser) {
        userProfile = UserProfileStore.getUserProfile(currentUser.id);
      }
      widgets = undefined;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
        widgets = [];
      }
    }
    let found = widgets.find((item) => item instanceof closure_0(dependencyMap[14]).ClipsGalleryWidget);
    if (found == null) {
      found = null;
    }
    if (null != found) {
      const obj = { id: null, clips: null };
      ({ id: obj.id, clips } = found);
      obj.clips = clips.map((id) => {
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
      const clipsGalleryWidget = new UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget(obj);
      WidgetActionCreatorsDefault.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
    }
    obj3 = WidgetStore;
  }
};
export const removeTagFromClip = function removeTagFromClip(arg0, arg1) {
  closure_0 = arg0;
  let found2 = arg1;
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((item) => item instanceof closure_0(dependencyMap[14]).ClipsGalleryWidget);
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
      found2 = tags1.filter((item) => item !== found2);
      closure_0 = arg0;
      if (found2.length <= GameWidgetLimits.USER_WIDGET_GAME_TAGS_MAX_LENGTH) {
        if (obj.hasPendingChanges()) {
          let pendingWidgets1 = obj.getPendingWidgets();
          if (pendingWidgets1 == null) {
            pendingWidgets1 = [];
          }
          let widgets1 = pendingWidgets1;
        } else {
          const currentUser1 = UserStore.getCurrentUser();
          let userProfile1 = null;
          if (null != currentUser1) {
            userProfile1 = UserProfileStore.getUserProfile(currentUser1.id);
          }
          widgets1 = undefined;
          if (userProfile1 != null) {
            widgets1 = userProfile1.widgets;
          }
          if (widgets1 == null) {
            widgets1 = [];
          }
        }
        let found3 = widgets1.find((item) => item instanceof closure_0(dependencyMap[14]).ClipsGalleryWidget);
        if (found3 == null) {
          found3 = null;
        }
        if (null != found3) {
          obj = { id: null, clips: null };
          ({ id: obj2.id, clips } = found3);
          obj.clips = clips.map((id) => {
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
          const clipsGalleryWidget = new tmp10(7629).ClipsGalleryWidget(obj);
          WidgetActionCreatorsDefault.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
        }
      }
      tmp10 = require;
    }
  }
};
export const removeClipFromClipsGalleryWidget = function removeClipFromClipsGalleryWidget(arg0) {
  closure_0 = arg0;
  let obj = WidgetStore;
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((item) => item instanceof closure_0(dependencyMap[14]).ClipsGalleryWidget);
  if (found == null) {
    found = null;
  }
  if (null != found) {
    obj = { id: null, clips: null };
    ({ id: obj2.id, clips } = found);
    obj.clips = clips.filter((id) => id.id !== closure_0);
    const clipsGalleryWidget = new UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget(obj);
    WidgetActionCreatorsDefault.setPendingWidgets(replaceWidgetInList(clipsGalleryWidget));
  }
};
export const updatePersonalWidget = function updatePersonalWidget(fn) {
  if (WidgetStore.hasPendingChanges()) {
    let pendingWidgets = obj.getPendingWidgets();
    if (pendingWidgets == null) {
      pendingWidgets = [];
    }
    let widgets = pendingWidgets;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let userProfile = null;
    if (null != currentUser) {
      userProfile = UserProfileStore.getUserProfile(currentUser.id);
    }
    widgets = undefined;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
  }
  let found = widgets.find((item) => item instanceof UserProfilePersonalWidget.UserProfilePersonalWidget);
  if (found == null) {
    found = null;
  }
  if (found == null) {
    found = UserProfilePersonalWidget.createDefaultPersonalWidget();
  }
  obj = WidgetStore;
  const tmpResult = replaceWidgetInList(fn(found));
  WidgetActionCreatorsDefault.setPendingWidgets(tmpResult);
};
export const updatePendingGameTags = function updatePendingGameTags(widgetType, arg1, tags) {
  closure_0 = arg1;
  if (tags.length <= Object.values(WidgetGameTag.WidgetGameTag).length) {
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
        const baseGameWidget = new UserProfileGameWidgetTypes.BaseGameWidget(obj);
        const tmp21 = replaceWidgetInList(baseGameWidget);
        WidgetActionCreatorsDefault.setPendingWidgets(tmp21);
      }
    }
  }
};
export const removeTagFromGame = function removeTagFromGame(widgetType, arg1, arg2) {
  closure_0 = arg1;
  let obj = arg2;
  const tmp2 = findGameWidget(widgetType);
  if (null != tmp2) {
    const games = tmp2.games;
    const found = games.find((gameId) => gameId.gameId === closure_0);
    if (null != found) {
      if (null != found.tags) {
        if (0 !== found.tags.length) {
          const tags = found.tags;
          let found1 = tags.filter((item) => item !== obj);
          if (found1.length <= 0) {
            found1 = [];
          }
          closure_0 = arg1;
          const _Object = Object;
          if (found1.length <= Object.values(WidgetGameTag.WidgetGameTag).length) {
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
                const baseGameWidget = new tmp4(7623).BaseGameWidget(obj);
                const tmp22 = replaceWidgetInList(baseGameWidget);
                WidgetActionCreatorsDefault.setPendingWidgets(tmp22);
              }
            }
          }
          tmp4 = require;
        }
      }
    }
  }
};
export const updatePendingGameComment = function updatePendingGameComment(widgetType, arg1, comment) {
  closure_0 = arg1;
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
        const baseGameWidget = new UserProfileGameWidgetTypes.BaseGameWidget(obj);
        const tmp19 = replaceWidgetInList(baseGameWidget);
        WidgetActionCreatorsDefault.setPendingWidgets(tmp19);
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
  if (widgetType in GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE) {
    const num = tmp2(5110).GAME_WIDGET_LIMITS_BY_TYPE[widgetType];
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
    obj = { type: widgetType };
    tmp8 = obj;
  }
  obj = {};
  const merged = Object.assign(tmp8);
  obj.games = items1;
  const baseGameWidget = new tmp2(7623).BaseGameWidget(obj);
  const tmp7Result = replaceWidgetInList(baseGameWidget);
  WidgetActionCreatorsDefault.setPendingWidgets(tmp7Result);
  const useGame = tmp2(7309).useGame;
  const items2 = [game.gameId];
  const many = useGame.fetchMany(items2);
};
export const reorderWidgets = function reorderWidgets(arg0, arg1) {
  if (arg0 !== arg1) {
    if (WidgetStore.hasPendingChanges()) {
      let pendingWidgets = obj2.getPendingWidgets();
      if (pendingWidgets == null) {
        pendingWidgets = [];
      }
      let widgets = pendingWidgets;
    } else {
      const currentUser = UserStore.getCurrentUser();
      let userProfile = null;
      if (null != currentUser) {
        userProfile = UserProfileStore.getUserProfile(currentUser.id);
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
            items.splice(arg1, 0, _slicedToArray(items.splice(arg0, 1), 1)[0]);
            WidgetActionCreatorsDefault.setPendingWidgets(items);
          }
        }
      }
    }
    obj2 = WidgetStore;
  }
};
export const reorderGamesInWidget = function reorderGamesInWidget(widgetType, arg1, arg2) {
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
                items.splice(arg2, 0, _slicedToArray(items.splice(arg1, 1), 1)[0]);
                const obj = {};
                const merged = Object.assign(tmp);
                obj.games = items;
                const baseGameWidget = new UserProfileGameWidgetTypes.BaseGameWidget(obj);
                const tmp19 = replaceWidgetInList(baseGameWidget);
                WidgetActionCreatorsDefault.setPendingWidgets(tmp19);
              }
            }
          }
        }
      }
    }
  }
};
export const removePendingGameFromWidget = function removePendingGameFromWidget(widgetType, arg1) {
  closure_0 = arg1;
  let merged = findGameWidget(widgetType);
  if (null != merged) {
    const found = null != merged.games ? merged.games : [].filter((gameId) => gameId.gameId !== closure_0);
    const obj = {};
    merged = Object.assign(merged);
    obj.games = found;
    const baseGameWidget = new UserProfileGameWidgetTypes.BaseGameWidget(obj);
    const arr = null != merged.games ? merged.games : [];
    const tmp13 = replaceWidgetInList(baseGameWidget);
    WidgetActionCreatorsDefault.setPendingWidgets(tmp13);
  }
};
export const isGameLimitReached = function isGameLimitReached(type) {
  type = type.type;
  let num = 0;
  if (type in GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[type];
  }
  return type.games.length >= num;
};
export const areWidgetGamesEqual = function areWidgetGamesEqual(games, games2, type) {
  closure_1 = type;
  return (
    games.length === games2.length &&
    games.every((gameId, index) => {
      c0 = undefined;
      let flag = false;
      if (gameId.gameId === games2[index].gameId) {
        if (!React6.includes(tmp2)) {
          flag = true;
          if (React7.includes(tmp2)) {
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
            c0 = tmp12;
            flag = false;
            if (((null === tmp10) === null) === tmp12) {
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
          const comment = gameId.comment;
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
    })
  );
};
export const isGameAllowedInGameWidgets = function isGameAllowedInGameWidgets(contentClassification) {
  const result = utils.isAgeRestrictedContentClassification(contentClassification.contentClassification);
  let tmp4 = !result;
  if (!result) {
    const GAME_WIDGET_BANNED_APPLICATION_IDS = GameWidgetLimits.GAME_WIDGET_BANNED_APPLICATION_IDS;
    tmp4 = !GAME_WIDGET_BANNED_APPLICATION_IDS.has(contentClassification.id);
  }
  return tmp4;
};
