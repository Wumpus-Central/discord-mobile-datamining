// discord_common/js/packages/application-widget-renderer/src/schemas.tsx
import ApplicationWidgetFieldPresentationType from "../../../shared/shared-constants/ApplicationWidgetFieldPresentationType.tsx";
import ApplicationWidgetFieldValueType from "../../../shared/shared-constants/ApplicationWidgetFieldValueType.tsx";
import _mod9291 from "../../../../../_runtime/metro/09291__.js";
import ApplicationWidgetConfigSurface from "../../../shared/shared-constants/ApplicationWidgetConfigSurface.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const z = _mod9291.z;
const obj = { value_type: null, presentation_type: null, value: null };
const z2 = _mod9291.z;
obj.value_type = z2.enum(ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType);
const z3 = _mod9291.z;
obj.presentation_type = z3.enum(ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType);
const z4 = _mod9291.z;
obj.value = z4.string();
const objectResult = z.object(obj);
const z5 = _mod9291.z;
const obj2 = { value_type: null, presentation_type: null, value: null, fallback: null };
const z6 = _mod9291.z;
obj2.value_type = z6.enum(ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType);
const z7 = _mod9291.z;
obj2.presentation_type = z7.enum(ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType);
const z8 = _mod9291.z;
obj2.value = z8.string();
obj2.fallback = objectResult.nullish();
const objectResult4 = z5.object(obj2);
const z9 = _mod9291.z;
const obj3 = { fields: null };
const z10 = _mod9291.z;
const z11 = _mod9291.z;
obj3.fields = z10.partialRecord(z11.string(), objectResult4);
const objectResult5 = z9.object(obj3);
const z12 = _mod9291.z;
const obj4 = { layout: null, components: null };
const z13 = _mod9291.z;
obj4.layout = z13.string();
const z14 = _mod9291.z;
const z15 = _mod9291.z;
obj4.components = z14.partialRecord(z15.string(), objectResult5);
const objectResult6 = z12.object(obj4);
const z16 = _mod9291.z;
const z17 = _mod9291.z;
const result = size.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/schemas.tsx");

export const applicationWidgetStaticFieldConfigSchema = objectResult;
export const applicationWidgetFieldConfigSchema = objectResult4;
export const applicationWidgetComponentConfigSchema = objectResult5;
export const applicationWidgetSurfaceConfigSchema = objectResult6;
export const applicationWidgetSurfaceConfigsSchema = z16.partialRecord(
  z17.enum(ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface),
  objectResult6,
);
