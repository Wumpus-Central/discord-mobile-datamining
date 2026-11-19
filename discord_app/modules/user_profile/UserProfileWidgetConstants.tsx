// discord_app/modules/user_profile/UserProfileWidgetConstants.tsx
import util from "../../intl/index.native.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";

require = fn;
const items = [
  fn(6838).WidgetType.CLIPS_GALLERY,
  fn(6838).WidgetType.APPLICATION,
  fn(6838).WidgetType.FAVORITE_GAMES,
  fn(6838).WidgetType.PLAYED_GAMES,
  fn(6838).WidgetType.CURRENT_GAMES,
  fn(6838).WidgetType.WANT_TO_PLAY_GAMES,
];
const items1 = [fn(6838).WidgetType.FAVORITE_GAMES];
const items2 = [
  fn(6838).WidgetType.CURRENT_GAMES,
  fn(6838).WidgetType.FAVORITE_GAMES,
  fn(6838).WidgetType.CLIPS_GALLERY,
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = {
  [fn(6838).WidgetType.FAVORITE_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.Rpf6Ak);
  },
  [fn(6838).WidgetType.CURRENT_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.zs6NsE);
  },
  [fn(6838).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.I509Dl);
  },
  [fn(6838).WidgetType.PLAYED_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.QTq6Pf);
  },
  [fn(6838).WidgetType.APPLICATION]: (applicationId) => {
    const application = ApplicationStore.getApplication(applicationId.applicationId);
    let str;
    if (application != null) {
      str = application.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  },
  [fn(6838).WidgetType.CLIPS_GALLERY]: () => {
    const intl = util.intl;
    return intl.string(util.t.zY8Ghg);
  },
};
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
export function widgetSupportsComment(arg0) {
  return items1.includes(arg0);
}
export function widgetSupportsTags(arg0) {
  return items2.includes(arg0);
}
export function widgetShowsGameDetails(type) {
  let hasItem = items1.includes(type);
  if (!hasItem) {
    hasItem = items2.includes(type);
  }
  return hasItem;
}
