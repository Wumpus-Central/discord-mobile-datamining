// discord_app/modules/badges/native/BadgeDirectoryNuxCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import BadgeArtImageDefault from "BadgeArtImage.tsx";
import _modDef15185 from "../../../../discord_assets/assets/mana/asset-library/generated/GameTimeTier9SmallBadge.svg.js";
import _modDef15186 from "../../../../discord_assets/assets/mana/asset-library/generated/StreamingTier10SmallBadge.svg.js";
import _modDef15187 from "../../../../discord_assets/assets/mana/asset-library/generated/GameDiversityTier8SmallBadge.svg.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
function NoProgressGraphic() {
  const obj = { style: null, children: null };
  items = [,];
  ({ graphicRow: arr[0], badgeGraphicRow: arr[1] } = closure_9());
  obj.style = items;
  const obj2 = { url: null, height: 44 };
  const tmp = closure_9();
  obj2.url = _modDef15185;
  const items1 = [timestampProducer(BadgeArtImageDefault, obj2), ,];
  const obj3 = { url: null, height: 72 };
  obj3.url = _modDef15186;
  items1[1] = timestampProducer(BadgeArtImageDefault, obj3);
  const obj4 = { url: null, height: 44 };
  obj4.url = _modDef15187;
  items1[2] = timestampProducer(BadgeArtImageDefault, obj4);
  obj.children = items1;
  return metroImportDefault(View, obj);
}
function ProgressGraphic(badgeIconUrls) {
  _require = undefined;
  const tmp = closure_9();
  const badgeDirectoryNuxGraphicLayout = require("BadgeDirectoryNuxGraphicUtils").getBadgeDirectoryNuxGraphicLayout(
    badgeIconUrls.badgeIconUrls,
  );
  if ("fallback" === badgeDirectoryNuxGraphicLayout.type) {
    const obj2 = { style: tmp.graphicRow, children: null };
    items = [
      closure_6(tmp2(15188).GameDiversityTier9LargeBadge, { width: 42, height: 42 }),
      closure_6(tmp2(15192).GameDiversityTier10LargeBadge, { width: 60, height: 60 }),
      closure_6(tmp2(15196).GameDiversityTier8LargeBadge, { width: 42, height: 42 }),
    ];
    obj2.children = items;
    return closure_7(View, obj2);
  } else {
    _require = closure_8[badgeDirectoryNuxGraphicLayout.type];
    const obj3 = { style: null, children: null };
    const items1 = [,];
    ({ graphicRow: arr[0], badgeGraphicRow: arr[1] } = tmp);
    obj3.style = items1;
    const iconUrls = badgeDirectoryNuxGraphicLayout.iconUrls;
    obj3.children = iconUrls.map((url, index) =>
      timestampProducer(BadgeArtImageDefault, { url, height: closure_0[index] }, url),
    );
    return closure_6(View, obj3);
  }
  const obj = require("BadgeDirectoryNuxGraphicUtils");
}
const View = fn(17).View;
const ContentDismissActionType = fn(4988).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = { single: [80], pair: [80, 80], trio: [44, 72, 44] };
const createStyles = fn(5142);
let obj2 = {
  graphicRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    gap: nativeDefault.space.PX_8,
  },
  badgeGraphicRow: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: 60,
  gap: nativeDefault.space.PX_8,
};
obj2.badgeGraphicRow = { height: "auto", gap: nativeDefault.space.PX_0 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryNuxCoachmark.tsx");

export default function BadgeDirectoryNuxCoachmark(userId) {
  userId = userId.userId;
  const variantProps = userId.variantProps;
  const visible = userId.visible;
  const markAsDismissed = userId.markAsDismissed;
  items = [variantProps, visible, markAsDismissed, userId];
  const memo = markAsDismissed.useMemo(() => {
    const targetUserId = tmp2;
    const intl = userId(visible[14]).intl;
    const string = intl.string;
    const t = userId(visible[14]).t;
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
    const intl2 = userId(visible[14]).intl;
    if ("progress" === variantProps.variant) {
      const obj2 = { count: variantProps.newBadgeCount };
      let formatToPlainStringResult = intl2.formatToPlainString(userId(visible[14]).t.Mk5nzZ, obj2);
    } else {
      formatToPlainStringResult = intl2.string(userId(visible[14]).t["2Rb7tE"]);
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
    const intl3 = userId(visible[14]).intl;
    obj.buttonLabel = intl3.string(userId(visible[14]).t.pHo9tZ);
    obj.onButtonPress = function onButtonPress() {
      markAsDismissed(constants.TAKE_ACTION);
      const result = userId(visible[15]).openBadgeDirectoryScreen({ targetUserId });
    };
    return obj;
  }, items);
  const coachmark = userId(visible[16]).useCoachmark(userId.targetRef, memo);
  return null;
}
