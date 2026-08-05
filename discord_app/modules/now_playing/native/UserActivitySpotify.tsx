// discord_app/modules/now_playing/native/UserActivitySpotify.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import WEB_OPEN from "WEB_OPEN";
import jsxProd from "jsxProd";

let c10;
let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
let require = arg1;
({ Linking: c4, View: c5 } = get_ActivityIndicator);
({ SPOTIFY_APP_PROTOCOL: closure_6, SpotifyEndpoints: error, SpotifyResourceTypes: metroImportAll } = WEB_OPEN);
({ jsx: c9, jsxs: c10 } = jsxProd);
const PureComponent = importAllResult.PureComponent;
class SpotifyTrack extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyTrack = function handleOpenSpotifyTrack() {
      sync_id = sync_id.props.activity.sync_id;
      const canOpenURLResult = outer1_4.canOpenURL("" + outer1_6 + ":");
      outer1_4.canOpenURL("" + outer1_6 + ":").then((arg0) => {
        const TRACK = outer1_8.TRACK;
        if (arg0) {
          let catchPromise = outer1_4.openURL(outer1_7.PLAYER_OPEN(TRACK, tmp, true, "mobile")).catch(() => {

          });
          const openURLResult = outer1_4.openURL(outer1_7.PLAYER_OPEN(TRACK, tmp, true, "mobile"));
        } else {
          catchPromise = outer1_1(outer1_3[6]).openURL(outer1_7.WEB_OPEN(TRACK, tmp, "mobile"));
          const obj = outer1_1(outer1_3[6]);
        }
        return catchPromise;
      }).catch(() => {

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
      let closure_0;
      ({ activity: closure_0, userId: closure_1 } = applyArgumentsResult.props);
      let closure_2 = closure_1;
      const canOpenURLResult = outer1_4.canOpenURL("" + outer1_6 + ":");
      outer1_4.canOpenURL("" + outer1_6 + ":").then((closure_0) => {
        const spotifyMetadataFromActivity = outer1_0(outer1_3[7]).getSpotifyMetadataFromActivity(closure_0, closure_1);
        return spotifyMetadataFromActivity.then((arg0) => {
          const ARTIST = outer2_8.ARTIST;
          if (closure_0) {
            let catchPromise = outer2_4.openURL(outer2_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile")).catch(() => {

            });
            const openURLResult = outer2_4.openURL(outer2_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile"));
          } else {
            catchPromise = outer2_1(outer2_3[6]).openURL(outer2_7.WEB_OPEN(ARTIST, tmp, "mobile"));
            const obj = outer2_1(outer2_3[6]);
          }
          return catchPromise;
        });
      }).catch(() => {

      });
    };
    return applyArgumentsResult;
  }
}
const prototype = SpotifyArtists.prototype;
prototype["renderLink"] = function renderLink(children, arg1, arg2) {
  const self = this;
  let closure_1 = arg1;
  const onPress = this.props.onPress;
  children = [
    callback(onPress(1297).LegacyText, {
      onPress() {
        if (onPress != null) {
          tmp();
        }
        const result = self.handleOpenSpotifyArtist(closure_1);
      },
      suppressHighlighting: true,
      children
    }),

  ];
  let str = ", ";
  if (arg2) {
    str = "";
  }
  children[1] = str;
  return closure_10(onPress(1297).LegacyText, { children }, arg1);
};
prototype["render"] = function render() {
  const self = this;
  const parts = this.props.artists.split("; ");
  const _require = parts.length - 1;
  const obj = { children: null };
  obj[0] = parts.map((children) => self.renderLink(children, arg1, arg1 === closure_0));
  return callback(_require("../../../design/void/native.tsx").LegacyText, obj);
};
const PureComponent3 = importAllResult.PureComponent;
class SpotifyAlbum extends PureComponent3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyAlbum = function handleOpenSpotifyAlbum() {
      let closure_0;
      let closure_1;
      ({ activity: closure_0, userId: closure_1 } = applyArgumentsResult.props);
      const canOpenURLResult = outer1_4.canOpenURL("" + outer1_6 + ":");
      outer1_4.canOpenURL("" + outer1_6 + ":").then((closure_0) => {
        const spotifyMetadataFromActivity = outer1_0(outer1_3[7]).getSpotifyMetadataFromActivity(closure_0, closure_1);
        return spotifyMetadataFromActivity.then((album_id) => {
          album_id = album_id.album_id;
          const ALBUM = outer1_8.ALBUM;
          if (closure_0) {
            let catchPromise = outer1_4.openURL(outer1_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile")).catch(() => {

            });
            const openURLResult = outer1_4.openURL(outer1_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
          } else {
            catchPromise = outer1_1(outer1_3[6]).openURL(outer1_7.WEB_OPEN(ALBUM, album_id, "mobile"));
            const obj = outer1_1(outer1_3[6]);
          }
          return catchPromise;
        });
      }).catch(() => {

      });
    };
    return applyArgumentsResult;
  }
}
SpotifyAlbum.prototype["render"] = function render() {
  return callback(require("../../../design/void/native.tsx") /* Button */.LegacyText, { onPress: this.handleOpenSpotifyAlbum, suppressHighlighting: true, children: this.props.text });
};
let result = require("WEB_OPEN").fileFinishedImporting("modules/now_playing/native/UserActivitySpotify.tsx");

