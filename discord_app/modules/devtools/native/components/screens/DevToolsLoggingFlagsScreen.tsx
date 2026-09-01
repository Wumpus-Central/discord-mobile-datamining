// discord_app/modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx
import set from "../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import TableRowGroupTitle from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import closure_3 from "../../../../../stores/DeveloperOptionsStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const ScrollView = get_ActivityIndicator.ScrollView;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, content: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
obj[1] = { padding: ThemesDefault.space.PX_16 };
let closure_6 = createCacheKey.createStyles(obj);
const obj1 = { padding: ThemesDefault.space.PX_16 };
const result = set.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default function DevToolsLoggingFlagsScreen() {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    isLoggingGatewayEvents: closure_3.isLoggingGatewayEvents,
    isLoggingAnalyticsEvents: closure_3.isLoggingAnalyticsEvents,
    isTracingRequests: closure_3.isTracingRequests,
  }));
  obj = { style: tmp.container, contentContainerStyle: tmp.content, children: null };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  obj = { title: "Logging", hasIcons: false, children: null };
  const items1 = [
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Gateway Events",
      subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
      value: isLoggingGatewayEvents,
      onValueChange(logGatewayEvents) {
        let obj = callback(708);
        obj = { logGatewayEvents };
        return obj.setDeveloperOptionSettings(obj);
      },
    }),
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Analytics Events",
      subLabel: "Logs all analytics events to the developer console.",
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        let obj = callback(708);
        obj = { logAnalyticsEvents };
        return obj.setDeveloperOptionSettings(obj);
      },
    }),
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Tracing Requests",
      subLabel: "Force trace all client requests with APM.",
      value: isTracingRequests,
      onValueChange(trace) {
        let obj = callback(708);
        obj = { trace };
        return obj.setDeveloperOptionSettings(obj);
      },
    }),
  ];
  obj[2] = items1;
  obj[2] = callback2(TableRowGroupTitle.TableRowGroup, obj);
  return callback(ScrollView, obj);
}
