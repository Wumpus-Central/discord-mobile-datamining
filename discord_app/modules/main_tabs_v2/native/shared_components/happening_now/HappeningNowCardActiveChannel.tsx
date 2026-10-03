// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import router_utils from "../../../../routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ActiveChannelsStore from "../../../../guild_home/ActiveChannelsStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import TypingStore from "../../../../../stores/TypingStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const MAX_STORED_MESSAGES = fn(13516).MAX_STORED_MESSAGES;
let closure_10 = fn(15110).HappeningNowCardTrackingType;
const Constants = fn(1085);
({ AnalyticEvents: closure_11, Routes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let closure_15 = createStyles.createStyles({
  content: { flexShrink: 1, marginLeft: 4, gap: 2 },
  avatarsWrapper: { marginBottom: 2 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (index) => {
        const cResult = index(channelId[11]).c(45);
        index = index.index;
        const guildId = index.guildId;
        channelId = index.channelId;
        const panelVariant = index.panelVariant;
        let tmp4 = undefined !== panelVariant;
        if (tmp4) {
          tmp4 = panelVariant;
        }
        closure_15();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function _() {
            return ChannelStore.getChannel(channelId);
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        let obj = index(channelId[11]);
        const stateFromStores = index(channelId[12]).useStateFromStores(first, tmp8);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [TypingStore, UserStore];
          cResult[3] = items1;
          let tmp10 = items1;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== channelId) {
          const fn2 = function b() {
            const keys = SnowflakeUtilsDefault.keys(TypingStore.getTypingUsers(channelId));
            const mapped = keys.map((item) => user.getUser(item));
            return mapped.filter(GlobalUtils.isNotNullish)[0];
          };
          cResult[4] = channelId;
          cResult[5] = fn2;
          let tmp13 = fn2;
        } else {
          tmp13 = cResult[5];
        }
        const tmpResult = index(channelId[12]);
        const stateFromStores1 = index(channelId[12]).useStateFromStores(tmp10, tmp13);
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ActiveChannelsStore];
          cResult[6] = items2;
          let tmp15 = items2;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] !== channelId) {
          class F {
            constructor() {
              channelMessageData = closure_5.getChannelMessageData(channelId);
              if (channelMessageData == null) {
                channelMessageData = [];
              }
              return channelMessageData;
            }
          }
          cResult[7] = channelId;
          cResult[8] = F;
        } else {
          class F {
            constructor() {
              channelMessageData = closure_5.getChannelMessageData(channelId);
              if (channelMessageData == null) {
                channelMessageData = [];
              }
              return channelMessageData;
            }
          }
        }
        const tmpResult5 = index(channelId[12]);
        const stateFromStoresArray = index(channelId[12]).useStateFromStoresArray(tmp15, F);
        if (cResult[9] !== stateFromStoresArray) {
          class F {
            constructor() {
              channelMessageData = closure_5.getChannelMessageData(channelId);
              if (channelMessageData == null) {
                channelMessageData = [];
              }
              return channelMessageData;
            }
          }
          const obj5 = guildId(tmp2[15]);
          const arr4 = guildId(tmp2[15]);
          const found = obj5
            .uniq(guildId(tmp2[15]).map(stateFromStoresArray, "userId"))
            .filter(tmp(tmp2[14]).isNotNullish);
          cResult[9] = stateFromStoresArray;
          cResult[10] = found;
          const tmp19 = found;
          const uniqResult = obj5.uniq(guildId(tmp2[15]).map(stateFromStoresArray, "userId"));
        } else {
          class F {
            constructor() {
              channelMessageData = closure_5.getChannelMessageData(channelId);
              if (channelMessageData == null) {
                channelMessageData = [];
              }
              return channelMessageData;
            }
          }
        }
        const tmpResult6 = index(channelId[12]);
        const ensureHydratedGuildUsers = index(channelId[16]).useEnsureHydratedGuildUsers(guildId, tmp19);
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              channelMessageData = closure_5.getChannelMessageData(channelId);
              if (channelMessageData == null) {
                channelMessageData = [];
              }
              return channelMessageData;
            }
          }
          const items3 = [UserStore];
          cResult[11] = items3;
          const tmp22 = items3;
        } else {
          class F {
            constructor() {
              channelMessageData = closure_5.getChannelMessageData(channelId);
              if (channelMessageData == null) {
                channelMessageData = [];
              }
              return channelMessageData;
            }
          }
        }
        if (cResult[12] !== stateFromStoresArray) {
          class P {
            constructor() {
              obj = closure_1(closure_2[15]);
              arr = closure_1(closure_2[15]);
              uniqResult = obj.uniq(arr.map(closure_3, "userId"));
              mapped = uniqResult.map((item) => user.getUser(item));
              return mapped.filter(closure_0(closure_2[14]).isNotNullish);
            }
          }
          cResult[12] = stateFromStoresArray;
          cResult[13] = P;
        } else {
          class P {
            constructor() {
              obj = closure_1(closure_2[15]);
              arr = closure_1(closure_2[15]);
              uniqResult = obj.uniq(arr.map(closure_3, "userId"));
              mapped = uniqResult.map((item) => user.getUser(item));
              return mapped.filter(closure_0(closure_2[14]).isNotNullish);
            }
          }
        }
        const tmpResult7 = index(channelId[16]);
        const stateFromStoresArray1 = index(channelId[12]).useStateFromStoresArray(tmp22, P);
        if (cResult[14] === channelId) {
          class P {
            constructor() {
              obj = closure_1(closure_2[15]);
              arr = closure_1(closure_2[15]);
              uniqResult = obj.uniq(arr.map(closure_3, "userId"));
              mapped = uniqResult.map((item) => user.getUser(item));
              return mapped.filter(closure_0(closure_2[14]).isNotNullish);
            }
          }
        }
        const fn3 = function q() {
          AnalyticsUtilsDefault.track(constants.ACTIVITY_CARD_CLICKED, {
            order: index,
            guild_id: guildId,
            type: constants.ACTIVE_CHANNEL_CARD,
            destination_channel_id: channelId,
          });
          const obj2 = {
            order: index,
            guild_id: guildId,
            type: constants.ACTIVE_CHANNEL_CARD,
            destination_channel_id: channelId,
          };
          router_utils.transitionTo(__initData.CHANNEL(guildId, channelId));
        };
        cResult[14] = channelId;
        cResult[15] = guildId;
        cResult[16] = index;
        cResult[17] = fn3;
        const tmpResult8 = index(channelId[12]);
      }
    : (index) => {
        index = index.index;
        const guildId = index.guildId;
        const channelId = index.channelId;
        let flag = index.panelVariant;
        if (flag === undefined) {
          flag = false;
        }
        const tmp = closure_15();
        const items = [ChannelStore];
        const stateFromStores = index(channelId[12]).useStateFromStores(items, () =>
          ChannelStore.getChannel(channelId),
        );
        let obj = index(channelId[12]);
        const items1 = [TypingStore, UserStore];
        const stateFromStores1 = index(channelId[12]).useStateFromStores(items1, () => {
          const keys = SnowflakeUtilsDefault.keys(TypingStore.getTypingUsers(channelId));
          const mapped = keys.map((item) => user.getUser(item));
          return mapped.filter(GlobalUtils.isNotNullish)[0];
        });
        let obj2 = index(channelId[12]);
        const items2 = [ActiveChannelsStore];
        const stateFromStoresArray = index(channelId[12]).useStateFromStoresArray(items2, () => {
          let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
          if (channelMessageData == null) {
            channelMessageData = [];
          }
          return channelMessageData;
        });
        const items3 = [stateFromStoresArray];
        const memo = stateFromStoresArray.useMemo(() => {
          const obj = _modDef12;
          return obj.uniq(_modDef12.map(stateFromStoresArray, "userId")).filter(GlobalUtils.isNotNullish);
        }, items3);
        const obj3 = index(channelId[12]);
        const ensureHydratedGuildUsers = index(channelId[16]).useEnsureHydratedGuildUsers(guildId, memo);
        const obj4 = index(channelId[16]);
        const items4 = [UserStore];
        const stateFromStoresArray1 = index(channelId[12]).useStateFromStoresArray(items4, () => {
          const obj = _modDef12;
          const mapped = obj.uniq(_modDef12.map(stateFromStoresArray, "userId")).map((item) => user.getUser(item));
          return mapped.filter(GlobalUtils.isNotNullish);
        });
        const items5 = [channelId, index, guildId];
        const callback = stateFromStoresArray.useCallback(() => {
          AnalyticsUtilsDefault.track(constants.ACTIVITY_CARD_CLICKED, {
            order: index,
            guild_id: guildId,
            type: constants.ACTIVE_CHANNEL_CARD,
            destination_channel_id: channelId,
          });
          const obj2 = {
            order: index,
            guild_id: guildId,
            type: constants.ACTIVE_CHANNEL_CARD,
            destination_channel_id: channelId,
          };
          router_utils.transitionTo(__initData.CHANNEL(guildId, channelId));
        }, items5);
        if (null == stateFromStores) {
          return null;
        } else {
          if (stateFromStoresArray.length < MAX_STORED_MESSAGES) {
            const intl2 = tmp2(tmp3[20]).intl;
            const obj6 = { count: stateFromStoresArray.length };
            let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[20]).t.VdpclX, obj6);
          } else {
            const intl = tmp2(tmp3[20]).intl;
            formatToPlainStringResult = intl.string(tmp2(tmp3[20]).t.LCutYV);
          }
          const channelIconComponent = tmp2(tmp3[21]).getChannelIconComponent(stateFromStores);
          const obj7 = { onPress: callback, width: null, IconComponent: null, panelVariant: null, children: null };
          let str = "medium";
          const tmp2Result = tmp2(tmp3[21]);
          if (index.fullwidth) {
            str = "full";
          }
          obj7.width = str;
          obj7.IconComponent = channelIconComponent;
          obj7.panelVariant = flag;
          const obj8 = { style: tmp.content, children: null };
          const obj9 = { style: tmp.avatarsWrapper, children: null };
          const obj10 = {
            isTyping: null != stateFromStores1,
            userLimit: 3,
            users: stateFromStoresArray1,
            userCount: stateFromStoresArray1.length,
            guildId,
          };
          obj9.children = closure_13(tmp2(tmp3[22]).HappeningNowAvatarStack, obj10);
          const items6 = [closure_13(View, obj9), ,];
          const obj11 = { noMargin: stateFromStoresArray1.length > 0, children: formatToPlainStringResult };
          items6[1] = closure_13(tmp2(tmp3[23]).HappeningNowCardHeader, obj11);
          const obj12 = { children: tmp10 };
          items6[2] = closure_13(tmp2(tmp3[23]).HappeningNowCardSubtitle, obj12);
          obj8.children = items6;
          obj7.children = closure_14(View, obj8);
          return closure_13(tmp9(tmp3[23]), obj7);
        }
        const obj5 = index(channelId[12]);
        tmp9 = guildId;
      },
);
