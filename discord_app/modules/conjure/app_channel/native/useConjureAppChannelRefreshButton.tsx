// === Module 13113: useConjureAppChannelRefreshButton ===

// Module 13113 (useConjureAppChannelRefreshButton)
import _modDef3753 from "module_3753" /* 3753 */;
import restartConjureAppFramesDefault from "restartConjureAppFrames" /* 9010 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/conjure/app_channel/native/useConjureAppChannelRefreshButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((application_id) => {
  _require = application_id;
  let RetryIcon = dependencyMap;
  const cResult = require("c").c(5);
  const obj = require("c");
  const isConjureChannelCandidate = require("ConjureUtils").useIsConjureChannelCandidate(application_id, "ChannelActions");
  require("AppChannelChat");
  let tmp6 = null;
  if (isConjureChannelCandidate) {
    tmp6 = null;
    if (!tmp5) {
      if (cResult[0] !== application_id.application_id) {
        const fn = function l() {
          application_id = application_id.application_id;
          if (application_id == null) {
            application_id = null;
          }
          return restartConjureAppFramesDefault(application_id);
        };
        cResult[0] = application_id.application_id;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3753["p4B/7M"]);
        cResult[2] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp7) {
        const obj3 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
        RetryIcon = tmp(11377).RetryIcon;
        obj3.IconComponent = RetryIcon;
        obj3.onPress = tmp7;
        obj3.accessibilityLabel = tmp9;
        cResult[3] = tmp7;
        cResult[4] = obj3;
      }
    }
  }
  return tmp6;
}) : ((arg0) => {
  _require = arg0;
  const isConjureChannelCandidate = require("ConjureUtils").useIsConjureChannelCandidate(arg0, "ChannelActions");
  require("AppChannelChat");
  let tmp6 = null;
  if (isConjureChannelCandidate) {
    tmp6 = null;
    if (!tmp5) {
      const obj2 = {
        source: null,
        IconComponent: tmp(11377).RetryIcon,
        onPress() {
              application_id = application_id.application_id;
              if (application_id == null) {
                application_id = null;
              }
              return restartConjureAppFramesDefault(application_id);
            },
        accessibilityLabel: null
      };
      const intl = tmp(1126).intl;
      obj2.accessibilityLabel = intl.string(_modDef3753["p4B/7M"]);
      tmp6 = obj2;
    }
  }
  return tmp6;
});