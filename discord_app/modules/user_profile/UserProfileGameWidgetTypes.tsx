// === Module 5367: items ===

// Module 5367 (items)
import obj132 from "obj132" /* 2 */;
import WidgetType from "WidgetType" /* 5366 */;
import GAME_WIDGET_LIMITS_BY_TYPE from "GAME_WIDGET_LIMITS_BY_TYPE" /* 5368 */;
import findGameWidget from "findGameWidget" /* 5369 */;

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
  const obj = { type: this.type, games: games.map((item, index) => ({ game_id: item.gameId, comment: item.comment, tags: item.tags })) };
  games = this.games;
  obj[1] = obj;
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
    tmp = self.games.length <= GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_LIMITS_BY_TYPE[self.type];
  }
  return tmp;
};
prototype["isEqual"] = function isEqual(type) {
  let tmp = type instanceof BaseGameWidget;
  if (tmp) {
    const self = this;
    let areWidgetGamesEqualResult = type.type === this.type;
    if (areWidgetGamesEqualResult) {
      areWidgetGamesEqualResult = findGameWidget.areWidgetGamesEqual(self.games, type.games, self.type);
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
const result = obj132.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTypes.tsx");

export const GAME_WIDGET_TYPES = items;
export const isGameWidgetType = function isGameWidgetType(arg0) {
  return items.includes(arg0);
};
export const isGameWidget = function isGameWidget(widget) {
  return widget instanceof BaseGameWidget;
};
export { BaseGameWidget };