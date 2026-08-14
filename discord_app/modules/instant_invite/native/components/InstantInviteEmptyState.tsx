// discord_app/modules/instant_invite/native/components/InstantInviteEmptyState.tsx
import "noop";
import { View } from "get ActivityIndicator";
import updateWithLatestInvite from "updateWithLatestInvite";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/09151_registerAsset.js";
import { ClearButton } from "../../../../design/void/Form/native/FreeFormTextInput.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { padding: 16 }, emptyStateContainer: { padding: 0, marginBottom: 16 }, emptyStateArt: { marginBottom: 16 }, emptyStateTitle: { marginBottom: 4 }, linkContainer: { maxWidth: "100%", flexDirection: "row", marginBottom: 8, gap: 8 }, inviteInput: { flexShrink: 1 }, expireCaption: { marginBottom: 16 }, settingsButton: null };
createCacheKey = { width: 48, height: 48, justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs };
createCacheKey[7] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("updateWithLatestInvite").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default function _default(link) {
  let onCopy;
  let onPressSettings;
  let onShare;
  let str = link.link;
  let stateFromStores;
  ({ onCopy, onShare, onPressSettings } = link);
  const tmp = createCacheKey();
  let obj = stateFromStores(589);
  const items = [updateWithLatestInvite];
  stateFromStores = obj.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  obj = { style: tmp.container, children: null };
  obj = { containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateArt, titleStyle: tmp.emptyStateTitle, source: null, title: null, body: null };
  obj[3] = registerAsset;
  const intl = stateFromStores(1236).intl;
  obj[4] = intl.string(stateFromStores(1236).t.tQc0l8);
  const intl2 = stateFromStores(1236).intl;
  obj[5] = intl2.string(stateFromStores(1236).t.DXgdcD);
  const items1 = [callback(stateFromStores(1297).RefreshEmptyState, obj), , , ];
  const obj1 = { style: tmp.linkContainer, children: null };
  const obj2 = { accessibilityRole: "button", onPress: onCopy, editable: false, value: null, style: null, forceAccessibleContainer: true, clearButtonVisibility: null };
  if (str == null) {
    str = "";
  }
  obj2[3] = str;
  obj2[4] = tmp.inviteInput;
  obj2[6] = stateFromStores(1297).ClearButtonVisibility.NEVER;
  const items2 = [callback(ClearButton, obj2), ];
  const obj3 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl3 = tmp2(1236).intl;
  obj3[0] = intl3.string(stateFromStores(1236).t["3D5yo/"]);
  obj3[2] = onPressSettings;
  obj3[3] = tmp.settingsButton;
  obj3[4] = callback(stateFromStores(6075).SettingsIcon, {});
  items2[1] = callback(stateFromStores(4909).PressableOpacity, obj3);
  obj1[1] = items2;
  items1[1] = closure_6(View, obj1);
  const obj4 = { style: tmp.expireCaption, variant: "text-xs/medium", color: "text-muted", children: null };
  if (null == stateFromStores) {
    obj4[3] = null;
    items1[2] = tmp7(tmp10, obj4);
    const obj5 = { text: null, onPress: null };
    const intl5 = tmp2(1236).intl;
    obj5[0] = intl5.string(tmp2(1236).t.Ej3B3Y);
    obj5[1] = onShare;
    items1[3] = tmp7(tmp2(4777).Button, obj5);
    obj[1] = items1;
    return tmp5(tmp6, obj);
  } else {
    const maxAgeOptionByValue = tmp8(9130).getMaxAgeOptionByValue(stateFromStores.maxAge);
    let str2 = "";
    let str3 = "";
    if (null != maxAgeOptionByValue) {
      let descriptiveLabel = maxAgeOptionByValue.descriptiveLabel;
      if (descriptiveLabel == null) {
        descriptiveLabel = str2;
      }
      str3 = descriptiveLabel;
    }
    const getMaxUsesOptions = tmp8(9130).getMaxUsesOptions;
    const found = getMaxUsesOptions.find((value) => value.value === stateFromStores.maxUses);
    if (null != found) {
      str2 = found.descriptiveLabel;
    }
    if (0 === stateFromStores.maxAge) {
      let dqPWMN = tmp2(1236).t["99ISmn"];
    } else {
      dqPWMN = tmp2(1236).t.dqPWMN;
    }
    const intl4 = tmp2(1236).intl;
    const obj6 = { maxAge: null, maxUses: null };
    obj6[0] = str3;
    obj6[1] = str2;
    intl4.format(dqPWMN, obj6);
    const tmp8Result = tmp8(9130);
  }
};