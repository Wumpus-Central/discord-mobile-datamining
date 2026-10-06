// discord_app/modules/stage_channels/native/modals/GuildStageChannelSelection.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ channelText: { marginTop: 8, flexDirection: "row" } });
let result = size.fileFinishedImporting("modules/stage_channels/native/modals/GuildStageChannelSelection.tsx");

export default function GuildStageChannelSelection(channel) {
  let tmp5;
  channel = channel.channel;
  const onChangeChannel = channel.onChangeChannel;
  function handleSelectChannel() {
    let id;
    let intl;
    let obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    const mapped = channelsUserCanStartStageIn.map((id) => {
      let obj2;
      const obj = { value: id.id, label: obj2.computeChannelName(id, closure_1_5, closure_1_4, true) };
      obj2 = channel(handleSelectChannel[6]);
      return obj;
    });
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj2 = {
      title: intl.string(intl2.t["bxw/f7"]),
      items: mapped,
      onItemSelect(arg0) {
        let closure_0 = arg0;
        const found = channelsUserCanStartStageIn.find((id) => id.id === closure_0);
        if (null != found) {
          closure_1_1(found);
        }
        const obj = onChangeChannel(handleSelectChannel[8]);
        obj.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false,
    };
    const tmp4 = asyncRequire(8978, dependencyMap.paths);
    intl = intl2.intl;
    id = undefined;
    if (channel != null) {
      id = channel.id;
    }
    openLazy(tmp4, "SelectUpdatesChannel", obj2);
  }
  function renderChannelHook(children, id) {
    return jsx(
      channel(handleSelectChannel[12]).Text,
      { variant: "text-sm/bold", color: "mobile-text-heading-primary", children },
      id,
    );
  }
  const guild = channel.guild;
  const tmp = closure_7();
  let obj = channel(handleSelectChannel[5]);
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(guild);
  const tmp2 = channelsUserCanStartStageIn.length > 1;
  let tmp3 = onChangeChannel(handleSelectChannel[6])(channel);
  let obj2 = { style: tmp.channelText, variant: "text-xs/medium", color: "text-default", children: null };
  const Text = channel(handleSelectChannel[12]).Text;
  let intl = channel(handleSelectChannel[11]).intl;
  const format = intl.format;
  const t = channel(handleSelectChannel[11]).t;
  if (tmp2) {
    const obj3 = {
      stageName: tmp3,
      stageHook: renderChannelHook,
      changeHook(children, key) {
        return jsx(
          Text_Text.Text,
          { onPress: handleSelectChannel, variant: "text-xs/medium", color: "text-link", children },
          key,
        );
      },
    };
    obj2.children = format(t.AkzLcV, obj3);
    tmp5 = obj2;
  } else {
    const obj4 = { stageName: tmp3, stageHook: renderChannelHook };
    obj2.children = format(t["S+9O7g"], obj4);
    tmp5 = obj2;
  }
  return <Text {...tmp5} />;
}
