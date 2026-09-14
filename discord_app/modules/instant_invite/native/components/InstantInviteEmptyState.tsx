// discord_app/modules/instant_invite/native/components/InstantInviteEmptyState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FreeFormTextInputDefault from "../../../../design/void/Form/native/FreeFormTextInput.tsx";
import InstantInviteUtilsDefault from "../../../../utils/InstantInviteUtils.tsx";
import _modDef9984 from "../../../../../_runtime/metro/09984__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: { padding: 16 },
  emptyStateContainer: { padding: 0, marginBottom: 16 },
  emptyStateArt: { marginBottom: 16 },
  emptyStateTitle: { marginBottom: 4 },
  linkContainer: { maxWidth: "100%", flexDirection: "row", marginBottom: 8, gap: 8 },
  inviteInput: { flexShrink: 1 },
  expireCaption: { marginBottom: 16 },
  settingsButton: null,
};
let size = {
  width: 48,
  height: 48,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
};
obj2.settingsButton = size;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default function _default(link) {
  let str = link.link;
  let stateFromStores;
  ({ onCopy, onShare, onPressSettings } = link);
  const tmp = closure_7();
  const items = [CreateInviteModalStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => inviteSettings.getInviteSettings());
  const obj2 = { style: tmp.container, children: null };
  const obj3 = {
    containerStyle: tmp.emptyStateContainer,
    imageStyle: tmp.emptyStateArt,
    titleStyle: tmp.emptyStateTitle,
    source: _modDef9984,
    title: null,
    body: null,
  };
  const intl = stateFromStores(1114).intl;
  obj3.title = intl.string(stateFromStores(1114).t.tQc0l8);
  const intl2 = stateFromStores(1114).intl;
  obj3.body = intl2.string(stateFromStores(1114).t.DXgdcD);
  const items1 = [closure_5(stateFromStores(1176).RefreshEmptyState, obj3), , ,];
  const obj4 = { style: tmp.linkContainer, children: null };
  const obj5 = {
    accessibilityRole: "button",
    onPress: onCopy,
    editable: false,
    value: null,
    style: null,
    forceAccessibleContainer: true,
    clearButtonVisibility: null,
  };
  const obj = stateFromStores(504);
  if (str == null) {
    str = "";
  }
  obj5.value = str;
  obj5.style = tmp.inviteInput;
  obj5.clearButtonVisibility = stateFromStores(1176).ClearButtonVisibility.NEVER;
  const items2 = [closure_5(FreeFormTextInputDefault, obj5)];
  const obj6 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl3 = tmp2(1114).intl;
  obj6.accessibilityLabel = intl3.string(stateFromStores(1114).t["3D5yo/"]);
  obj6.onPress = onPressSettings;
  obj6.style = tmp.settingsButton;
  obj6.children = closure_5(stateFromStores(7483).SettingsIcon, {});
  items2[1] = closure_5(stateFromStores(5204).PressableOpacity, obj6);
  obj4.children = items2;
  items1[1] = closure_6(View, obj4);
  const obj7 = { style: tmp.expireCaption, variant: "text-xs/medium", color: "text-muted", children: null };
  if (null == stateFromStores) {
    obj7.children = null;
    items1[2] = closure_5(tmp10, obj7);
    const obj8 = { text: null, onPress: null };
    const intl5 = tmp2(1114).intl;
    obj8.text = intl5.string(tmp2(1114).t.Ej3B3Y);
    obj8.onPress = onShare;
    items1[3] = closure_5(tmp2(5056).Button, obj8);
    obj2.children = items1;
    return closure_6(View, obj2);
  } else {
    const maxAgeOptionByValue = InstantInviteUtilsDefault.getMaxAgeOptionByValue(stateFromStores.maxAge);
    let str2 = "";
    let str3 = "";
    if (null != maxAgeOptionByValue) {
      let descriptiveLabel = maxAgeOptionByValue.descriptiveLabel;
      if (descriptiveLabel == null) {
        descriptiveLabel = str2;
      }
      str3 = descriptiveLabel;
    }
    const getMaxUsesOptions = InstantInviteUtilsDefault.getMaxUsesOptions;
    const found = getMaxUsesOptions.find((value) => value.value === stateFromStores.maxUses);
    if (null != found) {
      str2 = found.descriptiveLabel;
    }
    if (0 === stateFromStores.maxAge) {
      let dqPWMN = tmp2(1114).t["99ISmn"];
    } else {
      dqPWMN = tmp2(1114).t.dqPWMN;
    }
    const intl4 = tmp2(1114).intl;
    const obj9 = { maxAge: str3, maxUses: str2 };
    intl4.format(dqPWMN, obj9);
    const tmp8Result = InstantInviteUtilsDefault;
  }
}
