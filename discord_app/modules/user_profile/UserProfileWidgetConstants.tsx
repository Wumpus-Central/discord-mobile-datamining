// === Module 7728: UserProfileWidgetConstants ===

// Module 7728 (UserProfileWidgetConstants)
import util from "util" /* 1114 */;
import ApplicationStore from "ApplicationStore" /* 4864 */;

require = fn;
const items = [fn(7724).WidgetType.PERSONAL, fn(7724).WidgetType.CLIPS_GALLERY, fn(7724).WidgetType.APPLICATION, fn(7724).WidgetType.FAVORITE_GAMES, fn(7724).WidgetType.PLAYED_GAMES, fn(7724).WidgetType.CURRENT_GAMES, fn(7724).WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [fn(7724).WidgetType.FAVORITE_GAMES];
const items2 = [fn(7724).WidgetType.CURRENT_GAMES, fn(7724).WidgetType.FAVORITE_GAMES, fn(7724).WidgetType.CLIPS_GALLERY];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = {
  [fn(7724).WidgetType.FAVORITE_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.Rpf6Ak);
  },
  [fn(7724).WidgetType.CURRENT_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.zs6NsE);
  },
  [fn(7724).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.I509Dl);
  },
  [fn(7724).WidgetType.PLAYED_GAMES]: () => {
    const intl = util.intl;
    return intl.string(util.t.QTq6Pf);
  },
  [fn(7724).WidgetType.APPLICATION]: (applicationId) => {
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
  [fn(7724).WidgetType.PERSONAL]: () => {
    const intl = util.intl;
    return intl.string(util.t.AVkYMx);
  },
  [fn(7724).WidgetType.CLIPS_GALLERY]: () => {
    const intl = util.intl;
    return intl.string(util.t.zY8Ghg);
  }
};
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;