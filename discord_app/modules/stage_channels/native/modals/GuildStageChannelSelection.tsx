// === Module 9817: GuildStageChannelSelection ===

// Module 9817 (GuildStageChannelSelection)
import util from "util" /* 1114 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ channelText: { marginTop: 8, flexDirection: "row" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/modals/GuildStageChannelSelection.tsx");

export default function GuildStageChannelSelection(channel) {
  channel = channel.channel;
  const onChangeChannel = channel.onChangeChannel;
  function handleSelectChannel() {
    let obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    const mapped = channelsUserCanStartStageIn.map((id) => {
      const obj = { value: id.id, label: channel(handleSelectChannel[6]).computeChannelName(id, closure_1_5, closure_1_4, true) };
      return obj;
    });
    obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const obj2 = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj.title = intl.string(util.t["bxw/f7"]);
    obj.items = mapped;
    obj.onItemSelect = function onItemSelect(arg0) {
      closure_0 = arg0;
      const found = channelsUserCanStartStageIn.find((id) => id.id === closure_0);
      if (null != found) {
        closure_1_1(found);
      }
      onChangeChannel(handleSelectChannel[8]).hideActionSheet();
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj.selectedItem = id;
    obj2.openLazy(asyncRequireImpl(9426, dependencyMap.paths), "SelectUpdatesChannel", obj);
  }
  function renderChannelHook(children, arg1) {
    return jsx(channel(handleSelectChannel[12]).Text, { variant: "text-sm/bold", color: "mobile-text-heading-primary", children }, arg1);
  }
  let obj = channel(handleSelectChannel[5]);
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(channel.guild);
  const tmp3 = onChangeChannel(handleSelectChannel[6])(channel);
  obj = { style: closure_7().channelText, variant: "text-xs/medium", color: "text-default", children: null };
  let intl = channel(handleSelectChannel[11]).intl;
  const format = intl.format;
  const t = channel(handleSelectChannel[11]).t;
  if (tmp2) {
    obj = {
      stageName: tmp3,
      stageHook: renderChannelHook,
      changeHook(children, arg1) {
          return jsx(Text_Text.Text, { onPress: handleSelectChannel, variant: "text-xs/medium", color: "text-link", children }, arg1);
        }
    };
    obj.children = format(t.AkzLcV, obj);
    let tmp5 = obj;
  } else {
    const obj1 = { stageName: tmp3, stageHook: renderChannelHook };
    obj.children = format(t["S+9O7g"], obj1);
    tmp5 = obj;
  }
  return jsx(channel(handleSelectChannel[12]).Text, tmp5);
};