// discord_app/modules/collectibles/native/ShopCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function CoachmarkImg(arg0) {
  ({ source, decorationAsset } = arg0);
  const tmp = closure_6();
  return jsx(native.Avatar, {
    style: closure_6().image,
    source,
    avatarDecoration: { asset: decorationAsset },
    size: native.AvatarSizes.XXLARGE,
  });
}
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ image: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopCoachmark.tsx");

export default function ShopCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const title = markAsDismissed.title;
  const description = markAsDismissed.description;
  const avatarSrc = markAsDismissed.avatarSrc;
  const decorationAsset = markAsDismissed.decorationAsset;
  const navigateToShop = markAsDismissed.navigateToShop;
  const renderImgComponent = markAsDismissed.renderImgComponent;
  const items = [
    avatarSrc,
    decorationAsset,
    description,
    renderImgComponent,
    markAsDismissed,
    title,
    visible,
    navigateToShop,
  ];
  const memo = description.useMemo(() => {
    const obj = {
      title,
      description,
      onDismiss() {
        markAsDismissed(avatarSrc.USER_DISMISS);
      },
      visible,
      position: "top",
      offsetY: nativeDefault.space.PX_12,
      renderImgComponent: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null,
    };
    let fn = renderImgComponent;
    if (renderImgComponent == null) {
      fn = () => decorationAsset(renderImgComponent, { source, decorationAsset });
    }
    obj.renderImgComponent = fn;
    const intl = util.intl;
    obj.buttonLabel = intl.string(util.t.fYfGgK);
    obj.onButtonPress = navigateToShop;
    return obj;
  }, items);
  const coachmark = markAsDismissed(title[7]).useCoachmark(markAsDismissed.buttonRef, memo);
  return null;
}
