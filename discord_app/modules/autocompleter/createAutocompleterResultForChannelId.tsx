// discord_app/modules/autocompleter/createAutocompleterResultForChannelId.tsx
import computeChannelName from "../channel/useChannelName.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { ChannelTypes } from "../../Constants.tsx";

require = fn;
require("HeaderRecord").AutocompleterResultTypes;
const result = require("obj132").fileFinishedImporting("modules/autocompleter/createAutocompleterResultForChannelId.tsx");

export default function createAutocompleterResultForChannelId(arg0, arg1, closure_9, closure_7) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  obj1 = closure_9;
  if (closure_9 === undefined) {
    obj1 = closure_4;
  }
  let tmp = closure_7;
  if (closure_7 === undefined) {
    tmp = closure_3;
  }
  const channel = obj.getChannel(arg0);
  if (null == channel) {
    return null;
  } else {
    const channelName = computeChannelName.computeChannelName(channel, obj1, tmp);
    const type = channel.type;
    if (ChannelTypes.DM === type) {
      const user = obj1.getUser(channel.getRecipientId());
      let tmp6 = null;
      if (null != user) {
        obj = { type: null, record: null, score: 0, comparator: null };
        obj[0] = AutocompleterResultTypes.USER;
        obj[1] = user;
        obj[3] = channelName;
        tmp6 = obj;
      }
      return tmp6;
    } else if (ChannelTypes.GROUP_DM === type) {
      obj = { type: null, record: null, score: 0, comparator: null };
      obj[0] = AutocompleterResultTypes.GROUP_DM;
      obj[1] = channel;
      obj[3] = channelName;
      return obj;
    } else {
      if (ChannelTypes.GUILD_VOICE !== type) {
        if (ChannelTypes.GUILD_STAGE_VOICE !== type) {
          obj1 = { type: null, record: null, score: 0, comparator: null };
          obj1[0] = AutocompleterResultTypes.TEXT_CHANNEL;
          obj1[1] = channel;
          obj1[3] = channelName;
          return obj1;
        }
      }
      const obj2 = { type: null, record: null, score: 0, comparator: null };
      obj2[0] = AutocompleterResultTypes.VOICE_CHANNEL;
      obj2[1] = channel;
      obj2[3] = channelName;
      return obj2;
    }
  }
};