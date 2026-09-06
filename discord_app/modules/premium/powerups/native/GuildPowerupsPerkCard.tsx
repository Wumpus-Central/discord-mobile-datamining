// discord_app/modules/premium/powerups/native/GuildPowerupsPerkCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  card: null,
  contentContainer: null,
  imageContainer: null,
  gradient: null,
  headerContainer: null,
  badge: null,
};
createStyles = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.card = { padding: 0, overflow: "hidden" };
createStyles.contentContainer = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
createStyles.imageContainer = { width: "100%", height: 160 };
createStyles.gradient = { position: "absolute", left: 0, right: 0, top: 0, height: "100%" };
let obj1 = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
createStyles.headerContainer = { gap: nativeDefault.space.PX_4 };
const rect = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
createStyles.badge = rect;
let closure_6 = createStyles.createStyles(createStyles);
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
  let obj = shared;
  const tmp5 = useThemeDefault();
  let obj1 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj1.useManaTypeConsolidationExperiment("GuildPowerupsPerkCard");
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  obj = { containerStyle: null, style: tmp2.card, status, onPress, children: null };
  const items = [tmp2.container, style];
  obj.containerStyle = items;
  obj = { style: tmp2.imageContainer, children: null };
  let tmp3Result = tmp3(12568);
  if (riveComponent == null) {
    tmp3Result = tmp3(12523);
    if (imageUrl == null) {
      imageUrl = "";
    }
    obj1 = { imageUrl, isAnimated: isImageAnimated };
    riveComponent = React4(tmp3Result, obj1);
  }
  const items1 = [riveComponent];
  const tmp9 = obj.isThemeDark(useThemeDefault()) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  items1[1] = React4(LinearGradientDefault, {
    colors: obj.isThemeDark(useThemeDefault()) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"],
    style: tmp2.gradient,
  });
  obj.children = items1;
  const items2 = [hasOwnProperty(View, obj), , ,];
  const obj3 = { style: tmp2.contentContainer, children: null };
  const obj4 = { style: tmp2.headerContainer, children: null };
  let str;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj5 = { color: str, variant: null, children: null };
  let str2 = "heading-md/bold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  obj5.variant = str2;
  obj5.children = title;
  const items3 = [React4(Text_Text.Text, obj5)];
  let str3 = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str3 = "experimental/body-sm/normal";
  }
  items3[1] = React4(Text_Text.Text, { variant: str3, children: description });
  obj4.children = items3;
  const items4 = [hasOwnProperty(View, obj4)];
  const obj6 = {};
  const merged1 = Object.assign(merged);
  obj6.status = status;
  items4[1] = React4(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj6);
  obj3.children = items4;
  items2[1] = hasOwnProperty(View, obj3);
  let tmp15Result = "new" === badge;
  if (tmp15Result) {
    const obj7 = { text: null, style: null };
    const intl = tmp6(1114).intl;
    obj7.text = intl.string(tmp6(1114).t.y2b7CA);
    obj7.style = tmp2.badge;
    tmp15Result = tmp15(tmp6(1178).TextBadge, obj7);
  }
  items2[2] = tmp15Result;
  tmp15Result = "beta" === badge;
  if (tmp15Result) {
    const obj8 = { text: null, color: null, style: null };
    const intl2 = tmp6(1114).intl;
    obj8.text = intl2.string(tmp6(1114).t.oW0eUd);
    obj8.color = tmp6(1178).BadgeColors.BRAND;
    obj8.style = tmp2.badge;
    tmp15Result = tmp15(tmp6(1178).TextBadge, obj8);
  }
  items2[3] = tmp15Result;
  obj.children = items2;
  return hasOwnProperty(tmp3Result, obj);
}
