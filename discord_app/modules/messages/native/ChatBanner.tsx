// discord_app/modules/messages/native/ChatBanner.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ReadStateActionCreators from "../../../actions/ReadStateActionCreators.tsx";
import OptInChannelsActionCreators from "../../opt_in_channels/OptInChannelsActionCreators.tsx";
import ThreadActionCreatorsDefault from "../../threads/ThreadActionCreators.tsx";
import ChatOverlayConstants from "../ChatOverlayConstants.tsx";
import useShowChannelOptInNoticeDefault from "../../opt_in_channels/useShowChannelOptInNotice.tsx";
import useAllowedChatOverlaysDefault from "../useAllowedChatOverlays.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channel;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_4;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
({ StyleSheet, View: closure_4 } = react_native);
const ChatOverlays = ChatOverlayConstants.ChatOverlays;
({
  AnalyticsObjectTypes: metroImportAll,
  AnalyticsObjects: c9,
  AnalyticEvents: c10,
  AnalyticsSections: unpackModuleId,
} = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  threadBannerContainer: obj2,
  threadBannerTitle: { flex: 1, lineHeight: 18 },
  threadBannerButton: { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 },
  newMessageBar: obj3,
  newMessageBarTextContainer: { flex: 1, paddingLeft: 16, paddingVertical: 10 },
  newMessageBarCloseButton: { paddingHorizontal: 12 },
  optInChannelBannerContainer: obj4,
  topBorder: obj5,
  optInChannelBannerText: { flex: 1 },
  optInChannelBannerButtonContainer: { flexShrink: 0, marginLeft: 8 },
};
obj2 = {
  alignSelf: "stretch",
  minHeight: 60,
  flexDirection: "row",
  paddingHorizontal: 16,
  paddingVertical: 12,
  alignItems: "center",
  flexGrow: 0,
  zIndex: 100,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 100,
  minHeight: 45,
};
obj4 = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  padding: 8,
  paddingLeft: 16,
  paddingRight: 16,
  zIndex: 100,
  backgroundColor: nativeDefault.colors.CHAT_BANNER_BG,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.CHAT_BORDER,
};
obj5 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.CHAT_BORDER };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let oldestUnreadTimestamp;
      let tmp11;
      let tmp7;
      let tmp8;
      let unreadCount;
      let obj = channel(576);
      const cResult = obj.c(15);
      const tmp = channel;
      channel = channel.channel;
      const handleScrollToNewMessages = channel.handleScrollToNewMessages;
      const tmp4 = useShowChannelOptInNoticeDefault(channel);
      let obj2 = useAllowedChatOverlaysDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function l() {
          let oldestUnreadTimestamp = ReadStateStore.getOldestUnreadTimestamp(channel.id);
          const obj = { unreadCount: ReadStateStore.getUnreadCount(channel.id), oldestUnreadTimestamp };
          if (0 === oldestUnreadTimestamp) {
            const obj2 = SnowflakeUtilsDefault;
            oldestUnreadTimestamp = obj2.extractTimestamp(channel.id);
          }
          return obj;
        };
        const items1 = [channel.id];
        cResult[1] = channel.id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
      ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
      if (channel.isArchivedLockedThread()) {
        let tmp25;
        if (cResult[4] !== channel) {
          const obj3 = { channel };
          const tmp28 = closure_12(closure_16, obj3);
          cResult[4] = channel;
          cResult[5] = tmp28;
          tmp25 = tmp28;
        } else {
          tmp25 = cResult[5];
        }
        tmp11 = tmp25;
      } else if (channel.isLockedThread()) {
        let tmp21;
        if (cResult[6] !== channel) {
          const obj4 = { channel };
          const tmp24 = closure_12(closure_17, obj4);
          cResult[6] = channel;
          cResult[7] = tmp24;
          tmp21 = tmp24;
        } else {
          tmp21 = cResult[7];
        }
        tmp11 = tmp21;
      } else {
        if (unreadCount > 0) {
          if (obj2.includes(ChatOverlays.NEW_MESSAGES)) {
            if (cResult[8] === channel) {
              if (cResult[9] === handleScrollToNewMessages) {
                if (cResult[10] === oldestUnreadTimestamp) {
                  let tmp17;
                  if (cResult[11] === unreadCount) {
                    tmp17 = cResult[12];
                  }
                  tmp11 = tmp17;
                }
              }
            }
            const obj5 = { unreadCount, oldestUnreadTimestamp, channel, handleScrollToNewMessages };
            const tmp20 = closure_12(closure_18, obj5);
            cResult[8] = channel;
            cResult[9] = handleScrollToNewMessages;
            cResult[10] = oldestUnreadTimestamp;
            cResult[11] = unreadCount;
            cResult[12] = tmp20;
            tmp17 = tmp20;
          }
        }
        tmp11 = null;
        if (tmp4) {
          tmp11 = null;
          if (obj2.includes(ChatOverlays.OPT_IN_CHANNEL)) {
            let tmp13;
            if (cResult[13] !== channel) {
              const obj6 = { channel };
              const tmp16 = closure_12(closure_15, obj6);
              cResult[13] = channel;
              cResult[14] = tmp16;
              tmp13 = tmp16;
            } else {
              tmp13 = cResult[14];
            }
            tmp11 = tmp13;
          }
        }
      }
      return tmp11;
    }
  : (channel) => {
      let oldestUnreadTimestamp;
      let tmp4;
      let unreadCount;
      channel = channel.channel;
      const handleScrollToNewMessages = channel.handleScrollToNewMessages;
      const tmp = useShowChannelOptInNoticeDefault(channel);
      let obj = useAllowedChatOverlaysDefault();
      let obj2 = channel(504);
      const items = [ReadStateStore];
      const items1 = [channel.id];
      const stateFromStoresObject = obj2.useStateFromStoresObject(
        items,
        () => {
          let oldestUnreadTimestamp = ReadStateStore.getOldestUnreadTimestamp(channel.id);
          const obj = { unreadCount: ReadStateStore.getUnreadCount(channel.id), oldestUnreadTimestamp };
          if (0 === oldestUnreadTimestamp) {
            const obj2 = SnowflakeUtilsDefault;
            oldestUnreadTimestamp = obj2.extractTimestamp(channel.id);
          }
          return obj;
        },
        items1,
      );
      ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
      if (channel.isArchivedLockedThread()) {
        const obj3 = { channel };
        tmp4 = closure_12(closure_16, obj3);
      } else if (channel.isLockedThread()) {
        const obj4 = { channel };
        tmp4 = closure_12(closure_17, obj4);
      } else {
        if (unreadCount > 0) {
          if (obj.includes(ChatOverlays.NEW_MESSAGES)) {
            const obj5 = { unreadCount, oldestUnreadTimestamp, channel, handleScrollToNewMessages };
            tmp4 = closure_12(closure_18, obj5);
          }
        }
        tmp4 = null;
        if (tmp) {
          tmp4 = null;
          if (obj.includes(ChatOverlays.OPT_IN_CHANNEL)) {
            const obj6 = { channel };
            tmp4 = closure_12(closure_15, obj6);
          }
        }
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let items1;
      let tmp5;
      let tmp6;
      let tmp8;
      const tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(22);
      channel = channel.channel;
      const ctaProps = channel.ctaProps;
      const topBorder = channel.topBorder;
      const tmp4 = closure_14();
      if (cResult[0] !== channel) {
        const fn = function l() {
          const obj = { banner_type: "channel_opt_in" };
          const track = AnalyticsUtilsDefault.track;
          const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const obj3 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CHANNEL_BANNER_VIEWED, obj);
        };
        const items = [channel];
        cResult[0] = channel;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[3] !== channel) {
        const fn2 = function c() {
          const obj = { banner_type: "channel_opt_in", cta_type: "add channel" };
          const track = AnalyticsUtilsDefault.track;
          const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const obj3 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CHANNEL_BANNER_CTA_CLICKED, obj);
          const obj4 = OptInChannelsActionCreators;
          const obj5 = { section: unpackModuleId.CHANNEL };
          obj4.setOptInChannel(channel.guild_id, channel.id, true, obj5);
        };
        cResult[3] = channel;
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      let topBorder1 = null;
      if (topBorder) {
        topBorder1 = tmp4.topBorder;
      }
      if (cResult[5] === tmp4.optInChannelBannerContainer) {
        let tmp10;
        let tmp12;
        let tmp14;
        let tmp17;
        if (cResult[6] === topBorder1) {
          tmp10 = cResult[7];
        }
        const _Symbol = Symbol;
        const optInChannelBannerText = tmp4.optInChannelBannerText;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.iOWmmB);
          cResult[8] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] !== tmp4.optInChannelBannerText) {
          let obj2 = { lineClamp: 2, style: optInChannelBannerText, variant: "text-sm/semibold", children: tmp12 };
          const tmp16 = closure_12(tmp(4886).Text, obj2);
          cResult[9] = tmp4.optInChannelBannerText;
          cResult[10] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol2 = Symbol;
        const optInChannelBannerButtonContainer = tmp4.optInChannelBannerButtonContainer;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t["TD/+zP"]);
          cResult[11] = stringResult1;
          tmp17 = stringResult1;
        } else {
          tmp17 = cResult[11];
        }
        if (cResult[12] === ctaProps) {
          let tmp19;
          if (cResult[13] === tmp8) {
            tmp19 = cResult[14];
          }
          if (cResult[15] === tmp4.optInChannelBannerButtonContainer) {
            let tmp25;
            if (cResult[16] === tmp19) {
              tmp25 = cResult[17];
            }
            if (cResult[18] === tmp25) {
              if (cResult[19] === tmp10) {
                let tmp29;
                if (cResult[20] === tmp14) {
                  tmp29 = cResult[21];
                }
                return tmp29;
              }
            }
            let obj3 = { style: tmp10, children: items1 };
            items1 = [tmp14, tmp25];
            const tmp32 = closure_13(closure_4, obj3);
            cResult[18] = tmp25;
            cResult[19] = tmp10;
            cResult[20] = tmp14;
            cResult[21] = tmp32;
            tmp29 = tmp32;
          }
          let obj4 = { style: optInChannelBannerButtonContainer, children: tmp19 };
          const tmp28 = closure_12(closure_4, obj4);
          cResult[15] = tmp4.optInChannelBannerButtonContainer;
          cResult[16] = tmp19;
          cResult[17] = tmp28;
          tmp25 = tmp28;
        }
        let obj5 = { onPress: tmp8, size: "sm", text: tmp17 };
        const Button = tmp(5594).Button;
        let merged = Object.assign(ctaProps);
        const tmp24 = closure_12(Button, obj5);
        cResult[12] = ctaProps;
        cResult[13] = tmp8;
        cResult[14] = tmp24;
        tmp19 = tmp24;
      }
      const items2 = [tmp4.optInChannelBannerContainer, topBorder1];
      cResult[5] = tmp4.optInChannelBannerContainer;
      cResult[6] = topBorder1;
      cResult[7] = items2;
      tmp10 = items2;
    }
  : (channel) => {
      let Button;
      let intl;
      let intl2;
      let items3;
      let obj4;
      channel = channel.channel;
      const ctaProps = channel.ctaProps;
      const topBorder = channel.topBorder;
      const tmp = closure_14();
      const items = [channel];
      const effect = react.useEffect(() => {
        const obj = { banner_type: "channel_opt_in" };
        const track = AnalyticsUtilsDefault.track;
        const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
        const obj3 = AppAnalyticsUtils;
        const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
        track(CHANNEL_BANNER_VIEWED, obj);
      }, items);
      const items1 = [channel];
      const items2 = [tmp.optInChannelBannerContainer];
      let topBorder1 = null;
      const callback = react.useCallback(() => {
        const obj = { banner_type: "channel_opt_in", cta_type: "add channel" };
        const track = AnalyticsUtilsDefault.track;
        const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
        const obj3 = AppAnalyticsUtils;
        const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
        track(CHANNEL_BANNER_CTA_CLICKED, obj);
        const obj4 = OptInChannelsActionCreators;
        const obj5 = { section: unpackModuleId.CHANNEL };
        obj4.setOptInChannel(channel.guild_id, channel.id, true, obj5);
      }, items1);
      if (topBorder) {
        topBorder1 = tmp.topBorder;
      }
      let obj = { style: items2, children: items3 };
      items2[1] = topBorder1;
      let obj2 = {
        lineClamp: 2,
        style: tmp.optInChannelBannerText,
        variant: "text-sm/semibold",
        children: intl.string(channel(1126).t.iOWmmB),
      };
      const Text = channel(4886).Text;
      intl = channel(1126).intl;
      items3 = [closure_12(Text, obj2)];
      let obj3 = { style: tmp.optInChannelBannerButtonContainer, children: closure_12(Button, obj4) };
      obj4 = { onPress: callback, size: "sm", text: intl2.string(channel(1126).t["TD/+zP"]) };
      Button = channel(5594).Button;
      let merged = Object.assign(ctaProps);
      intl2 = channel(1126).intl;
      items3[1] = closure_12(closure_4, obj3);
      return closure_13(closure_4, obj);
    };
