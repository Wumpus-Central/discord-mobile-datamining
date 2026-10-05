// discord_app/modules/guild/native/GuildInviteIcon.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let obj3;
let obj4;
let size;
const View = react_native.View;
const jsx = Fragment.jsx;
const Sizes = { SMALL: "small", MEDIUM: "medium", LARGE: "large" };
const metroRequire = [16, 16, 14, 14, 12];
let obj2 = {
  icon: { justifyContent: "center", alignItems: "center", overflow: "hidden" },
  iconSmall: { width: 40, height: 40, borderRadius: 20 },
  iconMedium: { width: 80, height: 80, borderRadius: 40 },
  iconLarge: size,
  textContainer: obj3,
  acronym: obj4,
};
size = { width: 128, height: 128, borderRadius: nativeDefault.radii.round };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { color: nativeDefault.unsafe_rawColors.WHITE };
const metroImportDefault = createLegacyClassComponentStyles(obj2);
const PureComponent = react.PureComponent;
class GuildInviteIcon extends PureComponent {
  render() {
    let guild;
    let style;
    const tmp = closure_7(this.context);
    const props = this.props;
    ({ style, guild } = props);
    const tmp2 = {
      [closure_1_5.SMALL]: tmp.iconSmall,
      [closure_1_5.MEDIUM]: tmp.iconMedium,
      [closure_1_5.LARGE]: tmp.iconLarge,
    }[props.size];
    const textScale = props.textScale;
    const intl = intl2.intl;
    const obj2 = { guildName: guild.name };
    const formatToPlainStringResult = intl.formatToPlainString(intl2.t.xm6W9D, obj2);
    if (null != guild.icon) {
      const obj3 = { id: null, icon: null, canAnimate: true, size: 128 };
      ({ id: obj7.id, icon: obj7.icon } = guild);
      const obj6 = AvatarUtilsDefault;
      const guildIconSource = obj6.getGuildIconSource(obj3);
      const items = [tmp.icon, tmp2, style];
      return jsx(FastImageDefault, {
        accessibilityRole: "image",
        accessibilityLabel: formatToPlainStringResult,
        style: items,
        source: guildIconSource,
      });
    } else {
      const tmp3Result = StringUtils;
      const acronym = tmp3Result.getAcronym(guild.name);
      let num = closure_6[acronym.length - 1];
      if (num == null) {
        num = 10;
      }
      const items1 = [, , ,];
      ({ textContainer: arr[0], icon: arr[1] } = tmp);
      items1[2] = tmp2;
      items1[3] = style;
      const result = num * textScale;
      const items2 = [tmp.acronym];
      const obj9 = { fontSize: result };
      items2[1] = obj9;
      return (
        <View accessible accessibilityRole="image" accessibilityLabel={formatToPlainStringResult} style={items1}>
          {null}
        </View>
      );
    }
  }
}
const prototype = GuildInviteIcon.prototype;
GuildInviteIcon.defaultProps = { size: Sizes.SMALL, textScale: 1 };
GuildInviteIcon.Sizes = Sizes;
GuildInviteIcon.contextType = native.ThemeContext;
size = size_mod;
let result = size.fileFinishedImporting("modules/guild/native/GuildInviteIcon.tsx");

export default GuildInviteIcon;
