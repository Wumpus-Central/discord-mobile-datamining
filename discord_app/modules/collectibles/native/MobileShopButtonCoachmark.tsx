// discord_app/modules/collectibles/native/MobileShopButtonCoachmark.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let size;
let react = react_mod;
const Image = react_native.Image;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { image: size };
size = { height: 80, width: 80, marginTop: nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let image;
      let marketing;
      let navigateToShop;
      let onDismiss;
      let stringResult;
      let visible;
      const obj = navigateToShop(onDismiss[7]);
      const cResult = obj.c(22);
      ({ marketing, navigateToShop } = arg0);
      ({ visible, onDismiss } = arg0);
      const tmp4 = closure_6();
      react = tmp4;
      const assetLight = marketing.assetLight;
      const obj2 = react;
      let closure_4 = react.useRef(false);
      if (cResult[0] === navigateToShop) {
        let tmp5;
        let tmp11;
        if (cResult[1] === onDismiss) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== onDismiss) {
          class C {
            constructor() {
              closure_4.current = true;
              onDismiss(ContentDismissActionType.USER_DISMISS);
            }
          }
          cResult[3] = onDismiss;
          cResult[4] = C;
        } else {
          class C {
            constructor() {
              closure_4.current = true;
              onDismiss(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        let closure_5 = obj2.useRef(onDismiss);
        if (cResult[5] !== onDismiss) {
          class D {
            constructor() {
              closure_5.current = onDismiss;
            }
          }
          cResult[5] = onDismiss;
          cResult[6] = D;
        } else {
          class D {
            constructor() {
              closure_5.current = onDismiss;
            }
          }
        }
        const effect = obj2.useEffect(D);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              return () => {
                if (!ref.current) {
                  ref2.current(ref.AUTO_DISMISS);
                }
              };
            }
          }
          const items = [];
          cResult[7] = E;
          cResult[8] = items;
          tmp11 = items;
        } else {
          class E {
            constructor() {
              return () => {
                if (!ref.current) {
                  ref2.current(ref.AUTO_DISMISS);
                }
              };
            }
          }
          tmp11 = cResult[8];
        }
        const effect1 = obj2.useEffect(E, tmp11);
        if (cResult[9] === assetLight) {
          class E {
            constructor() {
              return () => {
                if (!ref.current) {
                  ref2.current(ref.AUTO_DISMISS);
                }
              };
            }
          }
          if (cResult[12] !== marketing.buttonLabel) {
            class E {
              constructor() {
                return () => {
                  if (!ref.current) {
                    ref2.current(ref.AUTO_DISMISS);
                  }
                };
              }
            }
            if (stringResult == null) {
              class E {
                constructor() {
                  return () => {
                    if (!ref.current) {
                      ref2.current(ref.AUTO_DISMISS);
                    }
                  };
                }
              }
              stringResult = obj3.string(navigateToShop(onDismiss[8]).t.fYfGgK);
            }
            cResult[12] = marketing.buttonLabel;
            cResult[13] = stringResult;
          } else {
            class E {
              constructor() {
                return () => {
                  if (!ref.current) {
                    ref2.current(ref.AUTO_DISMISS);
                  }
                };
              }
            }
          }
          if (cResult[14] === tmp5) {
            class E {
              constructor() {
                return () => {
                  if (!ref.current) {
                    ref2.current(ref.AUTO_DISMISS);
                  }
                };
              }
            }
          }
          const obj5 = {
            title: null,
            description: null,
            visible,
            position: "top",
            renderImgComponent: R,
            buttonLabel: tmp14,
            buttonVariant: "secondary",
            onButtonPress: tmp5,
            onDismiss: C,
          };
          ({ title: obj4.title, body: obj4.description } = marketing);
          class R {
            constructor() {
              return <Image style={image.image} source={{ uri: assetLight }} />;
            }
          }
          cResult[15] = C;
          cResult[16] = marketing.body;
          cResult[17] = marketing.title;
          cResult[18] = R;
          cResult[19] = tmp14;
          cResult[20] = visible;
          cResult[21] = obj5;
        }
        class R {
          constructor() {
            return <Image style={image.image} source={{ uri: assetLight }} />;
          }
        }
        cResult[9] = assetLight;
        cResult[10] = tmp4.image;
        cResult[11] = R;
      }
      const fn = function c() {
        closure_4.current = true;
        onDismiss(ContentDismissActionType.TAKE_ACTION);
        navigateToShop();
      };
      cResult[0] = navigateToShop;
      cResult[1] = onDismiss;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (marketing) => {
      marketing = marketing.marketing;
      const navigateToShop = marketing.navigateToShop;
      const visible = marketing.visible;
      const onDismiss = marketing.onDismiss;
      closure_6 = undefined;
      const shopButtonRef = marketing.shopButtonRef;
      const tmp = closure_6();
      let closure_4 = tmp;
      const assetLight = marketing.assetLight;
      closure_6 = visible.useRef(false);
      const items = [onDismiss, navigateToShop];
      const onButtonPress = visible.useCallback(() => {
        closure_6.current = true;
        onDismiss(ContentDismissActionType.TAKE_ACTION);
        navigateToShop();
      }, items);
      const items1 = [onDismiss];
      const callback1 = visible.useCallback(() => {
        closure_6.current = true;
        onDismiss(ContentDismissActionType.USER_DISMISS);
      }, items1);
      let closure_9 = visible.useRef(onDismiss);
      const effect = visible.useEffect(() => {
        closure_9.current = onDismiss;
      });
      const effect1 = visible.useEffect(() => {
        let ref;
        let ref2;
        return () => {
          if (!ref.current) {
            ref2.current(constants.AUTO_DISMISS);
          }
        };
      }, []);
      const items2 = [, , , , , , ,];
      ({ title: arr3[0], body: arr3[1], buttonLabel: arr3[2] } = marketing);
      items2[3] = visible;
      items2[4] = assetLight;
      items2[5] = tmp.image;
      items2[6] = onButtonPress;
      items2[7] = callback1;
      const memo = visible.useMemo(() => {
        let buttonLabel;
        let image;
        let uri;
        let obj = {
          title: marketing.title,
          description: marketing.body,
          visible,
          position: "top",
          renderImgComponent() {
            let obj2;
            const obj = { style: image.image, source: obj2 };
            obj2 = { uri };
            return assetLight(onDismiss, obj);
          },
          buttonLabel,
          buttonVariant: "secondary",
          onButtonPress,
          onDismiss: callback1,
        };
        buttonLabel = marketing.buttonLabel;
        if (buttonLabel == null) {
          const intl = intl2.intl;
          buttonLabel = intl.string(intl2.t.fYfGgK);
        }
        return obj;
      }, items2);
      let obj = marketing(navigateToShop[9]);
      const coachmark = obj.useCoachmark(shopButtonRef, memo);
      return null;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default tmp2;
