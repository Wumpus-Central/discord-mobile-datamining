// discord_app/modules/autocompleter/createAutocompleterResultForChannelId.tsx
import useChannelName from "../channel/useChannelName.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
fn(5734).AutocompleterResultTypes;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResultForChannelId.tsx");

export default function createAutocompleterResultForChannelId(arg0, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ChannelStore;
  }
  let obj2 = UserStore;
  if (UserStore === undefined) {
    obj2 = UserStore;
  }
  let tmp = RelationshipStore;
  if (RelationshipStore === undefined) {
    tmp = RelationshipStore;
  }
  const channel = obj.getChannel(arg0);
  if (null == channel) {
    return null;
  } else {
    const channelName = useChannelName.computeChannelName(channel, obj2, tmp);
    const type = channel.type;
    if (ChannelTypes.DM === type) {
      const user = obj2.getUser(channel.getRecipientId());
      let tmp6 = null;
      if (null != user) {
        const obj3 = { type: AutocompleterResultTypes.USER, record: user, score: 0, comparator: channelName };
        tmp6 = obj3;
      }
      return tmp6;
    } else if (ChannelTypes.GROUP_DM === type) {
      const obj4 = { type: AutocompleterResultTypes.GROUP_DM, record: channel, score: 0, comparator: channelName };
      return obj4;
    } else {
      if (ChannelTypes.GUILD_VOICE !== type) {
        if (ChannelTypes.GUILD_STAGE_VOICE !== type) {
          const obj5 = {
            type: AutocompleterResultTypes.TEXT_CHANNEL,
            record: channel,
            score: 0,
            comparator: channelName,
          };
          return obj5;
        }
      }
      const obj6 = { type: AutocompleterResultTypes.VOICE_CHANNEL, record: channel, score: 0, comparator: channelName };
      return obj6;
    }
  }
}
