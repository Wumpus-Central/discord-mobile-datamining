// discord_app/modules/conjure/server_widgets/native/ConjureServerWidgetUpsell.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useConjureServerWidgetUpsell from "../useConjureServerWidgetUpsell.tsx";
import turnOnConjureServerWidgetDefault from "turnOnConjureServerWidget.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function ServerWidgetUpsellCard(cardStyle) {
  ({ userId, widget } = cardStyle);
  ({ guildId, onDismiss } = cardStyle);
  const tmp = closure_7();
  const conjureServerWidgetUpsellDetails = widget(15691).useConjureServerWidgetUpsellDetails(userId, widget, guildId);
  if (null == conjureServerWidgetUpsellDetails) {
    return null;
  } else {
    ({ guild, creator } = conjureServerWidgetUpsellDetails);
    const obj2 = { style: tmp.cta, children: null };
    ({ application, rendererProps } = conjureServerWidgetUpsellDetails);
    const obj3 = { direction: "horizontal", spacing: onDismiss(575).space.PX_12, align: "flex-start", children: null };
    const obj4 = { guild, size: widget(7654).GuildIconSizes.SMALL_36 };
    items = [closure_5(onDismiss(7654), obj4)];
    const obj5 = { spacing: onDismiss(575).space.PX_4, style: tmp.copy, children: null };
    const obj6 = { variant: "body-md/semibold", color: "text-strong", children: null };
    const intl3 = widget(1113).intl;
    const obj7 = { guildName: guild.name };
    obj6.children = intl3.formatToPlainString(onDismiss(4079)["uIb8U+"], obj7);
    const items1 = [closure_5(widget(5866).Text, obj6), ,];
    const obj8 = { variant: "body-sm/normal", color: "text-default", children: null };
    const intl4 = widget(1113).intl;
    const obj9 = { applicationName: application.name };
    obj8.children = intl4.formatToPlainString(onDismiss(4079).ZZywee, obj9);
    items1[1] = closure_5(widget(5866).Text, obj8);
    let tmp10Result = null;
    if (null != creator) {
      const obj10 = { creator, guildId };
      tmp10Result = closure_5(onDismiss(15699), obj10);
    }
    items1[2] = tmp10Result;
    obj5.children = items1;
    items[1] = closure_6(widget(6274).Stack, obj5);
    obj3.children = items;
    const items2 = [closure_6(widget(6274).Stack, obj3)];
    const obj11 = { direction: "horizontal", spacing: onDismiss(575).space.PX_8, justify: "flex-end", children: null };
    const obj12 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = widget(1113).intl;
    obj12.text = intl.string(widget(1113).t.WAI6xu);
    obj12.onPress = onDismiss;
    const items3 = [closure_5(widget(5873).Button, obj12)];
    const obj13 = { variant: "primary", size: "sm", text: null, onPress: null };
    const intl2 = widget(1113).intl;
    obj13.text = intl2.string(onDismiss(4079).j6ztO0);
    obj13.onPress = function onPress() {
      return turnOnConjureServerWidgetDefault(widget.applicationId, onDismiss);
    };
    items3[1] = closure_5(widget(5873).Button, obj13);
    obj11.children = items3;
    items2[1] = closure_6(widget(6274).Stack, obj11);
    obj2.children = items2;
    const obj14 = { style: tmp.container, children: null };
    const tmp11 = onDismiss(7654);
    const obj15 = { userId, widget, cardStyle: cardStyle.cardStyle, rendererProps, footer: closure_6(View, obj2) };
    obj14.children = closure_5(onDismiss(12077), obj15);
    return closure_5(View, obj14);
  }
  const obj = widget(15691);
}
function ServerWidgetUpsellForUser(userId) {
  userId = userId.userId;
  const conjureServerWidgetUpsellOffer = useConjureServerWidgetUpsell.useConjureServerWidgetUpsellOffer(userId);
  let tmp2 = null;
  if (null != conjureServerWidgetUpsellOffer) {
    const obj3 = { userId, widget: null, guildId: null, cardStyle: null, onDismiss: null };
    ({ widget: obj2.widget, guildId: obj2.guildId } = conjureServerWidgetUpsellOffer);
    obj3.cardStyle = userId.cardStyle;
    obj3.onDismiss = conjureServerWidgetUpsellOffer.dismiss;
    tmp2 = hasOwnProperty(ServerWidgetUpsellCard, obj3, conjureServerWidgetUpsellOffer.guildId);
  }
  return tmp2;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_16 }, cta: null, copy: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.cta = {
  gap: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.copy = { flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_widgets/native/ConjureServerWidgetUpsell.tsx");

export default function ConjureServerWidgetUpsell(cardStyle) {
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { userId: stateFromStores, cardStyle: cardStyle.cardStyle };
    tmp2 = hasOwnProperty(ServerWidgetUpsellForUser, obj2, stateFromStores);
  }
  return tmp2;
}
