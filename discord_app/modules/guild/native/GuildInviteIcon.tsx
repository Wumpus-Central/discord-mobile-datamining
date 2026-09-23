// discord_app/modules/guild/native/GuildInviteIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import StylesheetUtils from "../../../utils/StylesheetUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let obj = { SMALL: "small", MEDIUM: "medium", LARGE: "large" };
let closure_5 = [16, 16, 14, 14, 12];
const createStyles = fn(4827);
const obj3 = {
  icon: { justifyContent: "center", alignItems: "center", overflow: "hidden" },
  iconSmall: { width: 40, height: 40, borderRadius: 20 },
  iconMedium: { width: 80, height: 80, borderRadius: 40 },
  iconLarge: null,
  textContainer: null,
  acronym: null,
};
let size = { width: 128, height: 128, borderRadius: nativeDefault.radii.round };
obj3.iconLarge = size;
obj3.textContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.acronym = { color: nativeDefault.unsafe_rawColors.WHITE };
let closure_6 = createStyles.createLegacyClassComponentStyles(obj3);
const PureComponent = noop.PureComponent;
class GuildInviteIcon extends PureComponent {}
GuildInviteIcon.prototype["render"] = function render() {
  const tmp = closure_6(this.context);
  const props = this.props;
  ({ style, guild } = props);
  ({ size, textScale } = props);
  const getClassResult = StylesheetUtils.getClass(tmp, "icon", size);
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.xm6W9D, { guildName: guild.name });
  if (null != guild.icon) {
    ({ id: obj7.id, icon: obj7.icon } = guild);
    const guildIconSource = AvatarUtilsDefault.getGuildIconSource({
      id: null,
      icon: null,
      canAnimate: true,
      size: 128,
    });
    const obj4 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      style: null,
      source: null,
    };
    const items = [tmp.icon, getClassResult, style];
    obj4.style = items;
    obj4.source = guildIconSource;
    return jsx(FastImageDefault, {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      style: null,
      source: null,
    });
  } else {
    const acronym = StringUtils.getAcronym(guild.name);
    let num = closure_5[acronym.length - 1];
    if (num == null) {
      num = 10;
    }
    const obj5 = {
      accessible: true,
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      style: null,
      children: null,
    };
    const items1 = [, , ,];
    ({ textContainer: arr[0], icon: arr[1] } = tmp);
    items1[2] = getClassResult;
    items1[3] = style;
    obj5.style = items1;
    const result = num * textScale;
    const obj8 = { numberOfLines: 1, style: null, children: null };
    const items2 = [tmp.acronym];
    const obj9 = { fontSize: result };
    items2[1] = obj9;
    obj8.style = items2;
    obj8.children = acronym;
    obj5.children = jsx(native.LegacyText, { numberOfLines: 1, style: null, children: null });
    return (
      <View accessible accessibilityRole="image" accessibilityLabel={formatToPlainStringResult} style={null}>
        {null}
      </View>
    );
  }
  const obj2 = { guildName: guild.name };
};
GuildInviteIcon.defaultProps = { size: obj.SMALL, textScale: 1 };
GuildInviteIcon.Sizes = obj;
GuildInviteIcon.contextType = fn(4533).ThemeContext;
size = fn(2);
let result = size.fileFinishedImporting("modules/guild/native/GuildInviteIcon.tsx");

export default GuildInviteIcon;
