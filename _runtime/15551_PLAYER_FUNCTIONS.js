// === Module 15551: PLAYER_FUNCTIONS ===

// Module 15551 (PLAYER_FUNCTIONS)
import PLAY_MODE from "PLAY_MODE" /* 15547 */;
import _defineProperty2 from "_defineProperty" /* 15552 */;
import module_8279 from "module_8279" /* 8279 */;

const _defineProperty = module_8279(_defineProperty2);
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
    let num = arg1;
    if (!arg1) {
      num = 0;
    }
    let str = "cuePlaylist";
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
    return "player." + str + "({listType: " + str4 + ", list: " + str3 + ", playlist: " + str2 + ", index: " + num + "}); true;";
  },
  loadVideoById(videoId, play) {
    let str = "cueVideoById";
    if (play) {
      str = "loadVideoById";
    }
    const combined = "player." + str + "({videoId: ";
    return combined + JSON.stringify(videoId) + "}); true;";
  }
};
obj = {};
_defineProperty.default(obj, PLAY_MODE.PLAY_MODE, obj.playVideo);
_defineProperty.default(obj, PLAY_MODE.PAUSE_MODE, obj.pauseVideo);
const obj1 = {};
_defineProperty.default(obj1, PLAY_MODE.MUTE_MODE, obj.muteVideo);
_defineProperty.default(obj1, PLAY_MODE.UNMUTE_MODE, obj.unMuteVideo);

export const PLAYER_FUNCTIONS = obj;
export const playMode = obj;
export const soundMode = obj1;
export const MAIN_SCRIPT = function MAIN_SCRIPT(current, current2, current3, allowWebViewZoom, num) {
  ({ end, color, start, playerLang, loop } = current3);
  let tmp = undefined !== loop;
  if (tmp) {
    tmp = loop;
  }
  ({ cc_lang_pref, iv_load_policy, controls } = current3);
  let tmp2 = undefined === controls;
  if (!tmp2) {
    tmp2 = controls;
  }
  const preventFullScreen = current3.preventFullScreen;
  num = 0;
  if (current3.rel) {
    num = 1;
  }
  let num2 = 0;
  if (tmp) {
    num2 = 1;
  }
  let str = current;
  if (!current) {
    str = "";
  }
  let num3 = 0;
  if (tmp2) {
    num3 = 1;
  }
  if (!cc_lang_pref) {
    cc_lang_pref = "";
  }
  let num4 = 0;
  if (current3.modestbranding) {
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
  if (current3.showClosedCaptions) {
    num7 = num5;
  }
  if (typeof num === "number") {
    num5 = num;
  }
  let tmp3;
  if (typeof current2 === "string") {
    tmp3 = current2;
  }
  let str2;
  if (typeof current2 === "string") {
    str2 = "playlist";
  }
  const text = `initial-scale=${num5}`;
  let text1 = text;
  if (!allowWebViewZoom) {
    text1 = `initial-scale=${num5}${", maximum-scale=" + num5}`;
  }
  let obj = { end, list: tmp3, start, color, rel_s: num, loop_s: num2, listType: str2, playlist: null, videoId_s: null, controls_s: null, playerLang: null, iv_load_policy: null, contentScale_s: null, cc_lang_pref_s: null, allowWebViewZoom: null, modestbranding_s: null, preventFullScreen_s: null, showClosedCaptions_s: null };
  let joined;
  if (Array.isArray(current2)) {
    joined = current2.join(",");
  }
  obj.playlist = joined;
  obj.videoId_s = str;
  obj.controls_s = num3;
  obj.playerLang = playerLang;
  obj.iv_load_policy = iv_load_policy;
  obj.contentScale_s = num5;
  obj.cc_lang_pref_s = cc_lang_pref;
  obj.allowWebViewZoom = allowWebViewZoom;
  obj.modestbranding_s = num4;
  obj.preventFullScreen_s = num6;
  obj.showClosedCaptions_s = num7;
  const sum = "\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, " + text1 + "\"\n    >\n    <style>\n      body {\n        margin: 0;\n      }\n      .container {\n        position: relative;\n        width: 100%;\n        height: 0;\n        padding-bottom: 56.25%;\n      }\n      .video {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"container\">\n      <div class=\"video\" id=\"player\" />\n    </div>\n\n    <script>\n      var tag = document.createElement('script');\n\n      tag.src = \"https://www.youtube.com/iframe_api\";\n      var firstScriptTag = document.getElementsByTagName('script')[0];\n      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n\n      var player;\n      function onYouTubeIframeAPIReady() {\n        player = new YT.Player('player', {\n          width: '1000',\n          height: '1000',\n          videoId: '" + str;
  let str5 = "";
  let str6 = "";
  if (tmp3) {
    str6 = `${"list: '" + tmp3}',`;
  }
  let text2 = str5;
  if (str2) {
    text2 = `${"listType: '" + tmp3}',`;
  }
  if (current2) {
    str5 = `${"playlist: '" + current2}',`;
  }
  obj = {
    htmlString: `${tmp7 + "',\n          playerVars: {\n            " + str6 + "\n            " + tmp8 + "\n            " + str5 + "\n\n            end: "}${end},
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
  return obj;
};