// === Module 7623: UserProfileGameWidgetTypes ===

// Module 7623 (UserProfileGameWidgetTypes)
import GameWidgetLimits from "GameWidgetLimits" /* 5110 */;
import WidgetType from "WidgetType" /* 7622 */;
import WidgetUtils from "WidgetUtils" /* 7624 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES, WidgetType.WidgetType.PLAYED_GAMES];
let BaseGameWidget;
class BaseGameWidget {
  constructor(arg0) {
    ({ id, type, games } = global);
    obj = Object.create(new.target.prototype);
    obj.id = id;
    obj.type = type;
    obj.games = games;
    return obj;
  }
}
const prototype = BaseGameWidget.prototype;
prototype["toSubmission"] = function toSubmission() {
  let obj = { id: this.id, data: null };
  obj = { type: this.type, games: null };
  const games = this.games;
  obj.games = games.map((gameId) => ({ game_id: gameId.gameId, comment: gameId.comment, tags: gameId.tags }));
  obj.data = obj;
  return obj;
};
prototype["isUpdatable"] = function isUpdatable() {
  return true;
};
prototype["isDiscardable"] = function isDiscardable() {
  return 0 === this.games.length;
};
prototype["isValid"] = function isValid() {
  const self = this;
  let tmp = this.games.length > 0;
  if (tmp) {
    tmp = self.games.length <= GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[self.type];
  }
  return tmp;
};
prototype["isEqual"] = function isEqual(type) {
  let tmp = type instanceof BaseGameWidget;
  if (tmp) {
    const self = this;
    let areWidgetGamesEqualResult = type.type === this.type;
    if (areWidgetGamesEqualResult) {
      areWidgetGamesEqualResult = WidgetUtils.areWidgetGamesEqual(self.games, type.games, self.type);
    }
    tmp = areWidgetGamesEqualResult;
  }
  return tmp;
};
prototype["getUniqueKey"] = function getUniqueKey() {
  return this.type;
};
prototype["getProfileAnalyticsOptions"] = function getProfileAnalyticsOptions() {
  return { widgetType: this.type };
};
prototype["getProfileEditAnalyticsOptions"] = function getProfileEditAnalyticsOptions() {
  return { widgetEdited: this.type };
};
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTypes.tsx");

export const GAME_WIDGET_TYPES = items;
export const isGameWidgetType = function isGameWidgetType(arg0) {
  return items.includes(arg0);
};
export const isGameWidget = function isGameWidget(widget) {
  return widget instanceof BaseGameWidget;
};
export { BaseGameWidget };