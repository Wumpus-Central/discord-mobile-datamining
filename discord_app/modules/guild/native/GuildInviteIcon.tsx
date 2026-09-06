// === Module 12659: GuildInviteIcon ===

// Module 12659 (GuildInviteIcon)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import StringUtils from "StringUtils" /* 1925 */;
import FastImageDefault from "FastImage" /* 5587 */;
import StylesheetUtils from "StylesheetUtils" /* 12660 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let obj = { SMALL: "small", MEDIUM: "medium", LARGE: "large" };
let closure_5 = [16, 16, 14, 14, 12];
fn(4560);
obj = { icon: { justifyContent: "center", alignItems: "center", overflow: "hidden" }, iconSmall: { width: 40, height: 40, borderRadius: 20 }, iconMedium: { width: 80, height: 80, borderRadius: 40 }, iconLarge: null, textContainer: null, acronym: null };
let size = { width: 128, height: 128, borderRadius: nativeDefault.radii.round };
obj.iconLarge = size;
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.textContainer = obj;
const createStyles = { color: nativeDefault.unsafe_rawColors.WHITE };
obj.acronym = createStyles;
let closure_6 = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = noop.PureComponent;
class GuildInviteIcon extends PureComponent {
}
GuildInviteIcon.prototype["render"] = function render() {
  const tmp = closure_6(this.context);
  const props = this.props;
  ({ style, guild } = props);
  ({ size, textScale } = props);
  let obj = StylesheetUtils;
  const getClassResult = obj.getClass(tmp, "icon", size);
  const intl = util.intl;
  obj = { guildName: guild.name };
  const formatToPlainStringResult = intl.formatToPlainString(util.t.xm6W9D, obj);
  if (null != guild.icon) {
    obj = { id: null, icon: null, canAnimate: true, size: 128 };
    ({ id: obj7.id, icon: obj7.icon } = guild);
    const guildIconSource = AvatarUtilsDefault.getGuildIconSource(obj);
    const obj1 = { accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, style: null, source: null };
    const items = [tmp.icon, getClassResult, style];
    obj1.style = items;
    obj1.source = guildIconSource;
    return jsx(FastImageDefault, { accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, style: null, source: null });
  } else {
    const acronym = StringUtils.getAcronym(guild.name);
    let num = closure_5[acronym.length - 1];
    if (num == null) {
      num = 10;
    }
    const obj2 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, style: null, children: null };
    const items1 = [, , , ];
    ({ textContainer: arr[0], icon: arr[1] } = tmp);
    items1[2] = getClassResult;
    items1[3] = style;
    obj2.style = items1;
    const result = num * textScale;
    const obj3 = { numberOfLines: 1, style: null, children: null };
    const items2 = [tmp.acronym, ];
    const obj4 = { fontSize: result };
    items2[1] = obj4;
    obj3.style = items2;
    obj3.children = acronym;
    obj2.children = jsx(native.LegacyText, { numberOfLines: 1, style: null, children: null });
    return <View accessible accessibilityRole="image" accessibilityLabel={formatToPlainStringResult} style={null}>{null}</View>;
  }
};
GuildInviteIcon.defaultProps = { size: obj.SMALL, textScale: 1 };
GuildInviteIcon.Sizes = obj;
GuildInviteIcon.contextType = fn(4271).ThemeContext;
size = fn(2);
let result = size.fileFinishedImporting("modules/guild/native/GuildInviteIcon.tsx");

export default GuildInviteIcon;