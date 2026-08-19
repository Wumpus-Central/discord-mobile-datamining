// discord_app/modules/instant_invite/native/components/InstantInviteEmptyState.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ClearButtonDefault from "../../../../design/void/Form/native/FreeFormTextInput.tsx";
import isGuildMemberDefault from "../../../../utils/InstantInviteUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/12367_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import updateWithLatestInvite from "../../../../stores/CreateInviteModalStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { width: 48, height: 48, justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.xs };
createCacheKey[7] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default function _default(link) {
  let str = link.link;
  let stateFromStores;
  ({ onCopy, onShare, onPressSettings } = link);
  const tmp = callback2();
  let obj = stateFromStores(589);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  obj = { containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateArt, titleStyle: tmp.emptyStateTitle, source: registerAssetDefault, title: null, body: null };
  const intl = stateFromStores(1236).intl;
  obj[4] = intl.string(stateFromStores(1236).t.tQc0l8);
  const intl2 = stateFromStores(1236).intl;
  obj[5] = intl2.string(stateFromStores(1236).t.DXgdcD);
  const items1 = [callback(stateFromStores(1297).RefreshEmptyState, obj), , , ];
  obj1 = { style: tmp.linkContainer, children: null };
  const obj2 = { accessibilityRole: "button", onPress: onCopy, editable: false, value: null, style: null, forceAccessibleContainer: true, clearButtonVisibility: null };
  if (str == null) {
    str = "";
  }
  obj2[3] = str;
  obj2[4] = tmp.inviteInput;
  obj2[6] = stateFromStores(1297).ClearButtonVisibility.NEVER;
  const items2 = [callback(ClearButtonDefault, obj2), ];
  const obj3 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl3 = tmp2(1236).intl;
  obj3[0] = intl3.string(stateFromStores(1236).t["3D5yo/"]);
  obj3[2] = onPressSettings;
  obj3[3] = tmp.settingsButton;
  obj3[4] = callback(stateFromStores(7355).SettingsIcon, {});
  items2[1] = callback(stateFromStores(5433).PressableOpacity, obj3);
  obj1[1] = items2;
  items1[1] = callback(View, obj1);
  const obj4 = { style: tmp.expireCaption, variant: "text-xs/medium", color: "text-muted", children: null };
  if (null == stateFromStores) {
    obj4[3] = null;
    items1[2] = callback(tmp10, obj4);
    const obj5 = { text: null, onPress: null };
    const intl5 = tmp2(1236).intl;
    obj5[0] = intl5.string(tmp2(1236).t.Ej3B3Y);
    obj5[1] = onShare;
    items1[3] = callback(tmp2(4745).Button, obj5);
    obj[1] = items1;
    return callback(View, obj);
  } else {
    const maxAgeOptionByValue = isGuildMemberDefault.getMaxAgeOptionByValue(stateFromStores.maxAge);
    let str2 = "";
    let str3 = "";
    if (null != maxAgeOptionByValue) {
      let descriptiveLabel = maxAgeOptionByValue.descriptiveLabel;
      if (descriptiveLabel == null) {
        descriptiveLabel = str2;
      }
      str3 = descriptiveLabel;
    }
    const getMaxUsesOptions = isGuildMemberDefault.getMaxUsesOptions;
    const found = getMaxUsesOptions.find((item, index) => item.value === stateFromStores.maxUses);
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
    const tmp8Result = isGuildMemberDefault;
  }
};