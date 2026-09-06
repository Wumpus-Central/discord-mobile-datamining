// discord_app/modules/tti_analytics/native/TTIMeasurementView.tsx
import TTIMeasurementNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/TTIMeasurementNativeComponent.tsx";
import requireNativeComponentOrDefault from "../../../utils/native/requireNativeComponentOrDefault.native.tsx";

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
