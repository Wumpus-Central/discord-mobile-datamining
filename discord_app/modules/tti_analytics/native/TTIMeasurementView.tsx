// discord_app/modules/tti_analytics/native/TTIMeasurementView.tsx
import TTIMeasurementNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/TTIMeasurementNativeComponent.tsx";
import requireNativeComponentOrDefault from "../../../utils/native/requireNativeComponentOrDefault.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: TTIMeasurementNativeComponentDefault };
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = importDefaultResultResult;
