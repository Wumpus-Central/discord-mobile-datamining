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
let closure_6 = fn(2060).isGuildOwnerWithRequiredMfaLevel;
const Constants = fn(1074);
({ GuildFeatures: c10, MFALevels: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  wrapper: { flex: 1, justifyContent: "space-between", paddingTop: 99 },
  center: {
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  },
  label: { textAlign: "center", marginBottom: 8 },
  image: { width: 295, height: 142, marginHorizontal: 35 },
  infoWrapper: { marginBottom: 40 },
  button: { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 },
};
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default function GuildSettingsModalSecurity(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_15();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(504);
  const items1 = [GuildSettingsStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => props.getProps().mfaLevel);
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
  const obj3 = { style: null, children: null };
  const items3 = [tmp.wrapper, guildId.contentContainerStyle];
  obj3.style = items3;
  const obj4 = { style: tmp.center, children: null };
  const callback = noop.useCallback(() => {
    if (null != stateFromStores) {
      let obj2 = { guildId: tmp.id, level: closure_2 ? constants2.NONE : constants2.ELEVATED };
      obj2 = GuildSettingsActionCreatorsDefault.updateMFALevel(obj2);
    }
  }, items2);
  const obj5 = { style: tmp.label, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1115).intl;
  obj5.children = intl.string(guildId(1115).t.Wi9LEV);
  const items4 = [closure_12(guildId(4823).Text, obj5), ,];
  const obj6 = { style: tmp.button, children: null };
  const intl2 = tmp2(1115).intl;
  const string = intl2.string;
  const t = tmp2(1115).t;
  if (stateFromStores1 === constants2.ELEVATED) {
    let stringResult = string(t["MP0Ho+"]);
  } else {
    stringResult = string(t.yZcYGa);
  }
  const obj7 = { text: stringResult, disabled: !tmp9, variant: null, onPress: null, shrink: true };
  let str = "primary";
  if (stateFromStores1 === constants2.ELEVATED) {
    str = "destructive";
  }
  obj7.variant = str;
  obj7.onPress = callback;
  obj6.children = closure_12(guildId(5271).Button, obj7);
  items4[1] = closure_12(closure_4, obj6);
  let hasItem;
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants.DISCOVERABLE);
  }
  let tmp17Result = null;
  if (hasItem) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(1115).intl;
    obj8.children = intl3.string(tmp2(1115).t["KG1V/E"]);
    tmp17Result = closure_12(tmp2(4823).Text, obj8);
  }
  const obj9 = { children: null };
  items4[2] = tmp17Result;
  obj4.children = items4;
  const items5 = [closure_13(closure_4, obj4)];
  const obj10 = { style: tmp.center, children: null };
  let obj2 = guildId(504);
  const items6 = [closure_12(closure_5, { source: stateFromStores(15127), style: tmp.image, resizeMode: "contain" })];
  const obj12 = { style: tmp.infoWrapper, children: null };
  const obj13 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl4 = tmp2(1115).intl;
  obj13.children = intl4.format(guildId(1115).t["FK0+iX"], {});
  obj12.children = closure_12(guildId(4823).Text, obj13);
  items6[1] = closure_12(closure_4, obj12);
  obj10.children = items6;
  items5[1] = closure_13(closure_4, obj10);
  obj3.children = items5;
  const items7 = [closure_13(closure_4, obj3), closure_12(guildId(7371).NavScrim, {})];
  obj9.children = items7;
  return closure_13(closure_14, obj9);
}
