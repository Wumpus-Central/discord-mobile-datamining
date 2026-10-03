// discord_app/modules/collectibles/native/ShopCoachmark.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ image: { marginTop: 12 } });
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(6);
      ({ source, decorationAsset } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] !== decorationAsset) {
        const obj2 = { asset: decorationAsset };
        cResult[0] = decorationAsset;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === source) {
        if (cResult[3] === tmp4.image) {
          if (cResult[4] === tmp5) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
      const tmp7 = jsx(native.Avatar, {
        style: tmp4.image,
        source,
        avatarDecoration: tmp5,
        size: native.AvatarSizes.XXLARGE,
      });
      cResult[2] = source;
      cResult[3] = tmp4.image;
      cResult[4] = tmp5;
      cResult[5] = tmp7;
      tmp6 = tmp7;
      const obj3 = { style: tmp4.image, source, avatarDecoration: tmp5, size: native.AvatarSizes.XXLARGE };
    }
  : (arg0) => {
      ({ source, decorationAsset } = arg0);
      const tmp = closure_6();
      return jsx(native.Avatar, {
        style: closure_6().image,
        source,
        avatarDecoration: { asset: decorationAsset },
        size: native.AvatarSizes.XXLARGE,
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(decorationAsset[5]).c(14);
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
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === avatarSrc) {
        if (cResult[3] === decorationAsset) {
          if (cResult[4] === renderImgComponent) {
            let tmp5 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[7]).intl;
            const stringResult = intl.string(tmp(tmp2[7]).t.fYfGgK);
            cResult[6] = stringResult;
            let tmp7 = stringResult;
          } else {
            tmp7 = cResult[6];
          }
          if (cResult[7] === description) {
            if (cResult[8] === navigateToShop) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === tmp5) {
                  if (cResult[11] === title) {
                    if (cResult[12] === visible) {
                      let tmp9 = cResult[13];
                    }
                    const coachmark = tmp(tmp2[9]).useCoachmark(buttonRef, tmp9);
                    return null;
                  }
                }
              }
            }
          }
          const obj2 = {
            title,
            description,
            onDismiss: tmp4,
            visible,
            position: "top",
            offsetY: avatarSrc(tmp2[8]).space.PX_12,
            renderImgComponent: tmp5,
            buttonLabel: tmp7,
            buttonVariant: "primary",
            onButtonPress: navigateToShop,
          };
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
    }
  : (markAsDismissed) => {
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
      const coachmark = markAsDismissed(title[9]).useCoachmark(markAsDismissed.buttonRef, memo);
      return null;
    };
