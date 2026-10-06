// discord_app/modules/guild/native/GuildIconUploader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../../../_runtime/11423_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/11424_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../_runtime/11425_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../_runtime/11426_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  container: { width: 82, height: 82, marginTop: 4 },
  guildPlaceholder: obj2,
  guildIcon: { width: 82, height: 82, borderRadius: 41 },
  iconWrapperBorder: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  filledIconWrapper: size,
  emptyIconWrapper: size1,
  emptyGuildIcon: obj3,
  emptyGuildIconText: { textAlign: "center", lineHeight: 16, paddingTop: 4 },
  uploadIcon: { height: 16, width: 16 },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
size1 = {
  position: "absolute",
  top: -4,
  right: -4,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  justifyContent: "center",
  alignItems: "center",
};
obj3 = {
  borderWidth: 2,
  borderStyle: "dashed",
  justifyContent: "center",
  alignItems: "center",
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
const metroImportAll = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GuildIconUploader extends PureComponent {
  renderIcon() {
    let items;
    let items1;
    let items2;
    let obj3;
    let str;
    let tmp6Result;
    const tmp = closure_8(this.context);
    const icon = this.props.icon;
    if (null != icon) {
      const obj2 = { style: items, source: obj3 };
      items = [,];
      ({ guildIcon: arr2[0], guildPlaceholder: arr2[1] } = tmp);
      obj3 = { uri: icon };
      tmp6Result = metroRequire(React3, obj2);
    } else {
      let tmp13Result;
      const obj4 = { style: items1, children: items2 };
      items1 = [,];
      ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
      const obj6 = shared;
      if (obj6.isThemeDark(ThemeStore.theme)) {
        tmp13Result = AssetRegistryDefault;
      } else {
        tmp13Result = AssetRegistryDefault2;
      }
      const obj = { source: tmp13Result };
      items2 = [metroRequire(React3, obj)];
      const obj5 = {
        style: tmp.emptyGuildIconText,
        variant: "text-xs/bold",
        color: "text-default",
        children: str.toUpperCase(),
      };
      const Text = Text_Text.Text;
      const intl = intl3.intl;
      str = intl.string(intl3.t["3UB9ad"]);
      items2[1] = metroRequire(Text, obj5);
      tmp6Result = metroImportDefault(_false, obj4);
    }
    return tmp6Result;
  }
  renderUpload() {
    let items;
    let items1;
    let obj;
    let obj4;
    let obj5;
    let obj7;
    const tmp = closure_8(this.context);
    const props = this.props;
    const iconBackgroundColor = props.iconBackgroundColor;
    if (null != props.icon) {
      const obj2 = { style: items, children: metroRequire(_false, obj4) };
      items = [tmp.iconWrapperBorder];
      const obj3 = { backgroundColor: iconBackgroundColor };
      items[1] = obj3;
      obj4 = { style: tmp.filledIconWrapper, children: metroRequire(React3, obj5) };
      obj5 = { style: items1, source: AssetRegistryDefault3 };
      items1 = [tmp.uploadIcon];
      const obj6 = { tintColor: iconBackgroundColor };
      items1[1] = obj6;
      obj = obj2;
    } else {
      obj = { style: tmp.emptyIconWrapper, children: metroRequire(React3, obj7) };
      obj7 = { source: AssetRegistryDefault4 };
    }
    return metroRequire(_false, obj);
  }
  render() {
    let icon;
    let items;
    let items1;
    let obj2;
    let onPress;
    let stringResult;
    let style;
    const self = this;
    const tmp = closure_8(this.context);
    ({ style, onPress, icon } = this.props);
    const PressableOpacity = Pressables.PressableOpacity;
    if (null != icon) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t.VATxfe);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(intl3.t["MsUY/S"]);
    }
    const obj = {
      accessibilityRole: "button",
      accessibilityLabel: stringResult,
      onPress,
      children: metroImportDefault(_false, obj2),
    };
    obj2 = { style: items, children: items1 };
    items = [tmp.container, style];
    items1 = [,];
    const obj3 = { style: tmp.guildIcon, children: self.renderIcon() };
    items1[0] = metroRequire(_false, obj3);
    items1[1] = self.renderUpload();
    return metroRequire(PressableOpacity, obj);
  }
}
const prototype = GuildIconUploader.prototype;
GuildIconUploader.contextType = native.ThemeContext;
size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default GuildIconUploader;
