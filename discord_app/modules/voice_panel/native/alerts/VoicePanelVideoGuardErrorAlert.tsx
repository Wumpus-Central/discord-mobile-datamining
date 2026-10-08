// discord_app/modules/voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import VideoGuardExperiment from "../../../media_engine/VideoGuardExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VoicePanelVideoGuardErrorAlert(title) {
      const cResult = c.c(8);
      title = title.title;
      const dismissModalCallback = AlertModal.useDismissModalCallback();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.UoW002);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
        const intl2 = util.intl;
        const obj4 = { helpdeskArticle: VideoGuardExperiment.VIDEO_GUARD_BLOG_POST_URL };
        obj3.children = intl2.format(util.t.BPDKoA, obj4);
        const tmp9 = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
        cResult[1] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t["NX+WJN"]);
        cResult[2] = stringResult1;
        let tmp10 = stringResult1;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== dismissModalCallback) {
        const obj5 = { variant: "secondary", text: tmp10, onPress: dismissModalCallback };
        const tmp14 = jsx(AlertModal.AlertActionButton, {
          variant: "secondary",
          text: tmp10,
          onPress: dismissModalCallback,
        });
        cResult[3] = dismissModalCallback;
        cResult[4] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp12) {
        if (cResult[6] === title) {
          let tmp15 = cResult[7];
        }
        return tmp15;
      }
      const tmp16 = jsx(AlertModal.AlertModal, { title, content: first, extraContent: tmp7, actions: tmp12 });
      cResult[5] = tmp12;
      cResult[6] = title;
      cResult[7] = tmp16;
      tmp15 = tmp16;
    }
  : function VoicePanelVideoGuardErrorAlert(title) {
      const obj2 = { title: title.title, content: null, extraContent: null, actions: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t.UoW002);
      const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
      const intl2 = util.intl;
      const dismissModalCallback = AlertModal.useDismissModalCallback();
      obj3.children = intl2.format(util.t.BPDKoA, { helpdeskArticle: VideoGuardExperiment.VIDEO_GUARD_BLOG_POST_URL });
      obj2.extraContent = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
      const obj5 = { variant: "secondary", text: null, onPress: null };
      const intl3 = util.intl;
      obj5.text = intl3.string(util.t["NX+WJN"]);
      obj5.onPress = dismissModalCallback;
      obj2.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null, onPress: null });
      return jsx(AlertModal.AlertModal, { title: title.title, content: null, extraContent: null, actions: null });
    };
export const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = "voice-panel-video-guard-error";
