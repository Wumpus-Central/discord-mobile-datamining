// === Module 10610: CustomStatusPreview ===

// Module 10610 (CustomStatusPreview)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(6629);
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty, UserProfileThemeTypes: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { flex: 1, position: "relative", overflow: "hidden", width: 323, maxHeight: 301, borderWidth: 1, borderColor: null, borderRadius: null };
  const colors = nativeDefault.colors;
  if (arg0) {
    let BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  const obj2 = { profileContainer: null, profileEffect: null };
  obj.borderColor = BACKGROUND_SURFACE_HIGH;
  obj.borderRadius = tmp4(576).radii.lg;
  const merged = Object.assign(tmp4(576).shadows.SHADOW_HIGH);
  obj2.profileContainer = obj;
  obj2.profileEffect = { zIndex: 1 };
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusPreview.tsx");

export default function CustomStatusPreview(user) {
  user = user.user;
  const pendingStatusText = user.pendingStatusText;
  const pendingStatusEmoji = user.pendingStatusEmoji;
  const placeholderText = user.placeholderText;
  const tmp3 = pendingStatusText(pendingStatusEmoji[6])(user.id);
  const tmp4 = pendingStatusText(pendingStatusEmoji[7])(tmp3);
  ({ theme, primaryColor, secondaryColor } = pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp3 }));
  const tmp7 = closure_9(null != primaryColor);
  const tmp8 = pendingStatusText(pendingStatusEmoji[9])();
  const tmp5 = pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp3 });
  const userProfileColors = user(pendingStatusEmoji[10]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [user, pendingStatusText, pendingStatusEmoji];
  ({ gradientFallbackBackground, avatarBackground, containerBackground } = userProfileColors);
  const callback = noop.useCallback(() => {
    ChatInputUtils.dismissKeyboard();
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10611, dependencyMap.paths), "UserProfileCustomStatusActionSheet", { user, previewText: pendingStatusText, previewEmoji: pendingStatusEmoji }, "stack");
  }, items);
  const obj2 = { theme, primaryColor, secondaryColor, children: null };
  const obj3 = { style: null, children: null };
  const items1 = [tmp7.profileContainer];
  obj3.style = items1;
  const items2 = [closure_7(pendingStatusText(pendingStatusEmoji[16]), { user, displayProfile: tmp3, bannerHeight: 132, disableInteraction: true }), , ];
  const items3 = [closure_7(pendingStatusText(pendingStatusEmoji[17]), { user, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj4 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor: primaryColor, containerStyle: null, children: null };
  const items4 = [, , ];
  ({ profileContentWrapper: arr5[0], profileContent: arr5[1] } = tmp8);
  let tmp15 = "" !== pendingStatusText;
  let obj = user(pendingStatusEmoji[10]);
  if (!tmp15) {
    tmp15 = null !== pendingStatusEmoji;
  }
  if (!tmp15) {
    tmp15 = "" !== placeholderText;
  }
  let tmp16 = !tmp15;
  if (!tmp15) {
    const obj5 = { paddingTop };
    tmp16 = obj5;
  }
  items4[2] = tmp16;
  obj4.containerStyle = items4;
  const items5 = [closure_7(pendingStatusText(pendingStatusEmoji[19]), { hasCustomProfileTheme: null != primaryColor, style: tmp8.customStatusBubble, emojiOnlyStyle: tmp8.emojiOnlyCustomStatusBubble, onPressTruncatedStatus: callback, previewEmoji: pendingStatusEmoji, previewText: pendingStatusText, placeholderText }), ];
  const obj7 = { user, themeType: constants.PREVIEW, pronouns: null, badges: null, badgeContainerBackground: null, showBadgeToastOnPress: false };
  let pronouns;
  const obj6 = { hasCustomProfileTheme: null != primaryColor, style: tmp8.customStatusBubble, emojiOnlyStyle: tmp8.emojiOnlyCustomStatusBubble, onPressTruncatedStatus: callback, previewEmoji: pendingStatusEmoji, previewText: pendingStatusText, placeholderText };
  const tmp14 = pendingStatusText(pendingStatusEmoji[18]);
  if (tmp3 != null) {
    pronouns = tmp3.pronouns;
  }
  const obj8 = { children: null };
  obj7.pronouns = pronouns;
  obj7.badges = tmp4;
  obj7.badgeContainerBackground = containerBackground;
  items5[1] = closure_7(pendingStatusText(pendingStatusEmoji[20]), obj7);
  obj4.children = items5;
  items3[1] = closure_8(tmp14, obj4);
  obj8.children = items3;
  items2[1] = closure_8(View, obj8);
  let profileEffect;
  if (tmp3 != null) {
    profileEffect = tmp3.profileEffect;
  }
  let tmp11Result = null != profileEffect;
  if (tmp11Result) {
    let skuId;
    if (tmp3 != null) {
      skuId = tmp3.profileEffect.skuId;
    }
    const obj9 = { skuId, style: tmp7.profileEffect };
    tmp11Result = closure_7(tmp(tmp2[21]), obj9);
    const tmpResult2 = tmp(tmp2[21]);
  }
  items2[2] = tmp11Result;
  obj3.children = items2;
  obj2.children = closure_8(View, obj3);
  return closure_7(user(pendingStatusEmoji[15]).ThemeContextProvider, obj2);
};