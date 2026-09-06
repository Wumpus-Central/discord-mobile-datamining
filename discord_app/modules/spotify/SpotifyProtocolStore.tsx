// === Module 11750: SpotifyProtocolStore ===

// Module 11750 (SpotifyProtocolStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let isRegistered = false;
const Store = initializeDefault.Store;
class SpotifyProtocolStore extends Store {
}
SpotifyProtocolStore.prototype["isProtocolRegistered"] = function isProtocolRegistered() {
  return isRegistered;
};
SpotifyProtocolStore.displayName = "SpotifyProtocolStore";
const spotifyProtocolStore = new SpotifyProtocolStore(DispatcherDefault, {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function handleSetProtocolRegistered(isRegistered) {
    isRegistered = isRegistered.isRegistered;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/spotify/SpotifyProtocolStore.tsx");

export default spotifyProtocolStore;