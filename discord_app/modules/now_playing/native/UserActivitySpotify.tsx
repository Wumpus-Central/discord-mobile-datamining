// === Module 10913: render ===

// Module 10913 (render)
import sendRequest from "sendRequest" /* 530 */;
import Button from "Button" /* 1297 */;
import getConstantsAll from "getConstants" /* 1626 */;
import _modDef4090 from "module_4090" /* 4090 */;
import registerAssetDefault from "registerAsset" /* 8352 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import SPOTIFY_APP_PROTOCOL from "SPOTIFY_APP_PROTOCOL" /* 7242 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
({ Linking: c4, View: c5 } = get_ActivityIndicator);
({ SPOTIFY_APP_PROTOCOL: closure_6, SpotifyEndpoints: error, SpotifyResourceTypes: closure_8 } = SPOTIFY_APP_PROTOCOL);
({ jsx: c9, jsxs: c10 } = jsxProd);
const PureComponent = importAllResult.PureComponent;
class SpotifyTrack extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyTrack = function handleOpenSpotifyTrack() {
      sync_id = sync_id.props.activity.sync_id;
      const canOpenURLResult = closure_1_4.canOpenURL("" + closure_1_6 + ":");
      closure_1_4.canOpenURL("" + closure_1_6 + ":").then((result) => {
        const TRACK = closure_1_8.TRACK;
        if (result) {
          let catchPromise = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile")).catch((error) => {

          });
          const openURLResult = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
        } else {
          catchPromise = closure_1_1(closure_1_3[6]).openURL(closure_1_7.WEB_OPEN(TRACK, sync_id, "mobile"));
          const obj = closure_1_1(closure_1_3[6]);
        }
        return catchPromise;
      }).catch((error) => {

      });
    };
    return applyArgumentsResult;
  }
}
SpotifyTrack.prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  const onPress = props.onPress;
  return callback(onPress(1297).LegacyText, {
    onPress() {
      if (onPress != null) {
        tmp();
      }
      const result = self.handleOpenSpotifyTrack();
    },
    suppressHighlighting: true,
    children: props.text
  });
};
const PureComponent2 = importAllResult.PureComponent;
class SpotifyArtists extends PureComponent2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyArtist = function handleOpenSpotifyArtist(closure_1) {
      ({ activity: closure_0, userId: closure_1 } = applyArgumentsResult.props);
      closure_2 = closure_1;
      const canOpenURLResult = closure_1_4.canOpenURL("" + closure_1_6 + ":");
      closure_1_4.canOpenURL("" + closure_1_6 + ":").then((result) => {
        closure_0 = result;
        const spotifyMetadataFromActivity = closure_1_0(closure_1_3[7]).getSpotifyMetadataFromActivity(closure_0, closure_1);
        return spotifyMetadataFromActivity.then((result) => {
          const ARTIST = closure_2_8.ARTIST;
          if (closure_0) {
            let catchPromise = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile")).catch((error) => {

            });
            const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile"));
          } else {
            catchPromise = closure_2_1(closure_2_3[6]).openURL(closure_2_7.WEB_OPEN(ARTIST, tmp, "mobile"));
            const obj = closure_2_1(closure_2_3[6]);
          }
          return catchPromise;
        });
      }).catch((error) => {

      });
    };
    return applyArgumentsResult;
  }
}
const prototype = SpotifyArtists.prototype;
prototype["renderLink"] = function renderLink(children, index, arg2) {
  const self = this;
  closure_1 = index;
  const onPress = this.props.onPress;
  children = [, ];
  children[0] = callback(onPress(1297).LegacyText, {
    onPress() {
      if (onPress != null) {
        tmp();
      }
      const result = self.handleOpenSpotifyArtist(closure_1);
    },
    suppressHighlighting: true,
    children
  });
  let str = ", ";
  if (arg2) {
    str = "";
  }
  children[1] = str;
  return callback(onPress(1297).LegacyText, { children }, index);
};
prototype["render"] = function render() {
  const self = this;
  const parts = this.props.artists.split("; ");
  const _require = parts.length - 1;
  return callback(_require(1297).LegacyText, { children: parts.map((item, index) => self.renderLink(item, index, index === closure_0)) });
};
const PureComponent3 = importAllResult.PureComponent;
class SpotifyAlbum extends PureComponent3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyAlbum = function handleOpenSpotifyAlbum() {
      ({ activity: closure_0, userId: closure_1 } = applyArgumentsResult.props);
      const canOpenURLResult = closure_1_4.canOpenURL("" + closure_1_6 + ":");
      closure_1_4.canOpenURL("" + closure_1_6 + ":").then((result) => {
        closure_0 = result;
        const spotifyMetadataFromActivity = closure_1_0(closure_1_3[7]).getSpotifyMetadataFromActivity(closure_0, closure_1);
        return spotifyMetadataFromActivity.then((result) => {
          const album_id = result.album_id;
          const ALBUM = closure_1_8.ALBUM;
          if (closure_0) {
            let catchPromise = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile")).catch((error) => {

            });
            const openURLResult = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
          } else {
            catchPromise = closure_1_1(closure_1_3[6]).openURL(closure_1_7.WEB_OPEN(ALBUM, album_id, "mobile"));
            const obj = closure_1_1(closure_1_3[6]);
          }
          return catchPromise;
        });
      }).catch((error) => {

      });
    };
    return applyArgumentsResult;
  }
}
SpotifyAlbum.prototype["render"] = function render() {
  return callback(Button.LegacyText, { onPress: this.handleOpenSpotifyAlbum, suppressHighlighting: true, children: this.props.text });
};
let result = require("obj132").fileFinishedImporting("modules/now_playing/native/UserActivitySpotify.tsx");

export const canOpenSpotifyUrl = function canOpenSpotifyUrl() {
  return closure_4.canOpenURL("" + closure_6 + ":");
};
export const attributeInstall = function attributeInstall() {
  let obj = getConstantsAll;
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_7.INSTALL_ATTRIBUTION(obj.getConstants().Identifier), rejectWithError: true };
  const value = HTTP.get(obj);
};
export const openUrl = function openUrl(arg0, ALBUM, album_id) {
  if (arg0) {
    let catchPromise = closure_4.openURL(closure_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile")).catch((error) => {

    });
    const openURLResult = closure_4.openURL(closure_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
  } else {
    catchPromise = _modDef4090.openURL(closure_7.WEB_OPEN(ALBUM, album_id, "mobile"));
  }
  return catchPromise;
};
export const openTrack = function openTrack(findActivityResult) {
  const sync_id = findActivityResult.sync_id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4.canOpenURL("" + closure_6 + ":").then((result) => {
    const TRACK = closure_1_8.TRACK;
    if (result) {
      let catchPromise = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile")).catch((error) => {

      });
      const openURLResult = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
    } else {
      catchPromise = closure_1_1(closure_1_3[6]).openURL(closure_1_7.WEB_OPEN(TRACK, sync_id, "mobile"));
      const obj = closure_1_1(closure_1_3[6]);
    }
    return catchPromise;
  }).catch((error) => {

  });
};
export const openArtist = function openArtist(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4.canOpenURL("" + closure_6 + ":").then((result) => {
    closure_0 = result;
    const spotifyMetadataFromActivity = closure_1_0(closure_1_3[7]).getSpotifyMetadataFromActivity(closure_0, closure_1);
    return spotifyMetadataFromActivity.then((result) => {
      const ARTIST = closure_2_8.ARTIST;
      if (closure_0) {
        let catchPromise = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile")).catch((error) => {

        });
        const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile"));
      } else {
        catchPromise = closure_2_1(closure_2_3[6]).openURL(closure_2_7.WEB_OPEN(ARTIST, tmp, "mobile"));
        const obj = closure_2_1(closure_2_3[6]);
      }
      return catchPromise;
    });
  }).catch((error) => {

  });
};
export const openAlbum = function openAlbum(activity, id) {
  closure_0 = activity;
  closure_1 = id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4.canOpenURL("" + closure_6 + ":").then((result) => {
    closure_0 = result;
    const spotifyMetadataFromActivity = closure_1_0(closure_1_3[7]).getSpotifyMetadataFromActivity(closure_0, closure_1);
    return spotifyMetadataFromActivity.then((result) => {
      const album_id = result.album_id;
      const ALBUM = closure_1_8.ALBUM;
      if (closure_0) {
        let catchPromise = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile")).catch((error) => {

        });
        const openURLResult = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
      } else {
        catchPromise = closure_1_1(closure_1_3[6]).openURL(closure_1_7.WEB_OPEN(ALBUM, album_id, "mobile"));
        const obj = closure_1_1(closure_1_3[6]);
      }
      return catchPromise;
    });
  }).catch((error) => {

  });
};
export const SpotifyPlayButton = function SpotifyPlayButton(activity) {
  activity = activity.activity;
  let obj = { source: registerAssetDefault };
  obj[0] = callback(activity(4745).Button.Icon, obj);
  const intl = activity(1236).intl;
  obj[1] = intl.formatToPlainString(activity(1236).t.LEgD7t, { platform: activity.name });
  obj[3] = function onPress() {
    sync_id = sync_id.sync_id;
    const canOpenURLResult = closure_1_4.canOpenURL("" + closure_1_6 + ":");
    closure_1_4.canOpenURL("" + closure_1_6 + ":").then((result) => {
      if (result) {
        let catchPromise = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(closure_1_8.TRACK, sync_id)).catch((error) => {

        });
        const openURLResult = closure_1_4.openURL(closure_1_7.PLAYER_OPEN(closure_1_8.TRACK, sync_id));
      } else {
        closure_1_2(closure_1_3[4]);
        const HTTP = sync_id(closure_1_3[5]).HTTP;
        const obj = { url: null, rejectWithError: true };
        obj[0] = closure_1_7.INSTALL_ATTRIBUTION(obj.getConstants().Identifier);
        const value = HTTP.get(obj);
        catchPromise = closure_1_1(closure_1_3[6]).openURL(closure_1_7.APP_STORE);
        const obj3 = closure_1_1(closure_1_3[6]);
      }
      return catchPromise;
    }).catch((error) => {

    });
  };
  obj[1] = callback(activity(4745).Button, obj);
  return callback(closure_5, obj);
};
export { SpotifyTrack };
export { SpotifyArtists };
export { SpotifyAlbum };