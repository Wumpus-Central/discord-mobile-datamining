// === Module 16993: ShopCoachmark ===

// Module 16993 (ShopCoachmark)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let markAsDismissed;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ image: { marginTop: 12 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let decorationAsset;
  let source;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  ({ source, decorationAsset } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== decorationAsset) {
    const obj2 = { asset: decorationAsset };
    cResult[0] = decorationAsset;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === source) {
    if (cResult[3] === tmp4.image) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
  }
  const Avatar = native.Avatar;
  const tmp7 = <Avatar style={tmp4.image} source={source} avatarDecoration={tmp5} size={native.AvatarSizes.XXLARGE} />;
  cResult[2] = source;
  cResult[3] = tmp4.image;
  cResult[4] = tmp5;
  cResult[5] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  let decorationAsset;
  let source;
  ({ source, decorationAsset } = arg0);
  const Avatar = native.Avatar;
  return <Avatar style={closure_6().image} source={source} avatarDecoration={{ asset: decorationAsset }} size={native.AvatarSizes.XXLARGE} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let avatarSrc;
  let buttonRef;
  let decorationAsset;
  let description;
  let navigateToShop;
  let renderImgComponent;
  let title;
  let tmp4;
  let visible;
  const obj = markAsDismissed(decorationAsset[5]);
  const cResult = obj.c(14);
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ visible, title, description, avatarSrc } = markAsDismissed);
  decorationAsset = markAsDismissed.decorationAsset;
  ({ navigateToShop, renderImgComponent, buttonRef } = markAsDismissed);
  if (cResult[0] !== markAsDismissed) {
    const fn = function n() {
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === avatarSrc) {
    if (cResult[3] === decorationAsset) {
      let tmp5;
      let tmp7;
      if (cResult[4] === renderImgComponent) {
        tmp5 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[7]).intl;
        const stringResult = intl.string(markAsDismissed(decorationAsset[7]).t.fYfGgK);
        cResult[6] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[6];
      }
      if (cResult[7] === description) {
        if (cResult[8] === navigateToShop) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp5) {
              if (cResult[11] === title) {
                let tmp9;
                if (cResult[12] === visible) {
                  tmp9 = cResult[13];
                }
                const tmpResult = markAsDismissed(decorationAsset[9]);
                const coachmark = tmpResult.useCoachmark(buttonRef, tmp9);
                return null;
              }
            }
          }
        }
      }
      const obj2 = { title, description, onDismiss: tmp4, visible, position: "top", offsetY: avatarSrc(decorationAsset[8]).space.PX_12, renderImgComponent: tmp5, buttonLabel: tmp7, buttonVariant: "primary", onButtonPress: navigateToShop };
      cResult[7] = description;
      cResult[8] = navigateToShop;
      cResult[9] = tmp4;
      cResult[10] = tmp5;
      cResult[11] = title;
      cResult[12] = visible;
      cResult[13] = obj2;
      tmp9 = obj2;
    }
  }
  let fn2 = renderImgComponent;
  if (renderImgComponent == null) {
    fn2 = () => <closure_7 source={avatarSrc} decorationAsset={decorationAsset} />;
  }
  cResult[2] = avatarSrc;
  cResult[3] = decorationAsset;
  cResult[4] = renderImgComponent;
  cResult[5] = fn2;
  tmp5 = fn2;
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const title = markAsDismissed.title;
  const description = markAsDismissed.description;
  const avatarSrc = markAsDismissed.avatarSrc;
  const decorationAsset = markAsDismissed.decorationAsset;
  const navigateToShop = markAsDismissed.navigateToShop;
  const renderImgComponent = markAsDismissed.renderImgComponent;
  const items = [avatarSrc, decorationAsset, description, renderImgComponent, markAsDismissed, title, visible, navigateToShop];
  const buttonRef = markAsDismissed.buttonRef;
  const memo = description.useMemo(() => {
    let fn;
    let intl;
    let source;
    let obj = {
      title,
      description,
      onDismiss() {
        markAsDismissed(avatarSrc.USER_DISMISS);
      },
      visible,
      position: "top",
      offsetY: nativeDefault.space.PX_12,
      renderImgComponent: fn,
      buttonLabel: intl.string(intl2.t.fYfGgK),
      buttonVariant: "primary",
      onButtonPress: navigateToShop
    };
    fn = renderImgComponent;
    if (renderImgComponent == null) {
      fn = () => {
        const obj = { source, decorationAsset };
        return decorationAsset(renderImgComponent, obj);
      };
    }
    intl = intl2.intl;
    return obj;
  }, items);
  let obj = markAsDismissed(title[9]);
  const coachmark = obj.useCoachmark(buttonRef, memo);
  return null;
});
const result = size.fileFinishedImporting("modules/collectibles/native/ShopCoachmark.tsx");

export default tmp2;