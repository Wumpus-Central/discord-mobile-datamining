// discord_app/modules/vibegrations/native/VibegrationsPublishCtaCard.tsx
import useVibegrationsPublishActionDefault from "../lib/useVibegrationsPublishAction.tsx";
import vibegrationsPublishCard from "../lib/vibegrationsPublishCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
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
  const items1 = [
    closure_4(publish(5465).Button, {
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
    const obj3 = { direction: "horizontal", spacing: 4, align: "center", children: null };
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl = tmp(1115).intl;
    obj4.children = intl.string(guildId(3714).FLbAwN);
    const items2 = [closure_4(tmp(4841).Text, obj4), ,];
    const obj5 = { guild: stateFromStores, size: tmp(6082).GuildIconSizes.XXSMALL };
    items2[1] = closure_4(guildId(6082), obj5);
    const obj6 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
    const tmp8 = guildId(6082);
    obj6.children = tmp(16612).publishCardServerName(stateFromStores.name);
    items2[2] = closure_4(tmp(4841).Text, obj6);
    obj3.children = items2;
    tmp4Result = closure_5(tmp(5463).Stack, obj3);
    const tmpResult = tmp(16612);
  }
  items1[1] = tmp4Result;
  const children = [
    closure_5(publish(5463).Stack, { direction: "horizontal", spacing: 8, align: "center", children: items1 }),
  ];
  let tmp5Result = null;
  if (null != publish.disabledReason) {
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: publish.disabledReason };
    tmp5Result = closure_4(tmp(4841).Text, obj7);
  }
  children[1] = tmp5Result;
  return closure_5(publish(5463).Stack, { direction: "vertical", spacing: 8, children });
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishCtaCard.tsx");

export default function VibegrationsPublishCtaCard(projectId) {
  const tmp2 = useVibegrationsPublishActionDefault(projectId.projectId);
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = null;
    if (obj.isVibegrationsPublishCtaVisible(tmp2)) {
      const obj2 = { publish: tmp2 };
      tmp3 = React4(PublishCta, obj2);
    }
    obj = vibegrationsPublishCard;
  }
  return tmp3;
}
