// discord_app/modules/spotify/SpotifyProtocolStore.tsx
import { Store } from "initialize";

let c0 = false;
class SpotifyProtocolStore extends Store {
}
SpotifyProtocolStore.prototype["isProtocolRegistered"] = function isProtocolRegistered() {
  return c0;
};
SpotifyProtocolStore.displayName = "SpotifyProtocolStore";
const spotifyProtocolStore = new SpotifyProtocolStore(require("dispatcher"), {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function handleSetProtocolRegistered(isRegistered) {
    isRegistered = isRegistered.isRegistered;
  }
});
const result = require("set").fileFinishedImporting("modules/spotify/SpotifyProtocolStore.tsx");

export default spotifyProtocolStore;