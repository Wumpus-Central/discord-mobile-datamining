// === Module 9294: ConversationNavigatorHeader ===

// Module 9294 (ConversationNavigatorHeader)
import "noop";
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles((arg0) => {
  const container = { flex: 1, paddingVertical: importDefault(712).space.PX_16, paddingRight: null, alignItems: "center", justifyContent: "center" };
  let num = 0;
  if (!arg0) {
    num = importDefault(712).space.PX_64;
  }
  container[2] = num;
  return { container };
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export default function ConversationNavigatorHeader(channelId) {
  channelId = channelId.channelId;
  let flag = channelId.hasRightAction;
  if (flag === undefined) {
    flag = false;
  }
  let obj = channelId(589);
  const items = [ensureGuildLoaded];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(channelId), items1);
  const tmp3 = importDefault(4384)(stateFromStores, true);
  obj = { style: callback(flag).container, children: null };
  obj = { title: channelId.title, subtitle: null, variant: "heading-lg/semibold", subtitleColor: "text-muted" };
  obj[1] = tmp3;
  obj[1] = jsx(channelId(9127).GenericHeaderTitle, { title: channelId.title, subtitle: null, variant: "heading-lg/semibold", subtitleColor: "text-muted" });
  return <View title={arg0.title} subtitle={null} variant="heading-lg/semibold" subtitleColor="text-muted" />;
};