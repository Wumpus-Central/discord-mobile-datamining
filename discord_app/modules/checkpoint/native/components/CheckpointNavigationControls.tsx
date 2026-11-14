// === Module 14486: CheckpointNavigationControls ===

// Module 14486 (CheckpointNavigationControls)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef3317 from "module_3317" /* 3317 */;
import useToken from "useToken" /* 5902 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6401 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 10920 */;
import RetryIcon from "RetryIcon" /* 11095 */;
import ShareIcon from "ShareIcon" /* 12289 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 14485 */;
import useCheckpointPressSoundDefault from "useCheckpointPressSound" /* 14487 */;
import _modDef14489 from "module_14489" /* 14489 */;
import CheckpointButton from "CheckpointButton" /* 14490 */;
import _modDef14492 from "module_14492" /* 14492 */;
import ArrowSmallLeftIcon from "ArrowSmallLeftIcon" /* 14493 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 14496 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;

require = fn;
function handleHomeControlsLayout(height) {
  state.setState({ height: height.nativeEvent.layout.height });
}
function HomeControls(onStart) {
  const tmp = closure_14();
  _require = tmp;
  const tmp4 = useIsCheckpointWideDefault();
  let obj = { source: _modDef14489, onPress: onStart.onStart };
  items = [tmp.homeControls, ];
  let wideHomeControls = tmp4;
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj));
  if (tmp4) {
    wideHomeControls = tmp.wideHomeControls;
  }
  const obj2 = { style: items, onLayout: handleHomeControlsLayout, children: null };
  items[1] = wideHomeControls;
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: null, style: null, children: null };
  const intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(require("util").t.I0v0Qv);
  const items1 = [tmp.labelButton, ];
  let wideStart = tmp4;
  if (tmp4) {
    wideStart = tmp.wideStart;
  }
  items1[1] = wideStart;
  obj3.style = items1;
  const items2 = [closure_9(require("PlayIcon").PlayIcon, { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.icon }), ];
  const obj5 = { variant: "mono-md/normal", style: null, children: null };
  const items3 = [, ];
  ({ label: arr4[0], primaryLabel: arr4[1] } = tmp);
  obj5.style = items3;
  const obj4 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.icon };
  const tmp5Result = useCheckpointPressSoundDefault(obj);
  const intl2 = tmp9(1113).intl;
  obj5.children = intl2.string(require("util").t.I0v0Qv);
  items2[1] = closure_9(CheckpointTextDefault, obj5);
  obj3.children = items2;
  const items4 = [closure_10(require("CheckpointButton").CheckpointShadowButton, obj3), ];
  let wideDisclaimer;
  const tmp2Result = CheckpointTextDefault;
  if (tmp4) {
    wideDisclaimer = tmp.wideDisclaimer;
  }
  const obj6 = { variant: "body-sm/medium", style: wideDisclaimer, children: null };
  const intl3 = tmp9(1113).intl;
  obj6.children = intl3.format(_modDef3317["SntY/v"], {
    learnMoreHook(children, arg1) {
      return React6(CheckpointTextDefault, {
        variant: "body-sm/medium",
        style: link.link,
        onPress() {
          const obj = closure_1_1(6012);
          return obj.openURL(closure_1_1(2188).getArticleURL(constants.CHECKPOINT));
        },
        accessibilityRole: "link",
        children
      }, arg1);
    }
  });
  items4[1] = closure_9(CheckpointTextDefault, obj6);
  obj2.children = items4;
  return closure_10(closure_5, obj2);
}
function BackButton(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let color = disabled.color;
  ({ hitSlop, style } = disabled);
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  const tmp = closure_14();
  if (flag) {
    color = obj.useToken("text-subtle");
  }
  const obj2 = { source: null, onPress: null, disabled: null };
  obj = useToken;
  obj2.source = _modDef14492;
  obj2.onPress = disabled.onPress;
  obj2.disabled = flag;
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj2));
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: null, disabled: null, hitSlop: null, style: null, children: null };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj3.disabled = flag;
  obj3.hitSlop = hitSlop;
  obj3.style = style;
  obj3.children = React6(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { size: "custom", color, style: tmp.icon });
  return React6(CheckpointButton.CheckpointButton, obj3);
}
function ReplayButton(arg0) {
  ({ onPress, color, style } = arg0);
  const obj = { source: null, onPress: null };
  const tmp = closure_14();
  obj.source = _modDef14489;
  obj.onPress = onPress;
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj));
  const obj2 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: null, style: null, children: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(_modDef3317.u40i9u);
  obj2.style = style;
  obj2.children = React6(RetryIcon.RetryIcon, { size: "custom", color, style: tmp.icon });
  return React6(CheckpointButton.CheckpointButton, obj2);
}
function NextButton(disabled) {
  disabled = disabled.disabled;
  ({ onPress, accessibilityHint } = disabled);
  const tmp = closure_14();
  let token = CHECKPOINT_PRIMARY;
  if (disabled) {
    token = obj.useToken("text-subtle");
  }
  const obj2 = { source: null, onPress: null, disabled: null };
  obj = useToken;
  obj2.source = _modDef14489;
  obj2.onPress = onPress;
  obj2.disabled = disabled;
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj2));
  const obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: null, accessibilityHint: null, disabled: null, style: null, children: null };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.PDTjLN);
  obj3.accessibilityHint = accessibilityHint;
  obj3.disabled = disabled;
  obj3.style = tmp.iconButton;
  obj3.children = React6(ArrowSmallRightIcon.ArrowSmallRightIcon, { size: "custom", color: token, style: tmp.icon });
  return React6(CheckpointButton.CheckpointShadowButton, obj3);
}
function DoneButton(onPress) {
  const tmp = closure_14();
  const obj = { source: _modDef14489, onPress: onPress.onPress };
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj));
  const obj2 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: null, style: null, children: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.i4jeWR);
  obj2.style = tmp.labelButton;
  const obj3 = { variant: "mono-md/normal", style: null, children: null };
  items = [, ];
  ({ label: arr[0], primaryLabel: arr[1] } = tmp);
  obj3.style = items;
  const tmp2Result = useCheckpointPressSoundDefault(obj);
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.i4jeWR);
  const items1 = [React6(CheckpointTextDefault, obj3), React6(ArrowSmallRightIcon.ArrowSmallRightIcon, { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.icon })];
  obj2.children = items1;
  return refs(CheckpointButton.CheckpointShadowButton, obj2);
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
            const characterFromTraits = tmp4(6421).getCharacterFromTraits(CheckpointStore.selectedCharacterTraits);
            const obj3 = tmp4(6421);
            c1 = 1;
            dependencyMap = 1;
            const obj6 = { value: tmp4(14260).completeCheckpoint(characterFromTraits), done: false };
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
            tmp4(6014).presentError(intl.string(tmp4(1113).t.fEptJP));
            const obj = tmp4(6014);
          }
          dependencyMap = 3;
        }
      } catch (tmp20) {
        dependencyMap = tmp;
        throw tmp20;
      }
    }
  };
  const tmp = closure_14();
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
  obj2.source = isSaving(blockedTrait[27]);
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
  const tmp7 = isSaving(blockedTrait[11]);
  ({ onPressIn, onPressWithSound } = isSaving(blockedTrait[11])(obj2));
  let obj3 = { onPressIn, onPress: onPressWithSound, accessibilityLabel: null, accessibilityHint: null, disabled: null, style: null, children: null };
  let intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(require("util").t["R3BPH+"]);
  obj3.accessibilityHint = blockedTrait.accessibilityHint;
  obj3.disabled = tmp2;
  obj3.style = tmp.labelButton;
  const obj4 = { variant: "mono-md/normal", style: null, children: null };
  items = [tmp.label, { color: token }];
  obj4.style = items;
  const tmp7Result = isSaving(blockedTrait[11])(obj2);
  const intl2 = require("util").intl;
  obj4.children = intl2.string(require("util").t["R3BPH+"]);
  const items1 = [closure_9(isSaving(blockedTrait[16]), obj4), ];
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
  const tmp = closure_14();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => character.character);
  const obj2 = CheckpointCardColors;
  const cardColors = obj2.getCardColors(CheckpointCardColors.getCharacterCardColorPalette(stateFromStores));
  ({ primaryBackgroundColor, shadowColor } = cardColors);
  const token = useToken.useToken("text-overlay-dark");
  const items1 = [tmp.summaryControl, { borderColor: primaryBackgroundColor }];
  const obj5 = { children: null };
  const obj6 = { style: tmp.summaryActions, children: null };
  const items2 = [React6(BackButton, { onPress: onBack, color: primaryBackgroundColor, style: items1 }), React6(ReplayButton, { onPress: onReplay, color: primaryBackgroundColor, style: items1 })];
  obj6.children = items2;
  const items3 = [refs(hasOwnProperty, obj6), ];
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
  const items6 = [React6(CheckpointTextDefault, obj8), React6(ShareIcon.ShareIcon, { size: "custom", color: token, style: tmp.icon })];
  obj7.children = items6;
  items3[1] = refs(CheckpointButton.CheckpointShadowButton, obj7);
  obj5.children = items3;
  return refs(closure_1_11, obj5);
}
function RouteControls(arg0) {
  ({ activeRoute, onBack, onNext } = arg0);
  let checkpointRouteBlockedTrait;
  ({ isLastRoute, onSave, onReplay, onShare } = arg0);
  const tmp = closure_14();
  const tmp4 = checkpointRouteBlockedTrait(14298)();
  checkpointRouteBlockedTrait = onNext(6744).getCheckpointRouteBlockedTrait(activeRoute, tmp4);
  if (null != checkpointRouteBlockedTrait) {
    const nitroLockedMessage = onNext(6744).getNitroLockedMessage(checkpointRouteBlockedTrait);
    const tmp5Result = onNext(6744);
  }
  const obj = onNext(6744);
  items = [CheckpointStore];
  const stateFromStores = onNext(504).useStateFromStores(items, () => isSaving.isSaving);
  if (onNext(6745).CheckpointRoute.HOME === activeRoute) {
    const obj2 = { onStart: onNext };
    return closure_9(HomeControls, obj2);
  } else if (onNext(6745).CheckpointRoute.FINALIZE_CHARACTER === activeRoute) {
    const obj3 = { children: null };
    const obj4 = { onPress: onBack, disabled: stateFromStores, hitSlop: tmp2(575).space.PX_4, style: tmp.noBorderBackButton };
    const items1 = [closure_9(BackButton, obj4), ];
    const obj5 = { onSave, isSaving: stateFromStores, blockedTrait: checkpointRouteBlockedTrait, accessibilityHint: nitroLockedMessage };
    items1[1] = closure_9(FinalizeCharacterSaveButton, obj5);
    obj3.children = items1;
    return closure_10(closure_11, obj3);
  } else if (onNext(6745).CheckpointRoute.SUMMARY === activeRoute) {
    const obj6 = { onBack, onReplay, onShare };
    return closure_9(SummaryControls, obj6);
  } else {
    const obj7 = { onPress: onBack, hitSlop: tmp2(575).space.PX_4, style: tmp.noBorderBackButton };
    const items2 = [closure_9(BackButton, obj7), ];
    if (isLastRoute) {
      const obj8 = { onPress: onNext };
      let tmp23Result = closure_9(DoneButton, obj8);
    } else {
      const obj9 = {
        onPress: function handleNext() {
              if (null != checkpointRouteBlockedTrait) {
                showNitroLockedToastDefault(tmp);
              } else {
                onNext();
              }
            },
        accessibilityHint: nitroLockedMessage,
        disabled: null != checkpointRouteBlockedTrait
      };
      tmp23Result = closure_9(NextButton, obj9);
    }
    const obj10 = { children: null };
    items2[1] = tmp23Result;
    obj10.children = items2;
    return closure_10(closure_11, obj10);
  }
  const tmp5Result2 = onNext(504);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CheckpointConstants = fn(6377);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_WIDE_HOME_START_GAP } = CheckpointConstants);
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const module_560 = fn(560);
const state = module_560.create(() => ({ height: 0 }));
const createStyles = fn(5306);
let obj3 = { container: null, icon: null, noBorderBackButton: null, iconButton: null, labelButton: null, homeControls: null, wideHomeControls: null, wideStart: null, wideDisclaimer: null, primaryLabel: null, link: null, summaryActions: null, summaryControl: null, share: null, label: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj3.container = rect;
obj3.icon = { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE };
obj3.noBorderBackButton = { marginLeft: -nativeDefault.space.PX_12 };
obj3.iconButton = { width: CHECKPOINT_CONTROL_SIZE, paddingHorizontal: 0 };
let obj4 = { marginLeft: -nativeDefault.space.PX_12 };
obj3.labelButton = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj3.homeControls = { flex: 1, gap: nativeDefault.space.PX_24 };
obj3.wideHomeControls = { alignItems: "center", gap: CHECKPOINT_WIDE_HOME_START_GAP };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_24 };
obj3.wideStart = { paddingHorizontal: nativeDefault.space.PX_64 };
obj3.wideDisclaimer = { maxWidth: 464, textAlign: "center" };
obj3.primaryLabel = { color: CHECKPOINT_PRIMARY };
obj3.link = { textDecorationLine: "underline" };
let obj7 = { paddingHorizontal: nativeDefault.space.PX_64 };
obj3.summaryActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj3.summaryControl = { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" };
let obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj3.share = { paddingHorizontal: nativeDefault.space.PX_40, borderColor: nativeDefault.colors.BLACK };
obj3.label = { textTransform: "uppercase", fontSize: 18, lineHeight: 24 };
let closure_14 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(arg0) {
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: null, children: null };
  items = [closure_14().container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj.style = items;
  const merged = Object.assign(arg0);
  obj.children = React6(RouteControls, {});
  return React6(hasOwnProperty, obj);
};
export function useCheckpointHomeControlsHeight() {
  return state((height) => height.height);
}