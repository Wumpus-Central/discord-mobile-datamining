// discord_app/modules/user_profile/hooks/useAddableWidgets.tsx
import ApplicationWidgetConfigSurface from "../../../../discord_common/js/shared/shared-constants/ApplicationWidgetConfigSurface.tsx";
import ApplicationWidgetConfigActions from "../../application_widget/ApplicationWidgetConfigActions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationWidgetConfigStore from "../../application_widget/ApplicationWidgetConfigStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
const WIDGET_SORT_ORDER = fn(6959).WIDGET_SORT_ORDER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useAddableWidgets.tsx");

export default function useAddableWidgets() {
  const DeveloperMode = setting(stateFromStores1[5]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  items = [currentUser];
  const stateFromStores = setting(stateFromStores1[6]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  let obj = setting(stateFromStores1[6]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6Result = require("useUserProfileWidgets")(id);
  importDefault = tmp6Result;
  const tmp6 = require("useUserProfileWidgets");
  let items1 = [stateFromStores3];
  stateFromStores1 = setting(stateFromStores1[6]).useStateFromStores(items1, () =>
    stateFromStores3.getAllConfigsByApplication(),
  );
  let tmpResult = setting(stateFromStores1[6]);
  const items2 = [stateFromStores3];
  const stateFromStores2 = setting(stateFromStores1[6]).useStateFromStores(items2, () =>
    stateFromStores3.getFeaturedApplicationIds(),
  );
  const tmpResult4 = setting(stateFromStores1[6]);
  const items3 = [stateFromStores3];
  stateFromStores3 = setting(stateFromStores1[6]).useStateFromStores(items3, () =>
    stateFromStores3.getDeveloperApplicationIds(),
  );
  const tmpResult5 = setting(stateFromStores1[6]);
  const isClipsAvailable = setting(stateFromStores1[8]).useIsClipsAvailable();
  const tmpResult6 = setting(stateFromStores1[8]);
  const tmp5Result = require("ClipsOnProfileSetterExperiment");
  const tmp13 =
    tmp5Result.useConfig({ location: require("AnalyticsLocation").USER_PROFILE_MODAL_V2 }).enabled && isClipsAvailable;
  currentUser = tmp13;
  const items4 = [setting];
  const effect = stateFromStores2.useEffect(() => {
    const featuredWidgetConfigs = ApplicationWidgetConfigActions.fetchFeaturedWidgetConfigs();
    featuredWidgetConfigs.catch(() => {});
    if (setting) {
      const developerWidgetConfigs = ApplicationWidgetConfigActions.fetchDeveloperWidgetConfigs();
      developerWidgetConfigs.catch(() => {});
      const tmpResult = ApplicationWidgetConfigActions;
    }
  }, items4);
  const items5 = [setting, stateFromStores1, stateFromStores2, stateFromStores3, tmp6Result, tmp13];
  return stateFromStores2.useMemo(() => {
    let found = set1.filter((item) => item instanceof set(6961).ApplicationWidget);
    let set = new Set(found.map((applicationId) => applicationId.applicationId));
    set1 = new Set(set1.map((type) => type.type));
    let found1 = WIDGET_SORT_ORDER.filter((item) => {
      const ADDABLE_WIDGET_TYPES = set(14556).ADDABLE_WIDGET_TYPES;
      return ADDABLE_WIDGET_TYPES.has(item);
    });
    return found1.flatMap((type) => {
      if (setting(stateFromStores1[14]).WidgetType.APPLICATION === type) {
        items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(stateFromStores2, 0);
        const tmp18 = set ? stateFromStores3 : [];
        HermesBuiltin.arraySpread(tmp18, arraySpreadResult);
        set = new Set(items);
        const _Object = Object;
        const values = Object.values(dependencyMap);
        const mapped = values.map((item) => item[0]);
        const found = mapped.filter(setting(stateFromStores1[15]).isNotNullish);
        const found1 = found.filter((application_id) => set.has(application_id.application_id));
        const found2 = found1.filter((application_id) => !set.has(application_id.application_id));
        const found3 = found2.filter(hasAddableApplicationWidgetSurfaces);
        return found3.map((applicationId) => {
          const applicationWidget = new set(dependencyMap[12]).ApplicationWidget({
            applicationId: applicationId.application_id,
          });
          return applicationWidget;
        });
      } else if (setting(stateFromStores1[14]).WidgetType.CLIPS_GALLERY === type) {
        if (currentUser) {
          if (!set1.has(type)) {
            const obj = { clips: [] };
            let clipsGalleryWidget = new setting(stateFromStores1[16]).ClipsGalleryWidget(obj);
          }
          return clipsGalleryWidget;
        }
        clipsGalleryWidget = [];
      } else {
        if (tmpResult.isGameWidgetType(type)) {
          if (set1.has(type)) {
            let items1 = [];
          } else {
            const obj2 = { type, games: [] };
            items1 = new setting(stateFromStores1[17]).BaseGameWidget(obj2);
          }
        } else {
          return setting(stateFromStores1[15]).assertNever(type);
        }
        tmpResult = setting(stateFromStores1[17]);
      }
    });
  }, items5);
}
export { hasAddableApplicationWidgetSurfaces };
