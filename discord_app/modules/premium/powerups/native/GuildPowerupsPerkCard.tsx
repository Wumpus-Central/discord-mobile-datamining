// discord_app/modules/premium/powerups/native/GuildPowerupsPerkCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05074_LinearGradient.js";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import GuildPowerupsImageDefault from "GuildPowerupsImage.tsx";
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter.tsx";
import GuildPowerupsCardDefault from "GuildPowerupsCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
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
  const isThemeDarkResult = shared.isThemeDark(tmp5);
  const manaTypeConsolidationExperiment =
    ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsPerkCard");
  const obj3 = { containerStyle: null, style: tmp2.card, status, onPress, children: null };
  const items = [tmp2.container, style];
  obj3.containerStyle = items;
  const obj4 = { style: tmp2.imageContainer, children: null };
  const tmp9 = isThemeDarkResult ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  if (riveComponent == null) {
    if (imageUrl == null) {
      imageUrl = "";
    }
    const obj5 = { imageUrl, isAnimated: isImageAnimated };
    riveComponent = React4(GuildPowerupsImageDefault, obj5);
    const tmp3Result2 = GuildPowerupsImageDefault;
  }
  const items1 = [riveComponent, React4(LinearGradientDefault, { colors: tmp9, style: tmp2.gradient })];
  obj4.children = items1;
  const items2 = [hasOwnProperty(View, obj4), , ,];
  const obj7 = { style: tmp2.contentContainer, children: null };
  const obj8 = { style: tmp2.headerContainer, children: null };
  let str;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj9 = { color: str, variant: null, children: null };
  let str2 = "heading-md/bold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  obj9.variant = str2;
  obj9.children = title;
  const items3 = [React4(Text_Text.Text, obj9)];
  let str3 = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str3 = "experimental/body-sm/normal";
  }
  items3[1] = React4(Text_Text.Text, { variant: str3, children: description });
  obj8.children = items3;
  const items4 = [hasOwnProperty(View, obj8)];
  const obj10 = {};
  const merged1 = Object.assign(merged);
  obj10.status = status;
  items4[1] = React4(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj10);
  obj7.children = items4;
  items2[1] = hasOwnProperty(View, obj7);
  let tmp15Result = "new" === badge;
  if (tmp15Result) {
    const obj11 = { text: null, style: null };
    const intl = util.intl;
    obj11.text = intl.string(util.t.y2b7CA);
    obj11.style = tmp2.badge;
    tmp15Result = React4(native.TextBadge, obj11);
  }
  items2[2] = tmp15Result;
  let tmp15Result2 = "beta" === badge;
  if (tmp15Result2) {
    const obj12 = { text: null, color: null, style: null };
    const intl2 = util.intl;
    obj12.text = intl2.string(util.t.oW0eUd);
    obj12.color = native.BadgeColors.BRAND;
    obj12.style = tmp2.badge;
    tmp15Result2 = React4(native.TextBadge, obj12);
  }
  items2[3] = tmp15Result2;
  obj3.children = items2;
  return hasOwnProperty(GuildPowerupsCardDefault, obj3);
}
