// _runtime/15378_PLAYER_FUNCTIONS.js
import PLAY_MODE from "15374_PLAY_MODE.js";
import _defineProperty2 from "15379__defineProperty.js";
import 07953__ from "metro/07953__.js";

const _defineProperty = module_7953(_defineProperty2);
let obj = {
  muteVideo: "player.mute(); true;",
  unMuteVideo: "player.unMute(); true;",
  playVideo: "player.playVideo(); true;",
  pauseVideo: "player.pauseVideo(); true;",
  getVideoUrlScript: "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getVideoUrl', data: player.getVideoUrl()}));\ntrue;\n  ",
  durationScript: "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getDuration', data: player.getDuration()}));\ntrue;\n",
  currentTimeScript: "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getCurrentTime', data: player.getCurrentTime()}));\ntrue;\n",
  isMutedScript: "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'isMuted', data: player.isMuted()}));\ntrue;\n",
  getVolumeScript: "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getVolume', data: player.getVolume()}));\ntrue;\n",
  getPlaybackRateScript: "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getPlaybackRate', data: player.getPlaybackRate()}));\ntrue;\n",
  getAvailablePlaybackRatesScript: "\nwindow.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getAvailablePlaybackRates', data: player.getAvailablePlaybackRates()}));\ntrue;\n",
  setVolume(arg0) {
    return "player.setVolume(" + arg0 + "); true;";
  },
  seekToScript(arg0, arg1) {
    return "player.seekTo(" + arg0 + ", " + arg1 + "); true;";
  },
  setPlaybackRate(arg0) {
    return "player.setPlaybackRate(" + arg0 + "); true;";
  },
  loadPlaylist(playList, arg1, play) {
    let str = "cuePlaylist";
    const tmp = arg1 || 0;
    if (play) {
      str = "loadPlaylist";
    }
    let str2 = "undefined";
    let str3 = "undefined";
    if (typeof playList === "string") {
      str3 = `${"\"" + playList}"`;
    }
    let str4 = str2;
    if (typeof playList === "string") {
      str4 = "\"undefined\"";
    }
    if (Array.isArray(playList)) {
      str2 = `${"\"" + playList.join(",")}"`;
    }
    return "player." + str + "({listType: " + str4 + ", list: " + str3 + ", playlist: " + str2 + ", index: " + tmp + "}); true;";
  },
  loadVideoById(videoId, play) {
    let str = "cueVideoById";
    const tmp = play;
    if (tmp) {
      str = "loadVideoById";
    }
    const combined = "player." + str + "({videoId: ";
    return combined + JSON.stringify(videoId) + "}); true;";
  }
};
let obj2 = {};
_defineProperty.default(obj2, PLAY_MODE.PLAY_MODE, obj.playVideo);
_defineProperty.default(obj2, PLAY_MODE.PAUSE_MODE, obj.pauseVideo);
const obj3 = {};
_defineProperty.default(obj3, PLAY_MODE.MUTE_MODE, obj.muteVideo);
_defineProperty.default(obj3, PLAY_MODE.UNMUTE_MODE, obj.unMuteVideo);

