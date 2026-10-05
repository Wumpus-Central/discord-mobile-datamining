// discord_app/modules/go_live/useFetchStreamPreview.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import StreamActionCreators from "../../actions/StreamActionCreators.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import ApplicationStreamPreviewStore from "../../stores/ApplicationStreamPreviewStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_4, dependencyMap;

let react = react_mod;
const BasicPermissions = Constants.BasicPermissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_0;
      let closure_1;
      let first;
      let stateFromStores;
      let tmp11;
      let tmp13;
      let tmp7;
      let tmp9;
      _require = arg0;
      dependencyMap = arg1;
      let closure_2 = arg2;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(27);
      let closure_3 = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        const fn = function w() {
          return ChannelStore.getChannel(closure_1);
        };
        cResult[1] = arg1;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const fn2 = function _() {
          const canBasicChannelResult =
            null != stateFromStores && PermissionStore.canBasicChannel(BasicPermissions.CONNECT, tmp);
          return canBasicChannelResult;
        };
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult3 = tmp(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SelectedChannelStore];
        cResult[6] = items2;
        tmp13 = items2;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] !== arg1) {
        class C {
          constructor() {
            return SelectedChannelStore.getVoiceChannelId() === closure_1;
          }
        }
        cResult[7] = arg1;
        cResult[8] = C;
      } else {
        class C {
          constructor() {
            return SelectedChannelStore.getVoiceChannelId() === closure_1;
          }
        }
      }
      const tmpResult4 = tmp(504);
      const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, C);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return SelectedChannelStore.getVoiceChannelId() === closure_1;
          }
        }
        const items3 = [closure_3];
        cResult[9] = items3;
      } else {
        class C {
          constructor() {
            return SelectedChannelStore.getVoiceChannelId() === closure_1;
          }
        }
      }
      if (cResult[10] === arg1) {
        class C {
          constructor() {
            return SelectedChannelStore.getVoiceChannelId() === closure_1;
          }
        }
      }
      const fn3 = function y() {
        let previewURL;
        let isPreviewLoading = !closure_3;
        let shouldFetchPreviewResult = isPreviewLoading;
        if (!closure_3) {
          shouldFetchPreviewResult = ApplicationStreamPreviewStore.shouldFetchPreview(closure_0, closure_1, closure_2);
        }
        const obj = {
          shouldFetchPreview: shouldFetchPreviewResult,
          previewUrl: previewURL,
          isLoading: isPreviewLoading,
        };
        previewURL = null;
        if (!closure_3) {
          previewURL = ApplicationStreamPreviewStore.getPreviewURL(closure_0, closure_1, closure_2);
        }
        if (!closure_3) {
          isPreviewLoading = ApplicationStreamPreviewStore.getIsPreviewLoading(closure_0, closure_1, closure_2);
        }
        return obj;
      };
      cResult[10] = arg1;
      cResult[11] = arg0;
      cResult[12] = null == arg1 || null == arg2;
      cResult[13] = arg2;
      cResult[14] = fn3;
    }
  : (arg0, arg1, arg2) => {
      let closure_0;
      let closure_1;
      let closure_2;
      let isLoading;
      let previewUrl;
      let shouldFetchPreview;
      _require = arg0;
      dependencyMap = arg1;
      react = arg2;
      let tmp = null == arg1 || null == arg2;
      let closure_3 = tmp;
      let obj = require("get initialized");
      const items = [closure_4];
      closure_4 = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
      const items1 = [shouldFetchPreview];
      const obj2 = require("get initialized");
      let stateFromStores = obj2.useStateFromStores(items1, () => {
        const canBasicChannelResult =
          null != closure_4 && PermissionStore.canBasicChannel(BasicPermissions.CONNECT, tmp);
        return canBasicChannelResult;
      });
      const items2 = [stateFromStores];
      const obj3 = require("get initialized");
      const stateFromStores1 = obj3.useStateFromStores(
        items2,
        () => SelectedChannelStore.getVoiceChannelId() === closure_1,
      );
      const items3 = [closure_3];
      const obj4 = require("get initialized");
      const stateFromStoresObject = obj4.useStateFromStoresObject(items3, () => {
        let previewURL;
        let isPreviewLoading = !closure_3;
        let shouldFetchPreviewResult = isPreviewLoading;
        if (!closure_3) {
          shouldFetchPreviewResult = ApplicationStreamPreviewStore.shouldFetchPreview(closure_0, closure_1, closure_2);
        }
        const obj = {
          shouldFetchPreview: shouldFetchPreviewResult,
          previewUrl: previewURL,
          isLoading: isPreviewLoading,
        };
        previewURL = null;
        if (!closure_3) {
          previewURL = ApplicationStreamPreviewStore.getPreviewURL(closure_0, closure_1, closure_2);
        }
        if (!closure_3) {
          isPreviewLoading = ApplicationStreamPreviewStore.getIsPreviewLoading(closure_0, closure_1, closure_2);
        }
        return obj;
      });
      shouldFetchPreview = stateFromStoresObject.shouldFetchPreview;
      ({ previewUrl, isLoading } = stateFromStoresObject);
      if (!stateFromStores) {
        stateFromStores = stateFromStores1;
      }
      const items4 = [shouldFetchPreview, arg1, arg0, arg2, tmp, stateFromStores];
      const effect = react.useEffect(() => {
        const tmp = shouldFetchPreview && !closure_3 && stateFromStores;
        if (tmp) {
          const obj = StreamActionCreators;
          const streamPreview = obj.fetchStreamPreview(closure_0, closure_1, closure_2);
        }
      }, items4);
      if (!tmp) {
        let obj5;
        if (stateFromStores) {
          obj5 = { previewUrl, isLoading };
        }
        return obj5;
      }
      obj5 = { previewUrl: "Set", isLoading: true };
    };
const result = size.fileFinishedImporting("modules/go_live/useFetchStreamPreview.tsx");

export default tmp2;
