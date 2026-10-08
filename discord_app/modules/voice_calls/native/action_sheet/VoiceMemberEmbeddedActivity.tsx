// discord_app/modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import handlePressJoinActivityDefault from "../../../activities/handlePressJoinActivity.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(6830).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const XSMALL = fn(1200).AvatarSizes.XSMALL;
const androidRippleConfig = fn(1204).getThemedRippleConfig({ foreground: true });
let size = { width: 32, height: 32, marginRight: 16, borderRadius: 4 };
let c13 = 1.7777777777777777;
const createStyles = fn(5090);
let obj = {
  voiceMemberItemRow: {
    paddingTop: 12,
    paddingBottom: 16,
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-start",
  },
  innerRow: { paddingHorizontal: 16, alignItems: "center" },
  activityDetails: { marginBottom: 8, flexDirection: "row", display: "flex" },
  appIcon: size,
  appIconPlaceholder: null,
  centerGroup: null,
  applicationName: null,
  joinButton: null,
  joinButtonPill: null,
  joinButtonContainer: null,
  overflow: null,
  overflowBackgroundColor: null,
  overflowBackgroundColorActionSheet: null,
};
let obj3 = {};
const merged = Object.assign(size);
obj3.tintColor = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj.appIconPlaceholder = obj3;
obj.centerGroup = { flex: 1, paddingRight: 4 };
obj.applicationName = { lineHeight: 20 };
obj.joinButton = { alignSelf: "center" };
obj.joinButtonPill = { borderRadius: 100, paddingHorizontal: 24 };
obj.joinButtonContainer = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: "100%",
  paddingHorizontal: 16,
};
obj.overflow = { height: fn(1200).AVATAR_SIZE_MAP[XSMALL] };
let obj4 = { height: fn(1200).AVATAR_SIZE_MAP[XSMALL] };
obj.overflowBackgroundColor = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj.overflowBackgroundColorActionSheet = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_14 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
function calculateActivityRowHeight(bound) {
  return 40 + (bound - 32) / c13 + 12 + 16;
}
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceMemberEmbeddedActivity(onItemPress) {
      const cResult = channelId(application[13]).c(97);
      ({ embeddedActivity, channelId } = onItemPress);
      onItemPress = onItemPress.onItemPress;
      closure_14();
      if (cResult[0] !== embeddedActivity.applicationId) {
        const items = [embeddedActivity.applicationId];
        cResult[0] = embeddedActivity.applicationId;
        cResult[1] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      application = stateFromStores(onItemPress(tmp2[14])(tmp5), 1)[0];
      if (cResult[2] !== embeddedActivity.userIds) {
        const _Array = Array;
        const mapped = Array.from(embeddedActivity.userIds).map((item) => handleCanJoin.getUser(item));
        let found = mapped.filter(channelId(tmp2[15]).isNotNullish);
        cResult[2] = embeddedActivity.userIds;
        cResult[3] = found;
        const arr = Array.from(embeddedActivity.userIds);
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [embeddedActivityJoinability];
        cResult[4] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== channelId) {
        class E {
          constructor() {
            return closure_6.getChannel(channelId);
          }
        }
        cResult[5] = channelId;
        cResult[6] = E;
      } else {
        class E {
          constructor() {
            return closure_6.getChannel(channelId);
          }
        }
      }
      let obj = channelId(application[13]);
      const tmp6 = onItemPress;
      stateFromStores = channelId(application[16]).useStateFromStores(tmp11, E);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return closure_6.getChannel(channelId);
          }
        }
        const items2 = [embeddedActivityLocationGuildId];
        cResult[7] = items2;
        const tmp15 = items2;
      } else {
        class E {
          constructor() {
            return closure_6.getChannel(channelId);
          }
        }
      }
      if (application != null) {
        class E {
          constructor() {
            return closure_6.getChannel(channelId);
          }
        }
      }
      if (cResult[8] === undefined) {
        class E {
          constructor() {
            return closure_6.getChannel(channelId);
          }
        }
        const stateFromStores1 = channelId(tmp2[16]).useStateFromStores(tmp15, T);
        if (cResult[11] !== embeddedActivity.location) {
          class E {
            constructor() {
              return closure_6.getChannel(channelId);
            }
          }
          embeddedActivityLocationGuildId = obj4.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
          cResult[11] = embeddedActivity.location;
          cResult[12] = embeddedActivityLocationGuildId;
          const tmp17 = embeddedActivityLocationGuildId;
        } else {
          class E {
            constructor() {
              return closure_6.getChannel(channelId);
            }
          }
        }
        embeddedActivityLocationGuildId = tmp17;
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              return closure_6.getChannel(channelId);
            }
          }
          const currentUser = UserStore.getCurrentUser();
          if (currentUser != null) {
            class E {
              constructor() {
                return closure_6.getChannel(channelId);
              }
            }
          }
          cResult[13] = undefined;
        } else {
          class E {
            constructor() {
              return closure_6.getChannel(channelId);
            }
          }
        }
        if (cResult[14] === application) {
          class E {
            constructor() {
              return closure_6.getChannel(channelId);
            }
          }
          embeddedActivityJoinability = channelId(tmp2[18]).useEmbeddedActivityJoinability(tmp22);
          const _Math = Math;
          const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp6(tmp2[19])().width);
          if (cResult[17] !== bound) {
            class E {
              constructor() {
                return closure_6.getChannel(channelId);
              }
            }
            const sum = 40 + (bound - 32) / c13 + 12 + 16;
            cResult[17] = bound;
            cResult[18] = sum;
          } else {
            class E {
              constructor() {
                return closure_6.getChannel(channelId);
              }
            }
          }
          if (null != application) {
            class E {
              constructor() {
                return closure_6.getChannel(channelId);
              }
            }
          }
          return null;
        }
        let obj2 = { userId: tmp19, channelId, application };
        cResult[14] = application;
        cResult[15] = channelId;
        cResult[16] = obj2;
        tmp22 = obj2;
        const tmpResult3 = channelId(tmp2[16]);
      }
      if (application != null) {
        class E {
          constructor() {
            return closure_6.getChannel(channelId);
          }
        }
      }
      class T {
        constructor() {
          found = null;
          if (null != closure_3) {
            tmp3 = closure_5;
            embeddedActivitiesForChannel = closure_5.getEmbeddedActivitiesForChannel(tmp.id);
            found = embeddedActivitiesForChannel.find((applicationId) => {
              id = undefined;
              if (id != null) {
                id = id.id;
              }
              return applicationId.applicationId === id;
            });
          }
          return found;
        }
      }
      cResult[8] = undefined;
      cResult[9] = stateFromStores;
      cResult[10] = T;
      const tmpResult = channelId(application[16]);
    }
  : function VoiceMemberEmbeddedActivity(onItemPress) {
      ({ embeddedActivity, channelId } = onItemPress);
      onItemPress = onItemPress.onItemPress;
      let application;
      _slicedToArray = undefined;
      let guildId;
      let embeddedActivityJoinability;
      function handleCanJoin() {
        onItemPress(closure_3, first, stateFromStores);
      }
      const tmp = closure_14();
      const items = [embeddedActivity.applicationId];
      application = _slicedToArray(onItemPress(application[14])(items), 1)[0];
      const mapped = Array.from(embeddedActivity.userIds).map((item) => handleCanJoin.getUser(item));
      let found = mapped.filter(channelId(application[15]).isNotNullish);
      const arr = Array.from(embeddedActivity.userIds);
      const items1 = [embeddedActivityJoinability];
      _slicedToArray = channelId(application[16]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
      let obj2 = channelId(application[16]);
      const items2 = [guildId];
      const stateFromStores = channelId(application[16]).useStateFromStores(items2, () => {
        let found = null;
        if (null != closure_3) {
          const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp.id);
          found = embeddedActivitiesForChannel.find((applicationId) => {
            id = undefined;
            if (id != null) {
              id = id.id;
            }
            return applicationId.applicationId === id;
          });
        }
        return found;
      });
      const obj3 = channelId(application[16]);
      guildId = channelId(application[17]).getEmbeddedActivityLocationGuildId(embeddedActivity.location);
      const obj4 = channelId(application[17]);
      const currentUser = handleCanJoin.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      embeddedActivityJoinability = channelId(application[18]).useEmbeddedActivityJoinability({
        userId: id,
        channelId,
        application,
      });
      const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp2(tmp3[19])().width);
      if (null != application) {
        if (null != stateFromStores) {
          let iconSource = application.getIconSource(32);
          if (iconSource == null) {
            iconSource = tmp2(tmp3[20]);
          }
          const name = application.name;
          const diff = bound - 32;
          const sum = 40 + tmp11 / c13 + 12 + 16;
          let obj = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            androidRippleConfig: null,
            onPress: null,
            children: null,
          };
          const intl = channelId(tmp3[22]).intl;
          const obj6 = { applicationName: name };
          obj.accessibilityLabel = intl.formatToPlainString(channelId(tmp3[22]).t.Yw5Hr2, obj6);
          obj.androidRippleConfig = androidRippleConfig;
          obj.onPress = function onPress() {
            handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
          };
          const obj7 = { style: null, children: null };
          const items3 = [tmp.voiceMemberItemRow];
          const obj8 = { height: sum };
          items3[1] = obj8;
          obj7.style = items3;
          const obj9 = { style: null, children: null };
          const items4 = [,];
          ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
          obj9.style = items4;
          const obj10 = {
            style: iconSource === tmp2(tmp3[20]) ? tmp.appIconPlaceholder : tmp.appIcon,
            source: iconSource,
          };
          const items5 = [closure_9(tmp2(tmp3[23]), obj10), ,];
          const obj11 = { style: tmp.centerGroup, children: null };
          const obj12 = {
            style: tmp.applicationName,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: name,
          };
          obj11.children = closure_9(channelId(tmp3[24]).Text, obj12);
          items5[1] = closure_9(stateFromStores, obj11);
          const items6 = [tmp.overflow];
          const result = diff / c13;
          const obj13 = {
            offsetAmount: -6,
            overflowStyle: null,
            overflowComponent: null,
            items: null,
            max: 5,
            renderItem: null,
          };
          items6[1] = onItemPress.isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor;
          obj13.overflowStyle = items6;
          obj13.overflowComponent = channelId(tmp3[9]).OverflowText;
          obj13.items = found;
          obj13.renderItem = function renderItem(user, arg1) {
            const obj = { user, guildId, size: XSMALL, cutout: null };
            let tmp5;
            if (!arg1) {
              const obj2 = {
                radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3,
                direction: native.CutoutDirection.RIGHT,
                inset: -6,
              };
              tmp5 = obj2;
            }
            obj.cutout = tmp5;
            return options(native.CutoutableAvatarImage, obj);
          };
          items5[2] = closure_9(channelId(tmp3[9]).SummarizedIconRow, obj13);
          obj9.children = items5;
          const items7 = [closure_10(stateFromStores, obj9)];
          const obj14 = { style: null, children: null };
          const items8 = [tmp.innerRow];
          const obj15 = { height: result, justifyContent: "center" };
          items8[1] = obj15;
          obj14.style = items8;
          const obj16 = { application, dimensionsStyle: null, borderRadius: 8, resizeMode: "contain" };
          const size = { position: "absolute", width: diff, height: result };
          obj16.dimensionsStyle = size;
          const items9 = [closure_9(tmp2(tmp3[25]), obj16)];
          const obj17 = { style: tmp.joinButtonContainer, children: null };
          let tmp16Result = null;
          if (embeddedActivityJoinability === channelId(tmp3[18]).EmbeddedActivityJoinability.CAN_JOIN) {
            const obj18 = {
              onPress() {
                handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
              },
              style: null,
              pillStyle: null,
              text: null,
              variant: "secondary",
              size: "sm",
              shrink: true,
            };
            ({ joinButton: obj20.style, joinButtonPill: obj20.pillStyle } = tmp);
            const intl2 = channelId(tmp3[22]).intl;
            obj18.text = intl2.string(channelId(tmp3[22]).t["4i2vj+"]);
            tmp16Result = closure_9(channelId(tmp3[26]).BaseTextButton, obj18);
          }
          obj17.children = tmp16Result;
          items9[1] = closure_9(stateFromStores, obj17);
          obj14.children = items9;
          items7[1] = closure_10(stateFromStores, obj14);
          obj7.children = items7;
          obj.children = closure_10(stateFromStores, obj7);
          return closure_9(channelId(tmp3[27]).PressableOpacity, obj);
        }
      }
      return null;
    };
export { calculateActivityRowHeight };
