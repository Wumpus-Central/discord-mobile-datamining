// discord_app/modules/instant_invite/native/components/InstantInviteEmptyState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FreeFormTextInputDefault from "../../../../design/void/Form/native/FreeFormTextInput.tsx";
import InstantInviteUtilsDefault from "../../../../utils/InstantInviteUtils.tsx";
import _modDef9854 from "../../../../../_runtime/metro/09854__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
const createStyles = {
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
createStyles.settingsButton = size;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default function _default(link) {
  let str = link.link;
  let stateFromStores;
  ({ onCopy, onShare, onPressSettings } = link);
  const tmp = closure_7();
  let obj = stateFromStores(504);
  const items = [CreateInviteModalStore];
  stateFromStores = obj.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  obj = { style: tmp.container, children: null };
  obj = {
    containerStyle: tmp.emptyStateContainer,
    imageStyle: tmp.emptyStateArt,
    titleStyle: tmp.emptyStateTitle,
    source: _modDef9854,
    title: null,
    body: null,
  };
  const intl = stateFromStores(1114).intl;
  obj.title = intl.string(stateFromStores(1114).t.tQc0l8);
  const intl2 = stateFromStores(1114).intl;
  obj.body = intl2.string(stateFromStores(1114).t.DXgdcD);
  const items1 = [closure_5(stateFromStores(1178).RefreshEmptyState, obj), , ,];
  const obj1 = { style: tmp.linkContainer, children: null };
  const obj2 = {
    accessibilityRole: "button",
    onPress: onCopy,
    editable: false,
    value: null,
    style: null,
    forceAccessibleContainer: true,
    clearButtonVisibility: null,
  };
  if (str == null) {
    str = "";
  }
  obj2.value = str;
  obj2.style = tmp.inviteInput;
  obj2.clearButtonVisibility = stateFromStores(1178).ClearButtonVisibility.NEVER;
  const items2 = [closure_5(FreeFormTextInputDefault, obj2)];
  const obj3 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl3 = tmp2(1114).intl;
  obj3.accessibilityLabel = intl3.string(stateFromStores(1114).t["3D5yo/"]);
  obj3.onPress = onPressSettings;
  obj3.style = tmp.settingsButton;
  obj3.children = closure_5(stateFromStores(7380).SettingsIcon, {});
  items2[1] = closure_5(stateFromStores(5123).PressableOpacity, obj3);
  obj1.children = items2;
  items1[1] = closure_6(View, obj1);
  const obj4 = { style: tmp.expireCaption, variant: "text-xs/medium", color: "text-muted", children: null };
  if (null == stateFromStores) {
    obj4.children = null;
    items1[2] = closure_5(tmp10, obj4);
    const obj5 = { text: null, onPress: null };
    const intl5 = tmp2(1114).intl;
    obj5.text = intl5.string(tmp2(1114).t.Ej3B3Y);
    obj5.onPress = onShare;
    items1[3] = closure_5(tmp2(4975).Button, obj5);
    obj.children = items1;
    return closure_6(View, obj);
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
    const obj6 = { maxAge: str3, maxUses: str2 };
    intl4.format(dqPWMN, obj6);
    const tmp8Result = InstantInviteUtilsDefault;
  }
}
