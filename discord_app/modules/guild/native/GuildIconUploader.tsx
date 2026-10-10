// discord_app/modules/guild/native/GuildIconUploader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _modDef11354 from "../../../../_runtime/metro/11354__.js";
import _modDef11355 from "../../../../_runtime/metro/11355__.js";
import _modDef11356 from "../../../../_runtime/metro/11356__.js";
import _modDef11357 from "../../../../_runtime/metro/11357__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: { width: 82, height: 82, marginTop: 4 },
  guildPlaceholder: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
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
  filledIconWrapper: null,
  emptyIconWrapper: null,
  emptyGuildIcon: null,
  emptyGuildIconText: null,
  uploadIcon: null,
};
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
obj2.filledIconWrapper = size;
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
obj2.emptyIconWrapper = size1;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.emptyGuildIcon = {
  borderWidth: 2,
  borderStyle: "dashed",
  justifyContent: "center",
  alignItems: "center",
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
obj2.emptyGuildIconText = { textAlign: "center", lineHeight: 16, paddingTop: 4 };
obj2.uploadIcon = { height: 16, width: 16 };
let closure_7 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class GuildIconUploader extends PureComponent {}
const prototype = GuildIconUploader.prototype;
prototype["renderIcon"] = function renderIcon() {
  const tmp = closure_7(this.context);
  const icon = this.props.icon;
  if (null != icon) {
    const obj2 = { style: null, source: null };
    const items = [,];
    ({ guildIcon: arr2[0], guildPlaceholder: arr2[1] } = tmp);
    obj2.style = items;
    const obj3 = { uri: icon };
    obj2.source = obj3;
    let tmp7Result = hasOwnProperty(FastImageDefault, obj2);
  } else {
    const obj4 = { style: null, children: null };
    const items1 = [,];
    ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
    obj4.style = items1;
    const tmp12 = FastImageDefault;
    if (obj6.isThemeDark(ThemeStore.theme)) {
      let tmp10Result = _modDef11354;
    } else {
      tmp10Result = _modDef11355;
    }
    const obj = { source: tmp10Result };
    const items2 = [hasOwnProperty(tmp12, obj)];
    const obj5 = { style: tmp.emptyGuildIconText, variant: "text-xs/bold", color: "text-default", children: null };
    const intl = util.intl;
    obj6 = shared;
    obj5.children = intl.string(util.t["3UB9ad"]).toUpperCase();
    items2[1] = hasOwnProperty(Text_Text.Text, obj5);
    obj4.children = items2;
    tmp7Result = timestampProducer(View, obj4);
    const str = intl.string(util.t["3UB9ad"]);
  }
  return tmp7Result;
};
prototype["renderUpload"] = function renderUpload() {
  const tmp = closure_7(this.context);
  const props = this.props;
  const iconBackgroundColor = props.iconBackgroundColor;
  if (null != props.icon) {
    const obj2 = { style: null, children: null };
    const items = [tmp.iconWrapperBorder];
    const obj3 = { backgroundColor: iconBackgroundColor };
    items[1] = obj3;
    obj2.style = items;
    const obj4 = { style: tmp.filledIconWrapper, children: null };
    const obj5 = { style: null, source: null };
    const items1 = [tmp.uploadIcon];
    const obj6 = { tintColor: iconBackgroundColor };
    items1[1] = obj6;
    obj5.style = items1;
    obj5.source = _modDef11356;
    obj4.children = hasOwnProperty(FastImageDefault, obj5);
    obj2.children = hasOwnProperty(View, obj4);
    let obj = obj2;
  } else {
    obj = { style: tmp.emptyIconWrapper, children: null };
    const obj7 = { source: _modDef11357 };
    obj.children = hasOwnProperty(FastImageDefault, obj7);
  }
  return hasOwnProperty(View, obj);
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_7(this.context);
  ({ style, onPress, icon } = this.props);
  if (null != icon) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.VATxfe);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["MsUY/S"]);
  }
  const obj = { accessibilityRole: "button", accessibilityLabel: stringResult, onPress, children: null };
  const obj2 = { style: null, children: null };
  const items = [tmp.container, style];
  obj2.style = items;
  const items1 = [hasOwnProperty(View, { style: tmp.guildIcon, children: self.renderIcon() }), self.renderUpload()];
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(Pressables.PressableOpacity, obj);
};
GuildIconUploader.contextType = fn(4827).ThemeContext;
size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default GuildIconUploader;
