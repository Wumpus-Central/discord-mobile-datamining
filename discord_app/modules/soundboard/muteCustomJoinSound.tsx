// discord_app/modules/soundboard/muteCustomJoinSound.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/soundboard/muteCustomJoinSound.tsx");

export default function muteCustomJoinSound(channelId) {
  DispatcherDefault.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId });
}
