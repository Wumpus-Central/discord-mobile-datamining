// discord_app/modules/spoiler_channels/native/ChannelSpoiler.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import GatedContentDefault from "../../../components_native/warnings/GatedContent.tsx";
import VoicePanelStateContextDefault from "../../voice_panel/native/VoicePanelStateContext.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VoicePanelControlsModes = fn(11924).VoicePanelControlsModes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  subtitle: { textAlign: "center", lineHeight: 22 },
  subtitleContainer: { alignItems: "center" },
  divider: null,
  subtitleMeasure: null,
};
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 16 };
obj2.divider = size;
obj2.subtitleMeasure = { position: "absolute", opacity: 0, left: 0, right: 0 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/ChannelSpoiler.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelSpoiler(guildId) {
      _require = guildId;
      const cResult = require("c").c(38);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId.guildId) {
        const fn = function v() {
          return GuildStore.getGuild(guildId.guildId);
        };
        cResult[1] = guildId.guildId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== guildId.channelId) {
        class S {
          constructor() {
            return closure_7.getChannel(closure_0.channelId);
          }
        }
        cResult[4] = guildId.channelId;
        cResult[5] = S;
      } else {
        class S {
          constructor() {
            return closure_7.getChannel(closure_0.channelId);
          }
        }
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp8, S);
      closure_12();
      const tmpResult2 = require("initialize");
      [r10058, importDefault] = setControlsMode(noop.useState(false), 2);
      useChannelNameDefault(stateFromStores1);
      if (cResult[6] !== stateFromStores1) {
        class S {
          constructor() {
            return closure_7.getChannel(closure_0.channelId);
          }
        }
        if (stateFromStores1 != null) {
          class S {
            constructor() {
              return closure_7.getChannel(closure_0.channelId);
            }
          }
        }
        cResult[6] = stateFromStores1;
        cResult[7] = undefined;
      } else {
        class S {
          constructor() {
            return closure_7.getChannel(closure_0.channelId);
          }
        }
      }
      dependencyMap = tmp16;
      setControlsMode = noop.useContext(VoicePanelStateContextDefault).setControlsMode;
      if (cResult[8] === tmp16) {
        class S {
          constructor() {
            return closure_7.getChannel(closure_0.channelId);
          }
        }
      }
      class M {
        constructor() {
          if (closure_2) {
            tmp = closure_6;
            tmp2 = closure_0;
            if (closure_6.getChatOpen(closure_0.channelId)) {
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj2 = closure_1(closure_2[15]);
              flag = false;
              updateChatOpenResult = obj2.updateChatOpen(tmp2.channelId, false);
              tmp7 = setControlsMode;
              obj1 = { mode: null };
              tmp8 = VoicePanelControlsModes;
              obj1.mode = VoicePanelControlsModes.FLOATING_DEFAULT;
              tmp9 = setControlsMode(obj1);
              return;
            }
          }
          obj = closure_1(closure_2[16]);
          nsfwReturnToSafetyResult = obj.nsfwReturnToSafety(closure_0.guildId);
          return;
        }
      }
      cResult[8] = tmp16;
      cResult[9] = guildId.channelId;
      cResult[10] = guildId.guildId;
      cResult[11] = setControlsMode;
      cResult[12] = M;
      const tmp13 = setControlsMode(noop.useState(false), 2);
    }
  : function ChannelSpoiler(channelId) {
      _require = channelId;
      const items = [GuildStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildStore.getGuild(channelId.guildId),
      );
      let obj = require("initialize");
      const items1 = [ChannelStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
        ChannelStore.getChannel(channelId.channelId),
      );
      const tmp4 = closure_12();
      const tmp5 = setControlsMode(noop.useState(false), 2);
      importDefault = tmp5[1];
      let isVocalResult;
      let obj2 = require("initialize");
      if (stateFromStores1 != null) {
        isVocalResult = stateFromStores1.isVocal();
      }
      dependencyMap = isVocalResult;
      setControlsMode = noop.useContext(tmp6(11925)).setControlsMode;
      const items2 = [, , ,];
      ({ guildId: arr3[0], channelId: arr3[1] } = channelId);
      items2[2] = setControlsMode;
      items2[3] = isVocalResult;
      const callback = noop.useCallback(() => {
        if (isVocalResult) {
          if (ChannelRTCStore.getChatOpen(channelId.channelId)) {
            ChannelRTCActionCreatorsDefault.updateChatOpen(channelId.channelId, false);
            const obj3 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
            setControlsMode(obj3);
          }
        }
        GuildActionCreatorsDefault.nsfwReturnToSafety(channelId.guildId);
      }, items2);
      const items3 = [channelId.channelId];
      const callback1 = noop.useCallback((nativeEvent) => {
        closure_1(nativeEvent.nativeEvent.lines.length > 3);
      }, []);
      let channelIconComponent = null;
      const callback2 = noop.useCallback(() => {
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (rootNavigationRef != null) {
          const obj2 = { channelId: channelId.channelId, expandTopic: true };
          rootNavigationRef.navigate("sidebar", obj2);
        }
      }, items3);
      if (null != stateFromStores1) {
        channelIconComponent = tmp(8142).getChannelIconComponent(stateFromStores1);
        const tmpResult = tmp(8142);
      }
      if (null != channelIconComponent) {
        let obj3 = { style: { flexDirection: "row", alignItems: "center", gap: 4, flexShrink: 1 }, children: null };
        const items4 = [closure_10(channelIconComponent, { size: "lg", color: "mobile-text-heading-primary" })];
        const obj5 = {
          variant: "heading-xxl/bold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          style: { flexShrink: 1 },
          children: tmp7,
        };
        items4[1] = closure_10(tmp(5087).Text, obj5);
        obj3.children = items4;
        let stringResult = closure_11(View, obj3);
      } else {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t["q38/ae"]);
      }
      let topic;
      if (stateFromStores1 != null) {
        topic = stateFromStores1.topic;
      }
      let tmp23Result = null;
      if (null != topic) {
        tmp23Result = null;
        if ("" !== str.trim()) {
          const obj6 = { spacing: 4, style: tmp4.subtitleContainer, children: null };
          const obj7 = { style: tmp4.subtitleMeasure, pointerEvents: "none", children: null };
          const obj8 = { variant: "text-md/medium", maxFontSizeMultiplier: 2, onTextLayout: callback1, children: null };
          const obj9 = { channelId: stateFromStores1.id };
          obj8.children = tmp6(5078).parseTopic(stateFromStores1.topic, true, obj9);
          obj7.children = closure_10(tmp(5087).Text, obj8);
          const items5 = [closure_10(View, obj7), , ,];
          const obj10 = {
            color: "text-muted",
            variant: "text-md/medium",
            style: tmp4.subtitle,
            maxFontSizeMultiplier: 2,
            lineClamp: 3,
            children: null,
          };
          const tmp6Result = tmp6(5078);
          const obj11 = { channelId: stateFromStores1.id };
          obj10.children = tmp6(5078).parseTopic(stateFromStores1.topic, true, obj11);
          items5[1] = closure_10(tmp(5087).Text, obj10);
          let tmp24Result = null;
          if (tmp5[0]) {
            const obj12 = { onPress: callback2, accessibilityRole: "button", children: null };
            const obj13 = {
              variant: "text-sm/medium",
              color: "text-brand",
              style: { textDecorationLine: "underline" },
              children: null,
            };
            const intl2 = tmp(1126).intl;
            obj13.children = intl2.string(tmp(1126).t["/QvRak"]);
            obj12.children = closure_10(tmp(5087).Text, obj13);
            tmp24Result = closure_10(tmp(6191).PressableHighlight, obj12);
          }
          items5[2] = tmp24Result;
          const obj14 = { style: tmp4.divider };
          items5[3] = closure_10(View, obj14);
          obj6.children = items5;
          tmp23Result = closure_11(tmp(5374).Stack, obj6);
          const tmp6Result3 = tmp6(5078);
        }
        str = stateFromStores1.topic;
      }
      const obj15 = {
        modalType: null,
        onAgree: null,
        onDisagree: null,
        title: null,
        subtitle: null,
        description: null,
        agreement: null,
        disagreement: null,
        guildId: null,
        channelId: null,
      };
      tmp7 = useChannelNameDefault(stateFromStores1);
      obj15.modalType = require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.SPOILER_CHANNEL;
      obj15.onAgree = function handleAgree() {
        GuildActionCreatorsDefault.spoilerAgree(channelId.channelId);
      };
      obj15.onDisagree = callback;
      obj15.title = stringResult;
      obj15.subtitle = tmp23Result;
      const intl3 = tmp(1126).intl;
      obj15.description = intl3.string(require("util").t["08bm2Z"]);
      const intl4 = tmp(1126).intl;
      obj15.agreement = intl4.string(require("util").t.KmRwcW);
      const intl5 = tmp(1126).intl;
      obj15.disagreement = intl5.string(require("util").t["/g10LC"]);
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj15.guildId = id;
      obj15.channelId = channelId.channelId;
      return closure_10(GatedContentDefault, obj15);
    };
