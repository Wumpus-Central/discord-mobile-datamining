// discord_app/modules/collectibles/native/MobileShopButtonCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
const obj2 = { image: null };
let size = { height: 80, width: 80, marginTop: nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_16 };
obj2.image = size;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MobileShopButtonCoachmark(arg0) {
      const cResult = navigateToShop(576).c(22);
      ({ marketing, navigateToShop } = arg0);
      ({ visible, onDismiss } = arg0);
      const tmp4 = closure_6();
      dependencyMap = tmp4;
      const assetLight = marketing.assetLight;
      closure_4 = assetLight.useRef(false);
      if (cResult[0] === navigateToShop) {
        if (cResult[1] === onDismiss) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] !== onDismiss) {
          class C {
            constructor() {
              closure_4.current = true;
              tmp = onDismiss(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          cResult[3] = onDismiss;
          cResult[4] = C;
        } else {
          class C {
            constructor() {
              closure_4.current = true;
              tmp = onDismiss(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        closure_5 = obj2.useRef(onDismiss);
        if (cResult[5] !== onDismiss) {
          class T {
            constructor() {
              closure_5.current = onDismiss;
              return;
            }
          }
          cResult[5] = onDismiss;
          cResult[6] = T;
        } else {
          class T {
            constructor() {
              closure_5.current = onDismiss;
              return;
            }
          }
        }
        const effect = obj2.useEffect(T);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              closure_5.current = onDismiss;
              return;
            }
          }
          const items = [];
          cResult[7] = tmp12;
          cResult[8] = items;
          let tmp11 = items;
        } else {
          class T {
            constructor() {
              closure_5.current = onDismiss;
              return;
            }
          }
          tmp11 = cResult[8];
        }
        const effect1 = obj2.useEffect(tmp12, tmp11);
        if (cResult[9] === assetLight) {
          class T {
            constructor() {
              closure_5.current = onDismiss;
              return;
            }
          }
          if (cResult[12] !== marketing.buttonLabel) {
            class T {
              constructor() {
                closure_5.current = onDismiss;
                return;
              }
            }
            if (stringResult == null) {
              class T {
                constructor() {
                  closure_5.current = onDismiss;
                  return;
                }
              }
              stringResult = obj3.string(navigateToShop(1126).t.fYfGgK);
            }
            cResult[12] = marketing.buttonLabel;
            cResult[13] = stringResult;
          } else {
            class T {
              constructor() {
                closure_5.current = onDismiss;
                return;
              }
            }
          }
          if (cResult[14] === tmp5) {
            class T {
              constructor() {
                closure_5.current = onDismiss;
                return;
              }
            }
          }
          const obj5 = {
            title: null,
            description: null,
            visible: null,
            position: "top",
            renderImgComponent: null,
            buttonLabel: null,
            buttonVariant: "secondary",
            onButtonPress: null,
            onDismiss: null,
          };
          ({ title: obj4.title, body: obj4.description } = marketing);
          obj5.visible = visible;
          obj5.renderImgComponent = E;
          obj5.buttonLabel = tmp15;
          obj5.onButtonPress = tmp5;
          obj5.onDismiss = C;
          class E {
            constructor() {
              obj = { style: closure_2.image, source: null };
              obj1 = { uri: assetLight };
              obj.source = obj1;
              return jsx(closure_1(closure_2[7]), obj);
            }
          }
          cResult[15] = C;
          cResult[16] = marketing.body;
          cResult[17] = marketing.title;
          cResult[18] = E;
          cResult[19] = tmp15;
          cResult[20] = visible;
          cResult[21] = obj5;
        }
        class E {
          constructor() {
            obj = { style: closure_2.image, source: null };
            obj1 = { uri: assetLight };
            obj.source = obj1;
            return jsx(closure_1(closure_2[7]), obj);
          }
        }
        cResult[9] = assetLight;
        cResult[10] = tmp4.image;
        cResult[11] = E;
      }
      const fn = function l() {
        closure_4.current = true;
        onDismiss(ContentDismissActionType.TAKE_ACTION);
        navigateToShop();
      };
      cResult[0] = navigateToShop;
      cResult[1] = onDismiss;
      cResult[2] = fn;
      tmp5 = fn;
      let obj = navigateToShop(576);
    }
  : function MobileShopButtonCoachmark(marketing) {
      marketing = marketing.marketing;
      const navigateToShop = marketing.navigateToShop;
      const visible = marketing.visible;
      const onDismiss = marketing.onDismiss;
      closure_6 = undefined;
      const tmp = closure_6();
      closure_4 = tmp;
      const assetLight = marketing.assetLight;
      closure_6 = onDismiss.useRef(false);
      const items = [onDismiss, navigateToShop];
      const onButtonPress = onDismiss.useCallback(() => {
        closure_6.current = true;
        onDismiss(ContentDismissActionType.TAKE_ACTION);
        navigateToShop();
      }, items);
      const items1 = [onDismiss];
      const callback1 = onDismiss.useCallback(() => {
        closure_6.current = true;
        onDismiss(ContentDismissActionType.USER_DISMISS);
      }, items1);
      closure_9 = onDismiss.useRef(onDismiss);
      const effect = onDismiss.useEffect(() => {
        closure_9.current = onDismiss;
      });
      const effect1 = onDismiss.useEffect(
        () => () => {
          if (!ref.current) {
            ref2.current(constants.AUTO_DISMISS);
          }
        },
        [],
      );
      const items2 = [, , , , , , ,];
      ({ title: arr3[0], body: arr3[1], buttonLabel: arr3[2] } = marketing);
      items2[3] = visible;
      items2[4] = assetLight;
      items2[5] = tmp.image;
      items2[6] = onButtonPress;
      items2[7] = callback1;
      const memo = onDismiss.useMemo(() => {
        let obj = {
          title: marketing.title,
          description: marketing.body,
          visible,
          position: "top",
          renderImgComponent() {
            const obj = { style: image.image, source: { uri } };
            return assetLight(navigateToShop(visible[7]), obj);
          },
          buttonLabel: null,
          buttonVariant: "secondary",
          onButtonPress: null,
          onDismiss: null,
        };
        let buttonLabel = marketing.buttonLabel;
        if (buttonLabel == null) {
          const intl = util.intl;
          buttonLabel = intl.string(util.t.fYfGgK);
        }
        obj.buttonLabel = buttonLabel;
        obj.onButtonPress = onButtonPress;
        obj.onDismiss = callback1;
        return obj;
      }, items2);
      const coachmark = marketing(visible[9]).useCoachmark(marketing.shopButtonRef, memo);
      return null;
    };
