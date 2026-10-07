// discord_app/modules/messages/native/ChatBanner.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ReadStateActionCreators from "../../../actions/ReadStateActionCreators.tsx";
import OptInChannelsActionCreators from "../../opt_in_channels/OptInChannelsActionCreators.tsx";
import ThreadActionCreatorsDefault from "../../threads/ThreadActionCreators.tsx";
import useShowChannelOptInNoticeDefault from "../../opt_in_channels/useShowChannelOptInNotice.tsx";
import useAllowedChatOverlaysDefault from "../useAllowedChatOverlays.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const ChatOverlays = fn(11091).ChatOverlays;
const Constants = fn(1085);
({
  AnalyticsObjectTypes: closure_8,
  AnalyticsObjects: closure_9,
  AnalyticEvents: c10,
  AnalyticsSections: closure_11,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  threadBannerContainer: {
    alignSelf: "stretch",
    minHeight: 60,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    flexGrow: 0,
    zIndex: 100,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  threadBannerTitle: { flex: 1, lineHeight: 18 },
  threadBannerButton: { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 },
  newMessageBar: null,
  newMessageBarTextContainer: null,
  newMessageBarCloseButton: null,
  optInChannelBannerContainer: null,
  topBorder: null,
  optInChannelBannerText: null,
  optInChannelBannerButtonContainer: null,
};
let obj3 = {
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
obj2.newMessageBar = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 100,
  minHeight: 45,
};
obj2.newMessageBarTextContainer = { flex: 1, paddingLeft: 16, paddingVertical: 10 };
obj2.newMessageBarCloseButton = { paddingHorizontal: 12 };
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 100,
  minHeight: 45,
};
obj2.optInChannelBannerContainer = {
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
let obj5 = {
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
obj2.topBorder = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.CHAT_BORDER };
obj2.optInChannelBannerText = { flex: 1 };
obj2.optInChannelBannerButtonContainer = { flexShrink: 0, marginLeft: 8 };
let closure_14 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.CHAT_BORDER };
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(22);
      channel = channel.channel;
      const ctaProps = channel.ctaProps;
      const tmp4 = closure_14();
      if (cResult[0] !== channel) {
        const fn = function l() {
          const obj2 = {};
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.banner_type = "channel_opt_in";
          obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
        };
        const items = [channel];
        cResult[0] = channel;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[3] !== channel) {
        const fn2 = function c() {
          const obj2 = {};
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.banner_type = "channel_opt_in";
          obj2.cta_type = "add channel";
          obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
          OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, {
            section: constants4.CHANNEL,
          });
        };
        cResult[3] = channel;
        cResult[4] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      let topBorder = null;
      if (channel.topBorder) {
        topBorder = tmp4.topBorder;
      }
      if (cResult[5] === tmp4.optInChannelBannerContainer) {
        if (cResult[6] === topBorder) {
          let tmp10 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.iOWmmB);
          cResult[8] = stringResult;
          let tmp12 = stringResult;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] !== tmp4.optInChannelBannerText) {
          let obj2 = { lineClamp: 2, style: tmp4.optInChannelBannerText, variant: "text-sm/semibold", children: tmp12 };
          const tmp16 = closure_12(tmp(4892).Text, obj2);
          cResult[9] = tmp4.optInChannelBannerText;
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t["TD/+zP"]);
          cResult[11] = stringResult1;
          let tmp17 = stringResult1;
        } else {
          tmp17 = cResult[11];
        }
        if (cResult[12] === ctaProps) {
          if (cResult[13] === tmp8) {
            let tmp19 = cResult[14];
          }
          if (cResult[15] === tmp4.optInChannelBannerButtonContainer) {
            if (cResult[16] === tmp19) {
              let tmp25 = cResult[17];
            }
            if (cResult[18] === tmp25) {
              if (cResult[19] === tmp10) {
                if (cResult[20] === tmp14) {
                  let tmp29 = cResult[21];
                }
                return tmp29;
              }
            }
            let obj3 = { style: tmp10, children: null };
            const items1 = [tmp14, tmp25];
            obj3.children = items1;
            const tmp32 = closure_13(closure_4, obj3);
            cResult[18] = tmp25;
            cResult[19] = tmp10;
            cResult[20] = tmp14;
            cResult[21] = tmp32;
            tmp29 = tmp32;
          }
          let obj4 = { style: tmp4.optInChannelBannerButtonContainer, children: tmp19 };
          const tmp28 = closure_12(closure_4, obj4);
          cResult[15] = tmp4.optInChannelBannerButtonContainer;
          cResult[16] = tmp19;
          cResult[17] = tmp28;
          tmp25 = tmp28;
        }
        const obj5 = {};
        let merged = Object.assign(ctaProps);
        obj5.onPress = tmp8;
        obj5.size = "sm";
        obj5.text = tmp17;
        const tmp24 = closure_12(tmp(5601).Button, obj5);
        cResult[12] = ctaProps;
        cResult[13] = tmp8;
        cResult[14] = tmp24;
        tmp19 = tmp24;
      }
      const items2 = [tmp4.optInChannelBannerContainer, topBorder];
      cResult[5] = tmp4.optInChannelBannerContainer;
      cResult[6] = topBorder;
      cResult[7] = items2;
      tmp10 = items2;
      let obj = channel(576);
    }
  : (channel) => {
      channel = channel.channel;
      const tmp = closure_14();
      const items = [channel];
      const effect = noop.useEffect(() => {
        const obj2 = {};
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
        const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj2.banner_type = "channel_opt_in";
        obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
      }, items);
      const items1 = [channel];
      const items2 = [tmp.optInChannelBannerContainer];
      let topBorder = null;
      const callback = noop.useCallback(() => {
        const obj2 = {};
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
        const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj2.banner_type = "channel_opt_in";
        obj2.cta_type = "add channel";
        obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
        OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, {
          section: constants4.CHANNEL,
        });
      }, items1);
      if (channel.topBorder) {
        topBorder = tmp.topBorder;
      }
      let obj = { style: items2, children: null };
      items2[1] = topBorder;
      let obj2 = { lineClamp: 2, style: tmp.optInChannelBannerText, variant: "text-sm/semibold", children: null };
      const intl = channel(1126).intl;
      obj2.children = intl.string(channel(1126).t.iOWmmB);
      const items3 = [closure_12(channel(4892).Text, obj2)];
      let obj3 = { style: tmp.optInChannelBannerButtonContainer, children: null };
      let obj4 = {};
      let merged = Object.assign(channel.ctaProps);
      obj4.onPress = callback;
      obj4.size = "sm";
      const intl2 = channel(1126).intl;
      obj4.text = intl2.string(channel(1126).t["TD/+zP"]);
      obj3.children = closure_12(channel(5601).Button, obj4);
      items3[1] = closure_12(closure_4, obj3);
      obj.children = items3;
      return closure_13(closure_4, obj);
    };
