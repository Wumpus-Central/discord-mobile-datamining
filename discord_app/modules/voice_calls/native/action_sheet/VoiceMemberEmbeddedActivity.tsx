// === Module 13785: VoiceMemberEmbeddedActivity ===

// Module 13785 (VoiceMemberEmbeddedActivity)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import handlePressJoinActivityDefault from "handlePressJoinActivity" /* 9530 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const XSMALL = fn(1178).AvatarSizes.XSMALL;
const androidRippleConfig = fn(1182).getThemedRippleConfig({ foreground: true });
let size = { width: 32, height: 32, marginRight: 16, borderRadius: 4 };
let c14 = 1.7777777777777777;
fn(4560);
let obj = { voiceMemberItemRow: { paddingTop: 12, paddingBottom: 16, flexDirection: "column", display: "flex", justifyContent: "flex-start" }, innerRow: { paddingHorizontal: 16, alignItems: "center" }, activityDetails: { marginBottom: 8, flexDirection: "row", display: "flex" }, appIcon: size, appIconPlaceholder: null, centerGroup: null, applicationName: null, joinButton: null, joinButtonPill: null, joinButtonContainer: null, overflow: null, overflowBackgroundColor: null, overflowBackgroundColorActionSheet: null };
obj = {};
const merged = Object.assign(size);
obj.tintColor = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj.appIconPlaceholder = obj;
obj.centerGroup = { flex: 1, paddingRight: 4 };
obj.applicationName = { lineHeight: 20 };
obj.joinButton = { alignSelf: "center" };
obj.joinButtonPill = { borderRadius: 100, paddingHorizontal: 24 };
obj.joinButtonContainer = { alignItems: "center", justifyContent: "center", display: "flex", width: "100%", paddingHorizontal: 16 };
const createStyles = { height: fn(1178).AVATAR_SIZE_MAP[XSMALL] };
obj.overflow = createStyles;
obj.overflowBackgroundColor = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
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
  let obj1 = channelId(application[14]);
  const items1 = [handleCanJoin];
  _slicedToArray = obj1.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(application[14]);
  const items2 = [embeddedActivityJoinability];
  const stateFromStores = obj2.useStateFromStores(items2, () => {
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
  let obj3 = channelId(application[15]);
  const guildId = obj3.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
  let obj4 = channelId(application[16]);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability({ userId: id, channelId, application });
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
      obj = { applicationName: name };
      obj.accessibilityLabel = intl.formatToPlainString(channelId(tmp3[21]).t.Yw5Hr2, obj);
      obj.androidRippleConfig = androidRippleConfig;
      obj.onPress = function onPress() {
        handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
      };
      obj1 = { style: null, children: null };
      const items3 = [tmp.voiceMemberItemRow, ];
      obj2 = { height: sum };
      items3[1] = obj2;
      obj1.style = items3;
      obj3 = { style: null, children: null };
      const items4 = [, ];
      ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
      obj3.style = items4;
      obj4 = { style: iconSource === tmp2(tmp3[18]) ? tmp.appIconPlaceholder : tmp.appIcon, source: iconSource };
      const items5 = [closure_10(stateFromStores, obj4), , ];
      const obj5 = { style: tmp.centerGroup, children: null };
      const obj6 = { style: tmp.applicationName, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
      obj5.children = closure_10(channelId(tmp3[22]).Text, obj6);
      items5[1] = closure_10(guildId, obj5);
      const items6 = [tmp.overflow, ];
      const result = diff / c14;
      const obj7 = { offsetAmount: -6, overflowStyle: null, overflowComponent: null, items: null, max: 5, renderItem: null };
      items6[1] = onItemPress.isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor;
      obj7.overflowStyle = items6;
      obj7.overflowComponent = channelId(tmp3[9]).OverflowText;
      obj7.items = found;
      obj7.renderItem = function renderItem(user, arg1) {
        let obj = { user, guildId, size: XSMALL, cutout: null };
        let tmp5;
        if (!arg1) {
          obj = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
          tmp5 = obj;
        }
        obj.cutout = tmp5;
        return closure_2_10(native.CutoutableAvatarImage, obj);
      };
      items5[2] = closure_10(channelId(tmp3[9]).SummarizedIconRow, obj7);
      obj3.children = items5;
      const items7 = [closure_11(guildId, obj3), ];
      const obj8 = { style: null, children: null };
      const items8 = [tmp.innerRow, ];
      const obj9 = { height: result, justifyContent: "center" };
      items8[1] = obj9;
      obj8.style = items8;
      const obj10 = { application, dimensionsStyle: null, borderRadius: 8, resizeMode: "contain" };
      const size = { position: "absolute", width: diff, height: result };
      obj10.dimensionsStyle = size;
      const items9 = [closure_10(tmp2(tmp3[23]), obj10), ];
      const obj11 = { style: tmp.joinButtonContainer, children: null };
      let tmp16Result = null;
      if (embeddedActivityJoinability === channelId(tmp3[16]).EmbeddedActivityJoinability.CAN_JOIN) {
        const obj12 = {
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
        obj12.text = intl2.string(channelId(tmp3[21]).t["4i2vj+"]);
        tmp16Result = closure_10(channelId(tmp3[24]).BaseTextButton, obj12);
      }
      obj11.children = tmp16Result;
      items9[1] = closure_10(guildId, obj11);
      obj8.children = items9;
      items7[1] = closure_11(guildId, obj8);
      obj1.children = items7;
      obj.children = closure_11(guildId, obj1);
      return closure_10(channelId(tmp3[20]).PressableOpacity, obj);
    }
  }
  return null;
};
export const calculateActivityRowHeight = function calculateActivityRowHeight(arg0) {
  return 40 + (arg0 - 32) / c14 + 12 + 16;
};