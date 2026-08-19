// === Module 16008: CoachmarkImg ===

// Module 16008 (CoachmarkImg)
import Button from "Button" /* 1297 */;
import noop from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function CoachmarkImg(arg0) {
  ({ source, decorationAsset } = arg0);
  const tmp = callback();
  return jsx(Button.Avatar, { style: callback().image, source, avatarDecoration: { asset: decorationAsset }, size: Button.AvatarSizes.XXLARGE });
}
let closure_6 = createCacheKey.createStyles({ image: { marginTop: 12 } });
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/ShopCoachmark.tsx");

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
        callback(avatarSrc.USER_DISMISS);
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
      fn = () => decorationAsset(renderImgComponent, { source: closure_4, decorationAsset: closure_5 });
    }
    obj[6] = fn;
    const intl = markAsDismissed(title[6]).intl;
    obj[7] = intl.string(markAsDismissed(title[6]).t.fYfGgK);
    obj[9] = navigateToShop;
    return obj;
  }, items);
  const coachmark = markAsDismissed(title[7]).useCoachmark(markAsDismissed.buttonRef, memo);
  return null;
};