// === Module 14143: VoiceMemberEmbeddedActivity ===

// Module 14143 (VoiceMemberEmbeddedActivity)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import handlePressJoinActivityDefault from "handlePressJoinActivity" /* 9714 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(7482).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const XSMALL = fn(1177).AvatarSizes.XSMALL;
const androidRippleConfig = fn(1181).getThemedRippleConfig({ foreground: true });
let size = { width: 32, height: 32, marginRight: 16, borderRadius: 4 };
let c14 = 1.7777777777777777;
const createStyles = fn(4827);
let obj = { voiceMemberItemRow: { paddingTop: 12, paddingBottom: 16, flexDirection: "column", display: "flex", justifyContent: "flex-start" }, innerRow: { paddingHorizontal: 16, alignItems: "center" }, activityDetails: { marginBottom: 8, flexDirection: "row", display: "flex" }, appIcon: size, appIconPlaceholder: null, centerGroup: null, applicationName: null, joinButton: null, joinButtonPill: null, joinButtonContainer: null, overflow: null, overflowBackgroundColor: null, overflowBackgroundColorActionSheet: null };
let obj3 = {};
const merged = Object.assign(size);
obj3.tintColor = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj.appIconPlaceholder = obj3;
obj.centerGroup = { flex: 1, paddingRight: 4 };
obj.applicationName = { lineHeight: 20 };
obj.joinButton = { alignSelf: "center" };
obj.joinButtonPill = { borderRadius: 100, paddingHorizontal: 24 };
obj.joinButtonContainer = { alignItems: "center", justifyContent: "center", display: "flex", width: "100%", paddingHorizontal: 16 };
obj.overflow = { height: fn(1177).AVATAR_SIZE_MAP[XSMALL] };
let obj4 = { height: fn(1177).AVATAR_SIZE_MAP[XSMALL] };
obj.overflowBackgroundColor = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj.overflowBackgroundColorActionSheet = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_15 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default function VoiceMemberEmbeddedActivity(onItemPress) {
  ({ embeddedActivity, channelId } = onItemPress);
  onItemPress = onItemPress.onItemPress;
  let application;
  _slicedToArray = undefined;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    onItemPress(closure_3, first, stateFromStores);
  }
  const tmp = closure_15();
  const items = [embeddedActivity.applicationId];
  application = _slicedToArray(onItemPress(application[12])(items), 1)[0];
  const mapped = Array.from(embeddedActivity.userIds).map((item) => user.getUser(item));
  let found = mapped.filter(channelId(application[13]).isNotNullish);
  const arr = Array.from(embeddedActivity.userIds);
  const items1 = [handleCanJoin];
  _slicedToArray = channelId(application[14]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(application[14]);
  const items2 = [embeddedActivityJoinability];
  const stateFromStores = channelId(application[14]).useStateFromStores(items2, () => {
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
  const obj3 = channelId(application[14]);
  const guildId = channelId(application[15]).getEmbeddedActivityLocationGuildId(embeddedActivity.location);
  const obj4 = channelId(application[15]);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  embeddedActivityJoinability = channelId(application[16]).useEmbeddedActivityJoinability({ userId: id, channelId, application });
  const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp2(tmp3[17])().width);
  if (null != application) {
    if (null != stateFromStores) {
      let iconSource = application.getIconSource(32);
      if (iconSource == null) {
        iconSource = tmp2(tmp3[18]);
      }
      const name = application.name;
      const diff = bound - 32;
      const sum = 40 + tmp11 / c14 + 12 + 16;
      let obj = { accessibilityRole: "button", accessibilityLabel: null, androidRippleConfig: null, onPress: null, children: null };
      const intl = channelId(tmp3[21]).intl;
      const obj6 = { applicationName: name };
      obj.accessibilityLabel = intl.formatToPlainString(channelId(tmp3[21]).t.Yw5Hr2, obj6);
      obj.androidRippleConfig = androidRippleConfig;
      obj.onPress = function onPress() {
        handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
      };
      const obj7 = { style: null, children: null };
      const items3 = [tmp.voiceMemberItemRow, ];
      const obj8 = { height: sum };
      items3[1] = obj8;
      obj7.style = items3;
      const obj9 = { style: null, children: null };
      const items4 = [, ];
      ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
      obj9.style = items4;
      const obj10 = { style: iconSource === tmp2(tmp3[18]) ? tmp.appIconPlaceholder : tmp.appIcon, source: iconSource };
      const items5 = [closure_10(stateFromStores, obj10), , ];
      const obj11 = { style: tmp.centerGroup, children: null };
      const obj12 = { style: tmp.applicationName, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
      obj11.children = closure_10(channelId(tmp3[22]).Text, obj12);
      items5[1] = closure_10(guildId, obj11);
      const items6 = [tmp.overflow, ];
      const result = diff / c14;
      const obj13 = { offsetAmount: -6, overflowStyle: null, overflowComponent: null, items: null, max: 5, renderItem: null };
      items6[1] = onItemPress.isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor;
      obj13.overflowStyle = items6;
      obj13.overflowComponent = channelId(tmp3[9]).OverflowText;
      obj13.items = found;
      obj13.renderItem = function renderItem(user, arg1) {
        const obj = { user, guildId, size: XSMALL, cutout: null };
        let tmp5;
        if (!arg1) {
          const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
          tmp5 = obj2;
        }
        obj.cutout = tmp5;
        return closure_2_10(native.CutoutableAvatarImage, obj);
      };
      items5[2] = closure_10(channelId(tmp3[9]).SummarizedIconRow, obj13);
      obj9.children = items5;
      const items7 = [closure_11(guildId, obj9), ];
      const obj14 = { style: null, children: null };
      const items8 = [tmp.innerRow, ];
      const obj15 = { height: result, justifyContent: "center" };
      items8[1] = obj15;
      obj14.style = items8;
      const obj16 = { application, dimensionsStyle: null, borderRadius: 8, resizeMode: "contain" };
      const size = { position: "absolute", width: diff, height: result };
      obj16.dimensionsStyle = size;
      const items9 = [closure_10(tmp2(tmp3[23]), obj16), ];
      const obj17 = { style: tmp.joinButtonContainer, children: null };
      let tmp16Result = null;
      if (embeddedActivityJoinability === channelId(tmp3[16]).EmbeddedActivityJoinability.CAN_JOIN) {
        const obj18 = {
          onPress() {
                  handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
                },
          style: null,
          pillStyle: null,
          text: null,
          variant: "secondary",
          size: "sm",
          shrink: true
        };
        ({ joinButton: obj20.style, joinButtonPill: obj20.pillStyle } = tmp);
        const intl2 = channelId(tmp3[21]).intl;
        obj18.text = intl2.string(channelId(tmp3[21]).t["4i2vj+"]);
        tmp16Result = closure_10(channelId(tmp3[24]).BaseTextButton, obj18);
      }
      obj17.children = tmp16Result;
      items9[1] = closure_10(guildId, obj17);
      obj14.children = items9;
      items7[1] = closure_11(guildId, obj14);
      obj7.children = items7;
      obj.children = closure_11(guildId, obj7);
      return closure_10(channelId(tmp3[20]).PressableOpacity, obj);
    }
  }
  return null;
};
export const calculateActivityRowHeight = function calculateActivityRowHeight(arg0) {
  return 40 + (arg0 - 32) / c14 + 12 + 16;
};