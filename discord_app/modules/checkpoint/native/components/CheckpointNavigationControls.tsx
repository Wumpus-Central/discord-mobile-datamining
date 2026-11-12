// discord_app/modules/checkpoint/native/components/CheckpointNavigationControls.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3269 from "../../Checkpoint2026.messages.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import CheckpointCardColors from "../../CheckpointCardColors.tsx";
import ArrowSmallRightIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallRightIcon.tsx";
import RetryIcon from "../../../../design/components/Icon/native/redesign/generated/RetryIcon.tsx";
import ShareIcon from "../../../../design/components/Icon/native/redesign/generated/ShareIcon.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import showNitroLockedToastDefault from "../showNitroLockedToast.tsx";
import useCheckpointPressSoundDefault from "../useCheckpointPressSound.tsx";
import _modDef14429 from "../../../../../discord_assets/assets/checkpoint/2026/sfx/next.mp3.js";
import CheckpointButton from "CheckpointButton.tsx";
import _modDef14431 from "../../../../../discord_assets/assets/checkpoint/2026/sfx/back.mp3.js";
import ArrowSmallLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallLeftIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import CheckpointStore from "../../CheckpointStore.tsx";

require = fn;
function HomeControls(onStart) {
  const tmp = closure_12();
  _require = tmp;
  let obj = { source: _modDef14429, onPress: onStart.onStart };
  const obj2 = { style: tmp.homeControls, children: null };
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj));
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: null, style: null, children: null };
  const intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(require("util").t.I0v0Qv);
  obj3.style = tmp.labelButton;
  items = [closure_9(require("PlayIcon").PlayIcon, { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.icon })];
  const obj5 = { variant: "mono-md/normal", style: null, children: null };
  const items1 = [,];
  ({ label: arr2[0], startLabel: arr2[1] } = tmp);
  obj5.style = items1;
  const obj4 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.icon };
  const tmp2Result = useCheckpointPressSoundDefault(obj);
  const intl2 = require("util").intl;
  obj5.children = intl2.string(require("util").t.I0v0Qv);
  items[1] = closure_9(CheckpointTextDefault, obj5);
  obj3.children = items;
  const items2 = [closure_10(require("CheckpointButton").CheckpointShadowButton, obj3)];
  const obj6 = { variant: "body-sm/medium", children: null };
  const intl3 = require("util").intl;
  obj6.children = intl3.format(_modDef3269.hcNhyq, {
    learnMoreHook(children, arg1) {
      return React6(
        CheckpointTextDefault,
        {
          variant: "body-sm/medium",
          style: link.link,
          onPress() {
            const obj = closure_1_1(5949);
            return obj.openURL(closure_1_1(2185).getArticleURL(constants.CHECKPOINT));
          },
          accessibilityRole: "link",
          children,
        },
        arg1,
      );
    },
  });
  items2[1] = closure_9(CheckpointTextDefault, obj6);
  obj2.children = items2;
  return closure_10(closure_5, obj2);
}
function BackButton(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let color = disabled.color;
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  const tmp = closure_12();
  if (flag) {
    color = obj.useToken("text-subtle");
  }
  const obj2 = { source: null, onPress: null, disabled: null };
  obj = useToken;
  obj2.source = _modDef14431;
  obj2.onPress = disabled.onPress;
  obj2.disabled = flag;
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj2));
  const obj3 = {
    onPressIn,
    onPress: onPressWithSound,
    accessibilityLabel: null,
    disabled: null,
    style: null,
    children: null,
  };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj3.disabled = flag;
  obj3.style = disabled.style;
  obj3.children = React6(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { size: "custom", color, style: tmp.icon });
  return React6(CheckpointButton.CheckpointButton, obj3);
}
function ReplayButton(arg0) {
  ({ onPress, color, style } = arg0);
  const obj = { source: null, onPress: null };
  const tmp = closure_12();
  obj.source = _modDef14429;
  obj.onPress = onPress;
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj));
  const obj2 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: null, style: null, children: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(_modDef3269.u40i9u);
  obj2.style = style;
  obj2.children = React6(RetryIcon.RetryIcon, { size: "custom", color, style: tmp.icon });
  return React6(CheckpointButton.CheckpointButton, obj2);
}
function NextButton(disabled) {
  disabled = disabled.disabled;
  ({ onPress, accessibilityHint } = disabled);
  const tmp = closure_12();
  let token = CHECKPOINT_PRIMARY;
  if (disabled) {
    token = obj.useToken("text-subtle");
  }
  const obj2 = { source: null, onPress: null, disabled: null };
  obj = useToken;
  obj2.source = _modDef14429;
  obj2.onPress = onPress;
  obj2.disabled = disabled;
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj2));
  const obj3 = {
    onPressIn,
    onPress: onPressWithSound,
    accessibilityLabel: null,
    accessibilityHint: null,
    disabled: null,
    style: null,
    children: null,
  };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.PDTjLN);
  obj3.accessibilityHint = accessibilityHint;
  obj3.disabled = disabled;
  obj3.style = tmp.iconButton;
  obj3.children = React6(ArrowSmallRightIcon.ArrowSmallRightIcon, { size: "custom", color: token, style: tmp.icon });
  return React6(CheckpointButton.CheckpointShadowButton, obj3);
}
function FinalizeCharacterSaveButton(blockedTrait) {
  ({ onSave: require, isSaving } = blockedTrait);
  blockedTrait = blockedTrait.blockedTrait;
  closure_3 = async function _handleSave() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const characterFromTraits = tmp4(6358).getCharacterFromTraits(CheckpointStore.selectedCharacterTraits);
            const obj3 = tmp4(6358);
            c1 = 1;
            dependencyMap = 1;
            const obj6 = { value: tmp4(14150).completeCheckpoint(characterFromTraits), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          if (value) {
            closure_128_0();
          } else {
            const intl = tmp4(1113).intl;
            tmp4(5951).presentError(intl.string(tmp4(1113).t.fEptJP));
            const obj = tmp4(5951);
          }
          dependencyMap = 3;
        }
      } catch (tmp20) {
        dependencyMap = tmp;
        throw tmp20;
      }
    }
  };
  const tmp = closure_12();
  let tmp2 = isSaving;
  if (!isSaving) {
    tmp2 = null != blockedTrait;
  }
  let token = CHECKPOINT_PRIMARY;
  if (tmp2) {
    token = obj.useToken("text-subtle");
  }
  let obj2 = { source: null, onPress: null, disabled: null };
  obj = require("useToken");
  obj2.source = isSaving(blockedTrait[25]);
  obj2.onPress = function handlePress() {
    if (!isSaving) {
      if (null != blockedTrait) {
        showNitroLockedToastDefault(tmp);
      } else {
        (function handleSave() {
          const self = this;
          const apply = closure_1_3.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    }
  };
  obj2.disabled = tmp2;
  const tmp7 = isSaving(blockedTrait[9]);
  ({ onPressIn, onPressWithSound } = isSaving(blockedTrait[9])(obj2));
  let obj3 = {
    onPressIn,
    onPress: onPressWithSound,
    accessibilityLabel: null,
    accessibilityHint: null,
    disabled: null,
    style: null,
    children: null,
  };
  let intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(require("util").t["R3BPH+"]);
  obj3.accessibilityHint = blockedTrait.accessibilityHint;
  obj3.disabled = tmp2;
  obj3.style = tmp.labelButton;
  const obj4 = { variant: "mono-md/normal", style: null, children: null };
  items = [tmp.label, { color: token }];
  obj4.style = items;
  const tmp7Result = isSaving(blockedTrait[9])(obj2);
  const intl2 = require("util").intl;
  obj4.children = intl2.string(require("util").t["R3BPH+"]);
  const items1 = [closure_9(isSaving(blockedTrait[14]), obj4)];
  if (isSaving) {
    let obj5 = { color: token };
    let tmp10Result = closure_9(closure_4, obj5);
  } else {
    let obj6 = { size: "custom", color: token, style: tmp.icon };
    tmp10Result = closure_9(require("ArrowSmallRightIcon").ArrowSmallRightIcon, obj6);
  }
  items1[1] = tmp10Result;
  obj3.children = items1;
  return closure_10(require("CheckpointButton").CheckpointShadowButton, obj3);
}
function SummaryControls(arg0) {
  ({ onBack, onReplay, onShare } = arg0);
  const tmp = closure_12();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => character.character);
  const obj2 = CheckpointCardColors;
  const cardColors = obj2.getCardColors(CheckpointCardColors.getCharacterCardColorPalette(stateFromStores));
  ({ primaryBackgroundColor, shadowColor } = cardColors);
  const token = useToken.useToken("text-overlay-dark");
  const items1 = [tmp.summaryControl, { borderColor: primaryBackgroundColor }];
  const obj5 = { children: null };
  const obj6 = { style: tmp.summaryActions, children: null };
  const items2 = [
    React6(BackButton, { onPress: onBack, color: primaryBackgroundColor, style: items1 }),
    React6(ReplayButton, { onPress: onReplay, color: primaryBackgroundColor, style: items1 }),
  ];
  obj6.children = items2;
  const items3 = [refs(hasOwnProperty, obj6)];
  const obj7 = { accessibilityLabel: null, onPress: null, shadowColor: null, style: null, children: null };
  const intl = util.intl;
  obj7.accessibilityLabel = intl.string(util.t.RDE0Sc);
  obj7.onPress = onShare;
  obj7.shadowColor = shadowColor;
  const items4 = [tmp.share, { backgroundColor: primaryBackgroundColor }];
  obj7.style = items4;
  const obj8 = { variant: "mono-md/bold", style: null, children: null };
  const items5 = [tmp.label, { color: token }];
  obj8.style = items5;
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.RDE0Sc);
  const items6 = [
    React6(CheckpointTextDefault, obj8),
    React6(ShareIcon.ShareIcon, { size: "custom", color: token, style: tmp.icon }),
  ];
  obj7.children = items6;
  items3[1] = refs(CheckpointButton.CheckpointShadowButton, obj7);
  obj5.children = items3;
  return refs(closure_1_11, obj5);
}
function RouteControls(arg0) {
  ({ activeRoute, onBack, onNext } = arg0);
  let checkpointRouteBlockedTrait;
  ({ onSave, onReplay, onShare } = arg0);
  const tmp2 = checkpointRouteBlockedTrait(14191)();
  checkpointRouteBlockedTrait = onNext(6681).getCheckpointRouteBlockedTrait(activeRoute, tmp2);
  if (null != checkpointRouteBlockedTrait) {
    const nitroLockedMessage = onNext(6681).getNitroLockedMessage(checkpointRouteBlockedTrait);
    const tmp3Result = onNext(6681);
  }
  const obj = onNext(6681);
  items = [CheckpointStore];
  const stateFromStores = onNext(504).useStateFromStores(items, () => isSaving.isSaving);
  if (onNext(6682).CheckpointRoute.HOME === activeRoute) {
    const obj2 = { onStart: onNext };
    return closure_9(HomeControls, obj2);
  } else if (onNext(6682).CheckpointRoute.FINALIZE_CHARACTER === activeRoute) {
    const obj3 = { children: null };
    const obj4 = { onPress: onBack, disabled: stateFromStores };
    const items1 = [closure_9(BackButton, obj4)];
    const obj5 = {
      onSave,
      isSaving: stateFromStores,
      blockedTrait: checkpointRouteBlockedTrait,
      accessibilityHint: nitroLockedMessage,
    };
    items1[1] = closure_9(FinalizeCharacterSaveButton, obj5);
    obj3.children = items1;
    return closure_10(closure_11, obj3);
  } else if (onNext(6682).CheckpointRoute.SUMMARY === activeRoute) {
    const obj6 = { onBack, onReplay, onShare };
    return closure_9(SummaryControls, obj6);
  } else {
    const obj7 = { children: null };
    const obj8 = { onPress: onBack };
    const items2 = [closure_9(BackButton, obj8)];
    const obj9 = {
      onPress: function handleNext() {
        if (null != checkpointRouteBlockedTrait) {
          showNitroLockedToastDefault(tmp);
        } else {
          onNext();
        }
      },
      accessibilityHint: nitroLockedMessage,
      disabled: null != checkpointRouteBlockedTrait,
    };
    items2[1] = closure_9(NextButton, obj9);
    obj7.children = items2;
    return closure_10(closure_11, obj7);
  }
  const tmp3Result2 = onNext(504);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CheckpointConstants = fn(6314);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  container: null,
  icon: null,
  iconButton: null,
  labelButton: null,
  homeControls: null,
  startLabel: null,
  link: null,
  summaryActions: null,
  summaryControl: null,
  share: null,
  label: null,
};
let rect = {
  position: "absolute",
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  bottom: nativeDefault.space.PX_16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.container = rect;
obj2.icon = { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE };
obj2.iconButton = { width: CheckpointConstants.CHECKPOINT_CONTROL_SIZE, paddingHorizontal: 0 };
obj2.labelButton = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.homeControls = { flex: 1, gap: nativeDefault.space.PX_24 };
obj2.startLabel = { color: CHECKPOINT_PRIMARY };
obj2.link = { textDecorationLine: "underline" };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_24 };
obj2.summaryActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.summaryControl = { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.share = { paddingHorizontal: nativeDefault.space.PX_40, borderColor: nativeDefault.colors.BLACK };
obj2.label = { textTransform: "uppercase", fontSize: 18, lineHeight: 24 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(arg0) {
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: null, children: null };
  items = [closure_12().container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj.style = items;
  const merged = Object.assign(arg0);
  obj.children = React6(RouteControls, {});
  return React6(hasOwnProperty, obj);
}
