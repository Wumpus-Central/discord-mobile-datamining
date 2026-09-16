// discord_app/modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../../../intl/index.native.tsx";
import useGetOrFetchApplications from "../../../../../applications/useGetOrFetchApplications.tsx";
import useEmbeddedActivityBackgroundDefault from "../../../../../activities/utils/useEmbeddedActivityBackground.tsx";
import useDefaultAppLauncherWidth from "../../../hooks/useDefaultAppLauncherWidth.tsx";
import getPreviewVideoAssetUrlDefault from "../../../../../activities/utils/getPreviewVideoAssetUrl.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";

require = fn;
const DEFAULT_CONTENT_PADDING = fn(1483).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles({ mediaBackground: { backgroundColor: "black" } });
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx",
);

export default function HeroMedia(arg0) {
  ({ applicationId, containerHeight } = arg0);
  ({ width, contentWidth } = arg0);
  const tmp = closure_6();
  ({ width: width2, contentWidth: contentWidth2 } = { width, contentWidth });
  if (contentWidth2 == null) {
    if (width2 == null) {
      width2 = obj.useDefaultAppLauncherWidth();
    }
    contentWidth2 = width2 - 2 * DEFAULT_CONTENT_PADDING;
  }
  const rounded = Math.floor((9 * contentWidth2) / 16);
  const tmp7 = useEmbeddedActivityBackgroundDefault({ applicationId, size: contentWidth2, names: ["embedded_cover"] });
  obj = useDefaultAppLauncherWidth;
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  const tmp2Result = initialize;
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(applicationId);
  let prop;
  if (getOrFetchApplication != null) {
    prop = getOrFetchApplication.embeddedActivityConfig;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.activity_preview_video_asset_id;
  }
  let tmp12 = null;
  if (null != prop1) {
    tmp12 = getPreviewVideoAssetUrlDefault(applicationId, prop.activity_preview_video_asset_id);
  }
  let tmp15Result = null;
  if (null != tmp12) {
    tmp15Result = null;
    if ("" !== tmp12) {
      const size = {
        muted: true,
        paused: stateFromStores,
        src: null,
        height: null,
        width: null,
        poster: null,
        resizeMode: "cover",
        accessibilityLabel: null,
        style: null,
        videoStyle: null,
        postponeRender: false,
      };
      if (null != tmp12) {
        if ("" !== tmp12) {
          const obj2 = { videoURI: tmp12 };
          let obj7 = obj2;
        }
        size.src = obj7;
        size.height = rounded;
        size.width = contentWidth2;
        size.poster = tmp7.url;
        const intl = util.intl;
        let str3;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        const obj3 = { applicationName: str3 };
        size.accessibilityLabel = intl.formatToPlainString(util.t["Af+EQD"], obj3);
        const items1 = [tmp.mediaBackground, ,];
        const obj4 = { maxHeight: rounded };
        items1[1] = obj4;
        let tmp14 = null != containerHeight;
        if (tmp14) {
          const obj5 = { transform: null };
          const obj6 = { translateY: (containerHeight - rounded) / 2 };
          const items2 = [obj6];
          obj5.transform = items2;
          tmp14 = obj5;
        }
        items1[2] = tmp14;
        size.style = items1;
        size.videoStyle = tmp.mediaBackground;
        tmp15Result = <tmp16 {...size} />;
      }
      let str2 = tmp7.url;
      if (str2 == null) {
        str2 = "";
      }
      obj7 = { uri: str2 };
    }
  }
  return tmp15Result;
}
export const useHeroMediaDimensions = function useHeroMediaDimensions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ width, contentWidth } = obj);
  if (contentWidth == null) {
    if (width == null) {
      width = obj2.useDefaultAppLauncherWidth();
    }
    contentWidth = width - 2 * DEFAULT_CONTENT_PADDING;
  }
  const size = { width: contentWidth, height: Math.floor((9 * contentWidth) / 16) };
  return size;
};
