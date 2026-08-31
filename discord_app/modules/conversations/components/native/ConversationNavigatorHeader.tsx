// discord_app/modules/conversations/components/native/ConversationNavigatorHeader.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import computeChannelNameDefault from "../../../channel/useChannelName.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/ChannelStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
let closure_6 = createCacheKey.createStyles((arg0) => {
  const container = { flex: 1, paddingVertical: ThemesDefault.space.PX_16, paddingRight: null, alignItems: "center", justifyContent: "center" };
  let num = 0;
  if (!arg0) {
    num = ThemesDefault.space.PX_64;
  }
  container[2] = num;
  return { container };
});
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export default function ConversationNavigatorHeader(channelId) {
  channelId = channelId.channelId;
  let flag = channelId.hasRightAction;
  if (flag === undefined) {
    flag = false;
  }
  let obj = channelId(589);
  const items = [closure_4];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(channelId), items1);
  const tmp3 = computeChannelNameDefault(stateFromStores, true);
  obj = { style: callback(flag).container, children: null };
  obj = { title: channelId.title, subtitle: tmp3, variant: "heading-lg/semibold", subtitleColor: "text-muted" };
  obj[1] = jsx(channelId(7575).GenericHeaderTitle, { title: channelId.title, subtitle: tmp3, variant: "heading-lg/semibold", subtitleColor: "text-muted" });
  return <View title={arg0.title} subtitle={tmp3} variant="heading-lg/semibold" subtitleColor="text-muted" />;
};