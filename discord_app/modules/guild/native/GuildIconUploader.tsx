// discord_app/modules/guild/native/GuildIconUploader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _modDef11799 from "../../../../_runtime/metro/11799__.js";
import _modDef11800 from "../../../../_runtime/metro/11800__.js";
import _modDef11801 from "../../../../_runtime/metro/11801__.js";
import _modDef11802 from "../../../../_runtime/metro/11802__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: { width: 82, height: 82, marginTop: 4 },
  guildPlaceholder: null,
  guildIcon: null,
  iconWrapperBorder: null,
  filledIconWrapper: null,
  emptyIconWrapper: null,
  emptyGuildIcon: null,
  emptyGuildIconText: null,
  uploadIcon: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.guildPlaceholder = createStyles;
createStyles.guildIcon = { width: 82, height: 82, borderRadius: 41 };
createStyles.iconWrapperBorder = {
  position: "absolute",
  top: -8,
  right: -8,
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
};
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
createStyles.filledIconWrapper = size;
const size1 = {
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
createStyles.emptyIconWrapper = size1;
createStyles.emptyGuildIcon = {
  borderWidth: 2,
  borderStyle: "dashed",
  justifyContent: "center",
  alignItems: "center",
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
createStyles.emptyGuildIconText = { textAlign: "center", lineHeight: 16, paddingTop: 4 };
createStyles.uploadIcon = { height: 16, width: 16 };
let closure_8 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class GuildIconUploader extends PureComponent {}
const prototype = GuildIconUploader.prototype;
prototype["renderIcon"] = function renderIcon() {
  const tmp = closure_8(this.context);
  const icon = this.props.icon;
  if (null != icon) {
    let obj = { style: null, source: null };
    const items = [,];
    ({ guildIcon: arr2[0], guildPlaceholder: arr2[1] } = tmp);
    obj.style = items;
    obj = { uri: icon };
    obj.source = obj;
    let tmp6Result = timestampProducer(React4, obj);
  } else {
    const obj1 = { style: null, children: null };
    const items1 = [,];
    ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
    obj1.style = items1;
    if (obj6.isThemeDark(ThemeStore.theme)) {
      let tmp13Result = _modDef11799;
    } else {
      tmp13Result = _modDef11800;
    }
    obj = { source: tmp13Result };
    const items2 = [timestampProducer(React4, obj)];
    const obj2 = { style: tmp.emptyGuildIconText, variant: "text-xs/bold", color: "text-default", children: null };
    const intl = util.intl;
    obj6 = shared;
    obj2.children = intl.string(util.t["3UB9ad"]).toUpperCase();
    items2[1] = timestampProducer(Text_Text.Text, obj2);
    obj1.children = items2;
    tmp6Result = React5(React3, obj1);
    const str = intl.string(util.t["3UB9ad"]);
  }
  return tmp6Result;
};
prototype["renderUpload"] = function renderUpload() {
  const tmp = closure_8(this.context);
  const props = this.props;
  const iconBackgroundColor = props.iconBackgroundColor;
  if (null != props.icon) {
    let obj = { style: null, children: null };
    const items = [tmp.iconWrapperBorder];
    obj = { backgroundColor: iconBackgroundColor };
    items[1] = obj;
    obj.style = items;
    const obj1 = { style: tmp.filledIconWrapper, children: null };
    const obj2 = { style: null, source: null };
    const items1 = [tmp.uploadIcon];
    const obj3 = { tintColor: iconBackgroundColor };
    items1[1] = obj3;
    obj2.style = items1;
    obj2.source = _modDef11801;
    obj1.children = timestampProducer(React4, obj2);
    obj.children = timestampProducer(React3, obj1);
  } else {
    obj = { style: tmp.emptyIconWrapper, children: null };
    const obj4 = { source: _modDef11802 };
    obj.children = timestampProducer(React4, obj4);
  }
  return timestampProducer(React3, obj);
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_8(this.context);
  ({ style, onPress, icon } = this.props);
  if (null != icon) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.VATxfe);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["MsUY/S"]);
  }
  let obj = { accessibilityRole: "button", accessibilityLabel: stringResult, onPress, children: null };
  obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  obj = { style: tmp.guildIcon, children: self.renderIcon() };
  const items1 = [timestampProducer(React3, obj), self.renderUpload()];
  obj.children = items1;
  obj.children = React5(React3, obj);
  return timestampProducer(Pressables.PressableOpacity, obj);
};
GuildIconUploader.contextType = fn(4271).ThemeContext;
size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default GuildIconUploader;
