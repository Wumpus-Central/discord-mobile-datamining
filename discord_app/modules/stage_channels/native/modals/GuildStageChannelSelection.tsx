// === Module 8914: GuildStageChannelSelection ===

// Module 8914 (GuildStageChannelSelection)
import noopAll from "noop" /* 19 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
noopAll;
let closure_7 = createCacheKey.createStyles({ channelText: { marginTop: 8, flexDirection: "row" } });
let result = require("obj132").fileFinishedImporting("modules/stage_channels/native/modals/GuildStageChannelSelection.tsx");

export default function GuildStageChannelSelection(channel) {
  channel = channel.channel;
  const onChangeChannel = channel.onChangeChannel;
  function handleSelectChannel() {
    let obj = channelsUserCanStartStageIn(handleSelectChannel[7]);
    const result = obj.dismissGlobalKeyboard();
    const mapped = channelsUserCanStartStageIn.map((item, index) => {
      const obj = { value: item.id, label: callback(table[6]).computeChannelName(item, closure_5, closure_4, true) };
      return obj;
    });
    obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const obj2 = onChangeChannel(handleSelectChannel[8]);
    const intl = channel(handleSelectChannel[11]).intl;
    obj[0] = intl.string(channel(handleSelectChannel[11]).t["bxw/f7"]);
    obj[1] = mapped;
    obj[2] = function onItemSelect(arg0) {
      closure_0 = arg0;
      const found = closure_2.find((item, index) => item.id === closure_0);
      if (null != found) {
        callback2(found);
      }
      onChangeChannel(handleSelectChannel[8]).hideActionSheet();
      const obj = onChangeChannel(handleSelectChannel[8]);
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj[3] = id;
    obj2.openLazy(channel(handleSelectChannel[10])(handleSelectChannel[9], handleSelectChannel.paths), "SelectUpdatesChannel", obj);
  }
  function renderChannelHook(children) {
    return callback(channel(handleSelectChannel[12]).Text, { variant: "text-sm/bold", color: "mobile-text-heading-primary", children }, arg1);
  }
  let obj = channel(handleSelectChannel[5]);
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(channel.guild);
  const tmp3 = onChangeChannel(handleSelectChannel[6])(channel);
  obj = { style: callback().channelText, variant: "text-xs/medium", color: "text-default", children: null };
  let intl = channel(handleSelectChannel[11]).intl;
  const format = intl.format;
  const t = channel(handleSelectChannel[11]).t;
  if (tmp2) {
    obj = { stageName: null, stageHook: null, changeHook: null };
    obj[0] = tmp3;
    obj[1] = renderChannelHook;
    obj[2] = function changeHook(children) {
      return jsx(channel(handleSelectChannel[12]).Text, { onPress: handleSelectChannel, variant: "text-xs/medium", color: "text-link", children }, arg1);
    };
    obj[3] = format(t.AkzLcV, obj);
    let tmp5 = obj;
  } else {
    obj1 = { stageName: null, stageHook: null };
    obj1[0] = tmp3;
    obj1[1] = renderChannelHook;
    obj[3] = format(t["S+9O7g"], obj1);
    tmp5 = obj;
  }
  return jsx(channel(handleSelectChannel[12]).Text, tmp5);
};