// === Module 12111: render ===

// Module 12111 (render)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import preloadDefault from "preload" /* 5445 */;
import getClass from "getClass" /* 12112 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let obj = { SMALL: "small", MEDIUM: "medium", LARGE: "large" };
let closure_5 = [16, 16, 14, 14, 12];
obj = { icon: { justifyContent: "center", alignItems: "center", overflow: "hidden" }, iconSmall: { width: 40, height: 40, borderRadius: 20 }, iconMedium: { width: 80, height: 80, borderRadius: 40 }, iconLarge: null, textContainer: null, acronym: null };
obj = { width: 128, height: 128, borderRadius: ThemesDefault.radii.round };
obj[3] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
obj[4] = createCacheKey;
obj[5] = { color: ThemesDefault.unsafe_rawColors.WHITE };
let closure_6 = createCacheKey.createLegacyClassComponentStyles(obj);
const PureComponent = importAllResult.PureComponent;
class GuildInviteIcon extends PureComponent {
}
GuildInviteIcon.prototype["render"] = function render() {
  const tmp = callback(this.context);
  const props = this.props;
  ({ style, guild } = props);
  ({ size, textScale } = props);
  let obj = getClass;
  const getClassResult = obj.getClass(tmp, "icon", size);
  const intl = getSystemLocale.intl;
  obj = { guildName: guild.name };
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.xm6W9D, obj);
  if (null != guild.icon) {
    obj = { id: null, icon: null, canAnimate: true, size: 128 };
    ({ id: obj7[0], icon: obj7[1] } = guild);
    const guildIconSource = getAvatarURLDefault.getGuildIconSource(obj);
    obj1 = { accessibilityRole: "image", accessibilityLabel: null, style: null, source: null };
    obj1[1] = formatToPlainStringResult;
    const items = [tmp.icon, getClassResult, style];
    obj1[2] = items;
    obj1[3] = guildIconSource;
    return jsx(preloadDefault, { accessibilityRole: "image", accessibilityLabel: null, style: null, source: null });
  } else {
    const acronym = tmp2(1903).getAcronym(guild.name);
    let num = table[acronym.length - 1];
    if (num == null) {
      num = 10;
    }
    const obj2 = { accessible: true, accessibilityRole: "image", accessibilityLabel: null, style: null, children: null };
    obj2[2] = formatToPlainStringResult;
    const items1 = [, , , ];
    ({ textContainer: arr[0], icon: arr[1] } = tmp);
    items1[2] = getClassResult;
    items1[3] = style;
    obj2[3] = items1;
    const result = num * textScale;
    const obj3 = { numberOfLines: 1, style: null, children: null };
    const items2 = [tmp.acronym, ];
    const obj4 = { fontSize: null };
    obj4[0] = result;
    items2[1] = obj4;
    obj3[1] = items2;
    obj3[2] = acronym;
    obj2[4] = jsx(tmp2(1297).LegacyText, { numberOfLines: 1, style: null, children: null });
    return <View accessible accessibilityRole="image" accessibilityLabel={null} style={null}>{null}</View>;
  }
};
GuildInviteIcon.defaultProps = { size: obj.SMALL, textScale: 1 };
GuildInviteIcon.Sizes = obj;
GuildInviteIcon.contextType = require("ManaContext").ThemeContext;
let obj2 = { color: ThemesDefault.unsafe_rawColors.WHITE };
let result = require("set").fileFinishedImporting("modules/guild/native/GuildInviteIcon.tsx");

export default GuildInviteIcon;