// === Module 8932: schemas ===

// Module 8932 (schemas)
import ApplicationWidgetFieldPresentationType from "ApplicationWidgetFieldPresentationType" /* 8930 */;
import ApplicationWidgetFieldValueType from "ApplicationWidgetFieldValueType" /* 8931 */;
import _mod8933 from "module_8933" /* 8933 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 9009 */;
import size from "module_2" /* 2 */;

const z = _mod8933.z;
let obj = { value_type: null, presentation_type: null, value: null };
const z2 = _mod8933.z;
obj.value_type = z2.enum(ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType);
const z3 = _mod8933.z;
obj.presentation_type = z3.enum(ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType);
const z4 = _mod8933.z;
obj.value = z4.string();
let objectResult = z.object(obj);
const z5 = _mod8933.z;
obj = { value_type: null, presentation_type: null, value: null, fallback: null };
const z6 = _mod8933.z;
obj.value_type = z6.enum(ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType);
const z7 = _mod8933.z;
obj.presentation_type = z7.enum(ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType);
const z8 = _mod8933.z;
obj.value = z8.string();
obj.fallback = objectResult.nullish();
objectResult = z5.object(obj);
const z9 = _mod8933.z;
obj = { fields: null };
const z10 = _mod8933.z;
const z11 = _mod8933.z;
obj.fields = z10.partialRecord(z11.string(), objectResult);
const objectResult1 = z9.object(obj);
const z12 = _mod8933.z;
const obj1 = { layout: null, components: null };
const z13 = _mod8933.z;
obj1.layout = z13.string();
const z14 = _mod8933.z;
const z15 = _mod8933.z;
obj1.components = z14.partialRecord(z15.string(), objectResult1);
const objectResult2 = z12.object(obj1);
const z16 = _mod8933.z;
const z17 = _mod8933.z;
const result = size.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/schemas.tsx");

export const applicationWidgetStaticFieldConfigSchema = objectResult;
export const applicationWidgetFieldConfigSchema = objectResult;
export const applicationWidgetComponentConfigSchema = objectResult1;
export const applicationWidgetSurfaceConfigSchema = objectResult2;
export const applicationWidgetSurfaceConfigsSchema = z16.partialRecord(z17.enum(ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface), objectResult2);