let closure_15 = tmp6;
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(18);
      channel = channel.channel;
      const tmp4 = closure_14();
      if (cResult[0] !== channel) {
        const fn = function l() {
          const obj2 = {};
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.banner_type = "thread";
          obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
        };
        const items = [channel];
        cResult[0] = channel;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[3] !== channel) {
        const fn2 = function c() {
          const obj2 = {};
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.banner_type = "thread";
          obj2.cta_type = "unarchive";
          obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
          ThreadActionCreatorsDefault.unarchiveThread(channel, false);
        };
        cResult[3] = channel;
        cResult[4] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      let obj = channel(576);
      const canUnarchiveThread = channel(6782).useCanUnarchiveThread(channel);
      if (cResult[5] !== channel) {
        const intl = tmp(1126).intl;
        const string = intl.string;
        let t = tmp(1126).t;
        if (isForumPostResult) {
          t = t["833FDn"];
          let stringResult = string(t);
        } else {
          stringResult = string(t.rEeodK);
        }
        cResult[5] = channel;
        cResult[6] = stringResult;
        isForumPostResult = channel.isForumPost();
      } else {
        if (cResult[7] === tmp4.threadBannerTitle) {
          if (cResult[8] === tmp10) {
            let tmp15 = cResult[9];
          }
          if (cResult[10] === canUnarchiveThread) {
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp4.threadBannerButton) {
                let tmp18 = cResult[13];
              }
              if (cResult[14] === tmp4.threadBannerContainer) {
                if (cResult[15] === tmp15) {
                  if (cResult[16] === tmp18) {
                    let tmp22 = cResult[17];
                  }
                  return tmp22;
                }
              }
              let obj2 = { style: tmp4.threadBannerContainer, children: null };
              const items1 = [tmp15, tmp18];
              obj2.children = items1;
              const tmp25 = closure_13(closure_4, obj2);
              cResult[14] = tmp4.threadBannerContainer;
              cResult[15] = tmp15;
              cResult[16] = tmp18;
              cResult[17] = tmp25;
              tmp22 = tmp25;
            }
          }
          let tmp19 = canUnarchiveThread;
          if (canUnarchiveThread) {
            let obj3 = { style: tmp4.threadBannerButton, children: null };
            let obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
            const intl2 = tmp(1126).intl;
            obj4.text = intl2.string(tmp(1126).t["0dvvEi"]);
            obj4.onPress = tmp8;
            obj3.children = closure_12(tmp(5601).Button, obj4);
            tmp19 = closure_12(closure_4, obj3);
          }
          cResult[10] = canUnarchiveThread;
          cResult[11] = tmp8;
          cResult[12] = tmp4.threadBannerButton;
          cResult[13] = tmp19;
          tmp18 = tmp19;
        }
        const obj5 = {
          lineClamp: 4,
          style: tmp4.threadBannerTitle,
          variant: "text-sm/medium",
          color: "text-default",
          children: cResult[6],
        };
        const tmp17 = closure_12(tmp(4892).Text, obj5);
        cResult[7] = tmp4.threadBannerTitle;
        cResult[8] = cResult[6];
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
      const tmpResult = channel(6782);
    }
  : (channel) => {
      channel = channel.channel;
      const tmp = closure_14();
      const items = [channel];
      const effect = noop.useEffect(() => {
        const obj2 = {};
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
        const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj2.banner_type = "thread";
        obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
      }, items);
      let canUnarchiveThread = channel(6782).useCanUnarchiveThread(channel);
      let obj2 = { style: tmp.threadBannerContainer, children: null };
      let obj3 = {
        lineClamp: 4,
        style: tmp.threadBannerTitle,
        variant: "text-sm/medium",
        color: "text-default",
        children: null,
      };
      let obj = channel(6782);
      const intl = channel(1126).intl;
      const string = intl.string;
      const t = channel(1126).t;
      if (isForumPostResult) {
        let stringResult = string(t["833FDn"]);
      } else {
        stringResult = string(t.rEeodK);
      }
      obj3.children = stringResult;
      const items1 = [closure_12(channel(4892).Text, obj3)];
      if (canUnarchiveThread) {
        let obj4 = { style: tmp.threadBannerButton, children: null };
        const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl2 = tmp3(1126).intl;
        obj5.text = intl2.string(tmp3(1126).t["0dvvEi"]);
        obj5.onPress = function onPress() {
          const obj2 = {};
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.banner_type = "thread";
          obj2.cta_type = "unarchive";
          obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
          ThreadActionCreatorsDefault.unarchiveThread(channel, false);
        };
        obj4.children = closure_12(tmp3(5601).Button, obj5);
        canUnarchiveThread = closure_12(closure_4, obj4);
      }
      items1[1] = canUnarchiveThread;
      obj2.children = items1;
      return closure_13(closure_4, obj2);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(18);
      channel = channel.channel;
      const tmp4 = closure_14();
      if (cResult[0] !== channel) {
        const fn = function l() {
          const obj2 = {};
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.banner_type = "thread";
          obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
        };
        const items = [channel];
        cResult[0] = channel;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[3] !== channel) {
        const fn2 = function c() {
          const obj2 = {};
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.banner_type = "thread";
          obj2.cta_type = "unlock";
          obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
          ThreadActionCreatorsDefault.unlockThread(channel);
        };
        cResult[3] = channel;
        cResult[4] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      let obj = channel(576);
      const isThreadModerator = channel(6782).useIsThreadModerator(channel);
      if (cResult[5] !== channel) {
        const intl = tmp(1126).intl;
        const string = intl.string;
        let E7oO8u = tmp(1126).t;
        if (isForumPostResult) {
          E7oO8u = E7oO8u.E7oO8u;
          let stringResult = string(E7oO8u);
        } else {
          stringResult = string(E7oO8u["V/JF2N"]);
        }
        cResult[5] = channel;
        cResult[6] = stringResult;
        isForumPostResult = channel.isForumPost();
      } else {
        if (cResult[7] === tmp4.threadBannerTitle) {
          if (cResult[8] === tmp10) {
            let tmp14 = cResult[9];
          }
          if (cResult[10] === tmp8) {
            if (cResult[11] === isThreadModerator) {
              if (cResult[12] === tmp4.threadBannerButton) {
                let tmp17 = cResult[13];
              }
              if (cResult[14] === tmp4.threadBannerContainer) {
                if (cResult[15] === tmp14) {
                  if (cResult[16] === tmp17) {
                    let tmp21 = cResult[17];
                  }
                  return tmp21;
                }
              }
              let obj2 = { style: tmp4.threadBannerContainer, children: null };
              const items1 = [tmp14, tmp17];
              obj2.children = items1;
              const tmp24 = closure_13(closure_4, obj2);
              cResult[14] = tmp4.threadBannerContainer;
              cResult[15] = tmp14;
              cResult[16] = tmp17;
              cResult[17] = tmp24;
              tmp21 = tmp24;
            }
          }
          let tmp18 = isThreadModerator;
          if (isThreadModerator) {
            let obj3 = { style: tmp4.threadBannerButton, children: null };
            let obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
            const intl2 = tmp(1126).intl;
            obj4.text = intl2.string(tmp(1126).t.zA9d1J);
            obj4.onPress = tmp8;
            obj3.children = closure_12(tmp(5601).Button, obj4);
            tmp18 = closure_12(closure_4, obj3);
          }
          cResult[10] = tmp8;
          cResult[11] = isThreadModerator;
          cResult[12] = tmp4.threadBannerButton;
          cResult[13] = tmp18;
          tmp17 = tmp18;
        }
        const obj5 = {
          lineClamp: 4,
          style: tmp4.threadBannerTitle,
          variant: "text-sm/medium",
          color: "text-default",
          children: cResult[6],
        };
        const tmp16 = closure_12(tmp(4892).Text, obj5);
        cResult[7] = tmp4.threadBannerTitle;
        cResult[8] = cResult[6];
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      const tmpResult = channel(6782);
    }
  : (channel) => {
      channel = channel.channel;
      const tmp = closure_14();
      const items = [channel];
      const effect = noop.useEffect(() => {
        const obj2 = {};
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
        const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj2.banner_type = "thread";
        obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
      }, items);
      let isThreadModerator = channel(6782).useIsThreadModerator(channel);
      let obj2 = { style: tmp.threadBannerContainer, children: null };
      let obj3 = {
        lineClamp: 4,
        style: tmp.threadBannerTitle,
        variant: "text-sm/medium",
        color: "text-default",
        children: null,
      };
      let obj = channel(6782);
      const intl = channel(1126).intl;
      const string = intl.string;
      const t = channel(1126).t;
      if (isForumPostResult) {
        let stringResult = string(t.E7oO8u);
      } else {
        stringResult = string(t["V/JF2N"]);
      }
      obj3.children = stringResult;
      const items1 = [closure_12(channel(4892).Text, obj3)];
      if (isThreadModerator) {
        let obj4 = { style: tmp.threadBannerButton, children: null };
        const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl2 = tmp3(1126).intl;
        obj5.text = intl2.string(tmp3(1126).t.zA9d1J);
        obj5.onPress = function onPress() {
          const obj2 = {};
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
          const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
          obj2.banner_type = "thread";
          obj2.cta_type = "unlock";
          obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
          ThreadActionCreatorsDefault.unlockThread(channel);
        };
        obj4.children = closure_12(tmp3(5601).Button, obj5);
        isThreadModerator = closure_12(closure_4, obj4);
      }
      items1[1] = isThreadModerator;
      obj2.children = items1;
      return closure_13(closure_4, obj2);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(24);
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
      const obj = channel(576);
      if (tmpResult.useStateFromStores(tmp5, tmp6, tmp7)) {
        if (unreadCount <= 0) {
          return null;
        } else {
          const t = tmp(1126).t;
          const tmp9 = ReadStateStore.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"];
          if (cResult[3] === tmp9) {
            if (cResult[4] === oldestUnreadTimestamp) {
              if (cResult[5] === unreadCount) {
                let tmp12 = cResult[6];
              }
              if (cResult[7] !== tmp12) {
                const obj2 = { variant: "text-sm/semibold", color: "text-overlay-light", children: tmp12 };
                const tmp16 = closure_12(tmp(4892).Text, obj2);
                cResult[7] = tmp12;
                cResult[8] = tmp16;
                let tmp14 = tmp16;
              } else {
                tmp14 = cResult[8];
              }
              if (cResult[9] === handleScrollToNewMessages) {
                if (cResult[10] === tmp4.newMessageBarTextContainer) {
                  if (cResult[11] === tmp14) {
                    let tmp17 = cResult[12];
                  }
                  const _Symbol = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(1126).intl;
                    const stringResult = intl2.string(tmp(1126).t.e6RscS);
                    cResult[13] = stringResult;
                    let tmp20 = stringResult;
                  } else {
                    tmp20 = cResult[13];
                  }
                  if (cResult[14] !== channel.id) {
                    class L {
                      constructor() {
                        obj = closure_0(closure_2[24]);
                        obj1 = {
                          section: AnalyticsSections.NEW_MESSAGES_BANNER,
                          object: AnalyticsObjects.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: AnalyticsObjectTypes.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj1);
                      }
                    }
                    cResult[14] = channel.id;
                    cResult[15] = L;
                  } else {
                    class L {
                      constructor() {
                        obj = closure_0(closure_2[24]);
                        obj1 = {
                          section: AnalyticsSections.NEW_MESSAGES_BANNER,
                          object: AnalyticsObjects.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: AnalyticsObjectTypes.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj1);
                      }
                    }
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    class L {
                      constructor() {
                        obj = closure_0(closure_2[24]);
                        obj1 = {
                          section: AnalyticsSections.NEW_MESSAGES_BANNER,
                          object: AnalyticsObjects.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: AnalyticsObjectTypes.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj1);
                      }
                    }
                    const obj3 = { size: "sm", color: nativeDefault.colors.WHITE };
                    const tmp25 = closure_12(tmp(7643).XSmallBoldIcon, obj3);
                    cResult[16] = tmp25;
                    const tmp23 = tmp25;
                  } else {
                    class L {
                      constructor() {
                        obj = closure_0(closure_2[24]);
                        obj1 = {
                          section: AnalyticsSections.NEW_MESSAGES_BANNER,
                          object: AnalyticsObjects.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: AnalyticsObjectTypes.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj1);
                      }
                    }
                  }
                  if (cResult[17] === tmp4.newMessageBarCloseButton) {
                    class L {
                      constructor() {
                        obj = closure_0(closure_2[24]);
                        obj1 = {
                          section: AnalyticsSections.NEW_MESSAGES_BANNER,
                          object: AnalyticsObjects.MARK_CHANNEL_AS_READ_BUTTON,
                          objectType: AnalyticsObjectTypes.ACK_MANUAL,
                        };
                        return obj.ack(channel.id, obj1);
                      }
                    }
                    if (cResult[20] === tmp4.newMessageBar) {
                      class L {
                        constructor() {
                          obj = closure_0(closure_2[24]);
                          obj1 = {
                            section: AnalyticsSections.NEW_MESSAGES_BANNER,
                            object: AnalyticsObjects.MARK_CHANNEL_AS_READ_BUTTON,
                            objectType: AnalyticsObjectTypes.ACK_MANUAL,
                          };
                          return obj.ack(channel.id, obj1);
                        }
                      }
                    }
                    const obj4 = { style: tmp10, children: null };
                    const items2 = [tmp17, tmp26];
                    obj4.children = items2;
                    const tmp32 = closure_13(closure_4, obj4);
                    cResult[20] = tmp4.newMessageBar;
                    cResult[21] = tmp26;
                    cResult[22] = tmp17;
                    cResult[23] = tmp32;
                  }
                  const obj5 = {
                    style: tmp4.newMessageBarCloseButton,
                    accessibilityRole: "button",
                    accessibilityLabel: tmp20,
                    onPress: L,
                    children: tmp23,
                  };
                  const tmp28 = closure_12(tmp(5916).PressableOpacity, obj5);
                  cResult[17] = tmp4.newMessageBarCloseButton;
                  cResult[18] = L;
                  cResult[19] = tmp28;
                }
              }
              const obj6 = {
                accessibilityRole: "button",
                style: tmp11,
                onPress: handleScrollToNewMessages,
                children: tmp14,
              };
              const tmp19 = closure_12(tmp(5916).PressableOpacity, obj6);
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
          const isEstimatedResult = ReadStateStore.isEstimated(channel.id);
        }
      } else {
        class L {
          constructor() {
            obj = closure_0(closure_2[24]);
            obj1 = {
              section: AnalyticsSections.NEW_MESSAGES_BANNER,
              object: AnalyticsObjects.MARK_CHANNEL_AS_READ_BUTTON,
              objectType: AnalyticsObjectTypes.ACK_MANUAL,
            };
            return obj.ack(channel.id, obj1);
          }
        }
        return null;
      }
      tmpResult = channel(504);
    }
  : (channel) => {
      channel = channel.channel;
      ({ unreadCount, handleScrollToNewMessages } = channel);
      let stringResult = closure_14();
      let XSmallBoldIcon = channel;
      let WHITE = dependencyMap;
      const items = [GatewayConnectionStore];
      let tmp2 = null;
      if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
        if (unreadCount <= 0) {
          tmp2 = null;
        } else {
          XSmallBoldIcon(1126).t;
          const isEstimatedResult = ReadStateStore.isEstimated(channel.id);
          const t = { style: stringResult.newMessageBar, children: null };
          const obj2 = {
            accessibilityRole: "button",
            style: stringResult.newMessageBarTextContainer,
            onPress: handleScrollToNewMessages,
            children: null,
          };
          const obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
          const intl = XSmallBoldIcon(1126).intl;
          const obj4 = { count: unreadCount, timestamp: channel.oldestUnreadTimestamp };
          obj3.children = intl.format(ReadStateStore.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"], obj4);
          obj2.children = closure_12(XSmallBoldIcon(4892).Text, obj3);
          const items1 = [closure_12(XSmallBoldIcon(5916).PressableOpacity, obj2)];
          handleScrollToNewMessages = XSmallBoldIcon(5916).PressableOpacity;
          const obj5 = {
            style: stringResult.newMessageBarCloseButton,
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            children: null,
          };
          const intl2 = XSmallBoldIcon(1126).intl;
          stringResult = intl2.string(XSmallBoldIcon(1126).t.e6RscS);
          obj5.accessibilityLabel = stringResult;
          obj5.onPress = function onPress() {
            return ReadStateActionCreators.ack(channel.id, {
              section: constants4.NEW_MESSAGES_BANNER,
              object: constants2.MARK_CHANNEL_AS_READ_BUTTON,
              objectType: constants.ACK_MANUAL,
            });
          };
          XSmallBoldIcon = XSmallBoldIcon(7643).XSmallBoldIcon;
          const obj6 = { size: "sm", color: null };
          WHITE = nativeDefault.colors.WHITE;
          obj6.color = WHITE;
          obj5.children = closure_12(XSmallBoldIcon, obj6);
          items1[1] = closure_12(handleScrollToNewMessages, obj5);
          t.children = items1;
          closure_13(closure_4, t);
          const tmp6 = ReadStateStore.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"];
        }
      }
      return tmp2;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(15);
      channel = channel.channel;
      const handleScrollToNewMessages = channel.handleScrollToNewMessages;
      let obj = channel(576);
      const tmp = channel;
      let obj2 = useAllowedChatOverlaysDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function l() {
          let oldestUnreadTimestamp = ReadStateStore.getOldestUnreadTimestamp(channel.id);
          const obj = { unreadCount: ReadStateStore.getUnreadCount(channel.id), oldestUnreadTimestamp: null };
          if (0 === oldestUnreadTimestamp) {
            oldestUnreadTimestamp = SnowflakeUtilsDefault.extractTimestamp(channel.id);
          }
          obj.oldestUnreadTimestamp = oldestUnreadTimestamp;
          return obj;
        };
        const items1 = [channel.id];
        cResult[1] = channel.id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmp4 = useShowChannelOptInNoticeDefault(channel);
      const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp7, tmp8);
      ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
      if (channel.isArchivedLockedThread()) {
        if (cResult[4] !== channel) {
          const obj3 = { channel };
          const tmp31 = closure_12(closure_16, obj3);
          cResult[4] = channel;
          cResult[5] = tmp31;
        }
      } else if (channel.isLockedThread()) {
        if (cResult[6] !== channel) {
          const obj4 = { channel };
          const tmp26 = closure_12(closure_17, obj4);
          cResult[6] = channel;
          cResult[7] = tmp26;
        }
      } else {
        if (unreadCount > 0) {
          if (obj2.includes(ChatOverlays.NEW_MESSAGES)) {
            if (cResult[8] === channel) {
              if (cResult[9] === handleScrollToNewMessages) {
                if (cResult[10] === oldestUnreadTimestamp) {
                }
              }
            }
            const obj5 = { unreadCount, oldestUnreadTimestamp, channel, handleScrollToNewMessages };
            const tmp21 = closure_12(closure_18, obj5);
            cResult[8] = channel;
            cResult[9] = handleScrollToNewMessages;
            cResult[10] = oldestUnreadTimestamp;
            cResult[11] = unreadCount;
            cResult[12] = tmp21;
          }
        }
        let tmp11 = null;
        if (tmp4) {
          tmp11 = null;
          if (obj2.includes(ChatOverlays.OPT_IN_CHANNEL)) {
            if (cResult[13] !== channel) {
              const obj6 = { channel };
              const tmp16 = closure_12(closure_15, obj6);
              cResult[13] = channel;
              cResult[14] = tmp16;
            }
          }
        }
        return tmp11;
      }
      const tmpResult = tmp(504);
    }
  : (channel) => {
      channel = channel.channel;
      let obj = useAllowedChatOverlaysDefault();
      const tmp = useShowChannelOptInNoticeDefault(channel);
      const items = [ReadStateStore];
      const items1 = [channel.id];
      const stateFromStoresObject = channel(504).useStateFromStoresObject(
        items,
        () => {
          let oldestUnreadTimestamp = ReadStateStore.getOldestUnreadTimestamp(channel.id);
          const obj = { unreadCount: ReadStateStore.getUnreadCount(channel.id), oldestUnreadTimestamp: null };
          if (0 === oldestUnreadTimestamp) {
            oldestUnreadTimestamp = SnowflakeUtilsDefault.extractTimestamp(channel.id);
          }
          obj.oldestUnreadTimestamp = oldestUnreadTimestamp;
          return obj;
        },
        items1,
      );
      ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
      if (channel.isArchivedLockedThread()) {
        const obj3 = { channel };
        let tmp4 = closure_12(closure_16, obj3);
      } else if (channel.isLockedThread()) {
        const obj4 = { channel };
        tmp4 = closure_12(closure_17, obj4);
      } else {
        if (unreadCount > 0) {
          if (obj.includes(ChatOverlays.NEW_MESSAGES)) {
            const obj5 = {
              unreadCount,
              oldestUnreadTimestamp,
              channel,
              handleScrollToNewMessages: channel.handleScrollToNewMessages,
            };
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
export const OptInChannelBanner = tmp6;
