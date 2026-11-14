// === Module 15810: useAddableWidgets ===

// Module 15810 (useAddableWidgets)
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 12251 */;
import ApplicationWidgetConfigActions from "ApplicationWidgetConfigActions" /* 12270 */;
import noop from "module_19" /* 19 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 12266 */;
import UserStore from "UserStore" /* 1388 */;

const require = globalThis.__r;

require = fn;
function hasAddableApplicationWidgetSurfaces(arg0) {
  let tmp3 = null != arg0.surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP];
  if (tmp3) {
    tmp3 = null != arg0.surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  if (tmp3) {
    tmp3 = null != arg0.surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.ADD_WIDGET_PREVIEW];
  }
  return tmp3;
}
const WIDGET_SORT_ORDER = fn(7355).WIDGET_SORT_ORDER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useAddableWidgets.tsx");

export default function useAddableWidgets() {
  const DeveloperMode = setting(enabled[5]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  items = [stateFromStores3];
  const stateFromStores = setting(enabled[6]).useStateFromStores(items, () => stateFromStores3.getCurrentUser());
  let id;
  let obj = setting(enabled[6]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6Result = require("useUserProfileWidgets")(id);
  importDefault = tmp6Result;
  const tmp6 = require("useUserProfileWidgets");
  enabled = require("UserProfilePersonalWidgetExperiment").useConfig({ location: "useAddableWidgets" }).enabled;
  const tmp5Result = require("UserProfilePersonalWidgetExperiment");
  let items1 = [stateFromStores2];
  const stateFromStores1 = setting(enabled[6]).useStateFromStores(items1, () => stateFromStores2.getAllConfigsByApplication());
  let tmpResult = setting(enabled[6]);
  let items2 = [stateFromStores2];
  stateFromStores2 = setting(enabled[6]).useStateFromStores(items2, () => stateFromStores2.getFeaturedApplicationIds());
  const tmpResult4 = setting(enabled[6]);
  const items3 = [stateFromStores2];
  stateFromStores3 = setting(enabled[6]).useStateFromStores(items3, () => stateFromStores2.getDeveloperApplicationIds());
  const tmpResult5 = setting(enabled[6]);
  const isClipsAvailable = setting(enabled[9]).useIsClipsAvailable();
  const tmpResult6 = setting(enabled[9]);
  const tmp5Result2 = require("ClipsOnProfileSetterExperiment");
  const tmp13 = tmp5Result2.useConfig({ location: require("AnalyticsLocation").USER_PROFILE_MODAL_V2 }).enabled && isClipsAvailable;
  closure_6 = tmp13;
  const items4 = [setting];
  const effect = stateFromStores1.useEffect(() => {
    const featuredWidgetConfigs = ApplicationWidgetConfigActions.fetchFeaturedWidgetConfigs();
    featuredWidgetConfigs.catch(() => {

    });
    if (setting) {
      const developerWidgetConfigs = ApplicationWidgetConfigActions.fetchDeveloperWidgetConfigs();
      developerWidgetConfigs.catch(() => {

      });
      const tmpResult = ApplicationWidgetConfigActions;
    }
  }, items4);
  const items5 = [setting, stateFromStores1, stateFromStores2, stateFromStores3, tmp6Result, tmp13, enabled];
  return stateFromStores1.useMemo(() => {
    let found = set1.filter((item) => item instanceof set(7357).ApplicationWidget);
    let set = new Set(found.map((applicationId) => applicationId.applicationId));
    set1 = new Set(set1.map((type) => type.type));
    let found1 = closure_6.filter((item) => {
      const ADDABLE_WIDGET_TYPES = set(15814).ADDABLE_WIDGET_TYPES;
      return ADDABLE_WIDGET_TYPES.has(item);
    });
    return found1.flatMap((type) => {
      if (setting(enabled[15]).WidgetType.APPLICATION === type) {
        items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(stateFromStores2, 0);
        const tmp21 = set ? stateFromStores3 : [];
        HermesBuiltin.arraySpread(tmp21, arraySpreadResult);
        set = new Set(items);
        const _Object = Object;
        const values = Object.values(stateFromStores1);
        const mapped = values.map((item) => item[0]);
        const found = mapped.filter(setting(enabled[16]).isNotNullish);
        const found1 = found.filter((application_id) => set.has(application_id.application_id));
        const found2 = found1.filter((application_id) => !set.has(application_id.application_id));
        const found3 = found2.filter(hasAddableApplicationWidgetSurfaces);
        return found3.map((applicationId) => {
          const applicationWidget = new set(dependencyMap[13]).ApplicationWidget({ applicationId: applicationId.application_id });
          return applicationWidget;
        });
      } else if (setting(enabled[15]).WidgetType.PERSONAL === type) {
        if (dependencyMap) {
          if (set1.has(type)) {
            let items1 = [];
          } else {
            items1 = setting(enabled[17]).createDefaultPersonalWidget();
            const tmpResult = setting(enabled[17]);
          }
        } else {
          return [];
        }
      } else if (setting(enabled[15]).WidgetType.CLIPS_GALLERY === type) {
        if (closure_1_6) {
          if (!set1.has(type)) {
            const obj = { clips: [] };
            let clipsGalleryWidget = new setting(enabled[18]).ClipsGalleryWidget(obj);
          }
          return clipsGalleryWidget;
        }
        clipsGalleryWidget = [];
      } else {
        if (tmpResult3.isGameWidgetType(type)) {
          if (set1.has(type)) {
            let items2 = [];
          } else {
            const obj2 = { type, games: [] };
            items2 = new setting(enabled[19]).BaseGameWidget(obj2);
          }
        } else {
          return setting(enabled[16]).assertNever(type);
        }
        tmpResult3 = setting(enabled[19]);
      }
    });
  }, items5);
};
export { hasAddableApplicationWidgetSurfaces };