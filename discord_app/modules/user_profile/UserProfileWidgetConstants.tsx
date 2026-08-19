// === Module 5371: items ===

// Module 5371 (items)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import addApplication from "addApplication" /* 4478 */;

require = fn;
const items = [require("WidgetType").WidgetType.PERSONAL, require("WidgetType").WidgetType.CLIPS_GALLERY, require("WidgetType").WidgetType.APPLICATION, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.PLAYED_GAMES, require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [require("WidgetType").WidgetType.FAVORITE_GAMES];
const items2 = [require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.CLIPS_GALLERY];
const obj = {
  [fn(5366).WidgetType.FAVORITE_GAMES]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Rpf6Ak);
  },
  [fn(5366).WidgetType.CURRENT_GAMES]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zs6NsE);
  },
  [fn(5366).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.I509Dl);
  },
  [fn(5366).WidgetType.PLAYED_GAMES]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.QTq6Pf);
  },
  [fn(5366).WidgetType.APPLICATION]: (applicationId) => {
    application = application.getApplication(applicationId.applicationId);
    let str;
    if (application != null) {
      str = application.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  },
  [fn(5366).WidgetType.PERSONAL]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.AVkYMx);
  },
  [fn(5366).WidgetType.CLIPS_GALLERY]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zY8Ghg);
  }
};
const result = require("obj132").fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = obj;
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;