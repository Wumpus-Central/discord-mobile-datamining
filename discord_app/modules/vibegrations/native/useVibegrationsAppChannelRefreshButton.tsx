// discord_app/modules/vibegrations/native/useVibegrationsAppChannelRefreshButton.tsx
import _modDef3723 from "../intl/VibegrationsUntranslated.messages.js";
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/vibegrations/native/useVibegrationsAppChannelRefreshButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (application_id) => {
      _require = application_id;
      let RetryIcon = dependencyMap;
      const cResult = require("c").c(5);
      const obj = require("c");
      const isVibegrationsChannelCandidate = require("VibegrationsUtils").useIsVibegrationsChannelCandidate(
        application_id,
        "ChannelActions",
      );
      require("AppChannelChat");
      let tmp6 = null;
      if (isVibegrationsChannelCandidate) {
        tmp6 = null;
        if (!tmp5) {
          if (cResult[0] !== application_id.application_id) {
            const fn = function t() {
              application_id = application_id.application_id;
              if (application_id == null) {
                application_id = null;
              }
              return restartVibegrationsAppFramesDefault(application_id);
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
            const stringResult = intl.string(_modDef3723.xKexN1);
            cResult[2] = stringResult;
            let tmp9 = stringResult;
          } else {
            tmp9 = cResult[2];
          }
          if (cResult[3] !== tmp7) {
            const obj3 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
            RetryIcon = tmp(11364).RetryIcon;
            obj3.IconComponent = RetryIcon;
            obj3.onPress = tmp7;
            obj3.accessibilityLabel = tmp9;
            cResult[3] = tmp7;
            cResult[4] = obj3;
          }
        }
      }
      return tmp6;
    }
  : (arg0) => {
      _require = arg0;
      const isVibegrationsChannelCandidate = require("VibegrationsUtils").useIsVibegrationsChannelCandidate(
        arg0,
        "ChannelActions",
      );
      require("AppChannelChat");
      let tmp6 = null;
      if (isVibegrationsChannelCandidate) {
        tmp6 = null;
        if (!tmp5) {
          const obj2 = {
            source: null,
            IconComponent: tmp(11364).RetryIcon,
            onPress() {
              application_id = application_id.application_id;
              if (application_id == null) {
                application_id = null;
              }
              return restartVibegrationsAppFramesDefault(application_id);
            },
            accessibilityLabel: null,
          };
          const intl = tmp(1126).intl;
          obj2.accessibilityLabel = intl.string(_modDef3723.xKexN1);
          tmp6 = obj2;
        }
      }
      return tmp6;
    };
