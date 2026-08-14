// discord_app/modules/guild/native/GuildIconUploader.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import handleThemeChange from "handleThemeChange";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { registerAsset } from "../../../../_runtime/11267_registerAsset.js";
import { registerAsset } from "../../../../_runtime/11268_registerAsset.js";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { AccessibilityAnnouncer } from "../../../design/shared.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { width: 82, height: 82, marginTop: 4 }, guildPlaceholder: null, guildIcon: null, iconWrapperBorder: null, filledIconWrapper: null, emptyIconWrapper: null, emptyGuildIcon: null, emptyGuildIconText: null, uploadIcon: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 82, height: 82, borderRadius: 41 };
createCacheKey[3] = { position: "absolute", top: -8, right: -8, width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { width: 32, height: 32, borderRadius: require("Themes").radii.lg, justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
let obj1 = { width: 32, height: 32, borderRadius: require("Themes").radii.lg, justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[5] = { position: "absolute", top: -4, right: -4, width: 32, height: 32, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
let obj2 = { position: "absolute", top: -4, right: -4, width: 32, height: 32, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
createCacheKey[6] = { borderWidth: 2, borderStyle: "dashed", justifyContent: "center", alignItems: "center", borderColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[7] = { textAlign: "center", lineHeight: 16, paddingTop: 4 };
createCacheKey[8] = { height: 16, width: 16 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class GuildIconUploader extends PureComponent {
}
const prototype = GuildIconUploader.prototype;
prototype["renderIcon"] = function renderIcon() {
  const tmp = createCacheKey(this.context);
  const icon = this.props.icon;
  if (null != icon) {
    let obj = { style: null, source: null };
    const items = [, ];
    ({ guildIcon: arr2[0], guildPlaceholder: arr2[1] } = tmp);
    obj[0] = items;
    obj = { uri: null };
    obj[0] = icon;
    obj[1] = obj;
    let tmp6Result = callback(closure_4, obj);
  } else {
    const obj1 = { style: null, children: null };
    const items1 = [, ];
    ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
    obj1[0] = items1;
    if (obj6.isThemeDark(theme.theme)) {
      let tmp13Result = tmp13(11265);
    } else {
      tmp13Result = tmp13(11266);
    }
    obj = { source: null };
    obj[0] = tmp13Result;
    const items2 = [callback(closure_4, obj), ];
    const obj2 = { style: null, variant: "text-xs/bold", color: "text-default", children: null };
    obj2[0] = tmp.emptyGuildIconText;
    const intl = tmp10(1236).intl;
    obj6 = AccessibilityAnnouncer;
    const tmp6 = closure_7;
    const tmp7 = closure_3;
    const tmp9 = closure_4;
    obj2[3] = intl.string(getSystemLocale.t["3UB9ad"]).toUpperCase();
    items2[1] = callback(Text.Text, obj2);
    obj1[1] = items2;
    tmp6Result = tmp6(tmp7, obj1);
    const str = intl.string(getSystemLocale.t["3UB9ad"]);
  }
  return tmp6Result;
};
prototype["renderUpload"] = function renderUpload() {
  const tmp = createCacheKey(this.context);
  const props = this.props;
  const iconBackgroundColor = props.iconBackgroundColor;
  if (null != props.icon) {
    let obj = { style: null, children: null };
    const items = [tmp.iconWrapperBorder, ];
    obj = { backgroundColor: null };
    obj[0] = iconBackgroundColor;
    items[1] = obj;
    obj[0] = items;
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.filledIconWrapper;
    const obj2 = { style: null, source: null };
    const items1 = [tmp.uploadIcon, ];
    const obj3 = { tintColor: null };
    obj3[0] = iconBackgroundColor;
    items1[1] = obj3;
    obj2[0] = items1;
    obj2[1] = registerAsset;
    obj1[1] = tmp2(closure_4, obj2);
    obj[1] = tmp2(tmp3, obj1);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.emptyIconWrapper;
    const obj4 = { source: null };
    obj4[0] = registerAsset;
    obj[1] = tmp2(closure_4, obj4);
  }
  return closure_6(closure_3, obj);
};
prototype["render"] = function render() {
  let icon;
  let onPress;
  let style;
  const self = this;
  const tmp = createCacheKey(this.context);
  ({ style, onPress, icon } = this.props);
  if (null != icon) {
    const intl2 = tmp3(1236).intl;
    let stringResult = intl2.string(tmp3(1236).t.VATxfe);
  } else {
    const intl = tmp3(1236).intl;
    stringResult = intl.string(tmp3(1236).t["MsUY/S"]);
  }
  let obj = { accessibilityRole: "button", accessibilityLabel: stringResult, onPress, children: null };
  obj = { style: items, children: null };
  items = [tmp.container, style];
  obj = { style: tmp.guildIcon, children: self.renderIcon() };
  const items1 = [closure_6(closure_3, obj), self.renderUpload()];
  obj[1] = items1;
  obj[3] = callback2(closure_3, obj);
  return closure_6(PressableBase.PressableOpacity, obj);
};
GuildIconUploader.contextType = require("ManaContext").ThemeContext;
let obj3 = { borderWidth: 2, borderStyle: "dashed", justifyContent: "center", alignItems: "center", borderColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("handleThemeChange").fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default GuildIconUploader;