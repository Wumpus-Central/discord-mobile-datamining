// discord_app/modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_7 from "../../../../stores/ChannelStore.tsx";
import closure_8 from "../../../../stores/UserStore.tsx";
import { ACTION_SHEET_MAX_WIDTH } from "../../../action_sheet/native/ActionSheetConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const XSMALL = require("Button").AvatarSizes.XSMALL;
const themedRippleConfig = require("semanticColor").getThemedRippleConfig({ foreground: true });
let obj = { width: 32, height: 32, marginRight: 16, borderRadius: 4 };
let c14 = 1.7777777777777777;
obj = { voiceMemberItemRow: { paddingTop: 12, paddingBottom: 16, flexDirection: "column", display: "flex", justifyContent: "flex-start" }, innerRow: { paddingHorizontal: 16, alignItems: "center" }, activityDetails: { marginBottom: 8, flexDirection: "row", display: "flex" }, appIcon: obj, appIconPlaceholder: null, centerGroup: null, applicationName: null, joinButton: null, joinButtonPill: null, joinButtonContainer: null, overflow: null, overflowBackgroundColor: null, overflowBackgroundColorActionSheet: null };
obj = {};
const merged = Object.assign(obj);
obj.tintColor = ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj[4] = obj;
obj[5] = { flex: 1, paddingRight: 4 };
obj[6] = { lineHeight: 20 };
obj[7] = { alignSelf: "center" };
obj[8] = { borderRadius: 100, paddingHorizontal: 24 };
obj[9] = { alignItems: "center", justifyContent: "center", display: "flex", width: "100%", paddingHorizontal: 16 };
createCacheKey = { height: require("Button").AVATAR_SIZE_MAP[XSMALL] };
obj[10] = createCacheKey;
obj[11] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
obj[12] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_15 = createCacheKey.createStyles(obj);
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let result = require("set").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default function VoiceMemberEmbeddedActivity(onItemPress) {
  ({ embeddedActivity, channelId } = onItemPress);
  onItemPress = onItemPress.onItemPress;
  let first;
  let callback;
  let stateFromStores;
  let embeddedActivityLocationGuildId;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    onItemPress(closure_3, first, stateFromStores);
  }
  const tmp = callback2();
  const items = [embeddedActivity.applicationId];
  first = callback(onItemPress(first[12])(items), 1)[0];
  const mapped = Array.from(embeddedActivity.userIds).map((arg0) => user.getUser(arg0));
  let found = mapped.filter(channelId(first[13]).isNotNullish);
  obj1 = channelId(first[14]);
  const items1 = [handleCanJoin];
  callback = obj1.useStateFromStores(items1, () => handleCanJoin.getChannel(channelId));
  let obj2 = channelId(first[14]);
  const items2 = [embeddedActivityJoinability];
  stateFromStores = obj2.useStateFromStores(items2, () => {
    let found = null;
    if (null != closure_3) {
      const embeddedActivitiesForChannel = embeddedActivityJoinability.getEmbeddedActivitiesForChannel(tmp.id);
      found = embeddedActivitiesForChannel.find((applicationId) => {
        let id;
        if (id != null) {
          id = id.id;
        }
        return applicationId.applicationId === id;
      });
    }
    return found;
  });
  let obj3 = channelId(first[15]);
  embeddedActivityLocationGuildId = obj3.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
  let obj4 = channelId(first[16]);
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability({ userId: id, channelId, application: first });
  const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp2(tmp3[17])().width);
  if (null != first) {
    if (null != stateFromStores) {
      let iconSource = first.getIconSource(32);
      if (iconSource == null) {
        iconSource = tmp2(tmp3[18]);
      }
      const name = first.name;
      const diff = bound - 32;
      const sum = 40 + tmp11 / tmp12 + 12 + 16;
      let obj = { accessibilityRole: "button", accessibilityLabel: null, androidRippleConfig: null, onPress: null, children: null };
      const intl = tmp4(tmp3[21]).intl;
      obj = { applicationName: null };
      obj[0] = name;
      obj[1] = intl.formatToPlainString(tmp4(tmp3[21]).t.Yw5Hr2, obj);
      obj[2] = closure_13;
      obj[3] = function onPress() {
        onItemPress(first[19])({ embeddedActivityJoinability, handleCanJoin });
      };
      obj1 = { style: null, children: null };
      const items3 = [tmp.voiceMemberItemRow, ];
      obj2 = { height: null };
      obj2[0] = sum;
      items3[1] = obj2;
      obj1[0] = items3;
      obj3 = { style: null, children: null };
      const items4 = [, ];
      ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
      obj3[0] = items4;
      obj4 = { style: null, source: null };
      obj4[0] = iconSource === tmp2(tmp3[18]) ? tmp.appIconPlaceholder : tmp.appIcon;
      obj4[1] = iconSource;
      const items5 = [closure_10(stateFromStores, obj4), , ];
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.centerGroup;
      const obj6 = { style: null, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      obj6[0] = tmp.applicationName;
      obj6[3] = name;
      obj5[1] = closure_10(tmp4(tmp3[22]).Text, obj6);
      items5[1] = closure_10(embeddedActivityLocationGuildId, obj5);
      const items6 = [tmp.overflow, ];
      const result = diff / tmp12;
      const obj7 = { offsetAmount: -6, overflowStyle: null, overflowComponent: null, items: null, max: 5, renderItem: null };
      items6[1] = onItemPress.isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor;
      obj7[1] = items6;
      obj7[2] = tmp4(tmp3[9]).OverflowText;
      obj7[3] = found;
      obj7[5] = function renderItem(user) {
        let obj = { user, guildId: closure_5, size: closure_1_12, cutout: null };
        let tmp5;
        if (!arg1) {
          obj = { radius: null, direction: null, inset: -6 };
          obj[0] = tmp2(tmp3[9]).AVATAR_SIZE_MAP[tmp4] / 2 + 3;
          obj[1] = tmp2(tmp3[9]).CutoutDirection.RIGHT;
          tmp5 = obj;
        }
        obj[3] = tmp5;
        return closure_1_10(channelId(first[9]).CutoutableAvatarImage, obj);
      };
      items5[2] = closure_10(tmp4(tmp3[9]).SummarizedIconRow, obj7);
      obj3[1] = items5;
      const items7 = [closure_11(embeddedActivityLocationGuildId, obj3), ];
      const obj8 = { style: null, children: null };
      const items8 = [tmp.innerRow, ];
      const obj9 = { height: null, justifyContent: "center" };
      obj9[0] = result;
      items8[1] = obj9;
      obj8[0] = items8;
      const obj10 = { application: null, dimensionsStyle: null, borderRadius: 8, resizeMode: "contain" };
      obj10[0] = first;
      const obj11 = { position: "absolute", width: null, height: null };
      obj11[1] = diff;
      obj11[2] = result;
      obj10[1] = obj11;
      const items9 = [closure_10(tmp2(tmp3[23]), obj10), ];
      const obj12 = { style: null, children: null };
      obj12[0] = tmp.joinButtonContainer;
      let tmp16Result = null;
      if (embeddedActivityJoinability === tmp4(tmp3[16]).EmbeddedActivityJoinability.CAN_JOIN) {
        const obj13 = { onPress: null, style: null, pillStyle: null, text: null, variant: "secondary", size: "sm", shrink: true };
        obj13[0] = function onPress() {
          onItemPress(first[19])({ embeddedActivityJoinability, handleCanJoin });
        };
        ({ joinButton: obj20[1], joinButtonPill: obj20[2] } = tmp);
        const intl2 = tmp4(tmp3[21]).intl;
        obj13[3] = intl2.string(tmp4(tmp3[21]).t["4i2vj+"]);
        tmp16Result = tmp16(tmp4(tmp3[24]).BaseTextButton, obj13);
      }
      obj12[1] = tmp16Result;
      items9[1] = closure_10(embeddedActivityLocationGuildId, obj12);
      obj8[1] = items9;
      items7[1] = closure_11(embeddedActivityLocationGuildId, obj8);
      obj1[1] = items7;
      obj[4] = closure_11(embeddedActivityLocationGuildId, obj1);
      return closure_10(tmp4(tmp3[20]).PressableOpacity, obj);
    }
  }
  return null;
};
export const calculateActivityRowHeight = function calculateActivityRowHeight(arg0) {
  return 40 + (arg0 - 32) / c14 + 12 + 16;
};