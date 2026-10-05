// discord_app/modules/go_live/useFetchStreamPreview.tsx
import StreamActionCreators from "../../actions/StreamActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationStreamPreviewStore from "../../stores/ApplicationStreamPreviewStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const BasicPermissions = fn(1096).BasicPermissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/useFetchStreamPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      _require = arg0;
      dependencyMap = arg1;
      closure_2 = arg2;
      const cResult = require("c").c(27);
      closure_3 = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        const fn = function w() {
          return ChannelStore.getChannel(closure_1);
        };
        cResult[1] = arg1;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const fn2 = function _() {
          let canBasicChannelResult = null != stateFromStores;
          if (canBasicChannelResult) {
            canBasicChannelResult = PermissionStore.canBasicChannel(BasicPermissions.CONNECT, tmp);
          }
          return canBasicChannelResult;
        };
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp11);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SelectedChannelStore];
        cResult[6] = items2;
        let tmp13 = items2;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] !== arg1) {
        class C {
          constructor() {
            return closure_6.getVoiceChannelId() === closure_1;
          }
        }
        cResult[7] = arg1;
        cResult[8] = C;
      } else {
        class C {
          constructor() {
            return closure_6.getVoiceChannelId() === closure_1;
          }
        }
      }
      const tmpResult3 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp13, C);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return closure_6.getVoiceChannelId() === closure_1;
          }
        }
        const items3 = [closure_3];
        cResult[9] = items3;
      } else {
        class C {
          constructor() {
            return closure_6.getVoiceChannelId() === closure_1;
          }
        }
      }
      if (cResult[10] === arg1) {
        class C {
          constructor() {
            return closure_6.getVoiceChannelId() === closure_1;
          }
        }
      }
      const fn3 = function y() {
        let isPreviewLoading = !closure_3;
        let shouldFetchPreviewResult = isPreviewLoading;
        if (!closure_3) {
          shouldFetchPreviewResult = ApplicationStreamPreviewStore.shouldFetchPreview(closure_0, closure_1, closure_2);
        }
        const obj = { shouldFetchPreview: shouldFetchPreviewResult, previewUrl: null, isLoading: null };
        let previewURL = null;
        if (!closure_3) {
          previewURL = ApplicationStreamPreviewStore.getPreviewURL(closure_0, closure_1, closure_2);
        }
        obj.previewUrl = previewURL;
        if (!closure_3) {
          isPreviewLoading = ApplicationStreamPreviewStore.getIsPreviewLoading(closure_0, closure_1, closure_2);
        }
        obj.isLoading = isPreviewLoading;
        return obj;
      };
      cResult[10] = arg1;
      cResult[11] = arg0;
      cResult[12] = null == arg1 || null == arg2;
      cResult[13] = arg2;
      cResult[14] = fn3;
      const tmpResult4 = require("initialize");
    }
  : (arg0, arg1, arg2) => {
      _require = arg0;
      dependencyMap = arg1;
      noop = arg2;
      closure_3 = tmp;
      const items = [closure_4];
      closure_4 = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
      let obj = require("initialize");
      const items1 = [shouldFetchPreview];
      let stateFromStores = require("initialize").useStateFromStores(items1, () => {
        let canBasicChannelResult = null != closure_4;
        if (canBasicChannelResult) {
          canBasicChannelResult = PermissionStore.canBasicChannel(BasicPermissions.CONNECT, tmp);
        }
        return canBasicChannelResult;
      });
      const obj2 = require("initialize");
      const items2 = [stateFromStores];
      const stateFromStores1 = require("initialize").useStateFromStores(
        items2,
        () => SelectedChannelStore.getVoiceChannelId() === closure_1,
      );
      const obj3 = require("initialize");
      const items3 = [closure_3];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items3, () => {
        let isPreviewLoading = !closure_3;
        let shouldFetchPreviewResult = isPreviewLoading;
        if (!closure_3) {
          shouldFetchPreviewResult = ApplicationStreamPreviewStore.shouldFetchPreview(closure_0, closure_1, closure_2);
        }
        const obj = { shouldFetchPreview: shouldFetchPreviewResult, previewUrl: null, isLoading: null };
        let previewURL = null;
        if (!closure_3) {
          previewURL = ApplicationStreamPreviewStore.getPreviewURL(closure_0, closure_1, closure_2);
        }
        obj.previewUrl = previewURL;
        if (!closure_3) {
          isPreviewLoading = ApplicationStreamPreviewStore.getIsPreviewLoading(closure_0, closure_1, closure_2);
        }
        obj.isLoading = isPreviewLoading;
        return obj;
      });
      shouldFetchPreview = stateFromStoresObject.shouldFetchPreview;
      ({ previewUrl, isLoading } = stateFromStoresObject);
      if (!stateFromStores) {
        stateFromStores = stateFromStores1;
      }
      const items4 = [shouldFetchPreview, arg1, arg0, arg2, null == arg1 || null == arg2, stateFromStores];
      const effect = noop.useEffect(() => {
        let tmp = shouldFetchPreview;
        if (shouldFetchPreview) {
          tmp = !closure_3;
        }
        if (tmp) {
          tmp = stateFromStores;
        }
        if (tmp) {
          const streamPreview = StreamActionCreators.fetchStreamPreview(closure_0, closure_1, closure_2);
        }
      }, items4);
      if (!(null == arg1 || null == arg2)) {
        if (stateFromStores) {
          let obj5 = { previewUrl, isLoading };
        }
        return obj5;
      }
      obj5 = { previewUrl: "Set", isLoading: true };
    };
