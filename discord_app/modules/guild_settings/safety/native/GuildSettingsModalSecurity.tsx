import noop from "noop";
import get_ActivityIndicator from "set";
import { isGuildOwnerWithRequiredMfaLevel as closure_6 } from "GuildNSFWContentLevel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleFormInit from "handleFormInit";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ GuildFeatures: c10, MFALevels: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { wrapper: { flex: 1, justifyContent: "space-between", paddingTop: 99 }, center: null, label: null, image: null, infoWrapper: null, button: null };
createCacheKey = { alignItems: "center", flexDirection: "column", paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center", marginBottom: 8 };
createCacheKey[3] = { width: 295, height: 142, marginHorizontal: 35 };
createCacheKey[4] = { marginBottom: 40 };
createCacheKey[5] = { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("GuildNSFWContentLevel").fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default function GuildSettingsModalSecurity(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  let dependencyMap;
  const tmp = createCacheKey();
  let obj = guildId(589);
  const items = [createGuildRecordFromRust];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(guildId));
  let obj1 = guildId(589);
  const items1 = [handleFormInit];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => props.getProps().mfaLevel);
  currentUser = currentUser.getCurrentUser();
  dependencyMap = tmp7;
  let mfaEnabled;
  if (currentUser != null) {
    mfaEnabled = currentUser.mfaEnabled;
  }
  let tmp9 = true === mfaEnabled && null != stateFromStores;
  if (tmp9) {
    tmp9 = callback(stateFromStores, currentUser);
  }
  if (tmp9) {
    let tmp11 = !tmp7;
    if (tmp7) {
      const features = stateFromStores.features;
      tmp11 = !features.has(constants.DISCOVERABLE);
    }
    tmp9 = tmp11;
  }
  const items2 = [stateFromStores, stateFromStores1 === constants2.ELEVATED];
  obj = { style: items3, children: null };
  items3 = [tmp.wrapper, guildId.contentContainerStyle];
  obj = { style: tmp.center, children: null };
  callback = React.useCallback(() => {
    if (null != stateFromStores) {
      let updateMFALevelResult = stateFromStores(_undefined[11]);
      updateMFALevelResult = { guildId: null, level: null };
      updateMFALevelResult[0] = tmp.id;
      updateMFALevelResult[1] = _undefined ? outer1_11.NONE : outer1_11.ELEVATED;
      updateMFALevelResult = updateMFALevelResult.updateMFALevel(updateMFALevelResult);
    }
  }, items2);
  obj1 = { style: tmp.label, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1236).intl;
  obj1[3] = intl.string(guildId(1236).t.Wi9LEV);
  const items4 = [callback2(guildId(4251).Text, obj1), , ];
  const obj2 = { style: tmp.button, children: null };
  const intl2 = tmp2(1236).intl;
  const string = intl2.string;
  const t = tmp2(1236).t;
  if (stateFromStores1 === constants2.ELEVATED) {
    let stringResult = string(t["MP0Ho+"]);
  } else {
    stringResult = string(t.yZcYGa);
  }
  const obj3 = { text: stringResult, disabled: !tmp9, variant: null, onPress: null, shrink: true };
  let str = "primary";
  if (stateFromStores1 === constants2.ELEVATED) {
    str = "destructive";
  }
  obj3[2] = str;
  obj3[3] = callback;
  obj2[1] = callback2(guildId(4666).Button, obj3);
  items4[1] = callback2(closure_4, obj2);
  let hasItem;
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants.DISCOVERABLE);
  }
  let tmp17Result = null;
  if (hasItem) {
    const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(1236).intl;
    obj4[2] = intl3.string(tmp2(1236).t["KG1V/E"]);
    tmp17Result = tmp17(tmp2(4251).Text, obj4);
  }
  const obj5 = { children: null };
  items4[2] = tmp17Result;
  obj[1] = items4;
  const items5 = [closure_13(closure_4, obj), ];
  const obj6 = { style: tmp.center, children: null };
  const items6 = [callback2(closure_5, { source: stateFromStores(13909), style: tmp.image, resizeMode: "contain" }), ];
  const obj8 = { style: tmp.infoWrapper, children: null };
  const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl4 = tmp2(1236).intl;
  obj9[2] = intl4.format(guildId(1236).t["FK0+iX"], {});
  obj8[1] = callback2(guildId(4251).Text, obj9);
  items6[1] = callback2(closure_4, obj8);
  obj6[1] = items6;
  items5[1] = closure_13(closure_4, obj6);
  obj[1] = items5;
  const items7 = [closure_13(closure_4, obj), callback2(guildId(5567).NavScrim, {})];
  obj5[0] = items7;
  return closure_13(closure_14, obj5);
};