// discord_app/modules/premium/powerups/native/GuildPowerupsPerkCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../../_runtime/05893_LinearGradient.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildPowerupsImageDefault from "GuildPowerupsImage.tsx";
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter.tsx";
import GuildPowerupsCardDefault from "GuildPowerupsCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  container: { marginHorizontal: nativeDefault.space.PX_16 },
  card: { padding: 0, overflow: "hidden" },
  contentContainer: null,
  imageContainer: null,
  gradient: null,
  headerContainer: null,
  badge: null,
};
let obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.contentContainer = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
obj2.imageContainer = { width: "100%", height: 160 };
obj2.gradient = { position: "absolute", left: 0, right: 0, top: 0, height: "100%" };
let obj4 = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
obj2.headerContainer = { gap: nativeDefault.space.PX_4 };
const rect = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
obj2.badge = rect;
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerkCard.tsx");

export default function GuildPowerupsPerkCard(arg0) {
  ({ imageUrl, isImageAnimated } = arg0);
  ({ title, description } = arg0);
  if (isImageAnimated === undefined) {
    isImageAnimated = true;
  }
  ({ riveComponent, status, badge } = arg0);
  ({ style, onPress } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({
      title: 0,
      description: 0,
      imageUrl: 0,
      isImageAnimated: 0,
      riveComponent: 0,
      style: 0,
      onPress: 0,
      status: 0,
      badge: 0,
    }),
  );
  const tmp2 = closure_6();
  const tmp5 = useThemeDefault();
  const obj2 = { containerStyle: null, style: tmp2.card, status, onPress, children: null };
  items = [tmp2.container, style];
  obj2.containerStyle = items;
  const obj3 = { style: tmp2.imageContainer, children: null };
  const tmp7 = shared.isThemeDark(tmp5) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  if (riveComponent == null) {
    if (imageUrl == null) {
      imageUrl = "";
    }
    const obj4 = { imageUrl, isAnimated: isImageAnimated };
    riveComponent = React4(GuildPowerupsImageDefault, obj4);
    const tmp3Result2 = GuildPowerupsImageDefault;
  }
  const items1 = [riveComponent, React4(LinearGradientDefault, { colors: tmp7, style: tmp2.gradient })];
  obj3.children = items1;
  const items2 = [hasOwnProperty(View, obj3), , ,];
  const obj6 = { style: tmp2.contentContainer, children: null };
  const obj7 = { style: tmp2.headerContainer, children: null };
  const items3 = [
    React4(Text_Text.Text, { color: "text-strong", variant: "heading-md/semibold", children: title }),
    React4(Text_Text.Text, { variant: "body-sm/normal", children: description }),
  ];
  obj7.children = items3;
  const items4 = [hasOwnProperty(View, obj7)];
  const obj8 = {};
  const merged1 = Object.assign(merged);
  obj8.status = status;
  items4[1] = React4(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj8);
  obj6.children = items4;
  items2[1] = hasOwnProperty(View, obj6);
  let tmp13Result = "new" === badge;
  if (tmp13Result) {
    const obj9 = { text: null, style: null };
    const intl = util.intl;
    obj9.text = intl.string(util.t.y2b7CA);
    obj9.style = tmp2.badge;
    tmp13Result = React4(native.TextBadge, obj9);
  }
  items2[2] = tmp13Result;
  let tmp13Result2 = "beta" === badge;
  if (tmp13Result2) {
    const obj10 = { text: null, color: null, style: null };
    const intl2 = util.intl;
    obj10.text = intl2.string(util.t.oW0eUd);
    obj10.color = native.BadgeColors.BRAND;
    obj10.style = tmp2.badge;
    tmp13Result2 = React4(native.TextBadge, obj10);
  }
  items2[3] = tmp13Result2;
  obj2.children = items2;
  return hasOwnProperty(GuildPowerupsCardDefault, obj2);
}
