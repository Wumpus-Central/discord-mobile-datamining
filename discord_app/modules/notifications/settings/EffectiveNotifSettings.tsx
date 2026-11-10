// === Module 15891: EffectiveNotifSettings ===

// Module 15891 (EffectiveNotifSettings)
import _slicedToArray from "module_32" /* 32 */;

const z = fn(15892).z;
const obj = { value: null, source: null, explicit: null, inherited: null, setting_id: null, source_setting_id: null, legacy_path: null };
const z2 = fn(15892).z;
obj.value = z2.boolean();
const z3 = fn(15892).z;
obj.source = z3.enum(["legacy_proto", "legacy_default", "declarative", "declarative_sibling", "declarative_retired"]);
const z4 = fn(15892).z;
obj.explicit = z4.boolean();
const z5 = fn(15892).z;
obj.inherited = z5.boolean();
const z6 = fn(15892).z;
const numberResult = z6.number();
obj.setting_id = z6.number().int().positive();
const z7 = fn(15892).z;
const intResult = z6.number().int();
const numberResult1 = z7.number();
const intResult1 = z7.number().int();
obj.source_setting_id = z7.number().int().positive().nullable();
const z8 = fn(15892).z;
const positiveResult = z7.number().int().positive();
obj.legacy_path = z8.string().regex(/^[a-z][a-z_]*\.[a-z][a-z_]*$/);
const objectResult = z.object(obj);
const z9 = fn(15892).z;
const obj2 = { contract_version: null, account_id: null, arm: null, legacy_data_version: null, declarative_data_version: null, preferences: null };
const z10 = fn(15892).z;
obj2.contract_version = z10.literal(1);
const z11 = fn(15892).z;
obj2.account_id = z11.string();
const z12 = fn(15892).z;
obj2.arm = z12.literal("treatment");
const z13 = fn(15892).z;
const stringResult = z8.string();
const numberResult2 = z13.number();
obj2.legacy_data_version = z13.number().int().nonnegative();
const z14 = fn(15892).z;
const intResult2 = z13.number().int();
const numberResult3 = z14.number();
obj2.declarative_data_version = z14.number().int().nonnegative();
const z15 = fn(15892).z;
const intResult3 = z14.number().int();
obj2.preferences = z15.object({ go_live: objectResult, voice_channel_activity: objectResult, friends_gaming: objectResult, custom_status_update: objectResult, friend_online: objectResult, profile_updates: objectResult, server_trending: objectResult }).strip();
let closure_1 = z9.object(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/EffectiveNotifSettings.tsx");

export function parseEffectiveNotifSettings(effectiveSettings) {
  const safeParseResult = closure_1.safeParse(effectiveSettings);
  let data;
  if (safeParseResult.success) {
    const _Object = Object;
    if (Object.keys(safeParseResult.data.preferences).length > 0) {
      data = safeParseResult.data;
    }
  }
  return data;
}
export function legacySourceFingerprint(c2, settings) {
  const values = Object.values(preferences.preferences);
  return JSON.stringify(values.map((legacy_path) => {
    [str2, str3] = legacy_path.legacy_path.split(".");
    const replaced = str3.replace(/_([a-z])/g, (arg0, str) => str.toUpperCase());
    const tmp3 = settings[str2.replace(str2, /_([a-z])/g, (arg0, str) => str.toUpperCase())];
    let tmp4;
    if (tmp3 != null) {
      tmp4 = tmp3[replaced];
    }
    return tmp4;
  }));
}