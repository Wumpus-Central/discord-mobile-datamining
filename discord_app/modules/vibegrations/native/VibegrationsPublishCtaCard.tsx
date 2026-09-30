// discord_app/modules/vibegrations/native/VibegrationsPublishCtaCard.tsx
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import useVibegrationsPublishActionDefault from "../lib/useVibegrationsPublishAction.tsx";
import vibegrationsPublishCard from "../lib/vibegrationsPublishCard.tsx";
import vibegrationsIdeasOffer from "../lib/vibegrationsIdeasOffer.tsx";
import useDelayedRevealDefault from "../lib/useDelayedReveal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function PublishCta(publish) {
  publish = publish.publish;
  const guildId = publish.guildId;
  const items = [GuildStore];
  const stateFromStores = publish(504).useStateFromStores(items, () => {
    let guild = null;
    if (null != guildId) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  let tmp5 = null;
  if (null != publish.disabledReason) {
    const obj2 = { variant: "text-sm/normal", color: "text-muted", children: publish.disabledReason };
    tmp5 = closure_6(tmp(4862).Text, obj2);
  }
  const items1 = [tmp5];
  const items2 = [
    closure_6(publish(5477).Button, {
      text: publish.label,
      variant: "primary",
      size: "sm",
      loading: publish.publishing,
      disabled: publish.disabled,
      onPress() {
        return publish.run("card");
      },
    }),
  ];
  let tmp4Result = null;
  if (null != stateFromStores) {
    const obj4 = { direction: "horizontal", spacing: 4, align: "center", children: null };
    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl = tmp(1115).intl;
    obj5.children = intl.string(guildId(3715).FLbAwN);
    const items3 = [closure_6(tmp(4862).Text, obj5), ,];
    const obj6 = { guild: stateFromStores, size: tmp(6092).GuildIconSizes.XXSMALL };
    items3[1] = closure_6(guildId(6092), obj6);
    const obj7 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
    const tmp10 = guildId(6092);
    obj7.children = tmp(16590).publishCardServerName(stateFromStores.name);
    items3[2] = closure_6(tmp(4862).Text, obj7);
    obj4.children = items3;
    tmp4Result = closure_7(tmp(5475).Stack, obj4);
    const tmpResult = tmp(16590);
  }
  const obj8 = { direction: "vertical", spacing: 8, children: null };
  items2[1] = tmp4Result;
  items1[1] = closure_7(publish(5475).Stack, {
    direction: "horizontal",
    spacing: 8,
    align: "center",
    children: items2,
  });
  obj8.children = items1;
  return closure_7(publish(5475).Stack, obj8);
}
function IdeasOffer(onAsk) {
  onAsk = onAsk.onAsk;
  let stateFromStores;
  let sharedValue;
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = stateFromStores(504);
  let num = 0;
  if (stateFromStores) {
    num = 1;
  }
  sharedValue = stateFromStores(4596).useSharedValue(num);
  const items1 = [sharedValue, stateFromStores];
  const effect = noop.useEffect(() => {
    let num = 1;
    if (!stateFromStores) {
      num = timing.withTiming(1, { duration: 180 });
    }
    const result = sharedValue.set(num);
    return () => stateFromStores(dependencyMap[13]).cancelAnimation(sharedValue);
  }, items1);
  const obj2 = stateFromStores(4596);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 1621208769765;
  fn.__initData = __initData;
  const animatedStyle = stateFromStores(4596).useAnimatedStyle(fn);
  const obj3 = { style: animatedStyle, children: null };
  const obj4 = { direction: "vertical", spacing: 8, children: null };
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = tmp(1115).intl;
  obj5.children = intl.string(sharedValue(3715).tG5PBo);
  const items2 = [closure_6(stateFromStores(4862).Text, obj5)];
  const obj6 = { direction: "horizontal", children: null };
  const obj7 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = tmp(1115).intl;
  obj7.text = intl2.string(sharedValue(3715).cwTe5o);
  obj6.children = closure_6(stateFromStores(5477).Button, obj7);
  items2[1] = closure_6(stateFromStores(5475).Stack, obj6);
  obj4.children = items2;
  obj3.children = closure_7(stateFromStores(5475).Stack, obj4);
  return closure_6(sharedValue(4596).View, obj3);
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const __initData = {
  code: "function VibegrationsPublishCtaCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishCtaCard.tsx");

export default function VibegrationsPublishCtaCard(projectId) {
  const tmp2 = useVibegrationsPublishActionDefault(projectId.projectId);
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = null;
    if (obj.isVibegrationsPublishCtaVisible(tmp2)) {
      const obj2 = { publish: tmp2 };
      tmp3 = timestampProducer(PublishCta, obj2);
    }
    obj = vibegrationsPublishCard;
  }
  return tmp3;
}
export const VibegrationsPublishOrIdeasOffer = function VibegrationsPublishOrIdeasOffer(publishCta) {
  publishCta = publishCta.publishCta;
  ({ projectId, draftHasText, onAskForIdeas } = publishCta);
  let tmp4 = null;
  if (publishCta) {
    tmp4 = projectId;
  }
  const tmp3Result = useVibegrationsPublishActionDefault(tmp4);
  if (publishCta) {
    publishCta = vibegrationsPublishCard.isVibegrationsPublishCtaVisible(tmp3Result);
  }
  let tmp8 = !publishCta;
  if (!publishCta) {
    tmp8 = !draftHasText;
  }
  const tmpResult = useDelayedRevealDefault;
  if (publishCta) {
    if (null != tmp3Result) {
      const obj2 = { publish: tmp3Result };
      let tmp10 = timestampProducer(PublishCta, obj2);
    }
    return tmp10;
  }
  tmp10 = null;
  if (tmpResultResult) {
    const obj3 = { onAsk: onAskForIdeas };
    tmp10 = timestampProducer(IdeasOffer, obj3);
  }
  tmpResultResult = useDelayedRevealDefault(tmp8, vibegrationsIdeasOffer.IDEAS_OFFER_REVEAL_DELAY_MS);
};
