// === Module 7244: isProtocolRegistered ===

// Module 7244 (isProtocolRegistered)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = false;
const Store = initializeDefault.Store;
class SpotifyProtocolStore extends Store {
}
SpotifyProtocolStore.prototype["isProtocolRegistered"] = function isProtocolRegistered() {
  return c0;
};
SpotifyProtocolStore.displayName = "SpotifyProtocolStore";
const spotifyProtocolStore = new SpotifyProtocolStore(dispatcherDefault, {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function handleSetProtocolRegistered(isRegistered) {
    isRegistered = isRegistered.isRegistered;
  }
});
const result = require("obj132").fileFinishedImporting("modules/spotify/SpotifyProtocolStore.tsx");

export default spotifyProtocolStore;