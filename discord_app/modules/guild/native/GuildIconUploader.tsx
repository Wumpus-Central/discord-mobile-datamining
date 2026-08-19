// === Module 10977: renderIcon ===

// Module 10977 (renderIcon)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import registerAssetDefault from "registerAsset" /* 10978 */;
import registerAssetDefault2 from "registerAsset" /* 10979 */;
import registerAssetDefault3 from "registerAsset" /* 10980 */;
import registerAssetDefault4 from "registerAsset" /* 10981 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 82, height: 82, borderRadius: 41 };
createCacheKey[3] = { position: "absolute", top: -8, right: -8, width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[5] = { position: "absolute", top: -4, right: -4, width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
createCacheKey[6] = { borderWidth: 2, borderStyle: "dashed", justifyContent: "center", alignItems: "center", borderColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[7] = { textAlign: "center", lineHeight: 16, paddingTop: 4 };
createCacheKey[8] = { height: 16, width: 16 };
let closure_8 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class GuildIconUploader extends PureComponent {
}
const prototype = GuildIconUploader.prototype;
prototype["renderIcon"] = function renderIcon() {
  const tmp = callback3(this.context);
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
    obj1 = { style: null, children: null };
    const items1 = [, ];
    ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
    obj1[0] = items1;
    if (obj6.isThemeDark(theme.theme)) {
      let tmp13Result = registerAssetDefault;
    } else {
      tmp13Result = registerAssetDefault2;
    }
    obj = { source: null };
    obj[0] = tmp13Result;
    const items2 = [callback(closure_4, obj), ];
    const obj2 = { style: null, variant: "text-xs/bold", color: "text-default", children: null };
    obj2[0] = tmp.emptyGuildIconText;
    const intl = getSystemLocale.intl;
    obj6 = AccessibilityAnnouncer;
    obj2[3] = intl.string(getSystemLocale.t["3UB9ad"]).toUpperCase();
    items2[1] = callback(Text.Text, obj2);
    obj1[1] = items2;
    tmp6Result = callback2(closure_3, obj1);
    const str = intl.string(getSystemLocale.t["3UB9ad"]);
  }
  return tmp6Result;
};
prototype["renderUpload"] = function renderUpload() {
  const tmp = callback3(this.context);
  const props = this.props;
  const iconBackgroundColor = props.iconBackgroundColor;
  if (null != props.icon) {
    const items = [tmp.iconWrapperBorder, ];
    let obj = { backgroundColor: null };
    obj[0] = iconBackgroundColor;
    items[1] = obj;
    obj[0] = items;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.filledIconWrapper;
    const obj2 = { style: null, source: null };
    const items1 = [tmp.uploadIcon, ];
    const obj3 = { tintColor: null };
    obj3[0] = iconBackgroundColor;
    items1[1] = obj3;
    obj2[0] = items1;
    obj2[1] = registerAssetDefault3;
    obj1[1] = callback(closure_4, obj2);
    obj[1] = callback(closure_3, obj1);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.emptyIconWrapper;
    const obj4 = { source: null };
    obj4[0] = registerAssetDefault4;
    obj[1] = callback(closure_4, obj4);
  }
  return callback(closure_3, obj);
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback3(this.context);
  ({ style, onPress, icon } = this.props);
  if (null != icon) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.VATxfe);
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["MsUY/S"]);
  }
  const items = [tmp.container, style];
  const obj = { style: tmp.guildIcon, children: self.renderIcon() };
  const items1 = [callback(closure_3, obj), self.renderUpload()];
  obj[1] = items1;
  obj[3] = callback2(closure_3, obj);
  return callback(PressableBase.PressableOpacity, obj);
};
GuildIconUploader.contextType = require("ManaContext").ThemeContext;
const result = require("obj132").fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default GuildIconUploader;