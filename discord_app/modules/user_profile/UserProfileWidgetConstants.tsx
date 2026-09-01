// discord_app/modules/user_profile/UserProfileWidgetConstants.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import closure_2 from "../applications/ApplicationStore.tsx";

require = arg1;
const items = [
  require("WidgetType").WidgetType.PERSONAL,
  require("WidgetType").WidgetType.CLIPS_GALLERY,
  require("WidgetType").WidgetType.APPLICATION,
  require("WidgetType").WidgetType.FAVORITE_GAMES,
  require("WidgetType").WidgetType.PLAYED_GAMES,
  require("WidgetType").WidgetType.CURRENT_GAMES,
  require("WidgetType").WidgetType.WANT_TO_PLAY_GAMES,
];
const items1 = [require("WidgetType").WidgetType.FAVORITE_GAMES];
const items2 = [
  require("WidgetType").WidgetType.CURRENT_GAMES,
  require("WidgetType").WidgetType.FAVORITE_GAMES,
  require("WidgetType").WidgetType.CLIPS_GALLERY,
];
const obj = {
  [arg1(7367).WidgetType.FAVORITE_GAMES]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Rpf6Ak);
  },
  [arg1(7367).WidgetType.CURRENT_GAMES]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zs6NsE);
  },
  [arg1(7367).WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.I509Dl);
  },
  [arg1(7367).WidgetType.PLAYED_GAMES]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.QTq6Pf);
  },
  [arg1(7367).WidgetType.APPLICATION]: (applicationId) => {
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
  [arg1(7367).WidgetType.PERSONAL]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.AVkYMx);
  },
  [arg1(7367).WidgetType.CLIPS_GALLERY]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zY8Ghg);
  },
};
const result = require("set").fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = obj;
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