export const PLAYER_FUNCTIONS = obj;
export const playMode = obj2;
export const soundMode = obj3;
export const MAIN_SCRIPT = function MAIN_SCRIPT(current, current2, current3, allowWebViewZoom, num) {
  let cc_lang_pref;
  let color;
  let controls;
  let end;
  let iv_load_policy;
  let joined;
  let loop;
  let playerLang;
  let start;
  ({ end, color, start, playerLang, loop } = current3);
  let tmp = undefined !== loop;
  const rel = current3.rel;
  if (tmp) {
    tmp = loop;
  }
  ({ cc_lang_pref, iv_load_policy, controls } = current3);
  let tmp2 = undefined === controls;
  const modestbranding = current3.modestbranding;
  if (!tmp2) {
    tmp2 = controls;
  }
  const preventFullScreen = current3.preventFullScreen;
  num = 0;
  const showClosedCaptions = current3.showClosedCaptions;
  if (rel) {
    num = 1;
  }
  let num2 = 0;
  if (tmp) {
    num2 = 1;
  }
  let num3 = 0;
  if (tmp2) {
    num3 = 1;
  }
  if (!cc_lang_pref) {
    cc_lang_pref = "";
  }
  let num4 = 0;
  if (modestbranding) {
    num4 = 1;
  }
  let num5 = 1;
  let num6 = 1;
  if (undefined !== preventFullScreen) {
    num6 = num5;
    if (preventFullScreen) {
      num6 = 0;
    }
  }
  let num7 = 0;
  if (showClosedCaptions) {
    num7 = num5;
  }
  if (typeof num === "number") {
    num5 = num;
  }
  let tmp4;
  if (typeof current2 === "string") {
    tmp4 = current2;
  }
  let str;
  if (typeof current2 === "string") {
    str = "playlist";
  }
  const text = `initial-scale=${num5}`;
  let text1 = text;
  if (!allowWebViewZoom) {
    text1 = `initial-scale=${num5}${", maximum-scale=" + num5}`;
  }
  const obj = { end, list: tmp4, start, color, rel_s: num, loop_s: num2, listType: str, playlist: joined, videoId_s: current || "", controls_s: num3, playerLang, iv_load_policy, contentScale_s: num5, cc_lang_pref_s: cc_lang_pref, allowWebViewZoom, modestbranding_s: num4, preventFullScreen_s: num6, showClosedCaptions_s: num7 };
  joined = undefined;
  if (Array.isArray(current2)) {
    joined = current2.join(",");
  }
  const sum = "\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, " + text1 + "\"\n    >\n    <style>\n      body {\n        margin: 0;\n      }\n      .container {\n        position: relative;\n        width: 100%;\n        height: 0;\n        padding-bottom: 56.25%;\n      }\n      .video {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"container\">\n      <div class=\"video\" id=\"player\" />\n    </div>\n\n    <script>\n      var tag = document.createElement('script');\n\n      tag.src = \"https://www.youtube.com/iframe_api\";\n      var firstScriptTag = document.getElementsByTagName('script')[0];\n      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n\n      var player;\n      function onYouTubeIframeAPIReady() {\n        player = new YT.Player('player', {\n          width: '1000',\n          height: '1000',\n          videoId: '" + tmp3;
  let str4 = "";
  let str5 = "";
  if (tmp4) {
    str5 = `${"list: '" + tmp4}',`;
  }
  let text2 = str4;
  if (str) {
    text2 = `${"listType: '" + tmp4}',`;
  }
  if (current2) {
    str4 = `${"playlist: '" + current2}',`;
  }
  const obj2 = {
    htmlString: `${tmp8 + "',\n          playerVars: {\n            " + str5 + "\n            " + tmp9 + "\n            " + str4 + "\n\n            end: "}${end},
                rel: ${num},
                playsinline: 1,
                loop: ${num2},
                color: ${color},
                start: ${start},
                hl: ${playerLang},
                controls: ${num3},
                fs: ${num6},
                cc_lang_pref: '${cc_lang_pref}',
                iv_load_policy: ${iv_load_policy},
                modestbranding: ${num4},
                cc_load_policy: ${num7},
              },
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError,
                'onPlaybackQualityChange': onPlaybackQualityChange,
                'onPlaybackRateChange': onPlaybackRateChange,
              }
            });
          }

          function onPlayerError(event) {
            window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerError', data: event.data}))
          }

          function onPlaybackRateChange(event) {
            window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playbackRateChange', data: event.data}))
          }

          function onPlaybackQualityChange(event) {
            window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerQualityChange', data: event.data}))
          }

          function onPlayerReady(event) {
            window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerReady'}))
          }

          var done = false;
          function onPlayerStateChange(event) {
            window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerStateChange', data: event.data}))
          }

          var isFullScreen = false;
          function onFullScreenChange() {
            isFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'fullScreenChange', data: Boolean(isFullScreen)}));
          }

          document.addEventListener('fullscreenchange', onFullScreenChange)
          document.addEventListener('mozfullscreenchange', onFullScreenChange)
          document.addEventListener('msfullscreenchange', onFullScreenChange)
          document.addEventListener('webkitfullscreenchange', onFullScreenChange)
        </script>
      </body>
    </html>
    `,
    urlEncodedJSON: encodeURI(JSON.stringify(obj))
  };
  return obj2;
};