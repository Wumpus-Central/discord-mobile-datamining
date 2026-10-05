// discord_app/modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx
import react from "../../../_runtime/00576_react.js";
import useGuildScheduledEvents from "useGuildScheduledEvents.tsx";
import useLiveStageChannelsDefault from "../stage_channels/useLiveStageChannels.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp7;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = useGuildScheduledEvents;
      let firstActiveEventChannel = obj2.useFirstActiveEventChannel(arg0);
      const tmp3 = useLiveStageChannelsDefault(arg0);
      const first = tmp3[0];
      let id;
      const first1 = cResult[0];
      if (first != null) {
        id = first.id;
      }
      if (first1 !== id) {
        const first2 = tmp3[0];
        let id1;
        const getChannel = ChannelStore.getChannel;
        if (first2 != null) {
          id1 = first2.id;
        }
        const channel = getChannel(id1);
        const first3 = tmp3[0];
        let id2;
        if (first3 != null) {
          id2 = first3.id;
        }
        cResult[0] = id2;
        cResult[1] = channel;
        tmp7 = channel;
      } else {
        tmp7 = cResult[1];
      }
      if (firstActiveEventChannel == null) {
        firstActiveEventChannel = tmp7;
      }
      return firstActiveEventChannel;
    }
  : (arg0) => {
      let id;
      const obj = useGuildScheduledEvents;
      let firstActiveEventChannel = obj.useFirstActiveEventChannel(arg0);
      const first = useLiveStageChannelsDefault(arg0)[0];
      const getChannel = ChannelStore.getChannel;
      if (first != null) {
        id = first.id;
      }
      if (firstActiveEventChannel == null) {
        firstActiveEventChannel = getChannel(id);
      }
      return firstActiveEventChannel;
    };
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = tmp2;
