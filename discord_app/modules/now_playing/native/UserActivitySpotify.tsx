// discord_app/modules/now_playing/native/UserActivitySpotify.tsx
import native from "../../../design/void/native.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ClientInfoUtilsAll from "../../../utils/native/ClientInfoUtils.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import _modDef8142 from "../../../../_runtime/metro/08142__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Linking: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SpotifyConstants = fn(8340);
({
  SPOTIFY_APP_PROTOCOL: metroRequire,
  SpotifyEndpoints: closure_7,
  SpotifyResourceTypes: closure_8,
} = SpotifyConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PureComponent = noop.PureComponent;
class SpotifyTrack extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyTrack = function handleOpenSpotifyTrack() {
      const sync_id = applyArgumentsResult.props.activity.sync_id;
      const canOpenURLResult = React4.canOpenURL("" + timestampProducer + ":");
      React4.canOpenURL("" + timestampProducer + ":")
        .then((result) => {
          const TRACK = constants.TRACK;
          if (result) {
            let catchPromise = closure_2_4
              .openURL(closure_2_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"))
              .catch(() => {});
            const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
          } else {
            catchPromise = LinkingDefault.openURL(closure_2_7.WEB_OPEN(TRACK, sync_id, "mobile"));
          }
          return catchPromise;
        })
        .catch(() => {});
    };
    return applyArgumentsResult;
  }
}
SpotifyTrack.prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  const onPress = props.onPress;
  return React7(native.LegacyText, {
    onPress() {
      if (onPress != null) {
        tmp();
      }
      const result = self.handleOpenSpotifyTrack();
    },
    suppressHighlighting: true,
    children: props.text,
  });
};
const PureComponent2 = noop.PureComponent;
class SpotifyArtists extends PureComponent2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyArtist = function handleOpenSpotifyArtist(arg0) {
      ({ activity: closure_0, userId: closure_1 } = applyArgumentsResult.props);
      closure_2 = arg0;
      const canOpenURLResult = React4.canOpenURL("" + timestampProducer + ":");
      React4.canOpenURL("" + timestampProducer + ":")
        .then((result) => {
          closure_0 = result;
          const spotifyMetadataFromActivity = closure_1_0(closure_1_3[7]).getSpotifyMetadataFromActivity(
            closure_0,
            closure_1,
          );
          return spotifyMetadataFromActivity.then((result) => {
            const ARTIST = constants.ARTIST;
            if (closure_0) {
              let catchPromise = closure_3_4
                .openURL(closure_3_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile"))
                .catch(() => {});
              const openURLResult = closure_3_4.openURL(closure_3_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile"));
            } else {
              catchPromise = LinkingDefault.openURL(closure_3_7.WEB_OPEN(ARTIST, tmp, "mobile"));
            }
            return catchPromise;
          });
        })
        .catch(() => {});
    };
    return applyArgumentsResult;
  }
}
const prototype = SpotifyArtists.prototype;
prototype["renderLink"] = function renderLink(children, index, arg2) {
  const self = this;
  closure_1 = index;
  const onPress = this.props.onPress;
  children = [,];
  children[0] = React7(native.LegacyText, {
    onPress() {
      if (onPress != null) {
        tmp();
      }
      const result = self.handleOpenSpotifyArtist(closure_1);
    },
    suppressHighlighting: true,
    children,
  });
  let str = ", ";
  if (arg2) {
    str = "";
  }
  children[1] = str;
  return closure_1_10(native.LegacyText, { children }, index);
};
prototype["render"] = function render() {
  const self = this;
  const parts = this.props.artists.split("; ");
  closure_0 = parts.length - 1;
  return React7(native.LegacyText, {
    children: parts.map((item, index) => self.renderLink(item, index, index === closure_0)),
  });
};
const PureComponent3 = noop.PureComponent;
class SpotifyAlbum extends PureComponent3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyAlbum = function handleOpenSpotifyAlbum() {
      ({ activity: closure_0, userId: closure_1 } = applyArgumentsResult.props);
      const canOpenURLResult = React4.canOpenURL("" + timestampProducer + ":");
      React4.canOpenURL("" + timestampProducer + ":")
        .then((result) => {
          closure_0 = result;
          const spotifyMetadataFromActivity = applyArgumentsResult(dependencyMap[7]).getSpotifyMetadataFromActivity(
            closure_1_0,
            closure_1_1,
          );
          return spotifyMetadataFromActivity.then((album_id) => {
            album_id = album_id.album_id;
            const ALBUM = constants.ALBUM;
            if (closure_0) {
              let catchPromise = closure_2_4
                .openURL(closure_2_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"))
                .catch(() => {});
              const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
            } else {
              catchPromise = closure_2_1(dependencyMap[6]).openURL(closure_2_7.WEB_OPEN(ALBUM, album_id, "mobile"));
              const obj = closure_2_1(dependencyMap[6]);
            }
            return catchPromise;
          });
        })
        .catch(() => {});
    };
    return applyArgumentsResult;
  }
}
SpotifyAlbum.prototype["render"] = function render() {
  return React7(native.LegacyText, {
    onPress: this.handleOpenSpotifyAlbum,
    suppressHighlighting: true,
    children: this.props.text,
  });
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/now_playing/native/UserActivitySpotify.tsx");

export const canOpenSpotifyUrl = function canOpenSpotifyUrl() {
  return React4.canOpenURL("" + timestampProducer + ":");
};
export const attributeInstall = function attributeInstall() {
  let obj = ClientInfoUtilsAll;
  const HTTP = HTTPUtils.HTTP;
  obj = { url: React5.INSTALL_ATTRIBUTION(obj.getConstants().Identifier), rejectWithError: true };
  value = HTTP.get(obj);
};
export const openUrl = function openUrl(arg0, ALBUM, album_id) {
  if (arg0) {
    let catchPromise = React4.openURL(React5.PLAYER_OPEN(ALBUM, album_id, true, "mobile")).catch(() => {});
    const openURLResult = React4.openURL(React5.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
  } else {
    catchPromise = LinkingDefault.openURL(React5.WEB_OPEN(ALBUM, album_id, "mobile"));
  }
  return catchPromise;
};
export const openTrack = function openTrack(findActivityResult) {
  const sync_id = findActivityResult.sync_id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4
    .canOpenURL("" + closure_6 + ":")
    .then((result) => {
      const TRACK = constants.TRACK;
      if (result) {
        let catchPromise = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile")).catch(() => {});
        const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
      } else {
        catchPromise = LinkingDefault.openURL(closure_2_7.WEB_OPEN(TRACK, sync_id, "mobile"));
      }
      return catchPromise;
    })
    .catch(() => {});
};
export const openArtist = function openArtist(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4
    .canOpenURL("" + closure_6 + ":")
    .then((result) => {
      closure_0 = result;
      const spotifyMetadataFromActivity = closure_1_0(closure_1_3[7]).getSpotifyMetadataFromActivity(
        closure_0,
        closure_1,
      );
      return spotifyMetadataFromActivity.then((result) => {
        const ARTIST = constants.ARTIST;
        if (closure_0) {
          let catchPromise = closure_3_4.openURL(closure_3_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile")).catch(() => {});
          const openURLResult = closure_3_4.openURL(closure_3_7.PLAYER_OPEN(ARTIST, tmp, true, "mobile"));
        } else {
          catchPromise = LinkingDefault.openURL(closure_3_7.WEB_OPEN(ARTIST, tmp, "mobile"));
        }
        return catchPromise;
      });
    })
    .catch(() => {});
};
export const openAlbum = function openAlbum(activity, id) {
  closure_0 = activity;
  closure_1 = id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  closure_4
    .canOpenURL("" + closure_6 + ":")
    .then((result) => {
      closure_0 = result;
      const spotifyMetadataFromActivity = applyArgumentsResult(dependencyMap[7]).getSpotifyMetadataFromActivity(
        closure_1_0,
        closure_1_1,
      );
      return spotifyMetadataFromActivity.then((album_id) => {
        album_id = album_id.album_id;
        const ALBUM = constants.ALBUM;
        if (closure_0) {
          let catchPromise = closure_2_4
            .openURL(closure_2_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"))
            .catch(() => {});
          const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
        } else {
          catchPromise = closure_2_1(dependencyMap[6]).openURL(closure_2_7.WEB_OPEN(ALBUM, album_id, "mobile"));
          const obj = closure_2_1(dependencyMap[6]);
        }
        return catchPromise;
      });
    })
    .catch(() => {});
};
export const SpotifyPlayButton = function SpotifyPlayButton(activity) {
  activity = activity.activity;
  let obj = { style: activity.style, children: null };
  obj = { icon: null, text: null, size: "sm", onPress: null, grow: true };
  obj = { source: _modDef8142 };
  obj.icon = closure_9(activity(4975).Button.Icon, obj);
  const intl = activity(1114).intl;
  obj.text = intl.formatToPlainString(activity(1114).t.LEgD7t, { platform: activity.name });
  obj.onPress = function onPress() {
    const sync_id = activity.sync_id;
    const canOpenURLResult = React4.canOpenURL("" + timestampProducer + ":");
    React4.canOpenURL("" + timestampProducer + ":")
      .then((result) => {
        if (result) {
          let catchPromise = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(constants.TRACK, sync_id)).catch(() => {});
          const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(constants.TRACK, sync_id));
        } else {
          const HTTP = activity(1272).HTTP;
          const obj = { url: null, rejectWithError: true };
          obj.url = closure_2_7.INSTALL_ATTRIBUTION(obj.getConstants().Identifier);
          value = HTTP.get(obj);
          catchPromise = LinkingDefault.openURL(closure_2_7.APP_STORE);
        }
        return catchPromise;
      })
      .catch(() => {});
  };
  obj.children = closure_9(activity(4975).Button, obj);
  return closure_9(closure_5, obj);
};
export { SpotifyTrack };
export { SpotifyArtists };
export { SpotifyAlbum };
