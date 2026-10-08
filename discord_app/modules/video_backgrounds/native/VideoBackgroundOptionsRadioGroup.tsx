// discord_app/modules/video_backgrounds/native/VideoBackgroundOptionsRadioGroup.tsx
import applyBackgroundOption from "../applyBackgroundOption.tsx";
import VideoBackgroundActionCreators from "../VideoBackgroundActionCreators.tsx";
import VideoBackgroundOptions from "VideoBackgroundOptions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_backgrounds/native/VideoBackgroundOptionsRadioGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VideoBackgroundOptionsRadioGroup(title) {
      const cResult = analyticsContext(576).c(13);
      title = title.title;
      let obj = analyticsContext(576);
      analyticsContext = analyticsContext(9471).useAnalyticsContext();
      let obj2 = analyticsContext(9471);
      const lastUsedVideoBackgroundOption = analyticsContext(5256).useLastUsedVideoBackgroundOption();
      let obj3 = analyticsContext(5256);
      const videoBackgroundRadioOptions = analyticsContext(10883).useVideoBackgroundRadioOptions();
      if (cResult[0] !== analyticsContext.location) {
        function handleChange(arg0) {
          const result = VideoBackgroundOptions.fromVideoBackgroundRadioValue(arg0);
          const result1 = applyBackgroundOption.applyBackgroundOptionLive(result, {
            location: analyticsContext.location,
          });
          result1.catch(NOOP);
          const obj3 = { location: analyticsContext.location };
          const result2 = VideoBackgroundActionCreators.saveLastUsedBackgroundOption(result);
          result2.catch(NOOP);
        }
        cResult[0] = analyticsContext.location;
        cResult[1] = handleChange;
        let tmp6 = handleChange;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== lastUsedVideoBackgroundOption) {
        let result = tmp(10883).toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
        cResult[2] = lastUsedVideoBackgroundOption;
        cResult[3] = result;
        let tmp7 = result;
        const tmpResult = tmp(10883);
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.lZTUPs);
        cResult[4] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== videoBackgroundRadioOptions) {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor(arg0) {
              obj = { value: title.value, label: title.label, icon: title.icon };
              return closure_1_3(closure_0(closure_1_1[11]).TableRadioRow, obj, title.value);
            }
          }
          cResult[7] = R;
        } else {
          class R {
            constructor(arg0) {
              obj = { value: title.value, label: title.label, icon: title.icon };
              return closure_1_3(closure_0(closure_1_1[11]).TableRadioRow, obj, title.value);
            }
          }
        }
        const mapped = videoBackgroundRadioOptions.map(R);
        cResult[5] = videoBackgroundRadioOptions;
        cResult[6] = mapped;
      } else {
        class R {
          constructor(arg0) {
            obj = { value: title.value, label: title.label, icon: title.icon };
            return closure_1_3(closure_0(closure_1_1[11]).TableRadioRow, obj, title.value);
          }
        }
        if (cResult[8] === tmp6) {
          class R {
            constructor(arg0) {
              obj = { value: title.value, label: title.label, icon: title.icon };
              return closure_1_3(closure_0(closure_1_1[11]).TableRadioRow, obj, title.value);
            }
          }
        }
        const obj5 = { hasIcons: true, title, value: tmp7, onChange: tmp6, accessibilityLabel: tmp9, children: tmp11 };
        const tmp17 = jsx(tmp(6265).TableRadioGroup, {
          hasIcons: true,
          title,
          value: tmp7,
          onChange: tmp6,
          accessibilityLabel: tmp9,
          children: tmp11,
        });
        cResult[8] = tmp6;
        cResult[9] = tmp7;
        cResult[10] = tmp11;
        cResult[11] = title;
        cResult[12] = tmp17;
      }
      const obj4 = analyticsContext(10883);
    }
  : function VideoBackgroundOptionsRadioGroup(title) {
      _require = undefined;
      _require = require("analytics").useAnalyticsContext();
      let obj = require("analytics");
      const lastUsedVideoBackgroundOption = require("LastUsedVideoBackgroundOption").useLastUsedVideoBackgroundOption();
      let obj2 = require("LastUsedVideoBackgroundOption");
      const videoBackgroundRadioOptions = require("VideoBackgroundOptions").useVideoBackgroundRadioOptions();
      const obj4 = {
        hasIcons: true,
        title: title.title,
        value: null,
        onChange: null,
        accessibilityLabel: null,
        children: null,
      };
      let obj3 = require("VideoBackgroundOptions");
      obj4.value = require("VideoBackgroundOptions").toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
      obj4.onChange = function handleChange(arg0) {
        const result = VideoBackgroundOptions.fromVideoBackgroundRadioValue(arg0);
        const result1 = applyBackgroundOption.applyBackgroundOptionLive(result, { location: closure_0.location });
        result1.catch(NOOP);
        const obj3 = { location: closure_0.location };
        const result2 = VideoBackgroundActionCreators.saveLastUsedBackgroundOption(result);
        result2.catch(NOOP);
      };
      const intl = require("util").intl;
      obj4.accessibilityLabel = intl.string(require("util").t.lZTUPs);
      obj4.children = videoBackgroundRadioOptions.map((value) =>
        jsx(
          closure_0(dependencyMap[11]).TableRadioRow,
          { value: value.value, label: value.label, icon: value.icon },
          value.value,
        ),
      );
      return jsx(require("TableRadioGroup").TableRadioGroup, {
        hasIcons: true,
        title: title.title,
        value: null,
        onChange: null,
        accessibilityLabel: null,
        children: null,
      });
    };
