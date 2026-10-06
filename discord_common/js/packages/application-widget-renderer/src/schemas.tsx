// discord_common/js/packages/application-widget-renderer/src/schemas.tsx
import ApplicationWidgetFieldPresentationType from "../../../shared/shared-constants/ApplicationWidgetFieldPresentationType.tsx";
import ApplicationWidgetFieldValueType from "../../../shared/shared-constants/ApplicationWidgetFieldValueType.tsx";
import z18 from "../../../../../_runtime/08636_z.js";
import ApplicationWidgetConfigSurface from "../../../shared/shared-constants/ApplicationWidgetConfigSurface.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let partialRecord;
let partialRecord2;
let z11;
let z13;
let z15;
let z2;
let z3;
let z4;
let z6;
let z7;
let z8;
const z = z18.z;
const object = z.object;
const obj = {
  value_type: z2.enum(ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType),
  presentation_type: z3.enum(ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType),
  value: z4.string(),
};
z2 = z18.z;
z3 = z18.z;
z4 = z18.z;
const objectResult = object(obj);
const z5 = z18.z;
const object2 = z5.object;
const obj2 = {
  value_type: z6.enum(ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType),
  presentation_type: z7.enum(ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType),
  value: z8.string(),
  fallback: objectResult.nullish(),
};
z6 = z18.z;
z7 = z18.z;
z8 = z18.z;
const object1Result = object2(obj2);
const z9 = z18.z;
const object3 = z9.object;
const obj3 = { fields: partialRecord(z11.string(), object1Result) };
const z10 = z18.z;
partialRecord = z10.partialRecord;
z11 = z18.z;
const object5Result = object3(obj3);
const z12 = z18.z;
const object4 = z12.object;
const obj4 = { layout: z13.string(), components: partialRecord2(z15.string(), object5Result) };
z13 = z18.z;
const z14 = z18.z;
partialRecord2 = z14.partialRecord;
z15 = z18.z;
const object6Result = object4(obj4);
const z16 = z18.z;
const partialRecord3 = z16.partialRecord;
const z17 = z18.z;
const partialRecord3Result = partialRecord3(
  z17.enum(ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface),
  object6Result,
);
const result = size.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/schemas.tsx");

export const applicationWidgetStaticFieldConfigSchema = objectResult;
export const applicationWidgetFieldConfigSchema = object1Result;
export const applicationWidgetComponentConfigSchema = object5Result;
export const applicationWidgetSurfaceConfigSchema = object6Result;
export const applicationWidgetSurfaceConfigsSchema = partialRecord3Result;
