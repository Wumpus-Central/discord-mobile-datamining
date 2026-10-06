// === Module 7127: UserProfileWidgetConstants ===

// Module 7127 (UserProfileWidgetConstants)
import intl2 from "intl" /* 1126 */;
import WidgetType from "WidgetType" /* 7125 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.PERSONAL, WidgetType.WidgetType.CLIPS_GALLERY, WidgetType.WidgetType.APPLICATION, WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.PLAYED_GAMES, WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES];
const items1 = [];
const obj = {
  [WidgetType.WidgetType.FAVORITE_GAMES]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.Rpf6Ak);
  },
  [WidgetType.WidgetType.CURRENT_GAMES]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.zs6NsE);
  },
  [WidgetType.WidgetType.WANT_TO_PLAY_GAMES]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.I509Dl);
  },
  [WidgetType.WidgetType.PLAYED_GAMES]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.QTq6Pf);
  },
  [WidgetType.WidgetType.APPLICATION]: (applicationId) => {
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
  [WidgetType.WidgetType.PERSONAL]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.AVkYMx);
  },
  [WidgetType.WidgetType.CLIPS_GALLERY]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.zY8Ghg);
  }
};
items1[0] = WidgetType.WidgetType.FAVORITE_GAMES;
const items2 = [WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.CLIPS_GALLERY];
const result = size.fileFinishedImporting("modules/user_profile/UserProfileWidgetConstants.tsx");

export const WIDGET_SORT_ORDER = items;
export const WIDGET_TITLES_BY_TYPE = obj;
export const WIDGETS_SUPPORTING_COMMENT = items1;
export const WIDGETS_SUPPORTING_TAGS = items2;
export const widgetSupportsComment = function widgetSupportsComment(arg0) {
  return items1.includes(arg0);
};
export const widgetSupportsTags = function widgetSupportsTags(arg0) {
  return items2.includes(arg0);
};