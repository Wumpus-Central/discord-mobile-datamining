// discord_app/modules/conversations/components/native/ConversationNavigatorHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((arg0) => {
  const container = {
    flex: 1,
    paddingVertical: nativeDefault.space.PX_16,
    paddingRight: null,
    alignItems: "center",
    justifyContent: "center",
  };
  let num = 0;
  if (!arg0) {
    num = nativeDefault.space.PX_64;
  }
  container.paddingRight = num;
  return { container };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export default function ConversationNavigatorHeader(channelId) {
  channelId = channelId.channelId;
  let flag = channelId.hasRightAction;
  if (flag === undefined) {
    flag = false;
  }
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = useChannelNameDefault(stateFromStores, true);
  obj = { style: closure_6(flag).container, children: null };
  obj = { title: channelId.title, subtitle: tmp3, variant: "heading-lg/semibold", subtitleColor: "text-muted" };
  obj.children = jsx(channelId(7863).GenericHeaderTitle, {
    title: channelId.title,
    subtitle: tmp3,
    variant: "heading-lg/semibold",
    subtitleColor: "text-muted",
  });
  return <View title={arg0.title} subtitle={tmp3} variant="heading-lg/semibold" subtitleColor="text-muted" />;
}
