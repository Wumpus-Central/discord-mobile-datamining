// === Module 19085: VoicePanelUserSheet ===

// Module 19085 (VoicePanelUserSheet)
import nativeDefault from "native" /* 587 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7471 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8708 */;
import UserProfileActivity from "UserProfileActivity" /* 14765 */;
import VoicePanelUserActionCreators from "VoicePanelUserActionCreators" /* 19084 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const RelationshipTypes = fn(1084).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let c14 = 48;
const createStyles = fn(5005);
let obj2 = { wrapper: { gap: 12, padding: 16 }, card: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: 16, borderRadius: nativeDefault.radii.lg }, header: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 16 }, user: { display: "flex", gap: 8, flexDirection: "row", alignItems: "center", flex: 1, minWidth: 0 }, avatar: null, username: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: 16, borderRadius: nativeDefault.radii.lg };
obj2.avatar = { maxWidth: 48, maxHeight: 48, borderRadius: nativeDefault.radii.round };
obj2.username = { flexShrink: 1 };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function OverflowMenu(userId) {
  const cResult = userId(analyticsLocations[11]).c(53);
  userId = userId.userId;
  const channelId = userId.channelId;
  const currentUserId = userId.currentUserId;
  let obj = userId(analyticsLocations[11]);
  const tmp5 = channelId(analyticsLocations[12]);
  analyticsLocations = channelId(analyticsLocations[12])(channelId(analyticsLocations[13]).VOICE_PANEL_USER_SHEET_OVERFLOW_MENU).analyticsLocations;
  stateFromStores.useRef(null);
  channelId(analyticsLocations[14])();
  const tmp5Result = channelId(analyticsLocations[12])(channelId(analyticsLocations[13]).VOICE_PANEL_USER_SHEET_OVERFLOW_MENU);
  const userProfileAnalyticsContext = userId(analyticsLocations[15]).useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function v() {
      return { relationshipType: RelationshipStore.getRelationshipType(userId), isIgnored: RelationshipStore.isIgnored(userId) };
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[2];
  }
  const obj2 = userId(analyticsLocations[15]);
  const stateFromStoresObject = userId(analyticsLocations[16]).useStateFromStoresObject(first, tmp12);
  const relationshipType = stateFromStoresObject.relationshipType;
  const BLOCKED = RelationshipTypes.BLOCKED;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[3] = items1;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== userId) {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
    cResult[4] = userId;
    cResult[5] = V;
  } else {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
  }
  const tmpResult = userId(analyticsLocations[16]);
  stateFromStores = userId(analyticsLocations[16]).useStateFromStores(tmp14, V);
  channelId(analyticsLocations[17])(userId, userId.guildId);
  const DeveloperMode = tmp(tmp2[18]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
    const obj3 = { autoTrackExposure: false };
    cResult[6] = tmp22;
    cResult[7] = obj3;
    let tmp21 = obj3;
  } else {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
    tmp21 = cResult[7];
  }
  const tmpResult3 = userId(analyticsLocations[16]);
  const tidaWebformEnabled = channelId(analyticsLocations[19]).useExperiment(tmp22, tmp21).tidaWebformEnabled;
  if (cResult[8] === analyticsLocations) {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
  }
  Symbol.for("react.early_return_sentinel");
  userId(analyticsLocations[20]);
  if (cResult[24] === analyticsLocations) {
    class V {
      constructor() {
        return closure_10.getUser(userId);
      }
    }
  }
  class X {
    constructor(arg0) {
      obj = {};
      tmp = closure_1(closure_2[21]);
      merged = Object.assign(context);
      obj.showGuildProfile = userId;
      obj.userId = userId;
      obj.channelId = channelId;
      obj.sourceAnalyticsLocations = analyticsLocations;
      obj.ignoreBlockedSpeedBump = true;
      tmpResult = tmp(obj);
      return;
    }
  }
  cResult[24] = analyticsLocations;
  cResult[25] = channelId;
  cResult[26] = context;
  cResult[27] = userId;
  cResult[28] = X;
  const tmp4Result = channelId(analyticsLocations[19]);
}) : (function OverflowMenu(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  let analyticsLocations;
  let stateFromStores;
  const tmp3Result = channelId(analyticsLocations[12])(channelId(analyticsLocations[13]).VOICE_PANEL_USER_SHEET_OVERFLOW_MENU);
  analyticsLocations = tmp3Result.analyticsLocations;
  const tmp = channelId;
  const tmp3 = channelId(analyticsLocations[12]);
  const ref = stateFromStores.useRef(null);
  const tmp6 = channelId(analyticsLocations[14])();
  const userProfileAnalyticsContext = userId(analyticsLocations[15]).useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  let obj = userId(analyticsLocations[15]);
  const items = [RelationshipStore];
  const stateFromStoresObject = userId(analyticsLocations[16]).useStateFromStoresObject(items, () => ({ relationshipType: RelationshipStore.getRelationshipType(userId), isIgnored: RelationshipStore.isIgnored(userId) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  const obj2 = userId(analyticsLocations[16]);
  const items1 = [UserStore];
  stateFromStores = userId(analyticsLocations[16]).useStateFromStores(items1, () => UserStore.getUser(userId));
  const obj3 = userId(analyticsLocations[16]);
  const DeveloperMode = userId(analyticsLocations[18]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const tmp11 = channelId(analyticsLocations[17])(userId, guildId);
  const obj4 = channelId(analyticsLocations[19]);
  const items2 = [userId, channelId, context, analyticsLocations];
  const result = userId(analyticsLocations[20]).isIarUserReportingEnabled("VoicePanelUserSheet - Mobile");
  const showUserProfile = stateFromStores.useCallback((showGuildProfile) => {
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
    const intl2 = tmp7(tmp2[22]).intl;
    obj7.label = intl2.string(tmp7(tmp2[22]).t.GISTta);
    obj7.action = function action() {
      trackUserProfileAction({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations });
      callback(false);
    };
    items3.push(obj7);
    if (userId.currentUserId !== userId) {
      const obj8 = { isIgnored, isBlocked: relationshipType === RelationshipTypes.BLOCKED };
      const ignoreMenuItem = tmp7(tmp2[23]).getIgnoreMenuItem(obj6, obj8);
      if (null != ignoreMenuItem) {
        items4.push(ignoreMenuItem);
      }
      const tmp7Result = tmp7(tmp2[23]);
      const obj9 = { isBlocked: relationshipType === RelationshipTypes.BLOCKED };
      items4.push(tmp7(tmp2[23]).getBlockMenuItem(obj6, obj9));
      if (relationshipType !== RelationshipTypes.BLOCKED) {
        const obj10 = { isInIarUserReportingExperiment: result, guildId, reportEntrypoint: "VoicePanelUserSheet" };
        const reportMenuItem = tmp7(tmp2[23]).getReportMenuItem(obj6, obj10);
        if (null != reportMenuItem) {
          items4.push(reportMenuItem);
        }
        const tmp7Result5 = tmp7(tmp2[23]);
      }
      const tmp7Result4 = tmp7(tmp2[23]);
    }
    if (setting) {
      const obj11 = { tidaWebformEnabled: obj4.useExperiment({ location: "VoicePanelUserSheetOverflowMenu" }, { autoTrackExposure: false }).tidaWebformEnabled, avatarGuildId: guildId };
      items3.push(tmp7(tmp2[23]).getDeveloperCopyMenuItem(obj6, obj11));
      const tmp7Result6 = tmp7(tmp2[23]);
    }
    const obj12 = { label: null, action: null };
    let intl = tmp7(tmp2[22]).intl;
    obj12.label = intl.string(tmp7(tmp2[22]).t.oeb1vg);
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
          const intl = userId(analyticsLocations[22]).intl;
          obj.accessibilityLabel = intl.string(userId(analyticsLocations[22]).t["+zofAD"]);
          obj.children = closure_1_12(userId(analyticsLocations[25]).MoreHorizontalIcon, { size: "sm", color: channelId(analyticsLocations[9]).colors.WHITE });
          return closure_1_12(closure_1_7, obj);
        }
    };
    obj15.children = closure_12(tmp7(tmp2[26]).ContextMenu, obj16);
    obj14.children = closure_12(tmp(tmp2[27]).View, obj15);
    obj13.children = closure_12(showUserProfile, obj14);
    return closure_12(tmp7(tmp2[12]).AnalyticsLocationProvider, obj13);
  }
  const obj5 = userId(analyticsLocations[20]);
});
ReactCompilerGating = fn(558);
let obj4 = { maxWidth: 48, maxHeight: 48, borderRadius: nativeDefault.radii.round };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelUserSheet(userId) {
  const cResult = channelId(576).c(53);
  ({ guildId, channelId } = userId);
  userId = userId.userId;
  let obj = channelId(576);
  dependencyMap = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function o() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmp4 = closure_15();
  const stateFromStores = channelId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    class A {
      constructor() {
        return closure_8.getChannel(channelId);
      }
    }
    cResult[4] = channelId;
    cResult[5] = A;
  } else {
    class A {
      constructor() {
        return closure_8.getChannel(channelId);
      }
    }
  }
  const tmpResult = channelId(504);
  const stateFromStores1 = channelId(504).useStateFromStores(tmp9, A);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_8.getChannel(channelId);
      }
    }
    const items2 = [UserStore];
    class R {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    cResult[6] = items2;
    cResult[7] = R;
    let tmp14 = R;
    const tmp13 = items2;
  } else {
    class A {
      constructor() {
        return closure_8.getChannel(channelId);
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult4 = channelId(504);
  const stateFromStores2 = channelId(504).useStateFromStores(tmp13, tmp14);
  const tmpResult5 = channelId(504);
  const name = channelId(6029).useName(guildId, channelId, stateFromStores);
  const live = userId(14819)(userId).live;
  noop = tmp17;
  if (cResult[8] !== (null == stateFromStores || null == stateFromStores1 || null == stateFromStores2)) {
    class C {
      constructor() {
        if (closure_5) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[30]);
          result = obj.closeVoicePanelUserActionSheet();
        }
        return;
      }
    }
    const items3 = [tmp17];
    class R {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    cResult[8] = tmp17;
    cResult[9] = C;
    cResult[10] = items3;
    let tmp19 = items3;
  } else {
    class C {
      constructor() {
        if (closure_5) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[30]);
          result = obj.closeVoicePanelUserActionSheet();
        }
        return;
      }
    }
    tmp19 = cResult[10];
  }
  const effect = noop.useEffect(C, tmp19);
  if (null != stateFromStores) {
    class C {
      constructor() {
        if (closure_5) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[30]);
          result = obj.closeVoicePanelUserActionSheet();
        }
        return;
      }
    }
  }
  return null;
}) : (function VoicePanelUserSheet(userId) {
  ({ guildId, channelId } = userId);
  userId = userId.userId;
  const tmp = closure_15();
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
  const name = channelId(6029).useName(guildId, channelId, stateFromStores);
  const live = userId(14819)(userId).live;
  noop = tmp8;
  const items3 = [null == stateFromStores || null == stateFromStores1 || null == stateFromStores2];
  const effect = noop.useEffect(() => {
    if (closure_5) {
      const result = VoicePanelUserActionCreators.closeVoicePanelUserActionSheet();
    }
  }, items3);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      if (null != stateFromStores2) {
        const avatarURL = stateFromStores.getAvatarURL(guildId, 48, false);
        if (null != avatarURL) {
          const cachedSourceFromURI = channelId(9481).getCachedSourceFromURI(avatarURL);
          const tmp2Result = channelId(9481);
        }
        const avatarDecoration = stateFromStores.avatarDecoration;
        const obj2 = { style: tmp.wrapper, children: null };
        const obj6 = { style: tmp.header, children: null };
        const obj7 = { style: tmp.user, children: null };
        if (null != avatarDecoration) {
          const obj8 = { source: cachedSourceFromURI, size: channelId(1199).AvatarSizes.LARGE_48, avatarDecoration };
          let tmp11Result = closure_12(channelId(1199).Avatar, obj8);
        } else {
          const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: v48, height: v48, style: tmp.avatar };
          tmp11Result = closure_12(tmp7(5707), size);
          const tmp7Result = tmp7(5707);
        }
        const obj9 = { children: null };
        const items4 = [tmp11Result, ];
        const obj10 = { variant: "text-md/semibold", style: tmp.username, lineClamp: 1, children: name };
        items4[1] = closure_12(channelId(5271).Text, obj10);
        obj7.children = items4;
        const items5 = [closure_13(closure_6, obj7), ];
        const obj11 = { userId: stateFromStores.id, currentUserId: stateFromStores2.id, channelId, guildId };
        items5[1] = closure_12(closure_16, obj11);
        obj6.children = items5;
        const items6 = [
          closure_13(closure_6, obj6),
          live.map((activity, index) => {
                  let application_id = activity.application_id;
                  if (application_id == null) {
                    application_id = index;
                  }
                  return __initData(UserProfileActivity.ActivityCard, { user: stateFromStores, currentUser: stateFromStores2, activity, style: card.card }, application_id);
                }),

        ];
        const obj12 = { user: stateFromStores, channel: stateFromStores1, currentUser: stateFromStores2, style: tmp.card };
        items6[2] = closure_12(tmp7(14822), obj12);
        obj2.children = items6;
        obj9.children = closure_13(closure_6, obj2);
        return closure_12(channelId(5302).BottomSheet, obj9);
      }
    }
  }
  return null;
});