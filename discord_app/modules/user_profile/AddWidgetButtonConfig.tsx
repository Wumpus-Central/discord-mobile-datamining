// === Module 14954: AddWidgetButtonConfig ===

// Module 14954 (AddWidgetButtonConfig)
import util from "util" /* 1112 */;
import SampleGameWidgetData from "SampleGameWidgetData" /* 14955 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;

require = fn;
const WIDGET_TITLES_BY_TYPE = fn(6141).WIDGET_TITLES_BY_TYPE;
const dependencyMap = {
  [fn(6139).WidgetType.FAVORITE_GAMES]: {
    placeholder() {
      return { variant: "details", applicationId: SampleGameWidgetData.SampleGameIds.LEAGUE_OF_LEGENDS };
    },
    getAriaLabel() {
      const intl = util.intl;
      return intl.string(util.t.xJtdIm);
    }
  },
  [fn(6139).WidgetType.CURRENT_GAMES]: {
    placeholder() {
      return { variant: "details", applicationId: SampleGameWidgetData.SampleGameIds.VALORANT };
    },
    getAriaLabel() {
      const intl = util.intl;
      return intl.string(util.t.Ae8tRi);
    }
  },
  [fn(6139).WidgetType.PLAYED_GAMES]: {
    placeholder() {
      const obj = { variant: "grid", applicationIds: null };
      items = [SampleGameWidgetData.SampleGameIds.PEAK, SampleGameWidgetData.SampleGameIds.BATTLEFIELD_6, SampleGameWidgetData.SampleGameIds.REPO, SampleGameWidgetData.SampleGameIds.BALDURS_GATE_3];
      obj.applicationIds = items;
      return obj;
    },
    getAriaLabel() {
      const intl = util.intl;
      return intl.string(util.t["pBR+4j"]);
    }
  },
  [fn(6139).WidgetType.WANT_TO_PLAY_GAMES]: {
    placeholder() {
      const obj = { variant: "grid", applicationIds: null };
      items = [SampleGameWidgetData.SampleGameIds.MARVEL_RIVALS, SampleGameWidgetData.SampleGameIds.WORLD_OF_WARCRAFT, SampleGameWidgetData.SampleGameIds.RUST, SampleGameWidgetData.SampleGameIds.SILKSONG];
      obj.applicationIds = items;
      return obj;
    },
    getAriaLabel() {
      const intl = util.intl;
      return intl.string(util.t.NtoBi1);
    }
  },
  [fn(6139).WidgetType.APPLICATION]: {
    placeholder(applicationId) {
      return { variant: "application-widget", applicationId: applicationId.applicationId };
    },
    getAriaLabel(applicationId) {
      const intl = util.intl;
      const application = ApplicationStore.getApplication(applicationId.applicationId);
      let applicationName;
      if (application != null) {
        applicationName = application.name;
      }
      if (applicationName == null) {
        applicationName = "";
      }
      return intl.formatToPlainString(util.t.KfGahB, { applicationName });
    }
  },
  [fn(6139).WidgetType.CLIPS_GALLERY]: {
    placeholder() {
      return { variant: "clips-gallery" };
    },
    getAriaLabel() {
      const intl = util.intl;
      return intl.string(util.t["7AVpta"]);
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/AddWidgetButtonConfig.tsx");

export function getAddWidgetPlaceholder(widget) {
  return dependencyMap[widget.type].placeholder(widget);
}
export function getAddWidgetAriaLabel(widget) {
  return dependencyMap[widget.type].getAriaLabel(widget);
}
export function getAddWidgetTitle(widget) {
  const getTitle = dependencyMap[widget.type].getTitle;
  if (null != getTitle) {
    let title = getTitle(widget);
  } else {
    title = WIDGET_TITLES_BY_TYPE[widget.type](widget);
  }
  return title;
}