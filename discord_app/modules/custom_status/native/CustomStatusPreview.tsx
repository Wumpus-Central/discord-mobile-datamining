// discord_app/modules/custom_status/native/CustomStatusPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(7208);
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty, UserProfileThemeTypes: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  let obj = {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    width: 323,
    maxHeight: 301,
    borderWidth: num,
    borderColor: null,
    borderRadius: null,
  };
  const colors = nativeDefault.colors;
  if (arg0) {
    let BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    let tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  obj = {
    profileContainer: null,
    profileEffect: null,
    borderColor: BACKGROUND_SURFACE_HIGH,
    borderRadius: tmp4(576).radii.lg,
  };
  const merged = Object.assign(tmp4(576).shadows.SHADOW_HIGH);
  obj.profileContainer = obj;
  obj.profileEffect = { zIndex: 1 };
  return obj;
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
  let obj = user(pendingStatusEmoji[10]);
  const userProfileColors = obj.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [user, pendingStatusText, pendingStatusEmoji];
  ({ gradientFallbackBackground, avatarBackground, containerBackground } = userProfileColors);
  const callback = noop.useCallback(() => {
    let obj = ChatInputUtils;
    obj.dismissKeyboard();
    obj = { user, previewText: pendingStatusText, previewEmoji: pendingStatusEmoji };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(11149, dependencyMap.paths),
      "UserProfileCustomStatusActionSheet",
      obj,
      "stack",
    );
  }, items);
  obj = { theme, primaryColor, secondaryColor, children: null };
  obj = { style: null, children: null };
  const items1 = [tmp7.profileContainer];
  obj.style = items1;
  const items2 = [
    closure_7(pendingStatusText(pendingStatusEmoji[16]), {
      user,
      displayProfile: tmp3,
      bannerHeight: 132,
      disableInteraction: true,
    }),
    ,
  ];
  const items3 = [
    closure_7(pendingStatusText(pendingStatusEmoji[17]), {
      user,
      backgroundColor: avatarBackground,
      disableStatus: true,
    }),
  ];
  const obj1 = {
    fallbackBackground: gradientFallbackBackground,
    primaryColor,
    secondaryColor: primaryColor,
    containerStyle: null,
    children: null,
  };
  const items4 = [, ,];
  ({ profileContentWrapper: arr5[0], profileContent: arr5[1] } = tmp8);
  let tmp15 = "" !== pendingStatusText;
  const tmp5 = pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp3 });
  if (!tmp15) {
    tmp15 = null !== pendingStatusEmoji;
  }
  if (!tmp15) {
    tmp15 = "" !== placeholderText;
  }
  let tmp16 = !tmp15;
  if (!tmp15) {
    const obj2 = { paddingTop };
    tmp16 = obj2;
  }
  items4[2] = tmp16;
  obj1.containerStyle = items4;
  const items5 = [
    closure_7(pendingStatusText(pendingStatusEmoji[19]), {
      hasCustomProfileTheme: null != primaryColor,
      style: tmp8.customStatusBubble,
      emojiOnlyStyle: tmp8.emojiOnlyCustomStatusBubble,
      onPressTruncatedStatus: callback,
      previewEmoji: pendingStatusEmoji,
      previewText: pendingStatusText,
      placeholderText,
    }),
  ];
  const obj4 = {
    user,
    themeType: constants.PREVIEW,
    pronouns: null,
    badges: null,
    badgeContainerBackground: null,
    showBadgeToastOnPress: false,
  };
  let pronouns;
  let tmpResult = tmp(tmp2[20]);
  if (tmp3 != null) {
    pronouns = tmp3.pronouns;
  }
  const obj5 = { children: null };
  obj4.pronouns = pronouns;
  obj4.badges = tmp4;
  obj4.badgeContainerBackground = containerBackground;
  items5[1] = closure_7(tmpResult, obj4);
  obj1.children = items5;
  items3[1] = closure_8(pendingStatusText(pendingStatusEmoji[18]), obj1);
  obj5.children = items3;
  items2[1] = closure_8(View, obj5);
  let profileEffect;
  if (tmp3 != null) {
    profileEffect = tmp3.profileEffect;
  }
  let tmp11Result = null != profileEffect;
  if (tmp11Result) {
    let skuId;
    tmpResult = tmp(tmp2[21]);
    if (tmp3 != null) {
      skuId = tmp3.profileEffect.skuId;
    }
    const obj6 = { skuId, style: tmp7.profileEffect };
    tmp11Result = tmp11(tmpResult, obj6);
  }
  items2[2] = tmp11Result;
  obj.children = items2;
  obj.children = closure_8(View, obj);
  return closure_7(user(pendingStatusEmoji[15]).ThemeContextProvider, obj);
}
