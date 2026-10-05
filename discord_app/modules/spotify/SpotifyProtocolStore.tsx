// discord_app/modules/spotify/SpotifyProtocolStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let isRegistered = false;
const Store = get_initializedDefault.Store;
class SpotifyProtocolStore extends Store {
  isProtocolRegistered() {
    return isRegistered;
  }
}
const prototype = SpotifyProtocolStore.prototype;
SpotifyProtocolStore.displayName = "SpotifyProtocolStore";
const obj = {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function handleSetProtocolRegistered(isRegistered) {
    isRegistered = isRegistered.isRegistered;
  },
};
const spotifyProtocolStore = new SpotifyProtocolStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/spotify/SpotifyProtocolStore.tsx");

export default spotifyProtocolStore;
