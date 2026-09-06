// discord_app/modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(1975).isGuildOwnerWithRequiredMfaLevel;
const Constants = fn(1074);
({ GuildFeatures: c10, MFALevels: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  wrapper: { flex: 1, justifyContent: "space-between", paddingTop: 99 },
  center: null,
  label: null,
  image: null,
  infoWrapper: null,
  button: null,
};
createStyles = {
  alignItems: "center",
  flexDirection: "column",
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
createStyles.center = createStyles;
createStyles.label = { textAlign: "center", marginBottom: 8 };
createStyles.image = { width: 295, height: 142, marginHorizontal: 35 };
createStyles.infoWrapper = { marginBottom: 40 };
createStyles.button = { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default function GuildSettingsModalSecurity(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_15();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj1 = guildId(504);
  const items1 = [GuildSettingsStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => props.getProps().mfaLevel);
  const currentUser = UserStore.getCurrentUser();
  dependencyMap = tmp7;
  let mfaEnabled;
  if (currentUser != null) {
    mfaEnabled = currentUser.mfaEnabled;
  }
  let tmp9 = true === mfaEnabled && null != stateFromStores;
  if (tmp9) {
    tmp9 = closure_6(stateFromStores, currentUser);
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
  obj = { style: null, children: null };
  const items3 = [tmp.wrapper, guildId.contentContainerStyle];
  obj.style = items3;
  obj = { style: tmp.center, children: null };
  const callback = noop.useCallback(() => {
    if (null != stateFromStores) {
      let updateMFALevelResult = { guildId: tmp.id, level: closure_2 ? constants2.NONE : constants2.ELEVATED };
      updateMFALevelResult = updateMFALevelResult.updateMFALevel(updateMFALevelResult);
    }
  }, items2);
  obj1 = { style: tmp.label, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1114).intl;
  obj1.children = intl.string(guildId(1114).t.Wi9LEV);
  const items4 = [closure_12(guildId(4556).Text, obj1), ,];
  const obj2 = { style: tmp.button, children: null };
  const intl2 = tmp2(1114).intl;
  const string = intl2.string;
  const t = tmp2(1114).t;
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
  obj3.variant = str;
  obj3.onPress = callback;
  obj2.children = closure_12(guildId(4975).Button, obj3);
  items4[1] = closure_12(closure_4, obj2);
  let hasItem;
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants.DISCOVERABLE);
  }
  let tmp17Result = null;
  if (hasItem) {
    const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(1114).intl;
    obj4.children = intl3.string(tmp2(1114).t["KG1V/E"]);
    tmp17Result = closure_12(tmp2(4556).Text, obj4);
  }
  const obj5 = { children: null };
  items4[2] = tmp17Result;
  obj.children = items4;
  const items5 = [closure_13(closure_4, obj)];
  const obj6 = { style: tmp.center, children: null };
  const items6 = [closure_12(closure_5, { source: stateFromStores(14792), style: tmp.image, resizeMode: "contain" })];
  const obj8 = { style: tmp.infoWrapper, children: null };
  const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl4 = tmp2(1114).intl;
  obj9.children = intl4.format(guildId(1114).t["FK0+iX"], {});
  obj8.children = closure_12(guildId(4556).Text, obj9);
  items6[1] = closure_12(closure_4, obj8);
  obj6.children = items6;
  items5[1] = closure_13(closure_4, obj6);
  obj.children = items5;
  const items7 = [closure_13(closure_4, obj), closure_12(guildId(7040).NavScrim, {})];
  obj5.children = items7;
  return closure_13(closure_14, obj5);
}
