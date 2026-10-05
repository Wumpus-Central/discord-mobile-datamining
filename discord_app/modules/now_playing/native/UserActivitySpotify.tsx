// === Module 11380: UserActivitySpotify ===

// Module 11380 (UserActivitySpotify)
import native from "native" /* 1188 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import react_nativeAll from "react-native" /* 1368 */;
import LinkingDefault from "Linking" /* 4565 */;
import AssetRegistryDefault from "AssetRegistry" /* 7824 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SpotifyConstants from "SpotifyConstants" /* 8016 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f107505 = () => {

};
const f107507 = () => {

};
const f107509 = () => {

};
const f107510 = (result) => {
  let closure_0 = result;
  let obj = closure_2_0(closure_2_3[7]);
  const spotifyMetadataFromActivity = obj.getSpotifyMetadataFromActivity(closure_1_0, closure_1_1);
  return spotifyMetadataFromActivity.then((album_id) => {
    let catchPromise;
    album_id = album_id.album_id;
    const ALBUM = constants.ALBUM;
    if (closure_0) {
      const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
      catchPromise = openURLResult.catch(f107505);
    } else {
      const obj = closure_2_1(closure_2_3[6]);
      catchPromise = obj.openURL(closure_2_7.WEB_OPEN(ALBUM, album_id, "mobile"));
    }
    return catchPromise;
  });
};
const f107511 = () => {

};
({ Linking: closure_4, View: hasOwnProperty } = react_native);
({ SPOTIFY_APP_PROTOCOL: metroRequire, SpotifyEndpoints: metroImportDefault, SpotifyResourceTypes: metroImportAll } = SpotifyConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
const PureComponent = react.PureComponent;
class SpotifyTrack extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyTrack = function handleOpenSpotifyTrack() {
      const sync_id = require.props.activity.sync_id;
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then((result) => {
        let catchPromise;
        const TRACK = constants.TRACK;
        const tmp2 = result;
        if (tmp2) {
          const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
          catchPromise = openURLResult.catch(f107505);
        } else {
          const obj = closure_2_1(closure_2_3[6]);
          catchPromise = obj.openURL(closure_2_7.WEB_OPEN(TRACK, sync_id, "mobile"));
        }
        return catchPromise;
      });
      let catchPromise = nextPromise.catch(f107507);
    };
    return applyArgumentsResult;
  }
  render() {
    const self = this;
    const props = this.props;
    const onPress = props.onPress;
    const obj = {
      onPress() {
        if (onPress != null) {
          tmp();
        }
        const result = self.handleOpenSpotifyTrack();
      },
      suppressHighlighting: true,
      children: props.text
    };
    return React4(native.LegacyText, obj);
  }
}
const prototype = SpotifyTrack.prototype;
function canOpenSpotifyUrl() {
  return React3.canOpenURL("" + metroRequire + ":");
}
function attributeInstall() {
  const obj = react_nativeAll;
  const Identifier = obj.getConstants().Identifier;
  const HTTP = HTTPUtils.HTTP;
  const obj2 = { url: metroImportDefault.INSTALL_ATTRIBUTION(Identifier), rejectWithError: true };
  const value = HTTP.get(obj2);
}
function openUrl(arg0, ALBUM, album_id) {
  let catchPromise;
  const tmp = arg0;
  if (tmp) {
    const openURLResult = React3.openURL(metroImportDefault.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
    catchPromise = openURLResult.catch(f107505);
  } else {
    const obj = LinkingDefault;
    catchPromise = obj.openURL(metroImportDefault.WEB_OPEN(ALBUM, album_id, "mobile"));
  }
  return catchPromise;
}
function openTrack(findActivityResult) {
  const sync_id = findActivityResult.sync_id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  const nextPromise = canOpenURLResult.then((result) => {
    let catchPromise;
    const TRACK = constants.TRACK;
    const tmp2 = result;
    if (tmp2) {
      const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
      catchPromise = openURLResult.catch(f107505);
    } else {
      const obj = closure_2_1(closure_2_3[6]);
      catchPromise = obj.openURL(closure_2_7.WEB_OPEN(TRACK, sync_id, "mobile"));
    }
    return catchPromise;
  });
  nextPromise.catch(f107507);
}
function openArtist(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  const nextPromise = canOpenURLResult.then((result) => {
    let closure_0 = result;
    let obj = closure_1_0(closure_1_3[7]);
    const spotifyMetadataFromActivity = obj.getSpotifyMetadataFromActivity(closure_0, closure_1);
    return spotifyMetadataFromActivity.then((result) => {
      let catchPromise;
      const ARTIST = constants.ARTIST;
      if (closure_0) {
        const openURLResult = closure_3_4.openURL(closure_3_7.PLAYER_OPEN(ARTIST, result.artist_ids[closure_2], true, "mobile"));
        catchPromise = openURLResult.catch(f107505);
      } else {
        const obj = closure_3_1(closure_3_3[6]);
        catchPromise = obj.openURL(closure_3_7.WEB_OPEN(ARTIST, tmp, "mobile"));
      }
      return catchPromise;
    });
  });
  nextPromise.catch(f107509);
}
function openAlbum(activity, id) {
  let closure_0 = activity;
  let closure_1 = id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  const nextPromise = canOpenURLResult.then(f107510);
  nextPromise.catch(f107511);
}
const PureComponent2 = react.PureComponent;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((activity) => {
  let tmp4;
  let tmp5;
  let tmp9;
  let tmp = activity;
  let obj = activity(576);
  const cResult = obj.c(11);
  activity = activity.activity;
  const style = activity.style;
  if (cResult[0] !== activity) {
    const fn = function n() {
      const sync_id = activity.sync_id;
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then((result) => {
        let catchPromise;
        const tmp = result;
        if (tmp) {
          const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(constants.TRACK, sync_id));
          catchPromise = openURLResult.catch(() => {

          });
        } else {
          const obj = closure_2_2(closure_2_3[4]);
          const Identifier = obj.getConstants().Identifier;
          const HTTP = activity(closure_2_3[5]).HTTP;
          const get = HTTP.get;
          const obj2 = { url: closure_2_7.INSTALL_ATTRIBUTION(Identifier), rejectWithError: true };
          const value = get(obj2);
          const obj3 = closure_2_1(closure_2_3[6]);
          catchPromise = obj3.openURL(closure_2_7.APP_STORE);
        }
        return catchPromise;
      });
      let catchPromise = nextPromise.catch(() => {

      });
    };
    cResult[0] = activity;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { source: AssetRegistryDefault };
    const Icon = tmp(5594).Button.Icon;
    const tmp8 = closure_9(Icon, obj2);
    cResult[2] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== activity.name) {
    const intl = tmp(1126).intl;
    let obj3 = { platform: activity.name };
    const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.LEgD7t, obj3);
    cResult[3] = activity.name;
    cResult[4] = formatToPlainStringResult;
    tmp9 = formatToPlainStringResult;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    let tmp11;
    if (cResult[6] === tmp9) {
      tmp11 = cResult[7];
    }
    if (cResult[8] === style) {
      let tmp13;
      if (cResult[9] === tmp11) {
        tmp13 = cResult[10];
      }
      return tmp13;
    }
    const obj4 = { style, children: tmp11 };
    const tmp16 = closure_9(closure_5, obj4);
    cResult[8] = style;
    cResult[9] = tmp11;
    cResult[10] = tmp16;
    tmp13 = tmp16;
  }
  const tmp12 = closure_9(tmp(5594).Button, { icon: tmp5, text: tmp9, size: "sm", onPress: tmp4, grow: true });
  cResult[5] = tmp4;
  cResult[6] = tmp9;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : ((activity) => {
  let Button;
  let Icon;
  let intl;
  let obj2;
  let obj3;
  let obj4;
  activity = activity.activity;
  let obj = { style: activity.style, children: closure_9(Button, obj2) };
  obj2 = {
    icon: closure_9(Icon, obj3),
    text: intl.formatToPlainString(activity(1126).t.LEgD7t, obj4),
    size: "sm",
    onPress() {
      const sync_id = activity.sync_id;
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then((result) => {
        let catchPromise;
        const tmp = result;
        if (tmp) {
          const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(constants.TRACK, sync_id));
          catchPromise = openURLResult.catch(() => {

          });
        } else {
          const obj = closure_2_2(closure_2_3[4]);
          const Identifier = obj.getConstants().Identifier;
          const HTTP = activity(closure_2_3[5]).HTTP;
          const get = HTTP.get;
          const obj2 = { url: closure_2_7.INSTALL_ATTRIBUTION(Identifier), rejectWithError: true };
          const value = get(obj2);
          const obj3 = closure_2_1(closure_2_3[6]);
          catchPromise = obj3.openURL(closure_2_7.APP_STORE);
        }
        return catchPromise;
      });
      let catchPromise = nextPromise.catch(() => {

      });
    },
    grow: true
  };
  Button = activity(5594).Button;
  obj3 = { source: AssetRegistryDefault };
  Icon = activity(5594).Button.Icon;
  intl = activity(1126).intl;
  obj4 = { platform: activity.name };
  return closure_9(closure_5, obj);
});
class SpotifyArtists extends PureComponent2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyArtist = function handleOpenSpotifyArtist(arg0) {
      let closure_129_0;
      let closure_129_1;
      ({ activity: closure_129_0, userId: closure_129_1 } = require.props);
      let closure_2 = arg0;
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then((result) => {
        let closure_0 = result;
        let obj = closure_1_0(closure_1_3[7]);
        const spotifyMetadataFromActivity = obj.getSpotifyMetadataFromActivity(closure_0, closure_1);
        return spotifyMetadataFromActivity.then((result) => {
          let catchPromise;
          const ARTIST = constants.ARTIST;
          if (closure_0) {
            const openURLResult = closure_3_4.openURL(closure_3_7.PLAYER_OPEN(ARTIST, result.artist_ids[closure_2], true, "mobile"));
            catchPromise = openURLResult.catch(f107505);
          } else {
            const obj = closure_3_1(closure_3_3[6]);
            catchPromise = obj.openURL(closure_3_7.WEB_OPEN(ARTIST, tmp, "mobile"));
          }
          return catchPromise;
        });
      });
      let catchPromise = nextPromise.catch(f107509);
    };
    return applyArgumentsResult;
  }
  renderLink(children, index, arg2) {
    const self = this;
    let closure_1 = index;
    const onPress = this.props.onPress;
    const LegacyText = native.LegacyText;
    const obj = {
      onPress() {
        if (onPress != null) {
          tmp();
        }
        const result = self.handleOpenSpotifyArtist(closure_1);
      },
      suppressHighlighting: true,
      children
    };
    children = [React4(native.LegacyText, obj), ];
    let str = ", ";
    const tmp2 = arg2;
    if (tmp2) {
      str = "";
    }
    children[1] = str;
    return authStore(LegacyText, { children }, index);
  }
  render() {
    let self = this;
    const str = this.props.artists;
    const parts = str.split("; ");
    let closure_0 = parts.length - 1;
    let obj = { children: parts.map((item, index) => self.renderLink(item, index, index === closure_0)) };
    const LegacyText = native.LegacyText;
    return React4(LegacyText, obj);
  }
}
const prototype2 = SpotifyArtists.prototype;
const PureComponent3 = react.PureComponent;
class SpotifyAlbum extends PureComponent3 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyAlbum = function handleOpenSpotifyAlbum() {
      let closure_129_0;
      let closure_129_1;
      ({ activity: closure_129_0, userId: closure_129_1 } = require.props);
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then(f107510);
      let catchPromise = nextPromise.catch(f107511);
    };
    return applyArgumentsResult;
  }
  render() {
    const obj = { onPress: this.handleOpenSpotifyAlbum, suppressHighlighting: true, children: this.props.text };
    return React4(native.LegacyText, obj);
  }
}
const prototype3 = SpotifyAlbum.prototype;
let result = size.fileFinishedImporting("modules/now_playing/native/UserActivitySpotify.tsx");

export { canOpenSpotifyUrl };
export { attributeInstall };
export { openUrl };
export { openTrack };
export { openArtist };
export { openAlbum };
export const SpotifyPlayButton = tmp6;
export { SpotifyTrack };
export { SpotifyArtists };
export { SpotifyAlbum };