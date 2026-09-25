// === Module 9445: VideoBackgroundOptionsRadioGroup ===

// Module 9445 (VideoBackgroundOptionsRadioGroup)
import applyBackgroundOption from "applyBackgroundOption" /* 9099 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 9101 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 9446 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const NOOP = fn(1074).NOOP;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_backgrounds/native/VideoBackgroundOptionsRadioGroup.tsx");

export default function VideoBackgroundOptionsRadioGroup(title) {
  _require = undefined;
  _require = require("analytics").useAnalyticsContext();
  let obj = require("analytics");
  const lastUsedVideoBackgroundOption = require("LastUsedVideoBackgroundOption").useLastUsedVideoBackgroundOption();
  let obj2 = require("LastUsedVideoBackgroundOption");
  const videoBackgroundRadioOptions = require("VideoBackgroundOptions").useVideoBackgroundRadioOptions();
  const obj4 = { hasIcons: true, title: title.title, value: null, onChange: null, accessibilityLabel: null, children: null };
  let obj3 = require("VideoBackgroundOptions");
  obj4.value = require("VideoBackgroundOptions").toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
  obj4.onChange = function onChange(arg0) {
    const result = VideoBackgroundOptions.fromVideoBackgroundRadioValue(arg0);
    const result1 = applyBackgroundOption.applyBackgroundOptionLive(result, { location: closure_0.location });
    result1.catch(NOOP);
    const obj3 = { location: closure_0.location };
    const result2 = VideoBackgroundActionCreators.saveLastUsedBackgroundOption(result);
    result2.catch(NOOP);
  };
  const intl = require("util").intl;
  obj4.accessibilityLabel = intl.string(require("util").t.lZTUPs);
  obj4.children = videoBackgroundRadioOptions.map((value) => jsx(closure_0(dependencyMap[10]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value));
  return jsx(require("TableRadioGroup").TableRadioGroup, { hasIcons: true, title: title.title, value: null, onChange: null, accessibilityLabel: null, children: null });
};