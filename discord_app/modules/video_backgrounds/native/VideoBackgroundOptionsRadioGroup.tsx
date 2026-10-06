// === Module 9693: VideoBackgroundOptionsRadioGroup ===

// Module 9693 (VideoBackgroundOptionsRadioGroup)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import applyBackgroundOption from "applyBackgroundOption" /* 8085 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 8087 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 9694 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, title;

const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  let analyticsContext;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = analyticsContext(576);
  const cResult = obj.c(13);
  title = title.title;
  let obj2 = analyticsContext(9137);
  analyticsContext = obj2.useAnalyticsContext();
  let obj3 = analyticsContext(8089);
  const lastUsedVideoBackgroundOption = obj3.useLastUsedVideoBackgroundOption();
  let obj4 = analyticsContext(9694);
  const videoBackgroundRadioOptions = obj4.useVideoBackgroundRadioOptions();
  if (cResult[0] !== analyticsContext.location) {
    const fn = function l(arg0) {
      const obj = VideoBackgroundOptions;
      const result = obj.fromVideoBackgroundRadioValue(arg0);
      const obj2 = applyBackgroundOption;
      const obj3 = { location: analyticsContext.location };
      const result1 = obj2.applyBackgroundOptionLive(result, obj3);
      result1.catch(NOOP);
      const obj4 = VideoBackgroundActionCreators;
      const result2 = obj4.saveLastUsedBackgroundOption(result);
      result2.catch(NOOP);
    };
    cResult[0] = analyticsContext.location;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== lastUsedVideoBackgroundOption) {
    const tmpResult = analyticsContext(9694);
    let result = tmpResult.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
    cResult[2] = lastUsedVideoBackgroundOption;
    cResult[3] = result;
    tmp7 = result;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(analyticsContext(1126).t.lZTUPs);
    cResult[4] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== videoBackgroundRadioOptions) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function h(value) {
        return jsx(analyticsContext(dependencyMap[11]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value);
      };
      cResult[7] = fn2;
      tmp12 = fn2;
    } else {
      tmp12 = cResult[7];
    }
    const mapped = videoBackgroundRadioOptions.map(tmp12);
    cResult[5] = videoBackgroundRadioOptions;
    cResult[6] = mapped;
    tmp11 = mapped;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[8] === tmp6) {
    if (cResult[9] === tmp7) {
      if (cResult[10] === tmp11) {
        let tmp14;
        if (cResult[11] === title) {
          tmp14 = cResult[12];
        }
        return tmp14;
      }
    }
  }
  const tmp15 = jsx(analyticsContext(6079).TableRadioGroup, { hasIcons: true, title, value: tmp7, onChange: tmp6, accessibilityLabel: tmp9, children: tmp11 });
  cResult[8] = tmp6;
  cResult[9] = tmp7;
  cResult[10] = tmp11;
  cResult[11] = title;
  cResult[12] = tmp15;
  tmp14 = tmp15;
}) : ((title) => {
  let closure_0;
  _require = undefined;
  title = title.title;
  let obj = require("analytics");
  _require = obj.useAnalyticsContext();
  let obj2 = require("LastUsedVideoBackgroundOption");
  const lastUsedVideoBackgroundOption = obj2.useLastUsedVideoBackgroundOption();
  let obj3 = require("VideoBackgroundOptions");
  const videoBackgroundRadioOptions = obj3.useVideoBackgroundRadioOptions();
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  const obj5 = require("VideoBackgroundOptions");
  const intl = require("intl").intl;
  return <TableRadioGroup hasIcons title={title} value={obj5.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption)} onChange={function onChange(arg0) {
    const obj = VideoBackgroundOptions;
    const result = obj.fromVideoBackgroundRadioValue(arg0);
    const obj2 = applyBackgroundOption;
    const obj3 = { location: closure_0.location };
    const result1 = obj2.applyBackgroundOptionLive(result, obj3);
    result1.catch(NOOP);
    const obj4 = VideoBackgroundActionCreators;
    const result2 = obj4.saveLastUsedBackgroundOption(result);
    result2.catch(NOOP);
  }} accessibilityLabel={intl.string(require("intl").t.lZTUPs)}>{videoBackgroundRadioOptions.map((value) => jsx(closure_0(dependencyMap[11]).TableRadioRow, { value: value.value, label: value.label, icon: value.icon }, value.value))}</TableRadioGroup>;
});
let result = size.fileFinishedImporting("modules/video_backgrounds/native/VideoBackgroundOptionsRadioGroup.tsx");

export default tmp3;