let closure_15 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let Button;
      let intl2;
      let items1;
      let obj4;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp8;
      const tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(18);
      channel = channel.channel;
      const tmp4 = closure_14();
      if (cResult[0] !== channel) {
        const fn = function l() {
          const obj = { banner_type: "thread" };
          const track = AnalyticsUtilsDefault.track;
          const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const obj3 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CHANNEL_BANNER_VIEWED, obj);
        };
        const items = [channel];
        cResult[0] = channel;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[3] !== channel) {
        const fn2 = function c() {
          const obj = { banner_type: "thread", cta_type: "unarchive" };
          const track = AnalyticsUtilsDefault.track;
          const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const obj3 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CHANNEL_BANNER_CTA_CLICKED, obj);
          const obj4 = ThreadActionCreatorsDefault;
          obj4.unarchiveThread(channel, false);
        };
        cResult[3] = channel;
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      const tmpResult = tmp(6772);
      const canUnarchiveThread = tmpResult.useCanUnarchiveThread(channel);
      if (cResult[5] !== channel) {
        let stringResult;
        const isForumPostResult = channel.isForumPost();
        const intl = tmp(1126).intl;
        const string = intl.string;
        const t = tmp(1126).t;
        if (isForumPostResult) {
          stringResult = string(t["833FDn"]);
        } else {
          stringResult = string(t.rEeodK);
        }
        cResult[5] = channel;
        cResult[6] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === tmp4.threadBannerTitle) {
        let tmp13;
        if (cResult[8] === tmp10) {
          tmp13 = cResult[9];
        }
        if (cResult[10] === canUnarchiveThread) {
          if (cResult[11] === tmp8) {
            let tmp15;
            if (cResult[12] === tmp4.threadBannerButton) {
              tmp15 = cResult[13];
            }
            if (cResult[14] === tmp4.threadBannerContainer) {
              if (cResult[15] === tmp13) {
                let tmp19;
                if (cResult[16] === tmp15) {
                  tmp19 = cResult[17];
                }
                return tmp19;
              }
            }
            let obj2 = { style: tmp4.threadBannerContainer, children: items1 };
            items1 = [tmp13, tmp15];
            const tmp22 = closure_13(closure_4, obj2);
            cResult[14] = tmp4.threadBannerContainer;
            cResult[15] = tmp13;
            cResult[16] = tmp15;
            cResult[17] = tmp22;
            tmp19 = tmp22;
          }
        }
        let tmp16 = canUnarchiveThread;
        if (tmp16) {
          let obj3 = { style: tmp4.threadBannerButton, children: closure_12(Button, obj4) };
          obj4 = { variant: "secondary", size: "sm", text: intl2.string(tmp(1126).t["0dvvEi"]), onPress: tmp8 };
          Button = tmp(5594).Button;
          intl2 = tmp(1126).intl;
          tmp16 = closure_12(closure_4, obj3);
        }
        cResult[10] = canUnarchiveThread;
        cResult[11] = tmp8;
        cResult[12] = tmp4.threadBannerButton;
        cResult[13] = tmp16;
        tmp15 = tmp16;
      }
      const obj5 = {
        lineClamp: 4,
        style: tmp4.threadBannerTitle,
        variant: "text-sm/medium",
        color: "text-default",
        children: tmp10,
      };
      const tmp14 = closure_12(tmp(4886).Text, obj5);
      cResult[7] = tmp4.threadBannerTitle;
      cResult[8] = tmp10;
      cResult[9] = tmp14;
      tmp13 = tmp14;
    }
  : (channel) => {
      let Button;
      let intl2;
      let items1;
      let obj5;
      let stringResult;
      channel = channel.channel;
      const tmp = closure_14();
      const items = [channel];
      const effect = react.useEffect(() => {
        const obj = { banner_type: "thread" };
        const track = AnalyticsUtilsDefault.track;
        const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
        const obj3 = AppAnalyticsUtils;
        const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
        track(CHANNEL_BANNER_VIEWED, obj);
      }, items);
      let obj = channel(6772);
      let canUnarchiveThread = obj.useCanUnarchiveThread(channel);
      let obj2 = { style: tmp.threadBannerContainer, children: items1 };
      let obj3 = {
        lineClamp: 4,
        style: tmp.threadBannerTitle,
        variant: "text-sm/medium",
        color: "text-default",
        children: stringResult,
      };
      const Text = channel(4886).Text;
      const isForumPostResult = channel.isForumPost();
      const intl = channel(1126).intl;
      const string = intl.string;
      const t = channel(1126).t;
      if (isForumPostResult) {
        stringResult = string(t["833FDn"]);
      } else {
        stringResult = string(t.rEeodK);
      }
      items1 = [closure_12(Text, obj3)];
      if (canUnarchiveThread) {
        let obj4 = { style: tmp.threadBannerButton, children: closure_12(Button, obj5) };
        obj5 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(channel(1126).t["0dvvEi"]),
          onPress() {
            const obj = { banner_type: "thread", cta_type: "unarchive" };
            const track = AnalyticsUtilsDefault.track;
            const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
            const obj3 = AppAnalyticsUtils;
            const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
            track(CHANNEL_BANNER_CTA_CLICKED, obj);
            const obj4 = ThreadActionCreatorsDefault;
            obj4.unarchiveThread(channel, false);
          },
        };
        Button = tmp3(5594).Button;
        intl2 = tmp3(1126).intl;
        canUnarchiveThread = closure_12(closure_4, obj4);
      }
      items1[1] = canUnarchiveThread;
      return closure_13(closure_4, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let Button;
      let intl2;
      let items1;
      let obj4;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp8;
      const tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(18);
      channel = channel.channel;
      const tmp4 = closure_14();
      if (cResult[0] !== channel) {
        const fn = function l() {
          const obj = { banner_type: "thread" };
          const track = AnalyticsUtilsDefault.track;
          const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const obj3 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CHANNEL_BANNER_VIEWED, obj);
        };
        const items = [channel];
        cResult[0] = channel;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[3] !== channel) {
        const fn2 = function c() {
          const obj = { banner_type: "thread", cta_type: "unlock" };
          const track = AnalyticsUtilsDefault.track;
          const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const obj3 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CHANNEL_BANNER_CTA_CLICKED, obj);
          const obj4 = ThreadActionCreatorsDefault;
          obj4.unlockThread(channel);
        };
        cResult[3] = channel;
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      const tmpResult = tmp(6772);
      const isThreadModerator = tmpResult.useIsThreadModerator(channel);
      if (cResult[5] !== channel) {
        let stringResult;
        const isForumPostResult = channel.isForumPost();
        const intl = tmp(1126).intl;
        const string = intl.string;
        const t = tmp(1126).t;
        if (isForumPostResult) {
          stringResult = string(t.E7oO8u);
        } else {
          stringResult = string(t["V/JF2N"]);
        }
        cResult[5] = channel;
        cResult[6] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === tmp4.threadBannerTitle) {
        let tmp13;
        if (cResult[8] === tmp10) {
          tmp13 = cResult[9];
        }
        if (cResult[10] === tmp8) {
          if (cResult[11] === isThreadModerator) {
            let tmp15;
            if (cResult[12] === tmp4.threadBannerButton) {
              tmp15 = cResult[13];
            }
            if (cResult[14] === tmp4.threadBannerContainer) {
              if (cResult[15] === tmp13) {
                let tmp19;
                if (cResult[16] === tmp15) {
                  tmp19 = cResult[17];
                }
                return tmp19;
              }
            }
            let obj2 = { style: tmp4.threadBannerContainer, children: items1 };
            items1 = [tmp13, tmp15];
            const tmp22 = closure_13(closure_4, obj2);
            cResult[14] = tmp4.threadBannerContainer;
            cResult[15] = tmp13;
            cResult[16] = tmp15;
            cResult[17] = tmp22;
            tmp19 = tmp22;
          }
        }
        let tmp16 = isThreadModerator;
        if (tmp16) {
          let obj3 = { style: tmp4.threadBannerButton, children: closure_12(Button, obj4) };
          obj4 = { variant: "secondary", size: "sm", text: intl2.string(tmp(1126).t.zA9d1J), onPress: tmp8 };
          Button = tmp(5594).Button;
          intl2 = tmp(1126).intl;
          tmp16 = closure_12(closure_4, obj3);
        }
        cResult[10] = tmp8;
        cResult[11] = isThreadModerator;
        cResult[12] = tmp4.threadBannerButton;
        cResult[13] = tmp16;
        tmp15 = tmp16;
      }
      const obj5 = {
        lineClamp: 4,
        style: tmp4.threadBannerTitle,
        variant: "text-sm/medium",
        color: "text-default",
        children: tmp10,
      };
      const tmp14 = closure_12(tmp(4886).Text, obj5);
      cResult[7] = tmp4.threadBannerTitle;
      cResult[8] = tmp10;
      cResult[9] = tmp14;
      tmp13 = tmp14;
    }
  : (channel) => {
      let Button;
      let intl2;
      let items1;
      let obj5;
      let stringResult;
      channel = channel.channel;
      const tmp = closure_14();
      const items = [channel];
      const effect = react.useEffect(() => {
        const obj = { banner_type: "thread" };
        const track = AnalyticsUtilsDefault.track;
        const CHANNEL_BANNER_VIEWED = constants.CHANNEL_BANNER_VIEWED;
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
        const obj3 = AppAnalyticsUtils;
        const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
        track(CHANNEL_BANNER_VIEWED, obj);
      }, items);
      let obj = channel(6772);
      let isThreadModerator = obj.useIsThreadModerator(channel);
      let obj2 = { style: tmp.threadBannerContainer, children: items1 };
      let obj3 = {
        lineClamp: 4,
        style: tmp.threadBannerTitle,
        variant: "text-sm/medium",
        color: "text-default",
        children: stringResult,
      };
      const Text = channel(4886).Text;
      const isForumPostResult = channel.isForumPost();
      const intl = channel(1126).intl;
      const string = intl.string;
      const t = channel(1126).t;
      if (isForumPostResult) {
        stringResult = string(t.E7oO8u);
      } else {
        stringResult = string(t["V/JF2N"]);
      }
      items1 = [closure_12(Text, obj3)];
      if (isThreadModerator) {
        let obj4 = { style: tmp.threadBannerButton, children: closure_12(Button, obj5) };
        obj5 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(channel(1126).t.zA9d1J),
          onPress() {
            const obj = { banner_type: "thread", cta_type: "unlock" };
            const track = AnalyticsUtilsDefault.track;
            const CHANNEL_BANNER_CTA_CLICKED = constants.CHANNEL_BANNER_CTA_CLICKED;
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channel.getGuildId()));
            const obj3 = AppAnalyticsUtils;
            const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
            track(CHANNEL_BANNER_CTA_CLICKED, obj);
            const obj4 = ThreadActionCreatorsDefault;
            obj4.unlockThread(channel);
          },
        };
        Button = tmp3(5594).Button;
        intl2 = tmp3(1126).intl;
        isThreadModerator = closure_12(closure_4, obj4);
      }
      items1[1] = isThreadModerator;
      return closure_13(closure_4, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let connected;
      let handleScrollToNewMessages;
      let items2;
      let oldestUnreadTimestamp;
      let tmp5;
      let tmp6;
      let tmp7;
      let unreadCount;
      let obj = channel(576);
      const cResult = obj.c(24);
      channel = channel.channel;
      ({ unreadCount, oldestUnreadTimestamp, handleScrollToNewMessages } = channel);
      const tmp4 = closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        const fn = function l() {
          return connected.isConnected();
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp5 = items;
        tmp6 = fn;
        tmp7 = items1;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      const tmpResult = channel(504);
      if (tmpResult.useStateFromStores(tmp5, tmp6, tmp7)) {
        if (unreadCount <= 0) {
          return null;
        } else {
          const isEstimatedResult = ReadStateStore.isEstimated(channel.id);
          const t = tmp(1126).t;
          const tmp9 = isEstimatedResult ? t.wvtbbG : t["BctFH/"];
          if (cResult[3] === tmp9) {
            if (cResult[4] === oldestUnreadTimestamp) {
              let tmp12;
              let tmp14;
              if (cResult[5] === unreadCount) {
                tmp12 = cResult[6];
              }
              if (cResult[7] !== tmp12) {
                let obj2 = { variant: "text-sm/semibold", color: "text-overlay-light", children: tmp12 };
                const tmp16 = closure_12(channel(4886).Text, obj2);
                cResult[7] = tmp12;
                cResult[8] = tmp16;
                tmp14 = tmp16;
              } else {
                tmp14 = cResult[8];
              }
              if (cResult[9] === handleScrollToNewMessages) {
                if (cResult[10] === tmp4.newMessageBarTextContainer) {
                  let tmp17;
                  let tmp20;
                  let tmp23;
                  if (cResult[11] === tmp14) {
                    tmp17 = cResult[12];
                  }
                  const _Symbol = Symbol;
                  const newMessageBarCloseButton = tmp4.newMessageBarCloseButton;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(1126).intl;
                    const stringResult = intl2.string(channel(1126).t.e6RscS);
                    cResult[13] = stringResult;
                    tmp20 = stringResult;
                  } else {
                    tmp20 = cResult[13];
                  }
                  if (cResult[14] !== channel.id) {
                    class L {
                      constructor() {
                        const obj = ReadStateActionCreators;
                        const obj2 = {
                          section: unpackModuleId.NEW_MESSAGES_BANNER,
                          object: constants.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: metroImportAll.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj2);
                      }
                    }
                    cResult[14] = channel.id;
                    cResult[15] = L;
                  } else {
                    class L {
                      constructor() {
                        const obj = ReadStateActionCreators;
                        const obj2 = {
                          section: unpackModuleId.NEW_MESSAGES_BANNER,
                          object: constants.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: metroImportAll.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj2);
                      }
                    }
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    class L {
                      constructor() {
                        const obj = ReadStateActionCreators;
                        const obj2 = {
                          section: unpackModuleId.NEW_MESSAGES_BANNER,
                          object: constants.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: metroImportAll.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj2);
                      }
                    }
                    const obj3 = { size: "sm", color: nativeDefault.colors.WHITE };
                    const XSmallBoldIcon = tmp(7632).XSmallBoldIcon;
                    const tmp25 = closure_12(XSmallBoldIcon, obj3);
                    cResult[16] = tmp25;
                    tmp23 = tmp25;
                  } else {
                    class L {
                      constructor() {
                        const obj = ReadStateActionCreators;
                        const obj2 = {
                          section: unpackModuleId.NEW_MESSAGES_BANNER,
                          object: constants.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: metroImportAll.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj2);
                      }
                    }
                  }
                  if (cResult[17] === tmp4.newMessageBarCloseButton) {
                    class L {
                      constructor() {
                        const obj = ReadStateActionCreators;
                        const obj2 = {
                          section: unpackModuleId.NEW_MESSAGES_BANNER,
                          object: constants.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: metroImportAll.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj2);
                      }
                    }
                    if (cResult[20] === tmp4.newMessageBar) {
                      class L {
                        constructor() {
                          const obj = ReadStateActionCreators;
                          const obj2 = {
                            section: unpackModuleId.NEW_MESSAGES_BANNER,
                            object: constants.MARK_CHANNEL_AS_READ_BUTTON,
                            objectType: metroImportAll.ACK_MANUAL,
                          };
                          return obj.ack(channel.id, obj2);
                        }
                      }
                    }
                    const obj4 = { style: tmp10, children: items2 };
                    items2 = [tmp17, tmp26];
                    cResult[20] = tmp4.newMessageBar;
                    cResult[21] = tmp26;
                    cResult[22] = tmp17;
                    cResult[23] = closure_13(closure_4, obj4);
                    const tmp32 = closure_13(closure_4, obj4);
                  }
                  const obj5 = {
                    style: newMessageBarCloseButton,
                    accessibilityRole: "button",
                    accessibilityLabel: tmp20,
                    onPress: L,
                    children: tmp23,
                  };
                  cResult[17] = tmp4.newMessageBarCloseButton;
                  cResult[18] = L;
                  cResult[19] = closure_12(channel(5909).PressableOpacity, obj5);
                  const tmp28 = closure_12(channel(5909).PressableOpacity, obj5);
                }
              }
              const obj6 = {
                accessibilityRole: "button",
                style: tmp11,
                onPress: handleScrollToNewMessages,
                children: tmp14,
              };
              const tmp19 = closure_12(channel(5909).PressableOpacity, obj6);
              cResult[9] = handleScrollToNewMessages;
              cResult[10] = tmp4.newMessageBarTextContainer;
              cResult[11] = tmp14;
              cResult[12] = tmp19;
              tmp17 = tmp19;
            }
          }
          const intl = tmp(1126).intl;
          const obj7 = { count: unreadCount, timestamp: oldestUnreadTimestamp };
          const formatResult = intl.format(tmp9, obj7);
          cResult[3] = tmp9;
          cResult[4] = oldestUnreadTimestamp;
          cResult[5] = unreadCount;
          cResult[6] = formatResult;
          tmp12 = formatResult;
        }
      } else {
        class L {
          constructor() {
            const obj = ReadStateActionCreators;
            const obj2 = {
              section: unpackModuleId.NEW_MESSAGES_BANNER,
              object: constants.MARK_CHANNEL_AS_READ_BUTTON,
              objectType: metroImportAll.ACK_MANUAL,
            };
            return obj.ack(channel.id, obj2);
          }
        }
        return null;
      }
    }
  : (channel) => {
      let Text;
      let XSmallBoldIcon;
      let connected;
      let handleScrollToNewMessages;
      let intl;
      let intl2;
      let items1;
      let obj4;
      let obj5;
      let obj7;
      let oldestUnreadTimestamp;
      channel = channel.channel;
      const unreadCount = channel.unreadCount;
      ({ oldestUnreadTimestamp, handleScrollToNewMessages } = channel);
      const tmp = closure_14();
      let obj = channel(504);
      const items = [GatewayConnectionStore];
      let tmp4 = null;
      if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
        let tmp5 = null;
        if (unreadCount > 0) {
          const isEstimatedResult = ReadStateStore.isEstimated(channel.id);
          const t = tmp2(1126).t;
          let obj2 = { style: tmp.newMessageBar, children: items1 };
          const obj3 = {
            accessibilityRole: "button",
            style: tmp.newMessageBarTextContainer,
            onPress: handleScrollToNewMessages,
            children: closure_12(Text, obj4),
          };
          const tmp8 = isEstimatedResult ? t.wvtbbG : t["BctFH/"];
          const PressableOpacity = tmp2(5909).PressableOpacity;
          obj4 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl.format(tmp8, obj5) };
          Text = tmp2(4886).Text;
          intl = tmp2(1126).intl;
          obj5 = { count: unreadCount, timestamp: oldestUnreadTimestamp };
          items1 = [closure_12(PressableOpacity, obj3)];
          const obj6 = {
            style: tmp.newMessageBarCloseButton,
            accessibilityRole: "button",
            accessibilityLabel: intl2.string(channel(1126).t.e6RscS),
            onPress() {
              const obj = ReadStateActionCreators;
              const obj2 = {
                section: unpackModuleId.NEW_MESSAGES_BANNER,
                object: constants.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: metroImportAll.ACK_MANUAL,
              };
              return obj.ack(channel.id, obj2);
            },
            children: closure_12(XSmallBoldIcon, obj7),
          };
          const PressableOpacity2 = tmp2(5909).PressableOpacity;
          intl2 = tmp2(1126).intl;
          obj7 = { size: "sm", color: nativeDefault.colors.WHITE };
          XSmallBoldIcon = tmp2(7632).XSmallBoldIcon;
          items1[1] = closure_12(PressableOpacity2, obj6);
          tmp5 = closure_13(closure_4, obj2);
        }
        tmp4 = tmp5;
      }
      return tmp4;
    };
const result = size.fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default tmp6;
export const OptInChannelBanner = tmp7;
