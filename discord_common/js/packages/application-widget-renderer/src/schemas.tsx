// === Module 12896: applicationWidgetStaticFieldConfigSchema ===

// Module 12896 (applicationWidgetStaticFieldConfigSchema)
import set from "set" /* 2 */;
import ApplicationWidgetFieldPresentationType from "ApplicationWidgetFieldPresentationType" /* 12894 */;
import ApplicationWidgetFieldValueType from "ApplicationWidgetFieldValueType" /* 12895 */;
import _mod12897 from "module_12897" /* 12897 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 12973 */;

const z = _mod12897.z;
let obj = { value_type: null, presentation_type: null, value: null };
const z2 = _mod12897.z;
obj[0] = z2.enum(ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType);
const z3 = _mod12897.z;
obj[1] = z3.enum(ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType);
const z4 = _mod12897.z;
obj[2] = z4.string();
let objectResult = z.object(obj);
const z5 = _mod12897.z;
obj = { value_type: null, presentation_type: null, value: null, fallback: null };
const z6 = _mod12897.z;
obj[0] = z6.enum(ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType);
const z7 = _mod12897.z;
obj[1] = z7.enum(ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType);
const z8 = _mod12897.z;
obj[2] = z8.string();
obj[3] = objectResult.nullish();
objectResult = z5.object(obj);
const z9 = _mod12897.z;
obj = { fields: null };
const z10 = _mod12897.z;
const z11 = _mod12897.z;
obj[0] = z10.partialRecord(z11.string(), objectResult);
const objectResult1 = z9.object(obj);
const z12 = _mod12897.z;
const obj1 = { layout: null, components: null };
const z13 = _mod12897.z;
obj1[0] = z13.string();
const z14 = _mod12897.z;
const z15 = _mod12897.z;
obj1[1] = z14.partialRecord(z15.string(), objectResult1);
const objectResult2 = z12.object(obj1);
const z16 = _mod12897.z;
const z17 = _mod12897.z;
const partialRecordResult = z16.partialRecord(z17.enum(ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface), objectResult2);
const result = set.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/schemas.tsx");

export const applicationWidgetStaticFieldConfigSchema = objectResult;
export const applicationWidgetFieldConfigSchema = objectResult;
export const applicationWidgetComponentConfigSchema = objectResult1;
export const applicationWidgetSurfaceConfigSchema = objectResult2;
export const applicationWidgetSurfaceConfigsSchema = partialRecordResult;