export const canOpenSpotifyUrl = function canOpenSpotifyUrl() {
  return closure_4.canOpenURL("" + closure_6 + ":");
};
export const attributeInstall = function attributeInstall() {
  let obj = importAll(1578);
  const HTTP = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
  obj = { url: closure_7.INSTALL_ATTRIBUTION(obj.getConstants().Identifier), rejectWithError: true };
  const value = HTTP.get(obj);
};
export const openUrl = function openUrl(arg0, ALBUM, album_id) {
  if (arg0) {
    let catchPromise = closure_4.openURL(closure_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile")).catch(() => {

    });
    const openURLResult = closure_4.openURL(closure_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
  } else {
    catchPromise = require("../../../lib/native/Linking.tsx").openURL(closure_7.WEB_OPEN(ALBUM, album_id, "mobile"));
    const obj = require("../../../lib/native/Linking.tsx");
  }
  return catchPromise;
};
export const openTrack = function openTrack(findActivityResult) {
  const sync_id = findActivityResult.sync_id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4.canOpenURL("" + closure_6 + ":").then((arg0) => {
    const TRACK = outer1_8.TRACK;
    if (arg0) {
      let catchPromise = outer1_4.openURL(outer1_7.PLAYER_OPEN(TRACK, tmp, true, "mobile")).catch(() => {

      });
      const openURLResult = outer1_4.openURL(outer1_7.PLAYER_OPEN(TRACK, tmp, true, "mobile"));
    } else {
      catchPromise = outer1_1(outer1_3[6]).openURL(outer1_7.WEB_OPEN(TRACK, tmp, "mobile"));
      const obj = outer1_1(outer1_3[6]);
    }
    return catchPromise;
  }).catch(() => {

  });
};
export const openArtist = function openArtist(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4.canOpenURL("" + closure_6 + ":").then((closure_0) => {
    const spotifyMetadataFromActivity = outer1_0(outer1_3[7]).getSpotifyMetadataFromActivity(closure_0, closure_1);
    return spotifyMetadataFromActivity.then((arg0) => {
      const ARTIST = outer2_8.ARTIST;
      if (closure_0) {
        let catchPromise = outer2_4.openURL(outer2_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile")).catch(() => {

        });
        const openURLResult = outer2_4.openURL(outer2_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile"));
      } else {
        catchPromise = outer2_1(outer2_3[6]).openURL(outer2_7.WEB_OPEN(ARTIST, tmp, "mobile"));
        const obj = outer2_1(outer2_3[6]);
      }
      return catchPromise;
    });
  }).catch(() => {

  });
};
export const openAlbum = function openAlbum(activity, id) {
  let closure_0 = activity;
  let closure_1 = id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4.canOpenURL("" + closure_6 + ":").then((closure_0) => {
    const spotifyMetadataFromActivity = outer1_0(outer1_3[7]).getSpotifyMetadataFromActivity(closure_0, closure_1);
    return spotifyMetadataFromActivity.then((album_id) => {
      album_id = album_id.album_id;
      const ALBUM = outer1_8.ALBUM;
      if (closure_0) {
        let catchPromise = outer1_4.openURL(outer1_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile")).catch(() => {

        });
        const openURLResult = outer1_4.openURL(outer1_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
      } else {
        catchPromise = outer1_1(outer1_3[6]).openURL(outer1_7.WEB_OPEN(ALBUM, album_id, "mobile"));
        const obj = outer1_1(outer1_3[6]);
      }
      return catchPromise;
    });
  }).catch(() => {

  });
};
export const SpotifyPlayButton = function SpotifyPlayButton(activity) {
  activity = activity.activity;
  let obj = { style: activity.style, children: null };
  obj = { icon: null, text: null, size: "sm", onPress: null, grow: true };
  obj = { source: null };
  obj[0] = require("../../../../_runtime/08054_registerAsset.js");
  obj[0] = callback(activity(4695).Button.Icon, obj);
  const intl = activity(1236).intl;
  obj[1] = intl.formatToPlainString(activity(1236).t.LEgD7t, { platform: activity.name });
  obj[3] = function onPress() {
    sync_id = sync_id.sync_id;
    const canOpenURLResult = outer1_4.canOpenURL("" + outer1_6 + ":");
    outer1_4.canOpenURL("" + outer1_6 + ":").then((arg0) => {
      if (arg0) {
        let catchPromise = outer1_4.openURL(outer1_7.PLAYER_OPEN(outer1_8.TRACK, sync_id)).catch(() => {

        });
        const openURLResult = outer1_4.openURL(outer1_7.PLAYER_OPEN(outer1_8.TRACK, sync_id));
      } else {
        let obj = outer1_2(outer1_3[4]);
        const HTTP = sync_id(outer1_3[5]).HTTP;
        obj = { url: null, rejectWithError: true };
        obj[0] = outer1_7.INSTALL_ATTRIBUTION(obj.getConstants().Identifier);
        const value = HTTP.get(obj);
        catchPromise = outer1_1(outer1_3[6]).openURL(outer1_7.APP_STORE);
        const obj3 = outer1_1(outer1_3[6]);
      }
      return catchPromise;
    }).catch(() => {

    });
  };
  obj[1] = callback(activity(4695).Button, obj);
  return callback(closure_5, obj);
};
export { SpotifyTrack };
export { SpotifyArtists };
export { SpotifyAlbum };