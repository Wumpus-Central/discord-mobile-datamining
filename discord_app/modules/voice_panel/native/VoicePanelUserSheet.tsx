// === Module 19191: VoicePanelUserSheet ===

// Module 19191 (VoicePanelUserSheet)
import nativeDefault from "native" /* 575 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import UserProfileActivity from "UserProfileActivity" /* 14800 */;
import VoicePanelUserActionCreators from "VoicePanelUserActionCreators" /* 19190 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
function OverflowMenu(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  let analyticsLocations;
  let context;
  const tmp3Result = channelId(analyticsLocations[9])(channelId(analyticsLocations[10]).VOICE_PANEL_USER_SHEET_OVERFLOW_MENU);
  analyticsLocations = tmp3Result.analyticsLocations;
  const tmp = channelId;
  const tmp3 = channelId(analyticsLocations[9]);
  const ref = context.useRef(null);
  const tmp6 = channelId(analyticsLocations[11])();
  const userProfileAnalyticsContext = userId(analyticsLocations[12]).useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let obj = userId(analyticsLocations[12]);
  const items = [RelationshipStore];
  const stateFromStoresObject = userId(analyticsLocations[13]).useStateFromStoresObject(items, () => ({ relationshipType: RelationshipStore.getRelationshipType(userId), isIgnored: RelationshipStore.isIgnored(userId) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  const obj2 = userId(analyticsLocations[13]);
  const items1 = [UserStore];
  const stateFromStores = userId(analyticsLocations[13]).useStateFromStores(items1, () => UserStore.getUser(userId));
  const obj3 = userId(analyticsLocations[13]);
  const DeveloperMode = userId(analyticsLocations[15]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const tmp11 = channelId(analyticsLocations[14])(userId, guildId);
  const obj4 = channelId(analyticsLocations[16]);
  const items2 = [userId, channelId, context, analyticsLocations];
  const result = userId(analyticsLocations[17]).isIarUserReportingEnabled("VoicePanelUserSheet - Mobile");
  const showUserProfile = context.useCallback((showGuildProfile) => {
    const obj = {};
    const merged = Object.assign(context);
    obj.showGuildProfile = showGuildProfile;
    obj.userId = userId;
    obj.channelId = channelId;
    obj.sourceAnalyticsLocations = analyticsLocations;
    obj.ignoreBlockedSpeedBump = true;
    showUserProfileActionSheetDefault(obj);
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj6 = { user: stateFromStores, channelId, location: tmp3Result.newestAnalyticsLocation, analyticsLocations, trackUserProfileAction, showUserProfile };
    const items3 = [];
    const items4 = [];
    const obj7 = { label: null, action: null };
    const intl2 = tmp7(tmp2[19]).intl;
    obj7.label = intl2.string(tmp7(tmp2[19]).t.GISTta);
    obj7.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      callback(false);
    };
    items3.push(obj7);
    if (userId.currentUserId !== userId) {
      const obj8 = { isIgnored, isBlocked: relationshipType === RelationshipTypes.BLOCKED };
      const ignoreMenuItem = tmp7(tmp2[20]).getIgnoreMenuItem(obj6, obj8);
      if (null != ignoreMenuItem) {
        items4.push(ignoreMenuItem);
      }
      const tmp7Result = tmp7(tmp2[20]);
      const obj9 = { isBlocked: relationshipType === RelationshipTypes.BLOCKED };
      items4.push(tmp7(tmp2[20]).getBlockMenuItem(obj6, obj9));
      if (relationshipType !== RelationshipTypes.BLOCKED) {
        const obj10 = { isInIarUserReportingExperiment: result, guildId, reportEntrypoint: "VoicePanelUserSheet" };
        const reportMenuItem = tmp7(tmp2[20]).getReportMenuItem(obj6, obj10);
        if (null != reportMenuItem) {
          items4.push(reportMenuItem);
        }
        const tmp7Result5 = tmp7(tmp2[20]);
      }
      const tmp7Result4 = tmp7(tmp2[20]);
    }
    if (setting) {
      const obj11 = { tidaWebformEnabled: obj4.useExperiment({ location: "VoicePanelUserSheetOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled, avatarGuildId: guildId };
      items3.push(tmp7(tmp2[20]).getDeveloperCopyMenuItem(obj6, obj11));
      const tmp7Result6 = tmp7(tmp2[20]);
    }
    const obj12 = { label: null, action: null };
    let intl = tmp7(tmp2[19]).intl;
    obj12.label = intl.string(tmp7(tmp2[19]).t.oeb1vg);
    obj12.action = function action() {
      trackUserProfileAction({ action: "SEND_MESSAGE", analyticsLocations });
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: stateFromStores.id });
    };
    const items5 = [obj12];
    const obj13 = { value: analyticsLocations, children: null };
    const obj14 = { ref, children: null };
    const obj15 = { style: tmp6, children: null };
    if (tmp11) {
      const items6 = [items5, items3, items4];
      let items7 = items6;
    } else {
      items7 = [items3, items4];
    }
    const obj16 = {
      items: items7,
      children(ref) {
          const obj = { ref: ref.ref };
          const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
          const intl = userId(analyticsLocations[19]).intl;
          obj.accessibilityLabel = intl.string(userId(analyticsLocations[19]).t["+zofAD"]);
          obj.children = closure_1_10(userId(analyticsLocations[24]).MoreHorizontalIcon, { size: "sm", color: channelId(analyticsLocations[8]).colors.WHITE });
          return closure_1_10(stateFromStores, obj);
        }
    };
    obj15.children = closure_10(tmp7(tmp2[23]).ContextMenu, obj16);
    obj14.children = closure_10(tmp(tmp2[22]).View, obj15);
    obj13.children = closure_10(trackUserProfileAction, obj14);
    return closure_10(tmp7(tmp2[9]).AnalyticsLocationProvider, obj13);
  }
  const obj5 = userId(analyticsLocations[17]);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const RelationshipTypes = fn(1072).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { wrapper: { gap: 12, padding: 16 }, card: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: 16, borderRadius: nativeDefault.radii.lg }, header: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 16 }, user: { display: "flex", gap: 8, flexDirection: "row", alignItems: "center", flex: 1, minWidth: 0 }, avatar: null, username: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: 16, borderRadius: nativeDefault.radii.lg };
obj2.avatar = { maxWidth: 48, maxHeight: 48, borderRadius: nativeDefault.radii.round };
obj2.username = { flexShrink: 1 };
let closure_12 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserSheet.tsx");

export default function VoicePanelUserSheet(userId) {
  ({ guildId, channelId } = userId);
  userId = userId.userId;
  const tmp = closure_12();
  dependencyMap = tmp;
  const items = [UserStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  let obj = channelId(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj3 = channelId(504);
  const items2 = [UserStore];
  const stateFromStores2 = channelId(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj4 = channelId(504);
  const name = channelId(6036).useName(guildId, channelId, stateFromStores);
  const live = userId(14854)(userId).live;
  closure_5 = tmp8;
  const items3 = [null == stateFromStores || null == stateFromStores1 || null == stateFromStores2];
  const effect = stateFromStores.useEffect(() => {
    if (closure_5) {
      const result = VoicePanelUserActionCreators.closeVoicePanelUserActionSheet();
    }
  }, items3);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      if (null != stateFromStores2) {
        const avatarURL = stateFromStores.getAvatarURL(guildId, 48, false);
        if (null != avatarURL) {
          const cachedSourceFromURI = channelId(9500).getCachedSourceFromURI(avatarURL);
          const tmp2Result = channelId(9500);
        }
        const avatarDecoration = stateFromStores.avatarDecoration;
        const obj2 = { style: tmp.wrapper, children: null };
        const obj6 = { style: tmp.header, children: null };
        const obj7 = { style: tmp.user, children: null };
        if (null != avatarDecoration) {
          const obj8 = { source: cachedSourceFromURI, size: channelId(1188).AvatarSizes.LARGE_48, avatarDecoration };
          let tmp11Result = closure_10(channelId(1188).Avatar, obj8);
        } else {
          const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 48, height: 48, style: tmp.avatar };
          tmp11Result = closure_10(tmp7(5712), size);
          const tmp7Result = tmp7(5712);
        }
        const obj9 = { children: null };
        const items4 = [tmp11Result, ];
        const obj10 = { variant: "text-md/semibold", style: tmp.username, lineClamp: 1, children: name };
        items4[1] = closure_10(channelId(5619).Text, obj10);
        obj7.children = items4;
        const items5 = [closure_11(stateFromStores2, obj7), ];
        const obj11 = { userId: stateFromStores.id, currentUserId: stateFromStores2.id, channelId, guildId };
        items5[1] = closure_10(OverflowMenu, obj11);
        obj6.children = items5;
        const items6 = [
          closure_11(stateFromStores2, obj6),
          live.map((activity, index) => {
                  let application_id = activity.application_id;
                  if (application_id == null) {
                    application_id = index;
                  }
                  return closure_2_10(UserProfileActivity.ActivityCard, { user: stateFromStores, currentUser: stateFromStores2, activity, style: card.card }, application_id);
                }),

        ];
        const obj12 = { user: stateFromStores, channel: stateFromStores1, currentUser: stateFromStores2, style: tmp.card };
        items6[2] = closure_10(tmp7(14857), obj12);
        obj2.children = items6;
        obj9.children = closure_11(stateFromStores2, obj2);
        return closure_10(channelId(5267).BottomSheet, obj9);
      }
    }
  }
  return null;
};