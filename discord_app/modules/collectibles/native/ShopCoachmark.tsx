// discord_app/modules/collectibles/native/ShopCoachmark.tsx
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../design/void/native.tsx";

const require = arg1;
function CoachmarkImg(arg0) {
  let decorationAsset;
  let source;
  ({ source, decorationAsset } = arg0);
  const obj = { style: callback().image, source, avatarDecoration: { asset: decorationAsset }, size: null };
  obj[3] = Button.AvatarSizes.XXLARGE;
  return jsx(Button.Avatar, { style: callback().image, source, avatarDecoration: { asset: decorationAsset }, size: null });
}
let closure_6 = createCacheKey.createStyles({ image: { marginTop: 12 } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/ShopCoachmark.tsx");

export default function ShopCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const title = markAsDismissed.title;
  const description = markAsDismissed.description;
  const avatarSrc = markAsDismissed.avatarSrc;
  const decorationAsset = markAsDismissed.decorationAsset;
  const navigateToShop = markAsDismissed.navigateToShop;
  const renderImgComponent = markAsDismissed.renderImgComponent;
  const items = [avatarSrc, decorationAsset, description, renderImgComponent, markAsDismissed, title, visible, navigateToShop];
  const memo = description.useMemo(() => {
    const obj = {
      title,
      description,
      onDismiss() {
        callback(outer1_4.USER_DISMISS);
      },
      visible,
      position: "top",
      offsetY: visible(title[5]).space.PX_12,
      renderImgComponent: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null
    };
    let fn = renderImgComponent;
    if (renderImgComponent == null) {
      fn = () => outer1_5(outer1_7, { source: closure_4, decorationAsset: closure_5 });
    }
    obj[6] = fn;
    const intl = markAsDismissed(tmp[6]).intl;
    obj[7] = intl.string(markAsDismissed(title[6]).t.fYfGgK);
    obj[9] = navigateToShop;
    return obj;
  }, items);
  const coachmark = markAsDismissed(title[7]).useCoachmark(markAsDismissed.buttonRef, memo);
  return null;
};