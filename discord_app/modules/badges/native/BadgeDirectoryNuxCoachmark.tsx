// discord_app/modules/badges/native/BadgeDirectoryNuxCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import BadgeArtImageDefault from "BadgeArtImage.tsx";
import GameTimeTier9LargeBadge from "../../../design/components/mana-assets/native/generated/GameTimeTier9LargeBadge.native.tsx";
import StreamingTier10LargeBadge from "../../../design/components/mana-assets/native/generated/StreamingTier10LargeBadge.native.tsx";
import GameDiversityTier8LargeBadge from "../../../design/components/mana-assets/native/generated/GameDiversityTier8LargeBadge.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function NoProgressGraphic() {
  const obj = { style: null, children: null };
  const items = [,];
  ({ graphicRow: arr[0], noProgressGraphicRow: arr[1] } = closure_9());
  obj.style = items;
  const items1 = [
    timestampProducer(GameTimeTier9LargeBadge.GameTimeTier9LargeBadge, { width: 40, height: 40 }),
    timestampProducer(StreamingTier10LargeBadge.StreamingTier10LargeBadge, { width: 50, height: 50 }),
    timestampProducer(GameDiversityTier8LargeBadge.GameDiversityTier8LargeBadge, { width: 40, height: 40 }),
  ];
  obj.children = items1;
  return React5(View, obj);
}
function ProgressGraphic(badgeIconUrls) {
  _require = undefined;
  const tmp = closure_9();
  const badgeDirectoryNuxGraphicLayout = require("BadgeDirectoryNuxGraphicUtils").getBadgeDirectoryNuxGraphicLayout(
    badgeIconUrls.badgeIconUrls,
  );
  if ("fallback" === badgeDirectoryNuxGraphicLayout.type) {
    const obj2 = { style: tmp.graphicRow, children: null };
    const items = [
      closure_6(tmp2(14934).GameDiversityTier9LargeBadge, { width: 42, height: 42 }),
      closure_6(tmp2(14938).GameDiversityTier10LargeBadge, { width: 60, height: 60 }),
      closure_6(tmp2(14930).GameDiversityTier8LargeBadge, { width: 42, height: 42 }),
    ];
    obj2.children = items;
    return closure_7(View, obj2);
  } else {
    _require = closure_8[badgeDirectoryNuxGraphicLayout.type];
    const obj3 = { style: tmp.graphicRow, children: null };
    const iconUrls = badgeDirectoryNuxGraphicLayout.iconUrls;
    obj3.children = iconUrls.map((url, index) =>
      timestampProducer(BadgeArtImageDefault, { url, height: closure_0[index] }, url),
    );
    return closure_6(View, obj3);
  }
  const obj = require("BadgeDirectoryNuxGraphicUtils");
}
const View = fn(17).View;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = { single: [60], pair: [48, 48], trio: [42, 60, 42] };
const createStyles = fn(5014);
let obj2 = {
  graphicRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    gap: nativeDefault.space.PX_8,
  },
  noProgressGraphicRow: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: 60,
  gap: nativeDefault.space.PX_8,
};
obj2.noProgressGraphicRow = { gap: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryNuxCoachmark.tsx");

export default function BadgeDirectoryNuxCoachmark(userId) {
  userId = userId.userId;
  const variantProps = userId.variantProps;
  const visible = userId.visible;
  const markAsDismissed = userId.markAsDismissed;
  const items = [variantProps, visible, markAsDismissed, userId];
  const memo = markAsDismissed.useMemo(() => {
    const targetUserId = tmp2;
    const intl = userId(visible[13]).intl;
    const string = intl.string;
    const t = userId(visible[13]).t;
    if ("progress" === variantProps.variant) {
      let stringResult = string(t.uwDBSq);
    } else {
      stringResult = string(t["5GD53o"]);
    }
    let obj = {
      title: stringResult,
      description: null,
      visible: null,
      position: "bottom",
      renderImgComponent: null,
      onDismiss: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null,
    };
    const intl2 = userId(visible[13]).intl;
    if ("progress" === variantProps.variant) {
      const obj2 = { count: variantProps.newBadgeCount };
      let formatToPlainStringResult = intl2.formatToPlainString(userId(visible[13]).t.Mk5nzZ, obj2);
    } else {
      formatToPlainStringResult = intl2.string(userId(visible[13]).t["2Rb7tE"]);
    }
    obj.description = formatToPlainStringResult;
    obj.visible = visible;
    obj.renderImgComponent = function renderImgComponent() {
      if (closure_0) {
        const obj = { badgeIconUrls: variantProps.badgeIconUrls };
        let tmpResult = timestampProducer(ProgressGraphic, obj);
      } else {
        tmpResult = timestampProducer(NoProgressGraphic, {});
      }
      return tmpResult;
    };
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    const intl3 = userId(visible[13]).intl;
    obj.buttonLabel = intl3.string(userId(visible[13]).t.pHo9tZ);
    obj.onButtonPress = function onButtonPress() {
      markAsDismissed(constants.TAKE_ACTION);
      const result = userId(visible[14]).openBadgeDirectoryScreen({ targetUserId });
    };
    return obj;
  }, items);
  const coachmark = userId(visible[15]).useCoachmark(userId.targetRef, memo);
  return null;
}
